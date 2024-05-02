import { BinaryWriter } from "../../../binary";
export interface Allocation {
    id: bigint;
    address: string;
    grantedBytes: string;
    utilisedBytes: string;
}
export interface AllocationProtoMsg {
    typeUrl: "/sentinel.subscription.v2.Allocation";
    value: Uint8Array;
}
export interface AllocationAmino {
    id?: string;
    address?: string;
    granted_bytes?: string;
    utilised_bytes?: string;
}
export interface AllocationAminoMsg {
    type: "/sentinel.subscription.v2.Allocation";
    value: AllocationAmino;
}
export interface AllocationSDKType {
    id: bigint;
    address: string;
    granted_bytes: string;
    utilised_bytes: string;
}
export declare const Allocation: {
    typeUrl: string;
    encode(message: Allocation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Allocation;
    fromPartial(object: Partial<Allocation>): Allocation;
    fromAmino(object: AllocationAmino): Allocation;
    toAmino(message: Allocation): AllocationAmino;
    fromAminoMsg(object: AllocationAminoMsg): Allocation;
    fromProtoMsg(message: AllocationProtoMsg): Allocation;
    toProto(message: Allocation): Uint8Array;
    toProtoMsg(message: Allocation): AllocationProtoMsg;
};
