import { Height, HeightAmino, HeightSDKType } from "../../ibc/core/client/v1/client";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../../binary";
export interface RegisteredQuery {
    /** The unique id of the registered query. */
    id: bigint;
    /** The address that registered the query. */
    owner: string;
    /** The query type identifier: `kv` or `tx` now */
    queryType: string;
    /** The KV-storage keys for which we want to get values from remote chain */
    keys: KVKey[];
    /** The filter for transaction search ICQ */
    transactionsFilter: string;
    /** The IBC connection ID for getting ConsensusState to verify proofs */
    connectionId: string;
    /** Parameter that defines how often the query must be updated. */
    updatePeriod: bigint;
    /** The local chain last block height when the query result was updated. */
    lastSubmittedResultLocalHeight: bigint;
    /** The remote chain last block height when the query result was updated. */
    lastSubmittedResultRemoteHeight?: Height;
    /** Amount of coins deposited for the query. */
    deposit: Coin[];
    /** Timeout before query becomes available for everybody to remove. */
    submitTimeout: bigint;
    /** The local chain height when the query was registered. */
    registeredAtHeight: bigint;
}
export interface RegisteredQueryProtoMsg {
    typeUrl: "/neutron.interchainqueries.RegisteredQuery";
    value: Uint8Array;
}
export interface RegisteredQueryAmino {
    /** The unique id of the registered query. */
    id?: string;
    /** The address that registered the query. */
    owner?: string;
    /** The query type identifier: `kv` or `tx` now */
    query_type?: string;
    /** The KV-storage keys for which we want to get values from remote chain */
    keys?: KVKeyAmino[];
    /** The filter for transaction search ICQ */
    transactions_filter?: string;
    /** The IBC connection ID for getting ConsensusState to verify proofs */
    connection_id?: string;
    /** Parameter that defines how often the query must be updated. */
    update_period?: string;
    /** The local chain last block height when the query result was updated. */
    last_submitted_result_local_height?: string;
    /** The remote chain last block height when the query result was updated. */
    last_submitted_result_remote_height?: HeightAmino;
    /** Amount of coins deposited for the query. */
    deposit?: CoinAmino[];
    /** Timeout before query becomes available for everybody to remove. */
    submit_timeout?: string;
    /** The local chain height when the query was registered. */
    registered_at_height?: string;
}
export interface RegisteredQueryAminoMsg {
    type: "/neutron.interchainqueries.RegisteredQuery";
    value: RegisteredQueryAmino;
}
export interface RegisteredQuerySDKType {
    id: bigint;
    owner: string;
    query_type: string;
    keys: KVKeySDKType[];
    transactions_filter: string;
    connection_id: string;
    update_period: bigint;
    last_submitted_result_local_height: bigint;
    last_submitted_result_remote_height?: HeightSDKType;
    deposit: CoinSDKType[];
    submit_timeout: bigint;
    registered_at_height: bigint;
}
export interface KVKey {
    /**
     * Path (storage prefix) to the storage where you want to read value by key
     * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
     */
    path: string;
    /** Key you want to read from the storage */
    key: Uint8Array;
}
export interface KVKeyProtoMsg {
    typeUrl: "/neutron.interchainqueries.KVKey";
    value: Uint8Array;
}
export interface KVKeyAmino {
    /**
     * Path (storage prefix) to the storage where you want to read value by key
     * (usually name of cosmos-sdk module: 'staking', 'bank', etc.)
     */
    path?: string;
    /** Key you want to read from the storage */
    key?: string;
}
export interface KVKeyAminoMsg {
    type: "/neutron.interchainqueries.KVKey";
    value: KVKeyAmino;
}
export interface KVKeySDKType {
    path: string;
    key: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisState {
    params: Params;
    registeredQueries: RegisteredQuery[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.interchainqueries.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    registered_queries?: RegisteredQueryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/neutron.interchainqueries.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    registered_queries: RegisteredQuerySDKType[];
}
export declare const RegisteredQuery: {
    typeUrl: string;
    encode(message: RegisteredQuery, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisteredQuery;
    fromPartial(object: Partial<RegisteredQuery>): RegisteredQuery;
    fromAmino(object: RegisteredQueryAmino): RegisteredQuery;
    toAmino(message: RegisteredQuery): RegisteredQueryAmino;
    fromAminoMsg(object: RegisteredQueryAminoMsg): RegisteredQuery;
    fromProtoMsg(message: RegisteredQueryProtoMsg): RegisteredQuery;
    toProto(message: RegisteredQuery): Uint8Array;
    toProtoMsg(message: RegisteredQuery): RegisteredQueryProtoMsg;
};
export declare const KVKey: {
    typeUrl: string;
    encode(message: KVKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KVKey;
    fromPartial(object: Partial<KVKey>): KVKey;
    fromAmino(object: KVKeyAmino): KVKey;
    toAmino(message: KVKey): KVKeyAmino;
    fromAminoMsg(object: KVKeyAminoMsg): KVKey;
    fromProtoMsg(message: KVKeyProtoMsg): KVKey;
    toProto(message: KVKey): Uint8Array;
    toProtoMsg(message: KVKey): KVKeyProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
