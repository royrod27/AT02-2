/**
 * Created by David & Fernando on 2/8/2017.
 */

var calc = require('../src/javascript/calculator');
var expect = require('chai').expect;

//Sum operations
describe('Calculator', function () {
    context('Sum operation', function () {
        it('sum(1, 2) = 3', function () {
            var expected = 3;
            var actual = calc.sum("1,2");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Sum operation with more values', function () {
        it('sum(1, 2, 3) = 6', function () {
            var expected = 6;
            var actual = calc.sum("1,2,3");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Sum operation if is empty return 0', function () {
        it('sum() = 0', function () {
            var expected = 0;
            var actual = calc.sum("");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Sum previus result operation', function () {
        it('sum(actual, 4) = 7', function () {
            var expected = 7;
            var actual = calc.sum("1,2");
               actual = calc.sum("4");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Sum by a negative number', function () {
        it('sum(2, -4) = -2', function () {
            var expected = -2;
            var actual = calc.sum("2,-4");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Sum a number returns the number', function () {
        it('sum(2) = 2', function () {
            var expected = 2;
            var actual = calc.sum("2");

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

// describe('Calculator', function () {
//     context('Sum operation', function () {
//         it('sum(1, b) = 0', function () {
//             var expected = 0;
//             var actual = calc.sum("1,b");
//
//             expect(expected).to.equal(actual);
//         });
//     });
// });

//Substract operations
describe('Calculator', function () {
    context('Substract operation', function () {
        it('substract(1, 2) = -1', function () {
            var expected = -1;
            var actual = calc.substract('1,2');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Substract previus result operation', function () {
        it('substract(actual, 2) = -4', function () {
            var expected = -4;
            var actual = calc.substract('1,2');
            actual = calc.substract('3');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

//Multiply operations
describe('Calculator', function () {
    context('Multiply operation', function () {
        it('multiply(6, 2) = 12', function () {
            var expected = 12;
            var actual = calc.multiply('6,2');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Multiply operation', function () {
        it('multiply(1, 2, 3) = 6', function () {
            var expected = 6;
            var actual = calc.multiply('1,2,3');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Multiply previus result operation', function () {
        it('multiply(actual, 2) = 6', function () {
            var expected = 6;
            var actual = calc.multiply('1,2');
            actual = calc.multiply('3');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

//Division operations
describe('Calculator', function () {
    context('Division operation', function () {
        it('division(4, 2) = 2', function () {
            var expected = 2;
            var actual = calc.division('4,2');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Division previus result operation', function () {
        it('division(actual, 3) = 2', function () {
            var expected = 2;
            var actual = calc.division('12,2');
            actual = calc.division('3');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});

describe('Calculator', function () {
    context('Division definded a delimiter', function () {
        it('division(6$3) = 2', function () {
            var expected = 2;
            calc.delimiter('$');
            var actual = calc.division('6$3');

            expect(expected).to.equal(actual);
            calc.clear();
        });
    });
});