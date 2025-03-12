import { DoubleBar } from '@/components/charts/DoubleBar/DoubleBar';
import { PageContent, Typography } from '@/components/custom';
import { useGetReportsSummary } from '@/hooks/report/useGetReportsSummary';

export const OverviewChart: React.FC = () => {
  const { data, isSuccess } = useGetReportsSummary();

  return (
    <PageContent>
      <Typography variant="h4" className="mb-2 text-center">
        Open vs Resolved Reports
      </Typography>
      {isSuccess && <DoubleBar data={data} />}
    </PageContent>
  );
};
