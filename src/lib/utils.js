import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using clsx and resolves Tailwind CSS conflicts
 * using tailwind-merge. This is the standard shadcn/ui utility.
 *
 * @param {...(string | undefined | null | boolean | object | Array)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
