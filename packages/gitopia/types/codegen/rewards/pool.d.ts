import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
export declare enum Series {
    NONE = 0,
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    COSMOS = 8,
    UNRECOGNIZED = -1
}
export declare const SeriesSDKType: typeof Series;
export declare const SeriesAmino: typeof Series;
export declare function seriesFromJSON(object: any): Series;
export declare function seriesToJSON(object: Series): string;
export interface RewardPool {
    totalAmount: Coin;
    claimedAmount: Coin;
    startTime: Timestamp;
    endTime: Timestamp;
    series: Series;
}
export interface RewardPoolProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.RewardPool";
    value: Uint8Array;
}
export interface RewardPoolAmino {
    total_amount?: CoinAmino;
    claimed_amount?: CoinAmino;
    start_time?: string;
    end_time?: string;
    series?: Series;
}
export interface RewardPoolAminoMsg {
    type: "/gitopia.gitopia.rewards.RewardPool";
    value: RewardPoolAmino;
}
export interface RewardPoolSDKType {
    total_amount: CoinSDKType;
    claimed_amount: CoinSDKType;
    start_time: TimestampSDKType;
    end_time: TimestampSDKType;
    series: Series;
}
export declare const RewardPool: {
    typeUrl: string;
    encode(message: RewardPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RewardPool;
    fromPartial(object: Partial<RewardPool>): RewardPool;
    fromAmino(object: RewardPoolAmino): RewardPool;
    toAmino(message: RewardPool): RewardPoolAmino;
    fromAminoMsg(object: RewardPoolAminoMsg): RewardPool;
    fromProtoMsg(message: RewardPoolProtoMsg): RewardPool;
    toProto(message: RewardPool): Uint8Array;
    toProtoMsg(message: RewardPool): RewardPoolProtoMsg;
};
