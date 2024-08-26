import {useContext} from 'react'
import {PluginContext} from './Context'

export function usePluginContext() {
  return useContext(PluginContext)
}
