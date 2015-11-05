describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect(bubbleSort([2,1,4,8,3])).toEqual([1,2,3,4,8]);
    });
});

describe('Split Function', function(){
  it('is able to split one array into two', function(){
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3],[4, 5, 6]]);
  });
});


describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1,2,3,4,5,6]);
    });
});

describe('Merge Sort', function() {
    it('takes an unsorted array, sorts it gooddd', function(){
        expect(mergeSort([5, 4, 3, 2, 1, 10, 9, 8, 7, 6])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
