// -> ReactJS
import type { ComponentProps, ReactNode } from "react";

// -> Variants lib
import { tv, VariantProps } from 'tailwind-variants';

// -> Variants
const buttonVariants = tv({
  base: 'justify-center rounded-lg px-5 font-medium flex items-center gap-2 transition-colors',
  variants: {
    variant: {
      primary: 'text-lime-950 bg-lime-300 hover:bg-lime-400',
      secondary: 'text-zinc-200 bg-zinc-800 hover:bg-zinc-700 ', 
    },

    size: {
      default: 'py-2',
      full: 'w-full h-11'
    }
  },

  defaultVariants: {
    variant: "primary",
    size: "default"
  }
})

// -> Types
interface IButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  children: ReactNode
}
 
export function Button({ children, variant, size, ...rest }: IButtonProps) {
  return (
    <button
      {...rest}
      className={buttonVariants({ variant, size })}
    >
      {children}
    </button>
  )
}
