const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'give name kurva'],
    trim: true,
    maxlength: [20, 'too long name, you will be saved as Oleg']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)