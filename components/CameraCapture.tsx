"use client";

import { useEffect, useRef, useState } from 'react';
import { Camera, FileText, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CameraCaptureProps {
  onClose: () => void;
}

export default function CameraCapture({ onClose }: CameraCaptureProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const unicoConfigRef = useRef<any>();
  const unicoCameraRef = useRef<any>();
  const documentTypesRef = useRef<any>();
  const selfieTypesRef = useRef<any>();

  const callback = {
    on: {
      success: function(obj: any) {
        console.log("Success capturing image", obj);
        setError(null);
        setLoading(false);
      },
      error: function(error: any) {
        console.error("unico-webframe error:", {
          code: error?.code,
          message: error?.message,
          fullError: error
        });
        setError(
          `Capture error: ${error?.message || 'Unknown error occurred'}. Check console for details.`
        );
        setLoading(false);
        setTimeout(() => setError(null), 5000);
      },
      user_canceled: function() {
        console.log("Capture canceled by user.");
        setLoading(false);
      }
    }
  };

  // Functions to open different camera modes
  const openSelfieCameraLiveness = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareSelfieCamera(unicoConfigRef.current, selfieTypesRef.current.LIVENESS)
      .catch(() => console.error('Error initializing liveness camera'));

    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraCNH = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.CNH)
      .catch(() => console.error('Error initializing CNH camera'));

    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraCPF = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.CPF)
      .catch(() => console.error('Error initializing CPF camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraCNHFrente = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.CNH_FRENTE)
      .catch(() => console.error('Error initializing CNH Frente camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraCNHVerso = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.CNH_VERSO)
      .catch(() => console.error('Error initializing CNH Verso camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraRGFrente = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.RG_FRENTE)
      .catch(() => console.error('Error initializing RG Frente camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraRGVerso = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.RG_VERSO)
      .catch(() => console.error('Error initializing RG Verso camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraRGFrenteNovo = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.RG_FRENTE_NOVO)
      .catch(() => console.error('Error initializing RG Frente Novo camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraRGVersoNovo = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.RG_VERSO_NOVO)
      .catch(() => console.error('Error initializing RG Verso Novo camera'));
    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  const openDocumentCameraOutros = async () => {
    const cameraPromised = unicoCameraRef.current
      .prepareDocumentCamera(unicoConfigRef.current, documentTypesRef.current.OTHERS("Generic Document"))
      .catch(() => console.error('Error initializing other documents camera'));

    cameraPromised.then((cameraOpener: any) => {
      setLoading(false);
      cameraOpener.open(callback);
    });
  };

  // Maps camera types to their respective functions
  const cameraHandlers: Record<string, () => Promise<void>> = {
    liveness: openSelfieCameraLiveness,
    cnh: openDocumentCameraCNH,
    cpf: openDocumentCameraCPF,
    cnh_frente: openDocumentCameraCNHFrente,
    cnh_verso: openDocumentCameraCNHVerso,
    rg_frente: openDocumentCameraRGFrente,
    rg_verso: openDocumentCameraRGVerso,
    rg_frente_novo: openDocumentCameraRGFrenteNovo,
    rg_verso_novo: openDocumentCameraRGVersoNovo,
    others: openDocumentCameraOutros,
  };

  // Generic function to open any type of camera with error handling
  const openCamera = async (cameraType: string) => {
    console.log(`Attempting to open camera: ${cameraType}`);
    setLoading(true);
    setError(null);

    try {
      const handler = cameraHandlers[cameraType];
      if (!handler) throw new Error(`Invalid camera type specified: ${cameraType}`);

      await handler();
    } catch (errorCatch) {
      console.error(`Error PREPARING ${cameraType} camera:`, errorCatch);
      const errorMessage = errorCatch instanceof Error ? errorCatch.message : String(errorCatch);
      setError(`Failed to initialize camera (${cameraType}). ${errorMessage}. Please check permissions and try again.`);
      setLoading(false);
      setTimeout(() => setError(null), 7000);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initializeSDK = async () => {
      try {
        const SDK = await import('unico-webframe');

        if (!isMounted) return;

        unicoConfigRef.current = new SDK.UnicoConfig()
        
          .setHostname("<YOUR_HOSTNAME>")
          .setHostKey("<YOUR_SDKKEY>");

        unicoCameraRef.current = new SDK.UnicoCheckBuilder()
          .setResourceDirectory("/resources")
          .setModelsPath("/models")
          .setEnvironment(SDK.SDKEnvironmentTypes.UAT)
          .build();

        selfieTypesRef.current = SDK.SelfieCameraTypes;
        documentTypesRef.current = SDK.DocumentCameraTypes;

      } catch (error) {
        console.error("Failed to initialize Unico SDK:", error);
        setError("Failed to initialize camera SDK");
      }
    };

    initializeSDK();
    
    return () => {
      isMounted = false;
    };
  }, []);

  // List of options for biometric capture
  const features = [
    {
      title: 'Liveness Camera',
      description: 'Enhanced selfie capture with intelligent framing',
      type: 'liveness',
      icon: Camera
    }
  ];

  // List of options for document capture
  const documentFeatures = [
    {
      title: 'CNH Aberta',
      description: 'Capture Brazilian driver\'s license (CNH)',
      type: 'cnh',
      icon: FileText
    },
    {
      title: 'CNH Frente',
      description: 'Capture front side of CNH',
      type: 'cnh_frente',
      icon: FileText
    },
    {
      title: 'CNH Verso',
      description: 'Capture back side of CNH',
      type: 'cnh_verso',
      icon: FileText
    },
    {
      title: 'RG Frente',
      description: 'Capture front side of RG',
      type: 'rg_frente',
      icon: FileText
    },
    {
      title: 'RG Verso',
      description: 'Capture back side of RG',
      type: 'rg_verso',
      icon: FileText
    },
    {
      title: 'RG Frente Novo',
      description: 'Capture new RG front side',
      type: 'rg_frente_novo',
      icon: FileText
    },
    {
      title: 'RG Verso Novo',
      description: 'Capture new RG back side',
      type: 'rg_verso_novo',
      icon: FileText
    },
    {
      title: 'CPF',
      description: 'Capture CPF',
      type: 'cpf',
      icon: FileText
    },
    {
      title: 'Outros Documentos',
      description: 'Capture other types of identification documents',
      type: 'others',
      icon: FileText
    }
  ];

  return (
    <div className="w-full p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Identity Verification</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <span className="sr-only">Close</span>
          ×
        </Button>
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md mb-6 flex items-center" role="alert">
          <span className="font-medium">Error:</span>&nbsp;{error}
        </div>
      )}

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Camera className="w-5 h-5 mr-2" />
            Selfie Capture
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center space-y-2 w-full"
                onClick={() => openCamera(feature.type)}
                disabled={loading}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-medium">{feature.title}</span>
                <span className="text-sm text-muted-foreground">{feature.description}</span>
              </Button>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Document Capture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentFeatures.map((feature, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center space-y-2 w-full"
                onClick={() => openCamera(feature.type)}
                disabled={loading}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6" />
                </div>
                <span className="font-medium">{feature.title}</span>
                <span className="text-sm text-muted-foreground">{feature.description}</span>
              </Button>
            ))}
          </div>
        </section>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg shadow-lg text-center">
            <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4" />
            <p className="text-card-foreground">Initializing camera...</p>
          </div>
        </div>
      )}

      <div id="box-camera"></div>
    </div>
  );
}