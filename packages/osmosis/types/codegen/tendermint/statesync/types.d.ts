import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    snapshotsRequest?: SnapshotsRequest;
    snapshotsResponse?: SnapshotsResponse;
    chunkRequest?: ChunkRequest;
    chunkResponse?: ChunkResponse;
}
export interface MessageSDKType {
    snapshots_request?: SnapshotsRequestSDKType;
    snapshots_response?: SnapshotsResponseSDKType;
    chunk_request?: ChunkRequestSDKType;
    chunk_response?: ChunkResponseSDKType;
}
export interface SnapshotsRequest {
}
export interface SnapshotsRequestSDKType {
}
export interface SnapshotsResponse {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface SnapshotsResponseSDKType {
    height: Long;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface ChunkRequest {
    height: Long;
    format: number;
    index: number;
}
export interface ChunkRequestSDKType {
    height: Long;
    format: number;
    index: number;
}
export interface ChunkResponse {
    height: Long;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export interface ChunkResponseSDKType {
    height: Long;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Message;
    fromPartial(object: Partial<Message>): Message;
};
export declare const SnapshotsRequest: {
    encode(_: SnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SnapshotsRequest;
    fromPartial(_: Partial<SnapshotsRequest>): SnapshotsRequest;
};
export declare const SnapshotsResponse: {
    encode(message: SnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SnapshotsResponse;
    fromPartial(object: Partial<SnapshotsResponse>): SnapshotsResponse;
};
export declare const ChunkRequest: {
    encode(message: ChunkRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChunkRequest;
    fromPartial(object: Partial<ChunkRequest>): ChunkRequest;
};
export declare const ChunkResponse: {
    encode(message: ChunkResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChunkResponse;
    fromPartial(object: Partial<ChunkResponse>): ChunkResponse;
};
