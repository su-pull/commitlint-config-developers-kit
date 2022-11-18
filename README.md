## install

```
npm install --save-dev @commitlint/cli @s.watanabe/commitlint-config-developers-kit
```

## Update Info

version 2.0.1 add [adjust]

## Rules

```
[
  "new",
  "add",
  "remove",
  "adjust"
  "override",
  "ui",
  "return",
  "bug",
  "test",
  "patch",
],
```

## commitlint.config.js Exmaple

```
module.exports = {
  extends: ['@s.watanabe/commitlint-config-developers-kit'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        "other self"
      ]
    ]
  }
};
```
