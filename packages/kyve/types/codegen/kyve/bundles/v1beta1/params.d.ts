import { BinaryWriter } from "../../../binary";
/** Params defines the bundles module parameters. */
export interface Params {
    /** upload_timeout ... */
    uploadTimeout: bigint;
    /** storage_cost ... */
    storageCost: string;
    /** network_fee ... */
    networkFee: string;
    /** max_points ... */
    maxPoints: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.bundles.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the bundles module parameters. */
export interface ParamsAmino {
    /** upload_timeout ... */
    upload_timeout?: string;
    /** storage_cost ... */
    storage_cost?: string;
    /** network_fee ... */
    network_fee?: string;
    /** max_points ... */
    max_points?: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.bundles.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the bundles module parameters. */
export interface ParamsSDKType {
    upload_timeout: bigint;
    storage_cost: string;
    network_fee: string;
    max_points: bigint;
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
