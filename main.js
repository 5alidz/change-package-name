#! /usr/bin/node
const fs = require('fs');
const newName = process.argv[2];

const package = JSON.parse(fs.readFileSync('./package.json').toString());

if (newName) {
  package.name = newName;
  fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));
}
