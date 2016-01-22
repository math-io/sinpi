using JSON

x = linspace( -100*pi, 100*pi, 4000 )

y = sinpi( x )
println( y )

data = Dict([
	("data", x),
	("expected", y)
])

outfile = open("./test/fixtures/output.json", "w")
JSON.json(data)

write( outfile, JSON.json(data) )
