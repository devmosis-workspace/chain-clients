import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { CrossChainAddress, CrossChainAddressAmino, CrossChainAddressSDKType, WasmMessage, WasmMessageAmino, WasmMessageSDKType } from "../exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
export interface FeeDeducted {
    transferId: bigint;
    recipientChain: string;
    recipientAddress: string;
    amount: Coin;
    fee: Coin;
}
export interface FeeDeductedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.FeeDeducted";
    value: Uint8Array;
}
export interface FeeDeductedAmino {
    transfer_id?: string;
    recipient_chain?: string;
    recipient_address?: string;
    amount?: CoinAmino;
    fee?: CoinAmino;
}
export interface FeeDeductedAminoMsg {
    type: "/axelar.nexus.v1beta1.FeeDeducted";
    value: FeeDeductedAmino;
}
export interface FeeDeductedSDKType {
    transfer_id: bigint;
    recipient_chain: string;
    recipient_address: string;
    amount: CoinSDKType;
    fee: CoinSDKType;
}
export interface InsufficientFee {
    transferId: bigint;
    recipientChain: string;
    recipientAddress: string;
    amount: Coin;
    fee: Coin;
}
export interface InsufficientFeeProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.InsufficientFee";
    value: Uint8Array;
}
export interface InsufficientFeeAmino {
    transfer_id?: string;
    recipient_chain?: string;
    recipient_address?: string;
    amount?: CoinAmino;
    fee?: CoinAmino;
}
export interface InsufficientFeeAminoMsg {
    type: "/axelar.nexus.v1beta1.InsufficientFee";
    value: InsufficientFeeAmino;
}
export interface InsufficientFeeSDKType {
    transfer_id: bigint;
    recipient_chain: string;
    recipient_address: string;
    amount: CoinSDKType;
    fee: CoinSDKType;
}
export interface RateLimitUpdated {
    chain: string;
    limit: Coin;
    window: Duration;
}
export interface RateLimitUpdatedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.RateLimitUpdated";
    value: Uint8Array;
}
export interface RateLimitUpdatedAmino {
    chain?: string;
    limit?: CoinAmino;
    window?: DurationAmino;
}
export interface RateLimitUpdatedAminoMsg {
    type: "/axelar.nexus.v1beta1.RateLimitUpdated";
    value: RateLimitUpdatedAmino;
}
export interface RateLimitUpdatedSDKType {
    chain: string;
    limit: CoinSDKType;
    window: DurationSDKType;
}
export interface MessageReceived {
    id: string;
    payloadHash: Uint8Array;
    sender: CrossChainAddress;
    recipient: CrossChainAddress;
}
export interface MessageReceivedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageReceived";
    value: Uint8Array;
}
export interface MessageReceivedAmino {
    id?: string;
    payload_hash?: string;
    sender?: CrossChainAddressAmino;
    recipient?: CrossChainAddressAmino;
}
export interface MessageReceivedAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageReceived";
    value: MessageReceivedAmino;
}
export interface MessageReceivedSDKType {
    id: string;
    payload_hash: Uint8Array;
    sender: CrossChainAddressSDKType;
    recipient: CrossChainAddressSDKType;
}
export interface MessageProcessing {
    id: string;
}
export interface MessageProcessingProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageProcessing";
    value: Uint8Array;
}
export interface MessageProcessingAmino {
    id?: string;
}
export interface MessageProcessingAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageProcessing";
    value: MessageProcessingAmino;
}
export interface MessageProcessingSDKType {
    id: string;
}
export interface MessageExecuted {
    id: string;
}
export interface MessageExecutedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageExecuted";
    value: Uint8Array;
}
export interface MessageExecutedAmino {
    id?: string;
}
export interface MessageExecutedAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageExecuted";
    value: MessageExecutedAmino;
}
export interface MessageExecutedSDKType {
    id: string;
}
export interface MessageFailed {
    id: string;
}
export interface MessageFailedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.MessageFailed";
    value: Uint8Array;
}
export interface MessageFailedAmino {
    id?: string;
}
export interface MessageFailedAminoMsg {
    type: "/axelar.nexus.v1beta1.MessageFailed";
    value: MessageFailedAmino;
}
export interface MessageFailedSDKType {
    id: string;
}
export interface WasmMessageRouted {
    message: WasmMessage;
}
export interface WasmMessageRoutedProtoMsg {
    typeUrl: "/axelar.nexus.v1beta1.WasmMessageRouted";
    value: Uint8Array;
}
export interface WasmMessageRoutedAmino {
    message?: WasmMessageAmino;
}
export interface WasmMessageRoutedAminoMsg {
    type: "/axelar.nexus.v1beta1.WasmMessageRouted";
    value: WasmMessageRoutedAmino;
}
export interface WasmMessageRoutedSDKType {
    message: WasmMessageSDKType;
}
export declare const FeeDeducted: {
    typeUrl: string;
    encode(message: FeeDeducted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeDeducted;
    fromPartial(object: Partial<FeeDeducted>): FeeDeducted;
    fromAmino(object: FeeDeductedAmino): FeeDeducted;
    toAmino(message: FeeDeducted): FeeDeductedAmino;
    fromAminoMsg(object: FeeDeductedAminoMsg): FeeDeducted;
    fromProtoMsg(message: FeeDeductedProtoMsg): FeeDeducted;
    toProto(message: FeeDeducted): Uint8Array;
    toProtoMsg(message: FeeDeducted): FeeDeductedProtoMsg;
};
export declare const InsufficientFee: {
    typeUrl: string;
    encode(message: InsufficientFee, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): InsufficientFee;
    fromPartial(object: Partial<InsufficientFee>): InsufficientFee;
    fromAmino(object: InsufficientFeeAmino): InsufficientFee;
    toAmino(message: InsufficientFee): InsufficientFeeAmino;
    fromAminoMsg(object: InsufficientFeeAminoMsg): InsufficientFee;
    fromProtoMsg(message: InsufficientFeeProtoMsg): InsufficientFee;
    toProto(message: InsufficientFee): Uint8Array;
    toProtoMsg(message: InsufficientFee): InsufficientFeeProtoMsg;
};
export declare const RateLimitUpdated: {
    typeUrl: string;
    encode(message: RateLimitUpdated, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RateLimitUpdated;
    fromPartial(object: Partial<RateLimitUpdated>): RateLimitUpdated;
    fromAmino(object: RateLimitUpdatedAmino): RateLimitUpdated;
    toAmino(message: RateLimitUpdated): RateLimitUpdatedAmino;
    fromAminoMsg(object: RateLimitUpdatedAminoMsg): RateLimitUpdated;
    fromProtoMsg(message: RateLimitUpdatedProtoMsg): RateLimitUpdated;
    toProto(message: RateLimitUpdated): Uint8Array;
    toProtoMsg(message: RateLimitUpdated): RateLimitUpdatedProtoMsg;
};
export declare const MessageReceived: {
    typeUrl: string;
    encode(message: MessageReceived, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageReceived;
    fromPartial(object: Partial<MessageReceived>): MessageReceived;
    fromAmino(object: MessageReceivedAmino): MessageReceived;
    toAmino(message: MessageReceived): MessageReceivedAmino;
    fromAminoMsg(object: MessageReceivedAminoMsg): MessageReceived;
    fromProtoMsg(message: MessageReceivedProtoMsg): MessageReceived;
    toProto(message: MessageReceived): Uint8Array;
    toProtoMsg(message: MessageReceived): MessageReceivedProtoMsg;
};
export declare const MessageProcessing: {
    typeUrl: string;
    encode(message: MessageProcessing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageProcessing;
    fromPartial(object: Partial<MessageProcessing>): MessageProcessing;
    fromAmino(object: MessageProcessingAmino): MessageProcessing;
    toAmino(message: MessageProcessing): MessageProcessingAmino;
    fromAminoMsg(object: MessageProcessingAminoMsg): MessageProcessing;
    fromProtoMsg(message: MessageProcessingProtoMsg): MessageProcessing;
    toProto(message: MessageProcessing): Uint8Array;
    toProtoMsg(message: MessageProcessing): MessageProcessingProtoMsg;
};
export declare const MessageExecuted: {
    typeUrl: string;
    encode(message: MessageExecuted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageExecuted;
    fromPartial(object: Partial<MessageExecuted>): MessageExecuted;
    fromAmino(object: MessageExecutedAmino): MessageExecuted;
    toAmino(message: MessageExecuted): MessageExecutedAmino;
    fromAminoMsg(object: MessageExecutedAminoMsg): MessageExecuted;
    fromProtoMsg(message: MessageExecutedProtoMsg): MessageExecuted;
    toProto(message: MessageExecuted): Uint8Array;
    toProtoMsg(message: MessageExecuted): MessageExecutedProtoMsg;
};
export declare const MessageFailed: {
    typeUrl: string;
    encode(message: MessageFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MessageFailed;
    fromPartial(object: Partial<MessageFailed>): MessageFailed;
    fromAmino(object: MessageFailedAmino): MessageFailed;
    toAmino(message: MessageFailed): MessageFailedAmino;
    fromAminoMsg(object: MessageFailedAminoMsg): MessageFailed;
    fromProtoMsg(message: MessageFailedProtoMsg): MessageFailed;
    toProto(message: MessageFailed): Uint8Array;
    toProtoMsg(message: MessageFailed): MessageFailedProtoMsg;
};
export declare const WasmMessageRouted: {
    typeUrl: string;
    encode(message: WasmMessageRouted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WasmMessageRouted;
    fromPartial(object: Partial<WasmMessageRouted>): WasmMessageRouted;
    fromAmino(object: WasmMessageRoutedAmino): WasmMessageRouted;
    toAmino(message: WasmMessageRouted): WasmMessageRoutedAmino;
    fromAminoMsg(object: WasmMessageRoutedAminoMsg): WasmMessageRouted;
    fromProtoMsg(message: WasmMessageRoutedProtoMsg): WasmMessageRouted;
    toProto(message: WasmMessageRouted): Uint8Array;
    toProtoMsg(message: WasmMessageRouted): WasmMessageRoutedProtoMsg;
};
