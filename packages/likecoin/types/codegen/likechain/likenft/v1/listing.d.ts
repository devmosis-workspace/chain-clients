import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Listing {
    classId: string;
    nftId: string;
    seller: string;
    price: Long;
    expiration?: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface ListingSDKType {
    class_id: string;
    nft_id: string;
    seller: string;
    price: Long;
    expiration?: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export interface ListingStoreRecord {
    classId: string;
    nftId: string;
    seller: Uint8Array;
    price: Long;
    expiration?: Timestamp;
    fullPayToRoyalty: boolean;
}
export interface ListingStoreRecordSDKType {
    class_id: string;
    nft_id: string;
    seller: Uint8Array;
    price: Long;
    expiration?: TimestampSDKType;
    full_pay_to_royalty: boolean;
}
export declare const Listing: {
    encode(message: Listing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Listing;
    fromPartial(object: Partial<Listing>): Listing;
};
export declare const ListingStoreRecord: {
    encode(message: ListingStoreRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ListingStoreRecord;
    fromPartial(object: Partial<ListingStoreRecord>): ListingStoreRecord;
};
