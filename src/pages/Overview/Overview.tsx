import { DoubleBar } from '@/components/charts/DoubleBar/DoubleBar';
import { Page, PageContent, PageDate, PageHeader } from '@/components/custom';
import { useGetReportsSummary } from '@/hooks/report/useGetReportsSummary';

export const Overview: React.FC = () => {
  const { data, isSuccess } = useGetReportsSummary();

  return (
    <Page>
      <PageDate />
      <PageHeader>Overview</PageHeader>
      <PageContent>{isSuccess && <DoubleBar data={data} />}</PageContent>
    </Page>
  );
};
