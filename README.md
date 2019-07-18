lewie-lerna-all

`npm install lerna -g`

Setup symlinks in packages
`lerna bootstrap`
or
`lerna bootstrap --hoist`

Login to npm
`npm login`

update ssh config
`nano ~/.ssh/config`

```
Host github-lewismoten
  HostName github.com
  User git
  IdentityFile ~/.ssh/lewismoten_rsa
```

update `./.git/config` origin to use custom ssh user

```
[remote "origin"]
	url = git@github-lewismoten:lewismoten/lewie-lerna-all.git
	fetch = +refs/heads/*:refs/remotes/origin/*
```

Publish all packages

- increment version
- tag
- push to git
- publish to npm
  `lerna publish prepatch --yes`
