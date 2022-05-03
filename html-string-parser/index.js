const fs = require('fs');
const parse = require('html-react-parser');

// Load htmlContent.json
const htmlContent = JSON.parse(fs.readFileSync('./htmlContent.json', 'utf8'));
console.log(htmlContent);

// Parse htmlContent.content.content and output results
const htmlContentContent = parse(htmlContent.content.content);
console.log(htmlContentContent);