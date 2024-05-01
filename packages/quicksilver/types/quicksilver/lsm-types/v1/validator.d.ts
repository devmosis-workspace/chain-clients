import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BondStatus, Description, DescriptionAmino, DescriptionSDKType, Commission, CommissionAmino, CommissionSDKType } from "../../../cosmos/staking/v1beta1/staking";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Pubkey } from "@cosmjs/amino";
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /**
     * operator_address defines the address of the validator's operator; bech
     * encoded in JSON.
     */
    operatorAddress: string;
    /**
     * consensus_pubkey is the consensus public key of the validator, as a
     * Protobuf Any.
     */
    consensusPubkey?: (Any) | undefined;
    /**
     * jailed defined whether the validator has been jailed from bonded status or
     * not.
     */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegatorShares: string;
    /** description defines the description terms for the validator. */
    description: Description;
    /**
     * unbonding_height defines, if unbonding, the height at which this validator
     * has begun unbonding.
     */
    unbondingHeight: bigint;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to
     * complete unbonding.
     */
    unbondingTime: Timestamp;
    /** commission defines the commission parameters. */
    commission: Commission;
    /**
     * Deprecated: This field has been deprecated with LSM in favor of the
     * validator bond
     */
    /** @deprecated */
    minSelfDelegation: string;
    /**
     * strictly positive if this validator's unbonding has been stopped by
     * external modules
     */
    unbondingOnHoldRefCount: bigint;
    /**
     * list of unbonding ids, each uniquely identifing an unbonding of this
     * validator
     */
    unbondingIds: bigint[];
    /** Number of shares self bonded from the validator */
    validatorBondShares: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquidShares: string;
}
export interface ValidatorProtoMsg {
    typeUrl: "/cosmos.lsmstaking.v1beta1.Validator";
    value: Uint8Array;
}
export type ValidatorEncoded = Omit<Validator, "consensusPubkey"> & {
    /**
     * consensus_pubkey is the consensus public key of the validator, as a
     * Protobuf Any.
     */
    consensusPubkey?: AnyProtoMsg | undefined;
};
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorAmino {
    /**
     * operator_address defines the address of the validator's operator; bech
     * encoded in JSON.
     */
    operator_address?: string;
    /**
     * consensus_pubkey is the consensus public key of the validator, as a
     * Protobuf Any.
     */
    consensus_pubkey?: AnyAmino;
    /**
     * jailed defined whether the validator has been jailed from bonded status or
     * not.
     */
    jailed?: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status?: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens?: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares?: string;
    /** description defines the description terms for the validator. */
    description?: DescriptionAmino;
    /**
     * unbonding_height defines, if unbonding, the height at which this validator
     * has begun unbonding.
     */
    unbonding_height?: string;
    /**
     * unbonding_time defines, if unbonding, the min time for the validator to
     * complete unbonding.
     */
    unbonding_time?: string;
    /** commission defines the commission parameters. */
    commission?: CommissionAmino;
    /**
     * Deprecated: This field has been deprecated with LSM in favor of the
     * validator bond
     */
    /** @deprecated */
    min_self_delegation?: string;
    /**
     * strictly positive if this validator's unbonding has been stopped by
     * external modules
     */
    unbonding_on_hold_ref_count?: string;
    /**
     * list of unbonding ids, each uniquely identifing an unbonding of this
     * validator
     */
    unbonding_ids?: string[];
    /** Number of shares self bonded from the validator */
    validator_bond_shares?: string;
    /** Number of shares either tokenized or owned by a liquid staking provider */
    liquid_shares?: string;
}
export interface ValidatorAminoMsg {
    type: "cosmos-sdk/Validator";
    value: ValidatorAmino;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface ValidatorSDKType {
    operator_address: string;
    consensus_pubkey?: AnySDKType | undefined;
    jailed: boolean;
    status: BondStatus;
    tokens: string;
    delegator_shares: string;
    description: DescriptionSDKType;
    unbonding_height: bigint;
    unbonding_time: TimestampSDKType;
    commission: CommissionSDKType;
    /** @deprecated */
    min_self_delegation: string;
    unbonding_on_hold_ref_count: bigint;
    unbonding_ids: bigint[];
    validator_bond_shares: string;
    liquid_shares: string;
}
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
export interface QueryValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse";
    value: Uint8Array;
}
export interface QueryValidatorsResponseAmino {
    /** validators contains all the queried validators. */
    validators?: ValidatorAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino;
}
export interface QueryValidatorsResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorsResponse";
    value: QueryValidatorsResponseAmino;
}
export interface QueryValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const Validator: {
    typeUrl: string;
    encode(message: Validator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Validator;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    toAminoMsg(message: Validator): ValidatorAminoMsg;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const QueryValidatorsResponse: {
    typeUrl: string;
    encode(message: QueryValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryValidatorsResponse;
    fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse;
    fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse;
    toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino;
    fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse;
    toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse;
    toProto(message: QueryValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg;
};
export declare const Cosmos_cryptoPubKey_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Cosmos_cryptoPubKey_FromAmino: (content: AnyAmino) => import("cosmjs-types/google/protobuf/any").Any;
export declare const Cosmos_cryptoPubKey_ToAmino: (content: Any) => Pubkey | null;
