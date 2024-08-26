import {Button, ButtonProps} from '@shadcn/button'
import {cn} from '@tools'
import {forwardRef} from 'react'

export const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({children, ...btnProps}, ref) => (
    <Button
      {...btnProps}
      ref={ref}
      className={cn(btnProps.className, 'rounded-full')}
      size="icon"
      type="button"
      variant="ghost"
    >
      {children}
    </Button>
  ),
)
