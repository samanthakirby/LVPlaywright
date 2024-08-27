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
2. After the test runs, you will notice in the terminal that there's a json accessability report in the console. This test will fail because I have asserted that there are 0 errors but there are currently 5.

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
