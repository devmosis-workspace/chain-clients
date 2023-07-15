import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: Metadata;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
    /** SHA-256 chunk hashes */
    chunkHashes: Uint8Array[];
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
    chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
    store?: SnapshotStoreItem;
    iavl?: SnapshotIAVLItem;
    extension?: SnapshotExtensionMeta;
    extensionPayload?: SnapshotExtensionPayload;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemSDKType {
    store?: SnapshotStoreItemSDKType;
    iavl?: SnapshotIAVLItemSDKType;
    extension?: SnapshotExtensionMetaSDKType;
    extension_payload?: SnapshotExtensionPayloadSDKType;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
    name: string;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItemSDKType {
    name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: Long;
    /** height is depth of the tree. */
    height: number;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemSDKType {
    key: Uint8Array;
    value: Uint8Array;
    version: Long;
    height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMetaSDKType {
    name: string;
    format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
    payload: Uint8Array;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadSDKType {
    payload: Uint8Array;
}
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Metadata;
    fromPartial(object: Partial<Metadata>): Metadata;
};
export declare const SnapshotItem: {
    encode(message: SnapshotItem, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotItem;
    fromPartial(object: Partial<SnapshotItem>): SnapshotItem;
};
export declare const SnapshotStoreItem: {
    encode(message: SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotStoreItem;
    fromPartial(object: Partial<SnapshotStoreItem>): SnapshotStoreItem;
};
export declare const SnapshotIAVLItem: {
    encode(message: SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotIAVLItem;
    fromPartial(object: Partial<SnapshotIAVLItem>): SnapshotIAVLItem;
};
export declare const SnapshotExtensionMeta: {
    encode(message: SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotExtensionMeta;
    fromPartial(object: Partial<SnapshotExtensionMeta>): SnapshotExtensionMeta;
};
export declare const SnapshotExtensionPayload: {
    encode(message: SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotExtensionPayload;
    fromPartial(object: Partial<SnapshotExtensionPayload>): SnapshotExtensionPayload;
};
