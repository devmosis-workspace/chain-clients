import * as _m0 from "protobufjs/minimal";
export interface EventContractExecution {
    contractAddress: string;
    response: Uint8Array;
    error: string;
}
export interface EventContractExecutionSDKType {
    contract_address: string;
    response: Uint8Array;
    error: string;
}
export declare const EventContractExecution: {
    encode(message: EventContractExecution, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventContractExecution;
    fromPartial(object: Partial<EventContractExecution>): EventContractExecution;
};
