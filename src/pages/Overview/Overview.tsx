import { Page, PageDate, PageHeader } from '@/components/custom';

import { OverviewChart } from './OverviewChart';

export const Overview: React.FC = () => {
  return (
    <Page>
      <PageDate />
      <PageHeader>Overview</PageHeader>
      <OverviewChart />
    </Page>
  );
};
