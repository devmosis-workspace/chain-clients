import { PollParticipants, PollParticipantsAmino, PollParticipantsSDKType } from "../../vote/exported/v1beta1/types";
import { TokenDetails, TokenDetailsAmino, TokenDetailsSDKType } from "./types";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface PollFailed {
    txId: Uint8Array;
    chain: string;
    pollId: bigint;
}
export interface PollFailedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PollFailed";
    value: Uint8Array;
}
export interface PollFailedAmino {
    tx_id?: string;
    chain?: string;
    poll_id?: string;
}
export interface PollFailedAminoMsg {
    type: "/axelar.evm.v1beta1.PollFailed";
    value: PollFailedAmino;
}
export interface PollFailedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: bigint;
}
export interface PollExpired {
    txId: Uint8Array;
    chain: string;
    pollId: bigint;
}
export interface PollExpiredProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PollExpired";
    value: Uint8Array;
}
export interface PollExpiredAmino {
    tx_id?: string;
    chain?: string;
    poll_id?: string;
}
export interface PollExpiredAminoMsg {
    type: "/axelar.evm.v1beta1.PollExpired";
    value: PollExpiredAmino;
}
export interface PollExpiredSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: bigint;
}
export interface PollCompleted {
    txId: Uint8Array;
    chain: string;
    pollId: bigint;
}
export interface PollCompletedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PollCompleted";
    value: Uint8Array;
}
export interface PollCompletedAmino {
    tx_id?: string;
    chain?: string;
    poll_id?: string;
}
export interface PollCompletedAminoMsg {
    type: "/axelar.evm.v1beta1.PollCompleted";
    value: PollCompletedAmino;
}
export interface PollCompletedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: bigint;
}
export interface NoEventsConfirmed {
    txId: Uint8Array;
    chain: string;
    pollId: bigint;
}
export interface NoEventsConfirmedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.NoEventsConfirmed";
    value: Uint8Array;
}
export interface NoEventsConfirmedAmino {
    tx_id?: string;
    chain?: string;
    poll_id?: string;
}
export interface NoEventsConfirmedAminoMsg {
    type: "/axelar.evm.v1beta1.NoEventsConfirmed";
    value: NoEventsConfirmedAmino;
}
export interface NoEventsConfirmedSDKType {
    tx_id: Uint8Array;
    chain: string;
    poll_id: bigint;
}
export interface ConfirmKeyTransferStarted {
    chain: string;
    txId: Uint8Array;
    gatewayAddress: Uint8Array;
    confirmationHeight: bigint;
    participants: PollParticipants;
}
export interface ConfirmKeyTransferStartedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted";
    value: Uint8Array;
}
export interface ConfirmKeyTransferStartedAmino {
    chain?: string;
    tx_id?: string;
    gateway_address?: string;
    confirmation_height?: string;
    participants?: PollParticipantsAmino;
}
export interface ConfirmKeyTransferStartedAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmKeyTransferStarted";
    value: ConfirmKeyTransferStartedAmino;
}
export interface ConfirmKeyTransferStartedSDKType {
    chain: string;
    tx_id: Uint8Array;
    gateway_address: Uint8Array;
    confirmation_height: bigint;
    participants: PollParticipantsSDKType;
}
/** @deprecated */
export interface ConfirmGatewayTxStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    confirmationHeight: bigint;
    participants: PollParticipants;
}
export interface ConfirmGatewayTxStartedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted";
    value: Uint8Array;
}
/** @deprecated */
export interface ConfirmGatewayTxStartedAmino {
    tx_id?: string;
    chain?: string;
    gateway_address?: string;
    confirmation_height?: string;
    participants?: PollParticipantsAmino;
}
export interface ConfirmGatewayTxStartedAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmGatewayTxStarted";
    value: ConfirmGatewayTxStartedAmino;
}
/** @deprecated */
export interface ConfirmGatewayTxStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    gateway_address: Uint8Array;
    confirmation_height: bigint;
    participants: PollParticipantsSDKType;
}
export interface PollMapping {
    txId: Uint8Array;
    pollId: bigint;
}
export interface PollMappingProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.PollMapping";
    value: Uint8Array;
}
export interface PollMappingAmino {
    tx_id?: string;
    poll_id?: string;
}
export interface PollMappingAminoMsg {
    type: "/axelar.evm.v1beta1.PollMapping";
    value: PollMappingAmino;
}
export interface PollMappingSDKType {
    tx_id: Uint8Array;
    poll_id: bigint;
}
export interface ConfirmGatewayTxsStarted {
    pollMappings: PollMapping[];
    chain: string;
    gatewayAddress: Uint8Array;
    confirmationHeight: bigint;
    participants: Uint8Array[];
}
export interface ConfirmGatewayTxsStartedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted";
    value: Uint8Array;
}
export interface ConfirmGatewayTxsStartedAmino {
    poll_mappings?: PollMappingAmino[];
    chain?: string;
    gateway_address?: string;
    confirmation_height?: string;
    participants?: string[];
}
export interface ConfirmGatewayTxsStartedAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmGatewayTxsStarted";
    value: ConfirmGatewayTxsStartedAmino;
}
export interface ConfirmGatewayTxsStartedSDKType {
    poll_mappings: PollMappingSDKType[];
    chain: string;
    gateway_address: Uint8Array;
    confirmation_height: bigint;
    participants: Uint8Array[];
}
export interface ConfirmDepositStarted {
    txId: Uint8Array;
    chain: string;
    depositAddress: Uint8Array;
    tokenAddress: Uint8Array;
    confirmationHeight: bigint;
    participants: PollParticipants;
    asset: string;
}
export interface ConfirmDepositStartedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmDepositStarted";
    value: Uint8Array;
}
export interface ConfirmDepositStartedAmino {
    tx_id?: string;
    chain?: string;
    deposit_address?: string;
    token_address?: string;
    confirmation_height?: string;
    participants?: PollParticipantsAmino;
    asset?: string;
}
export interface ConfirmDepositStartedAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmDepositStarted";
    value: ConfirmDepositStartedAmino;
}
export interface ConfirmDepositStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    deposit_address: Uint8Array;
    token_address: Uint8Array;
    confirmation_height: bigint;
    participants: PollParticipantsSDKType;
    asset: string;
}
export interface ConfirmTokenStarted {
    txId: Uint8Array;
    chain: string;
    gatewayAddress: Uint8Array;
    tokenAddress: Uint8Array;
    tokenDetails: TokenDetails;
    confirmationHeight: bigint;
    participants: PollParticipants;
}
export interface ConfirmTokenStartedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ConfirmTokenStarted";
    value: Uint8Array;
}
export interface ConfirmTokenStartedAmino {
    tx_id?: string;
    chain?: string;
    gateway_address?: string;
    token_address?: string;
    token_details?: TokenDetailsAmino;
    confirmation_height?: string;
    participants?: PollParticipantsAmino;
}
export interface ConfirmTokenStartedAminoMsg {
    type: "/axelar.evm.v1beta1.ConfirmTokenStarted";
    value: ConfirmTokenStartedAmino;
}
export interface ConfirmTokenStartedSDKType {
    tx_id: Uint8Array;
    chain: string;
    gateway_address: Uint8Array;
    token_address: Uint8Array;
    token_details: TokenDetailsSDKType;
    confirmation_height: bigint;
    participants: PollParticipantsSDKType;
}
export interface ChainAdded {
    chain: string;
}
export interface ChainAddedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ChainAdded";
    value: Uint8Array;
}
export interface ChainAddedAmino {
    chain?: string;
}
export interface ChainAddedAminoMsg {
    type: "/axelar.evm.v1beta1.ChainAdded";
    value: ChainAddedAmino;
}
export interface ChainAddedSDKType {
    chain: string;
}
export interface CommandBatchSigned {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchSignedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchSigned";
    value: Uint8Array;
}
export interface CommandBatchSignedAmino {
    chain?: string;
    command_batch_id?: string;
}
export interface CommandBatchSignedAminoMsg {
    type: "/axelar.evm.v1beta1.CommandBatchSigned";
    value: CommandBatchSignedAmino;
}
export interface CommandBatchSignedSDKType {
    chain: string;
    command_batch_id: Uint8Array;
}
export interface CommandBatchAborted {
    chain: string;
    commandBatchId: Uint8Array;
}
export interface CommandBatchAbortedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchAborted";
    value: Uint8Array;
}
export interface CommandBatchAbortedAmino {
    chain?: string;
    command_batch_id?: string;
}
export interface CommandBatchAbortedAminoMsg {
    type: "/axelar.evm.v1beta1.CommandBatchAborted";
    value: CommandBatchAbortedAmino;
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
export interface EVMEventConfirmedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EVMEventConfirmed";
    value: Uint8Array;
}
export interface EVMEventConfirmedAmino {
    chain?: string;
    event_id?: string;
    type?: string;
}
export interface EVMEventConfirmedAminoMsg {
    type: "/axelar.evm.v1beta1.EVMEventConfirmed";
    value: EVMEventConfirmedAmino;
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
export interface EVMEventCompletedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EVMEventCompleted";
    value: Uint8Array;
}
export interface EVMEventCompletedAmino {
    chain?: string;
    event_id?: string;
    type?: string;
}
export interface EVMEventCompletedAminoMsg {
    type: "/axelar.evm.v1beta1.EVMEventCompleted";
    value: EVMEventCompletedAmino;
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
export interface EVMEventFailedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EVMEventFailed";
    value: Uint8Array;
}
export interface EVMEventFailedAmino {
    chain?: string;
    event_id?: string;
    type?: string;
}
export interface EVMEventFailedAminoMsg {
    type: "/axelar.evm.v1beta1.EVMEventFailed";
    value: EVMEventFailedAmino;
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
export interface EVMEventRetryFailedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.EVMEventRetryFailed";
    value: Uint8Array;
}
export interface EVMEventRetryFailedAmino {
    chain?: string;
    event_id?: string;
    type?: string;
}
export interface EVMEventRetryFailedAminoMsg {
    type: "/axelar.evm.v1beta1.EVMEventRetryFailed";
    value: EVMEventRetryFailedAmino;
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
export interface ContractCallApprovedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ContractCallApproved";
    value: Uint8Array;
}
export interface ContractCallApprovedAmino {
    chain?: string;
    event_id?: string;
    command_id?: string;
    sender?: string;
    destination_chain?: string;
    contract_address?: string;
    payload_hash?: string;
}
export interface ContractCallApprovedAminoMsg {
    type: "/axelar.evm.v1beta1.ContractCallApproved";
    value: ContractCallApprovedAmino;
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
export interface ContractCallFailedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ContractCallFailed";
    value: Uint8Array;
}
export interface ContractCallFailedAmino {
    chain?: string;
    msg_id?: string;
}
export interface ContractCallFailedAminoMsg {
    type: "/axelar.evm.v1beta1.ContractCallFailed";
    value: ContractCallFailedAmino;
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
    asset: Coin;
}
export interface ContractCallWithMintApprovedProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.ContractCallWithMintApproved";
    value: Uint8Array;
}
export interface ContractCallWithMintApprovedAmino {
    chain?: string;
    event_id?: string;
    command_id?: string;
    sender?: string;
    destination_chain?: string;
    contract_address?: string;
    payload_hash?: string;
    asset?: CoinAmino;
}
export interface ContractCallWithMintApprovedAminoMsg {
    type: "/axelar.evm.v1beta1.ContractCallWithMintApproved";
    value: ContractCallWithMintApprovedAmino;
}
export interface ContractCallWithMintApprovedSDKType {
    chain: string;
    event_id: string;
    command_id: Uint8Array;
    sender: string;
    destination_chain: string;
    contract_address: string;
    payload_hash: Uint8Array;
    asset: CoinSDKType;
}
export interface TokenSent {
    chain: string;
    eventId: string;
    transferId: bigint;
    sender: string;
    destinationChain: string;
    destinationAddress: string;
    asset: Coin;
}
export interface TokenSentProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.TokenSent";
    value: Uint8Array;
}
export interface TokenSentAmino {
    chain?: string;
    event_id?: string;
    transfer_id?: string;
    sender?: string;
    destination_chain?: string;
    destination_address?: string;
    asset?: CoinAmino;
}
export interface TokenSentAminoMsg {
    type: "/axelar.evm.v1beta1.TokenSent";
    value: TokenSentAmino;
}
export interface TokenSentSDKType {
    chain: string;
    event_id: string;
    transfer_id: bigint;
    sender: string;
    destination_chain: string;
    destination_address: string;
    asset: CoinSDKType;
}
export interface MintCommand {
    chain: string;
    transferId: bigint;
    commandId: Uint8Array;
    destinationChain: string;
    destinationAddress: string;
    asset: Coin;
}
export interface MintCommandProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.MintCommand";
    value: Uint8Array;
}
export interface MintCommandAmino {
    chain?: string;
    transfer_id?: string;
    command_id?: string;
    destination_chain?: string;
    destination_address?: string;
    asset?: CoinAmino;
}
export interface MintCommandAminoMsg {
    type: "/axelar.evm.v1beta1.MintCommand";
    value: MintCommandAmino;
}
export interface MintCommandSDKType {
    chain: string;
    transfer_id: bigint;
    command_id: Uint8Array;
    destination_chain: string;
    destination_address: string;
    asset: CoinSDKType;
}
export interface BurnCommand {
    chain: string;
    commandId: Uint8Array;
    destinationChain: string;
    depositAddress: string;
    asset: string;
}
export interface BurnCommandProtoMsg {
    typeUrl: "/axelar.evm.v1beta1.BurnCommand";
    value: Uint8Array;
}
export interface BurnCommandAmino {
    chain?: string;
    command_id?: string;
    destination_chain?: string;
    deposit_address?: string;
    asset?: string;
}
export interface BurnCommandAminoMsg {
    type: "/axelar.evm.v1beta1.BurnCommand";
    value: BurnCommandAmino;
}
export interface BurnCommandSDKType {
    chain: string;
    command_id: Uint8Array;
    destination_chain: string;
    deposit_address: string;
    asset: string;
}
export declare const PollFailed: {
    typeUrl: string;
    encode(message: PollFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollFailed;
    fromPartial(object: Partial<PollFailed>): PollFailed;
    fromAmino(object: PollFailedAmino): PollFailed;
    toAmino(message: PollFailed): PollFailedAmino;
    fromAminoMsg(object: PollFailedAminoMsg): PollFailed;
    fromProtoMsg(message: PollFailedProtoMsg): PollFailed;
    toProto(message: PollFailed): Uint8Array;
    toProtoMsg(message: PollFailed): PollFailedProtoMsg;
};
export declare const PollExpired: {
    typeUrl: string;
    encode(message: PollExpired, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollExpired;
    fromPartial(object: Partial<PollExpired>): PollExpired;
    fromAmino(object: PollExpiredAmino): PollExpired;
    toAmino(message: PollExpired): PollExpiredAmino;
    fromAminoMsg(object: PollExpiredAminoMsg): PollExpired;
    fromProtoMsg(message: PollExpiredProtoMsg): PollExpired;
    toProto(message: PollExpired): Uint8Array;
    toProtoMsg(message: PollExpired): PollExpiredProtoMsg;
};
export declare const PollCompleted: {
    typeUrl: string;
    encode(message: PollCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollCompleted;
    fromPartial(object: Partial<PollCompleted>): PollCompleted;
    fromAmino(object: PollCompletedAmino): PollCompleted;
    toAmino(message: PollCompleted): PollCompletedAmino;
    fromAminoMsg(object: PollCompletedAminoMsg): PollCompleted;
    fromProtoMsg(message: PollCompletedProtoMsg): PollCompleted;
    toProto(message: PollCompleted): Uint8Array;
    toProtoMsg(message: PollCompleted): PollCompletedProtoMsg;
};
export declare const NoEventsConfirmed: {
    typeUrl: string;
    encode(message: NoEventsConfirmed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): NoEventsConfirmed;
    fromPartial(object: Partial<NoEventsConfirmed>): NoEventsConfirmed;
    fromAmino(object: NoEventsConfirmedAmino): NoEventsConfirmed;
    toAmino(message: NoEventsConfirmed): NoEventsConfirmedAmino;
    fromAminoMsg(object: NoEventsConfirmedAminoMsg): NoEventsConfirmed;
    fromProtoMsg(message: NoEventsConfirmedProtoMsg): NoEventsConfirmed;
    toProto(message: NoEventsConfirmed): Uint8Array;
    toProtoMsg(message: NoEventsConfirmed): NoEventsConfirmedProtoMsg;
};
export declare const ConfirmKeyTransferStarted: {
    typeUrl: string;
    encode(message: ConfirmKeyTransferStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmKeyTransferStarted;
    fromPartial(object: Partial<ConfirmKeyTransferStarted>): ConfirmKeyTransferStarted;
    fromAmino(object: ConfirmKeyTransferStartedAmino): ConfirmKeyTransferStarted;
    toAmino(message: ConfirmKeyTransferStarted): ConfirmKeyTransferStartedAmino;
    fromAminoMsg(object: ConfirmKeyTransferStartedAminoMsg): ConfirmKeyTransferStarted;
    fromProtoMsg(message: ConfirmKeyTransferStartedProtoMsg): ConfirmKeyTransferStarted;
    toProto(message: ConfirmKeyTransferStarted): Uint8Array;
    toProtoMsg(message: ConfirmKeyTransferStarted): ConfirmKeyTransferStartedProtoMsg;
};
export declare const ConfirmGatewayTxStarted: {
    typeUrl: string;
    encode(message: ConfirmGatewayTxStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmGatewayTxStarted;
    fromPartial(object: Partial<ConfirmGatewayTxStarted>): ConfirmGatewayTxStarted;
    fromAmino(object: ConfirmGatewayTxStartedAmino): ConfirmGatewayTxStarted;
    toAmino(message: ConfirmGatewayTxStarted): ConfirmGatewayTxStartedAmino;
    fromAminoMsg(object: ConfirmGatewayTxStartedAminoMsg): ConfirmGatewayTxStarted;
    fromProtoMsg(message: ConfirmGatewayTxStartedProtoMsg): ConfirmGatewayTxStarted;
    toProto(message: ConfirmGatewayTxStarted): Uint8Array;
    toProtoMsg(message: ConfirmGatewayTxStarted): ConfirmGatewayTxStartedProtoMsg;
};
export declare const PollMapping: {
    typeUrl: string;
    encode(message: PollMapping, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PollMapping;
    fromPartial(object: Partial<PollMapping>): PollMapping;
    fromAmino(object: PollMappingAmino): PollMapping;
    toAmino(message: PollMapping): PollMappingAmino;
    fromAminoMsg(object: PollMappingAminoMsg): PollMapping;
    fromProtoMsg(message: PollMappingProtoMsg): PollMapping;
    toProto(message: PollMapping): Uint8Array;
    toProtoMsg(message: PollMapping): PollMappingProtoMsg;
};
export declare const ConfirmGatewayTxsStarted: {
    typeUrl: string;
    encode(message: ConfirmGatewayTxsStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmGatewayTxsStarted;
    fromPartial(object: Partial<ConfirmGatewayTxsStarted>): ConfirmGatewayTxsStarted;
    fromAmino(object: ConfirmGatewayTxsStartedAmino): ConfirmGatewayTxsStarted;
    toAmino(message: ConfirmGatewayTxsStarted): ConfirmGatewayTxsStartedAmino;
    fromAminoMsg(object: ConfirmGatewayTxsStartedAminoMsg): ConfirmGatewayTxsStarted;
    fromProtoMsg(message: ConfirmGatewayTxsStartedProtoMsg): ConfirmGatewayTxsStarted;
    toProto(message: ConfirmGatewayTxsStarted): Uint8Array;
    toProtoMsg(message: ConfirmGatewayTxsStarted): ConfirmGatewayTxsStartedProtoMsg;
};
export declare const ConfirmDepositStarted: {
    typeUrl: string;
    encode(message: ConfirmDepositStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmDepositStarted;
    fromPartial(object: Partial<ConfirmDepositStarted>): ConfirmDepositStarted;
    fromAmino(object: ConfirmDepositStartedAmino): ConfirmDepositStarted;
    toAmino(message: ConfirmDepositStarted): ConfirmDepositStartedAmino;
    fromAminoMsg(object: ConfirmDepositStartedAminoMsg): ConfirmDepositStarted;
    fromProtoMsg(message: ConfirmDepositStartedProtoMsg): ConfirmDepositStarted;
    toProto(message: ConfirmDepositStarted): Uint8Array;
    toProtoMsg(message: ConfirmDepositStarted): ConfirmDepositStartedProtoMsg;
};
export declare const ConfirmTokenStarted: {
    typeUrl: string;
    encode(message: ConfirmTokenStarted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ConfirmTokenStarted;
    fromPartial(object: Partial<ConfirmTokenStarted>): ConfirmTokenStarted;
    fromAmino(object: ConfirmTokenStartedAmino): ConfirmTokenStarted;
    toAmino(message: ConfirmTokenStarted): ConfirmTokenStartedAmino;
    fromAminoMsg(object: ConfirmTokenStartedAminoMsg): ConfirmTokenStarted;
    fromProtoMsg(message: ConfirmTokenStartedProtoMsg): ConfirmTokenStarted;
    toProto(message: ConfirmTokenStarted): Uint8Array;
    toProtoMsg(message: ConfirmTokenStarted): ConfirmTokenStartedProtoMsg;
};
export declare const ChainAdded: {
    typeUrl: string;
    encode(message: ChainAdded, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ChainAdded;
    fromPartial(object: Partial<ChainAdded>): ChainAdded;
    fromAmino(object: ChainAddedAmino): ChainAdded;
    toAmino(message: ChainAdded): ChainAddedAmino;
    fromAminoMsg(object: ChainAddedAminoMsg): ChainAdded;
    fromProtoMsg(message: ChainAddedProtoMsg): ChainAdded;
    toProto(message: ChainAdded): Uint8Array;
    toProtoMsg(message: ChainAdded): ChainAddedProtoMsg;
};
export declare const CommandBatchSigned: {
    typeUrl: string;
    encode(message: CommandBatchSigned, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandBatchSigned;
    fromPartial(object: Partial<CommandBatchSigned>): CommandBatchSigned;
    fromAmino(object: CommandBatchSignedAmino): CommandBatchSigned;
    toAmino(message: CommandBatchSigned): CommandBatchSignedAmino;
    fromAminoMsg(object: CommandBatchSignedAminoMsg): CommandBatchSigned;
    fromProtoMsg(message: CommandBatchSignedProtoMsg): CommandBatchSigned;
    toProto(message: CommandBatchSigned): Uint8Array;
    toProtoMsg(message: CommandBatchSigned): CommandBatchSignedProtoMsg;
};
export declare const CommandBatchAborted: {
    typeUrl: string;
    encode(message: CommandBatchAborted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CommandBatchAborted;
    fromPartial(object: Partial<CommandBatchAborted>): CommandBatchAborted;
    fromAmino(object: CommandBatchAbortedAmino): CommandBatchAborted;
    toAmino(message: CommandBatchAborted): CommandBatchAbortedAmino;
    fromAminoMsg(object: CommandBatchAbortedAminoMsg): CommandBatchAborted;
    fromProtoMsg(message: CommandBatchAbortedProtoMsg): CommandBatchAborted;
    toProto(message: CommandBatchAborted): Uint8Array;
    toProtoMsg(message: CommandBatchAborted): CommandBatchAbortedProtoMsg;
};
export declare const EVMEventConfirmed: {
    typeUrl: string;
    encode(message: EVMEventConfirmed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EVMEventConfirmed;
    fromPartial(object: Partial<EVMEventConfirmed>): EVMEventConfirmed;
    fromAmino(object: EVMEventConfirmedAmino): EVMEventConfirmed;
    toAmino(message: EVMEventConfirmed): EVMEventConfirmedAmino;
    fromAminoMsg(object: EVMEventConfirmedAminoMsg): EVMEventConfirmed;
    fromProtoMsg(message: EVMEventConfirmedProtoMsg): EVMEventConfirmed;
    toProto(message: EVMEventConfirmed): Uint8Array;
    toProtoMsg(message: EVMEventConfirmed): EVMEventConfirmedProtoMsg;
};
export declare const EVMEventCompleted: {
    typeUrl: string;
    encode(message: EVMEventCompleted, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EVMEventCompleted;
    fromPartial(object: Partial<EVMEventCompleted>): EVMEventCompleted;
    fromAmino(object: EVMEventCompletedAmino): EVMEventCompleted;
    toAmino(message: EVMEventCompleted): EVMEventCompletedAmino;
    fromAminoMsg(object: EVMEventCompletedAminoMsg): EVMEventCompleted;
    fromProtoMsg(message: EVMEventCompletedProtoMsg): EVMEventCompleted;
    toProto(message: EVMEventCompleted): Uint8Array;
    toProtoMsg(message: EVMEventCompleted): EVMEventCompletedProtoMsg;
};
export declare const EVMEventFailed: {
    typeUrl: string;
    encode(message: EVMEventFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EVMEventFailed;
    fromPartial(object: Partial<EVMEventFailed>): EVMEventFailed;
    fromAmino(object: EVMEventFailedAmino): EVMEventFailed;
    toAmino(message: EVMEventFailed): EVMEventFailedAmino;
    fromAminoMsg(object: EVMEventFailedAminoMsg): EVMEventFailed;
    fromProtoMsg(message: EVMEventFailedProtoMsg): EVMEventFailed;
    toProto(message: EVMEventFailed): Uint8Array;
    toProtoMsg(message: EVMEventFailed): EVMEventFailedProtoMsg;
};
export declare const EVMEventRetryFailed: {
    typeUrl: string;
    encode(message: EVMEventRetryFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EVMEventRetryFailed;
    fromPartial(object: Partial<EVMEventRetryFailed>): EVMEventRetryFailed;
    fromAmino(object: EVMEventRetryFailedAmino): EVMEventRetryFailed;
    toAmino(message: EVMEventRetryFailed): EVMEventRetryFailedAmino;
    fromAminoMsg(object: EVMEventRetryFailedAminoMsg): EVMEventRetryFailed;
    fromProtoMsg(message: EVMEventRetryFailedProtoMsg): EVMEventRetryFailed;
    toProto(message: EVMEventRetryFailed): Uint8Array;
    toProtoMsg(message: EVMEventRetryFailed): EVMEventRetryFailedProtoMsg;
};
export declare const ContractCallApproved: {
    typeUrl: string;
    encode(message: ContractCallApproved, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCallApproved;
    fromPartial(object: Partial<ContractCallApproved>): ContractCallApproved;
    fromAmino(object: ContractCallApprovedAmino): ContractCallApproved;
    toAmino(message: ContractCallApproved): ContractCallApprovedAmino;
    fromAminoMsg(object: ContractCallApprovedAminoMsg): ContractCallApproved;
    fromProtoMsg(message: ContractCallApprovedProtoMsg): ContractCallApproved;
    toProto(message: ContractCallApproved): Uint8Array;
    toProtoMsg(message: ContractCallApproved): ContractCallApprovedProtoMsg;
};
export declare const ContractCallFailed: {
    typeUrl: string;
    encode(message: ContractCallFailed, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCallFailed;
    fromPartial(object: Partial<ContractCallFailed>): ContractCallFailed;
    fromAmino(object: ContractCallFailedAmino): ContractCallFailed;
    toAmino(message: ContractCallFailed): ContractCallFailedAmino;
    fromAminoMsg(object: ContractCallFailedAminoMsg): ContractCallFailed;
    fromProtoMsg(message: ContractCallFailedProtoMsg): ContractCallFailed;
    toProto(message: ContractCallFailed): Uint8Array;
    toProtoMsg(message: ContractCallFailed): ContractCallFailedProtoMsg;
};
export declare const ContractCallWithMintApproved: {
    typeUrl: string;
    encode(message: ContractCallWithMintApproved, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractCallWithMintApproved;
    fromPartial(object: Partial<ContractCallWithMintApproved>): ContractCallWithMintApproved;
    fromAmino(object: ContractCallWithMintApprovedAmino): ContractCallWithMintApproved;
    toAmino(message: ContractCallWithMintApproved): ContractCallWithMintApprovedAmino;
    fromAminoMsg(object: ContractCallWithMintApprovedAminoMsg): ContractCallWithMintApproved;
    fromProtoMsg(message: ContractCallWithMintApprovedProtoMsg): ContractCallWithMintApproved;
    toProto(message: ContractCallWithMintApproved): Uint8Array;
    toProtoMsg(message: ContractCallWithMintApproved): ContractCallWithMintApprovedProtoMsg;
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
export declare const MintCommand: {
    typeUrl: string;
    encode(message: MintCommand, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MintCommand;
    fromPartial(object: Partial<MintCommand>): MintCommand;
    fromAmino(object: MintCommandAmino): MintCommand;
    toAmino(message: MintCommand): MintCommandAmino;
    fromAminoMsg(object: MintCommandAminoMsg): MintCommand;
    fromProtoMsg(message: MintCommandProtoMsg): MintCommand;
    toProto(message: MintCommand): Uint8Array;
    toProtoMsg(message: MintCommand): MintCommandProtoMsg;
};
export declare const BurnCommand: {
    typeUrl: string;
    encode(message: BurnCommand, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BurnCommand;
    fromPartial(object: Partial<BurnCommand>): BurnCommand;
    fromAmino(object: BurnCommandAmino): BurnCommand;
    toAmino(message: BurnCommand): BurnCommandAmino;
    fromAminoMsg(object: BurnCommandAminoMsg): BurnCommand;
    fromProtoMsg(message: BurnCommandProtoMsg): BurnCommand;
    toProto(message: BurnCommand): Uint8Array;
    toProtoMsg(message: BurnCommand): BurnCommandProtoMsg;
};
