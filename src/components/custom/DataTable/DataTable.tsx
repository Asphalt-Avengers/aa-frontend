import classNames from 'classnames';

import { Table } from '@/components/ui/table';

interface TableProps extends React.PropsWithChildren {
  className?: string;
}

export const DataTable: React.FC<TableProps> = ({ className, children }) => {
  return (
    <Table className={classNames('', className, 'DataTable-root')}>
      {children}
    </Table>
  );
};
