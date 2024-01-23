import express from "express"; // express를 임포트 한다.
import router from "./routes/products.router.js";
import productsSaleSchema from "./schemas/products.schema.js";

/** express를 실행하면 app이라는 서버가 만들어진다.
 * app 객체에서는 익스프레스의 모든 기능을 사용할 수 있다.**/
const app = express();
const port = 3000; // 3000번 포트를 할당한다.

app.use(express.json()); // json 형태로 서버에 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다.
// app.use(express.urlencoded({ extended: true })); // form content type에서 body 데이터를 전달하면, req.body에 데이터를 변환하여 넣어준다


app.get("/", (req, res) => {
  res.send(`주의! 감자 서버 실행 중!`);
}); // goods 라는 경로로 api를 실행하면 10번째 줄에 있는 코드 실행

app.use("/api", [router]); // app.use() => 사용한다. method(미들웨어)를 사용할 수 있게 만들어준다.

app.listen(port, () => {
  console.log(`${port}번 포트에서 감자 서버 실행 중!`);
});
