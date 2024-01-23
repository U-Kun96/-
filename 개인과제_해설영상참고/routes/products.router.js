const express = require("express");
const Product = require("../schemas/products.schema.js");
const router = express.router();

// 상품 작성(POST)
router.post("/products", async (req, res) => {
  try {
    // #400 body를 입력받지 못한 경우
    //{ errorMessage : '데이터 형식이 올바르지 않습니다.}
    if (!req.body) {
      return res
        .status(400)
        .json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }
    // todo : 원래는 title ~ password 까지 꼼꼼하게 유효성 검사를 해야한다.
    const { title, content, author, password } = req.body; // body에 들어온 것을 구조분해 할당으로 꺼내온다.(json형식)

    const newProduct = new Product({
      title, // == title : title
      content,
      author,
      password,
      // status 스키마 파일에서 디폴트로 넣어줬기 때문에 괜찮을 것 같음.
    });
    await newProduct.save();
    res.status(201).json({ message: "판매 상품을 등록하였습니다." });
  } catch (error) {
    res.status(500).json({ message: "예기치 못한 오류가 발생하였습니다." });
    // todo: 에러를 꼭 로깅해야한다.
  }
});

// 상품 목록 조회(GET)
router.get("/products", async (req, res) => {
  try {
    // todo : 원래는 title ~ password 까지 꼼꼼하게 유효성 검사를 해야한다.
    // 상품 목록은 작성 날짜를 기준으로 내림차순(최신순)으로 정렬한다.
    const product = await Product.find().select(
      "_id title content author status createdAt"
    );

    if (!product) {
      res.status(404).json({ message: "상품 조회에 실패하였습니다." });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "예기치 못한 오류가 발생하였습니다." });
    // todo: 에러를 꼭 로깅해야한다.
  }
});

// 상품 상세 조회(GET)
router.get("/products/:productId", async (req, res) => {
  try {
    // todo : 원래는 title ~ password 까지 꼼꼼하게 유효성 검사를 해야한다.
    // 상품 목록은 작성 날짜를 기준으로 내림차순(최신순)으로 정렬한다.
    const products = await Product.findById(req.params.productId).sort({
      createdAt: -1,
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "예기치 못한 오류가 발생하였습니다." });
    // todo: 에러를 꼭 로깅해야한다.
  }
});

// 상품 수정(PUT)
router.get("/products", async (req, res) => {
  try {
    // todo : 원래는 title ~ password 까지 꼼꼼하게 유효성 검사를 해야한다.
    // 상품 목록은 작성 날짜를 기준으로 내림차순(최신순)으로 정렬한다.
    const product = await Product.find().select(
      "_id title content author status createdAt"
    );

    if (!product) {
      res.status(404).json({ message: "상품 조회에 실패하였습니다." });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "예기치 못한 오류가 발생하였습니다." });
    // todo: 에러를 꼭 로깅해야한다.
  }
});

// 상품 삭제(DELETE)
