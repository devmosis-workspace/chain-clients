import { AdminAccount, AdminAccountSDKType, Params, ParamsSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
export interface MsgAddAccount {
    signer: string;
    account?: AdminAccount;
}
export interface MsgAddAccountSDKType {
    signer: string;
    account?: AdminAccountSDKType;
}
export interface MsgAddAccountResponse {
}
export interface MsgAddAccountResponseSDKType {
}
export interface MsgRemoveAccount {
    signer: string;
    account?: AdminAccount;
}
export interface MsgRemoveAccountSDKType {
    signer: string;
    account?: AdminAccountSDKType;
}
export interface MsgRemoveAccountResponse {
}
export interface MsgRemoveAccountResponseSDKType {
}
export interface MsgSetParams {
    signer: string;
    params?: Params;
}
export interface MsgSetParamsSDKType {
    signer: string;
    params?: ParamsSDKType;
}
export interface MsgSetParamsResponse {
}
export interface MsgSetParamsResponseSDKType {
}
export declare const MsgAddAccount: {
    encode(message: MsgAddAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgAddAccount;
    fromPartial(object: Partial<MsgAddAccount>): MsgAddAccount;
};
export declare const MsgAddAccountResponse: {
    encode(_: MsgAddAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgAddAccountResponse;
    fromPartial(_: Partial<MsgAddAccountResponse>): MsgAddAccountResponse;
};
export declare const MsgRemoveAccount: {
    encode(message: MsgRemoveAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveAccount;
    fromPartial(object: Partial<MsgRemoveAccount>): MsgRemoveAccount;
};
export declare const MsgRemoveAccountResponse: {
    encode(_: MsgRemoveAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveAccountResponse;
    fromPartial(_: Partial<MsgRemoveAccountResponse>): MsgRemoveAccountResponse;
};
export declare const MsgSetParams: {
    encode(message: MsgSetParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSetParams;
    fromPartial(object: Partial<MsgSetParams>): MsgSetParams;
};
export declare const MsgSetParamsResponse: {
    encode(_: MsgSetParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSetParamsResponse;
    fromPartial(_: Partial<MsgSetParamsResponse>): MsgSetParamsResponse;
};
