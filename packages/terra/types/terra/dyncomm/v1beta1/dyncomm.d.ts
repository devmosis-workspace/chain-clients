import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the dyncomm module. */
export interface Params {
    maxZero: string;
    slopeBase: string;
    slopeVpImpact: string;
    cap: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/terra.dyncomm.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the dyncomm module. */
export interface ParamsAmino {
    max_zero?: string;
    slope_base?: string;
    slope_vp_impact?: string;
    cap?: string;
}
export interface ParamsAminoMsg {
    type: "/terra.dyncomm.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the dyncomm module. */
export interface ParamsSDKType {
    max_zero: string;
    slope_base: string;
    slope_vp_impact: string;
    cap: string;
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
