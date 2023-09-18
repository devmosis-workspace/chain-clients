import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryWriter } from "../../../binary";
/**
 * ClaimType is the cosmos type of an event from the counterpart chain that can
 * be handled
 */
export declare enum ClaimType {
    CLAIM_TYPE_UNKNOWN = 0,
    CLAIM_TYPE_DEPOSIT = 1,
    CLAIM_TYPE_WITHDRAW = 2,
    CLAIM_TYPE_ERC20_DEPLOYED = 3,
    CLAIM_TYPE_VALSET_UPDATED = 4,
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
 * EventNonce a nonce provided by the peggy contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
 */
export interface Attestation {
    observed: boolean;
    votes: string[];
    height: bigint;
    claim: Any;
}
export interface AttestationProtoMsg {
    typeUrl: "/injective.peggy.v1.Attestation";
    value: Uint8Array;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
 */
export interface AttestationAmino {
    observed: boolean;
    votes: string[];
    height: string;
    claim?: AnyAmino;
}
export interface AttestationAminoMsg {
    type: "/injective.peggy.v1.Attestation";
    value: AttestationAmino;
}
/**
 * Attestation is an aggregate of `claims` that eventually becomes `observed` by
 * all orchestrators
 * EVENT_NONCE:
 * EventNonce a nonce provided by the peggy contract that is unique per event
 * fired These event nonces must be relayed in order. This is a correctness
 * issue, if relaying out of order transaction replay attacks become possible
 * OBSERVED:
 * Observed indicates that >67% of validators have attested to the event,
 * and that the event should be executed by the peggy state machine
 *
 * The actual content of the claims is passed in with the transaction making the
 * claim and then passed through the call stack alongside the attestation while
 * it is processed the key in which the attestation is stored is keyed on the
 * exact details of the claim but there is no reason to store those exact
 * details becuause the next message sender will kindly provide you with them.
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
 * (note: developers should look up the token symbol using the address on ETH to
 * display for UI)
 */
export interface ERC20Token {
    contract: string;
    amount: string;
}
export interface ERC20TokenProtoMsg {
    typeUrl: "/injective.peggy.v1.ERC20Token";
    value: Uint8Array;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to
 * display for UI)
 */
export interface ERC20TokenAmino {
    contract: string;
    amount: string;
}
export interface ERC20TokenAminoMsg {
    type: "/injective.peggy.v1.ERC20Token";
    value: ERC20TokenAmino;
}
/**
 * ERC20Token unique identifier for an Ethereum ERC20 token.
 * CONTRACT:
 * The contract address on ETH of the token, this could be a Cosmos
 * originated token, if so it will be the ERC20 address of the representation
 * (note: developers should look up the token symbol using the address on ETH to
 * display for UI)
 */
export interface ERC20TokenSDKType {
    contract: string;
    amount: string;
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
