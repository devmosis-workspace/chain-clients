import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Series } from "./pool";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
export interface MsgCreateReward {
    creator: string;
    recipient: string;
    amount: Coin;
    series: Series;
}
export interface MsgCreateRewardProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgCreateReward";
    value: Uint8Array;
}
export interface MsgCreateRewardAmino {
    creator?: string;
    recipient?: string;
    amount?: CoinAmino;
    series?: Series;
}
export interface MsgCreateRewardAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgCreateReward";
    value: MsgCreateRewardAmino;
}
export interface MsgCreateRewardSDKType {
    creator: string;
    recipient: string;
    amount: CoinSDKType;
    series: Series;
}
export interface MsgCreateRewardResponse {
    /** actual granted amount */
    amount: Coin;
}
export interface MsgCreateRewardResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgCreateRewardResponse";
    value: Uint8Array;
}
export interface MsgCreateRewardResponseAmino {
    /** actual granted amount */
    amount?: CoinAmino;
}
export interface MsgCreateRewardResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgCreateRewardResponse";
    value: MsgCreateRewardResponseAmino;
}
export interface MsgCreateRewardResponseSDKType {
    amount: CoinSDKType;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaim {
    creator: string;
}
export interface MsgClaimProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgClaim";
    value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaimAmino {
    creator?: string;
}
export interface MsgClaimAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgClaim";
    value: MsgClaimAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgClaimSDKType {
    creator: string;
}
export interface ClaimResponseReward {
    series: Series;
    amount: Coin;
}
export interface ClaimResponseRewardProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.ClaimResponseReward";
    value: Uint8Array;
}
export interface ClaimResponseRewardAmino {
    series?: Series;
    amount?: CoinAmino;
}
export interface ClaimResponseRewardAminoMsg {
    type: "/gitopia.gitopia.rewards.ClaimResponseReward";
    value: ClaimResponseRewardAmino;
}
export interface ClaimResponseRewardSDKType {
    series: Series;
    amount: CoinSDKType;
}
export interface MsgClaimResponse {
    claimedRewards: ClaimResponseReward[];
    expiredRewards: ClaimResponseReward[];
    allClaimedRewards: ClaimResponseReward[];
}
export interface MsgClaimResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgClaimResponse";
    value: Uint8Array;
}
export interface MsgClaimResponseAmino {
    claimed_rewards?: ClaimResponseRewardAmino[];
    expired_rewards?: ClaimResponseRewardAmino[];
    all_claimed_rewards?: ClaimResponseRewardAmino[];
}
export interface MsgClaimResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgClaimResponse";
    value: MsgClaimResponseAmino;
}
export interface MsgClaimResponseSDKType {
    claimed_rewards: ClaimResponseRewardSDKType[];
    expired_rewards: ClaimResponseRewardSDKType[];
    all_claimed_rewards: ClaimResponseRewardSDKType[];
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/rewards parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the x/rewards parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/gitopia.gitopia.rewards.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgCreateReward: {
    typeUrl: string;
    encode(message: MsgCreateReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateReward;
    fromPartial(object: Partial<MsgCreateReward>): MsgCreateReward;
    fromAmino(object: MsgCreateRewardAmino): MsgCreateReward;
    toAmino(message: MsgCreateReward): MsgCreateRewardAmino;
    fromAminoMsg(object: MsgCreateRewardAminoMsg): MsgCreateReward;
    fromProtoMsg(message: MsgCreateRewardProtoMsg): MsgCreateReward;
    toProto(message: MsgCreateReward): Uint8Array;
    toProtoMsg(message: MsgCreateReward): MsgCreateRewardProtoMsg;
};
export declare const MsgCreateRewardResponse: {
    typeUrl: string;
    encode(message: MsgCreateRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRewardResponse;
    fromPartial(object: Partial<MsgCreateRewardResponse>): MsgCreateRewardResponse;
    fromAmino(object: MsgCreateRewardResponseAmino): MsgCreateRewardResponse;
    toAmino(message: MsgCreateRewardResponse): MsgCreateRewardResponseAmino;
    fromAminoMsg(object: MsgCreateRewardResponseAminoMsg): MsgCreateRewardResponse;
    fromProtoMsg(message: MsgCreateRewardResponseProtoMsg): MsgCreateRewardResponse;
    toProto(message: MsgCreateRewardResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRewardResponse): MsgCreateRewardResponseProtoMsg;
};
export declare const MsgClaim: {
    typeUrl: string;
    encode(message: MsgClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaim;
    fromPartial(object: Partial<MsgClaim>): MsgClaim;
    fromAmino(object: MsgClaimAmino): MsgClaim;
    toAmino(message: MsgClaim): MsgClaimAmino;
    fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim;
    fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim;
    toProto(message: MsgClaim): Uint8Array;
    toProtoMsg(message: MsgClaim): MsgClaimProtoMsg;
};
export declare const ClaimResponseReward: {
    typeUrl: string;
    encode(message: ClaimResponseReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimResponseReward;
    fromPartial(object: Partial<ClaimResponseReward>): ClaimResponseReward;
    fromAmino(object: ClaimResponseRewardAmino): ClaimResponseReward;
    toAmino(message: ClaimResponseReward): ClaimResponseRewardAmino;
    fromAminoMsg(object: ClaimResponseRewardAminoMsg): ClaimResponseReward;
    fromProtoMsg(message: ClaimResponseRewardProtoMsg): ClaimResponseReward;
    toProto(message: ClaimResponseReward): Uint8Array;
    toProtoMsg(message: ClaimResponseReward): ClaimResponseRewardProtoMsg;
};
export declare const MsgClaimResponse: {
    typeUrl: string;
    encode(message: MsgClaimResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimResponse;
    fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse;
    fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse;
    toAmino(message: MsgClaimResponse): MsgClaimResponseAmino;
    fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse;
    fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse;
    toProto(message: MsgClaimResponse): Uint8Array;
    toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
