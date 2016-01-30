'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var pow = require( 'math-power' );
var sinpi = require( './../lib/' );


// FIXTURES //

var data = require( './fixtures/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( typeof sinpi === 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = sinpi( NaN );
	t.ok( v !== v, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided `x > 2^53`, the function returns `0`', function test( t ) {
	var v = sinpi( pow( 2, 54 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^54' );

	v = sinpi( pow( 2, 60 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^60' );

	v = sinpi( pow( 2, 65 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^65' );

	v = sinpi( pow( 2, 70 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^70' );
	t.end();
});

tape( 'if provided an integer `x < 2^52`, the function returns `0`', function test( t ) {
	var v = sinpi( pow( 2, 51 ) );
	t.ok( v === 0, 'returns 0 when provided x=2^51' );

	v = sinpi( pow( 2, 51 ) + 1 );
	t.ok( v === 0, 'returns 0 when provided x=2^51' );
	t.end();
});

tape( 'the function evaluates `sin(π * x)`', function test( t ) {
	var delta;
	var tol;
	var v;
	var i;

	for ( i = 0; i < data.length; i++ ) {
		v = sinpi( data[ i ] );
		delta = abs( v - expected[ i ] );
		tol = 1e-12 * Math.max( 1, abs( v ), abs( expected[ i ] ) );
		t.ok( delta <= tol, 'within tolerance. x: ' + data[ i ] + '. Value: ' + v + '. Expected: ' + expected[ i ] + '. Tolerance: ' + tol + '.' );
	}
	t.end();
});
