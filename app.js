require('dotenv').config();
const express = require('express');
// 몽고디비에 접속을 해야 하므로 가져옴
const connect = require('./schemas'); 

// 익스프레스 앱을 만든다
const app = express();
// json을 파싱하는 미들웨어를 작성해준다.
app.use(express.json());

connect(); // 실제로 몽고디비에 접속한다.

// 몽고디비에 접속을 했으니 라우터를 설정해준다.
const router = require("./routes/products.router");
app.use("/api", router);

// 3000번 포트로 열렸을 때 콘솔을 띄운다.
app.listen(3000, () => {
    console.log("감자 서버가 불타고 있어요!!!")
});
