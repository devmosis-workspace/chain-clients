import { Chain, ChainAmino, ChainSDKType, Asset, AssetAmino, AssetSDKType } from "../../nexus/exported/v1beta1/types";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Fee, FeeAmino, FeeSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
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
export interface LinkRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.LinkRequest";
    value: Uint8Array;
}
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
 * address
 */
export interface LinkRequestAmino {
    sender?: string;
    recipient_addr?: string;
    recipient_chain?: string;
    asset?: string;
}
export interface LinkRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.LinkRequest";
    value: LinkRequestAmino;
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
export interface LinkResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.LinkResponse";
    value: Uint8Array;
}
export interface LinkResponseAmino {
    deposit_addr?: string;
}
export interface LinkResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.LinkResponse";
    value: LinkResponseAmino;
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
export interface ConfirmDepositRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest";
    value: Uint8Array;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestAmino {
    sender?: string;
    deposit_address?: string;
    denom?: string;
}
export interface ConfirmDepositRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ConfirmDepositRequest";
    value: ConfirmDepositRequestAmino;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
    sender: Uint8Array;
    deposit_address: Uint8Array;
    denom: string;
}
export interface ConfirmDepositResponse {
}
export interface ConfirmDepositResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse";
    value: Uint8Array;
}
export interface ConfirmDepositResponseAmino {
}
export interface ConfirmDepositResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ConfirmDepositResponse";
    value: ConfirmDepositResponseAmino;
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
export interface ExecutePendingTransfersRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
    value: Uint8Array;
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequestAmino {
    sender?: string;
}
export interface ExecutePendingTransfersRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersRequest";
    value: ExecutePendingTransfersRequestAmino;
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
export interface ExecutePendingTransfersResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
    value: Uint8Array;
}
export interface ExecutePendingTransfersResponseAmino {
}
export interface ExecutePendingTransfersResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ExecutePendingTransfersResponse";
    value: ExecutePendingTransfersResponseAmino;
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
export interface RegisterIBCPathRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
    value: Uint8Array;
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 */
/** @deprecated */
export interface RegisterIBCPathRequestAmino {
    sender?: string;
    chain?: string;
    path?: string;
}
export interface RegisterIBCPathRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterIBCPathRequest";
    value: RegisterIBCPathRequestAmino;
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
export interface RegisterIBCPathResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
    value: Uint8Array;
}
export interface RegisterIBCPathResponseAmino {
}
export interface RegisterIBCPathResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterIBCPathResponse";
    value: RegisterIBCPathResponseAmino;
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
    chain: Chain;
    addrPrefix: string;
    /** @deprecated */
    nativeAssets: Asset[];
    cosmosChain: string;
    ibcPath: string;
}
export interface AddCosmosBasedChainRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
    value: Uint8Array;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestAmino {
    sender?: string;
    /** @deprecated */
    chain?: ChainAmino;
    addr_prefix?: string;
    /** @deprecated */
    native_assets?: AssetAmino[];
    cosmos_chain?: string;
    ibc_path?: string;
}
export interface AddCosmosBasedChainRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainRequest";
    value: AddCosmosBasedChainRequestAmino;
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequestSDKType {
    sender: Uint8Array;
    /** @deprecated */
    chain: ChainSDKType;
    addr_prefix: string;
    /** @deprecated */
    native_assets: AssetSDKType[];
    cosmos_chain: string;
    ibc_path: string;
}
export interface AddCosmosBasedChainResponse {
}
export interface AddCosmosBasedChainResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
    value: Uint8Array;
}
export interface AddCosmosBasedChainResponseAmino {
}
export interface AddCosmosBasedChainResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.AddCosmosBasedChainResponse";
    value: AddCosmosBasedChainResponseAmino;
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
    asset: Asset;
    limit: Uint8Array;
    window: Duration;
}
export interface RegisterAssetRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetRequest";
    value: Uint8Array;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestAmino {
    sender?: string;
    chain?: string;
    asset?: AssetAmino;
    limit?: string;
    window?: DurationAmino;
}
export interface RegisterAssetRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterAssetRequest";
    value: RegisterAssetRequestAmino;
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequestSDKType {
    sender: Uint8Array;
    chain: string;
    asset: AssetSDKType;
    limit: Uint8Array;
    window: DurationSDKType;
}
export interface RegisterAssetResponse {
}
export interface RegisterAssetResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterAssetResponse";
    value: Uint8Array;
}
export interface RegisterAssetResponseAmino {
}
export interface RegisterAssetResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterAssetResponse";
    value: RegisterAssetResponseAmino;
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
export interface RouteIBCTransfersRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
    value: Uint8Array;
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequestAmino {
    sender?: string;
}
export interface RouteIBCTransfersRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RouteIBCTransfersRequest";
    value: RouteIBCTransfersRequestAmino;
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
export interface RouteIBCTransfersResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
    value: Uint8Array;
}
export interface RouteIBCTransfersResponseAmino {
}
export interface RouteIBCTransfersResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RouteIBCTransfersResponse";
    value: RouteIBCTransfersResponseAmino;
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
export interface RegisterFeeCollectorRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
    value: Uint8Array;
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequestAmino {
    sender?: string;
    fee_collector?: string;
}
export interface RegisterFeeCollectorRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorRequest";
    value: RegisterFeeCollectorRequestAmino;
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
export interface RegisterFeeCollectorResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
    value: Uint8Array;
}
export interface RegisterFeeCollectorResponseAmino {
}
export interface RegisterFeeCollectorResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RegisterFeeCollectorResponse";
    value: RegisterFeeCollectorResponseAmino;
}
export interface RegisterFeeCollectorResponseSDKType {
}
export interface RetryIBCTransferRequest {
    sender: Uint8Array;
    /** @deprecated */
    chain: string;
    id: bigint;
}
export interface RetryIBCTransferRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
    value: Uint8Array;
}
export interface RetryIBCTransferRequestAmino {
    sender?: string;
    /** @deprecated */
    chain?: string;
    id?: string;
}
export interface RetryIBCTransferRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RetryIBCTransferRequest";
    value: RetryIBCTransferRequestAmino;
}
export interface RetryIBCTransferRequestSDKType {
    sender: Uint8Array;
    /** @deprecated */
    chain: string;
    id: bigint;
}
export interface RetryIBCTransferResponse {
}
export interface RetryIBCTransferResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
    value: Uint8Array;
}
export interface RetryIBCTransferResponseAmino {
}
export interface RetryIBCTransferResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RetryIBCTransferResponse";
    value: RetryIBCTransferResponseAmino;
}
export interface RetryIBCTransferResponseSDKType {
}
export interface RouteMessageRequest {
    sender: Uint8Array;
    id: string;
    payload: Uint8Array;
    feegranter: Uint8Array;
}
export interface RouteMessageRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageRequest";
    value: Uint8Array;
}
export interface RouteMessageRequestAmino {
    sender?: string;
    id?: string;
    payload?: string;
    feegranter?: string;
}
export interface RouteMessageRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RouteMessageRequest";
    value: RouteMessageRequestAmino;
}
export interface RouteMessageRequestSDKType {
    sender: Uint8Array;
    id: string;
    payload: Uint8Array;
    feegranter: Uint8Array;
}
export interface RouteMessageResponse {
}
export interface RouteMessageResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.RouteMessageResponse";
    value: Uint8Array;
}
export interface RouteMessageResponseAmino {
}
export interface RouteMessageResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.RouteMessageResponse";
    value: RouteMessageResponseAmino;
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
export interface CallContractRequestProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractRequest";
    value: Uint8Array;
}
export interface CallContractRequestAmino {
    sender?: string;
    chain?: string;
    contract_address?: string;
    payload?: string;
    fee?: FeeAmino;
}
export interface CallContractRequestAminoMsg {
    type: "/axelar.axelarnet.v1beta1.CallContractRequest";
    value: CallContractRequestAmino;
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
export interface CallContractResponseProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractResponse";
    value: Uint8Array;
}
export interface CallContractResponseAmino {
}
export interface CallContractResponseAminoMsg {
    type: "/axelar.axelarnet.v1beta1.CallContractResponse";
    value: CallContractResponseAmino;
}
export interface CallContractResponseSDKType {
}
export declare const LinkRequest: {
    typeUrl: string;
    encode(message: LinkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LinkRequest;
    fromPartial(object: Partial<LinkRequest>): LinkRequest;
    fromAmino(object: LinkRequestAmino): LinkRequest;
    toAmino(message: LinkRequest): LinkRequestAmino;
    fromAminoMsg(object: LinkRequestAminoMsg): LinkRequest;
    fromProtoMsg(message: LinkRequestProtoMsg): LinkRequest;
    toProto(message: LinkRequest): Uint8Array;
    toProtoMsg(message: LinkRequest): LinkRequestProtoMsg;
};
export declare const LinkResponse: {
    typeUrl: string;
    encode(message: LinkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LinkResponse;
    fromPartial(object: Partial<LinkResponse>): LinkResponse;
    fromAmino(object: LinkResponseAmino): LinkResponse;
    toAmino(message: LinkResponse): LinkResponseAmino;
    fromAminoMsg(object: LinkResponseAminoMsg): LinkResponse;
    fromProtoMsg(message: LinkResponseProtoMsg): LinkResponse;
    toProto(message: LinkResponse): Uint8Array;
    toProtoMsg(message: LinkResponse): LinkResponseProtoMsg;
};
export declare const ConfirmDepositRequest: {
    typeUrl: string;
    encode(message: ConfirmDepositRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmDepositRequest;
    fromPartial(object: Partial<ConfirmDepositRequest>): ConfirmDepositRequest;
    fromAmino(object: ConfirmDepositRequestAmino): ConfirmDepositRequest;
    toAmino(message: ConfirmDepositRequest): ConfirmDepositRequestAmino;
    fromAminoMsg(object: ConfirmDepositRequestAminoMsg): ConfirmDepositRequest;
    fromProtoMsg(message: ConfirmDepositRequestProtoMsg): ConfirmDepositRequest;
    toProto(message: ConfirmDepositRequest): Uint8Array;
    toProtoMsg(message: ConfirmDepositRequest): ConfirmDepositRequestProtoMsg;
};
export declare const ConfirmDepositResponse: {
    typeUrl: string;
    encode(_: ConfirmDepositResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ConfirmDepositResponse;
    fromPartial(_: Partial<ConfirmDepositResponse>): ConfirmDepositResponse;
    fromAmino(_: ConfirmDepositResponseAmino): ConfirmDepositResponse;
    toAmino(_: ConfirmDepositResponse): ConfirmDepositResponseAmino;
    fromAminoMsg(object: ConfirmDepositResponseAminoMsg): ConfirmDepositResponse;
    fromProtoMsg(message: ConfirmDepositResponseProtoMsg): ConfirmDepositResponse;
    toProto(message: ConfirmDepositResponse): Uint8Array;
    toProtoMsg(message: ConfirmDepositResponse): ConfirmDepositResponseProtoMsg;
};
export declare const ExecutePendingTransfersRequest: {
    typeUrl: string;
    encode(message: ExecutePendingTransfersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    fromPartial(object: Partial<ExecutePendingTransfersRequest>): ExecutePendingTransfersRequest;
    fromAmino(object: ExecutePendingTransfersRequestAmino): ExecutePendingTransfersRequest;
    toAmino(message: ExecutePendingTransfersRequest): ExecutePendingTransfersRequestAmino;
    fromAminoMsg(object: ExecutePendingTransfersRequestAminoMsg): ExecutePendingTransfersRequest;
    fromProtoMsg(message: ExecutePendingTransfersRequestProtoMsg): ExecutePendingTransfersRequest;
    toProto(message: ExecutePendingTransfersRequest): Uint8Array;
    toProtoMsg(message: ExecutePendingTransfersRequest): ExecutePendingTransfersRequestProtoMsg;
};
export declare const ExecutePendingTransfersResponse: {
    typeUrl: string;
    encode(_: ExecutePendingTransfersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    fromPartial(_: Partial<ExecutePendingTransfersResponse>): ExecutePendingTransfersResponse;
    fromAmino(_: ExecutePendingTransfersResponseAmino): ExecutePendingTransfersResponse;
    toAmino(_: ExecutePendingTransfersResponse): ExecutePendingTransfersResponseAmino;
    fromAminoMsg(object: ExecutePendingTransfersResponseAminoMsg): ExecutePendingTransfersResponse;
    fromProtoMsg(message: ExecutePendingTransfersResponseProtoMsg): ExecutePendingTransfersResponse;
    toProto(message: ExecutePendingTransfersResponse): Uint8Array;
    toProtoMsg(message: ExecutePendingTransfersResponse): ExecutePendingTransfersResponseProtoMsg;
};
export declare const RegisterIBCPathRequest: {
    typeUrl: string;
    encode(message: RegisterIBCPathRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterIBCPathRequest;
    fromPartial(object: Partial<RegisterIBCPathRequest>): RegisterIBCPathRequest;
    fromAmino(object: RegisterIBCPathRequestAmino): RegisterIBCPathRequest;
    toAmino(message: RegisterIBCPathRequest): RegisterIBCPathRequestAmino;
    fromAminoMsg(object: RegisterIBCPathRequestAminoMsg): RegisterIBCPathRequest;
    fromProtoMsg(message: RegisterIBCPathRequestProtoMsg): RegisterIBCPathRequest;
    toProto(message: RegisterIBCPathRequest): Uint8Array;
    toProtoMsg(message: RegisterIBCPathRequest): RegisterIBCPathRequestProtoMsg;
};
export declare const RegisterIBCPathResponse: {
    typeUrl: string;
    encode(_: RegisterIBCPathResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterIBCPathResponse;
    fromPartial(_: Partial<RegisterIBCPathResponse>): RegisterIBCPathResponse;
    fromAmino(_: RegisterIBCPathResponseAmino): RegisterIBCPathResponse;
    toAmino(_: RegisterIBCPathResponse): RegisterIBCPathResponseAmino;
    fromAminoMsg(object: RegisterIBCPathResponseAminoMsg): RegisterIBCPathResponse;
    fromProtoMsg(message: RegisterIBCPathResponseProtoMsg): RegisterIBCPathResponse;
    toProto(message: RegisterIBCPathResponse): Uint8Array;
    toProtoMsg(message: RegisterIBCPathResponse): RegisterIBCPathResponseProtoMsg;
};
export declare const AddCosmosBasedChainRequest: {
    typeUrl: string;
    encode(message: AddCosmosBasedChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    fromPartial(object: Partial<AddCosmosBasedChainRequest>): AddCosmosBasedChainRequest;
    fromAmino(object: AddCosmosBasedChainRequestAmino): AddCosmosBasedChainRequest;
    toAmino(message: AddCosmosBasedChainRequest): AddCosmosBasedChainRequestAmino;
    fromAminoMsg(object: AddCosmosBasedChainRequestAminoMsg): AddCosmosBasedChainRequest;
    fromProtoMsg(message: AddCosmosBasedChainRequestProtoMsg): AddCosmosBasedChainRequest;
    toProto(message: AddCosmosBasedChainRequest): Uint8Array;
    toProtoMsg(message: AddCosmosBasedChainRequest): AddCosmosBasedChainRequestProtoMsg;
};
export declare const AddCosmosBasedChainResponse: {
    typeUrl: string;
    encode(_: AddCosmosBasedChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    fromPartial(_: Partial<AddCosmosBasedChainResponse>): AddCosmosBasedChainResponse;
    fromAmino(_: AddCosmosBasedChainResponseAmino): AddCosmosBasedChainResponse;
    toAmino(_: AddCosmosBasedChainResponse): AddCosmosBasedChainResponseAmino;
    fromAminoMsg(object: AddCosmosBasedChainResponseAminoMsg): AddCosmosBasedChainResponse;
    fromProtoMsg(message: AddCosmosBasedChainResponseProtoMsg): AddCosmosBasedChainResponse;
    toProto(message: AddCosmosBasedChainResponse): Uint8Array;
    toProtoMsg(message: AddCosmosBasedChainResponse): AddCosmosBasedChainResponseProtoMsg;
};
export declare const RegisterAssetRequest: {
    typeUrl: string;
    encode(message: RegisterAssetRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterAssetRequest;
    fromPartial(object: Partial<RegisterAssetRequest>): RegisterAssetRequest;
    fromAmino(object: RegisterAssetRequestAmino): RegisterAssetRequest;
    toAmino(message: RegisterAssetRequest): RegisterAssetRequestAmino;
    fromAminoMsg(object: RegisterAssetRequestAminoMsg): RegisterAssetRequest;
    fromProtoMsg(message: RegisterAssetRequestProtoMsg): RegisterAssetRequest;
    toProto(message: RegisterAssetRequest): Uint8Array;
    toProtoMsg(message: RegisterAssetRequest): RegisterAssetRequestProtoMsg;
};
export declare const RegisterAssetResponse: {
    typeUrl: string;
    encode(_: RegisterAssetResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterAssetResponse;
    fromPartial(_: Partial<RegisterAssetResponse>): RegisterAssetResponse;
    fromAmino(_: RegisterAssetResponseAmino): RegisterAssetResponse;
    toAmino(_: RegisterAssetResponse): RegisterAssetResponseAmino;
    fromAminoMsg(object: RegisterAssetResponseAminoMsg): RegisterAssetResponse;
    fromProtoMsg(message: RegisterAssetResponseProtoMsg): RegisterAssetResponse;
    toProto(message: RegisterAssetResponse): Uint8Array;
    toProtoMsg(message: RegisterAssetResponse): RegisterAssetResponseProtoMsg;
};
export declare const RouteIBCTransfersRequest: {
    typeUrl: string;
    encode(message: RouteIBCTransfersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RouteIBCTransfersRequest;
    fromPartial(object: Partial<RouteIBCTransfersRequest>): RouteIBCTransfersRequest;
    fromAmino(object: RouteIBCTransfersRequestAmino): RouteIBCTransfersRequest;
    toAmino(message: RouteIBCTransfersRequest): RouteIBCTransfersRequestAmino;
    fromAminoMsg(object: RouteIBCTransfersRequestAminoMsg): RouteIBCTransfersRequest;
    fromProtoMsg(message: RouteIBCTransfersRequestProtoMsg): RouteIBCTransfersRequest;
    toProto(message: RouteIBCTransfersRequest): Uint8Array;
    toProtoMsg(message: RouteIBCTransfersRequest): RouteIBCTransfersRequestProtoMsg;
};
export declare const RouteIBCTransfersResponse: {
    typeUrl: string;
    encode(_: RouteIBCTransfersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RouteIBCTransfersResponse;
    fromPartial(_: Partial<RouteIBCTransfersResponse>): RouteIBCTransfersResponse;
    fromAmino(_: RouteIBCTransfersResponseAmino): RouteIBCTransfersResponse;
    toAmino(_: RouteIBCTransfersResponse): RouteIBCTransfersResponseAmino;
    fromAminoMsg(object: RouteIBCTransfersResponseAminoMsg): RouteIBCTransfersResponse;
    fromProtoMsg(message: RouteIBCTransfersResponseProtoMsg): RouteIBCTransfersResponse;
    toProto(message: RouteIBCTransfersResponse): Uint8Array;
    toProtoMsg(message: RouteIBCTransfersResponse): RouteIBCTransfersResponseProtoMsg;
};
export declare const RegisterFeeCollectorRequest: {
    typeUrl: string;
    encode(message: RegisterFeeCollectorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    fromPartial(object: Partial<RegisterFeeCollectorRequest>): RegisterFeeCollectorRequest;
    fromAmino(object: RegisterFeeCollectorRequestAmino): RegisterFeeCollectorRequest;
    toAmino(message: RegisterFeeCollectorRequest): RegisterFeeCollectorRequestAmino;
    fromAminoMsg(object: RegisterFeeCollectorRequestAminoMsg): RegisterFeeCollectorRequest;
    fromProtoMsg(message: RegisterFeeCollectorRequestProtoMsg): RegisterFeeCollectorRequest;
    toProto(message: RegisterFeeCollectorRequest): Uint8Array;
    toProtoMsg(message: RegisterFeeCollectorRequest): RegisterFeeCollectorRequestProtoMsg;
};
export declare const RegisterFeeCollectorResponse: {
    typeUrl: string;
    encode(_: RegisterFeeCollectorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    fromPartial(_: Partial<RegisterFeeCollectorResponse>): RegisterFeeCollectorResponse;
    fromAmino(_: RegisterFeeCollectorResponseAmino): RegisterFeeCollectorResponse;
    toAmino(_: RegisterFeeCollectorResponse): RegisterFeeCollectorResponseAmino;
    fromAminoMsg(object: RegisterFeeCollectorResponseAminoMsg): RegisterFeeCollectorResponse;
    fromProtoMsg(message: RegisterFeeCollectorResponseProtoMsg): RegisterFeeCollectorResponse;
    toProto(message: RegisterFeeCollectorResponse): Uint8Array;
    toProtoMsg(message: RegisterFeeCollectorResponse): RegisterFeeCollectorResponseProtoMsg;
};
export declare const RetryIBCTransferRequest: {
    typeUrl: string;
    encode(message: RetryIBCTransferRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RetryIBCTransferRequest;
    fromPartial(object: Partial<RetryIBCTransferRequest>): RetryIBCTransferRequest;
    fromAmino(object: RetryIBCTransferRequestAmino): RetryIBCTransferRequest;
    toAmino(message: RetryIBCTransferRequest): RetryIBCTransferRequestAmino;
    fromAminoMsg(object: RetryIBCTransferRequestAminoMsg): RetryIBCTransferRequest;
    fromProtoMsg(message: RetryIBCTransferRequestProtoMsg): RetryIBCTransferRequest;
    toProto(message: RetryIBCTransferRequest): Uint8Array;
    toProtoMsg(message: RetryIBCTransferRequest): RetryIBCTransferRequestProtoMsg;
};
export declare const RetryIBCTransferResponse: {
    typeUrl: string;
    encode(_: RetryIBCTransferResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RetryIBCTransferResponse;
    fromPartial(_: Partial<RetryIBCTransferResponse>): RetryIBCTransferResponse;
    fromAmino(_: RetryIBCTransferResponseAmino): RetryIBCTransferResponse;
    toAmino(_: RetryIBCTransferResponse): RetryIBCTransferResponseAmino;
    fromAminoMsg(object: RetryIBCTransferResponseAminoMsg): RetryIBCTransferResponse;
    fromProtoMsg(message: RetryIBCTransferResponseProtoMsg): RetryIBCTransferResponse;
    toProto(message: RetryIBCTransferResponse): Uint8Array;
    toProtoMsg(message: RetryIBCTransferResponse): RetryIBCTransferResponseProtoMsg;
};
export declare const RouteMessageRequest: {
    typeUrl: string;
    encode(message: RouteMessageRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RouteMessageRequest;
    fromPartial(object: Partial<RouteMessageRequest>): RouteMessageRequest;
    fromAmino(object: RouteMessageRequestAmino): RouteMessageRequest;
    toAmino(message: RouteMessageRequest): RouteMessageRequestAmino;
    fromAminoMsg(object: RouteMessageRequestAminoMsg): RouteMessageRequest;
    fromProtoMsg(message: RouteMessageRequestProtoMsg): RouteMessageRequest;
    toProto(message: RouteMessageRequest): Uint8Array;
    toProtoMsg(message: RouteMessageRequest): RouteMessageRequestProtoMsg;
};
export declare const RouteMessageResponse: {
    typeUrl: string;
    encode(_: RouteMessageResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RouteMessageResponse;
    fromPartial(_: Partial<RouteMessageResponse>): RouteMessageResponse;
    fromAmino(_: RouteMessageResponseAmino): RouteMessageResponse;
    toAmino(_: RouteMessageResponse): RouteMessageResponseAmino;
    fromAminoMsg(object: RouteMessageResponseAminoMsg): RouteMessageResponse;
    fromProtoMsg(message: RouteMessageResponseProtoMsg): RouteMessageResponse;
    toProto(message: RouteMessageResponse): Uint8Array;
    toProtoMsg(message: RouteMessageResponse): RouteMessageResponseProtoMsg;
};
export declare const CallContractRequest: {
    typeUrl: string;
    encode(message: CallContractRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CallContractRequest;
    fromPartial(object: Partial<CallContractRequest>): CallContractRequest;
    fromAmino(object: CallContractRequestAmino): CallContractRequest;
    toAmino(message: CallContractRequest): CallContractRequestAmino;
    fromAminoMsg(object: CallContractRequestAminoMsg): CallContractRequest;
    fromProtoMsg(message: CallContractRequestProtoMsg): CallContractRequest;
    toProto(message: CallContractRequest): Uint8Array;
    toProtoMsg(message: CallContractRequest): CallContractRequestProtoMsg;
};
export declare const CallContractResponse: {
    typeUrl: string;
    encode(_: CallContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CallContractResponse;
    fromPartial(_: Partial<CallContractResponse>): CallContractResponse;
    fromAmino(_: CallContractResponseAmino): CallContractResponse;
    toAmino(_: CallContractResponse): CallContractResponseAmino;
    fromAminoMsg(object: CallContractResponseAminoMsg): CallContractResponse;
    fromProtoMsg(message: CallContractResponseProtoMsg): CallContractResponse;
    toProto(message: CallContractResponse): Uint8Array;
    toProtoMsg(message: CallContractResponse): CallContractResponseProtoMsg;
};
