import { PairID, PairIDAmino, PairIDSDKType } from "./pair_id";
import { BinaryWriter } from "../../binary";
export interface PoolMetadata {
    id: bigint;
    tick: bigint;
    fee: bigint;
    pairId?: PairID;
}
export interface PoolMetadataProtoMsg {
    typeUrl: "/neutron.dex.PoolMetadata";
    value: Uint8Array;
}
export interface PoolMetadataAmino {
    id?: string;
    tick?: string;
    fee?: string;
    pair_id?: PairIDAmino;
}
export interface PoolMetadataAminoMsg {
    type: "/neutron.dex.PoolMetadata";
    value: PoolMetadataAmino;
}
export interface PoolMetadataSDKType {
    id: bigint;
    tick: bigint;
    fee: bigint;
    pair_id?: PairIDSDKType;
}
export declare const PoolMetadata: {
    typeUrl: string;
    encode(message: PoolMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PoolMetadata;
    fromPartial(object: Partial<PoolMetadata>): PoolMetadata;
    fromAmino(object: PoolMetadataAmino): PoolMetadata;
    toAmino(message: PoolMetadata): PoolMetadataAmino;
    fromAminoMsg(object: PoolMetadataAminoMsg): PoolMetadata;
    fromProtoMsg(message: PoolMetadataProtoMsg): PoolMetadata;
    toProto(message: PoolMetadata): Uint8Array;
    toProtoMsg(message: PoolMetadata): PoolMetadataProtoMsg;
};
