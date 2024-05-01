import { BinaryWriter } from "../../../binary";
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connectionId: string;
}
export interface QueryInterchainAccountFromAddressRequestProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.QueryInterchainAccountFromAddressRequest";
    value: Uint8Array;
}
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequestAmino {
    owner?: string;
    connection_id?: string;
}
export interface QueryInterchainAccountFromAddressRequestAminoMsg {
    type: "/secret.intertx.v1beta1.QueryInterchainAccountFromAddressRequest";
    value: QueryInterchainAccountFromAddressRequestAmino;
}
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequestSDKType {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountFromAddressResponseProtoMsg {
    typeUrl: "/secret.intertx.v1beta1.QueryInterchainAccountFromAddressResponse";
    value: Uint8Array;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponseAmino {
    interchain_account_address?: string;
}
export interface QueryInterchainAccountFromAddressResponseAminoMsg {
    type: "/secret.intertx.v1beta1.QueryInterchainAccountFromAddressResponse";
    value: QueryInterchainAccountFromAddressResponseAmino;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponseSDKType {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressRequest>): QueryInterchainAccountFromAddressRequest;
    fromAmino(object: QueryInterchainAccountFromAddressRequestAmino): QueryInterchainAccountFromAddressRequest;
    toAmino(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountFromAddressRequestAminoMsg): QueryInterchainAccountFromAddressRequest;
    fromProtoMsg(message: QueryInterchainAccountFromAddressRequestProtoMsg): QueryInterchainAccountFromAddressRequest;
    toProto(message: QueryInterchainAccountFromAddressRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountFromAddressRequest): QueryInterchainAccountFromAddressRequestProtoMsg;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountFromAddressResponse>): QueryInterchainAccountFromAddressResponse;
    fromAmino(object: QueryInterchainAccountFromAddressResponseAmino): QueryInterchainAccountFromAddressResponse;
    toAmino(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountFromAddressResponseAminoMsg): QueryInterchainAccountFromAddressResponse;
    fromProtoMsg(message: QueryInterchainAccountFromAddressResponseProtoMsg): QueryInterchainAccountFromAddressResponse;
    toProto(message: QueryInterchainAccountFromAddressResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountFromAddressResponse): QueryInterchainAccountFromAddressResponseProtoMsg;
};
