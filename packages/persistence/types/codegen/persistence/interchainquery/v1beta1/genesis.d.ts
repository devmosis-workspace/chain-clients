import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Query {
    id: string;
    connectionId: string;
    chainId: string;
    queryType: string;
    request: Uint8Array;
    /** change these to uint64 in v0.5.0 */
    period: string;
    lastHeight: string;
    callbackId: string;
    ttl: Long;
    lastEmission: string;
}
export interface QuerySDKType {
    id: string;
    connection_id: string;
    chain_id: string;
    query_type: string;
    request: Uint8Array;
    period: string;
    last_height: string;
    callback_id: string;
    ttl: Long;
    last_emission: string;
}
export interface DataPoint {
    id: string;
    /** change these to uint64 in v0.5.0 */
    remoteHeight: string;
    localHeight: string;
    value: Uint8Array;
}
export interface DataPointSDKType {
    id: string;
    remote_height: string;
    local_height: string;
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    queries: Query[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    queries: QuerySDKType[];
}
export declare const Query: {
    encode(message: Query, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Query;
    fromPartial(object: Partial<Query>): Query;
};
export declare const DataPoint: {
    encode(message: DataPoint, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DataPoint;
    fromPartial(object: Partial<DataPoint>): DataPoint;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
