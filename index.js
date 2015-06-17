#! /usr/bin/env node
var argv = require("yargs").argv;
var path = require("path");
var fs = require("fs")

function displayWombat () {
  var filepath = path.join(__dirname, '/wombat/wombat.butts');
  var wombat = fs.readFileSync(filepath, "utf-8");
  console.log(wombat)
};

displayWombat();
console.log(argv);
