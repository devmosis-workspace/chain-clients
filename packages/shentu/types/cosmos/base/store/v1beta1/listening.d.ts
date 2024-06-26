import { BinaryWriter } from "../../../../binary";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair";
    value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
    /** the store key for the KVStore this pair originates from */
    store_key?: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete?: boolean;
    key?: string;
    value?: string;
}
export interface StoreKVPairAminoMsg {
    type: "cosmos-sdk/StoreKVPair";
    value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
    store_key: string;
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    typeUrl: string;
    encode(message: StoreKVPair, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StoreKVPair;
    fromPartial(object: Partial<StoreKVPair>): StoreKVPair;
    fromAmino(object: StoreKVPairAmino): StoreKVPair;
    toAmino(message: StoreKVPair): StoreKVPairAmino;
    fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair;
    toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg;
    fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair;
    toProto(message: StoreKVPair): Uint8Array;
    toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg;
};
