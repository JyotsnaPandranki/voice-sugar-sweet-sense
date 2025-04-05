
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g., /#/privacy-policy), extract it
    const hash = location.hash.slice(2); // Remove the #/
    
    if (hash === 'privacy-policy') {
      navigate('/privacy-policy');
    } else if (hash === 'terms-of-service') {
      navigate('/terms-of-service');
    } else {
      // Default redirect to the record page as our main app view
      navigate('/record');
    }
  }, [navigate, location]);

  // This is just a fallback in case the redirect doesn't work
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container flex items-center justify-center min-h-screen">
        <p>Loading the app...</p>
      </div>
    </div>
  );
};

export default Index;
