import * as _m0 from "protobufjs/minimal";
/**
 * Selection is a pair of denom and multiplier name. It holds the choice of multiplier a user makes when they claim a
 * denom.
 */
export interface Selection {
    denom: string;
    multiplierName: string;
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
/** MsgClaimUSDXMintingReward message type used to claim USDX minting rewards */
export interface MsgClaimUSDXMintingRewardSDKType {
    sender: string;
    multiplier_name: string;
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponse {
}
/** MsgClaimUSDXMintingRewardResponse defines the Msg/ClaimUSDXMintingReward response type. */
export interface MsgClaimUSDXMintingRewardResponseSDKType {
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimHardReward message type used to claim Hard liquidity provider rewards */
export interface MsgClaimHardRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponse {
}
/** MsgClaimHardRewardResponse defines the Msg/ClaimHardReward response type. */
export interface MsgClaimHardRewardResponseSDKType {
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimDelegatorReward message type used to claim delegator rewards */
export interface MsgClaimDelegatorRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponse {
}
/** MsgClaimDelegatorRewardResponse defines the Msg/ClaimDelegatorReward response type. */
export interface MsgClaimDelegatorRewardResponseSDKType {
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimSwapReward message type used to claim delegator rewards */
export interface MsgClaimSwapRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponse {
}
/** MsgClaimSwapRewardResponse defines the Msg/ClaimSwapReward response type. */
export interface MsgClaimSwapRewardResponseSDKType {
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimSavingsReward message type used to claim savings rewards */
export interface MsgClaimSavingsRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponse {
}
/** MsgClaimSavingsRewardResponse defines the Msg/ClaimSavingsReward response type. */
export interface MsgClaimSavingsRewardResponseSDKType {
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnReward {
    sender: string;
    denomsToClaim: Selection[];
}
/** MsgClaimEarnReward message type used to claim earn rewards */
export interface MsgClaimEarnRewardSDKType {
    sender: string;
    denoms_to_claim: SelectionSDKType[];
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponse {
}
/** MsgClaimEarnRewardResponse defines the Msg/ClaimEarnReward response type. */
export interface MsgClaimEarnRewardResponseSDKType {
}
export declare const Selection: {
    encode(message: Selection, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Selection;
    fromPartial(object: Partial<Selection>): Selection;
};
export declare const MsgClaimUSDXMintingReward: {
    encode(message: MsgClaimUSDXMintingReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimUSDXMintingReward;
    fromPartial(object: Partial<MsgClaimUSDXMintingReward>): MsgClaimUSDXMintingReward;
};
export declare const MsgClaimUSDXMintingRewardResponse: {
    encode(_: MsgClaimUSDXMintingRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimUSDXMintingRewardResponse;
    fromPartial(_: Partial<MsgClaimUSDXMintingRewardResponse>): MsgClaimUSDXMintingRewardResponse;
};
export declare const MsgClaimHardReward: {
    encode(message: MsgClaimHardReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimHardReward;
    fromPartial(object: Partial<MsgClaimHardReward>): MsgClaimHardReward;
};
export declare const MsgClaimHardRewardResponse: {
    encode(_: MsgClaimHardRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimHardRewardResponse;
    fromPartial(_: Partial<MsgClaimHardRewardResponse>): MsgClaimHardRewardResponse;
};
export declare const MsgClaimDelegatorReward: {
    encode(message: MsgClaimDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimDelegatorReward;
    fromPartial(object: Partial<MsgClaimDelegatorReward>): MsgClaimDelegatorReward;
};
export declare const MsgClaimDelegatorRewardResponse: {
    encode(_: MsgClaimDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimDelegatorRewardResponse;
    fromPartial(_: Partial<MsgClaimDelegatorRewardResponse>): MsgClaimDelegatorRewardResponse;
};
export declare const MsgClaimSwapReward: {
    encode(message: MsgClaimSwapReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimSwapReward;
    fromPartial(object: Partial<MsgClaimSwapReward>): MsgClaimSwapReward;
};
export declare const MsgClaimSwapRewardResponse: {
    encode(_: MsgClaimSwapRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimSwapRewardResponse;
    fromPartial(_: Partial<MsgClaimSwapRewardResponse>): MsgClaimSwapRewardResponse;
};
export declare const MsgClaimSavingsReward: {
    encode(message: MsgClaimSavingsReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimSavingsReward;
    fromPartial(object: Partial<MsgClaimSavingsReward>): MsgClaimSavingsReward;
};
export declare const MsgClaimSavingsRewardResponse: {
    encode(_: MsgClaimSavingsRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimSavingsRewardResponse;
    fromPartial(_: Partial<MsgClaimSavingsRewardResponse>): MsgClaimSavingsRewardResponse;
};
export declare const MsgClaimEarnReward: {
    encode(message: MsgClaimEarnReward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgClaimEarnReward;
    fromPartial(object: Partial<MsgClaimEarnReward>): MsgClaimEarnReward;
};
export declare const MsgClaimEarnRewardResponse: {
    encode(_: MsgClaimEarnRewardResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgClaimEarnRewardResponse;
    fromPartial(_: Partial<MsgClaimEarnRewardResponse>): MsgClaimEarnRewardResponse;
};
