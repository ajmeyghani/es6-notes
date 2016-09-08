/*
  - strict mode is enabled implicitly. No need to add 'use strict';
  - strict mode braking changes:
    - Syntax:
      - `with` statement is forbidden
      - function declaration at the top of scope only
      - more reserved identifiers: implements interface let package private protected public static yield
    - More errors:
      - ReferenceError when assigning to undeclared variable (non-strict mode: assigns on the global object)
      - changing read-only properties causes TypeError. (no effect in non-strict mode)
    - Different semantics
      - arguments doesn't track the values of parameters
      - this is undefined in stand-alone function calls

*/
