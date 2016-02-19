sinpi
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [sine][math-sin] of a number times [π][const-pi].


## Installation

``` bash
$ npm install math-sinpi
```


## Usage

``` javascript
var sinpi = require( 'math-sinpi' );
```

#### sinpi( x )

Computes `sin(πx)` more accurately than `sin(pi*x)`, especially for large `x`.


``` javascript
var y = sinpi( 0 );
// returns 0

y = sinpi( 0.5 );
// returns 1

y = sinpi( 0.9 );
// returns ~0.309
```


## Examples

``` javascript
var linspace = require( 'compute-linspace' );
var sinpi = require( 'math-sinpi' );

var x = linspace( -100, 100, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( sinpi( x[ i ] ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-sinpi.svg
[npm-url]: https://npmjs.org/package/math-sinpi

[build-image]: http://img.shields.io/travis/math-io/sinpi/master.svg
[build-url]: https://travis-ci.org/math-io/sinpi

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/sinpi/master.svg
[coverage-url]: https://codecov.io/github/math-io/sinpi?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/sinpi.svg
[dependencies-url]: https://david-dm.org/math-io/sinpi

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/sinpi.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/sinpi

[github-issues-image]: http://img.shields.io/github/issues/math-io/sinpi.svg
[github-issues-url]: https://github.com/math-io/sinpi/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[math-sin]: https://github.com/math-io/sin
[const-pi]: https://github.com/const-io/pi
