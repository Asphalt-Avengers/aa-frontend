import classNames from 'classnames';

interface PageProps extends React.PropsWithChildren {
  className?: string;
}

export const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col px-10 py-12 h-fit',
        className,
        'Page-root'
      )}
    >
      {children}
    </div>
  );
};
