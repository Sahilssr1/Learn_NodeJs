<div align="center">

![Learn Node.js](https://capsule-render.vercel.app/api?type=waving&color=339933&height=220&section=header&text=Learn%20Node.js&fontSize=65&fontColor=ffffff&animation=fadeIn)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=339933&center=true&vCenter=true&width=435&lines=Learn+Node.js+step+by+step;No+frameworks%2C+just+Node.js;One+script+at+a+time)](https://git.io/typing-svg)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Learning](https://img.shields.io/badge/Status-Learning-339933?style=for-the-badge)

</div>

## 🚀 About

My Node.js learning journey — backend fundamentals, one small script at a time. No frameworks, no setup, just Node.js and the terminal.

## 📚 Lessons

| # | File / Folder | What it covers |
|---|---------------|----------------|
| 01 | `01_script.js` | Your first script — variables, loops, and importing modules |
| 02 | `02_process.js` | The `process` object and reading CLI arguments via `process.argv` |
| 03 | `03_modules_export.js` | Exporting single values, functions, or objects using `module.exports` |
| 04 | `Fruits/` *(Directory)* | Requiring directories and using `index.js` as the bundle entry point |

## ▶️ How to run

```bash
# 1. Run main script (imports 03_modules_export.js and Fruits directory)
node 01_script.js

# 2. Run CLI argument reader with custom names
node 02_process.js Sahil Ram
```

### Output of `01_script.js`:
```
123
[
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'orange', color: 'orange' }
]
```

### Output of `02_process.js Sahil Ram`:
```
hello to  Sahil
hello to  Ram
```

## 📝 Notes & Concepts

### 1. `process` Object
**`process`** is a global object in Node.js — no `require()` needed. It bridges your code and the operating system:

- `process.cwd()` — current working directory
- `process.env` — environment variables
- `process.exit()` — stop the script immediately

**`process.argv`** holds the command-line arguments:

| Index | Contains |
|-------|----------|
| `process.argv[0]` | Path to the Node.js executable |
| `process.argv[1]` | Path to the script being run |
| `process.argv[2]` and beyond | Arguments you typed in the terminal |

---

### 2. `module.exports` and `require()`
- Each JavaScript file in Node.js is treated as an isolated module.
- Variables and functions remain **private** to that file by default.
- Use `module.exports = ...` to send data or functions out.
- Use `require("./filename")` to import what was exported.

---

### 3. Requiring Directories (`index.js` Entry Point)
When you require a folder path instead of a specific file:

```javascript
const info = require("./Fruits");
```

Node.js automatically looks for a special file named **`index.js`** inside that directory (`Fruits/index.js`).

**Why is this useful?**
- **Entry Point / Aggregator**: `index.js` imports individual modules (`apple.js`, `banana.js`, `orange.js`), combines them into a single structure (array or object), and exports them together.
- **Clean Imports**: Other files only need to require the folder (`./Fruits`) instead of importing each fruit file one by one.

## 🛠️ Built With

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,javascript" alt="Node.js and JavaScript" />

</div>

## 🔜 What's next

More lessons as I learn — exploring npm, package management, and Express.js!

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=339933&height=120&section=footer)

</div>
