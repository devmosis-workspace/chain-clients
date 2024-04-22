import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Publisher, PublisherAmino, PublisherSDKType, Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType, DefaultSubscription, DefaultSubscriptionAmino, DefaultSubscriptionSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** GenesisState defines the pubsub module's genesis state. */
export interface GenesisState {
  params: Params;
  publishers: Publisher[];
  subscribers: Subscriber[];
  publisherIntents: PublisherIntent[];
  subscriberIntents: SubscriberIntent[];
  defaultSubscriptions: DefaultSubscription[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/pubsub.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the pubsub module's genesis state. */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  publishers?: PublisherAmino[];
  subscribers?: SubscriberAmino[];
  publisher_intents?: PublisherIntentAmino[];
  subscriber_intents?: SubscriberIntentAmino[];
  default_subscriptions?: DefaultSubscriptionAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/pubsub.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the pubsub module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  publishers: PublisherSDKType[];
  subscribers: SubscriberSDKType[];
  publisher_intents: PublisherIntentSDKType[];
  subscriber_intents: SubscriberIntentSDKType[];
  default_subscriptions: DefaultSubscriptionSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    publishers: [],
    subscribers: [],
    publisherIntents: [],
    subscriberIntents: [],
    defaultSubscriptions: []
  };
}
export const GenesisState = {
  typeUrl: "/pubsub.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.publishers) {
      Publisher.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.subscribers) {
      Subscriber.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.publisherIntents) {
      PublisherIntent.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.subscriberIntents) {
      SubscriberIntent.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.defaultSubscriptions) {
      DefaultSubscription.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      publishers: Array.isArray(object?.publishers) ? object.publishers.map((e: any) => Publisher.fromJSON(e)) : [],
      subscribers: Array.isArray(object?.subscribers) ? object.subscribers.map((e: any) => Subscriber.fromJSON(e)) : [],
      publisherIntents: Array.isArray(object?.publisherIntents) ? object.publisherIntents.map((e: any) => PublisherIntent.fromJSON(e)) : [],
      subscriberIntents: Array.isArray(object?.subscriberIntents) ? object.subscriberIntents.map((e: any) => SubscriberIntent.fromJSON(e)) : [],
      defaultSubscriptions: Array.isArray(object?.defaultSubscriptions) ? object.defaultSubscriptions.map((e: any) => DefaultSubscription.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.publishers = object.publishers?.map(e => Publisher.fromPartial(e)) || [];
    message.subscribers = object.subscribers?.map(e => Subscriber.fromPartial(e)) || [];
    message.publisherIntents = object.publisherIntents?.map(e => PublisherIntent.fromPartial(e)) || [];
    message.subscriberIntents = object.subscriberIntents?.map(e => SubscriberIntent.fromPartial(e)) || [];
    message.defaultSubscriptions = object.defaultSubscriptions?.map(e => DefaultSubscription.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.publishers = object.publishers?.map(e => Publisher.fromAmino(e)) || [];
    message.subscribers = object.subscribers?.map(e => Subscriber.fromAmino(e)) || [];
    message.publisherIntents = object.publisher_intents?.map(e => PublisherIntent.fromAmino(e)) || [];
    message.subscriberIntents = object.subscriber_intents?.map(e => SubscriberIntent.fromAmino(e)) || [];
    message.defaultSubscriptions = object.default_subscriptions?.map(e => DefaultSubscription.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.publishers) {
      obj.publishers = message.publishers.map(e => e ? Publisher.toAmino(e) : undefined);
    } else {
      obj.publishers = [];
    }
    if (message.subscribers) {
      obj.subscribers = message.subscribers.map(e => e ? Subscriber.toAmino(e) : undefined);
    } else {
      obj.subscribers = [];
    }
    if (message.publisherIntents) {
      obj.publisher_intents = message.publisherIntents.map(e => e ? PublisherIntent.toAmino(e) : undefined);
    } else {
      obj.publisher_intents = [];
    }
    if (message.subscriberIntents) {
      obj.subscriber_intents = message.subscriberIntents.map(e => e ? SubscriberIntent.toAmino(e) : undefined);
    } else {
      obj.subscriber_intents = [];
    }
    if (message.defaultSubscriptions) {
      obj.default_subscriptions = message.defaultSubscriptions.map(e => e ? DefaultSubscription.toAmino(e) : undefined);
    } else {
      obj.default_subscriptions = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/pubsub.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};