import { XIcon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useDeleteDetection } from '@/hooks/detection/useDeleteDetection';

interface Detection {
  id: string;
  s3Url: string;
}

interface ReportImagesProps {
  detections: Detection[];
}

export const ReportImages: React.FC<ReportImagesProps> = ({
  detections: initialDetections,
}) => {
  const deleteDetection = useDeleteDetection();
  const [detections, setDetections] = useState<Detection[]>(initialDetections);
  const [selectedDetection, setSelectedDetection] = useState<Detection | null>(
    null
  );

  const handleDelete = () => {
    if (selectedDetection) {
      deleteDetection.mutate(
        { detectionId: selectedDetection.id },
        {
          onSuccess: () => {
            setDetections(
              detections.filter((d) => d.id !== selectedDetection.id)
            );
            setSelectedDetection(null);
          },
        }
      );
    }
  };

  return (
    <Carousel className="w-[50%]">
      <CarouselContent>
        {detections.map((detection, index) => (
          <CarouselItem key={index}>
            <div className="relative p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={detection.s3Url}
                    alt={`Detection ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <XIcon
                    size={32}
                    className="absolute top-8 right-8 cursor-pointer text-white"
                    onClick={() => setSelectedDetection(detection)}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />

      {selectedDetection && (
        <Dialog
          open={!!selectedDetection}
          onOpenChange={() => setSelectedDetection(null)}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this detection? This action is
                irreversible.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setSelectedDetection(null)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Carousel>
  );
};
