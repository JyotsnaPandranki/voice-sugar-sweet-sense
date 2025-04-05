
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
      
      <h1 className="text-2xl font-bold mb-6 text-sweetvoice-dark">Privacy Policy</h1>
      
      <div className="space-y-6 text-sm text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Introduction</h2>
          <p>
            SweetVoice ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how 
            we collect, use, disclose, and safeguard your information when you use our voice analysis application.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>
              <span className="font-medium">Personal Information:</span> Name, age, gender, and diabetes status 
              that you provide when you create a profile.
            </li>
            <li>
              <span className="font-medium">Voice Recordings:</span> Audio recordings you make within the app for 
              analysis purposes.
            </li>
            <li>
              <span className="font-medium">Analysis Results:</span> Data generated from our analysis of your voice 
              recordings.
            </li>
            <li>
              <span className="font-medium">Usage Data:</span> Information about how you use the app, including 
              features accessed and time spent.
            </li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To analyze your voice patterns for glucose level estimation</li>
            <li>To provide customer support</li>
            <li>To improve our algorithms and services (if you opt-in to share anonymous data)</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Data Storage and Security</h2>
          <p>
            Your voice recordings and personal information are stored on your device unless you opt to 
            share anonymous data. We implement appropriate technical and organizational measures to protect 
            your data against unauthorized access or disclosure.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Your Data Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate personal information</li>
            <li>Delete your personal information</li>
            <li>Export your data</li>
            <li>Withdraw consent to share anonymous data at any time</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Updates to Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
        </section>
        
        <section>
          <h2 className="text-lg font-semibold text-sweetvoice-dark mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:privacy@sweetvoice.tech" className="text-sweetvoice-primary">
              privacy@sweetvoice.tech
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

export default PrivacyPolicy;
