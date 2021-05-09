#!/bin/bash

# The citilink docker image is an extension of uber/prototool at version 1.10.0
DOCKER_IMG_EXEC="docker run --rm -v "$(pwd):/work" citilink/prototool:latest"
PROTOTOOL_CMD="${DOCKER_IMG_EXEC} prototool"

function print_usage() {
	cat <<EOF
Usage: bash prototool.bash [lint|generate] [protoname]

	example:
		$ bash prototool.bash lint protobufs/domain/greeter/api

EOF
}

$PROTOTOOL_CMD "$1" "$2"
