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

| # | File | What it covers |
|---|------|----------------|
| 01 | `01_script.js` | Your first script — variables, a `for` loop, `console.log` |
| 02 | `02_process.js` | The `process` object and reading command-line arguments with `process.argv` |
| 03 | `03_modules_export.js` | Modules and exports *(in progress)* |

## ▶️ How to run

```bash
node 01_script.js
node 02_process.js Sahil Ram
```

`02_process.js` greets every name you pass after the filename:

```
hello to  Sahil
hello to  Ram
```

## 📝 Notes

**`process`** is a global object in Node.js — no `require()` needed. It bridges your code and the operating system:

- `process.cwd()` — current working directory
- `process.env` — environment variables
- `process.exit()` — stop the script immediately

**`process.argv`** holds the command-line arguments. The first two entries are always fixed:

| Index | Contains |
|-------|----------|
| `process.argv[0]` | Path to the Node.js executable |
| `process.argv[1]` | Path to the script being run |
| `process.argv[2]` and beyond | Arguments you typed |

## 🛠️ Built With

<div align="center">

<img src="https://skillicons.dev/icons?i=nodejs,javascript" alt="Node.js and JavaScript" />

</div>

## 🔜 What's next

More lessons as I learn — modules and exports are up next.

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=339933&height=120&section=footer)

</div>
