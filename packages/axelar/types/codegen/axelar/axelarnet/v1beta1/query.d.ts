import * as _m0 from "protobufjs/minimal";
export interface PendingIBCTransferCountRequest {
}
export interface PendingIBCTransferCountRequestSDKType {
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    key: string;
    value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntrySDKType {
    key: string;
    value: number;
}
export interface PendingIBCTransferCountResponse {
    transfersByChain: {
        [key: string]: number;
    };
}
export interface PendingIBCTransferCountResponseSDKType {
    transfers_by_chain: {
        [key: string]: number;
    };
}
export declare const PendingIBCTransferCountRequest: {
    encode(_: PendingIBCTransferCountRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    fromPartial(_: Partial<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromPartial(object: Partial<PendingIBCTransferCountResponse_TransfersByChainEntry>): PendingIBCTransferCountResponse_TransfersByChainEntry;
};
export declare const PendingIBCTransferCountResponse: {
    encode(message: PendingIBCTransferCountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    fromPartial(object: Partial<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse;
};
