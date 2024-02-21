import { BinaryWriter } from "../../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /** Security address that can remove schedules */
    securityAddress: string;
    /** Limit of schedules executed in one block */
    limit: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.cron.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /** Security address that can remove schedules */
    security_address?: string;
    /** Limit of schedules executed in one block */
    limit?: string;
}
export interface ParamsAminoMsg {
    type: "/neutron.cron.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    security_address: string;
    limit: bigint;
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
