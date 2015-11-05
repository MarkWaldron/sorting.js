function bubbleSort (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < arr.length; j++) {
                var x = arr[i],
                    y = arr[i + 1];
                if (x > y) {
                    arr[i + 1] = x;
                    arr[i] = y;
                }
        };
    };
    return arr;
}

function split(wholeArray) {
  var firstHalf, secondHalf;
  if(wholeArray.length < 2) return;
  if(wholeArray.length % 2 !== 0){
    var firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length/2));
    var secondHalf = wholeArray.slice(firstHalf.length, wholeArray.length);
  } else {
    var firstHalf = wholeArray.slice(0, wholeArray.length/2);
    var secondHalf = wholeArray.slice(firstHalf.length, wholeArray.length);
  }

  return [firstHalf, secondHalf];
}

function merge(arrOne, arrTwo){
  var result = [];

  while (arrOne.length && arrTwo.length) {
    if(arrOne[0] < arrTwo[0]){
      result.push(arrOne.shift());
    } else if (arrTwo[0] < arrOne[0]){
      result.push(arrTwo.shift());
    }
  }
  if(arrOne.length){
    result = result.concat(arrOne);
  } else if (arrTwo.length) {
    result = result.concat(arrTwo);
  }
  return result;
};


function mergeSort(arr){
  var result = [];
  var x, y;
  if(arr.length == 1){
    return arr;
  } else {
    var splitArrays = split(arr);

    x = mergeSort(splitArrays[0]);
    console.log("x: " + x);
    y = mergeSort(splitArrays[1]);
    console.log("y: " + y);
  }
  return merge(x, y);
};
