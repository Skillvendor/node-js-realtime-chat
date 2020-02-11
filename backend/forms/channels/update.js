const models = require('../../models/index')
const Channel = models.Channel

class ChannelUpdater {
  constructor(updateParams) {
    this.recordId = updateParams.id
    this.updateParams = updateParams
    delete this.updateParams.id
  }

  async call() {
    // should validate first

    try {
      this.updatedChannel = await Channel.update(
        this.updateParams,
        { where: { id:  this.recordId }}
      )
    } catch(error) {
      console.log(error)
    }
    return this.updatedChannel
  }
}

module.exports = ChannelUpdater
