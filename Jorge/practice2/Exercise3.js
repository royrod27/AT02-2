/*
Create a small test case management tool where if is required the following
1. List of test suite
2. List of test cases and stateses
3. List of Test Suites passsed or failed according to a threshold in 
	percentage.
*/
function toolManager() {
	listSuites = [];

	this.addSuite = function(testSuite) {
		listSuites.push(testSuite);
	};

	this.displaySuiteThreshold = function(criteria, percentage) {
		listSuites.forEach(function(suite) {
			if(criteria == 'passed') {
				if(suite.percentagePassed() >= percentage) {
					console.log(suite.name);
				}
			}
			else {
				if(suite.percentagePassed() < percentage) {
					console.log(suite.name);
				}
			}
			
			
		});
	}

	this.displayListSuites = function() {
		listSuites.forEach(function(suite) {
			console.log(suite.name);
		});
	}

	this.displayDetails = function() {
		listSuites.forEach(function(suite) {
			console.log(suite.name);
			suite.displaySuite();
		});
	}
}

function testSuite(name) {
	this.name = name;
	var testCases = [];
	this.addTestCase = function(testCase) {
		testCases.push(testCase);
	};

	this.percentagePassed = function() {
		var count = 0;
		testCases.forEach(function(testCase) {
			if(testCase.state == 'passsed') {
				count++;
			}
		});
		return count * 100 / testCases.length;
	}

	this.displaySuite = function() {
		testCases.forEach(function(testCase) {
			testCase.display();
		});	
	};
}


function testCase(title, state) {
	this.title = title;
	this.state = state;

	this.display = function() {
		console.log('Title:', this.title);
		console.log('State:', this.state);
	};
};


var acceptance = new testSuite('acceptance');
acceptance.addTestCase(new testCase('verfy ..', 'passsed'));
acceptance.addTestCase(new testCase('verfy ..', 'failed'));
acceptance.addTestCase(new testCase('verfy ..', 'passsed'));
acceptance.addTestCase(new testCase('verfy ..', 'passsed'));
acceptance.addTestCase(new testCase('verfy ..', 'passsed'));

var smoke = new testSuite('smoke');
smoke.addTestCase(new testCase('verfy ..', 'passsed'));
smoke.addTestCase(new testCase('verfy ..', 'failed'));
smoke.addTestCase(new testCase('verfy ..', 'passsed'));
smoke.addTestCase(new testCase('verfy ..', 'failed'));
smoke.addTestCase(new testCase('verfy ..', 'failed'));
smoke.addTestCase(new testCase('verfy ..', 'failed'));
smoke.addTestCase(new testCase('verfy ..', 'passsed'));

var sanity = new testSuite('sanity');
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'failed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));
sanity.addTestCase(new testCase('verfy ..', 'passsed'));

var suites = new toolManager();
suites.addSuite(acceptance);
suites.addSuite(smoke);
suites.addSuite(sanity);

suites.displayListSuites();
suites.displayDetails();
console.log('Test suites passed: 80%')
suites.displaySuiteThreshold('passed', 80);
console.log('Test suites failed: 80%')
suites.displaySuiteThreshold('failed', 80);

