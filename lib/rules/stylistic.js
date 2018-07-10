'use strict'

module.exports = {
  rules: {
    /* disallows spaces inside array brackets */
    'array-bracket-spacing': ['error', 'never'],
    /* Require braces in arrow function body */
    'arrow-body-style': ['error', 'as-needed', {requireReturnForObjectLiteral: false}],
    /* requires one or more spaces inside single-line blocks */
    'block-spacing': 'error',
    /* enforces one true brace style */
    'brace-style': ['error', 'stroustrup', {allowSingleLine: true}],
    /* enforces camelcase style, does not check property names */
    'camelcase': ['error', {properties: 'never'}],
    /* disallows trailing commas */
    'comma-dangle': ['error', 'always-multiline'],
    /* disallows spaces before commas, requires one or more spaces after commas */
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    /*
		 * requires a comma after and on the same line
		 * as an array element, object property, or variable declaration
		 */
    'comma-style': ['error', 'last'],
    /* disallows spaces inside computed property brackets */
    'computed-property-spacing': ['error', 'never'],
    /* enforces consistent naming when capturing the current execution context */
    'consistent-this': ['error', 'that'],
    /* enforce newline at the end of file, with no multiple empty lines */
    'eol-last': 'error',
    /* require function expressions to have a name */
    'func-names': ['error', 'never'],
    /* enforces use of function declarations, allows the use of arrow functions */
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    /*
		 * this option enforces minimum and maximum identifier lengths
		 * (variable names, property names etc.)
		 */
    'id-length': ['error', {exceptions: ['x', 'y', 'e', 'i', 'j']}],
    /* require identifiers to match the provided regular expression */
    'id-match': 'error',
    /* this option sets a specific tab width for your code */
    'indent': ['error', 2],
    /* specify whether double or single quotes should be used in JSX attributes */
    'jsx-quotes': ['error', 'prefer-single'],
    /* enforces spacing between keys and values in object literal properties */
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    /* enforce consistent spacing before and after keywords */
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    /* disallow mixed 'LF' and 'CRLF' as linebreaks */
    'linebreak-style': 'off',
    /* enforces empty lines around comments */
    'lines-around-comment': 'off',
    /* specify the maximum depth that blocks can be nested */
    'max-depth': ['error', 4],
    /* specify the maximum length of a line in your program */
    'max-len': [
      'error',
      {
        code: 120,
        tabWidth: 2,
        comments: 100,
        ignoreUrls: true,
      },
    ],
    /* enforce a maximum number of lines per file */
    'max-lines': 'off',
    /* specify the maximum depth callbacks can be nested */
    'max-nested-callbacks': ['error', 3],
    /* limits the number of parameters that can be used in the function declaration. */
    'max-params': ['error', 4],
    /* enforce a maximum number of statements allowed per line */
    'max-statements-per-line': ['error', {max: 1}],
    /* specify the maximum number of statement allowed in a function */
    'max-statements': ['error', 12],
    /* require a capital letter for constructors */
    'new-cap': 'error',
    /* disallow the omission of parentheses when invoking a constructor with no arguments */
    'new-parens': 'error',
    /* allow/disallow an empty newline after var statement */
    'newline-after-var': 'error',
    /* require an empty line before return statements */
    'newline-before-return': 'error',
    /* require a newline after each call in a method chain */
    'newline-per-chained-call': 'error',
    /* disallow use of the Array constructor */
    'no-array-constructor': 'error',
    /* disallow use of bitwise operators */
    'no-bitwise': 'error',
    /* disallow use of the continue statement */
    'no-continue': 'error',
    /* disallow comments inline after code */
    'no-inline-comments': 'off',
    /* disallow if as the only statement in an else block */
    'no-lonely-if': 'error',
    /* disallow mixed binary operators */
    'no-mixed-operators': 'error',
    /* disallow mixed spaces and tabs for indentation */
    'no-mixed-spaces-and-tabs': 'error',
    /* disallow multiple empty lines */
    'no-multiple-empty-lines': ['error', {max: 2}],
    /* disallow negated conditions */
    'no-negated-condition': 'error',
    /* disallow nested ternary expressions */
    'no-nested-ternary': 'error',
    /* disallow use of the Object constructor */
    'no-new-object': 'error',
    /* disallow use of unary operators, ++ and -- */
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    /* disallow use of certain syntax in code */
    'no-restricted-syntax': 'error',
    /* disallow space between function identifier and application */
    'no-spaced-func': 'error',
    /* disallow tabs in file */
    'no-tabs': 'off',
    /* disallow the use of ternary operators */
    'no-ternary': 'off',
    /* disallow trailing whitespace at the end of lines */
    'no-trailing-spaces': 'error',
    /* disallow dangling underscores in identifiers */
    'no-underscore-dangle': 'error',
    /* disallow the use of Boolean literals in conditional expressions */
    'no-unneeded-ternary': 'error',
    /* disallow whitespace before properties */
    'no-whitespace-before-property': 'error',
    /* disallow use of undeclared variables unless mentioned in a global block */
    'no-undef': 'error',
    /* require or disallow padding inside curly braces */
    'object-curly-newline': ['error', {multiline: true}],
    /* require or disallow padding inside curly braces */
    'object-curly-spacing': ['error', 'never'],
    /* enforce placing object properties on separate lines */
    'object-property-newline': 'error',
    /* require or disallow newlines around var declarations */
    'one-var-declaration-per-line': 'error',
    /* allow just one var statement per function */
    'one-var': ['error', 'never'],
    /* require assignment operator shorthand where possible or prohibit it entirely */
    'operator-assignment': ['error', 'always'],
    /* enforce operators to be placed before or after line breaks */
    'operator-linebreak': 'error',
    /* enforce padding within blocks */
    'padded-blocks': ['error', 'never'],
    /* require quotes around object literal property names */
    'quote-props': ['error', 'consistent-as-needed'],
    /* specify whether double or single quotes should be used */
    'quotes': ['error', 'single'],
    /* Require JSDoc comment */
    'require-jsdoc': 'error',
    /* enforce spacing before and after semicolons */
    'semi-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    /* require or disallow use of semicolons instead of ASI */
    'semi': ['error', 'never'],
    /* sort variables within the same declaration block */
    'sort-vars': 'error',
    /* require or disallow space before blocks */
    'space-before-blocks': ['error', 'always'],
    /* require or disallow space before function opening parenthesis */
    'space-before-function-paren': ['error', 'never'],
    /* require or disallow spaces inside parentheses */
    'space-in-parens': ['error', 'never'],
    /* require spaces around operators */
    'space-infix-ops': 'error',
    /* Require or disallow spaces before/after unary operators */
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    /* require or disallow a space immediately following the // or /* in a comment */
    'spaced-comment': 'error',
    /* require or disallow Unicode byte order mark (BOM) */
    'unicode-bom': ['error', 'never'],
    /* require regex literals to be wrapped in parentheses */
    'wrap-regex': 'error',
  },
}
