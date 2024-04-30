import { BinaryWriter } from "../binary";
/** Params defines the parameters for the module. */
export interface Params {
    wasmHooksEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qtransfer.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    wasm_hooks_enabled?: boolean;
}
export interface ParamsAminoMsg {
    type: "/quasarlabs.quasarnode.qtransfer.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    wasm_hooks_enabled: boolean;
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
