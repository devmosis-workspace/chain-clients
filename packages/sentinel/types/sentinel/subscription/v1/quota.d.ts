import { BinaryWriter } from "../../../binary";
export interface Quota {
    address: string;
    allocated: string;
    consumed: string;
}
export interface QuotaProtoMsg {
    typeUrl: "/sentinel.subscription.v1.Quota";
    value: Uint8Array;
}
export interface QuotaAmino {
    address?: string;
    allocated?: string;
    consumed?: string;
}
export interface QuotaAminoMsg {
    type: "/sentinel.subscription.v1.Quota";
    value: QuotaAmino;
}
export interface QuotaSDKType {
    address: string;
    allocated: string;
    consumed: string;
}
export declare const Quota: {
    typeUrl: string;
    encode(message: Quota, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Quota;
    fromPartial(object: Partial<Quota>): Quota;
    fromAmino(object: QuotaAmino): Quota;
    toAmino(message: Quota): QuotaAmino;
    fromAminoMsg(object: QuotaAminoMsg): Quota;
    fromProtoMsg(message: QuotaProtoMsg): Quota;
    toProto(message: Quota): Uint8Array;
    toProtoMsg(message: Quota): QuotaProtoMsg;
};
