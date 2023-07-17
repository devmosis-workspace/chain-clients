import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccount {
    owner: string;
    connectionId: string;
    version: string;
}
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccountSDKType {
    owner: string;
    connection_id: string;
    version: string;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponseSDKType {
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTx {
    owner: Uint8Array;
    connectionId: string;
    msg?: Any;
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTxSDKType {
    owner: Uint8Array;
    connection_id: string;
    msg?: AnySDKType;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponseSDKType {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterAccount;
    fromPartial(object: Partial<MsgRegisterAccount>): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRegisterAccountResponse;
    fromPartial(_: Partial<MsgRegisterAccountResponse>): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitTx;
    fromPartial(object: Partial<MsgSubmitTx>): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitTxResponse;
    fromPartial(_: Partial<MsgSubmitTxResponse>): MsgSubmitTxResponse;
};
