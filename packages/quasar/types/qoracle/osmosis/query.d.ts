import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params as Params1 } from "./params";
import { ParamsAmino as Params1Amino } from "./params";
import { ParamsSDKType as Params1SDKType } from "./params";
import { OsmosisRequestState, OsmosisRequestStateAmino, OsmosisRequestStateSDKType } from "./osmosis";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "../../osmosis/epochs/genesis";
import { Params as Params2 } from "../../osmosis/mint/v1beta1/mint";
import { ParamsAmino as Params2Amino } from "../../osmosis/mint/v1beta1/mint";
import { ParamsSDKType as Params2SDKType } from "../../osmosis/mint/v1beta1/mint";
import { DistrInfo, DistrInfoAmino, DistrInfoSDKType } from "../../osmosis/pool-incentives/v1beta1/incentives";
import { IncentivizedPool, IncentivizedPoolAmino, IncentivizedPoolSDKType } from "../../osmosis/pool-incentives/v1beta1/query";
import { Pool, PoolAmino, PoolSDKType } from "../../osmosis/gamm/pool-models/balancer/balancerPool";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params1;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: Params1Amino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: Params1SDKType;
}
export interface QueryStateRequest {
}
export interface QueryStateRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest";
    value: Uint8Array;
}
export interface QueryStateRequestAmino {
}
export interface QueryStateRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest";
    value: QueryStateRequestAmino;
}
export interface QueryStateRequestSDKType {
}
export interface QueryStateResponse {
    paramsRequestState: OsmosisRequestState;
    incentivizedPoolsState: OsmosisRequestState;
    poolsState: OsmosisRequestState;
}
export interface QueryStateResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateResponse";
    value: Uint8Array;
}
export interface QueryStateResponseAmino {
    params_request_state?: OsmosisRequestStateAmino;
    incentivized_pools_state?: OsmosisRequestStateAmino;
    pools_state?: OsmosisRequestStateAmino;
}
export interface QueryStateResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateResponse";
    value: QueryStateResponseAmino;
}
export interface QueryStateResponseSDKType {
    params_request_state: OsmosisRequestStateSDKType;
    incentivized_pools_state: OsmosisRequestStateSDKType;
    pools_state: OsmosisRequestStateSDKType;
}
export interface QueryChainParamsRequest {
}
export interface QueryChainParamsRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest";
    value: Uint8Array;
}
export interface QueryChainParamsRequestAmino {
}
export interface QueryChainParamsRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest";
    value: QueryChainParamsRequestAmino;
}
export interface QueryChainParamsRequestSDKType {
}
export interface QueryChainParamsResponse {
    epochsInfo: EpochInfo[];
    lockableDurations: bigint[];
    mintParams: Params2;
    mintEpochProvisions: Uint8Array;
    distrInfo: DistrInfo;
}
export interface QueryChainParamsResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsResponse";
    value: Uint8Array;
}
export interface QueryChainParamsResponseAmino {
    epochs_info?: EpochInfoAmino[];
    lockable_durations?: string[];
    mint_params?: Params2Amino;
    mint_epoch_provisions?: string;
    distr_info?: DistrInfoAmino;
}
export interface QueryChainParamsResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsResponse";
    value: QueryChainParamsResponseAmino;
}
export interface QueryChainParamsResponseSDKType {
    epochs_info: EpochInfoSDKType[];
    lockable_durations: bigint[];
    mint_params: Params2SDKType;
    mint_epoch_provisions: Uint8Array;
    distr_info: DistrInfoSDKType;
}
export interface QueryIncentivizedPoolsRequest {
}
export interface QueryIncentivizedPoolsRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestAmino {
}
export interface QueryIncentivizedPoolsRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest";
    value: QueryIncentivizedPoolsRequestAmino;
}
export interface QueryIncentivizedPoolsRequestSDKType {
}
export interface QueryIncentivizedPoolsResponse {
    incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsResponse";
    value: Uint8Array;
}
export interface QueryIncentivizedPoolsResponseAmino {
    incentivized_pools?: IncentivizedPoolAmino[];
}
export interface QueryIncentivizedPoolsResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsResponse";
    value: QueryIncentivizedPoolsResponseAmino;
}
export interface QueryIncentivizedPoolsResponseSDKType {
    incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryPoolsRequest {
    pagination?: PageRequest;
}
export interface QueryPoolsRequestProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsRequest";
    value: Uint8Array;
}
export interface QueryPoolsRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryPoolsRequestAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsRequest";
    value: QueryPoolsRequestAmino;
}
export interface QueryPoolsRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryPoolsResponse {
    pools: Pool[];
    pagination?: PageResponse;
}
export interface QueryPoolsResponseProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsResponse";
    value: Uint8Array;
}
export interface QueryPoolsResponseAmino {
    pools?: PoolAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryPoolsResponseAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsResponse";
    value: QueryPoolsResponseAmino;
}
export interface QueryPoolsResponseSDKType {
    pools: PoolSDKType[];
    pagination?: PageResponseSDKType;
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
export declare const QueryStateRequest: {
    typeUrl: string;
    encode(_: QueryStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryStateRequest;
    fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest;
    fromAmino(_: QueryStateRequestAmino): QueryStateRequest;
    toAmino(_: QueryStateRequest): QueryStateRequestAmino;
    fromAminoMsg(object: QueryStateRequestAminoMsg): QueryStateRequest;
    fromProtoMsg(message: QueryStateRequestProtoMsg): QueryStateRequest;
    toProto(message: QueryStateRequest): Uint8Array;
    toProtoMsg(message: QueryStateRequest): QueryStateRequestProtoMsg;
};
export declare const QueryStateResponse: {
    typeUrl: string;
    encode(message: QueryStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryStateResponse;
    fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse;
    fromAmino(object: QueryStateResponseAmino): QueryStateResponse;
    toAmino(message: QueryStateResponse): QueryStateResponseAmino;
    fromAminoMsg(object: QueryStateResponseAminoMsg): QueryStateResponse;
    fromProtoMsg(message: QueryStateResponseProtoMsg): QueryStateResponse;
    toProto(message: QueryStateResponse): Uint8Array;
    toProtoMsg(message: QueryStateResponse): QueryStateResponseProtoMsg;
};
export declare const QueryChainParamsRequest: {
    typeUrl: string;
    encode(_: QueryChainParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryChainParamsRequest;
    fromPartial(_: Partial<QueryChainParamsRequest>): QueryChainParamsRequest;
    fromAmino(_: QueryChainParamsRequestAmino): QueryChainParamsRequest;
    toAmino(_: QueryChainParamsRequest): QueryChainParamsRequestAmino;
    fromAminoMsg(object: QueryChainParamsRequestAminoMsg): QueryChainParamsRequest;
    fromProtoMsg(message: QueryChainParamsRequestProtoMsg): QueryChainParamsRequest;
    toProto(message: QueryChainParamsRequest): Uint8Array;
    toProtoMsg(message: QueryChainParamsRequest): QueryChainParamsRequestProtoMsg;
};
export declare const QueryChainParamsResponse: {
    typeUrl: string;
    encode(message: QueryChainParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChainParamsResponse;
    fromPartial(object: Partial<QueryChainParamsResponse>): QueryChainParamsResponse;
    fromAmino(object: QueryChainParamsResponseAmino): QueryChainParamsResponse;
    toAmino(message: QueryChainParamsResponse): QueryChainParamsResponseAmino;
    fromAminoMsg(object: QueryChainParamsResponseAminoMsg): QueryChainParamsResponse;
    fromProtoMsg(message: QueryChainParamsResponseProtoMsg): QueryChainParamsResponse;
    toProto(message: QueryChainParamsResponse): Uint8Array;
    toProtoMsg(message: QueryChainParamsResponse): QueryChainParamsResponseProtoMsg;
};
export declare const QueryIncentivizedPoolsRequest: {
    typeUrl: string;
    encode(_: QueryIncentivizedPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryIncentivizedPoolsRequest;
    fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest;
    fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest;
    toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsRequestAminoMsg): QueryIncentivizedPoolsRequest;
    fromProtoMsg(message: QueryIncentivizedPoolsRequestProtoMsg): QueryIncentivizedPoolsRequest;
    toProto(message: QueryIncentivizedPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestProtoMsg;
};
export declare const QueryIncentivizedPoolsResponse: {
    typeUrl: string;
    encode(message: QueryIncentivizedPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryIncentivizedPoolsResponse;
    fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse;
    fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse;
    toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino;
    fromAminoMsg(object: QueryIncentivizedPoolsResponseAminoMsg): QueryIncentivizedPoolsResponse;
    fromProtoMsg(message: QueryIncentivizedPoolsResponseProtoMsg): QueryIncentivizedPoolsResponse;
    toProto(message: QueryIncentivizedPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseProtoMsg;
};
export declare const QueryPoolsRequest: {
    typeUrl: string;
    encode(message: QueryPoolsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsRequest;
    fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest;
    fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest;
    toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino;
    fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest;
    fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest;
    toProto(message: QueryPoolsRequest): Uint8Array;
    toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg;
};
export declare const QueryPoolsResponse: {
    typeUrl: string;
    encode(message: QueryPoolsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPoolsResponse;
    fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse;
    fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse;
    toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino;
    fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse;
    fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse;
    toProto(message: QueryPoolsResponse): Uint8Array;
    toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg;
};
