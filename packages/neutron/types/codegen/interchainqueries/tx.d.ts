import { KVKey, KVKeyAmino, KVKeySDKType } from "./genesis";
import { ProofOps, ProofOpsAmino, ProofOpsSDKType, Proof, ProofAmino, ProofSDKType } from "../tendermint/crypto/proof";
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { ResponseDeliverTx, ResponseDeliverTxAmino, ResponseDeliverTxSDKType } from "../tendermint/abci/types";
import { BinaryWriter } from "../binary";
export interface MsgRegisterInterchainQuery {
    /** defines a query type: `kv` or `tx` now */
    queryType: string;
    /**
     * is used to define KV-storage keys for which we want to get values from
     * remote chain
     */
    keys: KVKey[];
    /** is used to define a filter for transaction search ICQ */
    transactionsFilter: string;
    /** is IBC connection ID for getting ConsensusState to verify proofs */
    connectionId: string;
    /** is used to specify how often (in neutron blocks) the query must be updated */
    updatePeriod: bigint;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRegisterInterchainQueryProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
    value: Uint8Array;
}
export interface MsgRegisterInterchainQueryAmino {
    /** defines a query type: `kv` or `tx` now */
    query_type: string;
    /**
     * is used to define KV-storage keys for which we want to get values from
     * remote chain
     */
    keys: KVKeyAmino[];
    /** is used to define a filter for transaction search ICQ */
    transactions_filter: string;
    /** is IBC connection ID for getting ConsensusState to verify proofs */
    connection_id: string;
    /** is used to specify how often (in neutron blocks) the query must be updated */
    update_period: string;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRegisterInterchainQueryAminoMsg {
    type: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
    value: MsgRegisterInterchainQueryAmino;
}
export interface MsgRegisterInterchainQuerySDKType {
    query_type: string;
    keys: KVKeySDKType[];
    transactions_filter: string;
    connection_id: string;
    update_period: bigint;
    sender: string;
}
export interface MsgRegisterInterchainQueryResponse {
    id: bigint;
}
export interface MsgRegisterInterchainQueryResponseProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse";
    value: Uint8Array;
}
export interface MsgRegisterInterchainQueryResponseAmino {
    id: string;
}
export interface MsgRegisterInterchainQueryResponseAminoMsg {
    type: "/neutron.interchainqueries.MsgRegisterInterchainQueryResponse";
    value: MsgRegisterInterchainQueryResponseAmino;
}
export interface MsgRegisterInterchainQueryResponseSDKType {
    id: bigint;
}
export interface MsgSubmitQueryResult {
    queryId: bigint;
    sender: string;
    /**
     * is the IBC client ID for an IBC connection between Neutron chain and target
     * chain (where the result was obtained from)
     */
    clientId: string;
    result: QueryResult;
}
export interface MsgSubmitQueryResultProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResult";
    value: Uint8Array;
}
export interface MsgSubmitQueryResultAmino {
    query_id: string;
    sender: string;
    /**
     * is the IBC client ID for an IBC connection between Neutron chain and target
     * chain (where the result was obtained from)
     */
    client_id: string;
    result?: QueryResultAmino;
}
export interface MsgSubmitQueryResultAminoMsg {
    type: "/neutron.interchainqueries.MsgSubmitQueryResult";
    value: MsgSubmitQueryResultAmino;
}
export interface MsgSubmitQueryResultSDKType {
    query_id: bigint;
    sender: string;
    client_id: string;
    result: QueryResultSDKType;
}
export interface QueryResult {
    kvResults: StorageValue[];
    block: Block;
    height: bigint;
    revision: bigint;
    allowKvCallbacks: boolean;
}
export interface QueryResultProtoMsg {
    typeUrl: "/neutron.interchainqueries.QueryResult";
    value: Uint8Array;
}
export interface QueryResultAmino {
    kv_results: StorageValueAmino[];
    block?: BlockAmino;
    height: string;
    revision: string;
    allow_kv_callbacks: boolean;
}
export interface QueryResultAminoMsg {
    type: "/neutron.interchainqueries.QueryResult";
    value: QueryResultAmino;
}
export interface QueryResultSDKType {
    kv_results: StorageValueSDKType[];
    block: BlockSDKType;
    height: bigint;
    revision: bigint;
    allow_kv_callbacks: boolean;
}
export interface StorageValue {
    /** is the substore name (acc, staking, etc.) */
    storagePrefix: string;
    /** is the key in IAVL store */
    key: Uint8Array;
    /** is the value in IAVL store */
    value: Uint8Array;
    /**
     * is the Merkle Proof which proves existence of key-value pair in IAVL
     * storage
     */
    Proof: ProofOps;
}
export interface StorageValueProtoMsg {
    typeUrl: "/neutron.interchainqueries.StorageValue";
    value: Uint8Array;
}
export interface StorageValueAmino {
    /** is the substore name (acc, staking, etc.) */
    storage_prefix: string;
    /** is the key in IAVL store */
    key: Uint8Array;
    /** is the value in IAVL store */
    value: Uint8Array;
    /**
     * is the Merkle Proof which proves existence of key-value pair in IAVL
     * storage
     */
    Proof?: ProofOpsAmino;
}
export interface StorageValueAminoMsg {
    type: "/neutron.interchainqueries.StorageValue";
    value: StorageValueAmino;
}
export interface StorageValueSDKType {
    storage_prefix: string;
    key: Uint8Array;
    value: Uint8Array;
    Proof: ProofOpsSDKType;
}
export interface Block {
    /**
     * We need to know block X+1 to verify response of transaction for block X
     * since LastResultsHash is root hash of all results from the txs from the
     * previous block
     */
    nextBlockHeader: Any;
    /** We need to know block X to verify inclusion of transaction for block X */
    header: Any;
    tx: TxValue;
}
export interface BlockProtoMsg {
    typeUrl: "/neutron.interchainqueries.Block";
    value: Uint8Array;
}
export interface BlockAmino {
    /**
     * We need to know block X+1 to verify response of transaction for block X
     * since LastResultsHash is root hash of all results from the txs from the
     * previous block
     */
    next_block_header?: AnyAmino;
    /** We need to know block X to verify inclusion of transaction for block X */
    header?: AnyAmino;
    tx?: TxValueAmino;
}
export interface BlockAminoMsg {
    type: "/neutron.interchainqueries.Block";
    value: BlockAmino;
}
export interface BlockSDKType {
    next_block_header: AnySDKType;
    header: AnySDKType;
    tx: TxValueSDKType;
}
export interface TxValue {
    response: ResponseDeliverTx;
    /**
     * is the Merkle Proof which proves existence of response in block with height
     * next_block_header.Height
     */
    deliveryProof: Proof;
    /**
     * is the Merkle Proof which proves existence of data in block with height
     * header.Height
     */
    inclusionProof: Proof;
    /** is body of the transaction */
    data: Uint8Array;
}
export interface TxValueProtoMsg {
    typeUrl: "/neutron.interchainqueries.TxValue";
    value: Uint8Array;
}
export interface TxValueAmino {
    response?: ResponseDeliverTxAmino;
    /**
     * is the Merkle Proof which proves existence of response in block with height
     * next_block_header.Height
     */
    delivery_proof?: ProofAmino;
    /**
     * is the Merkle Proof which proves existence of data in block with height
     * header.Height
     */
    inclusion_proof?: ProofAmino;
    /** is body of the transaction */
    data: Uint8Array;
}
export interface TxValueAminoMsg {
    type: "/neutron.interchainqueries.TxValue";
    value: TxValueAmino;
}
export interface TxValueSDKType {
    response: ResponseDeliverTxSDKType;
    delivery_proof: ProofSDKType;
    inclusion_proof: ProofSDKType;
    data: Uint8Array;
}
export interface MsgSubmitQueryResultResponse {
}
export interface MsgSubmitQueryResultResponseProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgSubmitQueryResultResponse";
    value: Uint8Array;
}
export interface MsgSubmitQueryResultResponseAmino {
}
export interface MsgSubmitQueryResultResponseAminoMsg {
    type: "/neutron.interchainqueries.MsgSubmitQueryResultResponse";
    value: MsgSubmitQueryResultResponseAmino;
}
export interface MsgSubmitQueryResultResponseSDKType {
}
export interface MsgRemoveInterchainQueryRequest {
    queryId: bigint;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRemoveInterchainQueryRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
    value: Uint8Array;
}
export interface MsgRemoveInterchainQueryRequestAmino {
    query_id: string;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRemoveInterchainQueryRequestAminoMsg {
    type: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
    value: MsgRemoveInterchainQueryRequestAmino;
}
export interface MsgRemoveInterchainQueryRequestSDKType {
    query_id: bigint;
    sender: string;
}
export interface MsgRemoveInterchainQueryResponse {
}
export interface MsgRemoveInterchainQueryResponseProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse";
    value: Uint8Array;
}
export interface MsgRemoveInterchainQueryResponseAmino {
}
export interface MsgRemoveInterchainQueryResponseAminoMsg {
    type: "/neutron.interchainqueries.MsgRemoveInterchainQueryResponse";
    value: MsgRemoveInterchainQueryResponseAmino;
}
export interface MsgRemoveInterchainQueryResponseSDKType {
}
export interface MsgUpdateInterchainQueryRequest {
    queryId: bigint;
    newKeys: KVKey[];
    newUpdatePeriod: bigint;
    newTransactionsFilter: string;
    /** is the signer of the message */
    sender: string;
}
export interface MsgUpdateInterchainQueryRequestProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
    value: Uint8Array;
}
export interface MsgUpdateInterchainQueryRequestAmino {
    query_id: string;
    new_keys: KVKeyAmino[];
    new_update_period: string;
    new_transactions_filter: string;
    /** is the signer of the message */
    sender: string;
}
export interface MsgUpdateInterchainQueryRequestAminoMsg {
    type: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
    value: MsgUpdateInterchainQueryRequestAmino;
}
export interface MsgUpdateInterchainQueryRequestSDKType {
    query_id: bigint;
    new_keys: KVKeySDKType[];
    new_update_period: bigint;
    new_transactions_filter: string;
    sender: string;
}
export interface MsgUpdateInterchainQueryResponse {
}
export interface MsgUpdateInterchainQueryResponseProtoMsg {
    typeUrl: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse";
    value: Uint8Array;
}
export interface MsgUpdateInterchainQueryResponseAmino {
}
export interface MsgUpdateInterchainQueryResponseAminoMsg {
    type: "/neutron.interchainqueries.MsgUpdateInterchainQueryResponse";
    value: MsgUpdateInterchainQueryResponseAmino;
}
export interface MsgUpdateInterchainQueryResponseSDKType {
}
export declare const MsgRegisterInterchainQuery: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainQuery, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterInterchainQuery;
    fromPartial(object: Partial<MsgRegisterInterchainQuery>): MsgRegisterInterchainQuery;
    fromAmino(object: MsgRegisterInterchainQueryAmino): MsgRegisterInterchainQuery;
    toAmino(message: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryAmino;
    fromAminoMsg(object: MsgRegisterInterchainQueryAminoMsg): MsgRegisterInterchainQuery;
    fromProtoMsg(message: MsgRegisterInterchainQueryProtoMsg): MsgRegisterInterchainQuery;
    toProto(message: MsgRegisterInterchainQuery): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryProtoMsg;
};
export declare const MsgRegisterInterchainQueryResponse: {
    typeUrl: string;
    encode(message: MsgRegisterInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterInterchainQueryResponse;
    fromPartial(object: Partial<MsgRegisterInterchainQueryResponse>): MsgRegisterInterchainQueryResponse;
    fromAmino(object: MsgRegisterInterchainQueryResponseAmino): MsgRegisterInterchainQueryResponse;
    toAmino(message: MsgRegisterInterchainQueryResponse): MsgRegisterInterchainQueryResponseAmino;
    fromAminoMsg(object: MsgRegisterInterchainQueryResponseAminoMsg): MsgRegisterInterchainQueryResponse;
    fromProtoMsg(message: MsgRegisterInterchainQueryResponseProtoMsg): MsgRegisterInterchainQueryResponse;
    toProto(message: MsgRegisterInterchainQueryResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterInterchainQueryResponse): MsgRegisterInterchainQueryResponseProtoMsg;
};
export declare const MsgSubmitQueryResult: {
    typeUrl: string;
    encode(message: MsgSubmitQueryResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitQueryResult;
    fromPartial(object: Partial<MsgSubmitQueryResult>): MsgSubmitQueryResult;
    fromAmino(object: MsgSubmitQueryResultAmino): MsgSubmitQueryResult;
    toAmino(message: MsgSubmitQueryResult): MsgSubmitQueryResultAmino;
    fromAminoMsg(object: MsgSubmitQueryResultAminoMsg): MsgSubmitQueryResult;
    fromProtoMsg(message: MsgSubmitQueryResultProtoMsg): MsgSubmitQueryResult;
    toProto(message: MsgSubmitQueryResult): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResult): MsgSubmitQueryResultProtoMsg;
};
export declare const QueryResult: {
    typeUrl: string;
    encode(message: QueryResult, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResult;
    fromPartial(object: Partial<QueryResult>): QueryResult;
    fromAmino(object: QueryResultAmino): QueryResult;
    toAmino(message: QueryResult): QueryResultAmino;
    fromAminoMsg(object: QueryResultAminoMsg): QueryResult;
    fromProtoMsg(message: QueryResultProtoMsg): QueryResult;
    toProto(message: QueryResult): Uint8Array;
    toProtoMsg(message: QueryResult): QueryResultProtoMsg;
};
export declare const StorageValue: {
    typeUrl: string;
    encode(message: StorageValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): StorageValue;
    fromPartial(object: Partial<StorageValue>): StorageValue;
    fromAmino(object: StorageValueAmino): StorageValue;
    toAmino(message: StorageValue): StorageValueAmino;
    fromAminoMsg(object: StorageValueAminoMsg): StorageValue;
    fromProtoMsg(message: StorageValueProtoMsg): StorageValue;
    toProto(message: StorageValue): Uint8Array;
    toProtoMsg(message: StorageValue): StorageValueProtoMsg;
};
export declare const Block: {
    typeUrl: string;
    encode(message: Block, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Block;
    fromPartial(object: Partial<Block>): Block;
    fromAmino(object: BlockAmino): Block;
    toAmino(message: Block): BlockAmino;
    fromAminoMsg(object: BlockAminoMsg): Block;
    fromProtoMsg(message: BlockProtoMsg): Block;
    toProto(message: Block): Uint8Array;
    toProtoMsg(message: Block): BlockProtoMsg;
};
export declare const TxValue: {
    typeUrl: string;
    encode(message: TxValue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxValue;
    fromPartial(object: Partial<TxValue>): TxValue;
    fromAmino(object: TxValueAmino): TxValue;
    toAmino(message: TxValue): TxValueAmino;
    fromAminoMsg(object: TxValueAminoMsg): TxValue;
    fromProtoMsg(message: TxValueProtoMsg): TxValue;
    toProto(message: TxValue): Uint8Array;
    toProtoMsg(message: TxValue): TxValueProtoMsg;
};
export declare const MsgSubmitQueryResultResponse: {
    typeUrl: string;
    encode(_: MsgSubmitQueryResultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitQueryResultResponse;
    fromPartial(_: Partial<MsgSubmitQueryResultResponse>): MsgSubmitQueryResultResponse;
    fromAmino(_: MsgSubmitQueryResultResponseAmino): MsgSubmitQueryResultResponse;
    toAmino(_: MsgSubmitQueryResultResponse): MsgSubmitQueryResultResponseAmino;
    fromAminoMsg(object: MsgSubmitQueryResultResponseAminoMsg): MsgSubmitQueryResultResponse;
    fromProtoMsg(message: MsgSubmitQueryResultResponseProtoMsg): MsgSubmitQueryResultResponse;
    toProto(message: MsgSubmitQueryResultResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResultResponse): MsgSubmitQueryResultResponseProtoMsg;
};
export declare const MsgRemoveInterchainQueryRequest: {
    typeUrl: string;
    encode(message: MsgRemoveInterchainQueryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveInterchainQueryRequest;
    fromPartial(object: Partial<MsgRemoveInterchainQueryRequest>): MsgRemoveInterchainQueryRequest;
    fromAmino(object: MsgRemoveInterchainQueryRequestAmino): MsgRemoveInterchainQueryRequest;
    toAmino(message: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestAmino;
    fromAminoMsg(object: MsgRemoveInterchainQueryRequestAminoMsg): MsgRemoveInterchainQueryRequest;
    fromProtoMsg(message: MsgRemoveInterchainQueryRequestProtoMsg): MsgRemoveInterchainQueryRequest;
    toProto(message: MsgRemoveInterchainQueryRequest): Uint8Array;
    toProtoMsg(message: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestProtoMsg;
};
export declare const MsgRemoveInterchainQueryResponse: {
    typeUrl: string;
    encode(_: MsgRemoveInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveInterchainQueryResponse;
    fromPartial(_: Partial<MsgRemoveInterchainQueryResponse>): MsgRemoveInterchainQueryResponse;
    fromAmino(_: MsgRemoveInterchainQueryResponseAmino): MsgRemoveInterchainQueryResponse;
    toAmino(_: MsgRemoveInterchainQueryResponse): MsgRemoveInterchainQueryResponseAmino;
    fromAminoMsg(object: MsgRemoveInterchainQueryResponseAminoMsg): MsgRemoveInterchainQueryResponse;
    fromProtoMsg(message: MsgRemoveInterchainQueryResponseProtoMsg): MsgRemoveInterchainQueryResponse;
    toProto(message: MsgRemoveInterchainQueryResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveInterchainQueryResponse): MsgRemoveInterchainQueryResponseProtoMsg;
};
export declare const MsgUpdateInterchainQueryRequest: {
    typeUrl: string;
    encode(message: MsgUpdateInterchainQueryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateInterchainQueryRequest;
    fromPartial(object: Partial<MsgUpdateInterchainQueryRequest>): MsgUpdateInterchainQueryRequest;
    fromAmino(object: MsgUpdateInterchainQueryRequestAmino): MsgUpdateInterchainQueryRequest;
    toAmino(message: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestAmino;
    fromAminoMsg(object: MsgUpdateInterchainQueryRequestAminoMsg): MsgUpdateInterchainQueryRequest;
    fromProtoMsg(message: MsgUpdateInterchainQueryRequestProtoMsg): MsgUpdateInterchainQueryRequest;
    toProto(message: MsgUpdateInterchainQueryRequest): Uint8Array;
    toProtoMsg(message: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestProtoMsg;
};
export declare const MsgUpdateInterchainQueryResponse: {
    typeUrl: string;
    encode(_: MsgUpdateInterchainQueryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateInterchainQueryResponse;
    fromPartial(_: Partial<MsgUpdateInterchainQueryResponse>): MsgUpdateInterchainQueryResponse;
    fromAmino(_: MsgUpdateInterchainQueryResponseAmino): MsgUpdateInterchainQueryResponse;
    toAmino(_: MsgUpdateInterchainQueryResponse): MsgUpdateInterchainQueryResponseAmino;
    fromAminoMsg(object: MsgUpdateInterchainQueryResponseAminoMsg): MsgUpdateInterchainQueryResponse;
    fromProtoMsg(message: MsgUpdateInterchainQueryResponseProtoMsg): MsgUpdateInterchainQueryResponse;
    toProto(message: MsgUpdateInterchainQueryResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateInterchainQueryResponse): MsgUpdateInterchainQueryResponseProtoMsg;
};
