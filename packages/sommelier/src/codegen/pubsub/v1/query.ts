import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Publisher, PublisherAmino, PublisherSDKType, Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType, DefaultSubscription, DefaultSubscriptionAmino, DefaultSubscriptionSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/pubsub.v1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/pubsub.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {}
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
export interface QueryPublishersRequest {}
export interface QueryPublishersRequestProtoMsg {
  typeUrl: "/pubsub.v1.QueryPublishersRequest";
  value: Uint8Array;
}
export interface QueryPublishersRequestAmino {}
export interface QueryPublishersRequestAminoMsg {
  type: "/pubsub.v1.QueryPublishersRequest";
  value: QueryPublishersRequestAmino;
}
export interface QueryPublishersRequestSDKType {}
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
export interface QuerySubscribersRequest {}
export interface QuerySubscribersRequestProtoMsg {
  typeUrl: "/pubsub.v1.QuerySubscribersRequest";
  value: Uint8Array;
}
export interface QuerySubscribersRequestAmino {}
export interface QuerySubscribersRequestAminoMsg {
  type: "/pubsub.v1.QuerySubscribersRequest";
  value: QuerySubscribersRequestAmino;
}
export interface QuerySubscribersRequestSDKType {}
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
export interface QueryValidatorSubscribersRequest {}
export interface QueryValidatorSubscribersRequestProtoMsg {
  typeUrl: "/pubsub.v1.QueryValidatorSubscribersRequest";
  value: Uint8Array;
}
export interface QueryValidatorSubscribersRequestAmino {}
export interface QueryValidatorSubscribersRequestAminoMsg {
  type: "/pubsub.v1.QueryValidatorSubscribersRequest";
  value: QueryValidatorSubscribersRequestAmino;
}
export interface QueryValidatorSubscribersRequestSDKType {}
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
export interface QueryPublisherIntentsRequest {}
export interface QueryPublisherIntentsRequestProtoMsg {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsRequest";
  value: Uint8Array;
}
export interface QueryPublisherIntentsRequestAmino {}
export interface QueryPublisherIntentsRequestAminoMsg {
  type: "/pubsub.v1.QueryPublisherIntentsRequest";
  value: QueryPublisherIntentsRequestAmino;
}
export interface QueryPublisherIntentsRequestSDKType {}
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
export interface QuerySubscriberIntentsRequest {}
export interface QuerySubscriberIntentsRequestProtoMsg {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsRequest";
  value: Uint8Array;
}
export interface QuerySubscriberIntentsRequestAmino {}
export interface QuerySubscriberIntentsRequestAminoMsg {
  type: "/pubsub.v1.QuerySubscriberIntentsRequest";
  value: QuerySubscriberIntentsRequestAmino;
}
export interface QuerySubscriberIntentsRequestSDKType {}
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
export interface QueryDefaultSubscriptionsRequest {}
export interface QueryDefaultSubscriptionsRequestProtoMsg {
  typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsRequest";
  value: Uint8Array;
}
export interface QueryDefaultSubscriptionsRequestAmino {}
export interface QueryDefaultSubscriptionsRequestAminoMsg {
  type: "/pubsub.v1.QueryDefaultSubscriptionsRequest";
  value: QueryDefaultSubscriptionsRequestAmino;
}
export interface QueryDefaultSubscriptionsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/pubsub.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/pubsub.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherRequest(): QueryPublisherRequest {
  return {
    publisherDomain: ""
  };
}
export const QueryPublisherRequest = {
  typeUrl: "/pubsub.v1.QueryPublisherRequest",
  encode(message: QueryPublisherRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherDomain !== "") {
      writer.uint32(10).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherRequest {
    return {
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<QueryPublisherRequest>): QueryPublisherRequest {
    const message = createBaseQueryPublisherRequest();
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: QueryPublisherRequestAmino): QueryPublisherRequest {
    const message = createBaseQueryPublisherRequest();
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: QueryPublisherRequest): QueryPublisherRequestAmino {
    const obj: any = {};
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherRequestAminoMsg): QueryPublisherRequest {
    return QueryPublisherRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherRequestProtoMsg): QueryPublisherRequest {
    return QueryPublisherRequest.decode(message.value);
  },
  toProto(message: QueryPublisherRequest): Uint8Array {
    return QueryPublisherRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherRequest): QueryPublisherRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherRequest",
      value: QueryPublisherRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherResponse(): QueryPublisherResponse {
  return {
    publisher: undefined
  };
}
export const QueryPublisherResponse = {
  typeUrl: "/pubsub.v1.QueryPublisherResponse",
  encode(message: QueryPublisherResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisher !== undefined) {
      Publisher.encode(message.publisher, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherResponse {
    return {
      publisher: isSet(object.publisher) ? Publisher.fromJSON(object.publisher) : undefined
    };
  },
  fromPartial(object: Partial<QueryPublisherResponse>): QueryPublisherResponse {
    const message = createBaseQueryPublisherResponse();
    message.publisher = object.publisher !== undefined && object.publisher !== null ? Publisher.fromPartial(object.publisher) : undefined;
    return message;
  },
  fromAmino(object: QueryPublisherResponseAmino): QueryPublisherResponse {
    const message = createBaseQueryPublisherResponse();
    if (object.publisher !== undefined && object.publisher !== null) {
      message.publisher = Publisher.fromAmino(object.publisher);
    }
    return message;
  },
  toAmino(message: QueryPublisherResponse): QueryPublisherResponseAmino {
    const obj: any = {};
    obj.publisher = message.publisher ? Publisher.toAmino(message.publisher) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherResponseAminoMsg): QueryPublisherResponse {
    return QueryPublisherResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherResponseProtoMsg): QueryPublisherResponse {
    return QueryPublisherResponse.decode(message.value);
  },
  toProto(message: QueryPublisherResponse): Uint8Array {
    return QueryPublisherResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherResponse): QueryPublisherResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherResponse",
      value: QueryPublisherResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublishersRequest(): QueryPublishersRequest {
  return {};
}
export const QueryPublishersRequest = {
  typeUrl: "/pubsub.v1.QueryPublishersRequest",
  encode(_: QueryPublishersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPublishersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPublishersRequest>): QueryPublishersRequest {
    const message = createBaseQueryPublishersRequest();
    return message;
  },
  fromAmino(_: QueryPublishersRequestAmino): QueryPublishersRequest {
    const message = createBaseQueryPublishersRequest();
    return message;
  },
  toAmino(_: QueryPublishersRequest): QueryPublishersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPublishersRequestAminoMsg): QueryPublishersRequest {
    return QueryPublishersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublishersRequestProtoMsg): QueryPublishersRequest {
    return QueryPublishersRequest.decode(message.value);
  },
  toProto(message: QueryPublishersRequest): Uint8Array {
    return QueryPublishersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublishersRequest): QueryPublishersRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublishersRequest",
      value: QueryPublishersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublishersResponse(): QueryPublishersResponse {
  return {
    publishers: []
  };
}
export const QueryPublishersResponse = {
  typeUrl: "/pubsub.v1.QueryPublishersResponse",
  encode(message: QueryPublishersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publishers) {
      Publisher.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublishersResponse {
    return {
      publishers: Array.isArray(object?.publishers) ? object.publishers.map((e: any) => Publisher.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPublishersResponse>): QueryPublishersResponse {
    const message = createBaseQueryPublishersResponse();
    message.publishers = object.publishers?.map(e => Publisher.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPublishersResponseAmino): QueryPublishersResponse {
    const message = createBaseQueryPublishersResponse();
    message.publishers = object.publishers?.map(e => Publisher.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPublishersResponse): QueryPublishersResponseAmino {
    const obj: any = {};
    if (message.publishers) {
      obj.publishers = message.publishers.map(e => e ? Publisher.toAmino(e) : undefined);
    } else {
      obj.publishers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPublishersResponseAminoMsg): QueryPublishersResponse {
    return QueryPublishersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublishersResponseProtoMsg): QueryPublishersResponse {
    return QueryPublishersResponse.decode(message.value);
  },
  toProto(message: QueryPublishersResponse): Uint8Array {
    return QueryPublishersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublishersResponse): QueryPublishersResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublishersResponse",
      value: QueryPublishersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberRequest(): QuerySubscriberRequest {
  return {
    subscriberAddress: ""
  };
}
export const QuerySubscriberRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberRequest",
  encode(message: QuerySubscriberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberRequest {
    return {
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : ""
    };
  },
  fromPartial(object: Partial<QuerySubscriberRequest>): QuerySubscriberRequest {
    const message = createBaseQuerySubscriberRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriberRequestAmino): QuerySubscriberRequest {
    const message = createBaseQuerySubscriberRequest();
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    return message;
  },
  toAmino(message: QuerySubscriberRequest): QuerySubscriberRequestAmino {
    const obj: any = {};
    obj.subscriber_address = message.subscriberAddress;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberRequestAminoMsg): QuerySubscriberRequest {
    return QuerySubscriberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberRequestProtoMsg): QuerySubscriberRequest {
    return QuerySubscriberRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberRequest): Uint8Array {
    return QuerySubscriberRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberRequest): QuerySubscriberRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberRequest",
      value: QuerySubscriberRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberResponse(): QuerySubscriberResponse {
  return {
    subscriber: undefined
  };
}
export const QuerySubscriberResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberResponse",
  encode(message: QuerySubscriberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriber !== undefined) {
      Subscriber.encode(message.subscriber, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberResponse {
    return {
      subscriber: isSet(object.subscriber) ? Subscriber.fromJSON(object.subscriber) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriberResponse>): QuerySubscriberResponse {
    const message = createBaseQuerySubscriberResponse();
    message.subscriber = object.subscriber !== undefined && object.subscriber !== null ? Subscriber.fromPartial(object.subscriber) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriberResponseAmino): QuerySubscriberResponse {
    const message = createBaseQuerySubscriberResponse();
    if (object.subscriber !== undefined && object.subscriber !== null) {
      message.subscriber = Subscriber.fromAmino(object.subscriber);
    }
    return message;
  },
  toAmino(message: QuerySubscriberResponse): QuerySubscriberResponseAmino {
    const obj: any = {};
    obj.subscriber = message.subscriber ? Subscriber.toAmino(message.subscriber) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberResponseAminoMsg): QuerySubscriberResponse {
    return QuerySubscriberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberResponseProtoMsg): QuerySubscriberResponse {
    return QuerySubscriberResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberResponse): Uint8Array {
    return QuerySubscriberResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberResponse): QuerySubscriberResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberResponse",
      value: QuerySubscriberResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscribersRequest(): QuerySubscribersRequest {
  return {};
}
export const QuerySubscribersRequest = {
  typeUrl: "/pubsub.v1.QuerySubscribersRequest",
  encode(_: QuerySubscribersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySubscribersRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySubscribersRequest>): QuerySubscribersRequest {
    const message = createBaseQuerySubscribersRequest();
    return message;
  },
  fromAmino(_: QuerySubscribersRequestAmino): QuerySubscribersRequest {
    const message = createBaseQuerySubscribersRequest();
    return message;
  },
  toAmino(_: QuerySubscribersRequest): QuerySubscribersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubscribersRequestAminoMsg): QuerySubscribersRequest {
    return QuerySubscribersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscribersRequestProtoMsg): QuerySubscribersRequest {
    return QuerySubscribersRequest.decode(message.value);
  },
  toProto(message: QuerySubscribersRequest): Uint8Array {
    return QuerySubscribersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscribersRequest): QuerySubscribersRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscribersRequest",
      value: QuerySubscribersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscribersResponse(): QuerySubscribersResponse {
  return {
    subscribers: []
  };
}
export const QuerySubscribersResponse = {
  typeUrl: "/pubsub.v1.QuerySubscribersResponse",
  encode(message: QuerySubscribersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscribers) {
      Subscriber.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscribersResponse {
    return {
      subscribers: Array.isArray(object?.subscribers) ? object.subscribers.map((e: any) => Subscriber.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubscribersResponse>): QuerySubscribersResponse {
    const message = createBaseQuerySubscribersResponse();
    message.subscribers = object.subscribers?.map(e => Subscriber.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscribersResponseAmino): QuerySubscribersResponse {
    const message = createBaseQuerySubscribersResponse();
    message.subscribers = object.subscribers?.map(e => Subscriber.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscribersResponse): QuerySubscribersResponseAmino {
    const obj: any = {};
    if (message.subscribers) {
      obj.subscribers = message.subscribers.map(e => e ? Subscriber.toAmino(e) : undefined);
    } else {
      obj.subscribers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscribersResponseAminoMsg): QuerySubscribersResponse {
    return QuerySubscribersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscribersResponseProtoMsg): QuerySubscribersResponse {
    return QuerySubscribersResponse.decode(message.value);
  },
  toProto(message: QuerySubscribersResponse): Uint8Array {
    return QuerySubscribersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscribersResponse): QuerySubscribersResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscribersResponse",
      value: QuerySubscribersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSubscribersRequest(): QueryValidatorSubscribersRequest {
  return {};
}
export const QueryValidatorSubscribersRequest = {
  typeUrl: "/pubsub.v1.QueryValidatorSubscribersRequest",
  encode(_: QueryValidatorSubscribersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryValidatorSubscribersRequest {
    return {};
  },
  fromPartial(_: Partial<QueryValidatorSubscribersRequest>): QueryValidatorSubscribersRequest {
    const message = createBaseQueryValidatorSubscribersRequest();
    return message;
  },
  fromAmino(_: QueryValidatorSubscribersRequestAmino): QueryValidatorSubscribersRequest {
    const message = createBaseQueryValidatorSubscribersRequest();
    return message;
  },
  toAmino(_: QueryValidatorSubscribersRequest): QueryValidatorSubscribersRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSubscribersRequestAminoMsg): QueryValidatorSubscribersRequest {
    return QueryValidatorSubscribersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorSubscribersRequestProtoMsg): QueryValidatorSubscribersRequest {
    return QueryValidatorSubscribersRequest.decode(message.value);
  },
  toProto(message: QueryValidatorSubscribersRequest): Uint8Array {
    return QueryValidatorSubscribersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSubscribersRequest): QueryValidatorSubscribersRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryValidatorSubscribersRequest",
      value: QueryValidatorSubscribersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorSubscribersResponse(): QueryValidatorSubscribersResponse {
  return {
    subscribers: []
  };
}
export const QueryValidatorSubscribersResponse = {
  typeUrl: "/pubsub.v1.QueryValidatorSubscribersResponse",
  encode(message: QueryValidatorSubscribersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscribers) {
      Subscriber.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorSubscribersResponse {
    return {
      subscribers: Array.isArray(object?.subscribers) ? object.subscribers.map((e: any) => Subscriber.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryValidatorSubscribersResponse>): QueryValidatorSubscribersResponse {
    const message = createBaseQueryValidatorSubscribersResponse();
    message.subscribers = object.subscribers?.map(e => Subscriber.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValidatorSubscribersResponseAmino): QueryValidatorSubscribersResponse {
    const message = createBaseQueryValidatorSubscribersResponse();
    message.subscribers = object.subscribers?.map(e => Subscriber.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValidatorSubscribersResponse): QueryValidatorSubscribersResponseAmino {
    const obj: any = {};
    if (message.subscribers) {
      obj.subscribers = message.subscribers.map(e => e ? Subscriber.toAmino(e) : undefined);
    } else {
      obj.subscribers = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSubscribersResponseAminoMsg): QueryValidatorSubscribersResponse {
    return QueryValidatorSubscribersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryValidatorSubscribersResponseProtoMsg): QueryValidatorSubscribersResponse {
    return QueryValidatorSubscribersResponse.decode(message.value);
  },
  toProto(message: QueryValidatorSubscribersResponse): Uint8Array {
    return QueryValidatorSubscribersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSubscribersResponse): QueryValidatorSubscribersResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryValidatorSubscribersResponse",
      value: QueryValidatorSubscribersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentRequest(): QueryPublisherIntentRequest {
  return {
    publisherDomain: "",
    subscriptionId: ""
  };
}
export const QueryPublisherIntentRequest = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentRequest",
  encode(message: QueryPublisherIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherDomain !== "") {
      writer.uint32(10).string(message.publisherDomain);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentRequest {
    return {
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentRequest>): QueryPublisherIntentRequest {
    const message = createBaseQueryPublisherIntentRequest();
    message.publisherDomain = object.publisherDomain ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QueryPublisherIntentRequestAmino): QueryPublisherIntentRequest {
    const message = createBaseQueryPublisherIntentRequest();
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QueryPublisherIntentRequest): QueryPublisherIntentRequestAmino {
    const obj: any = {};
    obj.publisher_domain = message.publisherDomain;
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentRequestAminoMsg): QueryPublisherIntentRequest {
    return QueryPublisherIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentRequestProtoMsg): QueryPublisherIntentRequest {
    return QueryPublisherIntentRequest.decode(message.value);
  },
  toProto(message: QueryPublisherIntentRequest): Uint8Array {
    return QueryPublisherIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentRequest): QueryPublisherIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentRequest",
      value: QueryPublisherIntentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentResponse(): QueryPublisherIntentResponse {
  return {
    publisherIntent: undefined
  };
}
export const QueryPublisherIntentResponse = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentResponse",
  encode(message: QueryPublisherIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherIntent !== undefined) {
      PublisherIntent.encode(message.publisherIntent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentResponse {
    return {
      publisherIntent: isSet(object.publisherIntent) ? PublisherIntent.fromJSON(object.publisherIntent) : undefined
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentResponse>): QueryPublisherIntentResponse {
    const message = createBaseQueryPublisherIntentResponse();
    message.publisherIntent = object.publisherIntent !== undefined && object.publisherIntent !== null ? PublisherIntent.fromPartial(object.publisherIntent) : undefined;
    return message;
  },
  fromAmino(object: QueryPublisherIntentResponseAmino): QueryPublisherIntentResponse {
    const message = createBaseQueryPublisherIntentResponse();
    if (object.publisher_intent !== undefined && object.publisher_intent !== null) {
      message.publisherIntent = PublisherIntent.fromAmino(object.publisher_intent);
    }
    return message;
  },
  toAmino(message: QueryPublisherIntentResponse): QueryPublisherIntentResponseAmino {
    const obj: any = {};
    obj.publisher_intent = message.publisherIntent ? PublisherIntent.toAmino(message.publisherIntent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentResponseAminoMsg): QueryPublisherIntentResponse {
    return QueryPublisherIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentResponseProtoMsg): QueryPublisherIntentResponse {
    return QueryPublisherIntentResponse.decode(message.value);
  },
  toProto(message: QueryPublisherIntentResponse): Uint8Array {
    return QueryPublisherIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentResponse): QueryPublisherIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentResponse",
      value: QueryPublisherIntentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsRequest(): QueryPublisherIntentsRequest {
  return {};
}
export const QueryPublisherIntentsRequest = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsRequest",
  encode(_: QueryPublisherIntentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryPublisherIntentsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryPublisherIntentsRequest>): QueryPublisherIntentsRequest {
    const message = createBaseQueryPublisherIntentsRequest();
    return message;
  },
  fromAmino(_: QueryPublisherIntentsRequestAmino): QueryPublisherIntentsRequest {
    const message = createBaseQueryPublisherIntentsRequest();
    return message;
  },
  toAmino(_: QueryPublisherIntentsRequest): QueryPublisherIntentsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsRequestAminoMsg): QueryPublisherIntentsRequest {
    return QueryPublisherIntentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsRequestProtoMsg): QueryPublisherIntentsRequest {
    return QueryPublisherIntentsRequest.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsRequest): Uint8Array {
    return QueryPublisherIntentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsRequest): QueryPublisherIntentsRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsRequest",
      value: QueryPublisherIntentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsResponse(): QueryPublisherIntentsResponse {
  return {
    publisherIntents: []
  };
}
export const QueryPublisherIntentsResponse = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsResponse",
  encode(message: QueryPublisherIntentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publisherIntents) {
      PublisherIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentsResponse {
    return {
      publisherIntents: Array.isArray(object?.publisherIntents) ? object.publisherIntents.map((e: any) => PublisherIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentsResponse>): QueryPublisherIntentsResponse {
    const message = createBaseQueryPublisherIntentsResponse();
    message.publisherIntents = object.publisherIntents?.map(e => PublisherIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPublisherIntentsResponseAmino): QueryPublisherIntentsResponse {
    const message = createBaseQueryPublisherIntentsResponse();
    message.publisherIntents = object.publisher_intents?.map(e => PublisherIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPublisherIntentsResponse): QueryPublisherIntentsResponseAmino {
    const obj: any = {};
    if (message.publisherIntents) {
      obj.publisher_intents = message.publisherIntents.map(e => e ? PublisherIntent.toAmino(e) : undefined);
    } else {
      obj.publisher_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsResponseAminoMsg): QueryPublisherIntentsResponse {
    return QueryPublisherIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsResponseProtoMsg): QueryPublisherIntentsResponse {
    return QueryPublisherIntentsResponse.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsResponse): Uint8Array {
    return QueryPublisherIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsResponse): QueryPublisherIntentsResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsResponse",
      value: QueryPublisherIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsByPublisherDomainRequest(): QueryPublisherIntentsByPublisherDomainRequest {
  return {
    publisherDomain: ""
  };
}
export const QueryPublisherIntentsByPublisherDomainRequest = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainRequest",
  encode(message: QueryPublisherIntentsByPublisherDomainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherDomain !== "") {
      writer.uint32(10).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentsByPublisherDomainRequest {
    return {
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentsByPublisherDomainRequest>): QueryPublisherIntentsByPublisherDomainRequest {
    const message = createBaseQueryPublisherIntentsByPublisherDomainRequest();
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: QueryPublisherIntentsByPublisherDomainRequestAmino): QueryPublisherIntentsByPublisherDomainRequest {
    const message = createBaseQueryPublisherIntentsByPublisherDomainRequest();
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: QueryPublisherIntentsByPublisherDomainRequest): QueryPublisherIntentsByPublisherDomainRequestAmino {
    const obj: any = {};
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsByPublisherDomainRequestAminoMsg): QueryPublisherIntentsByPublisherDomainRequest {
    return QueryPublisherIntentsByPublisherDomainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsByPublisherDomainRequestProtoMsg): QueryPublisherIntentsByPublisherDomainRequest {
    return QueryPublisherIntentsByPublisherDomainRequest.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsByPublisherDomainRequest): Uint8Array {
    return QueryPublisherIntentsByPublisherDomainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsByPublisherDomainRequest): QueryPublisherIntentsByPublisherDomainRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainRequest",
      value: QueryPublisherIntentsByPublisherDomainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsByPublisherDomainResponse(): QueryPublisherIntentsByPublisherDomainResponse {
  return {
    publisherIntents: []
  };
}
export const QueryPublisherIntentsByPublisherDomainResponse = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainResponse",
  encode(message: QueryPublisherIntentsByPublisherDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publisherIntents) {
      PublisherIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentsByPublisherDomainResponse {
    return {
      publisherIntents: Array.isArray(object?.publisherIntents) ? object.publisherIntents.map((e: any) => PublisherIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentsByPublisherDomainResponse>): QueryPublisherIntentsByPublisherDomainResponse {
    const message = createBaseQueryPublisherIntentsByPublisherDomainResponse();
    message.publisherIntents = object.publisherIntents?.map(e => PublisherIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPublisherIntentsByPublisherDomainResponseAmino): QueryPublisherIntentsByPublisherDomainResponse {
    const message = createBaseQueryPublisherIntentsByPublisherDomainResponse();
    message.publisherIntents = object.publisher_intents?.map(e => PublisherIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPublisherIntentsByPublisherDomainResponse): QueryPublisherIntentsByPublisherDomainResponseAmino {
    const obj: any = {};
    if (message.publisherIntents) {
      obj.publisher_intents = message.publisherIntents.map(e => e ? PublisherIntent.toAmino(e) : undefined);
    } else {
      obj.publisher_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsByPublisherDomainResponseAminoMsg): QueryPublisherIntentsByPublisherDomainResponse {
    return QueryPublisherIntentsByPublisherDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsByPublisherDomainResponseProtoMsg): QueryPublisherIntentsByPublisherDomainResponse {
    return QueryPublisherIntentsByPublisherDomainResponse.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsByPublisherDomainResponse): Uint8Array {
    return QueryPublisherIntentsByPublisherDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsByPublisherDomainResponse): QueryPublisherIntentsByPublisherDomainResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsByPublisherDomainResponse",
      value: QueryPublisherIntentsByPublisherDomainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsBySubscriptionIDRequest(): QueryPublisherIntentsBySubscriptionIDRequest {
  return {
    subscriptionId: ""
  };
}
export const QueryPublisherIntentsBySubscriptionIDRequest = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDRequest",
  encode(message: QueryPublisherIntentsBySubscriptionIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentsBySubscriptionIDRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentsBySubscriptionIDRequest>): QueryPublisherIntentsBySubscriptionIDRequest {
    const message = createBaseQueryPublisherIntentsBySubscriptionIDRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QueryPublisherIntentsBySubscriptionIDRequestAmino): QueryPublisherIntentsBySubscriptionIDRequest {
    const message = createBaseQueryPublisherIntentsBySubscriptionIDRequest();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QueryPublisherIntentsBySubscriptionIDRequest): QueryPublisherIntentsBySubscriptionIDRequestAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsBySubscriptionIDRequestAminoMsg): QueryPublisherIntentsBySubscriptionIDRequest {
    return QueryPublisherIntentsBySubscriptionIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsBySubscriptionIDRequestProtoMsg): QueryPublisherIntentsBySubscriptionIDRequest {
    return QueryPublisherIntentsBySubscriptionIDRequest.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsBySubscriptionIDRequest): Uint8Array {
    return QueryPublisherIntentsBySubscriptionIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsBySubscriptionIDRequest): QueryPublisherIntentsBySubscriptionIDRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDRequest",
      value: QueryPublisherIntentsBySubscriptionIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPublisherIntentsBySubscriptionIDResponse(): QueryPublisherIntentsBySubscriptionIDResponse {
  return {
    publisherIntents: []
  };
}
export const QueryPublisherIntentsBySubscriptionIDResponse = {
  typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDResponse",
  encode(message: QueryPublisherIntentsBySubscriptionIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.publisherIntents) {
      PublisherIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPublisherIntentsBySubscriptionIDResponse {
    return {
      publisherIntents: Array.isArray(object?.publisherIntents) ? object.publisherIntents.map((e: any) => PublisherIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryPublisherIntentsBySubscriptionIDResponse>): QueryPublisherIntentsBySubscriptionIDResponse {
    const message = createBaseQueryPublisherIntentsBySubscriptionIDResponse();
    message.publisherIntents = object.publisherIntents?.map(e => PublisherIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPublisherIntentsBySubscriptionIDResponseAmino): QueryPublisherIntentsBySubscriptionIDResponse {
    const message = createBaseQueryPublisherIntentsBySubscriptionIDResponse();
    message.publisherIntents = object.publisher_intents?.map(e => PublisherIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryPublisherIntentsBySubscriptionIDResponse): QueryPublisherIntentsBySubscriptionIDResponseAmino {
    const obj: any = {};
    if (message.publisherIntents) {
      obj.publisher_intents = message.publisherIntents.map(e => e ? PublisherIntent.toAmino(e) : undefined);
    } else {
      obj.publisher_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPublisherIntentsBySubscriptionIDResponseAminoMsg): QueryPublisherIntentsBySubscriptionIDResponse {
    return QueryPublisherIntentsBySubscriptionIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPublisherIntentsBySubscriptionIDResponseProtoMsg): QueryPublisherIntentsBySubscriptionIDResponse {
    return QueryPublisherIntentsBySubscriptionIDResponse.decode(message.value);
  },
  toProto(message: QueryPublisherIntentsBySubscriptionIDResponse): Uint8Array {
    return QueryPublisherIntentsBySubscriptionIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPublisherIntentsBySubscriptionIDResponse): QueryPublisherIntentsBySubscriptionIDResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryPublisherIntentsBySubscriptionIDResponse",
      value: QueryPublisherIntentsBySubscriptionIDResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentRequest(): QuerySubscriberIntentRequest {
  return {
    subscriberAddress: "",
    subscriptionId: ""
  };
}
export const QuerySubscriberIntentRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentRequest",
  encode(message: QuerySubscriberIntentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    if (message.subscriptionId !== "") {
      writer.uint32(18).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentRequest {
    return {
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : "",
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentRequest>): QuerySubscriberIntentRequest {
    const message = createBaseQuerySubscriberIntentRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriberIntentRequestAmino): QuerySubscriberIntentRequest {
    const message = createBaseQuerySubscriberIntentRequest();
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QuerySubscriberIntentRequest): QuerySubscriberIntentRequestAmino {
    const obj: any = {};
    obj.subscriber_address = message.subscriberAddress;
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentRequestAminoMsg): QuerySubscriberIntentRequest {
    return QuerySubscriberIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentRequestProtoMsg): QuerySubscriberIntentRequest {
    return QuerySubscriberIntentRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentRequest): Uint8Array {
    return QuerySubscriberIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentRequest): QuerySubscriberIntentRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentRequest",
      value: QuerySubscriberIntentRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentResponse(): QuerySubscriberIntentResponse {
  return {
    subscriberIntent: undefined
  };
}
export const QuerySubscriberIntentResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentResponse",
  encode(message: QuerySubscriberIntentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberIntent !== undefined) {
      SubscriberIntent.encode(message.subscriberIntent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentResponse {
    return {
      subscriberIntent: isSet(object.subscriberIntent) ? SubscriberIntent.fromJSON(object.subscriberIntent) : undefined
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentResponse>): QuerySubscriberIntentResponse {
    const message = createBaseQuerySubscriberIntentResponse();
    message.subscriberIntent = object.subscriberIntent !== undefined && object.subscriberIntent !== null ? SubscriberIntent.fromPartial(object.subscriberIntent) : undefined;
    return message;
  },
  fromAmino(object: QuerySubscriberIntentResponseAmino): QuerySubscriberIntentResponse {
    const message = createBaseQuerySubscriberIntentResponse();
    if (object.subscriber_intent !== undefined && object.subscriber_intent !== null) {
      message.subscriberIntent = SubscriberIntent.fromAmino(object.subscriber_intent);
    }
    return message;
  },
  toAmino(message: QuerySubscriberIntentResponse): QuerySubscriberIntentResponseAmino {
    const obj: any = {};
    obj.subscriber_intent = message.subscriberIntent ? SubscriberIntent.toAmino(message.subscriberIntent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentResponseAminoMsg): QuerySubscriberIntentResponse {
    return QuerySubscriberIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentResponseProtoMsg): QuerySubscriberIntentResponse {
    return QuerySubscriberIntentResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentResponse): Uint8Array {
    return QuerySubscriberIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentResponse): QuerySubscriberIntentResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentResponse",
      value: QuerySubscriberIntentResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsRequest(): QuerySubscriberIntentsRequest {
  return {};
}
export const QuerySubscriberIntentsRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsRequest",
  encode(_: QuerySubscriberIntentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QuerySubscriberIntentsRequest {
    return {};
  },
  fromPartial(_: Partial<QuerySubscriberIntentsRequest>): QuerySubscriberIntentsRequest {
    const message = createBaseQuerySubscriberIntentsRequest();
    return message;
  },
  fromAmino(_: QuerySubscriberIntentsRequestAmino): QuerySubscriberIntentsRequest {
    const message = createBaseQuerySubscriberIntentsRequest();
    return message;
  },
  toAmino(_: QuerySubscriberIntentsRequest): QuerySubscriberIntentsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsRequestAminoMsg): QuerySubscriberIntentsRequest {
    return QuerySubscriberIntentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsRequestProtoMsg): QuerySubscriberIntentsRequest {
    return QuerySubscriberIntentsRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsRequest): Uint8Array {
    return QuerySubscriberIntentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsRequest): QuerySubscriberIntentsRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsRequest",
      value: QuerySubscriberIntentsRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsResponse(): QuerySubscriberIntentsResponse {
  return {
    subscriberIntents: []
  };
}
export const QuerySubscriberIntentsResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsResponse",
  encode(message: QuerySubscriberIntentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriberIntents) {
      SubscriberIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsResponse {
    return {
      subscriberIntents: Array.isArray(object?.subscriberIntents) ? object.subscriberIntents.map((e: any) => SubscriberIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsResponse>): QuerySubscriberIntentsResponse {
    const message = createBaseQuerySubscriberIntentsResponse();
    message.subscriberIntents = object.subscriberIntents?.map(e => SubscriberIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsResponseAmino): QuerySubscriberIntentsResponse {
    const message = createBaseQuerySubscriberIntentsResponse();
    message.subscriberIntents = object.subscriber_intents?.map(e => SubscriberIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscriberIntentsResponse): QuerySubscriberIntentsResponseAmino {
    const obj: any = {};
    if (message.subscriberIntents) {
      obj.subscriber_intents = message.subscriberIntents.map(e => e ? SubscriberIntent.toAmino(e) : undefined);
    } else {
      obj.subscriber_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsResponseAminoMsg): QuerySubscriberIntentsResponse {
    return QuerySubscriberIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsResponseProtoMsg): QuerySubscriberIntentsResponse {
    return QuerySubscriberIntentsResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsResponse): Uint8Array {
    return QuerySubscriberIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsResponse): QuerySubscriberIntentsResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsResponse",
      value: QuerySubscriberIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsBySubscriberAddressRequest(): QuerySubscriberIntentsBySubscriberAddressRequest {
  return {
    subscriberAddress: ""
  };
}
export const QuerySubscriberIntentsBySubscriberAddressRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressRequest",
  encode(message: QuerySubscriberIntentsBySubscriberAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriberAddress !== "") {
      writer.uint32(10).string(message.subscriberAddress);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsBySubscriberAddressRequest {
    return {
      subscriberAddress: isSet(object.subscriberAddress) ? String(object.subscriberAddress) : ""
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsBySubscriberAddressRequest>): QuerySubscriberIntentsBySubscriberAddressRequest {
    const message = createBaseQuerySubscriberIntentsBySubscriberAddressRequest();
    message.subscriberAddress = object.subscriberAddress ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsBySubscriberAddressRequestAmino): QuerySubscriberIntentsBySubscriberAddressRequest {
    const message = createBaseQuerySubscriberIntentsBySubscriberAddressRequest();
    if (object.subscriber_address !== undefined && object.subscriber_address !== null) {
      message.subscriberAddress = object.subscriber_address;
    }
    return message;
  },
  toAmino(message: QuerySubscriberIntentsBySubscriberAddressRequest): QuerySubscriberIntentsBySubscriberAddressRequestAmino {
    const obj: any = {};
    obj.subscriber_address = message.subscriberAddress;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsBySubscriberAddressRequestAminoMsg): QuerySubscriberIntentsBySubscriberAddressRequest {
    return QuerySubscriberIntentsBySubscriberAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg): QuerySubscriberIntentsBySubscriberAddressRequest {
    return QuerySubscriberIntentsBySubscriberAddressRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsBySubscriberAddressRequest): Uint8Array {
    return QuerySubscriberIntentsBySubscriberAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressRequest): QuerySubscriberIntentsBySubscriberAddressRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressRequest",
      value: QuerySubscriberIntentsBySubscriberAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsBySubscriberAddressResponse(): QuerySubscriberIntentsBySubscriberAddressResponse {
  return {
    subscriberIntents: []
  };
}
export const QuerySubscriberIntentsBySubscriberAddressResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressResponse",
  encode(message: QuerySubscriberIntentsBySubscriberAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriberIntents) {
      SubscriberIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsBySubscriberAddressResponse {
    return {
      subscriberIntents: Array.isArray(object?.subscriberIntents) ? object.subscriberIntents.map((e: any) => SubscriberIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsBySubscriberAddressResponse>): QuerySubscriberIntentsBySubscriberAddressResponse {
    const message = createBaseQuerySubscriberIntentsBySubscriberAddressResponse();
    message.subscriberIntents = object.subscriberIntents?.map(e => SubscriberIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsBySubscriberAddressResponseAmino): QuerySubscriberIntentsBySubscriberAddressResponse {
    const message = createBaseQuerySubscriberIntentsBySubscriberAddressResponse();
    message.subscriberIntents = object.subscriber_intents?.map(e => SubscriberIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscriberIntentsBySubscriberAddressResponse): QuerySubscriberIntentsBySubscriberAddressResponseAmino {
    const obj: any = {};
    if (message.subscriberIntents) {
      obj.subscriber_intents = message.subscriberIntents.map(e => e ? SubscriberIntent.toAmino(e) : undefined);
    } else {
      obj.subscriber_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsBySubscriberAddressResponseAminoMsg): QuerySubscriberIntentsBySubscriberAddressResponse {
    return QuerySubscriberIntentsBySubscriberAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg): QuerySubscriberIntentsBySubscriberAddressResponse {
    return QuerySubscriberIntentsBySubscriberAddressResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsBySubscriberAddressResponse): Uint8Array {
    return QuerySubscriberIntentsBySubscriberAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsBySubscriberAddressResponse): QuerySubscriberIntentsBySubscriberAddressResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriberAddressResponse",
      value: QuerySubscriberIntentsBySubscriberAddressResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsBySubscriptionIDRequest(): QuerySubscriberIntentsBySubscriptionIDRequest {
  return {
    subscriptionId: ""
  };
}
export const QuerySubscriberIntentsBySubscriptionIDRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDRequest",
  encode(message: QuerySubscriberIntentsBySubscriptionIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsBySubscriptionIDRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsBySubscriptionIDRequest>): QuerySubscriberIntentsBySubscriptionIDRequest {
    const message = createBaseQuerySubscriberIntentsBySubscriptionIDRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsBySubscriptionIDRequestAmino): QuerySubscriberIntentsBySubscriptionIDRequest {
    const message = createBaseQuerySubscriberIntentsBySubscriptionIDRequest();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QuerySubscriberIntentsBySubscriptionIDRequest): QuerySubscriberIntentsBySubscriptionIDRequestAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsBySubscriptionIDRequestAminoMsg): QuerySubscriberIntentsBySubscriptionIDRequest {
    return QuerySubscriberIntentsBySubscriptionIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg): QuerySubscriberIntentsBySubscriptionIDRequest {
    return QuerySubscriberIntentsBySubscriptionIDRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsBySubscriptionIDRequest): Uint8Array {
    return QuerySubscriberIntentsBySubscriptionIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDRequest): QuerySubscriberIntentsBySubscriptionIDRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDRequest",
      value: QuerySubscriberIntentsBySubscriptionIDRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsBySubscriptionIDResponse(): QuerySubscriberIntentsBySubscriptionIDResponse {
  return {
    subscriberIntents: []
  };
}
export const QuerySubscriberIntentsBySubscriptionIDResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDResponse",
  encode(message: QuerySubscriberIntentsBySubscriptionIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriberIntents) {
      SubscriberIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsBySubscriptionIDResponse {
    return {
      subscriberIntents: Array.isArray(object?.subscriberIntents) ? object.subscriberIntents.map((e: any) => SubscriberIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsBySubscriptionIDResponse>): QuerySubscriberIntentsBySubscriptionIDResponse {
    const message = createBaseQuerySubscriberIntentsBySubscriptionIDResponse();
    message.subscriberIntents = object.subscriberIntents?.map(e => SubscriberIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsBySubscriptionIDResponseAmino): QuerySubscriberIntentsBySubscriptionIDResponse {
    const message = createBaseQuerySubscriberIntentsBySubscriptionIDResponse();
    message.subscriberIntents = object.subscriber_intents?.map(e => SubscriberIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscriberIntentsBySubscriptionIDResponse): QuerySubscriberIntentsBySubscriptionIDResponseAmino {
    const obj: any = {};
    if (message.subscriberIntents) {
      obj.subscriber_intents = message.subscriberIntents.map(e => e ? SubscriberIntent.toAmino(e) : undefined);
    } else {
      obj.subscriber_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsBySubscriptionIDResponseAminoMsg): QuerySubscriberIntentsBySubscriptionIDResponse {
    return QuerySubscriberIntentsBySubscriptionIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg): QuerySubscriberIntentsBySubscriptionIDResponse {
    return QuerySubscriberIntentsBySubscriptionIDResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsBySubscriptionIDResponse): Uint8Array {
    return QuerySubscriberIntentsBySubscriptionIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsBySubscriptionIDResponse): QuerySubscriberIntentsBySubscriptionIDResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsBySubscriptionIDResponse",
      value: QuerySubscriberIntentsBySubscriptionIDResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsByPublisherDomainRequest(): QuerySubscriberIntentsByPublisherDomainRequest {
  return {
    publisherDomain: ""
  };
}
export const QuerySubscriberIntentsByPublisherDomainRequest = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainRequest",
  encode(message: QuerySubscriberIntentsByPublisherDomainRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publisherDomain !== "") {
      writer.uint32(10).string(message.publisherDomain);
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsByPublisherDomainRequest {
    return {
      publisherDomain: isSet(object.publisherDomain) ? String(object.publisherDomain) : ""
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsByPublisherDomainRequest>): QuerySubscriberIntentsByPublisherDomainRequest {
    const message = createBaseQuerySubscriberIntentsByPublisherDomainRequest();
    message.publisherDomain = object.publisherDomain ?? "";
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsByPublisherDomainRequestAmino): QuerySubscriberIntentsByPublisherDomainRequest {
    const message = createBaseQuerySubscriberIntentsByPublisherDomainRequest();
    if (object.publisher_domain !== undefined && object.publisher_domain !== null) {
      message.publisherDomain = object.publisher_domain;
    }
    return message;
  },
  toAmino(message: QuerySubscriberIntentsByPublisherDomainRequest): QuerySubscriberIntentsByPublisherDomainRequestAmino {
    const obj: any = {};
    obj.publisher_domain = message.publisherDomain;
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsByPublisherDomainRequestAminoMsg): QuerySubscriberIntentsByPublisherDomainRequest {
    return QuerySubscriberIntentsByPublisherDomainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsByPublisherDomainRequestProtoMsg): QuerySubscriberIntentsByPublisherDomainRequest {
    return QuerySubscriberIntentsByPublisherDomainRequest.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsByPublisherDomainRequest): Uint8Array {
    return QuerySubscriberIntentsByPublisherDomainRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsByPublisherDomainRequest): QuerySubscriberIntentsByPublisherDomainRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainRequest",
      value: QuerySubscriberIntentsByPublisherDomainRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySubscriberIntentsByPublisherDomainResponse(): QuerySubscriberIntentsByPublisherDomainResponse {
  return {
    subscriberIntents: []
  };
}
export const QuerySubscriberIntentsByPublisherDomainResponse = {
  typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainResponse",
  encode(message: QuerySubscriberIntentsByPublisherDomainResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subscriberIntents) {
      SubscriberIntent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySubscriberIntentsByPublisherDomainResponse {
    return {
      subscriberIntents: Array.isArray(object?.subscriberIntents) ? object.subscriberIntents.map((e: any) => SubscriberIntent.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySubscriberIntentsByPublisherDomainResponse>): QuerySubscriberIntentsByPublisherDomainResponse {
    const message = createBaseQuerySubscriberIntentsByPublisherDomainResponse();
    message.subscriberIntents = object.subscriberIntents?.map(e => SubscriberIntent.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySubscriberIntentsByPublisherDomainResponseAmino): QuerySubscriberIntentsByPublisherDomainResponse {
    const message = createBaseQuerySubscriberIntentsByPublisherDomainResponse();
    message.subscriberIntents = object.subscriber_intents?.map(e => SubscriberIntent.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubscriberIntentsByPublisherDomainResponse): QuerySubscriberIntentsByPublisherDomainResponseAmino {
    const obj: any = {};
    if (message.subscriberIntents) {
      obj.subscriber_intents = message.subscriberIntents.map(e => e ? SubscriberIntent.toAmino(e) : undefined);
    } else {
      obj.subscriber_intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubscriberIntentsByPublisherDomainResponseAminoMsg): QuerySubscriberIntentsByPublisherDomainResponse {
    return QuerySubscriberIntentsByPublisherDomainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySubscriberIntentsByPublisherDomainResponseProtoMsg): QuerySubscriberIntentsByPublisherDomainResponse {
    return QuerySubscriberIntentsByPublisherDomainResponse.decode(message.value);
  },
  toProto(message: QuerySubscriberIntentsByPublisherDomainResponse): Uint8Array {
    return QuerySubscriberIntentsByPublisherDomainResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubscriberIntentsByPublisherDomainResponse): QuerySubscriberIntentsByPublisherDomainResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QuerySubscriberIntentsByPublisherDomainResponse",
      value: QuerySubscriberIntentsByPublisherDomainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDefaultSubscriptionRequest(): QueryDefaultSubscriptionRequest {
  return {
    subscriptionId: ""
  };
}
export const QueryDefaultSubscriptionRequest = {
  typeUrl: "/pubsub.v1.QueryDefaultSubscriptionRequest",
  encode(message: QueryDefaultSubscriptionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subscriptionId !== "") {
      writer.uint32(10).string(message.subscriptionId);
    }
    return writer;
  },
  fromJSON(object: any): QueryDefaultSubscriptionRequest {
    return {
      subscriptionId: isSet(object.subscriptionId) ? String(object.subscriptionId) : ""
    };
  },
  fromPartial(object: Partial<QueryDefaultSubscriptionRequest>): QueryDefaultSubscriptionRequest {
    const message = createBaseQueryDefaultSubscriptionRequest();
    message.subscriptionId = object.subscriptionId ?? "";
    return message;
  },
  fromAmino(object: QueryDefaultSubscriptionRequestAmino): QueryDefaultSubscriptionRequest {
    const message = createBaseQueryDefaultSubscriptionRequest();
    if (object.subscription_id !== undefined && object.subscription_id !== null) {
      message.subscriptionId = object.subscription_id;
    }
    return message;
  },
  toAmino(message: QueryDefaultSubscriptionRequest): QueryDefaultSubscriptionRequestAmino {
    const obj: any = {};
    obj.subscription_id = message.subscriptionId;
    return obj;
  },
  fromAminoMsg(object: QueryDefaultSubscriptionRequestAminoMsg): QueryDefaultSubscriptionRequest {
    return QueryDefaultSubscriptionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDefaultSubscriptionRequestProtoMsg): QueryDefaultSubscriptionRequest {
    return QueryDefaultSubscriptionRequest.decode(message.value);
  },
  toProto(message: QueryDefaultSubscriptionRequest): Uint8Array {
    return QueryDefaultSubscriptionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDefaultSubscriptionRequest): QueryDefaultSubscriptionRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryDefaultSubscriptionRequest",
      value: QueryDefaultSubscriptionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDefaultSubscriptionResponse(): QueryDefaultSubscriptionResponse {
  return {
    defaultSubscription: undefined
  };
}
export const QueryDefaultSubscriptionResponse = {
  typeUrl: "/pubsub.v1.QueryDefaultSubscriptionResponse",
  encode(message: QueryDefaultSubscriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.defaultSubscription !== undefined) {
      DefaultSubscription.encode(message.defaultSubscription, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDefaultSubscriptionResponse {
    return {
      defaultSubscription: isSet(object.defaultSubscription) ? DefaultSubscription.fromJSON(object.defaultSubscription) : undefined
    };
  },
  fromPartial(object: Partial<QueryDefaultSubscriptionResponse>): QueryDefaultSubscriptionResponse {
    const message = createBaseQueryDefaultSubscriptionResponse();
    message.defaultSubscription = object.defaultSubscription !== undefined && object.defaultSubscription !== null ? DefaultSubscription.fromPartial(object.defaultSubscription) : undefined;
    return message;
  },
  fromAmino(object: QueryDefaultSubscriptionResponseAmino): QueryDefaultSubscriptionResponse {
    const message = createBaseQueryDefaultSubscriptionResponse();
    if (object.default_subscription !== undefined && object.default_subscription !== null) {
      message.defaultSubscription = DefaultSubscription.fromAmino(object.default_subscription);
    }
    return message;
  },
  toAmino(message: QueryDefaultSubscriptionResponse): QueryDefaultSubscriptionResponseAmino {
    const obj: any = {};
    obj.default_subscription = message.defaultSubscription ? DefaultSubscription.toAmino(message.defaultSubscription) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDefaultSubscriptionResponseAminoMsg): QueryDefaultSubscriptionResponse {
    return QueryDefaultSubscriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDefaultSubscriptionResponseProtoMsg): QueryDefaultSubscriptionResponse {
    return QueryDefaultSubscriptionResponse.decode(message.value);
  },
  toProto(message: QueryDefaultSubscriptionResponse): Uint8Array {
    return QueryDefaultSubscriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDefaultSubscriptionResponse): QueryDefaultSubscriptionResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryDefaultSubscriptionResponse",
      value: QueryDefaultSubscriptionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDefaultSubscriptionsRequest(): QueryDefaultSubscriptionsRequest {
  return {};
}
export const QueryDefaultSubscriptionsRequest = {
  typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsRequest",
  encode(_: QueryDefaultSubscriptionsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryDefaultSubscriptionsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryDefaultSubscriptionsRequest>): QueryDefaultSubscriptionsRequest {
    const message = createBaseQueryDefaultSubscriptionsRequest();
    return message;
  },
  fromAmino(_: QueryDefaultSubscriptionsRequestAmino): QueryDefaultSubscriptionsRequest {
    const message = createBaseQueryDefaultSubscriptionsRequest();
    return message;
  },
  toAmino(_: QueryDefaultSubscriptionsRequest): QueryDefaultSubscriptionsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDefaultSubscriptionsRequestAminoMsg): QueryDefaultSubscriptionsRequest {
    return QueryDefaultSubscriptionsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDefaultSubscriptionsRequestProtoMsg): QueryDefaultSubscriptionsRequest {
    return QueryDefaultSubscriptionsRequest.decode(message.value);
  },
  toProto(message: QueryDefaultSubscriptionsRequest): Uint8Array {
    return QueryDefaultSubscriptionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDefaultSubscriptionsRequest): QueryDefaultSubscriptionsRequestProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsRequest",
      value: QueryDefaultSubscriptionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDefaultSubscriptionsResponse(): QueryDefaultSubscriptionsResponse {
  return {
    defaultSubscriptions: []
  };
}
export const QueryDefaultSubscriptionsResponse = {
  typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsResponse",
  encode(message: QueryDefaultSubscriptionsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.defaultSubscriptions) {
      DefaultSubscription.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDefaultSubscriptionsResponse {
    return {
      defaultSubscriptions: Array.isArray(object?.defaultSubscriptions) ? object.defaultSubscriptions.map((e: any) => DefaultSubscription.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryDefaultSubscriptionsResponse>): QueryDefaultSubscriptionsResponse {
    const message = createBaseQueryDefaultSubscriptionsResponse();
    message.defaultSubscriptions = object.defaultSubscriptions?.map(e => DefaultSubscription.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDefaultSubscriptionsResponseAmino): QueryDefaultSubscriptionsResponse {
    const message = createBaseQueryDefaultSubscriptionsResponse();
    message.defaultSubscriptions = object.default_subscriptions?.map(e => DefaultSubscription.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDefaultSubscriptionsResponse): QueryDefaultSubscriptionsResponseAmino {
    const obj: any = {};
    if (message.defaultSubscriptions) {
      obj.default_subscriptions = message.defaultSubscriptions.map(e => e ? DefaultSubscription.toAmino(e) : undefined);
    } else {
      obj.default_subscriptions = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDefaultSubscriptionsResponseAminoMsg): QueryDefaultSubscriptionsResponse {
    return QueryDefaultSubscriptionsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDefaultSubscriptionsResponseProtoMsg): QueryDefaultSubscriptionsResponse {
    return QueryDefaultSubscriptionsResponse.decode(message.value);
  },
  toProto(message: QueryDefaultSubscriptionsResponse): Uint8Array {
    return QueryDefaultSubscriptionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDefaultSubscriptionsResponse): QueryDefaultSubscriptionsResponseProtoMsg {
    return {
      typeUrl: "/pubsub.v1.QueryDefaultSubscriptionsResponse",
      value: QueryDefaultSubscriptionsResponse.encode(message).finish()
    };
  }
};