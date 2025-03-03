import classNames from 'classnames';

import { TableRow } from '@/components/ui/table';

interface TableRowProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTableRow: React.FC<TableRowProps> = ({
  className,
  children,
}) => {
  return (
    <TableRow className={classNames('', className, 'DataTableRow-root')}>
      {children}
    </TableRow>
  );
};
