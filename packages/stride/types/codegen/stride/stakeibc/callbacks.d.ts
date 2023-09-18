import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegation {
    validator: string;
    amount: string;
}
export interface SplitDelegationProtoMsg {
    typeUrl: "/stride.stakeibc.SplitDelegation";
    value: Uint8Array;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationAmino {
    validator: string;
    amount: string;
}
export interface SplitDelegationAminoMsg {
    type: "/stride.stakeibc.SplitDelegation";
    value: SplitDelegationAmino;
}
/** ---------------------- Delegation Callbacks ---------------------- // */
export interface SplitDelegationSDKType {
    validator: string;
    amount: string;
}
export interface DelegateCallback {
    hostZoneId: string;
    depositRecordId: bigint;
    splitDelegations: SplitDelegation[];
}
export interface DelegateCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.DelegateCallback";
    value: Uint8Array;
}
export interface DelegateCallbackAmino {
    host_zone_id: string;
    deposit_record_id: string;
    split_delegations: SplitDelegationAmino[];
}
export interface DelegateCallbackAminoMsg {
    type: "/stride.stakeibc.DelegateCallback";
    value: DelegateCallbackAmino;
}
export interface DelegateCallbackSDKType {
    host_zone_id: string;
    deposit_record_id: bigint;
    split_delegations: SplitDelegationSDKType[];
}
export interface ClaimCallback {
    userRedemptionRecordId: string;
    chainId: string;
    epochNumber: bigint;
}
export interface ClaimCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.ClaimCallback";
    value: Uint8Array;
}
export interface ClaimCallbackAmino {
    user_redemption_record_id: string;
    chain_id: string;
    epoch_number: string;
}
export interface ClaimCallbackAminoMsg {
    type: "/stride.stakeibc.ClaimCallback";
    value: ClaimCallbackAmino;
}
export interface ClaimCallbackSDKType {
    user_redemption_record_id: string;
    chain_id: string;
    epoch_number: bigint;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallback {
    reinvestAmount: Coin;
    hostZoneId: string;
}
export interface ReinvestCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.ReinvestCallback";
    value: Uint8Array;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackAmino {
    reinvest_amount?: CoinAmino;
    host_zone_id: string;
}
export interface ReinvestCallbackAminoMsg {
    type: "/stride.stakeibc.ReinvestCallback";
    value: ReinvestCallbackAmino;
}
/** ---------------------- Reinvest Callback ---------------------- // */
export interface ReinvestCallbackSDKType {
    reinvest_amount: CoinSDKType;
    host_zone_id: string;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallback {
    hostZoneId: string;
    splitDelegations: SplitDelegation[];
    epochUnbondingRecordIds: bigint[];
}
export interface UndelegateCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.UndelegateCallback";
    value: Uint8Array;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackAmino {
    host_zone_id: string;
    split_delegations: SplitDelegationAmino[];
    epoch_unbonding_record_ids: string[];
}
export interface UndelegateCallbackAminoMsg {
    type: "/stride.stakeibc.UndelegateCallback";
    value: UndelegateCallbackAmino;
}
/** ---------------------- Undelegation Callbacks ---------------------- // */
export interface UndelegateCallbackSDKType {
    host_zone_id: string;
    split_delegations: SplitDelegationSDKType[];
    epoch_unbonding_record_ids: bigint[];
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallback {
    hostZoneId: string;
    epochUnbondingRecordIds: bigint[];
}
export interface RedemptionCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.RedemptionCallback";
    value: Uint8Array;
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackAmino {
    host_zone_id: string;
    epoch_unbonding_record_ids: string[];
}
export interface RedemptionCallbackAminoMsg {
    type: "/stride.stakeibc.RedemptionCallback";
    value: RedemptionCallbackAmino;
}
/** ---------------------- Redemption Callbacks ---------------------- // */
export interface RedemptionCallbackSDKType {
    host_zone_id: string;
    epoch_unbonding_record_ids: bigint[];
}
export interface Rebalancing {
    srcValidator: string;
    dstValidator: string;
    amt: string;
}
export interface RebalancingProtoMsg {
    typeUrl: "/stride.stakeibc.Rebalancing";
    value: Uint8Array;
}
export interface RebalancingAmino {
    src_validator: string;
    dst_validator: string;
    amt: string;
}
export interface RebalancingAminoMsg {
    type: "/stride.stakeibc.Rebalancing";
    value: RebalancingAmino;
}
export interface RebalancingSDKType {
    src_validator: string;
    dst_validator: string;
    amt: string;
}
export interface RebalanceCallback {
    hostZoneId: string;
    rebalancings: Rebalancing[];
}
export interface RebalanceCallbackProtoMsg {
    typeUrl: "/stride.stakeibc.RebalanceCallback";
    value: Uint8Array;
}
export interface RebalanceCallbackAmino {
    host_zone_id: string;
    rebalancings: RebalancingAmino[];
}
export interface RebalanceCallbackAminoMsg {
    type: "/stride.stakeibc.RebalanceCallback";
    value: RebalanceCallbackAmino;
}
export interface RebalanceCallbackSDKType {
    host_zone_id: string;
    rebalancings: RebalancingSDKType[];
}
export declare const SplitDelegation: {
    typeUrl: string;
    encode(message: SplitDelegation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SplitDelegation;
    fromPartial(object: Partial<SplitDelegation>): SplitDelegation;
    fromAmino(object: SplitDelegationAmino): SplitDelegation;
    toAmino(message: SplitDelegation): SplitDelegationAmino;
    fromAminoMsg(object: SplitDelegationAminoMsg): SplitDelegation;
    fromProtoMsg(message: SplitDelegationProtoMsg): SplitDelegation;
    toProto(message: SplitDelegation): Uint8Array;
    toProtoMsg(message: SplitDelegation): SplitDelegationProtoMsg;
};
export declare const DelegateCallback: {
    typeUrl: string;
    encode(message: DelegateCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DelegateCallback;
    fromPartial(object: Partial<DelegateCallback>): DelegateCallback;
    fromAmino(object: DelegateCallbackAmino): DelegateCallback;
    toAmino(message: DelegateCallback): DelegateCallbackAmino;
    fromAminoMsg(object: DelegateCallbackAminoMsg): DelegateCallback;
    fromProtoMsg(message: DelegateCallbackProtoMsg): DelegateCallback;
    toProto(message: DelegateCallback): Uint8Array;
    toProtoMsg(message: DelegateCallback): DelegateCallbackProtoMsg;
};
export declare const ClaimCallback: {
    typeUrl: string;
    encode(message: ClaimCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClaimCallback;
    fromPartial(object: Partial<ClaimCallback>): ClaimCallback;
    fromAmino(object: ClaimCallbackAmino): ClaimCallback;
    toAmino(message: ClaimCallback): ClaimCallbackAmino;
    fromAminoMsg(object: ClaimCallbackAminoMsg): ClaimCallback;
    fromProtoMsg(message: ClaimCallbackProtoMsg): ClaimCallback;
    toProto(message: ClaimCallback): Uint8Array;
    toProtoMsg(message: ClaimCallback): ClaimCallbackProtoMsg;
};
export declare const ReinvestCallback: {
    typeUrl: string;
    encode(message: ReinvestCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ReinvestCallback;
    fromPartial(object: Partial<ReinvestCallback>): ReinvestCallback;
    fromAmino(object: ReinvestCallbackAmino): ReinvestCallback;
    toAmino(message: ReinvestCallback): ReinvestCallbackAmino;
    fromAminoMsg(object: ReinvestCallbackAminoMsg): ReinvestCallback;
    fromProtoMsg(message: ReinvestCallbackProtoMsg): ReinvestCallback;
    toProto(message: ReinvestCallback): Uint8Array;
    toProtoMsg(message: ReinvestCallback): ReinvestCallbackProtoMsg;
};
export declare const UndelegateCallback: {
    typeUrl: string;
    encode(message: UndelegateCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UndelegateCallback;
    fromPartial(object: Partial<UndelegateCallback>): UndelegateCallback;
    fromAmino(object: UndelegateCallbackAmino): UndelegateCallback;
    toAmino(message: UndelegateCallback): UndelegateCallbackAmino;
    fromAminoMsg(object: UndelegateCallbackAminoMsg): UndelegateCallback;
    fromProtoMsg(message: UndelegateCallbackProtoMsg): UndelegateCallback;
    toProto(message: UndelegateCallback): Uint8Array;
    toProtoMsg(message: UndelegateCallback): UndelegateCallbackProtoMsg;
};
export declare const RedemptionCallback: {
    typeUrl: string;
    encode(message: RedemptionCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RedemptionCallback;
    fromPartial(object: Partial<RedemptionCallback>): RedemptionCallback;
    fromAmino(object: RedemptionCallbackAmino): RedemptionCallback;
    toAmino(message: RedemptionCallback): RedemptionCallbackAmino;
    fromAminoMsg(object: RedemptionCallbackAminoMsg): RedemptionCallback;
    fromProtoMsg(message: RedemptionCallbackProtoMsg): RedemptionCallback;
    toProto(message: RedemptionCallback): Uint8Array;
    toProtoMsg(message: RedemptionCallback): RedemptionCallbackProtoMsg;
};
export declare const Rebalancing: {
    typeUrl: string;
    encode(message: Rebalancing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Rebalancing;
    fromPartial(object: Partial<Rebalancing>): Rebalancing;
    fromAmino(object: RebalancingAmino): Rebalancing;
    toAmino(message: Rebalancing): RebalancingAmino;
    fromAminoMsg(object: RebalancingAminoMsg): Rebalancing;
    fromProtoMsg(message: RebalancingProtoMsg): Rebalancing;
    toProto(message: Rebalancing): Uint8Array;
    toProtoMsg(message: Rebalancing): RebalancingProtoMsg;
};
export declare const RebalanceCallback: {
    typeUrl: string;
    encode(message: RebalanceCallback, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RebalanceCallback;
    fromPartial(object: Partial<RebalanceCallback>): RebalanceCallback;
    fromAmino(object: RebalanceCallbackAmino): RebalanceCallback;
    toAmino(message: RebalanceCallback): RebalanceCallbackAmino;
    fromAminoMsg(object: RebalanceCallbackAminoMsg): RebalanceCallback;
    fromProtoMsg(message: RebalanceCallbackProtoMsg): RebalanceCallback;
    toProto(message: RebalanceCallback): Uint8Array;
    toProtoMsg(message: RebalanceCallback): RebalanceCallbackProtoMsg;
};
