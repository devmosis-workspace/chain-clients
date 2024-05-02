import * as _97 from "../burrow/balance";
export declare const balance: {
    Balance: {
        typeUrl: string;
        encode(message: _97.Balance, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
        fromJSON(object: any): _97.Balance;
        fromPartial(object: Partial<_97.Balance>): _97.Balance;
        fromAmino(object: _97.BalanceAmino): _97.Balance;
        toAmino(message: _97.Balance): _97.BalanceAmino;
        fromAminoMsg(object: _97.BalanceAminoMsg): _97.Balance;
        fromProtoMsg(message: _97.BalanceProtoMsg): _97.Balance;
        toProto(message: _97.Balance): Uint8Array;
        toProtoMsg(message: _97.Balance): _97.BalanceProtoMsg;
    };
};
