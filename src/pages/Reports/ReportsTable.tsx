import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableRow,
} from '@/components/custom';

export const ReportsTable: React.FC = () => {
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
      <DataTableBody>
        <DataTableRow>
          <DataTableCell>R1</DataTableCell>
          <DataTableCell>01/01/2021</DataTableCell>
          <DataTableCell>01/02/2021</DataTableCell>
        </DataTableRow>
        <DataTableRow>
          <DataTableCell>Report 2</DataTableCell>
          <DataTableCell>01/01/2021</DataTableCell>
          <DataTableCell>01/02/2021</DataTableCell>
        </DataTableRow>
      </DataTableBody>
    </DataTable>
  );
};
