import * as _138 from "./wasm/v1/executed_contracts";
export declare namespace terra {
    namespace wasm {
        const v1: {
            ExecutedContracts: {
                typeUrl: string;
                encode(message: _138.ExecutedContracts, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _138.ExecutedContracts;
                fromPartial(object: Partial<_138.ExecutedContracts>): _138.ExecutedContracts;
                fromAmino(object: _138.ExecutedContractsAmino): _138.ExecutedContracts;
                toAmino(message: _138.ExecutedContracts): _138.ExecutedContractsAmino;
                fromAminoMsg(object: _138.ExecutedContractsAminoMsg): _138.ExecutedContracts;
                fromProtoMsg(message: _138.ExecutedContractsProtoMsg): _138.ExecutedContracts;
                toProto(message: _138.ExecutedContracts): Uint8Array;
                toProtoMsg(message: _138.ExecutedContracts): _138.ExecutedContractsProtoMsg;
            };
        };
    }
}
