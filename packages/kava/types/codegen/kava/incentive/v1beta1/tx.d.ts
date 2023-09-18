import { BinaryWriter } from "../../../binary";
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface Selection {
    denom: string;
    multiplierName: string;
}
export interface SelectionProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.Selection";
    value: Uint8Array;
}
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface SelectionAmino {
    denom: string;
    multiplier_name: string;
}
export interface SelectionAminoMsg {
    type: "/kava.incentive.v1beta1.Selection";
    value: SelectionAmino;
}
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface SelectionSDKType {
    denom: string;
    multiplier_name: string;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingReward {
    sender: string;
    multiplierName: string;
}
export interface MsgClaimUSDXMintingRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
    value: Uint8Array;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingRewardAmino {
    sender: string;
    multiplier_name: string;
}
export interface MsgClaimUSDXMintingRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingReward";
    value: MsgClaimUSDXMintingRewardAmino;
}
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingRewardSDKType {
    sender: string;
    multiplier_name: string;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponse {
}
export interface MsgClaimUSDXMintingRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse";
    value: Uint8Array;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponseAmino {
}
export interface MsgClaimUSDXMintingRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimUSDXMintingRewardResponse";
    value: MsgClaimUSDXMintingRewardResponseAmino;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponseSDKType {
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardReward {
    sender: string;
    denomsToClaim: Selection[];
}
export interface MsgClaimHardRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimHardReward";
    value: Uint8Array;
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardRewardAmino {
    sender: string;
    denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimHardRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimHardReward";
    value: MsgClaimHardRewardAmino;
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponse {
}
export interface MsgClaimHardRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse";
    value: Uint8Array;
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponseAmino {
}
export interface MsgClaimHardRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimHardRewardResponse";
    value: MsgClaimHardRewardResponseAmino;
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponseSDKType {
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorReward {
    sender: string;
    denomsToClaim: Selection[];
}
export interface MsgClaimDelegatorRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
    value: Uint8Array;
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorRewardAmino {
    sender: string;
    denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimDelegatorRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimDelegatorReward";
    value: MsgClaimDelegatorRewardAmino;
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponse {
}
export interface MsgClaimDelegatorRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse";
    value: Uint8Array;
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponseAmino {
}
export interface MsgClaimDelegatorRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimDelegatorRewardResponse";
    value: MsgClaimDelegatorRewardResponseAmino;
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponseSDKType {
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapReward {
    sender: string;
    denomsToClaim: Selection[];
}
export interface MsgClaimSwapRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapReward";
    value: Uint8Array;
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapRewardAmino {
    sender: string;
    denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimSwapRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSwapReward";
    value: MsgClaimSwapRewardAmino;
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponse {
}
export interface MsgClaimSwapRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse";
    value: Uint8Array;
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponseAmino {
}
export interface MsgClaimSwapRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSwapRewardResponse";
    value: MsgClaimSwapRewardResponseAmino;
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponseSDKType {
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsReward {
    sender: string;
    denomsToClaim: Selection[];
}
export interface MsgClaimSavingsRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
    value: Uint8Array;
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsRewardAmino {
    sender: string;
    denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimSavingsRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSavingsReward";
    value: MsgClaimSavingsRewardAmino;
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponse {
}
export interface MsgClaimSavingsRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse";
    value: Uint8Array;
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponseAmino {
}
export interface MsgClaimSavingsRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimSavingsRewardResponse";
    value: MsgClaimSavingsRewardResponseAmino;
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponseSDKType {
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnReward {
    sender: string;
    denomsToClaim: Selection[];
}
export interface MsgClaimEarnRewardProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnReward";
    value: Uint8Array;
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnRewardAmino {
    sender: string;
    denoms_to_claim: SelectionAmino[];
}
export interface MsgClaimEarnRewardAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimEarnReward";
    value: MsgClaimEarnRewardAmino;
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponse {
}
export interface MsgClaimEarnRewardResponseProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse";
    value: Uint8Array;
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponseAmino {
}
export interface MsgClaimEarnRewardResponseAminoMsg {
    type: "/kava.incentive.v1beta1.MsgClaimEarnRewardResponse";
    value: MsgClaimEarnRewardResponseAmino;
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponseSDKType {
}
export declare const Selection: {
    typeUrl: string;
    encode(message: Selection, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Selection;
    fromPartial(object: Partial<Selection>): Selection;
    fromAmino(object: SelectionAmino): Selection;
    toAmino(message: Selection): SelectionAmino;
    fromAminoMsg(object: SelectionAminoMsg): Selection;
    fromProtoMsg(message: SelectionProtoMsg): Selection;
    toProto(message: Selection): Uint8Array;
    toProtoMsg(message: Selection): SelectionProtoMsg;
};
export declare const MsgClaimUSDXMintingReward: {
    typeUrl: string;
    encode(message: MsgClaimUSDXMintingReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimUSDXMintingReward;
    fromPartial(object: Partial<MsgClaimUSDXMintingReward>): MsgClaimUSDXMintingReward;
    fromAmino(object: MsgClaimUSDXMintingRewardAmino): MsgClaimUSDXMintingReward;
    toAmino(message: MsgClaimUSDXMintingReward): MsgClaimUSDXMintingRewardAmino;
    fromAminoMsg(object: MsgClaimUSDXMintingRewardAminoMsg): MsgClaimUSDXMintingReward;
    fromProtoMsg(message: MsgClaimUSDXMintingRewardProtoMsg): MsgClaimUSDXMintingReward;
    toProto(message: MsgClaimUSDXMintingReward): Uint8Array;
    toProtoMsg(message: MsgClaimUSDXMintingReward): MsgClaimUSDXMintingRewardProtoMsg;
};
export declare const MsgClaimUSDXMintingRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimUSDXMintingRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimUSDXMintingRewardResponse;
    fromPartial(_: Partial<MsgClaimUSDXMintingRewardResponse>): MsgClaimUSDXMintingRewardResponse;
    fromAmino(_: MsgClaimUSDXMintingRewardResponseAmino): MsgClaimUSDXMintingRewardResponse;
    toAmino(_: MsgClaimUSDXMintingRewardResponse): MsgClaimUSDXMintingRewardResponseAmino;
    fromAminoMsg(object: MsgClaimUSDXMintingRewardResponseAminoMsg): MsgClaimUSDXMintingRewardResponse;
    fromProtoMsg(message: MsgClaimUSDXMintingRewardResponseProtoMsg): MsgClaimUSDXMintingRewardResponse;
    toProto(message: MsgClaimUSDXMintingRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimUSDXMintingRewardResponse): MsgClaimUSDXMintingRewardResponseProtoMsg;
};
export declare const MsgClaimHardReward: {
    typeUrl: string;
    encode(message: MsgClaimHardReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimHardReward;
    fromPartial(object: Partial<MsgClaimHardReward>): MsgClaimHardReward;
    fromAmino(object: MsgClaimHardRewardAmino): MsgClaimHardReward;
    toAmino(message: MsgClaimHardReward): MsgClaimHardRewardAmino;
    fromAminoMsg(object: MsgClaimHardRewardAminoMsg): MsgClaimHardReward;
    fromProtoMsg(message: MsgClaimHardRewardProtoMsg): MsgClaimHardReward;
    toProto(message: MsgClaimHardReward): Uint8Array;
    toProtoMsg(message: MsgClaimHardReward): MsgClaimHardRewardProtoMsg;
};
export declare const MsgClaimHardRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimHardRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimHardRewardResponse;
    fromPartial(_: Partial<MsgClaimHardRewardResponse>): MsgClaimHardRewardResponse;
    fromAmino(_: MsgClaimHardRewardResponseAmino): MsgClaimHardRewardResponse;
    toAmino(_: MsgClaimHardRewardResponse): MsgClaimHardRewardResponseAmino;
    fromAminoMsg(object: MsgClaimHardRewardResponseAminoMsg): MsgClaimHardRewardResponse;
    fromProtoMsg(message: MsgClaimHardRewardResponseProtoMsg): MsgClaimHardRewardResponse;
    toProto(message: MsgClaimHardRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimHardRewardResponse): MsgClaimHardRewardResponseProtoMsg;
};
export declare const MsgClaimDelegatorReward: {
    typeUrl: string;
    encode(message: MsgClaimDelegatorReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimDelegatorReward;
    fromPartial(object: Partial<MsgClaimDelegatorReward>): MsgClaimDelegatorReward;
    fromAmino(object: MsgClaimDelegatorRewardAmino): MsgClaimDelegatorReward;
    toAmino(message: MsgClaimDelegatorReward): MsgClaimDelegatorRewardAmino;
    fromAminoMsg(object: MsgClaimDelegatorRewardAminoMsg): MsgClaimDelegatorReward;
    fromProtoMsg(message: MsgClaimDelegatorRewardProtoMsg): MsgClaimDelegatorReward;
    toProto(message: MsgClaimDelegatorReward): Uint8Array;
    toProtoMsg(message: MsgClaimDelegatorReward): MsgClaimDelegatorRewardProtoMsg;
};
export declare const MsgClaimDelegatorRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimDelegatorRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimDelegatorRewardResponse;
    fromPartial(_: Partial<MsgClaimDelegatorRewardResponse>): MsgClaimDelegatorRewardResponse;
    fromAmino(_: MsgClaimDelegatorRewardResponseAmino): MsgClaimDelegatorRewardResponse;
    toAmino(_: MsgClaimDelegatorRewardResponse): MsgClaimDelegatorRewardResponseAmino;
    fromAminoMsg(object: MsgClaimDelegatorRewardResponseAminoMsg): MsgClaimDelegatorRewardResponse;
    fromProtoMsg(message: MsgClaimDelegatorRewardResponseProtoMsg): MsgClaimDelegatorRewardResponse;
    toProto(message: MsgClaimDelegatorRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimDelegatorRewardResponse): MsgClaimDelegatorRewardResponseProtoMsg;
};
export declare const MsgClaimSwapReward: {
    typeUrl: string;
    encode(message: MsgClaimSwapReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimSwapReward;
    fromPartial(object: Partial<MsgClaimSwapReward>): MsgClaimSwapReward;
    fromAmino(object: MsgClaimSwapRewardAmino): MsgClaimSwapReward;
    toAmino(message: MsgClaimSwapReward): MsgClaimSwapRewardAmino;
    fromAminoMsg(object: MsgClaimSwapRewardAminoMsg): MsgClaimSwapReward;
    fromProtoMsg(message: MsgClaimSwapRewardProtoMsg): MsgClaimSwapReward;
    toProto(message: MsgClaimSwapReward): Uint8Array;
    toProtoMsg(message: MsgClaimSwapReward): MsgClaimSwapRewardProtoMsg;
};
export declare const MsgClaimSwapRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimSwapRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimSwapRewardResponse;
    fromPartial(_: Partial<MsgClaimSwapRewardResponse>): MsgClaimSwapRewardResponse;
    fromAmino(_: MsgClaimSwapRewardResponseAmino): MsgClaimSwapRewardResponse;
    toAmino(_: MsgClaimSwapRewardResponse): MsgClaimSwapRewardResponseAmino;
    fromAminoMsg(object: MsgClaimSwapRewardResponseAminoMsg): MsgClaimSwapRewardResponse;
    fromProtoMsg(message: MsgClaimSwapRewardResponseProtoMsg): MsgClaimSwapRewardResponse;
    toProto(message: MsgClaimSwapRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimSwapRewardResponse): MsgClaimSwapRewardResponseProtoMsg;
};
export declare const MsgClaimSavingsReward: {
    typeUrl: string;
    encode(message: MsgClaimSavingsReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimSavingsReward;
    fromPartial(object: Partial<MsgClaimSavingsReward>): MsgClaimSavingsReward;
    fromAmino(object: MsgClaimSavingsRewardAmino): MsgClaimSavingsReward;
    toAmino(message: MsgClaimSavingsReward): MsgClaimSavingsRewardAmino;
    fromAminoMsg(object: MsgClaimSavingsRewardAminoMsg): MsgClaimSavingsReward;
    fromProtoMsg(message: MsgClaimSavingsRewardProtoMsg): MsgClaimSavingsReward;
    toProto(message: MsgClaimSavingsReward): Uint8Array;
    toProtoMsg(message: MsgClaimSavingsReward): MsgClaimSavingsRewardProtoMsg;
};
export declare const MsgClaimSavingsRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimSavingsRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimSavingsRewardResponse;
    fromPartial(_: Partial<MsgClaimSavingsRewardResponse>): MsgClaimSavingsRewardResponse;
    fromAmino(_: MsgClaimSavingsRewardResponseAmino): MsgClaimSavingsRewardResponse;
    toAmino(_: MsgClaimSavingsRewardResponse): MsgClaimSavingsRewardResponseAmino;
    fromAminoMsg(object: MsgClaimSavingsRewardResponseAminoMsg): MsgClaimSavingsRewardResponse;
    fromProtoMsg(message: MsgClaimSavingsRewardResponseProtoMsg): MsgClaimSavingsRewardResponse;
    toProto(message: MsgClaimSavingsRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimSavingsRewardResponse): MsgClaimSavingsRewardResponseProtoMsg;
};
export declare const MsgClaimEarnReward: {
    typeUrl: string;
    encode(message: MsgClaimEarnReward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClaimEarnReward;
    fromPartial(object: Partial<MsgClaimEarnReward>): MsgClaimEarnReward;
    fromAmino(object: MsgClaimEarnRewardAmino): MsgClaimEarnReward;
    toAmino(message: MsgClaimEarnReward): MsgClaimEarnRewardAmino;
    fromAminoMsg(object: MsgClaimEarnRewardAminoMsg): MsgClaimEarnReward;
    fromProtoMsg(message: MsgClaimEarnRewardProtoMsg): MsgClaimEarnReward;
    toProto(message: MsgClaimEarnReward): Uint8Array;
    toProtoMsg(message: MsgClaimEarnReward): MsgClaimEarnRewardProtoMsg;
};
export declare const MsgClaimEarnRewardResponse: {
    typeUrl: string;
    encode(_: MsgClaimEarnRewardResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClaimEarnRewardResponse;
    fromPartial(_: Partial<MsgClaimEarnRewardResponse>): MsgClaimEarnRewardResponse;
    fromAmino(_: MsgClaimEarnRewardResponseAmino): MsgClaimEarnRewardResponse;
    toAmino(_: MsgClaimEarnRewardResponse): MsgClaimEarnRewardResponseAmino;
    fromAminoMsg(object: MsgClaimEarnRewardResponseAminoMsg): MsgClaimEarnRewardResponse;
    fromProtoMsg(message: MsgClaimEarnRewardResponseProtoMsg): MsgClaimEarnRewardResponse;
    toProto(message: MsgClaimEarnRewardResponse): Uint8Array;
    toProtoMsg(message: MsgClaimEarnRewardResponse): MsgClaimEarnRewardResponseProtoMsg;
};
