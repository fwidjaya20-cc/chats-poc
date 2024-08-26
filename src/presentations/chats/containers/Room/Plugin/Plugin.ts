import {ReactNode} from 'react'

export enum PluginType {
  Alert = 'ALERT',
  QuickAction = 'QUICK_ACTION',
  Toolbar = 'TOOLBAR',
  ToolbarDropdown = 'TOOLBAR_DROPDOWN',
}

export abstract class Plugin {
  public id: string
  public type: PluginType

  constructor(id: string, type: PluginType) {
    this.id = id
    this.type = type
  }

  public abstract render(): ReactNode
}
