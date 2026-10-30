<div align="center">

![Learn Node.js](https://capsule-render.vercel.app/api?type=waving&color=339933&height=220&section=header&text=Learn%20Node.js&fontSize=65&fontColor=ffffff&animation=fadeIn)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=339933&center=true&vCenter=true&width=435&lines=Learn+Node.js+step+by+step;CommonJS+%26+ES+Modules;NPM+packages+%26+scripts;One+script+at+a+time)](https://git.io/typing-svg)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Learning](https://img.shields.io/badge/Status-Learning-339933?style=for-the-badge)

</div>

## 🚀 About

My Node.js learning journey — backend fundamentals, one small script at a time. Exploring core modules, the process environment, CommonJS vs. ES6 modules, npm package management, and hands-on scripts without bulky frameworks.

---

## 📚 Lessons & Project Structure

| # | File / Folder | What it covers |
|---|---|---|
| **01** | `01_script.js` | Running scripts, requiring local modules, and importing directories |
| **02** | `02_process.js` | The `process` global object and reading CLI arguments with `process.argv` |
| **03** | `03_modules_export.js` | Module scope and exporting values using `module.exports` (CommonJS) |
| **04** | `04_Fruits/` *(Directory)* | Requiring directories and using `index.js` as an aggregator / entry point |
| **05** | `05_Npm/` | Initializing npm, `package.json`, installing dependencies, and ASCII art with `figlet` |
| **06** | `06_import/` | Modern ES6 Modules (`import` / `export`) with `"type": "module"` |
| **07** | `myproject/` | Practice project managing external packages (`give-me-a-joke`) and CommonJS configs |

---

## ▶️ How to Run

### 1. Main Script (Imports & Module Bundling)
Imports `03_modules_export.js` and the `04_Fruits/` directory:
```bash
node 01_script.js
```
**Output:**
```
123
[
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'orange', color: 'orange' }
]
```

---

### 2. CLI Arguments with `process.argv`
Pass custom arguments directly from your terminal:
```bash
node 02_process.js Sahil Ram
```
**Output:**
```
hello to  Sahil
hello to  Ram
```

---

### 3. NPM & Third-Party Packages (`figlet`)
Generate ASCII art banners using an npm package:
```bash
cd 05_Npm
node 01_figlet.js
```
**Output:**
```
  ____        _     _ _   ____  _             _       ____        _             _   _ _ 
 / ___|  __ _| |__ (_) | / ___|(_)_ __   __ _| |__   |  _ \ __ _ (_)_ __  _   _| |_| | |
 \___ \ / _` | '_ \| | | \___ \| | '_ \ / _` | '_ \  | |_) / _` || | '_ \| | | | __| | |
  ___) | (_| | | | | | |  ___) | | | | | (_| | | | | |  _ < (_| || | |_) | |_| | |_|_|_|
 |____/ \__,_|_| |_|_|_| |____/|_|_| |_|\__, |_| |_| |_| \_\__,_|/ | .__/ \__,_|\__(_|_)
                                        |___/                  |__/|_|                  
```

---

### 4. ES6 Modules (`import` / `export`)
Using native ECMAScript modules in Node.js:
```bash
cd 06_import
node script.js
```
**Output:**
```
3.14
```

---

### 5. Mini Practice Project (`give-me-a-joke`)
Testing external API wrapper packages with callbacks:
```bash
cd myproject
node index.js
```

---

## 📝 Notes & Key Concepts

### 1. The `process` Object & `process.argv`
`process` is a global object in Node.js available everywhere without needing `require()`:
- `process.cwd()` — Returns the current working directory.
- `process.env` — Accesses system environment variables.
- `process.exit()` — Immediately terminates the current Node.js process.

**`process.argv` breakdown:**
| Index | Description |
|---|---|
| `process.argv[0]` | Path to the Node.js executable |
| `process.argv[1]` | Path to the executed JavaScript file |
| `process.argv[2...]` | Command-line arguments passed by the user |

---

### 2. CommonJS Modules (`require` & `module.exports`)
- Every JavaScript file in Node.js is an isolated module by default — top-level variables and functions do not pollute the global scope.
- Use `module.exports = ...` to expose data, functions, or objects.
- Use `const value = require("./path")` to import what another file exported.

---

### 3. Directory as a Module (`index.js` Aggregator Pattern)
When you require a directory path (e.g., `require("./04_Fruits")`):
1. Node.js automatically looks for an **`index.js`** file inside that folder.
2. `index.js` acts as the entry point: it imports individual modules (`apple.js`, `banana.js`, `orange.js`), bundles them into a collection or object, and exports them.
3. Clean consumer code: Other files can require the whole folder in a single line instead of importing each file individually.

---

### 4. NPM & Package Management
- **`package.json`**: Manifest of the project (metadata, dependencies, scripts).
- **`package-lock.json`**: Locks down exact dependency versions and dependency tree for reproducible installs.
- **`node_modules/`**: Directory where npm downloads and stores all package code and their dependencies.
- **Installing a package**:
  ```bash
  npm install <package-name>
  ```

---

### 5. CommonJS vs. ES6 Modules (ESM)

Node.js supports two module systems:

| Feature | CommonJS (CJS) | ES6 Modules (ESM) |
|---|---|---|
| **Syntax** | `const x = require('./x')` / `module.exports = ...` | `import { x } from './x.js'` / `export const x = ...` |
| **Default in Node** | Yes (standard `.js` files) | When `"type": "module"` in `package.json` or `.mjs` files |
| **Loading** | Synchronous | Asynchronous / Static analysis |
| **File Extension** | Optional (`require('./file')`) | **Required** in local imports (`import ... from './file.js'`) |

To enable modern ES6 imports in Node.js, add `"type": "module"` to `package.json`:
```json
{
  "name": "06_import",
  "type": "module"
}
```

---

## 🛠️ Built With

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,javascript,npm" alt="Node.js, JavaScript, and npm" />

</div>

---

## 🔜 What's Next

- Deep-dive into core Node modules (`fs`, `path`, `http`, `events`)
- Building HTTP servers with Node.js
- Moving into Express.js, routing, middleware, and REST APIs
- Connecting to databases (MongoDB / PostgreSQL)

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=339933&height=120&section=footer)

</div>