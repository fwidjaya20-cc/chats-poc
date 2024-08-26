import {HandThumbDownIcon} from '@heroicons/react/24/outline'
import {Fragment, MutableRefObject, ReactNode} from 'react'
import {chats} from '../../../../../../../shared/Constants'
import {MsgType} from '../../../../../../../shared/DataTypes'
import {IconButton} from '../../Button'
import {Plugin} from './Plugin'

export class ReportMessage extends Plugin {
  constructor() {
    super('report-message')
  }

  public render(bubbleRef: MutableRefObject<HTMLElement>, messageId: string): ReactNode {
    return <Wrapper bubbleRef={bubbleRef} id={messageId} />
  }
}

function Wrapper({
  bubbleRef,
  id,
}: {
  bubbleRef: MutableRefObject<HTMLElement>
  id: string
}): ReactNode {
  // const isHover = useHover(bubbleRef)

  return (
    <div
      ref={(el) => {
        if (el && bubbleRef.current) {
          bubbleRef.current?.insertAdjacentElement('afterend', el)
        }
      }}
    >
      {/* {isHover && <Component id={id} />} */}
      <Component id={id} />
    </div>
  )
}

export function Component({id}: {id: string}) {
  const {id: msgId, type} = chats.maps[id]

  const doReportMessage = () => {
    alert(`Report message: ${msgId}`)
  }

  if (type === MsgType.Announcement) {
    return <Fragment />
  }

  return (
    <IconButton onClick={doReportMessage}>
      <HandThumbDownIcon className="h-5 w-5" />
    </IconButton>
  )
}
