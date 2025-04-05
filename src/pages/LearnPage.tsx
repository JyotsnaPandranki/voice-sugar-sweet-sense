
import React from 'react';
import InfoCard from '@/components/InfoCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Wand2, Activity, FileQuestion, LineChart, TestTube2 } from 'lucide-react';

const LearnPage = () => {
  return (
    <div className="container max-w-md mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-sweetvoice-dark">Learn About SweetVoice</h1>
      
      <InfoCard 
        title="How It Works" 
        icon={<Wand2 className="h-4 w-4" />}
      >
        <p className="mb-2">
          SweetVoice uses advanced machine learning algorithms to detect subtle changes in your voice patterns that may correlate with blood glucose fluctuations.
        </p>
        <p>
          Research has shown that certain vocal biomarkers can change when blood glucose levels are outside the normal range, creating a non-invasive way to monitor potential changes.
        </p>
      </InfoCard>

      <InfoCard 
        title="Accuracy & Limitations" 
        icon={<Activity className="h-4 w-4" />}
      >
        <p className="mb-2">
          SweetVoice is designed as a supplementary monitoring tool, not a replacement for traditional blood glucose meters.
        </p>
        <p>
          While our technology continues to improve, always consult medical devices and healthcare professionals for medical decisions.
        </p>
      </InfoCard>

      <Card className="w-full mb-6 shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center">
            <FileQuestion className="h-5 w-5 mr-2 text-sweetvoice-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How often should I record my voice?</AccordionTrigger>
              <AccordionContent>
                For the best results, we recommend recording 2-3 times daily, ideally before and after meals when glucose levels typically fluctuate. Consistent timing helps our AI provide better insights.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my voice data secure?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Your voice recordings are encrypted and processed locally on your device. You can opt-in to share anonymous data to help improve our models, but this is completely optional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What should I say during recording?</AccordionTrigger>
              <AccordionContent>
                You can read standardized text prompts provided in the app or speak naturally for 10-15 seconds. The content matters less than speaking clearly at a normal pace and volume.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can background noise affect results?</AccordionTrigger>
              <AccordionContent>
                Yes, excessive background noise can impact analysis accuracy. Try to record in a quiet environment for the most reliable results.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <div className="space-y-4 mb-6">
        <h2 className="text-xl font-semibold flex items-center text-sweetvoice-dark">
          <TestTube2 className="h-5 w-5 mr-2 text-sweetvoice-primary" />
          Research Background
        </h2>
        
        <div className="text-sm text-muted-foreground space-y-4">
          <p>
            Research has shown correlations between vocal biomarkers and blood glucose levels. Changes in blood glucose can affect the autonomic nervous system, which controls vocal fold vibration and other aspects of voice production.
          </p>
          
          <p>
            Studies have identified specific acoustic features that may change with glucose fluctuations, including:
          </p>
          
          <ul className="list-disc pl-5 space-y-2">
            <li>Frequency perturbation (jitter)</li>
            <li>Amplitude perturbation (shimmer)</li>
            <li>Harmonic-to-noise ratio</li>
            <li>Formant frequencies</li>
          </ul>
          
          <p className="mt-4">
            SweetVoice leverages these scientific findings and continues to refine its algorithms as more research emerges.
          </p>
        </div>
      </div>

      <Card className="bg-sweetvoice-light border-none">
        <CardHeader className="pb-2 flex flex-row items-center">
          <LineChart className="h-5 w-5 mr-2 text-sweetvoice-primary" />
          <CardTitle className="text-base">Still Learning & Improving</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p>
            SweetVoice is constantly learning and improving its algorithms. The more you use it, the more accurate it becomes for your unique voice patterns.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearnPage;
