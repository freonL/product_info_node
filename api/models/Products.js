const mongoose = require('mongoose');

// schema
const schema = mongoose.Schema({
  'title': {
    type: String,
    required: true
  },
  'category': String,
  'price': {
    type: Number,
    default: 0.00,
    required: true
  },
  'pic_url':String

})

module.exports = mongoose.model('Products', schema);