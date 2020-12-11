const express = require("express");
const app = express();

app.use(express.static(`${process.cwd()}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/public/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${process.cwd()}/public/about/about.html`)
});

app.get("/invite", (req, res) => {
  res.redirect("https://top.gg/bot/730440454835011674")
})

app.listen(5000, () => {
  console.log("Listening on port 5000!");
});
