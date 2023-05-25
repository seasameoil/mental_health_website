const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 5002;
const axios = require("axios");

const CLINET_ID = process.env.REACT_APP_X_NAVER_CLIENT_ID;
const CLINET_PW = process.env.REACT_APP_X_NAVER_CLIENT_SECRET;

app.use(cors());
app.use(bodyParser.json());

app.use("/search", (res) => {
  const word = "의료";

  axios
    .get(
      "https://openapi.naver.com/v1/search/news.json?query" +
        word +
        "&display=15",
      {
        headers: {
          "X-Naver-Client-Id": CLINET_ID,
          "X-Naver-Client-Secret": CLINET_PW,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
