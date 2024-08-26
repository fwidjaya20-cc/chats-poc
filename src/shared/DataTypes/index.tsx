export interface MsgObj {
  content: string
  id: string
  timestamp: Date
  type: MsgType
}

export enum MsgType {
  Announcement = 'ANNOUNCEMENT',
  Message = 'MESSAGE',
}
