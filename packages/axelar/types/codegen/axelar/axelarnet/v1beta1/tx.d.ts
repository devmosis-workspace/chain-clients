import { Chain, ChainSDKType, Asset, AssetSDKType } from "../../nexus/exported/v1beta1/types";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Fee, FeeSDKType } from "./types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequest {
    sender: Uint8Array;
    recipientAddr: string;
    recipientChain: string;
    asset: string;
}
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequestSDKType {
    sender: Uint8Array;
    recipient_addr: string;
    recipient_chain: string;
    asset: string;
}
export interface LinkResponse {
    depositAddr: string;
}
export interface LinkResponseSDKType {
    deposit_addr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    sender: Uint8Array;
    depositAddress: Uint8Array;
    denom: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
    sender: Uint8Array;
    deposit_address: Uint8Array;
    denom: string;
}
export interface ConfirmDepositResponse {
}
export interface ConfirmDepositResponseSDKType {
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    sender: Uint8Array;
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequestSDKType {
    sender: Uint8Array;
}
export interface ExecutePendingTransfersResponse {
}
export interface ExecutePendingTransfersResponseSDKType {
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequest {
    sender: Uint8Array;
    chain: string;
    path: string;
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequestSDKType {
    sender: Uint8Array;
    chain: string;
    path: string;
}
export interface RegisterIBCPathResponse {
}
export interface RegisterIBCPathResponseSDKType {
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    sender: Uint8Array;
    /** @deprecated */
    chain?: Chain;
    addrPrefix: string;
    /** @deprecated */
    nativeAssets: Asset[];
    cosmosChain: string;
    ibcPath: string;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestSDKType {
    sender: Uint8Array;
    /** @deprecated */
    chain?: ChainSDKType;
    addr_prefix: string;
    /** @deprecated */
    native_assets: AssetSDKType[];
    cosmos_chain: string;
    ibc_path: string;
}
export interface AddCosmosBasedChainResponse {
}
export interface AddCosmosBasedChainResponseSDKType {
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
    sender: Uint8Array;
    chain: string;
    asset?: Asset;
    limit: Uint8Array;
    window?: Duration;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestSDKType {
    sender: Uint8Array;
    chain: string;
    asset?: AssetSDKType;
    limit: Uint8Array;
    window?: DurationSDKType;
}
export interface RegisterAssetResponse {
}
export interface RegisterAssetResponseSDKType {
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    sender: Uint8Array;
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequestSDKType {
    sender: Uint8Array;
}
export interface RouteIBCTransfersResponse {
}
export interface RouteIBCTransfersResponseSDKType {
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    sender: Uint8Array;
    feeCollector: Uint8Array;
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequestSDKType {
    sender: Uint8Array;
    fee_collector: Uint8Array;
}
export interface RegisterFeeCollectorResponse {
}
export interface RegisterFeeCollectorResponseSDKType {
}
export interface RetryIBCTransferRequest {
    sender: Uint8Array;
    chain: string;
    id: Long;
}
export interface RetryIBCTransferRequestSDKType {
    sender: Uint8Array;
    chain: string;
    id: Long;
}
export interface RetryIBCTransferResponse {
}
export interface RetryIBCTransferResponseSDKType {
}
export interface RouteMessageRequest {
    sender: Uint8Array;
    id: string;
    payload: Uint8Array;
}
export interface RouteMessageRequestSDKType {
    sender: Uint8Array;
    id: string;
    payload: Uint8Array;
}
export interface RouteMessageResponse {
}
export interface RouteMessageResponseSDKType {
}
export interface CallContractRequest {
    sender: Uint8Array;
    chain: string;
    contractAddress: string;
    payload: Uint8Array;
    fee?: Fee;
}
export interface CallContractRequestSDKType {
    sender: Uint8Array;
    chain: string;
    contract_address: string;
    payload: Uint8Array;
    fee?: FeeSDKType;
}
export interface CallContractResponse {
}
export interface CallContractResponseSDKType {
}
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LinkRequest;
    fromPartial(object: Partial<LinkRequest>): LinkRequest;
};
export declare const LinkResponse: {
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): LinkResponse;
    fromPartial(object: Partial<LinkResponse>): LinkResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmDepositRequest;
    fromPartial(object: Partial<ConfirmDepositRequest>): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ConfirmDepositResponse;
    fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse;
};
export declare const ExecutePendingTransfersRequest: {
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    fromPartial(object: Partial<ExecutePendingTransfersRequest>): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    fromPartial(_: Partial<ExecutePendingTransfersResponse>): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterIBCPathRequest;
    fromPartial(object: Partial<RegisterIBCPathRequest>): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterIBCPathResponse;
    fromPartial(_: Partial<RegisterIBCPathResponse>): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    fromPartial(object: Partial<AddCosmosBasedChainRequest>): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    fromPartial(_: Partial<AddCosmosBasedChainResponse>): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterAssetRequest;
    fromPartial(object: Partial<RegisterAssetRequest>): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterAssetResponse;
    fromPartial(_: Partial<RegisterAssetResponse>): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RouteIBCTransfersRequest;
    fromPartial(object: Partial<RouteIBCTransfersRequest>): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RouteIBCTransfersResponse;
    fromPartial(_: Partial<RouteIBCTransfersResponse>): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    fromPartial(object: Partial<RegisterFeeCollectorRequest>): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    fromPartial(_: Partial<RegisterFeeCollectorResponse>): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RetryIBCTransferRequest;
    fromPartial(object: Partial<RetryIBCTransferRequest>): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RetryIBCTransferResponse;
    fromPartial(_: Partial<RetryIBCTransferResponse>): RetryIBCTransferResponse;
};
export declare const RouteMessageRequest: {
    encode(message: RouteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RouteMessageRequest;
    fromPartial(object: Partial<RouteMessageRequest>): RouteMessageRequest;
};
export declare const RouteMessageResponse: {
    encode(_: RouteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RouteMessageResponse;
    fromPartial(_: Partial<RouteMessageResponse>): RouteMessageResponse;
};
export declare const CallContractRequest: {
    encode(message: CallContractRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CallContractRequest;
    fromPartial(object: Partial<CallContractRequest>): CallContractRequest;
};
export declare const CallContractResponse: {
    encode(_: CallContractResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CallContractResponse;
    fromPartial(_: Partial<CallContractResponse>): CallContractResponse;
};
