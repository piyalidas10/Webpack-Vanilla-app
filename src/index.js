import { add } from './math';

const result = add(2, 3);

const root = document.createElement('h1');
root.innerText = `Result: ${result}`;

document.body.appendChild(root);
