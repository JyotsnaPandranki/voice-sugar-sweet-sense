
import React from 'react';
import { ProfileForm } from '@/components/ProfileForm';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Shield, User } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-sweetvoice-dark">Your Profile</h1>
        <div className="bg-sweetvoice-light text-sweetvoice-primary rounded-full p-2">
          <User className="h-6 w-6" />
        </div>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileForm />
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="h-5 w-5 text-sweetvoice-primary" />
            Privacy & Data
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <p className="text-muted-foreground">
            SweetVoice takes your privacy seriously. Your voice data remains on your device unless you opt to share anonymous data to help improve our algorithms.
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" className="w-full text-xs">
              Privacy Policy
            </Button>
            <Button variant="outline" className="w-full text-xs">
              Terms of Service
            </Button>
          </div>
          
          <Separator />

          <div>
            <h3 className="font-medium mb-2">Your Data</h3>
            <p className="text-muted-foreground mb-3">
              You can download all your voice recordings and analysis history at any time.
            </p>
            <Button variant="secondary" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export Your Data
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-xs text-muted-foreground">
        <p>SweetVoice v0.1.0</p>
        <p className="mt-1">© 2025 SweetVoice Technology</p>
      </div>
    </div>
  );
};

export default ProfilePage;
