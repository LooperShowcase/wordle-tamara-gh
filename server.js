const express = require("express");

const server = express();
const theAnswer = "style";

server.get("/guess/:word", (request, respone) => {
  const userWord = request.params.word;
  const arr = [];
  for (let i = 0; i < userWord.length; i++) {
    const ch = userWord[i];
    if (ch == theAnswer[i]) {
      arr.push(1);
    } else if (theAnswer.includes(ch)) {
      arr.push(0);
    } else {
      arr.push(-1);
    }
  }
  respone.json(arr);
});

server.use(express.static("public"));
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
