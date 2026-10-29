# Learn Node.js 🌱

My Node.js learning journey — one small script at a time. No frameworks, no setup, just Node.js and the terminal.

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)

## Prerequisites

[Node.js](https://nodejs.org/) installed. Check with:

```bash
node -v
```

## Lessons

| # | File | What it covers |
|---|------|----------------|
| 01 | `01_script.js` | Your first script — variables, a `for` loop, `console.log` |
| 02 | `02_process.js` | The `process` object and reading command-line arguments with `process.argv` |
| 03 | `03_modules_export.js` | Modules and exports *(in progress)* |

## How to run

```bash
node 01_script.js
node 02_process.js Sahil Ram
```

`02_process.js` greets every name you pass after the filename:

```
hello to  Sahil
hello to  Ram
```

## Notes

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

## What's next

More lessons as I learn — modules and exports are up next.
