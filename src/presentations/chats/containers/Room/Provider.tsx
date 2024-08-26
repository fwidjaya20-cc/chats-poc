import {PropsWithChildren, useEffect, useState} from 'react'
import {Plugin, PluginType} from './Plugin'
import {PluginContext} from './Context'

type Props = {
  plugins: Plugin[]
}

export function PluginProvider({children, plugins: inPlugins}: PropsWithChildren<Props>) {
  const [plugins, setPlugins] = useState<Map<PluginType, Plugin[]>>(new Map())

  useEffect(() => {
    setPlugins(() => {
      const result = new Map<PluginType, Plugin[]>()

      inPlugins.forEach((it) => {
        if (!result.has(it.type)) {
          result.set(it.type, [])
        }

        result.set(it.type, [...(result.get(it.type) || []), it])
      })

      return result
    })
  }, [inPlugins])

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
