// =======================================================
// Topic: Requiring Directories in Node.js
// =======================================================
// When you require a directory (e.g., require("./Fruits")),
// Node.js automatically searches for a file named "index.js" inside that folder.
//
// Think of "index.js" as the main entry point or reception desk:
// 1. It imports all individual files from this folder.
// 2. It bundles them together.
// 3. It exports the combined result for other files to use.
// =======================================================

// Step 1: Import individual fruit modules
const apple = require("./apple");
const orange = require("./orange");
const banana = require("./banana");

// Step 2: Combine them into a single collection
let fruits = [apple, banana, orange];

// Step 3: Export the collection
module.exports = fruits;
