# Test automation using Playwright + API automation + mocha framework + Allure Report  

# Prerequisites

The first thing we need to do is to setup our environment. So here are some things that you should have to start this project:

VSCode: https://code.visualstudio.com/download </br>
NPM: https://www.npmjs.com/get-npm </br>
NodeJS: https://nodejs.org/en/download

# to install playwright and cucumber dependencies 
1.  sudo npm init playwright
2.  sudo npm install allure-playwright
3.  sudo npm install -g allure-commandline
4.  in playwright.config.js add below line if allure reporting needs to be enabled by default
 	//reporter: 'html',
	reporter: [['allure-playwright']]
 

# to run aywright scripts 
    add below line in package.json 
	"scripts": {
		"gen-html-report": "npx playwright show-report",
		"show-html-report": "npx playwright test --reporter=html && sudo npx playwright show-report",
		"ui-mode": "npx playwright test --ui",
		"gen-allure-report": "sudo allure generate -o allure-report --clean && sudo allure open allure-report",
		"show-allure-report": "sudo npx playwright test --reporter=line,allure-playwright && sudo npm run gen-allure-report"
	}

# to add baseurl and enable trace 
	update use block as below in playwright.config.js
	use: {
		/* Base URL to use in actions like `await page.goto('/')`. */
		baseURL: 'https://api.zippopotam.us',

		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on', //on-first-retry',
	},

# Steps to execute the test

1. Checkout the project from git
2. Navigate to the project root directory
3. To install all the project dependencies execute 
    npm install
4. To run the test execute

    sudo npm run show-html-report - to generate html report 
    sudo npm run show-allure-report - to generate allure report  
    
 # Application under test 
  https://api.zippopotam.us
 
 # Screenshots
[![HTML report](https://github.com/alagamai/Playwright-API-Automation-Mocha-Allure-Report/blob/master/images/html-report.png)]
[![Allure report](https://github.com/alagamai/Playwright-API-Automation-Mocha-Allure-Report/blob/master/images/report1.png)]
[![Allure show all report](https://github.com/alagamai/Playwright-API-Automation-Mocha-Allure-Report/blob/master/images/report2.png)]

