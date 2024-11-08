import './Typography.scss';

import classNames from 'classnames';
import { ReactNode } from 'react';
type FontVariant =
  | 'tiny'
  | 'small'
  | 'small-medium'
  | 'small-medium-400'
  | 'medium'
  | 'medium-large'
  | 'large'
  | 'extra-large'
  | 'extra-large-600'
  | 'extra-extra-large-500'
  | 'extra-extra-large';

interface TypographyProps {
  id?: string;
  variant: FontVariant;
  className?: string;
  children:
    | string
    | string[]
    | JSX.Element
    | JSX.Element[]
    | number
    | undefined
    | null
    | (string | JSX.Element)[]
    | ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  id,
  variant,
  className,
  children,
}) => {
  return (
    <p id={id} className={classNames(variant, className)}>
      {children}
    </p>
  );
};
