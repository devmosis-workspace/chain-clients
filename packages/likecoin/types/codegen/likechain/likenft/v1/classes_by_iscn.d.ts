import { BinaryWriter } from "../../../binary";
export interface ClassesByISCN {
    iscnIdPrefix: string;
    classIds: string[];
}
export interface ClassesByISCNProtoMsg {
    typeUrl: "/likechain.likenft.v1.ClassesByISCN";
    value: Uint8Array;
}
export interface ClassesByISCNAmino {
    iscn_id_prefix: string;
    class_ids: string[];
}
export interface ClassesByISCNAminoMsg {
    type: "/likechain.likenft.v1.ClassesByISCN";
    value: ClassesByISCNAmino;
}
export interface ClassesByISCNSDKType {
    iscn_id_prefix: string;
    class_ids: string[];
}
export declare const ClassesByISCN: {
    typeUrl: string;
    encode(message: ClassesByISCN, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ClassesByISCN;
    fromPartial(object: Partial<ClassesByISCN>): ClassesByISCN;
    fromAmino(object: ClassesByISCNAmino): ClassesByISCN;
    toAmino(message: ClassesByISCN): ClassesByISCNAmino;
    fromAminoMsg(object: ClassesByISCNAminoMsg): ClassesByISCN;
    fromProtoMsg(message: ClassesByISCNProtoMsg): ClassesByISCN;
    toProto(message: ClassesByISCN): Uint8Array;
    toProtoMsg(message: ClassesByISCN): ClassesByISCNProtoMsg;
};
