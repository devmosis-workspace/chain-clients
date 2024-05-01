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
    sender?: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code?: string;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source?: string;
    /** Builder is a valid docker image name with tag, optional */
    builder?: string;
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
    code_id?: string;
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
    /** init_msg is an encrypted input to pass to the contract on init */
    initMsg: Uint8Array;
    initFunds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
    /** Admin is an optional address that can execute migrations */
    admin: string;
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgInstantiateContract";
    value: Uint8Array;
}
export interface MsgInstantiateContractAmino {
    /** sender is the canonical address of the sender */
    sender?: string;
    callback_code_hash?: string;
    code_id?: string;
    label?: string;
    /** init_msg is an encrypted input to pass to the contract on init */
    init_msg?: string;
    init_funds?: CoinAmino[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
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
    admin: string;
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
    address?: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data?: string;
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
    /** msg is an encrypted input to pass to the contract on execute */
    msg: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
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
    sender?: string;
    /** contract is the canonical address of the contract */
    contract?: string;
    /** msg is an encrypted input to pass to the contract on execute */
    msg?: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_code_hash?: string;
    sent_funds?: CoinAmino[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig?: string;
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
    data?: string;
}
export interface MsgExecuteContractResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgExecuteContractResponse";
    value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    codeId: bigint;
    /** msg is an encrypted input to pass to the contract on migration */
    msg: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackCodeHash: string;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgMigrateContract";
    value: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractAmino {
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
    /** CodeID references the new WASM code */
    code_id?: string;
    /** msg is an encrypted input to pass to the contract on migration */
    msg?: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig?: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_code_hash?: string;
}
export interface MsgMigrateContractAminoMsg {
    type: "/secret.compute.v1beta1.MsgMigrateContract";
    value: MsgMigrateContractAmino;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContractSDKType {
    sender: string;
    contract: string;
    code_id: bigint;
    msg: Uint8Array;
    callback_sig: Uint8Array;
    callback_code_hash: string;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseAmino {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data?: string;
}
export interface MsgMigrateContractResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgMigrateContractResponse";
    value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponseSDKType {
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
}
export interface MsgUpdateAdminProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgUpdateAdmin";
    value: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminAmino {
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** NewAdmin address to be set */
    new_admin?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig?: string;
}
export interface MsgUpdateAdminAminoMsg {
    type: "/secret.compute.v1beta1.MsgUpdateAdmin";
    value: MsgUpdateAdminAmino;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdminSDKType {
    sender: string;
    new_admin: string;
    contract: string;
    callback_sig: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
export interface MsgUpdateAdminResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgUpdateAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseAmino {
}
export interface MsgUpdateAdminResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgUpdateAdminResponse";
    value: MsgUpdateAdminResponseAmino;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponseSDKType {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callbackSig: Uint8Array;
}
export interface MsgClearAdminProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgClearAdmin";
    value: Uint8Array;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminAmino {
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig?: string;
}
export interface MsgClearAdminAminoMsg {
    type: "/secret.compute.v1beta1.MsgClearAdmin";
    value: MsgClearAdminAmino;
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdminSDKType {
    sender: string;
    contract: string;
    callback_sig: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export interface MsgClearAdminResponseProtoMsg {
    typeUrl: "/secret.compute.v1beta1.MsgClearAdminResponse";
    value: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseAmino {
}
export interface MsgClearAdminResponseAminoMsg {
    type: "/secret.compute.v1beta1.MsgClearAdminResponse";
    value: MsgClearAdminResponseAmino;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponseSDKType {
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
export declare const MsgMigrateContract: {
    typeUrl: string;
    encode(message: MsgMigrateContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMigrateContract;
    fromPartial(object: Partial<MsgMigrateContract>): MsgMigrateContract;
    fromAmino(object: MsgMigrateContractAmino): MsgMigrateContract;
    toAmino(message: MsgMigrateContract): MsgMigrateContractAmino;
    fromAminoMsg(object: MsgMigrateContractAminoMsg): MsgMigrateContract;
    fromProtoMsg(message: MsgMigrateContractProtoMsg): MsgMigrateContract;
    toProto(message: MsgMigrateContract): Uint8Array;
    toProtoMsg(message: MsgMigrateContract): MsgMigrateContractProtoMsg;
};
export declare const MsgMigrateContractResponse: {
    typeUrl: string;
    encode(message: MsgMigrateContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMigrateContractResponse;
    fromPartial(object: Partial<MsgMigrateContractResponse>): MsgMigrateContractResponse;
    fromAmino(object: MsgMigrateContractResponseAmino): MsgMigrateContractResponse;
    toAmino(message: MsgMigrateContractResponse): MsgMigrateContractResponseAmino;
    fromAminoMsg(object: MsgMigrateContractResponseAminoMsg): MsgMigrateContractResponse;
    fromProtoMsg(message: MsgMigrateContractResponseProtoMsg): MsgMigrateContractResponse;
    toProto(message: MsgMigrateContractResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateContractResponse): MsgMigrateContractResponseProtoMsg;
};
export declare const MsgUpdateAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateAdmin;
    fromPartial(object: Partial<MsgUpdateAdmin>): MsgUpdateAdmin;
    fromAmino(object: MsgUpdateAdminAmino): MsgUpdateAdmin;
    toAmino(message: MsgUpdateAdmin): MsgUpdateAdminAmino;
    fromAminoMsg(object: MsgUpdateAdminAminoMsg): MsgUpdateAdmin;
    fromProtoMsg(message: MsgUpdateAdminProtoMsg): MsgUpdateAdmin;
    toProto(message: MsgUpdateAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateAdmin): MsgUpdateAdminProtoMsg;
};
export declare const MsgUpdateAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateAdminResponse;
    fromPartial(_: Partial<MsgUpdateAdminResponse>): MsgUpdateAdminResponse;
    fromAmino(_: MsgUpdateAdminResponseAmino): MsgUpdateAdminResponse;
    toAmino(_: MsgUpdateAdminResponse): MsgUpdateAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateAdminResponseAminoMsg): MsgUpdateAdminResponse;
    fromProtoMsg(message: MsgUpdateAdminResponseProtoMsg): MsgUpdateAdminResponse;
    toProto(message: MsgUpdateAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateAdminResponse): MsgUpdateAdminResponseProtoMsg;
};
export declare const MsgClearAdmin: {
    typeUrl: string;
    encode(message: MsgClearAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClearAdmin;
    fromPartial(object: Partial<MsgClearAdmin>): MsgClearAdmin;
    fromAmino(object: MsgClearAdminAmino): MsgClearAdmin;
    toAmino(message: MsgClearAdmin): MsgClearAdminAmino;
    fromAminoMsg(object: MsgClearAdminAminoMsg): MsgClearAdmin;
    fromProtoMsg(message: MsgClearAdminProtoMsg): MsgClearAdmin;
    toProto(message: MsgClearAdmin): Uint8Array;
    toProtoMsg(message: MsgClearAdmin): MsgClearAdminProtoMsg;
};
export declare const MsgClearAdminResponse: {
    typeUrl: string;
    encode(_: MsgClearAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClearAdminResponse;
    fromPartial(_: Partial<MsgClearAdminResponse>): MsgClearAdminResponse;
    fromAmino(_: MsgClearAdminResponseAmino): MsgClearAdminResponse;
    toAmino(_: MsgClearAdminResponse): MsgClearAdminResponseAmino;
    fromAminoMsg(object: MsgClearAdminResponseAminoMsg): MsgClearAdminResponse;
    fromProtoMsg(message: MsgClearAdminResponseProtoMsg): MsgClearAdminResponse;
    toProto(message: MsgClearAdminResponse): Uint8Array;
    toProtoMsg(message: MsgClearAdminResponse): MsgClearAdminResponseProtoMsg;
};
