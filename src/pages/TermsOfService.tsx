
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container max-w-2xl mx-auto py-6 px-4">
      <Button 
        variant="ghost" 
        className="mb-4 pl-0 flex items-center" 
        onClick={() => navigate('/profile')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Profile
      </Button>
      
      <h1 className="text-2xl font-bold mb-6 text-sweetvoice-dark">Terms of Service</h1>
      
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Introduction</h2>
          <p>
            By using the SweetVoice application ("Service"), you agree to these Terms of Service. 
            Please read them carefully. If you do not agree with these terms, you should not use the Service.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Description of Service</h2>
          <p>
            SweetVoice is a voice analysis application designed to detect potential blood glucose 
            fluctuations through voice pattern changes. While our technology is based on scientific 
            research, it is not intended to replace professional medical advice, diagnosis, or treatment.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Medical Disclaimer</h2>
          <p>
            The Service is not a medical device and is not approved by the FDA or any other regulatory 
            authority for medical use. Any results or information provided by the Service should be 
            considered supplemental and not a substitute for blood glucose monitoring as recommended 
            by healthcare professionals.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">User Accounts</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account information and 
            for all activities that occur under your account. You must immediately notify us of any 
            unauthorized use of your account or any other breach of security.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Use the Service for any illegal purpose</li>
            <li>Violate any laws in your jurisdiction</li>
            <li>Infringe upon the rights of others</li>
            <li>Attempt to gain unauthorized access to the Service or its systems</li>
            <li>Interfere with or disrupt the integrity of the Service</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are owned by SweetVoice 
            and are protected by international copyright, trademark, patent, trade secret, and other 
            intellectual property laws.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, SweetVoice and its affiliates shall not be liable 
            for any indirect, incidental, special, consequential, or punitive damages resulting from 
            your use or inability to use the Service.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of significant 
            changes by posting a notice on our website or through the Service. Your continued use of 
            the Service after such modifications constitutes your acceptance of the revised Terms.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
            <br />
            <a href="mailto:legal@sweetvoice.tech" className="text-sweetvoice-primary">
              legal@sweetvoice.tech
            </a>
          </p>
        </section>
      </div>
      
      <div className="text-center text-xs text-muted-foreground mt-10">
        <p>Last Updated: April 1, 2025</p>
        <p className="mt-1">© 2025 SweetVoice Technology</p>
      </div>
    </div>
  );
};

export default TermsOfService;
