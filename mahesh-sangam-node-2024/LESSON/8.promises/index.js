

function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Start promises lesson');

delayFn(0).then(() => {
  console.log('First delay done');
});

console.log('End of script');


// DivideFunction
function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if(num2 === 0) {
      reject('Division by zero is not allowed');
    } else {
      resolve(num1 / num2);
    }
  })
}

// Consume the divideFn
divideFn(10, 5).then((data) => {
  console.log('Division Result: ', data);
}).catch(() => {
  console.log('An error occurred during division');
});

divideFn(10, 0).then((data) => {
  console.log('Division Result: ', data);
}).catch(() => {
  console.log('An error occurred during division');
});

