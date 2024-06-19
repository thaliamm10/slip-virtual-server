const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const templatePath = path.join(__dirname, '../templates/imposter.ejs');
const outputPath = path.join(__dirname, '../imposter.json');

ejs.renderFile(templatePath, {}, (err, str) => {
    if (err) {
        console.error('Error rendering EJS:', err);
        console.error(`Mountebank stderr: ${str}`);
    } else {
        try {
            fs.writeFileSync(outputPath, str);
            console.log('Imposter configuration generated successfully.');
        } catch (error) {
            console.error('Error writing imposter.json:', error);
        }
    }
});
