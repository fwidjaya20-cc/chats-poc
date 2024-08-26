import {forwardRef} from 'react'

export const MessageBubble = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="flex w-full max-w-[50%] flex-col items-end justify-between gap-2 rounded-lg bg-green-300 px-4 py-3 text-sm"
  >
    <article className="w-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum recusandae perspiciatis
      sapiente hic aut quaerat at eos ipsa modi, obcaecati aperiam accusamus ad asperiores, sed
      repellat, necessitatibus qui dolor.
    </article>
    <div className="flex w-full items-center justify-end">
      <span className="text-xs">21:00</span>
    </div>
  </div>
))
