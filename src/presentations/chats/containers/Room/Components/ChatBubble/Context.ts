import {createContext} from 'react'
import {Plugin} from './Plugin'

export type PluginContext = {
  plugins: Plugin[]
}

export const PluginContext = createContext<PluginContext>({
  plugins: [],
})
