import { Page, PageContent, PageDate, PageHeader } from '@/components/custom';

import { ReportsTable } from './ReportsTable';

export const Reports: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader className="mb-8">Reports</PageHeader>
      <PageContent>
        <ReportsTable />
      </PageContent>
    </Page>
  );
};
