import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Query, QueryAmino, QuerySDKType } from "./interchainquery";
import { Tx, TxAmino, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse, TxResponseAmino, TxResponseSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { TxProof, TxProofAmino, TxProofSDKType } from "../../../tendermint/types/types";
import { Header, HeaderAmino, HeaderSDKType } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import { BinaryWriter } from "../../../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequest {
    pagination?: PageRequest;
    chainId: string;
}
export interface QueryRequestsRequestProtoMsg {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestAmino {
    pagination?: PageRequestAmino;
    chain_id?: string;
}
export interface QueryRequestsRequestAminoMsg {
    type: "/quicksilver.interchainquery.v1.QueryRequestsRequest";
    value: QueryRequestsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestSDKType {
    pagination?: PageRequestSDKType;
    chain_id: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponse {
    /** params defines the parameters of the module. */
    queries: Query[];
    pagination?: PageResponse;
}
export interface QueryRequestsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseAmino {
    /** params defines the parameters of the module. */
    queries?: QueryAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryRequestsResponseAminoMsg {
    type: "/quicksilver.interchainquery.v1.QueryRequestsResponse";
    value: QueryRequestsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseSDKType {
    queries: QuerySDKType[];
    pagination?: PageResponseSDKType;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponse {
    /** tx is the queried transaction; deprecated. */
    tx?: Tx;
    /**
     * deprecated, v1.2.13
     * proof is the tmproto.TxProof for the queried tx
     */
    txResponse?: TxResponse;
    proof?: TxProof;
    /** ibc-go header to validate txs */
    header?: Header;
    /** tx_bytes is the byte representation of the queried tx */
    txBytes: Uint8Array;
}
export interface GetTxWithProofResponseProtoMsg {
    typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse";
    value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseAmino {
    /** tx is the queried transaction; deprecated. */
    tx?: TxAmino;
    /**
     * deprecated, v1.2.13
     * proof is the tmproto.TxProof for the queried tx
     */
    tx_response?: TxResponseAmino;
    proof?: TxProofAmino;
    /** ibc-go header to validate txs */
    header?: HeaderAmino;
    /** tx_bytes is the byte representation of the queried tx */
    tx_bytes?: string;
}
export interface GetTxWithProofResponseAminoMsg {
    type: "/quicksilver.interchainquery.v1.GetTxWithProofResponse";
    value: GetTxWithProofResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseSDKType {
    tx?: TxSDKType;
    tx_response?: TxResponseSDKType;
    proof?: TxProofSDKType;
    header?: HeaderSDKType;
    tx_bytes: Uint8Array;
}
export declare const QueryRequestsRequest: {
    typeUrl: string;
    encode(message: QueryRequestsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRequestsRequest;
    fromPartial(object: Partial<QueryRequestsRequest>): QueryRequestsRequest;
    fromAmino(object: QueryRequestsRequestAmino): QueryRequestsRequest;
    toAmino(message: QueryRequestsRequest): QueryRequestsRequestAmino;
    fromAminoMsg(object: QueryRequestsRequestAminoMsg): QueryRequestsRequest;
    fromProtoMsg(message: QueryRequestsRequestProtoMsg): QueryRequestsRequest;
    toProto(message: QueryRequestsRequest): Uint8Array;
    toProtoMsg(message: QueryRequestsRequest): QueryRequestsRequestProtoMsg;
};
export declare const QueryRequestsResponse: {
    typeUrl: string;
    encode(message: QueryRequestsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryRequestsResponse;
    fromPartial(object: Partial<QueryRequestsResponse>): QueryRequestsResponse;
    fromAmino(object: QueryRequestsResponseAmino): QueryRequestsResponse;
    toAmino(message: QueryRequestsResponse): QueryRequestsResponseAmino;
    fromAminoMsg(object: QueryRequestsResponseAminoMsg): QueryRequestsResponse;
    fromProtoMsg(message: QueryRequestsResponseProtoMsg): QueryRequestsResponse;
    toProto(message: QueryRequestsResponse): Uint8Array;
    toProtoMsg(message: QueryRequestsResponse): QueryRequestsResponseProtoMsg;
};
export declare const GetTxWithProofResponse: {
    typeUrl: string;
    encode(message: GetTxWithProofResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GetTxWithProofResponse;
    fromPartial(object: Partial<GetTxWithProofResponse>): GetTxWithProofResponse;
    fromAmino(object: GetTxWithProofResponseAmino): GetTxWithProofResponse;
    toAmino(message: GetTxWithProofResponse): GetTxWithProofResponseAmino;
    fromAminoMsg(object: GetTxWithProofResponseAminoMsg): GetTxWithProofResponse;
    fromProtoMsg(message: GetTxWithProofResponseProtoMsg): GetTxWithProofResponse;
    toProto(message: GetTxWithProofResponse): Uint8Array;
    toProtoMsg(message: GetTxWithProofResponse): GetTxWithProofResponseProtoMsg;
};
