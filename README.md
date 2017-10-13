Abbreviated Number Parser
=========================

A small library to parse abbreviated number (10k,100m,50.5b) to number.

## Installation

  `npm install abbreviated-number-parser`

## Usage

    var parser = require('abbreviated-number-parser');

    var parsed = parse("100.5k");
  
  
  Output should be `100500`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.