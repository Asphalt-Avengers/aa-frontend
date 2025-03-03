import classNames from 'classnames';

import { TableBody } from '@/components/ui/table';

interface TableBodyProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTableBody: React.FC<TableBodyProps> = ({
  className,
  children,
}) => {
  return (
    <TableBody className={classNames('', className, 'DataTableBody-root')}>
      {children}
    </TableBody>
  );
};
