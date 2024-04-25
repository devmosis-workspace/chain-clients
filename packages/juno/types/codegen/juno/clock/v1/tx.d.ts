import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContract {
    /** The address of the sender. */
    senderAddress: string;
    /** The address of the contract to register. */
    contractAddress: string;
}
export interface MsgRegisterClockContractProtoMsg {
    typeUrl: "/juno.clock.v1.MsgRegisterClockContract";
    value: Uint8Array;
}
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContractAmino {
    /** The address of the sender. */
    sender_address?: string;
    /** The address of the contract to register. */
    contract_address?: string;
}
export interface MsgRegisterClockContractAminoMsg {
    type: "/juno.clock.v1.MsgRegisterClockContract";
    value: MsgRegisterClockContractAmino;
}
/** MsgRegisterClockContract is the Msg/RegisterClockContract request type. */
export interface MsgRegisterClockContractSDKType {
    sender_address: string;
    contract_address: string;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponse {
}
export interface MsgRegisterClockContractResponseProtoMsg {
    typeUrl: "/juno.clock.v1.MsgRegisterClockContractResponse";
    value: Uint8Array;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponseAmino {
}
export interface MsgRegisterClockContractResponseAminoMsg {
    type: "/juno.clock.v1.MsgRegisterClockContractResponse";
    value: MsgRegisterClockContractResponseAmino;
}
/**
 * MsgRegisterClockContractResponse defines the response structure for executing a
 * MsgRegisterClockContract message.
 */
export interface MsgRegisterClockContractResponseSDKType {
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContract {
    /** The address of the sender. */
    senderAddress: string;
    /** The address of the contract to unregister. */
    contractAddress: string;
}
export interface MsgUnregisterClockContractProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUnregisterClockContract";
    value: Uint8Array;
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContractAmino {
    /** The address of the sender. */
    sender_address?: string;
    /** The address of the contract to unregister. */
    contract_address?: string;
}
export interface MsgUnregisterClockContractAminoMsg {
    type: "/juno.clock.v1.MsgUnregisterClockContract";
    value: MsgUnregisterClockContractAmino;
}
/** MsgUnregisterClockContract is the Msg/UnregisterClockContract request type. */
export interface MsgUnregisterClockContractSDKType {
    sender_address: string;
    contract_address: string;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponse {
}
export interface MsgUnregisterClockContractResponseProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUnregisterClockContractResponse";
    value: Uint8Array;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponseAmino {
}
export interface MsgUnregisterClockContractResponseAminoMsg {
    type: "/juno.clock.v1.MsgUnregisterClockContractResponse";
    value: MsgUnregisterClockContractResponseAmino;
}
/**
 * MsgUnregisterClockContractResponse defines the response structure for executing a
 * MsgUnregisterClockContract message.
 */
export interface MsgUnregisterClockContractResponseSDKType {
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContract {
    /** The address of the sender. */
    senderAddress: string;
    /** The address of the contract to unjail. */
    contractAddress: string;
}
export interface MsgUnjailClockContractProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUnjailClockContract";
    value: Uint8Array;
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContractAmino {
    /** The address of the sender. */
    sender_address?: string;
    /** The address of the contract to unjail. */
    contract_address?: string;
}
export interface MsgUnjailClockContractAminoMsg {
    type: "/juno.clock.v1.MsgUnjailClockContract";
    value: MsgUnjailClockContractAmino;
}
/** MsgUnjailClockContract is the Msg/UnjailClockContract request type. */
export interface MsgUnjailClockContractSDKType {
    sender_address: string;
    contract_address: string;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponse {
}
export interface MsgUnjailClockContractResponseProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUnjailClockContractResponse";
    value: Uint8Array;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponseAmino {
}
export interface MsgUnjailClockContractResponseAminoMsg {
    type: "/juno.clock.v1.MsgUnjailClockContractResponse";
    value: MsgUnjailClockContractResponseAmino;
}
/**
 * MsgUnjailClockContractResponse defines the response structure for executing a
 * MsgUnjailClockContract message.
 */
export interface MsgUnjailClockContractResponseSDKType {
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
    /** authority is the address of the governance account. */
    authority: string;
    /**
     * params defines the x/clock parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUpdateParams";
    value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /**
     * params defines the x/clock parameters to update.
     *
     * NOTE: All parameters must be supplied.
     */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/juno.clock.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/juno.clock.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/juno.clock.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgRegisterClockContract: {
    typeUrl: string;
    encode(message: MsgRegisterClockContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterClockContract;
    fromPartial(object: Partial<MsgRegisterClockContract>): MsgRegisterClockContract;
    fromAmino(object: MsgRegisterClockContractAmino): MsgRegisterClockContract;
    toAmino(message: MsgRegisterClockContract): MsgRegisterClockContractAmino;
    fromAminoMsg(object: MsgRegisterClockContractAminoMsg): MsgRegisterClockContract;
    fromProtoMsg(message: MsgRegisterClockContractProtoMsg): MsgRegisterClockContract;
    toProto(message: MsgRegisterClockContract): Uint8Array;
    toProtoMsg(message: MsgRegisterClockContract): MsgRegisterClockContractProtoMsg;
};
export declare const MsgRegisterClockContractResponse: {
    typeUrl: string;
    encode(_: MsgRegisterClockContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterClockContractResponse;
    fromPartial(_: Partial<MsgRegisterClockContractResponse>): MsgRegisterClockContractResponse;
    fromAmino(_: MsgRegisterClockContractResponseAmino): MsgRegisterClockContractResponse;
    toAmino(_: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseAmino;
    fromAminoMsg(object: MsgRegisterClockContractResponseAminoMsg): MsgRegisterClockContractResponse;
    fromProtoMsg(message: MsgRegisterClockContractResponseProtoMsg): MsgRegisterClockContractResponse;
    toProto(message: MsgRegisterClockContractResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterClockContractResponse): MsgRegisterClockContractResponseProtoMsg;
};
export declare const MsgUnregisterClockContract: {
    typeUrl: string;
    encode(message: MsgUnregisterClockContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnregisterClockContract;
    fromPartial(object: Partial<MsgUnregisterClockContract>): MsgUnregisterClockContract;
    fromAmino(object: MsgUnregisterClockContractAmino): MsgUnregisterClockContract;
    toAmino(message: MsgUnregisterClockContract): MsgUnregisterClockContractAmino;
    fromAminoMsg(object: MsgUnregisterClockContractAminoMsg): MsgUnregisterClockContract;
    fromProtoMsg(message: MsgUnregisterClockContractProtoMsg): MsgUnregisterClockContract;
    toProto(message: MsgUnregisterClockContract): Uint8Array;
    toProtoMsg(message: MsgUnregisterClockContract): MsgUnregisterClockContractProtoMsg;
};
export declare const MsgUnregisterClockContractResponse: {
    typeUrl: string;
    encode(_: MsgUnregisterClockContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnregisterClockContractResponse;
    fromPartial(_: Partial<MsgUnregisterClockContractResponse>): MsgUnregisterClockContractResponse;
    fromAmino(_: MsgUnregisterClockContractResponseAmino): MsgUnregisterClockContractResponse;
    toAmino(_: MsgUnregisterClockContractResponse): MsgUnregisterClockContractResponseAmino;
    fromAminoMsg(object: MsgUnregisterClockContractResponseAminoMsg): MsgUnregisterClockContractResponse;
    fromProtoMsg(message: MsgUnregisterClockContractResponseProtoMsg): MsgUnregisterClockContractResponse;
    toProto(message: MsgUnregisterClockContractResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterClockContractResponse): MsgUnregisterClockContractResponseProtoMsg;
};
export declare const MsgUnjailClockContract: {
    typeUrl: string;
    encode(message: MsgUnjailClockContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnjailClockContract;
    fromPartial(object: Partial<MsgUnjailClockContract>): MsgUnjailClockContract;
    fromAmino(object: MsgUnjailClockContractAmino): MsgUnjailClockContract;
    toAmino(message: MsgUnjailClockContract): MsgUnjailClockContractAmino;
    fromAminoMsg(object: MsgUnjailClockContractAminoMsg): MsgUnjailClockContract;
    fromProtoMsg(message: MsgUnjailClockContractProtoMsg): MsgUnjailClockContract;
    toProto(message: MsgUnjailClockContract): Uint8Array;
    toProtoMsg(message: MsgUnjailClockContract): MsgUnjailClockContractProtoMsg;
};
export declare const MsgUnjailClockContractResponse: {
    typeUrl: string;
    encode(_: MsgUnjailClockContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnjailClockContractResponse;
    fromPartial(_: Partial<MsgUnjailClockContractResponse>): MsgUnjailClockContractResponse;
    fromAmino(_: MsgUnjailClockContractResponseAmino): MsgUnjailClockContractResponse;
    toAmino(_: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseAmino;
    fromAminoMsg(object: MsgUnjailClockContractResponseAminoMsg): MsgUnjailClockContractResponse;
    fromProtoMsg(message: MsgUnjailClockContractResponseProtoMsg): MsgUnjailClockContractResponse;
    toProto(message: MsgUnjailClockContractResponse): Uint8Array;
    toProtoMsg(message: MsgUnjailClockContractResponse): MsgUnjailClockContractResponseProtoMsg;
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
