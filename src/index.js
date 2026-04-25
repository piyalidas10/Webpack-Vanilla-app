import { add } from './math';
/**
 * 👉 Webpack will:
 * Process CSS
 * Inject it into <style> tag in HTML automatically
 */
import './css/style.css';

import logo from './img/webpack.png';

const result = add(2, 3);

// ✅ Get root element from HTML
const app = document.getElementById('app');

// ✅ Create heading
const root = document.createElement('h1');
root.innerText = `Result: ${result}`;

// ✅ Create image
/**
 * 👉 Webpack will:
 * Copy image to /dist/assets/
 * Replace img.src with correct hashed path
 */
const img = document.createElement('img');
img.src = logo;
img.style.width = '200px';

// ✅ Append everything to #app (not body)
app.appendChild(root);
app.appendChild(img);