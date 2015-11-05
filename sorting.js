function bubbleSort (arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j < arr.length; j++) {
                var x = arr[i],
                    y = arr[i + 1];
                if ( x > y) {
                    arr[i + 1] = x;
                    arr[i] = y;
                }
        };
    };
    return arr;
}