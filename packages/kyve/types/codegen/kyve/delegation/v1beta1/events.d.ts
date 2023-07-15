import { Params, ParamsSDKType } from "./params";
import { SlashType } from "./delegation";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams?: Params;
    /** new_params is the module's new parameters. */
    newParams?: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params?: ParamsSDKType;
    new_params?: ParamsSDKType;
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
    amount: Long;
}
/**
 * EventDelegate is an event emitted when someone delegates to a protocol node.
 * emitted_by: MsgDelegate
 */
export interface EventDelegateSDKType {
    address: string;
    staker: string;
    amount: Long;
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
    amount: Long;
    /**
     * estimated_undelegation_date is the date in UNIX seconds on when the undelegation will be performed.
     * Note, this number will be incorrect if a governance proposal changes `UnbondingDelegationTime` while unbonding.
     */
    estimatedUndelegationDate: Long;
}
/**
 * EventStartUndelegation is an event emitted when someone starts an undelegation from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventStartUndelegationSDKType {
    address: string;
    staker: string;
    amount: Long;
    estimated_undelegation_date: Long;
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
    amount: Long;
}
/**
 * EventUndelegate is an event emitted when someone undelegates from a protocol node.
 * emitted_by: EndBlock
 */
export interface EventUndelegateSDKType {
    address: string;
    staker: string;
    amount: Long;
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
    amount: Long;
}
/**
 * EventRedelegate is an event emitted when someone redelegates from one protocol node to another.
 * emitted_by: MsgRedelegate
 */
export interface EventRedelegateSDKType {
    address: string;
    from_staker: string;
    to_staker: string;
    amount: Long;
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
    amount: Long;
}
/**
 * EventWithdrawRewards ...
 * emitted_by: MsgRedelegate, MsgDelegate, MsgWithdrawRewards, EndBlock
 */
export interface EventWithdrawRewardsSDKType {
    address: string;
    staker: string;
    amount: Long;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlash {
    /** pool_id is the unique ID of the pool. */
    poolId: Long;
    /** staker is the account address of the protocol node. */
    staker: string;
    /** amount ... */
    amount: Long;
    /** slash_type */
    slashType: SlashType;
}
/**
 * EventSlash is an event emitted when a protocol node is slashed.
 * emitted_by: MsgSubmitBundleProposal, EndBlock
 */
export interface EventSlashSDKType {
    pool_id: Long;
    staker: string;
    amount: Long;
    slash_type: SlashType;
}
export declare const EventUpdateParams: {
    encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
};
export declare const EventDelegate: {
    encode(message: EventDelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDelegate;
    fromPartial(object: Partial<EventDelegate>): EventDelegate;
};
export declare const EventStartUndelegation: {
    encode(message: EventStartUndelegation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventStartUndelegation;
    fromPartial(object: Partial<EventStartUndelegation>): EventStartUndelegation;
};
export declare const EventUndelegate: {
    encode(message: EventUndelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUndelegate;
    fromPartial(object: Partial<EventUndelegate>): EventUndelegate;
};
export declare const EventRedelegate: {
    encode(message: EventRedelegate, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRedelegate;
    fromPartial(object: Partial<EventRedelegate>): EventRedelegate;
};
export declare const EventWithdrawRewards: {
    encode(message: EventWithdrawRewards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventWithdrawRewards;
    fromPartial(object: Partial<EventWithdrawRewards>): EventWithdrawRewards;
};
export declare const EventSlash: {
    encode(message: EventSlash, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSlash;
    fromPartial(object: Partial<EventSlash>): EventSlash;
};
