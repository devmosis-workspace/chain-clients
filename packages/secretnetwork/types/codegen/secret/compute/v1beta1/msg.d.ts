import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgStoreCode {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source: string;
    /** Builder is a valid docker image name with tag, optional */
    builder: string;
}
export interface MsgStoreCodeSDKType {
    sender: Uint8Array;
    wasm_byte_code: Uint8Array;
    source: string;
    builder: string;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: Long;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    code_id: Long;
}
export interface MsgInstantiateContract {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    callbackCodeHash: string;
    codeId: Long;
    label: string;
    initMsg: Uint8Array;
    initFunds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
}
export interface MsgInstantiateContractSDKType {
    sender: Uint8Array;
    callback_code_hash: string;
    code_id: Long;
    label: string;
    init_msg: Uint8Array;
    init_funds: CoinSDKType[];
    callback_sig: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseSDKType {
    address: string;
    data: Uint8Array;
}
export interface MsgExecuteContract {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** contract is the canonical address of the contract */
    contract: Uint8Array;
    msg: Uint8Array;
    callbackCodeHash: string;
    sentFunds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
}
export interface MsgExecuteContractSDKType {
    sender: Uint8Array;
    contract: Uint8Array;
    msg: Uint8Array;
    callback_code_hash: string;
    sent_funds: CoinSDKType[];
    callback_sig: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgStoreCode;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgStoreCodeResponse;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantiateContract;
    fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgInstantiateContractResponse;
    fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgExecuteContractResponse;
    fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
};
