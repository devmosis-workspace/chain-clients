import { Series } from "./pool";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
/** a map from recipient to all her rewards */
export interface Reward {
    recipient: string;
    rewards: RecipientReward[];
}
export interface RewardProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.Reward";
    value: Uint8Array;
}
/** a map from recipient to all her rewards */
export interface RewardAmino {
    recipient?: string;
    rewards?: RecipientRewardAmino[];
}
export interface RewardAminoMsg {
    type: "/gitopia.gitopia.rewards.Reward";
    value: RewardAmino;
}
/** a map from recipient to all her rewards */
export interface RewardSDKType {
    recipient: string;
    rewards: RecipientRewardSDKType[];
}
export interface RecipientReward {
    series: Series;
    amount: Coin;
    creator: string;
    claimedAmount: Coin;
    claimedAmountWithDecay: Coin;
}
export interface RecipientRewardProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.RecipientReward";
    value: Uint8Array;
}
export interface RecipientRewardAmino {
    series?: Series;
    amount?: CoinAmino;
    creator?: string;
    claimed_amount?: CoinAmino;
    claimed_amount_with_decay?: CoinAmino;
}
export interface RecipientRewardAminoMsg {
    type: "/gitopia.gitopia.rewards.RecipientReward";
    value: RecipientRewardAmino;
}
export interface RecipientRewardSDKType {
    series: Series;
    amount: CoinSDKType;
    creator: string;
    claimed_amount: CoinSDKType;
    claimed_amount_with_decay: CoinSDKType;
}
export declare const Reward: {
    typeUrl: string;
    encode(message: Reward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Reward;
    fromPartial(object: Partial<Reward>): Reward;
    fromAmino(object: RewardAmino): Reward;
    toAmino(message: Reward): RewardAmino;
    fromAminoMsg(object: RewardAminoMsg): Reward;
    fromProtoMsg(message: RewardProtoMsg): Reward;
    toProto(message: Reward): Uint8Array;
    toProtoMsg(message: Reward): RewardProtoMsg;
};
export declare const RecipientReward: {
    typeUrl: string;
    encode(message: RecipientReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecipientReward;
    fromPartial(object: Partial<RecipientReward>): RecipientReward;
    fromAmino(object: RecipientRewardAmino): RecipientReward;
    toAmino(message: RecipientReward): RecipientRewardAmino;
    fromAminoMsg(object: RecipientRewardAminoMsg): RecipientReward;
    fromProtoMsg(message: RecipientRewardProtoMsg): RecipientReward;
    toProto(message: RecipientReward): Uint8Array;
    toProtoMsg(message: RecipientReward): RecipientRewardProtoMsg;
};
