import { Params, ParamsAmino, ParamsSDKType } from "./params";
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
    key?: string;
    value?: number;
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
    transfers_by_chain?: {
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
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ParamsRequest";
    value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ParamsResponse";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequest {
    /**
     * IBCPathRequest represents a message that queries the IBC path registered for
     * a given chain
     */
    chain: string;
}
export interface IBCPathRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCPathRequest";
    value: Uint8Array;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequestAmino {
    /**
     * IBCPathRequest represents a message that queries the IBC path registered for
     * a given chain
     */
    chain?: string;
}
export interface IBCPathRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCPathRequest";
    value: IBCPathRequestAmino;
}
/**
 * IBCPathRequest represents a message that queries the IBC path registered for
 * a given chain
 */
export interface IBCPathRequestSDKType {
    chain: string;
}
export interface IBCPathResponse {
    ibcPath: string;
}
export interface IBCPathResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCPathResponse";
    value: Uint8Array;
}
export interface IBCPathResponseAmino {
    ibc_path?: string;
}
export interface IBCPathResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCPathResponse";
    value: IBCPathResponseAmino;
}
export interface IBCPathResponseSDKType {
    ibc_path: string;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequest {
    /**
     * ChainByIBCPathRequest represents a message that queries the chain that an IBC
     * path is registered to
     */
    ibcPath: string;
}
export interface ChainByIBCPathRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    value: Uint8Array;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequestAmino {
    /**
     * ChainByIBCPathRequest represents a message that queries the chain that an IBC
     * path is registered to
     */
    ibc_path?: string;
}
export interface ChainByIBCPathRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ChainByIBCPathRequest";
    value: ChainByIBCPathRequestAmino;
}
/**
 * ChainByIBCPathRequest represents a message that queries the chain that an IBC
 * path is registered to
 */
export interface ChainByIBCPathRequestSDKType {
    ibc_path: string;
}
export interface ChainByIBCPathResponse {
    chain: string;
}
export interface ChainByIBCPathResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    value: Uint8Array;
}
export interface ChainByIBCPathResponseAmino {
    chain?: string;
}
export interface ChainByIBCPathResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ChainByIBCPathResponse";
    value: ChainByIBCPathResponseAmino;
}
export interface ChainByIBCPathResponseSDKType {
    chain: string;
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
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
export declare const IBCPathRequest: {
    typeUrl: string;
    encode(message: IBCPathRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCPathRequest;
    fromPartial(object: Partial<IBCPathRequest>): IBCPathRequest;
    fromAmino(object: IBCPathRequestAmino): IBCPathRequest;
    toAmino(message: IBCPathRequest): IBCPathRequestAmino;
    fromAminoMsg(object: IBCPathRequestAminoMsg): IBCPathRequest;
    fromProtoMsg(message: IBCPathRequestProtoMsg): IBCPathRequest;
    toProto(message: IBCPathRequest): Uint8Array;
    toProtoMsg(message: IBCPathRequest): IBCPathRequestProtoMsg;
};
export declare const IBCPathResponse: {
    typeUrl: string;
    encode(message: IBCPathResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCPathResponse;
    fromPartial(object: Partial<IBCPathResponse>): IBCPathResponse;
    fromAmino(object: IBCPathResponseAmino): IBCPathResponse;
    toAmino(message: IBCPathResponse): IBCPathResponseAmino;
    fromAminoMsg(object: IBCPathResponseAminoMsg): IBCPathResponse;
    fromProtoMsg(message: IBCPathResponseProtoMsg): IBCPathResponse;
    toProto(message: IBCPathResponse): Uint8Array;
    toProtoMsg(message: IBCPathResponse): IBCPathResponseProtoMsg;
};
export declare const ChainByIBCPathRequest: {
    typeUrl: string;
    encode(message: ChainByIBCPathRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainByIBCPathRequest;
    fromPartial(object: Partial<ChainByIBCPathRequest>): ChainByIBCPathRequest;
    fromAmino(object: ChainByIBCPathRequestAmino): ChainByIBCPathRequest;
    toAmino(message: ChainByIBCPathRequest): ChainByIBCPathRequestAmino;
    fromAminoMsg(object: ChainByIBCPathRequestAminoMsg): ChainByIBCPathRequest;
    fromProtoMsg(message: ChainByIBCPathRequestProtoMsg): ChainByIBCPathRequest;
    toProto(message: ChainByIBCPathRequest): Uint8Array;
    toProtoMsg(message: ChainByIBCPathRequest): ChainByIBCPathRequestProtoMsg;
};
export declare const ChainByIBCPathResponse: {
    typeUrl: string;
    encode(message: ChainByIBCPathResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainByIBCPathResponse;
    fromPartial(object: Partial<ChainByIBCPathResponse>): ChainByIBCPathResponse;
    fromAmino(object: ChainByIBCPathResponseAmino): ChainByIBCPathResponse;
    toAmino(message: ChainByIBCPathResponse): ChainByIBCPathResponseAmino;
    fromAminoMsg(object: ChainByIBCPathResponseAminoMsg): ChainByIBCPathResponse;
    fromProtoMsg(message: ChainByIBCPathResponseProtoMsg): ChainByIBCPathResponse;
    toProto(message: ChainByIBCPathResponse): Uint8Array;
    toProtoMsg(message: ChainByIBCPathResponse): ChainByIBCPathResponseProtoMsg;
};
