import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { CrossChainAddress, CrossChainAddressSDKType } from "../exported/v1beta1/types";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface FeeDeducted {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin;
    fee?: Coin;
}
export interface FeeDeductedSDKType {
    transfer_id: Long;
    recipient_chain: string;
    recipient_address: string;
    amount?: CoinSDKType;
    fee?: CoinSDKType;
}
export interface InsufficientFee {
    transferId: Long;
    recipientChain: string;
    recipientAddress: string;
    amount?: Coin;
    fee?: Coin;
}
export interface InsufficientFeeSDKType {
    transfer_id: Long;
    recipient_chain: string;
    recipient_address: string;
    amount?: CoinSDKType;
    fee?: CoinSDKType;
}
export interface RateLimitUpdated {
    chain: string;
    limit?: Coin;
    window?: Duration;
}
export interface RateLimitUpdatedSDKType {
    chain: string;
    limit?: CoinSDKType;
    window?: DurationSDKType;
}
export interface MessageReceived {
    id: string;
    payloadHash: Uint8Array;
    sender?: CrossChainAddress;
    recipient?: CrossChainAddress;
}
export interface MessageReceivedSDKType {
    id: string;
    payload_hash: Uint8Array;
    sender?: CrossChainAddressSDKType;
    recipient?: CrossChainAddressSDKType;
}
export interface MessageProcessing {
    id: string;
}
export interface MessageProcessingSDKType {
    id: string;
}
export interface MessageExecuted {
    id: string;
}
export interface MessageExecutedSDKType {
    id: string;
}
export interface MessageFailed {
    id: string;
}
export interface MessageFailedSDKType {
    id: string;
}
export declare const FeeDeducted: {
    encode(message: FeeDeducted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeDeducted;
    fromPartial(object: Partial<FeeDeducted>): FeeDeducted;
};
export declare const InsufficientFee: {
    encode(message: InsufficientFee, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): InsufficientFee;
    fromPartial(object: Partial<InsufficientFee>): InsufficientFee;
};
export declare const RateLimitUpdated: {
    encode(message: RateLimitUpdated, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RateLimitUpdated;
    fromPartial(object: Partial<RateLimitUpdated>): RateLimitUpdated;
};
export declare const MessageReceived: {
    encode(message: MessageReceived, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageReceived;
    fromPartial(object: Partial<MessageReceived>): MessageReceived;
};
export declare const MessageProcessing: {
    encode(message: MessageProcessing, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageProcessing;
    fromPartial(object: Partial<MessageProcessing>): MessageProcessing;
};
export declare const MessageExecuted: {
    encode(message: MessageExecuted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageExecuted;
    fromPartial(object: Partial<MessageExecuted>): MessageExecuted;
};
export declare const MessageFailed: {
    encode(message: MessageFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MessageFailed;
    fromPartial(object: Partial<MessageFailed>): MessageFailed;
};
