//Read file and update
const fs = require('fs');
fs.readFile('myFile.txt', 'utf8',(err, data) => {
    if (err) throw err;
    let newVal = data.toUpperCase();
    // console.log(data);
    fs.writeFile('myFile.txt', newVal, function (err) {
        if (err) return console.log(err);
        console.log('The file was updated');
    });
});