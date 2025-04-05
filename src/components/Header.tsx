
import React from 'react';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, User, History, BookOpen, Wand2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleTabChange = (value: string) => {
    navigate(value);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex flex-col items-center py-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-full bg-sweetvoice-primary flex items-center justify-center">
            <Wand2 className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-sweetvoice-dark">
            Sweet<span className="text-sweetvoice-primary">Voice</span>
          </h1>
        </div>
        <Tabs 
          defaultValue={currentPath === '/' ? '/record' : currentPath}
          className="w-full max-w-md" 
          onValueChange={handleTabChange}
        >
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="/record" className={cn("flex flex-col items-center py-2 px-0", 
              currentPath === '/' || currentPath === '/record' ? "text-sweetvoice-primary" : "")}>
              <Activity className="h-5 w-5 mb-1" />
              <span className="text-xs">Record</span>
            </TabsTrigger>
            <TabsTrigger value="/history" className={cn("flex flex-col items-center py-2 px-0", 
              currentPath === '/history' ? "text-sweetvoice-primary" : "")}>
              <History className="h-5 w-5 mb-1" />
              <span className="text-xs">History</span>
            </TabsTrigger>
            <TabsTrigger value="/learn" className={cn("flex flex-col items-center py-2 px-0", 
              currentPath === '/learn' ? "text-sweetvoice-primary" : "")}>
              <BookOpen className="h-5 w-5 mb-1" />
              <span className="text-xs">Learn</span>
            </TabsTrigger>
            <TabsTrigger value="/profile" className={cn("flex flex-col items-center py-2 px-0", 
              currentPath === '/profile' ? "text-sweetvoice-primary" : "")}>
              <User className="h-5 w-5 mb-1" />
              <span className="text-xs">Profile</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
}

export default Header;
