# To run this script, `cd` to the `./test/fixtures` directory and then, from the Julia terminal, `include("./runner.jl")`.

import JSON

x = linspace( -100*pi, 100*pi, 4000 )

y = sinpi( x )
println( y )

data = Dict([
	("x", x),
	("expected", y)
])

outfile = open("./data.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
close( outfile )