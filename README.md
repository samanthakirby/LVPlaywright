## Welcome
This is just a small demo project for the LawVu website. I only used minimal testing to avoid taxing the production site without authorisation.

## How to run
1. Download project
2. Command line: npm install
3. Command line: npx playwright test or npx playwright test --ui

## Packages in project
1. Playwright latest version at time of creation: 1.46
2. Accessability check - @axe-core/playwright 4.10.0
3. Github for version control and Github Action

## Accessability check
Interested on your accessability? Here's how to read the results of your home page:
1. Command line: npx playwright run
2. After the test runs, you will notice in the terminal that there's a json accessability report. I have limited it to violations specifically and made an assertion that there should be 5 (that's the current amount on the page - ideally we would want 0)
