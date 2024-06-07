const fs = require('fs');
const path = require('path');

const folderPath = './js'; // Replace with the actual folder path

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach((file) => {
        const oldPath = path.join(folderPath, file);
        const newPath = path.join(folderPath, file.replace(/\s/g, '_'));

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(`Renamed ${file} to ${file.replace(/\s/g, '_')}`);
        });
    });
});