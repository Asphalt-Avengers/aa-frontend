import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'masked'; // Renamed to 'masked' for broader use
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const [showMasked, setShowMasked] = React.useState(false);

    const toggleMaskVisibility = () => {
      setShowMasked((prevState) => !prevState);
    };

    return (
      <div className="relative">
        <input
          type={variant === 'masked' && !showMasked ? 'password' : 'text'}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pr-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
        {variant === 'masked' && (
          <button
            type="button"
            onClick={toggleMaskVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            tabIndex={-1}
          >
            {showMasked ? (
              <Eye className="h-5 w-5" />
            ) : (
              <EyeOff className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
