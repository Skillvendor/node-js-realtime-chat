const models = require('../models/index')
const Channel = models.Channel
const Message = models.Message
const User = models.User

exports.index = async (req, res, next) => {
  const {
    channelId = null
  } = req.query

  const messages = await Message.findAll({
    where: {
      channelId
    },
    include: [{
      model: User,
     }]
  })

  res.status(200).json(messages)
}
