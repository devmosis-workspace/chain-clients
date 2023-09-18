import { Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { ContractRegistrationRequest, ContractRegistrationRequestAmino, ContractRegistrationRequestSDKType } from "./proposal";
import { BinaryWriter } from "../../../binary";
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompat {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: string;
    /** Funds coins that are transferred to the contract on execution */
    funds: string;
}
export interface MsgExecuteContractCompatProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompat";
    value: Uint8Array;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompatAmino {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg json encoded message to be passed to the contract */
    msg: string;
    /** Funds coins that are transferred to the contract on execution */
    funds: string;
}
export interface MsgExecuteContractCompatAminoMsg {
    type: "/injective.wasmx.v1.MsgExecuteContractCompat";
    value: MsgExecuteContractCompatAmino;
}
/**
 * MsgExecuteContractCompat submits the given message data to a smart contract,
 * compatible with EIP712
 */
export interface MsgExecuteContractCompatSDKType {
    sender: string;
    contract: string;
    msg: string;
    funds: string;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponse {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractCompatResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
    value: Uint8Array;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseAmino {
    /** Data contains bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContractCompatResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgExecuteContractCompatResponse";
    value: MsgExecuteContractCompatResponseAmino;
}
/** MsgExecuteContractCompatResponse returns execution result data. */
export interface MsgExecuteContractCompatResponseSDKType {
    data: Uint8Array;
}
export interface MsgUpdateContract {
    sender: string;
    /** Unique Identifier for contract instance to be registered. */
    contractAddress: string;
    /** Maximum gas to be used for the smart contract execution. */
    gasLimit: bigint;
    /** gas price to be used for the smart contract execution. */
    gasPrice: bigint;
    /** optional - admin account that will be allowed to perform any changes */
    adminAddress?: string;
}
export interface MsgUpdateContractProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgUpdateContract";
    value: Uint8Array;
}
export interface MsgUpdateContractAmino {
    sender: string;
    /** Unique Identifier for contract instance to be registered. */
    contract_address: string;
    /** Maximum gas to be used for the smart contract execution. */
    gas_limit: string;
    /** gas price to be used for the smart contract execution. */
    gas_price: string;
    /** optional - admin account that will be allowed to perform any changes */
    admin_address: string;
}
export interface MsgUpdateContractAminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateContract";
    value: MsgUpdateContractAmino;
}
export interface MsgUpdateContractSDKType {
    sender: string;
    contract_address: string;
    gas_limit: bigint;
    gas_price: bigint;
    admin_address?: string;
}
export interface MsgUpdateContractResponse {
}
export interface MsgUpdateContractResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgUpdateContractResponse";
    value: Uint8Array;
}
export interface MsgUpdateContractResponseAmino {
}
export interface MsgUpdateContractResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateContractResponse";
    value: MsgUpdateContractResponseAmino;
}
export interface MsgUpdateContractResponseSDKType {
}
export interface MsgActivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be activated. */
    contractAddress: string;
}
export interface MsgActivateContractProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgActivateContract";
    value: Uint8Array;
}
export interface MsgActivateContractAmino {
    sender: string;
    /** Unique Identifier for contract instance to be activated. */
    contract_address: string;
}
export interface MsgActivateContractAminoMsg {
    type: "/injective.wasmx.v1.MsgActivateContract";
    value: MsgActivateContractAmino;
}
export interface MsgActivateContractSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgActivateContractResponse {
}
export interface MsgActivateContractResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgActivateContractResponse";
    value: Uint8Array;
}
export interface MsgActivateContractResponseAmino {
}
export interface MsgActivateContractResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgActivateContractResponse";
    value: MsgActivateContractResponseAmino;
}
export interface MsgActivateContractResponseSDKType {
}
export interface MsgDeactivateContract {
    sender: string;
    /** Unique Identifier for contract instance to be deactivated. */
    contractAddress: string;
}
export interface MsgDeactivateContractProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgDeactivateContract";
    value: Uint8Array;
}
export interface MsgDeactivateContractAmino {
    sender: string;
    /** Unique Identifier for contract instance to be deactivated. */
    contract_address: string;
}
export interface MsgDeactivateContractAminoMsg {
    type: "/injective.wasmx.v1.MsgDeactivateContract";
    value: MsgDeactivateContractAmino;
}
export interface MsgDeactivateContractSDKType {
    sender: string;
    contract_address: string;
}
export interface MsgDeactivateContractResponse {
}
export interface MsgDeactivateContractResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgDeactivateContractResponse";
    value: Uint8Array;
}
export interface MsgDeactivateContractResponseAmino {
}
export interface MsgDeactivateContractResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgDeactivateContractResponse";
    value: MsgDeactivateContractResponseAmino;
}
export interface MsgDeactivateContractResponseSDKType {
}
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the wasmx parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the wasmx parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export interface MsgRegisterContract {
    sender: string;
    contractRegistrationRequest: ContractRegistrationRequest;
}
export interface MsgRegisterContractProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgRegisterContract";
    value: Uint8Array;
}
export interface MsgRegisterContractAmino {
    sender: string;
    contract_registration_request?: ContractRegistrationRequestAmino;
}
export interface MsgRegisterContractAminoMsg {
    type: "/injective.wasmx.v1.MsgRegisterContract";
    value: MsgRegisterContractAmino;
}
export interface MsgRegisterContractSDKType {
    sender: string;
    contract_registration_request: ContractRegistrationRequestSDKType;
}
export interface MsgRegisterContractResponse {
}
export interface MsgRegisterContractResponseProtoMsg {
    typeUrl: "/injective.wasmx.v1.MsgRegisterContractResponse";
    value: Uint8Array;
}
export interface MsgRegisterContractResponseAmino {
}
export interface MsgRegisterContractResponseAminoMsg {
    type: "/injective.wasmx.v1.MsgRegisterContractResponse";
    value: MsgRegisterContractResponseAmino;
}
export interface MsgRegisterContractResponseSDKType {
}
export declare const MsgExecuteContractCompat: {
    typeUrl: string;
    encode(message: MsgExecuteContractCompat, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteContractCompat;
    fromPartial(object: Partial<MsgExecuteContractCompat>): MsgExecuteContractCompat;
    fromAmino(object: MsgExecuteContractCompatAmino): MsgExecuteContractCompat;
    toAmino(message: MsgExecuteContractCompat): MsgExecuteContractCompatAmino;
    fromAminoMsg(object: MsgExecuteContractCompatAminoMsg): MsgExecuteContractCompat;
    fromProtoMsg(message: MsgExecuteContractCompatProtoMsg): MsgExecuteContractCompat;
    toProto(message: MsgExecuteContractCompat): Uint8Array;
    toProtoMsg(message: MsgExecuteContractCompat): MsgExecuteContractCompatProtoMsg;
};
export declare const MsgExecuteContractCompatResponse: {
    typeUrl: string;
    encode(message: MsgExecuteContractCompatResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteContractCompatResponse;
    fromPartial(object: Partial<MsgExecuteContractCompatResponse>): MsgExecuteContractCompatResponse;
    fromAmino(object: MsgExecuteContractCompatResponseAmino): MsgExecuteContractCompatResponse;
    toAmino(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseAmino;
    fromAminoMsg(object: MsgExecuteContractCompatResponseAminoMsg): MsgExecuteContractCompatResponse;
    fromProtoMsg(message: MsgExecuteContractCompatResponseProtoMsg): MsgExecuteContractCompatResponse;
    toProto(message: MsgExecuteContractCompatResponse): Uint8Array;
    toProtoMsg(message: MsgExecuteContractCompatResponse): MsgExecuteContractCompatResponseProtoMsg;
};
export declare const MsgUpdateContract: {
    typeUrl: string;
    encode(message: MsgUpdateContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateContract;
    fromPartial(object: Partial<MsgUpdateContract>): MsgUpdateContract;
    fromAmino(object: MsgUpdateContractAmino): MsgUpdateContract;
    toAmino(message: MsgUpdateContract): MsgUpdateContractAmino;
    fromAminoMsg(object: MsgUpdateContractAminoMsg): MsgUpdateContract;
    fromProtoMsg(message: MsgUpdateContractProtoMsg): MsgUpdateContract;
    toProto(message: MsgUpdateContract): Uint8Array;
    toProtoMsg(message: MsgUpdateContract): MsgUpdateContractProtoMsg;
};
export declare const MsgUpdateContractResponse: {
    typeUrl: string;
    encode(_: MsgUpdateContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateContractResponse;
    fromPartial(_: Partial<MsgUpdateContractResponse>): MsgUpdateContractResponse;
    fromAmino(_: MsgUpdateContractResponseAmino): MsgUpdateContractResponse;
    toAmino(_: MsgUpdateContractResponse): MsgUpdateContractResponseAmino;
    fromAminoMsg(object: MsgUpdateContractResponseAminoMsg): MsgUpdateContractResponse;
    fromProtoMsg(message: MsgUpdateContractResponseProtoMsg): MsgUpdateContractResponse;
    toProto(message: MsgUpdateContractResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateContractResponse): MsgUpdateContractResponseProtoMsg;
};
export declare const MsgActivateContract: {
    typeUrl: string;
    encode(message: MsgActivateContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgActivateContract;
    fromPartial(object: Partial<MsgActivateContract>): MsgActivateContract;
    fromAmino(object: MsgActivateContractAmino): MsgActivateContract;
    toAmino(message: MsgActivateContract): MsgActivateContractAmino;
    fromAminoMsg(object: MsgActivateContractAminoMsg): MsgActivateContract;
    fromProtoMsg(message: MsgActivateContractProtoMsg): MsgActivateContract;
    toProto(message: MsgActivateContract): Uint8Array;
    toProtoMsg(message: MsgActivateContract): MsgActivateContractProtoMsg;
};
export declare const MsgActivateContractResponse: {
    typeUrl: string;
    encode(_: MsgActivateContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgActivateContractResponse;
    fromPartial(_: Partial<MsgActivateContractResponse>): MsgActivateContractResponse;
    fromAmino(_: MsgActivateContractResponseAmino): MsgActivateContractResponse;
    toAmino(_: MsgActivateContractResponse): MsgActivateContractResponseAmino;
    fromAminoMsg(object: MsgActivateContractResponseAminoMsg): MsgActivateContractResponse;
    fromProtoMsg(message: MsgActivateContractResponseProtoMsg): MsgActivateContractResponse;
    toProto(message: MsgActivateContractResponse): Uint8Array;
    toProtoMsg(message: MsgActivateContractResponse): MsgActivateContractResponseProtoMsg;
};
export declare const MsgDeactivateContract: {
    typeUrl: string;
    encode(message: MsgDeactivateContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeactivateContract;
    fromPartial(object: Partial<MsgDeactivateContract>): MsgDeactivateContract;
    fromAmino(object: MsgDeactivateContractAmino): MsgDeactivateContract;
    toAmino(message: MsgDeactivateContract): MsgDeactivateContractAmino;
    fromAminoMsg(object: MsgDeactivateContractAminoMsg): MsgDeactivateContract;
    fromProtoMsg(message: MsgDeactivateContractProtoMsg): MsgDeactivateContract;
    toProto(message: MsgDeactivateContract): Uint8Array;
    toProtoMsg(message: MsgDeactivateContract): MsgDeactivateContractProtoMsg;
};
export declare const MsgDeactivateContractResponse: {
    typeUrl: string;
    encode(_: MsgDeactivateContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeactivateContractResponse;
    fromPartial(_: Partial<MsgDeactivateContractResponse>): MsgDeactivateContractResponse;
    fromAmino(_: MsgDeactivateContractResponseAmino): MsgDeactivateContractResponse;
    toAmino(_: MsgDeactivateContractResponse): MsgDeactivateContractResponseAmino;
    fromAminoMsg(object: MsgDeactivateContractResponseAminoMsg): MsgDeactivateContractResponse;
    fromProtoMsg(message: MsgDeactivateContractResponseProtoMsg): MsgDeactivateContractResponse;
    toProto(message: MsgDeactivateContractResponse): Uint8Array;
    toProtoMsg(message: MsgDeactivateContractResponse): MsgDeactivateContractResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgRegisterContract: {
    typeUrl: string;
    encode(message: MsgRegisterContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterContract;
    fromPartial(object: Partial<MsgRegisterContract>): MsgRegisterContract;
    fromAmino(object: MsgRegisterContractAmino): MsgRegisterContract;
    toAmino(message: MsgRegisterContract): MsgRegisterContractAmino;
    fromAminoMsg(object: MsgRegisterContractAminoMsg): MsgRegisterContract;
    fromProtoMsg(message: MsgRegisterContractProtoMsg): MsgRegisterContract;
    toProto(message: MsgRegisterContract): Uint8Array;
    toProtoMsg(message: MsgRegisterContract): MsgRegisterContractProtoMsg;
};
export declare const MsgRegisterContractResponse: {
    typeUrl: string;
    encode(_: MsgRegisterContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterContractResponse;
    fromPartial(_: Partial<MsgRegisterContractResponse>): MsgRegisterContractResponse;
    fromAmino(_: MsgRegisterContractResponseAmino): MsgRegisterContractResponse;
    toAmino(_: MsgRegisterContractResponse): MsgRegisterContractResponseAmino;
    fromAminoMsg(object: MsgRegisterContractResponseAminoMsg): MsgRegisterContractResponse;
    fromProtoMsg(message: MsgRegisterContractResponseProtoMsg): MsgRegisterContractResponse;
    toProto(message: MsgRegisterContractResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterContractResponse): MsgRegisterContractResponseProtoMsg;
};
