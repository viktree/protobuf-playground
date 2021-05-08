// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var greeter_api_api_pb = require('../../greeter/api/api_pb.js');

function serialize_greeter_api_v1_HelloReply(arg) {
  if (!(arg instanceof greeter_api_api_pb.HelloReply)) {
    throw new Error('Expected argument of type greeter.api.v1.HelloReply');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_greeter_api_v1_HelloReply(buffer_arg) {
  return greeter_api_api_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_greeter_api_v1_HelloRequest(arg) {
  if (!(arg instanceof greeter_api_api_pb.HelloRequest)) {
    throw new Error('Expected argument of type greeter.api.v1.HelloRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_greeter_api_v1_HelloRequest(buffer_arg) {
  return greeter_api_api_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/greeter.api.v1.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: greeter_api_api_pb.HelloRequest,
    responseType: greeter_api_api_pb.HelloReply,
    requestSerialize: serialize_greeter_api_v1_HelloRequest,
    requestDeserialize: deserialize_greeter_api_v1_HelloRequest,
    responseSerialize: serialize_greeter_api_v1_HelloReply,
    responseDeserialize: deserialize_greeter_api_v1_HelloReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
