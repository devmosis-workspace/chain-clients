import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { CellarIDSet, CellarIDSetAmino, CellarIDSetSDKType, ScheduledAxelarCork, ScheduledAxelarCorkAmino, ScheduledAxelarCorkSDKType, AxelarCorkResult, AxelarCorkResultAmino, AxelarCorkResultSDKType, ChainConfiguration, ChainConfigurationAmino, ChainConfigurationSDKType, AxelarContractCallNonce, AxelarContractCallNonceAmino, AxelarContractCallNonceSDKType, AxelarUpgradeData, AxelarUpgradeDataAmino, AxelarUpgradeDataSDKType, AxelarCork, AxelarCorkAmino, AxelarCorkSDKType, WinningAxelarCork, WinningAxelarCorkAmino, WinningAxelarCorkSDKType } from "./axelarcork";
import { BinaryWriter } from "../../binary";
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/axelarcork.v1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/axelarcork.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params gRPC method. */
export interface QueryParamsRequestSDKType {
}
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
export interface QueryCellarIDsRequest {
}
export interface QueryCellarIDsRequestProtoMsg {
    typeUrl: "/axelarcork.v1.QueryCellarIDsRequest";
    value: Uint8Array;
}
/** QueryCellarIDs is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestAmino {
}
export interface QueryCellarIDsRequestAminoMsg {
    type: "/axelarcork.v1.QueryCellarIDsRequest";
    value: QueryCellarIDsRequestAmino;
}
/** QueryCellarIDs is the request type for Query/QueryCellarIDs gRPC method. */
export interface QueryCellarIDsRequestSDKType {
}
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
export interface QueryChainConfigurationsRequest {
}
export interface QueryChainConfigurationsRequestProtoMsg {
    typeUrl: "/axelarcork.v1.QueryChainConfigurationsRequest";
    value: Uint8Array;
}
export interface QueryChainConfigurationsRequestAmino {
}
export interface QueryChainConfigurationsRequestAminoMsg {
    type: "/axelarcork.v1.QueryChainConfigurationsRequest";
    value: QueryChainConfigurationsRequestAmino;
}
export interface QueryChainConfigurationsRequestSDKType {
}
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
export interface QueryAxelarContractCallNoncesRequest {
}
export interface QueryAxelarContractCallNoncesRequestProtoMsg {
    typeUrl: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest";
    value: Uint8Array;
}
export interface QueryAxelarContractCallNoncesRequestAmino {
}
export interface QueryAxelarContractCallNoncesRequestAminoMsg {
    type: "/axelarcork.v1.QueryAxelarContractCallNoncesRequest";
    value: QueryAxelarContractCallNoncesRequestAmino;
}
export interface QueryAxelarContractCallNoncesRequestSDKType {
}
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
export interface QueryAxelarProxyUpgradeDataRequest {
}
export interface QueryAxelarProxyUpgradeDataRequestProtoMsg {
    typeUrl: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest";
    value: Uint8Array;
}
export interface QueryAxelarProxyUpgradeDataRequestAmino {
}
export interface QueryAxelarProxyUpgradeDataRequestAminoMsg {
    type: "/axelarcork.v1.QueryAxelarProxyUpgradeDataRequest";
    value: QueryAxelarProxyUpgradeDataRequestAmino;
}
export interface QueryAxelarProxyUpgradeDataRequestSDKType {
}
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
export declare const QueryCellarIDsRequest: {
    typeUrl: string;
    encode(_: QueryCellarIDsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCellarIDsRequest;
    fromPartial(_: Partial<QueryCellarIDsRequest>): QueryCellarIDsRequest;
    fromAmino(_: QueryCellarIDsRequestAmino): QueryCellarIDsRequest;
    toAmino(_: QueryCellarIDsRequest): QueryCellarIDsRequestAmino;
    fromAminoMsg(object: QueryCellarIDsRequestAminoMsg): QueryCellarIDsRequest;
    fromProtoMsg(message: QueryCellarIDsRequestProtoMsg): QueryCellarIDsRequest;
    toProto(message: QueryCellarIDsRequest): Uint8Array;
    toProtoMsg(message: QueryCellarIDsRequest): QueryCellarIDsRequestProtoMsg;
};
export declare const QueryCellarIDsResponse: {
    typeUrl: string;
    encode(message: QueryCellarIDsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCellarIDsResponse;
    fromPartial(object: Partial<QueryCellarIDsResponse>): QueryCellarIDsResponse;
    fromAmino(object: QueryCellarIDsResponseAmino): QueryCellarIDsResponse;
    toAmino(message: QueryCellarIDsResponse): QueryCellarIDsResponseAmino;
    fromAminoMsg(object: QueryCellarIDsResponseAminoMsg): QueryCellarIDsResponse;
    fromProtoMsg(message: QueryCellarIDsResponseProtoMsg): QueryCellarIDsResponse;
    toProto(message: QueryCellarIDsResponse): Uint8Array;
    toProtoMsg(message: QueryCellarIDsResponse): QueryCellarIDsResponseProtoMsg;
};
export declare const QueryCellarIDsByChainIDRequest: {
    typeUrl: string;
    encode(message: QueryCellarIDsByChainIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCellarIDsByChainIDRequest;
    fromPartial(object: Partial<QueryCellarIDsByChainIDRequest>): QueryCellarIDsByChainIDRequest;
    fromAmino(object: QueryCellarIDsByChainIDRequestAmino): QueryCellarIDsByChainIDRequest;
    toAmino(message: QueryCellarIDsByChainIDRequest): QueryCellarIDsByChainIDRequestAmino;
    fromAminoMsg(object: QueryCellarIDsByChainIDRequestAminoMsg): QueryCellarIDsByChainIDRequest;
    fromProtoMsg(message: QueryCellarIDsByChainIDRequestProtoMsg): QueryCellarIDsByChainIDRequest;
    toProto(message: QueryCellarIDsByChainIDRequest): Uint8Array;
    toProtoMsg(message: QueryCellarIDsByChainIDRequest): QueryCellarIDsByChainIDRequestProtoMsg;
};
export declare const QueryCellarIDsByChainIDResponse: {
    typeUrl: string;
    encode(message: QueryCellarIDsByChainIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCellarIDsByChainIDResponse;
    fromPartial(object: Partial<QueryCellarIDsByChainIDResponse>): QueryCellarIDsByChainIDResponse;
    fromAmino(object: QueryCellarIDsByChainIDResponseAmino): QueryCellarIDsByChainIDResponse;
    toAmino(message: QueryCellarIDsByChainIDResponse): QueryCellarIDsByChainIDResponseAmino;
    fromAminoMsg(object: QueryCellarIDsByChainIDResponseAminoMsg): QueryCellarIDsByChainIDResponse;
    fromProtoMsg(message: QueryCellarIDsByChainIDResponseProtoMsg): QueryCellarIDsByChainIDResponse;
    toProto(message: QueryCellarIDsByChainIDResponse): Uint8Array;
    toProtoMsg(message: QueryCellarIDsByChainIDResponse): QueryCellarIDsByChainIDResponseProtoMsg;
};
export declare const QueryScheduledCorksRequest: {
    typeUrl: string;
    encode(message: QueryScheduledCorksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksRequest;
    fromPartial(object: Partial<QueryScheduledCorksRequest>): QueryScheduledCorksRequest;
    fromAmino(object: QueryScheduledCorksRequestAmino): QueryScheduledCorksRequest;
    toAmino(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksRequestAminoMsg): QueryScheduledCorksRequest;
    fromProtoMsg(message: QueryScheduledCorksRequestProtoMsg): QueryScheduledCorksRequest;
    toProto(message: QueryScheduledCorksRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksRequest): QueryScheduledCorksRequestProtoMsg;
};
export declare const QueryScheduledCorksResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksResponse;
    fromPartial(object: Partial<QueryScheduledCorksResponse>): QueryScheduledCorksResponse;
    fromAmino(object: QueryScheduledCorksResponseAmino): QueryScheduledCorksResponse;
    toAmino(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksResponseAminoMsg): QueryScheduledCorksResponse;
    fromProtoMsg(message: QueryScheduledCorksResponseProtoMsg): QueryScheduledCorksResponse;
    toProto(message: QueryScheduledCorksResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksResponse): QueryScheduledCorksResponseProtoMsg;
};
export declare const QueryScheduledBlockHeightsRequest: {
    typeUrl: string;
    encode(message: QueryScheduledBlockHeightsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledBlockHeightsRequest;
    fromPartial(object: Partial<QueryScheduledBlockHeightsRequest>): QueryScheduledBlockHeightsRequest;
    fromAmino(object: QueryScheduledBlockHeightsRequestAmino): QueryScheduledBlockHeightsRequest;
    toAmino(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestAmino;
    fromAminoMsg(object: QueryScheduledBlockHeightsRequestAminoMsg): QueryScheduledBlockHeightsRequest;
    fromProtoMsg(message: QueryScheduledBlockHeightsRequestProtoMsg): QueryScheduledBlockHeightsRequest;
    toProto(message: QueryScheduledBlockHeightsRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledBlockHeightsRequest): QueryScheduledBlockHeightsRequestProtoMsg;
};
export declare const QueryScheduledBlockHeightsResponse: {
    typeUrl: string;
    encode(message: QueryScheduledBlockHeightsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledBlockHeightsResponse;
    fromPartial(object: Partial<QueryScheduledBlockHeightsResponse>): QueryScheduledBlockHeightsResponse;
    fromAmino(object: QueryScheduledBlockHeightsResponseAmino): QueryScheduledBlockHeightsResponse;
    toAmino(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseAmino;
    fromAminoMsg(object: QueryScheduledBlockHeightsResponseAminoMsg): QueryScheduledBlockHeightsResponse;
    fromProtoMsg(message: QueryScheduledBlockHeightsResponseProtoMsg): QueryScheduledBlockHeightsResponse;
    toProto(message: QueryScheduledBlockHeightsResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledBlockHeightsResponse): QueryScheduledBlockHeightsResponseProtoMsg;
};
export declare const QueryScheduledCorksByBlockHeightRequest: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByBlockHeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightRequest;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightRequest>): QueryScheduledCorksByBlockHeightRequest;
    fromAmino(object: QueryScheduledCorksByBlockHeightRequestAmino): QueryScheduledCorksByBlockHeightRequest;
    toAmino(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksByBlockHeightRequestAminoMsg): QueryScheduledCorksByBlockHeightRequest;
    fromProtoMsg(message: QueryScheduledCorksByBlockHeightRequestProtoMsg): QueryScheduledCorksByBlockHeightRequest;
    toProto(message: QueryScheduledCorksByBlockHeightRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByBlockHeightRequest): QueryScheduledCorksByBlockHeightRequestProtoMsg;
};
export declare const QueryScheduledCorksByBlockHeightResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByBlockHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByBlockHeightResponse;
    fromPartial(object: Partial<QueryScheduledCorksByBlockHeightResponse>): QueryScheduledCorksByBlockHeightResponse;
    fromAmino(object: QueryScheduledCorksByBlockHeightResponseAmino): QueryScheduledCorksByBlockHeightResponse;
    toAmino(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksByBlockHeightResponseAminoMsg): QueryScheduledCorksByBlockHeightResponse;
    fromProtoMsg(message: QueryScheduledCorksByBlockHeightResponseProtoMsg): QueryScheduledCorksByBlockHeightResponse;
    toProto(message: QueryScheduledCorksByBlockHeightResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByBlockHeightResponse): QueryScheduledCorksByBlockHeightResponseProtoMsg;
};
export declare const QueryScheduledCorksByIDRequest: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByIDRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByIDRequest;
    fromPartial(object: Partial<QueryScheduledCorksByIDRequest>): QueryScheduledCorksByIDRequest;
    fromAmino(object: QueryScheduledCorksByIDRequestAmino): QueryScheduledCorksByIDRequest;
    toAmino(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestAmino;
    fromAminoMsg(object: QueryScheduledCorksByIDRequestAminoMsg): QueryScheduledCorksByIDRequest;
    fromProtoMsg(message: QueryScheduledCorksByIDRequestProtoMsg): QueryScheduledCorksByIDRequest;
    toProto(message: QueryScheduledCorksByIDRequest): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByIDRequest): QueryScheduledCorksByIDRequestProtoMsg;
};
export declare const QueryScheduledCorksByIDResponse: {
    typeUrl: string;
    encode(message: QueryScheduledCorksByIDResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryScheduledCorksByIDResponse;
    fromPartial(object: Partial<QueryScheduledCorksByIDResponse>): QueryScheduledCorksByIDResponse;
    fromAmino(object: QueryScheduledCorksByIDResponseAmino): QueryScheduledCorksByIDResponse;
    toAmino(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseAmino;
    fromAminoMsg(object: QueryScheduledCorksByIDResponseAminoMsg): QueryScheduledCorksByIDResponse;
    fromProtoMsg(message: QueryScheduledCorksByIDResponseProtoMsg): QueryScheduledCorksByIDResponse;
    toProto(message: QueryScheduledCorksByIDResponse): Uint8Array;
    toProtoMsg(message: QueryScheduledCorksByIDResponse): QueryScheduledCorksByIDResponseProtoMsg;
};
export declare const QueryCorkResultRequest: {
    typeUrl: string;
    encode(message: QueryCorkResultRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultRequest;
    fromPartial(object: Partial<QueryCorkResultRequest>): QueryCorkResultRequest;
    fromAmino(object: QueryCorkResultRequestAmino): QueryCorkResultRequest;
    toAmino(message: QueryCorkResultRequest): QueryCorkResultRequestAmino;
    fromAminoMsg(object: QueryCorkResultRequestAminoMsg): QueryCorkResultRequest;
    fromProtoMsg(message: QueryCorkResultRequestProtoMsg): QueryCorkResultRequest;
    toProto(message: QueryCorkResultRequest): Uint8Array;
    toProtoMsg(message: QueryCorkResultRequest): QueryCorkResultRequestProtoMsg;
};
export declare const QueryCorkResultResponse: {
    typeUrl: string;
    encode(message: QueryCorkResultResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultResponse;
    fromPartial(object: Partial<QueryCorkResultResponse>): QueryCorkResultResponse;
    fromAmino(object: QueryCorkResultResponseAmino): QueryCorkResultResponse;
    toAmino(message: QueryCorkResultResponse): QueryCorkResultResponseAmino;
    fromAminoMsg(object: QueryCorkResultResponseAminoMsg): QueryCorkResultResponse;
    fromProtoMsg(message: QueryCorkResultResponseProtoMsg): QueryCorkResultResponse;
    toProto(message: QueryCorkResultResponse): Uint8Array;
    toProtoMsg(message: QueryCorkResultResponse): QueryCorkResultResponseProtoMsg;
};
export declare const QueryCorkResultsRequest: {
    typeUrl: string;
    encode(message: QueryCorkResultsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultsRequest;
    fromPartial(object: Partial<QueryCorkResultsRequest>): QueryCorkResultsRequest;
    fromAmino(object: QueryCorkResultsRequestAmino): QueryCorkResultsRequest;
    toAmino(message: QueryCorkResultsRequest): QueryCorkResultsRequestAmino;
    fromAminoMsg(object: QueryCorkResultsRequestAminoMsg): QueryCorkResultsRequest;
    fromProtoMsg(message: QueryCorkResultsRequestProtoMsg): QueryCorkResultsRequest;
    toProto(message: QueryCorkResultsRequest): Uint8Array;
    toProtoMsg(message: QueryCorkResultsRequest): QueryCorkResultsRequestProtoMsg;
};
export declare const QueryCorkResultsResponse: {
    typeUrl: string;
    encode(message: QueryCorkResultsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCorkResultsResponse;
    fromPartial(object: Partial<QueryCorkResultsResponse>): QueryCorkResultsResponse;
    fromAmino(object: QueryCorkResultsResponseAmino): QueryCorkResultsResponse;
    toAmino(message: QueryCorkResultsResponse): QueryCorkResultsResponseAmino;
    fromAminoMsg(object: QueryCorkResultsResponseAminoMsg): QueryCorkResultsResponse;
    fromProtoMsg(message: QueryCorkResultsResponseProtoMsg): QueryCorkResultsResponse;
    toProto(message: QueryCorkResultsResponse): Uint8Array;
    toProtoMsg(message: QueryCorkResultsResponse): QueryCorkResultsResponseProtoMsg;
};
export declare const QueryChainConfigurationsRequest: {
    typeUrl: string;
    encode(_: QueryChainConfigurationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryChainConfigurationsRequest;
    fromPartial(_: Partial<QueryChainConfigurationsRequest>): QueryChainConfigurationsRequest;
    fromAmino(_: QueryChainConfigurationsRequestAmino): QueryChainConfigurationsRequest;
    toAmino(_: QueryChainConfigurationsRequest): QueryChainConfigurationsRequestAmino;
    fromAminoMsg(object: QueryChainConfigurationsRequestAminoMsg): QueryChainConfigurationsRequest;
    fromProtoMsg(message: QueryChainConfigurationsRequestProtoMsg): QueryChainConfigurationsRequest;
    toProto(message: QueryChainConfigurationsRequest): Uint8Array;
    toProtoMsg(message: QueryChainConfigurationsRequest): QueryChainConfigurationsRequestProtoMsg;
};
export declare const QueryChainConfigurationsResponse: {
    typeUrl: string;
    encode(message: QueryChainConfigurationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryChainConfigurationsResponse;
    fromPartial(object: Partial<QueryChainConfigurationsResponse>): QueryChainConfigurationsResponse;
    fromAmino(object: QueryChainConfigurationsResponseAmino): QueryChainConfigurationsResponse;
    toAmino(message: QueryChainConfigurationsResponse): QueryChainConfigurationsResponseAmino;
    fromAminoMsg(object: QueryChainConfigurationsResponseAminoMsg): QueryChainConfigurationsResponse;
    fromProtoMsg(message: QueryChainConfigurationsResponseProtoMsg): QueryChainConfigurationsResponse;
    toProto(message: QueryChainConfigurationsResponse): Uint8Array;
    toProtoMsg(message: QueryChainConfigurationsResponse): QueryChainConfigurationsResponseProtoMsg;
};
export declare const QueryAxelarContractCallNoncesRequest: {
    typeUrl: string;
    encode(_: QueryAxelarContractCallNoncesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAxelarContractCallNoncesRequest;
    fromPartial(_: Partial<QueryAxelarContractCallNoncesRequest>): QueryAxelarContractCallNoncesRequest;
    fromAmino(_: QueryAxelarContractCallNoncesRequestAmino): QueryAxelarContractCallNoncesRequest;
    toAmino(_: QueryAxelarContractCallNoncesRequest): QueryAxelarContractCallNoncesRequestAmino;
    fromAminoMsg(object: QueryAxelarContractCallNoncesRequestAminoMsg): QueryAxelarContractCallNoncesRequest;
    fromProtoMsg(message: QueryAxelarContractCallNoncesRequestProtoMsg): QueryAxelarContractCallNoncesRequest;
    toProto(message: QueryAxelarContractCallNoncesRequest): Uint8Array;
    toProtoMsg(message: QueryAxelarContractCallNoncesRequest): QueryAxelarContractCallNoncesRequestProtoMsg;
};
export declare const QueryAxelarContractCallNoncesResponse: {
    typeUrl: string;
    encode(message: QueryAxelarContractCallNoncesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAxelarContractCallNoncesResponse;
    fromPartial(object: Partial<QueryAxelarContractCallNoncesResponse>): QueryAxelarContractCallNoncesResponse;
    fromAmino(object: QueryAxelarContractCallNoncesResponseAmino): QueryAxelarContractCallNoncesResponse;
    toAmino(message: QueryAxelarContractCallNoncesResponse): QueryAxelarContractCallNoncesResponseAmino;
    fromAminoMsg(object: QueryAxelarContractCallNoncesResponseAminoMsg): QueryAxelarContractCallNoncesResponse;
    fromProtoMsg(message: QueryAxelarContractCallNoncesResponseProtoMsg): QueryAxelarContractCallNoncesResponse;
    toProto(message: QueryAxelarContractCallNoncesResponse): Uint8Array;
    toProtoMsg(message: QueryAxelarContractCallNoncesResponse): QueryAxelarContractCallNoncesResponseProtoMsg;
};
export declare const QueryAxelarProxyUpgradeDataRequest: {
    typeUrl: string;
    encode(_: QueryAxelarProxyUpgradeDataRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryAxelarProxyUpgradeDataRequest;
    fromPartial(_: Partial<QueryAxelarProxyUpgradeDataRequest>): QueryAxelarProxyUpgradeDataRequest;
    fromAmino(_: QueryAxelarProxyUpgradeDataRequestAmino): QueryAxelarProxyUpgradeDataRequest;
    toAmino(_: QueryAxelarProxyUpgradeDataRequest): QueryAxelarProxyUpgradeDataRequestAmino;
    fromAminoMsg(object: QueryAxelarProxyUpgradeDataRequestAminoMsg): QueryAxelarProxyUpgradeDataRequest;
    fromProtoMsg(message: QueryAxelarProxyUpgradeDataRequestProtoMsg): QueryAxelarProxyUpgradeDataRequest;
    toProto(message: QueryAxelarProxyUpgradeDataRequest): Uint8Array;
    toProtoMsg(message: QueryAxelarProxyUpgradeDataRequest): QueryAxelarProxyUpgradeDataRequestProtoMsg;
};
export declare const QueryAxelarProxyUpgradeDataResponse: {
    typeUrl: string;
    encode(message: QueryAxelarProxyUpgradeDataResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAxelarProxyUpgradeDataResponse;
    fromPartial(object: Partial<QueryAxelarProxyUpgradeDataResponse>): QueryAxelarProxyUpgradeDataResponse;
    fromAmino(object: QueryAxelarProxyUpgradeDataResponseAmino): QueryAxelarProxyUpgradeDataResponse;
    toAmino(message: QueryAxelarProxyUpgradeDataResponse): QueryAxelarProxyUpgradeDataResponseAmino;
    fromAminoMsg(object: QueryAxelarProxyUpgradeDataResponseAminoMsg): QueryAxelarProxyUpgradeDataResponse;
    fromProtoMsg(message: QueryAxelarProxyUpgradeDataResponseProtoMsg): QueryAxelarProxyUpgradeDataResponse;
    toProto(message: QueryAxelarProxyUpgradeDataResponse): Uint8Array;
    toProtoMsg(message: QueryAxelarProxyUpgradeDataResponse): QueryAxelarProxyUpgradeDataResponseProtoMsg;
};
export declare const QueryWinningAxelarCorkRequest: {
    typeUrl: string;
    encode(message: QueryWinningAxelarCorkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWinningAxelarCorkRequest;
    fromPartial(object: Partial<QueryWinningAxelarCorkRequest>): QueryWinningAxelarCorkRequest;
    fromAmino(object: QueryWinningAxelarCorkRequestAmino): QueryWinningAxelarCorkRequest;
    toAmino(message: QueryWinningAxelarCorkRequest): QueryWinningAxelarCorkRequestAmino;
    fromAminoMsg(object: QueryWinningAxelarCorkRequestAminoMsg): QueryWinningAxelarCorkRequest;
    fromProtoMsg(message: QueryWinningAxelarCorkRequestProtoMsg): QueryWinningAxelarCorkRequest;
    toProto(message: QueryWinningAxelarCorkRequest): Uint8Array;
    toProtoMsg(message: QueryWinningAxelarCorkRequest): QueryWinningAxelarCorkRequestProtoMsg;
};
export declare const QueryWinningAxelarCorkResponse: {
    typeUrl: string;
    encode(message: QueryWinningAxelarCorkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWinningAxelarCorkResponse;
    fromPartial(object: Partial<QueryWinningAxelarCorkResponse>): QueryWinningAxelarCorkResponse;
    fromAmino(object: QueryWinningAxelarCorkResponseAmino): QueryWinningAxelarCorkResponse;
    toAmino(message: QueryWinningAxelarCorkResponse): QueryWinningAxelarCorkResponseAmino;
    fromAminoMsg(object: QueryWinningAxelarCorkResponseAminoMsg): QueryWinningAxelarCorkResponse;
    fromProtoMsg(message: QueryWinningAxelarCorkResponseProtoMsg): QueryWinningAxelarCorkResponse;
    toProto(message: QueryWinningAxelarCorkResponse): Uint8Array;
    toProtoMsg(message: QueryWinningAxelarCorkResponse): QueryWinningAxelarCorkResponseProtoMsg;
};
export declare const QueryWinningAxelarCorksRequest: {
    typeUrl: string;
    encode(message: QueryWinningAxelarCorksRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWinningAxelarCorksRequest;
    fromPartial(object: Partial<QueryWinningAxelarCorksRequest>): QueryWinningAxelarCorksRequest;
    fromAmino(object: QueryWinningAxelarCorksRequestAmino): QueryWinningAxelarCorksRequest;
    toAmino(message: QueryWinningAxelarCorksRequest): QueryWinningAxelarCorksRequestAmino;
    fromAminoMsg(object: QueryWinningAxelarCorksRequestAminoMsg): QueryWinningAxelarCorksRequest;
    fromProtoMsg(message: QueryWinningAxelarCorksRequestProtoMsg): QueryWinningAxelarCorksRequest;
    toProto(message: QueryWinningAxelarCorksRequest): Uint8Array;
    toProtoMsg(message: QueryWinningAxelarCorksRequest): QueryWinningAxelarCorksRequestProtoMsg;
};
export declare const QueryWinningAxelarCorksResponse: {
    typeUrl: string;
    encode(message: QueryWinningAxelarCorksResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWinningAxelarCorksResponse;
    fromPartial(object: Partial<QueryWinningAxelarCorksResponse>): QueryWinningAxelarCorksResponse;
    fromAmino(object: QueryWinningAxelarCorksResponseAmino): QueryWinningAxelarCorksResponse;
    toAmino(message: QueryWinningAxelarCorksResponse): QueryWinningAxelarCorksResponseAmino;
    fromAminoMsg(object: QueryWinningAxelarCorksResponseAminoMsg): QueryWinningAxelarCorksResponse;
    fromProtoMsg(message: QueryWinningAxelarCorksResponseProtoMsg): QueryWinningAxelarCorksResponse;
    toProto(message: QueryWinningAxelarCorksResponse): Uint8Array;
    toProtoMsg(message: QueryWinningAxelarCorksResponse): QueryWinningAxelarCorksResponseProtoMsg;
};
