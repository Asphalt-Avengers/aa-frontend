import classNames from 'classnames';

import { Typography } from '@/components/custom/Typography/Typography';

interface PageHeaderProps extends React.PropsWithChildren {
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  className,
  children,
}) => {
  return (
    <Typography
      className={classNames('', className, 'PageHeader-root')}
      variant={'h1'}
    >
      {children}
    </Typography>
  );
};
