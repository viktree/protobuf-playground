
generate:
	bash scripts/code_gen.bash generate protobufs/domain/greeter/api

lint:
	bash scripts/code_gen.bash lint protobufs/domain/greeter/api

clean:
	rm -rf lib/proto
	rm -rf lib/node
