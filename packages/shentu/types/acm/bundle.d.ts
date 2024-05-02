import * as _96 from "../burrow/acm";
export declare const acm: {
    Account: {
        typeUrl: string;
        encode(message: _96.Account, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _96.Account;
        fromPartial(object: Partial<_96.Account>): _96.Account;
        fromAmino(object: _96.AccountAmino): _96.Account;
        toAmino(message: _96.Account): _96.AccountAmino;
        fromAminoMsg(object: _96.AccountAminoMsg): _96.Account;
        fromProtoMsg(message: _96.AccountProtoMsg): _96.Account;
        toProto(message: _96.Account): Uint8Array;
        toProtoMsg(message: _96.Account): _96.AccountProtoMsg;
    };
    ContractMeta: {
        typeUrl: string;
        encode(message: _96.ContractMeta, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _96.ContractMeta;
        fromPartial(object: Partial<_96.ContractMeta>): _96.ContractMeta;
        fromAmino(object: _96.ContractMetaAmino): _96.ContractMeta;
        toAmino(message: _96.ContractMeta): _96.ContractMetaAmino;
        fromAminoMsg(object: _96.ContractMetaAminoMsg): _96.ContractMeta;
        fromProtoMsg(message: _96.ContractMetaProtoMsg): _96.ContractMeta;
        toProto(message: _96.ContractMeta): Uint8Array;
        toProtoMsg(message: _96.ContractMeta): _96.ContractMetaProtoMsg;
    };
};
