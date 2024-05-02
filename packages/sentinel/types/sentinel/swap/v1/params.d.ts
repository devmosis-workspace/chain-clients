import { BinaryWriter } from "../../../binary";
export interface Params {
    swapEnabled: boolean;
    swapDenom: string;
    approveBy: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/sentinel.swap.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    swap_enabled?: boolean;
    swap_denom?: string;
    approve_by?: string;
}
export interface ParamsAminoMsg {
    type: "/sentinel.swap.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    swap_enabled: boolean;
    swap_denom: string;
    approve_by: string;
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
