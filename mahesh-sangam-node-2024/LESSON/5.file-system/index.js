const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data');

if(!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log('Data folder created.');
}

const filePath = path.join(dataFolder, 'example.txt');

// sync way of creating the file
fs.writeFileSync(filePath, 'Hello, this is an example file.');
console.log('File created at:', filePath);

// Read file content
const readContentFromFile = fs.readFileSync(filePath, 'utf-8');
console.log('Content read from file:', readContentFromFile);

// Append content to the file
fs.appendFileSync(filePath, '\nThis is an appended line.');
console.log('Content appended to file.');


// async way of creating the file
fs.writeFile(path.join(dataFolder, 'async-example.txt'), 'This file is created asynchronously.', (err) => {
  if(err) throw err;
  console.log('Async file created.');

  // Read async file content
  fs.readFile(path.join(dataFolder, 'async-example.txt'), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log('Content read from async file: ', data);

    // Append content to the async file
    fs.appendFile(path.join(dataFolder, 'async-example.txt'), '\nThis is an appended line in async file.', (err) => {
      if(err) throw err;
      console.log('Content appended to async file.');

      fs.readFile(path.join(dataFolder, 'async-example.txt'), 'utf-8', (err, updatedData) => {
        if(err) throw err;
        console.log('Updated Content from async file: ', updatedData);
      });
    })
  })
})