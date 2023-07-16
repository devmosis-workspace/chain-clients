import { KVKey, KVKeySDKType } from "./genesis";
import { ProofOps, ProofOpsSDKType, Proof, ProofSDKType } from "../tendermint/crypto/proof";
import { Any, AnySDKType } from "../google/protobuf/any";
import { ResponseDeliverTx, ResponseDeliverTxSDKType } from "../tendermint/abci/types";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
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
    updatePeriod: Long;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRegisterInterchainQuerySDKType {
    query_type: string;
    keys: KVKeySDKType[];
    transactions_filter: string;
    connection_id: string;
    update_period: Long;
    sender: string;
}
export interface MsgRegisterInterchainQueryResponse {
    id: Long;
}
export interface MsgRegisterInterchainQueryResponseSDKType {
    id: Long;
}
export interface MsgSubmitQueryResult {
    queryId: Long;
    sender: string;
    /**
     * is the IBC client ID for an IBC connection between Neutron chain and target
     * chain (where the result was obtained from)
     */
    clientId: string;
    result?: QueryResult;
}
export interface MsgSubmitQueryResultSDKType {
    query_id: Long;
    sender: string;
    client_id: string;
    result?: QueryResultSDKType;
}
export interface QueryResult {
    kvResults: StorageValue[];
    block?: Block;
    height: Long;
    revision: Long;
    allowKvCallbacks: boolean;
}
export interface QueryResultSDKType {
    kv_results: StorageValueSDKType[];
    block?: BlockSDKType;
    height: Long;
    revision: Long;
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
    Proof?: ProofOps;
}
export interface StorageValueSDKType {
    storage_prefix: string;
    key: Uint8Array;
    value: Uint8Array;
    Proof?: ProofOpsSDKType;
}
export interface Block {
    /**
     * We need to know block X+1 to verify response of transaction for block X
     * since LastResultsHash is root hash of all results from the txs from the
     * previous block
     */
    nextBlockHeader?: Any;
    /** We need to know block X to verify inclusion of transaction for block X */
    header?: Any;
    tx?: TxValue;
}
export interface BlockSDKType {
    next_block_header?: AnySDKType;
    header?: AnySDKType;
    tx?: TxValueSDKType;
}
export interface TxValue {
    response?: ResponseDeliverTx;
    /**
     * is the Merkle Proof which proves existence of response in block with height
     * next_block_header.Height
     */
    deliveryProof?: Proof;
    /**
     * is the Merkle Proof which proves existence of data in block with height
     * header.Height
     */
    inclusionProof?: Proof;
    /** is body of the transaction */
    data: Uint8Array;
}
export interface TxValueSDKType {
    response?: ResponseDeliverTxSDKType;
    delivery_proof?: ProofSDKType;
    inclusion_proof?: ProofSDKType;
    data: Uint8Array;
}
export interface MsgSubmitQueryResultResponse {
}
export interface MsgSubmitQueryResultResponseSDKType {
}
export interface MsgRemoveInterchainQueryRequest {
    queryId: Long;
    /** is the signer of the message */
    sender: string;
}
export interface MsgRemoveInterchainQueryRequestSDKType {
    query_id: Long;
    sender: string;
}
export interface MsgRemoveInterchainQueryResponse {
}
export interface MsgRemoveInterchainQueryResponseSDKType {
}
export interface MsgUpdateInterchainQueryRequest {
    queryId: Long;
    newKeys: KVKey[];
    newUpdatePeriod: Long;
    newTransactionsFilter: string;
    /** is the signer of the message */
    sender: string;
}
export interface MsgUpdateInterchainQueryRequestSDKType {
    query_id: Long;
    new_keys: KVKeySDKType[];
    new_update_period: Long;
    new_transactions_filter: string;
    sender: string;
}
export interface MsgUpdateInterchainQueryResponse {
}
export interface MsgUpdateInterchainQueryResponseSDKType {
}
export declare const MsgRegisterInterchainQuery: {
    encode(message: MsgRegisterInterchainQuery, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterInterchainQuery;
    fromPartial(object: Partial<MsgRegisterInterchainQuery>): MsgRegisterInterchainQuery;
};
export declare const MsgRegisterInterchainQueryResponse: {
    encode(message: MsgRegisterInterchainQueryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRegisterInterchainQueryResponse;
    fromPartial(object: Partial<MsgRegisterInterchainQueryResponse>): MsgRegisterInterchainQueryResponse;
};
export declare const MsgSubmitQueryResult: {
    encode(message: MsgSubmitQueryResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitQueryResult;
    fromPartial(object: Partial<MsgSubmitQueryResult>): MsgSubmitQueryResult;
};
export declare const QueryResult: {
    encode(message: QueryResult, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryResult;
    fromPartial(object: Partial<QueryResult>): QueryResult;
};
export declare const StorageValue: {
    encode(message: StorageValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): StorageValue;
    fromPartial(object: Partial<StorageValue>): StorageValue;
};
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Block;
    fromPartial(object: Partial<Block>): Block;
};
export declare const TxValue: {
    encode(message: TxValue, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TxValue;
    fromPartial(object: Partial<TxValue>): TxValue;
};
export declare const MsgSubmitQueryResultResponse: {
    encode(_: MsgSubmitQueryResultResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitQueryResultResponse;
    fromPartial(_: Partial<MsgSubmitQueryResultResponse>): MsgSubmitQueryResultResponse;
};
export declare const MsgRemoveInterchainQueryRequest: {
    encode(message: MsgRemoveInterchainQueryRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgRemoveInterchainQueryRequest;
    fromPartial(object: Partial<MsgRemoveInterchainQueryRequest>): MsgRemoveInterchainQueryRequest;
};
export declare const MsgRemoveInterchainQueryResponse: {
    encode(_: MsgRemoveInterchainQueryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgRemoveInterchainQueryResponse;
    fromPartial(_: Partial<MsgRemoveInterchainQueryResponse>): MsgRemoveInterchainQueryResponse;
};
export declare const MsgUpdateInterchainQueryRequest: {
    encode(message: MsgUpdateInterchainQueryRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateInterchainQueryRequest;
    fromPartial(object: Partial<MsgUpdateInterchainQueryRequest>): MsgUpdateInterchainQueryRequest;
};
export declare const MsgUpdateInterchainQueryResponse: {
    encode(_: MsgUpdateInterchainQueryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateInterchainQueryResponse;
    fromPartial(_: Partial<MsgUpdateInterchainQueryResponse>): MsgUpdateInterchainQueryResponse;
};
