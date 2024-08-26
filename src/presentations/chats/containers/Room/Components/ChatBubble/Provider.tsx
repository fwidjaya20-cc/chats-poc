import {PropsWithChildren} from 'react'
import {Plugin} from './Plugin'
import {PluginContext} from './Context'

type Props = {
  plugins: Plugin[]
}

export function ChatBubblePluginProvider({children, plugins}: PropsWithChildren<Props>) {
  return (
    <PluginContext.Provider
      value={{
        plugins,
      }}
    >
      {children}
    </PluginContext.Provider>
  )
}
