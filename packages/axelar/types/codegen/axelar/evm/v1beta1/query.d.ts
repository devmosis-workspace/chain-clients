import { BatchedCommandsStatus, DepositStatus, Event, EventAmino, EventSDKType, BurnerInfo, BurnerInfoAmino, BurnerInfoSDKType, TokenDetails, TokenDetailsAmino, TokenDetailsSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare const ChainStatusSDKType: typeof ChainStatus;
export declare const ChainStatusAmino: typeof ChainStatus;
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare const TokenTypeSDKType: typeof TokenType;
export declare const TokenTypeAmino: typeof TokenType;
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParams {
    address: string;
    asset: string;
    chain: string;
}
export interface DepositQueryParamsProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.DepositQueryParams";
    value: Uint8Array;
}
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParamsAmino {
    address: string;
    asset: string;
    chain: string;
}
export interface DepositQueryParamsAminoMsg {
    type: "/axelar.evm.v1beta1.DepositQueryParams";
    value: DepositQueryParamsAmino;
}
/**
 * DepositQueryParams describe the parameters used to query for an EVM
 * deposit address
 */
export interface DepositQueryParamsSDKType {
    address: string;
    asset: string;
    chain: string;
}
export interface BatchedCommandsRequest {
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BatchedCommandsRequest";
    value: Uint8Array;
}
export interface BatchedCommandsRequestAmino {
    chain: string;
    /**
     * id defines an optional id for the commandsbatch. If not specified the
     * latest will be returned
     */
    id: string;
}
export interface BatchedCommandsRequestAminoMsg {
    type: "/axelar.evm.v1beta1.BatchedCommandsRequest";
    value: BatchedCommandsRequestAmino;
}
export interface BatchedCommandsRequestSDKType {
    chain: string;
    id: string;
}
export interface BatchedCommandsResponse {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    keyId: string;
    executeData: string;
    prevBatchedCommandsId: string;
    commandIds: string[];
    proof: Proof;
}
export interface BatchedCommandsResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BatchedCommandsResponse";
    value: Uint8Array;
}
export interface BatchedCommandsResponseAmino {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    key_id: string;
    execute_data: string;
    prev_batched_commands_id: string;
    command_ids: string[];
    proof?: ProofAmino;
}
export interface BatchedCommandsResponseAminoMsg {
    type: "/axelar.evm.v1beta1.BatchedCommandsResponse";
    value: BatchedCommandsResponseAmino;
}
export interface BatchedCommandsResponseSDKType {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    key_id: string;
    execute_data: string;
    prev_batched_commands_id: string;
    command_ids: string[];
    proof: ProofSDKType;
}
export interface KeyAddressRequest {
    chain: string;
    keyId: string;
}
export interface KeyAddressRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.KeyAddressRequest";
    value: Uint8Array;
}
export interface KeyAddressRequestAmino {
    chain: string;
    key_id: string;
}
export interface KeyAddressRequestAminoMsg {
    type: "/axelar.evm.v1beta1.KeyAddressRequest";
    value: KeyAddressRequestAmino;
}
export interface KeyAddressRequestSDKType {
    chain: string;
    key_id: string;
}
export interface KeyAddressResponse {
    keyId: string;
    addresses: KeyAddressResponse_WeightedAddress[];
    threshold: string;
}
export interface KeyAddressResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.KeyAddressResponse";
    value: Uint8Array;
}
export interface KeyAddressResponseAmino {
    key_id: string;
    addresses: KeyAddressResponse_WeightedAddressAmino[];
    threshold: string;
}
export interface KeyAddressResponseAminoMsg {
    type: "/axelar.evm.v1beta1.KeyAddressResponse";
    value: KeyAddressResponseAmino;
}
export interface KeyAddressResponseSDKType {
    key_id: string;
    addresses: KeyAddressResponse_WeightedAddressSDKType[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    address: string;
    weight: string;
}
export interface KeyAddressResponse_WeightedAddressProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.WeightedAddress";
    value: Uint8Array;
}
export interface KeyAddressResponse_WeightedAddressAmino {
    address: string;
    weight: string;
}
export interface KeyAddressResponse_WeightedAddressAminoMsg {
    type: "/axelar.evm.v1beta1.WeightedAddress";
    value: KeyAddressResponse_WeightedAddressAmino;
}
export interface KeyAddressResponse_WeightedAddressSDKType {
    address: string;
    weight: string;
}
/** @deprecated */
export interface QueryTokenAddressResponse {
    address: string;
    confirmed: boolean;
}
export interface QueryTokenAddressResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.QueryTokenAddressResponse";
    value: Uint8Array;
}
/** @deprecated */
export interface QueryTokenAddressResponseAmino {
    address: string;
    confirmed: boolean;
}
export interface QueryTokenAddressResponseAminoMsg {
    type: "/axelar.evm.v1beta1.QueryTokenAddressResponse";
    value: QueryTokenAddressResponseAmino;
}
/** @deprecated */
export interface QueryTokenAddressResponseSDKType {
    address: string;
    confirmed: boolean;
}
/** @deprecated */
export interface QueryDepositStateParams {
    txId: Uint8Array;
    burnerAddress: Uint8Array;
}
export interface QueryDepositStateParamsProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.QueryDepositStateParams";
    value: Uint8Array;
}
/** @deprecated */
export interface QueryDepositStateParamsAmino {
    tx_id: Uint8Array;
    burner_address: Uint8Array;
}
export interface QueryDepositStateParamsAminoMsg {
    type: "/axelar.evm.v1beta1.QueryDepositStateParams";
    value: QueryDepositStateParamsAmino;
}
/** @deprecated */
export interface QueryDepositStateParamsSDKType {
    tx_id: Uint8Array;
    burner_address: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequest {
    chain: string;
    params: QueryDepositStateParams;
}
export interface DepositStateRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.DepositStateRequest";
    value: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequestAmino {
    chain: string;
    params?: QueryDepositStateParamsAmino;
}
export interface DepositStateRequestAminoMsg {
    type: "/axelar.evm.v1beta1.DepositStateRequest";
    value: DepositStateRequestAmino;
}
/** @deprecated */
export interface DepositStateRequestSDKType {
    chain: string;
    params: QueryDepositStateParamsSDKType;
}
/** @deprecated */
export interface DepositStateResponse {
    status: DepositStatus;
}
export interface DepositStateResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.DepositStateResponse";
    value: Uint8Array;
}
/** @deprecated */
export interface DepositStateResponseAmino {
    status: DepositStatus;
}
export interface DepositStateResponseAminoMsg {
    type: "/axelar.evm.v1beta1.DepositStateResponse";
    value: DepositStateResponseAmino;
}
/** @deprecated */
export interface DepositStateResponseSDKType {
    status: DepositStatus;
}
export interface EventRequest {
    chain: string;
    eventId: string;
}
export interface EventRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventRequest";
    value: Uint8Array;
}
export interface EventRequestAmino {
    chain: string;
    event_id: string;
}
export interface EventRequestAminoMsg {
    type: "/axelar.evm.v1beta1.EventRequest";
    value: EventRequestAmino;
}
export interface EventRequestSDKType {
    chain: string;
    event_id: string;
}
export interface EventResponse {
    event: Event;
}
export interface EventResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EventResponse";
    value: Uint8Array;
}
export interface EventResponseAmino {
    event?: EventAmino;
}
export interface EventResponseAminoMsg {
    type: "/axelar.evm.v1beta1.EventResponse";
    value: EventResponseAmino;
}
export interface EventResponseSDKType {
    event: EventSDKType;
}
export interface QueryBurnerAddressResponse {
    address: string;
}
export interface QueryBurnerAddressResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.QueryBurnerAddressResponse";
    value: Uint8Array;
}
export interface QueryBurnerAddressResponseAmino {
    address: string;
}
export interface QueryBurnerAddressResponseAminoMsg {
    type: "/axelar.evm.v1beta1.QueryBurnerAddressResponse";
    value: QueryBurnerAddressResponseAmino;
}
export interface QueryBurnerAddressResponseSDKType {
    address: string;
}
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ChainsRequest";
    value: Uint8Array;
}
export interface ChainsRequestAmino {
    status: ChainStatus;
}
export interface ChainsRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ChainsRequest";
    value: ChainsRequestAmino;
}
export interface ChainsRequestSDKType {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
export interface ChainsResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ChainsResponse";
    value: Uint8Array;
}
export interface ChainsResponseAmino {
    chains: string[];
}
export interface ChainsResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ChainsResponse";
    value: ChainsResponseAmino;
}
export interface ChainsResponseSDKType {
    chains: string[];
}
export interface CommandRequest {
    chain: string;
    id: string;
}
export interface CommandRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CommandRequest";
    value: Uint8Array;
}
export interface CommandRequestAmino {
    chain: string;
    id: string;
}
export interface CommandRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CommandRequest";
    value: CommandRequestAmino;
}
export interface CommandRequestSDKType {
    chain: string;
    id: string;
}
export interface CommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface CommandResponse_ParamsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface CommandResponse_ParamsEntryAmino {
    key: string;
    value: string;
}
export interface CommandResponse_ParamsEntryAminoMsg {
    type: string;
    value: CommandResponse_ParamsEntryAmino;
}
export interface CommandResponse_ParamsEntrySDKType {
    key: string;
    value: string;
}
export interface CommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface CommandResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CommandResponse";
    value: Uint8Array;
}
export interface CommandResponseAmino {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    key_id: string;
    max_gas_cost: number;
}
export interface CommandResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CommandResponse";
    value: CommandResponseAmino;
}
export interface CommandResponseSDKType {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    key_id: string;
    max_gas_cost: number;
}
export interface PendingCommandsRequest {
    chain: string;
}
export interface PendingCommandsRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PendingCommandsRequest";
    value: Uint8Array;
}
export interface PendingCommandsRequestAmino {
    chain: string;
}
export interface PendingCommandsRequestAminoMsg {
    type: "/axelar.evm.v1beta1.PendingCommandsRequest";
    value: PendingCommandsRequestAmino;
}
export interface PendingCommandsRequestSDKType {
    chain: string;
}
export interface PendingCommandsResponse {
    commands: QueryCommandResponse[];
}
export interface PendingCommandsResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PendingCommandsResponse";
    value: Uint8Array;
}
export interface PendingCommandsResponseAmino {
    commands: QueryCommandResponseAmino[];
}
export interface PendingCommandsResponseAminoMsg {
    type: "/axelar.evm.v1beta1.PendingCommandsResponse";
    value: PendingCommandsResponseAmino;
}
export interface PendingCommandsResponseSDKType {
    commands: QueryCommandResponseSDKType[];
}
export interface QueryCommandResponse_ParamsEntry {
    key: string;
    value: string;
}
export interface QueryCommandResponse_ParamsEntryProtoMsg {
    typeUrl: string;
    value: Uint8Array;
}
export interface QueryCommandResponse_ParamsEntryAmino {
    key: string;
    value: string;
}
export interface QueryCommandResponse_ParamsEntryAminoMsg {
    type: string;
    value: QueryCommandResponse_ParamsEntryAmino;
}
export interface QueryCommandResponse_ParamsEntrySDKType {
    key: string;
    value: string;
}
export interface QueryCommandResponse {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    keyId: string;
    maxGasCost: number;
}
export interface QueryCommandResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.QueryCommandResponse";
    value: Uint8Array;
}
export interface QueryCommandResponseAmino {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    key_id: string;
    max_gas_cost: number;
}
export interface QueryCommandResponseAminoMsg {
    type: "/axelar.evm.v1beta1.QueryCommandResponse";
    value: QueryCommandResponseAmino;
}
export interface QueryCommandResponseSDKType {
    id: string;
    type: string;
    params: {
        [key: string]: string;
    };
    key_id: string;
    max_gas_cost: number;
}
export interface BurnerInfoRequest {
    address: Uint8Array;
}
export interface BurnerInfoRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfoRequest";
    value: Uint8Array;
}
export interface BurnerInfoRequestAmino {
    address: Uint8Array;
}
export interface BurnerInfoRequestAminoMsg {
    type: "/axelar.evm.v1beta1.BurnerInfoRequest";
    value: BurnerInfoRequestAmino;
}
export interface BurnerInfoRequestSDKType {
    address: Uint8Array;
}
export interface BurnerInfoResponse {
    chain: string;
    burnerInfo: BurnerInfo;
}
export interface BurnerInfoResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfoResponse";
    value: Uint8Array;
}
export interface BurnerInfoResponseAmino {
    chain: string;
    burner_info?: BurnerInfoAmino;
}
export interface BurnerInfoResponseAminoMsg {
    type: "/axelar.evm.v1beta1.BurnerInfoResponse";
    value: BurnerInfoResponseAmino;
}
export interface BurnerInfoResponseSDKType {
    chain: string;
    burner_info: BurnerInfoSDKType;
}
export interface ConfirmationHeightRequest {
    chain: string;
}
export interface ConfirmationHeightRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightRequest";
    value: Uint8Array;
}
export interface ConfirmationHeightRequestAmino {
    chain: string;
}
export interface ConfirmationHeightRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmationHeightRequest";
    value: ConfirmationHeightRequestAmino;
}
export interface ConfirmationHeightRequestSDKType {
    chain: string;
}
export interface ConfirmationHeightResponse {
    height: bigint;
}
export interface ConfirmationHeightResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmationHeightResponse";
    value: Uint8Array;
}
export interface ConfirmationHeightResponseAmino {
    height: string;
}
export interface ConfirmationHeightResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmationHeightResponse";
    value: ConfirmationHeightResponseAmino;
}
export interface ConfirmationHeightResponseSDKType {
    height: bigint;
}
export interface GatewayAddressRequest {
    chain: string;
}
export interface GatewayAddressRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.GatewayAddressRequest";
    value: Uint8Array;
}
export interface GatewayAddressRequestAmino {
    chain: string;
}
export interface GatewayAddressRequestAminoMsg {
    type: "/axelar.evm.v1beta1.GatewayAddressRequest";
    value: GatewayAddressRequestAmino;
}
export interface GatewayAddressRequestSDKType {
    chain: string;
}
export interface GatewayAddressResponse {
    address: string;
}
export interface GatewayAddressResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.GatewayAddressResponse";
    value: Uint8Array;
}
export interface GatewayAddressResponseAmino {
    address: string;
}
export interface GatewayAddressResponseAminoMsg {
    type: "/axelar.evm.v1beta1.GatewayAddressResponse";
    value: GatewayAddressResponseAmino;
}
export interface GatewayAddressResponseSDKType {
    address: string;
}
export interface BytecodeRequest {
    chain: string;
    contract: string;
}
export interface BytecodeRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BytecodeRequest";
    value: Uint8Array;
}
export interface BytecodeRequestAmino {
    chain: string;
    contract: string;
}
export interface BytecodeRequestAminoMsg {
    type: "/axelar.evm.v1beta1.BytecodeRequest";
    value: BytecodeRequestAmino;
}
export interface BytecodeRequestSDKType {
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    bytecode: string;
}
export interface BytecodeResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BytecodeResponse";
    value: Uint8Array;
}
export interface BytecodeResponseAmino {
    bytecode: string;
}
export interface BytecodeResponseAminoMsg {
    type: "/axelar.evm.v1beta1.BytecodeResponse";
    value: BytecodeResponseAmino;
}
export interface BytecodeResponseSDKType {
    bytecode: string;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequest {
    chain: string;
    type: TokenType;
}
export interface ERC20TokensRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokensRequest";
    value: Uint8Array;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequestAmino {
    chain: string;
    type: TokenType;
}
export interface ERC20TokensRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ERC20TokensRequest";
    value: ERC20TokensRequestAmino;
}
/**
 * ERC20TokensRequest describes the chain for which the type of ERC20 tokens are
 * requested.
 */
export interface ERC20TokensRequestSDKType {
    chain: string;
    type: TokenType;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponse {
    tokens: ERC20TokensResponse_Token[];
}
export interface ERC20TokensResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokensResponse";
    value: Uint8Array;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponseAmino {
    tokens: ERC20TokensResponse_TokenAmino[];
}
export interface ERC20TokensResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ERC20TokensResponse";
    value: ERC20TokensResponseAmino;
}
/**
 * ERC20TokensResponse describes the asset and symbol for all
 * ERC20 tokens requested for a chain
 */
export interface ERC20TokensResponseSDKType {
    tokens: ERC20TokensResponse_TokenSDKType[];
}
export interface ERC20TokensResponse_Token {
    asset: string;
    symbol: string;
}
export interface ERC20TokensResponse_TokenProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Token";
    value: Uint8Array;
}
export interface ERC20TokensResponse_TokenAmino {
    asset: string;
    symbol: string;
}
export interface ERC20TokensResponse_TokenAminoMsg {
    type: "/axelar.evm.v1beta1.Token";
    value: ERC20TokensResponse_TokenAmino;
}
export interface ERC20TokensResponse_TokenSDKType {
    asset: string;
    symbol: string;
}
export interface TokenInfoRequest {
    chain: string;
    asset?: string;
    symbol?: string;
    address?: string;
}
export interface TokenInfoRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TokenInfoRequest";
    value: Uint8Array;
}
export interface TokenInfoRequestAmino {
    chain: string;
    asset?: string;
    symbol?: string;
    address?: string;
}
export interface TokenInfoRequestAminoMsg {
    type: "/axelar.evm.v1beta1.TokenInfoRequest";
    value: TokenInfoRequestAmino;
}
export interface TokenInfoRequestSDKType {
    chain: string;
    asset?: string;
    symbol?: string;
    address?: string;
}
export interface TokenInfoResponse {
    asset: string;
    details: TokenDetails;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface TokenInfoResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TokenInfoResponse";
    value: Uint8Array;
}
export interface TokenInfoResponseAmino {
    asset: string;
    details?: TokenDetailsAmino;
    address: string;
    confirmed: boolean;
    is_external: boolean;
    burner_code_hash: string;
}
export interface TokenInfoResponseAminoMsg {
    type: "/axelar.evm.v1beta1.TokenInfoResponse";
    value: TokenInfoResponseAmino;
}
export interface TokenInfoResponseSDKType {
    asset: string;
    details: TokenDetailsSDKType;
    address: string;
    confirmed: boolean;
    is_external: boolean;
    burner_code_hash: string;
}
export interface Proof {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export interface ProofProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.Proof";
    value: Uint8Array;
}
export interface ProofAmino {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export interface ProofAminoMsg {
    type: "/axelar.evm.v1beta1.Proof";
    value: ProofAmino;
}
export interface ProofSDKType {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export declare const DepositQueryParams: {
    typeUrl: string;
    encode(message: DepositQueryParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositQueryParams;
    fromPartial(object: Partial<DepositQueryParams>): DepositQueryParams;
    fromAmino(object: DepositQueryParamsAmino): DepositQueryParams;
    toAmino(message: DepositQueryParams): DepositQueryParamsAmino;
    fromAminoMsg(object: DepositQueryParamsAminoMsg): DepositQueryParams;
    fromProtoMsg(message: DepositQueryParamsProtoMsg): DepositQueryParams;
    toProto(message: DepositQueryParams): Uint8Array;
    toProtoMsg(message: DepositQueryParams): DepositQueryParamsProtoMsg;
};
export declare const BatchedCommandsRequest: {
    typeUrl: string;
    encode(message: BatchedCommandsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchedCommandsRequest;
    fromPartial(object: Partial<BatchedCommandsRequest>): BatchedCommandsRequest;
    fromAmino(object: BatchedCommandsRequestAmino): BatchedCommandsRequest;
    toAmino(message: BatchedCommandsRequest): BatchedCommandsRequestAmino;
    fromAminoMsg(object: BatchedCommandsRequestAminoMsg): BatchedCommandsRequest;
    fromProtoMsg(message: BatchedCommandsRequestProtoMsg): BatchedCommandsRequest;
    toProto(message: BatchedCommandsRequest): Uint8Array;
    toProtoMsg(message: BatchedCommandsRequest): BatchedCommandsRequestProtoMsg;
};
export declare const BatchedCommandsResponse: {
    typeUrl: string;
    encode(message: BatchedCommandsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BatchedCommandsResponse;
    fromPartial(object: Partial<BatchedCommandsResponse>): BatchedCommandsResponse;
    fromAmino(object: BatchedCommandsResponseAmino): BatchedCommandsResponse;
    toAmino(message: BatchedCommandsResponse): BatchedCommandsResponseAmino;
    fromAminoMsg(object: BatchedCommandsResponseAminoMsg): BatchedCommandsResponse;
    fromProtoMsg(message: BatchedCommandsResponseProtoMsg): BatchedCommandsResponse;
    toProto(message: BatchedCommandsResponse): Uint8Array;
    toProtoMsg(message: BatchedCommandsResponse): BatchedCommandsResponseProtoMsg;
};
export declare const KeyAddressRequest: {
    typeUrl: string;
    encode(message: KeyAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyAddressRequest;
    fromPartial(object: Partial<KeyAddressRequest>): KeyAddressRequest;
    fromAmino(object: KeyAddressRequestAmino): KeyAddressRequest;
    toAmino(message: KeyAddressRequest): KeyAddressRequestAmino;
    fromAminoMsg(object: KeyAddressRequestAminoMsg): KeyAddressRequest;
    fromProtoMsg(message: KeyAddressRequestProtoMsg): KeyAddressRequest;
    toProto(message: KeyAddressRequest): Uint8Array;
    toProtoMsg(message: KeyAddressRequest): KeyAddressRequestProtoMsg;
};
export declare const KeyAddressResponse: {
    typeUrl: string;
    encode(message: KeyAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyAddressResponse;
    fromPartial(object: Partial<KeyAddressResponse>): KeyAddressResponse;
    fromAmino(object: KeyAddressResponseAmino): KeyAddressResponse;
    toAmino(message: KeyAddressResponse): KeyAddressResponseAmino;
    fromAminoMsg(object: KeyAddressResponseAminoMsg): KeyAddressResponse;
    fromProtoMsg(message: KeyAddressResponseProtoMsg): KeyAddressResponse;
    toProto(message: KeyAddressResponse): Uint8Array;
    toProtoMsg(message: KeyAddressResponse): KeyAddressResponseProtoMsg;
};
export declare const KeyAddressResponse_WeightedAddress: {
    typeUrl: string;
    encode(message: KeyAddressResponse_WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    fromPartial(object: Partial<KeyAddressResponse_WeightedAddress>): KeyAddressResponse_WeightedAddress;
    fromAmino(object: KeyAddressResponse_WeightedAddressAmino): KeyAddressResponse_WeightedAddress;
    toAmino(message: KeyAddressResponse_WeightedAddress): KeyAddressResponse_WeightedAddressAmino;
    fromAminoMsg(object: KeyAddressResponse_WeightedAddressAminoMsg): KeyAddressResponse_WeightedAddress;
    fromProtoMsg(message: KeyAddressResponse_WeightedAddressProtoMsg): KeyAddressResponse_WeightedAddress;
    toProto(message: KeyAddressResponse_WeightedAddress): Uint8Array;
    toProtoMsg(message: KeyAddressResponse_WeightedAddress): KeyAddressResponse_WeightedAddressProtoMsg;
};
export declare const QueryTokenAddressResponse: {
    typeUrl: string;
    encode(message: QueryTokenAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTokenAddressResponse;
    fromPartial(object: Partial<QueryTokenAddressResponse>): QueryTokenAddressResponse;
    fromAmino(object: QueryTokenAddressResponseAmino): QueryTokenAddressResponse;
    toAmino(message: QueryTokenAddressResponse): QueryTokenAddressResponseAmino;
    fromAminoMsg(object: QueryTokenAddressResponseAminoMsg): QueryTokenAddressResponse;
    fromProtoMsg(message: QueryTokenAddressResponseProtoMsg): QueryTokenAddressResponse;
    toProto(message: QueryTokenAddressResponse): Uint8Array;
    toProtoMsg(message: QueryTokenAddressResponse): QueryTokenAddressResponseProtoMsg;
};
export declare const QueryDepositStateParams: {
    typeUrl: string;
    encode(message: QueryDepositStateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryDepositStateParams;
    fromPartial(object: Partial<QueryDepositStateParams>): QueryDepositStateParams;
    fromAmino(object: QueryDepositStateParamsAmino): QueryDepositStateParams;
    toAmino(message: QueryDepositStateParams): QueryDepositStateParamsAmino;
    fromAminoMsg(object: QueryDepositStateParamsAminoMsg): QueryDepositStateParams;
    fromProtoMsg(message: QueryDepositStateParamsProtoMsg): QueryDepositStateParams;
    toProto(message: QueryDepositStateParams): Uint8Array;
    toProtoMsg(message: QueryDepositStateParams): QueryDepositStateParamsProtoMsg;
};
export declare const DepositStateRequest: {
    typeUrl: string;
    encode(message: DepositStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositStateRequest;
    fromPartial(object: Partial<DepositStateRequest>): DepositStateRequest;
    fromAmino(object: DepositStateRequestAmino): DepositStateRequest;
    toAmino(message: DepositStateRequest): DepositStateRequestAmino;
    fromAminoMsg(object: DepositStateRequestAminoMsg): DepositStateRequest;
    fromProtoMsg(message: DepositStateRequestProtoMsg): DepositStateRequest;
    toProto(message: DepositStateRequest): Uint8Array;
    toProtoMsg(message: DepositStateRequest): DepositStateRequestProtoMsg;
};
export declare const DepositStateResponse: {
    typeUrl: string;
    encode(message: DepositStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositStateResponse;
    fromPartial(object: Partial<DepositStateResponse>): DepositStateResponse;
    fromAmino(object: DepositStateResponseAmino): DepositStateResponse;
    toAmino(message: DepositStateResponse): DepositStateResponseAmino;
    fromAminoMsg(object: DepositStateResponseAminoMsg): DepositStateResponse;
    fromProtoMsg(message: DepositStateResponseProtoMsg): DepositStateResponse;
    toProto(message: DepositStateResponse): Uint8Array;
    toProtoMsg(message: DepositStateResponse): DepositStateResponseProtoMsg;
};
export declare const EventRequest: {
    typeUrl: string;
    encode(message: EventRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventRequest;
    fromPartial(object: Partial<EventRequest>): EventRequest;
    fromAmino(object: EventRequestAmino): EventRequest;
    toAmino(message: EventRequest): EventRequestAmino;
    fromAminoMsg(object: EventRequestAminoMsg): EventRequest;
    fromProtoMsg(message: EventRequestProtoMsg): EventRequest;
    toProto(message: EventRequest): Uint8Array;
    toProtoMsg(message: EventRequest): EventRequestProtoMsg;
};
export declare const EventResponse: {
    typeUrl: string;
    encode(message: EventResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventResponse;
    fromPartial(object: Partial<EventResponse>): EventResponse;
    fromAmino(object: EventResponseAmino): EventResponse;
    toAmino(message: EventResponse): EventResponseAmino;
    fromAminoMsg(object: EventResponseAminoMsg): EventResponse;
    fromProtoMsg(message: EventResponseProtoMsg): EventResponse;
    toProto(message: EventResponse): Uint8Array;
    toProtoMsg(message: EventResponse): EventResponseProtoMsg;
};
export declare const QueryBurnerAddressResponse: {
    typeUrl: string;
    encode(message: QueryBurnerAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryBurnerAddressResponse;
    fromPartial(object: Partial<QueryBurnerAddressResponse>): QueryBurnerAddressResponse;
    fromAmino(object: QueryBurnerAddressResponseAmino): QueryBurnerAddressResponse;
    toAmino(message: QueryBurnerAddressResponse): QueryBurnerAddressResponseAmino;
    fromAminoMsg(object: QueryBurnerAddressResponseAminoMsg): QueryBurnerAddressResponse;
    fromProtoMsg(message: QueryBurnerAddressResponseProtoMsg): QueryBurnerAddressResponse;
    toProto(message: QueryBurnerAddressResponse): Uint8Array;
    toProtoMsg(message: QueryBurnerAddressResponse): QueryBurnerAddressResponseProtoMsg;
};
export declare const ChainsRequest: {
    typeUrl: string;
    encode(message: ChainsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainsRequest;
    fromPartial(object: Partial<ChainsRequest>): ChainsRequest;
    fromAmino(object: ChainsRequestAmino): ChainsRequest;
    toAmino(message: ChainsRequest): ChainsRequestAmino;
    fromAminoMsg(object: ChainsRequestAminoMsg): ChainsRequest;
    fromProtoMsg(message: ChainsRequestProtoMsg): ChainsRequest;
    toProto(message: ChainsRequest): Uint8Array;
    toProtoMsg(message: ChainsRequest): ChainsRequestProtoMsg;
};
export declare const ChainsResponse: {
    typeUrl: string;
    encode(message: ChainsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainsResponse;
    fromPartial(object: Partial<ChainsResponse>): ChainsResponse;
    fromAmino(object: ChainsResponseAmino): ChainsResponse;
    toAmino(message: ChainsResponse): ChainsResponseAmino;
    fromAminoMsg(object: ChainsResponseAminoMsg): ChainsResponse;
    fromProtoMsg(message: ChainsResponseProtoMsg): ChainsResponse;
    toProto(message: ChainsResponse): Uint8Array;
    toProtoMsg(message: ChainsResponse): ChainsResponseProtoMsg;
};
export declare const CommandRequest: {
    typeUrl: string;
    encode(message: CommandRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandRequest;
    fromPartial(object: Partial<CommandRequest>): CommandRequest;
    fromAmino(object: CommandRequestAmino): CommandRequest;
    toAmino(message: CommandRequest): CommandRequestAmino;
    fromAminoMsg(object: CommandRequestAminoMsg): CommandRequest;
    fromProtoMsg(message: CommandRequestProtoMsg): CommandRequest;
    toProto(message: CommandRequest): Uint8Array;
    toProtoMsg(message: CommandRequest): CommandRequestProtoMsg;
};
export declare const CommandResponse_ParamsEntry: {
    encode(message: CommandResponse_ParamsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandResponse_ParamsEntry;
    fromPartial(object: Partial<CommandResponse_ParamsEntry>): CommandResponse_ParamsEntry;
    fromAmino(object: CommandResponse_ParamsEntryAmino): CommandResponse_ParamsEntry;
    toAmino(message: CommandResponse_ParamsEntry): CommandResponse_ParamsEntryAmino;
    fromAminoMsg(object: CommandResponse_ParamsEntryAminoMsg): CommandResponse_ParamsEntry;
    fromProtoMsg(message: CommandResponse_ParamsEntryProtoMsg): CommandResponse_ParamsEntry;
    toProto(message: CommandResponse_ParamsEntry): Uint8Array;
};
export declare const CommandResponse: {
    typeUrl: string;
    encode(message: CommandResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandResponse;
    fromPartial(object: Partial<CommandResponse>): CommandResponse;
    fromAmino(object: CommandResponseAmino): CommandResponse;
    toAmino(message: CommandResponse): CommandResponseAmino;
    fromAminoMsg(object: CommandResponseAminoMsg): CommandResponse;
    fromProtoMsg(message: CommandResponseProtoMsg): CommandResponse;
    toProto(message: CommandResponse): Uint8Array;
    toProtoMsg(message: CommandResponse): CommandResponseProtoMsg;
};
export declare const PendingCommandsRequest: {
    typeUrl: string;
    encode(message: PendingCommandsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingCommandsRequest;
    fromPartial(object: Partial<PendingCommandsRequest>): PendingCommandsRequest;
    fromAmino(object: PendingCommandsRequestAmino): PendingCommandsRequest;
    toAmino(message: PendingCommandsRequest): PendingCommandsRequestAmino;
    fromAminoMsg(object: PendingCommandsRequestAminoMsg): PendingCommandsRequest;
    fromProtoMsg(message: PendingCommandsRequestProtoMsg): PendingCommandsRequest;
    toProto(message: PendingCommandsRequest): Uint8Array;
    toProtoMsg(message: PendingCommandsRequest): PendingCommandsRequestProtoMsg;
};
export declare const PendingCommandsResponse: {
    typeUrl: string;
    encode(message: PendingCommandsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PendingCommandsResponse;
    fromPartial(object: Partial<PendingCommandsResponse>): PendingCommandsResponse;
    fromAmino(object: PendingCommandsResponseAmino): PendingCommandsResponse;
    toAmino(message: PendingCommandsResponse): PendingCommandsResponseAmino;
    fromAminoMsg(object: PendingCommandsResponseAminoMsg): PendingCommandsResponse;
    fromProtoMsg(message: PendingCommandsResponseProtoMsg): PendingCommandsResponse;
    toProto(message: PendingCommandsResponse): Uint8Array;
    toProtoMsg(message: PendingCommandsResponse): PendingCommandsResponseProtoMsg;
};
export declare const QueryCommandResponse_ParamsEntry: {
    encode(message: QueryCommandResponse_ParamsEntry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    fromPartial(object: Partial<QueryCommandResponse_ParamsEntry>): QueryCommandResponse_ParamsEntry;
    fromAmino(object: QueryCommandResponse_ParamsEntryAmino): QueryCommandResponse_ParamsEntry;
    toAmino(message: QueryCommandResponse_ParamsEntry): QueryCommandResponse_ParamsEntryAmino;
    fromAminoMsg(object: QueryCommandResponse_ParamsEntryAminoMsg): QueryCommandResponse_ParamsEntry;
    fromProtoMsg(message: QueryCommandResponse_ParamsEntryProtoMsg): QueryCommandResponse_ParamsEntry;
    toProto(message: QueryCommandResponse_ParamsEntry): Uint8Array;
};
export declare const QueryCommandResponse: {
    typeUrl: string;
    encode(message: QueryCommandResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCommandResponse;
    fromPartial(object: Partial<QueryCommandResponse>): QueryCommandResponse;
    fromAmino(object: QueryCommandResponseAmino): QueryCommandResponse;
    toAmino(message: QueryCommandResponse): QueryCommandResponseAmino;
    fromAminoMsg(object: QueryCommandResponseAminoMsg): QueryCommandResponse;
    fromProtoMsg(message: QueryCommandResponseProtoMsg): QueryCommandResponse;
    toProto(message: QueryCommandResponse): Uint8Array;
    toProtoMsg(message: QueryCommandResponse): QueryCommandResponseProtoMsg;
};
export declare const BurnerInfoRequest: {
    typeUrl: string;
    encode(message: BurnerInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BurnerInfoRequest;
    fromPartial(object: Partial<BurnerInfoRequest>): BurnerInfoRequest;
    fromAmino(object: BurnerInfoRequestAmino): BurnerInfoRequest;
    toAmino(message: BurnerInfoRequest): BurnerInfoRequestAmino;
    fromAminoMsg(object: BurnerInfoRequestAminoMsg): BurnerInfoRequest;
    fromProtoMsg(message: BurnerInfoRequestProtoMsg): BurnerInfoRequest;
    toProto(message: BurnerInfoRequest): Uint8Array;
    toProtoMsg(message: BurnerInfoRequest): BurnerInfoRequestProtoMsg;
};
export declare const BurnerInfoResponse: {
    typeUrl: string;
    encode(message: BurnerInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BurnerInfoResponse;
    fromPartial(object: Partial<BurnerInfoResponse>): BurnerInfoResponse;
    fromAmino(object: BurnerInfoResponseAmino): BurnerInfoResponse;
    toAmino(message: BurnerInfoResponse): BurnerInfoResponseAmino;
    fromAminoMsg(object: BurnerInfoResponseAminoMsg): BurnerInfoResponse;
    fromProtoMsg(message: BurnerInfoResponseProtoMsg): BurnerInfoResponse;
    toProto(message: BurnerInfoResponse): Uint8Array;
    toProtoMsg(message: BurnerInfoResponse): BurnerInfoResponseProtoMsg;
};
export declare const ConfirmationHeightRequest: {
    typeUrl: string;
    encode(message: ConfirmationHeightRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmationHeightRequest;
    fromPartial(object: Partial<ConfirmationHeightRequest>): ConfirmationHeightRequest;
    fromAmino(object: ConfirmationHeightRequestAmino): ConfirmationHeightRequest;
    toAmino(message: ConfirmationHeightRequest): ConfirmationHeightRequestAmino;
    fromAminoMsg(object: ConfirmationHeightRequestAminoMsg): ConfirmationHeightRequest;
    fromProtoMsg(message: ConfirmationHeightRequestProtoMsg): ConfirmationHeightRequest;
    toProto(message: ConfirmationHeightRequest): Uint8Array;
    toProtoMsg(message: ConfirmationHeightRequest): ConfirmationHeightRequestProtoMsg;
};
export declare const ConfirmationHeightResponse: {
    typeUrl: string;
    encode(message: ConfirmationHeightResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmationHeightResponse;
    fromPartial(object: Partial<ConfirmationHeightResponse>): ConfirmationHeightResponse;
    fromAmino(object: ConfirmationHeightResponseAmino): ConfirmationHeightResponse;
    toAmino(message: ConfirmationHeightResponse): ConfirmationHeightResponseAmino;
    fromAminoMsg(object: ConfirmationHeightResponseAminoMsg): ConfirmationHeightResponse;
    fromProtoMsg(message: ConfirmationHeightResponseProtoMsg): ConfirmationHeightResponse;
    toProto(message: ConfirmationHeightResponse): Uint8Array;
    toProtoMsg(message: ConfirmationHeightResponse): ConfirmationHeightResponseProtoMsg;
};
export declare const GatewayAddressRequest: {
    typeUrl: string;
    encode(message: GatewayAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GatewayAddressRequest;
    fromPartial(object: Partial<GatewayAddressRequest>): GatewayAddressRequest;
    fromAmino(object: GatewayAddressRequestAmino): GatewayAddressRequest;
    toAmino(message: GatewayAddressRequest): GatewayAddressRequestAmino;
    fromAminoMsg(object: GatewayAddressRequestAminoMsg): GatewayAddressRequest;
    fromProtoMsg(message: GatewayAddressRequestProtoMsg): GatewayAddressRequest;
    toProto(message: GatewayAddressRequest): Uint8Array;
    toProtoMsg(message: GatewayAddressRequest): GatewayAddressRequestProtoMsg;
};
export declare const GatewayAddressResponse: {
    typeUrl: string;
    encode(message: GatewayAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GatewayAddressResponse;
    fromPartial(object: Partial<GatewayAddressResponse>): GatewayAddressResponse;
    fromAmino(object: GatewayAddressResponseAmino): GatewayAddressResponse;
    toAmino(message: GatewayAddressResponse): GatewayAddressResponseAmino;
    fromAminoMsg(object: GatewayAddressResponseAminoMsg): GatewayAddressResponse;
    fromProtoMsg(message: GatewayAddressResponseProtoMsg): GatewayAddressResponse;
    toProto(message: GatewayAddressResponse): Uint8Array;
    toProtoMsg(message: GatewayAddressResponse): GatewayAddressResponseProtoMsg;
};
export declare const BytecodeRequest: {
    typeUrl: string;
    encode(message: BytecodeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BytecodeRequest;
    fromPartial(object: Partial<BytecodeRequest>): BytecodeRequest;
    fromAmino(object: BytecodeRequestAmino): BytecodeRequest;
    toAmino(message: BytecodeRequest): BytecodeRequestAmino;
    fromAminoMsg(object: BytecodeRequestAminoMsg): BytecodeRequest;
    fromProtoMsg(message: BytecodeRequestProtoMsg): BytecodeRequest;
    toProto(message: BytecodeRequest): Uint8Array;
    toProtoMsg(message: BytecodeRequest): BytecodeRequestProtoMsg;
};
export declare const BytecodeResponse: {
    typeUrl: string;
    encode(message: BytecodeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BytecodeResponse;
    fromPartial(object: Partial<BytecodeResponse>): BytecodeResponse;
    fromAmino(object: BytecodeResponseAmino): BytecodeResponse;
    toAmino(message: BytecodeResponse): BytecodeResponseAmino;
    fromAminoMsg(object: BytecodeResponseAminoMsg): BytecodeResponse;
    fromProtoMsg(message: BytecodeResponseProtoMsg): BytecodeResponse;
    toProto(message: BytecodeResponse): Uint8Array;
    toProtoMsg(message: BytecodeResponse): BytecodeResponseProtoMsg;
};
export declare const ERC20TokensRequest: {
    typeUrl: string;
    encode(message: ERC20TokensRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20TokensRequest;
    fromPartial(object: Partial<ERC20TokensRequest>): ERC20TokensRequest;
    fromAmino(object: ERC20TokensRequestAmino): ERC20TokensRequest;
    toAmino(message: ERC20TokensRequest): ERC20TokensRequestAmino;
    fromAminoMsg(object: ERC20TokensRequestAminoMsg): ERC20TokensRequest;
    fromProtoMsg(message: ERC20TokensRequestProtoMsg): ERC20TokensRequest;
    toProto(message: ERC20TokensRequest): Uint8Array;
    toProtoMsg(message: ERC20TokensRequest): ERC20TokensRequestProtoMsg;
};
export declare const ERC20TokensResponse: {
    typeUrl: string;
    encode(message: ERC20TokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20TokensResponse;
    fromPartial(object: Partial<ERC20TokensResponse>): ERC20TokensResponse;
    fromAmino(object: ERC20TokensResponseAmino): ERC20TokensResponse;
    toAmino(message: ERC20TokensResponse): ERC20TokensResponseAmino;
    fromAminoMsg(object: ERC20TokensResponseAminoMsg): ERC20TokensResponse;
    fromProtoMsg(message: ERC20TokensResponseProtoMsg): ERC20TokensResponse;
    toProto(message: ERC20TokensResponse): Uint8Array;
    toProtoMsg(message: ERC20TokensResponse): ERC20TokensResponseProtoMsg;
};
export declare const ERC20TokensResponse_Token: {
    typeUrl: string;
    encode(message: ERC20TokensResponse_Token, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20TokensResponse_Token;
    fromPartial(object: Partial<ERC20TokensResponse_Token>): ERC20TokensResponse_Token;
    fromAmino(object: ERC20TokensResponse_TokenAmino): ERC20TokensResponse_Token;
    toAmino(message: ERC20TokensResponse_Token): ERC20TokensResponse_TokenAmino;
    fromAminoMsg(object: ERC20TokensResponse_TokenAminoMsg): ERC20TokensResponse_Token;
    fromProtoMsg(message: ERC20TokensResponse_TokenProtoMsg): ERC20TokensResponse_Token;
    toProto(message: ERC20TokensResponse_Token): Uint8Array;
    toProtoMsg(message: ERC20TokensResponse_Token): ERC20TokensResponse_TokenProtoMsg;
};
export declare const TokenInfoRequest: {
    typeUrl: string;
    encode(message: TokenInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenInfoRequest;
    fromPartial(object: Partial<TokenInfoRequest>): TokenInfoRequest;
    fromAmino(object: TokenInfoRequestAmino): TokenInfoRequest;
    toAmino(message: TokenInfoRequest): TokenInfoRequestAmino;
    fromAminoMsg(object: TokenInfoRequestAminoMsg): TokenInfoRequest;
    fromProtoMsg(message: TokenInfoRequestProtoMsg): TokenInfoRequest;
    toProto(message: TokenInfoRequest): Uint8Array;
    toProtoMsg(message: TokenInfoRequest): TokenInfoRequestProtoMsg;
};
export declare const TokenInfoResponse: {
    typeUrl: string;
    encode(message: TokenInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenInfoResponse;
    fromPartial(object: Partial<TokenInfoResponse>): TokenInfoResponse;
    fromAmino(object: TokenInfoResponseAmino): TokenInfoResponse;
    toAmino(message: TokenInfoResponse): TokenInfoResponseAmino;
    fromAminoMsg(object: TokenInfoResponseAminoMsg): TokenInfoResponse;
    fromProtoMsg(message: TokenInfoResponseProtoMsg): TokenInfoResponse;
    toProto(message: TokenInfoResponse): Uint8Array;
    toProtoMsg(message: TokenInfoResponse): TokenInfoResponseProtoMsg;
};
export declare const Proof: {
    typeUrl: string;
    encode(message: Proof, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Proof;
    fromPartial(object: Partial<Proof>): Proof;
    fromAmino(object: ProofAmino): Proof;
    toAmino(message: Proof): ProofAmino;
    fromAminoMsg(object: ProofAminoMsg): Proof;
    fromProtoMsg(message: ProofProtoMsg): Proof;
    toProto(message: Proof): Uint8Array;
    toProtoMsg(message: Proof): ProofProtoMsg;
};
