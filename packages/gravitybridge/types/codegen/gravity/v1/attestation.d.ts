import { Any, AnySDKType } from "../../google/protobuf/any";
import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    height: Long;
    claim?: Any;
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
    height: Long;
    claim?: AnySDKType;
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
    encode(message: Attestation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Attestation;
    fromPartial(object: Partial<Attestation>): Attestation;
};
export declare const ERC20Token: {
    encode(message: ERC20Token, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ERC20Token;
    fromPartial(object: Partial<ERC20Token>): ERC20Token;
};
export declare const EventObservation: {
    encode(message: EventObservation, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventObservation;
    fromPartial(object: Partial<EventObservation>): EventObservation;
};
export declare const EventInvalidSendToCosmosReceiver: {
    encode(message: EventInvalidSendToCosmosReceiver, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventInvalidSendToCosmosReceiver;
    fromPartial(object: Partial<EventInvalidSendToCosmosReceiver>): EventInvalidSendToCosmosReceiver;
};
export declare const EventSendToCosmos: {
    encode(message: EventSendToCosmos, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSendToCosmos;
    fromPartial(object: Partial<EventSendToCosmos>): EventSendToCosmos;
};
export declare const EventSendToCosmosLocal: {
    encode(message: EventSendToCosmosLocal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSendToCosmosLocal;
    fromPartial(object: Partial<EventSendToCosmosLocal>): EventSendToCosmosLocal;
};
export declare const EventSendToCosmosPendingIbcAutoForward: {
    encode(message: EventSendToCosmosPendingIbcAutoForward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSendToCosmosPendingIbcAutoForward;
    fromPartial(object: Partial<EventSendToCosmosPendingIbcAutoForward>): EventSendToCosmosPendingIbcAutoForward;
};
export declare const EventSendToCosmosExecutedIbcAutoForward: {
    encode(message: EventSendToCosmosExecutedIbcAutoForward, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSendToCosmosExecutedIbcAutoForward;
    fromPartial(object: Partial<EventSendToCosmosExecutedIbcAutoForward>): EventSendToCosmosExecutedIbcAutoForward;
};
