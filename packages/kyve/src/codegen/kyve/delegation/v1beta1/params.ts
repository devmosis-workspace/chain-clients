import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the delegation module parameters. */
export interface Params {
  /** unbonding_delegation_time ... */
  unbondingDelegationTime: Long;
  /** unbonding_delegation_time ... */
  redelegationCooldown: Long;
  /** unbonding_delegation_time ... */
  redelegationMaxAmount: Long;
  /** vote_slash ... */
  voteSlash: string;
  /** upload_slash ... */
  uploadSlash: string;
  /** timeout_slash ... */
  timeoutSlash: string;
}
/** Params defines the delegation module parameters. */
export interface ParamsSDKType {
  unbonding_delegation_time: Long;
  redelegation_cooldown: Long;
  redelegation_max_amount: Long;
  vote_slash: string;
  upload_slash: string;
  timeout_slash: string;
}
function createBaseParams(): Params {
  return {
    unbondingDelegationTime: Long.UZERO,
    redelegationCooldown: Long.UZERO,
    redelegationMaxAmount: Long.UZERO,
    voteSlash: "",
    uploadSlash: "",
    timeoutSlash: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.unbondingDelegationTime.isZero()) {
      writer.uint32(8).uint64(message.unbondingDelegationTime);
    }
    if (!message.redelegationCooldown.isZero()) {
      writer.uint32(16).uint64(message.redelegationCooldown);
    }
    if (!message.redelegationMaxAmount.isZero()) {
      writer.uint32(24).uint64(message.redelegationMaxAmount);
    }
    if (message.voteSlash !== "") {
      writer.uint32(34).string(message.voteSlash);
    }
    if (message.uploadSlash !== "") {
      writer.uint32(42).string(message.uploadSlash);
    }
    if (message.timeoutSlash !== "") {
      writer.uint32(50).string(message.timeoutSlash);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      unbondingDelegationTime: isSet(object.unbondingDelegationTime) ? Long.fromValue(object.unbondingDelegationTime) : Long.UZERO,
      redelegationCooldown: isSet(object.redelegationCooldown) ? Long.fromValue(object.redelegationCooldown) : Long.UZERO,
      redelegationMaxAmount: isSet(object.redelegationMaxAmount) ? Long.fromValue(object.redelegationMaxAmount) : Long.UZERO,
      voteSlash: isSet(object.voteSlash) ? String(object.voteSlash) : "",
      uploadSlash: isSet(object.uploadSlash) ? String(object.uploadSlash) : "",
      timeoutSlash: isSet(object.timeoutSlash) ? String(object.timeoutSlash) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.unbondingDelegationTime = object.unbondingDelegationTime !== undefined && object.unbondingDelegationTime !== null ? Long.fromValue(object.unbondingDelegationTime) : Long.UZERO;
    message.redelegationCooldown = object.redelegationCooldown !== undefined && object.redelegationCooldown !== null ? Long.fromValue(object.redelegationCooldown) : Long.UZERO;
    message.redelegationMaxAmount = object.redelegationMaxAmount !== undefined && object.redelegationMaxAmount !== null ? Long.fromValue(object.redelegationMaxAmount) : Long.UZERO;
    message.voteSlash = object.voteSlash ?? "";
    message.uploadSlash = object.uploadSlash ?? "";
    message.timeoutSlash = object.timeoutSlash ?? "";
    return message;
  }
};