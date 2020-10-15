// function to generate markdown for README
function licenseBadge(license){
  if(license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return ''
  }
}
function licenseLink(license){
  if(license !== "None"){
    return `\n* [License](#license)\n`
  } else {
    return ''
  }
}
function licenseText(license){
  if(license !== "None"){
    return `## License
This project has a ${license} license`
  } else {
    return ''
  }
}



function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#instalation)

* [Usage](#usage)

* [Contributing](#contributing)
${licenseLink(data.license)}
* [Tests](#tests)

* [Questions](#questions)

## Installation
To install the dependencies, run ${data.install}

## Contributing
${data.contribute}

${licenseText(data.license)}

## Tests

Run tests using the following command ${data.tests}

## Questions

You can contact me at ${data.email} or see more of my projects at [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
