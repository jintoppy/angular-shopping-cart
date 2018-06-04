var myobj = {
    log: function(msg){
        console.log(msg);
    },
    add: function(x,y){
        this.log('added')
        return x + y;
    }
}

describe('Add function', function(){
    beforeEach(function(){
        spyOn(myobj, 'log');
    });

    it('should add two numbers', function(){
        var result = myobj.add(1,2);
        expect(result).toBe(3);
    });


    it('should call log method with added message', function(){
        var result = myobj.add(1,2);
        expect(myobj.log).toHaveBeenCalledWith('added');
    });



});