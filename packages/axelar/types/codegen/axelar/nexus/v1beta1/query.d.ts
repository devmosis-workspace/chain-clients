import { TransferState, CrossChainTransfer, CrossChainTransferAmino, CrossChainTransferSDKType, FeeInfo, FeeInfoAmino, FeeInfoSDKType, GeneralMessage, GeneralMessageAmino, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ChainState, ChainStateAmino, ChainStateSDKType } from "./types";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
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
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequest {
    /**
     * ChainMaintainersRequest represents a message that queries
     * the chain maintainers for the specified chain
     */
    chain: string;
}
export interface ChainMaintainersRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersRequest";
    value: Uint8Array;
}
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequestAmino {
    /**
     * ChainMaintainersRequest represents a message that queries
     * the chain maintainers for the specified chain
     */
    chain: string;
}
export interface ChainMaintainersRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainMaintainersRequest";
    value: ChainMaintainersRequestAmino;
}
/**
 * ChainMaintainersRequest represents a message that queries
 * the chain maintainers for the specified chain
 */
export interface ChainMaintainersRequestSDKType {
    chain: string;
}
export interface ChainMaintainersResponse {
    maintainers: Uint8Array[];
}
export interface ChainMaintainersResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainMaintainersResponse";
    value: Uint8Array;
}
export interface ChainMaintainersResponseAmino {
    maintainers: Uint8Array[];
}
export interface ChainMaintainersResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainMaintainersResponse";
    value: ChainMaintainersResponseAmino;
}
export interface ChainMaintainersResponseSDKType {
    maintainers: Uint8Array[];
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequest {
    recipientAddr: string;
    recipientChain: string;
    depositChain: string;
}
export interface LatestDepositAddressRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressRequest";
    value: Uint8Array;
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequestAmino {
    recipient_addr: string;
    recipient_chain: string;
    deposit_chain: string;
}
export interface LatestDepositAddressRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.LatestDepositAddressRequest";
    value: LatestDepositAddressRequestAmino;
}
/**
 * LatestDepositAddressRequest represents a message that queries a deposit
 * address by recipient address
 */
export interface LatestDepositAddressRequestSDKType {
    recipient_addr: string;
    recipient_chain: string;
    deposit_chain: string;
}
export interface LatestDepositAddressResponse {
    depositAddr: string;
}
export interface LatestDepositAddressResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.LatestDepositAddressResponse";
    value: Uint8Array;
}
export interface LatestDepositAddressResponseAmino {
    deposit_addr: string;
}
export interface LatestDepositAddressResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.LatestDepositAddressResponse";
    value: LatestDepositAddressResponseAmino;
}
export interface LatestDepositAddressResponseSDKType {
    deposit_addr: string;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequest {
    chain: string;
    state: TransferState;
    pagination: PageRequest;
}
export interface TransfersForChainRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransfersForChainRequest";
    value: Uint8Array;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestAmino {
    chain: string;
    state: TransferState;
    pagination?: PageRequestAmino;
}
export interface TransfersForChainRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.TransfersForChainRequest";
    value: TransfersForChainRequestAmino;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestSDKType {
    chain: string;
    state: TransferState;
    pagination: PageRequestSDKType;
}
export interface TransfersForChainResponse {
    transfers: CrossChainTransfer[];
    pagination: PageResponse;
}
export interface TransfersForChainResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransfersForChainResponse";
    value: Uint8Array;
}
export interface TransfersForChainResponseAmino {
    transfers: CrossChainTransferAmino[];
    pagination?: PageResponseAmino;
}
export interface TransfersForChainResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.TransfersForChainResponse";
    value: TransfersForChainResponseAmino;
}
export interface TransfersForChainResponseSDKType {
    transfers: CrossChainTransferSDKType[];
    pagination: PageResponseSDKType;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    chain: string;
    asset: string;
}
export interface FeeInfoRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.FeeInfoRequest";
    value: Uint8Array;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequestAmino {
    chain: string;
    asset: string;
}
export interface FeeInfoRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.FeeInfoRequest";
    value: FeeInfoRequestAmino;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequestSDKType {
    chain: string;
    asset: string;
}
export interface FeeInfoResponse {
    feeInfo: FeeInfo;
}
export interface FeeInfoResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.FeeInfoResponse";
    value: Uint8Array;
}
export interface FeeInfoResponseAmino {
    fee_info?: FeeInfoAmino;
}
export interface FeeInfoResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.FeeInfoResponse";
    value: FeeInfoResponseAmino;
}
export interface FeeInfoResponseSDKType {
    fee_info: FeeInfoSDKType;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequest {
    sourceChain: string;
    destinationChain: string;
    amount: string;
}
export interface TransferFeeRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferFeeRequest";
    value: Uint8Array;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequestAmino {
    source_chain: string;
    destination_chain: string;
    amount: string;
}
export interface TransferFeeRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferFeeRequest";
    value: TransferFeeRequestAmino;
}
/**
 * TransferFeeRequest represents a message that queries the fees charged by
 * the network for a cross-chain transfer
 */
export interface TransferFeeRequestSDKType {
    source_chain: string;
    destination_chain: string;
    amount: string;
}
export interface TransferFeeResponse {
    fee: Coin;
}
export interface TransferFeeResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferFeeResponse";
    value: Uint8Array;
}
export interface TransferFeeResponseAmino {
    fee?: CoinAmino;
}
export interface TransferFeeResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferFeeResponse";
    value: TransferFeeResponseAmino;
}
export interface TransferFeeResponseSDKType {
    fee: CoinSDKType;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequest {
    /**
     * ChainsRequest represents a message that queries the chains
     * registered on the network
     */
    status: ChainStatus;
}
export interface ChainsRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainsRequest";
    value: Uint8Array;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequestAmino {
    /**
     * ChainsRequest represents a message that queries the chains
     * registered on the network
     */
    status: ChainStatus;
}
export interface ChainsRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainsRequest";
    value: ChainsRequestAmino;
}
/**
 * ChainsRequest represents a message that queries the chains
 * registered on the network
 */
export interface ChainsRequestSDKType {
    status: ChainStatus;
}
export interface ChainsResponse {
    chains: string[];
}
export interface ChainsResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainsResponse";
    value: Uint8Array;
}
export interface ChainsResponseAmino {
    chains: string[];
}
export interface ChainsResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainsResponse";
    value: ChainsResponseAmino;
}
export interface ChainsResponseSDKType {
    chains: string[];
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequest {
    /**
     * AssetsRequest represents a message that queries the registered assets of a
     * chain
     */
    chain: string;
}
export interface AssetsRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.AssetsRequest";
    value: Uint8Array;
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequestAmino {
    /**
     * AssetsRequest represents a message that queries the registered assets of a
     * chain
     */
    chain: string;
}
export interface AssetsRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.AssetsRequest";
    value: AssetsRequestAmino;
}
/**
 * AssetsRequest represents a message that queries the registered assets of a
 * chain
 */
export interface AssetsRequestSDKType {
    chain: string;
}
export interface AssetsResponse {
    assets: string[];
}
export interface AssetsResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.AssetsResponse";
    value: Uint8Array;
}
export interface AssetsResponseAmino {
    assets: string[];
}
export interface AssetsResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.AssetsResponse";
    value: AssetsResponseAmino;
}
export interface AssetsResponseSDKType {
    assets: string[];
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequest {
    /**
     * ChainStateRequest represents a message that queries the state of a chain
     * registered on the network
     */
    chain: string;
}
export interface ChainStateRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainStateRequest";
    value: Uint8Array;
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestAmino {
    /**
     * ChainStateRequest represents a message that queries the state of a chain
     * registered on the network
     */
    chain: string;
}
export interface ChainStateRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainStateRequest";
    value: ChainStateRequestAmino;
}
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestSDKType {
    chain: string;
}
export interface ChainStateResponse {
    state: ChainState;
}
export interface ChainStateResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainStateResponse";
    value: Uint8Array;
}
export interface ChainStateResponseAmino {
    state?: ChainStateAmino;
}
export interface ChainStateResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainStateResponse";
    value: ChainStateResponseAmino;
}
export interface ChainStateResponseSDKType {
    state: ChainStateSDKType;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequest {
    /**
     * ChainsByAssetRequest represents a message that queries the chains
     * that support an asset on the network
     */
    asset: string;
}
export interface ChainsByAssetRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetRequest";
    value: Uint8Array;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequestAmino {
    /**
     * ChainsByAssetRequest represents a message that queries the chains
     * that support an asset on the network
     */
    asset: string;
}
export interface ChainsByAssetRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainsByAssetRequest";
    value: ChainsByAssetRequestAmino;
}
/**
 * ChainsByAssetRequest represents a message that queries the chains
 * that support an asset on the network
 */
export interface ChainsByAssetRequestSDKType {
    asset: string;
}
export interface ChainsByAssetResponse {
    chains: string[];
}
export interface ChainsByAssetResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.ChainsByAssetResponse";
    value: Uint8Array;
}
export interface ChainsByAssetResponseAmino {
    chains: string[];
}
export interface ChainsByAssetResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.ChainsByAssetResponse";
    value: ChainsByAssetResponseAmino;
}
export interface ChainsByAssetResponseSDKType {
    chains: string[];
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequest {
    depositAddr: string;
    depositChain: string;
}
export interface RecipientAddressRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RecipientAddressRequest";
    value: Uint8Array;
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequestAmino {
    deposit_addr: string;
    deposit_chain: string;
}
export interface RecipientAddressRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.RecipientAddressRequest";
    value: RecipientAddressRequestAmino;
}
/**
 * RecipientAddressRequest represents a message that queries the registered
 * recipient address for a given deposit address
 */
export interface RecipientAddressRequestSDKType {
    deposit_addr: string;
    deposit_chain: string;
}
export interface RecipientAddressResponse {
    recipientAddr: string;
    recipientChain: string;
}
export interface RecipientAddressResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RecipientAddressResponse";
    value: Uint8Array;
}
export interface RecipientAddressResponseAmino {
    recipient_addr: string;
    recipient_chain: string;
}
export interface RecipientAddressResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.RecipientAddressResponse";
    value: RecipientAddressResponseAmino;
}
export interface RecipientAddressResponseSDKType {
    recipient_addr: string;
    recipient_chain: string;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequest {
    chain: string;
    asset: string;
}
export interface TransferRateLimitRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitRequest";
    value: Uint8Array;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequestAmino {
    chain: string;
    asset: string;
}
export interface TransferRateLimitRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferRateLimitRequest";
    value: TransferRateLimitRequestAmino;
}
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequestSDKType {
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    transferRateLimit: TransferRateLimit;
}
export interface TransferRateLimitResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimitResponse";
    value: Uint8Array;
}
export interface TransferRateLimitResponseAmino {
    transfer_rate_limit?: TransferRateLimitAmino;
}
export interface TransferRateLimitResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferRateLimitResponse";
    value: TransferRateLimitResponseAmino;
}
export interface TransferRateLimitResponseSDKType {
    transfer_rate_limit: TransferRateLimitSDKType;
}
export interface TransferRateLimit {
    limit: Uint8Array;
    window: Duration;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    /** time_left indicates the time left in the rate limit window */
    timeLeft: Duration;
}
export interface TransferRateLimitProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.TransferRateLimit";
    value: Uint8Array;
}
export interface TransferRateLimitAmino {
    limit: Uint8Array;
    window?: DurationAmino;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    /** time_left indicates the time left in the rate limit window */
    time_left?: DurationAmino;
}
export interface TransferRateLimitAminoMsg {
    type: "/axelar.nexus.v1beta1.TransferRateLimit";
    value: TransferRateLimitAmino;
}
export interface TransferRateLimitSDKType {
    limit: Uint8Array;
    window: DurationSDKType;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    time_left: DurationSDKType;
}
export interface MessageRequest {
    id: string;
}
export interface MessageRequestProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageRequest";
    value: Uint8Array;
}
export interface MessageRequestAmino {
    id: string;
}
export interface MessageRequestAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageRequest";
    value: MessageRequestAmino;
}
export interface MessageRequestSDKType {
    id: string;
}
export interface MessageResponse {
    message: GeneralMessage;
}
export interface MessageResponseProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageResponse";
    value: Uint8Array;
}
export interface MessageResponseAmino {
    message?: GeneralMessageAmino;
}
export interface MessageResponseAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageResponse";
    value: MessageResponseAmino;
}
export interface MessageResponseSDKType {
    message: GeneralMessageSDKType;
}
export declare const ChainMaintainersRequest: {
    typeUrl: string;
    encode(message: ChainMaintainersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainMaintainersRequest;
    fromPartial(object: Partial<ChainMaintainersRequest>): ChainMaintainersRequest;
    fromAmino(object: ChainMaintainersRequestAmino): ChainMaintainersRequest;
    toAmino(message: ChainMaintainersRequest): ChainMaintainersRequestAmino;
    fromAminoMsg(object: ChainMaintainersRequestAminoMsg): ChainMaintainersRequest;
    fromProtoMsg(message: ChainMaintainersRequestProtoMsg): ChainMaintainersRequest;
    toProto(message: ChainMaintainersRequest): Uint8Array;
    toProtoMsg(message: ChainMaintainersRequest): ChainMaintainersRequestProtoMsg;
};
export declare const ChainMaintainersResponse: {
    typeUrl: string;
    encode(message: ChainMaintainersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainMaintainersResponse;
    fromPartial(object: Partial<ChainMaintainersResponse>): ChainMaintainersResponse;
    fromAmino(object: ChainMaintainersResponseAmino): ChainMaintainersResponse;
    toAmino(message: ChainMaintainersResponse): ChainMaintainersResponseAmino;
    fromAminoMsg(object: ChainMaintainersResponseAminoMsg): ChainMaintainersResponse;
    fromProtoMsg(message: ChainMaintainersResponseProtoMsg): ChainMaintainersResponse;
    toProto(message: ChainMaintainersResponse): Uint8Array;
    toProtoMsg(message: ChainMaintainersResponse): ChainMaintainersResponseProtoMsg;
};
export declare const LatestDepositAddressRequest: {
    typeUrl: string;
    encode(message: LatestDepositAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LatestDepositAddressRequest;
    fromPartial(object: Partial<LatestDepositAddressRequest>): LatestDepositAddressRequest;
    fromAmino(object: LatestDepositAddressRequestAmino): LatestDepositAddressRequest;
    toAmino(message: LatestDepositAddressRequest): LatestDepositAddressRequestAmino;
    fromAminoMsg(object: LatestDepositAddressRequestAminoMsg): LatestDepositAddressRequest;
    fromProtoMsg(message: LatestDepositAddressRequestProtoMsg): LatestDepositAddressRequest;
    toProto(message: LatestDepositAddressRequest): Uint8Array;
    toProtoMsg(message: LatestDepositAddressRequest): LatestDepositAddressRequestProtoMsg;
};
export declare const LatestDepositAddressResponse: {
    typeUrl: string;
    encode(message: LatestDepositAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LatestDepositAddressResponse;
    fromPartial(object: Partial<LatestDepositAddressResponse>): LatestDepositAddressResponse;
    fromAmino(object: LatestDepositAddressResponseAmino): LatestDepositAddressResponse;
    toAmino(message: LatestDepositAddressResponse): LatestDepositAddressResponseAmino;
    fromAminoMsg(object: LatestDepositAddressResponseAminoMsg): LatestDepositAddressResponse;
    fromProtoMsg(message: LatestDepositAddressResponseProtoMsg): LatestDepositAddressResponse;
    toProto(message: LatestDepositAddressResponse): Uint8Array;
    toProtoMsg(message: LatestDepositAddressResponse): LatestDepositAddressResponseProtoMsg;
};
export declare const TransfersForChainRequest: {
    typeUrl: string;
    encode(message: TransfersForChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransfersForChainRequest;
    fromPartial(object: Partial<TransfersForChainRequest>): TransfersForChainRequest;
    fromAmino(object: TransfersForChainRequestAmino): TransfersForChainRequest;
    toAmino(message: TransfersForChainRequest): TransfersForChainRequestAmino;
    fromAminoMsg(object: TransfersForChainRequestAminoMsg): TransfersForChainRequest;
    fromProtoMsg(message: TransfersForChainRequestProtoMsg): TransfersForChainRequest;
    toProto(message: TransfersForChainRequest): Uint8Array;
    toProtoMsg(message: TransfersForChainRequest): TransfersForChainRequestProtoMsg;
};
export declare const TransfersForChainResponse: {
    typeUrl: string;
    encode(message: TransfersForChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransfersForChainResponse;
    fromPartial(object: Partial<TransfersForChainResponse>): TransfersForChainResponse;
    fromAmino(object: TransfersForChainResponseAmino): TransfersForChainResponse;
    toAmino(message: TransfersForChainResponse): TransfersForChainResponseAmino;
    fromAminoMsg(object: TransfersForChainResponseAminoMsg): TransfersForChainResponse;
    fromProtoMsg(message: TransfersForChainResponseProtoMsg): TransfersForChainResponse;
    toProto(message: TransfersForChainResponse): Uint8Array;
    toProtoMsg(message: TransfersForChainResponse): TransfersForChainResponseProtoMsg;
};
export declare const FeeInfoRequest: {
    typeUrl: string;
    encode(message: FeeInfoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeInfoRequest;
    fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest;
    fromAmino(object: FeeInfoRequestAmino): FeeInfoRequest;
    toAmino(message: FeeInfoRequest): FeeInfoRequestAmino;
    fromAminoMsg(object: FeeInfoRequestAminoMsg): FeeInfoRequest;
    fromProtoMsg(message: FeeInfoRequestProtoMsg): FeeInfoRequest;
    toProto(message: FeeInfoRequest): Uint8Array;
    toProtoMsg(message: FeeInfoRequest): FeeInfoRequestProtoMsg;
};
export declare const FeeInfoResponse: {
    typeUrl: string;
    encode(message: FeeInfoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeInfoResponse;
    fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse;
    fromAmino(object: FeeInfoResponseAmino): FeeInfoResponse;
    toAmino(message: FeeInfoResponse): FeeInfoResponseAmino;
    fromAminoMsg(object: FeeInfoResponseAminoMsg): FeeInfoResponse;
    fromProtoMsg(message: FeeInfoResponseProtoMsg): FeeInfoResponse;
    toProto(message: FeeInfoResponse): Uint8Array;
    toProtoMsg(message: FeeInfoResponse): FeeInfoResponseProtoMsg;
};
export declare const TransferFeeRequest: {
    typeUrl: string;
    encode(message: TransferFeeRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferFeeRequest;
    fromPartial(object: Partial<TransferFeeRequest>): TransferFeeRequest;
    fromAmino(object: TransferFeeRequestAmino): TransferFeeRequest;
    toAmino(message: TransferFeeRequest): TransferFeeRequestAmino;
    fromAminoMsg(object: TransferFeeRequestAminoMsg): TransferFeeRequest;
    fromProtoMsg(message: TransferFeeRequestProtoMsg): TransferFeeRequest;
    toProto(message: TransferFeeRequest): Uint8Array;
    toProtoMsg(message: TransferFeeRequest): TransferFeeRequestProtoMsg;
};
export declare const TransferFeeResponse: {
    typeUrl: string;
    encode(message: TransferFeeResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferFeeResponse;
    fromPartial(object: Partial<TransferFeeResponse>): TransferFeeResponse;
    fromAmino(object: TransferFeeResponseAmino): TransferFeeResponse;
    toAmino(message: TransferFeeResponse): TransferFeeResponseAmino;
    fromAminoMsg(object: TransferFeeResponseAminoMsg): TransferFeeResponse;
    fromProtoMsg(message: TransferFeeResponseProtoMsg): TransferFeeResponse;
    toProto(message: TransferFeeResponse): Uint8Array;
    toProtoMsg(message: TransferFeeResponse): TransferFeeResponseProtoMsg;
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
export declare const AssetsRequest: {
    typeUrl: string;
    encode(message: AssetsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetsRequest;
    fromPartial(object: Partial<AssetsRequest>): AssetsRequest;
    fromAmino(object: AssetsRequestAmino): AssetsRequest;
    toAmino(message: AssetsRequest): AssetsRequestAmino;
    fromAminoMsg(object: AssetsRequestAminoMsg): AssetsRequest;
    fromProtoMsg(message: AssetsRequestProtoMsg): AssetsRequest;
    toProto(message: AssetsRequest): Uint8Array;
    toProtoMsg(message: AssetsRequest): AssetsRequestProtoMsg;
};
export declare const AssetsResponse: {
    typeUrl: string;
    encode(message: AssetsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AssetsResponse;
    fromPartial(object: Partial<AssetsResponse>): AssetsResponse;
    fromAmino(object: AssetsResponseAmino): AssetsResponse;
    toAmino(message: AssetsResponse): AssetsResponseAmino;
    fromAminoMsg(object: AssetsResponseAminoMsg): AssetsResponse;
    fromProtoMsg(message: AssetsResponseProtoMsg): AssetsResponse;
    toProto(message: AssetsResponse): Uint8Array;
    toProtoMsg(message: AssetsResponse): AssetsResponseProtoMsg;
};
export declare const ChainStateRequest: {
    typeUrl: string;
    encode(message: ChainStateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainStateRequest;
    fromPartial(object: Partial<ChainStateRequest>): ChainStateRequest;
    fromAmino(object: ChainStateRequestAmino): ChainStateRequest;
    toAmino(message: ChainStateRequest): ChainStateRequestAmino;
    fromAminoMsg(object: ChainStateRequestAminoMsg): ChainStateRequest;
    fromProtoMsg(message: ChainStateRequestProtoMsg): ChainStateRequest;
    toProto(message: ChainStateRequest): Uint8Array;
    toProtoMsg(message: ChainStateRequest): ChainStateRequestProtoMsg;
};
export declare const ChainStateResponse: {
    typeUrl: string;
    encode(message: ChainStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainStateResponse;
    fromPartial(object: Partial<ChainStateResponse>): ChainStateResponse;
    fromAmino(object: ChainStateResponseAmino): ChainStateResponse;
    toAmino(message: ChainStateResponse): ChainStateResponseAmino;
    fromAminoMsg(object: ChainStateResponseAminoMsg): ChainStateResponse;
    fromProtoMsg(message: ChainStateResponseProtoMsg): ChainStateResponse;
    toProto(message: ChainStateResponse): Uint8Array;
    toProtoMsg(message: ChainStateResponse): ChainStateResponseProtoMsg;
};
export declare const ChainsByAssetRequest: {
    typeUrl: string;
    encode(message: ChainsByAssetRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainsByAssetRequest;
    fromPartial(object: Partial<ChainsByAssetRequest>): ChainsByAssetRequest;
    fromAmino(object: ChainsByAssetRequestAmino): ChainsByAssetRequest;
    toAmino(message: ChainsByAssetRequest): ChainsByAssetRequestAmino;
    fromAminoMsg(object: ChainsByAssetRequestAminoMsg): ChainsByAssetRequest;
    fromProtoMsg(message: ChainsByAssetRequestProtoMsg): ChainsByAssetRequest;
    toProto(message: ChainsByAssetRequest): Uint8Array;
    toProtoMsg(message: ChainsByAssetRequest): ChainsByAssetRequestProtoMsg;
};
export declare const ChainsByAssetResponse: {
    typeUrl: string;
    encode(message: ChainsByAssetResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainsByAssetResponse;
    fromPartial(object: Partial<ChainsByAssetResponse>): ChainsByAssetResponse;
    fromAmino(object: ChainsByAssetResponseAmino): ChainsByAssetResponse;
    toAmino(message: ChainsByAssetResponse): ChainsByAssetResponseAmino;
    fromAminoMsg(object: ChainsByAssetResponseAminoMsg): ChainsByAssetResponse;
    fromProtoMsg(message: ChainsByAssetResponseProtoMsg): ChainsByAssetResponse;
    toProto(message: ChainsByAssetResponse): Uint8Array;
    toProtoMsg(message: ChainsByAssetResponse): ChainsByAssetResponseProtoMsg;
};
export declare const RecipientAddressRequest: {
    typeUrl: string;
    encode(message: RecipientAddressRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecipientAddressRequest;
    fromPartial(object: Partial<RecipientAddressRequest>): RecipientAddressRequest;
    fromAmino(object: RecipientAddressRequestAmino): RecipientAddressRequest;
    toAmino(message: RecipientAddressRequest): RecipientAddressRequestAmino;
    fromAminoMsg(object: RecipientAddressRequestAminoMsg): RecipientAddressRequest;
    fromProtoMsg(message: RecipientAddressRequestProtoMsg): RecipientAddressRequest;
    toProto(message: RecipientAddressRequest): Uint8Array;
    toProtoMsg(message: RecipientAddressRequest): RecipientAddressRequestProtoMsg;
};
export declare const RecipientAddressResponse: {
    typeUrl: string;
    encode(message: RecipientAddressResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RecipientAddressResponse;
    fromPartial(object: Partial<RecipientAddressResponse>): RecipientAddressResponse;
    fromAmino(object: RecipientAddressResponseAmino): RecipientAddressResponse;
    toAmino(message: RecipientAddressResponse): RecipientAddressResponseAmino;
    fromAminoMsg(object: RecipientAddressResponseAminoMsg): RecipientAddressResponse;
    fromProtoMsg(message: RecipientAddressResponseProtoMsg): RecipientAddressResponse;
    toProto(message: RecipientAddressResponse): Uint8Array;
    toProtoMsg(message: RecipientAddressResponse): RecipientAddressResponseProtoMsg;
};
export declare const TransferRateLimitRequest: {
    typeUrl: string;
    encode(message: TransferRateLimitRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferRateLimitRequest;
    fromPartial(object: Partial<TransferRateLimitRequest>): TransferRateLimitRequest;
    fromAmino(object: TransferRateLimitRequestAmino): TransferRateLimitRequest;
    toAmino(message: TransferRateLimitRequest): TransferRateLimitRequestAmino;
    fromAminoMsg(object: TransferRateLimitRequestAminoMsg): TransferRateLimitRequest;
    fromProtoMsg(message: TransferRateLimitRequestProtoMsg): TransferRateLimitRequest;
    toProto(message: TransferRateLimitRequest): Uint8Array;
    toProtoMsg(message: TransferRateLimitRequest): TransferRateLimitRequestProtoMsg;
};
export declare const TransferRateLimitResponse: {
    typeUrl: string;
    encode(message: TransferRateLimitResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferRateLimitResponse;
    fromPartial(object: Partial<TransferRateLimitResponse>): TransferRateLimitResponse;
    fromAmino(object: TransferRateLimitResponseAmino): TransferRateLimitResponse;
    toAmino(message: TransferRateLimitResponse): TransferRateLimitResponseAmino;
    fromAminoMsg(object: TransferRateLimitResponseAminoMsg): TransferRateLimitResponse;
    fromProtoMsg(message: TransferRateLimitResponseProtoMsg): TransferRateLimitResponse;
    toProto(message: TransferRateLimitResponse): Uint8Array;
    toProtoMsg(message: TransferRateLimitResponse): TransferRateLimitResponseProtoMsg;
};
export declare const TransferRateLimit: {
    typeUrl: string;
    encode(message: TransferRateLimit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TransferRateLimit;
    fromPartial(object: Partial<TransferRateLimit>): TransferRateLimit;
    fromAmino(object: TransferRateLimitAmino): TransferRateLimit;
    toAmino(message: TransferRateLimit): TransferRateLimitAmino;
    fromAminoMsg(object: TransferRateLimitAminoMsg): TransferRateLimit;
    fromProtoMsg(message: TransferRateLimitProtoMsg): TransferRateLimit;
    toProto(message: TransferRateLimit): Uint8Array;
    toProtoMsg(message: TransferRateLimit): TransferRateLimitProtoMsg;
};
export declare const MessageRequest: {
    typeUrl: string;
    encode(message: MessageRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageRequest;
    fromPartial(object: Partial<MessageRequest>): MessageRequest;
    fromAmino(object: MessageRequestAmino): MessageRequest;
    toAmino(message: MessageRequest): MessageRequestAmino;
    fromAminoMsg(object: MessageRequestAminoMsg): MessageRequest;
    fromProtoMsg(message: MessageRequestProtoMsg): MessageRequest;
    toProto(message: MessageRequest): Uint8Array;
    toProtoMsg(message: MessageRequest): MessageRequestProtoMsg;
};
export declare const MessageResponse: {
    typeUrl: string;
    encode(message: MessageResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageResponse;
    fromPartial(object: Partial<MessageResponse>): MessageResponse;
    fromAmino(object: MessageResponseAmino): MessageResponse;
    toAmino(message: MessageResponse): MessageResponseAmino;
    fromAminoMsg(object: MessageResponseAminoMsg): MessageResponse;
    fromProtoMsg(message: MessageResponseProtoMsg): MessageResponse;
    toProto(message: MessageResponse): Uint8Array;
    toProtoMsg(message: MessageResponse): MessageResponseProtoMsg;
};
