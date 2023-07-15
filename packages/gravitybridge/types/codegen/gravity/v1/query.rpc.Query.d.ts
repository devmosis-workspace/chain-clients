import { Rpc } from "../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryCurrentValsetRequest, QueryCurrentValsetResponse, QueryValsetRequestRequest, QueryValsetRequestResponse, QueryValsetConfirmRequest, QueryValsetConfirmResponse, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponse, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponse, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponse, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponse, QueryLastPendingLogicCallByAddrRequest, QueryLastPendingLogicCallByAddrResponse, QueryLastEventNonceByAddrRequest, QueryLastEventNonceByAddrResponse, QueryBatchFeeRequest, QueryBatchFeeResponse, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponse, QueryOutgoingLogicCallsRequest, QueryOutgoingLogicCallsResponse, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponse, QueryBatchConfirmsRequest, QueryBatchConfirmsResponse, QueryLogicConfirmsRequest, QueryLogicConfirmsResponse, QueryERC20ToDenomRequest, QueryERC20ToDenomResponse, QueryDenomToERC20Request, QueryDenomToERC20Response, QueryLastObservedEthBlockRequest, QueryLastObservedEthBlockResponse, QueryLastObservedEthNonceRequest, QueryLastObservedEthNonceResponse, QueryAttestationsRequest, QueryAttestationsResponse, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponse, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponse, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponse, QueryPendingSendToEth, QueryPendingSendToEthResponse, QueryPendingIbcAutoForwards, QueryPendingIbcAutoForwardsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
    /** Deployments queries deployments */
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    lastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    lastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    outgoingLogicCalls(request?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    logicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
    getLastObservedEthBlock(request: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponse>;
    getLastObservedEthNonce(request: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponse>;
    getAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    getPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    lastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    lastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    outgoingLogicCalls(request?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    logicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
    getLastObservedEthBlock(request: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponse>;
    getLastObservedEthNonce(request: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponse>;
    getAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    getPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    currentValset(request?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
    valsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
    valsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
    valsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
    lastValsetRequests(request?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
    lastPendingValsetRequestByAddr(request: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponse>;
    lastPendingBatchRequestByAddr(request: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponse>;
    lastPendingLogicCallByAddr(request: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponse>;
    lastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
    batchFees(request?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
    outgoingTxBatches(request?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
    outgoingLogicCalls(request?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
    batchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
    batchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
    logicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
    eRC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
    denomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
    getLastObservedEthBlock(request: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponse>;
    getLastObservedEthNonce(request: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponse>;
    getAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
    getDelegateKeyByValidator(request: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponse>;
    getDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
    getDelegateKeyByOrchestrator(request: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
    getPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
    getPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
};