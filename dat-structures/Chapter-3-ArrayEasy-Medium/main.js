/* ======== Remove Duplicates from Sorted Array ======== */

function removeDuplicates(arr) {
  let x = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
}

let arr = [1, 1, 2, 3, 3, 3, 3, 4, 5, 5]
removeDuplicates(arr);
console.log(arr);



/* ========= Remove Element ======== */
function removeElement(arr, value) {
  let x = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== value) {
      arr[x] = arr[i];
      x++;
    }
  }
}

let arr2 = [3, 3, 4, 5, 2, 2], value = 3;
removeElement(arr2, value);
console.log(arr2);