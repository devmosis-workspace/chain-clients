import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface Params {
    deposit: Coin;
    activeDuration: Duration;
    maxGigabytePrices: Coin[];
    minGigabytePrices: Coin[];
    maxHourlyPrices: Coin[];
    minHourlyPrices: Coin[];
    maxSubscriptionGigabytes: bigint;
    minSubscriptionGigabytes: bigint;
    maxSubscriptionHours: bigint;
    minSubscriptionHours: bigint;
    stakingShare: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/sentinel.node.v2.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    deposit?: CoinAmino;
    active_duration?: DurationAmino;
    max_gigabyte_prices?: CoinAmino[];
    min_gigabyte_prices?: CoinAmino[];
    max_hourly_prices?: CoinAmino[];
    min_hourly_prices?: CoinAmino[];
    max_subscription_gigabytes?: string;
    min_subscription_gigabytes?: string;
    max_subscription_hours?: string;
    min_subscription_hours?: string;
    staking_share?: string;
}
export interface ParamsAminoMsg {
    type: "/sentinel.node.v2.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    deposit: CoinSDKType;
    active_duration: DurationSDKType;
    max_gigabyte_prices: CoinSDKType[];
    min_gigabyte_prices: CoinSDKType[];
    max_hourly_prices: CoinSDKType[];
    min_hourly_prices: CoinSDKType[];
    max_subscription_gigabytes: bigint;
    min_subscription_gigabytes: bigint;
    max_subscription_hours: bigint;
    min_subscription_hours: bigint;
    staking_share: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
