import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
export interface GenesisState {
    params: Params;
    contentIdRecords: GenesisState_ContentIdRecord[];
    iscnRecords: Uint8Array[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/likechain.iscn.GenesisState";
    value: Uint8Array;
}
export interface GenesisStateAmino {
    params?: ParamsAmino;
    content_id_records?: GenesisState_ContentIdRecordAmino[];
    iscn_records?: string[];
}
export interface GenesisStateAminoMsg {
    type: "/likechain.iscn.GenesisState";
    value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    content_id_records: GenesisState_ContentIdRecordSDKType[];
    iscn_records: Uint8Array[];
}
export interface GenesisState_ContentIdRecord {
    iscnId: string;
    owner: string;
    latestVersion: bigint;
}
export interface GenesisState_ContentIdRecordProtoMsg {
    typeUrl: "/likechain.iscn.ContentIdRecord";
    value: Uint8Array;
}
export interface GenesisState_ContentIdRecordAmino {
    iscn_id?: string;
    owner?: string;
    latest_version?: string;
}
export interface GenesisState_ContentIdRecordAminoMsg {
    type: "/likechain.iscn.ContentIdRecord";
    value: GenesisState_ContentIdRecordAmino;
}
export interface GenesisState_ContentIdRecordSDKType {
    iscn_id: string;
    owner: string;
    latest_version: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisState_ContentIdRecord: {
    typeUrl: string;
    encode(message: GenesisState_ContentIdRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState_ContentIdRecord;
    fromPartial(object: Partial<GenesisState_ContentIdRecord>): GenesisState_ContentIdRecord;
    fromAmino(object: GenesisState_ContentIdRecordAmino): GenesisState_ContentIdRecord;
    toAmino(message: GenesisState_ContentIdRecord): GenesisState_ContentIdRecordAmino;
    fromAminoMsg(object: GenesisState_ContentIdRecordAminoMsg): GenesisState_ContentIdRecord;
    fromProtoMsg(message: GenesisState_ContentIdRecordProtoMsg): GenesisState_ContentIdRecord;
    toProto(message: GenesisState_ContentIdRecord): Uint8Array;
    toProtoMsg(message: GenesisState_ContentIdRecord): GenesisState_ContentIdRecordProtoMsg;
};
