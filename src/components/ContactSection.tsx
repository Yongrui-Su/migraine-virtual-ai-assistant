
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactSection = () => {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Get Personalized Help</h2>
          <div className="mb-8 space-y-4">
            <p className="text-lg">
              Connect with our medical professionals or try our AI-powered
              Virtual Migraine Assistant.
            </p>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="mb-4 text-xl font-semibold">
                Virtual Migraine Assistant
              </h3>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center justify-center gap-2">
                  <span>✓</span> Quick preliminary diagnosis
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>✓</span> Personalized product recommendations
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>✓</span> Interactive migraine assessment tests
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span>✓</span> 24/7 instant assistance
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Contact Us
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#25D366]/90"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9946 23.7911H12C18.5518 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95357 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1589C2.63571 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6786 2.00893 17.1911 3.0375 19.0929 4.94464C20.9946 6.85179 22.0018 9.36429 21.9964 11.8982C21.9964 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3786C17.1214 14.2286 15.6589 13.5107 15.3857 13.4089C15.1125 13.3071 14.9143 13.2589 14.7161 13.5536C14.5179 13.8482 13.95 14.5179 13.7732 14.7161C13.5964 14.9143 13.4196 14.9357 13.125 14.7857C12.8304 14.6357 11.8929 14.3196 10.7893 13.3339C9.92143 12.5625 9.33214 11.6089 9.15536 11.3143C8.97857 11.0196 9.135 10.8536 9.28393 10.7036C9.42857 10.5589 9.58929 10.3339 9.74464 10.1571C9.9 9.98036 9.94821 9.85179 10.05 9.65357C10.1518 9.45536 10.1036 9.27857 10.0286 9.12857C9.95357 8.97857 9.36429 7.51607 9.11786 6.92679C8.87679 6.35357 8.63036 6.42857 8.44286 6.42321C8.26607 6.41786 8.06786 6.41786 7.86964 6.41786C7.67143 6.41786 7.35 6.49286 7.07679 6.7875C6.80357 7.08214 6.03214 7.80536 6.03214 9.26786C6.03214 10.7304 7.1625 12.1446 7.31786 12.3429C7.47321 12.5411 9.44464 15.5839 12.4607 16.8804C13.1518 17.1857 13.6929 17.3625 14.1161 17.4964C14.8125 17.7161 15.4446 17.6839 15.9429 17.6089C16.4929 17.525 17.6625 16.8857 17.9089 16.1946C18.1554 15.5036 18.1554 14.9143 18.0804 14.7857C18.0054 14.6571 17.7107 14.5286 17.4161 14.3786Z"
                    />
                  </svg>
                  Chat with AI Assistant
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="flex flex-col items-center gap-4 py-4">
                  <h3 className="text-lg font-semibold">Scan to Chat with our AI Assistant</h3>
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/1555054750" 
                    alt="WhatsApp QR Code"
                    className="h-48 w-48"
                  />
                  <p className="text-sm text-muted-foreground">
                    Open your phone's camera and point it at the QR code to start chatting with our AI Assistant
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
