import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the delegation module parameters. */
export interface Params {
  /** unbonding_delegation_time ... */
  unbondingDelegationTime: bigint;
  /** unbonding_delegation_time ... */
  redelegationCooldown: bigint;
  /** unbonding_delegation_time ... */
  redelegationMaxAmount: bigint;
  /** vote_slash ... */
  voteSlash: string;
  /** upload_slash ... */
  uploadSlash: string;
  /** timeout_slash ... */
  timeoutSlash: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/kyve.delegation.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the delegation module parameters. */
export interface ParamsAmino {
  /** unbonding_delegation_time ... */
  unbonding_delegation_time: string;
  /** unbonding_delegation_time ... */
  redelegation_cooldown: string;
  /** unbonding_delegation_time ... */
  redelegation_max_amount: string;
  /** vote_slash ... */
  vote_slash: string;
  /** upload_slash ... */
  upload_slash: string;
  /** timeout_slash ... */
  timeout_slash: string;
}
export interface ParamsAminoMsg {
  type: "/kyve.delegation.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the delegation module parameters. */
export interface ParamsSDKType {
  unbonding_delegation_time: bigint;
  redelegation_cooldown: bigint;
  redelegation_max_amount: bigint;
  vote_slash: string;
  upload_slash: string;
  timeout_slash: string;
}
function createBaseParams(): Params {
  return {
    unbondingDelegationTime: BigInt(0),
    redelegationCooldown: BigInt(0),
    redelegationMaxAmount: BigInt(0),
    voteSlash: "",
    uploadSlash: "",
    timeoutSlash: ""
  };
}
export const Params = {
  typeUrl: "/kyve.delegation.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.unbondingDelegationTime !== BigInt(0)) {
      writer.uint32(8).uint64(message.unbondingDelegationTime);
    }
    if (message.redelegationCooldown !== BigInt(0)) {
      writer.uint32(16).uint64(message.redelegationCooldown);
    }
    if (message.redelegationMaxAmount !== BigInt(0)) {
      writer.uint32(24).uint64(message.redelegationMaxAmount);
    }
    if (message.voteSlash !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.voteSlash, 18).atomics);
    }
    if (message.uploadSlash !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.uploadSlash, 18).atomics);
    }
    if (message.timeoutSlash !== "") {
      writer.uint32(50).string(Decimal.fromUserInput(message.timeoutSlash, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      unbondingDelegationTime: isSet(object.unbondingDelegationTime) ? BigInt(object.unbondingDelegationTime.toString()) : BigInt(0),
      redelegationCooldown: isSet(object.redelegationCooldown) ? BigInt(object.redelegationCooldown.toString()) : BigInt(0),
      redelegationMaxAmount: isSet(object.redelegationMaxAmount) ? BigInt(object.redelegationMaxAmount.toString()) : BigInt(0),
      voteSlash: isSet(object.voteSlash) ? String(object.voteSlash) : "",
      uploadSlash: isSet(object.uploadSlash) ? String(object.uploadSlash) : "",
      timeoutSlash: isSet(object.timeoutSlash) ? String(object.timeoutSlash) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingDelegationTime = object.unbondingDelegationTime !== undefined && object.unbondingDelegationTime !== null ? BigInt(object.unbondingDelegationTime.toString()) : BigInt(0);
    message.redelegationCooldown = object.redelegationCooldown !== undefined && object.redelegationCooldown !== null ? BigInt(object.redelegationCooldown.toString()) : BigInt(0);
    message.redelegationMaxAmount = object.redelegationMaxAmount !== undefined && object.redelegationMaxAmount !== null ? BigInt(object.redelegationMaxAmount.toString()) : BigInt(0);
    message.voteSlash = object.voteSlash ?? "";
    message.uploadSlash = object.uploadSlash ?? "";
    message.timeoutSlash = object.timeoutSlash ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      unbondingDelegationTime: BigInt(object.unbonding_delegation_time),
      redelegationCooldown: BigInt(object.redelegation_cooldown),
      redelegationMaxAmount: BigInt(object.redelegation_max_amount),
      voteSlash: object.vote_slash,
      uploadSlash: object.upload_slash,
      timeoutSlash: object.timeout_slash
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.unbonding_delegation_time = message.unbondingDelegationTime ? message.unbondingDelegationTime.toString() : undefined;
    obj.redelegation_cooldown = message.redelegationCooldown ? message.redelegationCooldown.toString() : undefined;
    obj.redelegation_max_amount = message.redelegationMaxAmount ? message.redelegationMaxAmount.toString() : undefined;
    obj.vote_slash = message.voteSlash;
    obj.upload_slash = message.uploadSlash;
    obj.timeout_slash = message.timeoutSlash;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/kyve.delegation.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};