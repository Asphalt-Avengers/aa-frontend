import { Page, PageContent, PageDate, PageHeader } from '@/components/custom';
import { GoogleMap } from '@/pages/Map/GoogleMap';

export const Map: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader>Map</PageHeader>
      <PageContent>
        <GoogleMap />
      </PageContent>
    </Page>
  );
};
