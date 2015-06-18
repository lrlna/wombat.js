#! /usr/bin/env node
var path = require("path");
var fs = require("fs");
var argv = require("yargs")
.usage("Usage: [$0] your text here.")
.argv;

if (argv._.length){
  displayWombat(argv._);
} else if (argv["$0"]) {
  require("yargs").showHelp();
}

function displayWombat (thoughts) {
  var filepath = path.join(__dirname, "wombat.butts");
  var wombat = fs.readFileSync(filepath, "utf-8");
  console.log(wombat);
  console.log(concatArgvs(thoughts));
};

function concatArgvs (thoughts) {
  var wombatThoughts = thoughts.join(" ");
  var lines = {
    open: "<----(",
    close: ")---->"
  }
  return putThoughtTogether(lines, wombatThoughts);
};

function putThoughtTogether (lines, wombatThoughts) {
  return lines.open + wombatThoughts + lines.close;
};
