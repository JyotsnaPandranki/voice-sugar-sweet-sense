
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, Square, PlayCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface VoiceRecorderProps {
  onRecordingComplete: (audioBlob: Blob) => void;
}

export function VoiceRecorder({ onRecordingComplete }: VoiceRecorderProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Clean up function
    return () => {
      if (mediaRecorder) {
        if (mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        }
      }
      
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
    };
  }, [mediaRecorder, audioURL]);

  const startRecording = async () => {
    setAudioChunks([]);
    setAudioURL(null);
    
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      
      const chunks: Blob[] = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        setAudioChunks(chunks);
        onRecordingComplete(audioBlob);
      };
      
      recorder.start();
      setIsRecording(true);
      setRecordingDuration(0);
      setMediaRecorder(recorder);

      // Start duration timer
      const startTime = Date.now();
      const intervalId = setInterval(() => {
        setRecordingDuration(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
      
      // Save interval ID to clear it later
      recorder.onstart = () => {
        (recorder as any).intervalId = intervalId;
      };
      
      recorder.onstop = () => {
        clearInterval((recorder as any).intervalId);
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        setAudioChunks(chunks);
        onRecordingComplete(audioBlob);
      };
      
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        title: "Microphone access denied",
        description: "Please enable microphone access to use the voice recorder.",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      
      // Stop all tracks on the stream
      mediaRecorder.stream.getTracks().forEach(track => track.stop());

      setIsRecording(false);
    }
  };

  const playRecording = () => {
    if (audioRef.current && audioURL) {
      if (isPlaying) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        audioRef.current.onended = () => {
          setIsPlaying(false);
        };
      }
    }
  };

  // Format seconds to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="w-full shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative flex items-center justify-center w-32 h-32">
            {isRecording ? (
              <>
                <div className={`absolute inset-0 bg-sweetvoice-primary rounded-full opacity-20 animate-pulse-recording`}></div>
                <div className="voice-wave-container absolute inset-0 flex items-center justify-center">
                  <div className="voice-wave-bar h-8 animate-wave-1"></div>
                  <div className="voice-wave-bar h-16 animate-wave-2"></div>
                  <div className="voice-wave-bar h-24 animate-wave-3"></div>
                  <div className="voice-wave-bar h-16 animate-wave-4"></div>
                  <div className="voice-wave-bar h-8 animate-wave-5"></div>
                </div>
                <div className="absolute flex items-center justify-center w-24 h-24 bg-sweetvoice-primary text-white rounded-full">
                  <div className="text-center">
                    <div className="text-xs mb-1">Recording</div>
                    <div className="text-lg font-semibold">{formatTime(recordingDuration)}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className={`w-24 h-24 rounded-full flex items-center justify-center ${audioURL ? 'bg-sweetvoice-accent' : 'bg-sweetvoice-primary'} text-white`}>
                {audioURL ? (
                  <PlayCircle className="h-12 w-12" />
                ) : (
                  <Mic className="h-12 w-12" />
                )}
              </div>
            )}
          </div>
          
          <div className="space-y-3 w-full">
            <div className="text-center text-lg font-medium text-sweetvoice-dark">
              {isRecording ? "Recording your voice..." : 
                audioURL ? "Ready to analyze your voice" : 
                "Tap to record your voice"}
            </div>
            
            <div className="text-center text-sm text-muted-foreground mb-4">
              {isRecording ? "Please speak clearly for 10-15 seconds" : 
                audioURL ? "You can replay your recording or analyze it" : 
                "The recording will be used to analyze your glucose patterns"}
            </div>
            
            <div className="flex justify-center gap-4">
              {isRecording ? (
                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="rounded-full px-8"
                  onClick={stopRecording}
                >
                  <Square className="mr-2 h-4 w-4" /> Stop
                </Button>
              ) : (
                <>
                  {audioURL ? (
                    <>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="rounded-full px-8" 
                        onClick={playRecording}
                      >
                        <PlayCircle className="mr-2 h-4 w-4" /> {isPlaying ? "Pause" : "Play"}
                      </Button>
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="rounded-full px-8 bg-sweetvoice-primary hover:bg-sweetvoice-secondary"
                      >
                        Analyze Voice
                      </Button>
                    </>
                  ) : (
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="rounded-full px-8 bg-sweetvoice-primary hover:bg-sweetvoice-secondary"
                      onClick={startRecording}
                    >
                      <Mic className="mr-2 h-4 w-4" /> Start Recording
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {audioURL && (
          <audio ref={audioRef} src={audioURL} className="hidden" />
        )}
      </CardContent>
    </Card>
  );
}

export default VoiceRecorder;
