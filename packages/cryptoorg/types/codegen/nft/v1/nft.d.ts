import * as _m0 from "protobufjs/minimal";
/** BaseNFT defines a non-fungible token */
export interface BaseNFT {
    id: string;
    name: string;
    uri: string;
    data: string;
    owner: string;
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
/** Owner defines a type of owner */
export interface OwnerSDKType {
    address: string;
    id_collections: IDCollectionSDKType[];
}
/** Collection defines a type of collection */
export interface Collection {
    denom?: Denom;
    nfts: BaseNFT[];
}
/** Collection defines a type of collection */
export interface CollectionSDKType {
    denom?: DenomSDKType;
    nfts: BaseNFTSDKType[];
}
export declare const BaseNFT: {
    encode(message: BaseNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BaseNFT;
    fromPartial(object: Partial<BaseNFT>): BaseNFT;
};
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Denom;
    fromPartial(object: Partial<Denom>): Denom;
};
export declare const IDCollection: {
    encode(message: IDCollection, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IDCollection;
    fromPartial(object: Partial<IDCollection>): IDCollection;
};
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Owner;
    fromPartial(object: Partial<Owner>): Owner;
};
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Collection;
    fromPartial(object: Partial<Collection>): Collection;
};
