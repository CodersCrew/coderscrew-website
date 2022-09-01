# Installation

To start you need to clone [this git repository](https://github.com/CodersCrew/coderscrew-website).  
Run `npm install` and `npm run dev` for development environment.

## Requirements

Application requires few tools installed on your system

- Node.js - **12.22.0 or later**
- pnpm - **7.x**

# Development

Each change in this repository should be made by pull request. At least one approval is required to merge. Pull requests are merged through `Squash and Merge` to present consistent merge history.  
Pull request should contain `Closes #<issue number>` text in description, eg. `Closes #9`, be titled accordingly to the issue with number in square brackets before, eg. `[9] Add name's rules for PR to readme` and be linked with issue through `Development` tab in pull request options. Make sure the linked issue contains all informations about pull request.  
After merge process every temporary branch will be deleted.

Commit messages should contain useful informations about what was done. Every commit will trigger test run, code linting and formatting using [Husky](https://github.com/typicode/husky). Do not use `--no-verify` flag for commits.

Branch types:

- main - last stable version of app
- develop - incoming changes to the next release, should be merged to main
- feature/bugfix (temporary) - any new changes, should be merged into develop, name should contain issue number and title, eg. `9-add-names-rules-for-pr-to-readme`
