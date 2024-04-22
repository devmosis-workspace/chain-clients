import { Cork, CorkAmino, CorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
    /** the scheduled cork */
    cork?: Cork;
    /** the block height that must be reached */
    blockHeight: bigint;
    /** signer account address */
    signer: string;
}
export interface MsgScheduleCorkRequestProtoMsg {
    typeUrl: "/cork.v2.MsgScheduleCorkRequest";
    value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestAmino {
    /** the scheduled cork */
    cork?: CorkAmino;
    /** the block height that must be reached */
    block_height?: string;
    /** signer account address */
    signer?: string;
}
export interface MsgScheduleCorkRequestAminoMsg {
    type: "/cork.v2.MsgScheduleCorkRequest";
    value: MsgScheduleCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
    cork?: CorkSDKType;
    block_height: bigint;
    signer: string;
}
export interface MsgScheduleCorkResponse {
    /** cork ID */
    id: string;
}
export interface MsgScheduleCorkResponseProtoMsg {
    typeUrl: "/cork.v2.MsgScheduleCorkResponse";
    value: Uint8Array;
}
export interface MsgScheduleCorkResponseAmino {
    /** cork ID */
    id?: string;
}
export interface MsgScheduleCorkResponseAminoMsg {
    type: "/cork.v2.MsgScheduleCorkResponse";
    value: MsgScheduleCorkResponseAmino;
}
export interface MsgScheduleCorkResponseSDKType {
    id: string;
}
export declare const MsgScheduleCorkRequest: {
    typeUrl: string;
    encode(message: MsgScheduleCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleCorkRequest;
    fromPartial(object: Partial<MsgScheduleCorkRequest>): MsgScheduleCorkRequest;
    fromAmino(object: MsgScheduleCorkRequestAmino): MsgScheduleCorkRequest;
    toAmino(message: MsgScheduleCorkRequest): MsgScheduleCorkRequestAmino;
    fromAminoMsg(object: MsgScheduleCorkRequestAminoMsg): MsgScheduleCorkRequest;
    fromProtoMsg(message: MsgScheduleCorkRequestProtoMsg): MsgScheduleCorkRequest;
    toProto(message: MsgScheduleCorkRequest): Uint8Array;
    toProtoMsg(message: MsgScheduleCorkRequest): MsgScheduleCorkRequestProtoMsg;
};
export declare const MsgScheduleCorkResponse: {
    typeUrl: string;
    encode(message: MsgScheduleCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgScheduleCorkResponse;
    fromPartial(object: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse;
    fromAmino(object: MsgScheduleCorkResponseAmino): MsgScheduleCorkResponse;
    toAmino(message: MsgScheduleCorkResponse): MsgScheduleCorkResponseAmino;
    fromAminoMsg(object: MsgScheduleCorkResponseAminoMsg): MsgScheduleCorkResponse;
    fromProtoMsg(message: MsgScheduleCorkResponseProtoMsg): MsgScheduleCorkResponse;
    toProto(message: MsgScheduleCorkResponse): Uint8Array;
    toProtoMsg(message: MsgScheduleCorkResponse): MsgScheduleCorkResponseProtoMsg;
};
