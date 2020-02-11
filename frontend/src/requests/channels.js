import { get } from './request'

export async function getChannelsRequest() {
  let channels = await get('channels')

  return channels.data
}
