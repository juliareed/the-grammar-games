const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    username: { type: String, required: true },
    grade: { type: Number, required: true},
    skill: { type: String, required: true },
    pointvalue: { type: Number, required: true}
});

const Leaderboard = mongoose.model("Leaderboard", leaderboardSchema);

module.exports = Leaderboard;