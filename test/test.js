'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var pow = require( 'math-power' );
var sinPi = require( './../lib/' );


// FIXTURES //

var output = require( './fixtures/output.json' );
var data = output.data;
var expected = output.expected;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof sinPi === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = sinPi( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided `x > 2^53`, the function returns `0`', function test( t ) {
	var v = sinPi( pow( 2, 54 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^54' );

	v = sinPi( pow( 2, 60 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^60' );

	v = sinPi( pow( 2, 65 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^65' );

	v = sinPi( pow( 2, 70 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^70' );
	t.end();
});

tape( 'if provided an integer `x < 2^52`, the function returns `0`', function test( t ) {
	var v = sinPi( pow( 2, 51 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^51' );

	v = sinPi( pow( 2, 51 ) + 1 );
	t.ok( v === 0, 'returns 0 when provided x=2^51' );
	t.end();
});

tape( 'the function evaluates `sin(π * x)`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data.length; i++ ) {
		v = sinPi( data[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1e-12 * Math.max( 1, abs( v ), abs( expected[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
