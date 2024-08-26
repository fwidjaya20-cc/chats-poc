import {
  ComponentProps,
  createElement,
  Fragment,
  FunctionComponent,
  MutableRefObject,
  useRef,
} from 'react'
import {AnnouncementBubble, MessageBubble} from './Components'
import {useChatBubblePluginContext} from './Hook'
import {chats} from '../../../../../../shared/Constants'

type Props = {
  id: string
}

const bubbles: Record<string, FunctionComponent> = {
  ANNOUNCEMENT: AnnouncementBubble,
  MESSAGE: MessageBubble,
}

export function ChatBubble({id}: Props) {
  const {id: msgId, type} = chats.maps[id]

  if (!bubbles[type]) {
    throw Error(`unknown type: ${type}`)
  }

  const {plugins} = useChatBubblePluginContext()

  const elRef = useRef<HTMLElement | null>()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = createElement(bubbles[type], {ref: elRef} as ComponentProps<any>)

  return (
    <div className="flex flex-row items-center justify-start gap-1">
      {plugins.map((it) => (
        <Fragment key={it.id}>{it.render(elRef as MutableRefObject<HTMLElement>, msgId)}</Fragment>
      ))}
      {Component}
    </div>
  )
}
