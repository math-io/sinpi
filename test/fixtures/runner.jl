# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

# Integer values:
x = linspace( -2000, 2000, 2001 )
y = sinpi( x )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./integers.json", "w" )
write( outfile, JSON.json(data) )
close( outfile )


# Decimal values:
x = linspace( -100, 100, 2003 )
y = sinpi( x )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open( "./decimals.json", "w" )
write( outfile, JSON.json(data) )
close( outfile )