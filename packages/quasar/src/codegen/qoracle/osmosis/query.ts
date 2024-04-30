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
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
export interface QueryStateRequest {}
export interface QueryStateRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest";
  value: Uint8Array;
}
export interface QueryStateRequestAmino {}
export interface QueryStateRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest";
  value: QueryStateRequestAmino;
}
export interface QueryStateRequestSDKType {}
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
export interface QueryChainParamsRequest {}
export interface QueryChainParamsRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest";
  value: Uint8Array;
}
export interface QueryChainParamsRequestAmino {}
export interface QueryChainParamsRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest";
  value: QueryChainParamsRequestAmino;
}
export interface QueryChainParamsRequestSDKType {}
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
export interface QueryIncentivizedPoolsRequest {}
export interface QueryIncentivizedPoolsRequestProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest";
  value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestAmino {}
export interface QueryIncentivizedPoolsRequestAminoMsg {
  type: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest";
  value: QueryIncentivizedPoolsRequestAmino;
}
export interface QueryIncentivizedPoolsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params1.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params1.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params1.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params1.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params1.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params1.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryStateRequest(): QueryStateRequest {
  return {};
}
export const QueryStateRequest = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest",
  encode(_: QueryStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryStateRequest {
    return {};
  },
  fromPartial(_: Partial<QueryStateRequest>): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  },
  fromAmino(_: QueryStateRequestAmino): QueryStateRequest {
    const message = createBaseQueryStateRequest();
    return message;
  },
  toAmino(_: QueryStateRequest): QueryStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryStateRequestAminoMsg): QueryStateRequest {
    return QueryStateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStateRequestProtoMsg): QueryStateRequest {
    return QueryStateRequest.decode(message.value);
  },
  toProto(message: QueryStateRequest): Uint8Array {
    return QueryStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryStateRequest): QueryStateRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateRequest",
      value: QueryStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryStateResponse(): QueryStateResponse {
  return {
    paramsRequestState: OsmosisRequestState.fromPartial({}),
    incentivizedPoolsState: OsmosisRequestState.fromPartial({}),
    poolsState: OsmosisRequestState.fromPartial({})
  };
}
export const QueryStateResponse = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateResponse",
  encode(message: QueryStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paramsRequestState !== undefined) {
      OsmosisRequestState.encode(message.paramsRequestState, writer.uint32(18).fork()).ldelim();
    }
    if (message.incentivizedPoolsState !== undefined) {
      OsmosisRequestState.encode(message.incentivizedPoolsState, writer.uint32(26).fork()).ldelim();
    }
    if (message.poolsState !== undefined) {
      OsmosisRequestState.encode(message.poolsState, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryStateResponse {
    return {
      paramsRequestState: isSet(object.paramsRequestState) ? OsmosisRequestState.fromJSON(object.paramsRequestState) : undefined,
      incentivizedPoolsState: isSet(object.incentivizedPoolsState) ? OsmosisRequestState.fromJSON(object.incentivizedPoolsState) : undefined,
      poolsState: isSet(object.poolsState) ? OsmosisRequestState.fromJSON(object.poolsState) : undefined
    };
  },
  fromPartial(object: Partial<QueryStateResponse>): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    message.paramsRequestState = object.paramsRequestState !== undefined && object.paramsRequestState !== null ? OsmosisRequestState.fromPartial(object.paramsRequestState) : undefined;
    message.incentivizedPoolsState = object.incentivizedPoolsState !== undefined && object.incentivizedPoolsState !== null ? OsmosisRequestState.fromPartial(object.incentivizedPoolsState) : undefined;
    message.poolsState = object.poolsState !== undefined && object.poolsState !== null ? OsmosisRequestState.fromPartial(object.poolsState) : undefined;
    return message;
  },
  fromAmino(object: QueryStateResponseAmino): QueryStateResponse {
    const message = createBaseQueryStateResponse();
    if (object.params_request_state !== undefined && object.params_request_state !== null) {
      message.paramsRequestState = OsmosisRequestState.fromAmino(object.params_request_state);
    }
    if (object.incentivized_pools_state !== undefined && object.incentivized_pools_state !== null) {
      message.incentivizedPoolsState = OsmosisRequestState.fromAmino(object.incentivized_pools_state);
    }
    if (object.pools_state !== undefined && object.pools_state !== null) {
      message.poolsState = OsmosisRequestState.fromAmino(object.pools_state);
    }
    return message;
  },
  toAmino(message: QueryStateResponse): QueryStateResponseAmino {
    const obj: any = {};
    obj.params_request_state = message.paramsRequestState ? OsmosisRequestState.toAmino(message.paramsRequestState) : undefined;
    obj.incentivized_pools_state = message.incentivizedPoolsState ? OsmosisRequestState.toAmino(message.incentivizedPoolsState) : undefined;
    obj.pools_state = message.poolsState ? OsmosisRequestState.toAmino(message.poolsState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryStateResponseAminoMsg): QueryStateResponse {
    return QueryStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryStateResponseProtoMsg): QueryStateResponse {
    return QueryStateResponse.decode(message.value);
  },
  toProto(message: QueryStateResponse): Uint8Array {
    return QueryStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryStateResponse): QueryStateResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryStateResponse",
      value: QueryStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChainParamsRequest(): QueryChainParamsRequest {
  return {};
}
export const QueryChainParamsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest",
  encode(_: QueryChainParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryChainParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryChainParamsRequest>): QueryChainParamsRequest {
    const message = createBaseQueryChainParamsRequest();
    return message;
  },
  fromAmino(_: QueryChainParamsRequestAmino): QueryChainParamsRequest {
    const message = createBaseQueryChainParamsRequest();
    return message;
  },
  toAmino(_: QueryChainParamsRequest): QueryChainParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryChainParamsRequestAminoMsg): QueryChainParamsRequest {
    return QueryChainParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainParamsRequestProtoMsg): QueryChainParamsRequest {
    return QueryChainParamsRequest.decode(message.value);
  },
  toProto(message: QueryChainParamsRequest): Uint8Array {
    return QueryChainParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChainParamsRequest): QueryChainParamsRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsRequest",
      value: QueryChainParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChainParamsResponse(): QueryChainParamsResponse {
  return {
    epochsInfo: [],
    lockableDurations: [],
    mintParams: Params2.fromPartial({}),
    mintEpochProvisions: new Uint8Array(),
    distrInfo: DistrInfo.fromPartial({})
  };
}
export const QueryChainParamsResponse = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsResponse",
  encode(message: QueryChainParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochsInfo) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).fork();
    for (const v of message.lockableDurations) {
      writer.int64(v);
    }
    writer.ldelim();
    if (message.mintParams !== undefined) {
      Params2.encode(message.mintParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintEpochProvisions.length !== 0) {
      writer.uint32(34).bytes(message.mintEpochProvisions);
    }
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryChainParamsResponse {
    return {
      epochsInfo: Array.isArray(object?.epochsInfo) ? object.epochsInfo.map((e: any) => EpochInfo.fromJSON(e)) : [],
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => BigInt(e.toString())) : [],
      mintParams: isSet(object.mintParams) ? Params2.fromJSON(object.mintParams) : undefined,
      mintEpochProvisions: isSet(object.mintEpochProvisions) ? bytesFromBase64(object.mintEpochProvisions) : new Uint8Array(),
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryChainParamsResponse>): QueryChainParamsResponse {
    const message = createBaseQueryChainParamsResponse();
    message.epochsInfo = object.epochsInfo?.map(e => EpochInfo.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => BigInt(e.toString())) || [];
    message.mintParams = object.mintParams !== undefined && object.mintParams !== null ? Params2.fromPartial(object.mintParams) : undefined;
    message.mintEpochProvisions = object.mintEpochProvisions ?? new Uint8Array();
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryChainParamsResponseAmino): QueryChainParamsResponse {
    const message = createBaseQueryChainParamsResponse();
    message.epochsInfo = object.epochs_info?.map(e => EpochInfo.fromAmino(e)) || [];
    message.lockableDurations = object.lockable_durations?.map(e => BigInt(e)) || [];
    if (object.mint_params !== undefined && object.mint_params !== null) {
      message.mintParams = Params2.fromAmino(object.mint_params);
    }
    if (object.mint_epoch_provisions !== undefined && object.mint_epoch_provisions !== null) {
      message.mintEpochProvisions = bytesFromBase64(object.mint_epoch_provisions);
    }
    if (object.distr_info !== undefined && object.distr_info !== null) {
      message.distrInfo = DistrInfo.fromAmino(object.distr_info);
    }
    return message;
  },
  toAmino(message: QueryChainParamsResponse): QueryChainParamsResponseAmino {
    const obj: any = {};
    if (message.epochsInfo) {
      obj.epochs_info = message.epochsInfo.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs_info = [];
    }
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e.toString());
    } else {
      obj.lockable_durations = [];
    }
    obj.mint_params = message.mintParams ? Params2.toAmino(message.mintParams) : undefined;
    obj.mint_epoch_provisions = message.mintEpochProvisions ? base64FromBytes(message.mintEpochProvisions) : undefined;
    obj.distr_info = message.distrInfo ? DistrInfo.toAmino(message.distrInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryChainParamsResponseAminoMsg): QueryChainParamsResponse {
    return QueryChainParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainParamsResponseProtoMsg): QueryChainParamsResponse {
    return QueryChainParamsResponse.decode(message.value);
  },
  toProto(message: QueryChainParamsResponse): Uint8Array {
    return QueryChainParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChainParamsResponse): QueryChainParamsResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryChainParamsResponse",
      value: QueryChainParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}
export const QueryIncentivizedPoolsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest",
  encode(_: QueryIncentivizedPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryIncentivizedPoolsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  },
  fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  },
  toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPoolsRequestAminoMsg): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncentivizedPoolsRequestProtoMsg): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsRequest): Uint8Array {
    return QueryIncentivizedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsRequest",
      value: QueryIncentivizedPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivizedPools: []
  };
}
export const QueryIncentivizedPoolsResponse = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsResponse",
  encode(message: QueryIncentivizedPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryIncentivizedPoolsResponse {
    return {
      incentivizedPools: Array.isArray(object?.incentivizedPools) ? object.incentivizedPools.map((e: any) => IncentivizedPool.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools = object.incentivized_pools?.map(e => IncentivizedPool.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivized_pools = message.incentivizedPools.map(e => e ? IncentivizedPool.toAmino(e) : undefined);
    } else {
      obj.incentivized_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPoolsResponseAminoMsg): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryIncentivizedPoolsResponseProtoMsg): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsResponse): Uint8Array {
    return QueryIncentivizedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryIncentivizedPoolsResponse",
      value: QueryIncentivizedPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return {
    pagination: undefined
  };
}
export const QueryPoolsRequest = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsRequest",
  encode(message: QueryPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolsRequest>): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsRequestAmino): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsRequest): QueryPoolsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsRequestAminoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsRequestProtoMsg): QueryPoolsRequest {
    return QueryPoolsRequest.decode(message.value);
  },
  toProto(message: QueryPoolsRequest): Uint8Array {
    return QueryPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsRequest): QueryPoolsRequestProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsRequest",
      value: QueryPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return {
    pools: [],
    pagination: undefined
  };
}
export const QueryPoolsResponse = {
  typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsResponse",
  encode(message: QueryPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => Pool.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPoolsResponse>): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPoolsResponseAmino): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map(e => Pool.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryPoolsResponse): QueryPoolsResponseAmino {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map(e => e ? Pool.toAmino(e) : undefined);
    } else {
      obj.pools = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPoolsResponseAminoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPoolsResponseProtoMsg): QueryPoolsResponse {
    return QueryPoolsResponse.decode(message.value);
  },
  toProto(message: QueryPoolsResponse): Uint8Array {
    return QueryPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPoolsResponse): QueryPoolsResponseProtoMsg {
    return {
      typeUrl: "/quasarlabs.quasarnode.qoracle.osmosis.QueryPoolsResponse",
      value: QueryPoolsResponse.encode(message).finish()
    };
  }
};