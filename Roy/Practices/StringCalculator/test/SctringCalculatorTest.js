
var expect = require('chai').expect;
//Sum
describe('StringCalculator', function () {
    context('Sum operation with two positive numbers', function () {
        it('sum("3,2")=5',function () {
            var calc = require('../src/StringCalculator');
            var expected = 5;
            var actual = calc.sum("3,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Sum operation with two numbers, one positive and other negative', function () {
        it('sum("3,-2")=1',function () {
            var calc = require('../src/StringCalculator');
            var expected = 1;
            var actual = calc.sum("3,-2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Sum operation with two negative numbers.', function () {
        it('sum("-3,-2")=-5',function () {
            var calc = require('../src/StringCalculator');
            var expected = -5;
            var actual = calc.sum("-3,-2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Sum operation with three numbers', function () {
        it('sum("3,2,2")=7',function () {
            var calc = require('../src/StringCalculator');
            var expected = 7;
            var actual = calc.sum("3,2,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});



describe('StringCalculator', function () {
    context('Sum operation with an empty string.', function () {
        it('sum("")=0',function () {
            var calc = require('../src/StringCalculator');
            var expected = 0;
            var actual = calc.sum("");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});



//Multiply
describe('StringCalculator', function () {
    context('Multiply operation with two positive numbers', function () {
        it('multiply("3,2")=6',function () {
            var calc = require('../src/StringCalculator');
            var expected = 6;
            var actual = calc.multiply("3,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Multiply operation with two numbers, one positive and one negative', function () {
        it('multiply("3,-2")=-6',function () {
            var calc = require('../src/StringCalculator');
            var expected = -6;
            var actual = calc.multiply("3,-2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Multiply operation with two negative numbers.', function () {
        it('multiply("-3,-2")=6',function () {
            var calc = require('../src/StringCalculator');
            var expected = 6;
            var actual = calc.multiply("-3,-2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Multiply operation with three numbers', function () {
        it('multiply("3,-2,2")=-12',function () {
            var calc = require('../src/StringCalculator');
            var expected = -12;
            var actual = calc.multiply("3,-2,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});
//Subtract
describe('StringCalculator', function () {
    context('Subtract operation with two numbers', function () {
        it('subtract("3,2")=1',function () {
            var calc = require('../src/StringCalculator');
            var expected = 1;
            var actual = calc.subtract("3,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Subtract operation with two numbers, one positive and other negative', function () {
        it('subtract("7,-2")=9',function () {
            var calc = require('../src/StringCalculator');
            var expected = 9;
            var actual = calc.subtract("7,-2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});


describe('StringCalculator', function () {
    context('Subtract operation with three numbers', function () {
        it('subtract("3,-2,3")=2',function () {
            var calc = require('../src/StringCalculator');
            var expected = 2;
            var actual = calc.subtract("3,-2,3");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

//Division
describe('StringCalculator', function () {
    context('Division operation with two numbers', function () {
        it('subtract("5,2")=2.5',function () {
            var calc = require('../src/StringCalculator');
            var expected = 2.5;
            var actual = calc.division("5,2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});


describe('StringCalculator', function () {
    context('Division operation with three numbers', function () {
        it('subtract("9,3,3")=1',function () {
            var calc = require('../src/StringCalculator');
            var expected = 1;
            var actual = calc.division("9,3,3");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Multiply with one element', function () {
        it('sum("6")=6 \n multiply("5")',function () {
            var calc = require('../src/StringCalculator');
            var expected = 6;
            actual = calc.multiply("6");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});



//Multiple operations
describe('StringCalculator', function () {
    context('Sum and sum operations', function () {
        it('sum("9,3") sum("5,3") = 20',function () {
            var calc = require('../src/StringCalculator');
            var expected = 20;
            var actual = calc.sum("9,3");
           actual = calc.sum("5,3");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});


describe('StringCalculator', function () {
    context('Sum and multiply operations', function () {
        it('sum("9,3") multiply("5") = 60',function () {
            var calc = require('../src/StringCalculator');
            var expected = 60;
             var actual = calc.sum("9,3");
            actual = calc.multiply("5");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Multiply and multiply operations', function () {
        it('multiply("9,3") multiply("5") = 135',function () {
            var calc = require('../src/StringCalculator');
            var expected = 135;
            var actual = calc.multiply("9,3");
            actual = calc.multiply("5");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Subtraction and subtraction operations', function () {
        it('Subtract("9,3") subtract("5") = -6',function () {
            var calc = require('../src/StringCalculator');
            var expected = -6;
            var actual = calc.subtract("1,2");
            actual = calc.subtract("5");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Subtraction and multiply operations', function () {
        it('Subtract("9,3") multiply("5") = 30',function () {
            var calc = require('../src/StringCalculator');
            var expected = 30;
            var actual = calc.subtract("9,3");
            actual = calc.multiply("5");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Division and division operations', function () {
        it('Division("9,3") division("2") = 3',function () {
            var calc = require('../src/StringCalculator');
            var expected = 5;
            var actual = calc.division("30,3");
            actual = calc.division("2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Division and multiply operations', function () {
        it('Division("9,3") multiply("2") = 20',function () {
            var calc = require('../src/StringCalculator');
            var expected = 20;
            var actual = calc.division("30,3");
            actual = calc.multiply("2");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

//Delimiter
describe('StringCalculator', function () {
    context('Delimiter is correct', function () {
        it('Division("30@3") = 10',function () {
            var calc = require('../src/StringCalculator');
            var expected = 10;
            calc.defineDelimiter("@");
            var actual = calc.division("30@3");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});

describe('StringCalculator', function () {
    context('Delimiter is wrong', function () {
        it('Division("30@3") = 10',function () {
            var calc = require('../src/StringCalculator');
            var expected = 10;
            calc.defineDelimiter("@");
            var actual = calc.division("30,3");
            expect(actual).to.not.equal(expected);
            calc.clear();
        })
    })
});