import {createContext} from 'react'
import {Plugin, PluginType} from './Plugin'

export type PluginContext = {
  plugins: Map<PluginType, Plugin[]>
}

export const PluginContext = createContext<PluginContext>({
  plugins: new Map(),
})
