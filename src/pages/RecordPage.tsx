
import React, { useState } from 'react';
import VoiceRecorder from '@/components/VoiceRecorder';
import ResultsDisplay from '@/components/ResultsDisplay';
import { Card, CardContent } from '@/components/ui/card';
import { Info } from 'lucide-react';

const RecordPage = () => {
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [analyzingVoice, setAnalyzingVoice] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  
  const handleRecordingComplete = (blob: Blob) => {
    setAudioBlob(blob);
    setRecordingComplete(true);
    // In a real app, we would analyze the recording here
    // For demo purposes, we'll simulate analysis
  };

  const analyzeRecording = () => {
    setAnalyzingVoice(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setAnalyzingVoice(false);
    }, 3000);
  };

  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-sweetvoice-dark">Voice Analysis</h1>
      
      <div className="space-y-6">
        <VoiceRecorder onRecordingComplete={handleRecordingComplete} />
        
        {recordingComplete && (
          analyzingVoice ? (
            <ResultsDisplay isLoading={true} />
          ) : (
            <ResultsDisplay />
          )
        )}
        
        <Card className="bg-sweetvoice-light border-none">
          <CardContent className="p-4 flex gap-3">
            <div className="text-sweetvoice-primary">
              <Info size={20} />
            </div>
            <div className="text-sm text-sweetvoice-dark">
              <p>Speak naturally for 10-15 seconds for the most accurate results. Try to record in a quiet environment.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RecordPage;
