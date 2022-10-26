## install

```
npm install --save-dev @commitlint/cli @s.watanabe/commitlint-config-developers-kit
```

## Rules

```
[
  "new",
  "add",
  "remove",
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
