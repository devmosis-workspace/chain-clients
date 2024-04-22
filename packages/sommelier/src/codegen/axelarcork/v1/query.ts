import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledAxelarCork, ScheduledAxelarCorkAmino, ScheduledAxelarCorkSDKType, AxelarCorkResult, AxelarCorkResultAmino, AxelarCorkResultSDKType, ChainConfiguration, ChainConfigurationAmino, ChainConfigurationSDKType, AxelarContractCallNonce, AxelarContractCallNonceAmino, AxelarContractCallNonceSDKType, AxelarUpgradeData, AxelarUpgradeDataAmino, AxelarUpgradeDataSDKType, AxelarCork, AxelarCorkAmino, AxelarCorkSDKType, WinningAxelarCork, WinningAxelarCorkAmino, WinningAxelarCorkSDKType } from "./axelarcork";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/axelarcork.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponse {
  /** allocation parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseAmino {
  /** allocation parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/axelarcork.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsRequest is the response type for the Query/Params gRPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryCellarIDs is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequest {}
export interface QueryCellarIDsRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCellarIDsRequest";
  value: Uint8Array;
}
/** QueryCellarIDs is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {}
export interface QueryCellarIDsRequestAminoMsg {
  type: "/axelarcork.v1.QueryCellarIDsRequest";
  value: QueryCellarIDsRequestAmino;
}
/** QueryCellarIDs is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {}
/** QueryCellarIDsResponse is the response type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsResponse {
  cellarIds: CellarIDSet[];
}
export interface QueryCellarIDsResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCellarIDsResponse";
  value: Uint8Array;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsResponseAmino {
  cellar_ids?: CellarIDSetAmino[];
}
export interface QueryCellarIDsResponseAminoMsg {
  type: "/axelarcork.v1.QueryCellarIDsResponse";
  value: QueryCellarIDsResponseAmino;
}
/** QueryCellarIDsResponse is the response type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsResponseSDKType {
  cellar_ids: CellarIDSetSDKType[];
}
/** QueryCellarIDsByChainIDRequest is the request type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDRequest {
  chainId: bigint;
}
export interface QueryCellarIDsByChainIDRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDRequest";
  value: Uint8Array;
}
/** QueryCellarIDsByChainIDRequest is the request type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDRequestAmino {
  chain_id?: string;
}
export interface QueryCellarIDsByChainIDRequestAminoMsg {
  type: "/axelarcork.v1.QueryCellarIDsByChainIDRequest";
  value: QueryCellarIDsByChainIDRequestAmino;
}
/** QueryCellarIDsByChainIDRequest is the request type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDRequestSDKType {
  chain_id: bigint;
}
/** QueryCellarIDsByChainIDResponse is the response type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDResponse {
  cellarIds: string[];
}
export interface QueryCellarIDsByChainIDResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDResponse";
  value: Uint8Array;
}
/** QueryCellarIDsByChainIDResponse is the response type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDResponseAmino {
  cellar_ids?: string[];
}
export interface QueryCellarIDsByChainIDResponseAminoMsg {
  type: "/axelarcork.v1.QueryCellarIDsByChainIDResponse";
  value: QueryCellarIDsByChainIDResponseAmino;
}
/** QueryCellarIDsByChainIDResponse is the response type for Query/QueryCellarIDsByChainID gRPC method. */
export interface QueryCellarIDsByChainIDResponseSDKType {
  cellar_ids: string[];
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequest {
  chainId: bigint;
}
export interface QueryScheduledCorksRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestAmino {
  chain_id?: string;
}
export interface QueryScheduledCorksRequestAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksRequest";
  value: QueryScheduledCorksRequestAmino;
}
/** QueryScheduledCorksRequest */
export interface QueryScheduledCorksRequestSDKType {
  chain_id: bigint;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponse {
  corks: ScheduledAxelarCork[];
}
export interface QueryScheduledCorksResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseAmino {
  corks?: ScheduledAxelarCorkAmino[];
}
export interface QueryScheduledCorksResponseAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksResponse";
  value: QueryScheduledCorksResponseAmino;
}
/** QueryScheduledCorksResponse */
export interface QueryScheduledCorksResponseSDKType {
  corks: ScheduledAxelarCorkSDKType[];
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequest {
  chainId: bigint;
}
export interface QueryScheduledBlockHeightsRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsRequest";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestAmino {
  chain_id?: string;
}
export interface QueryScheduledBlockHeightsRequestAminoMsg {
  type: "/axelarcork.v1.QueryScheduledBlockHeightsRequest";
  value: QueryScheduledBlockHeightsRequestAmino;
}
/** QueryScheduledBlockHeightsRequest */
export interface QueryScheduledBlockHeightsRequestSDKType {
  chain_id: bigint;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponse {
  blockHeights: bigint[];
}
export interface QueryScheduledBlockHeightsResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsResponse";
  value: Uint8Array;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseAmino {
  block_heights?: string[];
}
export interface QueryScheduledBlockHeightsResponseAminoMsg {
  type: "/axelarcork.v1.QueryScheduledBlockHeightsResponse";
  value: QueryScheduledBlockHeightsResponseAmino;
}
/** QueryScheduledBlockHeightsResponse */
export interface QueryScheduledBlockHeightsResponseSDKType {
  block_heights: bigint[];
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequest {
  blockHeight: bigint;
  chainId: bigint;
}
export interface QueryScheduledCorksByBlockHeightRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestAmino {
  block_height?: string;
  chain_id?: string;
}
export interface QueryScheduledCorksByBlockHeightRequestAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksByBlockHeightRequest";
  value: QueryScheduledCorksByBlockHeightRequestAmino;
}
/** QueryScheduledCorksByBlockHeightRequest */
export interface QueryScheduledCorksByBlockHeightRequestSDKType {
  block_height: bigint;
  chain_id: bigint;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponse {
  corks: ScheduledAxelarCork[];
}
export interface QueryScheduledCorksByBlockHeightResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseAmino {
  corks?: ScheduledAxelarCorkAmino[];
}
export interface QueryScheduledCorksByBlockHeightResponseAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksByBlockHeightResponse";
  value: QueryScheduledCorksByBlockHeightResponseAmino;
}
/** QueryScheduledCorksByBlockHeightResponse */
export interface QueryScheduledCorksByBlockHeightResponseSDKType {
  corks: ScheduledAxelarCorkSDKType[];
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequest {
  id: string;
  chainId: bigint;
}
export interface QueryScheduledCorksByIDRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDRequest";
  value: Uint8Array;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestAmino {
  id?: string;
  chain_id?: string;
}
export interface QueryScheduledCorksByIDRequestAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksByIDRequest";
  value: QueryScheduledCorksByIDRequestAmino;
}
/** QueryScheduledCorksByIDRequest */
export interface QueryScheduledCorksByIDRequestSDKType {
  id: string;
  chain_id: bigint;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponse {
  corks: ScheduledAxelarCork[];
}
export interface QueryScheduledCorksByIDResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDResponse";
  value: Uint8Array;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseAmino {
  corks?: ScheduledAxelarCorkAmino[];
}
export interface QueryScheduledCorksByIDResponseAminoMsg {
  type: "/axelarcork.v1.QueryScheduledCorksByIDResponse";
  value: QueryScheduledCorksByIDResponseAmino;
}
/** QueryScheduledCorksByIDResponse */
export interface QueryScheduledCorksByIDResponseSDKType {
  corks: ScheduledAxelarCorkSDKType[];
}
export interface QueryCorkResultRequest {
  id: string;
  chainId: bigint;
}
export interface QueryCorkResultRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCorkResultRequest";
  value: Uint8Array;
}
export interface QueryCorkResultRequestAmino {
  id?: string;
  chain_id?: string;
}
export interface QueryCorkResultRequestAminoMsg {
  type: "/axelarcork.v1.QueryCorkResultRequest";
  value: QueryCorkResultRequestAmino;
}
export interface QueryCorkResultRequestSDKType {
  id: string;
  chain_id: bigint;
}
export interface QueryCorkResultResponse {
  corkResult?: AxelarCorkResult;
}
export interface QueryCorkResultResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCorkResultResponse";
  value: Uint8Array;
}
export interface QueryCorkResultResponseAmino {
  corkResult?: AxelarCorkResultAmino;
}
export interface QueryCorkResultResponseAminoMsg {
  type: "/axelarcork.v1.QueryCorkResultResponse";
  value: QueryCorkResultResponseAmino;
}
export interface QueryCorkResultResponseSDKType {
  corkResult?: AxelarCorkResultSDKType;
}
export interface QueryCorkResultsRequest {
  chainId: bigint;
}
export interface QueryCorkResultsRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCorkResultsRequest";
  value: Uint8Array;
}
export interface QueryCorkResultsRequestAmino {
  chain_id?: string;
}
export interface QueryCorkResultsRequestAminoMsg {
  type: "/axelarcork.v1.QueryCorkResultsRequest";
  value: QueryCorkResultsRequestAmino;
}
export interface QueryCorkResultsRequestSDKType {
  chain_id: bigint;
}
export interface QueryCorkResultsResponse {
  corkResults: AxelarCorkResult[];
}
export interface QueryCorkResultsResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryCorkResultsResponse";
  value: Uint8Array;
}
export interface QueryCorkResultsResponseAmino {
  corkResults?: AxelarCorkResultAmino[];
}
export interface QueryCorkResultsResponseAminoMsg {
  type: "/axelarcork.v1.QueryCorkResultsResponse";
  value: QueryCorkResultsResponseAmino;
}
export interface QueryCorkResultsResponseSDKType {
  corkResults: AxelarCorkResultSDKType[];
}
export interface QueryChainConfigurationsRequest {}
export interface QueryChainConfigurationsRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryChainConfigurationsRequest";
  value: Uint8Array;
}
export interface QueryChainConfigurationsRequestAmino {}
export interface QueryChainConfigurationsRequestAminoMsg {
  type: "/axelarcork.v1.QueryChainConfigurationsRequest";
  value: QueryChainConfigurationsRequestAmino;
}
export interface QueryChainConfigurationsRequestSDKType {}
export interface QueryChainConfigurationsResponse {
  configurations: ChainConfiguration[];
}
export interface QueryChainConfigurationsResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryChainConfigurationsResponse";
  value: Uint8Array;
}
export interface QueryChainConfigurationsResponseAmino {
  configurations?: ChainConfigurationAmino[];
}
export interface QueryChainConfigurationsResponseAminoMsg {
  type: "/axelarcork.v1.QueryChainConfigurationsResponse";
  value: QueryChainConfigurationsResponseAmino;
}
export interface QueryChainConfigurationsResponseSDKType {
  configurations: ChainConfigurationSDKType[];
}
export interface QueryAxelarContractCallNoncesRequest {}
export interface QueryAxelarContractCallNoncesRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest";
  value: Uint8Array;
}
export interface QueryAxelarContractCallNoncesRequestAmino {}
export interface QueryAxelarContractCallNoncesRequestAminoMsg {
  type: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest";
  value: QueryAxelarContractCallNoncesRequestAmino;
}
export interface QueryAxelarContractCallNoncesRequestSDKType {}
export interface QueryAxelarContractCallNoncesResponse {
  contractCallNonces: AxelarContractCallNonce[];
}
export interface QueryAxelarContractCallNoncesResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesResponse";
  value: Uint8Array;
}
export interface QueryAxelarContractCallNoncesResponseAmino {
  contract_call_nonces?: AxelarContractCallNonceAmino[];
}
export interface QueryAxelarContractCallNoncesResponseAminoMsg {
  type: "/axelarcork.v1.QueryAxelarContractCallNoncesResponse";
  value: QueryAxelarContractCallNoncesResponseAmino;
}
export interface QueryAxelarContractCallNoncesResponseSDKType {
  contract_call_nonces: AxelarContractCallNonceSDKType[];
}
export interface QueryAxelarProxyUpgradeDataRequest {}
export interface QueryAxelarProxyUpgradeDataRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest";
  value: Uint8Array;
}
export interface QueryAxelarProxyUpgradeDataRequestAmino {}
export interface QueryAxelarProxyUpgradeDataRequestAminoMsg {
  type: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest";
  value: QueryAxelarProxyUpgradeDataRequestAmino;
}
export interface QueryAxelarProxyUpgradeDataRequestSDKType {}
export interface QueryAxelarProxyUpgradeDataResponse {
  proxyUpgradeData: AxelarUpgradeData[];
}
export interface QueryAxelarProxyUpgradeDataResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataResponse";
  value: Uint8Array;
}
export interface QueryAxelarProxyUpgradeDataResponseAmino {
  proxy_upgrade_data?: AxelarUpgradeDataAmino[];
}
export interface QueryAxelarProxyUpgradeDataResponseAminoMsg {
  type: "/axelarcork.v1.QueryAxelarProxyUpgradeDataResponse";
  value: QueryAxelarProxyUpgradeDataResponseAmino;
}
export interface QueryAxelarProxyUpgradeDataResponseSDKType {
  proxy_upgrade_data: AxelarUpgradeDataSDKType[];
}
export interface QueryWinningAxelarCorkRequest {
  chainId: bigint;
  contractAddress: string;
}
export interface QueryWinningAxelarCorkRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkRequest";
  value: Uint8Array;
}
export interface QueryWinningAxelarCorkRequestAmino {
  chain_id?: string;
  contract_address?: string;
}
export interface QueryWinningAxelarCorkRequestAminoMsg {
  type: "/axelarcork.v1.QueryWinningAxelarCorkRequest";
  value: QueryWinningAxelarCorkRequestAmino;
}
export interface QueryWinningAxelarCorkRequestSDKType {
  chain_id: bigint;
  contract_address: string;
}
export interface QueryWinningAxelarCorkResponse {
  cork?: AxelarCork;
  blockHeight: bigint;
}
export interface QueryWinningAxelarCorkResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkResponse";
  value: Uint8Array;
}
export interface QueryWinningAxelarCorkResponseAmino {
  cork?: AxelarCorkAmino;
  block_height?: string;
}
export interface QueryWinningAxelarCorkResponseAminoMsg {
  type: "/axelarcork.v1.QueryWinningAxelarCorkResponse";
  value: QueryWinningAxelarCorkResponseAmino;
}
export interface QueryWinningAxelarCorkResponseSDKType {
  cork?: AxelarCorkSDKType;
  block_height: bigint;
}
export interface QueryWinningAxelarCorksRequest {
  chainId: bigint;
}
export interface QueryWinningAxelarCorksRequestProtoMsg {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksRequest";
  value: Uint8Array;
}
export interface QueryWinningAxelarCorksRequestAmino {
  chain_id?: string;
}
export interface QueryWinningAxelarCorksRequestAminoMsg {
  type: "/axelarcork.v1.QueryWinningAxelarCorksRequest";
  value: QueryWinningAxelarCorksRequestAmino;
}
export interface QueryWinningAxelarCorksRequestSDKType {
  chain_id: bigint;
}
export interface QueryWinningAxelarCorksResponse {
  winningAxelarCorks: WinningAxelarCork[];
}
export interface QueryWinningAxelarCorksResponseProtoMsg {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksResponse";
  value: Uint8Array;
}
export interface QueryWinningAxelarCorksResponseAmino {
  winning_axelar_corks?: WinningAxelarCorkAmino[];
}
export interface QueryWinningAxelarCorksResponseAminoMsg {
  type: "/axelarcork.v1.QueryWinningAxelarCorksResponse";
  value: QueryWinningAxelarCorksResponseAmino;
}
export interface QueryWinningAxelarCorksResponseSDKType {
  winning_axelar_corks: WinningAxelarCorkSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/axelarcork.v1.QueryParamsRequest",
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
      typeUrl: "/axelarcork.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/axelarcork.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/axelarcork.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsRequest(): QueryCellarIDsRequest {
  return {};
}
export const QueryCellarIDsRequest = {
  typeUrl: "/axelarcork.v1.QueryCellarIDsRequest",
  encode(_: QueryCellarIDsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCellarIDsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  },
  fromAmino(_: QueryCellarIDsRequestAmino): QueryCellarIDsRequest {
    const message = createBaseQueryCellarIDsRequest();
    return message;
  },
  toAmino(_: QueryCellarIDsRequest): QueryCellarIDsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsRequestAminoMsg): QueryCellarIDsRequest {
    return QueryCellarIDsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsRequestProtoMsg): QueryCellarIDsRequest {
    return QueryCellarIDsRequest.decode(message.value);
  },
  toProto(message: QueryCellarIDsRequest): Uint8Array {
    return QueryCellarIDsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsRequest): QueryCellarIDsRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCellarIDsRequest",
      value: QueryCellarIDsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsResponse(): QueryCellarIDsResponse {
  return {
    cellarIds: []
  };
}
export const QueryCellarIDsResponse = {
  typeUrl: "/axelarcork.v1.QueryCellarIDsResponse",
  encode(message: QueryCellarIDsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cellarIds) {
      CellarIDSet.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCellarIDsResponse {
    return {
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => CellarIDSet.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCellarIDsResponse>): QueryCellarIDsResponse {
    const message = createBaseQueryCellarIDsResponse();
    message.cellarIds = object.cellarIds?.map(e => CellarIDSet.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCellarIDsResponseAmino): QueryCellarIDsResponse {
    const message = createBaseQueryCellarIDsResponse();
    message.cellarIds = object.cellar_ids?.map(e => CellarIDSet.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCellarIDsResponse): QueryCellarIDsResponseAmino {
    const obj: any = {};
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e ? CellarIDSet.toAmino(e) : undefined);
    } else {
      obj.cellar_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsResponseAminoMsg): QueryCellarIDsResponse {
    return QueryCellarIDsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsResponseProtoMsg): QueryCellarIDsResponse {
    return QueryCellarIDsResponse.decode(message.value);
  },
  toProto(message: QueryCellarIDsResponse): Uint8Array {
    return QueryCellarIDsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsResponse): QueryCellarIDsResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCellarIDsResponse",
      value: QueryCellarIDsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsByChainIDRequest(): QueryCellarIDsByChainIDRequest {
  return {
    chainId: BigInt(0)
  };
}
export const QueryCellarIDsByChainIDRequest = {
  typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDRequest",
  encode(message: QueryCellarIDsByChainIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCellarIDsByChainIDRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCellarIDsByChainIDRequest>): QueryCellarIDsByChainIDRequest {
    const message = createBaseQueryCellarIDsByChainIDRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCellarIDsByChainIDRequestAmino): QueryCellarIDsByChainIDRequest {
    const message = createBaseQueryCellarIDsByChainIDRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryCellarIDsByChainIDRequest): QueryCellarIDsByChainIDRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsByChainIDRequestAminoMsg): QueryCellarIDsByChainIDRequest {
    return QueryCellarIDsByChainIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsByChainIDRequestProtoMsg): QueryCellarIDsByChainIDRequest {
    return QueryCellarIDsByChainIDRequest.decode(message.value);
  },
  toProto(message: QueryCellarIDsByChainIDRequest): Uint8Array {
    return QueryCellarIDsByChainIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsByChainIDRequest): QueryCellarIDsByChainIDRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDRequest",
      value: QueryCellarIDsByChainIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCellarIDsByChainIDResponse(): QueryCellarIDsByChainIDResponse {
  return {
    cellarIds: []
  };
}
export const QueryCellarIDsByChainIDResponse = {
  typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDResponse",
  encode(message: QueryCellarIDsByChainIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.cellarIds) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): QueryCellarIDsByChainIDResponse {
    return {
      cellarIds: Array.isArray(object?.cellarIds) ? object.cellarIds.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCellarIDsByChainIDResponse>): QueryCellarIDsByChainIDResponse {
    const message = createBaseQueryCellarIDsByChainIDResponse();
    message.cellarIds = object.cellarIds?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryCellarIDsByChainIDResponseAmino): QueryCellarIDsByChainIDResponse {
    const message = createBaseQueryCellarIDsByChainIDResponse();
    message.cellarIds = object.cellar_ids?.map(e => e) || [];
    return message;
  },
  toAmino(message: QueryCellarIDsByChainIDResponse): QueryCellarIDsByChainIDResponseAmino {
    const obj: any = {};
    if (message.cellarIds) {
      obj.cellar_ids = message.cellarIds.map(e => e);
    } else {
      obj.cellar_ids = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCellarIDsByChainIDResponseAminoMsg): QueryCellarIDsByChainIDResponse {
    return QueryCellarIDsByChainIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCellarIDsByChainIDResponseProtoMsg): QueryCellarIDsByChainIDResponse {
    return QueryCellarIDsByChainIDResponse.decode(message.value);
  },
  toProto(message: QueryCellarIDsByChainIDResponse): Uint8Array {
    return QueryCellarIDsByChainIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCellarIDsByChainIDResponse): QueryCellarIDsByChainIDResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCellarIDsByChainIDResponse",
      value: QueryCellarIDsByChainIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksRequest(): QueryScheduledCorksRequest {
  return {
    chainId: BigInt(0)
  };
}
export const QueryScheduledCorksRequest = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksRequest",
  encode(message: QueryScheduledCorksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduledCorksRequestAmino): QueryScheduledCorksRequest {
    const message = createBaseQueryScheduledCorksRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksRequestAminoMsg): QueryScheduledCorksRequest {
    return QueryScheduledCorksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksRequestProtoMsg): QueryScheduledCorksRequest {
    return QueryScheduledCorksRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksRequest): Uint8Array {
    return QueryScheduledCorksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksRequest",
      value: QueryScheduledCorksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksResponse(): QueryScheduledCorksResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksResponse = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksResponse",
  encode(message: QueryScheduledCorksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledAxelarCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledAxelarCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse {
    const message = createBaseQueryScheduledCorksResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksResponseAmino): QueryScheduledCorksResponse {
    const message = createBaseQueryScheduledCorksResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledAxelarCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksResponseAminoMsg): QueryScheduledCorksResponse {
    return QueryScheduledCorksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksResponseProtoMsg): QueryScheduledCorksResponse {
    return QueryScheduledCorksResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksResponse): Uint8Array {
    return QueryScheduledCorksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksResponse",
      value: QueryScheduledCorksResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledBlockHeightsRequest(): QueryScheduledBlockHeightsRequest {
  return {
    chainId: BigInt(0)
  };
}
export const QueryScheduledBlockHeightsRequest = {
  typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsRequest",
  encode(message: QueryScheduledBlockHeightsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledBlockHeightsRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduledBlockHeightsRequestAmino): QueryScheduledBlockHeightsRequest {
    const message = createBaseQueryScheduledBlockHeightsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledBlockHeightsRequestAminoMsg): QueryScheduledBlockHeightsRequest {
    return QueryScheduledBlockHeightsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledBlockHeightsRequestProtoMsg): QueryScheduledBlockHeightsRequest {
    return QueryScheduledBlockHeightsRequest.decode(message.value);
  },
  toProto(message: QueryScheduledBlockHeightsRequest): Uint8Array {
    return QueryScheduledBlockHeightsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsRequest",
      value: QueryScheduledBlockHeightsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledBlockHeightsResponse(): QueryScheduledBlockHeightsResponse {
  return {
    blockHeights: []
  };
}
export const QueryScheduledBlockHeightsResponse = {
  typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsResponse",
  encode(message: QueryScheduledBlockHeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.blockHeights) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): QueryScheduledBlockHeightsResponse {
    return {
      blockHeights: Array.isArray(object?.blockHeights) ? object.blockHeights.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.blockHeights?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: QueryScheduledBlockHeightsResponseAmino): QueryScheduledBlockHeightsResponse {
    const message = createBaseQueryScheduledBlockHeightsResponse();
    message.blockHeights = object.block_heights?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseAmino {
    const obj: any = {};
    if (message.blockHeights) {
      obj.block_heights = message.blockHeights.map(e => e.toString());
    } else {
      obj.block_heights = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledBlockHeightsResponseAminoMsg): QueryScheduledBlockHeightsResponse {
    return QueryScheduledBlockHeightsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledBlockHeightsResponseProtoMsg): QueryScheduledBlockHeightsResponse {
    return QueryScheduledBlockHeightsResponse.decode(message.value);
  },
  toProto(message: QueryScheduledBlockHeightsResponse): Uint8Array {
    return QueryScheduledBlockHeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledBlockHeightsResponse",
      value: QueryScheduledBlockHeightsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByBlockHeightRequest(): QueryScheduledCorksByBlockHeightRequest {
  return {
    blockHeight: BigInt(0),
    chainId: BigInt(0)
  };
}
export const QueryScheduledCorksByBlockHeightRequest = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightRequest",
  encode(message: QueryScheduledCorksByBlockHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduledCorksByBlockHeightRequestAmino): QueryScheduledCorksByBlockHeightRequest {
    const message = createBaseQueryScheduledCorksByBlockHeightRequest();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByBlockHeightRequestAminoMsg): QueryScheduledCorksByBlockHeightRequest {
    return QueryScheduledCorksByBlockHeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByBlockHeightRequestProtoMsg): QueryScheduledCorksByBlockHeightRequest {
    return QueryScheduledCorksByBlockHeightRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByBlockHeightRequest): Uint8Array {
    return QueryScheduledCorksByBlockHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightRequest",
      value: QueryScheduledCorksByBlockHeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByBlockHeightResponse(): QueryScheduledCorksByBlockHeightResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksByBlockHeightResponse = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightResponse",
  encode(message: QueryScheduledCorksByBlockHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledAxelarCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledAxelarCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse {
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksByBlockHeightResponseAmino): QueryScheduledCorksByBlockHeightResponse {
    const message = createBaseQueryScheduledCorksByBlockHeightResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledAxelarCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByBlockHeightResponseAminoMsg): QueryScheduledCorksByBlockHeightResponse {
    return QueryScheduledCorksByBlockHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByBlockHeightResponseProtoMsg): QueryScheduledCorksByBlockHeightResponse {
    return QueryScheduledCorksByBlockHeightResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByBlockHeightResponse): Uint8Array {
    return QueryScheduledCorksByBlockHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksByBlockHeightResponse",
      value: QueryScheduledCorksByBlockHeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByIDRequest(): QueryScheduledCorksByIDRequest {
  return {
    id: "",
    chainId: BigInt(0)
  };
}
export const QueryScheduledCorksByIDRequest = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDRequest",
  encode(message: QueryScheduledCorksByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByIDRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByIDRequest>): QueryScheduledCorksByIDRequest {
    const message = createBaseQueryScheduledCorksByIDRequest();
    message.id = object.id ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryScheduledCorksByIDRequestAmino): QueryScheduledCorksByIDRequest {
    const message = createBaseQueryScheduledCorksByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByIDRequestAminoMsg): QueryScheduledCorksByIDRequest {
    return QueryScheduledCorksByIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByIDRequestProtoMsg): QueryScheduledCorksByIDRequest {
    return QueryScheduledCorksByIDRequest.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByIDRequest): Uint8Array {
    return QueryScheduledCorksByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDRequest",
      value: QueryScheduledCorksByIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryScheduledCorksByIDResponse(): QueryScheduledCorksByIDResponse {
  return {
    corks: []
  };
}
export const QueryScheduledCorksByIDResponse = {
  typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDResponse",
  encode(message: QueryScheduledCorksByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corks) {
      ScheduledAxelarCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryScheduledCorksByIDResponse {
    return {
      corks: Array.isArray(object?.corks) ? object.corks.map((e: any) => ScheduledAxelarCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryScheduledCorksByIDResponse>): QueryScheduledCorksByIDResponse {
    const message = createBaseQueryScheduledCorksByIDResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryScheduledCorksByIDResponseAmino): QueryScheduledCorksByIDResponse {
    const message = createBaseQueryScheduledCorksByIDResponse();
    message.corks = object.corks?.map(e => ScheduledAxelarCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseAmino {
    const obj: any = {};
    if (message.corks) {
      obj.corks = message.corks.map(e => e ? ScheduledAxelarCork.toAmino(e) : undefined);
    } else {
      obj.corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryScheduledCorksByIDResponseAminoMsg): QueryScheduledCorksByIDResponse {
    return QueryScheduledCorksByIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryScheduledCorksByIDResponseProtoMsg): QueryScheduledCorksByIDResponse {
    return QueryScheduledCorksByIDResponse.decode(message.value);
  },
  toProto(message: QueryScheduledCorksByIDResponse): Uint8Array {
    return QueryScheduledCorksByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryScheduledCorksByIDResponse",
      value: QueryScheduledCorksByIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultRequest(): QueryCorkResultRequest {
  return {
    id: "",
    chainId: BigInt(0)
  };
}
export const QueryCorkResultRequest = {
  typeUrl: "/axelarcork.v1.QueryCorkResultRequest",
  encode(message: QueryCorkResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.chainId !== BigInt(0)) {
      writer.uint32(16).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCorkResultRequest>): QueryCorkResultRequest {
    const message = createBaseQueryCorkResultRequest();
    message.id = object.id ?? "";
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCorkResultRequestAmino): QueryCorkResultRequest {
    const message = createBaseQueryCorkResultRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryCorkResultRequest): QueryCorkResultRequestAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultRequestAminoMsg): QueryCorkResultRequest {
    return QueryCorkResultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultRequestProtoMsg): QueryCorkResultRequest {
    return QueryCorkResultRequest.decode(message.value);
  },
  toProto(message: QueryCorkResultRequest): Uint8Array {
    return QueryCorkResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultRequest): QueryCorkResultRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCorkResultRequest",
      value: QueryCorkResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultResponse(): QueryCorkResultResponse {
  return {
    corkResult: undefined
  };
}
export const QueryCorkResultResponse = {
  typeUrl: "/axelarcork.v1.QueryCorkResultResponse",
  encode(message: QueryCorkResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.corkResult !== undefined) {
      AxelarCorkResult.encode(message.corkResult, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultResponse {
    return {
      corkResult: isSet(object.corkResult) ? AxelarCorkResult.fromJSON(object.corkResult) : undefined
    };
  },
  fromPartial(object: Partial<QueryCorkResultResponse>): QueryCorkResultResponse {
    const message = createBaseQueryCorkResultResponse();
    message.corkResult = object.corkResult !== undefined && object.corkResult !== null ? AxelarCorkResult.fromPartial(object.corkResult) : undefined;
    return message;
  },
  fromAmino(object: QueryCorkResultResponseAmino): QueryCorkResultResponse {
    const message = createBaseQueryCorkResultResponse();
    if (object.corkResult !== undefined && object.corkResult !== null) {
      message.corkResult = AxelarCorkResult.fromAmino(object.corkResult);
    }
    return message;
  },
  toAmino(message: QueryCorkResultResponse): QueryCorkResultResponseAmino {
    const obj: any = {};
    obj.corkResult = message.corkResult ? AxelarCorkResult.toAmino(message.corkResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultResponseAminoMsg): QueryCorkResultResponse {
    return QueryCorkResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultResponseProtoMsg): QueryCorkResultResponse {
    return QueryCorkResultResponse.decode(message.value);
  },
  toProto(message: QueryCorkResultResponse): Uint8Array {
    return QueryCorkResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultResponse): QueryCorkResultResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCorkResultResponse",
      value: QueryCorkResultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultsRequest(): QueryCorkResultsRequest {
  return {
    chainId: BigInt(0)
  };
}
export const QueryCorkResultsRequest = {
  typeUrl: "/axelarcork.v1.QueryCorkResultsRequest",
  encode(message: QueryCorkResultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultsRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryCorkResultsRequest>): QueryCorkResultsRequest {
    const message = createBaseQueryCorkResultsRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryCorkResultsRequestAmino): QueryCorkResultsRequest {
    const message = createBaseQueryCorkResultsRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryCorkResultsRequest): QueryCorkResultsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultsRequestAminoMsg): QueryCorkResultsRequest {
    return QueryCorkResultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultsRequestProtoMsg): QueryCorkResultsRequest {
    return QueryCorkResultsRequest.decode(message.value);
  },
  toProto(message: QueryCorkResultsRequest): Uint8Array {
    return QueryCorkResultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultsRequest): QueryCorkResultsRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCorkResultsRequest",
      value: QueryCorkResultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCorkResultsResponse(): QueryCorkResultsResponse {
  return {
    corkResults: []
  };
}
export const QueryCorkResultsResponse = {
  typeUrl: "/axelarcork.v1.QueryCorkResultsResponse",
  encode(message: QueryCorkResultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.corkResults) {
      AxelarCorkResult.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCorkResultsResponse {
    return {
      corkResults: Array.isArray(object?.corkResults) ? object.corkResults.map((e: any) => AxelarCorkResult.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCorkResultsResponse>): QueryCorkResultsResponse {
    const message = createBaseQueryCorkResultsResponse();
    message.corkResults = object.corkResults?.map(e => AxelarCorkResult.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCorkResultsResponseAmino): QueryCorkResultsResponse {
    const message = createBaseQueryCorkResultsResponse();
    message.corkResults = object.corkResults?.map(e => AxelarCorkResult.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCorkResultsResponse): QueryCorkResultsResponseAmino {
    const obj: any = {};
    if (message.corkResults) {
      obj.corkResults = message.corkResults.map(e => e ? AxelarCorkResult.toAmino(e) : undefined);
    } else {
      obj.corkResults = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCorkResultsResponseAminoMsg): QueryCorkResultsResponse {
    return QueryCorkResultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCorkResultsResponseProtoMsg): QueryCorkResultsResponse {
    return QueryCorkResultsResponse.decode(message.value);
  },
  toProto(message: QueryCorkResultsResponse): Uint8Array {
    return QueryCorkResultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCorkResultsResponse): QueryCorkResultsResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryCorkResultsResponse",
      value: QueryCorkResultsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryChainConfigurationsRequest(): QueryChainConfigurationsRequest {
  return {};
}
export const QueryChainConfigurationsRequest = {
  typeUrl: "/axelarcork.v1.QueryChainConfigurationsRequest",
  encode(_: QueryChainConfigurationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryChainConfigurationsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryChainConfigurationsRequest>): QueryChainConfigurationsRequest {
    const message = createBaseQueryChainConfigurationsRequest();
    return message;
  },
  fromAmino(_: QueryChainConfigurationsRequestAmino): QueryChainConfigurationsRequest {
    const message = createBaseQueryChainConfigurationsRequest();
    return message;
  },
  toAmino(_: QueryChainConfigurationsRequest): QueryChainConfigurationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryChainConfigurationsRequestAminoMsg): QueryChainConfigurationsRequest {
    return QueryChainConfigurationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainConfigurationsRequestProtoMsg): QueryChainConfigurationsRequest {
    return QueryChainConfigurationsRequest.decode(message.value);
  },
  toProto(message: QueryChainConfigurationsRequest): Uint8Array {
    return QueryChainConfigurationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryChainConfigurationsRequest): QueryChainConfigurationsRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryChainConfigurationsRequest",
      value: QueryChainConfigurationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryChainConfigurationsResponse(): QueryChainConfigurationsResponse {
  return {
    configurations: []
  };
}
export const QueryChainConfigurationsResponse = {
  typeUrl: "/axelarcork.v1.QueryChainConfigurationsResponse",
  encode(message: QueryChainConfigurationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.configurations) {
      ChainConfiguration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryChainConfigurationsResponse {
    return {
      configurations: Array.isArray(object?.configurations) ? object.configurations.map((e: any) => ChainConfiguration.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryChainConfigurationsResponse>): QueryChainConfigurationsResponse {
    const message = createBaseQueryChainConfigurationsResponse();
    message.configurations = object.configurations?.map(e => ChainConfiguration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryChainConfigurationsResponseAmino): QueryChainConfigurationsResponse {
    const message = createBaseQueryChainConfigurationsResponse();
    message.configurations = object.configurations?.map(e => ChainConfiguration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryChainConfigurationsResponse): QueryChainConfigurationsResponseAmino {
    const obj: any = {};
    if (message.configurations) {
      obj.configurations = message.configurations.map(e => e ? ChainConfiguration.toAmino(e) : undefined);
    } else {
      obj.configurations = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryChainConfigurationsResponseAminoMsg): QueryChainConfigurationsResponse {
    return QueryChainConfigurationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryChainConfigurationsResponseProtoMsg): QueryChainConfigurationsResponse {
    return QueryChainConfigurationsResponse.decode(message.value);
  },
  toProto(message: QueryChainConfigurationsResponse): Uint8Array {
    return QueryChainConfigurationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryChainConfigurationsResponse): QueryChainConfigurationsResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryChainConfigurationsResponse",
      value: QueryChainConfigurationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAxelarContractCallNoncesRequest(): QueryAxelarContractCallNoncesRequest {
  return {};
}
export const QueryAxelarContractCallNoncesRequest = {
  typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest",
  encode(_: QueryAxelarContractCallNoncesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAxelarContractCallNoncesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAxelarContractCallNoncesRequest>): QueryAxelarContractCallNoncesRequest {
    const message = createBaseQueryAxelarContractCallNoncesRequest();
    return message;
  },
  fromAmino(_: QueryAxelarContractCallNoncesRequestAmino): QueryAxelarContractCallNoncesRequest {
    const message = createBaseQueryAxelarContractCallNoncesRequest();
    return message;
  },
  toAmino(_: QueryAxelarContractCallNoncesRequest): QueryAxelarContractCallNoncesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAxelarContractCallNoncesRequestAminoMsg): QueryAxelarContractCallNoncesRequest {
    return QueryAxelarContractCallNoncesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAxelarContractCallNoncesRequestProtoMsg): QueryAxelarContractCallNoncesRequest {
    return QueryAxelarContractCallNoncesRequest.decode(message.value);
  },
  toProto(message: QueryAxelarContractCallNoncesRequest): Uint8Array {
    return QueryAxelarContractCallNoncesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAxelarContractCallNoncesRequest): QueryAxelarContractCallNoncesRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest",
      value: QueryAxelarContractCallNoncesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAxelarContractCallNoncesResponse(): QueryAxelarContractCallNoncesResponse {
  return {
    contractCallNonces: []
  };
}
export const QueryAxelarContractCallNoncesResponse = {
  typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesResponse",
  encode(message: QueryAxelarContractCallNoncesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.contractCallNonces) {
      AxelarContractCallNonce.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAxelarContractCallNoncesResponse {
    return {
      contractCallNonces: Array.isArray(object?.contractCallNonces) ? object.contractCallNonces.map((e: any) => AxelarContractCallNonce.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAxelarContractCallNoncesResponse>): QueryAxelarContractCallNoncesResponse {
    const message = createBaseQueryAxelarContractCallNoncesResponse();
    message.contractCallNonces = object.contractCallNonces?.map(e => AxelarContractCallNonce.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAxelarContractCallNoncesResponseAmino): QueryAxelarContractCallNoncesResponse {
    const message = createBaseQueryAxelarContractCallNoncesResponse();
    message.contractCallNonces = object.contract_call_nonces?.map(e => AxelarContractCallNonce.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAxelarContractCallNoncesResponse): QueryAxelarContractCallNoncesResponseAmino {
    const obj: any = {};
    if (message.contractCallNonces) {
      obj.contract_call_nonces = message.contractCallNonces.map(e => e ? AxelarContractCallNonce.toAmino(e) : undefined);
    } else {
      obj.contract_call_nonces = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAxelarContractCallNoncesResponseAminoMsg): QueryAxelarContractCallNoncesResponse {
    return QueryAxelarContractCallNoncesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAxelarContractCallNoncesResponseProtoMsg): QueryAxelarContractCallNoncesResponse {
    return QueryAxelarContractCallNoncesResponse.decode(message.value);
  },
  toProto(message: QueryAxelarContractCallNoncesResponse): Uint8Array {
    return QueryAxelarContractCallNoncesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAxelarContractCallNoncesResponse): QueryAxelarContractCallNoncesResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesResponse",
      value: QueryAxelarContractCallNoncesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAxelarProxyUpgradeDataRequest(): QueryAxelarProxyUpgradeDataRequest {
  return {};
}
export const QueryAxelarProxyUpgradeDataRequest = {
  typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest",
  encode(_: QueryAxelarProxyUpgradeDataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryAxelarProxyUpgradeDataRequest {
    return {};
  },
  fromPartial(_: Partial<QueryAxelarProxyUpgradeDataRequest>): QueryAxelarProxyUpgradeDataRequest {
    const message = createBaseQueryAxelarProxyUpgradeDataRequest();
    return message;
  },
  fromAmino(_: QueryAxelarProxyUpgradeDataRequestAmino): QueryAxelarProxyUpgradeDataRequest {
    const message = createBaseQueryAxelarProxyUpgradeDataRequest();
    return message;
  },
  toAmino(_: QueryAxelarProxyUpgradeDataRequest): QueryAxelarProxyUpgradeDataRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAxelarProxyUpgradeDataRequestAminoMsg): QueryAxelarProxyUpgradeDataRequest {
    return QueryAxelarProxyUpgradeDataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAxelarProxyUpgradeDataRequestProtoMsg): QueryAxelarProxyUpgradeDataRequest {
    return QueryAxelarProxyUpgradeDataRequest.decode(message.value);
  },
  toProto(message: QueryAxelarProxyUpgradeDataRequest): Uint8Array {
    return QueryAxelarProxyUpgradeDataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAxelarProxyUpgradeDataRequest): QueryAxelarProxyUpgradeDataRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest",
      value: QueryAxelarProxyUpgradeDataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAxelarProxyUpgradeDataResponse(): QueryAxelarProxyUpgradeDataResponse {
  return {
    proxyUpgradeData: []
  };
}
export const QueryAxelarProxyUpgradeDataResponse = {
  typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataResponse",
  encode(message: QueryAxelarProxyUpgradeDataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proxyUpgradeData) {
      AxelarUpgradeData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAxelarProxyUpgradeDataResponse {
    return {
      proxyUpgradeData: Array.isArray(object?.proxyUpgradeData) ? object.proxyUpgradeData.map((e: any) => AxelarUpgradeData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryAxelarProxyUpgradeDataResponse>): QueryAxelarProxyUpgradeDataResponse {
    const message = createBaseQueryAxelarProxyUpgradeDataResponse();
    message.proxyUpgradeData = object.proxyUpgradeData?.map(e => AxelarUpgradeData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAxelarProxyUpgradeDataResponseAmino): QueryAxelarProxyUpgradeDataResponse {
    const message = createBaseQueryAxelarProxyUpgradeDataResponse();
    message.proxyUpgradeData = object.proxy_upgrade_data?.map(e => AxelarUpgradeData.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryAxelarProxyUpgradeDataResponse): QueryAxelarProxyUpgradeDataResponseAmino {
    const obj: any = {};
    if (message.proxyUpgradeData) {
      obj.proxy_upgrade_data = message.proxyUpgradeData.map(e => e ? AxelarUpgradeData.toAmino(e) : undefined);
    } else {
      obj.proxy_upgrade_data = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAxelarProxyUpgradeDataResponseAminoMsg): QueryAxelarProxyUpgradeDataResponse {
    return QueryAxelarProxyUpgradeDataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAxelarProxyUpgradeDataResponseProtoMsg): QueryAxelarProxyUpgradeDataResponse {
    return QueryAxelarProxyUpgradeDataResponse.decode(message.value);
  },
  toProto(message: QueryAxelarProxyUpgradeDataResponse): Uint8Array {
    return QueryAxelarProxyUpgradeDataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAxelarProxyUpgradeDataResponse): QueryAxelarProxyUpgradeDataResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataResponse",
      value: QueryAxelarProxyUpgradeDataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWinningAxelarCorkRequest(): QueryWinningAxelarCorkRequest {
  return {
    chainId: BigInt(0),
    contractAddress: ""
  };
}
export const QueryWinningAxelarCorkRequest = {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkRequest",
  encode(message: QueryWinningAxelarCorkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryWinningAxelarCorkRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0),
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryWinningAxelarCorkRequest>): QueryWinningAxelarCorkRequest {
    const message = createBaseQueryWinningAxelarCorkRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: QueryWinningAxelarCorkRequestAmino): QueryWinningAxelarCorkRequest {
    const message = createBaseQueryWinningAxelarCorkRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryWinningAxelarCorkRequest): QueryWinningAxelarCorkRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryWinningAxelarCorkRequestAminoMsg): QueryWinningAxelarCorkRequest {
    return QueryWinningAxelarCorkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWinningAxelarCorkRequestProtoMsg): QueryWinningAxelarCorkRequest {
    return QueryWinningAxelarCorkRequest.decode(message.value);
  },
  toProto(message: QueryWinningAxelarCorkRequest): Uint8Array {
    return QueryWinningAxelarCorkRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWinningAxelarCorkRequest): QueryWinningAxelarCorkRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkRequest",
      value: QueryWinningAxelarCorkRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWinningAxelarCorkResponse(): QueryWinningAxelarCorkResponse {
  return {
    cork: undefined,
    blockHeight: BigInt(0)
  };
}
export const QueryWinningAxelarCorkResponse = {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkResponse",
  encode(message: QueryWinningAxelarCorkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.cork !== undefined) {
      AxelarCork.encode(message.cork, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    return writer;
  },
  fromJSON(object: any): QueryWinningAxelarCorkResponse {
    return {
      cork: isSet(object.cork) ? AxelarCork.fromJSON(object.cork) : undefined,
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryWinningAxelarCorkResponse>): QueryWinningAxelarCorkResponse {
    const message = createBaseQueryWinningAxelarCorkResponse();
    message.cork = object.cork !== undefined && object.cork !== null ? AxelarCork.fromPartial(object.cork) : undefined;
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWinningAxelarCorkResponseAmino): QueryWinningAxelarCorkResponse {
    const message = createBaseQueryWinningAxelarCorkResponse();
    if (object.cork !== undefined && object.cork !== null) {
      message.cork = AxelarCork.fromAmino(object.cork);
    }
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    return message;
  },
  toAmino(message: QueryWinningAxelarCorkResponse): QueryWinningAxelarCorkResponseAmino {
    const obj: any = {};
    obj.cork = message.cork ? AxelarCork.toAmino(message.cork) : undefined;
    obj.block_height = message.blockHeight ? message.blockHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWinningAxelarCorkResponseAminoMsg): QueryWinningAxelarCorkResponse {
    return QueryWinningAxelarCorkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWinningAxelarCorkResponseProtoMsg): QueryWinningAxelarCorkResponse {
    return QueryWinningAxelarCorkResponse.decode(message.value);
  },
  toProto(message: QueryWinningAxelarCorkResponse): Uint8Array {
    return QueryWinningAxelarCorkResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWinningAxelarCorkResponse): QueryWinningAxelarCorkResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryWinningAxelarCorkResponse",
      value: QueryWinningAxelarCorkResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWinningAxelarCorksRequest(): QueryWinningAxelarCorksRequest {
  return {
    chainId: BigInt(0)
  };
}
export const QueryWinningAxelarCorksRequest = {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksRequest",
  encode(message: QueryWinningAxelarCorksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== BigInt(0)) {
      writer.uint32(8).uint64(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryWinningAxelarCorksRequest {
    return {
      chainId: isSet(object.chainId) ? BigInt(object.chainId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryWinningAxelarCorksRequest>): QueryWinningAxelarCorksRequest {
    const message = createBaseQueryWinningAxelarCorksRequest();
    message.chainId = object.chainId !== undefined && object.chainId !== null ? BigInt(object.chainId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryWinningAxelarCorksRequestAmino): QueryWinningAxelarCorksRequest {
    const message = createBaseQueryWinningAxelarCorksRequest();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = BigInt(object.chain_id);
    }
    return message;
  },
  toAmino(message: QueryWinningAxelarCorksRequest): QueryWinningAxelarCorksRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chainId ? message.chainId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWinningAxelarCorksRequestAminoMsg): QueryWinningAxelarCorksRequest {
    return QueryWinningAxelarCorksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWinningAxelarCorksRequestProtoMsg): QueryWinningAxelarCorksRequest {
    return QueryWinningAxelarCorksRequest.decode(message.value);
  },
  toProto(message: QueryWinningAxelarCorksRequest): Uint8Array {
    return QueryWinningAxelarCorksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWinningAxelarCorksRequest): QueryWinningAxelarCorksRequestProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksRequest",
      value: QueryWinningAxelarCorksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWinningAxelarCorksResponse(): QueryWinningAxelarCorksResponse {
  return {
    winningAxelarCorks: []
  };
}
export const QueryWinningAxelarCorksResponse = {
  typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksResponse",
  encode(message: QueryWinningAxelarCorksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.winningAxelarCorks) {
      WinningAxelarCork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWinningAxelarCorksResponse {
    return {
      winningAxelarCorks: Array.isArray(object?.winningAxelarCorks) ? object.winningAxelarCorks.map((e: any) => WinningAxelarCork.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryWinningAxelarCorksResponse>): QueryWinningAxelarCorksResponse {
    const message = createBaseQueryWinningAxelarCorksResponse();
    message.winningAxelarCorks = object.winningAxelarCorks?.map(e => WinningAxelarCork.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryWinningAxelarCorksResponseAmino): QueryWinningAxelarCorksResponse {
    const message = createBaseQueryWinningAxelarCorksResponse();
    message.winningAxelarCorks = object.winning_axelar_corks?.map(e => WinningAxelarCork.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryWinningAxelarCorksResponse): QueryWinningAxelarCorksResponseAmino {
    const obj: any = {};
    if (message.winningAxelarCorks) {
      obj.winning_axelar_corks = message.winningAxelarCorks.map(e => e ? WinningAxelarCork.toAmino(e) : undefined);
    } else {
      obj.winning_axelar_corks = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryWinningAxelarCorksResponseAminoMsg): QueryWinningAxelarCorksResponse {
    return QueryWinningAxelarCorksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWinningAxelarCorksResponseProtoMsg): QueryWinningAxelarCorksResponse {
    return QueryWinningAxelarCorksResponse.decode(message.value);
  },
  toProto(message: QueryWinningAxelarCorksResponse): Uint8Array {
    return QueryWinningAxelarCorksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWinningAxelarCorksResponse): QueryWinningAxelarCorksResponseProtoMsg {
    return {
      typeUrl: "/axelarcork.v1.QueryWinningAxelarCorksResponse",
      value: QueryWinningAxelarCorksResponse.encode(message).finish()
    };
  }
};