import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
