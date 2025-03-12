import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import StatusBadge from '@/components/src/StatusBadge/StatusBadge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formattedDate } from '@/utils/formatDate';

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
      return <StatusBadge status={status} />;
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

      return <div>{formattedDate(date)}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const reportId: string = row.getValue('id');

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
              <NavLink to={`${reportId}`}>View Report </NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
