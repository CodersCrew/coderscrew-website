# Installation

To start you need to clone [this git repository](https://github.com/CodersCrew/coderscrew-website).

## Requirements

Application requires few tools installed on your system

- Node.js - **12.22.0 or later**

# Development

Each change in this repository should be made by pull request. At least one approval is required to merge. Pull request should contain `Closes #<issue number>` text in description for pull request to be linked with issue, eg. `Closes #9` and be titled accordingly to the issue, eg. `Add name's rules for PR to readme`. After merge process every temporary branch should be deleted.  
Commit messages should contain useful informations about what was done. Before committing changes make sure tests passed successfully and you used automatic code formatter [Prettier](https://prettier.io/).

Branch types:

- main - last stable version of app
- develop - incoming changes to the next release, should be merged to main
- feature/bugfix - any new changes, should be merged into develop, name should contain issue number and title, eg. `9-add-names-rules-for-pr-to-readme`
