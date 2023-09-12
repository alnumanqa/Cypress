/*
Run the test in cypress:
·        Headless mode with default browser: npx cypress run
·        UI with default browser: npx cypress run –headed
·        UI with specific browser: npx cypress run –browser edge –headed
·        Specific file/suite headless run: npx cypress run –spec file path
·        Specific file/suite UI run: npx cypress run –spec file path --headed

*/


/*
If you face any uncaught exception issue add it in your e2e.js
Cypress.on('uncaught:exception', (err) => {
    // returning false here prevents Cypress from
    // failing the test
    console.log('Cypress detected uncaught exception: ', err);
    return false;
  });

*/