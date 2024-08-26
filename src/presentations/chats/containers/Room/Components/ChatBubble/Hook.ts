import {useContext} from 'react'
import {PluginContext} from './Context'

export function useChatBubblePluginContext() {
  return useContext(PluginContext)
}
