import * as _m0 from "protobufjs/minimal";
export interface ClassesByISCN {
    iscnIdPrefix: string;
    classIds: string[];
}
export interface ClassesByISCNSDKType {
    iscn_id_prefix: string;
    class_ids: string[];
}
export declare const ClassesByISCN: {
    encode(message: ClassesByISCN, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassesByISCN;
    fromPartial(object: Partial<ClassesByISCN>): ClassesByISCN;
};
