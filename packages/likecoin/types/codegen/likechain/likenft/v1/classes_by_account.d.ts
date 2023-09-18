import { BinaryWriter } from "../../../binary";
export interface ClassesByAccount {
    account: string;
    classIds: string[];
}
export interface ClassesByAccountProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassesByAccount";
    value: Uint8Array;
}
export interface ClassesByAccountAmino {
    account: string;
    class_ids: string[];
}
export interface ClassesByAccountAminoMsg {
    type: "/likechain.likenft.v1.ClassesByAccount";
    value: ClassesByAccountAmino;
}
export interface ClassesByAccountSDKType {
    account: string;
    class_ids: string[];
}
export interface ClassesByAccountStoreRecord {
    accAddress: Uint8Array;
    classIds: string[];
}
export interface ClassesByAccountStoreRecordProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassesByAccountStoreRecord";
    value: Uint8Array;
}
export interface ClassesByAccountStoreRecordAmino {
    acc_address: Uint8Array;
    class_ids: string[];
}
export interface ClassesByAccountStoreRecordAminoMsg {
    type: "/likechain.likenft.v1.ClassesByAccountStoreRecord";
    value: ClassesByAccountStoreRecordAmino;
}
export interface ClassesByAccountStoreRecordSDKType {
    acc_address: Uint8Array;
    class_ids: string[];
}
export declare const ClassesByAccount: {
    typeUrl: string;
    encode(message: ClassesByAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassesByAccount;
    fromPartial(object: Partial<ClassesByAccount>): ClassesByAccount;
    fromAmino(object: ClassesByAccountAmino): ClassesByAccount;
    toAmino(message: ClassesByAccount): ClassesByAccountAmino;
    fromAminoMsg(object: ClassesByAccountAminoMsg): ClassesByAccount;
    fromProtoMsg(message: ClassesByAccountProtoMsg): ClassesByAccount;
    toProto(message: ClassesByAccount): Uint8Array;
    toProtoMsg(message: ClassesByAccount): ClassesByAccountProtoMsg;
};
export declare const ClassesByAccountStoreRecord: {
    typeUrl: string;
    encode(message: ClassesByAccountStoreRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassesByAccountStoreRecord;
    fromPartial(object: Partial<ClassesByAccountStoreRecord>): ClassesByAccountStoreRecord;
    fromAmino(object: ClassesByAccountStoreRecordAmino): ClassesByAccountStoreRecord;
    toAmino(message: ClassesByAccountStoreRecord): ClassesByAccountStoreRecordAmino;
    fromAminoMsg(object: ClassesByAccountStoreRecordAminoMsg): ClassesByAccountStoreRecord;
    fromProtoMsg(message: ClassesByAccountStoreRecordProtoMsg): ClassesByAccountStoreRecord;
    toProto(message: ClassesByAccountStoreRecord): Uint8Array;
    toProtoMsg(message: ClassesByAccountStoreRecord): ClassesByAccountStoreRecordProtoMsg;
};
