#! /usr/bin/env node
var path = require("path")
var fs = require("fs")
var clc = require("cli-color")
var argv = require("yargs")
.usage("Usage: [$0] your text here.")
.describe({
  "b": "blue wombat",
  "y": "yellow wombat",
  "g": "green wombat",
  "r": "red wombat"
})
.boolean(["b", "y", "g", "r"])
.argv

if (argv._.length){
  displayWombat(argv)
} else if (argv["$0"]) {
  require("yargs").showHelp()
}

function displayWombat (argv) {
  var filepath = path.join(__dirname, "wombat.butts")
  var wombat = fs.readFileSync(filepath, "utf-8")
  console.log(colourTheWombat(wombat, argv))
};

function colourTheWombat (wombat, argv) {
  if (argv.b) {
    return clc.blue(wombat + concatArgvs(argv._))
  } else if (argv.y) {
    return clc.yellow(wombat + concatArgvs(argv._))
  } else if (argv.g) {
    return clc.green(wombat + concatArgvs(argv._))  
  } else if (argv.r) {
    return clc.red(wombat + concatArgvs(argv._)) 
  } else {
    return wombat + concatArgvs(argv._) 
  }
};

function concatArgvs (thoughts) {
  var wombatThoughts = thoughts.join(" ")
  var lines = {
    open: "<----(",
    close: ")---->"
  }
  return putThoughtTogether(lines, wombatThoughts)
};

function putThoughtTogether (lines, wombatThoughts) {
  return lines.open + wombatThoughts + lines.close
};
