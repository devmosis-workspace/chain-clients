import { Any, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { BinaryWriter } from "../../binary";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export declare enum ClaimType {
    /** CLAIM_TYPE_UNSPECIFIED - An unspecified claim type */
    CLAIM_TYPE_UNSPECIFIED = 0,
    /** CLAIM_TYPE_SEND_TO_COSMOS - A claim for a SendToCosmos transaction */
    CLAIM_TYPE_SEND_TO_COSMOS = 1,
    /** CLAIM_TYPE_BATCH_SEND_TO_ETH - A claim for when batches are relayed */
    CLAIM_TYPE_BATCH_SEND_TO_ETH = 2,
    /** CLAIM_TYPE_ERC20_DEPLOYED - A claim for when an erc20 contract has been deployed */
    CLAIM_TYPE_ERC20_DEPLOYED = 3,
    /** CLAIM_TYPE_LOGIC_CALL_EXECUTED - A claim for when a logic call has been executed */
    CLAIM_TYPE_LOGIC_CALL_EXECUTED = 4,
    /** CLAIM_TYPE_VALSET_UPDATED - A claim for when a valset update has happened */
    CLAIM_TYPE_VALSET_UPDATED = 5,
    UNRECOGNIZED = -1
}
export declare const ClaimTypeSDKType: typeof ClaimType;
export declare const ClaimTypeAmino: typeof ClaimType;
export declare function claimTypeFromJSON(object: any): ClaimType;
export declare function claimTypeToJSON(object: ClaimType): string;
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface Attestation {
    observed: boolean;
    votes: string[];
    height: bigint;
    claim: Any;
}
export interface AttestationProtoMsg {
    typeUrl: "/gravity.v1.Attestation";
    value: Uint8Array;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationAmino {
    observed: boolean;
    votes: string[];
    height: string;
    claim?: AnyAmino;
}
export interface AttestationAminoMsg {
    type: "/gravity.v1.Attestation";
    value: AttestationAmino;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the gravity contract that is unique per event fired
 * These event nonces must be relayed in order. This is a correctness issue,
 * if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the gravity state machine
 *
 * The actual content of the claims is passed in with the transaction making the claim
 * and then passed through the call stack alongside the attestation while it is processed
 * the key in which the attestation is stored is keyed on the exact details of the claim
 * but there is no reason to store those exact details becuause the next message sender
 * will kindly provide you with them.
 */
export interface AttestationSDKType {
    observed: boolean;
    votes: string[];
    height: bigint;
    claim: AnySDKType;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20Token {
    contract: string;
    amount: string;
}
export interface ERC20TokenProtoMsg {
    typeUrl: "/gravity.v1.ERC20Token";
    value: Uint8Array;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenAmino {
    contract: string;
    amount: string;
}
export interface ERC20TokenAminoMsg {
    type: "/gravity.v1.ERC20Token";
    value: ERC20TokenAmino;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to display for UI)
 */
export interface ERC20TokenSDKType {
    contract: string;
    amount: string;
}
export interface EventObservation {
    attestationType: string;
    bridgeContract: string;
    bridgeChainId: string;
    attestationId: string;
    nonce: string;
}
export interface EventObservationProtoMsg {
    typeUrl: "/gravity.v1.EventObservation";
    value: Uint8Array;
}
export interface EventObservationAmino {
    attestation_type: string;
    bridge_contract: string;
    bridge_chain_id: string;
    attestation_id: string;
    nonce: string;
}
export interface EventObservationAminoMsg {
    type: "/gravity.v1.EventObservation";
    value: EventObservationAmino;
}
export interface EventObservationSDKType {
    attestation_type: string;
    bridge_contract: string;
    bridge_chain_id: string;
    attestation_id: string;
    nonce: string;
}
export interface EventInvalidSendToCosmosReceiver {
    amount: string;
    nonce: string;
    token: string;
    sender: string;
}
export interface EventInvalidSendToCosmosReceiverProtoMsg {
    typeUrl: "/gravity.v1.EventInvalidSendToCosmosReceiver";
    value: Uint8Array;
}
export interface EventInvalidSendToCosmosReceiverAmino {
    amount: string;
    nonce: string;
    token: string;
    sender: string;
}
export interface EventInvalidSendToCosmosReceiverAminoMsg {
    type: "/gravity.v1.EventInvalidSendToCosmosReceiver";
    value: EventInvalidSendToCosmosReceiverAmino;
}
export interface EventInvalidSendToCosmosReceiverSDKType {
    amount: string;
    nonce: string;
    token: string;
    sender: string;
}
export interface EventSendToCosmos {
    amount: string;
    nonce: string;
    token: string;
}
export interface EventSendToCosmosProtoMsg {
    typeUrl: "/gravity.v1.EventSendToCosmos";
    value: Uint8Array;
}
export interface EventSendToCosmosAmino {
    amount: string;
    nonce: string;
    token: string;
}
export interface EventSendToCosmosAminoMsg {
    type: "/gravity.v1.EventSendToCosmos";
    value: EventSendToCosmosAmino;
}
export interface EventSendToCosmosSDKType {
    amount: string;
    nonce: string;
    token: string;
}
export interface EventSendToCosmosLocal {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
}
export interface EventSendToCosmosLocalProtoMsg {
    typeUrl: "/gravity.v1.EventSendToCosmosLocal";
    value: Uint8Array;
}
export interface EventSendToCosmosLocalAmino {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
}
export interface EventSendToCosmosLocalAminoMsg {
    type: "/gravity.v1.EventSendToCosmosLocal";
    value: EventSendToCosmosLocalAmino;
}
export interface EventSendToCosmosLocalSDKType {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
}
export interface EventSendToCosmosPendingIbcAutoForward {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
}
export interface EventSendToCosmosPendingIbcAutoForwardProtoMsg {
    typeUrl: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward";
    value: Uint8Array;
}
export interface EventSendToCosmosPendingIbcAutoForwardAmino {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
}
export interface EventSendToCosmosPendingIbcAutoForwardAminoMsg {
    type: "/gravity.v1.EventSendToCosmosPendingIbcAutoForward";
    value: EventSendToCosmosPendingIbcAutoForwardAmino;
}
export interface EventSendToCosmosPendingIbcAutoForwardSDKType {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
}
export interface EventSendToCosmosExecutedIbcAutoForward {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
    timeoutTime: string;
    timeoutHeight: string;
}
export interface EventSendToCosmosExecutedIbcAutoForwardProtoMsg {
    typeUrl: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward";
    value: Uint8Array;
}
export interface EventSendToCosmosExecutedIbcAutoForwardAmino {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
    timeout_time: string;
    timeout_height: string;
}
export interface EventSendToCosmosExecutedIbcAutoForwardAminoMsg {
    type: "/gravity.v1.EventSendToCosmosExecutedIbcAutoForward";
    value: EventSendToCosmosExecutedIbcAutoForwardAmino;
}
export interface EventSendToCosmosExecutedIbcAutoForwardSDKType {
    nonce: string;
    receiver: string;
    token: string;
    amount: string;
    channel: string;
    timeout_time: string;
    timeout_height: string;
}
export declare const Attestation: {
    typeUrl: string;
    encode(message: Attestation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Attestation;
    fromPartial(object: Partial<Attestation>): Attestation;
    fromAmino(object: AttestationAmino): Attestation;
    toAmino(message: Attestation): AttestationAmino;
    fromAminoMsg(object: AttestationAminoMsg): Attestation;
    fromProtoMsg(message: AttestationProtoMsg): Attestation;
    toProto(message: Attestation): Uint8Array;
    toProtoMsg(message: Attestation): AttestationProtoMsg;
};
export declare const ERC20Token: {
    typeUrl: string;
    encode(message: ERC20Token, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ERC20Token;
    fromPartial(object: Partial<ERC20Token>): ERC20Token;
    fromAmino(object: ERC20TokenAmino): ERC20Token;
    toAmino(message: ERC20Token): ERC20TokenAmino;
    fromAminoMsg(object: ERC20TokenAminoMsg): ERC20Token;
    fromProtoMsg(message: ERC20TokenProtoMsg): ERC20Token;
    toProto(message: ERC20Token): Uint8Array;
    toProtoMsg(message: ERC20Token): ERC20TokenProtoMsg;
};
export declare const EventObservation: {
    typeUrl: string;
    encode(message: EventObservation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventObservation;
    fromPartial(object: Partial<EventObservation>): EventObservation;
    fromAmino(object: EventObservationAmino): EventObservation;
    toAmino(message: EventObservation): EventObservationAmino;
    fromAminoMsg(object: EventObservationAminoMsg): EventObservation;
    fromProtoMsg(message: EventObservationProtoMsg): EventObservation;
    toProto(message: EventObservation): Uint8Array;
    toProtoMsg(message: EventObservation): EventObservationProtoMsg;
};
export declare const EventInvalidSendToCosmosReceiver: {
    typeUrl: string;
    encode(message: EventInvalidSendToCosmosReceiver, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventInvalidSendToCosmosReceiver;
    fromPartial(object: Partial<EventInvalidSendToCosmosReceiver>): EventInvalidSendToCosmosReceiver;
    fromAmino(object: EventInvalidSendToCosmosReceiverAmino): EventInvalidSendToCosmosReceiver;
    toAmino(message: EventInvalidSendToCosmosReceiver): EventInvalidSendToCosmosReceiverAmino;
    fromAminoMsg(object: EventInvalidSendToCosmosReceiverAminoMsg): EventInvalidSendToCosmosReceiver;
    fromProtoMsg(message: EventInvalidSendToCosmosReceiverProtoMsg): EventInvalidSendToCosmosReceiver;
    toProto(message: EventInvalidSendToCosmosReceiver): Uint8Array;
    toProtoMsg(message: EventInvalidSendToCosmosReceiver): EventInvalidSendToCosmosReceiverProtoMsg;
};
export declare const EventSendToCosmos: {
    typeUrl: string;
    encode(message: EventSendToCosmos, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToCosmos;
    fromPartial(object: Partial<EventSendToCosmos>): EventSendToCosmos;
    fromAmino(object: EventSendToCosmosAmino): EventSendToCosmos;
    toAmino(message: EventSendToCosmos): EventSendToCosmosAmino;
    fromAminoMsg(object: EventSendToCosmosAminoMsg): EventSendToCosmos;
    fromProtoMsg(message: EventSendToCosmosProtoMsg): EventSendToCosmos;
    toProto(message: EventSendToCosmos): Uint8Array;
    toProtoMsg(message: EventSendToCosmos): EventSendToCosmosProtoMsg;
};
export declare const EventSendToCosmosLocal: {
    typeUrl: string;
    encode(message: EventSendToCosmosLocal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToCosmosLocal;
    fromPartial(object: Partial<EventSendToCosmosLocal>): EventSendToCosmosLocal;
    fromAmino(object: EventSendToCosmosLocalAmino): EventSendToCosmosLocal;
    toAmino(message: EventSendToCosmosLocal): EventSendToCosmosLocalAmino;
    fromAminoMsg(object: EventSendToCosmosLocalAminoMsg): EventSendToCosmosLocal;
    fromProtoMsg(message: EventSendToCosmosLocalProtoMsg): EventSendToCosmosLocal;
    toProto(message: EventSendToCosmosLocal): Uint8Array;
    toProtoMsg(message: EventSendToCosmosLocal): EventSendToCosmosLocalProtoMsg;
};
export declare const EventSendToCosmosPendingIbcAutoForward: {
    typeUrl: string;
    encode(message: EventSendToCosmosPendingIbcAutoForward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToCosmosPendingIbcAutoForward;
    fromPartial(object: Partial<EventSendToCosmosPendingIbcAutoForward>): EventSendToCosmosPendingIbcAutoForward;
    fromAmino(object: EventSendToCosmosPendingIbcAutoForwardAmino): EventSendToCosmosPendingIbcAutoForward;
    toAmino(message: EventSendToCosmosPendingIbcAutoForward): EventSendToCosmosPendingIbcAutoForwardAmino;
    fromAminoMsg(object: EventSendToCosmosPendingIbcAutoForwardAminoMsg): EventSendToCosmosPendingIbcAutoForward;
    fromProtoMsg(message: EventSendToCosmosPendingIbcAutoForwardProtoMsg): EventSendToCosmosPendingIbcAutoForward;
    toProto(message: EventSendToCosmosPendingIbcAutoForward): Uint8Array;
    toProtoMsg(message: EventSendToCosmosPendingIbcAutoForward): EventSendToCosmosPendingIbcAutoForwardProtoMsg;
};
export declare const EventSendToCosmosExecutedIbcAutoForward: {
    typeUrl: string;
    encode(message: EventSendToCosmosExecutedIbcAutoForward, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSendToCosmosExecutedIbcAutoForward;
    fromPartial(object: Partial<EventSendToCosmosExecutedIbcAutoForward>): EventSendToCosmosExecutedIbcAutoForward;
    fromAmino(object: EventSendToCosmosExecutedIbcAutoForwardAmino): EventSendToCosmosExecutedIbcAutoForward;
    toAmino(message: EventSendToCosmosExecutedIbcAutoForward): EventSendToCosmosExecutedIbcAutoForwardAmino;
    fromAminoMsg(object: EventSendToCosmosExecutedIbcAutoForwardAminoMsg): EventSendToCosmosExecutedIbcAutoForward;
    fromProtoMsg(message: EventSendToCosmosExecutedIbcAutoForwardProtoMsg): EventSendToCosmosExecutedIbcAutoForward;
    toProto(message: EventSendToCosmosExecutedIbcAutoForward): Uint8Array;
    toProtoMsg(message: EventSendToCosmosExecutedIbcAutoForward): EventSendToCosmosExecutedIbcAutoForwardProtoMsg;
};
