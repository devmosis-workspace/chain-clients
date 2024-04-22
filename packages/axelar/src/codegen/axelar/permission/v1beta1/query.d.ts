import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequest {
}
export interface QueryGovernanceKeyRequestProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest";
    value: Uint8Array;
}
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequestAmino {
}
export interface QueryGovernanceKeyRequestAminoMsg {
    type: "/axelar.permission.v1beta1.QueryGovernanceKeyRequest";
    value: QueryGovernanceKeyRequestAmino;
}
/**
 * QueryGovernanceKeyRequest is the request type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyRequestSDKType {
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponse {
    governanceKey: LegacyAminoPubKey;
}
export interface QueryGovernanceKeyResponseProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse";
    value: Uint8Array;
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponseAmino {
    governance_key?: LegacyAminoPubKeyAmino;
}
export interface QueryGovernanceKeyResponseAminoMsg {
    type: "/axelar.permission.v1beta1.QueryGovernanceKeyResponse";
    value: QueryGovernanceKeyResponseAmino;
}
/**
 * QueryGovernanceKeyResponse is the response type for the
 * Query/GovernanceKey RPC method
 */
export interface QueryGovernanceKeyResponseSDKType {
    governance_key: LegacyAminoPubKeySDKType;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequest {
}
export interface ParamsRequestProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.ParamsRequest";
    value: Uint8Array;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestAmino {
}
export interface ParamsRequestAminoMsg {
    type: "/axelar.permission.v1beta1.ParamsRequest";
    value: ParamsRequestAmino;
}
/** ParamsRequest represents a message that queries the params */
export interface ParamsRequestSDKType {
}
export interface ParamsResponse {
    params: Params;
}
export interface ParamsResponseProtoMsg {
    typeUrl: "/axelar.permission.v1beta1.ParamsResponse";
    value: Uint8Array;
}
export interface ParamsResponseAmino {
    params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
    type: "/axelar.permission.v1beta1.ParamsResponse";
    value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
    params: ParamsSDKType;
}
export declare const QueryGovernanceKeyRequest: {
    typeUrl: string;
    encode(_: QueryGovernanceKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryGovernanceKeyRequest;
    fromPartial(_: Partial<QueryGovernanceKeyRequest>): QueryGovernanceKeyRequest;
    fromAmino(_: QueryGovernanceKeyRequestAmino): QueryGovernanceKeyRequest;
    toAmino(_: QueryGovernanceKeyRequest): QueryGovernanceKeyRequestAmino;
    fromAminoMsg(object: QueryGovernanceKeyRequestAminoMsg): QueryGovernanceKeyRequest;
    fromProtoMsg(message: QueryGovernanceKeyRequestProtoMsg): QueryGovernanceKeyRequest;
    toProto(message: QueryGovernanceKeyRequest): Uint8Array;
    toProtoMsg(message: QueryGovernanceKeyRequest): QueryGovernanceKeyRequestProtoMsg;
};
export declare const QueryGovernanceKeyResponse: {
    typeUrl: string;
    encode(message: QueryGovernanceKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGovernanceKeyResponse;
    fromPartial(object: Partial<QueryGovernanceKeyResponse>): QueryGovernanceKeyResponse;
    fromAmino(object: QueryGovernanceKeyResponseAmino): QueryGovernanceKeyResponse;
    toAmino(message: QueryGovernanceKeyResponse): QueryGovernanceKeyResponseAmino;
    fromAminoMsg(object: QueryGovernanceKeyResponseAminoMsg): QueryGovernanceKeyResponse;
    fromProtoMsg(message: QueryGovernanceKeyResponseProtoMsg): QueryGovernanceKeyResponse;
    toProto(message: QueryGovernanceKeyResponse): Uint8Array;
    toProtoMsg(message: QueryGovernanceKeyResponse): QueryGovernanceKeyResponseProtoMsg;
};
export declare const ParamsRequest: {
    typeUrl: string;
    encode(_: ParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ParamsRequest;
    fromPartial(_: Partial<ParamsRequest>): ParamsRequest;
    fromAmino(_: ParamsRequestAmino): ParamsRequest;
    toAmino(_: ParamsRequest): ParamsRequestAmino;
    fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest;
    fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest;
    toProto(message: ParamsRequest): Uint8Array;
    toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg;
};
export declare const ParamsResponse: {
    typeUrl: string;
    encode(message: ParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ParamsResponse;
    fromPartial(object: Partial<ParamsResponse>): ParamsResponse;
    fromAmino(object: ParamsResponseAmino): ParamsResponse;
    toAmino(message: ParamsResponse): ParamsResponseAmino;
    fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse;
    fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse;
    toProto(message: ParamsResponse): Uint8Array;
    toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg;
};
