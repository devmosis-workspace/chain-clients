import { BinaryWriter } from "../../../binary";
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
    ttl: bigint;
    lastEmission: string;
}
export interface QueryProtoMsg {
    typeUrl: "/persistence.interchainquery.v1beta1.Query";
    value: Uint8Array;
}
export interface QueryAmino {
    id?: string;
    connection_id?: string;
    chain_id?: string;
    query_type?: string;
    request?: string;
    /** change these to uint64 in v0.5.0 */
    period?: string;
    last_height?: string;
    callback_id?: string;
    ttl?: string;
    last_emission?: string;
}
export interface QueryAminoMsg {
    type: "/persistence.interchainquery.v1beta1.Query";
    value: QueryAmino;
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
    ttl: bigint;
    last_emission: string;
}
export interface DataPoint {
    id: string;
    /** change these to uint64 in v0.5.0 */
    remoteHeight: string;
    localHeight: string;
    value: Uint8Array;
}
export interface DataPointProtoMsg {
    typeUrl: "/persistence.interchainquery.v1beta1.DataPoint";
    value: Uint8Array;
}
export interface DataPointAmino {
    id?: string;
    /** change these to uint64 in v0.5.0 */
    remote_height?: string;
    local_height?: string;
    value?: string;
}
export interface DataPointAminoMsg {
    type: "/persistence.interchainquery.v1beta1.DataPoint";
    value: DataPointAmino;
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
export interface GenesisStateProtoMsg {
    typeUrl: "/persistence.interchainquery.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    queries?: QueryAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/persistence.interchainquery.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    queries: QuerySDKType[];
}
export declare const Query: {
    typeUrl: string;
    encode(message: Query, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Query;
    fromPartial(object: Partial<Query>): Query;
    fromAmino(object: QueryAmino): Query;
    toAmino(message: Query): QueryAmino;
    fromAminoMsg(object: QueryAminoMsg): Query;
    fromProtoMsg(message: QueryProtoMsg): Query;
    toProto(message: Query): Uint8Array;
    toProtoMsg(message: Query): QueryProtoMsg;
};
export declare const DataPoint: {
    typeUrl: string;
    encode(message: DataPoint, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DataPoint;
    fromPartial(object: Partial<DataPoint>): DataPoint;
    fromAmino(object: DataPointAmino): DataPoint;
    toAmino(message: DataPoint): DataPointAmino;
    fromAminoMsg(object: DataPointAminoMsg): DataPoint;
    fromProtoMsg(message: DataPointProtoMsg): DataPoint;
    toProto(message: DataPoint): Uint8Array;
    toProtoMsg(message: DataPoint): DataPointProtoMsg;
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
