import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Publisher, PublisherAmino, PublisherSDKType, Subscriber, SubscriberAmino, SubscriberSDKType, PublisherIntent, PublisherIntentAmino, PublisherIntentSDKType, SubscriberIntent, SubscriberIntentAmino, SubscriberIntentSDKType, DefaultSubscription, DefaultSubscriptionAmino, DefaultSubscriptionSDKType } from "./pubsub";
import { BinaryWriter } from "../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
