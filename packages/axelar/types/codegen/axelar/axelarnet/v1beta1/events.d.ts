import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface IBCTransferSent {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: Coin;
    sequence: bigint;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface IBCTransferSentProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferSent";
    value: Uint8Array;
}
export interface IBCTransferSentAmino {
    id: string;
    /** @deprecated */
    receipient: string;
    asset?: CoinAmino;
    sequence: string;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface IBCTransferSentAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCTransferSent";
    value: IBCTransferSentAmino;
}
export interface IBCTransferSentSDKType {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: CoinSDKType;
    sequence: bigint;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface IBCTransferCompleted {
    id: bigint;
    sequence: bigint;
    portId: string;
    channelId: string;
}
export interface IBCTransferCompletedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferCompleted";
    value: Uint8Array;
}
export interface IBCTransferCompletedAmino {
    id: string;
    sequence: string;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferCompletedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCTransferCompleted";
    value: IBCTransferCompletedAmino;
}
export interface IBCTransferCompletedSDKType {
    id: bigint;
    sequence: bigint;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferFailed {
    id: bigint;
    sequence: bigint;
    portId: string;
    channelId: string;
}
export interface IBCTransferFailedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferFailed";
    value: Uint8Array;
}
export interface IBCTransferFailedAmino {
    id: string;
    sequence: string;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferFailedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCTransferFailed";
    value: IBCTransferFailedAmino;
}
export interface IBCTransferFailedSDKType {
    id: bigint;
    sequence: bigint;
    port_id: string;
    channel_id: string;
}
export interface IBCTransferRetried {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: Coin;
    sequence: bigint;
    portId: string;
    channelId: string;
    recipient: string;
}
export interface IBCTransferRetriedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.IBCTransferRetried";
    value: Uint8Array;
}
export interface IBCTransferRetriedAmino {
    id: string;
    /** @deprecated */
    receipient: string;
    asset?: CoinAmino;
    sequence: string;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface IBCTransferRetriedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.IBCTransferRetried";
    value: IBCTransferRetriedAmino;
}
export interface IBCTransferRetriedSDKType {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: CoinSDKType;
    sequence: bigint;
    port_id: string;
    channel_id: string;
    recipient: string;
}
export interface AxelarTransferCompleted {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: Coin;
    recipient: string;
}
export interface AxelarTransferCompletedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted";
    value: Uint8Array;
}
export interface AxelarTransferCompletedAmino {
    id: string;
    /** @deprecated */
    receipient: string;
    asset?: CoinAmino;
    recipient: string;
}
export interface AxelarTransferCompletedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.AxelarTransferCompleted";
    value: AxelarTransferCompletedAmino;
}
export interface AxelarTransferCompletedSDKType {
    id: bigint;
    /** @deprecated */
    receipient: string;
    asset: CoinSDKType;
    recipient: string;
}
export interface FeeCollected {
    collector: Uint8Array;
    fee: Coin;
}
export interface FeeCollectedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.FeeCollected";
    value: Uint8Array;
}
export interface FeeCollectedAmino {
    collector: Uint8Array;
    fee?: CoinAmino;
}
export interface FeeCollectedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.FeeCollected";
    value: FeeCollectedAmino;
}
export interface FeeCollectedSDKType {
    collector: Uint8Array;
    fee: CoinSDKType;
}
export interface FeePaid {
    messageId: string;
    recipient: Uint8Array;
    fee: Coin;
}
export interface FeePaidProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.FeePaid";
    value: Uint8Array;
}
export interface FeePaidAmino {
    message_id: string;
    recipient: Uint8Array;
    fee?: CoinAmino;
}
export interface FeePaidAminoMsg {
    type: "/axelar.axelarnet.v1beta1.FeePaid";
    value: FeePaidAmino;
}
export interface FeePaidSDKType {
    message_id: string;
    recipient: Uint8Array;
    fee: CoinSDKType;
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
export interface ContractCallSubmittedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ContractCallSubmitted";
    value: Uint8Array;
}
export interface ContractCallSubmittedAmino {
    message_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    contract_address: string;
    payload: Uint8Array;
    payload_hash: Uint8Array;
}
export interface ContractCallSubmittedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ContractCallSubmitted";
    value: ContractCallSubmittedAmino;
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
    asset: Coin;
}
export interface ContractCallWithTokenSubmittedProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
    value: Uint8Array;
}
export interface ContractCallWithTokenSubmittedAmino {
    message_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    contract_address: string;
    payload: Uint8Array;
    payload_hash: Uint8Array;
    asset?: CoinAmino;
}
export interface ContractCallWithTokenSubmittedAminoMsg {
    type: "/axelar.axelarnet.v1beta1.ContractCallWithTokenSubmitted";
    value: ContractCallWithTokenSubmittedAmino;
}
export interface ContractCallWithTokenSubmittedSDKType {
    message_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    contract_address: string;
    payload: Uint8Array;
    payload_hash: Uint8Array;
    asset: CoinSDKType;
}
export interface TokenSent {
    transferId: bigint;
    sender: string;
    sourceChain: string;
    destinationChain: string;
    destinationAddress: string;
    asset: Coin;
}
export interface TokenSentProtoMsg {
    typeUrl: "/axelar.axelarnet.v1beta1.TokenSent";
    value: Uint8Array;
}
export interface TokenSentAmino {
    transfer_id: string;
    sender: string;
    source_chain: string;
    destination_chain: string;
    destination_address: string;
    asset?: CoinAmino;
}
export interface TokenSentAminoMsg {
    type: "/axelar.axelarnet.v1beta1.TokenSent";
    value: TokenSentAmino;
}
export interface TokenSentSDKType {
    transfer_id: bigint;
    sender: string;
    source_chain: string;
    destination_chain: string;
    destination_address: string;
    asset: CoinSDKType;
}
export declare const IBCTransferSent: {
    typeUrl: string;
    encode(message: IBCTransferSent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCTransferSent;
    fromPartial(object: Partial<IBCTransferSent>): IBCTransferSent;
    fromAmino(object: IBCTransferSentAmino): IBCTransferSent;
    toAmino(message: IBCTransferSent): IBCTransferSentAmino;
    fromAminoMsg(object: IBCTransferSentAminoMsg): IBCTransferSent;
    fromProtoMsg(message: IBCTransferSentProtoMsg): IBCTransferSent;
    toProto(message: IBCTransferSent): Uint8Array;
    toProtoMsg(message: IBCTransferSent): IBCTransferSentProtoMsg;
};
export declare const IBCTransferCompleted: {
    typeUrl: string;
    encode(message: IBCTransferCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCTransferCompleted;
    fromPartial(object: Partial<IBCTransferCompleted>): IBCTransferCompleted;
    fromAmino(object: IBCTransferCompletedAmino): IBCTransferCompleted;
    toAmino(message: IBCTransferCompleted): IBCTransferCompletedAmino;
    fromAminoMsg(object: IBCTransferCompletedAminoMsg): IBCTransferCompleted;
    fromProtoMsg(message: IBCTransferCompletedProtoMsg): IBCTransferCompleted;
    toProto(message: IBCTransferCompleted): Uint8Array;
    toProtoMsg(message: IBCTransferCompleted): IBCTransferCompletedProtoMsg;
};
export declare const IBCTransferFailed: {
    typeUrl: string;
    encode(message: IBCTransferFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCTransferFailed;
    fromPartial(object: Partial<IBCTransferFailed>): IBCTransferFailed;
    fromAmino(object: IBCTransferFailedAmino): IBCTransferFailed;
    toAmino(message: IBCTransferFailed): IBCTransferFailedAmino;
    fromAminoMsg(object: IBCTransferFailedAminoMsg): IBCTransferFailed;
    fromProtoMsg(message: IBCTransferFailedProtoMsg): IBCTransferFailed;
    toProto(message: IBCTransferFailed): Uint8Array;
    toProtoMsg(message: IBCTransferFailed): IBCTransferFailedProtoMsg;
};
export declare const IBCTransferRetried: {
    typeUrl: string;
    encode(message: IBCTransferRetried, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IBCTransferRetried;
    fromPartial(object: Partial<IBCTransferRetried>): IBCTransferRetried;
    fromAmino(object: IBCTransferRetriedAmino): IBCTransferRetried;
    toAmino(message: IBCTransferRetried): IBCTransferRetriedAmino;
    fromAminoMsg(object: IBCTransferRetriedAminoMsg): IBCTransferRetried;
    fromProtoMsg(message: IBCTransferRetriedProtoMsg): IBCTransferRetried;
    toProto(message: IBCTransferRetried): Uint8Array;
    toProtoMsg(message: IBCTransferRetried): IBCTransferRetriedProtoMsg;
};
export declare const AxelarTransferCompleted: {
    typeUrl: string;
    encode(message: AxelarTransferCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): AxelarTransferCompleted;
    fromPartial(object: Partial<AxelarTransferCompleted>): AxelarTransferCompleted;
    fromAmino(object: AxelarTransferCompletedAmino): AxelarTransferCompleted;
    toAmino(message: AxelarTransferCompleted): AxelarTransferCompletedAmino;
    fromAminoMsg(object: AxelarTransferCompletedAminoMsg): AxelarTransferCompleted;
    fromProtoMsg(message: AxelarTransferCompletedProtoMsg): AxelarTransferCompleted;
    toProto(message: AxelarTransferCompleted): Uint8Array;
    toProtoMsg(message: AxelarTransferCompleted): AxelarTransferCompletedProtoMsg;
};
export declare const FeeCollected: {
    typeUrl: string;
    encode(message: FeeCollected, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeCollected;
    fromPartial(object: Partial<FeeCollected>): FeeCollected;
    fromAmino(object: FeeCollectedAmino): FeeCollected;
    toAmino(message: FeeCollected): FeeCollectedAmino;
    fromAminoMsg(object: FeeCollectedAminoMsg): FeeCollected;
    fromProtoMsg(message: FeeCollectedProtoMsg): FeeCollected;
    toProto(message: FeeCollected): Uint8Array;
    toProtoMsg(message: FeeCollected): FeeCollectedProtoMsg;
};
export declare const FeePaid: {
    typeUrl: string;
    encode(message: FeePaid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeePaid;
    fromPartial(object: Partial<FeePaid>): FeePaid;
    fromAmino(object: FeePaidAmino): FeePaid;
    toAmino(message: FeePaid): FeePaidAmino;
    fromAminoMsg(object: FeePaidAminoMsg): FeePaid;
    fromProtoMsg(message: FeePaidProtoMsg): FeePaid;
    toProto(message: FeePaid): Uint8Array;
    toProtoMsg(message: FeePaid): FeePaidProtoMsg;
};
export declare const ContractCallSubmitted: {
    typeUrl: string;
    encode(message: ContractCallSubmitted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCallSubmitted;
    fromPartial(object: Partial<ContractCallSubmitted>): ContractCallSubmitted;
    fromAmino(object: ContractCallSubmittedAmino): ContractCallSubmitted;
    toAmino(message: ContractCallSubmitted): ContractCallSubmittedAmino;
    fromAminoMsg(object: ContractCallSubmittedAminoMsg): ContractCallSubmitted;
    fromProtoMsg(message: ContractCallSubmittedProtoMsg): ContractCallSubmitted;
    toProto(message: ContractCallSubmitted): Uint8Array;
    toProtoMsg(message: ContractCallSubmitted): ContractCallSubmittedProtoMsg;
};
export declare const ContractCallWithTokenSubmitted: {
    typeUrl: string;
    encode(message: ContractCallWithTokenSubmitted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCallWithTokenSubmitted;
    fromPartial(object: Partial<ContractCallWithTokenSubmitted>): ContractCallWithTokenSubmitted;
    fromAmino(object: ContractCallWithTokenSubmittedAmino): ContractCallWithTokenSubmitted;
    toAmino(message: ContractCallWithTokenSubmitted): ContractCallWithTokenSubmittedAmino;
    fromAminoMsg(object: ContractCallWithTokenSubmittedAminoMsg): ContractCallWithTokenSubmitted;
    fromProtoMsg(message: ContractCallWithTokenSubmittedProtoMsg): ContractCallWithTokenSubmitted;
    toProto(message: ContractCallWithTokenSubmitted): Uint8Array;
    toProtoMsg(message: ContractCallWithTokenSubmitted): ContractCallWithTokenSubmittedProtoMsg;
};
export declare const TokenSent: {
    typeUrl: string;
    encode(message: TokenSent, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TokenSent;
    fromPartial(object: Partial<TokenSent>): TokenSent;
    fromAmino(object: TokenSentAmino): TokenSent;
    toAmino(message: TokenSent): TokenSentAmino;
    fromAminoMsg(object: TokenSentAminoMsg): TokenSent;
    fromProtoMsg(message: TokenSentProtoMsg): TokenSent;
    toProto(message: TokenSent): Uint8Array;
    toProtoMsg(message: TokenSent): TokenSentProtoMsg;
};
