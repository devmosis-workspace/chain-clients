import { BinaryWriter } from "../../../binary";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
    switchStatus: string;
    pauserAddress: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/secret.emergencybutton.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
    switch_status?: string;
    pauser_address?: string;
}
export interface ParamsAminoMsg {
    type: "/secret.emergencybutton.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
    switch_status: string;
    pauser_address: string;
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
