import {Body, Footer, Header} from './Components'
import {PopoutWindow, TransferAlert} from './Plugin'
import {PluginProvider} from './Provider'

export default function Component() {
  return (
    <div className="flex h-full w-full flex-col bg-gray-100/75">
      <PluginProvider plugins={[new PopoutWindow(), new TransferAlert()]}>
        <Header />
        <Body />
        <Footer />
      </PluginProvider>
    </div>
  )
}
