import classNames from 'classnames';
import { ReactNode } from 'react';

export type FontVariant =
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 's1'
  | 's2'
  | 's3'
  | 's4'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'p1'
  | 'p2'
  | 'p3'
  | 'p4';

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

const typographyClasses = {
  d1: 'text-[64px] leading-[80px] font-[700]',
  d2: 'text-[56px] leading-[72px] font-[700]',
  d3: 'text-[48px] leading-[64px] font-[700]',
  d4: 'text-[40px] leading-[56px] font-[700]',

  h1: 'text-[32px] leading-[40px] font-[600]',
  h2: 'text-[28px] leading-[36px] font-[600]',
  h3: 'text-[24px] leading-[32px] font-[600]',
  h4: 'text-[20px] leading-[28px] font-[600]',

  s1: 'text-[18px] leading-[24px] font-[600]',
  s2: 'text-[16px] leading-[24px] font-[600]',
  s3: 'text-[14px] leading-[20px] font-[600]',
  s4: 'text-[12px] leading-[16px] font-[600]',

  l1: 'text-[18px] leading-[24px] font-[500]',
  l2: 'text-[16px] leading-[24px] font-[500]',
  l3: 'text-[14px] leading-[20px] font-[500]',
  l4: 'text-[12px] leading-[16px] font-[500]',

  p1: 'text-[18px] leading-[24px] font-[400]',
  p2: 'text-[16px] leading-[24px] font-[400]',
  p3: 'text-[14px] leading-[20px] font-[400]',
  p4: 'text-[12px] leading-[16px] font-[400]',
};

export const Typography: React.FC<TypographyProps> = ({
  id,
  variant,
  className,
  children,
}) => {
  return (
    <p
      id={id}
      className={classNames(
        'font-inter',
        typographyClasses[variant],
        className
      )}
    >
      {children}
    </p>
  );
};
