# Webpack-Vanilla-app
Webpack with vanilla JavaScript means you’re using it without frameworks (React/Angular/Vue)—just plain JS, HTML, and CSS—but still getting powerful features like bundling, optimization, and dev server.

## 📥 Install Everything
Run this once:
```
npm install
```

## ▶️ Run Project
Development (with hot reload)
```
npm start
```
Production build
```
npm run build
```

## 🚀 1. Project Setup

**Create a new folder and initialize:**
```
mkdir webpack-vanilla-app
cd webpack-vanilla-app
npm init -y
```

## 📁 2. Project Structure
```
webpack-vanilla-app/
│
├── config/
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
│
├── src/
│   ├── index.js
│   ├── styles.css
│   └── components/
│
├── public/
│   └── index.html
│
├── dist/
├── package.json
└── babel.config.json
```

## 🎯 What Webpack Is Doing Here

Think of it like this:
```
index.js + math.js → Webpack → bundle.js → Browser
```

## 🧩 Why Use Webpack in Vanilla JS?

Even without frameworks, you get:
- Modular code (import/export)
- Code bundling (fewer HTTP requests)
- Tree shaking (remove unused code)
- Minification (smaller files)
- Dev server with hot reload

## 🧠 What "main" Actually Does

**In package.json:**
```
"main": "index.js"
```
This is used when your project is treated as a Node.js package (or published to npm). It tells Node:
> “Hey, if someone imports this package, start from this file.”

Just leave it or remove it. 👉 It won’t affect your Webpack build at all.

You’re building a frontend app with Webpack, so:
- Webpack uses 👉 entry in webpack.config.js
- NOT "main" in package.json

**📌 webpack.config.js (this is what matters)**
```
entry: './src/index.js'
```
This already points to your file inside src/ ✔️

**In package.json (Production-style):**
```
"main": "dist/bundle.js"
```
👉 Useful only if:
- You plan to publish this as a package
- Or reuse the built file

**Webpack uses:**
```
entry: './src/index.js'
```

**"main" in package.json:**  
❌ Not used by Webpack  
✅ Only for Node/npm packages  



