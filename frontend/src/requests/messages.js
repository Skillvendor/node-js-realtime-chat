import { get } from './request'

export async function getMessagesRequest(params) {
  let messages = await get('messages', params)

  return messages.data
}
