# IdeaMall - data model

IdeaMall data model is based on [TypeScript][1] [class validator][2]

[![publish Node.js Package](https://github.com/IdeaMall/data-model/actions/workflows/publish.yml/badge.svg)][3]

## API Document

https://ideamall.github.com/data-model/

## Usage

### Sign in GitHub packages with NPM

1. Generate a [PAT][4] with `read:packages` authorization
2. Run Sign-in command in your terminal:

```shell
npm login --scope=@ideamall --registry=https://npm.pkg.github.com
```

### Installation

```shell
npm i pnpm -g

pnpm i @ideamall/data-model
```

## Development

### Publish

1. update `version` in `package.json` file

2. add Git tag

```shell
git tag vx.xx.x HEAD  # such as v0.7.0
```

3. push codes with tags

```shell
git push origin main --tags  # push all commits and tags on "main" branch
```

[1]: https://www.typescriptlang.org/
[2]: https://github.com/typestack/class-validator
[3]: https://github.com/IdeaMall/data-model/actions/workflows/publish.yml
[4]: https://github.com/settings/tokens
