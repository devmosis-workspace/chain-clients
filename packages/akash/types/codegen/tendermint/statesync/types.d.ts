import { BinaryWriter } from "../../binary";
export interface Message {
    snapshotsRequest?: SnapshotsRequest;
    snapshotsResponse?: SnapshotsResponse;
    chunkRequest?: ChunkRequest;
    chunkResponse?: ChunkResponse;
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.statesync.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    snapshots_request?: SnapshotsRequestAmino;
    snapshots_response?: SnapshotsResponseAmino;
    chunk_request?: ChunkRequestAmino;
    chunk_response?: ChunkResponseAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.statesync.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    snapshots_request?: SnapshotsRequestSDKType;
    snapshots_response?: SnapshotsResponseSDKType;
    chunk_request?: ChunkRequestSDKType;
    chunk_response?: ChunkResponseSDKType;
}
export interface SnapshotsRequest {
}
export interface SnapshotsRequestProtoMsg {
    typeUrl: "/tendermint.statesync.SnapshotsRequest";
    value: Uint8Array;
}
export interface SnapshotsRequestAmino {
}
export interface SnapshotsRequestAminoMsg {
    type: "/tendermint.statesync.SnapshotsRequest";
    value: SnapshotsRequestAmino;
}
export interface SnapshotsRequestSDKType {
}
export interface SnapshotsResponse {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface SnapshotsResponseProtoMsg {
    typeUrl: "/tendermint.statesync.SnapshotsResponse";
    value: Uint8Array;
}
export interface SnapshotsResponseAmino {
    height?: string;
    format?: number;
    chunks?: number;
    hash?: string;
    metadata?: string;
}
export interface SnapshotsResponseAminoMsg {
    type: "/tendermint.statesync.SnapshotsResponse";
    value: SnapshotsResponseAmino;
}
export interface SnapshotsResponseSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface ChunkRequest {
    height: bigint;
    format: number;
    index: number;
}
export interface ChunkRequestProtoMsg {
    typeUrl: "/tendermint.statesync.ChunkRequest";
    value: Uint8Array;
}
export interface ChunkRequestAmino {
    height?: string;
    format?: number;
    index?: number;
}
export interface ChunkRequestAminoMsg {
    type: "/tendermint.statesync.ChunkRequest";
    value: ChunkRequestAmino;
}
export interface ChunkRequestSDKType {
    height: bigint;
    format: number;
    index: number;
}
export interface ChunkResponse {
    height: bigint;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export interface ChunkResponseProtoMsg {
    typeUrl: "/tendermint.statesync.ChunkResponse";
    value: Uint8Array;
}
export interface ChunkResponseAmino {
    height?: string;
    format?: number;
    index?: number;
    chunk?: string;
    missing?: boolean;
}
export interface ChunkResponseAminoMsg {
    type: "/tendermint.statesync.ChunkResponse";
    value: ChunkResponseAmino;
}
export interface ChunkResponseSDKType {
    height: bigint;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export declare const Message: {
    typeUrl: string;
    encode(message: Message, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
export declare const SnapshotsRequest: {
    typeUrl: string;
    encode(_: SnapshotsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SnapshotsRequest;
    fromPartial(_: Partial<SnapshotsRequest>): SnapshotsRequest;
    fromAmino(_: SnapshotsRequestAmino): SnapshotsRequest;
    toAmino(_: SnapshotsRequest): SnapshotsRequestAmino;
    fromAminoMsg(object: SnapshotsRequestAminoMsg): SnapshotsRequest;
    fromProtoMsg(message: SnapshotsRequestProtoMsg): SnapshotsRequest;
    toProto(message: SnapshotsRequest): Uint8Array;
    toProtoMsg(message: SnapshotsRequest): SnapshotsRequestProtoMsg;
};
export declare const SnapshotsResponse: {
    typeUrl: string;
    encode(message: SnapshotsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SnapshotsResponse;
    fromPartial(object: Partial<SnapshotsResponse>): SnapshotsResponse;
    fromAmino(object: SnapshotsResponseAmino): SnapshotsResponse;
    toAmino(message: SnapshotsResponse): SnapshotsResponseAmino;
    fromAminoMsg(object: SnapshotsResponseAminoMsg): SnapshotsResponse;
    fromProtoMsg(message: SnapshotsResponseProtoMsg): SnapshotsResponse;
    toProto(message: SnapshotsResponse): Uint8Array;
    toProtoMsg(message: SnapshotsResponse): SnapshotsResponseProtoMsg;
};
export declare const ChunkRequest: {
    typeUrl: string;
    encode(message: ChunkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChunkRequest;
    fromPartial(object: Partial<ChunkRequest>): ChunkRequest;
    fromAmino(object: ChunkRequestAmino): ChunkRequest;
    toAmino(message: ChunkRequest): ChunkRequestAmino;
    fromAminoMsg(object: ChunkRequestAminoMsg): ChunkRequest;
    fromProtoMsg(message: ChunkRequestProtoMsg): ChunkRequest;
    toProto(message: ChunkRequest): Uint8Array;
    toProtoMsg(message: ChunkRequest): ChunkRequestProtoMsg;
};
export declare const ChunkResponse: {
    typeUrl: string;
    encode(message: ChunkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChunkResponse;
    fromPartial(object: Partial<ChunkResponse>): ChunkResponse;
    fromAmino(object: ChunkResponseAmino): ChunkResponse;
    toAmino(message: ChunkResponse): ChunkResponseAmino;
    fromAminoMsg(object: ChunkResponseAminoMsg): ChunkResponse;
    fromProtoMsg(message: ChunkResponseProtoMsg): ChunkResponse;
    toProto(message: ChunkResponse): Uint8Array;
    toProtoMsg(message: ChunkResponse): ChunkResponseProtoMsg;
};
