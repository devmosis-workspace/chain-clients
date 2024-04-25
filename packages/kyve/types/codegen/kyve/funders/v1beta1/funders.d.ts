import { BinaryWriter } from "../../../binary";
/** Funder is the object which holds info about a single pool funder */
export interface Funder {
    /** address ... */
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
export interface FunderProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.Funder";
    value: Uint8Array;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderAmino {
    /** address ... */
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
export interface FunderAminoMsg {
    type: "/kyve.funders.v1beta1.Funder";
    value: FunderAmino;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderSDKType {
    address: string;
    moniker: string;
    identity: string;
    website: string;
    contact: string;
    description: string;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface Funding {
    /** funder_id is the id of the funder */
    funderAddress: string;
    /** pool_id is the id of the pool this funding is for */
    poolId: bigint;
    /** amount is the amount of funds in ukyve the funder has left */
    amount: bigint;
    /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
    amountPerBundle: bigint;
    /** total_funded is the total amount of funds in ukyve the funder has funded */
    totalFunded: bigint;
}
export interface FundingProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.Funding";
    value: Uint8Array;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface FundingAmino {
    /** funder_id is the id of the funder */
    funder_address?: string;
    /** pool_id is the id of the pool this funding is for */
    pool_id?: string;
    /** amount is the amount of funds in ukyve the funder has left */
    amount?: string;
    /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
    amount_per_bundle?: string;
    /** total_funded is the total amount of funds in ukyve the funder has funded */
    total_funded?: string;
}
export interface FundingAminoMsg {
    type: "/kyve.funders.v1beta1.Funding";
    value: FundingAmino;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface FundingSDKType {
    funder_address: string;
    pool_id: bigint;
    amount: bigint;
    amount_per_bundle: bigint;
    total_funded: bigint;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingState {
    /** pool_id is the id of the pool this funding is for */
    poolId: bigint;
    /** active_funder_addresses is the list of all active fundings */
    activeFunderAddresses: string[];
}
export interface FundingStateProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.FundingState";
    value: Uint8Array;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingStateAmino {
    /** pool_id is the id of the pool this funding is for */
    pool_id?: string;
    /** active_funder_addresses is the list of all active fundings */
    active_funder_addresses?: string[];
}
export interface FundingStateAminoMsg {
    type: "/kyve.funders.v1beta1.FundingState";
    value: FundingStateAmino;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingStateSDKType {
    pool_id: bigint;
    active_funder_addresses: string[];
}
export declare const Funder: {
    typeUrl: string;
    encode(message: Funder, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funder;
    fromPartial(object: Partial<Funder>): Funder;
    fromAmino(object: FunderAmino): Funder;
    toAmino(message: Funder): FunderAmino;
    fromAminoMsg(object: FunderAminoMsg): Funder;
    fromProtoMsg(message: FunderProtoMsg): Funder;
    toProto(message: Funder): Uint8Array;
    toProtoMsg(message: Funder): FunderProtoMsg;
};
export declare const Funding: {
    typeUrl: string;
    encode(message: Funding, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Funding;
    fromPartial(object: Partial<Funding>): Funding;
    fromAmino(object: FundingAmino): Funding;
    toAmino(message: Funding): FundingAmino;
    fromAminoMsg(object: FundingAminoMsg): Funding;
    fromProtoMsg(message: FundingProtoMsg): Funding;
    toProto(message: Funding): Uint8Array;
    toProtoMsg(message: Funding): FundingProtoMsg;
};
export declare const FundingState: {
    typeUrl: string;
    encode(message: FundingState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FundingState;
    fromPartial(object: Partial<FundingState>): FundingState;
    fromAmino(object: FundingStateAmino): FundingState;
    toAmino(message: FundingState): FundingStateAmino;
    fromAminoMsg(object: FundingStateAminoMsg): FundingState;
    fromProtoMsg(message: FundingStateProtoMsg): FundingState;
    toProto(message: FundingState): Uint8Array;
    toProtoMsg(message: FundingState): FundingStateProtoMsg;
};
