const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const findOrCreate = require("mongoose-findorcreate");
const createOrUpdate = require('mongoose-create-or-update');

const schema = new Schema({
    displayName: { type: String },
    scores: { type: Number }
});

schema.plugin(findOrCreate);
schema.plugin(createOrUpdate);

const Student = mongoose.model("Student", schema);

module.exports = Student;