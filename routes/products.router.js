// Router는 클라이언트의 요청을 쉽게 처리할 수 있게 도와주는 Express.js의 기본 기능 중 하나.
import express from "express";
import productsSaleSchema from "../schemas/products.schema.js";
// express의 Router를 router 상수에 할당한다.
const router = express.Router();

// 2. 상품 목록 조회 API
const products = [
  {
    title: "아이폰 15 MAX",
    author: "폰팔이",
    status: "FOR_SALE",
    createdAt: "24.01.23",
  },
  {
    title: "옥돌장판",
    author: "김춘자",
    status: "SOLD-OUT",
    createdAt: "24.01.18",
  },
];
// 3. 상품 상세 조회 API
const productId = [
  {
    title: "아이폰15 MAX",
    content: "얼마 사용하지 않은 제품 팝니다.",
    author: "판매자",
    status: "FOR_SALE",
    createdAt: "2023-10-15T03:50:45.866Z",
  },
];

// 1. 상품 등록 API

// 2-1. 상품 목록 조회
router.get("/products", (req, res) => {
  return res.json({ products: products });
});

// 3-1. 상품 목록 상세 조회
router.get("/products/:productId/", (req, res) => {
  const productId: 
  if (!productId) {
    res.status(404).json({ message: "상품 조회에 실패했습니다." });
  }
  return res.json({ productId: productId });
});

// 4. 상품 정보 수정 API
// 5. 상품 삭제 API

export default router;
