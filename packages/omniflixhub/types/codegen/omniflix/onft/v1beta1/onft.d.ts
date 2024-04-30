import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** Collection */
export interface Collection {
    denom: Denom;
    onfts: ONFT[];
}
export interface CollectionProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.Collection";
    value: Uint8Array;
}
/** Collection */
export interface CollectionAmino {
    denom?: DenomAmino;
    onfts?: ONFTAmino[];
}
export interface CollectionAminoMsg {
    type: "/OmniFlix.onft.v1beta1.Collection";
    value: CollectionAmino;
}
/** Collection */
export interface CollectionSDKType {
    denom: DenomSDKType;
    onfts: ONFTSDKType[];
}
export interface IDCollection {
    denomId: string;
    onftIds: string[];
}
export interface IDCollectionProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.IDCollection";
    value: Uint8Array;
}
export interface IDCollectionAmino {
    denom_id?: string;
    onft_ids?: string[];
}
export interface IDCollectionAminoMsg {
    type: "/OmniFlix.onft.v1beta1.IDCollection";
    value: IDCollectionAmino;
}
export interface IDCollectionSDKType {
    denom_id: string;
    onft_ids: string[];
}
export interface Denom {
    id: string;
    symbol: string;
    name: string;
    schema: string;
    creator: string;
    description: string;
    previewUri: string;
    uri: string;
    uriHash: string;
    data: string;
    royaltyReceivers: WeightedAddress[];
}
export interface DenomProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.Denom";
    value: Uint8Array;
}
export interface DenomAmino {
    id?: string;
    symbol?: string;
    name?: string;
    schema?: string;
    creator?: string;
    description?: string;
    preview_uri?: string;
    uri?: string;
    uri_hash?: string;
    data?: string;
    royalty_receivers?: WeightedAddressAmino[];
}
export interface DenomAminoMsg {
    type: "/OmniFlix.onft.v1beta1.Denom";
    value: DenomAmino;
}
export interface DenomSDKType {
    id: string;
    symbol: string;
    name: string;
    schema: string;
    creator: string;
    description: string;
    preview_uri: string;
    uri: string;
    uri_hash: string;
    data: string;
    royalty_receivers: WeightedAddressSDKType[];
}
export interface DenomMetadata {
    creator: string;
    schema: string;
    description: string;
    previewUri: string;
    data: string;
    uriHash: string;
    royaltyReceivers: WeightedAddress[];
}
export interface DenomMetadataProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.DenomMetadata";
    value: Uint8Array;
}
export interface DenomMetadataAmino {
    creator?: string;
    schema?: string;
    description?: string;
    preview_uri?: string;
    data?: string;
    uri_hash?: string;
    royalty_receivers?: WeightedAddressAmino[];
}
export interface DenomMetadataAminoMsg {
    type: "/OmniFlix.onft.v1beta1.DenomMetadata";
    value: DenomMetadataAmino;
}
export interface DenomMetadataSDKType {
    creator: string;
    schema: string;
    description: string;
    preview_uri: string;
    data: string;
    uri_hash: string;
    royalty_receivers: WeightedAddressSDKType[];
}
/** ASSET or ONFT */
export interface ONFT {
    id: string;
    metadata: Metadata;
    data: string;
    owner: string;
    transferable: boolean;
    extensible: boolean;
    createdAt: Timestamp;
    nsfw: boolean;
    royaltyShare: string;
}
export interface ONFTProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.ONFT";
    value: Uint8Array;
}
/** ASSET or ONFT */
export interface ONFTAmino {
    id?: string;
    metadata?: MetadataAmino;
    data?: string;
    owner?: string;
    transferable?: boolean;
    extensible?: boolean;
    created_at?: string;
    nsfw?: boolean;
    royalty_share?: string;
}
export interface ONFTAminoMsg {
    type: "/OmniFlix.onft.v1beta1.ONFT";
    value: ONFTAmino;
}
/** ASSET or ONFT */
export interface ONFTSDKType {
    id: string;
    metadata: MetadataSDKType;
    data: string;
    owner: string;
    transferable: boolean;
    extensible: boolean;
    created_at: TimestampSDKType;
    nsfw: boolean;
    royalty_share: string;
}
export interface Metadata {
    name: string;
    description: string;
    mediaUri: string;
    previewUri: string;
    uriHash: string;
}
export interface MetadataProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.Metadata";
    value: Uint8Array;
}
export interface MetadataAmino {
    name?: string;
    description?: string;
    media_uri?: string;
    preview_uri?: string;
    uri_hash?: string;
}
export interface MetadataAminoMsg {
    type: "/OmniFlix.onft.v1beta1.Metadata";
    value: MetadataAmino;
}
export interface MetadataSDKType {
    name: string;
    description: string;
    media_uri: string;
    preview_uri: string;
    uri_hash: string;
}
export interface ONFTMetadata {
    name: string;
    description: string;
    previewUri: string;
    data: string;
    transferable: boolean;
    extensible: boolean;
    createdAt: Timestamp;
    nsfw: boolean;
    royaltyShare: string;
    uriHash: string;
}
export interface ONFTMetadataProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.ONFTMetadata";
    value: Uint8Array;
}
export interface ONFTMetadataAmino {
    name?: string;
    description?: string;
    preview_uri?: string;
    data?: string;
    transferable?: boolean;
    extensible?: boolean;
    created_at?: string;
    nsfw?: boolean;
    royalty_share?: string;
    uri_hash?: string;
}
export interface ONFTMetadataAminoMsg {
    type: "/OmniFlix.onft.v1beta1.ONFTMetadata";
    value: ONFTMetadataAmino;
}
export interface ONFTMetadataSDKType {
    name: string;
    description: string;
    preview_uri: string;
    data: string;
    transferable: boolean;
    extensible: boolean;
    created_at: TimestampSDKType;
    nsfw: boolean;
    royalty_share: string;
    uri_hash: string;
}
export interface Owner {
    address: string;
    idCollections: IDCollection[];
}
export interface OwnerProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.Owner";
    value: Uint8Array;
}
export interface OwnerAmino {
    address?: string;
    id_collections?: IDCollectionAmino[];
}
export interface OwnerAminoMsg {
    type: "/OmniFlix.onft.v1beta1.Owner";
    value: OwnerAmino;
}
export interface OwnerSDKType {
    address: string;
    id_collections: IDCollectionSDKType[];
}
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/OmniFlix.onft.v1beta1.WeightedAddress";
    value: Uint8Array;
}
export interface WeightedAddressAmino {
    address?: string;
    weight?: string;
}
export interface WeightedAddressAminoMsg {
    type: "/OmniFlix.onft.v1beta1.WeightedAddress";
    value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export declare const Collection: {
    typeUrl: string;
    encode(message: Collection, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Collection;
    fromPartial(object: Partial<Collection>): Collection;
    fromAmino(object: CollectionAmino): Collection;
    toAmino(message: Collection): CollectionAmino;
    fromAminoMsg(object: CollectionAminoMsg): Collection;
    fromProtoMsg(message: CollectionProtoMsg): Collection;
    toProto(message: Collection): Uint8Array;
    toProtoMsg(message: Collection): CollectionProtoMsg;
};
export declare const IDCollection: {
    typeUrl: string;
    encode(message: IDCollection, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IDCollection;
    fromPartial(object: Partial<IDCollection>): IDCollection;
    fromAmino(object: IDCollectionAmino): IDCollection;
    toAmino(message: IDCollection): IDCollectionAmino;
    fromAminoMsg(object: IDCollectionAminoMsg): IDCollection;
    fromProtoMsg(message: IDCollectionProtoMsg): IDCollection;
    toProto(message: IDCollection): Uint8Array;
    toProtoMsg(message: IDCollection): IDCollectionProtoMsg;
};
export declare const Denom: {
    typeUrl: string;
    encode(message: Denom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Denom;
    fromPartial(object: Partial<Denom>): Denom;
    fromAmino(object: DenomAmino): Denom;
    toAmino(message: Denom): DenomAmino;
    fromAminoMsg(object: DenomAminoMsg): Denom;
    fromProtoMsg(message: DenomProtoMsg): Denom;
    toProto(message: Denom): Uint8Array;
    toProtoMsg(message: Denom): DenomProtoMsg;
};
export declare const DenomMetadata: {
    typeUrl: string;
    encode(message: DenomMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DenomMetadata;
    fromPartial(object: Partial<DenomMetadata>): DenomMetadata;
    fromAmino(object: DenomMetadataAmino): DenomMetadata;
    toAmino(message: DenomMetadata): DenomMetadataAmino;
    fromAminoMsg(object: DenomMetadataAminoMsg): DenomMetadata;
    fromProtoMsg(message: DenomMetadataProtoMsg): DenomMetadata;
    toProto(message: DenomMetadata): Uint8Array;
    toProtoMsg(message: DenomMetadata): DenomMetadataProtoMsg;
};
export declare const ONFT: {
    typeUrl: string;
    encode(message: ONFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ONFT;
    fromPartial(object: Partial<ONFT>): ONFT;
    fromAmino(object: ONFTAmino): ONFT;
    toAmino(message: ONFT): ONFTAmino;
    fromAminoMsg(object: ONFTAminoMsg): ONFT;
    fromProtoMsg(message: ONFTProtoMsg): ONFT;
    toProto(message: ONFT): Uint8Array;
    toProtoMsg(message: ONFT): ONFTProtoMsg;
};
export declare const Metadata: {
    typeUrl: string;
    encode(message: Metadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Metadata;
    fromPartial(object: Partial<Metadata>): Metadata;
    fromAmino(object: MetadataAmino): Metadata;
    toAmino(message: Metadata): MetadataAmino;
    fromAminoMsg(object: MetadataAminoMsg): Metadata;
    fromProtoMsg(message: MetadataProtoMsg): Metadata;
    toProto(message: Metadata): Uint8Array;
    toProtoMsg(message: Metadata): MetadataProtoMsg;
};
export declare const ONFTMetadata: {
    typeUrl: string;
    encode(message: ONFTMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ONFTMetadata;
    fromPartial(object: Partial<ONFTMetadata>): ONFTMetadata;
    fromAmino(object: ONFTMetadataAmino): ONFTMetadata;
    toAmino(message: ONFTMetadata): ONFTMetadataAmino;
    fromAminoMsg(object: ONFTMetadataAminoMsg): ONFTMetadata;
    fromProtoMsg(message: ONFTMetadataProtoMsg): ONFTMetadata;
    toProto(message: ONFTMetadata): Uint8Array;
    toProtoMsg(message: ONFTMetadata): ONFTMetadataProtoMsg;
};
export declare const Owner: {
    typeUrl: string;
    encode(message: Owner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Owner;
    fromPartial(object: Partial<Owner>): Owner;
    fromAmino(object: OwnerAmino): Owner;
    toAmino(message: Owner): OwnerAmino;
    fromAminoMsg(object: OwnerAminoMsg): Owner;
    fromProtoMsg(message: OwnerProtoMsg): Owner;
    toProto(message: Owner): Uint8Array;
    toProtoMsg(message: Owner): OwnerProtoMsg;
};
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
