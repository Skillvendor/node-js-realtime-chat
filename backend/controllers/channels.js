const models = require('../models/index')
const Channel = models.Channel
const Message = models.Message

exports.index = async (req, res, next) => {
  const channels = await Channel.findAll()

  res.status(200).json(channels)
}
