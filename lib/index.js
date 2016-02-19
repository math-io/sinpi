'use strict';

// NOTES //

/**
* Notes:
*	=> sin(-x) = -sin(x)
*	=> sin(+n) = +0, where `n` is a positive integer
*	=> sin(-n) = -sin(+n) = -0, where `n` is a positive integer
*	=> cos(-x) = cos(x)
*/


// MODULES //

var cos = require( 'math-cos' );
var sin = require( 'math-sin' );
var abs = require( 'math-abs' );
var copysign = require( 'math-float64-copysign' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var PI = require( 'const-pi' );


// SINPI //

/**
* FUNCTION: sinpi( x )
*	Computes the value of `sin(πx)`.
*
* @param {Number} x - input value
* @returns {Number} function value
*/
function sinpi( x ) {
	var ar;
	var r;
	if ( x !== x ) {
		return NaN;
	}
	if ( x === PINF || x === NINF ) {
		throw new RangeError( 'invalid input argument. Must provide a finite number. Value: `' + x + '`.' );
	}	
	// Argument reduction (reduce to [0,2))...
	r = x % 2; // sign preserving
	ar = abs( r );
	
	// If `x` is an integer, the mod is an integer...
	if ( ar === 0 || ar === 1 ) {
		return copysign( 0.0, r );
	}
	if ( ar < 0.25 ) {
		return sin( PI*r );
	}
	// In each of the following, we further reduce to [-π/4,π/4)...
	if ( ar < 0.75 ) {
		ar = 0.5 - ar;
		return copysign( cos( PI*ar ), r );
	}
	if ( ar < 1.25 ) {
		r = copysign( 1.0, r ) - r;
		return sin( PI*r );
	}
	if ( ar < 1.75 ) {
		ar = ar - 1.5;
		return -copysign( cos( PI*ar ), r );
	}
	r = r - copysign( 2.0, r );
	return sin( PI*r );
} // end FUNCTION sinpi()


// EXPORTS //

module.exports = sinpi;
