import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
     * behalf of interchain account
     */
    minTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
    typeUrl: "/chainmain.icaauth.v1.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
     * behalf of interchain account
     */
    minTimeoutDuration?: DurationAmino;
}
export interface ParamsAminoMsg {
    type: "/chainmain.icaauth.v1.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    minTimeoutDuration: DurationSDKType;
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
