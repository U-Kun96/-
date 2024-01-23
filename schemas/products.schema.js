// 몽구스 가져오기
import mongoose from "mongoose";

// 스키마 작성하기
// 상품 등록 스키마
const productsSaleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
  type: Number,
  required: true,
  unique: true,
 }
});

// 스키마를 통해 모델 구현 및 외부로 내보내기
export default mongoose.model("productsSaleSchema", productsSaleSchema);
