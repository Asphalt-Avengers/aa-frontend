import { AdvancedMarker, APIProvider, Map, Pin } from '@vis.gl/react-google-maps';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetReports } from '@/hooks/report/useGetReports';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

export const GoogleMap: React.FC = () => {
  const { data: reports, isSuccess } = useGetReports();
  const navigate = useNavigate();

  if (isSuccess) {
    return (
      <APIProvider apiKey={GOOGLE_API_KEY} libraries={['marker']}>
        <div style={{ height: '75vh', width: '100%' }}>
          <Map
            mapId={'bf51a910020fa25a'}
            defaultZoom={14}
            gestureHandling={'greedy'}
            disableDefaultUI
            defaultCenter={{
              lat: 43.4723,
              lng: -80.5449,
            }}
          >
            {reports.filter((report) => report.status == "OPEN").map((report) => {
              const [latitude, longitude] = report.geomJson.coordinates;
              const numDetections = report.detections.length;
              const [background, borderColor, glyphColor] =
                numDetections < 5
                  ? ['#34A853', '#2C8E4E', '#1B5E20']      // green
                  : numDetections < 10
                  ? ['#FBBC04', '#E0A800', '#7A6000']      // yellow
                  : ['#EA4335', '#C5221F', '#7B1C17'];     // red
                
              return (
                <AdvancedMarker
                  key={report.id}
                  position={{ lat: latitude, lng: longitude }}
                  onClick={() => navigate(`/home/reports/${report.id}`)}
                >
                  <Pin
                    background={background}
                    borderColor={borderColor}
                    glyphColor={glyphColor}     
                  />
                </AdvancedMarker>
              );
            })}
          </Map>
        </div>
      </APIProvider>
    );
  }

  return null;
};
