'use strict';

// MODULES //

var tape = require( 'tape' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var EPS = require( 'const-eps-float64' );
var abs = require( 'math-abs' );
var sinpi = require( './../lib/' );


// FIXTURES //

var integers = require( './fixtures/integers.json' );
var decimals = require( './fixtures/decimals.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof sinpi, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a range error if provided either positive or negative infinity', function test( t ) {
	t.throws( foo, RangeError, 'throws range error' );
	t.throws( bar, RangeError, 'throws range error' );
	t.end();

	function foo() {
		sinpi( PINF );
	}
	function bar() {
		sinpi( NINF );
	}
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var y = sinpi( NaN );
	t.ok( y !== y, 'returns NaN when provided NaN' );
	t.end();
});

tape( 'if provided an integer, the function returns `+-0`', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = integers.x;
	expected = integers.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpi( x[i] );
		t.equal( y, expected[ i ], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'the function computes `sin(πx)`', function test( t ) {
	var expected;
	var delta;
	var x;
	var y;
	var i;

	x = decimals.x;
	expected = decimals.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = sinpi( x[i] );
		if ( y === expected[ i ] ) {
			t.equal( y, expected[ i ], 'x: '+x[i]+'. Expected: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			t.ok( delta <= EPS, 'within tolerance. x: '+x[i]+'. Value: '+y+'. Expected: '+expected[i]+'. Tolerance: '+EPS+'.' );
		}
	}
	t.end();
});
