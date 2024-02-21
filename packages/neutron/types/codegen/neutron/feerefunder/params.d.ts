import { Fee, FeeAmino, FeeSDKType } from "./fee";
import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    minFee: Fee;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.feerefunder.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    min_fee?: FeeAmino;
}
export interface ParamsAminoMsg {
    type: "/neutron.feerefunder.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    min_fee: FeeSDKType;
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
