import { Asset, AssetSDKType, TokenDetails, TokenDetailsSDKType } from "./types";
import { KeyType } from "../../tss/exported/v1beta1/types";
import * as _m0 from "protobufjs/minimal";
export interface SetGatewayRequest {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayRequestSDKType {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayResponse {
}
export interface SetGatewayResponseSDKType {
}
export interface ConfirmGatewayTxRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmGatewayTxRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmGatewayTxResponse {
}
export interface ConfirmGatewayTxResponseSDKType {
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
    /** @deprecated */
    amount: Uint8Array;
    burnerAddress: Uint8Array;
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
    /** @deprecated */
    amount: Uint8Array;
    burner_address: Uint8Array;
}
export interface ConfirmDepositResponse {
}
export interface ConfirmDepositResponseSDKType {
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
    asset?: Asset;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
    asset?: AssetSDKType;
}
export interface ConfirmTokenResponse {
}
export interface ConfirmTokenResponseSDKType {
}
export interface ConfirmTransferKeyRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmTransferKeyRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmTransferKeyResponse {
}
export interface ConfirmTransferKeyResponseSDKType {
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
    sender: Uint8Array;
    chain: string;
    recipientAddr: string;
    asset: string;
    recipientChain: string;
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequestSDKType {
    sender: Uint8Array;
    chain: string;
    recipient_addr: string;
    asset: string;
    recipient_chain: string;
}
export interface LinkResponse {
    depositAddr: string;
}
export interface LinkResponseSDKType {
    deposit_addr: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
    sender: Uint8Array;
    chain: string;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequestSDKType {
    sender: Uint8Array;
    chain: string;
}
export interface CreateBurnTokensResponse {
}
export interface CreateBurnTokensResponseSDKType {
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
    sender: Uint8Array;
    chain: string;
    asset?: Asset;
    tokenDetails?: TokenDetails;
    address: Uint8Array;
    dailyMintLimit: string;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestSDKType {
    sender: Uint8Array;
    chain: string;
    asset?: AssetSDKType;
    token_details?: TokenDetailsSDKType;
    address: Uint8Array;
    daily_mint_limit: string;
}
export interface CreateDeployTokenResponse {
}
export interface CreateDeployTokenResponseSDKType {
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
    sender: Uint8Array;
    chain: string;
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequestSDKType {
    sender: Uint8Array;
    chain: string;
}
export interface CreatePendingTransfersResponse {
}
export interface CreatePendingTransfersResponseSDKType {
}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
/** @deprecated */
export interface CreateTransferOwnershipRequestSDKType {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
/** @deprecated */
export interface CreateTransferOwnershipResponse {
}
/** @deprecated */
export interface CreateTransferOwnershipResponseSDKType {
}
export interface CreateTransferOperatorshipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface CreateTransferOperatorshipRequestSDKType {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface CreateTransferOperatorshipResponse {
}
export interface CreateTransferOperatorshipResponseSDKType {
}
export interface SignCommandsRequest {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsRequestSDKType {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsResponse {
    batchedCommandsId: Uint8Array;
    commandCount: number;
}
export interface SignCommandsResponseSDKType {
    batched_commands_id: Uint8Array;
    command_count: number;
}
export interface AddChainRequest {
    sender: Uint8Array;
    name: string;
    /** @deprecated */
    keyType: KeyType;
    params: Uint8Array;
}
export interface AddChainRequestSDKType {
    sender: Uint8Array;
    name: string;
    /** @deprecated */
    key_type: KeyType;
    params: Uint8Array;
}
export interface AddChainResponse {
}
export interface AddChainResponseSDKType {
}
export interface RetryFailedEventRequest {
    sender: Uint8Array;
    chain: string;
    eventId: string;
}
export interface RetryFailedEventRequestSDKType {
    sender: Uint8Array;
    chain: string;
    event_id: string;
}
export interface RetryFailedEventResponse {
}
export interface RetryFailedEventResponseSDKType {
}
export declare const SetGatewayRequest: {
    encode(message: SetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SetGatewayRequest;
    fromPartial(object: Partial<SetGatewayRequest>): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SetGatewayResponse;
    fromPartial(_: Partial<SetGatewayResponse>): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    fromPartial(object: Partial<ConfirmGatewayTxRequest>): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    fromPartial(_: Partial<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse;
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
export declare const ConfirmTokenRequest: {
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmTokenRequest;
    fromPartial(object: Partial<ConfirmTokenRequest>): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ConfirmTokenResponse;
    fromPartial(_: Partial<ConfirmTokenResponse>): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    fromPartial(object: Partial<ConfirmTransferKeyRequest>): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    fromPartial(_: Partial<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse;
};
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
export declare const CreateBurnTokensRequest: {
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateBurnTokensRequest;
    fromPartial(object: Partial<CreateBurnTokensRequest>): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CreateBurnTokensResponse;
    fromPartial(_: Partial<CreateBurnTokensResponse>): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateDeployTokenRequest;
    fromPartial(object: Partial<CreateDeployTokenRequest>): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CreateDeployTokenResponse;
    fromPartial(_: Partial<CreateDeployTokenResponse>): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreatePendingTransfersRequest;
    fromPartial(object: Partial<CreatePendingTransfersRequest>): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CreatePendingTransfersResponse;
    fromPartial(_: Partial<CreatePendingTransfersResponse>): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    fromPartial(object: Partial<CreateTransferOwnershipRequest>): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    fromPartial(_: Partial<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    fromPartial(object: Partial<CreateTransferOperatorshipRequest>): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    fromPartial(_: Partial<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignCommandsRequest;
    fromPartial(object: Partial<SignCommandsRequest>): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
    encode(message: SignCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SignCommandsResponse;
    fromPartial(object: Partial<SignCommandsResponse>): SignCommandsResponse;
};
export declare const AddChainRequest: {
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AddChainRequest;
    fromPartial(object: Partial<AddChainRequest>): AddChainRequest;
};
export declare const AddChainResponse: {
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): AddChainResponse;
    fromPartial(_: Partial<AddChainResponse>): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RetryFailedEventRequest;
    fromPartial(object: Partial<RetryFailedEventRequest>): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): RetryFailedEventResponse;
    fromPartial(_: Partial<RetryFailedEventResponse>): RetryFailedEventResponse;
};
