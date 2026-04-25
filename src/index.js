import { add } from './math';

/**
 * 👉 Webpack will:
 * Process CSS
 * Inject it into <style> tag in HTML automatically
 */
import '../public/css/style.css';


import logo from '../public/img/webpack.png';

const result = add(2, 3);

const root = document.createElement('h1');
root.innerText = `Result: ${result}`;

/**
 * 👉 Webpack will:
 * Copy image to /dist/assets/
 * Replace img.src with correct hashed path
 */
const img = document.createElement('img');
img.src = logo;
document.body.appendChild(img);

document.body.appendChild(root);
