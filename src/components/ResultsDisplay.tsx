
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, AlertTriangle } from 'lucide-react';

export interface GlucoseReading {
  level: number;
  status: 'low' | 'normal' | 'high' | 'unknown';
  confidence: number;
  timestamp: Date;
}

interface ResultsDisplayProps {
  result?: GlucoseReading | null;
  isLoading?: boolean;
}

export function ResultsDisplay({ result, isLoading = false }: ResultsDisplayProps) {
  // Generate a random default result if none provided
  const mockResult: GlucoseReading = result || {
    level: 95,
    status: 'normal',
    confidence: 72,
    timestamp: new Date()
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'low': return 'text-sweetvoice-warning';
      case 'normal': return 'text-sweetvoice-success';
      case 'high': return 'text-sweetvoice-danger';
      default: return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'low': return <ArrowDownIcon className="h-5 w-5 text-sweetvoice-warning" />;
      case 'normal': return <ArrowRightIcon className="h-5 w-5 text-sweetvoice-success" />;
      case 'high': return <ArrowUpIcon className="h-5 w-5 text-sweetvoice-danger" />;
      default: return <AlertTriangle className="h-5 w-5 text-gray-500" />;
    }
  };

  const getGlucoseRange = (level: number) => {
    if (level < 70) return 'Low';
    if (level > 140) return 'High';
    return 'Normal';
  };

  // Calculate the position of the marker on our 0-250 scale
  const markerPosition = Math.min(Math.max((mockResult.level / 250) * 100, 0), 100);

  if (isLoading) {
    return (
      <Card className="w-full shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Analyzing your voice</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center py-8 space-y-4">
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div className="bg-sweetvoice-primary h-2.5 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            <p className="text-muted-foreground">Please wait while we process your recording...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Glucose Analysis Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {getStatusIcon(mockResult.status)}
              <span className={`font-semibold text-lg ${getStatusColor(mockResult.status)}`}>
                {getGlucoseRange(mockResult.level)}
              </span>
            </div>
            <div className="text-3xl font-bold text-sweetvoice-dark">
              {mockResult.level} <span className="text-lg font-normal text-muted-foreground">mg/dL</span>
            </div>
          </div>

          <div className="relative pt-6 pb-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Low</span>
              <span>Normal</span>
              <span>High</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full relative">
              <div className="absolute top-0 left-0 h-2 bg-sweetvoice-warning rounded-l-full" style={{ width: '28%' }}></div>
              <div className="absolute top-0 left-[28%] h-2 bg-sweetvoice-success" style={{ width: '28%' }}></div>
              <div className="absolute top-0 left-[56%] h-2 bg-sweetvoice-danger rounded-r-full" style={{ width: '44%' }}></div>
              
              {/* Marker for current reading */}
              <div 
                className="absolute top-0 w-4 h-4 bg-white border-2 border-sweetvoice-primary rounded-full -mt-1 transform -translate-x-1/2"
                style={{ left: `${markerPosition}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>0</span>
              <span>70</span>
              <span>140</span>
              <span>250+</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-sm font-medium mb-1 flex justify-between">
                <span>Prediction Confidence</span>
                <span>{mockResult.confidence}%</span>
              </div>
              <Progress value={mockResult.confidence} className="h-2" />
            </div>

            <div className="bg-sweetvoice-light p-4 rounded-md text-sm">
              <p className="text-sweetvoice-dark">
                <strong>Note:</strong> This is an estimated glucose level based on voice analysis. 
                For medical decisions, please use a traditional glucose meter for accurate readings.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ResultsDisplay;
