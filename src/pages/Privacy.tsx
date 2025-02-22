
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>Privacy Policy - Migraine Care Center</title>
        <meta 
          name="description" 
          content="Privacy policy and data handling practices for Migraine Care Center" 
        />
      </Helmet>

      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Privacy Policy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information that you provide directly to us, including your name, contact information, 
              medical history related to migraines, and any other information you choose to provide when using our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our medical services</li>
              <li>To communicate with you about appointments and treatment</li>
              <li>To process your purchases of migraine treatment products</li>
              <li>To provide personalized medical advice through our virtual assistant</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Data Protection</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete your personal information. You may also request 
              a copy of your personal data or restrict its processing. Contact us to exercise these rights.
            </p>
          </section>

          <section className="bg-gray-50 p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@migrainecare.com
              <br />
              Phone: (555) 123-4567
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Privacy;
