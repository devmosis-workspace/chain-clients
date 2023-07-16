import * as _m0 from "protobufjs/minimal";
export interface ClassesByAccount {
    account: string;
    classIds: string[];
}
export interface ClassesByAccountSDKType {
    account: string;
    class_ids: string[];
}
export interface ClassesByAccountStoreRecord {
    accAddress: Uint8Array;
    classIds: string[];
}
export interface ClassesByAccountStoreRecordSDKType {
    acc_address: Uint8Array;
    class_ids: string[];
}
export declare const ClassesByAccount: {
    encode(message: ClassesByAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassesByAccount;
    fromPartial(object: Partial<ClassesByAccount>): ClassesByAccount;
};
export declare const ClassesByAccountStoreRecord: {
    encode(message: ClassesByAccountStoreRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassesByAccountStoreRecord;
    fromPartial(object: Partial<ClassesByAccountStoreRecord>): ClassesByAccountStoreRecord;
};
