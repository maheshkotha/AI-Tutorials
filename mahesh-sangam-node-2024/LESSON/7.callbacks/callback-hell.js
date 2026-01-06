
const fs = require('fs');

fs.readFile('index.txt', 'utf-8', (err, data) => {

  if(err) {
    console.error('Error reading file:', err);
    return;
  }

  const modifyData = data.toUpperCase();

  fs.writeFile('output.txt', modifyData, (err) => {
    if(err) {
      console.error('Error writing file:', err);
      return;
    }
    console.log('File written successfully');

    fs.readFile('output.txt', 'utf-8', (err, newData) => {
      if(err) {
        console.error('Error reading new file:', err);
        return;
      }

      console.log('New file content:', newData);
    });
  })
})