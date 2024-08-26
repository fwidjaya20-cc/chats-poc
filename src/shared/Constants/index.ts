import {MsgObj, MsgType} from '../DataTypes'

export const chats = {
  list: ['76fd201c-56e7-4fb7-9256-69a2f2a1d2bb', '26094b27-4cbb-43eb-8f40-3c74e9d757f5'],
  maps: {
    '76fd201c-56e7-4fb7-9256-69a2f2a1d2bb': {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa officia similique voluptatibus placeat. Veniam beatae, incidunt a vel, consectetur sunt non possimus laudantium eveniet voluptates impedit fugiat necessitatibus ipsa?',
      id: '76fd201c-56e7-4fb7-9256-69a2f2a1d2bb',
      timestamp: new Date(),
      type: MsgType.Message,
    },
    '26094b27-4cbb-43eb-8f40-3c74e9d757f5': {
      content:
        'Traviv Vivre requested this conversation to be transferred from Traviv Vivre to John Doe.',
      id: '26094b27-4cbb-43eb-8f40-3c74e9d757f5',
      timestamp: new Date(),
      type: MsgType.Announcement,
    },
  } as Record<string, MsgObj>,
}
