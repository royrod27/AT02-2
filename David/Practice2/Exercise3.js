function TestCaseManager() {
    this.TestSuites = [];

    this.addTestSuite = function (testSuite) {
        this.TestSuites.push(testSuite);
    }
}

TestCaseManager.prototype.displayTestSuite = function () {
    for (var index = 0; index < this.TestSuites.length; index++) {
        console.log("Test Suite: ", this.TestSuites[index].name);
    }
};

TestCaseManager.prototype.displayTestSuiteByThreshold = function (stateOfSuites, threshold) {
    for (var index = 0; index < this.TestSuites.length; index++) {
        if(this.TestSuites[index].stateByThreshold(threshold) === stateOfSuites) {
            console.log("Test Suite: ", this.TestSuites[index].name, "; Threshold: ", threshold)
        }
    }
};

function TestSuite(name) {
    this.name = name;
    this.TestCases = [];

    this.addTestCase = function (testCase) {
        this.TestCases.push(testCase);
    }
}

TestSuite.prototype.displayTestCases = function () {
    for (var index = 0; index < this.TestCases.length; index++) {
        console.log("Test Case: ", this.TestCases[index].name, "; State: ", this.TestCases[index].state);

    }
};

TestSuite.prototype.stateByThreshold = function (Threshold) {
    var passed = 0;
    var state = "Failed";

    for (var index = 0; index < this.TestCases.length; index++) {
        if (this.TestCases[index].state === "Passed")
            passed++;
    }
    if(((passed*100)/this.TestCases.length) >= Threshold ) {
        state = "Passed";
    }
    return state;
};

function TestCase(name, state) {
    this.name = name;
    this.state = state;
}


//TestCases
var testOne = new TestCase("TestOne", "Passed");
var testTwo = new TestCase("TestTwo", "Passed");
var testThree = new TestCase("TestThree", "Failed");
//TestSuite
var testSuiteSmoke = new TestSuite("Smoke");
testSuiteSmoke.addTestCase(testOne);
testSuiteSmoke.addTestCase(testTwo);
testSuiteSmoke.addTestCase(testThree);
testSuiteSmoke.displayTestCases();

//TestCases
var testOneSanity = new TestCase("Test1", "Failed");
var testTwoSanity = new TestCase("Test2", "Passed");
var testThreeSanity = new TestCase("Test3", "Failed");
var testFourSanity = new TestCase("Test4", "Passed");

//TestSuite
var testSuiteSanity = new TestSuite("Sanity");
testSuiteSanity.addTestCase(testOneSanity);
testSuiteSanity.addTestCase(testTwoSanity);
testSuiteSanity.addTestCase(testThreeSanity);
testSuiteSanity.addTestCase(testFourSanity);
testSuiteSanity.displayTestCases();

//Test Manager
var testManager = new TestCaseManager();
testManager.addTestSuite(testSuiteSmoke);
testManager.addTestSuite(testSuiteSanity);
testManager.displayTestSuite();
testManager.displayTestSuiteByThreshold("Passed", 50);
