import { PollParticipants, PollParticipantsSDKType } from "../../vote/exported/v1beta1/types";
import { TokenDetails, TokenDetailsSDKType } from "./types";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface PollFailed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollFailedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: Long;
}
export interface PollExpired {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollExpiredSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: Long;
}
export interface PollCompleted {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface PollCompletedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: Long;
}
export interface NoEventsConfirmed {
    txId: Uint8Array;
    chain: string;
    pollId: Long;
}
export interface NoEventsConfirmedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: Long;
}
export interface ConfirmKeyTransferStarted {
    chain: string;
    txId: Uint8Array;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ConfirmKeyTransferStartedSDKType {
    chain: string;
    tx_id: Uint8Array;
    gateway_address: Uint8Array;
    confirmation_height: Long;
    participants?: PollParticipantsSDKType;
}
export interface ConfirmGatewayTxStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ConfirmGatewayTxStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    gateway_address: Uint8Array;
    confirmation_height: Long;
    participants?: PollParticipantsSDKType;
}
export interface ConfirmDepositStarted {
    txId: Uint8Array;
    chain: string;
    depositAddress: Uint8Array;
    tokenAddress: Uint8Array;
    confirmationHeight: Long;
    participants?: PollParticipants;
    asset: string;
}
export interface ConfirmDepositStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    deposit_address: Uint8Array;
    token_address: Uint8Array;
    confirmation_height: Long;
    participants?: PollParticipantsSDKType;
    asset: string;
}
export interface ConfirmTokenStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    tokenAddress: Uint8Array;
    tokenDetails?: TokenDetails;
    confirmationHeight: Long;
    participants?: PollParticipants;
}
export interface ConfirmTokenStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    gateway_address: Uint8Array;
    token_address: Uint8Array;
    token_details?: TokenDetailsSDKType;
    confirmation_height: Long;
    participants?: PollParticipantsSDKType;
}
export interface ChainAdded {
    chain: string;
}
export interface ChainAddedSDKType {
    chain: string;
}
export interface CommandBatchSigned {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchSignedSDKType {
    chain: string;
    command_batch_id: Uint8Array;
}
export interface CommandBatchAborted {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchAbortedSDKType {
    chain: string;
    command_batch_id: Uint8Array;
}
export interface EVMEventConfirmed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventConfirmedSDKType {
    chain: string;
    event_id: string;
    type: string;
}
export interface EVMEventCompleted {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventCompletedSDKType {
    chain: string;
    event_id: string;
    type: string;
}
export interface EVMEventFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventFailedSDKType {
    chain: string;
    event_id: string;
    type: string;
}
export interface EVMEventRetryFailed {
    chain: string;
    eventId: string;
    type: string;
}
export interface EVMEventRetryFailedSDKType {
    chain: string;
    event_id: string;
    type: string;
}
export interface ContractCallApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
}
export interface ContractCallApprovedSDKType {
    chain: string;
    event_id: string;
    command_id: Uint8Array;
    sender: string;
    destination_chain: string;
    contract_address: string;
    payload_hash: Uint8Array;
}
export interface ContractCallFailed {
    chain: string;
    msgId: string;
}
export interface ContractCallFailedSDKType {
    chain: string;
    msg_id: string;
}
export interface ContractCallWithMintApproved {
    chain: string;
    eventId: string;
    commandId: Uint8Array;
    sender: string;
    destinationChain: string;
    contractAddress: string;
    payloadHash: Uint8Array;
    asset?: Coin;
}
export interface ContractCallWithMintApprovedSDKType {
    chain: string;
    event_id: string;
    command_id: Uint8Array;
    sender: string;
    destination_chain: string;
    contract_address: string;
    payload_hash: Uint8Array;
    asset?: CoinSDKType;
}
export interface TokenSent {
    chain: string;
    eventId: string;
    transferId: Long;
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin;
}
export interface TokenSentSDKType {
    chain: string;
    event_id: string;
    transfer_id: Long;
    sender: string;
    destination_chain: string;
    destination_address: string;
    asset?: CoinSDKType;
}
export interface MintCommand {
    chain: string;
    transferId: Long;
    commandId: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    asset?: Coin;
}
export interface MintCommandSDKType {
    chain: string;
    transfer_id: Long;
    command_id: Uint8Array;
    destination_chain: string;
    destination_address: string;
    asset?: CoinSDKType;
}
export interface BurnCommand {
    chain: string;
    commandId: Uint8Array;
    destinationChain: string;
    depositAddress: string;
    asset: string;
}
export interface BurnCommandSDKType {
    chain: string;
    command_id: Uint8Array;
    destination_chain: string;
    deposit_address: string;
    asset: string;
}
export declare const PollFailed: {
    encode(message: PollFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollFailed;
    fromPartial(object: Partial<PollFailed>): PollFailed;
};
export declare const PollExpired: {
    encode(message: PollExpired, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollExpired;
    fromPartial(object: Partial<PollExpired>): PollExpired;
};
export declare const PollCompleted: {
    encode(message: PollCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): PollCompleted;
    fromPartial(object: Partial<PollCompleted>): PollCompleted;
};
export declare const NoEventsConfirmed: {
    encode(message: NoEventsConfirmed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): NoEventsConfirmed;
    fromPartial(object: Partial<NoEventsConfirmed>): NoEventsConfirmed;
};
export declare const ConfirmKeyTransferStarted: {
    encode(message: ConfirmKeyTransferStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmKeyTransferStarted;
    fromPartial(object: Partial<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted;
};
export declare const ConfirmGatewayTxStarted: {
    encode(message: ConfirmGatewayTxStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmGatewayTxStarted;
    fromPartial(object: Partial<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted;
};
export declare const ConfirmDepositStarted: {
    encode(message: ConfirmDepositStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmDepositStarted;
    fromPartial(object: Partial<ConfirmDepositStarted>): ConfirmDepositStarted;
};
export declare const ConfirmTokenStarted: {
    encode(message: ConfirmTokenStarted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ConfirmTokenStarted;
    fromPartial(object: Partial<ConfirmTokenStarted>): ConfirmTokenStarted;
};
export declare const ChainAdded: {
    encode(message: ChainAdded, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ChainAdded;
    fromPartial(object: Partial<ChainAdded>): ChainAdded;
};
export declare const CommandBatchSigned: {
    encode(message: CommandBatchSigned, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandBatchSigned;
    fromPartial(object: Partial<CommandBatchSigned>): CommandBatchSigned;
};
export declare const CommandBatchAborted: {
    encode(message: CommandBatchAborted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommandBatchAborted;
    fromPartial(object: Partial<CommandBatchAborted>): CommandBatchAborted;
};
export declare const EVMEventConfirmed: {
    encode(message: EVMEventConfirmed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EVMEventConfirmed;
    fromPartial(object: Partial<EVMEventConfirmed>): EVMEventConfirmed;
};
export declare const EVMEventCompleted: {
    encode(message: EVMEventCompleted, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EVMEventCompleted;
    fromPartial(object: Partial<EVMEventCompleted>): EVMEventCompleted;
};
export declare const EVMEventFailed: {
    encode(message: EVMEventFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EVMEventFailed;
    fromPartial(object: Partial<EVMEventFailed>): EVMEventFailed;
};
export declare const EVMEventRetryFailed: {
    encode(message: EVMEventRetryFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EVMEventRetryFailed;
    fromPartial(object: Partial<EVMEventRetryFailed>): EVMEventRetryFailed;
};
export declare const ContractCallApproved: {
    encode(message: ContractCallApproved, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCallApproved;
    fromPartial(object: Partial<ContractCallApproved>): ContractCallApproved;
};
export declare const ContractCallFailed: {
    encode(message: ContractCallFailed, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCallFailed;
    fromPartial(object: Partial<ContractCallFailed>): ContractCallFailed;
};
export declare const ContractCallWithMintApproved: {
    encode(message: ContractCallWithMintApproved, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ContractCallWithMintApproved;
    fromPartial(object: Partial<ContractCallWithMintApproved>): ContractCallWithMintApproved;
};
export declare const TokenSent: {
    encode(message: TokenSent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TokenSent;
    fromPartial(object: Partial<TokenSent>): TokenSent;
};
export declare const MintCommand: {
    encode(message: MintCommand, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MintCommand;
    fromPartial(object: Partial<MintCommand>): MintCommand;
};
export declare const BurnCommand: {
    encode(message: BurnCommand, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BurnCommand;
    fromPartial(object: Partial<BurnCommand>): BurnCommand;
};
