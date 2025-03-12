import { DoubleBar } from '@/components/charts/DoubleBar/DoubleBar';
import {
  Page,
  PageContent,
  PageDate,
  PageHeader,
  Typography,
} from '@/components/custom';
import { useGetReportsSummary } from '@/hooks/report/useGetReportsSummary';

export const Overview: React.FC = () => {
  const { data, isSuccess } = useGetReportsSummary();

  const OverviewChart: React.FC = () => {
    return (
      <PageContent>
        <Typography variant="h4" className="mb-2 text-center">
          Open vs Resolved Reports
        </Typography>
        {isSuccess && <DoubleBar data={data} />}
      </PageContent>
    );
  };

  return (
    <Page>
      <PageDate />
      <PageHeader>Overview</PageHeader>
      <OverviewChart />
    </Page>
  );
};
