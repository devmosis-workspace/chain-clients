import * as _22 from "./v1/genesis";
import * as _23 from "./v1/params";
import * as _24 from "./v1/pubsub";
import * as _25 from "./v1/query";
import * as _26 from "./v1/tx";
import * as _164 from "./v1/query.lcd";
import * as _165 from "./v1/query.rpc.Query";
import * as _166 from "./v1/tx.rpc.msg";
export declare namespace pubsub {
    const v1: {
        MsgClientImpl: typeof _166.MsgClientImpl;
        QueryClientImpl: typeof _165.QueryClientImpl;
        createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
            params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
            queryPublisher(request: _25.QueryPublisherRequest): Promise<_25.QueryPublisherResponse>;
            queryPublishers(request?: _25.QueryPublishersRequest): Promise<_25.QueryPublishersResponse>;
            querySubscriber(request: _25.QuerySubscriberRequest): Promise<_25.QuerySubscriberResponse>;
            querySubscribers(request?: _25.QuerySubscribersRequest): Promise<_25.QuerySubscribersResponse>;
            queryValidatorSubscribers(request?: _25.QueryValidatorSubscribersRequest): Promise<_25.QueryValidatorSubscribersResponse>;
            queryPublisherIntent(request: _25.QueryPublisherIntentRequest): Promise<_25.QueryPublisherIntentResponse>;
            queryPublisherIntents(request?: _25.QueryPublisherIntentsRequest): Promise<_25.QueryPublisherIntentsResponse>;
            queryPublisherIntentsByPublisherDomain(request: _25.QueryPublisherIntentsByPublisherDomainRequest): Promise<_25.QueryPublisherIntentsByPublisherDomainResponse>;
            queryPublisherIntentsBySubscriptionID(request: _25.QueryPublisherIntentsBySubscriptionIDRequest): Promise<_25.QueryPublisherIntentsBySubscriptionIDResponse>;
            querySubscriberIntent(request: _25.QuerySubscriberIntentRequest): Promise<_25.QuerySubscriberIntentResponse>;
            querySubscriberIntents(request?: _25.QuerySubscriberIntentsRequest): Promise<_25.QuerySubscriberIntentsResponse>;
            querySubscriberIntentsBySubscriberAddress(request: _25.QuerySubscriberIntentsBySubscriberAddressRequest): Promise<_25.QuerySubscriberIntentsBySubscriberAddressResponse>;
            querySubscriberIntentsBySubscriptionID(request: _25.QuerySubscriberIntentsBySubscriptionIDRequest): Promise<_25.QuerySubscriberIntentsBySubscriptionIDResponse>;
            querySubscriberIntentsByPublisherDomain(request: _25.QuerySubscriberIntentsByPublisherDomainRequest): Promise<_25.QuerySubscriberIntentsByPublisherDomainResponse>;
            queryDefaultSubscription(request: _25.QueryDefaultSubscriptionRequest): Promise<_25.QueryDefaultSubscriptionResponse>;
            queryDefaultSubscriptions(request?: _25.QueryDefaultSubscriptionsRequest): Promise<_25.QueryDefaultSubscriptionsResponse>;
        };
        LCDQueryClient: typeof _164.LCDQueryClient;
        registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                removePublisher(value: _26.MsgRemovePublisherRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addSubscriber(value: _26.MsgAddSubscriberRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeSubscriber(value: _26.MsgRemoveSubscriberRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addPublisherIntent(value: _26.MsgAddPublisherIntentRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removePublisherIntent(value: _26.MsgRemovePublisherIntentRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addSubscriberIntent(value: _26.MsgAddSubscriberIntentRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                removeSubscriberIntent(value: _26.MsgRemoveSubscriberIntentRequest): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                removePublisher(value: _26.MsgRemovePublisherRequest): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherRequest;
                };
                addSubscriber(value: _26.MsgAddSubscriberRequest): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberRequest;
                };
                removeSubscriber(value: _26.MsgRemoveSubscriberRequest): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberRequest;
                };
                addPublisherIntent(value: _26.MsgAddPublisherIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgAddPublisherIntentRequest;
                };
                removePublisherIntent(value: _26.MsgRemovePublisherIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherIntentRequest;
                };
                addSubscriberIntent(value: _26.MsgAddSubscriberIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberIntentRequest;
                };
                removeSubscriberIntent(value: _26.MsgRemoveSubscriberIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberIntentRequest;
                };
            };
            fromJSON: {
                removePublisher(value: any): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherRequest;
                };
                addSubscriber(value: any): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberRequest;
                };
                removeSubscriber(value: any): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberRequest;
                };
                addPublisherIntent(value: any): {
                    typeUrl: string;
                    value: _26.MsgAddPublisherIntentRequest;
                };
                removePublisherIntent(value: any): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherIntentRequest;
                };
                addSubscriberIntent(value: any): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberIntentRequest;
                };
                removeSubscriberIntent(value: any): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberIntentRequest;
                };
            };
            fromPartial: {
                removePublisher(value: _26.MsgRemovePublisherRequest): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherRequest;
                };
                addSubscriber(value: _26.MsgAddSubscriberRequest): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberRequest;
                };
                removeSubscriber(value: _26.MsgRemoveSubscriberRequest): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberRequest;
                };
                addPublisherIntent(value: _26.MsgAddPublisherIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgAddPublisherIntentRequest;
                };
                removePublisherIntent(value: _26.MsgRemovePublisherIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgRemovePublisherIntentRequest;
                };
                addSubscriberIntent(value: _26.MsgAddSubscriberIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgAddSubscriberIntentRequest;
                };
                removeSubscriberIntent(value: _26.MsgRemoveSubscriberIntentRequest): {
                    typeUrl: string;
                    value: _26.MsgRemoveSubscriberIntentRequest;
                };
            };
        };
        AminoConverter: {
            "/pubsub.v1.MsgRemovePublisherRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgRemovePublisherRequest) => _26.MsgRemovePublisherRequestAmino;
                fromAmino: (object: _26.MsgRemovePublisherRequestAmino) => _26.MsgRemovePublisherRequest;
            };
            "/pubsub.v1.MsgAddSubscriberRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgAddSubscriberRequest) => _26.MsgAddSubscriberRequestAmino;
                fromAmino: (object: _26.MsgAddSubscriberRequestAmino) => _26.MsgAddSubscriberRequest;
            };
            "/pubsub.v1.MsgRemoveSubscriberRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgRemoveSubscriberRequest) => _26.MsgRemoveSubscriberRequestAmino;
                fromAmino: (object: _26.MsgRemoveSubscriberRequestAmino) => _26.MsgRemoveSubscriberRequest;
            };
            "/pubsub.v1.MsgAddPublisherIntentRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgAddPublisherIntentRequest) => _26.MsgAddPublisherIntentRequestAmino;
                fromAmino: (object: _26.MsgAddPublisherIntentRequestAmino) => _26.MsgAddPublisherIntentRequest;
            };
            "/pubsub.v1.MsgRemovePublisherIntentRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgRemovePublisherIntentRequest) => _26.MsgRemovePublisherIntentRequestAmino;
                fromAmino: (object: _26.MsgRemovePublisherIntentRequestAmino) => _26.MsgRemovePublisherIntentRequest;
            };
            "/pubsub.v1.MsgAddSubscriberIntentRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgAddSubscriberIntentRequest) => _26.MsgAddSubscriberIntentRequestAmino;
                fromAmino: (object: _26.MsgAddSubscriberIntentRequestAmino) => _26.MsgAddSubscriberIntentRequest;
            };
            "/pubsub.v1.MsgRemoveSubscriberIntentRequest": {
                aminoType: string;
                toAmino: (message: _26.MsgRemoveSubscriberIntentRequest) => _26.MsgRemoveSubscriberIntentRequestAmino;
                fromAmino: (object: _26.MsgRemoveSubscriberIntentRequestAmino) => _26.MsgRemoveSubscriberIntentRequest;
            };
        };
        MsgRemovePublisherRequest: {
            typeUrl: string;
            encode(message: _26.MsgRemovePublisherRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgRemovePublisherRequest;
            fromPartial(object: Partial<_26.MsgRemovePublisherRequest>): _26.MsgRemovePublisherRequest;
            fromAmino(object: _26.MsgRemovePublisherRequestAmino): _26.MsgRemovePublisherRequest;
            toAmino(message: _26.MsgRemovePublisherRequest): _26.MsgRemovePublisherRequestAmino;
            fromAminoMsg(object: _26.MsgRemovePublisherRequestAminoMsg): _26.MsgRemovePublisherRequest;
            fromProtoMsg(message: _26.MsgRemovePublisherRequestProtoMsg): _26.MsgRemovePublisherRequest;
            toProto(message: _26.MsgRemovePublisherRequest): Uint8Array;
            toProtoMsg(message: _26.MsgRemovePublisherRequest): _26.MsgRemovePublisherRequestProtoMsg;
        };
        MsgRemovePublisherResponse: {
            typeUrl: string;
            encode(_: _26.MsgRemovePublisherResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgRemovePublisherResponse;
            fromPartial(_: Partial<_26.MsgRemovePublisherResponse>): _26.MsgRemovePublisherResponse;
            fromAmino(_: _26.MsgRemovePublisherResponseAmino): _26.MsgRemovePublisherResponse;
            toAmino(_: _26.MsgRemovePublisherResponse): _26.MsgRemovePublisherResponseAmino;
            fromAminoMsg(object: _26.MsgRemovePublisherResponseAminoMsg): _26.MsgRemovePublisherResponse;
            fromProtoMsg(message: _26.MsgRemovePublisherResponseProtoMsg): _26.MsgRemovePublisherResponse;
            toProto(message: _26.MsgRemovePublisherResponse): Uint8Array;
            toProtoMsg(message: _26.MsgRemovePublisherResponse): _26.MsgRemovePublisherResponseProtoMsg;
        };
        MsgAddSubscriberRequest: {
            typeUrl: string;
            encode(message: _26.MsgAddSubscriberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgAddSubscriberRequest;
            fromPartial(object: Partial<_26.MsgAddSubscriberRequest>): _26.MsgAddSubscriberRequest;
            fromAmino(object: _26.MsgAddSubscriberRequestAmino): _26.MsgAddSubscriberRequest;
            toAmino(message: _26.MsgAddSubscriberRequest): _26.MsgAddSubscriberRequestAmino;
            fromAminoMsg(object: _26.MsgAddSubscriberRequestAminoMsg): _26.MsgAddSubscriberRequest;
            fromProtoMsg(message: _26.MsgAddSubscriberRequestProtoMsg): _26.MsgAddSubscriberRequest;
            toProto(message: _26.MsgAddSubscriberRequest): Uint8Array;
            toProtoMsg(message: _26.MsgAddSubscriberRequest): _26.MsgAddSubscriberRequestProtoMsg;
        };
        MsgAddSubscriberResponse: {
            typeUrl: string;
            encode(_: _26.MsgAddSubscriberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgAddSubscriberResponse;
            fromPartial(_: Partial<_26.MsgAddSubscriberResponse>): _26.MsgAddSubscriberResponse;
            fromAmino(_: _26.MsgAddSubscriberResponseAmino): _26.MsgAddSubscriberResponse;
            toAmino(_: _26.MsgAddSubscriberResponse): _26.MsgAddSubscriberResponseAmino;
            fromAminoMsg(object: _26.MsgAddSubscriberResponseAminoMsg): _26.MsgAddSubscriberResponse;
            fromProtoMsg(message: _26.MsgAddSubscriberResponseProtoMsg): _26.MsgAddSubscriberResponse;
            toProto(message: _26.MsgAddSubscriberResponse): Uint8Array;
            toProtoMsg(message: _26.MsgAddSubscriberResponse): _26.MsgAddSubscriberResponseProtoMsg;
        };
        MsgRemoveSubscriberRequest: {
            typeUrl: string;
            encode(message: _26.MsgRemoveSubscriberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgRemoveSubscriberRequest;
            fromPartial(object: Partial<_26.MsgRemoveSubscriberRequest>): _26.MsgRemoveSubscriberRequest;
            fromAmino(object: _26.MsgRemoveSubscriberRequestAmino): _26.MsgRemoveSubscriberRequest;
            toAmino(message: _26.MsgRemoveSubscriberRequest): _26.MsgRemoveSubscriberRequestAmino;
            fromAminoMsg(object: _26.MsgRemoveSubscriberRequestAminoMsg): _26.MsgRemoveSubscriberRequest;
            fromProtoMsg(message: _26.MsgRemoveSubscriberRequestProtoMsg): _26.MsgRemoveSubscriberRequest;
            toProto(message: _26.MsgRemoveSubscriberRequest): Uint8Array;
            toProtoMsg(message: _26.MsgRemoveSubscriberRequest): _26.MsgRemoveSubscriberRequestProtoMsg;
        };
        MsgRemoveSubscriberResponse: {
            typeUrl: string;
            encode(_: _26.MsgRemoveSubscriberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgRemoveSubscriberResponse;
            fromPartial(_: Partial<_26.MsgRemoveSubscriberResponse>): _26.MsgRemoveSubscriberResponse;
            fromAmino(_: _26.MsgRemoveSubscriberResponseAmino): _26.MsgRemoveSubscriberResponse;
            toAmino(_: _26.MsgRemoveSubscriberResponse): _26.MsgRemoveSubscriberResponseAmino;
            fromAminoMsg(object: _26.MsgRemoveSubscriberResponseAminoMsg): _26.MsgRemoveSubscriberResponse;
            fromProtoMsg(message: _26.MsgRemoveSubscriberResponseProtoMsg): _26.MsgRemoveSubscriberResponse;
            toProto(message: _26.MsgRemoveSubscriberResponse): Uint8Array;
            toProtoMsg(message: _26.MsgRemoveSubscriberResponse): _26.MsgRemoveSubscriberResponseProtoMsg;
        };
        MsgAddPublisherIntentRequest: {
            typeUrl: string;
            encode(message: _26.MsgAddPublisherIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgAddPublisherIntentRequest;
            fromPartial(object: Partial<_26.MsgAddPublisherIntentRequest>): _26.MsgAddPublisherIntentRequest;
            fromAmino(object: _26.MsgAddPublisherIntentRequestAmino): _26.MsgAddPublisherIntentRequest;
            toAmino(message: _26.MsgAddPublisherIntentRequest): _26.MsgAddPublisherIntentRequestAmino;
            fromAminoMsg(object: _26.MsgAddPublisherIntentRequestAminoMsg): _26.MsgAddPublisherIntentRequest;
            fromProtoMsg(message: _26.MsgAddPublisherIntentRequestProtoMsg): _26.MsgAddPublisherIntentRequest;
            toProto(message: _26.MsgAddPublisherIntentRequest): Uint8Array;
            toProtoMsg(message: _26.MsgAddPublisherIntentRequest): _26.MsgAddPublisherIntentRequestProtoMsg;
        };
        MsgAddPublisherIntentResponse: {
            typeUrl: string;
            encode(_: _26.MsgAddPublisherIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgAddPublisherIntentResponse;
            fromPartial(_: Partial<_26.MsgAddPublisherIntentResponse>): _26.MsgAddPublisherIntentResponse;
            fromAmino(_: _26.MsgAddPublisherIntentResponseAmino): _26.MsgAddPublisherIntentResponse;
            toAmino(_: _26.MsgAddPublisherIntentResponse): _26.MsgAddPublisherIntentResponseAmino;
            fromAminoMsg(object: _26.MsgAddPublisherIntentResponseAminoMsg): _26.MsgAddPublisherIntentResponse;
            fromProtoMsg(message: _26.MsgAddPublisherIntentResponseProtoMsg): _26.MsgAddPublisherIntentResponse;
            toProto(message: _26.MsgAddPublisherIntentResponse): Uint8Array;
            toProtoMsg(message: _26.MsgAddPublisherIntentResponse): _26.MsgAddPublisherIntentResponseProtoMsg;
        };
        MsgRemovePublisherIntentRequest: {
            typeUrl: string;
            encode(message: _26.MsgRemovePublisherIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgRemovePublisherIntentRequest;
            fromPartial(object: Partial<_26.MsgRemovePublisherIntentRequest>): _26.MsgRemovePublisherIntentRequest;
            fromAmino(object: _26.MsgRemovePublisherIntentRequestAmino): _26.MsgRemovePublisherIntentRequest;
            toAmino(message: _26.MsgRemovePublisherIntentRequest): _26.MsgRemovePublisherIntentRequestAmino;
            fromAminoMsg(object: _26.MsgRemovePublisherIntentRequestAminoMsg): _26.MsgRemovePublisherIntentRequest;
            fromProtoMsg(message: _26.MsgRemovePublisherIntentRequestProtoMsg): _26.MsgRemovePublisherIntentRequest;
            toProto(message: _26.MsgRemovePublisherIntentRequest): Uint8Array;
            toProtoMsg(message: _26.MsgRemovePublisherIntentRequest): _26.MsgRemovePublisherIntentRequestProtoMsg;
        };
        MsgRemovePublisherIntentResponse: {
            typeUrl: string;
            encode(_: _26.MsgRemovePublisherIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgRemovePublisherIntentResponse;
            fromPartial(_: Partial<_26.MsgRemovePublisherIntentResponse>): _26.MsgRemovePublisherIntentResponse;
            fromAmino(_: _26.MsgRemovePublisherIntentResponseAmino): _26.MsgRemovePublisherIntentResponse;
            toAmino(_: _26.MsgRemovePublisherIntentResponse): _26.MsgRemovePublisherIntentResponseAmino;
            fromAminoMsg(object: _26.MsgRemovePublisherIntentResponseAminoMsg): _26.MsgRemovePublisherIntentResponse;
            fromProtoMsg(message: _26.MsgRemovePublisherIntentResponseProtoMsg): _26.MsgRemovePublisherIntentResponse;
            toProto(message: _26.MsgRemovePublisherIntentResponse): Uint8Array;
            toProtoMsg(message: _26.MsgRemovePublisherIntentResponse): _26.MsgRemovePublisherIntentResponseProtoMsg;
        };
        MsgAddSubscriberIntentRequest: {
            typeUrl: string;
            encode(message: _26.MsgAddSubscriberIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgAddSubscriberIntentRequest;
            fromPartial(object: Partial<_26.MsgAddSubscriberIntentRequest>): _26.MsgAddSubscriberIntentRequest;
            fromAmino(object: _26.MsgAddSubscriberIntentRequestAmino): _26.MsgAddSubscriberIntentRequest;
            toAmino(message: _26.MsgAddSubscriberIntentRequest): _26.MsgAddSubscriberIntentRequestAmino;
            fromAminoMsg(object: _26.MsgAddSubscriberIntentRequestAminoMsg): _26.MsgAddSubscriberIntentRequest;
            fromProtoMsg(message: _26.MsgAddSubscriberIntentRequestProtoMsg): _26.MsgAddSubscriberIntentRequest;
            toProto(message: _26.MsgAddSubscriberIntentRequest): Uint8Array;
            toProtoMsg(message: _26.MsgAddSubscriberIntentRequest): _26.MsgAddSubscriberIntentRequestProtoMsg;
        };
        MsgAddSubscriberIntentResponse: {
            typeUrl: string;
            encode(_: _26.MsgAddSubscriberIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgAddSubscriberIntentResponse;
            fromPartial(_: Partial<_26.MsgAddSubscriberIntentResponse>): _26.MsgAddSubscriberIntentResponse;
            fromAmino(_: _26.MsgAddSubscriberIntentResponseAmino): _26.MsgAddSubscriberIntentResponse;
            toAmino(_: _26.MsgAddSubscriberIntentResponse): _26.MsgAddSubscriberIntentResponseAmino;
            fromAminoMsg(object: _26.MsgAddSubscriberIntentResponseAminoMsg): _26.MsgAddSubscriberIntentResponse;
            fromProtoMsg(message: _26.MsgAddSubscriberIntentResponseProtoMsg): _26.MsgAddSubscriberIntentResponse;
            toProto(message: _26.MsgAddSubscriberIntentResponse): Uint8Array;
            toProtoMsg(message: _26.MsgAddSubscriberIntentResponse): _26.MsgAddSubscriberIntentResponseProtoMsg;
        };
        MsgRemoveSubscriberIntentRequest: {
            typeUrl: string;
            encode(message: _26.MsgRemoveSubscriberIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _26.MsgRemoveSubscriberIntentRequest;
            fromPartial(object: Partial<_26.MsgRemoveSubscriberIntentRequest>): _26.MsgRemoveSubscriberIntentRequest;
            fromAmino(object: _26.MsgRemoveSubscriberIntentRequestAmino): _26.MsgRemoveSubscriberIntentRequest;
            toAmino(message: _26.MsgRemoveSubscriberIntentRequest): _26.MsgRemoveSubscriberIntentRequestAmino;
            fromAminoMsg(object: _26.MsgRemoveSubscriberIntentRequestAminoMsg): _26.MsgRemoveSubscriberIntentRequest;
            fromProtoMsg(message: _26.MsgRemoveSubscriberIntentRequestProtoMsg): _26.MsgRemoveSubscriberIntentRequest;
            toProto(message: _26.MsgRemoveSubscriberIntentRequest): Uint8Array;
            toProtoMsg(message: _26.MsgRemoveSubscriberIntentRequest): _26.MsgRemoveSubscriberIntentRequestProtoMsg;
        };
        MsgRemoveSubscriberIntentResponse: {
            typeUrl: string;
            encode(_: _26.MsgRemoveSubscriberIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _26.MsgRemoveSubscriberIntentResponse;
            fromPartial(_: Partial<_26.MsgRemoveSubscriberIntentResponse>): _26.MsgRemoveSubscriberIntentResponse;
            fromAmino(_: _26.MsgRemoveSubscriberIntentResponseAmino): _26.MsgRemoveSubscriberIntentResponse;
            toAmino(_: _26.MsgRemoveSubscriberIntentResponse): _26.MsgRemoveSubscriberIntentResponseAmino;
            fromAminoMsg(object: _26.MsgRemoveSubscriberIntentResponseAminoMsg): _26.MsgRemoveSubscriberIntentResponse;
            fromProtoMsg(message: _26.MsgRemoveSubscriberIntentResponseProtoMsg): _26.MsgRemoveSubscriberIntentResponse;
            toProto(message: _26.MsgRemoveSubscriberIntentResponse): Uint8Array;
            toProtoMsg(message: _26.MsgRemoveSubscriberIntentResponse): _26.MsgRemoveSubscriberIntentResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            encode(_: _25.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryParamsRequest;
            fromPartial(_: Partial<_25.QueryParamsRequest>): _25.QueryParamsRequest;
            fromAmino(_: _25.QueryParamsRequestAmino): _25.QueryParamsRequest;
            toAmino(_: _25.QueryParamsRequest): _25.QueryParamsRequestAmino;
            fromAminoMsg(object: _25.QueryParamsRequestAminoMsg): _25.QueryParamsRequest;
            fromProtoMsg(message: _25.QueryParamsRequestProtoMsg): _25.QueryParamsRequest;
            toProto(message: _25.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _25.QueryParamsRequest): _25.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            encode(message: _25.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryParamsResponse;
            fromPartial(object: Partial<_25.QueryParamsResponse>): _25.QueryParamsResponse;
            fromAmino(object: _25.QueryParamsResponseAmino): _25.QueryParamsResponse;
            toAmino(message: _25.QueryParamsResponse): _25.QueryParamsResponseAmino;
            fromAminoMsg(object: _25.QueryParamsResponseAminoMsg): _25.QueryParamsResponse;
            fromProtoMsg(message: _25.QueryParamsResponseProtoMsg): _25.QueryParamsResponse;
            toProto(message: _25.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _25.QueryParamsResponse): _25.QueryParamsResponseProtoMsg;
        };
        QueryPublisherRequest: {
            typeUrl: string;
            encode(message: _25.QueryPublisherRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherRequest;
            fromPartial(object: Partial<_25.QueryPublisherRequest>): _25.QueryPublisherRequest;
            fromAmino(object: _25.QueryPublisherRequestAmino): _25.QueryPublisherRequest;
            toAmino(message: _25.QueryPublisherRequest): _25.QueryPublisherRequestAmino;
            fromAminoMsg(object: _25.QueryPublisherRequestAminoMsg): _25.QueryPublisherRequest;
            fromProtoMsg(message: _25.QueryPublisherRequestProtoMsg): _25.QueryPublisherRequest;
            toProto(message: _25.QueryPublisherRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherRequest): _25.QueryPublisherRequestProtoMsg;
        };
        QueryPublisherResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublisherResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherResponse;
            fromPartial(object: Partial<_25.QueryPublisherResponse>): _25.QueryPublisherResponse;
            fromAmino(object: _25.QueryPublisherResponseAmino): _25.QueryPublisherResponse;
            toAmino(message: _25.QueryPublisherResponse): _25.QueryPublisherResponseAmino;
            fromAminoMsg(object: _25.QueryPublisherResponseAminoMsg): _25.QueryPublisherResponse;
            fromProtoMsg(message: _25.QueryPublisherResponseProtoMsg): _25.QueryPublisherResponse;
            toProto(message: _25.QueryPublisherResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherResponse): _25.QueryPublisherResponseProtoMsg;
        };
        QueryPublishersRequest: {
            typeUrl: string;
            encode(_: _25.QueryPublishersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryPublishersRequest;
            fromPartial(_: Partial<_25.QueryPublishersRequest>): _25.QueryPublishersRequest;
            fromAmino(_: _25.QueryPublishersRequestAmino): _25.QueryPublishersRequest;
            toAmino(_: _25.QueryPublishersRequest): _25.QueryPublishersRequestAmino;
            fromAminoMsg(object: _25.QueryPublishersRequestAminoMsg): _25.QueryPublishersRequest;
            fromProtoMsg(message: _25.QueryPublishersRequestProtoMsg): _25.QueryPublishersRequest;
            toProto(message: _25.QueryPublishersRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublishersRequest): _25.QueryPublishersRequestProtoMsg;
        };
        QueryPublishersResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublishersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublishersResponse;
            fromPartial(object: Partial<_25.QueryPublishersResponse>): _25.QueryPublishersResponse;
            fromAmino(object: _25.QueryPublishersResponseAmino): _25.QueryPublishersResponse;
            toAmino(message: _25.QueryPublishersResponse): _25.QueryPublishersResponseAmino;
            fromAminoMsg(object: _25.QueryPublishersResponseAminoMsg): _25.QueryPublishersResponse;
            fromProtoMsg(message: _25.QueryPublishersResponseProtoMsg): _25.QueryPublishersResponse;
            toProto(message: _25.QueryPublishersResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublishersResponse): _25.QueryPublishersResponseProtoMsg;
        };
        QuerySubscriberRequest: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberRequest;
            fromPartial(object: Partial<_25.QuerySubscriberRequest>): _25.QuerySubscriberRequest;
            fromAmino(object: _25.QuerySubscriberRequestAmino): _25.QuerySubscriberRequest;
            toAmino(message: _25.QuerySubscriberRequest): _25.QuerySubscriberRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberRequestAminoMsg): _25.QuerySubscriberRequest;
            fromProtoMsg(message: _25.QuerySubscriberRequestProtoMsg): _25.QuerySubscriberRequest;
            toProto(message: _25.QuerySubscriberRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberRequest): _25.QuerySubscriberRequestProtoMsg;
        };
        QuerySubscriberResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberResponse;
            fromPartial(object: Partial<_25.QuerySubscriberResponse>): _25.QuerySubscriberResponse;
            fromAmino(object: _25.QuerySubscriberResponseAmino): _25.QuerySubscriberResponse;
            toAmino(message: _25.QuerySubscriberResponse): _25.QuerySubscriberResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberResponseAminoMsg): _25.QuerySubscriberResponse;
            fromProtoMsg(message: _25.QuerySubscriberResponseProtoMsg): _25.QuerySubscriberResponse;
            toProto(message: _25.QuerySubscriberResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberResponse): _25.QuerySubscriberResponseProtoMsg;
        };
        QuerySubscribersRequest: {
            typeUrl: string;
            encode(_: _25.QuerySubscribersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QuerySubscribersRequest;
            fromPartial(_: Partial<_25.QuerySubscribersRequest>): _25.QuerySubscribersRequest;
            fromAmino(_: _25.QuerySubscribersRequestAmino): _25.QuerySubscribersRequest;
            toAmino(_: _25.QuerySubscribersRequest): _25.QuerySubscribersRequestAmino;
            fromAminoMsg(object: _25.QuerySubscribersRequestAminoMsg): _25.QuerySubscribersRequest;
            fromProtoMsg(message: _25.QuerySubscribersRequestProtoMsg): _25.QuerySubscribersRequest;
            toProto(message: _25.QuerySubscribersRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscribersRequest): _25.QuerySubscribersRequestProtoMsg;
        };
        QuerySubscribersResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscribersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscribersResponse;
            fromPartial(object: Partial<_25.QuerySubscribersResponse>): _25.QuerySubscribersResponse;
            fromAmino(object: _25.QuerySubscribersResponseAmino): _25.QuerySubscribersResponse;
            toAmino(message: _25.QuerySubscribersResponse): _25.QuerySubscribersResponseAmino;
            fromAminoMsg(object: _25.QuerySubscribersResponseAminoMsg): _25.QuerySubscribersResponse;
            fromProtoMsg(message: _25.QuerySubscribersResponseProtoMsg): _25.QuerySubscribersResponse;
            toProto(message: _25.QuerySubscribersResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscribersResponse): _25.QuerySubscribersResponseProtoMsg;
        };
        QueryValidatorSubscribersRequest: {
            typeUrl: string;
            encode(_: _25.QueryValidatorSubscribersRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryValidatorSubscribersRequest;
            fromPartial(_: Partial<_25.QueryValidatorSubscribersRequest>): _25.QueryValidatorSubscribersRequest;
            fromAmino(_: _25.QueryValidatorSubscribersRequestAmino): _25.QueryValidatorSubscribersRequest;
            toAmino(_: _25.QueryValidatorSubscribersRequest): _25.QueryValidatorSubscribersRequestAmino;
            fromAminoMsg(object: _25.QueryValidatorSubscribersRequestAminoMsg): _25.QueryValidatorSubscribersRequest;
            fromProtoMsg(message: _25.QueryValidatorSubscribersRequestProtoMsg): _25.QueryValidatorSubscribersRequest;
            toProto(message: _25.QueryValidatorSubscribersRequest): Uint8Array;
            toProtoMsg(message: _25.QueryValidatorSubscribersRequest): _25.QueryValidatorSubscribersRequestProtoMsg;
        };
        QueryValidatorSubscribersResponse: {
            typeUrl: string;
            encode(message: _25.QueryValidatorSubscribersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryValidatorSubscribersResponse;
            fromPartial(object: Partial<_25.QueryValidatorSubscribersResponse>): _25.QueryValidatorSubscribersResponse;
            fromAmino(object: _25.QueryValidatorSubscribersResponseAmino): _25.QueryValidatorSubscribersResponse;
            toAmino(message: _25.QueryValidatorSubscribersResponse): _25.QueryValidatorSubscribersResponseAmino;
            fromAminoMsg(object: _25.QueryValidatorSubscribersResponseAminoMsg): _25.QueryValidatorSubscribersResponse;
            fromProtoMsg(message: _25.QueryValidatorSubscribersResponseProtoMsg): _25.QueryValidatorSubscribersResponse;
            toProto(message: _25.QueryValidatorSubscribersResponse): Uint8Array;
            toProtoMsg(message: _25.QueryValidatorSubscribersResponse): _25.QueryValidatorSubscribersResponseProtoMsg;
        };
        QueryPublisherIntentRequest: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentRequest;
            fromPartial(object: Partial<_25.QueryPublisherIntentRequest>): _25.QueryPublisherIntentRequest;
            fromAmino(object: _25.QueryPublisherIntentRequestAmino): _25.QueryPublisherIntentRequest;
            toAmino(message: _25.QueryPublisherIntentRequest): _25.QueryPublisherIntentRequestAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentRequestAminoMsg): _25.QueryPublisherIntentRequest;
            fromProtoMsg(message: _25.QueryPublisherIntentRequestProtoMsg): _25.QueryPublisherIntentRequest;
            toProto(message: _25.QueryPublisherIntentRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentRequest): _25.QueryPublisherIntentRequestProtoMsg;
        };
        QueryPublisherIntentResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentResponse;
            fromPartial(object: Partial<_25.QueryPublisherIntentResponse>): _25.QueryPublisherIntentResponse;
            fromAmino(object: _25.QueryPublisherIntentResponseAmino): _25.QueryPublisherIntentResponse;
            toAmino(message: _25.QueryPublisherIntentResponse): _25.QueryPublisherIntentResponseAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentResponseAminoMsg): _25.QueryPublisherIntentResponse;
            fromProtoMsg(message: _25.QueryPublisherIntentResponseProtoMsg): _25.QueryPublisherIntentResponse;
            toProto(message: _25.QueryPublisherIntentResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentResponse): _25.QueryPublisherIntentResponseProtoMsg;
        };
        QueryPublisherIntentsRequest: {
            typeUrl: string;
            encode(_: _25.QueryPublisherIntentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryPublisherIntentsRequest;
            fromPartial(_: Partial<_25.QueryPublisherIntentsRequest>): _25.QueryPublisherIntentsRequest;
            fromAmino(_: _25.QueryPublisherIntentsRequestAmino): _25.QueryPublisherIntentsRequest;
            toAmino(_: _25.QueryPublisherIntentsRequest): _25.QueryPublisherIntentsRequestAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsRequestAminoMsg): _25.QueryPublisherIntentsRequest;
            fromProtoMsg(message: _25.QueryPublisherIntentsRequestProtoMsg): _25.QueryPublisherIntentsRequest;
            toProto(message: _25.QueryPublisherIntentsRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsRequest): _25.QueryPublisherIntentsRequestProtoMsg;
        };
        QueryPublisherIntentsResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentsResponse;
            fromPartial(object: Partial<_25.QueryPublisherIntentsResponse>): _25.QueryPublisherIntentsResponse;
            fromAmino(object: _25.QueryPublisherIntentsResponseAmino): _25.QueryPublisherIntentsResponse;
            toAmino(message: _25.QueryPublisherIntentsResponse): _25.QueryPublisherIntentsResponseAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsResponseAminoMsg): _25.QueryPublisherIntentsResponse;
            fromProtoMsg(message: _25.QueryPublisherIntentsResponseProtoMsg): _25.QueryPublisherIntentsResponse;
            toProto(message: _25.QueryPublisherIntentsResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsResponse): _25.QueryPublisherIntentsResponseProtoMsg;
        };
        QueryPublisherIntentsByPublisherDomainRequest: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentsByPublisherDomainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentsByPublisherDomainRequest;
            fromPartial(object: Partial<_25.QueryPublisherIntentsByPublisherDomainRequest>): _25.QueryPublisherIntentsByPublisherDomainRequest;
            fromAmino(object: _25.QueryPublisherIntentsByPublisherDomainRequestAmino): _25.QueryPublisherIntentsByPublisherDomainRequest;
            toAmino(message: _25.QueryPublisherIntentsByPublisherDomainRequest): _25.QueryPublisherIntentsByPublisherDomainRequestAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsByPublisherDomainRequestAminoMsg): _25.QueryPublisherIntentsByPublisherDomainRequest;
            fromProtoMsg(message: _25.QueryPublisherIntentsByPublisherDomainRequestProtoMsg): _25.QueryPublisherIntentsByPublisherDomainRequest;
            toProto(message: _25.QueryPublisherIntentsByPublisherDomainRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsByPublisherDomainRequest): _25.QueryPublisherIntentsByPublisherDomainRequestProtoMsg;
        };
        QueryPublisherIntentsByPublisherDomainResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentsByPublisherDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentsByPublisherDomainResponse;
            fromPartial(object: Partial<_25.QueryPublisherIntentsByPublisherDomainResponse>): _25.QueryPublisherIntentsByPublisherDomainResponse;
            fromAmino(object: _25.QueryPublisherIntentsByPublisherDomainResponseAmino): _25.QueryPublisherIntentsByPublisherDomainResponse;
            toAmino(message: _25.QueryPublisherIntentsByPublisherDomainResponse): _25.QueryPublisherIntentsByPublisherDomainResponseAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsByPublisherDomainResponseAminoMsg): _25.QueryPublisherIntentsByPublisherDomainResponse;
            fromProtoMsg(message: _25.QueryPublisherIntentsByPublisherDomainResponseProtoMsg): _25.QueryPublisherIntentsByPublisherDomainResponse;
            toProto(message: _25.QueryPublisherIntentsByPublisherDomainResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsByPublisherDomainResponse): _25.QueryPublisherIntentsByPublisherDomainResponseProtoMsg;
        };
        QueryPublisherIntentsBySubscriptionIDRequest: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentsBySubscriptionIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentsBySubscriptionIDRequest;
            fromPartial(object: Partial<_25.QueryPublisherIntentsBySubscriptionIDRequest>): _25.QueryPublisherIntentsBySubscriptionIDRequest;
            fromAmino(object: _25.QueryPublisherIntentsBySubscriptionIDRequestAmino): _25.QueryPublisherIntentsBySubscriptionIDRequest;
            toAmino(message: _25.QueryPublisherIntentsBySubscriptionIDRequest): _25.QueryPublisherIntentsBySubscriptionIDRequestAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsBySubscriptionIDRequestAminoMsg): _25.QueryPublisherIntentsBySubscriptionIDRequest;
            fromProtoMsg(message: _25.QueryPublisherIntentsBySubscriptionIDRequestProtoMsg): _25.QueryPublisherIntentsBySubscriptionIDRequest;
            toProto(message: _25.QueryPublisherIntentsBySubscriptionIDRequest): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsBySubscriptionIDRequest): _25.QueryPublisherIntentsBySubscriptionIDRequestProtoMsg;
        };
        QueryPublisherIntentsBySubscriptionIDResponse: {
            typeUrl: string;
            encode(message: _25.QueryPublisherIntentsBySubscriptionIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryPublisherIntentsBySubscriptionIDResponse;
            fromPartial(object: Partial<_25.QueryPublisherIntentsBySubscriptionIDResponse>): _25.QueryPublisherIntentsBySubscriptionIDResponse;
            fromAmino(object: _25.QueryPublisherIntentsBySubscriptionIDResponseAmino): _25.QueryPublisherIntentsBySubscriptionIDResponse;
            toAmino(message: _25.QueryPublisherIntentsBySubscriptionIDResponse): _25.QueryPublisherIntentsBySubscriptionIDResponseAmino;
            fromAminoMsg(object: _25.QueryPublisherIntentsBySubscriptionIDResponseAminoMsg): _25.QueryPublisherIntentsBySubscriptionIDResponse;
            fromProtoMsg(message: _25.QueryPublisherIntentsBySubscriptionIDResponseProtoMsg): _25.QueryPublisherIntentsBySubscriptionIDResponse;
            toProto(message: _25.QueryPublisherIntentsBySubscriptionIDResponse): Uint8Array;
            toProtoMsg(message: _25.QueryPublisherIntentsBySubscriptionIDResponse): _25.QueryPublisherIntentsBySubscriptionIDResponseProtoMsg;
        };
        QuerySubscriberIntentRequest: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentRequest;
            fromPartial(object: Partial<_25.QuerySubscriberIntentRequest>): _25.QuerySubscriberIntentRequest;
            fromAmino(object: _25.QuerySubscriberIntentRequestAmino): _25.QuerySubscriberIntentRequest;
            toAmino(message: _25.QuerySubscriberIntentRequest): _25.QuerySubscriberIntentRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentRequestAminoMsg): _25.QuerySubscriberIntentRequest;
            fromProtoMsg(message: _25.QuerySubscriberIntentRequestProtoMsg): _25.QuerySubscriberIntentRequest;
            toProto(message: _25.QuerySubscriberIntentRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentRequest): _25.QuerySubscriberIntentRequestProtoMsg;
        };
        QuerySubscriberIntentResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentResponse;
            fromPartial(object: Partial<_25.QuerySubscriberIntentResponse>): _25.QuerySubscriberIntentResponse;
            fromAmino(object: _25.QuerySubscriberIntentResponseAmino): _25.QuerySubscriberIntentResponse;
            toAmino(message: _25.QuerySubscriberIntentResponse): _25.QuerySubscriberIntentResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentResponseAminoMsg): _25.QuerySubscriberIntentResponse;
            fromProtoMsg(message: _25.QuerySubscriberIntentResponseProtoMsg): _25.QuerySubscriberIntentResponse;
            toProto(message: _25.QuerySubscriberIntentResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentResponse): _25.QuerySubscriberIntentResponseProtoMsg;
        };
        QuerySubscriberIntentsRequest: {
            typeUrl: string;
            encode(_: _25.QuerySubscriberIntentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QuerySubscriberIntentsRequest;
            fromPartial(_: Partial<_25.QuerySubscriberIntentsRequest>): _25.QuerySubscriberIntentsRequest;
            fromAmino(_: _25.QuerySubscriberIntentsRequestAmino): _25.QuerySubscriberIntentsRequest;
            toAmino(_: _25.QuerySubscriberIntentsRequest): _25.QuerySubscriberIntentsRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsRequestAminoMsg): _25.QuerySubscriberIntentsRequest;
            fromProtoMsg(message: _25.QuerySubscriberIntentsRequestProtoMsg): _25.QuerySubscriberIntentsRequest;
            toProto(message: _25.QuerySubscriberIntentsRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsRequest): _25.QuerySubscriberIntentsRequestProtoMsg;
        };
        QuerySubscriberIntentsResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsResponse;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsResponse>): _25.QuerySubscriberIntentsResponse;
            fromAmino(object: _25.QuerySubscriberIntentsResponseAmino): _25.QuerySubscriberIntentsResponse;
            toAmino(message: _25.QuerySubscriberIntentsResponse): _25.QuerySubscriberIntentsResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsResponseAminoMsg): _25.QuerySubscriberIntentsResponse;
            fromProtoMsg(message: _25.QuerySubscriberIntentsResponseProtoMsg): _25.QuerySubscriberIntentsResponse;
            toProto(message: _25.QuerySubscriberIntentsResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsResponse): _25.QuerySubscriberIntentsResponseProtoMsg;
        };
        QuerySubscriberIntentsBySubscriberAddressRequest: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsBySubscriberAddressRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsBySubscriberAddressRequest;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsBySubscriberAddressRequest>): _25.QuerySubscriberIntentsBySubscriberAddressRequest;
            fromAmino(object: _25.QuerySubscriberIntentsBySubscriberAddressRequestAmino): _25.QuerySubscriberIntentsBySubscriberAddressRequest;
            toAmino(message: _25.QuerySubscriberIntentsBySubscriberAddressRequest): _25.QuerySubscriberIntentsBySubscriberAddressRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsBySubscriberAddressRequestAminoMsg): _25.QuerySubscriberIntentsBySubscriberAddressRequest;
            fromProtoMsg(message: _25.QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg): _25.QuerySubscriberIntentsBySubscriberAddressRequest;
            toProto(message: _25.QuerySubscriberIntentsBySubscriberAddressRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsBySubscriberAddressRequest): _25.QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg;
        };
        QuerySubscriberIntentsBySubscriberAddressResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsBySubscriberAddressResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsBySubscriberAddressResponse;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsBySubscriberAddressResponse>): _25.QuerySubscriberIntentsBySubscriberAddressResponse;
            fromAmino(object: _25.QuerySubscriberIntentsBySubscriberAddressResponseAmino): _25.QuerySubscriberIntentsBySubscriberAddressResponse;
            toAmino(message: _25.QuerySubscriberIntentsBySubscriberAddressResponse): _25.QuerySubscriberIntentsBySubscriberAddressResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsBySubscriberAddressResponseAminoMsg): _25.QuerySubscriberIntentsBySubscriberAddressResponse;
            fromProtoMsg(message: _25.QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg): _25.QuerySubscriberIntentsBySubscriberAddressResponse;
            toProto(message: _25.QuerySubscriberIntentsBySubscriberAddressResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsBySubscriberAddressResponse): _25.QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg;
        };
        QuerySubscriberIntentsBySubscriptionIDRequest: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsBySubscriptionIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsBySubscriptionIDRequest;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsBySubscriptionIDRequest>): _25.QuerySubscriberIntentsBySubscriptionIDRequest;
            fromAmino(object: _25.QuerySubscriberIntentsBySubscriptionIDRequestAmino): _25.QuerySubscriberIntentsBySubscriptionIDRequest;
            toAmino(message: _25.QuerySubscriberIntentsBySubscriptionIDRequest): _25.QuerySubscriberIntentsBySubscriptionIDRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsBySubscriptionIDRequestAminoMsg): _25.QuerySubscriberIntentsBySubscriptionIDRequest;
            fromProtoMsg(message: _25.QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg): _25.QuerySubscriberIntentsBySubscriptionIDRequest;
            toProto(message: _25.QuerySubscriberIntentsBySubscriptionIDRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsBySubscriptionIDRequest): _25.QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg;
        };
        QuerySubscriberIntentsBySubscriptionIDResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsBySubscriptionIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsBySubscriptionIDResponse;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsBySubscriptionIDResponse>): _25.QuerySubscriberIntentsBySubscriptionIDResponse;
            fromAmino(object: _25.QuerySubscriberIntentsBySubscriptionIDResponseAmino): _25.QuerySubscriberIntentsBySubscriptionIDResponse;
            toAmino(message: _25.QuerySubscriberIntentsBySubscriptionIDResponse): _25.QuerySubscriberIntentsBySubscriptionIDResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsBySubscriptionIDResponseAminoMsg): _25.QuerySubscriberIntentsBySubscriptionIDResponse;
            fromProtoMsg(message: _25.QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg): _25.QuerySubscriberIntentsBySubscriptionIDResponse;
            toProto(message: _25.QuerySubscriberIntentsBySubscriptionIDResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsBySubscriptionIDResponse): _25.QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg;
        };
        QuerySubscriberIntentsByPublisherDomainRequest: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsByPublisherDomainRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsByPublisherDomainRequest;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsByPublisherDomainRequest>): _25.QuerySubscriberIntentsByPublisherDomainRequest;
            fromAmino(object: _25.QuerySubscriberIntentsByPublisherDomainRequestAmino): _25.QuerySubscriberIntentsByPublisherDomainRequest;
            toAmino(message: _25.QuerySubscriberIntentsByPublisherDomainRequest): _25.QuerySubscriberIntentsByPublisherDomainRequestAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsByPublisherDomainRequestAminoMsg): _25.QuerySubscriberIntentsByPublisherDomainRequest;
            fromProtoMsg(message: _25.QuerySubscriberIntentsByPublisherDomainRequestProtoMsg): _25.QuerySubscriberIntentsByPublisherDomainRequest;
            toProto(message: _25.QuerySubscriberIntentsByPublisherDomainRequest): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsByPublisherDomainRequest): _25.QuerySubscriberIntentsByPublisherDomainRequestProtoMsg;
        };
        QuerySubscriberIntentsByPublisherDomainResponse: {
            typeUrl: string;
            encode(message: _25.QuerySubscriberIntentsByPublisherDomainResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QuerySubscriberIntentsByPublisherDomainResponse;
            fromPartial(object: Partial<_25.QuerySubscriberIntentsByPublisherDomainResponse>): _25.QuerySubscriberIntentsByPublisherDomainResponse;
            fromAmino(object: _25.QuerySubscriberIntentsByPublisherDomainResponseAmino): _25.QuerySubscriberIntentsByPublisherDomainResponse;
            toAmino(message: _25.QuerySubscriberIntentsByPublisherDomainResponse): _25.QuerySubscriberIntentsByPublisherDomainResponseAmino;
            fromAminoMsg(object: _25.QuerySubscriberIntentsByPublisherDomainResponseAminoMsg): _25.QuerySubscriberIntentsByPublisherDomainResponse;
            fromProtoMsg(message: _25.QuerySubscriberIntentsByPublisherDomainResponseProtoMsg): _25.QuerySubscriberIntentsByPublisherDomainResponse;
            toProto(message: _25.QuerySubscriberIntentsByPublisherDomainResponse): Uint8Array;
            toProtoMsg(message: _25.QuerySubscriberIntentsByPublisherDomainResponse): _25.QuerySubscriberIntentsByPublisherDomainResponseProtoMsg;
        };
        QueryDefaultSubscriptionRequest: {
            typeUrl: string;
            encode(message: _25.QueryDefaultSubscriptionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryDefaultSubscriptionRequest;
            fromPartial(object: Partial<_25.QueryDefaultSubscriptionRequest>): _25.QueryDefaultSubscriptionRequest;
            fromAmino(object: _25.QueryDefaultSubscriptionRequestAmino): _25.QueryDefaultSubscriptionRequest;
            toAmino(message: _25.QueryDefaultSubscriptionRequest): _25.QueryDefaultSubscriptionRequestAmino;
            fromAminoMsg(object: _25.QueryDefaultSubscriptionRequestAminoMsg): _25.QueryDefaultSubscriptionRequest;
            fromProtoMsg(message: _25.QueryDefaultSubscriptionRequestProtoMsg): _25.QueryDefaultSubscriptionRequest;
            toProto(message: _25.QueryDefaultSubscriptionRequest): Uint8Array;
            toProtoMsg(message: _25.QueryDefaultSubscriptionRequest): _25.QueryDefaultSubscriptionRequestProtoMsg;
        };
        QueryDefaultSubscriptionResponse: {
            typeUrl: string;
            encode(message: _25.QueryDefaultSubscriptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryDefaultSubscriptionResponse;
            fromPartial(object: Partial<_25.QueryDefaultSubscriptionResponse>): _25.QueryDefaultSubscriptionResponse;
            fromAmino(object: _25.QueryDefaultSubscriptionResponseAmino): _25.QueryDefaultSubscriptionResponse;
            toAmino(message: _25.QueryDefaultSubscriptionResponse): _25.QueryDefaultSubscriptionResponseAmino;
            fromAminoMsg(object: _25.QueryDefaultSubscriptionResponseAminoMsg): _25.QueryDefaultSubscriptionResponse;
            fromProtoMsg(message: _25.QueryDefaultSubscriptionResponseProtoMsg): _25.QueryDefaultSubscriptionResponse;
            toProto(message: _25.QueryDefaultSubscriptionResponse): Uint8Array;
            toProtoMsg(message: _25.QueryDefaultSubscriptionResponse): _25.QueryDefaultSubscriptionResponseProtoMsg;
        };
        QueryDefaultSubscriptionsRequest: {
            typeUrl: string;
            encode(_: _25.QueryDefaultSubscriptionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _25.QueryDefaultSubscriptionsRequest;
            fromPartial(_: Partial<_25.QueryDefaultSubscriptionsRequest>): _25.QueryDefaultSubscriptionsRequest;
            fromAmino(_: _25.QueryDefaultSubscriptionsRequestAmino): _25.QueryDefaultSubscriptionsRequest;
            toAmino(_: _25.QueryDefaultSubscriptionsRequest): _25.QueryDefaultSubscriptionsRequestAmino;
            fromAminoMsg(object: _25.QueryDefaultSubscriptionsRequestAminoMsg): _25.QueryDefaultSubscriptionsRequest;
            fromProtoMsg(message: _25.QueryDefaultSubscriptionsRequestProtoMsg): _25.QueryDefaultSubscriptionsRequest;
            toProto(message: _25.QueryDefaultSubscriptionsRequest): Uint8Array;
            toProtoMsg(message: _25.QueryDefaultSubscriptionsRequest): _25.QueryDefaultSubscriptionsRequestProtoMsg;
        };
        QueryDefaultSubscriptionsResponse: {
            typeUrl: string;
            encode(message: _25.QueryDefaultSubscriptionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _25.QueryDefaultSubscriptionsResponse;
            fromPartial(object: Partial<_25.QueryDefaultSubscriptionsResponse>): _25.QueryDefaultSubscriptionsResponse;
            fromAmino(object: _25.QueryDefaultSubscriptionsResponseAmino): _25.QueryDefaultSubscriptionsResponse;
            toAmino(message: _25.QueryDefaultSubscriptionsResponse): _25.QueryDefaultSubscriptionsResponseAmino;
            fromAminoMsg(object: _25.QueryDefaultSubscriptionsResponseAminoMsg): _25.QueryDefaultSubscriptionsResponse;
            fromProtoMsg(message: _25.QueryDefaultSubscriptionsResponseProtoMsg): _25.QueryDefaultSubscriptionsResponse;
            toProto(message: _25.QueryDefaultSubscriptionsResponse): Uint8Array;
            toProtoMsg(message: _25.QueryDefaultSubscriptionsResponse): _25.QueryDefaultSubscriptionsResponseProtoMsg;
        };
        publishMethodFromJSON(object: any): _24.PublishMethod;
        publishMethodToJSON(object: _24.PublishMethod): string;
        allowedSubscribersFromJSON(object: any): _24.AllowedSubscribers;
        allowedSubscribersToJSON(object: _24.AllowedSubscribers): string;
        PublishMethod: typeof _24.PublishMethod;
        PublishMethodSDKType: typeof _24.PublishMethod;
        PublishMethodAmino: typeof _24.PublishMethod;
        AllowedSubscribers: typeof _24.AllowedSubscribers;
        AllowedSubscribersSDKType: typeof _24.AllowedSubscribers;
        AllowedSubscribersAmino: typeof _24.AllowedSubscribers;
        Publisher: {
            typeUrl: string;
            encode(message: _24.Publisher, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.Publisher;
            fromPartial(object: Partial<_24.Publisher>): _24.Publisher;
            fromAmino(object: _24.PublisherAmino): _24.Publisher;
            toAmino(message: _24.Publisher): _24.PublisherAmino;
            fromAminoMsg(object: _24.PublisherAminoMsg): _24.Publisher;
            fromProtoMsg(message: _24.PublisherProtoMsg): _24.Publisher;
            toProto(message: _24.Publisher): Uint8Array;
            toProtoMsg(message: _24.Publisher): _24.PublisherProtoMsg;
        };
        Subscriber: {
            typeUrl: string;
            encode(message: _24.Subscriber, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.Subscriber;
            fromPartial(object: Partial<_24.Subscriber>): _24.Subscriber;
            fromAmino(object: _24.SubscriberAmino): _24.Subscriber;
            toAmino(message: _24.Subscriber): _24.SubscriberAmino;
            fromAminoMsg(object: _24.SubscriberAminoMsg): _24.Subscriber;
            fromProtoMsg(message: _24.SubscriberProtoMsg): _24.Subscriber;
            toProto(message: _24.Subscriber): Uint8Array;
            toProtoMsg(message: _24.Subscriber): _24.SubscriberProtoMsg;
        };
        PublisherIntent: {
            typeUrl: string;
            encode(message: _24.PublisherIntent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.PublisherIntent;
            fromPartial(object: Partial<_24.PublisherIntent>): _24.PublisherIntent;
            fromAmino(object: _24.PublisherIntentAmino): _24.PublisherIntent;
            toAmino(message: _24.PublisherIntent): _24.PublisherIntentAmino;
            fromAminoMsg(object: _24.PublisherIntentAminoMsg): _24.PublisherIntent;
            fromProtoMsg(message: _24.PublisherIntentProtoMsg): _24.PublisherIntent;
            toProto(message: _24.PublisherIntent): Uint8Array;
            toProtoMsg(message: _24.PublisherIntent): _24.PublisherIntentProtoMsg;
        };
        SubscriberIntent: {
            typeUrl: string;
            encode(message: _24.SubscriberIntent, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.SubscriberIntent;
            fromPartial(object: Partial<_24.SubscriberIntent>): _24.SubscriberIntent;
            fromAmino(object: _24.SubscriberIntentAmino): _24.SubscriberIntent;
            toAmino(message: _24.SubscriberIntent): _24.SubscriberIntentAmino;
            fromAminoMsg(object: _24.SubscriberIntentAminoMsg): _24.SubscriberIntent;
            fromProtoMsg(message: _24.SubscriberIntentProtoMsg): _24.SubscriberIntent;
            toProto(message: _24.SubscriberIntent): Uint8Array;
            toProtoMsg(message: _24.SubscriberIntent): _24.SubscriberIntentProtoMsg;
        };
        DefaultSubscription: {
            typeUrl: string;
            encode(message: _24.DefaultSubscription, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.DefaultSubscription;
            fromPartial(object: Partial<_24.DefaultSubscription>): _24.DefaultSubscription;
            fromAmino(object: _24.DefaultSubscriptionAmino): _24.DefaultSubscription;
            toAmino(message: _24.DefaultSubscription): _24.DefaultSubscriptionAmino;
            fromAminoMsg(object: _24.DefaultSubscriptionAminoMsg): _24.DefaultSubscription;
            fromProtoMsg(message: _24.DefaultSubscriptionProtoMsg): _24.DefaultSubscription;
            toProto(message: _24.DefaultSubscription): Uint8Array;
            toProtoMsg(message: _24.DefaultSubscription): _24.DefaultSubscriptionProtoMsg;
        };
        AddPublisherProposal: {
            typeUrl: string;
            encode(message: _24.AddPublisherProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.AddPublisherProposal;
            fromPartial(object: Partial<_24.AddPublisherProposal>): _24.AddPublisherProposal;
            fromAmino(object: _24.AddPublisherProposalAmino): _24.AddPublisherProposal;
            toAmino(message: _24.AddPublisherProposal): _24.AddPublisherProposalAmino;
            fromAminoMsg(object: _24.AddPublisherProposalAminoMsg): _24.AddPublisherProposal;
            fromProtoMsg(message: _24.AddPublisherProposalProtoMsg): _24.AddPublisherProposal;
            toProto(message: _24.AddPublisherProposal): Uint8Array;
            toProtoMsg(message: _24.AddPublisherProposal): _24.AddPublisherProposalProtoMsg;
        };
        AddPublisherProposalWithDeposit: {
            typeUrl: string;
            encode(message: _24.AddPublisherProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.AddPublisherProposalWithDeposit;
            fromPartial(object: Partial<_24.AddPublisherProposalWithDeposit>): _24.AddPublisherProposalWithDeposit;
            fromAmino(object: _24.AddPublisherProposalWithDepositAmino): _24.AddPublisherProposalWithDeposit;
            toAmino(message: _24.AddPublisherProposalWithDeposit): _24.AddPublisherProposalWithDepositAmino;
            fromAminoMsg(object: _24.AddPublisherProposalWithDepositAminoMsg): _24.AddPublisherProposalWithDeposit;
            fromProtoMsg(message: _24.AddPublisherProposalWithDepositProtoMsg): _24.AddPublisherProposalWithDeposit;
            toProto(message: _24.AddPublisherProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _24.AddPublisherProposalWithDeposit): _24.AddPublisherProposalWithDepositProtoMsg;
        };
        RemovePublisherProposal: {
            typeUrl: string;
            encode(message: _24.RemovePublisherProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.RemovePublisherProposal;
            fromPartial(object: Partial<_24.RemovePublisherProposal>): _24.RemovePublisherProposal;
            fromAmino(object: _24.RemovePublisherProposalAmino): _24.RemovePublisherProposal;
            toAmino(message: _24.RemovePublisherProposal): _24.RemovePublisherProposalAmino;
            fromAminoMsg(object: _24.RemovePublisherProposalAminoMsg): _24.RemovePublisherProposal;
            fromProtoMsg(message: _24.RemovePublisherProposalProtoMsg): _24.RemovePublisherProposal;
            toProto(message: _24.RemovePublisherProposal): Uint8Array;
            toProtoMsg(message: _24.RemovePublisherProposal): _24.RemovePublisherProposalProtoMsg;
        };
        RemovePublisherProposalWithDeposit: {
            typeUrl: string;
            encode(message: _24.RemovePublisherProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.RemovePublisherProposalWithDeposit;
            fromPartial(object: Partial<_24.RemovePublisherProposalWithDeposit>): _24.RemovePublisherProposalWithDeposit;
            fromAmino(object: _24.RemovePublisherProposalWithDepositAmino): _24.RemovePublisherProposalWithDeposit;
            toAmino(message: _24.RemovePublisherProposalWithDeposit): _24.RemovePublisherProposalWithDepositAmino;
            fromAminoMsg(object: _24.RemovePublisherProposalWithDepositAminoMsg): _24.RemovePublisherProposalWithDeposit;
            fromProtoMsg(message: _24.RemovePublisherProposalWithDepositProtoMsg): _24.RemovePublisherProposalWithDeposit;
            toProto(message: _24.RemovePublisherProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _24.RemovePublisherProposalWithDeposit): _24.RemovePublisherProposalWithDepositProtoMsg;
        };
        AddDefaultSubscriptionProposal: {
            typeUrl: string;
            encode(message: _24.AddDefaultSubscriptionProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.AddDefaultSubscriptionProposal;
            fromPartial(object: Partial<_24.AddDefaultSubscriptionProposal>): _24.AddDefaultSubscriptionProposal;
            fromAmino(object: _24.AddDefaultSubscriptionProposalAmino): _24.AddDefaultSubscriptionProposal;
            toAmino(message: _24.AddDefaultSubscriptionProposal): _24.AddDefaultSubscriptionProposalAmino;
            fromAminoMsg(object: _24.AddDefaultSubscriptionProposalAminoMsg): _24.AddDefaultSubscriptionProposal;
            fromProtoMsg(message: _24.AddDefaultSubscriptionProposalProtoMsg): _24.AddDefaultSubscriptionProposal;
            toProto(message: _24.AddDefaultSubscriptionProposal): Uint8Array;
            toProtoMsg(message: _24.AddDefaultSubscriptionProposal): _24.AddDefaultSubscriptionProposalProtoMsg;
        };
        AddDefaultSubscriptionProposalWithDeposit: {
            typeUrl: string;
            encode(message: _24.AddDefaultSubscriptionProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.AddDefaultSubscriptionProposalWithDeposit;
            fromPartial(object: Partial<_24.AddDefaultSubscriptionProposalWithDeposit>): _24.AddDefaultSubscriptionProposalWithDeposit;
            fromAmino(object: _24.AddDefaultSubscriptionProposalWithDepositAmino): _24.AddDefaultSubscriptionProposalWithDeposit;
            toAmino(message: _24.AddDefaultSubscriptionProposalWithDeposit): _24.AddDefaultSubscriptionProposalWithDepositAmino;
            fromAminoMsg(object: _24.AddDefaultSubscriptionProposalWithDepositAminoMsg): _24.AddDefaultSubscriptionProposalWithDeposit;
            fromProtoMsg(message: _24.AddDefaultSubscriptionProposalWithDepositProtoMsg): _24.AddDefaultSubscriptionProposalWithDeposit;
            toProto(message: _24.AddDefaultSubscriptionProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _24.AddDefaultSubscriptionProposalWithDeposit): _24.AddDefaultSubscriptionProposalWithDepositProtoMsg;
        };
        RemoveDefaultSubscriptionProposal: {
            typeUrl: string;
            encode(message: _24.RemoveDefaultSubscriptionProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.RemoveDefaultSubscriptionProposal;
            fromPartial(object: Partial<_24.RemoveDefaultSubscriptionProposal>): _24.RemoveDefaultSubscriptionProposal;
            fromAmino(object: _24.RemoveDefaultSubscriptionProposalAmino): _24.RemoveDefaultSubscriptionProposal;
            toAmino(message: _24.RemoveDefaultSubscriptionProposal): _24.RemoveDefaultSubscriptionProposalAmino;
            fromAminoMsg(object: _24.RemoveDefaultSubscriptionProposalAminoMsg): _24.RemoveDefaultSubscriptionProposal;
            fromProtoMsg(message: _24.RemoveDefaultSubscriptionProposalProtoMsg): _24.RemoveDefaultSubscriptionProposal;
            toProto(message: _24.RemoveDefaultSubscriptionProposal): Uint8Array;
            toProtoMsg(message: _24.RemoveDefaultSubscriptionProposal): _24.RemoveDefaultSubscriptionProposalProtoMsg;
        };
        RemoveDefaultSubscriptionProposalWithDeposit: {
            typeUrl: string;
            encode(message: _24.RemoveDefaultSubscriptionProposalWithDeposit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _24.RemoveDefaultSubscriptionProposalWithDeposit;
            fromPartial(object: Partial<_24.RemoveDefaultSubscriptionProposalWithDeposit>): _24.RemoveDefaultSubscriptionProposalWithDeposit;
            fromAmino(object: _24.RemoveDefaultSubscriptionProposalWithDepositAmino): _24.RemoveDefaultSubscriptionProposalWithDeposit;
            toAmino(message: _24.RemoveDefaultSubscriptionProposalWithDeposit): _24.RemoveDefaultSubscriptionProposalWithDepositAmino;
            fromAminoMsg(object: _24.RemoveDefaultSubscriptionProposalWithDepositAminoMsg): _24.RemoveDefaultSubscriptionProposalWithDeposit;
            fromProtoMsg(message: _24.RemoveDefaultSubscriptionProposalWithDepositProtoMsg): _24.RemoveDefaultSubscriptionProposalWithDeposit;
            toProto(message: _24.RemoveDefaultSubscriptionProposalWithDeposit): Uint8Array;
            toProtoMsg(message: _24.RemoveDefaultSubscriptionProposalWithDeposit): _24.RemoveDefaultSubscriptionProposalWithDepositProtoMsg;
        };
        Params: {
            typeUrl: string;
            encode(_: _23.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(_: any): _23.Params;
            fromPartial(_: Partial<_23.Params>): _23.Params;
            fromAmino(_: _23.ParamsAmino): _23.Params;
            toAmino(_: _23.Params): _23.ParamsAmino;
            fromAminoMsg(object: _23.ParamsAminoMsg): _23.Params;
            fromProtoMsg(message: _23.ParamsProtoMsg): _23.Params;
            toProto(message: _23.Params): Uint8Array;
            toProtoMsg(message: _23.Params): _23.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            encode(message: _22.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            fromJSON(object: any): _22.GenesisState;
            fromPartial(object: Partial<_22.GenesisState>): _22.GenesisState;
            fromAmino(object: _22.GenesisStateAmino): _22.GenesisState;
            toAmino(message: _22.GenesisState): _22.GenesisStateAmino;
            fromAminoMsg(object: _22.GenesisStateAminoMsg): _22.GenesisState;
            fromProtoMsg(message: _22.GenesisStateProtoMsg): _22.GenesisState;
            toProto(message: _22.GenesisState): Uint8Array;
            toProtoMsg(message: _22.GenesisState): _22.GenesisStateProtoMsg;
        };
    };
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            pubsub: {
                v1: _166.MsgClientImpl;
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            pubsub: {
                v1: {
                    params(request?: _25.QueryParamsRequest): Promise<_25.QueryParamsResponse>;
                    queryPublisher(request: _25.QueryPublisherRequest): Promise<_25.QueryPublisherResponse>;
                    queryPublishers(request?: _25.QueryPublishersRequest): Promise<_25.QueryPublishersResponse>;
                    querySubscriber(request: _25.QuerySubscriberRequest): Promise<_25.QuerySubscriberResponse>;
                    querySubscribers(request?: _25.QuerySubscribersRequest): Promise<_25.QuerySubscribersResponse>;
                    queryValidatorSubscribers(request?: _25.QueryValidatorSubscribersRequest): Promise<_25.QueryValidatorSubscribersResponse>;
                    queryPublisherIntent(request: _25.QueryPublisherIntentRequest): Promise<_25.QueryPublisherIntentResponse>;
                    queryPublisherIntents(request?: _25.QueryPublisherIntentsRequest): Promise<_25.QueryPublisherIntentsResponse>;
                    queryPublisherIntentsByPublisherDomain(request: _25.QueryPublisherIntentsByPublisherDomainRequest): Promise<_25.QueryPublisherIntentsByPublisherDomainResponse>;
                    queryPublisherIntentsBySubscriptionID(request: _25.QueryPublisherIntentsBySubscriptionIDRequest): Promise<_25.QueryPublisherIntentsBySubscriptionIDResponse>;
                    querySubscriberIntent(request: _25.QuerySubscriberIntentRequest): Promise<_25.QuerySubscriberIntentResponse>;
                    querySubscriberIntents(request?: _25.QuerySubscriberIntentsRequest): Promise<_25.QuerySubscriberIntentsResponse>;
                    querySubscriberIntentsBySubscriberAddress(request: _25.QuerySubscriberIntentsBySubscriberAddressRequest): Promise<_25.QuerySubscriberIntentsBySubscriberAddressResponse>;
                    querySubscriberIntentsBySubscriptionID(request: _25.QuerySubscriberIntentsBySubscriptionIDRequest): Promise<_25.QuerySubscriberIntentsBySubscriptionIDResponse>;
                    querySubscriberIntentsByPublisherDomain(request: _25.QuerySubscriberIntentsByPublisherDomainRequest): Promise<_25.QuerySubscriberIntentsByPublisherDomainResponse>;
                    queryDefaultSubscription(request: _25.QueryDefaultSubscriptionRequest): Promise<_25.QueryDefaultSubscriptionResponse>;
                    queryDefaultSubscriptions(request?: _25.QueryDefaultSubscriptionsRequest): Promise<_25.QueryDefaultSubscriptionsResponse>;
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            pubsub: {
                v1: _164.LCDQueryClient;
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
