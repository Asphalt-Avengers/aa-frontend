import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import React from 'react';

import { useGetReports } from '@/hooks/report/useGetReports';

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY as string;

export const GoogleMap: React.FC = () => {
  const { data: reports, isSuccess } = useGetReports();

  if (isSuccess) {
    return (
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <div style={{ height: '75vh', width: '100%' }}>
          <Map
            zoom={14}
            defaultCenter={{
              lat: 43.4723,
              lng: -80.5449,
            }}
          >
            {reports.map((report) => {
              const [latitude, longitude] = report.geom.split(',').map(Number);
              return (
                <Marker
                  key={report.id}
                  position={{ lat: latitude, lng: longitude }}
                  onClick={() => console.log(report)}
                />
              );
            })}
          </Map>
        </div>
      </APIProvider>
    );
  }

  return null;
};
