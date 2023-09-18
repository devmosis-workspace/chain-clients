import { BinaryWriter } from "../../../../binary";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Metadata;
}
export interface SnapshotProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot";
    value: Uint8Array;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotAmino {
    height: string;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: MetadataAmino;
}
export interface SnapshotAminoMsg {
    type: "cosmos-sdk/Snapshot";
    value: SnapshotAmino;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
    /** SHA-256 chunk hashes */
    chunkHashes: Uint8Array[];
}
export interface MetadataProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata";
    value: Uint8Array;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataAmino {
    /** SHA-256 chunk hashes */
    chunk_hashes: Uint8Array[];
}
export interface MetadataAminoMsg {
    type: "cosmos-sdk/Metadata";
    value: MetadataAmino;
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
    appVersion?: SnapshotAppVersion;
}
export interface SnapshotItemProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem";
    value: Uint8Array;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemAmino {
    store?: SnapshotStoreItemAmino;
    iavl?: SnapshotIAVLItemAmino;
    extension?: SnapshotExtensionMetaAmino;
    extension_payload?: SnapshotExtensionPayloadAmino;
    app_version?: SnapshotAppVersionAmino;
}
export interface SnapshotItemAminoMsg {
    type: "cosmos-sdk/SnapshotItem";
    value: SnapshotItemAmino;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemSDKType {
    store?: SnapshotStoreItemSDKType;
    iavl?: SnapshotIAVLItemSDKType;
    extension?: SnapshotExtensionMetaSDKType;
    extension_payload?: SnapshotExtensionPayloadSDKType;
    app_version?: SnapshotAppVersionSDKType;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
    name: string;
}
export interface SnapshotStoreItemProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem";
    value: Uint8Array;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItemAmino {
    name: string;
}
export interface SnapshotStoreItemAminoMsg {
    type: "cosmos-sdk/SnapshotStoreItem";
    value: SnapshotStoreItemAmino;
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
    version: bigint;
    /** height is depth of the tree. */
    height: number;
}
export interface SnapshotIAVLItemProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem";
    value: Uint8Array;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemAmino {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: string;
    /** height is depth of the tree. */
    height: number;
}
export interface SnapshotIAVLItemAminoMsg {
    type: "cosmos-sdk/SnapshotIAVLItem";
    value: SnapshotIAVLItemAmino;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemSDKType {
    key: Uint8Array;
    value: Uint8Array;
    version: bigint;
    height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
export interface SnapshotExtensionMetaProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta";
    value: Uint8Array;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMetaAmino {
    name: string;
    format: number;
}
export interface SnapshotExtensionMetaAminoMsg {
    type: "cosmos-sdk/SnapshotExtensionMeta";
    value: SnapshotExtensionMetaAmino;
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
export interface SnapshotExtensionPayloadProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload";
    value: Uint8Array;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadAmino {
    payload: Uint8Array;
}
export interface SnapshotExtensionPayloadAminoMsg {
    type: "cosmos-sdk/SnapshotExtensionPayload";
    value: SnapshotExtensionPayloadAmino;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadSDKType {
    payload: Uint8Array;
}
/** SnapshotAppVersion contains the app version. */
export interface SnapshotAppVersion {
    version: bigint;
}
export interface SnapshotAppVersionProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotAppVersion";
    value: Uint8Array;
}
/** SnapshotAppVersion contains the app version. */
export interface SnapshotAppVersionAmino {
    version: string;
}
export interface SnapshotAppVersionAminoMsg {
    type: "cosmos-sdk/SnapshotAppVersion";
    value: SnapshotAppVersionAmino;
}
/** SnapshotAppVersion contains the app version. */
export interface SnapshotAppVersionSDKType {
    version: bigint;
}
export declare const Snapshot: {
    typeUrl: string;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Snapshot;
    fromPartial(object: Partial<Snapshot>): Snapshot;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    toAminoMsg(message: Snapshot): SnapshotAminoMsg;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
export declare const Metadata: {
    typeUrl: string;
    encode(message: Metadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Metadata;
    fromPartial(object: Partial<Metadata>): Metadata;
    fromAmino(object: MetadataAmino): Metadata;
    toAmino(message: Metadata): MetadataAmino;
    fromAminoMsg(object: MetadataAminoMsg): Metadata;
    toAminoMsg(message: Metadata): MetadataAminoMsg;
    fromProtoMsg(message: MetadataProtoMsg): Metadata;
    toProto(message: Metadata): Uint8Array;
    toProtoMsg(message: Metadata): MetadataProtoMsg;
};
export declare const SnapshotItem: {
    typeUrl: string;
    encode(message: SnapshotItem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotItem;
    fromPartial(object: Partial<SnapshotItem>): SnapshotItem;
    fromAmino(object: SnapshotItemAmino): SnapshotItem;
    toAmino(message: SnapshotItem): SnapshotItemAmino;
    fromAminoMsg(object: SnapshotItemAminoMsg): SnapshotItem;
    toAminoMsg(message: SnapshotItem): SnapshotItemAminoMsg;
    fromProtoMsg(message: SnapshotItemProtoMsg): SnapshotItem;
    toProto(message: SnapshotItem): Uint8Array;
    toProtoMsg(message: SnapshotItem): SnapshotItemProtoMsg;
};
export declare const SnapshotStoreItem: {
    typeUrl: string;
    encode(message: SnapshotStoreItem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotStoreItem;
    fromPartial(object: Partial<SnapshotStoreItem>): SnapshotStoreItem;
    fromAmino(object: SnapshotStoreItemAmino): SnapshotStoreItem;
    toAmino(message: SnapshotStoreItem): SnapshotStoreItemAmino;
    fromAminoMsg(object: SnapshotStoreItemAminoMsg): SnapshotStoreItem;
    toAminoMsg(message: SnapshotStoreItem): SnapshotStoreItemAminoMsg;
    fromProtoMsg(message: SnapshotStoreItemProtoMsg): SnapshotStoreItem;
    toProto(message: SnapshotStoreItem): Uint8Array;
    toProtoMsg(message: SnapshotStoreItem): SnapshotStoreItemProtoMsg;
};
export declare const SnapshotIAVLItem: {
    typeUrl: string;
    encode(message: SnapshotIAVLItem, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotIAVLItem;
    fromPartial(object: Partial<SnapshotIAVLItem>): SnapshotIAVLItem;
    fromAmino(object: SnapshotIAVLItemAmino): SnapshotIAVLItem;
    toAmino(message: SnapshotIAVLItem): SnapshotIAVLItemAmino;
    fromAminoMsg(object: SnapshotIAVLItemAminoMsg): SnapshotIAVLItem;
    toAminoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemAminoMsg;
    fromProtoMsg(message: SnapshotIAVLItemProtoMsg): SnapshotIAVLItem;
    toProto(message: SnapshotIAVLItem): Uint8Array;
    toProtoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemProtoMsg;
};
export declare const SnapshotExtensionMeta: {
    typeUrl: string;
    encode(message: SnapshotExtensionMeta, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotExtensionMeta;
    fromPartial(object: Partial<SnapshotExtensionMeta>): SnapshotExtensionMeta;
    fromAmino(object: SnapshotExtensionMetaAmino): SnapshotExtensionMeta;
    toAmino(message: SnapshotExtensionMeta): SnapshotExtensionMetaAmino;
    fromAminoMsg(object: SnapshotExtensionMetaAminoMsg): SnapshotExtensionMeta;
    toAminoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaAminoMsg;
    fromProtoMsg(message: SnapshotExtensionMetaProtoMsg): SnapshotExtensionMeta;
    toProto(message: SnapshotExtensionMeta): Uint8Array;
    toProtoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaProtoMsg;
};
export declare const SnapshotExtensionPayload: {
    typeUrl: string;
    encode(message: SnapshotExtensionPayload, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotExtensionPayload;
    fromPartial(object: Partial<SnapshotExtensionPayload>): SnapshotExtensionPayload;
    fromAmino(object: SnapshotExtensionPayloadAmino): SnapshotExtensionPayload;
    toAmino(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAmino;
    fromAminoMsg(object: SnapshotExtensionPayloadAminoMsg): SnapshotExtensionPayload;
    toAminoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAminoMsg;
    fromProtoMsg(message: SnapshotExtensionPayloadProtoMsg): SnapshotExtensionPayload;
    toProto(message: SnapshotExtensionPayload): Uint8Array;
    toProtoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadProtoMsg;
};
export declare const SnapshotAppVersion: {
    typeUrl: string;
    encode(message: SnapshotAppVersion, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotAppVersion;
    fromPartial(object: Partial<SnapshotAppVersion>): SnapshotAppVersion;
    fromAmino(object: SnapshotAppVersionAmino): SnapshotAppVersion;
    toAmino(message: SnapshotAppVersion): SnapshotAppVersionAmino;
    fromAminoMsg(object: SnapshotAppVersionAminoMsg): SnapshotAppVersion;
    toAminoMsg(message: SnapshotAppVersion): SnapshotAppVersionAminoMsg;
    fromProtoMsg(message: SnapshotAppVersionProtoMsg): SnapshotAppVersion;
    toProto(message: SnapshotAppVersion): Uint8Array;
    toProtoMsg(message: SnapshotAppVersion): SnapshotAppVersionProtoMsg;
};
