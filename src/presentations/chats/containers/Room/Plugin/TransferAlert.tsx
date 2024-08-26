import {Alert, AlertDescription, AlertTitle} from '@shadcn/alert'
import {Button} from '@shadcn/button'
import {ReactNode} from 'react'
import {Plugin, PluginType} from './Plugin'

export class TransferAlert extends Plugin {
  constructor() {
    super('transfer-alert', PluginType.Alert)
  }

  public render(): ReactNode {
    return <Component key={this.id} />
  }
}

// eslint-disable-next-line react-refresh/only-export-components
function Component() {
  const onAccept = () => {
    alert('accept transfered chat')
  }

  const onDecline = () => {
    alert('decline transfered chat')
  }

  return (
    <Alert className="flex flex-row items-center justify-center gap-6 border-0 bg-yellow-300">
      <aside>
        <AlertTitle>
          Traviv Vivre is requesting this conversation to be transferred from Traviv Vivre to John
          Doe today.
        </AlertTitle>
        <AlertDescription>
          Please help me for this conversation. I could not answere this because of the context is
          not our scope.
        </AlertDescription>
      </aside>
      <aside className="flex items-center justify-center gap-2">
        <Button className="bg-green-500 hover:bg-green-600" size="sm" onClick={onAccept}>
          Accept
        </Button>
        <Button className="bg-red-500 hover:bg-red-600" size="sm" onClick={onDecline}>
          Decline
        </Button>
      </aside>
    </Alert>
  )
}
