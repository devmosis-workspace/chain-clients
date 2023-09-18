import { BinaryWriter } from "../../../binary";
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequest {
}
export interface QueryListPrivilegedRequestProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
    value: Uint8Array;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestAmino {
}
export interface QueryListPrivilegedRequestAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedRequest";
    value: QueryListPrivilegedRequestAmino;
}
/**
 * QueryListPrivilegedRequest is request type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedRequestSDKType {
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponse {
    /**
     * contract_addresses holds all the smart contract addresses which have
     * privilege status.
     */
    contractAddresses: string[];
}
export interface QueryListPrivilegedResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
    value: Uint8Array;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseAmino {
    /**
     * contract_addresses holds all the smart contract addresses which have
     * privilege status.
     */
    contract_addresses: string[];
}
export interface QueryListPrivilegedResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.QueryListPrivilegedResponse";
    value: QueryListPrivilegedResponseAmino;
}
/**
 * QueryListPrivilegedResponse is response type for the Query/ListPrivileged RPC
 * method.
 */
export interface QueryListPrivilegedResponseSDKType {
    contract_addresses: string[];
}
export declare const QueryListPrivilegedRequest: {
    typeUrl: string;
    encode(_: QueryListPrivilegedRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryListPrivilegedRequest;
    fromPartial(_: Partial<QueryListPrivilegedRequest>): QueryListPrivilegedRequest;
    fromAmino(_: QueryListPrivilegedRequestAmino): QueryListPrivilegedRequest;
    toAmino(_: QueryListPrivilegedRequest): QueryListPrivilegedRequestAmino;
    fromAminoMsg(object: QueryListPrivilegedRequestAminoMsg): QueryListPrivilegedRequest;
    fromProtoMsg(message: QueryListPrivilegedRequestProtoMsg): QueryListPrivilegedRequest;
    toProto(message: QueryListPrivilegedRequest): Uint8Array;
    toProtoMsg(message: QueryListPrivilegedRequest): QueryListPrivilegedRequestProtoMsg;
};
export declare const QueryListPrivilegedResponse: {
    typeUrl: string;
    encode(message: QueryListPrivilegedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryListPrivilegedResponse;
    fromPartial(object: Partial<QueryListPrivilegedResponse>): QueryListPrivilegedResponse;
    fromAmino(object: QueryListPrivilegedResponseAmino): QueryListPrivilegedResponse;
    toAmino(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseAmino;
    fromAminoMsg(object: QueryListPrivilegedResponseAminoMsg): QueryListPrivilegedResponse;
    fromProtoMsg(message: QueryListPrivilegedResponseProtoMsg): QueryListPrivilegedResponse;
    toProto(message: QueryListPrivilegedResponse): Uint8Array;
    toProtoMsg(message: QueryListPrivilegedResponse): QueryListPrivilegedResponseProtoMsg;
};
