
/*  ⚙️ What is process?

The process object acts as a bridge between your JavaScript code and the operating system. Because it is a global object, you do not need to use require() or import to use it.
• process.cwd(): Returns the current working directory.
• process.env: Gives access to user environment variables.
• process.exit(): Forces the running script to stop immediately.

📋 What is process.argv?

When you run a file from your terminal, you can pass extra words or flags after the filename. Node.js captures these and stores them inside the process.argv array.

The Array Structure:

No matter what arguments you pass, the first two elements of process.argv are always fixed:
1. process.argv[0]: The absolute file path to the Node.js executable running the script.
2. process.argv[1]: The absolute file path to the JavaScript file being executed.
3. process.argv[2] and beyond: Any extra arguments you type into the terminal.

Code Example:

Imagine you have a file named app.js with this code:
javascript    */
// app.js

let args = process.argv

for(let i = 2; i < args.length; i++){
console.log("hello to ", args[i]);
}
