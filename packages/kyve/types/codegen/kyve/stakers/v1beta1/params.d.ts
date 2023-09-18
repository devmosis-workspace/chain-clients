import { BinaryWriter } from "../../../binary";
/** Params defines the stakers module parameters. */
export interface Params {
    /** commission_change_time ... */
    commissionChangeTime: bigint;
    /** commission_change_time ... */
    leavePoolTime: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.stakers.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the stakers module parameters. */
export interface ParamsAmino {
    /** commission_change_time ... */
    commission_change_time: string;
    /** commission_change_time ... */
    leave_pool_time: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.stakers.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the stakers module parameters. */
export interface ParamsSDKType {
    commission_change_time: bigint;
    leave_pool_time: bigint;
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
