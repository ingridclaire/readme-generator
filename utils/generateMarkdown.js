// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)`
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage
To run the application, run the following command from the root level of the project:
\`\`\`bash
${data.usage}
\`\`\`

## Testing
To run the tests, run the following from the root level of the application:
\`\`\`bash
${data.tests}
\`\`\`

## Contributions
${data.contributing}

## Questions
For more information about me, find me on [GitHub](https://github.com/${data.github})

Please reach out to me at ${data.email} with any questions!

## License
${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
