import { FeeInfo, FeeInfoAmino, FeeInfoSDKType } from "../exported/v1beta1/types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
export interface RegisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
    value: Uint8Array;
}
export interface RegisterChainMaintainerRequestAmino {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.RegisterChainMaintainerRequest";
    value: RegisterChainMaintainerRequestAmino;
}
export interface RegisterChainMaintainerRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface RegisterChainMaintainerResponse {
}
export interface RegisterChainMaintainerResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
    value: Uint8Array;
}
export interface RegisterChainMaintainerResponseAmino {
}
export interface RegisterChainMaintainerResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.RegisterChainMaintainerResponse";
    value: RegisterChainMaintainerResponseAmino;
}
export interface RegisterChainMaintainerResponseSDKType {
}
export interface DeregisterChainMaintainerRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
    value: Uint8Array;
}
export interface DeregisterChainMaintainerRequestAmino {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.DeregisterChainMaintainerRequest";
    value: DeregisterChainMaintainerRequestAmino;
}
export interface DeregisterChainMaintainerRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface DeregisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
    value: Uint8Array;
}
export interface DeregisterChainMaintainerResponseAmino {
}
export interface DeregisterChainMaintainerResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.DeregisterChainMaintainerResponse";
    value: DeregisterChainMaintainerResponseAmino;
}
export interface DeregisterChainMaintainerResponseSDKType {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ActivateChainRequest";
    value: Uint8Array;
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestAmino {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.ActivateChainRequest";
    value: ActivateChainRequestAmino;
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface ActivateChainResponse {
}
export interface ActivateChainResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ActivateChainResponse";
    value: Uint8Array;
}
export interface ActivateChainResponseAmino {
}
export interface ActivateChainResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.ActivateChainResponse";
    value: ActivateChainResponseAmino;
}
export interface ActivateChainResponseSDKType {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.DeactivateChainRequest";
    value: Uint8Array;
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestAmino {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.DeactivateChainRequest";
    value: DeactivateChainRequestAmino;
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequestSDKType {
    sender: Uint8Array;
    chains: string[];
}
export interface DeactivateChainResponse {
}
export interface DeactivateChainResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.DeactivateChainResponse";
    value: Uint8Array;
}
export interface DeactivateChainResponseAmino {
}
export interface DeactivateChainResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.DeactivateChainResponse";
    value: DeactivateChainResponseAmino;
}
export interface DeactivateChainResponseSDKType {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    sender: Uint8Array;
    feeInfo: FeeInfo;
}
export interface RegisterAssetFeeRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest";
    value: Uint8Array;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestAmino {
    sender: Uint8Array;
    fee_info?: FeeInfoAmino;
}
export interface RegisterAssetFeeRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.RegisterAssetFeeRequest";
    value: RegisterAssetFeeRequestAmino;
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequestSDKType {
    sender: Uint8Array;
    fee_info: FeeInfoSDKType;
}
export interface RegisterAssetFeeResponse {
}
export interface RegisterAssetFeeResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse";
    value: Uint8Array;
}
export interface RegisterAssetFeeResponseAmino {
}
export interface RegisterAssetFeeResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.RegisterAssetFeeResponse";
    value: RegisterAssetFeeResponseAmino;
}
export interface RegisterAssetFeeResponseSDKType {
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    sender: Uint8Array;
    chain: string;
    limit: Coin;
    window: Duration;
}
export interface SetTransferRateLimitRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest";
    value: Uint8Array;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestAmino {
    sender: Uint8Array;
    chain: string;
    limit?: CoinAmino;
    window?: DurationAmino;
}
export interface SetTransferRateLimitRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.SetTransferRateLimitRequest";
    value: SetTransferRateLimitRequestAmino;
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequestSDKType {
    sender: Uint8Array;
    chain: string;
    limit: CoinSDKType;
    window: DurationSDKType;
}
export interface SetTransferRateLimitResponse {
}
export interface SetTransferRateLimitResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse";
    value: Uint8Array;
}
export interface SetTransferRateLimitResponseAmino {
}
export interface SetTransferRateLimitResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.SetTransferRateLimitResponse";
    value: SetTransferRateLimitResponseAmino;
}
export interface SetTransferRateLimitResponseSDKType {
}
export declare const RegisterChainMaintainerRequest: {
    typeUrl: string;
    encode(message: RegisterChainMaintainerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    fromPartial(object: Partial<RegisterChainMaintainerRequest>): RegisterChainMaintainerRequest;
    fromAmino(object: RegisterChainMaintainerRequestAmino): RegisterChainMaintainerRequest;
    toAmino(message: RegisterChainMaintainerRequest): RegisterChainMaintainerRequestAmino;
    fromAminoMsg(object: RegisterChainMaintainerRequestAminoMsg): RegisterChainMaintainerRequest;
    fromProtoMsg(message: RegisterChainMaintainerRequestProtoMsg): RegisterChainMaintainerRequest;
    toProto(message: RegisterChainMaintainerRequest): Uint8Array;
    toProtoMsg(message: RegisterChainMaintainerRequest): RegisterChainMaintainerRequestProtoMsg;
};
export declare const RegisterChainMaintainerResponse: {
    typeUrl: string;
    encode(_: RegisterChainMaintainerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    fromPartial(_: Partial<RegisterChainMaintainerResponse>): RegisterChainMaintainerResponse;
    fromAmino(_: RegisterChainMaintainerResponseAmino): RegisterChainMaintainerResponse;
    toAmino(_: RegisterChainMaintainerResponse): RegisterChainMaintainerResponseAmino;
    fromAminoMsg(object: RegisterChainMaintainerResponseAminoMsg): RegisterChainMaintainerResponse;
    fromProtoMsg(message: RegisterChainMaintainerResponseProtoMsg): RegisterChainMaintainerResponse;
    toProto(message: RegisterChainMaintainerResponse): Uint8Array;
    toProtoMsg(message: RegisterChainMaintainerResponse): RegisterChainMaintainerResponseProtoMsg;
};
export declare const DeregisterChainMaintainerRequest: {
    typeUrl: string;
    encode(message: DeregisterChainMaintainerRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    fromPartial(object: Partial<DeregisterChainMaintainerRequest>): DeregisterChainMaintainerRequest;
    fromAmino(object: DeregisterChainMaintainerRequestAmino): DeregisterChainMaintainerRequest;
    toAmino(message: DeregisterChainMaintainerRequest): DeregisterChainMaintainerRequestAmino;
    fromAminoMsg(object: DeregisterChainMaintainerRequestAminoMsg): DeregisterChainMaintainerRequest;
    fromProtoMsg(message: DeregisterChainMaintainerRequestProtoMsg): DeregisterChainMaintainerRequest;
    toProto(message: DeregisterChainMaintainerRequest): Uint8Array;
    toProtoMsg(message: DeregisterChainMaintainerRequest): DeregisterChainMaintainerRequestProtoMsg;
};
export declare const DeregisterChainMaintainerResponse: {
    typeUrl: string;
    encode(_: DeregisterChainMaintainerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    fromPartial(_: Partial<DeregisterChainMaintainerResponse>): DeregisterChainMaintainerResponse;
    fromAmino(_: DeregisterChainMaintainerResponseAmino): DeregisterChainMaintainerResponse;
    toAmino(_: DeregisterChainMaintainerResponse): DeregisterChainMaintainerResponseAmino;
    fromAminoMsg(object: DeregisterChainMaintainerResponseAminoMsg): DeregisterChainMaintainerResponse;
    fromProtoMsg(message: DeregisterChainMaintainerResponseProtoMsg): DeregisterChainMaintainerResponse;
    toProto(message: DeregisterChainMaintainerResponse): Uint8Array;
    toProtoMsg(message: DeregisterChainMaintainerResponse): DeregisterChainMaintainerResponseProtoMsg;
};
export declare const ActivateChainRequest: {
    typeUrl: string;
    encode(message: ActivateChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ActivateChainRequest;
    fromPartial(object: Partial<ActivateChainRequest>): ActivateChainRequest;
    fromAmino(object: ActivateChainRequestAmino): ActivateChainRequest;
    toAmino(message: ActivateChainRequest): ActivateChainRequestAmino;
    fromAminoMsg(object: ActivateChainRequestAminoMsg): ActivateChainRequest;
    fromProtoMsg(message: ActivateChainRequestProtoMsg): ActivateChainRequest;
    toProto(message: ActivateChainRequest): Uint8Array;
    toProtoMsg(message: ActivateChainRequest): ActivateChainRequestProtoMsg;
};
export declare const ActivateChainResponse: {
    typeUrl: string;
    encode(_: ActivateChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ActivateChainResponse;
    fromPartial(_: Partial<ActivateChainResponse>): ActivateChainResponse;
    fromAmino(_: ActivateChainResponseAmino): ActivateChainResponse;
    toAmino(_: ActivateChainResponse): ActivateChainResponseAmino;
    fromAminoMsg(object: ActivateChainResponseAminoMsg): ActivateChainResponse;
    fromProtoMsg(message: ActivateChainResponseProtoMsg): ActivateChainResponse;
    toProto(message: ActivateChainResponse): Uint8Array;
    toProtoMsg(message: ActivateChainResponse): ActivateChainResponseProtoMsg;
};
export declare const DeactivateChainRequest: {
    typeUrl: string;
    encode(message: DeactivateChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeactivateChainRequest;
    fromPartial(object: Partial<DeactivateChainRequest>): DeactivateChainRequest;
    fromAmino(object: DeactivateChainRequestAmino): DeactivateChainRequest;
    toAmino(message: DeactivateChainRequest): DeactivateChainRequestAmino;
    fromAminoMsg(object: DeactivateChainRequestAminoMsg): DeactivateChainRequest;
    fromProtoMsg(message: DeactivateChainRequestProtoMsg): DeactivateChainRequest;
    toProto(message: DeactivateChainRequest): Uint8Array;
    toProtoMsg(message: DeactivateChainRequest): DeactivateChainRequestProtoMsg;
};
export declare const DeactivateChainResponse: {
    typeUrl: string;
    encode(_: DeactivateChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): DeactivateChainResponse;
    fromPartial(_: Partial<DeactivateChainResponse>): DeactivateChainResponse;
    fromAmino(_: DeactivateChainResponseAmino): DeactivateChainResponse;
    toAmino(_: DeactivateChainResponse): DeactivateChainResponseAmino;
    fromAminoMsg(object: DeactivateChainResponseAminoMsg): DeactivateChainResponse;
    fromProtoMsg(message: DeactivateChainResponseProtoMsg): DeactivateChainResponse;
    toProto(message: DeactivateChainResponse): Uint8Array;
    toProtoMsg(message: DeactivateChainResponse): DeactivateChainResponseProtoMsg;
};
export declare const RegisterAssetFeeRequest: {
    typeUrl: string;
    encode(message: RegisterAssetFeeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterAssetFeeRequest;
    fromPartial(object: Partial<RegisterAssetFeeRequest>): RegisterAssetFeeRequest;
    fromAmino(object: RegisterAssetFeeRequestAmino): RegisterAssetFeeRequest;
    toAmino(message: RegisterAssetFeeRequest): RegisterAssetFeeRequestAmino;
    fromAminoMsg(object: RegisterAssetFeeRequestAminoMsg): RegisterAssetFeeRequest;
    fromProtoMsg(message: RegisterAssetFeeRequestProtoMsg): RegisterAssetFeeRequest;
    toProto(message: RegisterAssetFeeRequest): Uint8Array;
    toProtoMsg(message: RegisterAssetFeeRequest): RegisterAssetFeeRequestProtoMsg;
};
export declare const RegisterAssetFeeResponse: {
    typeUrl: string;
    encode(_: RegisterAssetFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterAssetFeeResponse;
    fromPartial(_: Partial<RegisterAssetFeeResponse>): RegisterAssetFeeResponse;
    fromAmino(_: RegisterAssetFeeResponseAmino): RegisterAssetFeeResponse;
    toAmino(_: RegisterAssetFeeResponse): RegisterAssetFeeResponseAmino;
    fromAminoMsg(object: RegisterAssetFeeResponseAminoMsg): RegisterAssetFeeResponse;
    fromProtoMsg(message: RegisterAssetFeeResponseProtoMsg): RegisterAssetFeeResponse;
    toProto(message: RegisterAssetFeeResponse): Uint8Array;
    toProtoMsg(message: RegisterAssetFeeResponse): RegisterAssetFeeResponseProtoMsg;
};
export declare const SetTransferRateLimitRequest: {
    typeUrl: string;
    encode(message: SetTransferRateLimitRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetTransferRateLimitRequest;
    fromPartial(object: Partial<SetTransferRateLimitRequest>): SetTransferRateLimitRequest;
    fromAmino(object: SetTransferRateLimitRequestAmino): SetTransferRateLimitRequest;
    toAmino(message: SetTransferRateLimitRequest): SetTransferRateLimitRequestAmino;
    fromAminoMsg(object: SetTransferRateLimitRequestAminoMsg): SetTransferRateLimitRequest;
    fromProtoMsg(message: SetTransferRateLimitRequestProtoMsg): SetTransferRateLimitRequest;
    toProto(message: SetTransferRateLimitRequest): Uint8Array;
    toProtoMsg(message: SetTransferRateLimitRequest): SetTransferRateLimitRequestProtoMsg;
};
export declare const SetTransferRateLimitResponse: {
    typeUrl: string;
    encode(_: SetTransferRateLimitResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SetTransferRateLimitResponse;
    fromPartial(_: Partial<SetTransferRateLimitResponse>): SetTransferRateLimitResponse;
    fromAmino(_: SetTransferRateLimitResponseAmino): SetTransferRateLimitResponse;
    toAmino(_: SetTransferRateLimitResponse): SetTransferRateLimitResponseAmino;
    fromAminoMsg(object: SetTransferRateLimitResponseAminoMsg): SetTransferRateLimitResponse;
    fromProtoMsg(message: SetTransferRateLimitResponseProtoMsg): SetTransferRateLimitResponse;
    toProto(message: SetTransferRateLimitResponse): Uint8Array;
    toProtoMsg(message: SetTransferRateLimitResponse): SetTransferRateLimitResponseProtoMsg;
};
