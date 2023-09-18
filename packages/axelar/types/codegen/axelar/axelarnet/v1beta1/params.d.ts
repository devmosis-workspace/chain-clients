import { BinaryWriter } from "../../../binary";
/** Params represent the genesis parameters for the module */
export interface Params {
    /** IBC packet route timeout window */
    routeTimeoutWindow: bigint;
    transferLimit: bigint;
    endBlockerLimit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.Params";
    value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
    /** IBC packet route timeout window */
    route_timeout_window: string;
    transfer_limit: string;
    end_blocker_limit: string;
}
export interface ParamsAminoMsg {
    type: "/axelar.axelarnet.v1beta1.Params";
    value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    route_timeout_window: bigint;
    transfer_limit: bigint;
    end_blocker_limit: bigint;
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
