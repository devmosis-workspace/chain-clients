import { CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../binary";
export interface MsgSetCodeAuthorization {
    sender: string;
    codeAuthorization: CodeAuthorization;
}
export interface MsgSetCodeAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
    value: Uint8Array;
}
export interface MsgSetCodeAuthorizationAmino {
    sender: string;
    code_authorization?: CodeAuthorizationAmino;
}
export interface MsgSetCodeAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorization";
    value: MsgSetCodeAuthorizationAmino;
}
export interface MsgSetCodeAuthorizationSDKType {
    sender: string;
    code_authorization: CodeAuthorizationSDKType;
}
export interface MsgSetCodeAuthorizationResponse {
}
export interface MsgSetCodeAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse";
    value: Uint8Array;
}
export interface MsgSetCodeAuthorizationResponseAmino {
}
export interface MsgSetCodeAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetCodeAuthorizationResponse";
    value: MsgSetCodeAuthorizationResponseAmino;
}
export interface MsgSetCodeAuthorizationResponseSDKType {
}
export interface MsgRemoveCodeAuthorization {
    sender: string;
    codeId: bigint;
}
export interface MsgRemoveCodeAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
    value: Uint8Array;
}
export interface MsgRemoveCodeAuthorizationAmino {
    sender: string;
    code_id: string;
}
export interface MsgRemoveCodeAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorization";
    value: MsgRemoveCodeAuthorizationAmino;
}
export interface MsgRemoveCodeAuthorizationSDKType {
    sender: string;
    code_id: bigint;
}
export interface MsgRemoveCodeAuthorizationResponse {
}
export interface MsgRemoveCodeAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse";
    value: Uint8Array;
}
export interface MsgRemoveCodeAuthorizationResponseAmino {
}
export interface MsgRemoveCodeAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveCodeAuthorizationResponse";
    value: MsgRemoveCodeAuthorizationResponseAmino;
}
export interface MsgRemoveCodeAuthorizationResponseSDKType {
}
export interface MsgSetContractAuthorization {
    sender: string;
    contractAuthorization: ContractAuthorization;
}
export interface MsgSetContractAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
    value: Uint8Array;
}
export interface MsgSetContractAuthorizationAmino {
    sender: string;
    contract_authorization?: ContractAuthorizationAmino;
}
export interface MsgSetContractAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorization";
    value: MsgSetContractAuthorizationAmino;
}
export interface MsgSetContractAuthorizationSDKType {
    sender: string;
    contract_authorization: ContractAuthorizationSDKType;
}
export interface MsgSetContractAuthorizationResponse {
}
export interface MsgSetContractAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse";
    value: Uint8Array;
}
export interface MsgSetContractAuthorizationResponseAmino {
}
export interface MsgSetContractAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgSetContractAuthorizationResponse";
    value: MsgSetContractAuthorizationResponseAmino;
}
export interface MsgSetContractAuthorizationResponseSDKType {
}
export interface MsgRemoveContractAuthorization {
    sender: string;
    contractAddress: string;
}
export interface MsgRemoveContractAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
    value: Uint8Array;
}
export interface MsgRemoveContractAuthorizationAmino {
    sender: string;
    contract_address: string;
}
export interface MsgRemoveContractAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorization";
    value: MsgRemoveContractAuthorizationAmino;
}
export interface MsgRemoveContractAuthorizationSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgRemoveContractAuthorizationResponse {
}
export interface MsgRemoveContractAuthorizationResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse";
    value: Uint8Array;
}
export interface MsgRemoveContractAuthorizationResponseAmino {
}
export interface MsgRemoveContractAuthorizationResponseAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.MsgRemoveContractAuthorizationResponse";
    value: MsgRemoveContractAuthorizationResponseAmino;
}
export interface MsgRemoveContractAuthorizationResponseSDKType {
}
export declare const MsgSetCodeAuthorization: {
    typeUrl: string;
    encode(message: MsgSetCodeAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetCodeAuthorization;
    fromPartial(object: Partial<MsgSetCodeAuthorization>): MsgSetCodeAuthorization;
    fromAmino(object: MsgSetCodeAuthorizationAmino): MsgSetCodeAuthorization;
    toAmino(message: MsgSetCodeAuthorization): MsgSetCodeAuthorizationAmino;
    fromAminoMsg(object: MsgSetCodeAuthorizationAminoMsg): MsgSetCodeAuthorization;
    fromProtoMsg(message: MsgSetCodeAuthorizationProtoMsg): MsgSetCodeAuthorization;
    toProto(message: MsgSetCodeAuthorization): Uint8Array;
    toProtoMsg(message: MsgSetCodeAuthorization): MsgSetCodeAuthorizationProtoMsg;
};
export declare const MsgSetCodeAuthorizationResponse: {
    typeUrl: string;
    encode(_: MsgSetCodeAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetCodeAuthorizationResponse;
    fromPartial(_: Partial<MsgSetCodeAuthorizationResponse>): MsgSetCodeAuthorizationResponse;
    fromAmino(_: MsgSetCodeAuthorizationResponseAmino): MsgSetCodeAuthorizationResponse;
    toAmino(_: MsgSetCodeAuthorizationResponse): MsgSetCodeAuthorizationResponseAmino;
    fromAminoMsg(object: MsgSetCodeAuthorizationResponseAminoMsg): MsgSetCodeAuthorizationResponse;
    fromProtoMsg(message: MsgSetCodeAuthorizationResponseProtoMsg): MsgSetCodeAuthorizationResponse;
    toProto(message: MsgSetCodeAuthorizationResponse): Uint8Array;
    toProtoMsg(message: MsgSetCodeAuthorizationResponse): MsgSetCodeAuthorizationResponseProtoMsg;
};
export declare const MsgRemoveCodeAuthorization: {
    typeUrl: string;
    encode(message: MsgRemoveCodeAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveCodeAuthorization;
    fromPartial(object: Partial<MsgRemoveCodeAuthorization>): MsgRemoveCodeAuthorization;
    fromAmino(object: MsgRemoveCodeAuthorizationAmino): MsgRemoveCodeAuthorization;
    toAmino(message: MsgRemoveCodeAuthorization): MsgRemoveCodeAuthorizationAmino;
    fromAminoMsg(object: MsgRemoveCodeAuthorizationAminoMsg): MsgRemoveCodeAuthorization;
    fromProtoMsg(message: MsgRemoveCodeAuthorizationProtoMsg): MsgRemoveCodeAuthorization;
    toProto(message: MsgRemoveCodeAuthorization): Uint8Array;
    toProtoMsg(message: MsgRemoveCodeAuthorization): MsgRemoveCodeAuthorizationProtoMsg;
};
export declare const MsgRemoveCodeAuthorizationResponse: {
    typeUrl: string;
    encode(_: MsgRemoveCodeAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveCodeAuthorizationResponse;
    fromPartial(_: Partial<MsgRemoveCodeAuthorizationResponse>): MsgRemoveCodeAuthorizationResponse;
    fromAmino(_: MsgRemoveCodeAuthorizationResponseAmino): MsgRemoveCodeAuthorizationResponse;
    toAmino(_: MsgRemoveCodeAuthorizationResponse): MsgRemoveCodeAuthorizationResponseAmino;
    fromAminoMsg(object: MsgRemoveCodeAuthorizationResponseAminoMsg): MsgRemoveCodeAuthorizationResponse;
    fromProtoMsg(message: MsgRemoveCodeAuthorizationResponseProtoMsg): MsgRemoveCodeAuthorizationResponse;
    toProto(message: MsgRemoveCodeAuthorizationResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveCodeAuthorizationResponse): MsgRemoveCodeAuthorizationResponseProtoMsg;
};
export declare const MsgSetContractAuthorization: {
    typeUrl: string;
    encode(message: MsgSetContractAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetContractAuthorization;
    fromPartial(object: Partial<MsgSetContractAuthorization>): MsgSetContractAuthorization;
    fromAmino(object: MsgSetContractAuthorizationAmino): MsgSetContractAuthorization;
    toAmino(message: MsgSetContractAuthorization): MsgSetContractAuthorizationAmino;
    fromAminoMsg(object: MsgSetContractAuthorizationAminoMsg): MsgSetContractAuthorization;
    fromProtoMsg(message: MsgSetContractAuthorizationProtoMsg): MsgSetContractAuthorization;
    toProto(message: MsgSetContractAuthorization): Uint8Array;
    toProtoMsg(message: MsgSetContractAuthorization): MsgSetContractAuthorizationProtoMsg;
};
export declare const MsgSetContractAuthorizationResponse: {
    typeUrl: string;
    encode(_: MsgSetContractAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetContractAuthorizationResponse;
    fromPartial(_: Partial<MsgSetContractAuthorizationResponse>): MsgSetContractAuthorizationResponse;
    fromAmino(_: MsgSetContractAuthorizationResponseAmino): MsgSetContractAuthorizationResponse;
    toAmino(_: MsgSetContractAuthorizationResponse): MsgSetContractAuthorizationResponseAmino;
    fromAminoMsg(object: MsgSetContractAuthorizationResponseAminoMsg): MsgSetContractAuthorizationResponse;
    fromProtoMsg(message: MsgSetContractAuthorizationResponseProtoMsg): MsgSetContractAuthorizationResponse;
    toProto(message: MsgSetContractAuthorizationResponse): Uint8Array;
    toProtoMsg(message: MsgSetContractAuthorizationResponse): MsgSetContractAuthorizationResponseProtoMsg;
};
export declare const MsgRemoveContractAuthorization: {
    typeUrl: string;
    encode(message: MsgRemoveContractAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveContractAuthorization;
    fromPartial(object: Partial<MsgRemoveContractAuthorization>): MsgRemoveContractAuthorization;
    fromAmino(object: MsgRemoveContractAuthorizationAmino): MsgRemoveContractAuthorization;
    toAmino(message: MsgRemoveContractAuthorization): MsgRemoveContractAuthorizationAmino;
    fromAminoMsg(object: MsgRemoveContractAuthorizationAminoMsg): MsgRemoveContractAuthorization;
    fromProtoMsg(message: MsgRemoveContractAuthorizationProtoMsg): MsgRemoveContractAuthorization;
    toProto(message: MsgRemoveContractAuthorization): Uint8Array;
    toProtoMsg(message: MsgRemoveContractAuthorization): MsgRemoveContractAuthorizationProtoMsg;
};
export declare const MsgRemoveContractAuthorizationResponse: {
    typeUrl: string;
    encode(_: MsgRemoveContractAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveContractAuthorizationResponse;
    fromPartial(_: Partial<MsgRemoveContractAuthorizationResponse>): MsgRemoveContractAuthorizationResponse;
    fromAmino(_: MsgRemoveContractAuthorizationResponseAmino): MsgRemoveContractAuthorizationResponse;
    toAmino(_: MsgRemoveContractAuthorizationResponse): MsgRemoveContractAuthorizationResponseAmino;
    fromAminoMsg(object: MsgRemoveContractAuthorizationResponseAminoMsg): MsgRemoveContractAuthorizationResponse;
    fromProtoMsg(message: MsgRemoveContractAuthorizationResponseProtoMsg): MsgRemoveContractAuthorizationResponse;
    toProto(message: MsgRemoveContractAuthorizationResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveContractAuthorizationResponse): MsgRemoveContractAuthorizationResponseProtoMsg;
};
