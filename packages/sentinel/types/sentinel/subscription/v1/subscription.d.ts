import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Status } from "../../types/v1/status";
import { BinaryWriter } from "../../../binary";
export interface Subscription {
    id: bigint;
    owner: string;
    node: string;
    price: Coin;
    deposit: Coin;
    plan: bigint;
    denom: string;
    expiry: Timestamp;
    free: string;
    status: Status;
    statusAt: Timestamp;
}
export interface SubscriptionProtoMsg {
    typeUrl: "/sentinel.subscription.v1.Subscription";
    value: Uint8Array;
}
export interface SubscriptionAmino {
    id?: string;
    owner?: string;
    node?: string;
    price?: CoinAmino;
    deposit?: CoinAmino;
    plan?: string;
    denom?: string;
    expiry?: string;
    free?: string;
    status?: Status;
    status_at?: string;
}
export interface SubscriptionAminoMsg {
    type: "/sentinel.subscription.v1.Subscription";
    value: SubscriptionAmino;
}
export interface SubscriptionSDKType {
    id: bigint;
    owner: string;
    node: string;
    price: CoinSDKType;
    deposit: CoinSDKType;
    plan: bigint;
    denom: string;
    expiry: TimestampSDKType;
    free: string;
    status: Status;
    status_at: TimestampSDKType;
}
export declare const Subscription: {
    typeUrl: string;
    encode(message: Subscription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Subscription;
    fromPartial(object: Partial<Subscription>): Subscription;
    fromAmino(object: SubscriptionAmino): Subscription;
    toAmino(message: Subscription): SubscriptionAmino;
    fromAminoMsg(object: SubscriptionAminoMsg): Subscription;
    fromProtoMsg(message: SubscriptionProtoMsg): Subscription;
    toProto(message: Subscription): Uint8Array;
    toProtoMsg(message: Subscription): SubscriptionProtoMsg;
};
