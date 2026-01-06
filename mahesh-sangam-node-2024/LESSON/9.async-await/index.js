function delayFn(time) {
  return new Promise((resolve) => { setTimeout(resolve, time) });
}

async function delayGreet(name) {
  await delayFn(2000);
  console.log(`Hello, ${name}!`);
}

console.log('Start async/await lesson');
delayGreet('Alice');
console.log('End of script');


async function divideFn(num1, num2) {
  delayFn(1000);
  try {
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return num1 / num2;
  }
  catch(error) {
    console.error(error.message);
    return null;
  }
}

async function main() {
  console.log('Division Result:', await divideFn(10, 5));
  console.log('Division Result:', await divideFn(10, 0));
}

main();