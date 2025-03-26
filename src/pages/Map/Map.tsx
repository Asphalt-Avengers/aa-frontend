import { Page, PageContent, PageDate, PageHeader } from '@/components/custom';
import { GoogleMap } from '@/pages/Map/GoogleMap';

export const Map: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader>Map</PageHeader>
      <PageContent>
        <div style={{ position: 'relative' }}>
          {/* Legend in top right corner */}
          <div
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              backgroundColor: 'white',
              padding: '10px 14px',
              borderRadius: '8px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
              zIndex: 10,
              fontSize: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#34A853', // Green
                  marginRight: 8,
                }}
              />
              1–4 Detections
            </div>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#FBBC04', // Yellow
                  marginRight: 8,
                }}
              />
              5–9 Detections
            </div>
            <div>
              <span
                style={{
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#EA4335', // Red
                  marginRight: 8,
                }}
              />
              10+ Detections
            </div>
          </div>

          {/* Map */}
          <GoogleMap />
        </div>
      </PageContent>
    </Page>
  );
};
