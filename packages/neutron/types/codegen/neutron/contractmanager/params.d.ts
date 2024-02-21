import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    sudoCallGasLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.contractmanager.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    sudo_call_gas_limit?: string;
}
export interface ParamsAminoMsg {
    type: "/neutron.contractmanager.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    sudo_call_gas_limit: bigint;
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
