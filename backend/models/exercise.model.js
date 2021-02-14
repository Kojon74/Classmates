const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  firstName: { type: String, required: true, trim:true },
  lastName: { type: String, required: true, trim:true },
  enteredEmail: { type: String, required: true, trim:true },
  enteredStudentId: { type: Number, required: true, trim:true },
  university: { type: String, required: true },
  department: { type: String, required: true },
  enteredPassword: { type: String, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;