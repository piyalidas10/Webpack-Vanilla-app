# Webpack-Vanilla-app
Webpack with vanilla JavaScript means you’re using it without frameworks (React/Angular/Vue)—just plain JS, HTML, and CSS—but still getting powerful features like bundling, optimization, and dev server.

## 🚀 1. Project Setup

**Create a new folder and initialize:**
```
mkdir webpack-vanilla-app
cd webpack-vanilla-app
npm init -y
```

**Install Webpack:**
```
npm install webpack webpack-cli --save-dev
```

## 📁 2. Project Structure
```
webpack-vanilla-app/
│
├── src/
│   ├── index.js
│   └── math.js
│
├── dist/
│
├── index.html
├── webpack.config.js
└── package.json
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




