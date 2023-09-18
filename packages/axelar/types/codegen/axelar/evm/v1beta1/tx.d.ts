import { Asset, AssetAmino, AssetSDKType, TokenDetails, TokenDetailsAmino, TokenDetailsSDKType } from "./types";
import { KeyType } from "../../tss/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
export interface SetGatewayRequest {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.SetGatewayRequest";
    value: Uint8Array;
}
export interface SetGatewayRequestAmino {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayRequestAminoMsg {
    type: "/axelar.evm.v1beta1.SetGatewayRequest";
    value: SetGatewayRequestAmino;
}
export interface SetGatewayRequestSDKType {
    sender: Uint8Array;
    chain: string;
    address: Uint8Array;
}
export interface SetGatewayResponse {
}
export interface SetGatewayResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.SetGatewayResponse";
    value: Uint8Array;
}
export interface SetGatewayResponseAmino {
}
export interface SetGatewayResponseAminoMsg {
    type: "/axelar.evm.v1beta1.SetGatewayResponse";
    value: SetGatewayResponseAmino;
}
export interface SetGatewayResponseSDKType {
}
export interface ConfirmGatewayTxRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmGatewayTxRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest";
    value: Uint8Array;
}
export interface ConfirmGatewayTxRequestAmino {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmGatewayTxRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmGatewayTxRequest";
    value: ConfirmGatewayTxRequestAmino;
}
export interface ConfirmGatewayTxRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmGatewayTxResponse {
}
export interface ConfirmGatewayTxResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse";
    value: Uint8Array;
}
export interface ConfirmGatewayTxResponseAmino {
}
export interface ConfirmGatewayTxResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmGatewayTxResponse";
    value: ConfirmGatewayTxResponseAmino;
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
export interface ConfirmDepositRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositRequest";
    value: Uint8Array;
}
/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequestAmino {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
    /** @deprecated */
    amount: Uint8Array;
    burner_address: Uint8Array;
}
export interface ConfirmDepositRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmDepositRequest";
    value: ConfirmDepositRequestAmino;
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
export interface ConfirmDepositResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositResponse";
    value: Uint8Array;
}
export interface ConfirmDepositResponseAmino {
}
export interface ConfirmDepositResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmDepositResponse";
    value: ConfirmDepositResponseAmino;
}
export interface ConfirmDepositResponseSDKType {
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
    asset: Asset;
}
export interface ConfirmTokenRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenRequest";
    value: Uint8Array;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestAmino {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
    asset?: AssetAmino;
}
export interface ConfirmTokenRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmTokenRequest";
    value: ConfirmTokenRequestAmino;
}
/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
    asset: AssetSDKType;
}
export interface ConfirmTokenResponse {
}
export interface ConfirmTokenResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenResponse";
    value: Uint8Array;
}
export interface ConfirmTokenResponseAmino {
}
export interface ConfirmTokenResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmTokenResponse";
    value: ConfirmTokenResponseAmino;
}
export interface ConfirmTokenResponseSDKType {
}
export interface ConfirmTransferKeyRequest {
    sender: Uint8Array;
    chain: string;
    txId: Uint8Array;
}
export interface ConfirmTransferKeyRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest";
    value: Uint8Array;
}
export interface ConfirmTransferKeyRequestAmino {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmTransferKeyRequestAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmTransferKeyRequest";
    value: ConfirmTransferKeyRequestAmino;
}
export interface ConfirmTransferKeyRequestSDKType {
    sender: Uint8Array;
    chain: string;
    tx_id: Uint8Array;
}
export interface ConfirmTransferKeyResponse {
}
export interface ConfirmTransferKeyResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse";
    value: Uint8Array;
}
export interface ConfirmTransferKeyResponseAmino {
}
export interface ConfirmTransferKeyResponseAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmTransferKeyResponse";
    value: ConfirmTransferKeyResponseAmino;
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
export interface LinkRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.LinkRequest";
    value: Uint8Array;
}
/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequestAmino {
    sender: Uint8Array;
    chain: string;
    recipient_addr: string;
    asset: string;
    recipient_chain: string;
}
export interface LinkRequestAminoMsg {
    type: "/axelar.evm.v1beta1.LinkRequest";
    value: LinkRequestAmino;
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
export interface LinkResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.LinkResponse";
    value: Uint8Array;
}
export interface LinkResponseAmino {
    deposit_addr: string;
}
export interface LinkResponseAminoMsg {
    type: "/axelar.evm.v1beta1.LinkResponse";
    value: LinkResponseAmino;
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
export interface CreateBurnTokensRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensRequest";
    value: Uint8Array;
}
/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequestAmino {
    sender: Uint8Array;
    chain: string;
}
export interface CreateBurnTokensRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CreateBurnTokensRequest";
    value: CreateBurnTokensRequestAmino;
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
export interface CreateBurnTokensResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateBurnTokensResponse";
    value: Uint8Array;
}
export interface CreateBurnTokensResponseAmino {
}
export interface CreateBurnTokensResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CreateBurnTokensResponse";
    value: CreateBurnTokensResponseAmino;
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
    asset: Asset;
    tokenDetails: TokenDetails;
    address: Uint8Array;
    dailyMintLimit: string;
}
export interface CreateDeployTokenRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenRequest";
    value: Uint8Array;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestAmino {
    sender: Uint8Array;
    chain: string;
    asset?: AssetAmino;
    token_details?: TokenDetailsAmino;
    address: Uint8Array;
    daily_mint_limit: string;
}
export interface CreateDeployTokenRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CreateDeployTokenRequest";
    value: CreateDeployTokenRequestAmino;
}
/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequestSDKType {
    sender: Uint8Array;
    chain: string;
    asset: AssetSDKType;
    token_details: TokenDetailsSDKType;
    address: Uint8Array;
    daily_mint_limit: string;
}
export interface CreateDeployTokenResponse {
}
export interface CreateDeployTokenResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateDeployTokenResponse";
    value: Uint8Array;
}
export interface CreateDeployTokenResponseAmino {
}
export interface CreateDeployTokenResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CreateDeployTokenResponse";
    value: CreateDeployTokenResponseAmino;
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
export interface CreatePendingTransfersRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersRequest";
    value: Uint8Array;
}
/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequestAmino {
    sender: Uint8Array;
    chain: string;
}
export interface CreatePendingTransfersRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CreatePendingTransfersRequest";
    value: CreatePendingTransfersRequestAmino;
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
export interface CreatePendingTransfersResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreatePendingTransfersResponse";
    value: Uint8Array;
}
export interface CreatePendingTransfersResponseAmino {
}
export interface CreatePendingTransfersResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CreatePendingTransfersResponse";
    value: CreatePendingTransfersResponseAmino;
}
export interface CreatePendingTransfersResponseSDKType {
}
/** @deprecated */
export interface CreateTransferOwnershipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface CreateTransferOwnershipRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest";
    value: Uint8Array;
}
/** @deprecated */
export interface CreateTransferOwnershipRequestAmino {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface CreateTransferOwnershipRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CreateTransferOwnershipRequest";
    value: CreateTransferOwnershipRequestAmino;
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
export interface CreateTransferOwnershipResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse";
    value: Uint8Array;
}
/** @deprecated */
export interface CreateTransferOwnershipResponseAmino {
}
export interface CreateTransferOwnershipResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CreateTransferOwnershipResponse";
    value: CreateTransferOwnershipResponseAmino;
}
/** @deprecated */
export interface CreateTransferOwnershipResponseSDKType {
}
export interface CreateTransferOperatorshipRequest {
    sender: Uint8Array;
    chain: string;
    keyId: string;
}
export interface CreateTransferOperatorshipRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
    value: Uint8Array;
}
export interface CreateTransferOperatorshipRequestAmino {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface CreateTransferOperatorshipRequestAminoMsg {
    type: "/axelar.evm.v1beta1.CreateTransferOperatorshipRequest";
    value: CreateTransferOperatorshipRequestAmino;
}
export interface CreateTransferOperatorshipRequestSDKType {
    sender: Uint8Array;
    chain: string;
    key_id: string;
}
export interface CreateTransferOperatorshipResponse {
}
export interface CreateTransferOperatorshipResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
    value: Uint8Array;
}
export interface CreateTransferOperatorshipResponseAmino {
}
export interface CreateTransferOperatorshipResponseAminoMsg {
    type: "/axelar.evm.v1beta1.CreateTransferOperatorshipResponse";
    value: CreateTransferOperatorshipResponseAmino;
}
export interface CreateTransferOperatorshipResponseSDKType {
}
export interface SignCommandsRequest {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.SignCommandsRequest";
    value: Uint8Array;
}
export interface SignCommandsRequestAmino {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsRequestAminoMsg {
    type: "/axelar.evm.v1beta1.SignCommandsRequest";
    value: SignCommandsRequestAmino;
}
export interface SignCommandsRequestSDKType {
    sender: Uint8Array;
    chain: string;
}
export interface SignCommandsResponse {
    batchedCommandsId: Uint8Array;
    commandCount: number;
}
export interface SignCommandsResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.SignCommandsResponse";
    value: Uint8Array;
}
export interface SignCommandsResponseAmino {
    batched_commands_id: Uint8Array;
    command_count: number;
}
export interface SignCommandsResponseAminoMsg {
    type: "/axelar.evm.v1beta1.SignCommandsResponse";
    value: SignCommandsResponseAmino;
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
export interface AddChainRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.AddChainRequest";
    value: Uint8Array;
}
export interface AddChainRequestAmino {
    sender: Uint8Array;
    name: string;
    /** @deprecated */
    key_type: KeyType;
    params: Uint8Array;
}
export interface AddChainRequestAminoMsg {
    type: "/axelar.evm.v1beta1.AddChainRequest";
    value: AddChainRequestAmino;
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
export interface AddChainResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.AddChainResponse";
    value: Uint8Array;
}
export interface AddChainResponseAmino {
}
export interface AddChainResponseAminoMsg {
    type: "/axelar.evm.v1beta1.AddChainResponse";
    value: AddChainResponseAmino;
}
export interface AddChainResponseSDKType {
}
export interface RetryFailedEventRequest {
    sender: Uint8Array;
    chain: string;
    eventId: string;
}
export interface RetryFailedEventRequestProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.RetryFailedEventRequest";
    value: Uint8Array;
}
export interface RetryFailedEventRequestAmino {
    sender: Uint8Array;
    chain: string;
    event_id: string;
}
export interface RetryFailedEventRequestAminoMsg {
    type: "/axelar.evm.v1beta1.RetryFailedEventRequest";
    value: RetryFailedEventRequestAmino;
}
export interface RetryFailedEventRequestSDKType {
    sender: Uint8Array;
    chain: string;
    event_id: string;
}
export interface RetryFailedEventResponse {
}
export interface RetryFailedEventResponseProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.RetryFailedEventResponse";
    value: Uint8Array;
}
export interface RetryFailedEventResponseAmino {
}
export interface RetryFailedEventResponseAminoMsg {
    type: "/axelar.evm.v1beta1.RetryFailedEventResponse";
    value: RetryFailedEventResponseAmino;
}
export interface RetryFailedEventResponseSDKType {
}
export declare const SetGatewayRequest: {
    typeUrl: string;
    encode(message: SetGatewayRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SetGatewayRequest;
    fromPartial(object: Partial<SetGatewayRequest>): SetGatewayRequest;
    fromAmino(object: SetGatewayRequestAmino): SetGatewayRequest;
    toAmino(message: SetGatewayRequest): SetGatewayRequestAmino;
    fromAminoMsg(object: SetGatewayRequestAminoMsg): SetGatewayRequest;
    fromProtoMsg(message: SetGatewayRequestProtoMsg): SetGatewayRequest;
    toProto(message: SetGatewayRequest): Uint8Array;
    toProtoMsg(message: SetGatewayRequest): SetGatewayRequestProtoMsg;
};
export declare const SetGatewayResponse: {
    typeUrl: string;
    encode(_: SetGatewayResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): SetGatewayResponse;
    fromPartial(_: Partial<SetGatewayResponse>): SetGatewayResponse;
    fromAmino(_: SetGatewayResponseAmino): SetGatewayResponse;
    toAmino(_: SetGatewayResponse): SetGatewayResponseAmino;
    fromAminoMsg(object: SetGatewayResponseAminoMsg): SetGatewayResponse;
    fromProtoMsg(message: SetGatewayResponseProtoMsg): SetGatewayResponse;
    toProto(message: SetGatewayResponse): Uint8Array;
    toProtoMsg(message: SetGatewayResponse): SetGatewayResponseProtoMsg;
};
export declare const ConfirmGatewayTxRequest: {
    typeUrl: string;
    encode(message: ConfirmGatewayTxRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    fromPartial(object: Partial<ConfirmGatewayTxRequest>): ConfirmGatewayTxRequest;
    fromAmino(object: ConfirmGatewayTxRequestAmino): ConfirmGatewayTxRequest;
    toAmino(message: ConfirmGatewayTxRequest): ConfirmGatewayTxRequestAmino;
    fromAminoMsg(object: ConfirmGatewayTxRequestAminoMsg): ConfirmGatewayTxRequest;
    fromProtoMsg(message: ConfirmGatewayTxRequestProtoMsg): ConfirmGatewayTxRequest;
    toProto(message: ConfirmGatewayTxRequest): Uint8Array;
    toProtoMsg(message: ConfirmGatewayTxRequest): ConfirmGatewayTxRequestProtoMsg;
};
export declare const ConfirmGatewayTxResponse: {
    typeUrl: string;
    encode(_: ConfirmGatewayTxResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    fromPartial(_: Partial<ConfirmGatewayTxResponse>): ConfirmGatewayTxResponse;
    fromAmino(_: ConfirmGatewayTxResponseAmino): ConfirmGatewayTxResponse;
    toAmino(_: ConfirmGatewayTxResponse): ConfirmGatewayTxResponseAmino;
    fromAminoMsg(object: ConfirmGatewayTxResponseAminoMsg): ConfirmGatewayTxResponse;
    fromProtoMsg(message: ConfirmGatewayTxResponseProtoMsg): ConfirmGatewayTxResponse;
    toProto(message: ConfirmGatewayTxResponse): Uint8Array;
    toProtoMsg(message: ConfirmGatewayTxResponse): ConfirmGatewayTxResponseProtoMsg;
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
export declare const ConfirmTokenRequest: {
    typeUrl: string;
    encode(message: ConfirmTokenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmTokenRequest;
    fromPartial(object: Partial<ConfirmTokenRequest>): ConfirmTokenRequest;
    fromAmino(object: ConfirmTokenRequestAmino): ConfirmTokenRequest;
    toAmino(message: ConfirmTokenRequest): ConfirmTokenRequestAmino;
    fromAminoMsg(object: ConfirmTokenRequestAminoMsg): ConfirmTokenRequest;
    fromProtoMsg(message: ConfirmTokenRequestProtoMsg): ConfirmTokenRequest;
    toProto(message: ConfirmTokenRequest): Uint8Array;
    toProtoMsg(message: ConfirmTokenRequest): ConfirmTokenRequestProtoMsg;
};
export declare const ConfirmTokenResponse: {
    typeUrl: string;
    encode(_: ConfirmTokenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ConfirmTokenResponse;
    fromPartial(_: Partial<ConfirmTokenResponse>): ConfirmTokenResponse;
    fromAmino(_: ConfirmTokenResponseAmino): ConfirmTokenResponse;
    toAmino(_: ConfirmTokenResponse): ConfirmTokenResponseAmino;
    fromAminoMsg(object: ConfirmTokenResponseAminoMsg): ConfirmTokenResponse;
    fromProtoMsg(message: ConfirmTokenResponseProtoMsg): ConfirmTokenResponse;
    toProto(message: ConfirmTokenResponse): Uint8Array;
    toProtoMsg(message: ConfirmTokenResponse): ConfirmTokenResponseProtoMsg;
};
export declare const ConfirmTransferKeyRequest: {
    typeUrl: string;
    encode(message: ConfirmTransferKeyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    fromPartial(object: Partial<ConfirmTransferKeyRequest>): ConfirmTransferKeyRequest;
    fromAmino(object: ConfirmTransferKeyRequestAmino): ConfirmTransferKeyRequest;
    toAmino(message: ConfirmTransferKeyRequest): ConfirmTransferKeyRequestAmino;
    fromAminoMsg(object: ConfirmTransferKeyRequestAminoMsg): ConfirmTransferKeyRequest;
    fromProtoMsg(message: ConfirmTransferKeyRequestProtoMsg): ConfirmTransferKeyRequest;
    toProto(message: ConfirmTransferKeyRequest): Uint8Array;
    toProtoMsg(message: ConfirmTransferKeyRequest): ConfirmTransferKeyRequestProtoMsg;
};
export declare const ConfirmTransferKeyResponse: {
    typeUrl: string;
    encode(_: ConfirmTransferKeyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    fromPartial(_: Partial<ConfirmTransferKeyResponse>): ConfirmTransferKeyResponse;
    fromAmino(_: ConfirmTransferKeyResponseAmino): ConfirmTransferKeyResponse;
    toAmino(_: ConfirmTransferKeyResponse): ConfirmTransferKeyResponseAmino;
    fromAminoMsg(object: ConfirmTransferKeyResponseAminoMsg): ConfirmTransferKeyResponse;
    fromProtoMsg(message: ConfirmTransferKeyResponseProtoMsg): ConfirmTransferKeyResponse;
    toProto(message: ConfirmTransferKeyResponse): Uint8Array;
    toProtoMsg(message: ConfirmTransferKeyResponse): ConfirmTransferKeyResponseProtoMsg;
};
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
export declare const CreateBurnTokensRequest: {
    typeUrl: string;
    encode(message: CreateBurnTokensRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateBurnTokensRequest;
    fromPartial(object: Partial<CreateBurnTokensRequest>): CreateBurnTokensRequest;
    fromAmino(object: CreateBurnTokensRequestAmino): CreateBurnTokensRequest;
    toAmino(message: CreateBurnTokensRequest): CreateBurnTokensRequestAmino;
    fromAminoMsg(object: CreateBurnTokensRequestAminoMsg): CreateBurnTokensRequest;
    fromProtoMsg(message: CreateBurnTokensRequestProtoMsg): CreateBurnTokensRequest;
    toProto(message: CreateBurnTokensRequest): Uint8Array;
    toProtoMsg(message: CreateBurnTokensRequest): CreateBurnTokensRequestProtoMsg;
};
export declare const CreateBurnTokensResponse: {
    typeUrl: string;
    encode(_: CreateBurnTokensResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CreateBurnTokensResponse;
    fromPartial(_: Partial<CreateBurnTokensResponse>): CreateBurnTokensResponse;
    fromAmino(_: CreateBurnTokensResponseAmino): CreateBurnTokensResponse;
    toAmino(_: CreateBurnTokensResponse): CreateBurnTokensResponseAmino;
    fromAminoMsg(object: CreateBurnTokensResponseAminoMsg): CreateBurnTokensResponse;
    fromProtoMsg(message: CreateBurnTokensResponseProtoMsg): CreateBurnTokensResponse;
    toProto(message: CreateBurnTokensResponse): Uint8Array;
    toProtoMsg(message: CreateBurnTokensResponse): CreateBurnTokensResponseProtoMsg;
};
export declare const CreateDeployTokenRequest: {
    typeUrl: string;
    encode(message: CreateDeployTokenRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateDeployTokenRequest;
    fromPartial(object: Partial<CreateDeployTokenRequest>): CreateDeployTokenRequest;
    fromAmino(object: CreateDeployTokenRequestAmino): CreateDeployTokenRequest;
    toAmino(message: CreateDeployTokenRequest): CreateDeployTokenRequestAmino;
    fromAminoMsg(object: CreateDeployTokenRequestAminoMsg): CreateDeployTokenRequest;
    fromProtoMsg(message: CreateDeployTokenRequestProtoMsg): CreateDeployTokenRequest;
    toProto(message: CreateDeployTokenRequest): Uint8Array;
    toProtoMsg(message: CreateDeployTokenRequest): CreateDeployTokenRequestProtoMsg;
};
export declare const CreateDeployTokenResponse: {
    typeUrl: string;
    encode(_: CreateDeployTokenResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CreateDeployTokenResponse;
    fromPartial(_: Partial<CreateDeployTokenResponse>): CreateDeployTokenResponse;
    fromAmino(_: CreateDeployTokenResponseAmino): CreateDeployTokenResponse;
    toAmino(_: CreateDeployTokenResponse): CreateDeployTokenResponseAmino;
    fromAminoMsg(object: CreateDeployTokenResponseAminoMsg): CreateDeployTokenResponse;
    fromProtoMsg(message: CreateDeployTokenResponseProtoMsg): CreateDeployTokenResponse;
    toProto(message: CreateDeployTokenResponse): Uint8Array;
    toProtoMsg(message: CreateDeployTokenResponse): CreateDeployTokenResponseProtoMsg;
};
export declare const CreatePendingTransfersRequest: {
    typeUrl: string;
    encode(message: CreatePendingTransfersRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreatePendingTransfersRequest;
    fromPartial(object: Partial<CreatePendingTransfersRequest>): CreatePendingTransfersRequest;
    fromAmino(object: CreatePendingTransfersRequestAmino): CreatePendingTransfersRequest;
    toAmino(message: CreatePendingTransfersRequest): CreatePendingTransfersRequestAmino;
    fromAminoMsg(object: CreatePendingTransfersRequestAminoMsg): CreatePendingTransfersRequest;
    fromProtoMsg(message: CreatePendingTransfersRequestProtoMsg): CreatePendingTransfersRequest;
    toProto(message: CreatePendingTransfersRequest): Uint8Array;
    toProtoMsg(message: CreatePendingTransfersRequest): CreatePendingTransfersRequestProtoMsg;
};
export declare const CreatePendingTransfersResponse: {
    typeUrl: string;
    encode(_: CreatePendingTransfersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CreatePendingTransfersResponse;
    fromPartial(_: Partial<CreatePendingTransfersResponse>): CreatePendingTransfersResponse;
    fromAmino(_: CreatePendingTransfersResponseAmino): CreatePendingTransfersResponse;
    toAmino(_: CreatePendingTransfersResponse): CreatePendingTransfersResponseAmino;
    fromAminoMsg(object: CreatePendingTransfersResponseAminoMsg): CreatePendingTransfersResponse;
    fromProtoMsg(message: CreatePendingTransfersResponseProtoMsg): CreatePendingTransfersResponse;
    toProto(message: CreatePendingTransfersResponse): Uint8Array;
    toProtoMsg(message: CreatePendingTransfersResponse): CreatePendingTransfersResponseProtoMsg;
};
export declare const CreateTransferOwnershipRequest: {
    typeUrl: string;
    encode(message: CreateTransferOwnershipRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    fromPartial(object: Partial<CreateTransferOwnershipRequest>): CreateTransferOwnershipRequest;
    fromAmino(object: CreateTransferOwnershipRequestAmino): CreateTransferOwnershipRequest;
    toAmino(message: CreateTransferOwnershipRequest): CreateTransferOwnershipRequestAmino;
    fromAminoMsg(object: CreateTransferOwnershipRequestAminoMsg): CreateTransferOwnershipRequest;
    fromProtoMsg(message: CreateTransferOwnershipRequestProtoMsg): CreateTransferOwnershipRequest;
    toProto(message: CreateTransferOwnershipRequest): Uint8Array;
    toProtoMsg(message: CreateTransferOwnershipRequest): CreateTransferOwnershipRequestProtoMsg;
};
export declare const CreateTransferOwnershipResponse: {
    typeUrl: string;
    encode(_: CreateTransferOwnershipResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    fromPartial(_: Partial<CreateTransferOwnershipResponse>): CreateTransferOwnershipResponse;
    fromAmino(_: CreateTransferOwnershipResponseAmino): CreateTransferOwnershipResponse;
    toAmino(_: CreateTransferOwnershipResponse): CreateTransferOwnershipResponseAmino;
    fromAminoMsg(object: CreateTransferOwnershipResponseAminoMsg): CreateTransferOwnershipResponse;
    fromProtoMsg(message: CreateTransferOwnershipResponseProtoMsg): CreateTransferOwnershipResponse;
    toProto(message: CreateTransferOwnershipResponse): Uint8Array;
    toProtoMsg(message: CreateTransferOwnershipResponse): CreateTransferOwnershipResponseProtoMsg;
};
export declare const CreateTransferOperatorshipRequest: {
    typeUrl: string;
    encode(message: CreateTransferOperatorshipRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    fromPartial(object: Partial<CreateTransferOperatorshipRequest>): CreateTransferOperatorshipRequest;
    fromAmino(object: CreateTransferOperatorshipRequestAmino): CreateTransferOperatorshipRequest;
    toAmino(message: CreateTransferOperatorshipRequest): CreateTransferOperatorshipRequestAmino;
    fromAminoMsg(object: CreateTransferOperatorshipRequestAminoMsg): CreateTransferOperatorshipRequest;
    fromProtoMsg(message: CreateTransferOperatorshipRequestProtoMsg): CreateTransferOperatorshipRequest;
    toProto(message: CreateTransferOperatorshipRequest): Uint8Array;
    toProtoMsg(message: CreateTransferOperatorshipRequest): CreateTransferOperatorshipRequestProtoMsg;
};
export declare const CreateTransferOperatorshipResponse: {
    typeUrl: string;
    encode(_: CreateTransferOperatorshipResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    fromPartial(_: Partial<CreateTransferOperatorshipResponse>): CreateTransferOperatorshipResponse;
    fromAmino(_: CreateTransferOperatorshipResponseAmino): CreateTransferOperatorshipResponse;
    toAmino(_: CreateTransferOperatorshipResponse): CreateTransferOperatorshipResponseAmino;
    fromAminoMsg(object: CreateTransferOperatorshipResponseAminoMsg): CreateTransferOperatorshipResponse;
    fromProtoMsg(message: CreateTransferOperatorshipResponseProtoMsg): CreateTransferOperatorshipResponse;
    toProto(message: CreateTransferOperatorshipResponse): Uint8Array;
    toProtoMsg(message: CreateTransferOperatorshipResponse): CreateTransferOperatorshipResponseProtoMsg;
};
export declare const SignCommandsRequest: {
    typeUrl: string;
    encode(message: SignCommandsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignCommandsRequest;
    fromPartial(object: Partial<SignCommandsRequest>): SignCommandsRequest;
    fromAmino(object: SignCommandsRequestAmino): SignCommandsRequest;
    toAmino(message: SignCommandsRequest): SignCommandsRequestAmino;
    fromAminoMsg(object: SignCommandsRequestAminoMsg): SignCommandsRequest;
    fromProtoMsg(message: SignCommandsRequestProtoMsg): SignCommandsRequest;
    toProto(message: SignCommandsRequest): Uint8Array;
    toProtoMsg(message: SignCommandsRequest): SignCommandsRequestProtoMsg;
};
export declare const SignCommandsResponse: {
    typeUrl: string;
    encode(message: SignCommandsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): SignCommandsResponse;
    fromPartial(object: Partial<SignCommandsResponse>): SignCommandsResponse;
    fromAmino(object: SignCommandsResponseAmino): SignCommandsResponse;
    toAmino(message: SignCommandsResponse): SignCommandsResponseAmino;
    fromAminoMsg(object: SignCommandsResponseAminoMsg): SignCommandsResponse;
    fromProtoMsg(message: SignCommandsResponseProtoMsg): SignCommandsResponse;
    toProto(message: SignCommandsResponse): Uint8Array;
    toProtoMsg(message: SignCommandsResponse): SignCommandsResponseProtoMsg;
};
export declare const AddChainRequest: {
    typeUrl: string;
    encode(message: AddChainRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AddChainRequest;
    fromPartial(object: Partial<AddChainRequest>): AddChainRequest;
    fromAmino(object: AddChainRequestAmino): AddChainRequest;
    toAmino(message: AddChainRequest): AddChainRequestAmino;
    fromAminoMsg(object: AddChainRequestAminoMsg): AddChainRequest;
    fromProtoMsg(message: AddChainRequestProtoMsg): AddChainRequest;
    toProto(message: AddChainRequest): Uint8Array;
    toProtoMsg(message: AddChainRequest): AddChainRequestProtoMsg;
};
export declare const AddChainResponse: {
    typeUrl: string;
    encode(_: AddChainResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): AddChainResponse;
    fromPartial(_: Partial<AddChainResponse>): AddChainResponse;
    fromAmino(_: AddChainResponseAmino): AddChainResponse;
    toAmino(_: AddChainResponse): AddChainResponseAmino;
    fromAminoMsg(object: AddChainResponseAminoMsg): AddChainResponse;
    fromProtoMsg(message: AddChainResponseProtoMsg): AddChainResponse;
    toProto(message: AddChainResponse): Uint8Array;
    toProtoMsg(message: AddChainResponse): AddChainResponseProtoMsg;
};
export declare const RetryFailedEventRequest: {
    typeUrl: string;
    encode(message: RetryFailedEventRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RetryFailedEventRequest;
    fromPartial(object: Partial<RetryFailedEventRequest>): RetryFailedEventRequest;
    fromAmino(object: RetryFailedEventRequestAmino): RetryFailedEventRequest;
    toAmino(message: RetryFailedEventRequest): RetryFailedEventRequestAmino;
    fromAminoMsg(object: RetryFailedEventRequestAminoMsg): RetryFailedEventRequest;
    fromProtoMsg(message: RetryFailedEventRequestProtoMsg): RetryFailedEventRequest;
    toProto(message: RetryFailedEventRequest): Uint8Array;
    toProtoMsg(message: RetryFailedEventRequest): RetryFailedEventRequestProtoMsg;
};
export declare const RetryFailedEventResponse: {
    typeUrl: string;
    encode(_: RetryFailedEventResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): RetryFailedEventResponse;
    fromPartial(_: Partial<RetryFailedEventResponse>): RetryFailedEventResponse;
    fromAmino(_: RetryFailedEventResponseAmino): RetryFailedEventResponse;
    toAmino(_: RetryFailedEventResponse): RetryFailedEventResponseAmino;
    fromAminoMsg(object: RetryFailedEventResponseAminoMsg): RetryFailedEventResponse;
    fromProtoMsg(message: RetryFailedEventResponseProtoMsg): RetryFailedEventResponse;
    toProto(message: RetryFailedEventResponse): Uint8Array;
    toProtoMsg(message: RetryFailedEventResponse): RetryFailedEventResponseProtoMsg;
};
