import {MutableRefObject, ReactNode} from 'react'

export abstract class Plugin {
  public id: string

  constructor(id: string) {
    this.id = id
  }

  abstract render(bubbleRef: MutableRefObject<HTMLElement>, messageId: string): ReactNode
}
