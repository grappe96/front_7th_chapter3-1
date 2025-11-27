/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white shadow hover:bg-blue-600',
        secondary: 'bg-white-500 text-gray-600 shadow hover:bg-gray-200',
        danger: 'bg-red-500 text-white shadow hover:bg-red-700',
        success: 'bg-green-600 text-white shadow hover:bg-green-700',
        outline:
          'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed',
        ghost: 'hover:bg-gray-100 text-gray-700 hover:text-gray-900',
        tab: 'border border-gray-300 bg-white-500 text-gray-600 hover:bg-gray-100 rounded-[3px] font-normal',
        tabActive:
          'border border-gray-300 bg-blue-500 text-white hover:bg-blue-600 rounded-[3px] font-bold',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2 button-padding-md-horizontal',
        lg: 'h-10 rounded-md px-8',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
