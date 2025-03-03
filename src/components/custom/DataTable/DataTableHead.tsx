import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';
import { TableHead } from '@/components/ui/table';

interface TableProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTableHead: React.FC<TableProps> = ({
  className,
  children,
}) => {
  return (
    <TableHead className={classNames('', className, 'DataTableHead-root')}>
      <Typography variant="l3">{children}</Typography>
    </TableHead>
  );
};
