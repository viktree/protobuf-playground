// package: greeter.api.v1
// file: greeter/api/api.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as greeter_api_api_pb from "../../greeter/api/api_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<greeter_api_api_pb.HelloRequest, greeter_api_api_pb.HelloReply> {
    path: string; // "/greeter.api.v1.Greeter/SayHello"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<greeter_api_api_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<greeter_api_api_pb.HelloRequest>;
    responseSerialize: grpc.serialize<greeter_api_api_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<greeter_api_api_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<greeter_api_api_pb.HelloRequest, greeter_api_api_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: greeter_api_api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_api_api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: greeter_api_api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: greeter_api_api_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_api_api_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: greeter_api_api_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: greeter_api_api_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
