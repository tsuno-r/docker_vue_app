const app  = require("express")();
const http = require("http").createServer(app);
const io   = require("socket.io")(http);

const hostname = '0.0.0.0';
const port = 8100;

/**
 * "/"にアクセスがあったらindex.htmlを返却
 */
app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/index.html");
});

/**
 * [イベント] ユーザーが接続
 */
io.on("connection", (socket)=>{
  console.log("ユーザーが接続しました");

  socket.on("post", (msg)=>{
    io.emit("member-post", msg);
  });
});

/**
 * 3000番でサーバを起動する
 */
http.listen(port, hostname, ()=>{
  console.log("listening on *:3000");
});