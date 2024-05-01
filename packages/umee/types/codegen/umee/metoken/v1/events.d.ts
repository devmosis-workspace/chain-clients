import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** EventSwap is emitted on Msg/Swap */
export interface EventSwap {
    /** meToken recipient bech32 address. */
    recipient: string;
    /** Asset provided for the swap. */
    asset: Coin;
    /** meToken received by the recipient in exchange for the provided asset. */
    metoken: Coin;
    /** Fee provided for the swap. */
    fee: Coin;
}
export interface EventSwapProtoMsg {
    typeUrl: "/umee.metoken.v1.EventSwap";
    value: Uint8Array;
}
/** EventSwap is emitted on Msg/Swap */
export interface EventSwapAmino {
    /** meToken recipient bech32 address. */
    recipient?: string;
    /** Asset provided for the swap. */
    asset?: CoinAmino;
    /** meToken received by the recipient in exchange for the provided asset. */
    metoken?: CoinAmino;
    /** Fee provided for the swap. */
    fee?: CoinAmino;
}
export interface EventSwapAminoMsg {
    type: "/umee.metoken.v1.EventSwap";
    value: EventSwapAmino;
}
/** EventSwap is emitted on Msg/Swap */
export interface EventSwapSDKType {
    recipient: string;
    asset: CoinSDKType;
    metoken: CoinSDKType;
    fee: CoinSDKType;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeem {
    /** Asset recipient bech32 address. */
    recipient: string;
    /** meToken provided for the redemption. */
    metoken: Coin;
    /** Asset received by the recipient in exchange for the provided meToken. */
    asset: Coin;
    /** Fee provided for the redemption. */
    fee: Coin;
}
export interface EventRedeemProtoMsg {
    typeUrl: "/umee.metoken.v1.EventRedeem";
    value: Uint8Array;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeemAmino {
    /** Asset recipient bech32 address. */
    recipient?: string;
    /** meToken provided for the redemption. */
    metoken?: CoinAmino;
    /** Asset received by the recipient in exchange for the provided meToken. */
    asset?: CoinAmino;
    /** Fee provided for the redemption. */
    fee?: CoinAmino;
}
export interface EventRedeemAminoMsg {
    type: "/umee.metoken.v1.EventRedeem";
    value: EventRedeemAmino;
}
/** EventRedeem is emitted on Msg/Redeem */
export interface EventRedeemSDKType {
    recipient: string;
    metoken: CoinSDKType;
    asset: CoinSDKType;
    fee: CoinSDKType;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancing {
    /** RebalancingResults of every asset in every Index. */
    results: RebalancingResult[];
}
export interface EventRebalancingProtoMsg {
    typeUrl: "/umee.metoken.v1.EventRebalancing";
    value: Uint8Array;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancingAmino {
    /** RebalancingResults of every asset in every Index. */
    results?: RebalancingResultAmino[];
}
export interface EventRebalancingAminoMsg {
    type: "/umee.metoken.v1.EventRebalancing";
    value: EventRebalancingAmino;
}
/** EventRebalancing is emitted when a reserve re-balancing occurs. */
export interface EventRebalancingSDKType {
    results: RebalancingResultSDKType[];
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResult {
    metokenDenom: string;
    /** Initial balance of an asset in the Index before re-balancing. */
    initialBalance: Coin[];
    /** Result balance of an asset in the Index after re-balancing. */
    resultBalance: Coin[];
}
export interface RebalancingResultProtoMsg {
    typeUrl: "/umee.metoken.v1.RebalancingResult";
    value: Uint8Array;
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResultAmino {
    metoken_denom?: string;
    /** Initial balance of an asset in the Index before re-balancing. */
    initial_balance?: CoinAmino[];
    /** Result balance of an asset in the Index after re-balancing. */
    result_balance?: CoinAmino[];
}
export interface RebalancingResultAminoMsg {
    type: "/umee.metoken.v1.RebalancingResult";
    value: RebalancingResultAmino;
}
/** RebalancingResult of a specific Index with initial and result balances of underlying assets. */
export interface RebalancingResultSDKType {
    metoken_denom: string;
    initial_balance: CoinSDKType[];
    result_balance: CoinSDKType[];
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaim {
    /** The denom and amount of successfully claimed interest */
    claimedAsset: Coin[];
}
export interface EventInterestClaimProtoMsg {
    typeUrl: "/umee.metoken.v1.EventInterestClaim";
    value: Uint8Array;
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaimAmino {
    /** The denom and amount of successfully claimed interest */
    claimed_asset?: CoinAmino[];
}
export interface EventInterestClaimAminoMsg {
    type: "/umee.metoken.v1.EventInterestClaim";
    value: EventInterestClaimAmino;
}
/** EventInterestClaim is emitted when the accrued interest was claimed from x/leverage */
export interface EventInterestClaimSDKType {
    claimed_asset: CoinSDKType[];
}
export declare const EventSwap: {
    typeUrl: string;
    encode(message: EventSwap, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSwap;
    fromPartial(object: Partial<EventSwap>): EventSwap;
    fromAmino(object: EventSwapAmino): EventSwap;
    toAmino(message: EventSwap): EventSwapAmino;
    fromAminoMsg(object: EventSwapAminoMsg): EventSwap;
    fromProtoMsg(message: EventSwapProtoMsg): EventSwap;
    toProto(message: EventSwap): Uint8Array;
    toProtoMsg(message: EventSwap): EventSwapProtoMsg;
};
export declare const EventRedeem: {
    typeUrl: string;
    encode(message: EventRedeem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRedeem;
    fromPartial(object: Partial<EventRedeem>): EventRedeem;
    fromAmino(object: EventRedeemAmino): EventRedeem;
    toAmino(message: EventRedeem): EventRedeemAmino;
    fromAminoMsg(object: EventRedeemAminoMsg): EventRedeem;
    fromProtoMsg(message: EventRedeemProtoMsg): EventRedeem;
    toProto(message: EventRedeem): Uint8Array;
    toProtoMsg(message: EventRedeem): EventRedeemProtoMsg;
};
export declare const EventRebalancing: {
    typeUrl: string;
    encode(message: EventRebalancing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRebalancing;
    fromPartial(object: Partial<EventRebalancing>): EventRebalancing;
    fromAmino(object: EventRebalancingAmino): EventRebalancing;
    toAmino(message: EventRebalancing): EventRebalancingAmino;
    fromAminoMsg(object: EventRebalancingAminoMsg): EventRebalancing;
    fromProtoMsg(message: EventRebalancingProtoMsg): EventRebalancing;
    toProto(message: EventRebalancing): Uint8Array;
    toProtoMsg(message: EventRebalancing): EventRebalancingProtoMsg;
};
export declare const RebalancingResult: {
    typeUrl: string;
    encode(message: RebalancingResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RebalancingResult;
    fromPartial(object: Partial<RebalancingResult>): RebalancingResult;
    fromAmino(object: RebalancingResultAmino): RebalancingResult;
    toAmino(message: RebalancingResult): RebalancingResultAmino;
    fromAminoMsg(object: RebalancingResultAminoMsg): RebalancingResult;
    fromProtoMsg(message: RebalancingResultProtoMsg): RebalancingResult;
    toProto(message: RebalancingResult): Uint8Array;
    toProtoMsg(message: RebalancingResult): RebalancingResultProtoMsg;
};
export declare const EventInterestClaim: {
    typeUrl: string;
    encode(message: EventInterestClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventInterestClaim;
    fromPartial(object: Partial<EventInterestClaim>): EventInterestClaim;
    fromAmino(object: EventInterestClaimAmino): EventInterestClaim;
    toAmino(message: EventInterestClaim): EventInterestClaimAmino;
    fromAminoMsg(object: EventInterestClaimAminoMsg): EventInterestClaim;
    fromProtoMsg(message: EventInterestClaimProtoMsg): EventInterestClaim;
    toProto(message: EventInterestClaim): Uint8Array;
    toProtoMsg(message: EventInterestClaim): EventInterestClaimProtoMsg;
};
