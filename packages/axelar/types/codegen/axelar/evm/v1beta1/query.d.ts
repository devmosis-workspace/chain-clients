import { BatchedCommandsStatus, DepositStatus, Event, EventSDKType, BurnerInfo, BurnerInfoSDKType, TokenDetails, TokenDetailsSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ChainStatus {
    CHAIN_STATUS_UNSPECIFIED = 0,
    CHAIN_STATUS_ACTIVATED = 1,
    CHAIN_STATUS_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare const ChainStatusSDKType: typeof ChainStatus;
export declare function chainStatusFromJSON(object: any): ChainStatus;
export declare function chainStatusToJSON(object: ChainStatus): string;
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_INTERNAL = 1,
    TOKEN_TYPE_EXTERNAL = 2,
    UNRECOGNIZED = -1
}
export declare const TokenTypeSDKType: typeof TokenType;
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
    proof?: Proof;
}
export interface BatchedCommandsResponseSDKType {
    id: string;
    data: string;
    status: BatchedCommandsStatus;
    key_id: string;
    execute_data: string;
    prev_batched_commands_id: string;
    command_ids: string[];
    proof?: ProofSDKType;
}
export interface KeyAddressRequest {
    chain: string;
    keyId: string;
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
export interface KeyAddressResponseSDKType {
    key_id: string;
    addresses: KeyAddressResponse_WeightedAddressSDKType[];
    threshold: string;
}
export interface KeyAddressResponse_WeightedAddress {
    address: string;
    weight: string;
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
/** @deprecated */
export interface QueryDepositStateParamsSDKType {
    tx_id: Uint8Array;
    burner_address: Uint8Array;
}
/** @deprecated */
export interface DepositStateRequest {
    chain: string;
    params?: QueryDepositStateParams;
}
/** @deprecated */
export interface DepositStateRequestSDKType {
    chain: string;
    params?: QueryDepositStateParamsSDKType;
}
/** @deprecated */
export interface DepositStateResponse {
    status: DepositStatus;
}
/** @deprecated */
export interface DepositStateResponseSDKType {
    status: DepositStatus;
}
export interface EventRequest {
    chain: string;
    eventId: string;
}
export interface EventRequestSDKType {
    chain: string;
    event_id: string;
}
export interface EventResponse {
    event?: Event;
}
export interface EventResponseSDKType {
    event?: EventSDKType;
}
export interface QueryBurnerAddressResponse {
    address: string;
}
export interface QueryBurnerAddressResponseSDKType {
    address: string;
}
export interface ChainsRequest {
    status: ChainStatus;
}
export interface ChainsRequestSDKType {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
export interface ChainsResponseSDKType {
    chains: string[];
}
export interface CommandRequest {
    chain: string;
    id: string;
}
export interface CommandRequestSDKType {
    chain: string;
    id: string;
}
export interface CommandResponse_ParamsEntry {
    key: string;
    value: string;
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
export interface PendingCommandsRequestSDKType {
    chain: string;
}
export interface PendingCommandsResponse {
    commands: QueryCommandResponse[];
}
export interface PendingCommandsResponseSDKType {
    commands: QueryCommandResponseSDKType[];
}
export interface QueryCommandResponse_ParamsEntry {
    key: string;
    value: string;
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
export interface BurnerInfoRequestSDKType {
    address: Uint8Array;
}
export interface BurnerInfoResponse {
    chain: string;
    burnerInfo?: BurnerInfo;
}
export interface BurnerInfoResponseSDKType {
    chain: string;
    burner_info?: BurnerInfoSDKType;
}
export interface ConfirmationHeightRequest {
    chain: string;
}
export interface ConfirmationHeightRequestSDKType {
    chain: string;
}
export interface ConfirmationHeightResponse {
    height: Long;
}
export interface ConfirmationHeightResponseSDKType {
    height: Long;
}
export interface GatewayAddressRequest {
    chain: string;
}
export interface GatewayAddressRequestSDKType {
    chain: string;
}
export interface GatewayAddressResponse {
    address: string;
}
export interface GatewayAddressResponseSDKType {
    address: string;
}
export interface BytecodeRequest {
    chain: string;
    contract: string;
}
export interface BytecodeRequestSDKType {
    chain: string;
    contract: string;
}
export interface BytecodeResponse {
    bytecode: string;
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
export interface TokenInfoRequestSDKType {
    chain: string;
    asset?: string;
    symbol?: string;
    address?: string;
}
export interface TokenInfoResponse {
    asset: string;
    details?: TokenDetails;
    address: string;
    confirmed: boolean;
    isExternal: boolean;
    burnerCodeHash: string;
}
export interface TokenInfoResponseSDKType {
    asset: string;
    details?: TokenDetailsSDKType;
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
export interface ProofSDKType {
    addresses: string[];
    weights: string[];
    threshold: string;
    signatures: string[];
}
export declare const DepositQueryParams: {
    encode(message: DepositQueryParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositQueryParams;
    fromPartial(object: Partial<DepositQueryParams>): DepositQueryParams;
};
export declare const BatchedCommandsRequest: {
    encode(message: BatchedCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchedCommandsRequest;
    fromPartial(object: Partial<BatchedCommandsRequest>): BatchedCommandsRequest;
};
export declare const BatchedCommandsResponse: {
    encode(message: BatchedCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchedCommandsResponse;
    fromPartial(object: Partial<BatchedCommandsResponse>): BatchedCommandsResponse;
};
export declare const KeyAddressRequest: {
    encode(message: KeyAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyAddressRequest;
    fromPartial(object: Partial<KeyAddressRequest>): KeyAddressRequest;
};
export declare const KeyAddressResponse: {
    encode(message: KeyAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyAddressResponse;
    fromPartial(object: Partial<KeyAddressResponse>): KeyAddressResponse;
};
export declare const KeyAddressResponse_WeightedAddress: {
    encode(message: KeyAddressResponse_WeightedAddress, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): KeyAddressResponse_WeightedAddress;
    fromPartial(object: Partial<KeyAddressResponse_WeightedAddress>): KeyAddressResponse_WeightedAddress;
};
export declare const QueryTokenAddressResponse: {
    encode(message: QueryTokenAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryTokenAddressResponse;
    fromPartial(object: Partial<QueryTokenAddressResponse>): QueryTokenAddressResponse;
};
export declare const QueryDepositStateParams: {
    encode(message: QueryDepositStateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryDepositStateParams;
    fromPartial(object: Partial<QueryDepositStateParams>): QueryDepositStateParams;
};
export declare const DepositStateRequest: {
    encode(message: DepositStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositStateRequest;
    fromPartial(object: Partial<DepositStateRequest>): DepositStateRequest;
};
export declare const DepositStateResponse: {
    encode(message: DepositStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DepositStateResponse;
    fromPartial(object: Partial<DepositStateResponse>): DepositStateResponse;
};
export declare const EventRequest: {
    encode(message: EventRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventRequest;
    fromPartial(object: Partial<EventRequest>): EventRequest;
};
export declare const EventResponse: {
    encode(message: EventResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventResponse;
    fromPartial(object: Partial<EventResponse>): EventResponse;
};
export declare const QueryBurnerAddressResponse: {
    encode(message: QueryBurnerAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBurnerAddressResponse;
    fromPartial(object: Partial<QueryBurnerAddressResponse>): QueryBurnerAddressResponse;
};
export declare const ChainsRequest: {
    encode(message: ChainsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainsRequest;
    fromPartial(object: Partial<ChainsRequest>): ChainsRequest;
};
export declare const ChainsResponse: {
    encode(message: ChainsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainsResponse;
    fromPartial(object: Partial<ChainsResponse>): ChainsResponse;
};
export declare const CommandRequest: {
    encode(message: CommandRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandRequest;
    fromPartial(object: Partial<CommandRequest>): CommandRequest;
};
export declare const CommandResponse_ParamsEntry: {
    encode(message: CommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandResponse_ParamsEntry;
    fromPartial(object: Partial<CommandResponse_ParamsEntry>): CommandResponse_ParamsEntry;
};
export declare const CommandResponse: {
    encode(message: CommandResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandResponse;
    fromPartial(object: Partial<CommandResponse>): CommandResponse;
};
export declare const PendingCommandsRequest: {
    encode(message: PendingCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingCommandsRequest;
    fromPartial(object: Partial<PendingCommandsRequest>): PendingCommandsRequest;
};
export declare const PendingCommandsResponse: {
    encode(message: PendingCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PendingCommandsResponse;
    fromPartial(object: Partial<PendingCommandsResponse>): PendingCommandsResponse;
};
export declare const QueryCommandResponse_ParamsEntry: {
    encode(message: QueryCommandResponse_ParamsEntry, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommandResponse_ParamsEntry;
    fromPartial(object: Partial<QueryCommandResponse_ParamsEntry>): QueryCommandResponse_ParamsEntry;
};
export declare const QueryCommandResponse: {
    encode(message: QueryCommandResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCommandResponse;
    fromPartial(object: Partial<QueryCommandResponse>): QueryCommandResponse;
};
export declare const BurnerInfoRequest: {
    encode(message: BurnerInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BurnerInfoRequest;
    fromPartial(object: Partial<BurnerInfoRequest>): BurnerInfoRequest;
};
export declare const BurnerInfoResponse: {
    encode(message: BurnerInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BurnerInfoResponse;
    fromPartial(object: Partial<BurnerInfoResponse>): BurnerInfoResponse;
};
export declare const ConfirmationHeightRequest: {
    encode(message: ConfirmationHeightRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmationHeightRequest;
    fromPartial(object: Partial<ConfirmationHeightRequest>): ConfirmationHeightRequest;
};
export declare const ConfirmationHeightResponse: {
    encode(message: ConfirmationHeightResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmationHeightResponse;
    fromPartial(object: Partial<ConfirmationHeightResponse>): ConfirmationHeightResponse;
};
export declare const GatewayAddressRequest: {
    encode(message: GatewayAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GatewayAddressRequest;
    fromPartial(object: Partial<GatewayAddressRequest>): GatewayAddressRequest;
};
export declare const GatewayAddressResponse: {
    encode(message: GatewayAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GatewayAddressResponse;
    fromPartial(object: Partial<GatewayAddressResponse>): GatewayAddressResponse;
};
export declare const BytecodeRequest: {
    encode(message: BytecodeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BytecodeRequest;
    fromPartial(object: Partial<BytecodeRequest>): BytecodeRequest;
};
export declare const BytecodeResponse: {
    encode(message: BytecodeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BytecodeResponse;
    fromPartial(object: Partial<BytecodeResponse>): BytecodeResponse;
};
export declare const ERC20TokensRequest: {
    encode(message: ERC20TokensRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20TokensRequest;
    fromPartial(object: Partial<ERC20TokensRequest>): ERC20TokensRequest;
};
export declare const ERC20TokensResponse: {
    encode(message: ERC20TokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20TokensResponse;
    fromPartial(object: Partial<ERC20TokensResponse>): ERC20TokensResponse;
};
export declare const ERC20TokensResponse_Token: {
    encode(message: ERC20TokensResponse_Token, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20TokensResponse_Token;
    fromPartial(object: Partial<ERC20TokensResponse_Token>): ERC20TokensResponse_Token;
};
export declare const TokenInfoRequest: {
    encode(message: TokenInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenInfoRequest;
    fromPartial(object: Partial<TokenInfoRequest>): TokenInfoRequest;
};
export declare const TokenInfoResponse: {
    encode(message: TokenInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenInfoResponse;
    fromPartial(object: Partial<TokenInfoResponse>): TokenInfoResponse;
};
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Proof;
    fromPartial(object: Partial<Proof>): Proof;
};
