import classNames from 'classnames';

interface PageProps extends React.PropsWithChildren {
  className?: string;
}

export const Page: React.FC<PageProps> = ({ className, children }) => {
  return (
    <div
      className={classNames(
        'flex flex-col mb-8 px-40 py-12 h-full',
        className,
        'Page-root'
      )}
    >
      {children}
    </div>
  );
};
