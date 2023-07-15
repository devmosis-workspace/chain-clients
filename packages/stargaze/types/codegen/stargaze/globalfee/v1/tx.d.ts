import { CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgSetCodeAuthorization {
    sender: string;
    codeAuthorization?: CodeAuthorization;
}
export interface MsgSetCodeAuthorizationSDKType {
    sender: string;
    code_authorization?: CodeAuthorizationSDKType;
}
export interface MsgSetCodeAuthorizationResponse {
}
export interface MsgSetCodeAuthorizationResponseSDKType {
}
export interface MsgRemoveCodeAuthorization {
    sender: string;
    codeId: Long;
}
export interface MsgRemoveCodeAuthorizationSDKType {
    sender: string;
    code_id: Long;
}
export interface MsgRemoveCodeAuthorizationResponse {
}
export interface MsgRemoveCodeAuthorizationResponseSDKType {
}
export interface MsgSetContractAuthorization {
    sender: string;
    contractAuthorization?: ContractAuthorization;
}
export interface MsgSetContractAuthorizationSDKType {
    sender: string;
    contract_authorization?: ContractAuthorizationSDKType;
}
export interface MsgSetContractAuthorizationResponse {
}
export interface MsgSetContractAuthorizationResponseSDKType {
}
export interface MsgRemoveContractAuthorization {
    sender: string;
    contractAddress: string;
}
export interface MsgRemoveContractAuthorizationSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgRemoveContractAuthorizationResponse {
}
export interface MsgRemoveContractAuthorizationResponseSDKType {
}
export declare const MsgSetCodeAuthorization: {
    encode(message: MsgSetCodeAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetCodeAuthorization;
    fromPartial(object: Partial<MsgSetCodeAuthorization>): MsgSetCodeAuthorization;
};
export declare const MsgSetCodeAuthorizationResponse: {
    encode(_: MsgSetCodeAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetCodeAuthorizationResponse;
    fromPartial(_: Partial<MsgSetCodeAuthorizationResponse>): MsgSetCodeAuthorizationResponse;
};
export declare const MsgRemoveCodeAuthorization: {
    encode(message: MsgRemoveCodeAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveCodeAuthorization;
    fromPartial(object: Partial<MsgRemoveCodeAuthorization>): MsgRemoveCodeAuthorization;
};
export declare const MsgRemoveCodeAuthorizationResponse: {
    encode(_: MsgRemoveCodeAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveCodeAuthorizationResponse;
    fromPartial(_: Partial<MsgRemoveCodeAuthorizationResponse>): MsgRemoveCodeAuthorizationResponse;
};
export declare const MsgSetContractAuthorization: {
    encode(message: MsgSetContractAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetContractAuthorization;
    fromPartial(object: Partial<MsgSetContractAuthorization>): MsgSetContractAuthorization;
};
export declare const MsgSetContractAuthorizationResponse: {
    encode(_: MsgSetContractAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetContractAuthorizationResponse;
    fromPartial(_: Partial<MsgSetContractAuthorizationResponse>): MsgSetContractAuthorizationResponse;
};
export declare const MsgRemoveContractAuthorization: {
    encode(message: MsgRemoveContractAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveContractAuthorization;
    fromPartial(object: Partial<MsgRemoveContractAuthorization>): MsgRemoveContractAuthorization;
};
export declare const MsgRemoveContractAuthorizationResponse: {
    encode(_: MsgRemoveContractAuthorizationResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveContractAuthorizationResponse;
    fromPartial(_: Partial<MsgRemoveContractAuthorizationResponse>): MsgRemoveContractAuthorizationResponse;
};
