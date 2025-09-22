//bubble Sort
// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let swapped = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([64, 25, 12, 22, 11]));
// TC =>
//  Worst case TC -> O(N^2)
//  Best case TC -> O(N)
//  Average Case TC -> O(N^2)

//SC => O(1) -> constant

// summary
// 1.current>next element
// 2.greatest appear at end
// 3.each pass we will get correct element
// 4.stabel
// 5.inplaced

//Selection Sort

function SelectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minidx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minidx]) {
        minidx = j;
      }
    }

    if (minidx != i) {
      [arr[i], arr[minidx]] = [arr[minidx],arr[i]];
    }
  }
  return arr;
}

 console.log(SelectionSort([64, 25, 12, 22, 11])); 
// TC =>
//  Worst case TC -> O(N^2)
//  Best case TC -> O(N^2)
//  Average Case TC -> O(N^2)

//SC => O(1) -> constant

//summary
// 1.Find the minimum element in the unsorted part.
// 2.Swap it with the first unsorted element.
// 3.After each pass, the smallest element of the unsorted part is placed correctly.
// 4.Not stable 
// 5.In-place sorting 