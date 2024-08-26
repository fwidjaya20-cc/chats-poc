import {usePluginContext} from '../../Hook'
import {PluginType} from '../../Plugin'

export function Header() {
  const plugins = usePluginContext().plugins.get(PluginType.Toolbar)

  return (
    <header className="flex h-20 w-full flex-row items-center bg-white px-8 py-2">
      <article className="max-w-60 flex-1 text-ellipsis">Marcella Huels</article>
      <section className="flex flex-1 items-end justify-end">
        {plugins?.map((it) => it.render())}
      </section>
    </header>
  )
}
