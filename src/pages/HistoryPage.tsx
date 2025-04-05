
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { HistoryItem } from '@/components/HistoryItem';
import { Calendar } from 'lucide-react';
import { GlucoseReading } from '@/components/ResultsDisplay';

const HistoryPage = () => {
  // Mock data for demonstration
  const mockReadings: GlucoseReading[] = [
    { level: 95, status: 'normal', confidence: 82, timestamp: new Date() },
    { level: 130, status: 'normal', confidence: 75, timestamp: new Date(Date.now() - 86400000) }, // 1 day ago
    { level: 160, status: 'high', confidence: 79, timestamp: new Date(Date.now() - 172800000) }, // 2 days ago
    { level: 65, status: 'low', confidence: 68, timestamp: new Date(Date.now() - 345600000) }, // 4 days ago
    { level: 110, status: 'normal', confidence: 85, timestamp: new Date(Date.now() - 604800000) }, // 1 week ago
  ];

  const weeklyReadings = mockReadings.filter(r => r.timestamp > new Date(Date.now() - 604800000));
  const monthlyReadings = mockReadings;

  const handleReadingClick = (reading: GlucoseReading) => {
    console.log('Reading clicked:', reading);
    // In a real app, you would navigate to a detailed view or show a modal
  };

  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-sweetvoice-dark">History</h1>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Last recording: Today</span>
        </div>
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
        </TabsList>
        
        <TabsContent value="week">
          {weeklyReadings.length > 0 ? (
            <div>
              {weeklyReadings.map((reading, index) => (
                <HistoryItem 
                  key={index} 
                  reading={reading} 
                  onClick={() => handleReadingClick(reading)}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <p className="text-muted-foreground">No recordings this week.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="month">
          {monthlyReadings.length > 0 ? (
            <div>
              {monthlyReadings.map((reading, index) => (
                <HistoryItem 
                  key={index} 
                  reading={reading} 
                  onClick={() => handleReadingClick(reading)}
                />
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <p className="text-muted-foreground">No recordings this month.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
      
      <Card className="mt-6 bg-sweetvoice-light border-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Tracking Insights</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-sweetvoice-dark">
          <p>Regular voice recordings help provide more accurate glucose trend analysis over time. Try to record at consistent times each day.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryPage;
