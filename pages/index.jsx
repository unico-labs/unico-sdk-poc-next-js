import { useEffect, useRef, useState } from 'react'



const Home = () => {
  const [preparedCamera, setPreparedCamera] = useState({});
  const [showBoxCamera, setShowBoxCamera] = useState(false);
  const [loading, setLoading] = useState(false);

  const unicoThemeRef = useRef();
  const unicoBuilderRef = useRef();

  const selfieTypeRef = useRef();
  const documentTypeRef = useRef();

  function resetComponentStates() {
    setPreparedCamera({});
    setShowBoxCamera(false);
    setLoading(false);
  }

  const sdkCallbacks = {
    on: {
      success: function (obj) {
        console.log(obj);
        resetComponentStates();
      },
      error: function (error) {
        window.console.log(error);
        window.alert(`
            Câmera fechada
            ------------------------------------
            Motivo: ${error.code} - ${error.message} ${JSON.stringify(error.stack)}
        `);
        resetComponentStates();
      },
    }
  };

  const prepareSelfieCamera = async (
    jsonPath,
    cameraType,
    cameraName,
    isUnicoCamera,
  ) => {
    setLoading(true);

    try {
      if (!unicoBuilderRef.current || !cameraType) {
        return;
      }

      const { open } = await unicoBuilderRef.current.prepareSelfieCamera(
        jsonPath,
        cameraType
      );

      setPreparedCamera({
        openCamera: open,
        isCameraReady: true,
        cameraName,
        isUnicoCamera,
      });
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const prepareDocumentCamera = async (
    jsonPath,
    cameraType,
    cameraName,
    isUnicoCamera,
  ) => {
    setLoading(true);

    try {
      if (!unicoBuilderRef.current || !cameraType) {
        return;
      }

      const { open } = await unicoBuilderRef.current.prepareDocumentCamera(
        jsonPath,
        cameraType
      );

      setPreparedCamera({
        openCamera: open,
        isCameraReady: true,
        cameraName,
        isUnicoCamera,
      });
    } catch (error) {
      alert(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      const SDK = await import('unico-webframe');

      unicoThemeRef.current = new SDK.UnicoThemeBuilder()
        .setColorSilhouetteSuccess("#d98888")
        .setColorSilhouetteError("#D50000")
        .setColorSilhouetteNeutral("#432424")
        .setBackgroundColor("#b91515")
        .setColorText("#df5959")
        .setBackgroundColorComponents("#e16060")
        .setColorTextComponents("#dff1f5")
        .setBackgroundColorButtons("#e55d5d")
        .setColorTextButtons("#dff1f5")
        .setBackgroundColorBoxMessage("#fff")
        .setColorTextBoxMessage("#ea7474")
        .setHtmlPopupLoading(`<div style="position: absolute; top: 45%; right: 50%; transform: translate(50%, -50%); z-index: 10; text-align: center;">Carregandooooo...</div>`)
        .build();

      unicoBuilderRef.current = new SDK.UnicoCheckBuilder()
        .setTheme(unicoThemeRef.current)
        .setModelsPath('http://localhost:3000/models')
        .setResourceDirectory("/resources")
        .build();

      selfieTypeRef.current = SDK.SelfieCameraTypes;
      documentTypeRef.current = SDK.DocumentCameraTypes
    })()
  }, []);

  return (
    <>
      <div
        style={{
          display: showBoxCamera ? 'inline' : 'none'
        }}
      >
        <div id="box-camera">
        </div>
      </div>

      {!showBoxCamera && (
        <div className='main-container'>
          <main>
            <button
              type="button"
              onClick={() => {
                prepareSelfieCamera(
                  '/services.json',
                  selfieTypeRef.current.NORMAL,
                  'Facetec Liveness',
                  false
                )
              }}
            >
              PrepareCamera Facetec
            </button>

            <button
              type="button"
              onClick={() => {
                prepareSelfieCamera(
                  '/services-sem-facetec.json',
                  selfieTypeRef.current.SMART,
                  'Unico Smart',
                  true
                )
              }}
            >
              PrepareCamera Smart
            </button>

            <button
              type="button"
              onClick={() => {
                prepareSelfieCamera(
                  '/services-sem-facetec.json',
                  selfieTypeRef.current.NORMAL,
                  'Unico Normal',
                  true
                )
              }}
            >
              PrepareCamera Normal
            </button>

            <button
              type="button"
              onClick={() => {
                prepareDocumentCamera(
                  '/services-sem-facetec.json',
                  documentTypeRef.current.RG_FRENTE,
                  'RG Frente',
                  true
                )
              }}
            >
              PrepareDocumentCamera RG Frente
            </button>

            <button
              type="button"
              onClick={() => {
                prepareDocumentCamera(
                  '/services-sem-facetec.json',
                  documentTypeRef.current.RG_VERSO,
                  'RG Verso',
                  true
                )
              }}
            >
              PrepareDocumentCamera RG Verso
            </button>

            <button
              type="button"
              onClick={() => {
                if (preparedCamera.isUnicoCamera) {
                  setShowBoxCamera(true);
                }

                preparedCamera.openCamera(sdkCallbacks);
              }}
              disabled={!preparedCamera.isCameraReady || loading}
              style={{
                opacity: preparedCamera.isCameraReady && !loading ? 1 : 0.6,
                cursor: preparedCamera.isCameraReady && !loading ? 'pointer' : 'no-drop',
              }}
            >
              {loading ? (
                '...'
              ) : (
                `OpenCamera ${preparedCamera.cameraName || ''}`
              )}
            </button>
          </main>
        </div>
      )}
    </>
  );
}

export default Home