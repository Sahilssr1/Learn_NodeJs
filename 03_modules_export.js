// --- 1. Variables & Functions (Private by default) ---
// In Node.js, each file is its own module.
// These variables and functions are private and cannot be accessed
// outside this file unless they are explicitly exported.
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const pi = 3.14;


// --- 2. module.exports (The "Delivery Box") ---
// Whatever you assign to `module.exports` is what other files receive when they `require()` this file.

// Option A: Exporting a single primitive value (what is currently active)
module.exports = 123;

/*
// Option B: Exporting multiple items as an object (Recommended when you want to share functions)
module.exports = {
    sum,
    mul,
    pi
};
*/

