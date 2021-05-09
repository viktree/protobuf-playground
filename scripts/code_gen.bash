#!/bin/bash

# The citilink docker image is an extension of uber/prototool at version 1.10.0
DOCKER_IMG_EXEC="docker run --rm -v "$(pwd):/work" citilink/prototool:latest"
PROTOTOOL_CMD="${DOCKER_IMG_EXEC} prototool"

function print_usage() {
	cat <<EOF
Usage: ./code_gen.bash [lint|generate] [protoname]
EOF
}

$PROTOTOOL_CMD "$1" "$2"
