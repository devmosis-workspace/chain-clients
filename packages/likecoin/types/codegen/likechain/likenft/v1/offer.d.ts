import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Offer {
    classId: string;
    nftId: string;
    buyer: string;
    price: bigint;
    expiration: Timestamp;
}
export interface OfferProtoMsg {
    typeUrl: "/likechain.likenft.v1.Offer";
    value: Uint8Array;
}
export interface OfferAmino {
    class_id?: string;
    nft_id?: string;
    buyer?: string;
    price?: string;
    expiration?: string;
}
export interface OfferAminoMsg {
    type: "/likechain.likenft.v1.Offer";
    value: OfferAmino;
}
export interface OfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
    price: bigint;
    expiration: TimestampSDKType;
}
export interface OfferStoreRecord {
    classId: string;
    nftId: string;
    buyer: Uint8Array;
    price: bigint;
    expiration: Timestamp;
}
export interface OfferStoreRecordProtoMsg {
    typeUrl: "/likechain.likenft.v1.OfferStoreRecord";
    value: Uint8Array;
}
export interface OfferStoreRecordAmino {
    class_id?: string;
    nft_id?: string;
    buyer?: string;
    price?: string;
    expiration?: string;
}
export interface OfferStoreRecordAminoMsg {
    type: "/likechain.likenft.v1.OfferStoreRecord";
    value: OfferStoreRecordAmino;
}
export interface OfferStoreRecordSDKType {
    class_id: string;
    nft_id: string;
    buyer: Uint8Array;
    price: bigint;
    expiration: TimestampSDKType;
}
export declare const Offer: {
    typeUrl: string;
    encode(message: Offer, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Offer;
    fromPartial(object: Partial<Offer>): Offer;
    fromAmino(object: OfferAmino): Offer;
    toAmino(message: Offer): OfferAmino;
    fromAminoMsg(object: OfferAminoMsg): Offer;
    fromProtoMsg(message: OfferProtoMsg): Offer;
    toProto(message: Offer): Uint8Array;
    toProtoMsg(message: Offer): OfferProtoMsg;
};
export declare const OfferStoreRecord: {
    typeUrl: string;
    encode(message: OfferStoreRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OfferStoreRecord;
    fromPartial(object: Partial<OfferStoreRecord>): OfferStoreRecord;
    fromAmino(object: OfferStoreRecordAmino): OfferStoreRecord;
    toAmino(message: OfferStoreRecord): OfferStoreRecordAmino;
    fromAminoMsg(object: OfferStoreRecordAminoMsg): OfferStoreRecord;
    fromProtoMsg(message: OfferStoreRecordProtoMsg): OfferStoreRecord;
    toProto(message: OfferStoreRecord): Uint8Array;
    toProtoMsg(message: OfferStoreRecord): OfferStoreRecordProtoMsg;
};
