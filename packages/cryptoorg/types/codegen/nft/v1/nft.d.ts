import { BinaryWriter } from "../../binary";
/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
    id: string;
    name: string;
    uri: string;
    data: string;
    owner: string;
}
export interface BaseNFTProtoMsg {
    typeUrl: "/chainmain.nft.v1.BaseNFT";
    value: Uint8Array;
}
/** BaseNFT defines a non-fungible token */
export interface BaseNFTAmino {
    id: string;
    name: string;
    uri: string;
    data: string;
    owner: string;
}
export interface BaseNFTAminoMsg {
    type: "/chainmain.nft.v1.BaseNFT";
    value: BaseNFTAmino;
}
/** BaseNFT defines a non-fungible token */
export interface BaseNFTSDKType {
    id: string;
    name: string;
    uri: string;
    data: string;
    owner: string;
}
/** Denom defines a type of NFT */
export interface Denom {
    id: string;
    name: string;
    schema: string;
    creator: string;
    /**
     * This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is
     * needed for nft transfers
     */
    uri: string;
}
export interface DenomProtoMsg {
    typeUrl: "/chainmain.nft.v1.Denom";
    value: Uint8Array;
}
/** Denom defines a type of NFT */
export interface DenomAmino {
    id: string;
    name: string;
    schema: string;
    creator: string;
    /**
     * This was added because Cosmos SDK's native NFT module has uri as a parameter for class which is
     * needed for nft transfers
     */
    uri: string;
}
export interface DenomAminoMsg {
    type: "/chainmain.nft.v1.Denom";
    value: DenomAmino;
}
/** Denom defines a type of NFT */
export interface DenomSDKType {
    id: string;
    name: string;
    schema: string;
    creator: string;
    uri: string;
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollection {
    denomId: string;
    tokenIds: string[];
}
export interface IDCollectionProtoMsg {
    typeUrl: "/chainmain.nft.v1.IDCollection";
    value: Uint8Array;
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollectionAmino {
    denom_id: string;
    token_ids: string[];
}
export interface IDCollectionAminoMsg {
    type: "/chainmain.nft.v1.IDCollection";
    value: IDCollectionAmino;
}
/** IDCollection defines a type of collection with specified ID */
export interface IDCollectionSDKType {
    denom_id: string;
    token_ids: string[];
}
/** Owner defines a type of owner */
export interface Owner {
    address: string;
    idCollections: IDCollection[];
}
export interface OwnerProtoMsg {
    typeUrl: "/chainmain.nft.v1.Owner";
    value: Uint8Array;
}
/** Owner defines a type of owner */
export interface OwnerAmino {
    address: string;
    id_collections: IDCollectionAmino[];
}
export interface OwnerAminoMsg {
    type: "/chainmain.nft.v1.Owner";
    value: OwnerAmino;
}
/** Owner defines a type of owner */
export interface OwnerSDKType {
    address: string;
    id_collections: IDCollectionSDKType[];
}
/** Collection defines a type of collection */
export interface Collection {
    denom: Denom;
    nfts: BaseNFT[];
}
export interface CollectionProtoMsg {
    typeUrl: "/chainmain.nft.v1.Collection";
    value: Uint8Array;
}
/** Collection defines a type of collection */
export interface CollectionAmino {
    denom?: DenomAmino;
    nfts: BaseNFTAmino[];
}
export interface CollectionAminoMsg {
    type: "/chainmain.nft.v1.Collection";
    value: CollectionAmino;
}
/** Collection defines a type of collection */
export interface CollectionSDKType {
    denom: DenomSDKType;
    nfts: BaseNFTSDKType[];
}
export declare const BaseNFT: {
    typeUrl: string;
    encode(message: BaseNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseNFT;
    fromPartial(object: Partial<BaseNFT>): BaseNFT;
    fromAmino(object: BaseNFTAmino): BaseNFT;
    toAmino(message: BaseNFT): BaseNFTAmino;
    fromAminoMsg(object: BaseNFTAminoMsg): BaseNFT;
    fromProtoMsg(message: BaseNFTProtoMsg): BaseNFT;
    toProto(message: BaseNFT): Uint8Array;
    toProtoMsg(message: BaseNFT): BaseNFTProtoMsg;
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
