import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Pool {
    name: string;
    rewards: Pool_Reward[];
}
export interface PoolProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    name?: string;
    rewards?: Pool_RewardAmino[];
}
export interface PoolAminoMsg {
    type: "/axelar.reward.v1beta1.Pool";
    value: PoolAmino;
}
export interface PoolSDKType {
    name: string;
    rewards: Pool_RewardSDKType[];
}
export interface Pool_Reward {
    validator: Uint8Array;
    coins: Coin[];
}
export interface Pool_RewardProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.Reward";
    value: Uint8Array;
}
export interface Pool_RewardAmino {
    validator?: string;
    coins?: CoinAmino[];
}
export interface Pool_RewardAminoMsg {
    type: "/axelar.reward.v1beta1.Reward";
    value: Pool_RewardAmino;
}
export interface Pool_RewardSDKType {
    validator: Uint8Array;
    coins: CoinSDKType[];
}
export interface Refund {
    payer: Uint8Array;
    fees: Coin[];
}
export interface RefundProtoMsg {
    typeUrl: "/axelar.reward.v1beta1.Refund";
    value: Uint8Array;
}
export interface RefundAmino {
    payer?: string;
    fees?: CoinAmino[];
}
export interface RefundAminoMsg {
    type: "/axelar.reward.v1beta1.Refund";
    value: RefundAmino;
}
export interface RefundSDKType {
    payer: Uint8Array;
    fees: CoinSDKType[];
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
export declare const Pool_Reward: {
    typeUrl: string;
    encode(message: Pool_Reward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool_Reward;
    fromPartial(object: Partial<Pool_Reward>): Pool_Reward;
    fromAmino(object: Pool_RewardAmino): Pool_Reward;
    toAmino(message: Pool_Reward): Pool_RewardAmino;
    fromAminoMsg(object: Pool_RewardAminoMsg): Pool_Reward;
    fromProtoMsg(message: Pool_RewardProtoMsg): Pool_Reward;
    toProto(message: Pool_Reward): Uint8Array;
    toProtoMsg(message: Pool_Reward): Pool_RewardProtoMsg;
};
export declare const Refund: {
    typeUrl: string;
    encode(message: Refund, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Refund;
    fromPartial(object: Partial<Refund>): Refund;
    fromAmino(object: RefundAmino): Refund;
    toAmino(message: Refund): RefundAmino;
    fromAminoMsg(object: RefundAminoMsg): Refund;
    fromProtoMsg(message: RefundProtoMsg): Refund;
    toProto(message: Refund): Uint8Array;
    toProtoMsg(message: Refund): RefundProtoMsg;
};
