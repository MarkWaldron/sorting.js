describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([2,1,4,8,3]) ).toEqual( [1,2,3,4,8] );
    });
});