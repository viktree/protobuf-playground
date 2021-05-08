#!/bin/bash

# The citilink docker image is an extension of uber/prototool at version 1.10.0
DOCKER_IMG_EXEC="docker run --rm -v "$(pwd):/work" citilink/prototool:latest"
PROTOTOOL_CMD="${DOCKER_IMG_EXEC} prototool"

function print_usage() {
	cat <<EOF
Usage: ./code_gen.bash [--help|protoname]
		--help                     Displays this help
EOF
}

$PROTOTOOL_CMD generate protobufs/domain/greeter/api
