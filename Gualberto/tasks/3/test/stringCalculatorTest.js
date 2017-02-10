var calc = require('../src/stringCalculator.js');
var expect = require('chai').expect;

describe('StringCalculator',function () {
    context('Add operation for two numbers',function () {
        it('add("1,2") = 3',function () {
            var expected = 3;
            var actual = calc.add("1,2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Add operation for two numbers of two digits',function () {
        it('add("10,20") = 30',function () {
            var expected = 30;
            var actual = calc.add("10,20");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Add operation for a positive number and negative number',function () {
        it('add("7,-2") = 5',function () {
            var expected = 5;
            var actual = calc.add("7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Add operation for two negative numbers',function () {
        it('add("-7,-2") = -9',function () {
            var expected = -9;
            var actual = calc.add("-7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Add operation for three numbers',function () {
        it('add("1,5,2") = 8',function () {
            var expected = 8;
            var actual = calc.add("1,5,2");

            expect(actual).to.equal(expected);
        });
    });
});



describe('StringCalculator',function () {
    context('Multiply operation',function () {
        it('multiply("1,2,3") = 6',function () {
            var expected = 6;
            var actual = calc.multiply("1,2,3");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Multiply operation for two numbers',function () {
        it('multiply("3,2") = 6',function () {
            var expected = 6;
            var actual = calc.multiply("3,2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Multiply operation for two numbers of two digits',function () {
        it('multiply("10,20") = 200',function () {
            var expected = 200;
            var actual = calc.multiply("10,20");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Multiply operation for a positive number and negative number',function () {
        it('multiply("7,-2") = -14',function () {
            var expected = -14;
            var actual = calc.multiply("7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Multiply operation for two negative numbers',function () {
        it('multiply("-7,-2") = 14',function () {
            var expected = 14;
            var actual = calc.multiply("-7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Multiply operation for three numbers',function () {
        it('multiply("5,3,3") = 45',function () {
            var expected = 45;
            var actual = calc.multiply("5,3,3");

            expect(actual).to.equal(expected);
        });
    });
});




describe('StringCalculator',function () {
    context('Subtraction operation for two numbers',function () {
        it('subtraction("1,2") = -1',function () {
            var expected = -1;
            var actual = calc.subtraction("1,2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for two numbers of two digits',function () {
        it('subtraction("20,10") = 10',function () {
            var expected = 10;
            var actual = calc.subtraction("20,10");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for a positive number and negative number',function () {
        it('subtraction("7,-2") = 9',function () {
            var expected = 9;
            var actual = calc.subtraction("7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for two negative numbers',function () {
        it('subtraction("-7,-2") = -5',function () {
            var expected = -5;
            var actual = calc.subtraction("-7,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for three numbers',function () {
        it('subtraction("15,2,3") = 10',function () {
            var expected = 10;
            var actual = calc.subtraction("15,2,3");

            expect(actual).to.equal(expected);
        });
    });
});




describe('StringCalculator',function () {
    context('Division operation for two numbers',function () {
        it('division("1,2") = 0.5',function () {
            var expected = 0.5;
            var actual = calc.division("1,2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Division operation for two numbers of two digits',function () {
        it('division("90,45") = 2',function () {
            var expected = 2;
            var actual = calc.division("90,45");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for a positive number and negative number',function () {
        it('subtraction("10,-2") = -5',function () {
            var expected = -5;
            var actual = calc.division("10,-2");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('Subtraction operation for two negative numbers',function () {
        it('subtraction("-10,-2") = 5',function () {
            var expected = 5;
            var actual = calc.division("-10,-2");

            expect(actual).to.equal(expected);
        });
    });
});




describe('StringCalculator',function () {
    context('String empty',function () {
        it('parseInt("") = 0',function () {
            var expected = 0;
            var actual = calc.parseInt(" ");

            expect(actual).to.equal(expected);
        });
    });
});

describe('StringCalculator',function () {
    context('String empty',function () {
        it('parseInt(" ") = 0',function () {
            var expected = 0;
            var actual = calc.parseInt(" ");

            expect(actual).to.equal(expected);
        });
    });
});




describe('StringCalculator',function () {
    context('Add operation for two numbers using +++ as delimiter',function () {
        it('add("1+++2") = 3',function () {
            var expected = 3;
            var actual = calc.add("1+++2","+++");

            expect(actual).to.equal(expected);
        });
    });
});


describe('StringCalculator',function () {
    context('Multiply operation for two numbers using +++ as delimiter',function () {
        it('multiply("3+++2") = 6',function () {
            var expected = 6;
            var actual = calc.multiply("3+++2","+++");

            expect(actual).to.equal(expected);
        });
    });
});


describe('StringCalculator',function () {
    context('Subtraction operation for two numbers using +++ as delimiter',function () {
        it('subtraction("6+++2") = 4',function () {
            var expected = 4;
            var actual = calc.subtraction("6+++2","+++");

            expect(actual).to.equal(expected);
        });
    });
});


describe('StringCalculator',function () {
    context('Division operation for two numbers using +++ as delimiter',function () {
        it('division("10+++2") = 3',function () {
            var expected = 5;
            var actual = calc.division("10+++2","+++");

            expect(actual).to.equal(expected);
        });
    });
});



describe('StringCalculator', function () {
    context('Sum and sum operations', function () {
        it('sum("9,3") sum("5,3") = 20',function () {
            var calc = require('../src/stringCalculator.js');
            var expected = 20;
            var actual = calc.add("9,3");
            actual = calc.add("5,3");
            expect(actual).to.equal(expected);
            calc.clear();
        })
    })
});