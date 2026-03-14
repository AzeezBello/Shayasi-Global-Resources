import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/20 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl",
        outline:
          "border-border/80 bg-white/70 text-foreground hover:bg-white hover:text-foreground aria-expanded:bg-white aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/85 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "text-foreground hover:bg-foreground/5 hover:text-foreground aria-expanded:bg-foreground/5 aria-expanded:text-foreground",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-11 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-8 gap-1 rounded-full px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1.5 rounded-full px-4 text-sm [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2 px-6 text-sm has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-11",
        "icon-xs":
          "size-8 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
