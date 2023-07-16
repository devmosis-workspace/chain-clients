import { IscnId, IscnIdSDKType } from "./iscnid";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface StoreRecord {
    iscnId?: IscnId;
    cidBytes: Uint8Array;
    data: Uint8Array;
}
export interface StoreRecordSDKType {
    iscn_id?: IscnIdSDKType;
    cid_bytes: Uint8Array;
    data: Uint8Array;
}
export interface ContentIdRecord {
    ownerAddressBytes: Uint8Array;
    latestVersion: Long;
}
export interface ContentIdRecordSDKType {
    owner_address_bytes: Uint8Array;
    latest_version: Long;
}
export declare const StoreRecord: {
    encode(message: StoreRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StoreRecord;
    fromPartial(object: Partial<StoreRecord>): StoreRecord;
};
export declare const ContentIdRecord: {
    encode(message: ContentIdRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContentIdRecord;
    fromPartial(object: Partial<ContentIdRecord>): ContentIdRecord;
};
