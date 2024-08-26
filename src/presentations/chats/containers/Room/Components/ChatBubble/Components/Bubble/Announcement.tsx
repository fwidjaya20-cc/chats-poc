import {forwardRef} from 'react'

export const AnnouncementBubble = forwardRef<HTMLDivElement>((_, ref) => (
  <article
    ref={ref}
    className="mx-auto flex w-full max-w-[70%] flex-row items-end justify-between gap-8 rounded-lg bg-slate-200 px-4 py-2 text-sm"
  >
    <p>Traviv Vivre requested this conversation to be transferred from Traviv Vivre to John Doe.</p>
    <p className="text-xs">21:00</p>
  </article>
))
