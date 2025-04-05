
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from 'lucide-react';
import { GlucoseReading } from './ResultsDisplay';
import { format } from 'date-fns';

interface HistoryItemProps {
  reading: GlucoseReading;
  onClick?: () => void;
}

export function HistoryItem({ reading, onClick }: HistoryItemProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'bg-yellow-100 border-sweetvoice-warning';
      case 'normal': return 'bg-green-100 border-sweetvoice-success';
      case 'high': return 'bg-red-100 border-sweetvoice-danger';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'low': return <ArrowDownIcon className="h-5 w-5 text-sweetvoice-warning" />;
      case 'normal': return <ArrowRightIcon className="h-5 w-5 text-sweetvoice-success" />;
      case 'high': return <ArrowUpIcon className="h-5 w-5 text-sweetvoice-danger" />;
      default: return null;
    }
  };

  const getFormattedDate = (date: Date) => {
    return format(date, 'MMM d, yyyy • h:mm a');
  };

  return (
    <Card 
      className={`mb-3 border-l-4 ${getStatusColor(reading.status)} hover:shadow-md cursor-pointer transition-shadow`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {getStatusIcon(reading.status)}
            <div>
              <div className="font-medium">{reading.level} mg/dL</div>
              <div className="text-xs text-muted-foreground">
                {getFormattedDate(reading.timestamp)}
              </div>
            </div>
          </div>
          <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {reading.confidence}% confidence
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default HistoryItem;
