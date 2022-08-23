# Installation

To start you need to clone [this git repository](https://github.com/CodersCrew/coderscrew-website).

## Requirements

Application requires few tools installed on your system

- Node.js - **12.22.0 or later**

# Development

Each change in this repository should be made by pull request. At least one approval is required to merge. Pull requests are merged through `Squash and Merge` to present consistent merge history.  
Pull request should contain `Closes #<issue number>` text in description for pull request to be linked with issue, eg. `Closes #9` and be titled accordingly to the issue with number in square brackets before, eg. `[9] Add name's rules for PR to readme`. Make sure the linked issue contains all informations about pull request.  
After merge process every temporary branch will be deleted.

Commit messages should contain useful informations about what was done. Before committing changes make sure tests passed successfully and you used automatic code formatter [Prettier](https://prettier.io/).

Branch types:

- main - last stable version of app
- develop - incoming changes to the next release, should be merged to main
- feature/bugfix (temporary) - any new changes, should be merged into develop, name should contain issue number and title, eg. `9-add-names-rules-for-pr-to-readme`
