'use strict';

var linspace = require( 'compute-linspace' );
var sinPi = require( './../lib' );

var x = linspace( 0, 2*Math.PI, 100 );
var i;

for ( i = 0; i < x.length; i++ ) {
	console.log( sinPi( x[ i ] ) );
}
