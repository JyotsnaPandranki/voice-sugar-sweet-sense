
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the record page as our main app view
    navigate('/record');
  }, [navigate]);

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
