import { LegacyAminoPubKey, LegacyAminoPubKeyAmino, LegacyAminoPubKeySDKType } from "../../../cosmos/crypto/multisig/keys";
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
