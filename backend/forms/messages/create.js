const models = require('../../models/index')
const Message = models.Message
const ChannelUpdater = require('../channels/update')
const sequelize = models.sequelize

class MessageCreator {
  constructor(createParams) {
    this.message = Message.build(createParams)
  }

  async call() {
    // should validate first

    const t = await sequelize.transaction();
    try {
      this.createdMessage = await this.message.save()
      if(this.createdMessage.channelId) {
        const channelUpdater = new ChannelUpdater({
          id: this.createdMessage.channelId,
          lastMessageContent: this.createdMessage.content
        })
        await channelUpdater.call()
      }
      await t.commit()

    } catch (error) {
      console.log('THERE WAS AN ERROR CREATING MESSAGE', error)
      await t.rollback();
    }

    return this.createdMessage
  }
}

module.exports = MessageCreator
