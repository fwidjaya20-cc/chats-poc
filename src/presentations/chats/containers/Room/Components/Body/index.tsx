import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from '@shadcn/resizable'
import {usePluginContext} from '../../Hook'
import {PluginType} from '../../Plugin'
import {ChatBubble, ChatBubblePluginProvider, ReportMessage} from '../ChatBubble'
import {chats} from '../../../../../../shared/Constants'

export function Body() {
  const ctx = usePluginContext()

  const alerts = ctx.plugins.get(PluginType.Alert)

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel className="relative flex h-full w-full flex-col border-b border-t bg-white">
        <div className="sticky left-0 top-0 space-y-2 px-8 py-2">
          {alerts?.map((it) => it.render())}
        </div>
        <article className="flex h-full flex-col justify-end gap-4 px-8">
          <ChatBubblePluginProvider plugins={[new ReportMessage()]}>
            {chats.list.map((it) => (
              <ChatBubble key={it} id={it} />
            ))}
          </ChatBubblePluginProvider>
        </article>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className="flex flex-col items-center justify-center"
        defaultSize={35}
        minSize={0}
        maxSize={0}
      >
        Two
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
