import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCurrentValsetRequest, QueryCurrentValsetResponseSDKType, QueryValsetRequestRequest, QueryValsetRequestResponseSDKType, QueryValsetConfirmRequest, QueryValsetConfirmResponseSDKType, QueryValsetConfirmsByNonceRequest, QueryValsetConfirmsByNonceResponseSDKType, QueryLastValsetRequestsRequest, QueryLastValsetRequestsResponseSDKType, QueryLastPendingValsetRequestByAddrRequest, QueryLastPendingValsetRequestByAddrResponseSDKType, QueryLastPendingBatchRequestByAddrRequest, QueryLastPendingBatchRequestByAddrResponseSDKType, QueryLastPendingLogicCallByAddrRequest, QueryLastPendingLogicCallByAddrResponseSDKType, QueryLastEventNonceByAddrRequest, QueryLastEventNonceByAddrResponseSDKType, QueryBatchFeeRequest, QueryBatchFeeResponseSDKType, QueryOutgoingTxBatchesRequest, QueryOutgoingTxBatchesResponseSDKType, QueryOutgoingLogicCallsRequest, QueryOutgoingLogicCallsResponseSDKType, QueryBatchRequestByNonceRequest, QueryBatchRequestByNonceResponseSDKType, QueryBatchConfirmsRequest, QueryBatchConfirmsResponseSDKType, QueryLogicConfirmsRequest, QueryLogicConfirmsResponseSDKType, QueryERC20ToDenomRequest, QueryERC20ToDenomResponseSDKType, QueryDenomToERC20Request, QueryDenomToERC20ResponseSDKType, QueryLastObservedEthBlockRequest, QueryLastObservedEthBlockResponseSDKType, QueryLastObservedEthNonceRequest, QueryLastObservedEthNonceResponseSDKType, QueryAttestationsRequest, QueryAttestationsResponseSDKType, QueryDelegateKeysByValidatorAddress, QueryDelegateKeysByValidatorAddressResponseSDKType, QueryDelegateKeysByEthAddress, QueryDelegateKeysByEthAddressResponseSDKType, QueryDelegateKeysByOrchestratorAddress, QueryDelegateKeysByOrchestratorAddressResponseSDKType, QueryPendingSendToEth, QueryPendingSendToEthResponseSDKType, QueryPendingIbcAutoForwards, QueryPendingIbcAutoForwardsResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    currentValset(_params?: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponseSDKType>;
    valsetRequest(params: QueryValsetRequestRequest): Promise<QueryValsetRequestResponseSDKType>;
    valsetConfirm(params: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponseSDKType>;
    valsetConfirmsByNonce(params: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponseSDKType>;
    lastValsetRequests(_params?: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponseSDKType>;
    lastPendingValsetRequestByAddr(params: QueryLastPendingValsetRequestByAddrRequest): Promise<QueryLastPendingValsetRequestByAddrResponseSDKType>;
    lastPendingBatchRequestByAddr(params: QueryLastPendingBatchRequestByAddrRequest): Promise<QueryLastPendingBatchRequestByAddrResponseSDKType>;
    lastPendingLogicCallByAddr(params: QueryLastPendingLogicCallByAddrRequest): Promise<QueryLastPendingLogicCallByAddrResponseSDKType>;
    lastEventNonceByAddr(params: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponseSDKType>;
    batchFees(_params?: QueryBatchFeeRequest): Promise<QueryBatchFeeResponseSDKType>;
    outgoingTxBatches(_params?: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponseSDKType>;
    outgoingLogicCalls(_params?: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponseSDKType>;
    batchRequestByNonce(params: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponseSDKType>;
    batchConfirms(params: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponseSDKType>;
    logicConfirms(params: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponseSDKType>;
    eRC20ToDenom(params: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponseSDKType>;
    denomToERC20(params: QueryDenomToERC20Request): Promise<QueryDenomToERC20ResponseSDKType>;
    getLastObservedEthBlock(params: QueryLastObservedEthBlockRequest): Promise<QueryLastObservedEthBlockResponseSDKType>;
    getLastObservedEthNonce(params: QueryLastObservedEthNonceRequest): Promise<QueryLastObservedEthNonceResponseSDKType>;
    getAttestations(params: QueryAttestationsRequest): Promise<QueryAttestationsResponseSDKType>;
    getDelegateKeyByValidator(params: QueryDelegateKeysByValidatorAddress): Promise<QueryDelegateKeysByValidatorAddressResponseSDKType>;
    getDelegateKeyByEth(params: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponseSDKType>;
    getDelegateKeyByOrchestrator(params: QueryDelegateKeysByOrchestratorAddress): Promise<QueryDelegateKeysByOrchestratorAddressResponseSDKType>;
    getPendingSendToEth(params: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponseSDKType>;
    getPendingIbcAutoForwards(params: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponseSDKType>;
}
