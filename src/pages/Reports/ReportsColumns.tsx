import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';

export const reportsColumns: ColumnDef<Report>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: string = row.getValue('status');
      let colorClass = '';
      let displayStatus = '';

      switch (status) {
        case 'OPEN':
          colorClass = 'bg-amber-500 text-white';
          displayStatus = 'Open';
          break;
        case 'RESOLVED':
          colorClass = 'bg-sky-500 text-white';
          displayStatus = 'Resolved';
          break;
        case 'IN_PROGRESS':
          colorClass = 'text-primary';
          displayStatus = 'In Progress';
          break;
        default:
          colorClass = 'bg-neutral-0 text-primary';
          displayStatus =
            status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
      }

      return (
        <Badge
          className={`${colorClass} pointer-events-none`}
          variant={status == 'IN_PROGRESS' ? 'outline' : 'default'}
        >
          {displayStatus}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'detections.length',
    header: 'Detections',
  },
  {
    accessorKey: 'createdAt',
    header: 'Reported At',
    cell: ({ row }) => {
      const date = new Date(row.getValue('createdAt'));
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return <div>{formattedDate}</div>;
    },
  },
];
