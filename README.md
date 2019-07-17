lewie-lerna-all

`npm install lerna -g`

Setup symlinks in packages
`lerna bootstrap`
or
`lerna bootstrap --hoist`

Login to npm
`npm login`

Publish all packages

- increment version
- tag
- push to git
- publish to npm
  `lerna publish prepatch --yes`
