import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
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
    typeUrl: "/juno.cwhooks.v1.MsgUpdateParams";
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
    type: "/juno.cwhooks.v1.MsgUpdateParams";
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
    typeUrl: "/juno.cwhooks.v1.MsgUpdateParamsResponse";
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
    type: "/juno.cwhooks.v1.MsgUpdateParamsResponse";
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
/** MsgRegisterStaking */
export interface MsgRegisterStaking {
    contractAddress: string;
    registerAddress: string;
}
export interface MsgRegisterStakingProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgRegisterStaking";
    value: Uint8Array;
}
/** MsgRegisterStaking */
export interface MsgRegisterStakingAmino {
    contract_address?: string;
    register_address?: string;
}
export interface MsgRegisterStakingAminoMsg {
    type: "/juno.cwhooks.v1.MsgRegisterStaking";
    value: MsgRegisterStakingAmino;
}
/** MsgRegisterStaking */
export interface MsgRegisterStakingSDKType {
    contract_address: string;
    register_address: string;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponse {
}
export interface MsgRegisterStakingResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgRegisterStakingResponse";
    value: Uint8Array;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponseAmino {
}
export interface MsgRegisterStakingResponseAminoMsg {
    type: "/juno.cwhooks.v1.MsgRegisterStakingResponse";
    value: MsgRegisterStakingResponseAmino;
}
/** MsgRegisterStakingResponse */
export interface MsgRegisterStakingResponseSDKType {
}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernance {
    contractAddress: string;
    registerAddress: string;
}
export interface MsgRegisterGovernanceProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernance";
    value: Uint8Array;
}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernanceAmino {
    contract_address?: string;
    register_address?: string;
}
export interface MsgRegisterGovernanceAminoMsg {
    type: "/juno.cwhooks.v1.MsgRegisterGovernance";
    value: MsgRegisterGovernanceAmino;
}
/** MsgRegisterGovernance */
export interface MsgRegisterGovernanceSDKType {
    contract_address: string;
    register_address: string;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponse {
}
export interface MsgRegisterGovernanceResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse";
    value: Uint8Array;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponseAmino {
}
export interface MsgRegisterGovernanceResponseAminoMsg {
    type: "/juno.cwhooks.v1.MsgRegisterGovernanceResponse";
    value: MsgRegisterGovernanceResponseAmino;
}
/** MsgRegisterGovernanceResponse */
export interface MsgRegisterGovernanceResponseSDKType {
}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernance {
    contractAddress: string;
    registerAddress: string;
}
export interface MsgUnregisterGovernanceProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernance";
    value: Uint8Array;
}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernanceAmino {
    contract_address?: string;
    register_address?: string;
}
export interface MsgUnregisterGovernanceAminoMsg {
    type: "/juno.cwhooks.v1.MsgUnregisterGovernance";
    value: MsgUnregisterGovernanceAmino;
}
/** MsgUnregisterGovernance */
export interface MsgUnregisterGovernanceSDKType {
    contract_address: string;
    register_address: string;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponse {
}
export interface MsgUnregisterGovernanceResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse";
    value: Uint8Array;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponseAmino {
}
export interface MsgUnregisterGovernanceResponseAminoMsg {
    type: "/juno.cwhooks.v1.MsgUnregisterGovernanceResponse";
    value: MsgUnregisterGovernanceResponseAmino;
}
/** MsgUnregisterGovernanceResponse */
export interface MsgUnregisterGovernanceResponseSDKType {
}
/** MsgUnregisterStaking */
export interface MsgUnregisterStaking {
    contractAddress: string;
    registerAddress: string;
}
export interface MsgUnregisterStakingProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgUnregisterStaking";
    value: Uint8Array;
}
/** MsgUnregisterStaking */
export interface MsgUnregisterStakingAmino {
    contract_address?: string;
    register_address?: string;
}
export interface MsgUnregisterStakingAminoMsg {
    type: "/juno.cwhooks.v1.MsgUnregisterStaking";
    value: MsgUnregisterStakingAmino;
}
/** MsgUnregisterStaking */
export interface MsgUnregisterStakingSDKType {
    contract_address: string;
    register_address: string;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponse {
}
export interface MsgUnregisterStakingResponseProtoMsg {
    typeUrl: "/juno.cwhooks.v1.MsgUnregisterStakingResponse";
    value: Uint8Array;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponseAmino {
}
export interface MsgUnregisterStakingResponseAminoMsg {
    type: "/juno.cwhooks.v1.MsgUnregisterStakingResponse";
    value: MsgUnregisterStakingResponseAmino;
}
/** MsgUnregisterStakingResponse */
export interface MsgUnregisterStakingResponseSDKType {
}
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
export declare const MsgRegisterStaking: {
    typeUrl: string;
    encode(message: MsgRegisterStaking, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterStaking;
    fromPartial(object: Partial<MsgRegisterStaking>): MsgRegisterStaking;
    fromAmino(object: MsgRegisterStakingAmino): MsgRegisterStaking;
    toAmino(message: MsgRegisterStaking): MsgRegisterStakingAmino;
    fromAminoMsg(object: MsgRegisterStakingAminoMsg): MsgRegisterStaking;
    fromProtoMsg(message: MsgRegisterStakingProtoMsg): MsgRegisterStaking;
    toProto(message: MsgRegisterStaking): Uint8Array;
    toProtoMsg(message: MsgRegisterStaking): MsgRegisterStakingProtoMsg;
};
export declare const MsgRegisterStakingResponse: {
    typeUrl: string;
    encode(_: MsgRegisterStakingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterStakingResponse;
    fromPartial(_: Partial<MsgRegisterStakingResponse>): MsgRegisterStakingResponse;
    fromAmino(_: MsgRegisterStakingResponseAmino): MsgRegisterStakingResponse;
    toAmino(_: MsgRegisterStakingResponse): MsgRegisterStakingResponseAmino;
    fromAminoMsg(object: MsgRegisterStakingResponseAminoMsg): MsgRegisterStakingResponse;
    fromProtoMsg(message: MsgRegisterStakingResponseProtoMsg): MsgRegisterStakingResponse;
    toProto(message: MsgRegisterStakingResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterStakingResponse): MsgRegisterStakingResponseProtoMsg;
};
export declare const MsgRegisterGovernance: {
    typeUrl: string;
    encode(message: MsgRegisterGovernance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterGovernance;
    fromPartial(object: Partial<MsgRegisterGovernance>): MsgRegisterGovernance;
    fromAmino(object: MsgRegisterGovernanceAmino): MsgRegisterGovernance;
    toAmino(message: MsgRegisterGovernance): MsgRegisterGovernanceAmino;
    fromAminoMsg(object: MsgRegisterGovernanceAminoMsg): MsgRegisterGovernance;
    fromProtoMsg(message: MsgRegisterGovernanceProtoMsg): MsgRegisterGovernance;
    toProto(message: MsgRegisterGovernance): Uint8Array;
    toProtoMsg(message: MsgRegisterGovernance): MsgRegisterGovernanceProtoMsg;
};
export declare const MsgRegisterGovernanceResponse: {
    typeUrl: string;
    encode(_: MsgRegisterGovernanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterGovernanceResponse;
    fromPartial(_: Partial<MsgRegisterGovernanceResponse>): MsgRegisterGovernanceResponse;
    fromAmino(_: MsgRegisterGovernanceResponseAmino): MsgRegisterGovernanceResponse;
    toAmino(_: MsgRegisterGovernanceResponse): MsgRegisterGovernanceResponseAmino;
    fromAminoMsg(object: MsgRegisterGovernanceResponseAminoMsg): MsgRegisterGovernanceResponse;
    fromProtoMsg(message: MsgRegisterGovernanceResponseProtoMsg): MsgRegisterGovernanceResponse;
    toProto(message: MsgRegisterGovernanceResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterGovernanceResponse): MsgRegisterGovernanceResponseProtoMsg;
};
export declare const MsgUnregisterGovernance: {
    typeUrl: string;
    encode(message: MsgUnregisterGovernance, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnregisterGovernance;
    fromPartial(object: Partial<MsgUnregisterGovernance>): MsgUnregisterGovernance;
    fromAmino(object: MsgUnregisterGovernanceAmino): MsgUnregisterGovernance;
    toAmino(message: MsgUnregisterGovernance): MsgUnregisterGovernanceAmino;
    fromAminoMsg(object: MsgUnregisterGovernanceAminoMsg): MsgUnregisterGovernance;
    fromProtoMsg(message: MsgUnregisterGovernanceProtoMsg): MsgUnregisterGovernance;
    toProto(message: MsgUnregisterGovernance): Uint8Array;
    toProtoMsg(message: MsgUnregisterGovernance): MsgUnregisterGovernanceProtoMsg;
};
export declare const MsgUnregisterGovernanceResponse: {
    typeUrl: string;
    encode(_: MsgUnregisterGovernanceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnregisterGovernanceResponse;
    fromPartial(_: Partial<MsgUnregisterGovernanceResponse>): MsgUnregisterGovernanceResponse;
    fromAmino(_: MsgUnregisterGovernanceResponseAmino): MsgUnregisterGovernanceResponse;
    toAmino(_: MsgUnregisterGovernanceResponse): MsgUnregisterGovernanceResponseAmino;
    fromAminoMsg(object: MsgUnregisterGovernanceResponseAminoMsg): MsgUnregisterGovernanceResponse;
    fromProtoMsg(message: MsgUnregisterGovernanceResponseProtoMsg): MsgUnregisterGovernanceResponse;
    toProto(message: MsgUnregisterGovernanceResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterGovernanceResponse): MsgUnregisterGovernanceResponseProtoMsg;
};
export declare const MsgUnregisterStaking: {
    typeUrl: string;
    encode(message: MsgUnregisterStaking, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnregisterStaking;
    fromPartial(object: Partial<MsgUnregisterStaking>): MsgUnregisterStaking;
    fromAmino(object: MsgUnregisterStakingAmino): MsgUnregisterStaking;
    toAmino(message: MsgUnregisterStaking): MsgUnregisterStakingAmino;
    fromAminoMsg(object: MsgUnregisterStakingAminoMsg): MsgUnregisterStaking;
    fromProtoMsg(message: MsgUnregisterStakingProtoMsg): MsgUnregisterStaking;
    toProto(message: MsgUnregisterStaking): Uint8Array;
    toProtoMsg(message: MsgUnregisterStaking): MsgUnregisterStakingProtoMsg;
};
export declare const MsgUnregisterStakingResponse: {
    typeUrl: string;
    encode(_: MsgUnregisterStakingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnregisterStakingResponse;
    fromPartial(_: Partial<MsgUnregisterStakingResponse>): MsgUnregisterStakingResponse;
    fromAmino(_: MsgUnregisterStakingResponseAmino): MsgUnregisterStakingResponse;
    toAmino(_: MsgUnregisterStakingResponse): MsgUnregisterStakingResponseAmino;
    fromAminoMsg(object: MsgUnregisterStakingResponseAminoMsg): MsgUnregisterStakingResponse;
    fromProtoMsg(message: MsgUnregisterStakingResponseProtoMsg): MsgUnregisterStakingResponse;
    toProto(message: MsgUnregisterStakingResponse): Uint8Array;
    toProtoMsg(message: MsgUnregisterStakingResponse): MsgUnregisterStakingResponseProtoMsg;
};
