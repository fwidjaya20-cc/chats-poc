import {PropsWithChildren} from 'react'

export default function ChatLayout({children}: PropsWithChildren) {
  return (
    <div className="grid h-screen grid-cols-12">
      <aside className="col-span-3 border-r-2 bg-gray-100">Sidebar</aside>
      <main className="col-span-9">{children}</main>
    </div>
  )
}
