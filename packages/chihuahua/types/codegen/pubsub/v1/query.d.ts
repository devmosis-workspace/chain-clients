import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Publisher, PublisherAmino, PublisherSDKType, Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType, DefaultSubscription, DefaultSubscriptionAmino, DefaultSubscriptionSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/pubsub.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/pubsub.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryPublisherRequest {
    publisherDomain: string;
}
export interface QueryPublisherRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherRequest";
    value: Uint8Array;
}
export interface QueryPublisherRequestAmino {
    publisher_domain?: string;
}
export interface QueryPublisherRequestAminoMsg {
    type: "/pubsub.v1.QueryPublisherRequest";
    value: QueryPublisherRequestAmino;
}
export interface QueryPublisherRequestSDKType {
    publisher_domain: string;
}
export interface QueryPublisherResponse {
    publisher?: Publisher;
}
export interface QueryPublisherResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherResponse";
    value: Uint8Array;
}
export interface QueryPublisherResponseAmino {
    publisher?: PublisherAmino;
}
export interface QueryPublisherResponseAminoMsg {
    type: "/pubsub.v1.QueryPublisherResponse";
    value: QueryPublisherResponseAmino;
}
export interface QueryPublisherResponseSDKType {
    publisher?: PublisherSDKType;
}
export interface QueryPublishersRequest {
}
export interface QueryPublishersRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublishersRequest";
    value: Uint8Array;
}
export interface QueryPublishersRequestAmino {
}
export interface QueryPublishersRequestAminoMsg {
    type: "/pubsub.v1.QueryPublishersRequest";
    value: QueryPublishersRequestAmino;
}
export interface QueryPublishersRequestSDKType {
}
export interface QueryPublishersResponse {
    publishers: Publisher[];
}
export interface QueryPublishersResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublishersResponse";
    value: Uint8Array;
}
export interface QueryPublishersResponseAmino {
    publishers?: PublisherAmino[];
}
export interface QueryPublishersResponseAminoMsg {
    type: "/pubsub.v1.QueryPublishersResponse";
    value: QueryPublishersResponseAmino;
}
export interface QueryPublishersResponseSDKType {
    publishers: PublisherSDKType[];
}
export interface QuerySubscriberRequest {
    subscriberAddress: string;
}
export interface QuerySubscriberRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberRequest";
    value: Uint8Array;
}
export interface QuerySubscriberRequestAmino {
    subscriber_address?: string;
}
export interface QuerySubscriberRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberRequest";
    value: QuerySubscriberRequestAmino;
}
export interface QuerySubscriberRequestSDKType {
    subscriber_address: string;
}
export interface QuerySubscriberResponse {
    subscriber?: Subscriber;
}
export interface QuerySubscriberResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberResponse";
    value: Uint8Array;
}
export interface QuerySubscriberResponseAmino {
    subscriber?: SubscriberAmino;
}
export interface QuerySubscriberResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberResponse";
    value: QuerySubscriberResponseAmino;
}
export interface QuerySubscriberResponseSDKType {
    subscriber?: SubscriberSDKType;
}
export interface QuerySubscribersRequest {
}
export interface QuerySubscribersRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscribersRequest";
    value: Uint8Array;
}
export interface QuerySubscribersRequestAmino {
}
export interface QuerySubscribersRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscribersRequest";
    value: QuerySubscribersRequestAmino;
}
export interface QuerySubscribersRequestSDKType {
}
export interface QuerySubscribersResponse {
    subscribers: Subscriber[];
}
export interface QuerySubscribersResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscribersResponse";
    value: Uint8Array;
}
export interface QuerySubscribersResponseAmino {
    subscribers?: SubscriberAmino[];
}
export interface QuerySubscribersResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscribersResponse";
    value: QuerySubscribersResponseAmino;
}
export interface QuerySubscribersResponseSDKType {
    subscribers: SubscriberSDKType[];
}
export interface QueryValidatorSubscribersRequest {
}
export interface QueryValidatorSubscribersRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryValidatorSubscribersRequest";
    value: Uint8Array;
}
export interface QueryValidatorSubscribersRequestAmino {
}
export interface QueryValidatorSubscribersRequestAminoMsg {
    type: "/pubsub.v1.QueryValidatorSubscribersRequest";
    value: QueryValidatorSubscribersRequestAmino;
}
export interface QueryValidatorSubscribersRequestSDKType {
}
export interface QueryValidatorSubscribersResponse {
    subscribers: Subscriber[];
}
export interface QueryValidatorSubscribersResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryValidatorSubscribersResponse";
    value: Uint8Array;
}
export interface QueryValidatorSubscribersResponseAmino {
    subscribers?: SubscriberAmino[];
}
export interface QueryValidatorSubscribersResponseAminoMsg {
    type: "/pubsub.v1.QueryValidatorSubscribersResponse";
    value: QueryValidatorSubscribersResponseAmino;
}
export interface QueryValidatorSubscribersResponseSDKType {
    subscribers: SubscriberSDKType[];
}
export interface QueryPublisherIntentRequest {
    publisherDomain: string;
    subscriptionId: string;
}
export interface QueryPublisherIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentRequest";
    value: Uint8Array;
}
export interface QueryPublisherIntentRequestAmino {
    publisher_domain?: string;
    subscription_id?: string;
}
export interface QueryPublisherIntentRequestAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentRequest";
    value: QueryPublisherIntentRequestAmino;
}
export interface QueryPublisherIntentRequestSDKType {
    publisher_domain: string;
    subscription_id: string;
}
export interface QueryPublisherIntentResponse {
    publisherIntent?: PublisherIntent;
}
export interface QueryPublisherIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentResponse";
    value: Uint8Array;
}
export interface QueryPublisherIntentResponseAmino {
    publisher_intent?: PublisherIntentAmino;
}
export interface QueryPublisherIntentResponseAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentResponse";
    value: QueryPublisherIntentResponseAmino;
}
export interface QueryPublisherIntentResponseSDKType {
    publisher_intent?: PublisherIntentSDKType;
}
export interface QueryPublisherIntentsRequest {
}
export interface QueryPublisherIntentsRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsRequest";
    value: Uint8Array;
}
export interface QueryPublisherIntentsRequestAmino {
}
export interface QueryPublisherIntentsRequestAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsRequest";
    value: QueryPublisherIntentsRequestAmino;
}
export interface QueryPublisherIntentsRequestSDKType {
}
export interface QueryPublisherIntentsResponse {
    publisherIntents: PublisherIntent[];
}
export interface QueryPublisherIntentsResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsResponse";
    value: Uint8Array;
}
export interface QueryPublisherIntentsResponseAmino {
    publisher_intents?: PublisherIntentAmino[];
}
export interface QueryPublisherIntentsResponseAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsResponse";
    value: QueryPublisherIntentsResponseAmino;
}
export interface QueryPublisherIntentsResponseSDKType {
    publisher_intents: PublisherIntentSDKType[];
}
export interface QueryPublisherIntentsByPublisherDomainRequest {
    publisherDomain: string;
}
export interface QueryPublisherIntentsByPublisherDomainRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainRequest";
    value: Uint8Array;
}
export interface QueryPublisherIntentsByPublisherDomainRequestAmino {
    publisher_domain?: string;
}
export interface QueryPublisherIntentsByPublisherDomainRequestAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainRequest";
    value: QueryPublisherIntentsByPublisherDomainRequestAmino;
}
export interface QueryPublisherIntentsByPublisherDomainRequestSDKType {
    publisher_domain: string;
}
export interface QueryPublisherIntentsByPublisherDomainResponse {
    publisherIntents: PublisherIntent[];
}
export interface QueryPublisherIntentsByPublisherDomainResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainResponse";
    value: Uint8Array;
}
export interface QueryPublisherIntentsByPublisherDomainResponseAmino {
    publisher_intents?: PublisherIntentAmino[];
}
export interface QueryPublisherIntentsByPublisherDomainResponseAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainResponse";
    value: QueryPublisherIntentsByPublisherDomainResponseAmino;
}
export interface QueryPublisherIntentsByPublisherDomainResponseSDKType {
    publisher_intents: PublisherIntentSDKType[];
}
export interface QueryPublisherIntentsBySubscriptionIDRequest {
    subscriptionId: string;
}
export interface QueryPublisherIntentsBySubscriptionIDRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDRequest";
    value: Uint8Array;
}
export interface QueryPublisherIntentsBySubscriptionIDRequestAmino {
    subscription_id?: string;
}
export interface QueryPublisherIntentsBySubscriptionIDRequestAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDRequest";
    value: QueryPublisherIntentsBySubscriptionIDRequestAmino;
}
export interface QueryPublisherIntentsBySubscriptionIDRequestSDKType {
    subscription_id: string;
}
export interface QueryPublisherIntentsBySubscriptionIDResponse {
    publisherIntents: PublisherIntent[];
}
export interface QueryPublisherIntentsBySubscriptionIDResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDResponse";
    value: Uint8Array;
}
export interface QueryPublisherIntentsBySubscriptionIDResponseAmino {
    publisher_intents?: PublisherIntentAmino[];
}
export interface QueryPublisherIntentsBySubscriptionIDResponseAminoMsg {
    type: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDResponse";
    value: QueryPublisherIntentsBySubscriptionIDResponseAmino;
}
export interface QueryPublisherIntentsBySubscriptionIDResponseSDKType {
    publisher_intents: PublisherIntentSDKType[];
}
export interface QuerySubscriberIntentRequest {
    subscriberAddress: string;
    subscriptionId: string;
}
export interface QuerySubscriberIntentRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentRequest";
    value: Uint8Array;
}
export interface QuerySubscriberIntentRequestAmino {
    subscriber_address?: string;
    subscription_id?: string;
}
export interface QuerySubscriberIntentRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentRequest";
    value: QuerySubscriberIntentRequestAmino;
}
export interface QuerySubscriberIntentRequestSDKType {
    subscriber_address: string;
    subscription_id: string;
}
export interface QuerySubscriberIntentResponse {
    subscriberIntent?: SubscriberIntent;
}
export interface QuerySubscriberIntentResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentResponse";
    value: Uint8Array;
}
export interface QuerySubscriberIntentResponseAmino {
    subscriber_intent?: SubscriberIntentAmino;
}
export interface QuerySubscriberIntentResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentResponse";
    value: QuerySubscriberIntentResponseAmino;
}
export interface QuerySubscriberIntentResponseSDKType {
    subscriber_intent?: SubscriberIntentSDKType;
}
export interface QuerySubscriberIntentsRequest {
}
export interface QuerySubscriberIntentsRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsRequest";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsRequestAmino {
}
export interface QuerySubscriberIntentsRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsRequest";
    value: QuerySubscriberIntentsRequestAmino;
}
export interface QuerySubscriberIntentsRequestSDKType {
}
export interface QuerySubscriberIntentsResponse {
    subscriberIntents: SubscriberIntent[];
}
export interface QuerySubscriberIntentsResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsResponse";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsResponseAmino {
    subscriber_intents?: SubscriberIntentAmino[];
}
export interface QuerySubscriberIntentsResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsResponse";
    value: QuerySubscriberIntentsResponseAmino;
}
export interface QuerySubscriberIntentsResponseSDKType {
    subscriber_intents: SubscriberIntentSDKType[];
}
export interface QuerySubscriberIntentsBySubscriberAddressRequest {
    subscriberAddress: string;
}
export interface QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressRequest";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsBySubscriberAddressRequestAmino {
    subscriber_address?: string;
}
export interface QuerySubscriberIntentsBySubscriberAddressRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressRequest";
    value: QuerySubscriberIntentsBySubscriberAddressRequestAmino;
}
export interface QuerySubscriberIntentsBySubscriberAddressRequestSDKType {
    subscriber_address: string;
}
export interface QuerySubscriberIntentsBySubscriberAddressResponse {
    subscriberIntents: SubscriberIntent[];
}
export interface QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressResponse";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsBySubscriberAddressResponseAmino {
    subscriber_intents?: SubscriberIntentAmino[];
}
export interface QuerySubscriberIntentsBySubscriberAddressResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressResponse";
    value: QuerySubscriberIntentsBySubscriberAddressResponseAmino;
}
export interface QuerySubscriberIntentsBySubscriberAddressResponseSDKType {
    subscriber_intents: SubscriberIntentSDKType[];
}
export interface QuerySubscriberIntentsBySubscriptionIDRequest {
    subscriptionId: string;
}
export interface QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDRequest";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsBySubscriptionIDRequestAmino {
    subscription_id?: string;
}
export interface QuerySubscriberIntentsBySubscriptionIDRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDRequest";
    value: QuerySubscriberIntentsBySubscriptionIDRequestAmino;
}
export interface QuerySubscriberIntentsBySubscriptionIDRequestSDKType {
    subscription_id: string;
}
export interface QuerySubscriberIntentsBySubscriptionIDResponse {
    subscriberIntents: SubscriberIntent[];
}
export interface QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDResponse";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsBySubscriptionIDResponseAmino {
    subscriber_intents?: SubscriberIntentAmino[];
}
export interface QuerySubscriberIntentsBySubscriptionIDResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDResponse";
    value: QuerySubscriberIntentsBySubscriptionIDResponseAmino;
}
export interface QuerySubscriberIntentsBySubscriptionIDResponseSDKType {
    subscriber_intents: SubscriberIntentSDKType[];
}
export interface QuerySubscriberIntentsByPublisherDomainRequest {
    publisherDomain: string;
}
export interface QuerySubscriberIntentsByPublisherDomainRequestProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainRequest";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsByPublisherDomainRequestAmino {
    publisher_domain?: string;
}
export interface QuerySubscriberIntentsByPublisherDomainRequestAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainRequest";
    value: QuerySubscriberIntentsByPublisherDomainRequestAmino;
}
export interface QuerySubscriberIntentsByPublisherDomainRequestSDKType {
    publisher_domain: string;
}
export interface QuerySubscriberIntentsByPublisherDomainResponse {
    subscriberIntents: SubscriberIntent[];
}
export interface QuerySubscriberIntentsByPublisherDomainResponseProtoMsg {
    typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainResponse";
    value: Uint8Array;
}
export interface QuerySubscriberIntentsByPublisherDomainResponseAmino {
    subscriber_intents?: SubscriberIntentAmino[];
}
export interface QuerySubscriberIntentsByPublisherDomainResponseAminoMsg {
    type: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainResponse";
    value: QuerySubscriberIntentsByPublisherDomainResponseAmino;
}
export interface QuerySubscriberIntentsByPublisherDomainResponseSDKType {
    subscriber_intents: SubscriberIntentSDKType[];
}
export interface QueryDefaultSubscriptionRequest {
    subscriptionId: string;
}
export interface QueryDefaultSubscriptionRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryDefaultSubscriptionRequest";
    value: Uint8Array;
}
export interface QueryDefaultSubscriptionRequestAmino {
    subscription_id?: string;
}
export interface QueryDefaultSubscriptionRequestAminoMsg {
    type: "/pubsub.v1.QueryDefaultSubscriptionRequest";
    value: QueryDefaultSubscriptionRequestAmino;
}
export interface QueryDefaultSubscriptionRequestSDKType {
    subscription_id: string;
}
export interface QueryDefaultSubscriptionResponse {
    defaultSubscription?: DefaultSubscription;
}
export interface QueryDefaultSubscriptionResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryDefaultSubscriptionResponse";
    value: Uint8Array;
}
export interface QueryDefaultSubscriptionResponseAmino {
    default_subscription?: DefaultSubscriptionAmino;
}
export interface QueryDefaultSubscriptionResponseAminoMsg {
    type: "/pubsub.v1.QueryDefaultSubscriptionResponse";
    value: QueryDefaultSubscriptionResponseAmino;
}
export interface QueryDefaultSubscriptionResponseSDKType {
    default_subscription?: DefaultSubscriptionSDKType;
}
export interface QueryDefaultSubscriptionsRequest {
}
export interface QueryDefaultSubscriptionsRequestProtoMsg {
    typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsRequest";
    value: Uint8Array;
}
export interface QueryDefaultSubscriptionsRequestAmino {
}
export interface QueryDefaultSubscriptionsRequestAminoMsg {
    type: "/pubsub.v1.QueryDefaultSubscriptionsRequest";
    value: QueryDefaultSubscriptionsRequestAmino;
}
export interface QueryDefaultSubscriptionsRequestSDKType {
}
export interface QueryDefaultSubscriptionsResponse {
    defaultSubscriptions: DefaultSubscription[];
}
export interface QueryDefaultSubscriptionsResponseProtoMsg {
    typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsResponse";
    value: Uint8Array;
}
export interface QueryDefaultSubscriptionsResponseAmino {
    default_subscriptions?: DefaultSubscriptionAmino[];
}
export interface QueryDefaultSubscriptionsResponseAminoMsg {
    type: "/pubsub.v1.QueryDefaultSubscriptionsResponse";
    value: QueryDefaultSubscriptionsResponseAmino;
}
export interface QueryDefaultSubscriptionsResponseSDKType {
    default_subscriptions: DefaultSubscriptionSDKType[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryPublisherRequest: {
    typeUrl: string;
    encode(message: QueryPublisherRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherRequest;
    fromPartial(object: Partial<QueryPublisherRequest>): QueryPublisherRequest;
    fromAmino(object: QueryPublisherRequestAmino): QueryPublisherRequest;
    toAmino(message: QueryPublisherRequest): QueryPublisherRequestAmino;
    fromAminoMsg(object: QueryPublisherRequestAminoMsg): QueryPublisherRequest;
    fromProtoMsg(message: QueryPublisherRequestProtoMsg): QueryPublisherRequest;
    toProto(message: QueryPublisherRequest): Uint8Array;
    toProtoMsg(message: QueryPublisherRequest): QueryPublisherRequestProtoMsg;
};
export declare const QueryPublisherResponse: {
    typeUrl: string;
    encode(message: QueryPublisherResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherResponse;
    fromPartial(object: Partial<QueryPublisherResponse>): QueryPublisherResponse;
    fromAmino(object: QueryPublisherResponseAmino): QueryPublisherResponse;
    toAmino(message: QueryPublisherResponse): QueryPublisherResponseAmino;
    fromAminoMsg(object: QueryPublisherResponseAminoMsg): QueryPublisherResponse;
    fromProtoMsg(message: QueryPublisherResponseProtoMsg): QueryPublisherResponse;
    toProto(message: QueryPublisherResponse): Uint8Array;
    toProtoMsg(message: QueryPublisherResponse): QueryPublisherResponseProtoMsg;
};
export declare const QueryPublishersRequest: {
    typeUrl: string;
    encode(_: QueryPublishersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPublishersRequest;
    fromPartial(_: Partial<QueryPublishersRequest>): QueryPublishersRequest;
    fromAmino(_: QueryPublishersRequestAmino): QueryPublishersRequest;
    toAmino(_: QueryPublishersRequest): QueryPublishersRequestAmino;
    fromAminoMsg(object: QueryPublishersRequestAminoMsg): QueryPublishersRequest;
    fromProtoMsg(message: QueryPublishersRequestProtoMsg): QueryPublishersRequest;
    toProto(message: QueryPublishersRequest): Uint8Array;
    toProtoMsg(message: QueryPublishersRequest): QueryPublishersRequestProtoMsg;
};
export declare const QueryPublishersResponse: {
    typeUrl: string;
    encode(message: QueryPublishersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublishersResponse;
    fromPartial(object: Partial<QueryPublishersResponse>): QueryPublishersResponse;
    fromAmino(object: QueryPublishersResponseAmino): QueryPublishersResponse;
    toAmino(message: QueryPublishersResponse): QueryPublishersResponseAmino;
    fromAminoMsg(object: QueryPublishersResponseAminoMsg): QueryPublishersResponse;
    fromProtoMsg(message: QueryPublishersResponseProtoMsg): QueryPublishersResponse;
    toProto(message: QueryPublishersResponse): Uint8Array;
    toProtoMsg(message: QueryPublishersResponse): QueryPublishersResponseProtoMsg;
};
export declare const QuerySubscriberRequest: {
    typeUrl: string;
    encode(message: QuerySubscriberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberRequest;
    fromPartial(object: Partial<QuerySubscriberRequest>): QuerySubscriberRequest;
    fromAmino(object: QuerySubscriberRequestAmino): QuerySubscriberRequest;
    toAmino(message: QuerySubscriberRequest): QuerySubscriberRequestAmino;
    fromAminoMsg(object: QuerySubscriberRequestAminoMsg): QuerySubscriberRequest;
    fromProtoMsg(message: QuerySubscriberRequestProtoMsg): QuerySubscriberRequest;
    toProto(message: QuerySubscriberRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberRequest): QuerySubscriberRequestProtoMsg;
};
export declare const QuerySubscriberResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberResponse;
    fromPartial(object: Partial<QuerySubscriberResponse>): QuerySubscriberResponse;
    fromAmino(object: QuerySubscriberResponseAmino): QuerySubscriberResponse;
    toAmino(message: QuerySubscriberResponse): QuerySubscriberResponseAmino;
    fromAminoMsg(object: QuerySubscriberResponseAminoMsg): QuerySubscriberResponse;
    fromProtoMsg(message: QuerySubscriberResponseProtoMsg): QuerySubscriberResponse;
    toProto(message: QuerySubscriberResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberResponse): QuerySubscriberResponseProtoMsg;
};
export declare const QuerySubscribersRequest: {
    typeUrl: string;
    encode(_: QuerySubscribersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySubscribersRequest;
    fromPartial(_: Partial<QuerySubscribersRequest>): QuerySubscribersRequest;
    fromAmino(_: QuerySubscribersRequestAmino): QuerySubscribersRequest;
    toAmino(_: QuerySubscribersRequest): QuerySubscribersRequestAmino;
    fromAminoMsg(object: QuerySubscribersRequestAminoMsg): QuerySubscribersRequest;
    fromProtoMsg(message: QuerySubscribersRequestProtoMsg): QuerySubscribersRequest;
    toProto(message: QuerySubscribersRequest): Uint8Array;
    toProtoMsg(message: QuerySubscribersRequest): QuerySubscribersRequestProtoMsg;
};
export declare const QuerySubscribersResponse: {
    typeUrl: string;
    encode(message: QuerySubscribersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscribersResponse;
    fromPartial(object: Partial<QuerySubscribersResponse>): QuerySubscribersResponse;
    fromAmino(object: QuerySubscribersResponseAmino): QuerySubscribersResponse;
    toAmino(message: QuerySubscribersResponse): QuerySubscribersResponseAmino;
    fromAminoMsg(object: QuerySubscribersResponseAminoMsg): QuerySubscribersResponse;
    fromProtoMsg(message: QuerySubscribersResponseProtoMsg): QuerySubscribersResponse;
    toProto(message: QuerySubscribersResponse): Uint8Array;
    toProtoMsg(message: QuerySubscribersResponse): QuerySubscribersResponseProtoMsg;
};
export declare const QueryValidatorSubscribersRequest: {
    typeUrl: string;
    encode(_: QueryValidatorSubscribersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryValidatorSubscribersRequest;
    fromPartial(_: Partial<QueryValidatorSubscribersRequest>): QueryValidatorSubscribersRequest;
    fromAmino(_: QueryValidatorSubscribersRequestAmino): QueryValidatorSubscribersRequest;
    toAmino(_: QueryValidatorSubscribersRequest): QueryValidatorSubscribersRequestAmino;
    fromAminoMsg(object: QueryValidatorSubscribersRequestAminoMsg): QueryValidatorSubscribersRequest;
    fromProtoMsg(message: QueryValidatorSubscribersRequestProtoMsg): QueryValidatorSubscribersRequest;
    toProto(message: QueryValidatorSubscribersRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorSubscribersRequest): QueryValidatorSubscribersRequestProtoMsg;
};
export declare const QueryValidatorSubscribersResponse: {
    typeUrl: string;
    encode(message: QueryValidatorSubscribersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValidatorSubscribersResponse;
    fromPartial(object: Partial<QueryValidatorSubscribersResponse>): QueryValidatorSubscribersResponse;
    fromAmino(object: QueryValidatorSubscribersResponseAmino): QueryValidatorSubscribersResponse;
    toAmino(message: QueryValidatorSubscribersResponse): QueryValidatorSubscribersResponseAmino;
    fromAminoMsg(object: QueryValidatorSubscribersResponseAminoMsg): QueryValidatorSubscribersResponse;
    fromProtoMsg(message: QueryValidatorSubscribersResponseProtoMsg): QueryValidatorSubscribersResponse;
    toProto(message: QueryValidatorSubscribersResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorSubscribersResponse): QueryValidatorSubscribersResponseProtoMsg;
};
export declare const QueryPublisherIntentRequest: {
    typeUrl: string;
    encode(message: QueryPublisherIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentRequest;
    fromPartial(object: Partial<QueryPublisherIntentRequest>): QueryPublisherIntentRequest;
    fromAmino(object: QueryPublisherIntentRequestAmino): QueryPublisherIntentRequest;
    toAmino(message: QueryPublisherIntentRequest): QueryPublisherIntentRequestAmino;
    fromAminoMsg(object: QueryPublisherIntentRequestAminoMsg): QueryPublisherIntentRequest;
    fromProtoMsg(message: QueryPublisherIntentRequestProtoMsg): QueryPublisherIntentRequest;
    toProto(message: QueryPublisherIntentRequest): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentRequest): QueryPublisherIntentRequestProtoMsg;
};
export declare const QueryPublisherIntentResponse: {
    typeUrl: string;
    encode(message: QueryPublisherIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentResponse;
    fromPartial(object: Partial<QueryPublisherIntentResponse>): QueryPublisherIntentResponse;
    fromAmino(object: QueryPublisherIntentResponseAmino): QueryPublisherIntentResponse;
    toAmino(message: QueryPublisherIntentResponse): QueryPublisherIntentResponseAmino;
    fromAminoMsg(object: QueryPublisherIntentResponseAminoMsg): QueryPublisherIntentResponse;
    fromProtoMsg(message: QueryPublisherIntentResponseProtoMsg): QueryPublisherIntentResponse;
    toProto(message: QueryPublisherIntentResponse): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentResponse): QueryPublisherIntentResponseProtoMsg;
};
export declare const QueryPublisherIntentsRequest: {
    typeUrl: string;
    encode(_: QueryPublisherIntentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryPublisherIntentsRequest;
    fromPartial(_: Partial<QueryPublisherIntentsRequest>): QueryPublisherIntentsRequest;
    fromAmino(_: QueryPublisherIntentsRequestAmino): QueryPublisherIntentsRequest;
    toAmino(_: QueryPublisherIntentsRequest): QueryPublisherIntentsRequestAmino;
    fromAminoMsg(object: QueryPublisherIntentsRequestAminoMsg): QueryPublisherIntentsRequest;
    fromProtoMsg(message: QueryPublisherIntentsRequestProtoMsg): QueryPublisherIntentsRequest;
    toProto(message: QueryPublisherIntentsRequest): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsRequest): QueryPublisherIntentsRequestProtoMsg;
};
export declare const QueryPublisherIntentsResponse: {
    typeUrl: string;
    encode(message: QueryPublisherIntentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentsResponse;
    fromPartial(object: Partial<QueryPublisherIntentsResponse>): QueryPublisherIntentsResponse;
    fromAmino(object: QueryPublisherIntentsResponseAmino): QueryPublisherIntentsResponse;
    toAmino(message: QueryPublisherIntentsResponse): QueryPublisherIntentsResponseAmino;
    fromAminoMsg(object: QueryPublisherIntentsResponseAminoMsg): QueryPublisherIntentsResponse;
    fromProtoMsg(message: QueryPublisherIntentsResponseProtoMsg): QueryPublisherIntentsResponse;
    toProto(message: QueryPublisherIntentsResponse): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsResponse): QueryPublisherIntentsResponseProtoMsg;
};
export declare const QueryPublisherIntentsByPublisherDomainRequest: {
    typeUrl: string;
    encode(message: QueryPublisherIntentsByPublisherDomainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentsByPublisherDomainRequest;
    fromPartial(object: Partial<QueryPublisherIntentsByPublisherDomainRequest>): QueryPublisherIntentsByPublisherDomainRequest;
    fromAmino(object: QueryPublisherIntentsByPublisherDomainRequestAmino): QueryPublisherIntentsByPublisherDomainRequest;
    toAmino(message: QueryPublisherIntentsByPublisherDomainRequest): QueryPublisherIntentsByPublisherDomainRequestAmino;
    fromAminoMsg(object: QueryPublisherIntentsByPublisherDomainRequestAminoMsg): QueryPublisherIntentsByPublisherDomainRequest;
    fromProtoMsg(message: QueryPublisherIntentsByPublisherDomainRequestProtoMsg): QueryPublisherIntentsByPublisherDomainRequest;
    toProto(message: QueryPublisherIntentsByPublisherDomainRequest): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsByPublisherDomainRequest): QueryPublisherIntentsByPublisherDomainRequestProtoMsg;
};
export declare const QueryPublisherIntentsByPublisherDomainResponse: {
    typeUrl: string;
    encode(message: QueryPublisherIntentsByPublisherDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentsByPublisherDomainResponse;
    fromPartial(object: Partial<QueryPublisherIntentsByPublisherDomainResponse>): QueryPublisherIntentsByPublisherDomainResponse;
    fromAmino(object: QueryPublisherIntentsByPublisherDomainResponseAmino): QueryPublisherIntentsByPublisherDomainResponse;
    toAmino(message: QueryPublisherIntentsByPublisherDomainResponse): QueryPublisherIntentsByPublisherDomainResponseAmino;
    fromAminoMsg(object: QueryPublisherIntentsByPublisherDomainResponseAminoMsg): QueryPublisherIntentsByPublisherDomainResponse;
    fromProtoMsg(message: QueryPublisherIntentsByPublisherDomainResponseProtoMsg): QueryPublisherIntentsByPublisherDomainResponse;
    toProto(message: QueryPublisherIntentsByPublisherDomainResponse): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsByPublisherDomainResponse): QueryPublisherIntentsByPublisherDomainResponseProtoMsg;
};
export declare const QueryPublisherIntentsBySubscriptionIDRequest: {
    typeUrl: string;
    encode(message: QueryPublisherIntentsBySubscriptionIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentsBySubscriptionIDRequest;
    fromPartial(object: Partial<QueryPublisherIntentsBySubscriptionIDRequest>): QueryPublisherIntentsBySubscriptionIDRequest;
    fromAmino(object: QueryPublisherIntentsBySubscriptionIDRequestAmino): QueryPublisherIntentsBySubscriptionIDRequest;
    toAmino(message: QueryPublisherIntentsBySubscriptionIDRequest): QueryPublisherIntentsBySubscriptionIDRequestAmino;
    fromAminoMsg(object: QueryPublisherIntentsBySubscriptionIDRequestAminoMsg): QueryPublisherIntentsBySubscriptionIDRequest;
    fromProtoMsg(message: QueryPublisherIntentsBySubscriptionIDRequestProtoMsg): QueryPublisherIntentsBySubscriptionIDRequest;
    toProto(message: QueryPublisherIntentsBySubscriptionIDRequest): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsBySubscriptionIDRequest): QueryPublisherIntentsBySubscriptionIDRequestProtoMsg;
};
export declare const QueryPublisherIntentsBySubscriptionIDResponse: {
    typeUrl: string;
    encode(message: QueryPublisherIntentsBySubscriptionIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPublisherIntentsBySubscriptionIDResponse;
    fromPartial(object: Partial<QueryPublisherIntentsBySubscriptionIDResponse>): QueryPublisherIntentsBySubscriptionIDResponse;
    fromAmino(object: QueryPublisherIntentsBySubscriptionIDResponseAmino): QueryPublisherIntentsBySubscriptionIDResponse;
    toAmino(message: QueryPublisherIntentsBySubscriptionIDResponse): QueryPublisherIntentsBySubscriptionIDResponseAmino;
    fromAminoMsg(object: QueryPublisherIntentsBySubscriptionIDResponseAminoMsg): QueryPublisherIntentsBySubscriptionIDResponse;
    fromProtoMsg(message: QueryPublisherIntentsBySubscriptionIDResponseProtoMsg): QueryPublisherIntentsBySubscriptionIDResponse;
    toProto(message: QueryPublisherIntentsBySubscriptionIDResponse): Uint8Array;
    toProtoMsg(message: QueryPublisherIntentsBySubscriptionIDResponse): QueryPublisherIntentsBySubscriptionIDResponseProtoMsg;
};
export declare const QuerySubscriberIntentRequest: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentRequest;
    fromPartial(object: Partial<QuerySubscriberIntentRequest>): QuerySubscriberIntentRequest;
    fromAmino(object: QuerySubscriberIntentRequestAmino): QuerySubscriberIntentRequest;
    toAmino(message: QuerySubscriberIntentRequest): QuerySubscriberIntentRequestAmino;
    fromAminoMsg(object: QuerySubscriberIntentRequestAminoMsg): QuerySubscriberIntentRequest;
    fromProtoMsg(message: QuerySubscriberIntentRequestProtoMsg): QuerySubscriberIntentRequest;
    toProto(message: QuerySubscriberIntentRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentRequest): QuerySubscriberIntentRequestProtoMsg;
};
export declare const QuerySubscriberIntentResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentResponse;
    fromPartial(object: Partial<QuerySubscriberIntentResponse>): QuerySubscriberIntentResponse;
    fromAmino(object: QuerySubscriberIntentResponseAmino): QuerySubscriberIntentResponse;
    toAmino(message: QuerySubscriberIntentResponse): QuerySubscriberIntentResponseAmino;
    fromAminoMsg(object: QuerySubscriberIntentResponseAminoMsg): QuerySubscriberIntentResponse;
    fromProtoMsg(message: QuerySubscriberIntentResponseProtoMsg): QuerySubscriberIntentResponse;
    toProto(message: QuerySubscriberIntentResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentResponse): QuerySubscriberIntentResponseProtoMsg;
};
export declare const QuerySubscriberIntentsRequest: {
    typeUrl: string;
    encode(_: QuerySubscriberIntentsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QuerySubscriberIntentsRequest;
    fromPartial(_: Partial<QuerySubscriberIntentsRequest>): QuerySubscriberIntentsRequest;
    fromAmino(_: QuerySubscriberIntentsRequestAmino): QuerySubscriberIntentsRequest;
    toAmino(_: QuerySubscriberIntentsRequest): QuerySubscriberIntentsRequestAmino;
    fromAminoMsg(object: QuerySubscriberIntentsRequestAminoMsg): QuerySubscriberIntentsRequest;
    fromProtoMsg(message: QuerySubscriberIntentsRequestProtoMsg): QuerySubscriberIntentsRequest;
    toProto(message: QuerySubscriberIntentsRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsRequest): QuerySubscriberIntentsRequestProtoMsg;
};
export declare const QuerySubscriberIntentsResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsResponse;
    fromPartial(object: Partial<QuerySubscriberIntentsResponse>): QuerySubscriberIntentsResponse;
    fromAmino(object: QuerySubscriberIntentsResponseAmino): QuerySubscriberIntentsResponse;
    toAmino(message: QuerySubscriberIntentsResponse): QuerySubscriberIntentsResponseAmino;
    fromAminoMsg(object: QuerySubscriberIntentsResponseAminoMsg): QuerySubscriberIntentsResponse;
    fromProtoMsg(message: QuerySubscriberIntentsResponseProtoMsg): QuerySubscriberIntentsResponse;
    toProto(message: QuerySubscriberIntentsResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsResponse): QuerySubscriberIntentsResponseProtoMsg;
};
export declare const QuerySubscriberIntentsBySubscriberAddressRequest: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsBySubscriberAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsBySubscriberAddressRequest;
    fromPartial(object: Partial<QuerySubscriberIntentsBySubscriberAddressRequest>): QuerySubscriberIntentsBySubscriberAddressRequest;
    fromAmino(object: QuerySubscriberIntentsBySubscriberAddressRequestAmino): QuerySubscriberIntentsBySubscriberAddressRequest;
    toAmino(message: QuerySubscriberIntentsBySubscriberAddressRequest): QuerySubscriberIntentsBySubscriberAddressRequestAmino;
    fromAminoMsg(object: QuerySubscriberIntentsBySubscriberAddressRequestAminoMsg): QuerySubscriberIntentsBySubscriberAddressRequest;
    fromProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg): QuerySubscriberIntentsBySubscriberAddressRequest;
    toProto(message: QuerySubscriberIntentsBySubscriberAddressRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressRequest): QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg;
};
export declare const QuerySubscriberIntentsBySubscriberAddressResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsBySubscriberAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsBySubscriberAddressResponse;
    fromPartial(object: Partial<QuerySubscriberIntentsBySubscriberAddressResponse>): QuerySubscriberIntentsBySubscriberAddressResponse;
    fromAmino(object: QuerySubscriberIntentsBySubscriberAddressResponseAmino): QuerySubscriberIntentsBySubscriberAddressResponse;
    toAmino(message: QuerySubscriberIntentsBySubscriberAddressResponse): QuerySubscriberIntentsBySubscriberAddressResponseAmino;
    fromAminoMsg(object: QuerySubscriberIntentsBySubscriberAddressResponseAminoMsg): QuerySubscriberIntentsBySubscriberAddressResponse;
    fromProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg): QuerySubscriberIntentsBySubscriberAddressResponse;
    toProto(message: QuerySubscriberIntentsBySubscriberAddressResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressResponse): QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg;
};
export declare const QuerySubscriberIntentsBySubscriptionIDRequest: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsBySubscriptionIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsBySubscriptionIDRequest;
    fromPartial(object: Partial<QuerySubscriberIntentsBySubscriptionIDRequest>): QuerySubscriberIntentsBySubscriptionIDRequest;
    fromAmino(object: QuerySubscriberIntentsBySubscriptionIDRequestAmino): QuerySubscriberIntentsBySubscriptionIDRequest;
    toAmino(message: QuerySubscriberIntentsBySubscriptionIDRequest): QuerySubscriberIntentsBySubscriptionIDRequestAmino;
    fromAminoMsg(object: QuerySubscriberIntentsBySubscriptionIDRequestAminoMsg): QuerySubscriberIntentsBySubscriptionIDRequest;
    fromProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg): QuerySubscriberIntentsBySubscriptionIDRequest;
    toProto(message: QuerySubscriberIntentsBySubscriptionIDRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDRequest): QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg;
};
export declare const QuerySubscriberIntentsBySubscriptionIDResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsBySubscriptionIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsBySubscriptionIDResponse;
    fromPartial(object: Partial<QuerySubscriberIntentsBySubscriptionIDResponse>): QuerySubscriberIntentsBySubscriptionIDResponse;
    fromAmino(object: QuerySubscriberIntentsBySubscriptionIDResponseAmino): QuerySubscriberIntentsBySubscriptionIDResponse;
    toAmino(message: QuerySubscriberIntentsBySubscriptionIDResponse): QuerySubscriberIntentsBySubscriptionIDResponseAmino;
    fromAminoMsg(object: QuerySubscriberIntentsBySubscriptionIDResponseAminoMsg): QuerySubscriberIntentsBySubscriptionIDResponse;
    fromProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg): QuerySubscriberIntentsBySubscriptionIDResponse;
    toProto(message: QuerySubscriberIntentsBySubscriptionIDResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDResponse): QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg;
};
export declare const QuerySubscriberIntentsByPublisherDomainRequest: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsByPublisherDomainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsByPublisherDomainRequest;
    fromPartial(object: Partial<QuerySubscriberIntentsByPublisherDomainRequest>): QuerySubscriberIntentsByPublisherDomainRequest;
    fromAmino(object: QuerySubscriberIntentsByPublisherDomainRequestAmino): QuerySubscriberIntentsByPublisherDomainRequest;
    toAmino(message: QuerySubscriberIntentsByPublisherDomainRequest): QuerySubscriberIntentsByPublisherDomainRequestAmino;
    fromAminoMsg(object: QuerySubscriberIntentsByPublisherDomainRequestAminoMsg): QuerySubscriberIntentsByPublisherDomainRequest;
    fromProtoMsg(message: QuerySubscriberIntentsByPublisherDomainRequestProtoMsg): QuerySubscriberIntentsByPublisherDomainRequest;
    toProto(message: QuerySubscriberIntentsByPublisherDomainRequest): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsByPublisherDomainRequest): QuerySubscriberIntentsByPublisherDomainRequestProtoMsg;
};
export declare const QuerySubscriberIntentsByPublisherDomainResponse: {
    typeUrl: string;
    encode(message: QuerySubscriberIntentsByPublisherDomainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QuerySubscriberIntentsByPublisherDomainResponse;
    fromPartial(object: Partial<QuerySubscriberIntentsByPublisherDomainResponse>): QuerySubscriberIntentsByPublisherDomainResponse;
    fromAmino(object: QuerySubscriberIntentsByPublisherDomainResponseAmino): QuerySubscriberIntentsByPublisherDomainResponse;
    toAmino(message: QuerySubscriberIntentsByPublisherDomainResponse): QuerySubscriberIntentsByPublisherDomainResponseAmino;
    fromAminoMsg(object: QuerySubscriberIntentsByPublisherDomainResponseAminoMsg): QuerySubscriberIntentsByPublisherDomainResponse;
    fromProtoMsg(message: QuerySubscriberIntentsByPublisherDomainResponseProtoMsg): QuerySubscriberIntentsByPublisherDomainResponse;
    toProto(message: QuerySubscriberIntentsByPublisherDomainResponse): Uint8Array;
    toProtoMsg(message: QuerySubscriberIntentsByPublisherDomainResponse): QuerySubscriberIntentsByPublisherDomainResponseProtoMsg;
};
export declare const QueryDefaultSubscriptionRequest: {
    typeUrl: string;
    encode(message: QueryDefaultSubscriptionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDefaultSubscriptionRequest;
    fromPartial(object: Partial<QueryDefaultSubscriptionRequest>): QueryDefaultSubscriptionRequest;
    fromAmino(object: QueryDefaultSubscriptionRequestAmino): QueryDefaultSubscriptionRequest;
    toAmino(message: QueryDefaultSubscriptionRequest): QueryDefaultSubscriptionRequestAmino;
    fromAminoMsg(object: QueryDefaultSubscriptionRequestAminoMsg): QueryDefaultSubscriptionRequest;
    fromProtoMsg(message: QueryDefaultSubscriptionRequestProtoMsg): QueryDefaultSubscriptionRequest;
    toProto(message: QueryDefaultSubscriptionRequest): Uint8Array;
    toProtoMsg(message: QueryDefaultSubscriptionRequest): QueryDefaultSubscriptionRequestProtoMsg;
};
export declare const QueryDefaultSubscriptionResponse: {
    typeUrl: string;
    encode(message: QueryDefaultSubscriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDefaultSubscriptionResponse;
    fromPartial(object: Partial<QueryDefaultSubscriptionResponse>): QueryDefaultSubscriptionResponse;
    fromAmino(object: QueryDefaultSubscriptionResponseAmino): QueryDefaultSubscriptionResponse;
    toAmino(message: QueryDefaultSubscriptionResponse): QueryDefaultSubscriptionResponseAmino;
    fromAminoMsg(object: QueryDefaultSubscriptionResponseAminoMsg): QueryDefaultSubscriptionResponse;
    fromProtoMsg(message: QueryDefaultSubscriptionResponseProtoMsg): QueryDefaultSubscriptionResponse;
    toProto(message: QueryDefaultSubscriptionResponse): Uint8Array;
    toProtoMsg(message: QueryDefaultSubscriptionResponse): QueryDefaultSubscriptionResponseProtoMsg;
};
export declare const QueryDefaultSubscriptionsRequest: {
    typeUrl: string;
    encode(_: QueryDefaultSubscriptionsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryDefaultSubscriptionsRequest;
    fromPartial(_: Partial<QueryDefaultSubscriptionsRequest>): QueryDefaultSubscriptionsRequest;
    fromAmino(_: QueryDefaultSubscriptionsRequestAmino): QueryDefaultSubscriptionsRequest;
    toAmino(_: QueryDefaultSubscriptionsRequest): QueryDefaultSubscriptionsRequestAmino;
    fromAminoMsg(object: QueryDefaultSubscriptionsRequestAminoMsg): QueryDefaultSubscriptionsRequest;
    fromProtoMsg(message: QueryDefaultSubscriptionsRequestProtoMsg): QueryDefaultSubscriptionsRequest;
    toProto(message: QueryDefaultSubscriptionsRequest): Uint8Array;
    toProtoMsg(message: QueryDefaultSubscriptionsRequest): QueryDefaultSubscriptionsRequestProtoMsg;
};
export declare const QueryDefaultSubscriptionsResponse: {
    typeUrl: string;
    encode(message: QueryDefaultSubscriptionsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDefaultSubscriptionsResponse;
    fromPartial(object: Partial<QueryDefaultSubscriptionsResponse>): QueryDefaultSubscriptionsResponse;
    fromAmino(object: QueryDefaultSubscriptionsResponseAmino): QueryDefaultSubscriptionsResponse;
    toAmino(message: QueryDefaultSubscriptionsResponse): QueryDefaultSubscriptionsResponseAmino;
    fromAminoMsg(object: QueryDefaultSubscriptionsResponseAminoMsg): QueryDefaultSubscriptionsResponse;
    fromProtoMsg(message: QueryDefaultSubscriptionsResponseProtoMsg): QueryDefaultSubscriptionsResponse;
    toProto(message: QueryDefaultSubscriptionsResponse): Uint8Array;
    toProtoMsg(message: QueryDefaultSubscriptionsResponse): QueryDefaultSubscriptionsResponseProtoMsg;
};
