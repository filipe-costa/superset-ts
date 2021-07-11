#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const libDir = path.join(__dirname, "..", "lib");

fs.readdirSync(libDir).forEach((fileName: string) => {
  const newName = fileName.replace("superset", "index");
  const oldPath = `${libDir}/${fileName}`;
  const newPath = `${libDir}/${newName}`;

  fs.rename(oldPath, newPath, (err: Error) => {
    if (err) throw err;
    console.log(`Renamed file: ${fileName} to ${newName}`);
  });
});
