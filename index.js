module.exports = {
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "new",
        "delete",
        "add",
        "remove",
        "ui",
        "logic",
        "patch",
        "update",
        "return",
        "bug",
        "test",
      ],
    ],
  },
};
