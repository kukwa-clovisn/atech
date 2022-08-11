let token = "";

var possible =
  "ABCDEFGHIJKLMgfgfgkfgjkgr434jkk432k2jk42343jk21334j2k4lj24NOP6789";

for (var i = 1; i < 30; i++) {
  token +=
    possible.charAt(Math.floor((Math.random() / i) * 10000)) +
    possible.charAt(Math.floor(Math.random() * possible.length));
}

module.exports = token;
