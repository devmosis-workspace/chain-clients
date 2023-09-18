import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Valset, ValsetAmino, ValsetSDKType, LastClaimEvent, LastClaimEventAmino, LastClaimEventSDKType } from "./types";
import { MsgValsetConfirm, MsgValsetConfirmAmino, MsgValsetConfirmSDKType, MsgConfirmBatch, MsgConfirmBatchAmino, MsgConfirmBatchSDKType } from "./msgs";
import { BatchFees, BatchFeesAmino, BatchFeesSDKType } from "./pool";
import { OutgoingTxBatch, OutgoingTxBatchAmino, OutgoingTxBatchSDKType, OutgoingTransferTx, OutgoingTransferTxAmino, OutgoingTransferTxSDKType } from "./batch";
import { GenesisState, GenesisStateAmino, GenesisStateSDKType } from "./genesis";
import { BinaryWriter } from "../../../binary";
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryParamsRequest";
    value: Uint8Array;
}
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/injective.peggy.v1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
export interface QueryParamsRequestSDKType {
}
export interface QueryParamsResponse {
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryParamsResponse";
    value: Uint8Array;
}
export interface QueryParamsResponseAmino {
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/injective.peggy.v1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryCurrentValsetRequest {
}
export interface QueryCurrentValsetRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetRequest";
    value: Uint8Array;
}
export interface QueryCurrentValsetRequestAmino {
}
export interface QueryCurrentValsetRequestAminoMsg {
    type: "/injective.peggy.v1.QueryCurrentValsetRequest";
    value: QueryCurrentValsetRequestAmino;
}
export interface QueryCurrentValsetRequestSDKType {
}
export interface QueryCurrentValsetResponse {
    valset: Valset;
}
export interface QueryCurrentValsetResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryCurrentValsetResponse";
    value: Uint8Array;
}
export interface QueryCurrentValsetResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryCurrentValsetResponseAminoMsg {
    type: "/injective.peggy.v1.QueryCurrentValsetResponse";
    value: QueryCurrentValsetResponseAmino;
}
export interface QueryCurrentValsetResponseSDKType {
    valset: ValsetSDKType;
}
export interface QueryValsetRequestRequest {
    nonce: bigint;
}
export interface QueryValsetRequestRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestRequest";
    value: Uint8Array;
}
export interface QueryValsetRequestRequestAmino {
    nonce: string;
}
export interface QueryValsetRequestRequestAminoMsg {
    type: "/injective.peggy.v1.QueryValsetRequestRequest";
    value: QueryValsetRequestRequestAmino;
}
export interface QueryValsetRequestRequestSDKType {
    nonce: bigint;
}
export interface QueryValsetRequestResponse {
    valset: Valset;
}
export interface QueryValsetRequestResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryValsetRequestResponse";
    value: Uint8Array;
}
export interface QueryValsetRequestResponseAmino {
    valset?: ValsetAmino;
}
export interface QueryValsetRequestResponseAminoMsg {
    type: "/injective.peggy.v1.QueryValsetRequestResponse";
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
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmRequestAmino {
    nonce: string;
    address: string;
}
export interface QueryValsetConfirmRequestAminoMsg {
    type: "/injective.peggy.v1.QueryValsetConfirmRequest";
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
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmResponseAmino {
    confirm?: MsgValsetConfirmAmino;
}
export interface QueryValsetConfirmResponseAminoMsg {
    type: "/injective.peggy.v1.QueryValsetConfirmResponse";
    value: QueryValsetConfirmResponseAmino;
}
export interface QueryValsetConfirmResponseSDKType {
    confirm: MsgValsetConfirmSDKType;
}
export interface QueryValsetConfirmsByNonceRequest {
    nonce: bigint;
}
export interface QueryValsetConfirmsByNonceRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceRequestAmino {
    nonce: string;
}
export interface QueryValsetConfirmsByNonceRequestAminoMsg {
    type: "/injective.peggy.v1.QueryValsetConfirmsByNonceRequest";
    value: QueryValsetConfirmsByNonceRequestAmino;
}
export interface QueryValsetConfirmsByNonceRequestSDKType {
    nonce: bigint;
}
export interface QueryValsetConfirmsByNonceResponse {
    confirms: MsgValsetConfirm[];
}
export interface QueryValsetConfirmsByNonceResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
    value: Uint8Array;
}
export interface QueryValsetConfirmsByNonceResponseAmino {
    confirms: MsgValsetConfirmAmino[];
}
export interface QueryValsetConfirmsByNonceResponseAminoMsg {
    type: "/injective.peggy.v1.QueryValsetConfirmsByNonceResponse";
    value: QueryValsetConfirmsByNonceResponseAmino;
}
export interface QueryValsetConfirmsByNonceResponseSDKType {
    confirms: MsgValsetConfirmSDKType[];
}
export interface QueryLastValsetRequestsRequest {
}
export interface QueryLastValsetRequestsRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsRequestAmino {
}
export interface QueryLastValsetRequestsRequestAminoMsg {
    type: "/injective.peggy.v1.QueryLastValsetRequestsRequest";
    value: QueryLastValsetRequestsRequestAmino;
}
export interface QueryLastValsetRequestsRequestSDKType {
}
export interface QueryLastValsetRequestsResponse {
    valsets: Valset[];
}
export interface QueryLastValsetRequestsResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
    value: Uint8Array;
}
export interface QueryLastValsetRequestsResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastValsetRequestsResponseAminoMsg {
    type: "/injective.peggy.v1.QueryLastValsetRequestsResponse";
    value: QueryLastValsetRequestsResponseAmino;
}
export interface QueryLastValsetRequestsResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryLastPendingValsetRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrRequestAminoMsg {
    type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrRequest";
    value: QueryLastPendingValsetRequestByAddrRequestAmino;
}
export interface QueryLastPendingValsetRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingValsetRequestByAddrResponse {
    valsets: Valset[];
}
export interface QueryLastPendingValsetRequestByAddrResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingValsetRequestByAddrResponseAmino {
    valsets: ValsetAmino[];
}
export interface QueryLastPendingValsetRequestByAddrResponseAminoMsg {
    type: "/injective.peggy.v1.QueryLastPendingValsetRequestByAddrResponse";
    value: QueryLastPendingValsetRequestByAddrResponseAmino;
}
export interface QueryLastPendingValsetRequestByAddrResponseSDKType {
    valsets: ValsetSDKType[];
}
export interface QueryBatchFeeRequest {
}
export interface QueryBatchFeeRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeRequest";
    value: Uint8Array;
}
export interface QueryBatchFeeRequestAmino {
}
export interface QueryBatchFeeRequestAminoMsg {
    type: "/injective.peggy.v1.QueryBatchFeeRequest";
    value: QueryBatchFeeRequestAmino;
}
export interface QueryBatchFeeRequestSDKType {
}
export interface QueryBatchFeeResponse {
    batchFees: BatchFees[];
}
export interface QueryBatchFeeResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryBatchFeeResponse";
    value: Uint8Array;
}
export interface QueryBatchFeeResponseAmino {
    batchFees: BatchFeesAmino[];
}
export interface QueryBatchFeeResponseAminoMsg {
    type: "/injective.peggy.v1.QueryBatchFeeResponse";
    value: QueryBatchFeeResponseAmino;
}
export interface QueryBatchFeeResponseSDKType {
    batchFees: BatchFeesSDKType[];
}
export interface QueryLastPendingBatchRequestByAddrRequest {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrRequestAmino {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrRequestAminoMsg {
    type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrRequest";
    value: QueryLastPendingBatchRequestByAddrRequestAmino;
}
export interface QueryLastPendingBatchRequestByAddrRequestSDKType {
    address: string;
}
export interface QueryLastPendingBatchRequestByAddrResponse {
    batch: OutgoingTxBatch;
}
export interface QueryLastPendingBatchRequestByAddrResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastPendingBatchRequestByAddrResponseAmino {
    batch?: OutgoingTxBatchAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseAminoMsg {
    type: "/injective.peggy.v1.QueryLastPendingBatchRequestByAddrResponse";
    value: QueryLastPendingBatchRequestByAddrResponseAmino;
}
export interface QueryLastPendingBatchRequestByAddrResponseSDKType {
    batch: OutgoingTxBatchSDKType;
}
export interface QueryOutgoingTxBatchesRequest {
}
export interface QueryOutgoingTxBatchesRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesRequestAmino {
}
export interface QueryOutgoingTxBatchesRequestAminoMsg {
    type: "/injective.peggy.v1.QueryOutgoingTxBatchesRequest";
    value: QueryOutgoingTxBatchesRequestAmino;
}
export interface QueryOutgoingTxBatchesRequestSDKType {
}
export interface QueryOutgoingTxBatchesResponse {
    batches: OutgoingTxBatch[];
}
export interface QueryOutgoingTxBatchesResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
    value: Uint8Array;
}
export interface QueryOutgoingTxBatchesResponseAmino {
    batches: OutgoingTxBatchAmino[];
}
export interface QueryOutgoingTxBatchesResponseAminoMsg {
    type: "/injective.peggy.v1.QueryOutgoingTxBatchesResponse";
    value: QueryOutgoingTxBatchesResponseAmino;
}
export interface QueryOutgoingTxBatchesResponseSDKType {
    batches: OutgoingTxBatchSDKType[];
}
export interface QueryBatchRequestByNonceRequest {
    nonce: bigint;
    contractAddress: string;
}
export interface QueryBatchRequestByNonceRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchRequestByNonceRequestAminoMsg {
    type: "/injective.peggy.v1.QueryBatchRequestByNonceRequest";
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
    typeUrl: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
    value: Uint8Array;
}
export interface QueryBatchRequestByNonceResponseAmino {
    batch?: OutgoingTxBatchAmino;
}
export interface QueryBatchRequestByNonceResponseAminoMsg {
    type: "/injective.peggy.v1.QueryBatchRequestByNonceResponse";
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
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsRequest";
    value: Uint8Array;
}
export interface QueryBatchConfirmsRequestAmino {
    nonce: string;
    contract_address: string;
}
export interface QueryBatchConfirmsRequestAminoMsg {
    type: "/injective.peggy.v1.QueryBatchConfirmsRequest";
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
    typeUrl: "/injective.peggy.v1.QueryBatchConfirmsResponse";
    value: Uint8Array;
}
export interface QueryBatchConfirmsResponseAmino {
    confirms: MsgConfirmBatchAmino[];
}
export interface QueryBatchConfirmsResponseAminoMsg {
    type: "/injective.peggy.v1.QueryBatchConfirmsResponse";
    value: QueryBatchConfirmsResponseAmino;
}
export interface QueryBatchConfirmsResponseSDKType {
    confirms: MsgConfirmBatchSDKType[];
}
export interface QueryLastEventByAddrRequest {
    address: string;
}
export interface QueryLastEventByAddrRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrRequest";
    value: Uint8Array;
}
export interface QueryLastEventByAddrRequestAmino {
    address: string;
}
export interface QueryLastEventByAddrRequestAminoMsg {
    type: "/injective.peggy.v1.QueryLastEventByAddrRequest";
    value: QueryLastEventByAddrRequestAmino;
}
export interface QueryLastEventByAddrRequestSDKType {
    address: string;
}
export interface QueryLastEventByAddrResponse {
    lastClaimEvent: LastClaimEvent;
}
export interface QueryLastEventByAddrResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryLastEventByAddrResponse";
    value: Uint8Array;
}
export interface QueryLastEventByAddrResponseAmino {
    last_claim_event?: LastClaimEventAmino;
}
export interface QueryLastEventByAddrResponseAminoMsg {
    type: "/injective.peggy.v1.QueryLastEventByAddrResponse";
    value: QueryLastEventByAddrResponseAmino;
}
export interface QueryLastEventByAddrResponseSDKType {
    last_claim_event: LastClaimEventSDKType;
}
export interface QueryERC20ToDenomRequest {
    erc20: string;
}
export interface QueryERC20ToDenomRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomRequest";
    value: Uint8Array;
}
export interface QueryERC20ToDenomRequestAmino {
    erc20: string;
}
export interface QueryERC20ToDenomRequestAminoMsg {
    type: "/injective.peggy.v1.QueryERC20ToDenomRequest";
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
    typeUrl: "/injective.peggy.v1.QueryERC20ToDenomResponse";
    value: Uint8Array;
}
export interface QueryERC20ToDenomResponseAmino {
    denom: string;
    cosmos_originated: boolean;
}
export interface QueryERC20ToDenomResponseAminoMsg {
    type: "/injective.peggy.v1.QueryERC20ToDenomResponse";
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
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Request";
    value: Uint8Array;
}
export interface QueryDenomToERC20RequestAmino {
    denom: string;
}
export interface QueryDenomToERC20RequestAminoMsg {
    type: "/injective.peggy.v1.QueryDenomToERC20Request";
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
    typeUrl: "/injective.peggy.v1.QueryDenomToERC20Response";
    value: Uint8Array;
}
export interface QueryDenomToERC20ResponseAmino {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryDenomToERC20ResponseAminoMsg {
    type: "/injective.peggy.v1.QueryDenomToERC20Response";
    value: QueryDenomToERC20ResponseAmino;
}
export interface QueryDenomToERC20ResponseSDKType {
    erc20: string;
    cosmos_originated: boolean;
}
export interface QueryDelegateKeysByValidatorAddress {
    validatorAddress: string;
}
export interface QueryDelegateKeysByValidatorAddressProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressAmino {
    validator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddress";
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
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByValidatorAddressResponseAmino {
    eth_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByValidatorAddressResponseAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByValidatorAddressResponse";
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
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressAmino {
    eth_address: string;
}
export interface QueryDelegateKeysByEthAddressAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByEthAddress";
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
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByEthAddressResponseAmino {
    validator_address: string;
    orchestrator_address: string;
}
export interface QueryDelegateKeysByEthAddressResponseAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByEthAddressResponse";
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
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressAmino {
    orchestrator_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddress";
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
    typeUrl: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
    value: Uint8Array;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAmino {
    validator_address: string;
    eth_address: string;
}
export interface QueryDelegateKeysByOrchestratorAddressResponseAminoMsg {
    type: "/injective.peggy.v1.QueryDelegateKeysByOrchestratorAddressResponse";
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
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEth";
    value: Uint8Array;
}
export interface QueryPendingSendToEthAmino {
    sender_address: string;
}
export interface QueryPendingSendToEthAminoMsg {
    type: "/injective.peggy.v1.QueryPendingSendToEth";
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
    typeUrl: "/injective.peggy.v1.QueryPendingSendToEthResponse";
    value: Uint8Array;
}
export interface QueryPendingSendToEthResponseAmino {
    transfers_in_batches: OutgoingTransferTxAmino[];
    unbatched_transfers: OutgoingTransferTxAmino[];
}
export interface QueryPendingSendToEthResponseAminoMsg {
    type: "/injective.peggy.v1.QueryPendingSendToEthResponse";
    value: QueryPendingSendToEthResponseAmino;
}
export interface QueryPendingSendToEthResponseSDKType {
    transfers_in_batches: OutgoingTransferTxSDKType[];
    unbatched_transfers: OutgoingTransferTxSDKType[];
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 */
export interface QueryModuleStateRequest {
}
export interface QueryModuleStateRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryModuleStateRequest";
    value: Uint8Array;
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestAmino {
}
export interface QueryModuleStateRequestAminoMsg {
    type: "/injective.peggy.v1.QueryModuleStateRequest";
    value: QueryModuleStateRequestAmino;
}
/**
 * QueryModuleStateRequest is the request type for the Query/PeggyModuleState
 * RPC method.
 */
export interface QueryModuleStateRequestSDKType {
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponse {
    state: GenesisState;
}
export interface QueryModuleStateResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.QueryModuleStateResponse";
    value: Uint8Array;
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponseAmino {
    state?: GenesisStateAmino;
}
export interface QueryModuleStateResponseAminoMsg {
    type: "/injective.peggy.v1.QueryModuleStateResponse";
    value: QueryModuleStateResponseAmino;
}
/** QueryModuleStateResponse is the response type for the Query/PeggyModuleState RPC method. */
export interface QueryModuleStateResponseSDKType {
    state: GenesisStateSDKType;
}
export interface MissingNoncesRequest {
}
export interface MissingNoncesRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.MissingNoncesRequest";
    value: Uint8Array;
}
export interface MissingNoncesRequestAmino {
}
export interface MissingNoncesRequestAminoMsg {
    type: "/injective.peggy.v1.MissingNoncesRequest";
    value: MissingNoncesRequestAmino;
}
export interface MissingNoncesRequestSDKType {
}
export interface MissingNoncesResponse {
    operatorAddresses: string[];
}
export interface MissingNoncesResponseProtoMsg {
    typeUrl: "/injective.peggy.v1.MissingNoncesResponse";
    value: Uint8Array;
}
export interface MissingNoncesResponseAmino {
    operator_addresses: string[];
}
export interface MissingNoncesResponseAminoMsg {
    type: "/injective.peggy.v1.MissingNoncesResponse";
    value: MissingNoncesResponseAmino;
}
export interface MissingNoncesResponseSDKType {
    operator_addresses: string[];
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
export declare const QueryLastEventByAddrRequest: {
    typeUrl: string;
    encode(message: QueryLastEventByAddrRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastEventByAddrRequest;
    fromPartial(object: Partial<QueryLastEventByAddrRequest>): QueryLastEventByAddrRequest;
    fromAmino(object: QueryLastEventByAddrRequestAmino): QueryLastEventByAddrRequest;
    toAmino(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestAmino;
    fromAminoMsg(object: QueryLastEventByAddrRequestAminoMsg): QueryLastEventByAddrRequest;
    fromProtoMsg(message: QueryLastEventByAddrRequestProtoMsg): QueryLastEventByAddrRequest;
    toProto(message: QueryLastEventByAddrRequest): Uint8Array;
    toProtoMsg(message: QueryLastEventByAddrRequest): QueryLastEventByAddrRequestProtoMsg;
};
export declare const QueryLastEventByAddrResponse: {
    typeUrl: string;
    encode(message: QueryLastEventByAddrResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryLastEventByAddrResponse;
    fromPartial(object: Partial<QueryLastEventByAddrResponse>): QueryLastEventByAddrResponse;
    fromAmino(object: QueryLastEventByAddrResponseAmino): QueryLastEventByAddrResponse;
    toAmino(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseAmino;
    fromAminoMsg(object: QueryLastEventByAddrResponseAminoMsg): QueryLastEventByAddrResponse;
    fromProtoMsg(message: QueryLastEventByAddrResponseProtoMsg): QueryLastEventByAddrResponse;
    toProto(message: QueryLastEventByAddrResponse): Uint8Array;
    toProtoMsg(message: QueryLastEventByAddrResponse): QueryLastEventByAddrResponseProtoMsg;
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
export declare const QueryModuleStateRequest: {
    typeUrl: string;
    encode(_: QueryModuleStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryModuleStateRequest;
    fromPartial(_: Partial<QueryModuleStateRequest>): QueryModuleStateRequest;
    fromAmino(_: QueryModuleStateRequestAmino): QueryModuleStateRequest;
    toAmino(_: QueryModuleStateRequest): QueryModuleStateRequestAmino;
    fromAminoMsg(object: QueryModuleStateRequestAminoMsg): QueryModuleStateRequest;
    fromProtoMsg(message: QueryModuleStateRequestProtoMsg): QueryModuleStateRequest;
    toProto(message: QueryModuleStateRequest): Uint8Array;
    toProtoMsg(message: QueryModuleStateRequest): QueryModuleStateRequestProtoMsg;
};
export declare const QueryModuleStateResponse: {
    typeUrl: string;
    encode(message: QueryModuleStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryModuleStateResponse;
    fromPartial(object: Partial<QueryModuleStateResponse>): QueryModuleStateResponse;
    fromAmino(object: QueryModuleStateResponseAmino): QueryModuleStateResponse;
    toAmino(message: QueryModuleStateResponse): QueryModuleStateResponseAmino;
    fromAminoMsg(object: QueryModuleStateResponseAminoMsg): QueryModuleStateResponse;
    fromProtoMsg(message: QueryModuleStateResponseProtoMsg): QueryModuleStateResponse;
    toProto(message: QueryModuleStateResponse): Uint8Array;
    toProtoMsg(message: QueryModuleStateResponse): QueryModuleStateResponseProtoMsg;
};
export declare const MissingNoncesRequest: {
    typeUrl: string;
    encode(_: MissingNoncesRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MissingNoncesRequest;
    fromPartial(_: Partial<MissingNoncesRequest>): MissingNoncesRequest;
    fromAmino(_: MissingNoncesRequestAmino): MissingNoncesRequest;
    toAmino(_: MissingNoncesRequest): MissingNoncesRequestAmino;
    fromAminoMsg(object: MissingNoncesRequestAminoMsg): MissingNoncesRequest;
    fromProtoMsg(message: MissingNoncesRequestProtoMsg): MissingNoncesRequest;
    toProto(message: MissingNoncesRequest): Uint8Array;
    toProtoMsg(message: MissingNoncesRequest): MissingNoncesRequestProtoMsg;
};
export declare const MissingNoncesResponse: {
    typeUrl: string;
    encode(message: MissingNoncesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MissingNoncesResponse;
    fromPartial(object: Partial<MissingNoncesResponse>): MissingNoncesResponse;
    fromAmino(object: MissingNoncesResponseAmino): MissingNoncesResponse;
    toAmino(message: MissingNoncesResponse): MissingNoncesResponseAmino;
    fromAminoMsg(object: MissingNoncesResponseAminoMsg): MissingNoncesResponse;
    fromProtoMsg(message: MissingNoncesResponseProtoMsg): MissingNoncesResponse;
    toProto(message: MissingNoncesResponse): Uint8Array;
    toProtoMsg(message: MissingNoncesResponse): MissingNoncesResponseProtoMsg;
};
