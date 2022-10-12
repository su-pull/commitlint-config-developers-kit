## install

```
npm install --save-dev @commitlint/cli @s.watanabe/commitlint-config-developers-kit
```

## Rules

```
[
    "new",
    "delete",
    "ui",
    "logic",
    "note",
    "add",
    "remove",
    "patch",
    "update",
    "return",
    "bug",
    "test",
]
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
        'other self-rules'
      ]
    ]
  }
};
```
