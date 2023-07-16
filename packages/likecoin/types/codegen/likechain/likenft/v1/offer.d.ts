import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Offer {
    classId: string;
    nftId: string;
    buyer: string;
    price: Long;
    expiration?: Timestamp;
}
export interface OfferSDKType {
    class_id: string;
    nft_id: string;
    buyer: string;
    price: Long;
    expiration?: TimestampSDKType;
}
export interface OfferStoreRecord {
    classId: string;
    nftId: string;
    buyer: Uint8Array;
    price: Long;
    expiration?: Timestamp;
}
export interface OfferStoreRecordSDKType {
    class_id: string;
    nft_id: string;
    buyer: Uint8Array;
    price: Long;
    expiration?: TimestampSDKType;
}
export declare const Offer: {
    encode(message: Offer, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Offer;
    fromPartial(object: Partial<Offer>): Offer;
};
export declare const OfferStoreRecord: {
    encode(message: OfferStoreRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OfferStoreRecord;
    fromPartial(object: Partial<OfferStoreRecord>): OfferStoreRecord;
};
