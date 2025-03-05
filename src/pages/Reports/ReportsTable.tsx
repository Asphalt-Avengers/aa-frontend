import { DataTable } from '@/components/ui/data-table';
import { useGetReports } from '@/hooks/report/useGetReports';

import { reportsColumns } from './ReportsColumns';

export const ReportsTable: React.FC = () => {
  const { data: reports, isSuccess } = useGetReports();

  if (isSuccess) {
    return <DataTable columns={reportsColumns} data={reports} />;
  }

  return null;
};
