const fs = require('fs');

function person(name, callbackFn) {
  console.log('Person name:', name);
  callbackFn();
}

function address() {
  console.log('Address function called');
}

person('John Doe', address);

// Reading a file asynchronously using a callback
fs.readFile('index.txt', 'utf-8', (err, data) => {
  if(err) {
    console.error('Error reading file:', err);
    return
  }

  console.log('File content:', data);
})
