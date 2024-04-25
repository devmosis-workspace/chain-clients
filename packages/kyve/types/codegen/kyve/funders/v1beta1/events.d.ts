import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
    typeUrl: "/kyve.funders.v1beta1.EventUpdateParams";
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
    payload?: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.funders.v1beta1.EventUpdateParams";
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
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunder {
    /** address is the account address of the funder. */
    address: string;
    /** moniker ... */
    moniker: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** website ... */
    website: string;
    /** contact ... */
    contact: string;
    /** description are some additional notes the funder finds important */
    description: string;
}
export interface EventCreateFunderProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.EventCreateFunder";
    value: Uint8Array;
}
/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunderAmino {
    /** address is the account address of the funder. */
    address?: string;
    /** moniker ... */
    moniker?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** website ... */
    website?: string;
    /** contact ... */
    contact?: string;
    /** description are some additional notes the funder finds important */
    description?: string;
}
export interface EventCreateFunderAminoMsg {
    type: "/kyve.funders.v1beta1.EventCreateFunder";
    value: EventCreateFunderAmino;
}
/**
 * EventCreateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventCreateFunderSDKType {
    address: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunder {
    /** address is the account address of the funder. */
    address: string;
    /** moniker ... */
    moniker: string;
    /** identity is the 64 bit keybase.io identity string */
    identity: string;
    /** website ... */
    website: string;
    /** contact ... */
    contact: string;
    /** description are some additional notes the funder finds important */
    description: string;
}
export interface EventUpdateFunderProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.EventUpdateFunder";
    value: Uint8Array;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunderAmino {
    /** address is the account address of the funder. */
    address?: string;
    /** moniker ... */
    moniker?: string;
    /** identity is the 64 bit keybase.io identity string */
    identity?: string;
    /** website ... */
    website?: string;
    /** contact ... */
    contact?: string;
    /** description are some additional notes the funder finds important */
    description?: string;
}
export interface EventUpdateFunderAminoMsg {
    type: "/kyve.funders.v1beta1.EventUpdateFunder";
    value: EventUpdateFunderAmino;
}
/**
 * EventUpdateFunder is an event emitted when a funder is created.
 * emitted_by: MsgCreateFunder
 */
export interface EventUpdateFunderSDKType {
    address: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPool {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the funder has funded */
    amount: bigint;
    /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
    amountPerBundle: bigint;
}
export interface EventFundPoolProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.EventFundPool";
    value: Uint8Array;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id?: string;
    /** address is the account address of the pool funder. */
    address?: string;
    /** amount is the amount in ukyve the funder has funded */
    amount?: string;
    /** amount_per_bundle is the amount in ukyve the funder has funded per bundle */
    amount_per_bundle?: string;
}
export interface EventFundPoolAminoMsg {
    type: "/kyve.funders.v1beta1.EventFundPool";
    value: EventFundPoolAmino;
}
/**
 * EventFundPool is an event emitted when a pool is funded.
 * emitted_by: MsgFundPool
 */
export interface EventFundPoolSDKType {
    pool_id: bigint;
    address: string;
    amount: bigint;
    amount_per_bundle: bigint;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPool {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
    /** address is the account address of the pool funder. */
    address: string;
    /** amount is the amount in ukyve the funder has defunded */
    amount: bigint;
}
export interface EventDefundPoolProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.EventDefundPool";
    value: Uint8Array;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id?: string;
    /** address is the account address of the pool funder. */
    address?: string;
    /** amount is the amount in ukyve the funder has defunded */
    amount?: string;
}
export interface EventDefundPoolAminoMsg {
    type: "/kyve.funders.v1beta1.EventDefundPool";
    value: EventDefundPoolAmino;
}
/**
 * EventDefundPool is an event emitted when a pool is defunded.
 * emitted_by: MsgDefundPool
 */
export interface EventDefundPoolSDKType {
    pool_id: bigint;
    address: string;
    amount: bigint;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFunds {
    /** pool_id is the unique ID of the pool. */
    poolId: bigint;
}
export interface EventPoolOutOfFundsProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.EventPoolOutOfFunds";
    value: Uint8Array;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsAmino {
    /** pool_id is the unique ID of the pool. */
    pool_id?: string;
}
export interface EventPoolOutOfFundsAminoMsg {
    type: "/kyve.funders.v1beta1.EventPoolOutOfFunds";
    value: EventPoolOutOfFundsAmino;
}
/**
 * EventPoolOutOfFunds is an event emitted when a pool has run out of funds
 * emitted_by: MsgSubmitBundleProposal
 */
export interface EventPoolOutOfFundsSDKType {
    pool_id: bigint;
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
export declare const EventCreateFunder: {
    typeUrl: string;
    encode(message: EventCreateFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateFunder;
    fromPartial(object: Partial<EventCreateFunder>): EventCreateFunder;
    fromAmino(object: EventCreateFunderAmino): EventCreateFunder;
    toAmino(message: EventCreateFunder): EventCreateFunderAmino;
    fromAminoMsg(object: EventCreateFunderAminoMsg): EventCreateFunder;
    fromProtoMsg(message: EventCreateFunderProtoMsg): EventCreateFunder;
    toProto(message: EventCreateFunder): Uint8Array;
    toProtoMsg(message: EventCreateFunder): EventCreateFunderProtoMsg;
};
export declare const EventUpdateFunder: {
    typeUrl: string;
    encode(message: EventUpdateFunder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateFunder;
    fromPartial(object: Partial<EventUpdateFunder>): EventUpdateFunder;
    fromAmino(object: EventUpdateFunderAmino): EventUpdateFunder;
    toAmino(message: EventUpdateFunder): EventUpdateFunderAmino;
    fromAminoMsg(object: EventUpdateFunderAminoMsg): EventUpdateFunder;
    fromProtoMsg(message: EventUpdateFunderProtoMsg): EventUpdateFunder;
    toProto(message: EventUpdateFunder): Uint8Array;
    toProtoMsg(message: EventUpdateFunder): EventUpdateFunderProtoMsg;
};
export declare const EventFundPool: {
    typeUrl: string;
    encode(message: EventFundPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventFundPool;
    fromPartial(object: Partial<EventFundPool>): EventFundPool;
    fromAmino(object: EventFundPoolAmino): EventFundPool;
    toAmino(message: EventFundPool): EventFundPoolAmino;
    fromAminoMsg(object: EventFundPoolAminoMsg): EventFundPool;
    fromProtoMsg(message: EventFundPoolProtoMsg): EventFundPool;
    toProto(message: EventFundPool): Uint8Array;
    toProtoMsg(message: EventFundPool): EventFundPoolProtoMsg;
};
export declare const EventDefundPool: {
    typeUrl: string;
    encode(message: EventDefundPool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDefundPool;
    fromPartial(object: Partial<EventDefundPool>): EventDefundPool;
    fromAmino(object: EventDefundPoolAmino): EventDefundPool;
    toAmino(message: EventDefundPool): EventDefundPoolAmino;
    fromAminoMsg(object: EventDefundPoolAminoMsg): EventDefundPool;
    fromProtoMsg(message: EventDefundPoolProtoMsg): EventDefundPool;
    toProto(message: EventDefundPool): Uint8Array;
    toProtoMsg(message: EventDefundPool): EventDefundPoolProtoMsg;
};
export declare const EventPoolOutOfFunds: {
    typeUrl: string;
    encode(message: EventPoolOutOfFunds, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventPoolOutOfFunds;
    fromPartial(object: Partial<EventPoolOutOfFunds>): EventPoolOutOfFunds;
    fromAmino(object: EventPoolOutOfFundsAmino): EventPoolOutOfFunds;
    toAmino(message: EventPoolOutOfFunds): EventPoolOutOfFundsAmino;
    fromAminoMsg(object: EventPoolOutOfFundsAminoMsg): EventPoolOutOfFunds;
    fromProtoMsg(message: EventPoolOutOfFundsProtoMsg): EventPoolOutOfFunds;
    toProto(message: EventPoolOutOfFunds): Uint8Array;
    toProtoMsg(message: EventPoolOutOfFunds): EventPoolOutOfFundsProtoMsg;
};
