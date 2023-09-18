import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgStoreCode";
    value: Uint8Array;
}
export interface MsgStoreCodeAmino {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: string;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source: string;
    /** Builder is a valid docker image name with tag, optional */
    builder: string;
}
export interface MsgStoreCodeAminoMsg {
    type: "/secret.compute.v1beta1.MsgStoreCode";
    value: MsgStoreCodeAmino;
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
    codeId: bigint;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseAmino {
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
}
export interface MsgStoreCodeResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgStoreCodeResponse";
    value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponseSDKType {
    code_id: bigint;
}
export interface MsgInstantiateContract {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    callbackCodeHash: string;
    codeId: bigint;
    label: string;
    initMsg: Uint8Array;
    initFunds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract";
    value: Uint8Array;
}
export interface MsgInstantiateContractAmino {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    callback_code_hash: string;
    code_id: string;
    label: string;
    init_msg: Uint8Array;
    init_funds: CoinAmino[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
}
export interface MsgInstantiateContractAminoMsg {
    type: "/secret.compute.v1beta1.MsgInstantiateContract";
    value: MsgInstantiateContractAmino;
}
export interface MsgInstantiateContractSDKType {
    sender: Uint8Array;
    callback_code_hash: string;
    code_id: bigint;
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
export interface MsgInstantiateContractResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgInstantiateContractResponse";
    value: Uint8Array;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponseAmino {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgInstantiateContractResponse";
    value: MsgInstantiateContractResponseAmino;
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
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgExecuteContract";
    value: Uint8Array;
}
export interface MsgExecuteContractAmino {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** contract is the canonical address of the contract */
    contract: Uint8Array;
    msg: Uint8Array;
    callback_code_hash: string;
    sent_funds: CoinAmino[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
}
export interface MsgExecuteContractAminoMsg {
    type: "/secret.compute.v1beta1.MsgExecuteContract";
    value: MsgExecuteContractAmino;
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
export interface MsgExecuteContractResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgExecuteContractResponse";
    value: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseAmino {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgExecuteContractResponse";
    value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
export declare const MsgStoreCode: {
    typeUrl: string;
    encode(message: MsgStoreCode, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgStoreCode;
    fromPartial(object: Partial<MsgStoreCode>): MsgStoreCode;
    fromAmino(object: MsgStoreCodeAmino): MsgStoreCode;
    toAmino(message: MsgStoreCode): MsgStoreCodeAmino;
    fromAminoMsg(object: MsgStoreCodeAminoMsg): MsgStoreCode;
    fromProtoMsg(message: MsgStoreCodeProtoMsg): MsgStoreCode;
    toProto(message: MsgStoreCode): Uint8Array;
    toProtoMsg(message: MsgStoreCode): MsgStoreCodeProtoMsg;
};
export declare const MsgStoreCodeResponse: {
    typeUrl: string;
    encode(message: MsgStoreCodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgStoreCodeResponse;
    fromPartial(object: Partial<MsgStoreCodeResponse>): MsgStoreCodeResponse;
    fromAmino(object: MsgStoreCodeResponseAmino): MsgStoreCodeResponse;
    toAmino(message: MsgStoreCodeResponse): MsgStoreCodeResponseAmino;
    fromAminoMsg(object: MsgStoreCodeResponseAminoMsg): MsgStoreCodeResponse;
    fromProtoMsg(message: MsgStoreCodeResponseProtoMsg): MsgStoreCodeResponse;
    toProto(message: MsgStoreCodeResponse): Uint8Array;
    toProtoMsg(message: MsgStoreCodeResponse): MsgStoreCodeResponseProtoMsg;
};
export declare const MsgInstantiateContract: {
    typeUrl: string;
    encode(message: MsgInstantiateContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantiateContract;
    fromPartial(object: Partial<MsgInstantiateContract>): MsgInstantiateContract;
    fromAmino(object: MsgInstantiateContractAmino): MsgInstantiateContract;
    toAmino(message: MsgInstantiateContract): MsgInstantiateContractAmino;
    fromAminoMsg(object: MsgInstantiateContractAminoMsg): MsgInstantiateContract;
    fromProtoMsg(message: MsgInstantiateContractProtoMsg): MsgInstantiateContract;
    toProto(message: MsgInstantiateContract): Uint8Array;
    toProtoMsg(message: MsgInstantiateContract): MsgInstantiateContractProtoMsg;
};
export declare const MsgInstantiateContractResponse: {
    typeUrl: string;
    encode(message: MsgInstantiateContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInstantiateContractResponse;
    fromPartial(object: Partial<MsgInstantiateContractResponse>): MsgInstantiateContractResponse;
    fromAmino(object: MsgInstantiateContractResponseAmino): MsgInstantiateContractResponse;
    toAmino(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseAmino;
    fromAminoMsg(object: MsgInstantiateContractResponseAminoMsg): MsgInstantiateContractResponse;
    fromProtoMsg(message: MsgInstantiateContractResponseProtoMsg): MsgInstantiateContractResponse;
    toProto(message: MsgInstantiateContractResponse): Uint8Array;
    toProtoMsg(message: MsgInstantiateContractResponse): MsgInstantiateContractResponseProtoMsg;
};
export declare const MsgExecuteContract: {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
    fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract;
    toAmino(message: MsgExecuteContract): MsgExecuteContractAmino;
    fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract;
    fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract;
    toProto(message: MsgExecuteContract): Uint8Array;
    toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg;
};
export declare const MsgExecuteContractResponse: {
    typeUrl: string;
    encode(message: MsgExecuteContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteContractResponse;
    fromPartial(object: Partial<MsgExecuteContractResponse>): MsgExecuteContractResponse;
    fromAmino(object: MsgExecuteContractResponseAmino): MsgExecuteContractResponse;
    toAmino(message: MsgExecuteContractResponse): MsgExecuteContractResponseAmino;
    fromAminoMsg(object: MsgExecuteContractResponseAminoMsg): MsgExecuteContractResponse;
    fromProtoMsg(message: MsgExecuteContractResponseProtoMsg): MsgExecuteContractResponse;
    toProto(message: MsgExecuteContractResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteContractResponse): MsgExecuteContractResponseProtoMsg;
};
