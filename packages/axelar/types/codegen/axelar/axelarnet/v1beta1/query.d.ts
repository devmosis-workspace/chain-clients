import { BinaryWriter } from "../../../binary";
export interface PendingIBCTransferCountRequest {
}
export interface PendingIBCTransferCountRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
    value: Uint8Array;
}
export interface PendingIBCTransferCountRequestAmino {
}
export interface PendingIBCTransferCountRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountRequest";
    value: PendingIBCTransferCountRequestAmino;
}
export interface PendingIBCTransferCountRequestSDKType {
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntry {
    key: string;
    value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryAmino {
    key: string;
    value: number;
}
export interface PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg {
    type: string;
    value: PendingIBCTransferCountResponse_TransfersByChainEntryAmino;
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
export interface PendingIBCTransferCountResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    value: Uint8Array;
}
export interface PendingIBCTransferCountResponseAmino {
    transfers_by_chain: {
        [key: string]: number;
    };
}
export interface PendingIBCTransferCountResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.PendingIBCTransferCountResponse";
    value: PendingIBCTransferCountResponseAmino;
}
export interface PendingIBCTransferCountResponseSDKType {
    transfers_by_chain: {
        [key: string]: number;
    };
}
export declare const PendingIBCTransferCountRequest: {
    typeUrl: string;
    encode(_: PendingIBCTransferCountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): PendingIBCTransferCountRequest;
    fromPartial(_: Partial<PendingIBCTransferCountRequest>): PendingIBCTransferCountRequest;
    fromAmino(_: PendingIBCTransferCountRequestAmino): PendingIBCTransferCountRequest;
    toAmino(_: PendingIBCTransferCountRequest): PendingIBCTransferCountRequestAmino;
    fromAminoMsg(object: PendingIBCTransferCountRequestAminoMsg): PendingIBCTransferCountRequest;
    fromProtoMsg(message: PendingIBCTransferCountRequestProtoMsg): PendingIBCTransferCountRequest;
    toProto(message: PendingIBCTransferCountRequest): Uint8Array;
    toProtoMsg(message: PendingIBCTransferCountRequest): PendingIBCTransferCountRequestProtoMsg;
};
export declare const PendingIBCTransferCountResponse_TransfersByChainEntry: {
    encode(message: PendingIBCTransferCountResponse_TransfersByChainEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromPartial(object: Partial<PendingIBCTransferCountResponse_TransfersByChainEntry>): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromAmino(object: PendingIBCTransferCountResponse_TransfersByChainEntryAmino): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toAmino(message: PendingIBCTransferCountResponse_TransfersByChainEntry): PendingIBCTransferCountResponse_TransfersByChainEntryAmino;
    fromAminoMsg(object: PendingIBCTransferCountResponse_TransfersByChainEntryAminoMsg): PendingIBCTransferCountResponse_TransfersByChainEntry;
    fromProtoMsg(message: PendingIBCTransferCountResponse_TransfersByChainEntryProtoMsg): PendingIBCTransferCountResponse_TransfersByChainEntry;
    toProto(message: PendingIBCTransferCountResponse_TransfersByChainEntry): Uint8Array;
};
export declare const PendingIBCTransferCountResponse: {
    typeUrl: string;
    encode(message: PendingIBCTransferCountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingIBCTransferCountResponse;
    fromPartial(object: Partial<PendingIBCTransferCountResponse>): PendingIBCTransferCountResponse;
    fromAmino(object: PendingIBCTransferCountResponseAmino): PendingIBCTransferCountResponse;
    toAmino(message: PendingIBCTransferCountResponse): PendingIBCTransferCountResponseAmino;
    fromAminoMsg(object: PendingIBCTransferCountResponseAminoMsg): PendingIBCTransferCountResponse;
    fromProtoMsg(message: PendingIBCTransferCountResponseProtoMsg): PendingIBCTransferCountResponse;
    toProto(message: PendingIBCTransferCountResponse): Uint8Array;
    toProtoMsg(message: PendingIBCTransferCountResponse): PendingIBCTransferCountResponseProtoMsg;
};
