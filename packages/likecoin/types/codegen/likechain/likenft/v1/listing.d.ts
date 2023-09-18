import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Listing {
    classId: string;
    nftId: string;
    seller: string;
    price: bigint;
    expiration: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface ListingProtoMsg {
    typeUrl: "/likechain.likenft.v1.Listing";
    value: Uint8Array;
}
export interface ListingAmino {
    class_id: string;
    nft_id: string;
    seller: string;
    price: string;
    expiration?: TimestampAmino;
    full_pay_to_royalty: boolean;
}
export interface ListingAminoMsg {
    type: "/likechain.likenft.v1.Listing";
    value: ListingAmino;
}
export interface ListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    price: bigint;
    expiration: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface ListingStoreRecord {
    classId: string;
    nftId: string;
    seller: Uint8Array;
    price: bigint;
    expiration: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface ListingStoreRecordProtoMsg {
    typeUrl: "/likechain.likenft.v1.ListingStoreRecord";
    value: Uint8Array;
}
export interface ListingStoreRecordAmino {
    class_id: string;
    nft_id: string;
    seller: Uint8Array;
    price: string;
    expiration?: TimestampAmino;
    full_pay_to_royalty: boolean;
}
export interface ListingStoreRecordAminoMsg {
    type: "/likechain.likenft.v1.ListingStoreRecord";
    value: ListingStoreRecordAmino;
}
export interface ListingStoreRecordSDKType {
    class_id: string;
    nft_id: string;
    seller: Uint8Array;
    price: bigint;
    expiration: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export declare const Listing: {
    typeUrl: string;
    encode(message: Listing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Listing;
    fromPartial(object: Partial<Listing>): Listing;
    fromAmino(object: ListingAmino): Listing;
    toAmino(message: Listing): ListingAmino;
    fromAminoMsg(object: ListingAminoMsg): Listing;
    fromProtoMsg(message: ListingProtoMsg): Listing;
    toProto(message: Listing): Uint8Array;
    toProtoMsg(message: Listing): ListingProtoMsg;
};
export declare const ListingStoreRecord: {
    typeUrl: string;
    encode(message: ListingStoreRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ListingStoreRecord;
    fromPartial(object: Partial<ListingStoreRecord>): ListingStoreRecord;
    fromAmino(object: ListingStoreRecordAmino): ListingStoreRecord;
    toAmino(message: ListingStoreRecord): ListingStoreRecordAmino;
    fromAminoMsg(object: ListingStoreRecordAminoMsg): ListingStoreRecord;
    fromProtoMsg(message: ListingStoreRecordProtoMsg): ListingStoreRecord;
    toProto(message: ListingStoreRecord): Uint8Array;
    toProtoMsg(message: ListingStoreRecord): ListingStoreRecordProtoMsg;
};
