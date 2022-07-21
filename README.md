# Introduction 
This is UI automation repository for Projects

# Prerequisite

Install Node.js , To Install node.js plase follow https://docs.npmjs.com/downloading-and-installing-node-js-and-npm 

# Getting Started
INSTALL CYPRESS : npm install

# Run the test while developing 
npx cypress open

# Run the particular test in headed browser
In package.json file under scripts enter the command as mentioned below
"node_modules/.bin/cypress run --headed  --spec cypress/integration/test.spec.js --browser chrome"

# Run The test in headless mode for CICD
npx cypress run

