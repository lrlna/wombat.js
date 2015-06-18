#! /usr/bin/env node
var path = require("path");
var fs = require("fs");
var argv = require("yargs")
.usage("[$0] [-o] text.\n")
.command({
  "h": "help is on the way",
  "i": "do something else"
})
.boolean(["h", "i"])
.argv;

if (argv.h) {
  require("yargs").showHelp();
} else if (argv._.length){
  displayWombat(argv._);
} else if (!argv) {
  require("yargs").showHelp();
}

function displayWombat (thoughts) {
  var filepath = path.join(__dirname, "wombat.butts");
  var wombat = fs.readFileSync(filepath, "utf-8");
  console.log(wombat + "\n");
  console.log(concatArgvs(thoughts));
};

function concatArgvs (thoughts) {
  var wombatThoughts = thoughts.join(" ");
  var lines = {
    top: "/",
    middle: "/", 
    open: "<----(",
    close: ")---->"
  }
};
