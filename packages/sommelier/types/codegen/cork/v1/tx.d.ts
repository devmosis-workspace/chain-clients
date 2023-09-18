import { Cork, CorkAmino, CorkSDKType } from "./cork";
import { BinaryWriter } from "../../binary";
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequest {
    /** the cork to send across the bridge */
    cork: Cork;
    /** signer account address */
    signer: string;
}
export interface MsgSubmitCorkRequestProtoMsg {
    typeUrl: "/cork.v1.MsgSubmitCorkRequest";
    value: Uint8Array;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestAmino {
    /** the cork to send across the bridge */
    cork?: CorkAmino;
    /** signer account address */
    signer: string;
}
export interface MsgSubmitCorkRequestAminoMsg {
    type: "/cork.v1.MsgSubmitCorkRequest";
    value: MsgSubmitCorkRequestAmino;
}
/** MsgSubmitCorkRequest - sdk.Msg for submitting calls to Ethereum through the gravity bridge contract */
export interface MsgSubmitCorkRequestSDKType {
    cork: CorkSDKType;
    signer: string;
}
export interface MsgSubmitCorkResponse {
}
export interface MsgSubmitCorkResponseProtoMsg {
    typeUrl: "/cork.v1.MsgSubmitCorkResponse";
    value: Uint8Array;
}
export interface MsgSubmitCorkResponseAmino {
}
export interface MsgSubmitCorkResponseAminoMsg {
    type: "/cork.v1.MsgSubmitCorkResponse";
    value: MsgSubmitCorkResponseAmino;
}
export interface MsgSubmitCorkResponseSDKType {
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequest {
    /** the scheduled cork */
    cork: Cork;
    /** the block height that must be reached */
    blockHeight: bigint;
    /** signer account address */
    signer: string;
}
export interface MsgScheduleCorkRequestProtoMsg {
    typeUrl: "/cork.v1.MsgScheduleCorkRequest";
    value: Uint8Array;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestAmino {
    /** the scheduled cork */
    cork?: CorkAmino;
    /** the block height that must be reached */
    block_height: string;
    /** signer account address */
    signer: string;
}
export interface MsgScheduleCorkRequestAminoMsg {
    type: "/cork.v1.MsgScheduleCorkRequest";
    value: MsgScheduleCorkRequestAmino;
}
/** MsgScheduleCorkRequest - sdk.Msg for scheduling a cork request for on or after a specific block height */
export interface MsgScheduleCorkRequestSDKType {
    cork: CorkSDKType;
    block_height: bigint;
    signer: string;
}
export interface MsgScheduleCorkResponse {
}
export interface MsgScheduleCorkResponseProtoMsg {
    typeUrl: "/cork.v1.MsgScheduleCorkResponse";
    value: Uint8Array;
}
export interface MsgScheduleCorkResponseAmino {
}
export interface MsgScheduleCorkResponseAminoMsg {
    type: "/cork.v1.MsgScheduleCorkResponse";
    value: MsgScheduleCorkResponseAmino;
}
export interface MsgScheduleCorkResponseSDKType {
}
export declare const MsgSubmitCorkRequest: {
    typeUrl: string;
    encode(message: MsgSubmitCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitCorkRequest;
    fromPartial(object: Partial<MsgSubmitCorkRequest>): MsgSubmitCorkRequest;
    fromAmino(object: MsgSubmitCorkRequestAmino): MsgSubmitCorkRequest;
    toAmino(message: MsgSubmitCorkRequest): MsgSubmitCorkRequestAmino;
    fromAminoMsg(object: MsgSubmitCorkRequestAminoMsg): MsgSubmitCorkRequest;
    fromProtoMsg(message: MsgSubmitCorkRequestProtoMsg): MsgSubmitCorkRequest;
    toProto(message: MsgSubmitCorkRequest): Uint8Array;
    toProtoMsg(message: MsgSubmitCorkRequest): MsgSubmitCorkRequestProtoMsg;
};
export declare const MsgSubmitCorkResponse: {
    typeUrl: string;
    encode(_: MsgSubmitCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitCorkResponse;
    fromPartial(_: Partial<MsgSubmitCorkResponse>): MsgSubmitCorkResponse;
    fromAmino(_: MsgSubmitCorkResponseAmino): MsgSubmitCorkResponse;
    toAmino(_: MsgSubmitCorkResponse): MsgSubmitCorkResponseAmino;
    fromAminoMsg(object: MsgSubmitCorkResponseAminoMsg): MsgSubmitCorkResponse;
    fromProtoMsg(message: MsgSubmitCorkResponseProtoMsg): MsgSubmitCorkResponse;
    toProto(message: MsgSubmitCorkResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitCorkResponse): MsgSubmitCorkResponseProtoMsg;
};
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
    encode(_: MsgScheduleCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgScheduleCorkResponse;
    fromPartial(_: Partial<MsgScheduleCorkResponse>): MsgScheduleCorkResponse;
    fromAmino(_: MsgScheduleCorkResponseAmino): MsgScheduleCorkResponse;
    toAmino(_: MsgScheduleCorkResponse): MsgScheduleCorkResponseAmino;
    fromAminoMsg(object: MsgScheduleCorkResponseAminoMsg): MsgScheduleCorkResponse;
    fromProtoMsg(message: MsgScheduleCorkResponseProtoMsg): MsgScheduleCorkResponse;
    toProto(message: MsgScheduleCorkResponse): Uint8Array;
    toProtoMsg(message: MsgScheduleCorkResponse): MsgScheduleCorkResponseProtoMsg;
};
