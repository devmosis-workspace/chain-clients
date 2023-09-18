import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { SlashType } from "./delegation";
import { BinaryWriter } from "../../../binary";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams: Params;
    /** new_params is the module's new parameters. */
    newParams: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventUpdateParams";
    value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
    /** old_params is the module's old parameters. */
    old_params?: ParamsAmino;
    /** new_params is the module's new parameters. */
    new_params?: ParamsAmino;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.delegation.v1beta1.EventUpdateParams";
    value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params: ParamsSDKType;
    new_params: ParamsSDKType;
    payload: string;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface EventDelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventDelegate";
    value: Uint8Array;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateAmino {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
}
export interface EventDelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.EventDelegate";
    value: EventDelegateAmino;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateSDKType {
    address: string;
    staker: string;
    amount: bigint;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegation {
    /** address is the address of the delegator. */
    address: string;
    /** staker is the address of the protocol node. */
    staker: string;
    /** amount is the amount to be undelegated from the protocol node. */
    amount: bigint;
    /**
     * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
     * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
     */
    estimatedUndelegationDate: bigint;
}
export interface EventStartUndelegationProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventStartUndelegation";
    value: Uint8Array;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationAmino {
    /** address is the address of the delegator. */
    address: string;
    /** staker is the address of the protocol node. */
    staker: string;
    /** amount is the amount to be undelegated from the protocol node. */
    amount: string;
    /**
     * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
     * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
     */
    estimated_undelegation_date: string;
}
export interface EventStartUndelegationAminoMsg {
    type: "/kyve.delegation.v1beta1.EventStartUndelegation";
    value: EventStartUndelegationAmino;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationSDKType {
    address: string;
    staker: string;
    amount: bigint;
    estimated_undelegation_date: bigint;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface EventUndelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventUndelegate";
    value: Uint8Array;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateAmino {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
}
export interface EventUndelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.EventUndelegate";
    value: EventUndelegateAmino;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateSDKType {
    address: string;
    staker: string;
    amount: bigint;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegate {
    /** address is the account address of the delegator. */
    address: string;
    /** from_staker ... */
    fromStaker: string;
    /** to_staker is the account address of the new staker in the the pool */
    toStaker: string;
    /** amount ... */
    amount: bigint;
}
export interface EventRedelegateProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventRedelegate";
    value: Uint8Array;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateAmino {
    /** address is the account address of the delegator. */
    address: string;
    /** from_staker ... */
    from_staker: string;
    /** to_staker is the account address of the new staker in the the pool */
    to_staker: string;
    /** amount ... */
    amount: string;
}
export interface EventRedelegateAminoMsg {
    type: "/kyve.delegation.v1beta1.EventRedelegate";
    value: EventRedelegateAmino;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateSDKType {
    address: string;
    from_staker: string;
    to_staker: string;
    amount: bigint;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewards {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node the users withdraws from. */
    staker: string;
    /** amount ... */
    amount: bigint;
}
export interface EventWithdrawRewardsProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventWithdrawRewards";
    value: Uint8Array;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsAmino {
    /** address is the account address of the delegator. */
    address: string;
    /** staker is the account address of the protocol node the users withdraws from. */
    staker: string;
    /** amount ... */
    amount: string;
}
export interface EventWithdrawRewardsAminoMsg {
    type: "/kyve.delegation.v1beta1.EventWithdrawRewards";
    value: EventWithdrawRewardsAmino;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsSDKType {
    address: string;
    staker: string;
    amount: bigint;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: bigint;
    /** slash_type */
    slashType: SlashType;
}
export interface EventSlashProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.EventSlash";
    value: Uint8Array;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id: string;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: string;
    /** slash_type */
    slash_type: SlashType;
}
export interface EventSlashAminoMsg {
    type: "/kyve.delegation.v1beta1.EventSlash";
    value: EventSlashAmino;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashSDKType {
    pool_id: bigint;
    staker: string;
    amount: bigint;
    slash_type: SlashType;
}
export declare const EventUpdateParams: {
    typeUrl: string;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
export declare const EventDelegate: {
    typeUrl: string;
    encode(message: EventDelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDelegate;
    fromPartial(object: Partial<EventDelegate>): EventDelegate;
    fromAmino(object: EventDelegateAmino): EventDelegate;
    toAmino(message: EventDelegate): EventDelegateAmino;
    fromAminoMsg(object: EventDelegateAminoMsg): EventDelegate;
    fromProtoMsg(message: EventDelegateProtoMsg): EventDelegate;
    toProto(message: EventDelegate): Uint8Array;
    toProtoMsg(message: EventDelegate): EventDelegateProtoMsg;
};
export declare const EventStartUndelegation: {
    typeUrl: string;
    encode(message: EventStartUndelegation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventStartUndelegation;
    fromPartial(object: Partial<EventStartUndelegation>): EventStartUndelegation;
    fromAmino(object: EventStartUndelegationAmino): EventStartUndelegation;
    toAmino(message: EventStartUndelegation): EventStartUndelegationAmino;
    fromAminoMsg(object: EventStartUndelegationAminoMsg): EventStartUndelegation;
    fromProtoMsg(message: EventStartUndelegationProtoMsg): EventStartUndelegation;
    toProto(message: EventStartUndelegation): Uint8Array;
    toProtoMsg(message: EventStartUndelegation): EventStartUndelegationProtoMsg;
};
export declare const EventUndelegate: {
    typeUrl: string;
    encode(message: EventUndelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUndelegate;
    fromPartial(object: Partial<EventUndelegate>): EventUndelegate;
    fromAmino(object: EventUndelegateAmino): EventUndelegate;
    toAmino(message: EventUndelegate): EventUndelegateAmino;
    fromAminoMsg(object: EventUndelegateAminoMsg): EventUndelegate;
    fromProtoMsg(message: EventUndelegateProtoMsg): EventUndelegate;
    toProto(message: EventUndelegate): Uint8Array;
    toProtoMsg(message: EventUndelegate): EventUndelegateProtoMsg;
};
export declare const EventRedelegate: {
    typeUrl: string;
    encode(message: EventRedelegate, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRedelegate;
    fromPartial(object: Partial<EventRedelegate>): EventRedelegate;
    fromAmino(object: EventRedelegateAmino): EventRedelegate;
    toAmino(message: EventRedelegate): EventRedelegateAmino;
    fromAminoMsg(object: EventRedelegateAminoMsg): EventRedelegate;
    fromProtoMsg(message: EventRedelegateProtoMsg): EventRedelegate;
    toProto(message: EventRedelegate): Uint8Array;
    toProtoMsg(message: EventRedelegate): EventRedelegateProtoMsg;
};
export declare const EventWithdrawRewards: {
    typeUrl: string;
    encode(message: EventWithdrawRewards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdrawRewards;
    fromPartial(object: Partial<EventWithdrawRewards>): EventWithdrawRewards;
    fromAmino(object: EventWithdrawRewardsAmino): EventWithdrawRewards;
    toAmino(message: EventWithdrawRewards): EventWithdrawRewardsAmino;
    fromAminoMsg(object: EventWithdrawRewardsAminoMsg): EventWithdrawRewards;
    fromProtoMsg(message: EventWithdrawRewardsProtoMsg): EventWithdrawRewards;
    toProto(message: EventWithdrawRewards): Uint8Array;
    toProtoMsg(message: EventWithdrawRewards): EventWithdrawRewardsProtoMsg;
};
export declare const EventSlash: {
    typeUrl: string;
    encode(message: EventSlash, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSlash;
    fromPartial(object: Partial<EventSlash>): EventSlash;
    fromAmino(object: EventSlashAmino): EventSlash;
    toAmino(message: EventSlash): EventSlashAmino;
    fromAminoMsg(object: EventSlashAminoMsg): EventSlash;
    fromProtoMsg(message: EventSlashProtoMsg): EventSlash;
    toProto(message: EventSlash): Uint8Array;
    toProtoMsg(message: EventSlash): EventSlashProtoMsg;
};
