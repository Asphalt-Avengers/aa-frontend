import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Detection {
  s3Url: string;
}

interface ReportImagesProps {
  detections: Detection[];
}

export const ReportImages: React.FC<ReportImagesProps> = ({ detections }) => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {detections.map((detection, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={detection.s3Url}
                    alt={`Detection ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
