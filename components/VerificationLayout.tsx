"use client";

import { Camera, Shield, ShieldCheck, FileText, UserCheck } from "lucide-react";
import CameraCapture from "./CameraCapture";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VerificationLayout() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            
            <svg width="150" height="56" viewBox="0 0 260 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M73.4535 6.21792V1.74334C73.4535 0.774818 72.6787 0 71.7102 0H64.7175C63.7489 0 62.9741 0.774818 62.9741 1.74334V28.2421C62.9741 19.3898 67.0613 11.4092 73.4535 6.21792Z" fill="#FF1A5C" />
              <path d="M47.2251 0C46.2566 0 45.4818 0.774818 45.4818 1.74334V27.9709C45.4818 37.6755 37.5399 45.5593 27.8159 45.4625C18.1889 45.3656 10.4988 37.385 10.4988 27.7579V1.74334C10.4988 0.774818 9.72401 0 8.75549 0H1.74334C0.774818 0 0 0.774818 0 1.74334V27.6998C0 43.1768 12.4359 55.9031 27.9128 55.9613C43.3898 56 55.9806 43.4286 55.9806 27.9709V1.74334C55.9806 0.774818 55.2058 0 54.2373 0H47.2251Z" fill="url(#paint0_linear_4_878)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M231.748 55.9806C216.31 55.9806 203.758 43.4286 203.758 27.9903C203.758 12.5521 216.31 0 231.748 0C247.186 0 259.738 12.5521 259.738 27.9903C259.738 43.4286 247.186 55.9806 231.748 55.9806ZM231.748 10.4988C222.102 10.4988 214.257 18.3438 214.257 27.9903C214.257 37.6368 222.102 45.4818 231.748 45.4818C241.395 45.4818 249.24 37.6368 249.24 27.9903C249.24 18.3438 241.395 10.4988 231.748 10.4988Z" fill="url(#paint1_linear_4_878)" />
              <path d="M170.499 45.5206C176.949 45.5206 182.586 42.0339 185.646 36.8232C185.976 36.2615 186.576 35.9128 187.254 35.9128H195.584C196.494 35.9128 197.114 36.8232 196.804 37.6755C192.872 48.368 182.586 56 170.557 56C154.847 56 142.14 43.0024 142.586 27.2155C142.993 12.5521 154.847 0.600479 169.53 0.0774866C181.985 -0.348654 192.717 7.38015 196.784 18.3438C197.114 19.2155 196.475 20.1453 195.545 20.1453H187.332C186.615 20.1453 185.956 19.7772 185.588 19.1574C182.547 14.0049 176.93 10.5569 170.537 10.5569C160.658 10.5569 152.678 18.77 153.065 28.7264C153.433 38.0436 161.162 45.5012 170.499 45.5206Z" fill="url(#paint2_linear_4_878)" />
              <path d="M90.8667 0H90.9443C106.383 0 118.935 12.5521 118.935 27.9903V54.2179C118.935 55.1864 118.16 55.9613 117.191 55.9613H110.16C109.191 55.9613 108.416 55.1864 108.416 54.2179V28.2034C108.416 18.5763 100.726 10.5956 91.0992 10.4988C81.3752 10.4019 73.4333 18.2857 73.4333 27.9903V54.2179C73.4333 55.1864 72.6585 55.9613 71.69 55.9613H64.5812C63.8257 55.9031 63.2058 55.3608 63.0121 54.6634C62.9733 54.5278 62.954 54.3729 62.954 54.2179V28.2615C62.954 19.3898 67.0411 11.4092 73.4528 6.21791C78.2179 2.34382 84.2615 0.0193657 90.8667 0Z" fill="url(#paint3_linear_4_878)" />
              <path d="M127.69 0C126.722 0 125.947 0.774818 125.947 1.74334V54.2179C125.947 55.1864 126.722 55.9613 127.69 55.9613H134.683C135.651 55.9613 136.426 55.1864 136.426 54.2179V1.74334C136.426 0.774818 135.651 0 134.683 0H127.69Z" fill="url(#paint4_linear_4_878)" />
              <defs>
                <linearGradient id="paint0_linear_4_878" x1="-0.237974" y1="28.0318" x2="260.381" y2="28.0318" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A5FF" />
                  <stop offset="1" stop-color="#FF1A5C" />
                </linearGradient>
                <linearGradient id="paint1_linear_4_878" x1="-0.237974" y1="28.0318" x2="260.381" y2="28.0318" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A5FF" />
                  <stop offset="1" stop-color="#FF1A5C" />
                </linearGradient>
                <linearGradient id="paint2_linear_4_878" x1="-0.237974" y1="28.0318" x2="260.381" y2="28.0318" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A5FF" />
                  <stop offset="1" stop-color="#FF1A5C" />
                </linearGradient>
                <linearGradient id="paint3_linear_4_878" x1="-0.237974" y1="28.0318" x2="260.381" y2="28.0318" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A5FF" />
                  <stop offset="1" stop-color="#FF1A5C" />
                </linearGradient>
                <linearGradient id="paint4_linear_4_878" x1="-0.237974" y1="28.0318" x2="260.381" y2="28.0318" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00A5FF" />
                  <stop offset="1" stop-color="#FF1A5C" />
                </linearGradient>
              </defs>
            </svg>

          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        {showCamera ? (
          <CameraCapture onClose={() => setShowCamera(false)} />
        ) : (
          <div className="w-full pt-0 pb-60">
            <div className="mx-auto text-center mb-8 md:mb-12 max-w-[800px] px-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                POC SDK Unico Next.js
              </h2>
              <p className="text-muted-foreground">
                A secure and efficient way to verify identities through selfie and document capture.
                Our technology ensures the highest standard of verification with minimal friction.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 px-4 max-w-[1200px] mx-auto mb-10">
              <FeatureCard
                icon={<Camera className="h-6 w-6" />}
                title="Liveness Selfie Capture"
                description="Ensure the person is physically present with sophisticated liveness checks"
              />
              <FeatureCard
                icon={<FileText className="h-6 w-6" />}
                title="Document Verification"
                description="Quick and accurate document scanning for RG and other identity documents"
              />
              <FeatureCard
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Secure Processing"
                description="All data is encrypted and processed following the highest security standards."
              />
            </div>

            <div className="flex justify-center px-4">
              <Button
                size="lg"
                className="animate-pulse"
                onClick={() => setShowCamera(true)}
              >
                <UserCheck className="mr-2 h-5 w-5" />
                Start Verification Process
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}