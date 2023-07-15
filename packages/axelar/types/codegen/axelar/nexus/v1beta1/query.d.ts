import { TransferState, CrossChainTransfer, CrossChainTransferSDKType, FeeInfo, FeeInfoSDKType, GeneralMessage, GeneralMessageSDKType } from "../exported/v1beta1/types";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ChainState, ChainStateSDKType } from "./types";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
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
    pagination?: PageRequest;
}
/**
 * TransfersForChainRequest represents a message that queries the
 * transfers for the specified chain
 */
export interface TransfersForChainRequestSDKType {
    chain: string;
    state: TransferState;
    pagination?: PageRequestSDKType;
}
export interface TransfersForChainResponse {
    transfers: CrossChainTransfer[];
    pagination?: PageResponse;
}
export interface TransfersForChainResponseSDKType {
    transfers: CrossChainTransferSDKType[];
    pagination?: PageResponseSDKType;
}
/**
 * FeeInfoRequest represents a message that queries the transfer fees associated
 * to an asset on a chain
 */
export interface FeeInfoRequest {
    chain: string;
    asset: string;
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
    feeInfo?: FeeInfo;
}
export interface FeeInfoResponseSDKType {
    fee_info?: FeeInfoSDKType;
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
    fee?: Coin;
}
export interface TransferFeeResponseSDKType {
    fee?: CoinSDKType;
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
/**
 * ChainStateRequest represents a message that queries the state of a chain
 * registered on the network
 */
export interface ChainStateRequestSDKType {
    chain: string;
}
export interface ChainStateResponse {
    state?: ChainState;
}
export interface ChainStateResponseSDKType {
    state?: ChainStateSDKType;
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
/**
 * TransferRateLimitRequest represents a message that queries the registered
 * transfer rate limit and current transfer amounts for a given chain and asset
 */
export interface TransferRateLimitRequestSDKType {
    chain: string;
    asset: string;
}
export interface TransferRateLimitResponse {
    transferRateLimit?: TransferRateLimit;
}
export interface TransferRateLimitResponseSDKType {
    transfer_rate_limit?: TransferRateLimitSDKType;
}
export interface TransferRateLimit {
    limit: Uint8Array;
    window?: Duration;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    /** time_left indicates the time left in the rate limit window */
    timeLeft?: Duration;
}
export interface TransferRateLimitSDKType {
    limit: Uint8Array;
    window?: DurationSDKType;
    incoming: Uint8Array;
    outgoing: Uint8Array;
    time_left?: DurationSDKType;
}
export interface MessageRequest {
    id: string;
}
export interface MessageRequestSDKType {
    id: string;
}
export interface MessageResponse {
    message?: GeneralMessage;
}
export interface MessageResponseSDKType {
    message?: GeneralMessageSDKType;
}
export declare const ChainMaintainersRequest: {
    encode(message: ChainMaintainersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainMaintainersRequest;
    fromPartial(object: Partial<ChainMaintainersRequest>): ChainMaintainersRequest;
};
export declare const ChainMaintainersResponse: {
    encode(message: ChainMaintainersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainMaintainersResponse;
    fromPartial(object: Partial<ChainMaintainersResponse>): ChainMaintainersResponse;
};
export declare const LatestDepositAddressRequest: {
    encode(message: LatestDepositAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LatestDepositAddressRequest;
    fromPartial(object: Partial<LatestDepositAddressRequest>): LatestDepositAddressRequest;
};
export declare const LatestDepositAddressResponse: {
    encode(message: LatestDepositAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LatestDepositAddressResponse;
    fromPartial(object: Partial<LatestDepositAddressResponse>): LatestDepositAddressResponse;
};
export declare const TransfersForChainRequest: {
    encode(message: TransfersForChainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransfersForChainRequest;
    fromPartial(object: Partial<TransfersForChainRequest>): TransfersForChainRequest;
};
export declare const TransfersForChainResponse: {
    encode(message: TransfersForChainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransfersForChainResponse;
    fromPartial(object: Partial<TransfersForChainResponse>): TransfersForChainResponse;
};
export declare const FeeInfoRequest: {
    encode(message: FeeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeInfoRequest;
    fromPartial(object: Partial<FeeInfoRequest>): FeeInfoRequest;
};
export declare const FeeInfoResponse: {
    encode(message: FeeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeInfoResponse;
    fromPartial(object: Partial<FeeInfoResponse>): FeeInfoResponse;
};
export declare const TransferFeeRequest: {
    encode(message: TransferFeeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferFeeRequest;
    fromPartial(object: Partial<TransferFeeRequest>): TransferFeeRequest;
};
export declare const TransferFeeResponse: {
    encode(message: TransferFeeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferFeeResponse;
    fromPartial(object: Partial<TransferFeeResponse>): TransferFeeResponse;
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
export declare const AssetsRequest: {
    encode(message: AssetsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetsRequest;
    fromPartial(object: Partial<AssetsRequest>): AssetsRequest;
};
export declare const AssetsResponse: {
    encode(message: AssetsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AssetsResponse;
    fromPartial(object: Partial<AssetsResponse>): AssetsResponse;
};
export declare const ChainStateRequest: {
    encode(message: ChainStateRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainStateRequest;
    fromPartial(object: Partial<ChainStateRequest>): ChainStateRequest;
};
export declare const ChainStateResponse: {
    encode(message: ChainStateResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainStateResponse;
    fromPartial(object: Partial<ChainStateResponse>): ChainStateResponse;
};
export declare const ChainsByAssetRequest: {
    encode(message: ChainsByAssetRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainsByAssetRequest;
    fromPartial(object: Partial<ChainsByAssetRequest>): ChainsByAssetRequest;
};
export declare const ChainsByAssetResponse: {
    encode(message: ChainsByAssetResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainsByAssetResponse;
    fromPartial(object: Partial<ChainsByAssetResponse>): ChainsByAssetResponse;
};
export declare const RecipientAddressRequest: {
    encode(message: RecipientAddressRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecipientAddressRequest;
    fromPartial(object: Partial<RecipientAddressRequest>): RecipientAddressRequest;
};
export declare const RecipientAddressResponse: {
    encode(message: RecipientAddressResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RecipientAddressResponse;
    fromPartial(object: Partial<RecipientAddressResponse>): RecipientAddressResponse;
};
export declare const TransferRateLimitRequest: {
    encode(message: TransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferRateLimitRequest;
    fromPartial(object: Partial<TransferRateLimitRequest>): TransferRateLimitRequest;
};
export declare const TransferRateLimitResponse: {
    encode(message: TransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferRateLimitResponse;
    fromPartial(object: Partial<TransferRateLimitResponse>): TransferRateLimitResponse;
};
export declare const TransferRateLimit: {
    encode(message: TransferRateLimit, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferRateLimit;
    fromPartial(object: Partial<TransferRateLimit>): TransferRateLimit;
};
export declare const MessageRequest: {
    encode(message: MessageRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageRequest;
    fromPartial(object: Partial<MessageRequest>): MessageRequest;
};
export declare const MessageResponse: {
    encode(message: MessageResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageResponse;
    fromPartial(object: Partial<MessageResponse>): MessageResponse;
};
