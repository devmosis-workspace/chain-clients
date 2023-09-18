import { BinaryWriter } from "../../../binary";
export interface EventContractExecution {
    contractAddress: string;
    response: Uint8Array;
    error: string;
}
export interface EventContractExecutionProtoMsg {
    typeUrl: "/injective.wasmx.v1.EventContractExecution";
    value: Uint8Array;
}
export interface EventContractExecutionAmino {
    contract_address: string;
    response: Uint8Array;
    error: string;
}
export interface EventContractExecutionAminoMsg {
    type: "/injective.wasmx.v1.EventContractExecution";
    value: EventContractExecutionAmino;
}
export interface EventContractExecutionSDKType {
    contract_address: string;
    response: Uint8Array;
    error: string;
}
export declare const EventContractExecution: {
    typeUrl: string;
    encode(message: EventContractExecution, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventContractExecution;
    fromPartial(object: Partial<EventContractExecution>): EventContractExecution;
    fromAmino(object: EventContractExecutionAmino): EventContractExecution;
    toAmino(message: EventContractExecution): EventContractExecutionAmino;
    fromAminoMsg(object: EventContractExecutionAminoMsg): EventContractExecution;
    fromProtoMsg(message: EventContractExecutionProtoMsg): EventContractExecution;
    toProto(message: EventContractExecution): Uint8Array;
    toProtoMsg(message: EventContractExecution): EventContractExecutionProtoMsg;
};
