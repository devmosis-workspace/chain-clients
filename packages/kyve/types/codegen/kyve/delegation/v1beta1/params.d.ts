import { BinaryWriter } from "../../../binary";
/** Params defines the delegation module parameters. */
export interface Params {
    /** unbonding_delegation_time ... */
    unbondingDelegationTime: bigint;
    /** unbonding_delegation_time ... */
    redelegationCooldown: bigint;
    /** unbonding_delegation_time ... */
    redelegationMaxAmount: bigint;
    /** vote_slash ... */
    voteSlash: string;
    /** upload_slash ... */
    uploadSlash: string;
    /** timeout_slash ... */
    timeoutSlash: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.delegation.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the delegation module parameters. */
export interface ParamsAmino {
    /** unbonding_delegation_time ... */
    unbonding_delegation_time: string;
    /** unbonding_delegation_time ... */
    redelegation_cooldown: string;
    /** unbonding_delegation_time ... */
    redelegation_max_amount: string;
    /** vote_slash ... */
    vote_slash: string;
    /** upload_slash ... */
    upload_slash: string;
    /** timeout_slash ... */
    timeout_slash: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.delegation.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the delegation module parameters. */
export interface ParamsSDKType {
    unbonding_delegation_time: bigint;
    redelegation_cooldown: bigint;
    redelegation_max_amount: bigint;
    vote_slash: string;
    upload_slash: string;
    timeout_slash: string;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
