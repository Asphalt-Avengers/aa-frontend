import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableRow,
} from '@/components/custom';
import { Skeleton } from '@/components/ui/skeleton';
import { Report, useGetReports } from '@/hooks/report/useGetReports';

interface ReportsTableRowProps {
  report: Report;
}

const ReportsTableBodySkeleton: React.FC = () => {
  return (
    <DataTableBody>
      {Array.from({ length: 5 }).map((_, index) => (
        <DataTableRow key={index}>
          <DataTableCell>
            <Skeleton className="h-4 w-16" />
          </DataTableCell>
          <DataTableCell>
            <Skeleton className="h-4 w-24" />
          </DataTableCell>
          <DataTableCell>
            <Skeleton className="h-4 w-24" />
          </DataTableCell>
          <DataTableCell>
            <Skeleton className="h-4 w-24" />
          </DataTableCell>
          <DataTableCell>
            <Skeleton className="h-4 w-24" />
          </DataTableCell>
        </DataTableRow>
      ))}
    </DataTableBody>
  );
};

const ReportsTableRow: React.FC<ReportsTableRowProps> = ({ report }) => {
  return (
    <DataTableRow>
      <DataTableCell>{report.id}</DataTableCell>
      <DataTableCell>{report.status}</DataTableCell>
      <DataTableCell>{report.detections.length}</DataTableCell>
      <DataTableCell>
        {new Date(report.createdAt).toLocaleString()}
      </DataTableCell>
      <DataTableCell>
        {new Date(report.updatedAt).toLocaleString()}
      </DataTableCell>
    </DataTableRow>
  );
};

export const ReportsTable: React.FC = () => {
  const { data: reports, isLoading, isSuccess } = useGetReports();

  console.log(reports);

  return (
    <DataTable>
      <DataTableHeader>
        <DataTableRow>
          <DataTableHead className="w-[100px]">ID</DataTableHead>
          <DataTableHead>Status</DataTableHead>
          <DataTableHead>Detections</DataTableHead>
          <DataTableHead>Created At</DataTableHead>
          <DataTableHead>Updated At</DataTableHead>
          <DataTableHead />
        </DataTableRow>
      </DataTableHeader>
      {isLoading && <ReportsTableBodySkeleton />}
      {isSuccess && (
        <DataTableBody>
          {reports.map((report) => (
            <ReportsTableRow key={report.id} report={report} />
          ))}
        </DataTableBody>
      )}
    </DataTable>
  );
};
