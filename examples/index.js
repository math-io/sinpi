'use strict';

var linspace = require( 'compute-linspace' );
var sinpi = require( './../lib' );

var x = linspace( -100, 100, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( sinpi( x[ i ] ) );
}