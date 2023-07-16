import { Height, HeightSDKType } from "../ibc/core/client/v1/client";
import { Coin, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Long } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RegisteredQuery {
    /** The unique id of the registered query. */
    id: Long;
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
    updatePeriod: Long;
    /** The local chain last block height when the query result was updated. */
    lastSubmittedResultLocalHeight: Long;
    /** The remote chain last block height when the query result was updated. */
    lastSubmittedResultRemoteHeight?: Height;
    /** Amount of coins deposited for the query. */
    deposit: Coin[];
    /** Timeout before query becomes available for everybody to remove. */
    submitTimeout: Long;
    /** The local chain height when the query was registered. */
    registeredAtHeight: Long;
}
export interface RegisteredQuerySDKType {
    id: Long;
    owner: string;
    query_type: string;
    keys: KVKeySDKType[];
    transactions_filter: string;
    connection_id: string;
    update_period: Long;
    last_submitted_result_local_height: Long;
    last_submitted_result_remote_height?: HeightSDKType;
    deposit: CoinSDKType[];
    submit_timeout: Long;
    registered_at_height: Long;
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
export interface KVKeySDKType {
    path: string;
    key: Uint8Array;
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisState {
    params?: Params;
    registeredQueries: RegisteredQuery[];
}
/** GenesisState defines the interchainqueries module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    registered_queries: RegisteredQuerySDKType[];
}
export declare const RegisteredQuery: {
    encode(message: RegisteredQuery, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisteredQuery;
    fromPartial(object: Partial<RegisteredQuery>): RegisteredQuery;
};
export declare const KVKey: {
    encode(message: KVKey, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KVKey;
    fromPartial(object: Partial<KVKey>): KVKey;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
