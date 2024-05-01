import { Block, BlockAmino, BlockSDKType } from "../types/block";
import { BinaryWriter } from "../../binary";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
    height: bigint;
}
export interface BlockRequestProtoMsg {
    typeUrl: "/tendermint.blockchain.BlockRequest";
    value: Uint8Array;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestAmino {
    height?: string;
}
export interface BlockRequestAminoMsg {
    type: "/tendermint.blockchain.BlockRequest";
    value: BlockRequestAmino;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
    height: bigint;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
    height: bigint;
}
export interface NoBlockResponseProtoMsg {
    typeUrl: "/tendermint.blockchain.NoBlockResponse";
    value: Uint8Array;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseAmino {
    height?: string;
}
export interface NoBlockResponseAminoMsg {
    type: "/tendermint.blockchain.NoBlockResponse";
    value: NoBlockResponseAmino;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseSDKType {
    height: bigint;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
    block?: Block;
}
export interface BlockResponseProtoMsg {
    typeUrl: "/tendermint.blockchain.BlockResponse";
    value: Uint8Array;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseAmino {
    block?: BlockAmino;
}
export interface BlockResponseAminoMsg {
    type: "/tendermint.blockchain.BlockResponse";
    value: BlockResponseAmino;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseSDKType {
    block?: BlockSDKType;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {
}
export interface StatusRequestProtoMsg {
    typeUrl: "/tendermint.blockchain.StatusRequest";
    value: Uint8Array;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestAmino {
}
export interface StatusRequestAminoMsg {
    type: "/tendermint.blockchain.StatusRequest";
    value: StatusRequestAmino;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestSDKType {
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
    height: bigint;
    base: bigint;
}
export interface StatusResponseProtoMsg {
    typeUrl: "/tendermint.blockchain.StatusResponse";
    value: Uint8Array;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseAmino {
    height?: string;
    base?: string;
}
export interface StatusResponseAminoMsg {
    type: "/tendermint.blockchain.StatusResponse";
    value: StatusResponseAmino;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseSDKType {
    height: bigint;
    base: bigint;
}
export interface Message {
    blockRequest?: BlockRequest;
    noBlockResponse?: NoBlockResponse;
    blockResponse?: BlockResponse;
    statusRequest?: StatusRequest;
    statusResponse?: StatusResponse;
}
export interface MessageProtoMsg {
    typeUrl: "/tendermint.blockchain.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    block_request?: BlockRequestAmino;
    no_block_response?: NoBlockResponseAmino;
    block_response?: BlockResponseAmino;
    status_request?: StatusRequestAmino;
    status_response?: StatusResponseAmino;
}
export interface MessageAminoMsg {
    type: "/tendermint.blockchain.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    block_request?: BlockRequestSDKType;
    no_block_response?: NoBlockResponseSDKType;
    block_response?: BlockResponseSDKType;
    status_request?: StatusRequestSDKType;
    status_response?: StatusResponseSDKType;
}
export declare const BlockRequest: {
    typeUrl: string;
    encode(message: BlockRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockRequest;
    fromPartial(object: Partial<BlockRequest>): BlockRequest;
    fromAmino(object: BlockRequestAmino): BlockRequest;
    toAmino(message: BlockRequest): BlockRequestAmino;
    fromAminoMsg(object: BlockRequestAminoMsg): BlockRequest;
    fromProtoMsg(message: BlockRequestProtoMsg): BlockRequest;
    toProto(message: BlockRequest): Uint8Array;
    toProtoMsg(message: BlockRequest): BlockRequestProtoMsg;
};
export declare const NoBlockResponse: {
    typeUrl: string;
    encode(message: NoBlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NoBlockResponse;
    fromPartial(object: Partial<NoBlockResponse>): NoBlockResponse;
    fromAmino(object: NoBlockResponseAmino): NoBlockResponse;
    toAmino(message: NoBlockResponse): NoBlockResponseAmino;
    fromAminoMsg(object: NoBlockResponseAminoMsg): NoBlockResponse;
    fromProtoMsg(message: NoBlockResponseProtoMsg): NoBlockResponse;
    toProto(message: NoBlockResponse): Uint8Array;
    toProtoMsg(message: NoBlockResponse): NoBlockResponseProtoMsg;
};
export declare const BlockResponse: {
    typeUrl: string;
    encode(message: BlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BlockResponse;
    fromPartial(object: Partial<BlockResponse>): BlockResponse;
    fromAmino(object: BlockResponseAmino): BlockResponse;
    toAmino(message: BlockResponse): BlockResponseAmino;
    fromAminoMsg(object: BlockResponseAminoMsg): BlockResponse;
    fromProtoMsg(message: BlockResponseProtoMsg): BlockResponse;
    toProto(message: BlockResponse): Uint8Array;
    toProtoMsg(message: BlockResponse): BlockResponseProtoMsg;
};
export declare const StatusRequest: {
    typeUrl: string;
    encode(_: StatusRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): StatusRequest;
    fromPartial(_: Partial<StatusRequest>): StatusRequest;
    fromAmino(_: StatusRequestAmino): StatusRequest;
    toAmino(_: StatusRequest): StatusRequestAmino;
    fromAminoMsg(object: StatusRequestAminoMsg): StatusRequest;
    fromProtoMsg(message: StatusRequestProtoMsg): StatusRequest;
    toProto(message: StatusRequest): Uint8Array;
    toProtoMsg(message: StatusRequest): StatusRequestProtoMsg;
};
export declare const StatusResponse: {
    typeUrl: string;
    encode(message: StatusResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StatusResponse;
    fromPartial(object: Partial<StatusResponse>): StatusResponse;
    fromAmino(object: StatusResponseAmino): StatusResponse;
    toAmino(message: StatusResponse): StatusResponseAmino;
    fromAminoMsg(object: StatusResponseAminoMsg): StatusResponse;
    fromProtoMsg(message: StatusResponseProtoMsg): StatusResponse;
    toProto(message: StatusResponse): Uint8Array;
    toProtoMsg(message: StatusResponse): StatusResponseProtoMsg;
};
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
