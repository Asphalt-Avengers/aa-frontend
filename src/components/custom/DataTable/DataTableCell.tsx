import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';
import { TableCell } from '@/components/ui/table';

interface TableProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTableCell: React.FC<TableProps> = ({
  className,
  children,
}) => {
  return (
    <TableCell className={classNames('', className, 'DataTableCell-root')}>
      <Typography variant="p3">{children}</Typography>
    </TableCell>
  );
};
