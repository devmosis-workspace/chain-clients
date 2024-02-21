import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/neutron.interchaintxs.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/neutron.interchaintxs.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryInterchainAccountAddressRequest {
    /**
     * owner_address is the owner of the interchain account on the controller
     * chain
     */
    ownerAddress: string;
    /**
     * interchain_account_id is an identifier of your interchain account from
     * which you want to execute msgs
     */
    interchainAccountId: string;
    /**
     * connection_id is an IBC connection identifier between Neutron and remote
     * chain
     */
    connectionId: string;
}
export interface QueryInterchainAccountAddressRequestProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressRequest";
    value: Uint8Array;
}
export interface QueryInterchainAccountAddressRequestAmino {
    /**
     * owner_address is the owner of the interchain account on the controller
     * chain
     */
    owner_address?: string;
    /**
     * interchain_account_id is an identifier of your interchain account from
     * which you want to execute msgs
     */
    interchain_account_id?: string;
    /**
     * connection_id is an IBC connection identifier between Neutron and remote
     * chain
     */
    connection_id?: string;
}
export interface QueryInterchainAccountAddressRequestAminoMsg {
    type: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressRequest";
    value: QueryInterchainAccountAddressRequestAmino;
}
export interface QueryInterchainAccountAddressRequestSDKType {
    owner_address: string;
    interchain_account_id: string;
    connection_id: string;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponse {
    /** The corresponding interchain account address on the host chain */
    interchainAccountAddress: string;
}
export interface QueryInterchainAccountAddressResponseProtoMsg {
    typeUrl: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressResponse";
    value: Uint8Array;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseAmino {
    /** The corresponding interchain account address on the host chain */
    interchain_account_address?: string;
}
export interface QueryInterchainAccountAddressResponseAminoMsg {
    type: "/neutron.interchaintxs.v1.QueryInterchainAccountAddressResponse";
    value: QueryInterchainAccountAddressResponseAmino;
}
/** Query response for an interchain account address */
export interface QueryInterchainAccountAddressResponseSDKType {
    interchain_account_address: string;
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
export declare const QueryInterchainAccountAddressRequest: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountAddressRequest;
    fromPartial(object: Partial<QueryInterchainAccountAddressRequest>): QueryInterchainAccountAddressRequest;
    fromAmino(object: QueryInterchainAccountAddressRequestAmino): QueryInterchainAccountAddressRequest;
    toAmino(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestAmino;
    fromAminoMsg(object: QueryInterchainAccountAddressRequestAminoMsg): QueryInterchainAccountAddressRequest;
    fromProtoMsg(message: QueryInterchainAccountAddressRequestProtoMsg): QueryInterchainAccountAddressRequest;
    toProto(message: QueryInterchainAccountAddressRequest): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountAddressRequest): QueryInterchainAccountAddressRequestProtoMsg;
};
export declare const QueryInterchainAccountAddressResponse: {
    typeUrl: string;
    encode(message: QueryInterchainAccountAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryInterchainAccountAddressResponse;
    fromPartial(object: Partial<QueryInterchainAccountAddressResponse>): QueryInterchainAccountAddressResponse;
    fromAmino(object: QueryInterchainAccountAddressResponseAmino): QueryInterchainAccountAddressResponse;
    toAmino(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseAmino;
    fromAminoMsg(object: QueryInterchainAccountAddressResponseAminoMsg): QueryInterchainAccountAddressResponse;
    fromProtoMsg(message: QueryInterchainAccountAddressResponseProtoMsg): QueryInterchainAccountAddressResponse;
    toProto(message: QueryInterchainAccountAddressResponse): Uint8Array;
    toProtoMsg(message: QueryInterchainAccountAddressResponse): QueryInterchainAccountAddressResponseProtoMsg;
};
