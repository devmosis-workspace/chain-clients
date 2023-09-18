import { IscnId, IscnIdAmino, IscnIdSDKType } from "./iscnid";
import { BinaryWriter } from "../../binary";
export interface StoreRecord {
    iscnId: IscnId;
    cidBytes: Uint8Array;
    data: Uint8Array;
}
export interface StoreRecordProtoMsg {
    typeUrl: "/likechain.iscn.StoreRecord";
    value: Uint8Array;
}
export interface StoreRecordAmino {
    iscn_id?: IscnIdAmino;
    cid_bytes: Uint8Array;
    data: Uint8Array;
}
export interface StoreRecordAminoMsg {
    type: "/likechain.iscn.StoreRecord";
    value: StoreRecordAmino;
}
export interface StoreRecordSDKType {
    iscn_id: IscnIdSDKType;
    cid_bytes: Uint8Array;
    data: Uint8Array;
}
export interface ContentIdRecord {
    ownerAddressBytes: Uint8Array;
    latestVersion: bigint;
}
export interface ContentIdRecordProtoMsg {
    typeUrl: "/likechain.iscn.ContentIdRecord";
    value: Uint8Array;
}
export interface ContentIdRecordAmino {
    owner_address_bytes: Uint8Array;
    latest_version: string;
}
export interface ContentIdRecordAminoMsg {
    type: "/likechain.iscn.ContentIdRecord";
    value: ContentIdRecordAmino;
}
export interface ContentIdRecordSDKType {
    owner_address_bytes: Uint8Array;
    latest_version: bigint;
}
export declare const StoreRecord: {
    typeUrl: string;
    encode(message: StoreRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StoreRecord;
    fromPartial(object: Partial<StoreRecord>): StoreRecord;
    fromAmino(object: StoreRecordAmino): StoreRecord;
    toAmino(message: StoreRecord): StoreRecordAmino;
    fromAminoMsg(object: StoreRecordAminoMsg): StoreRecord;
    fromProtoMsg(message: StoreRecordProtoMsg): StoreRecord;
    toProto(message: StoreRecord): Uint8Array;
    toProtoMsg(message: StoreRecord): StoreRecordProtoMsg;
};
export declare const ContentIdRecord: {
    typeUrl: string;
    encode(message: ContentIdRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContentIdRecord;
    fromPartial(object: Partial<ContentIdRecord>): ContentIdRecord;
    fromAmino(object: ContentIdRecordAmino): ContentIdRecord;
    toAmino(message: ContentIdRecord): ContentIdRecordAmino;
    fromAminoMsg(object: ContentIdRecordAminoMsg): ContentIdRecord;
    fromProtoMsg(message: ContentIdRecordProtoMsg): ContentIdRecord;
    toProto(message: ContentIdRecord): Uint8Array;
    toProtoMsg(message: ContentIdRecord): ContentIdRecordProtoMsg;
};
