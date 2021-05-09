# Protobuf Playground

Uses github actions to generate code off of \*.proto file

## Getting Started

Modify the protobuf file in `protobufs/domain/greeter/api/api.proto` and push your changes to github.
The generated code will exist in the `lib` folder.

### Deploying

The code is generated using github actions. Make sure to provide a personal access token for github under the name `GHUB_TOKEN` for the project. You can do this under Settings > Secrets.
