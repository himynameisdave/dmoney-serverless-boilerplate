const { rename } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');

const renameAsync = promisify(rename);

const renameHandler = () => {
    const oldPath = resolve(__dirname, './bin/', 'index.js');
    const newPath = resolve(__dirname, './bin/', 'handler.js');
    renameAsync(oldPath, newPath)
        .then(() => {
            console.log('📄 Renamed build file to handler.js!');
        });
};

renameHandler();
