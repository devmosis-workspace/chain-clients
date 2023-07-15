import { Params, ParamsSDKType } from "./genesis";
import { Valset, ValsetSDKType, PendingIbcAutoForward, PendingIbcAutoForwardSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallSDKType } from "./msgs";
import { BatchFees, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationSDKType } from "./attestation";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params?: Params;
}
export interface QueryParamsResponseSDKType {
    params?: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetRequestSDKType {
}
export interface QueryCurrentValsetResponse {
    valset?: Valset;
}
export interface QueryCurrentValsetResponseSDKType {
    valset?: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
    nonce: Long;
}
export interface QueryValsetRequestRequestSDKType {
    nonce: Long;
}
export interface QueryValsetRequestResponse {
    valset?: Valset;
}
export interface QueryValsetRequestResponseSDKType {
    valset?: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
    nonce: Long;
    address: string;
}
export interface QueryValsetConfirmRequestSDKType {
    nonce: Long;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm?: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseSDKType {
    confirm?: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
    nonce: Long;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
    confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsRequestSDKType {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeRequestSDKType {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseSDKType {
    batch_fees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch[];
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
    batch: OutgoingTxBatchSDKType[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
    call: OutgoingLogicCall[];
}
export interface QueryLastPendingLogicCallByAddrResponseSDKType {
    call: OutgoingLogicCallSDKType[];
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesRequestSDKType {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseSDKType {
    batches: OutgoingTxBatchSDKType[];
}
export interface QueryOutgoingLogicCallsRequest {
}
export interface QueryOutgoingLogicCallsRequestSDKType {
}
export interface QueryOutgoingLogicCallsResponse {
    calls: OutgoingLogicCall[];
}
export interface QueryOutgoingLogicCallsResponseSDKType {
    calls: OutgoingLogicCallSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestSDKType {
    nonce: Long;
    contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch?: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseSDKType {
    batch?: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
    nonce: Long;
    contractAddress: string;
}
export interface QueryBatchConfirmsRequestSDKType {
    nonce: Long;
    contract_address: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseSDKType {
    confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLogicConfirmsRequest {
    invalidationId: Uint8Array;
    invalidationNonce: Long;
}
export interface QueryLogicConfirmsRequestSDKType {
    invalidation_id: Uint8Array;
    invalidation_nonce: Long;
}
export interface QueryLogicConfirmsResponse {
    confirms: MsgConfirmLogicCall[];
}
export interface QueryLogicConfirmsResponseSDKType {
    confirms: MsgConfirmLogicCallSDKType[];
}
export interface QueryLastEventNonceByAddrRequest {
    address: string;
}
export interface QueryLastEventNonceByAddrRequestSDKType {
    address: string;
}
export interface QueryLastEventNonceByAddrResponse {
    eventNonce: Long;
}
export interface QueryLastEventNonceByAddrResponseSDKType {
    event_nonce: Long;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomRequestSDKType {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseSDKType {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20RequestSDKType {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseSDKType {
    erc20: string;
    cosmos_originated: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequestSDKType {
    use_v1_key: boolean;
}
export interface QueryLastObservedEthBlockResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    block: Long;
}
export interface QueryLastObservedEthBlockResponseSDKType {
    block: Long;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequest {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequestSDKType {
    use_v1_key: boolean;
}
export interface QueryLastObservedEthNonceResponse {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    nonce: Long;
}
export interface QueryLastObservedEthNonceResponseSDKType {
    nonce: Long;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
    /** limit defines how many attestations to limit in the response. */
    limit: Long;
    /**
     * order_by provides ordering of atteststions by nonce in the response. Either
     * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
     * 'asc'.
     */
    orderBy: string;
    /** claim_type allows filtering attestations by Ethereum claim type. */
    claimType: string;
    /** nonce allows filtering attestations by Ethereum claim nonce. */
    nonce: Long;
    /** height allows filtering attestations by Ethereum claim height. */
    height: Long;
    /**
     * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequestSDKType {
    limit: Long;
    order_by: string;
    claim_type: string;
    nonce: Long;
    height: Long;
    use_v1_key: boolean;
}
export interface QueryAttestationsResponse {
    attestations: Attestation[];
}
export interface QueryAttestationsResponseSDKType {
    attestations: AttestationSDKType[];
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressSDKType {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
    validator_address: string;
    eth_address: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthSDKType {
    sender_address: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseSDKType {
    transfers_in_batches: OutgoingTransferTxSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
export interface QueryPendingIbcAutoForwards {
    /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
    limit: Long;
}
export interface QueryPendingIbcAutoForwardsSDKType {
    limit: Long;
}
export interface QueryPendingIbcAutoForwardsResponse {
    pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export interface QueryPendingIbcAutoForwardsResponseSDKType {
    pending_ibc_auto_forwards: PendingIbcAutoForwardSDKType[];
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryCurrentValsetRequest: {
    encode(_: QueryCurrentValsetRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCurrentValsetRequest;
    fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
};
export declare const QueryCurrentValsetResponse: {
    encode(message: QueryCurrentValsetResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCurrentValsetResponse;
    fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
};
export declare const QueryValsetRequestRequest: {
    encode(message: QueryValsetRequestRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetRequestRequest;
    fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
};
export declare const QueryValsetRequestResponse: {
    encode(message: QueryValsetRequestResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetRequestResponse;
    fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
};
export declare const QueryValsetConfirmRequest: {
    encode(message: QueryValsetConfirmRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetConfirmRequest;
    fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
};
export declare const QueryValsetConfirmResponse: {
    encode(message: QueryValsetConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetConfirmResponse;
    fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
};
export declare const QueryLastValsetRequestsRequest: {
    encode(_: QueryLastValsetRequestsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
};
export declare const QueryLastValsetRequestsResponse: {
    encode(message: QueryLastValsetRequestsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
};
export declare const QueryBatchFeeRequest: {
    encode(_: QueryBatchFeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBatchFeeRequest;
    fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
};
export declare const QueryBatchFeeResponse: {
    encode(message: QueryBatchFeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBatchFeeResponse;
    fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
};
export declare const QueryOutgoingTxBatchesRequest: {
    encode(_: QueryOutgoingTxBatchesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
};
export declare const QueryOutgoingTxBatchesResponse: {
    encode(message: QueryOutgoingTxBatchesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
};
export declare const QueryOutgoingLogicCallsRequest: {
    encode(_: QueryOutgoingLogicCallsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryOutgoingLogicCallsRequest;
    fromPartial(_: Partial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
};
export declare const QueryOutgoingLogicCallsResponse: {
    encode(message: QueryOutgoingLogicCallsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryOutgoingLogicCallsResponse;
    fromPartial(object: Partial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
};
export declare const QueryBatchRequestByNonceRequest: {
    encode(message: QueryBatchRequestByNonceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
};
export declare const QueryBatchRequestByNonceResponse: {
    encode(message: QueryBatchRequestByNonceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
};
export declare const QueryBatchConfirmsRequest: {
    encode(message: QueryBatchConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
};
export declare const QueryBatchConfirmsResponse: {
    encode(message: QueryBatchConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
};
export declare const QueryLogicConfirmsRequest: {
    encode(message: QueryLogicConfirmsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLogicConfirmsRequest;
    fromPartial(object: Partial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
};
export declare const QueryLogicConfirmsResponse: {
    encode(message: QueryLogicConfirmsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLogicConfirmsResponse;
    fromPartial(object: Partial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
};
export declare const QueryLastEventNonceByAddrRequest: {
    encode(message: QueryLastEventNonceByAddrRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastEventNonceByAddrRequest;
    fromPartial(object: Partial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
};
export declare const QueryLastEventNonceByAddrResponse: {
    encode(message: QueryLastEventNonceByAddrResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastEventNonceByAddrResponse;
    fromPartial(object: Partial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
};
export declare const QueryERC20ToDenomRequest: {
    encode(message: QueryERC20ToDenomRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryERC20ToDenomRequest;
    fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
};
export declare const QueryERC20ToDenomResponse: {
    encode(message: QueryERC20ToDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryERC20ToDenomResponse;
    fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
};
export declare const QueryDenomToERC20Request: {
    encode(message: QueryDenomToERC20Request, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomToERC20Request;
    fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
};
export declare const QueryDenomToERC20Response: {
    encode(message: QueryDenomToERC20Response, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDenomToERC20Response;
    fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
};
export declare const QueryLastObservedEthBlockRequest: {
    encode(message: QueryLastObservedEthBlockRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastObservedEthBlockRequest;
    fromPartial(object: Partial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest;
};
export declare const QueryLastObservedEthBlockResponse: {
    encode(message: QueryLastObservedEthBlockResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastObservedEthBlockResponse;
    fromPartial(object: Partial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse;
};
export declare const QueryLastObservedEthNonceRequest: {
    encode(message: QueryLastObservedEthNonceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastObservedEthNonceRequest;
    fromPartial(object: Partial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest;
};
export declare const QueryLastObservedEthNonceResponse: {
    encode(message: QueryLastObservedEthNonceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryLastObservedEthNonceResponse;
    fromPartial(object: Partial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse;
};
export declare const QueryAttestationsRequest: {
    encode(message: QueryAttestationsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAttestationsRequest;
    fromPartial(object: Partial<QueryAttestationsRequest>): QueryAttestationsRequest;
};
export declare const QueryAttestationsResponse: {
    encode(message: QueryAttestationsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryAttestationsResponse;
    fromPartial(object: Partial<QueryAttestationsResponse>): QueryAttestationsResponse;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
};
export declare const QueryDelegateKeysByEthAddress: {
    encode(message: QueryDelegateKeysByEthAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
};
export declare const QueryPendingSendToEth: {
    encode(message: QueryPendingSendToEth, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingSendToEth;
    fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth;
};
export declare const QueryPendingSendToEthResponse: {
    encode(message: QueryPendingSendToEthResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
};
export declare const QueryPendingIbcAutoForwards: {
    encode(message: QueryPendingIbcAutoForwards, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingIbcAutoForwards;
    fromPartial(object: Partial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards;
};
export declare const QueryPendingIbcAutoForwardsResponse: {
    encode(message: QueryPendingIbcAutoForwardsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryPendingIbcAutoForwardsResponse;
    fromPartial(object: Partial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse;
};
