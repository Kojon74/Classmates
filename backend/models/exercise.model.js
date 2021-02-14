const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  firstname: { type: String, required: true, trim:true },
  lastname: { type: String, required: true, trim:true },
  email: { type: String, required: true, trim:true },
  studentid: { type: Number, required: true, trim:true },
  university: { type: String, required: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;