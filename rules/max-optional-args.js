/**
 * @fileoverview Rule to enforce a limit on the number of optional arguments in functions
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Enforce a limit on the number of optional arguments allowed in functions",
    },
    schema: [
      {
        properties: {
          maxOptionalArgs: {
            minimum: 0,
            type: "integer",
          },
        },
        type: "object",
      },
    ],
  },
  create: function (context) {
    let { max = 3 } = context.options[0] || {};
    if (typeof max !== "number") {
      max = 3;
    }
    if (max < 0) {
      max = 0;
    }
    if (max !== Math.floor(max)) {
      max = Math.floor(max);
    }
    return {
      FunctionDeclaration(node) {
        checkOptionalArgs(node);
      },
      FunctionExpression(node) {
        checkOptionalArgs(node);
      },
    };
    function checkOptionalArgs(node) {
      const optionalArgs = node.params
        .slice(0, -1)
        .filter((param) => param.type === "AssignmentPattern");
      if (optionalArgs.length > max - 1) {
        context.report({
          node,
          message: `Function has too many optional arguments (max ${max}). Replace them with a single options object.`,
        });
      }
    }
  },
};
