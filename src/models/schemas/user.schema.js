const mongoose = require("mongoose");
const { cdn } = require("../../config/constants");

const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    old_id: { type: Number, required: false },
    fullname: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    level: { type: Number, default: 1, enum: [1, 2] },
    token: { type: String, required: false },
    avatar: { type: String, required: false, default: "avatar.png" },
    status: { type: String, required: false },
    city: { type: ObjectId, ref: "City", required: false },
    country: { type: ObjectId, ref: "Country", required: false },
    lang: { type: ObjectId, ref: "Language", required: false },
    scm_token: { type: String, required: false },
    email: { type: String, required: false },
    blocked: { type: Boolean, default: false },
    suspended: { type: Boolean, default: false },
    verfied: { type: Boolean, default: false },
    activated: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.virtual("avatarUrl").get(function () {
  return cdn + "/o/100/" + this.avatar;
});

module.exports = UserSchema;
