# Cypress_Demo

# Step to execute the test cases
Extract the ZIP file
Open the project in VSCode
run npm i command in terminal to install the required dependencies
To run the test case in Headed Mode -> run npx cypress open -> Select E2E Testing -> Select the browser (eg: Chrome) -> Select Spec file

# We can also run in Headed Mode using below command
npx cypress run --headed --spec cypress/e2e/ui-tests/**.**.js

# Scripts run command:
test: Run all test suites.
uitest: Run UI test suites located in the cypress/e2e/ui-tests directory.
For Example:
npm run test
npm run uitest
