const mongoose = require("mongoose"); // 몽구스를 사용하여 스키마를 작성한다.

const schema = new mongoose.Schema({
  title: { type: String, required: ture },
  content: { type: String, required: ture },
  author: { type: String, required: ture },
  password: { type: Number, required: ture },
  status: { type: String, enum: ["FOR_SALE", "SOLD_OUT"], default: "FOR_SALE" },
}, {timestamps: ture});

const Product = mongoose.model("product", schema);

module.exports = Product;