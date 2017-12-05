const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");

const schema = new Schema({
    displayName: { type: String },
    scores: { type: Number }
});

schema.plugin(findOrCreate);

const Student = mongoose.model("Student", schema);

module.exports = Student;