import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IBCTransferSent {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin;
    sequence: Long;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface IBCTransferSentSDKType {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: CoinSDKType;
    sequence: Long;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface IBCTransferCompleted {
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferCompletedSDKType {
    id: Long;
    sequence: Long;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferFailed {
    id: Long;
    sequence: Long;
    portId: string;
    channelId: string;
}
export interface IBCTransferFailedSDKType {
    id: Long;
    sequence: Long;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferRetried {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin;
    sequence: Long;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface IBCTransferRetriedSDKType {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: CoinSDKType;
    sequence: Long;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface AxelarTransferCompleted {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: Coin;
    recipient: string;
}
export interface AxelarTransferCompletedSDKType {
    id: Long;
    /** @deprecated */
    receipient: string;
    asset?: CoinSDKType;
    recipient: string;
}
export interface FeeCollected {
    collector: Uint8Array;
    fee?: Coin;
}
export interface FeeCollectedSDKType {
    collector: Uint8Array;
    fee?: CoinSDKType;
}
export interface FeePaid {
    messageId: string;
    recipient: Uint8Array;
    fee?: Coin;
}
export interface FeePaidSDKType {
    message_id: string;
    recipient: Uint8Array;
    fee?: CoinSDKType;
}
export interface ContractCallSubmitted {
    messageId: string;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    contractAddress: string;
    payload: Uint8Array;
    payloadHash: Uint8Array;
}
export interface ContractCallSubmittedSDKType {
    message_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    contract_address: string;
    payload: Uint8Array;
    payload_hash: Uint8Array;
}
export interface ContractCallWithTokenSubmitted {
    messageId: string;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    contractAddress: string;
    payload: Uint8Array;
    payloadHash: Uint8Array;
    asset?: Coin;
}
export interface ContractCallWithTokenSubmittedSDKType {
    message_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    contract_address: string;
    payload: Uint8Array;
    payload_hash: Uint8Array;
    asset?: CoinSDKType;
}
export interface TokenSent {
    transferId: Long;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin;
}
export interface TokenSentSDKType {
    transfer_id: Long;
    sender: string;
    source_chain: string;
    destination_chain: string;
    destination_address: string;
    asset?: CoinSDKType;
}
export declare const IBCTransferSent: {
    encode(message: IBCTransferSent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCTransferSent;
    fromPartial(object: Partial<IBCTransferSent>): IBCTransferSent;
};
export declare const IBCTransferCompleted: {
    encode(message: IBCTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCTransferCompleted;
    fromPartial(object: Partial<IBCTransferCompleted>): IBCTransferCompleted;
};
export declare const IBCTransferFailed: {
    encode(message: IBCTransferFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCTransferFailed;
    fromPartial(object: Partial<IBCTransferFailed>): IBCTransferFailed;
};
export declare const IBCTransferRetried: {
    encode(message: IBCTransferRetried, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IBCTransferRetried;
    fromPartial(object: Partial<IBCTransferRetried>): IBCTransferRetried;
};
export declare const AxelarTransferCompleted: {
    encode(message: AxelarTransferCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): AxelarTransferCompleted;
    fromPartial(object: Partial<AxelarTransferCompleted>): AxelarTransferCompleted;
};
export declare const FeeCollected: {
    encode(message: FeeCollected, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeeCollected;
    fromPartial(object: Partial<FeeCollected>): FeeCollected;
};
export declare const FeePaid: {
    encode(message: FeePaid, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): FeePaid;
    fromPartial(object: Partial<FeePaid>): FeePaid;
};
export declare const ContractCallSubmitted: {
    encode(message: ContractCallSubmitted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCallSubmitted;
    fromPartial(object: Partial<ContractCallSubmitted>): ContractCallSubmitted;
};
export declare const ContractCallWithTokenSubmitted: {
    encode(message: ContractCallWithTokenSubmitted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCallWithTokenSubmitted;
    fromPartial(object: Partial<ContractCallWithTokenSubmitted>): ContractCallWithTokenSubmitted;
};
export declare const TokenSent: {
    encode(message: TokenSent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenSent;
    fromPartial(object: Partial<TokenSent>): TokenSent;
};
