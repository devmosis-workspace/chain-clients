import { ClaimType } from "./attestation";
import { BridgeValidator, BridgeValidatorAmino, BridgeValidatorSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
export interface EventAttestationObserved {
    attestationType: ClaimType;
    bridgeContract: string;
    bridgeChainId: bigint;
    attestationId: Uint8Array;
    nonce: bigint;
}
export interface EventAttestationObservedProtoMsg {
    typeUrl: "/injective.peggy.v1.EventAttestationObserved";
    value: Uint8Array;
}
export interface EventAttestationObservedAmino {
    attestation_type: ClaimType;
    bridge_contract: string;
    bridge_chain_id: string;
    attestation_id: Uint8Array;
    nonce: string;
}
export interface EventAttestationObservedAminoMsg {
    type: "/injective.peggy.v1.EventAttestationObserved";
    value: EventAttestationObservedAmino;
}
export interface EventAttestationObservedSDKType {
    attestation_type: ClaimType;
    bridge_contract: string;
    bridge_chain_id: bigint;
    attestation_id: Uint8Array;
    nonce: bigint;
}
export interface EventBridgeWithdrawCanceled {
    bridgeContract: string;
    bridgeChainId: bigint;
}
export interface EventBridgeWithdrawCanceledProtoMsg {
    typeUrl: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
    value: Uint8Array;
}
export interface EventBridgeWithdrawCanceledAmino {
    bridge_contract: string;
    bridge_chain_id: string;
}
export interface EventBridgeWithdrawCanceledAminoMsg {
    type: "/injective.peggy.v1.EventBridgeWithdrawCanceled";
    value: EventBridgeWithdrawCanceledAmino;
}
export interface EventBridgeWithdrawCanceledSDKType {
    bridge_contract: string;
    bridge_chain_id: bigint;
}
export interface EventOutgoingBatch {
    denom: string;
    orchestratorAddress: string;
    batchNonce: bigint;
    batchTimeout: bigint;
    batchTxIds: bigint[];
}
export interface EventOutgoingBatchProtoMsg {
    typeUrl: "/injective.peggy.v1.EventOutgoingBatch";
    value: Uint8Array;
}
export interface EventOutgoingBatchAmino {
    denom: string;
    orchestrator_address: string;
    batch_nonce: string;
    batch_timeout: string;
    batch_tx_ids: string[];
}
export interface EventOutgoingBatchAminoMsg {
    type: "/injective.peggy.v1.EventOutgoingBatch";
    value: EventOutgoingBatchAmino;
}
export interface EventOutgoingBatchSDKType {
    denom: string;
    orchestrator_address: string;
    batch_nonce: bigint;
    batch_timeout: bigint;
    batch_tx_ids: bigint[];
}
export interface EventOutgoingBatchCanceled {
    bridgeContract: string;
    bridgeChainId: bigint;
    batchId: bigint;
    nonce: bigint;
}
export interface EventOutgoingBatchCanceledProtoMsg {
    typeUrl: "/injective.peggy.v1.EventOutgoingBatchCanceled";
    value: Uint8Array;
}
export interface EventOutgoingBatchCanceledAmino {
    bridge_contract: string;
    bridge_chain_id: string;
    batch_id: string;
    nonce: string;
}
export interface EventOutgoingBatchCanceledAminoMsg {
    type: "/injective.peggy.v1.EventOutgoingBatchCanceled";
    value: EventOutgoingBatchCanceledAmino;
}
export interface EventOutgoingBatchCanceledSDKType {
    bridge_contract: string;
    bridge_chain_id: bigint;
    batch_id: bigint;
    nonce: bigint;
}
export interface EventValsetUpdateRequest {
    valsetNonce: bigint;
    valsetHeight: bigint;
    valsetMembers: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
}
export interface EventValsetUpdateRequestProtoMsg {
    typeUrl: "/injective.peggy.v1.EventValsetUpdateRequest";
    value: Uint8Array;
}
export interface EventValsetUpdateRequestAmino {
    valset_nonce: string;
    valset_height: string;
    valset_members: BridgeValidatorAmino[];
    reward_amount: string;
    reward_token: string;
}
export interface EventValsetUpdateRequestAminoMsg {
    type: "/injective.peggy.v1.EventValsetUpdateRequest";
    value: EventValsetUpdateRequestAmino;
}
export interface EventValsetUpdateRequestSDKType {
    valset_nonce: bigint;
    valset_height: bigint;
    valset_members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
}
export interface EventSetOrchestratorAddresses {
    validatorAddress: string;
    orchestratorAddress: string;
    operatorEthAddress: string;
}
export interface EventSetOrchestratorAddressesProtoMsg {
    typeUrl: "/injective.peggy.v1.EventSetOrchestratorAddresses";
    value: Uint8Array;
}
export interface EventSetOrchestratorAddressesAmino {
    validator_address: string;
    orchestrator_address: string;
    operator_eth_address: string;
}
export interface EventSetOrchestratorAddressesAminoMsg {
    type: "/injective.peggy.v1.EventSetOrchestratorAddresses";
    value: EventSetOrchestratorAddressesAmino;
}
export interface EventSetOrchestratorAddressesSDKType {
    validator_address: string;
    orchestrator_address: string;
    operator_eth_address: string;
}
export interface EventValsetConfirm {
    valsetNonce: bigint;
    orchestratorAddress: string;
}
export interface EventValsetConfirmProtoMsg {
    typeUrl: "/injective.peggy.v1.EventValsetConfirm";
    value: Uint8Array;
}
export interface EventValsetConfirmAmino {
    valset_nonce: string;
    orchestrator_address: string;
}
export interface EventValsetConfirmAminoMsg {
    type: "/injective.peggy.v1.EventValsetConfirm";
    value: EventValsetConfirmAmino;
}
export interface EventValsetConfirmSDKType {
    valset_nonce: bigint;
    orchestrator_address: string;
}
export interface EventSendToEth {
    outgoingTxId: bigint;
    sender: string;
    receiver: string;
    amount: string;
    bridgeFee: string;
}
export interface EventSendToEthProtoMsg {
    typeUrl: "/injective.peggy.v1.EventSendToEth";
    value: Uint8Array;
}
export interface EventSendToEthAmino {
    outgoing_tx_id: string;
    sender: string;
    receiver: string;
    amount: string;
    bridge_fee: string;
}
export interface EventSendToEthAminoMsg {
    type: "/injective.peggy.v1.EventSendToEth";
    value: EventSendToEthAmino;
}
export interface EventSendToEthSDKType {
    outgoing_tx_id: bigint;
    sender: string;
    receiver: string;
    amount: string;
    bridge_fee: string;
}
export interface EventConfirmBatch {
    batchNonce: bigint;
    orchestratorAddress: string;
}
export interface EventConfirmBatchProtoMsg {
    typeUrl: "/injective.peggy.v1.EventConfirmBatch";
    value: Uint8Array;
}
export interface EventConfirmBatchAmino {
    batch_nonce: string;
    orchestrator_address: string;
}
export interface EventConfirmBatchAminoMsg {
    type: "/injective.peggy.v1.EventConfirmBatch";
    value: EventConfirmBatchAmino;
}
export interface EventConfirmBatchSDKType {
    batch_nonce: bigint;
    orchestrator_address: string;
}
export interface EventAttestationVote {
    eventNonce: bigint;
    attestationId: Uint8Array;
    voter: string;
}
export interface EventAttestationVoteProtoMsg {
    typeUrl: "/injective.peggy.v1.EventAttestationVote";
    value: Uint8Array;
}
export interface EventAttestationVoteAmino {
    event_nonce: string;
    attestation_id: Uint8Array;
    voter: string;
}
export interface EventAttestationVoteAminoMsg {
    type: "/injective.peggy.v1.EventAttestationVote";
    value: EventAttestationVoteAmino;
}
export interface EventAttestationVoteSDKType {
    event_nonce: bigint;
    attestation_id: Uint8Array;
    voter: string;
}
export interface EventDepositClaim {
    eventNonce: bigint;
    eventHeight: bigint;
    attestationId: Uint8Array;
    ethereumSender: string;
    cosmosReceiver: string;
    tokenContract: string;
    amount: string;
    orchestratorAddress: string;
    data: string;
}
export interface EventDepositClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.EventDepositClaim";
    value: Uint8Array;
}
export interface EventDepositClaimAmino {
    event_nonce: string;
    event_height: string;
    attestation_id: Uint8Array;
    ethereum_sender: string;
    cosmos_receiver: string;
    token_contract: string;
    amount: string;
    orchestrator_address: string;
    data: string;
}
export interface EventDepositClaimAminoMsg {
    type: "/injective.peggy.v1.EventDepositClaim";
    value: EventDepositClaimAmino;
}
export interface EventDepositClaimSDKType {
    event_nonce: bigint;
    event_height: bigint;
    attestation_id: Uint8Array;
    ethereum_sender: string;
    cosmos_receiver: string;
    token_contract: string;
    amount: string;
    orchestrator_address: string;
    data: string;
}
export interface EventWithdrawClaim {
    eventNonce: bigint;
    eventHeight: bigint;
    attestationId: Uint8Array;
    batchNonce: bigint;
    tokenContract: string;
    orchestratorAddress: string;
}
export interface EventWithdrawClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.EventWithdrawClaim";
    value: Uint8Array;
}
export interface EventWithdrawClaimAmino {
    event_nonce: string;
    event_height: string;
    attestation_id: Uint8Array;
    batch_nonce: string;
    token_contract: string;
    orchestrator_address: string;
}
export interface EventWithdrawClaimAminoMsg {
    type: "/injective.peggy.v1.EventWithdrawClaim";
    value: EventWithdrawClaimAmino;
}
export interface EventWithdrawClaimSDKType {
    event_nonce: bigint;
    event_height: bigint;
    attestation_id: Uint8Array;
    batch_nonce: bigint;
    token_contract: string;
    orchestrator_address: string;
}
export interface EventERC20DeployedClaim {
    eventNonce: bigint;
    eventHeight: bigint;
    attestationId: Uint8Array;
    cosmosDenom: string;
    tokenContract: string;
    name: string;
    symbol: string;
    decimals: bigint;
    orchestratorAddress: string;
}
export interface EventERC20DeployedClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.EventERC20DeployedClaim";
    value: Uint8Array;
}
export interface EventERC20DeployedClaimAmino {
    event_nonce: string;
    event_height: string;
    attestation_id: Uint8Array;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: string;
    orchestrator_address: string;
}
export interface EventERC20DeployedClaimAminoMsg {
    type: "/injective.peggy.v1.EventERC20DeployedClaim";
    value: EventERC20DeployedClaimAmino;
}
export interface EventERC20DeployedClaimSDKType {
    event_nonce: bigint;
    event_height: bigint;
    attestation_id: Uint8Array;
    cosmos_denom: string;
    token_contract: string;
    name: string;
    symbol: string;
    decimals: bigint;
    orchestrator_address: string;
}
export interface EventValsetUpdateClaim {
    eventNonce: bigint;
    eventHeight: bigint;
    attestationId: Uint8Array;
    valsetNonce: bigint;
    valsetMembers: BridgeValidator[];
    rewardAmount: string;
    rewardToken: string;
    orchestratorAddress: string;
}
export interface EventValsetUpdateClaimProtoMsg {
    typeUrl: "/injective.peggy.v1.EventValsetUpdateClaim";
    value: Uint8Array;
}
export interface EventValsetUpdateClaimAmino {
    event_nonce: string;
    event_height: string;
    attestation_id: Uint8Array;
    valset_nonce: string;
    valset_members: BridgeValidatorAmino[];
    reward_amount: string;
    reward_token: string;
    orchestrator_address: string;
}
export interface EventValsetUpdateClaimAminoMsg {
    type: "/injective.peggy.v1.EventValsetUpdateClaim";
    value: EventValsetUpdateClaimAmino;
}
export interface EventValsetUpdateClaimSDKType {
    event_nonce: bigint;
    event_height: bigint;
    attestation_id: Uint8Array;
    valset_nonce: bigint;
    valset_members: BridgeValidatorSDKType[];
    reward_amount: string;
    reward_token: string;
    orchestrator_address: string;
}
export interface EventCancelSendToEth {
    outgoingTxId: bigint;
}
export interface EventCancelSendToEthProtoMsg {
    typeUrl: "/injective.peggy.v1.EventCancelSendToEth";
    value: Uint8Array;
}
export interface EventCancelSendToEthAmino {
    outgoing_tx_id: string;
}
export interface EventCancelSendToEthAminoMsg {
    type: "/injective.peggy.v1.EventCancelSendToEth";
    value: EventCancelSendToEthAmino;
}
export interface EventCancelSendToEthSDKType {
    outgoing_tx_id: bigint;
}
export interface EventSubmitBadSignatureEvidence {
    badEthSignature: string;
    badEthSignatureSubject: string;
}
export interface EventSubmitBadSignatureEvidenceProtoMsg {
    typeUrl: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
    value: Uint8Array;
}
export interface EventSubmitBadSignatureEvidenceAmino {
    bad_eth_signature: string;
    bad_eth_signature_subject: string;
}
export interface EventSubmitBadSignatureEvidenceAminoMsg {
    type: "/injective.peggy.v1.EventSubmitBadSignatureEvidence";
    value: EventSubmitBadSignatureEvidenceAmino;
}
export interface EventSubmitBadSignatureEvidenceSDKType {
    bad_eth_signature: string;
    bad_eth_signature_subject: string;
}
export interface EventValidatorSlash {
    power: bigint;
    reason: string;
    consensusAddress: string;
    operatorAddress: string;
    moniker: string;
}
export interface EventValidatorSlashProtoMsg {
    typeUrl: "/injective.peggy.v1.EventValidatorSlash";
    value: Uint8Array;
}
export interface EventValidatorSlashAmino {
    power: string;
    reason: string;
    consensus_address: string;
    operator_address: string;
    moniker: string;
}
export interface EventValidatorSlashAminoMsg {
    type: "/injective.peggy.v1.EventValidatorSlash";
    value: EventValidatorSlashAmino;
}
export interface EventValidatorSlashSDKType {
    power: bigint;
    reason: string;
    consensus_address: string;
    operator_address: string;
    moniker: string;
}
export declare const EventAttestationObserved: {
    typeUrl: string;
    encode(message: EventAttestationObserved, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAttestationObserved;
    fromPartial(object: Partial<EventAttestationObserved>): EventAttestationObserved;
    fromAmino(object: EventAttestationObservedAmino): EventAttestationObserved;
    toAmino(message: EventAttestationObserved): EventAttestationObservedAmino;
    fromAminoMsg(object: EventAttestationObservedAminoMsg): EventAttestationObserved;
    fromProtoMsg(message: EventAttestationObservedProtoMsg): EventAttestationObserved;
    toProto(message: EventAttestationObserved): Uint8Array;
    toProtoMsg(message: EventAttestationObserved): EventAttestationObservedProtoMsg;
};
export declare const EventBridgeWithdrawCanceled: {
    typeUrl: string;
    encode(message: EventBridgeWithdrawCanceled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBridgeWithdrawCanceled;
    fromPartial(object: Partial<EventBridgeWithdrawCanceled>): EventBridgeWithdrawCanceled;
    fromAmino(object: EventBridgeWithdrawCanceledAmino): EventBridgeWithdrawCanceled;
    toAmino(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledAmino;
    fromAminoMsg(object: EventBridgeWithdrawCanceledAminoMsg): EventBridgeWithdrawCanceled;
    fromProtoMsg(message: EventBridgeWithdrawCanceledProtoMsg): EventBridgeWithdrawCanceled;
    toProto(message: EventBridgeWithdrawCanceled): Uint8Array;
    toProtoMsg(message: EventBridgeWithdrawCanceled): EventBridgeWithdrawCanceledProtoMsg;
};
export declare const EventOutgoingBatch: {
    typeUrl: string;
    encode(message: EventOutgoingBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingBatch;
    fromPartial(object: Partial<EventOutgoingBatch>): EventOutgoingBatch;
    fromAmino(object: EventOutgoingBatchAmino): EventOutgoingBatch;
    toAmino(message: EventOutgoingBatch): EventOutgoingBatchAmino;
    fromAminoMsg(object: EventOutgoingBatchAminoMsg): EventOutgoingBatch;
    fromProtoMsg(message: EventOutgoingBatchProtoMsg): EventOutgoingBatch;
    toProto(message: EventOutgoingBatch): Uint8Array;
    toProtoMsg(message: EventOutgoingBatch): EventOutgoingBatchProtoMsg;
};
export declare const EventOutgoingBatchCanceled: {
    typeUrl: string;
    encode(message: EventOutgoingBatchCanceled, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventOutgoingBatchCanceled;
    fromPartial(object: Partial<EventOutgoingBatchCanceled>): EventOutgoingBatchCanceled;
    fromAmino(object: EventOutgoingBatchCanceledAmino): EventOutgoingBatchCanceled;
    toAmino(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledAmino;
    fromAminoMsg(object: EventOutgoingBatchCanceledAminoMsg): EventOutgoingBatchCanceled;
    fromProtoMsg(message: EventOutgoingBatchCanceledProtoMsg): EventOutgoingBatchCanceled;
    toProto(message: EventOutgoingBatchCanceled): Uint8Array;
    toProtoMsg(message: EventOutgoingBatchCanceled): EventOutgoingBatchCanceledProtoMsg;
};
export declare const EventValsetUpdateRequest: {
    typeUrl: string;
    encode(message: EventValsetUpdateRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValsetUpdateRequest;
    fromPartial(object: Partial<EventValsetUpdateRequest>): EventValsetUpdateRequest;
    fromAmino(object: EventValsetUpdateRequestAmino): EventValsetUpdateRequest;
    toAmino(message: EventValsetUpdateRequest): EventValsetUpdateRequestAmino;
    fromAminoMsg(object: EventValsetUpdateRequestAminoMsg): EventValsetUpdateRequest;
    fromProtoMsg(message: EventValsetUpdateRequestProtoMsg): EventValsetUpdateRequest;
    toProto(message: EventValsetUpdateRequest): Uint8Array;
    toProtoMsg(message: EventValsetUpdateRequest): EventValsetUpdateRequestProtoMsg;
};
export declare const EventSetOrchestratorAddresses: {
    typeUrl: string;
    encode(message: EventSetOrchestratorAddresses, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetOrchestratorAddresses;
    fromPartial(object: Partial<EventSetOrchestratorAddresses>): EventSetOrchestratorAddresses;
    fromAmino(object: EventSetOrchestratorAddressesAmino): EventSetOrchestratorAddresses;
    toAmino(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesAmino;
    fromAminoMsg(object: EventSetOrchestratorAddressesAminoMsg): EventSetOrchestratorAddresses;
    fromProtoMsg(message: EventSetOrchestratorAddressesProtoMsg): EventSetOrchestratorAddresses;
    toProto(message: EventSetOrchestratorAddresses): Uint8Array;
    toProtoMsg(message: EventSetOrchestratorAddresses): EventSetOrchestratorAddressesProtoMsg;
};
export declare const EventValsetConfirm: {
    typeUrl: string;
    encode(message: EventValsetConfirm, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValsetConfirm;
    fromPartial(object: Partial<EventValsetConfirm>): EventValsetConfirm;
    fromAmino(object: EventValsetConfirmAmino): EventValsetConfirm;
    toAmino(message: EventValsetConfirm): EventValsetConfirmAmino;
    fromAminoMsg(object: EventValsetConfirmAminoMsg): EventValsetConfirm;
    fromProtoMsg(message: EventValsetConfirmProtoMsg): EventValsetConfirm;
    toProto(message: EventValsetConfirm): Uint8Array;
    toProtoMsg(message: EventValsetConfirm): EventValsetConfirmProtoMsg;
};
export declare const EventSendToEth: {
    typeUrl: string;
    encode(message: EventSendToEth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToEth;
    fromPartial(object: Partial<EventSendToEth>): EventSendToEth;
    fromAmino(object: EventSendToEthAmino): EventSendToEth;
    toAmino(message: EventSendToEth): EventSendToEthAmino;
    fromAminoMsg(object: EventSendToEthAminoMsg): EventSendToEth;
    fromProtoMsg(message: EventSendToEthProtoMsg): EventSendToEth;
    toProto(message: EventSendToEth): Uint8Array;
    toProtoMsg(message: EventSendToEth): EventSendToEthProtoMsg;
};
export declare const EventConfirmBatch: {
    typeUrl: string;
    encode(message: EventConfirmBatch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventConfirmBatch;
    fromPartial(object: Partial<EventConfirmBatch>): EventConfirmBatch;
    fromAmino(object: EventConfirmBatchAmino): EventConfirmBatch;
    toAmino(message: EventConfirmBatch): EventConfirmBatchAmino;
    fromAminoMsg(object: EventConfirmBatchAminoMsg): EventConfirmBatch;
    fromProtoMsg(message: EventConfirmBatchProtoMsg): EventConfirmBatch;
    toProto(message: EventConfirmBatch): Uint8Array;
    toProtoMsg(message: EventConfirmBatch): EventConfirmBatchProtoMsg;
};
export declare const EventAttestationVote: {
    typeUrl: string;
    encode(message: EventAttestationVote, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventAttestationVote;
    fromPartial(object: Partial<EventAttestationVote>): EventAttestationVote;
    fromAmino(object: EventAttestationVoteAmino): EventAttestationVote;
    toAmino(message: EventAttestationVote): EventAttestationVoteAmino;
    fromAminoMsg(object: EventAttestationVoteAminoMsg): EventAttestationVote;
    fromProtoMsg(message: EventAttestationVoteProtoMsg): EventAttestationVote;
    toProto(message: EventAttestationVote): Uint8Array;
    toProtoMsg(message: EventAttestationVote): EventAttestationVoteProtoMsg;
};
export declare const EventDepositClaim: {
    typeUrl: string;
    encode(message: EventDepositClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDepositClaim;
    fromPartial(object: Partial<EventDepositClaim>): EventDepositClaim;
    fromAmino(object: EventDepositClaimAmino): EventDepositClaim;
    toAmino(message: EventDepositClaim): EventDepositClaimAmino;
    fromAminoMsg(object: EventDepositClaimAminoMsg): EventDepositClaim;
    fromProtoMsg(message: EventDepositClaimProtoMsg): EventDepositClaim;
    toProto(message: EventDepositClaim): Uint8Array;
    toProtoMsg(message: EventDepositClaim): EventDepositClaimProtoMsg;
};
export declare const EventWithdrawClaim: {
    typeUrl: string;
    encode(message: EventWithdrawClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventWithdrawClaim;
    fromPartial(object: Partial<EventWithdrawClaim>): EventWithdrawClaim;
    fromAmino(object: EventWithdrawClaimAmino): EventWithdrawClaim;
    toAmino(message: EventWithdrawClaim): EventWithdrawClaimAmino;
    fromAminoMsg(object: EventWithdrawClaimAminoMsg): EventWithdrawClaim;
    fromProtoMsg(message: EventWithdrawClaimProtoMsg): EventWithdrawClaim;
    toProto(message: EventWithdrawClaim): Uint8Array;
    toProtoMsg(message: EventWithdrawClaim): EventWithdrawClaimProtoMsg;
};
export declare const EventERC20DeployedClaim: {
    typeUrl: string;
    encode(message: EventERC20DeployedClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventERC20DeployedClaim;
    fromPartial(object: Partial<EventERC20DeployedClaim>): EventERC20DeployedClaim;
    fromAmino(object: EventERC20DeployedClaimAmino): EventERC20DeployedClaim;
    toAmino(message: EventERC20DeployedClaim): EventERC20DeployedClaimAmino;
    fromAminoMsg(object: EventERC20DeployedClaimAminoMsg): EventERC20DeployedClaim;
    fromProtoMsg(message: EventERC20DeployedClaimProtoMsg): EventERC20DeployedClaim;
    toProto(message: EventERC20DeployedClaim): Uint8Array;
    toProtoMsg(message: EventERC20DeployedClaim): EventERC20DeployedClaimProtoMsg;
};
export declare const EventValsetUpdateClaim: {
    typeUrl: string;
    encode(message: EventValsetUpdateClaim, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValsetUpdateClaim;
    fromPartial(object: Partial<EventValsetUpdateClaim>): EventValsetUpdateClaim;
    fromAmino(object: EventValsetUpdateClaimAmino): EventValsetUpdateClaim;
    toAmino(message: EventValsetUpdateClaim): EventValsetUpdateClaimAmino;
    fromAminoMsg(object: EventValsetUpdateClaimAminoMsg): EventValsetUpdateClaim;
    fromProtoMsg(message: EventValsetUpdateClaimProtoMsg): EventValsetUpdateClaim;
    toProto(message: EventValsetUpdateClaim): Uint8Array;
    toProtoMsg(message: EventValsetUpdateClaim): EventValsetUpdateClaimProtoMsg;
};
export declare const EventCancelSendToEth: {
    typeUrl: string;
    encode(message: EventCancelSendToEth, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCancelSendToEth;
    fromPartial(object: Partial<EventCancelSendToEth>): EventCancelSendToEth;
    fromAmino(object: EventCancelSendToEthAmino): EventCancelSendToEth;
    toAmino(message: EventCancelSendToEth): EventCancelSendToEthAmino;
    fromAminoMsg(object: EventCancelSendToEthAminoMsg): EventCancelSendToEth;
    fromProtoMsg(message: EventCancelSendToEthProtoMsg): EventCancelSendToEth;
    toProto(message: EventCancelSendToEth): Uint8Array;
    toProtoMsg(message: EventCancelSendToEth): EventCancelSendToEthProtoMsg;
};
export declare const EventSubmitBadSignatureEvidence: {
    typeUrl: string;
    encode(message: EventSubmitBadSignatureEvidence, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSubmitBadSignatureEvidence;
    fromPartial(object: Partial<EventSubmitBadSignatureEvidence>): EventSubmitBadSignatureEvidence;
    fromAmino(object: EventSubmitBadSignatureEvidenceAmino): EventSubmitBadSignatureEvidence;
    toAmino(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceAmino;
    fromAminoMsg(object: EventSubmitBadSignatureEvidenceAminoMsg): EventSubmitBadSignatureEvidence;
    fromProtoMsg(message: EventSubmitBadSignatureEvidenceProtoMsg): EventSubmitBadSignatureEvidence;
    toProto(message: EventSubmitBadSignatureEvidence): Uint8Array;
    toProtoMsg(message: EventSubmitBadSignatureEvidence): EventSubmitBadSignatureEvidenceProtoMsg;
};
export declare const EventValidatorSlash: {
    typeUrl: string;
    encode(message: EventValidatorSlash, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventValidatorSlash;
    fromPartial(object: Partial<EventValidatorSlash>): EventValidatorSlash;
    fromAmino(object: EventValidatorSlashAmino): EventValidatorSlash;
    toAmino(message: EventValidatorSlash): EventValidatorSlashAmino;
    fromAminoMsg(object: EventValidatorSlashAminoMsg): EventValidatorSlash;
    fromProtoMsg(message: EventValidatorSlashProtoMsg): EventValidatorSlash;
    toProto(message: EventValidatorSlash): Uint8Array;
    toProtoMsg(message: EventValidatorSlash): EventValidatorSlashProtoMsg;
};
