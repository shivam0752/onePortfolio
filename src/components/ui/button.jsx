import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * shadcn/ui-style Button component with variants.
 * Supports gradient, outline, ghost, and default variants.
 */
const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-btn font-body font-semibold text-sm',
    'ring-offset-background transition-all duration-300',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'cursor-pointer select-none',
  ].join(' '),
  {
    variants: {
      variant: {
        default:
          'bg-primary text-white hover:bg-primary/90 shadow-glow-sm hover:shadow-glow',
        gradient:
          'bg-gradient-primary text-white shadow-glow-sm hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]',
        outline:
          'border border-primary/60 bg-transparent text-primary hover:bg-primary/10 hover:border-primary hover:text-white',
        ghost:
          'bg-transparent text-white/70 hover:bg-white/5 hover:text-white',
        destructive:
          'bg-red-600 text-white hover:bg-red-700',
        secondary:
          'bg-card text-white/80 hover:bg-white/10 border border-white/10',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4 py-1.5 text-xs',
        lg: 'h-13 px-8 py-3 text-base',
        xl: 'h-14 px-10 py-3.5 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
