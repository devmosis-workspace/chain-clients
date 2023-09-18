import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Valset, ValsetAmino, ValsetSDKType, PendingIbcAutoForward, PendingIbcAutoForwardAmino, PendingIbcAutoForwardSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType, MsgConfirmLogicCall, MsgConfirmLogicCallAmino, MsgConfirmLogicCallSDKType } from "./msgs";
import { BatchFees, BatchFeesAmino, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingLogicCall, OutgoingLogicCallAmino, OutgoingLogicCallSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { Attestation, AttestationAmino, AttestationSDKType } from "./attestation";
import { BinaryWriter } from "../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/gravity.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/gravity.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryCurrentValsetRequest";
    value: Uint8Array;
}
export interface QueryCurrentValsetRequestAmino {
}
export interface QueryCurrentValsetRequestAminoMsg {
    type: "/gravity.v1.QueryCurrentValsetRequest";
    value: QueryCurrentValsetRequestAmino;
}
export interface QueryCurrentValsetRequestSDKType {
}
export interface QueryCurrentValsetResponse {
    valset: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryCurrentValsetResponse";
    value: Uint8Array;
}
export interface QueryCurrentValsetResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
    type: "/gravity.v1.QueryCurrentValsetResponse";
    value: QueryCurrentValsetResponseAmino;
}
export interface QueryCurrentValsetResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
    nonce: bigint;
}
export interface QueryValsetRequestRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetRequestRequest";
    value: Uint8Array;
}
export interface QueryValsetRequestRequestAmino {
    nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
    type: "/gravity.v1.QueryValsetRequestRequest";
    value: QueryValsetRequestRequestAmino;
}
export interface QueryValsetRequestRequestSDKType {
    nonce: bigint;
}
export interface QueryValsetRequestResponse {
    valset: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetRequestResponse";
    value: Uint8Array;
}
export interface QueryValsetRequestResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
    type: "/gravity.v1.QueryValsetRequestResponse";
    value: QueryValsetRequestResponseAmino;
}
export interface QueryValsetRequestResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetConfirmRequest {
    nonce: bigint;
    address: string;
}
export interface QueryValsetConfirmRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmRequestAmino {
    nonce: string;
    address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmRequest";
    value: QueryValsetConfirmRequestAmino;
}
export interface QueryValsetConfirmRequestSDKType {
    nonce: bigint;
    address: string;
}
export interface QueryValsetConfirmResponse {
    confirm: MsgValsetConfirm;
}
export interface QueryValsetConfirmResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmResponseAmino {
    confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmResponse";
    value: QueryValsetConfirmResponseAmino;
}
export interface QueryValsetConfirmResponseSDKType {
    confirm: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: bigint;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceRequestAmino {
    nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmsByNonceRequest";
    value: QueryValsetConfirmsByNonceRequestAmino;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
    nonce: bigint;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceResponseAmino {
    confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
    type: "/gravity.v1.QueryValsetConfirmsByNonceResponse";
    value: QueryValsetConfirmsByNonceResponseAmino;
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
    confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastValsetRequestsRequest";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsRequestAmino {
}
export interface QueryLastValsetRequestsRequestAminoMsg {
    type: "/gravity.v1.QueryLastValsetRequestsRequest";
    value: QueryLastValsetRequestsRequestAmino;
}
export interface QueryLastValsetRequestsRequestSDKType {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastValsetRequestsResponse";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
    type: "/gravity.v1.QueryLastValsetRequestsResponse";
    value: QueryLastValsetRequestsResponseAmino;
}
export interface QueryLastValsetRequestsResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchFeeRequest";
    value: Uint8Array;
}
export interface QueryBatchFeeRequestAmino {
}
export interface QueryBatchFeeRequestAminoMsg {
    type: "/gravity.v1.QueryBatchFeeRequest";
    value: QueryBatchFeeRequestAmino;
}
export interface QueryBatchFeeRequestSDKType {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchFeeResponse";
    value: Uint8Array;
}
export interface QueryBatchFeeResponseAmino {
    batch_fees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
    type: "/gravity.v1.QueryBatchFeeResponse";
    value: QueryBatchFeeResponseAmino;
}
export interface QueryBatchFeeResponseSDKType {
    batch_fees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch[];
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
    batch: OutgoingTxBatchAmino[];
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
    batch: OutgoingTxBatchSDKType[];
}
export interface QueryLastPendingLogicCallByAddrRequest {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastPendingLogicCallByAddrRequest";
    value: QueryLastPendingLogicCallByAddrRequestAmino;
}
export interface QueryLastPendingLogicCallByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingLogicCallByAddrResponse {
    call: OutgoingLogicCall[];
}
export interface QueryLastPendingLogicCallByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingLogicCallByAddrResponseAmino {
    call: OutgoingLogicCallAmino[];
}
export interface QueryLastPendingLogicCallByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastPendingLogicCallByAddrResponse";
    value: QueryLastPendingLogicCallByAddrResponseAmino;
}
export interface QueryLastPendingLogicCallByAddrResponseSDKType {
    call: OutgoingLogicCallSDKType[];
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingTxBatchesRequest";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesRequestAmino {
}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
    type: "/gravity.v1.QueryOutgoingTxBatchesRequest";
    value: QueryOutgoingTxBatchesRequestAmino;
}
export interface QueryOutgoingTxBatchesRequestSDKType {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingTxBatchesResponse";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesResponseAmino {
    batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
    type: "/gravity.v1.QueryOutgoingTxBatchesResponse";
    value: QueryOutgoingTxBatchesResponseAmino;
}
export interface QueryOutgoingTxBatchesResponseSDKType {
    batches: OutgoingTxBatchSDKType[];
}
export interface QueryOutgoingLogicCallsRequest {
}
export interface QueryOutgoingLogicCallsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingLogicCallsRequest";
    value: Uint8Array;
}
export interface QueryOutgoingLogicCallsRequestAmino {
}
export interface QueryOutgoingLogicCallsRequestAminoMsg {
    type: "/gravity.v1.QueryOutgoingLogicCallsRequest";
    value: QueryOutgoingLogicCallsRequestAmino;
}
export interface QueryOutgoingLogicCallsRequestSDKType {
}
export interface QueryOutgoingLogicCallsResponse {
    calls: OutgoingLogicCall[];
}
export interface QueryOutgoingLogicCallsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryOutgoingLogicCallsResponse";
    value: Uint8Array;
}
export interface QueryOutgoingLogicCallsResponseAmino {
    calls: OutgoingLogicCallAmino[];
}
export interface QueryOutgoingLogicCallsResponseAminoMsg {
    type: "/gravity.v1.QueryOutgoingLogicCallsResponse";
    value: QueryOutgoingLogicCallsResponseAmino;
}
export interface QueryOutgoingLogicCallsResponseSDKType {
    calls: OutgoingLogicCallSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: bigint;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchRequestByNonceRequest";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
    type: "/gravity.v1.QueryBatchRequestByNonceRequest";
    value: QueryBatchRequestByNonceRequestAmino;
}
export interface QueryBatchRequestByNonceRequestSDKType {
    nonce: bigint;
    contract_address: string;
}
export interface QueryBatchRequestByNonceResponse {
    batch: OutgoingTxBatch;
}
export interface QueryBatchRequestByNonceResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchRequestByNonceResponse";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceResponseAmino {
    batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
    type: "/gravity.v1.QueryBatchRequestByNonceResponse";
    value: QueryBatchRequestByNonceResponseAmino;
}
export interface QueryBatchRequestByNonceResponseSDKType {
    batch: OutgoingTxBatchSDKType;
}
export interface QueryBatchConfirmsRequest {
    nonce: bigint;
    contractAddress: string;
}
export interface QueryBatchConfirmsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchConfirmsRequest";
    value: Uint8Array;
}
export interface QueryBatchConfirmsRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
    type: "/gravity.v1.QueryBatchConfirmsRequest";
    value: QueryBatchConfirmsRequestAmino;
}
export interface QueryBatchConfirmsRequestSDKType {
    nonce: bigint;
    contract_address: string;
}
export interface QueryBatchConfirmsResponse {
    confirms: MsgConfirmBatch[];
}
export interface QueryBatchConfirmsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryBatchConfirmsResponse";
    value: Uint8Array;
}
export interface QueryBatchConfirmsResponseAmino {
    confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
    type: "/gravity.v1.QueryBatchConfirmsResponse";
    value: QueryBatchConfirmsResponseAmino;
}
export interface QueryBatchConfirmsResponseSDKType {
    confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLogicConfirmsRequest {
    invalidationId: Uint8Array;
    invalidationNonce: bigint;
}
export interface QueryLogicConfirmsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLogicConfirmsRequest";
    value: Uint8Array;
}
export interface QueryLogicConfirmsRequestAmino {
    invalidation_id: Uint8Array;
    invalidation_nonce: string;
}
export interface QueryLogicConfirmsRequestAminoMsg {
    type: "/gravity.v1.QueryLogicConfirmsRequest";
    value: QueryLogicConfirmsRequestAmino;
}
export interface QueryLogicConfirmsRequestSDKType {
    invalidation_id: Uint8Array;
    invalidation_nonce: bigint;
}
export interface QueryLogicConfirmsResponse {
    confirms: MsgConfirmLogicCall[];
}
export interface QueryLogicConfirmsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLogicConfirmsResponse";
    value: Uint8Array;
}
export interface QueryLogicConfirmsResponseAmino {
    confirms: MsgConfirmLogicCallAmino[];
}
export interface QueryLogicConfirmsResponseAminoMsg {
    type: "/gravity.v1.QueryLogicConfirmsResponse";
    value: QueryLogicConfirmsResponseAmino;
}
export interface QueryLogicConfirmsResponseSDKType {
    confirms: MsgConfirmLogicCallSDKType[];
}
export interface QueryLastEventNonceByAddrRequest {
    address: string;
}
export interface QueryLastEventNonceByAddrRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastEventNonceByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastEventNonceByAddrRequestAmino {
    address: string;
}
export interface QueryLastEventNonceByAddrRequestAminoMsg {
    type: "/gravity.v1.QueryLastEventNonceByAddrRequest";
    value: QueryLastEventNonceByAddrRequestAmino;
}
export interface QueryLastEventNonceByAddrRequestSDKType {
    address: string;
}
export interface QueryLastEventNonceByAddrResponse {
    eventNonce: bigint;
}
export interface QueryLastEventNonceByAddrResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastEventNonceByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastEventNonceByAddrResponseAmino {
    event_nonce: string;
}
export interface QueryLastEventNonceByAddrResponseAminoMsg {
    type: "/gravity.v1.QueryLastEventNonceByAddrResponse";
    value: QueryLastEventNonceByAddrResponseAmino;
}
export interface QueryLastEventNonceByAddrResponseSDKType {
    event_nonce: bigint;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryERC20ToDenomRequest";
    value: Uint8Array;
}
export interface QueryERC20ToDenomRequestAmino {
    erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
    type: "/gravity.v1.QueryERC20ToDenomRequest";
    value: QueryERC20ToDenomRequestAmino;
}
export interface QueryERC20ToDenomRequestSDKType {
    erc20: string;
}
export interface QueryERC20ToDenomResponse {
    denom: string;
    cosmosOriginated: boolean;
}
export interface QueryERC20ToDenomResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryERC20ToDenomResponse";
    value: Uint8Array;
}
export interface QueryERC20ToDenomResponseAmino {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
    type: "/gravity.v1.QueryERC20ToDenomResponse";
    value: QueryERC20ToDenomResponseAmino;
}
export interface QueryERC20ToDenomResponseSDKType {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20Request {
    denom: string;
}
export interface QueryDenomToERC20RequestProtoMsg {
    typeUrl: "/gravity.v1.QueryDenomToERC20Request";
    value: Uint8Array;
}
export interface QueryDenomToERC20RequestAmino {
    denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
    type: "/gravity.v1.QueryDenomToERC20Request";
    value: QueryDenomToERC20RequestAmino;
}
export interface QueryDenomToERC20RequestSDKType {
    denom: string;
}
export interface QueryDenomToERC20Response {
    erc20: string;
    cosmosOriginated: boolean;
}
export interface QueryDenomToERC20ResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDenomToERC20Response";
    value: Uint8Array;
}
export interface QueryDenomToERC20ResponseAmino {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
    type: "/gravity.v1.QueryDenomToERC20Response";
    value: QueryDenomToERC20ResponseAmino;
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
export interface QueryLastObservedEthBlockRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastObservedEthBlockRequest";
    value: Uint8Array;
}
/**
 * QueryLastObservedEthBlockRequest defines the request for getting the height of the
 * last applied Ethereum Event on the bridge. This is expected to lag the actual
 * Ethereum block height significantly due to 1. Ethereum Finality and
 *  2. Consensus mirroring the state on Ethereum
 */
export interface QueryLastObservedEthBlockRequestAmino {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEthereumBlockHeightKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    use_v1_key: boolean;
}
export interface QueryLastObservedEthBlockRequestAminoMsg {
    type: "/gravity.v1.QueryLastObservedEthBlockRequest";
    value: QueryLastObservedEthBlockRequestAmino;
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
    block: bigint;
}
export interface QueryLastObservedEthBlockResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastObservedEthBlockResponse";
    value: Uint8Array;
}
export interface QueryLastObservedEthBlockResponseAmino {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    block: string;
}
export interface QueryLastObservedEthBlockResponseAminoMsg {
    type: "/gravity.v1.QueryLastObservedEthBlockResponse";
    value: QueryLastObservedEthBlockResponseAmino;
}
export interface QueryLastObservedEthBlockResponseSDKType {
    block: bigint;
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
export interface QueryLastObservedEthNonceRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryLastObservedEthNonceRequest";
    value: Uint8Array;
}
/**
 * QueryLastObservedEthNonceRequest defines the request for getting the event nonce
 * of the last applied Ethereum Event on the bridge.
 * Note that this is likely to lag the last executed event a little
 * due to 1. Ethereum Finality and 2. Consensus mirroring the Ethereum state
 */
export interface QueryLastObservedEthNonceRequestAmino {
    /**
     * indicates whether to search for store data using the old Gravity v1 key "LastObservedEventNonceKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    use_v1_key: boolean;
}
export interface QueryLastObservedEthNonceRequestAminoMsg {
    type: "/gravity.v1.QueryLastObservedEthNonceRequest";
    value: QueryLastObservedEthNonceRequestAmino;
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
    nonce: bigint;
}
export interface QueryLastObservedEthNonceResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryLastObservedEthNonceResponse";
    value: Uint8Array;
}
export interface QueryLastObservedEthNonceResponseAmino {
    /**
     * a response of 0 indicates that no Ethereum events have been observed, and thus
     * the bridge is inactive
     */
    nonce: string;
}
export interface QueryLastObservedEthNonceResponseAminoMsg {
    type: "/gravity.v1.QueryLastObservedEthNonceResponse";
    value: QueryLastObservedEthNonceResponseAmino;
}
export interface QueryLastObservedEthNonceResponseSDKType {
    nonce: bigint;
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
    limit: bigint;
    /**
     * order_by provides ordering of atteststions by nonce in the response. Either
     * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
     * 'asc'.
     */
    orderBy: string;
    /** claim_type allows filtering attestations by Ethereum claim type. */
    claimType: string;
    /** nonce allows filtering attestations by Ethereum claim nonce. */
    nonce: bigint;
    /** height allows filtering attestations by Ethereum claim height. */
    height: bigint;
    /**
     * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    useV1Key: boolean;
}
export interface QueryAttestationsRequestProtoMsg {
    typeUrl: "/gravity.v1.QueryAttestationsRequest";
    value: Uint8Array;
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
export interface QueryAttestationsRequestAmino {
    /** limit defines how many attestations to limit in the response. */
    limit: string;
    /**
     * order_by provides ordering of atteststions by nonce in the response. Either
     * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
     * 'asc'.
     */
    order_by: string;
    /** claim_type allows filtering attestations by Ethereum claim type. */
    claim_type: string;
    /** nonce allows filtering attestations by Ethereum claim nonce. */
    nonce: string;
    /** height allows filtering attestations by Ethereum claim height. */
    height: string;
    /**
     * indicates whether to search for store data using the old Gravity v1 key "OracleAttestationKey"
     * Note that queries before the Mercury upgrade at height 1282013 must set this to true
     */
    use_v1_key: boolean;
}
export interface QueryAttestationsRequestAminoMsg {
    type: "/gravity.v1.QueryAttestationsRequest";
    value: QueryAttestationsRequestAmino;
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
    limit: bigint;
    order_by: string;
    claim_type: string;
    nonce: bigint;
    height: bigint;
    use_v1_key: boolean;
}
export interface QueryAttestationsResponse {
    attestations: Attestation[];
}
export interface QueryAttestationsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryAttestationsResponse";
    value: Uint8Array;
}
export interface QueryAttestationsResponseAmino {
    attestations: AttestationAmino[];
}
export interface QueryAttestationsResponseAminoMsg {
    type: "/gravity.v1.QueryAttestationsResponse";
    value: QueryAttestationsResponseAmino;
}
export interface QueryAttestationsResponseSDKType {
    attestations: AttestationSDKType[];
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressAmino {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByValidatorAddress";
    value: QueryDelegateKeysByValidatorAddressAmino;
}
export interface QueryDelegateKeysByValidatorAddressSDKType {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponse {
    ethAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByValidatorAddressResponse";
    value: QueryDelegateKeysByValidatorAddressResponseAmino;
}
export interface QueryDelegateKeysByValidatorAddressResponseSDKType {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddress {
    ethAddress: string;
}
export interface QueryDelegateKeysByEthAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressAmino {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByEthAddress";
    value: QueryDelegateKeysByEthAddressAmino;
}
export interface QueryDelegateKeysByEthAddressSDKType {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressResponse {
    validatorAddress: string;
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByEthAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressResponseAmino {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByEthAddressResponse";
    value: QueryDelegateKeysByEthAddressResponseAmino;
}
export interface QueryDelegateKeysByEthAddressResponseSDKType {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddress {
    orchestratorAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressAmino {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddress";
    value: QueryDelegateKeysByOrchestratorAddressAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressSDKType {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponse {
    validatorAddress: string;
    ethAddress: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
    validator_address: string;
    eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
    type: "/gravity.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    value: QueryDelegateKeysByOrchestratorAddressResponseAmino;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseSDKType {
    validator_address: string;
    eth_address: string;
}
export interface QueryPendingSendToEth {
    senderAddress: string;
}
export interface QueryPendingSendToEthProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingSendToEth";
    value: Uint8Array;
}
export interface QueryPendingSendToEthAmino {
    sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
    type: "/gravity.v1.QueryPendingSendToEth";
    value: QueryPendingSendToEthAmino;
}
export interface QueryPendingSendToEthSDKType {
    sender_address: string;
}
export interface QueryPendingSendToEthResponse {
    transfersInBatches: OutgoingTransferTx[];
    unbatchedTransfers: OutgoingTransferTx[];
}
export interface QueryPendingSendToEthResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingSendToEthResponse";
    value: Uint8Array;
}
export interface QueryPendingSendToEthResponseAmino {
    transfers_in_batches: OutgoingTransferTxAmino[];
    unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
    type: "/gravity.v1.QueryPendingSendToEthResponse";
    value: QueryPendingSendToEthResponseAmino;
}
export interface QueryPendingSendToEthResponseSDKType {
    transfers_in_batches: OutgoingTransferTxSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
export interface QueryPendingIbcAutoForwards {
    /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
    limit: bigint;
}
export interface QueryPendingIbcAutoForwardsProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingIbcAutoForwards";
    value: Uint8Array;
}
export interface QueryPendingIbcAutoForwardsAmino {
    /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
    limit: string;
}
export interface QueryPendingIbcAutoForwardsAminoMsg {
    type: "/gravity.v1.QueryPendingIbcAutoForwards";
    value: QueryPendingIbcAutoForwardsAmino;
}
export interface QueryPendingIbcAutoForwardsSDKType {
    limit: bigint;
}
export interface QueryPendingIbcAutoForwardsResponse {
    pendingIbcAutoForwards: PendingIbcAutoForward[];
}
export interface QueryPendingIbcAutoForwardsResponseProtoMsg {
    typeUrl: "/gravity.v1.QueryPendingIbcAutoForwardsResponse";
    value: Uint8Array;
}
export interface QueryPendingIbcAutoForwardsResponseAmino {
    pending_ibc_auto_forwards: PendingIbcAutoForwardAmino[];
}
export interface QueryPendingIbcAutoForwardsResponseAminoMsg {
    type: "/gravity.v1.QueryPendingIbcAutoForwardsResponse";
    value: QueryPendingIbcAutoForwardsResponseAmino;
}
export interface QueryPendingIbcAutoForwardsResponseSDKType {
    pending_ibc_auto_forwards: PendingIbcAutoForwardSDKType[];
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
export declare const QueryCurrentValsetRequest: {
    typeUrl: string;
    encode(_: QueryCurrentValsetRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryCurrentValsetRequest;
    fromPartial(_: Partial<QueryCurrentValsetRequest>): QueryCurrentValsetRequest;
    fromAmino(_: QueryCurrentValsetRequestAmino): QueryCurrentValsetRequest;
    toAmino(_: QueryCurrentValsetRequest): QueryCurrentValsetRequestAmino;
    fromAminoMsg(object: QueryCurrentValsetRequestAminoMsg): QueryCurrentValsetRequest;
    fromProtoMsg(message: QueryCurrentValsetRequestProtoMsg): QueryCurrentValsetRequest;
    toProto(message: QueryCurrentValsetRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentValsetRequest): QueryCurrentValsetRequestProtoMsg;
};
export declare const QueryCurrentValsetResponse: {
    typeUrl: string;
    encode(message: QueryCurrentValsetResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCurrentValsetResponse;
    fromPartial(object: Partial<QueryCurrentValsetResponse>): QueryCurrentValsetResponse;
    fromAmino(object: QueryCurrentValsetResponseAmino): QueryCurrentValsetResponse;
    toAmino(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseAmino;
    fromAminoMsg(object: QueryCurrentValsetResponseAminoMsg): QueryCurrentValsetResponse;
    fromProtoMsg(message: QueryCurrentValsetResponseProtoMsg): QueryCurrentValsetResponse;
    toProto(message: QueryCurrentValsetResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentValsetResponse): QueryCurrentValsetResponseProtoMsg;
};
export declare const QueryValsetRequestRequest: {
    typeUrl: string;
    encode(message: QueryValsetRequestRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetRequestRequest;
    fromPartial(object: Partial<QueryValsetRequestRequest>): QueryValsetRequestRequest;
    fromAmino(object: QueryValsetRequestRequestAmino): QueryValsetRequestRequest;
    toAmino(message: QueryValsetRequestRequest): QueryValsetRequestRequestAmino;
    fromAminoMsg(object: QueryValsetRequestRequestAminoMsg): QueryValsetRequestRequest;
    fromProtoMsg(message: QueryValsetRequestRequestProtoMsg): QueryValsetRequestRequest;
    toProto(message: QueryValsetRequestRequest): Uint8Array;
    toProtoMsg(message: QueryValsetRequestRequest): QueryValsetRequestRequestProtoMsg;
};
export declare const QueryValsetRequestResponse: {
    typeUrl: string;
    encode(message: QueryValsetRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetRequestResponse;
    fromPartial(object: Partial<QueryValsetRequestResponse>): QueryValsetRequestResponse;
    fromAmino(object: QueryValsetRequestResponseAmino): QueryValsetRequestResponse;
    toAmino(message: QueryValsetRequestResponse): QueryValsetRequestResponseAmino;
    fromAminoMsg(object: QueryValsetRequestResponseAminoMsg): QueryValsetRequestResponse;
    fromProtoMsg(message: QueryValsetRequestResponseProtoMsg): QueryValsetRequestResponse;
    toProto(message: QueryValsetRequestResponse): Uint8Array;
    toProtoMsg(message: QueryValsetRequestResponse): QueryValsetRequestResponseProtoMsg;
};
export declare const QueryValsetConfirmRequest: {
    typeUrl: string;
    encode(message: QueryValsetConfirmRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetConfirmRequest;
    fromPartial(object: Partial<QueryValsetConfirmRequest>): QueryValsetConfirmRequest;
    fromAmino(object: QueryValsetConfirmRequestAmino): QueryValsetConfirmRequest;
    toAmino(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestAmino;
    fromAminoMsg(object: QueryValsetConfirmRequestAminoMsg): QueryValsetConfirmRequest;
    fromProtoMsg(message: QueryValsetConfirmRequestProtoMsg): QueryValsetConfirmRequest;
    toProto(message: QueryValsetConfirmRequest): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmRequest): QueryValsetConfirmRequestProtoMsg;
};
export declare const QueryValsetConfirmResponse: {
    typeUrl: string;
    encode(message: QueryValsetConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetConfirmResponse;
    fromPartial(object: Partial<QueryValsetConfirmResponse>): QueryValsetConfirmResponse;
    fromAmino(object: QueryValsetConfirmResponseAmino): QueryValsetConfirmResponse;
    toAmino(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseAmino;
    fromAminoMsg(object: QueryValsetConfirmResponseAminoMsg): QueryValsetConfirmResponse;
    fromProtoMsg(message: QueryValsetConfirmResponseProtoMsg): QueryValsetConfirmResponse;
    toProto(message: QueryValsetConfirmResponse): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmResponse): QueryValsetConfirmResponseProtoMsg;
};
export declare const QueryValsetConfirmsByNonceRequest: {
    typeUrl: string;
    encode(message: QueryValsetConfirmsByNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetConfirmsByNonceRequest;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceRequest>): QueryValsetConfirmsByNonceRequest;
    fromAmino(object: QueryValsetConfirmsByNonceRequestAmino): QueryValsetConfirmsByNonceRequest;
    toAmino(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestAmino;
    fromAminoMsg(object: QueryValsetConfirmsByNonceRequestAminoMsg): QueryValsetConfirmsByNonceRequest;
    fromProtoMsg(message: QueryValsetConfirmsByNonceRequestProtoMsg): QueryValsetConfirmsByNonceRequest;
    toProto(message: QueryValsetConfirmsByNonceRequest): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmsByNonceRequest): QueryValsetConfirmsByNonceRequestProtoMsg;
};
export declare const QueryValsetConfirmsByNonceResponse: {
    typeUrl: string;
    encode(message: QueryValsetConfirmsByNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValsetConfirmsByNonceResponse;
    fromPartial(object: Partial<QueryValsetConfirmsByNonceResponse>): QueryValsetConfirmsByNonceResponse;
    fromAmino(object: QueryValsetConfirmsByNonceResponseAmino): QueryValsetConfirmsByNonceResponse;
    toAmino(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseAmino;
    fromAminoMsg(object: QueryValsetConfirmsByNonceResponseAminoMsg): QueryValsetConfirmsByNonceResponse;
    fromProtoMsg(message: QueryValsetConfirmsByNonceResponseProtoMsg): QueryValsetConfirmsByNonceResponse;
    toProto(message: QueryValsetConfirmsByNonceResponse): Uint8Array;
    toProtoMsg(message: QueryValsetConfirmsByNonceResponse): QueryValsetConfirmsByNonceResponseProtoMsg;
};
export declare const QueryLastValsetRequestsRequest: {
    typeUrl: string;
    encode(_: QueryLastValsetRequestsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryLastValsetRequestsRequest;
    fromPartial(_: Partial<QueryLastValsetRequestsRequest>): QueryLastValsetRequestsRequest;
    fromAmino(_: QueryLastValsetRequestsRequestAmino): QueryLastValsetRequestsRequest;
    toAmino(_: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestAmino;
    fromAminoMsg(object: QueryLastValsetRequestsRequestAminoMsg): QueryLastValsetRequestsRequest;
    fromProtoMsg(message: QueryLastValsetRequestsRequestProtoMsg): QueryLastValsetRequestsRequest;
    toProto(message: QueryLastValsetRequestsRequest): Uint8Array;
    toProtoMsg(message: QueryLastValsetRequestsRequest): QueryLastValsetRequestsRequestProtoMsg;
};
export declare const QueryLastValsetRequestsResponse: {
    typeUrl: string;
    encode(message: QueryLastValsetRequestsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastValsetRequestsResponse;
    fromPartial(object: Partial<QueryLastValsetRequestsResponse>): QueryLastValsetRequestsResponse;
    fromAmino(object: QueryLastValsetRequestsResponseAmino): QueryLastValsetRequestsResponse;
    toAmino(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseAmino;
    fromAminoMsg(object: QueryLastValsetRequestsResponseAminoMsg): QueryLastValsetRequestsResponse;
    fromProtoMsg(message: QueryLastValsetRequestsResponseProtoMsg): QueryLastValsetRequestsResponse;
    toProto(message: QueryLastValsetRequestsResponse): Uint8Array;
    toProtoMsg(message: QueryLastValsetRequestsResponse): QueryLastValsetRequestsResponseProtoMsg;
};
export declare const QueryLastPendingValsetRequestByAddrRequest: {
    typeUrl: string;
    encode(message: QueryLastPendingValsetRequestByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrRequest>): QueryLastPendingValsetRequestByAddrRequest;
    fromAmino(object: QueryLastPendingValsetRequestByAddrRequestAmino): QueryLastPendingValsetRequestByAddrRequest;
    toAmino(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingValsetRequestByAddrRequestAminoMsg): QueryLastPendingValsetRequestByAddrRequest;
    fromProtoMsg(message: QueryLastPendingValsetRequestByAddrRequestProtoMsg): QueryLastPendingValsetRequestByAddrRequest;
    toProto(message: QueryLastPendingValsetRequestByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingValsetRequestByAddrRequest): QueryLastPendingValsetRequestByAddrRequestProtoMsg;
};
export declare const QueryLastPendingValsetRequestByAddrResponse: {
    typeUrl: string;
    encode(message: QueryLastPendingValsetRequestByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingValsetRequestByAddrResponse>): QueryLastPendingValsetRequestByAddrResponse;
    fromAmino(object: QueryLastPendingValsetRequestByAddrResponseAmino): QueryLastPendingValsetRequestByAddrResponse;
    toAmino(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingValsetRequestByAddrResponseAminoMsg): QueryLastPendingValsetRequestByAddrResponse;
    fromProtoMsg(message: QueryLastPendingValsetRequestByAddrResponseProtoMsg): QueryLastPendingValsetRequestByAddrResponse;
    toProto(message: QueryLastPendingValsetRequestByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingValsetRequestByAddrResponse): QueryLastPendingValsetRequestByAddrResponseProtoMsg;
};
export declare const QueryBatchFeeRequest: {
    typeUrl: string;
    encode(_: QueryBatchFeeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryBatchFeeRequest;
    fromPartial(_: Partial<QueryBatchFeeRequest>): QueryBatchFeeRequest;
    fromAmino(_: QueryBatchFeeRequestAmino): QueryBatchFeeRequest;
    toAmino(_: QueryBatchFeeRequest): QueryBatchFeeRequestAmino;
    fromAminoMsg(object: QueryBatchFeeRequestAminoMsg): QueryBatchFeeRequest;
    fromProtoMsg(message: QueryBatchFeeRequestProtoMsg): QueryBatchFeeRequest;
    toProto(message: QueryBatchFeeRequest): Uint8Array;
    toProtoMsg(message: QueryBatchFeeRequest): QueryBatchFeeRequestProtoMsg;
};
export declare const QueryBatchFeeResponse: {
    typeUrl: string;
    encode(message: QueryBatchFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBatchFeeResponse;
    fromPartial(object: Partial<QueryBatchFeeResponse>): QueryBatchFeeResponse;
    fromAmino(object: QueryBatchFeeResponseAmino): QueryBatchFeeResponse;
    toAmino(message: QueryBatchFeeResponse): QueryBatchFeeResponseAmino;
    fromAminoMsg(object: QueryBatchFeeResponseAminoMsg): QueryBatchFeeResponse;
    fromProtoMsg(message: QueryBatchFeeResponseProtoMsg): QueryBatchFeeResponse;
    toProto(message: QueryBatchFeeResponse): Uint8Array;
    toProtoMsg(message: QueryBatchFeeResponse): QueryBatchFeeResponseProtoMsg;
};
export declare const QueryLastPendingBatchRequestByAddrRequest: {
    typeUrl: string;
    encode(message: QueryLastPendingBatchRequestByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrRequest>): QueryLastPendingBatchRequestByAddrRequest;
    fromAmino(object: QueryLastPendingBatchRequestByAddrRequestAmino): QueryLastPendingBatchRequestByAddrRequest;
    toAmino(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingBatchRequestByAddrRequestAminoMsg): QueryLastPendingBatchRequestByAddrRequest;
    fromProtoMsg(message: QueryLastPendingBatchRequestByAddrRequestProtoMsg): QueryLastPendingBatchRequestByAddrRequest;
    toProto(message: QueryLastPendingBatchRequestByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingBatchRequestByAddrRequest): QueryLastPendingBatchRequestByAddrRequestProtoMsg;
};
export declare const QueryLastPendingBatchRequestByAddrResponse: {
    typeUrl: string;
    encode(message: QueryLastPendingBatchRequestByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingBatchRequestByAddrResponse>): QueryLastPendingBatchRequestByAddrResponse;
    fromAmino(object: QueryLastPendingBatchRequestByAddrResponseAmino): QueryLastPendingBatchRequestByAddrResponse;
    toAmino(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingBatchRequestByAddrResponseAminoMsg): QueryLastPendingBatchRequestByAddrResponse;
    fromProtoMsg(message: QueryLastPendingBatchRequestByAddrResponseProtoMsg): QueryLastPendingBatchRequestByAddrResponse;
    toProto(message: QueryLastPendingBatchRequestByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingBatchRequestByAddrResponse): QueryLastPendingBatchRequestByAddrResponseProtoMsg;
};
export declare const QueryLastPendingLogicCallByAddrRequest: {
    typeUrl: string;
    encode(message: QueryLastPendingLogicCallByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrRequest>): QueryLastPendingLogicCallByAddrRequest;
    fromAmino(object: QueryLastPendingLogicCallByAddrRequestAmino): QueryLastPendingLogicCallByAddrRequest;
    toAmino(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestAmino;
    fromAminoMsg(object: QueryLastPendingLogicCallByAddrRequestAminoMsg): QueryLastPendingLogicCallByAddrRequest;
    fromProtoMsg(message: QueryLastPendingLogicCallByAddrRequestProtoMsg): QueryLastPendingLogicCallByAddrRequest;
    toProto(message: QueryLastPendingLogicCallByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastPendingLogicCallByAddrRequest): QueryLastPendingLogicCallByAddrRequestProtoMsg;
};
export declare const QueryLastPendingLogicCallByAddrResponse: {
    typeUrl: string;
    encode(message: QueryLastPendingLogicCallByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse;
    fromPartial(object: Partial<QueryLastPendingLogicCallByAddrResponse>): QueryLastPendingLogicCallByAddrResponse;
    fromAmino(object: QueryLastPendingLogicCallByAddrResponseAmino): QueryLastPendingLogicCallByAddrResponse;
    toAmino(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseAmino;
    fromAminoMsg(object: QueryLastPendingLogicCallByAddrResponseAminoMsg): QueryLastPendingLogicCallByAddrResponse;
    fromProtoMsg(message: QueryLastPendingLogicCallByAddrResponseProtoMsg): QueryLastPendingLogicCallByAddrResponse;
    toProto(message: QueryLastPendingLogicCallByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastPendingLogicCallByAddrResponse): QueryLastPendingLogicCallByAddrResponseProtoMsg;
};
export declare const QueryOutgoingTxBatchesRequest: {
    typeUrl: string;
    encode(_: QueryOutgoingTxBatchesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOutgoingTxBatchesRequest;
    fromPartial(_: Partial<QueryOutgoingTxBatchesRequest>): QueryOutgoingTxBatchesRequest;
    fromAmino(_: QueryOutgoingTxBatchesRequestAmino): QueryOutgoingTxBatchesRequest;
    toAmino(_: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestAmino;
    fromAminoMsg(object: QueryOutgoingTxBatchesRequestAminoMsg): QueryOutgoingTxBatchesRequest;
    fromProtoMsg(message: QueryOutgoingTxBatchesRequestProtoMsg): QueryOutgoingTxBatchesRequest;
    toProto(message: QueryOutgoingTxBatchesRequest): Uint8Array;
    toProtoMsg(message: QueryOutgoingTxBatchesRequest): QueryOutgoingTxBatchesRequestProtoMsg;
};
export declare const QueryOutgoingTxBatchesResponse: {
    typeUrl: string;
    encode(message: QueryOutgoingTxBatchesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOutgoingTxBatchesResponse;
    fromPartial(object: Partial<QueryOutgoingTxBatchesResponse>): QueryOutgoingTxBatchesResponse;
    fromAmino(object: QueryOutgoingTxBatchesResponseAmino): QueryOutgoingTxBatchesResponse;
    toAmino(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseAmino;
    fromAminoMsg(object: QueryOutgoingTxBatchesResponseAminoMsg): QueryOutgoingTxBatchesResponse;
    fromProtoMsg(message: QueryOutgoingTxBatchesResponseProtoMsg): QueryOutgoingTxBatchesResponse;
    toProto(message: QueryOutgoingTxBatchesResponse): Uint8Array;
    toProtoMsg(message: QueryOutgoingTxBatchesResponse): QueryOutgoingTxBatchesResponseProtoMsg;
};
export declare const QueryOutgoingLogicCallsRequest: {
    typeUrl: string;
    encode(_: QueryOutgoingLogicCallsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOutgoingLogicCallsRequest;
    fromPartial(_: Partial<QueryOutgoingLogicCallsRequest>): QueryOutgoingLogicCallsRequest;
    fromAmino(_: QueryOutgoingLogicCallsRequestAmino): QueryOutgoingLogicCallsRequest;
    toAmino(_: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestAmino;
    fromAminoMsg(object: QueryOutgoingLogicCallsRequestAminoMsg): QueryOutgoingLogicCallsRequest;
    fromProtoMsg(message: QueryOutgoingLogicCallsRequestProtoMsg): QueryOutgoingLogicCallsRequest;
    toProto(message: QueryOutgoingLogicCallsRequest): Uint8Array;
    toProtoMsg(message: QueryOutgoingLogicCallsRequest): QueryOutgoingLogicCallsRequestProtoMsg;
};
export declare const QueryOutgoingLogicCallsResponse: {
    typeUrl: string;
    encode(message: QueryOutgoingLogicCallsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOutgoingLogicCallsResponse;
    fromPartial(object: Partial<QueryOutgoingLogicCallsResponse>): QueryOutgoingLogicCallsResponse;
    fromAmino(object: QueryOutgoingLogicCallsResponseAmino): QueryOutgoingLogicCallsResponse;
    toAmino(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseAmino;
    fromAminoMsg(object: QueryOutgoingLogicCallsResponseAminoMsg): QueryOutgoingLogicCallsResponse;
    fromProtoMsg(message: QueryOutgoingLogicCallsResponseProtoMsg): QueryOutgoingLogicCallsResponse;
    toProto(message: QueryOutgoingLogicCallsResponse): Uint8Array;
    toProtoMsg(message: QueryOutgoingLogicCallsResponse): QueryOutgoingLogicCallsResponseProtoMsg;
};
export declare const QueryBatchRequestByNonceRequest: {
    typeUrl: string;
    encode(message: QueryBatchRequestByNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBatchRequestByNonceRequest;
    fromPartial(object: Partial<QueryBatchRequestByNonceRequest>): QueryBatchRequestByNonceRequest;
    fromAmino(object: QueryBatchRequestByNonceRequestAmino): QueryBatchRequestByNonceRequest;
    toAmino(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestAmino;
    fromAminoMsg(object: QueryBatchRequestByNonceRequestAminoMsg): QueryBatchRequestByNonceRequest;
    fromProtoMsg(message: QueryBatchRequestByNonceRequestProtoMsg): QueryBatchRequestByNonceRequest;
    toProto(message: QueryBatchRequestByNonceRequest): Uint8Array;
    toProtoMsg(message: QueryBatchRequestByNonceRequest): QueryBatchRequestByNonceRequestProtoMsg;
};
export declare const QueryBatchRequestByNonceResponse: {
    typeUrl: string;
    encode(message: QueryBatchRequestByNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBatchRequestByNonceResponse;
    fromPartial(object: Partial<QueryBatchRequestByNonceResponse>): QueryBatchRequestByNonceResponse;
    fromAmino(object: QueryBatchRequestByNonceResponseAmino): QueryBatchRequestByNonceResponse;
    toAmino(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseAmino;
    fromAminoMsg(object: QueryBatchRequestByNonceResponseAminoMsg): QueryBatchRequestByNonceResponse;
    fromProtoMsg(message: QueryBatchRequestByNonceResponseProtoMsg): QueryBatchRequestByNonceResponse;
    toProto(message: QueryBatchRequestByNonceResponse): Uint8Array;
    toProtoMsg(message: QueryBatchRequestByNonceResponse): QueryBatchRequestByNonceResponseProtoMsg;
};
export declare const QueryBatchConfirmsRequest: {
    typeUrl: string;
    encode(message: QueryBatchConfirmsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBatchConfirmsRequest;
    fromPartial(object: Partial<QueryBatchConfirmsRequest>): QueryBatchConfirmsRequest;
    fromAmino(object: QueryBatchConfirmsRequestAmino): QueryBatchConfirmsRequest;
    toAmino(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestAmino;
    fromAminoMsg(object: QueryBatchConfirmsRequestAminoMsg): QueryBatchConfirmsRequest;
    fromProtoMsg(message: QueryBatchConfirmsRequestProtoMsg): QueryBatchConfirmsRequest;
    toProto(message: QueryBatchConfirmsRequest): Uint8Array;
    toProtoMsg(message: QueryBatchConfirmsRequest): QueryBatchConfirmsRequestProtoMsg;
};
export declare const QueryBatchConfirmsResponse: {
    typeUrl: string;
    encode(message: QueryBatchConfirmsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBatchConfirmsResponse;
    fromPartial(object: Partial<QueryBatchConfirmsResponse>): QueryBatchConfirmsResponse;
    fromAmino(object: QueryBatchConfirmsResponseAmino): QueryBatchConfirmsResponse;
    toAmino(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseAmino;
    fromAminoMsg(object: QueryBatchConfirmsResponseAminoMsg): QueryBatchConfirmsResponse;
    fromProtoMsg(message: QueryBatchConfirmsResponseProtoMsg): QueryBatchConfirmsResponse;
    toProto(message: QueryBatchConfirmsResponse): Uint8Array;
    toProtoMsg(message: QueryBatchConfirmsResponse): QueryBatchConfirmsResponseProtoMsg;
};
export declare const QueryLogicConfirmsRequest: {
    typeUrl: string;
    encode(message: QueryLogicConfirmsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLogicConfirmsRequest;
    fromPartial(object: Partial<QueryLogicConfirmsRequest>): QueryLogicConfirmsRequest;
    fromAmino(object: QueryLogicConfirmsRequestAmino): QueryLogicConfirmsRequest;
    toAmino(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestAmino;
    fromAminoMsg(object: QueryLogicConfirmsRequestAminoMsg): QueryLogicConfirmsRequest;
    fromProtoMsg(message: QueryLogicConfirmsRequestProtoMsg): QueryLogicConfirmsRequest;
    toProto(message: QueryLogicConfirmsRequest): Uint8Array;
    toProtoMsg(message: QueryLogicConfirmsRequest): QueryLogicConfirmsRequestProtoMsg;
};
export declare const QueryLogicConfirmsResponse: {
    typeUrl: string;
    encode(message: QueryLogicConfirmsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLogicConfirmsResponse;
    fromPartial(object: Partial<QueryLogicConfirmsResponse>): QueryLogicConfirmsResponse;
    fromAmino(object: QueryLogicConfirmsResponseAmino): QueryLogicConfirmsResponse;
    toAmino(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseAmino;
    fromAminoMsg(object: QueryLogicConfirmsResponseAminoMsg): QueryLogicConfirmsResponse;
    fromProtoMsg(message: QueryLogicConfirmsResponseProtoMsg): QueryLogicConfirmsResponse;
    toProto(message: QueryLogicConfirmsResponse): Uint8Array;
    toProtoMsg(message: QueryLogicConfirmsResponse): QueryLogicConfirmsResponseProtoMsg;
};
export declare const QueryLastEventNonceByAddrRequest: {
    typeUrl: string;
    encode(message: QueryLastEventNonceByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastEventNonceByAddrRequest;
    fromPartial(object: Partial<QueryLastEventNonceByAddrRequest>): QueryLastEventNonceByAddrRequest;
    fromAmino(object: QueryLastEventNonceByAddrRequestAmino): QueryLastEventNonceByAddrRequest;
    toAmino(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestAmino;
    fromAminoMsg(object: QueryLastEventNonceByAddrRequestAminoMsg): QueryLastEventNonceByAddrRequest;
    fromProtoMsg(message: QueryLastEventNonceByAddrRequestProtoMsg): QueryLastEventNonceByAddrRequest;
    toProto(message: QueryLastEventNonceByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastEventNonceByAddrRequest): QueryLastEventNonceByAddrRequestProtoMsg;
};
export declare const QueryLastEventNonceByAddrResponse: {
    typeUrl: string;
    encode(message: QueryLastEventNonceByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastEventNonceByAddrResponse;
    fromPartial(object: Partial<QueryLastEventNonceByAddrResponse>): QueryLastEventNonceByAddrResponse;
    fromAmino(object: QueryLastEventNonceByAddrResponseAmino): QueryLastEventNonceByAddrResponse;
    toAmino(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseAmino;
    fromAminoMsg(object: QueryLastEventNonceByAddrResponseAminoMsg): QueryLastEventNonceByAddrResponse;
    fromProtoMsg(message: QueryLastEventNonceByAddrResponseProtoMsg): QueryLastEventNonceByAddrResponse;
    toProto(message: QueryLastEventNonceByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastEventNonceByAddrResponse): QueryLastEventNonceByAddrResponseProtoMsg;
};
export declare const QueryERC20ToDenomRequest: {
    typeUrl: string;
    encode(message: QueryERC20ToDenomRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryERC20ToDenomRequest;
    fromPartial(object: Partial<QueryERC20ToDenomRequest>): QueryERC20ToDenomRequest;
    fromAmino(object: QueryERC20ToDenomRequestAmino): QueryERC20ToDenomRequest;
    toAmino(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestAmino;
    fromAminoMsg(object: QueryERC20ToDenomRequestAminoMsg): QueryERC20ToDenomRequest;
    fromProtoMsg(message: QueryERC20ToDenomRequestProtoMsg): QueryERC20ToDenomRequest;
    toProto(message: QueryERC20ToDenomRequest): Uint8Array;
    toProtoMsg(message: QueryERC20ToDenomRequest): QueryERC20ToDenomRequestProtoMsg;
};
export declare const QueryERC20ToDenomResponse: {
    typeUrl: string;
    encode(message: QueryERC20ToDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryERC20ToDenomResponse;
    fromPartial(object: Partial<QueryERC20ToDenomResponse>): QueryERC20ToDenomResponse;
    fromAmino(object: QueryERC20ToDenomResponseAmino): QueryERC20ToDenomResponse;
    toAmino(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseAmino;
    fromAminoMsg(object: QueryERC20ToDenomResponseAminoMsg): QueryERC20ToDenomResponse;
    fromProtoMsg(message: QueryERC20ToDenomResponseProtoMsg): QueryERC20ToDenomResponse;
    toProto(message: QueryERC20ToDenomResponse): Uint8Array;
    toProtoMsg(message: QueryERC20ToDenomResponse): QueryERC20ToDenomResponseProtoMsg;
};
export declare const QueryDenomToERC20Request: {
    typeUrl: string;
    encode(message: QueryDenomToERC20Request, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomToERC20Request;
    fromPartial(object: Partial<QueryDenomToERC20Request>): QueryDenomToERC20Request;
    fromAmino(object: QueryDenomToERC20RequestAmino): QueryDenomToERC20Request;
    toAmino(message: QueryDenomToERC20Request): QueryDenomToERC20RequestAmino;
    fromAminoMsg(object: QueryDenomToERC20RequestAminoMsg): QueryDenomToERC20Request;
    fromProtoMsg(message: QueryDenomToERC20RequestProtoMsg): QueryDenomToERC20Request;
    toProto(message: QueryDenomToERC20Request): Uint8Array;
    toProtoMsg(message: QueryDenomToERC20Request): QueryDenomToERC20RequestProtoMsg;
};
export declare const QueryDenomToERC20Response: {
    typeUrl: string;
    encode(message: QueryDenomToERC20Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDenomToERC20Response;
    fromPartial(object: Partial<QueryDenomToERC20Response>): QueryDenomToERC20Response;
    fromAmino(object: QueryDenomToERC20ResponseAmino): QueryDenomToERC20Response;
    toAmino(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseAmino;
    fromAminoMsg(object: QueryDenomToERC20ResponseAminoMsg): QueryDenomToERC20Response;
    fromProtoMsg(message: QueryDenomToERC20ResponseProtoMsg): QueryDenomToERC20Response;
    toProto(message: QueryDenomToERC20Response): Uint8Array;
    toProtoMsg(message: QueryDenomToERC20Response): QueryDenomToERC20ResponseProtoMsg;
};
export declare const QueryLastObservedEthBlockRequest: {
    typeUrl: string;
    encode(message: QueryLastObservedEthBlockRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastObservedEthBlockRequest;
    fromPartial(object: Partial<QueryLastObservedEthBlockRequest>): QueryLastObservedEthBlockRequest;
    fromAmino(object: QueryLastObservedEthBlockRequestAmino): QueryLastObservedEthBlockRequest;
    toAmino(message: QueryLastObservedEthBlockRequest): QueryLastObservedEthBlockRequestAmino;
    fromAminoMsg(object: QueryLastObservedEthBlockRequestAminoMsg): QueryLastObservedEthBlockRequest;
    fromProtoMsg(message: QueryLastObservedEthBlockRequestProtoMsg): QueryLastObservedEthBlockRequest;
    toProto(message: QueryLastObservedEthBlockRequest): Uint8Array;
    toProtoMsg(message: QueryLastObservedEthBlockRequest): QueryLastObservedEthBlockRequestProtoMsg;
};
export declare const QueryLastObservedEthBlockResponse: {
    typeUrl: string;
    encode(message: QueryLastObservedEthBlockResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastObservedEthBlockResponse;
    fromPartial(object: Partial<QueryLastObservedEthBlockResponse>): QueryLastObservedEthBlockResponse;
    fromAmino(object: QueryLastObservedEthBlockResponseAmino): QueryLastObservedEthBlockResponse;
    toAmino(message: QueryLastObservedEthBlockResponse): QueryLastObservedEthBlockResponseAmino;
    fromAminoMsg(object: QueryLastObservedEthBlockResponseAminoMsg): QueryLastObservedEthBlockResponse;
    fromProtoMsg(message: QueryLastObservedEthBlockResponseProtoMsg): QueryLastObservedEthBlockResponse;
    toProto(message: QueryLastObservedEthBlockResponse): Uint8Array;
    toProtoMsg(message: QueryLastObservedEthBlockResponse): QueryLastObservedEthBlockResponseProtoMsg;
};
export declare const QueryLastObservedEthNonceRequest: {
    typeUrl: string;
    encode(message: QueryLastObservedEthNonceRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastObservedEthNonceRequest;
    fromPartial(object: Partial<QueryLastObservedEthNonceRequest>): QueryLastObservedEthNonceRequest;
    fromAmino(object: QueryLastObservedEthNonceRequestAmino): QueryLastObservedEthNonceRequest;
    toAmino(message: QueryLastObservedEthNonceRequest): QueryLastObservedEthNonceRequestAmino;
    fromAminoMsg(object: QueryLastObservedEthNonceRequestAminoMsg): QueryLastObservedEthNonceRequest;
    fromProtoMsg(message: QueryLastObservedEthNonceRequestProtoMsg): QueryLastObservedEthNonceRequest;
    toProto(message: QueryLastObservedEthNonceRequest): Uint8Array;
    toProtoMsg(message: QueryLastObservedEthNonceRequest): QueryLastObservedEthNonceRequestProtoMsg;
};
export declare const QueryLastObservedEthNonceResponse: {
    typeUrl: string;
    encode(message: QueryLastObservedEthNonceResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastObservedEthNonceResponse;
    fromPartial(object: Partial<QueryLastObservedEthNonceResponse>): QueryLastObservedEthNonceResponse;
    fromAmino(object: QueryLastObservedEthNonceResponseAmino): QueryLastObservedEthNonceResponse;
    toAmino(message: QueryLastObservedEthNonceResponse): QueryLastObservedEthNonceResponseAmino;
    fromAminoMsg(object: QueryLastObservedEthNonceResponseAminoMsg): QueryLastObservedEthNonceResponse;
    fromProtoMsg(message: QueryLastObservedEthNonceResponseProtoMsg): QueryLastObservedEthNonceResponse;
    toProto(message: QueryLastObservedEthNonceResponse): Uint8Array;
    toProtoMsg(message: QueryLastObservedEthNonceResponse): QueryLastObservedEthNonceResponseProtoMsg;
};
export declare const QueryAttestationsRequest: {
    typeUrl: string;
    encode(message: QueryAttestationsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsRequest;
    fromPartial(object: Partial<QueryAttestationsRequest>): QueryAttestationsRequest;
    fromAmino(object: QueryAttestationsRequestAmino): QueryAttestationsRequest;
    toAmino(message: QueryAttestationsRequest): QueryAttestationsRequestAmino;
    fromAminoMsg(object: QueryAttestationsRequestAminoMsg): QueryAttestationsRequest;
    fromProtoMsg(message: QueryAttestationsRequestProtoMsg): QueryAttestationsRequest;
    toProto(message: QueryAttestationsRequest): Uint8Array;
    toProtoMsg(message: QueryAttestationsRequest): QueryAttestationsRequestProtoMsg;
};
export declare const QueryAttestationsResponse: {
    typeUrl: string;
    encode(message: QueryAttestationsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAttestationsResponse;
    fromPartial(object: Partial<QueryAttestationsResponse>): QueryAttestationsResponse;
    fromAmino(object: QueryAttestationsResponseAmino): QueryAttestationsResponse;
    toAmino(message: QueryAttestationsResponse): QueryAttestationsResponseAmino;
    fromAminoMsg(object: QueryAttestationsResponseAminoMsg): QueryAttestationsResponse;
    fromProtoMsg(message: QueryAttestationsResponseProtoMsg): QueryAttestationsResponse;
    toProto(message: QueryAttestationsResponse): Uint8Array;
    toProtoMsg(message: QueryAttestationsResponse): QueryAttestationsResponseProtoMsg;
};
export declare const QueryDelegateKeysByValidatorAddress: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByValidatorAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddress;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddress>): QueryDelegateKeysByValidatorAddress;
    fromAmino(object: QueryDelegateKeysByValidatorAddressAmino): QueryDelegateKeysByValidatorAddress;
    toAmino(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByValidatorAddressAminoMsg): QueryDelegateKeysByValidatorAddress;
    fromProtoMsg(message: QueryDelegateKeysByValidatorAddressProtoMsg): QueryDelegateKeysByValidatorAddress;
    toProto(message: QueryDelegateKeysByValidatorAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByValidatorAddress): QueryDelegateKeysByValidatorAddressProtoMsg;
};
export declare const QueryDelegateKeysByValidatorAddressResponse: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByValidatorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByValidatorAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByValidatorAddressResponse>): QueryDelegateKeysByValidatorAddressResponse;
    fromAmino(object: QueryDelegateKeysByValidatorAddressResponseAmino): QueryDelegateKeysByValidatorAddressResponse;
    toAmino(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByValidatorAddressResponseAminoMsg): QueryDelegateKeysByValidatorAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByValidatorAddressResponseProtoMsg): QueryDelegateKeysByValidatorAddressResponse;
    toProto(message: QueryDelegateKeysByValidatorAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByValidatorAddressResponse): QueryDelegateKeysByValidatorAddressResponseProtoMsg;
};
export declare const QueryDelegateKeysByEthAddress: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByEthAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByEthAddress;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddress>): QueryDelegateKeysByEthAddress;
    fromAmino(object: QueryDelegateKeysByEthAddressAmino): QueryDelegateKeysByEthAddress;
    toAmino(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByEthAddressAminoMsg): QueryDelegateKeysByEthAddress;
    fromProtoMsg(message: QueryDelegateKeysByEthAddressProtoMsg): QueryDelegateKeysByEthAddress;
    toProto(message: QueryDelegateKeysByEthAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByEthAddress): QueryDelegateKeysByEthAddressProtoMsg;
};
export declare const QueryDelegateKeysByEthAddressResponse: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByEthAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByEthAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByEthAddressResponse>): QueryDelegateKeysByEthAddressResponse;
    fromAmino(object: QueryDelegateKeysByEthAddressResponseAmino): QueryDelegateKeysByEthAddressResponse;
    toAmino(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByEthAddressResponseAminoMsg): QueryDelegateKeysByEthAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByEthAddressResponseProtoMsg): QueryDelegateKeysByEthAddressResponse;
    toProto(message: QueryDelegateKeysByEthAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByEthAddressResponse): QueryDelegateKeysByEthAddressResponseProtoMsg;
};
export declare const QueryDelegateKeysByOrchestratorAddress: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByOrchestratorAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddress;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddress>): QueryDelegateKeysByOrchestratorAddress;
    fromAmino(object: QueryDelegateKeysByOrchestratorAddressAmino): QueryDelegateKeysByOrchestratorAddress;
    toAmino(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressAmino;
    fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressAminoMsg): QueryDelegateKeysByOrchestratorAddress;
    fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressProtoMsg): QueryDelegateKeysByOrchestratorAddress;
    toProto(message: QueryDelegateKeysByOrchestratorAddress): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByOrchestratorAddress): QueryDelegateKeysByOrchestratorAddressProtoMsg;
};
export declare const QueryDelegateKeysByOrchestratorAddressResponse: {
    typeUrl: string;
    encode(message: QueryDelegateKeysByOrchestratorAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDelegateKeysByOrchestratorAddressResponse;
    fromPartial(object: Partial<QueryDelegateKeysByOrchestratorAddressResponse>): QueryDelegateKeysByOrchestratorAddressResponse;
    fromAmino(object: QueryDelegateKeysByOrchestratorAddressResponseAmino): QueryDelegateKeysByOrchestratorAddressResponse;
    toAmino(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseAmino;
    fromAminoMsg(object: QueryDelegateKeysByOrchestratorAddressResponseAminoMsg): QueryDelegateKeysByOrchestratorAddressResponse;
    fromProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponseProtoMsg): QueryDelegateKeysByOrchestratorAddressResponse;
    toProto(message: QueryDelegateKeysByOrchestratorAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegateKeysByOrchestratorAddressResponse): QueryDelegateKeysByOrchestratorAddressResponseProtoMsg;
};
export declare const QueryPendingSendToEth: {
    typeUrl: string;
    encode(message: QueryPendingSendToEth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingSendToEth;
    fromPartial(object: Partial<QueryPendingSendToEth>): QueryPendingSendToEth;
    fromAmino(object: QueryPendingSendToEthAmino): QueryPendingSendToEth;
    toAmino(message: QueryPendingSendToEth): QueryPendingSendToEthAmino;
    fromAminoMsg(object: QueryPendingSendToEthAminoMsg): QueryPendingSendToEth;
    fromProtoMsg(message: QueryPendingSendToEthProtoMsg): QueryPendingSendToEth;
    toProto(message: QueryPendingSendToEth): Uint8Array;
    toProtoMsg(message: QueryPendingSendToEth): QueryPendingSendToEthProtoMsg;
};
export declare const QueryPendingSendToEthResponse: {
    typeUrl: string;
    encode(message: QueryPendingSendToEthResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingSendToEthResponse;
    fromPartial(object: Partial<QueryPendingSendToEthResponse>): QueryPendingSendToEthResponse;
    fromAmino(object: QueryPendingSendToEthResponseAmino): QueryPendingSendToEthResponse;
    toAmino(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseAmino;
    fromAminoMsg(object: QueryPendingSendToEthResponseAminoMsg): QueryPendingSendToEthResponse;
    fromProtoMsg(message: QueryPendingSendToEthResponseProtoMsg): QueryPendingSendToEthResponse;
    toProto(message: QueryPendingSendToEthResponse): Uint8Array;
    toProtoMsg(message: QueryPendingSendToEthResponse): QueryPendingSendToEthResponseProtoMsg;
};
export declare const QueryPendingIbcAutoForwards: {
    typeUrl: string;
    encode(message: QueryPendingIbcAutoForwards, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingIbcAutoForwards;
    fromPartial(object: Partial<QueryPendingIbcAutoForwards>): QueryPendingIbcAutoForwards;
    fromAmino(object: QueryPendingIbcAutoForwardsAmino): QueryPendingIbcAutoForwards;
    toAmino(message: QueryPendingIbcAutoForwards): QueryPendingIbcAutoForwardsAmino;
    fromAminoMsg(object: QueryPendingIbcAutoForwardsAminoMsg): QueryPendingIbcAutoForwards;
    fromProtoMsg(message: QueryPendingIbcAutoForwardsProtoMsg): QueryPendingIbcAutoForwards;
    toProto(message: QueryPendingIbcAutoForwards): Uint8Array;
    toProtoMsg(message: QueryPendingIbcAutoForwards): QueryPendingIbcAutoForwardsProtoMsg;
};
export declare const QueryPendingIbcAutoForwardsResponse: {
    typeUrl: string;
    encode(message: QueryPendingIbcAutoForwardsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryPendingIbcAutoForwardsResponse;
    fromPartial(object: Partial<QueryPendingIbcAutoForwardsResponse>): QueryPendingIbcAutoForwardsResponse;
    fromAmino(object: QueryPendingIbcAutoForwardsResponseAmino): QueryPendingIbcAutoForwardsResponse;
    toAmino(message: QueryPendingIbcAutoForwardsResponse): QueryPendingIbcAutoForwardsResponseAmino;
    fromAminoMsg(object: QueryPendingIbcAutoForwardsResponseAminoMsg): QueryPendingIbcAutoForwardsResponse;
    fromProtoMsg(message: QueryPendingIbcAutoForwardsResponseProtoMsg): QueryPendingIbcAutoForwardsResponse;
    toProto(message: QueryPendingIbcAutoForwardsResponse): Uint8Array;
    toProtoMsg(message: QueryPendingIbcAutoForwardsResponse): QueryPendingIbcAutoForwardsResponseProtoMsg;
};
