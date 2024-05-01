import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BondStatus, Description, DescriptionAmino, DescriptionSDKType, Commission, CommissionAmino, CommissionSDKType, bondStatusFromJSON } from "../../../cosmos/staking/v1beta1/staking";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
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
function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    consensusPubkey: undefined,
    jailed: false,
    status: 0,
    tokens: "",
    delegatorShares: "",
    description: Description.fromPartial({}),
    unbondingHeight: BigInt(0),
    unbondingTime: Timestamp.fromPartial({}),
    commission: Commission.fromPartial({}),
    minSelfDelegation: "",
    unbondingOnHoldRefCount: BigInt(0),
    unbondingIds: [],
    validatorBondShares: "",
    liquidShares: ""
  };
}
export const Validator = {
  typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode((message.consensusPubkey as Any), writer.uint32(18).fork()).ldelim();
    }
    if (message.jailed === true) {
      writer.uint32(24).bool(message.jailed);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.tokens !== "") {
      writer.uint32(42).string(message.tokens);
    }
    if (message.delegatorShares !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.delegatorShares, 18).atomics);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(58).fork()).ldelim();
    }
    if (message.unbondingHeight !== BigInt(0)) {
      writer.uint32(64).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(message.unbondingTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
    }
    if (message.minSelfDelegation !== "") {
      writer.uint32(90).string(message.minSelfDelegation);
    }
    if (message.unbondingOnHoldRefCount !== BigInt(0)) {
      writer.uint32(96).int64(message.unbondingOnHoldRefCount);
    }
    writer.uint32(106).fork();
    for (const v of message.unbondingIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.validatorBondShares !== "") {
      writer.uint32(114).string(Decimal.fromUserInput(message.validatorBondShares, 18).atomics);
    }
    if (message.liquidShares !== "") {
      writer.uint32(122).string(Decimal.fromUserInput(message.liquidShares, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
      tokens: isSet(object.tokens) ? String(object.tokens) : "",
      delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      unbondingHeight: isSet(object.unbondingHeight) ? BigInt(object.unbondingHeight.toString()) : BigInt(0),
      unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
      commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
      minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
      unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt(0),
      unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e: any) => BigInt(e.toString())) : [],
      validatorBondShares: isSet(object.validatorBondShares) ? String(object.validatorBondShares) : "",
      liquidShares: isSet(object.liquidShares) ? String(object.liquidShares) : ""
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
    message.jailed = object.jailed ?? false;
    message.status = object.status ?? 0;
    message.tokens = object.tokens ?? "";
    message.delegatorShares = object.delegatorShares ?? "";
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
    message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? Timestamp.fromPartial(object.unbondingTime) : undefined;
    message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
    message.minSelfDelegation = object.minSelfDelegation ?? "";
    message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? BigInt(object.unbondingOnHoldRefCount.toString()) : BigInt(0);
    message.unbondingIds = object.unbondingIds?.map(e => BigInt(e.toString())) || [];
    message.validatorBondShares = object.validatorBondShares ?? "";
    message.liquidShares = object.liquidShares ?? "";
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
      message.consensusPubkey = encodePubkey(object.consensus_pubkey);
    }
    if (object.jailed !== undefined && object.jailed !== null) {
      message.jailed = object.jailed;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = bondStatusFromJSON(object.status);
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    }
    if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
      message.delegatorShares = object.delegator_shares;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
      message.unbondingHeight = BigInt(object.unbonding_height);
    }
    if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
      message.unbondingTime = Timestamp.fromAmino(object.unbonding_time);
    }
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = Commission.fromAmino(object.commission);
    }
    if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
      message.minSelfDelegation = object.min_self_delegation;
    }
    if (object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null) {
      message.unbondingOnHoldRefCount = BigInt(object.unbonding_on_hold_ref_count);
    }
    message.unbondingIds = object.unbonding_ids?.map(e => BigInt(e)) || [];
    if (object.validator_bond_shares !== undefined && object.validator_bond_shares !== null) {
      message.validatorBondShares = object.validator_bond_shares;
    }
    if (object.liquid_shares !== undefined && object.liquid_shares !== null) {
      message.liquidShares = object.liquid_shares;
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    obj.consensus_pubkey = message.consensusPubkey ? decodePubkey(message.consensusPubkey) : undefined;
    obj.jailed = message.jailed;
    obj.status = message.status;
    obj.tokens = message.tokens;
    obj.delegator_shares = message.delegatorShares;
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
    obj.unbonding_time = message.unbondingTime ? Timestamp.toAmino(message.unbondingTime) : undefined;
    obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
    obj.min_self_delegation = message.minSelfDelegation;
    obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount ? message.unbondingOnHoldRefCount.toString() : undefined;
    if (message.unbondingIds) {
      obj.unbonding_ids = message.unbondingIds.map(e => e.toString());
    } else {
      obj.unbonding_ids = [];
    }
    obj.validator_bond_shares = message.validatorBondShares;
    obj.liquid_shares = message.liquidShares;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseQueryValidatorsResponse(): QueryValidatorsResponse {
  return {
    validators: [],
    pagination: undefined
  };
}
export const QueryValidatorsResponse = {
  typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
  encode(message: QueryValidatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryValidatorsResponse>): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse {
    const message = createBaseQueryValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorsResponse",
      value: QueryValidatorsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse {
    return QueryValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorsResponse): Uint8Array {
    return QueryValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
      value: QueryValidatorsResponse.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino) => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};