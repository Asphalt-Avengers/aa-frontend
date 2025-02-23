import { Page, PageContent, PageDate, PageHeader } from '@/components/custom';

export const Overview: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader>Overview</PageHeader>
      <PageContent></PageContent>
    </Page>
  );
};
