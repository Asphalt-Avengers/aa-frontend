import React from 'react';

import { Badge } from '@/components/ui/badge';

interface StatusBadgeProps {
  status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
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
        status ? status.charAt(0).toUpperCase() + status.slice(1).toLowerCase() : "";
  }

  return (
    <Badge
      className={`${colorClass} pointer-events-none w-fit`}
      variant={status === 'IN_PROGRESS' ? 'outline' : 'default'}
    >
      {displayStatus}
    </Badge>
  );
};

export default StatusBadge;
