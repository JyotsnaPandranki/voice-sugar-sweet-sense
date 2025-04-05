
import React, { useState } from 'react';
import VoiceRecorder from '@/components/VoiceRecorder';
import ResultsDisplay from '@/components/ResultsDisplay';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import type { GlucoseReading } from '@/components/ResultsDisplay';

const RecordPage = () => {
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [analyzingVoice, setAnalyzingVoice] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [glucoseResult, setGlucoseResult] = useState<GlucoseReading | null>(null);
  
  const handleRecordingComplete = (blob: Blob) => {
    setAudioBlob(blob);
    setRecordingComplete(true);
    // Reset results when a new recording is made
    setGlucoseResult(null);
  };

  // Generate random glucose level within realistic range
  const generateGlucoseReading = (): GlucoseReading => {
    // Generate random number between 60 and 200
    const level = Math.floor(Math.random() * 140) + 60;
    
    // Determine status based on level
    let status: 'low' | 'normal' | 'high' | 'unknown' = 'unknown';
    if (level < 70) status = 'low';
    else if (level <= 140) status = 'normal';
    else status = 'high';
    
    // Random confidence between 65% and 95%
    const confidence = Math.floor(Math.random() * 30) + 65;
    
    return {
      level,
      status,
      confidence,
      timestamp: new Date()
    };
  };

  const analyzeRecording = () => {
    if (!audioBlob) {
      toast({
        title: "No recording available",
        description: "Please record your voice or upload an audio file first.",
        variant: "destructive"
      });
      return;
    }
    
    setAnalyzingVoice(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      const newReading = generateGlucoseReading();
      setGlucoseResult(newReading);
      setAnalyzingVoice(false);
      
      toast({
        title: "Analysis complete",
        description: `Your glucose level is estimated at ${newReading.level} mg/dL.`,
      });
    }, 3000);
  };

  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-sweetvoice-dark">Voice Analysis</h1>
      
      <div className="space-y-6">
        <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
        
        {recordingComplete && !analyzingVoice && (
          <Button 
            onClick={analyzeRecording} 
            className="w-full bg-sweetvoice-primary hover:bg-sweetvoice-secondary text-white"
            size="lg"
          >
            Analyze Voice
          </Button>
        )}
        
        {analyzingVoice ? (
          <ResultsDisplay isLoading={true} />
        ) : (
          recordingComplete && <ResultsDisplay result={glucoseResult} />
        )}
        
        <Card className="bg-sweetvoice-light border-none">
          <CardContent className="p-4 flex gap-3">
            <div className="text-sweetvoice-primary">
              <Info size={20} />
            </div>
            <div className="text-sm text-sweetvoice-dark">
              <p>Speak naturally for 10-15 seconds for the most accurate results. Try to record in a quiet environment. You can also upload existing voice recordings.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecordPage;
