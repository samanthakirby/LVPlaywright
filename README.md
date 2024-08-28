## Welcome
This is just a small demo project for the LawVu website. I only used minimal testing to avoid taxing the production site without authorisation.

## How to run
1. Download project
2. Command line: npm install
3. Command line: npx playwright test or npx playwright test --ui
4. Command line: npx playwright show-report (to view the html report)

## Packages in project
1. Playwright latest version at time of creation: 1.46
2. Accessibility check - @axe-core/playwright 4.10.0
3. Github for version control and Github Action

## Github Action
Upon merge to the main branch, the automation tests will run.

## Accessibility check
Interested on your Accessibility? Here's how to read the results of your home page:
1. Command line: npx playwright run
2. After the test runs, you will notice in the terminal that there's a json accessibility report in the console. This test should fail because we would want 0 issues, but there are 5 on the page currently and in order for the GitHub Action to pass, this needs to be passing :)

For your interest if you're not running these tests yourself:
    violations: [
    {
      id: 'color-contrast',
      impact: 'serious',
      tags: [Array],
      description: 'Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds',
      help: 'Elements must meet minimum color contrast ratio thresholds',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright',
      nodes: [Array]
    },
    {
      id: 'heading-order',
      impact: 'moderate',
      tags: [Array],
      description: 'Ensure the order of headings is semantically correct',
      help: 'Heading levels should only increase by one',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/heading-order?application=playwright',
      nodes: [Array]
    },
    {
      id: 'image-alt',
      impact: 'critical',
      tags: [Array],
      description: 'Ensure <img> elements have alternate text or a role of none or presentation',
      help: 'Images must have alternate text',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/image-alt?application=playwright',
      nodes: [Array]
    },
    {
      id: 'landmark-one-main',
      impact: 'moderate',
      tags: [Array],
      description: 'Ensure the document has a main landmark',
      help: 'Document should have one main landmark',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/landmark-one-main?application=playwright',
      nodes: [Array]
    },
    {
      id: 'region',
      impact: 'moderate',
      tags: [Array],
      description: 'Ensure all page content is contained by landmarks',
      help: 'All page content should be contained by landmarks',
      helpUrl: 'https://dequeuniversity.com/rules/axe/4.10/region?application=playwright',
      nodes: [Array]
    }

## What I would do with more time
1. Add in page object models to make the tests more maintainable
2. Visual testing for images

## Current recommendation
1. Consider addressing the accessibility violations to make it easier for visually impaired users to enjoy your site.
2. Add specific test attributes on all the elements on your site to reduce test flakiness and increase the speed that automation tests can be created to increase cover of your website.
