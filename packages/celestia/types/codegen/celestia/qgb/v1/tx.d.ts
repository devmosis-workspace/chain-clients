import { BinaryWriter } from "../../../binary";
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddress {
    /** The operating address of the validator. */
    validatorAddress: string;
    /** The matching HEX encoded EVM address. */
    evmAddress: string;
}
export interface MsgRegisterEVMAddressProtoMsg {
    typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddress";
    value: Uint8Array;
}
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddressAmino {
    /** The operating address of the validator. */
    validator_address?: string;
    /** The matching HEX encoded EVM address. */
    evm_address?: string;
}
export interface MsgRegisterEVMAddressAminoMsg {
    type: "/celestia.qgb.v1.MsgRegisterEVMAddress";
    value: MsgRegisterEVMAddressAmino;
}
/** MsgRegisterEVMAddress registers an evm address to a validator. */
export interface MsgRegisterEVMAddressSDKType {
    validator_address: string;
    evm_address: string;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponse {
}
export interface MsgRegisterEVMAddressResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse";
    value: Uint8Array;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponseAmino {
}
export interface MsgRegisterEVMAddressResponseAminoMsg {
    type: "/celestia.qgb.v1.MsgRegisterEVMAddressResponse";
    value: MsgRegisterEVMAddressResponseAmino;
}
/** MsgRegisterEVMAddressResponse is the response to registering an EVM address. */
export interface MsgRegisterEVMAddressResponseSDKType {
}
export declare const MsgRegisterEVMAddress: {
    typeUrl: string;
    encode(message: MsgRegisterEVMAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterEVMAddress;
    fromPartial(object: Partial<MsgRegisterEVMAddress>): MsgRegisterEVMAddress;
    fromAmino(object: MsgRegisterEVMAddressAmino): MsgRegisterEVMAddress;
    toAmino(message: MsgRegisterEVMAddress): MsgRegisterEVMAddressAmino;
    fromAminoMsg(object: MsgRegisterEVMAddressAminoMsg): MsgRegisterEVMAddress;
    fromProtoMsg(message: MsgRegisterEVMAddressProtoMsg): MsgRegisterEVMAddress;
    toProto(message: MsgRegisterEVMAddress): Uint8Array;
    toProtoMsg(message: MsgRegisterEVMAddress): MsgRegisterEVMAddressProtoMsg;
};
export declare const MsgRegisterEVMAddressResponse: {
    typeUrl: string;
    encode(_: MsgRegisterEVMAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterEVMAddressResponse;
    fromPartial(_: Partial<MsgRegisterEVMAddressResponse>): MsgRegisterEVMAddressResponse;
    fromAmino(_: MsgRegisterEVMAddressResponseAmino): MsgRegisterEVMAddressResponse;
    toAmino(_: MsgRegisterEVMAddressResponse): MsgRegisterEVMAddressResponseAmino;
    fromAminoMsg(object: MsgRegisterEVMAddressResponseAminoMsg): MsgRegisterEVMAddressResponse;
    fromProtoMsg(message: MsgRegisterEVMAddressResponseProtoMsg): MsgRegisterEVMAddressResponse;
    toProto(message: MsgRegisterEVMAddressResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterEVMAddressResponse): MsgRegisterEVMAddressResponseProtoMsg;
};
