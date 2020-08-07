//Crear un archivo .txt
const fs = require('fs');
fs.writeFile('myFile.txt', 'Este es mi archivo', function (err) {
    if (err) return console.log(err);
    console.log('The file was created/Saved');
});