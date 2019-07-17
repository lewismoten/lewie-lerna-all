var a = require("lewie-repo-a");
var b = require("lewie-repo-b");

function ooo() {
  console.log("A says", a());
  console.log("B says", b());
}

module.exports = ooo;
