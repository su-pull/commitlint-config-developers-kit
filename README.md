## install

```
npm install --save-dev @commitlint/cli @s.watanabe/commitlint-config-developers-kit
```

## Rules

```
  [
    "New",
    "Add",
    "Remove",
    "UI",
    "Return",
    "Bug",
    "Test",
    "Patch",
    "Override",
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
