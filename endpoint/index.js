const express = require("express");
const app = express();

app.use(express.static(`${process.cwd()}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/public/index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${process.cwd()}/public/about.html`);
});

app.get("/discord", (req, res) => {
  res.redirect("https://discord.gg/yVVDJfM");
});

app.get("/invite", (req, res) => {
  res.redirect("https://top.gg/bot/730440454835011674");
});

app.listen(80, () => {
  console.log("Listening on port 80!");
});
