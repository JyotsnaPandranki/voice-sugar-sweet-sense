
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <Card className="w-full mb-4 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 flex flex-row items-center space-y-0">
        <div className="mr-2 h-8 w-8 rounded-full bg-sweetvoice-light flex items-center justify-center text-sweetvoice-primary">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
