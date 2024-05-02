import { BinaryWriter } from "../../../binary";
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequest {
    from: string;
    txHash: Uint8Array;
    receiver: string;
    amount: string;
}
export interface MsgSwapRequestProtoMsg {
    typeUrl: "/sentinel.swap.v1.MsgSwapRequest";
    value: Uint8Array;
}
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequestAmino {
    from?: string;
    tx_hash?: string;
    receiver?: string;
    amount?: string;
}
export interface MsgSwapRequestAminoMsg {
    type: "/sentinel.swap.v1.MsgSwapRequest";
    value: MsgSwapRequestAmino;
}
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequestSDKType {
    from: string;
    tx_hash: Uint8Array;
    receiver: string;
    amount: string;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponse {
}
export interface MsgSwapResponseProtoMsg {
    typeUrl: "/sentinel.swap.v1.MsgSwapResponse";
    value: Uint8Array;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponseAmino {
}
export interface MsgSwapResponseAminoMsg {
    type: "/sentinel.swap.v1.MsgSwapResponse";
    value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponseSDKType {
}
export declare const MsgSwapRequest: {
    typeUrl: string;
    encode(message: MsgSwapRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSwapRequest;
    fromPartial(object: Partial<MsgSwapRequest>): MsgSwapRequest;
    fromAmino(object: MsgSwapRequestAmino): MsgSwapRequest;
    toAmino(message: MsgSwapRequest): MsgSwapRequestAmino;
    fromAminoMsg(object: MsgSwapRequestAminoMsg): MsgSwapRequest;
    fromProtoMsg(message: MsgSwapRequestProtoMsg): MsgSwapRequest;
    toProto(message: MsgSwapRequest): Uint8Array;
    toProtoMsg(message: MsgSwapRequest): MsgSwapRequestProtoMsg;
};
export declare const MsgSwapResponse: {
    typeUrl: string;
    encode(_: MsgSwapResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSwapResponse;
    fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse;
    fromAmino(_: MsgSwapResponseAmino): MsgSwapResponse;
    toAmino(_: MsgSwapResponse): MsgSwapResponseAmino;
    fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse;
    fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse;
    toProto(message: MsgSwapResponse): Uint8Array;
    toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg;
};
