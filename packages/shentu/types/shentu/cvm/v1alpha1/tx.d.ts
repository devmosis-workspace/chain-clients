import { ContractMeta, ContractMetaAmino, ContractMetaSDKType } from "../../../burrow/payload";
import { BinaryWriter } from "../../../binary";
export interface MsgCall {
    caller: string;
    callee: string;
    value: bigint;
    data: Uint8Array;
}
export interface MsgCallProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.MsgCall";
    value: Uint8Array;
}
export interface MsgCallAmino {
    caller?: string;
    callee?: string;
    value?: string;
    data?: string;
}
export interface MsgCallAminoMsg {
    type: "/shentu.cvm.v1alpha1.MsgCall";
    value: MsgCallAmino;
}
export interface MsgCallSDKType {
    caller: string;
    callee: string;
    value: bigint;
    data: Uint8Array;
}
export interface MsgCallResponse {
    result: Uint8Array;
}
export interface MsgCallResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.MsgCallResponse";
    value: Uint8Array;
}
export interface MsgCallResponseAmino {
    result?: string;
}
export interface MsgCallResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.MsgCallResponse";
    value: MsgCallResponseAmino;
}
export interface MsgCallResponseSDKType {
    result: Uint8Array;
}
export interface MsgDeploy {
    /** Caller is the sender of the CVM-message. */
    caller: string;
    /** Value is the amount of CTK transferred with the call. */
    value: bigint;
    /** Code is the contract byte code. */
    code: Uint8Array;
    /** Abi is the Solidity ABI bytes for the contract code. */
    abi: string;
    /** Meta is the metadata for the contract. */
    meta: ContractMeta[];
    /** is_eWASM is true if the code is EWASM code. */
    isEWASM: boolean;
    /** is_runtime is true if the code is runtime code. */
    isRuntime: boolean;
}
export interface MsgDeployProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.MsgDeploy";
    value: Uint8Array;
}
export interface MsgDeployAmino {
    /** Caller is the sender of the CVM-message. */
    caller?: string;
    /** Value is the amount of CTK transferred with the call. */
    value?: string;
    /** Code is the contract byte code. */
    code?: string;
    /** Abi is the Solidity ABI bytes for the contract code. */
    abi?: string;
    /** Meta is the metadata for the contract. */
    meta?: ContractMetaAmino[];
    /** is_eWASM is true if the code is EWASM code. */
    is_eWASM?: boolean;
    /** is_runtime is true if the code is runtime code. */
    is_runtime?: boolean;
}
export interface MsgDeployAminoMsg {
    type: "/shentu.cvm.v1alpha1.MsgDeploy";
    value: MsgDeployAmino;
}
export interface MsgDeploySDKType {
    caller: string;
    value: bigint;
    code: Uint8Array;
    abi: string;
    meta: ContractMetaSDKType[];
    is_eWASM: boolean;
    is_runtime: boolean;
}
export interface MsgDeployResponse {
    result: Uint8Array;
}
export interface MsgDeployResponseProtoMsg {
    typeUrl: "/shentu.cvm.v1alpha1.MsgDeployResponse";
    value: Uint8Array;
}
export interface MsgDeployResponseAmino {
    result?: string;
}
export interface MsgDeployResponseAminoMsg {
    type: "/shentu.cvm.v1alpha1.MsgDeployResponse";
    value: MsgDeployResponseAmino;
}
export interface MsgDeployResponseSDKType {
    result: Uint8Array;
}
export declare const MsgCall: {
    typeUrl: string;
    encode(message: MsgCall, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCall;
    fromPartial(object: Partial<MsgCall>): MsgCall;
    fromAmino(object: MsgCallAmino): MsgCall;
    toAmino(message: MsgCall): MsgCallAmino;
    fromAminoMsg(object: MsgCallAminoMsg): MsgCall;
    fromProtoMsg(message: MsgCallProtoMsg): MsgCall;
    toProto(message: MsgCall): Uint8Array;
    toProtoMsg(message: MsgCall): MsgCallProtoMsg;
};
export declare const MsgCallResponse: {
    typeUrl: string;
    encode(message: MsgCallResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCallResponse;
    fromPartial(object: Partial<MsgCallResponse>): MsgCallResponse;
    fromAmino(object: MsgCallResponseAmino): MsgCallResponse;
    toAmino(message: MsgCallResponse): MsgCallResponseAmino;
    fromAminoMsg(object: MsgCallResponseAminoMsg): MsgCallResponse;
    fromProtoMsg(message: MsgCallResponseProtoMsg): MsgCallResponse;
    toProto(message: MsgCallResponse): Uint8Array;
    toProtoMsg(message: MsgCallResponse): MsgCallResponseProtoMsg;
};
export declare const MsgDeploy: {
    typeUrl: string;
    encode(message: MsgDeploy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeploy;
    fromPartial(object: Partial<MsgDeploy>): MsgDeploy;
    fromAmino(object: MsgDeployAmino): MsgDeploy;
    toAmino(message: MsgDeploy): MsgDeployAmino;
    fromAminoMsg(object: MsgDeployAminoMsg): MsgDeploy;
    fromProtoMsg(message: MsgDeployProtoMsg): MsgDeploy;
    toProto(message: MsgDeploy): Uint8Array;
    toProtoMsg(message: MsgDeploy): MsgDeployProtoMsg;
};
export declare const MsgDeployResponse: {
    typeUrl: string;
    encode(message: MsgDeployResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeployResponse;
    fromPartial(object: Partial<MsgDeployResponse>): MsgDeployResponse;
    fromAmino(object: MsgDeployResponseAmino): MsgDeployResponse;
    toAmino(message: MsgDeployResponse): MsgDeployResponseAmino;
    fromAminoMsg(object: MsgDeployResponseAminoMsg): MsgDeployResponse;
    fromProtoMsg(message: MsgDeployResponseProtoMsg): MsgDeployResponse;
    toProto(message: MsgDeployResponse): Uint8Array;
    toProtoMsg(message: MsgDeployResponse): MsgDeployResponseProtoMsg;
};
