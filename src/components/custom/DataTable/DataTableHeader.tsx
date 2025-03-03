import classNames from 'classnames';

import { TableHeader } from '@/components/ui/table';

interface TableHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTableHeader: React.FC<TableHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <TableHeader className={classNames('', className, 'DataTableHeader-root')}>
      {children}
    </TableHeader>
  );
};
