import {ReactNode} from 'react'
import {Plugin, PluginType} from './Plugin'
import {ArrowsPointingOutIcon} from '@heroicons/react/24/outline'
import {IconButton} from '../Components/Button'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@shadcn/tooltip'

export class PopoutWindow extends Plugin {
  constructor() {
    super('popout-window', PluginType.Toolbar)
  }

  public render(): ReactNode {
    return <Component key={this.id} />
  }
}

// eslint-disable-next-line react-refresh/only-export-components
function Component() {
  const onClick = () => {
    alert('do any logic for popout window')
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <IconButton onClick={onClick}>
            <ArrowsPointingOutIcon className="h-5 w-5" />
          </IconButton>
        </TooltipTrigger>
        <TooltipContent>Pop-out Chat</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
