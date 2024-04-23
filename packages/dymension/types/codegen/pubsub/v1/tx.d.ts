import { Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
export interface MsgRemovePublisherRequest {
    publisherDomain: string;
    signer: string;
}
export interface MsgRemovePublisherRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemovePublisherRequest";
    value: Uint8Array;
}
export interface MsgRemovePublisherRequestAmino {
    publisher_domain?: string;
    signer?: string;
}
export interface MsgRemovePublisherRequestAminoMsg {
    type: "/pubsub.v1.MsgRemovePublisherRequest";
    value: MsgRemovePublisherRequestAmino;
}
export interface MsgRemovePublisherRequestSDKType {
    publisher_domain: string;
    signer: string;
}
export interface MsgRemovePublisherResponse {
}
export interface MsgRemovePublisherResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemovePublisherResponse";
    value: Uint8Array;
}
export interface MsgRemovePublisherResponseAmino {
}
export interface MsgRemovePublisherResponseAminoMsg {
    type: "/pubsub.v1.MsgRemovePublisherResponse";
    value: MsgRemovePublisherResponseAmino;
}
export interface MsgRemovePublisherResponseSDKType {
}
export interface MsgAddSubscriberRequest {
    subscriber?: Subscriber;
    signer: string;
}
export interface MsgAddSubscriberRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddSubscriberRequest";
    value: Uint8Array;
}
export interface MsgAddSubscriberRequestAmino {
    subscriber?: SubscriberAmino;
    signer?: string;
}
export interface MsgAddSubscriberRequestAminoMsg {
    type: "/pubsub.v1.MsgAddSubscriberRequest";
    value: MsgAddSubscriberRequestAmino;
}
export interface MsgAddSubscriberRequestSDKType {
    subscriber?: SubscriberSDKType;
    signer: string;
}
export interface MsgAddSubscriberResponse {
}
export interface MsgAddSubscriberResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddSubscriberResponse";
    value: Uint8Array;
}
export interface MsgAddSubscriberResponseAmino {
}
export interface MsgAddSubscriberResponseAminoMsg {
    type: "/pubsub.v1.MsgAddSubscriberResponse";
    value: MsgAddSubscriberResponseAmino;
}
export interface MsgAddSubscriberResponseSDKType {
}
export interface MsgRemoveSubscriberRequest {
    subscriberAddress: string;
    signer: string;
}
export interface MsgRemoveSubscriberRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemoveSubscriberRequest";
    value: Uint8Array;
}
export interface MsgRemoveSubscriberRequestAmino {
    subscriber_address?: string;
    signer?: string;
}
export interface MsgRemoveSubscriberRequestAminoMsg {
    type: "/pubsub.v1.MsgRemoveSubscriberRequest";
    value: MsgRemoveSubscriberRequestAmino;
}
export interface MsgRemoveSubscriberRequestSDKType {
    subscriber_address: string;
    signer: string;
}
export interface MsgRemoveSubscriberResponse {
}
export interface MsgRemoveSubscriberResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemoveSubscriberResponse";
    value: Uint8Array;
}
export interface MsgRemoveSubscriberResponseAmino {
}
export interface MsgRemoveSubscriberResponseAminoMsg {
    type: "/pubsub.v1.MsgRemoveSubscriberResponse";
    value: MsgRemoveSubscriberResponseAmino;
}
export interface MsgRemoveSubscriberResponseSDKType {
}
export interface MsgAddPublisherIntentRequest {
    publisherIntent?: PublisherIntent;
    signer: string;
}
export interface MsgAddPublisherIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddPublisherIntentRequest";
    value: Uint8Array;
}
export interface MsgAddPublisherIntentRequestAmino {
    publisher_intent?: PublisherIntentAmino;
    signer?: string;
}
export interface MsgAddPublisherIntentRequestAminoMsg {
    type: "/pubsub.v1.MsgAddPublisherIntentRequest";
    value: MsgAddPublisherIntentRequestAmino;
}
export interface MsgAddPublisherIntentRequestSDKType {
    publisher_intent?: PublisherIntentSDKType;
    signer: string;
}
export interface MsgAddPublisherIntentResponse {
}
export interface MsgAddPublisherIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddPublisherIntentResponse";
    value: Uint8Array;
}
export interface MsgAddPublisherIntentResponseAmino {
}
export interface MsgAddPublisherIntentResponseAminoMsg {
    type: "/pubsub.v1.MsgAddPublisherIntentResponse";
    value: MsgAddPublisherIntentResponseAmino;
}
export interface MsgAddPublisherIntentResponseSDKType {
}
export interface MsgRemovePublisherIntentRequest {
    subscriptionId: string;
    publisherDomain: string;
    signer: string;
}
export interface MsgRemovePublisherIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemovePublisherIntentRequest";
    value: Uint8Array;
}
export interface MsgRemovePublisherIntentRequestAmino {
    subscription_id?: string;
    publisher_domain?: string;
    signer?: string;
}
export interface MsgRemovePublisherIntentRequestAminoMsg {
    type: "/pubsub.v1.MsgRemovePublisherIntentRequest";
    value: MsgRemovePublisherIntentRequestAmino;
}
export interface MsgRemovePublisherIntentRequestSDKType {
    subscription_id: string;
    publisher_domain: string;
    signer: string;
}
export interface MsgRemovePublisherIntentResponse {
}
export interface MsgRemovePublisherIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemovePublisherIntentResponse";
    value: Uint8Array;
}
export interface MsgRemovePublisherIntentResponseAmino {
}
export interface MsgRemovePublisherIntentResponseAminoMsg {
    type: "/pubsub.v1.MsgRemovePublisherIntentResponse";
    value: MsgRemovePublisherIntentResponseAmino;
}
export interface MsgRemovePublisherIntentResponseSDKType {
}
export interface MsgAddSubscriberIntentRequest {
    subscriberIntent?: SubscriberIntent;
    signer: string;
}
export interface MsgAddSubscriberIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddSubscriberIntentRequest";
    value: Uint8Array;
}
export interface MsgAddSubscriberIntentRequestAmino {
    subscriber_intent?: SubscriberIntentAmino;
    signer?: string;
}
export interface MsgAddSubscriberIntentRequestAminoMsg {
    type: "/pubsub.v1.MsgAddSubscriberIntentRequest";
    value: MsgAddSubscriberIntentRequestAmino;
}
export interface MsgAddSubscriberIntentRequestSDKType {
    subscriber_intent?: SubscriberIntentSDKType;
    signer: string;
}
export interface MsgAddSubscriberIntentResponse {
}
export interface MsgAddSubscriberIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgAddSubscriberIntentResponse";
    value: Uint8Array;
}
export interface MsgAddSubscriberIntentResponseAmino {
}
export interface MsgAddSubscriberIntentResponseAminoMsg {
    type: "/pubsub.v1.MsgAddSubscriberIntentResponse";
    value: MsgAddSubscriberIntentResponseAmino;
}
export interface MsgAddSubscriberIntentResponseSDKType {
}
export interface MsgRemoveSubscriberIntentRequest {
    subscriptionId: string;
    subscriberAddress: string;
    signer: string;
}
export interface MsgRemoveSubscriberIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentRequest";
    value: Uint8Array;
}
export interface MsgRemoveSubscriberIntentRequestAmino {
    subscription_id?: string;
    subscriber_address?: string;
    signer?: string;
}
export interface MsgRemoveSubscriberIntentRequestAminoMsg {
    type: "/pubsub.v1.MsgRemoveSubscriberIntentRequest";
    value: MsgRemoveSubscriberIntentRequestAmino;
}
export interface MsgRemoveSubscriberIntentRequestSDKType {
    subscription_id: string;
    subscriber_address: string;
    signer: string;
}
export interface MsgRemoveSubscriberIntentResponse {
}
export interface MsgRemoveSubscriberIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.MsgRemoveSubscriberIntentResponse";
    value: Uint8Array;
}
export interface MsgRemoveSubscriberIntentResponseAmino {
}
export interface MsgRemoveSubscriberIntentResponseAminoMsg {
    type: "/pubsub.v1.MsgRemoveSubscriberIntentResponse";
    value: MsgRemoveSubscriberIntentResponseAmino;
}
export interface MsgRemoveSubscriberIntentResponseSDKType {
}
export declare const MsgRemovePublisherRequest: {
    typeUrl: string;
    encode(message: MsgRemovePublisherRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemovePublisherRequest;
    fromPartial(object: Partial<MsgRemovePublisherRequest>): MsgRemovePublisherRequest;
    fromAmino(object: MsgRemovePublisherRequestAmino): MsgRemovePublisherRequest;
    toAmino(message: MsgRemovePublisherRequest): MsgRemovePublisherRequestAmino;
    fromAminoMsg(object: MsgRemovePublisherRequestAminoMsg): MsgRemovePublisherRequest;
    fromProtoMsg(message: MsgRemovePublisherRequestProtoMsg): MsgRemovePublisherRequest;
    toProto(message: MsgRemovePublisherRequest): Uint8Array;
    toProtoMsg(message: MsgRemovePublisherRequest): MsgRemovePublisherRequestProtoMsg;
};
export declare const MsgRemovePublisherResponse: {
    typeUrl: string;
    encode(_: MsgRemovePublisherResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemovePublisherResponse;
    fromPartial(_: Partial<MsgRemovePublisherResponse>): MsgRemovePublisherResponse;
    fromAmino(_: MsgRemovePublisherResponseAmino): MsgRemovePublisherResponse;
    toAmino(_: MsgRemovePublisherResponse): MsgRemovePublisherResponseAmino;
    fromAminoMsg(object: MsgRemovePublisherResponseAminoMsg): MsgRemovePublisherResponse;
    fromProtoMsg(message: MsgRemovePublisherResponseProtoMsg): MsgRemovePublisherResponse;
    toProto(message: MsgRemovePublisherResponse): Uint8Array;
    toProtoMsg(message: MsgRemovePublisherResponse): MsgRemovePublisherResponseProtoMsg;
};
export declare const MsgAddSubscriberRequest: {
    typeUrl: string;
    encode(message: MsgAddSubscriberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddSubscriberRequest;
    fromPartial(object: Partial<MsgAddSubscriberRequest>): MsgAddSubscriberRequest;
    fromAmino(object: MsgAddSubscriberRequestAmino): MsgAddSubscriberRequest;
    toAmino(message: MsgAddSubscriberRequest): MsgAddSubscriberRequestAmino;
    fromAminoMsg(object: MsgAddSubscriberRequestAminoMsg): MsgAddSubscriberRequest;
    fromProtoMsg(message: MsgAddSubscriberRequestProtoMsg): MsgAddSubscriberRequest;
    toProto(message: MsgAddSubscriberRequest): Uint8Array;
    toProtoMsg(message: MsgAddSubscriberRequest): MsgAddSubscriberRequestProtoMsg;
};
export declare const MsgAddSubscriberResponse: {
    typeUrl: string;
    encode(_: MsgAddSubscriberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddSubscriberResponse;
    fromPartial(_: Partial<MsgAddSubscriberResponse>): MsgAddSubscriberResponse;
    fromAmino(_: MsgAddSubscriberResponseAmino): MsgAddSubscriberResponse;
    toAmino(_: MsgAddSubscriberResponse): MsgAddSubscriberResponseAmino;
    fromAminoMsg(object: MsgAddSubscriberResponseAminoMsg): MsgAddSubscriberResponse;
    fromProtoMsg(message: MsgAddSubscriberResponseProtoMsg): MsgAddSubscriberResponse;
    toProto(message: MsgAddSubscriberResponse): Uint8Array;
    toProtoMsg(message: MsgAddSubscriberResponse): MsgAddSubscriberResponseProtoMsg;
};
export declare const MsgRemoveSubscriberRequest: {
    typeUrl: string;
    encode(message: MsgRemoveSubscriberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveSubscriberRequest;
    fromPartial(object: Partial<MsgRemoveSubscriberRequest>): MsgRemoveSubscriberRequest;
    fromAmino(object: MsgRemoveSubscriberRequestAmino): MsgRemoveSubscriberRequest;
    toAmino(message: MsgRemoveSubscriberRequest): MsgRemoveSubscriberRequestAmino;
    fromAminoMsg(object: MsgRemoveSubscriberRequestAminoMsg): MsgRemoveSubscriberRequest;
    fromProtoMsg(message: MsgRemoveSubscriberRequestProtoMsg): MsgRemoveSubscriberRequest;
    toProto(message: MsgRemoveSubscriberRequest): Uint8Array;
    toProtoMsg(message: MsgRemoveSubscriberRequest): MsgRemoveSubscriberRequestProtoMsg;
};
export declare const MsgRemoveSubscriberResponse: {
    typeUrl: string;
    encode(_: MsgRemoveSubscriberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveSubscriberResponse;
    fromPartial(_: Partial<MsgRemoveSubscriberResponse>): MsgRemoveSubscriberResponse;
    fromAmino(_: MsgRemoveSubscriberResponseAmino): MsgRemoveSubscriberResponse;
    toAmino(_: MsgRemoveSubscriberResponse): MsgRemoveSubscriberResponseAmino;
    fromAminoMsg(object: MsgRemoveSubscriberResponseAminoMsg): MsgRemoveSubscriberResponse;
    fromProtoMsg(message: MsgRemoveSubscriberResponseProtoMsg): MsgRemoveSubscriberResponse;
    toProto(message: MsgRemoveSubscriberResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveSubscriberResponse): MsgRemoveSubscriberResponseProtoMsg;
};
export declare const MsgAddPublisherIntentRequest: {
    typeUrl: string;
    encode(message: MsgAddPublisherIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddPublisherIntentRequest;
    fromPartial(object: Partial<MsgAddPublisherIntentRequest>): MsgAddPublisherIntentRequest;
    fromAmino(object: MsgAddPublisherIntentRequestAmino): MsgAddPublisherIntentRequest;
    toAmino(message: MsgAddPublisherIntentRequest): MsgAddPublisherIntentRequestAmino;
    fromAminoMsg(object: MsgAddPublisherIntentRequestAminoMsg): MsgAddPublisherIntentRequest;
    fromProtoMsg(message: MsgAddPublisherIntentRequestProtoMsg): MsgAddPublisherIntentRequest;
    toProto(message: MsgAddPublisherIntentRequest): Uint8Array;
    toProtoMsg(message: MsgAddPublisherIntentRequest): MsgAddPublisherIntentRequestProtoMsg;
};
export declare const MsgAddPublisherIntentResponse: {
    typeUrl: string;
    encode(_: MsgAddPublisherIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddPublisherIntentResponse;
    fromPartial(_: Partial<MsgAddPublisherIntentResponse>): MsgAddPublisherIntentResponse;
    fromAmino(_: MsgAddPublisherIntentResponseAmino): MsgAddPublisherIntentResponse;
    toAmino(_: MsgAddPublisherIntentResponse): MsgAddPublisherIntentResponseAmino;
    fromAminoMsg(object: MsgAddPublisherIntentResponseAminoMsg): MsgAddPublisherIntentResponse;
    fromProtoMsg(message: MsgAddPublisherIntentResponseProtoMsg): MsgAddPublisherIntentResponse;
    toProto(message: MsgAddPublisherIntentResponse): Uint8Array;
    toProtoMsg(message: MsgAddPublisherIntentResponse): MsgAddPublisherIntentResponseProtoMsg;
};
export declare const MsgRemovePublisherIntentRequest: {
    typeUrl: string;
    encode(message: MsgRemovePublisherIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemovePublisherIntentRequest;
    fromPartial(object: Partial<MsgRemovePublisherIntentRequest>): MsgRemovePublisherIntentRequest;
    fromAmino(object: MsgRemovePublisherIntentRequestAmino): MsgRemovePublisherIntentRequest;
    toAmino(message: MsgRemovePublisherIntentRequest): MsgRemovePublisherIntentRequestAmino;
    fromAminoMsg(object: MsgRemovePublisherIntentRequestAminoMsg): MsgRemovePublisherIntentRequest;
    fromProtoMsg(message: MsgRemovePublisherIntentRequestProtoMsg): MsgRemovePublisherIntentRequest;
    toProto(message: MsgRemovePublisherIntentRequest): Uint8Array;
    toProtoMsg(message: MsgRemovePublisherIntentRequest): MsgRemovePublisherIntentRequestProtoMsg;
};
export declare const MsgRemovePublisherIntentResponse: {
    typeUrl: string;
    encode(_: MsgRemovePublisherIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemovePublisherIntentResponse;
    fromPartial(_: Partial<MsgRemovePublisherIntentResponse>): MsgRemovePublisherIntentResponse;
    fromAmino(_: MsgRemovePublisherIntentResponseAmino): MsgRemovePublisherIntentResponse;
    toAmino(_: MsgRemovePublisherIntentResponse): MsgRemovePublisherIntentResponseAmino;
    fromAminoMsg(object: MsgRemovePublisherIntentResponseAminoMsg): MsgRemovePublisherIntentResponse;
    fromProtoMsg(message: MsgRemovePublisherIntentResponseProtoMsg): MsgRemovePublisherIntentResponse;
    toProto(message: MsgRemovePublisherIntentResponse): Uint8Array;
    toProtoMsg(message: MsgRemovePublisherIntentResponse): MsgRemovePublisherIntentResponseProtoMsg;
};
export declare const MsgAddSubscriberIntentRequest: {
    typeUrl: string;
    encode(message: MsgAddSubscriberIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddSubscriberIntentRequest;
    fromPartial(object: Partial<MsgAddSubscriberIntentRequest>): MsgAddSubscriberIntentRequest;
    fromAmino(object: MsgAddSubscriberIntentRequestAmino): MsgAddSubscriberIntentRequest;
    toAmino(message: MsgAddSubscriberIntentRequest): MsgAddSubscriberIntentRequestAmino;
    fromAminoMsg(object: MsgAddSubscriberIntentRequestAminoMsg): MsgAddSubscriberIntentRequest;
    fromProtoMsg(message: MsgAddSubscriberIntentRequestProtoMsg): MsgAddSubscriberIntentRequest;
    toProto(message: MsgAddSubscriberIntentRequest): Uint8Array;
    toProtoMsg(message: MsgAddSubscriberIntentRequest): MsgAddSubscriberIntentRequestProtoMsg;
};
export declare const MsgAddSubscriberIntentResponse: {
    typeUrl: string;
    encode(_: MsgAddSubscriberIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddSubscriberIntentResponse;
    fromPartial(_: Partial<MsgAddSubscriberIntentResponse>): MsgAddSubscriberIntentResponse;
    fromAmino(_: MsgAddSubscriberIntentResponseAmino): MsgAddSubscriberIntentResponse;
    toAmino(_: MsgAddSubscriberIntentResponse): MsgAddSubscriberIntentResponseAmino;
    fromAminoMsg(object: MsgAddSubscriberIntentResponseAminoMsg): MsgAddSubscriberIntentResponse;
    fromProtoMsg(message: MsgAddSubscriberIntentResponseProtoMsg): MsgAddSubscriberIntentResponse;
    toProto(message: MsgAddSubscriberIntentResponse): Uint8Array;
    toProtoMsg(message: MsgAddSubscriberIntentResponse): MsgAddSubscriberIntentResponseProtoMsg;
};
export declare const MsgRemoveSubscriberIntentRequest: {
    typeUrl: string;
    encode(message: MsgRemoveSubscriberIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveSubscriberIntentRequest;
    fromPartial(object: Partial<MsgRemoveSubscriberIntentRequest>): MsgRemoveSubscriberIntentRequest;
    fromAmino(object: MsgRemoveSubscriberIntentRequestAmino): MsgRemoveSubscriberIntentRequest;
    toAmino(message: MsgRemoveSubscriberIntentRequest): MsgRemoveSubscriberIntentRequestAmino;
    fromAminoMsg(object: MsgRemoveSubscriberIntentRequestAminoMsg): MsgRemoveSubscriberIntentRequest;
    fromProtoMsg(message: MsgRemoveSubscriberIntentRequestProtoMsg): MsgRemoveSubscriberIntentRequest;
    toProto(message: MsgRemoveSubscriberIntentRequest): Uint8Array;
    toProtoMsg(message: MsgRemoveSubscriberIntentRequest): MsgRemoveSubscriberIntentRequestProtoMsg;
};
export declare const MsgRemoveSubscriberIntentResponse: {
    typeUrl: string;
    encode(_: MsgRemoveSubscriberIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveSubscriberIntentResponse;
    fromPartial(_: Partial<MsgRemoveSubscriberIntentResponse>): MsgRemoveSubscriberIntentResponse;
    fromAmino(_: MsgRemoveSubscriberIntentResponseAmino): MsgRemoveSubscriberIntentResponse;
    toAmino(_: MsgRemoveSubscriberIntentResponse): MsgRemoveSubscriberIntentResponseAmino;
    fromAminoMsg(object: MsgRemoveSubscriberIntentResponseAminoMsg): MsgRemoveSubscriberIntentResponse;
    fromProtoMsg(message: MsgRemoveSubscriberIntentResponseProtoMsg): MsgRemoveSubscriberIntentResponse;
    toProto(message: MsgRemoveSubscriberIntentResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveSubscriberIntentResponse): MsgRemoveSubscriberIntentResponseProtoMsg;
};
