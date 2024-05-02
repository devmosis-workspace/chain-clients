import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCode {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
export interface MsgStoreCodeProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgStoreCode";
    value: Uint8Array;
}
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCodeAmino {
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code?: string;
}
export interface MsgStoreCodeAminoMsg {
    type: "/terra.wasm.v1beta1.MsgStoreCode";
    value: MsgStoreCodeAmino;
}
/**
 * MsgStoreCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgStoreCodeSDKType {
    sender: string;
    wasm_byte_code: Uint8Array;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
}
export interface MsgStoreCodeResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgStoreCodeResponse";
    value: Uint8Array;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponseAmino {
    /** CodeID is the reference to the stored WASM code */
    code_id?: string;
}
export interface MsgStoreCodeResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgStoreCodeResponse";
    value: MsgStoreCodeResponseAmino;
}
/** MsgStoreCodeResponse defines the Msg/StoreCode response type. */
export interface MsgStoreCodeResponseSDKType {
    code_id: bigint;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCode {
    /** CodeID is the migration target code id */
    codeId: bigint;
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasmByteCode: Uint8Array;
}
export interface MsgMigrateCodeProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgMigrateCode";
    value: Uint8Array;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCodeAmino {
    /** CodeID is the migration target code id */
    code_id?: string;
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code?: string;
}
export interface MsgMigrateCodeAminoMsg {
    type: "/terra.wasm.v1beta1.MsgMigrateCode";
    value: MsgMigrateCodeAmino;
}
/**
 * MsgMigrateCode represents a message to submit
 * Wasm code to the system
 */
export interface MsgMigrateCodeSDKType {
    code_id: bigint;
    sender: string;
    wasm_byte_code: Uint8Array;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponse {
}
export interface MsgMigrateCodeResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgMigrateCodeResponse";
    value: Uint8Array;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponseAmino {
}
export interface MsgMigrateCodeResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgMigrateCodeResponse";
    value: MsgMigrateCodeResponseAmino;
}
/** MsgMigrateCodeResponse defines the Msg/MigrateCode response type. */
export interface MsgMigrateCodeResponseSDKType {
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContract {
    /** Sender is an sender address */
    sender: string;
    /** Admin is an optional admin address who can migrate the contract */
    admin: string;
    /** CodeID is the reference to the stored WASM code */
    codeId: bigint;
    /** InitMsg json encoded message to be passed to the contract on instantiation */
    initMsg: Uint8Array;
    /** InitCoins that are transferred to the contract on execution */
    initCoins: Coin[];
}
export interface MsgInstantiateContractProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContract";
    value: Uint8Array;
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractAmino {
    /** Sender is an sender address */
    sender?: string;
    /** Admin is an optional admin address who can migrate the contract */
    admin?: string;
    /** CodeID is the reference to the stored WASM code */
    code_id?: string;
    /** InitMsg json encoded message to be passed to the contract on instantiation */
    init_msg?: string;
    /** InitCoins that are transferred to the contract on execution */
    init_coins?: CoinAmino[];
}
export interface MsgInstantiateContractAminoMsg {
    type: "/terra.wasm.v1beta1.MsgInstantiateContract";
    value: MsgInstantiateContractAmino;
}
/**
 * MsgInstantiateContract represents a message to create
 * a new smart contract instance for the given
 * code id.
 */
export interface MsgInstantiateContractSDKType {
    sender: string;
    admin: string;
    code_id: bigint;
    init_msg: Uint8Array;
    init_coins: CoinSDKType[];
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponse {
    /** ContractAddress is the bech32 address of the new contract instance. */
    contractAddress: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgInstantiateContractResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgInstantiateContractResponse";
    value: Uint8Array;
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponseAmino {
    /** ContractAddress is the bech32 address of the new contract instance. */
    contract_address?: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data?: string;
}
export interface MsgInstantiateContractResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgInstantiateContractResponse";
    value: MsgInstantiateContractResponseAmino;
}
/** MsgInstantiateContractResponse defines the Msg/InstantiateContract response type. */
export interface MsgInstantiateContractResponseSDKType {
    contract_address: string;
    data: Uint8Array;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** ExecuteMsg json encoded message to be passed to the contract */
    executeMsg: Uint8Array;
    /** Coins that are transferred to the contract on execution */
    coins: Coin[];
}
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgExecuteContract";
    value: Uint8Array;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContractAmino {
    /** Sender is the that actor that signed the messages */
    sender?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
    /** ExecuteMsg json encoded message to be passed to the contract */
    execute_msg?: string;
    /** Coins that are transferred to the contract on execution */
    coins?: CoinAmino[];
}
export interface MsgExecuteContractAminoMsg {
    type: "/terra.wasm.v1beta1.MsgExecuteContract";
    value: MsgExecuteContractAmino;
}
/**
 * MsgExecuteContract represents a message to
 * submits the given message data to a smart contract.
 */
export interface MsgExecuteContractSDKType {
    sender: string;
    contract: string;
    execute_msg: Uint8Array;
    coins: CoinSDKType[];
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgExecuteContractResponse";
    value: Uint8Array;
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponseAmino {
    /** Data contains base64-encoded bytes to returned from the contract */
    data?: string;
}
export interface MsgExecuteContractResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgExecuteContractResponse";
    value: MsgExecuteContractResponseAmino;
}
/** MsgExecuteContractResponse defines the Msg/ExecuteContract response type. */
export interface MsgExecuteContractResponseSDKType {
    data: Uint8Array;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContract {
    /** Admin is the current contract admin */
    admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** NewCodeID references the new WASM code */
    newCodeId: bigint;
    /** MigrateMsg is json encoded message to be passed to the contract on migration */
    migrateMsg: Uint8Array;
}
export interface MsgMigrateContractProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgMigrateContract";
    value: Uint8Array;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContractAmino {
    /** Admin is the current contract admin */
    admin?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
    /** NewCodeID references the new WASM code */
    new_code_id?: string;
    /** MigrateMsg is json encoded message to be passed to the contract on migration */
    migrate_msg?: string;
}
export interface MsgMigrateContractAminoMsg {
    type: "/terra.wasm.v1beta1.MsgMigrateContract";
    value: MsgMigrateContractAmino;
}
/**
 * MsgMigrateContract represents a message to
 * runs a code upgrade/ downgrade for a smart contract
 */
export interface MsgMigrateContractSDKType {
    admin: string;
    contract: string;
    new_code_id: bigint;
    migrate_msg: Uint8Array;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgMigrateContractResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgMigrateContractResponse";
    value: Uint8Array;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponseAmino {
    /** Data contains base64-encoded bytes to returned from the contract */
    data?: string;
}
export interface MsgMigrateContractResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgMigrateContractResponse";
    value: MsgMigrateContractResponseAmino;
}
/** MsgMigrateContractResponse defines the Msg/MigrateContract response type. */
export interface MsgMigrateContractResponseSDKType {
    data: Uint8Array;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdmin {
    /** Admin is the current contract admin */
    admin: string;
    /** NewAdmin is the new contract admin */
    newAdmin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgUpdateContractAdminProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdmin";
    value: Uint8Array;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdminAmino {
    /** Admin is the current contract admin */
    admin?: string;
    /** NewAdmin is the new contract admin */
    new_admin?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
}
export interface MsgUpdateContractAdminAminoMsg {
    type: "/terra.wasm.v1beta1.MsgUpdateContractAdmin";
    value: MsgUpdateContractAdminAmino;
}
/**
 * MsgUpdateContractAdmin represents a message to
 * sets a new admin for a smart contract
 */
export interface MsgUpdateContractAdminSDKType {
    admin: string;
    new_admin: string;
    contract: string;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponse {
}
export interface MsgUpdateContractAdminResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse";
    value: Uint8Array;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponseAmino {
}
export interface MsgUpdateContractAdminResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgUpdateContractAdminResponse";
    value: MsgUpdateContractAdminResponseAmino;
}
/** MsgUpdateContractAdminResponse defines the Msg/UpdateContractAdmin response type. */
export interface MsgUpdateContractAdminResponseSDKType {
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdmin {
    /** Admin is the current contract admin */
    admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
}
export interface MsgClearContractAdminProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdmin";
    value: Uint8Array;
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdminAmino {
    /** Admin is the current contract admin */
    admin?: string;
    /** Contract is the address of the smart contract */
    contract?: string;
}
export interface MsgClearContractAdminAminoMsg {
    type: "/terra.wasm.v1beta1.MsgClearContractAdmin";
    value: MsgClearContractAdminAmino;
}
/**
 * MsgClearContractAdmin represents a message to
 * clear admin address from a smart contract
 */
export interface MsgClearContractAdminSDKType {
    admin: string;
    contract: string;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponse {
}
export interface MsgClearContractAdminResponseProtoMsg {
    typeUrl: "/terra.wasm.v1beta1.MsgClearContractAdminResponse";
    value: Uint8Array;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponseAmino {
}
export interface MsgClearContractAdminResponseAminoMsg {
    type: "/terra.wasm.v1beta1.MsgClearContractAdminResponse";
    value: MsgClearContractAdminResponseAmino;
}
/** MsgClearContractAdminResponse defines the Msg/ClearContractAdmin response type. */
export interface MsgClearContractAdminResponseSDKType {
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
export declare const MsgMigrateCode: {
    typeUrl: string;
    encode(message: MsgMigrateCode, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMigrateCode;
    fromPartial(object: Partial<MsgMigrateCode>): MsgMigrateCode;
    fromAmino(object: MsgMigrateCodeAmino): MsgMigrateCode;
    toAmino(message: MsgMigrateCode): MsgMigrateCodeAmino;
    fromAminoMsg(object: MsgMigrateCodeAminoMsg): MsgMigrateCode;
    fromProtoMsg(message: MsgMigrateCodeProtoMsg): MsgMigrateCode;
    toProto(message: MsgMigrateCode): Uint8Array;
    toProtoMsg(message: MsgMigrateCode): MsgMigrateCodeProtoMsg;
};
export declare const MsgMigrateCodeResponse: {
    typeUrl: string;
    encode(_: MsgMigrateCodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMigrateCodeResponse;
    fromPartial(_: Partial<MsgMigrateCodeResponse>): MsgMigrateCodeResponse;
    fromAmino(_: MsgMigrateCodeResponseAmino): MsgMigrateCodeResponse;
    toAmino(_: MsgMigrateCodeResponse): MsgMigrateCodeResponseAmino;
    fromAminoMsg(object: MsgMigrateCodeResponseAminoMsg): MsgMigrateCodeResponse;
    fromProtoMsg(message: MsgMigrateCodeResponseProtoMsg): MsgMigrateCodeResponse;
    toProto(message: MsgMigrateCodeResponse): Uint8Array;
    toProtoMsg(message: MsgMigrateCodeResponse): MsgMigrateCodeResponseProtoMsg;
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
export declare const MsgUpdateContractAdmin: {
    typeUrl: string;
    encode(message: MsgUpdateContractAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateContractAdmin;
    fromPartial(object: Partial<MsgUpdateContractAdmin>): MsgUpdateContractAdmin;
    fromAmino(object: MsgUpdateContractAdminAmino): MsgUpdateContractAdmin;
    toAmino(message: MsgUpdateContractAdmin): MsgUpdateContractAdminAmino;
    fromAminoMsg(object: MsgUpdateContractAdminAminoMsg): MsgUpdateContractAdmin;
    fromProtoMsg(message: MsgUpdateContractAdminProtoMsg): MsgUpdateContractAdmin;
    toProto(message: MsgUpdateContractAdmin): Uint8Array;
    toProtoMsg(message: MsgUpdateContractAdmin): MsgUpdateContractAdminProtoMsg;
};
export declare const MsgUpdateContractAdminResponse: {
    typeUrl: string;
    encode(_: MsgUpdateContractAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateContractAdminResponse;
    fromPartial(_: Partial<MsgUpdateContractAdminResponse>): MsgUpdateContractAdminResponse;
    fromAmino(_: MsgUpdateContractAdminResponseAmino): MsgUpdateContractAdminResponse;
    toAmino(_: MsgUpdateContractAdminResponse): MsgUpdateContractAdminResponseAmino;
    fromAminoMsg(object: MsgUpdateContractAdminResponseAminoMsg): MsgUpdateContractAdminResponse;
    fromProtoMsg(message: MsgUpdateContractAdminResponseProtoMsg): MsgUpdateContractAdminResponse;
    toProto(message: MsgUpdateContractAdminResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateContractAdminResponse): MsgUpdateContractAdminResponseProtoMsg;
};
export declare const MsgClearContractAdmin: {
    typeUrl: string;
    encode(message: MsgClearContractAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgClearContractAdmin;
    fromPartial(object: Partial<MsgClearContractAdmin>): MsgClearContractAdmin;
    fromAmino(object: MsgClearContractAdminAmino): MsgClearContractAdmin;
    toAmino(message: MsgClearContractAdmin): MsgClearContractAdminAmino;
    fromAminoMsg(object: MsgClearContractAdminAminoMsg): MsgClearContractAdmin;
    fromProtoMsg(message: MsgClearContractAdminProtoMsg): MsgClearContractAdmin;
    toProto(message: MsgClearContractAdmin): Uint8Array;
    toProtoMsg(message: MsgClearContractAdmin): MsgClearContractAdminProtoMsg;
};
export declare const MsgClearContractAdminResponse: {
    typeUrl: string;
    encode(_: MsgClearContractAdminResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgClearContractAdminResponse;
    fromPartial(_: Partial<MsgClearContractAdminResponse>): MsgClearContractAdminResponse;
    fromAmino(_: MsgClearContractAdminResponseAmino): MsgClearContractAdminResponse;
    toAmino(_: MsgClearContractAdminResponse): MsgClearContractAdminResponseAmino;
    fromAminoMsg(object: MsgClearContractAdminResponseAminoMsg): MsgClearContractAdminResponse;
    fromProtoMsg(message: MsgClearContractAdminResponseProtoMsg): MsgClearContractAdminResponse;
    toProto(message: MsgClearContractAdminResponse): Uint8Array;
    toProtoMsg(message: MsgClearContractAdminResponse): MsgClearContractAdminResponseProtoMsg;
};
