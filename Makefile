PROTOTOOL= bash scripts/prototool.bash

generate:
	${PROTOTOOL} generate protobufs/domain/greeter/api

lint:
	${PROTOTOOL} lint protobufs/domain/greeter/api

clean:
	rm -rf lib/proto/
	rm -rf lib/node/greeter
