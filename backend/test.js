console.log(process.env)
const fs = require('fs');
const path=require("path")
const simpleGit = require('simple-git');
;
const t = require("git-credential-node")
const login = t.fillSync("https://github.com")
fs.writeFileSync("./.env",JSON.stringify(login));