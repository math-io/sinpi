'use strict';

// MODULES //

var cos = require( 'math-cos' );
var floor = require( 'math-floor' );
var sin = require( 'math-sin' );
var trunc = require( 'math-trunc' );


// CONSTANTS //

var PI = require( 'const-pi' );
var TWO52 = 4503599627370496; // 2**52
var TWO53 = 9007199254740992; // 2**53


// SINPI //

/**
* FUNCTION: sinpi( x )
*	Compute the value of `sin(πx)`.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function sinpi( x ) {
	var flg;
	var z;

	if ( x !== x ) {
		return NaN;
	}
	if ( x < 0.25 ) {
		return sin( PI * x );
	}
	// Perform argument reduction...
	z = floor( x );

	// Is `x` an integer?
	if ( z === x ) {
		// Check if `x` is larger than the largest possible floating-point integer. If so, the value is always even.
		if ( x >= TWO53 ) {
			x = 0;
			flg = 0;
		} else {
			if ( z < TWO52 ) {
				z += TWO52; // result will still be exact
			}
			x = z % 2;

			// The following is equivalent to `flg = (x << 2)`, but better to be explicit...
			if ( x === 0 ) {
				flg = 0;
			} else {
				flg = 4;
			}
		}
	} else { // `x` has decimal values...
		x = x % 2;
		flg = trunc( x * 4 );
	}
	switch ( flg ) {
	case 0:
		return sin( PI * x );
	case 1:
	case 2:
		return cos( PI * (0.5-x) );
	case 3:
	case 4:
		return sin( PI * (1-x) );
	case 5:
	case 6:
		return -cos( PI * (x-1.5) );
	}
	return sin( PI * (x-2) );
} // end FUNCTION sinpi()


// EXPORTS //

module.exports = sinpi;
