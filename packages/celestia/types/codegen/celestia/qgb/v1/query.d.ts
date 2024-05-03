import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Valset, ValsetProtoMsg, ValsetAmino, ValsetSDKType, DataCommitment, DataCommitmentProtoMsg, DataCommitmentAmino, DataCommitmentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** QueryParamsRequest */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse */
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse */
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequest {
    /** QueryAttestationRequestByNonceRequest */
    nonce: bigint;
}
export interface QueryAttestationRequestByNonceRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest";
    value: Uint8Array;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequestAmino {
    /** QueryAttestationRequestByNonceRequest */
    nonce?: string;
}
export interface QueryAttestationRequestByNonceRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest";
    value: QueryAttestationRequestByNonceRequestAmino;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequestSDKType {
    nonce: bigint;
}
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponse {
    /**
     * AttestationRequestI is either a Data Commitment or a Valset.
     * This was decided as part of the universal nonce approach under:
     * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
     */
    attestation?: (Valset & DataCommitment & Any) | undefined;
}
export interface QueryAttestationRequestByNonceResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse";
    value: Uint8Array;
}
export type QueryAttestationRequestByNonceResponseEncoded = Omit<QueryAttestationRequestByNonceResponse, "attestation"> & {
    /**
     * AttestationRequestI is either a Data Commitment or a Valset.
     * This was decided as part of the universal nonce approach under:
     * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
     */
    attestation?: ValsetProtoMsg | DataCommitmentProtoMsg | AnyProtoMsg | undefined;
};
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponseAmino {
    /**
     * AttestationRequestI is either a Data Commitment or a Valset.
     * This was decided as part of the universal nonce approach under:
     * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
     */
    attestation?: AnyAmino;
}
export interface QueryAttestationRequestByNonceResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse";
    value: QueryAttestationRequestByNonceResponseAmino;
}
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponseSDKType {
    attestation?: ValsetSDKType | DataCommitmentSDKType | AnySDKType | undefined;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequest {
}
export interface QueryLatestAttestationNonceRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest";
    value: Uint8Array;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequestAmino {
}
export interface QueryLatestAttestationNonceRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest";
    value: QueryLatestAttestationNonceRequestAmino;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequestSDKType {
}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponse {
    /** QueryLatestAttestationNonceResponse latest attestation nonce response */
    nonce: bigint;
}
export interface QueryLatestAttestationNonceResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse";
    value: Uint8Array;
}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponseAmino {
    /** QueryLatestAttestationNonceResponse latest attestation nonce response */
    nonce?: string;
}
export interface QueryLatestAttestationNonceResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse";
    value: QueryLatestAttestationNonceResponseAmino;
}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponseSDKType {
    nonce: bigint;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequest {
}
export interface QueryEarliestAttestationNonceRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest";
    value: Uint8Array;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequestAmino {
}
export interface QueryEarliestAttestationNonceRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest";
    value: QueryEarliestAttestationNonceRequestAmino;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequestSDKType {
}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponse {
    /** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
    nonce: bigint;
}
export interface QueryEarliestAttestationNonceResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse";
    value: Uint8Array;
}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponseAmino {
    /** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
    nonce?: string;
}
export interface QueryEarliestAttestationNonceResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse";
    value: QueryEarliestAttestationNonceResponseAmino;
}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponseSDKType {
    nonce: bigint;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequest {
    /**
     * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
     * universal nonce request
     */
    nonce: bigint;
}
export interface QueryLatestValsetRequestBeforeNonceRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest";
    value: Uint8Array;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequestAmino {
    /**
     * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
     * universal nonce request
     */
    nonce?: string;
}
export interface QueryLatestValsetRequestBeforeNonceRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest";
    value: QueryLatestValsetRequestBeforeNonceRequestAmino;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequestSDKType {
    nonce: bigint;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponse {
    /**
     * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
     * height response
     */
    valset?: Valset;
}
export interface QueryLatestValsetRequestBeforeNonceResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse";
    value: Uint8Array;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponseAmino {
    /**
     * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
     * height response
     */
    valset?: ValsetAmino;
}
export interface QueryLatestValsetRequestBeforeNonceResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse";
    value: QueryLatestValsetRequestBeforeNonceResponseAmino;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponseSDKType {
    valset?: ValsetSDKType;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequest {
}
export interface QueryLatestUnbondingHeightRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest";
    value: Uint8Array;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequestAmino {
}
export interface QueryLatestUnbondingHeightRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest";
    value: QueryLatestUnbondingHeightRequestAmino;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequestSDKType {
}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponse {
    /** QueryLatestUnbondingHeightResponse */
    height: bigint;
}
export interface QueryLatestUnbondingHeightResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse";
    value: Uint8Array;
}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponseAmino {
    /** QueryLatestUnbondingHeightResponse */
    height?: string;
}
export interface QueryLatestUnbondingHeightResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse";
    value: QueryLatestUnbondingHeightResponseAmino;
}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponseSDKType {
    height: bigint;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequest {
}
export interface QueryLatestDataCommitmentRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest";
    value: Uint8Array;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequestAmino {
}
export interface QueryLatestDataCommitmentRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest";
    value: QueryLatestDataCommitmentRequestAmino;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequestSDKType {
}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponse {
    dataCommitment?: DataCommitment;
}
export interface QueryLatestDataCommitmentResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse";
    value: Uint8Array;
}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponseAmino {
    data_commitment?: DataCommitmentAmino;
}
export interface QueryLatestDataCommitmentResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse";
    value: QueryLatestDataCommitmentResponseAmino;
}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponseSDKType {
    data_commitment?: DataCommitmentSDKType;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequest {
    /** QueryDataCommitmentRangeForHeightRequest */
    height: bigint;
}
export interface QueryDataCommitmentRangeForHeightRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest";
    value: Uint8Array;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequestAmino {
    /** QueryDataCommitmentRangeForHeightRequest */
    height?: string;
}
export interface QueryDataCommitmentRangeForHeightRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest";
    value: QueryDataCommitmentRangeForHeightRequestAmino;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequestSDKType {
    height: bigint;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponse {
    dataCommitment?: DataCommitment;
}
export interface QueryDataCommitmentRangeForHeightResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse";
    value: Uint8Array;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponseAmino {
    data_commitment?: DataCommitmentAmino;
}
export interface QueryDataCommitmentRangeForHeightResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse";
    value: QueryDataCommitmentRangeForHeightResponseAmino;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponseSDKType {
    data_commitment?: DataCommitmentSDKType;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequest {
    /** QueryEVMAddressRequest */
    validatorAddress: string;
}
export interface QueryEVMAddressRequestProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryEVMAddressRequest";
    value: Uint8Array;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequestAmino {
    /** QueryEVMAddressRequest */
    validator_address?: string;
}
export interface QueryEVMAddressRequestAminoMsg {
    type: "/celestia.qgb.v1.QueryEVMAddressRequest";
    value: QueryEVMAddressRequestAmino;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequestSDKType {
    validator_address: string;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponse {
    /** QueryEVMAddressResponse */
    evmAddress: string;
}
export interface QueryEVMAddressResponseProtoMsg {
    typeUrl: "/celestia.qgb.v1.QueryEVMAddressResponse";
    value: Uint8Array;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponseAmino {
    /** QueryEVMAddressResponse */
    evm_address?: string;
}
export interface QueryEVMAddressResponseAminoMsg {
    type: "/celestia.qgb.v1.QueryEVMAddressResponse";
    value: QueryEVMAddressResponseAmino;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponseSDKType {
    evm_address: string;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryAttestationRequestByNonceRequest: {
    typeUrl: string;
    encode(message: QueryAttestationRequestByNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationRequestByNonceRequest;
    fromPartial(object: Partial<QueryAttestationRequestByNonceRequest>): QueryAttestationRequestByNonceRequest;
    fromAmino(object: QueryAttestationRequestByNonceRequestAmino): QueryAttestationRequestByNonceRequest;
    toAmino(message: QueryAttestationRequestByNonceRequest): QueryAttestationRequestByNonceRequestAmino;
    fromAminoMsg(object: QueryAttestationRequestByNonceRequestAminoMsg): QueryAttestationRequestByNonceRequest;
    fromProtoMsg(message: QueryAttestationRequestByNonceRequestProtoMsg): QueryAttestationRequestByNonceRequest;
    toProto(message: QueryAttestationRequestByNonceRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationRequestByNonceRequest): QueryAttestationRequestByNonceRequestProtoMsg;
};
export declare const QueryAttestationRequestByNonceResponse: {
    typeUrl: string;
    encode(message: QueryAttestationRequestByNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationRequestByNonceResponse;
    fromPartial(object: Partial<QueryAttestationRequestByNonceResponse>): QueryAttestationRequestByNonceResponse;
    fromAmino(object: QueryAttestationRequestByNonceResponseAmino): QueryAttestationRequestByNonceResponse;
    toAmino(message: QueryAttestationRequestByNonceResponse): QueryAttestationRequestByNonceResponseAmino;
    fromAminoMsg(object: QueryAttestationRequestByNonceResponseAminoMsg): QueryAttestationRequestByNonceResponse;
    fromProtoMsg(message: QueryAttestationRequestByNonceResponseProtoMsg): QueryAttestationRequestByNonceResponse;
    toProto(message: QueryAttestationRequestByNonceResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationRequestByNonceResponse): QueryAttestationRequestByNonceResponseProtoMsg;
};
export declare const QueryLatestAttestationNonceRequest: {
    typeUrl: string;
    encode(_: QueryLatestAttestationNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLatestAttestationNonceRequest;
    fromPartial(_: Partial<QueryLatestAttestationNonceRequest>): QueryLatestAttestationNonceRequest;
    fromAmino(_: QueryLatestAttestationNonceRequestAmino): QueryLatestAttestationNonceRequest;
    toAmino(_: QueryLatestAttestationNonceRequest): QueryLatestAttestationNonceRequestAmino;
    fromAminoMsg(object: QueryLatestAttestationNonceRequestAminoMsg): QueryLatestAttestationNonceRequest;
    fromProtoMsg(message: QueryLatestAttestationNonceRequestProtoMsg): QueryLatestAttestationNonceRequest;
    toProto(message: QueryLatestAttestationNonceRequest): Uint8Array;
    toProtoMsg(message: QueryLatestAttestationNonceRequest): QueryLatestAttestationNonceRequestProtoMsg;
};
export declare const QueryLatestAttestationNonceResponse: {
    typeUrl: string;
    encode(message: QueryLatestAttestationNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestAttestationNonceResponse;
    fromPartial(object: Partial<QueryLatestAttestationNonceResponse>): QueryLatestAttestationNonceResponse;
    fromAmino(object: QueryLatestAttestationNonceResponseAmino): QueryLatestAttestationNonceResponse;
    toAmino(message: QueryLatestAttestationNonceResponse): QueryLatestAttestationNonceResponseAmino;
    fromAminoMsg(object: QueryLatestAttestationNonceResponseAminoMsg): QueryLatestAttestationNonceResponse;
    fromProtoMsg(message: QueryLatestAttestationNonceResponseProtoMsg): QueryLatestAttestationNonceResponse;
    toProto(message: QueryLatestAttestationNonceResponse): Uint8Array;
    toProtoMsg(message: QueryLatestAttestationNonceResponse): QueryLatestAttestationNonceResponseProtoMsg;
};
export declare const QueryEarliestAttestationNonceRequest: {
    typeUrl: string;
    encode(_: QueryEarliestAttestationNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryEarliestAttestationNonceRequest;
    fromPartial(_: Partial<QueryEarliestAttestationNonceRequest>): QueryEarliestAttestationNonceRequest;
    fromAmino(_: QueryEarliestAttestationNonceRequestAmino): QueryEarliestAttestationNonceRequest;
    toAmino(_: QueryEarliestAttestationNonceRequest): QueryEarliestAttestationNonceRequestAmino;
    fromAminoMsg(object: QueryEarliestAttestationNonceRequestAminoMsg): QueryEarliestAttestationNonceRequest;
    fromProtoMsg(message: QueryEarliestAttestationNonceRequestProtoMsg): QueryEarliestAttestationNonceRequest;
    toProto(message: QueryEarliestAttestationNonceRequest): Uint8Array;
    toProtoMsg(message: QueryEarliestAttestationNonceRequest): QueryEarliestAttestationNonceRequestProtoMsg;
};
export declare const QueryEarliestAttestationNonceResponse: {
    typeUrl: string;
    encode(message: QueryEarliestAttestationNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEarliestAttestationNonceResponse;
    fromPartial(object: Partial<QueryEarliestAttestationNonceResponse>): QueryEarliestAttestationNonceResponse;
    fromAmino(object: QueryEarliestAttestationNonceResponseAmino): QueryEarliestAttestationNonceResponse;
    toAmino(message: QueryEarliestAttestationNonceResponse): QueryEarliestAttestationNonceResponseAmino;
    fromAminoMsg(object: QueryEarliestAttestationNonceResponseAminoMsg): QueryEarliestAttestationNonceResponse;
    fromProtoMsg(message: QueryEarliestAttestationNonceResponseProtoMsg): QueryEarliestAttestationNonceResponse;
    toProto(message: QueryEarliestAttestationNonceResponse): Uint8Array;
    toProtoMsg(message: QueryEarliestAttestationNonceResponse): QueryEarliestAttestationNonceResponseProtoMsg;
};
export declare const QueryLatestValsetRequestBeforeNonceRequest: {
    typeUrl: string;
    encode(message: QueryLatestValsetRequestBeforeNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestValsetRequestBeforeNonceRequest;
    fromPartial(object: Partial<QueryLatestValsetRequestBeforeNonceRequest>): QueryLatestValsetRequestBeforeNonceRequest;
    fromAmino(object: QueryLatestValsetRequestBeforeNonceRequestAmino): QueryLatestValsetRequestBeforeNonceRequest;
    toAmino(message: QueryLatestValsetRequestBeforeNonceRequest): QueryLatestValsetRequestBeforeNonceRequestAmino;
    fromAminoMsg(object: QueryLatestValsetRequestBeforeNonceRequestAminoMsg): QueryLatestValsetRequestBeforeNonceRequest;
    fromProtoMsg(message: QueryLatestValsetRequestBeforeNonceRequestProtoMsg): QueryLatestValsetRequestBeforeNonceRequest;
    toProto(message: QueryLatestValsetRequestBeforeNonceRequest): Uint8Array;
    toProtoMsg(message: QueryLatestValsetRequestBeforeNonceRequest): QueryLatestValsetRequestBeforeNonceRequestProtoMsg;
};
export declare const QueryLatestValsetRequestBeforeNonceResponse: {
    typeUrl: string;
    encode(message: QueryLatestValsetRequestBeforeNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestValsetRequestBeforeNonceResponse;
    fromPartial(object: Partial<QueryLatestValsetRequestBeforeNonceResponse>): QueryLatestValsetRequestBeforeNonceResponse;
    fromAmino(object: QueryLatestValsetRequestBeforeNonceResponseAmino): QueryLatestValsetRequestBeforeNonceResponse;
    toAmino(message: QueryLatestValsetRequestBeforeNonceResponse): QueryLatestValsetRequestBeforeNonceResponseAmino;
    fromAminoMsg(object: QueryLatestValsetRequestBeforeNonceResponseAminoMsg): QueryLatestValsetRequestBeforeNonceResponse;
    fromProtoMsg(message: QueryLatestValsetRequestBeforeNonceResponseProtoMsg): QueryLatestValsetRequestBeforeNonceResponse;
    toProto(message: QueryLatestValsetRequestBeforeNonceResponse): Uint8Array;
    toProtoMsg(message: QueryLatestValsetRequestBeforeNonceResponse): QueryLatestValsetRequestBeforeNonceResponseProtoMsg;
};
export declare const QueryLatestUnbondingHeightRequest: {
    typeUrl: string;
    encode(_: QueryLatestUnbondingHeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLatestUnbondingHeightRequest;
    fromPartial(_: Partial<QueryLatestUnbondingHeightRequest>): QueryLatestUnbondingHeightRequest;
    fromAmino(_: QueryLatestUnbondingHeightRequestAmino): QueryLatestUnbondingHeightRequest;
    toAmino(_: QueryLatestUnbondingHeightRequest): QueryLatestUnbondingHeightRequestAmino;
    fromAminoMsg(object: QueryLatestUnbondingHeightRequestAminoMsg): QueryLatestUnbondingHeightRequest;
    fromProtoMsg(message: QueryLatestUnbondingHeightRequestProtoMsg): QueryLatestUnbondingHeightRequest;
    toProto(message: QueryLatestUnbondingHeightRequest): Uint8Array;
    toProtoMsg(message: QueryLatestUnbondingHeightRequest): QueryLatestUnbondingHeightRequestProtoMsg;
};
export declare const QueryLatestUnbondingHeightResponse: {
    typeUrl: string;
    encode(message: QueryLatestUnbondingHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestUnbondingHeightResponse;
    fromPartial(object: Partial<QueryLatestUnbondingHeightResponse>): QueryLatestUnbondingHeightResponse;
    fromAmino(object: QueryLatestUnbondingHeightResponseAmino): QueryLatestUnbondingHeightResponse;
    toAmino(message: QueryLatestUnbondingHeightResponse): QueryLatestUnbondingHeightResponseAmino;
    fromAminoMsg(object: QueryLatestUnbondingHeightResponseAminoMsg): QueryLatestUnbondingHeightResponse;
    fromProtoMsg(message: QueryLatestUnbondingHeightResponseProtoMsg): QueryLatestUnbondingHeightResponse;
    toProto(message: QueryLatestUnbondingHeightResponse): Uint8Array;
    toProtoMsg(message: QueryLatestUnbondingHeightResponse): QueryLatestUnbondingHeightResponseProtoMsg;
};
export declare const QueryLatestDataCommitmentRequest: {
    typeUrl: string;
    encode(_: QueryLatestDataCommitmentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLatestDataCommitmentRequest;
    fromPartial(_: Partial<QueryLatestDataCommitmentRequest>): QueryLatestDataCommitmentRequest;
    fromAmino(_: QueryLatestDataCommitmentRequestAmino): QueryLatestDataCommitmentRequest;
    toAmino(_: QueryLatestDataCommitmentRequest): QueryLatestDataCommitmentRequestAmino;
    fromAminoMsg(object: QueryLatestDataCommitmentRequestAminoMsg): QueryLatestDataCommitmentRequest;
    fromProtoMsg(message: QueryLatestDataCommitmentRequestProtoMsg): QueryLatestDataCommitmentRequest;
    toProto(message: QueryLatestDataCommitmentRequest): Uint8Array;
    toProtoMsg(message: QueryLatestDataCommitmentRequest): QueryLatestDataCommitmentRequestProtoMsg;
};
export declare const QueryLatestDataCommitmentResponse: {
    typeUrl: string;
    encode(message: QueryLatestDataCommitmentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLatestDataCommitmentResponse;
    fromPartial(object: Partial<QueryLatestDataCommitmentResponse>): QueryLatestDataCommitmentResponse;
    fromAmino(object: QueryLatestDataCommitmentResponseAmino): QueryLatestDataCommitmentResponse;
    toAmino(message: QueryLatestDataCommitmentResponse): QueryLatestDataCommitmentResponseAmino;
    fromAminoMsg(object: QueryLatestDataCommitmentResponseAminoMsg): QueryLatestDataCommitmentResponse;
    fromProtoMsg(message: QueryLatestDataCommitmentResponseProtoMsg): QueryLatestDataCommitmentResponse;
    toProto(message: QueryLatestDataCommitmentResponse): Uint8Array;
    toProtoMsg(message: QueryLatestDataCommitmentResponse): QueryLatestDataCommitmentResponseProtoMsg;
};
export declare const QueryDataCommitmentRangeForHeightRequest: {
    typeUrl: string;
    encode(message: QueryDataCommitmentRangeForHeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataCommitmentRangeForHeightRequest;
    fromPartial(object: Partial<QueryDataCommitmentRangeForHeightRequest>): QueryDataCommitmentRangeForHeightRequest;
    fromAmino(object: QueryDataCommitmentRangeForHeightRequestAmino): QueryDataCommitmentRangeForHeightRequest;
    toAmino(message: QueryDataCommitmentRangeForHeightRequest): QueryDataCommitmentRangeForHeightRequestAmino;
    fromAminoMsg(object: QueryDataCommitmentRangeForHeightRequestAminoMsg): QueryDataCommitmentRangeForHeightRequest;
    fromProtoMsg(message: QueryDataCommitmentRangeForHeightRequestProtoMsg): QueryDataCommitmentRangeForHeightRequest;
    toProto(message: QueryDataCommitmentRangeForHeightRequest): Uint8Array;
    toProtoMsg(message: QueryDataCommitmentRangeForHeightRequest): QueryDataCommitmentRangeForHeightRequestProtoMsg;
};
export declare const QueryDataCommitmentRangeForHeightResponse: {
    typeUrl: string;
    encode(message: QueryDataCommitmentRangeForHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDataCommitmentRangeForHeightResponse;
    fromPartial(object: Partial<QueryDataCommitmentRangeForHeightResponse>): QueryDataCommitmentRangeForHeightResponse;
    fromAmino(object: QueryDataCommitmentRangeForHeightResponseAmino): QueryDataCommitmentRangeForHeightResponse;
    toAmino(message: QueryDataCommitmentRangeForHeightResponse): QueryDataCommitmentRangeForHeightResponseAmino;
    fromAminoMsg(object: QueryDataCommitmentRangeForHeightResponseAminoMsg): QueryDataCommitmentRangeForHeightResponse;
    fromProtoMsg(message: QueryDataCommitmentRangeForHeightResponseProtoMsg): QueryDataCommitmentRangeForHeightResponse;
    toProto(message: QueryDataCommitmentRangeForHeightResponse): Uint8Array;
    toProtoMsg(message: QueryDataCommitmentRangeForHeightResponse): QueryDataCommitmentRangeForHeightResponseProtoMsg;
};
export declare const QueryEVMAddressRequest: {
    typeUrl: string;
    encode(message: QueryEVMAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEVMAddressRequest;
    fromPartial(object: Partial<QueryEVMAddressRequest>): QueryEVMAddressRequest;
    fromAmino(object: QueryEVMAddressRequestAmino): QueryEVMAddressRequest;
    toAmino(message: QueryEVMAddressRequest): QueryEVMAddressRequestAmino;
    fromAminoMsg(object: QueryEVMAddressRequestAminoMsg): QueryEVMAddressRequest;
    fromProtoMsg(message: QueryEVMAddressRequestProtoMsg): QueryEVMAddressRequest;
    toProto(message: QueryEVMAddressRequest): Uint8Array;
    toProtoMsg(message: QueryEVMAddressRequest): QueryEVMAddressRequestProtoMsg;
};
export declare const QueryEVMAddressResponse: {
    typeUrl: string;
    encode(message: QueryEVMAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryEVMAddressResponse;
    fromPartial(object: Partial<QueryEVMAddressResponse>): QueryEVMAddressResponse;
    fromAmino(object: QueryEVMAddressResponseAmino): QueryEVMAddressResponse;
    toAmino(message: QueryEVMAddressResponse): QueryEVMAddressResponseAmino;
    fromAminoMsg(object: QueryEVMAddressResponseAminoMsg): QueryEVMAddressResponse;
    fromProtoMsg(message: QueryEVMAddressResponseProtoMsg): QueryEVMAddressResponse;
    toProto(message: QueryEVMAddressResponse): Uint8Array;
    toProtoMsg(message: QueryEVMAddressResponse): QueryEVMAddressResponseProtoMsg;
};
export declare const AttestationRequestI_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Valset | DataCommitment | Any;
export declare const AttestationRequestI_FromAmino: (content: AnyAmino) => Any;
export declare const AttestationRequestI_ToAmino: (content: Any) => AnyAmino;
