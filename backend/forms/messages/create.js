const models = require('../../models/index')
const Message = models.Message

class MessageCreator {
  constructor(createParams) {
    this.message = Message.build(createParams)
  }

  async call() {
    // should validate first

    this.createdMessage = await this.message.save()
    return this.createdMessage
  }
}

module.exports = MessageCreator
