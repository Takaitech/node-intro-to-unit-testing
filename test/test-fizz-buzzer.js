// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    
    it('should return "fizz-buzz" if num is a multiple of 15', function() {
       const correctInputs = [15,30,45];
        correctInputs.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });
    
    it('should return "buzz" if num is a multiple of 5', function() {
       const correctInputs = [5,10,20];
        correctInputs.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });
    
    it('should return "fizz" if num is a multiple of 3', function() {
       const correctInputs = [3,6,9];
        correctInputs.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });
    
    it('should return num if not multiple of 3 or 5', function() {
        const incorrectInputs = [1,4,7];
        incorrectInputs.forEach(function(input) {
            expect(fizzBuzzer(input)).to.equal(input);
        });
    });
    
    it('should throw an error if num is not a number type variable', function() {
        const incorrectInputs = [true,false,"4",function(){},[1,2,3]];
        incorrectInputs.forEach(function(input) {
            expect(function() {
            fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});