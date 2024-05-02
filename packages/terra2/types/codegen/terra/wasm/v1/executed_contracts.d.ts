import { BinaryWriter } from "../../../binary";
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContracts {
    contractAddresses: string[];
}
export interface ExecutedContractsProtoMsg {
    typeUrl: "/terra.wasm.v1.ExecutedContracts";
    value: Uint8Array;
}
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContractsAmino {
    contract_addresses?: string[];
}
export interface ExecutedContractsAminoMsg {
    type: "/terra.wasm.v1.ExecutedContracts";
    value: ExecutedContractsAmino;
}
/**
 * ExecutedContracts is a structure type that contains the list of executed contracts
 * in a specific transaction.
 */
export interface ExecutedContractsSDKType {
    contract_addresses: string[];
}
export declare const ExecutedContracts: {
    typeUrl: string;
    encode(message: ExecutedContracts, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExecutedContracts;
    fromPartial(object: Partial<ExecutedContracts>): ExecutedContracts;
    fromAmino(object: ExecutedContractsAmino): ExecutedContracts;
    toAmino(message: ExecutedContracts): ExecutedContractsAmino;
    fromAminoMsg(object: ExecutedContractsAminoMsg): ExecutedContracts;
    fromProtoMsg(message: ExecutedContractsProtoMsg): ExecutedContracts;
    toProto(message: ExecutedContracts): Uint8Array;
    toProtoMsg(message: ExecutedContracts): ExecutedContractsProtoMsg;
};
