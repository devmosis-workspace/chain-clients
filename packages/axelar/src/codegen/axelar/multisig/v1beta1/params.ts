import { Threshold, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
  keygenThreshold?: Threshold;
  signingThreshold?: Threshold;
  keygenTimeout: Long;
  keygenGracePeriod: Long;
  signingTimeout: Long;
  signingGracePeriod: Long;
  activeEpochCount: Long;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  keygen_threshold?: ThresholdSDKType;
  signing_threshold?: ThresholdSDKType;
  keygen_timeout: Long;
  keygen_grace_period: Long;
  signing_timeout: Long;
  signing_grace_period: Long;
  active_epoch_count: Long;
}
function createBaseParams(): Params {
  return {
    keygenThreshold: undefined,
    signingThreshold: undefined,
    keygenTimeout: Long.ZERO,
    keygenGracePeriod: Long.ZERO,
    signingTimeout: Long.ZERO,
    signingGracePeriod: Long.ZERO,
    activeEpochCount: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.signingThreshold !== undefined) {
      Threshold.encode(message.signingThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (!message.keygenTimeout.isZero()) {
      writer.uint32(24).int64(message.keygenTimeout);
    }
    if (!message.keygenGracePeriod.isZero()) {
      writer.uint32(32).int64(message.keygenGracePeriod);
    }
    if (!message.signingTimeout.isZero()) {
      writer.uint32(40).int64(message.signingTimeout);
    }
    if (!message.signingGracePeriod.isZero()) {
      writer.uint32(48).int64(message.signingGracePeriod);
    }
    if (!message.activeEpochCount.isZero()) {
      writer.uint32(56).uint64(message.activeEpochCount);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      signingThreshold: isSet(object.signingThreshold) ? Threshold.fromJSON(object.signingThreshold) : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? Long.fromValue(object.keygenTimeout) : Long.ZERO,
      keygenGracePeriod: isSet(object.keygenGracePeriod) ? Long.fromValue(object.keygenGracePeriod) : Long.ZERO,
      signingTimeout: isSet(object.signingTimeout) ? Long.fromValue(object.signingTimeout) : Long.ZERO,
      signingGracePeriod: isSet(object.signingGracePeriod) ? Long.fromValue(object.signingGracePeriod) : Long.ZERO,
      activeEpochCount: isSet(object.activeEpochCount) ? Long.fromValue(object.activeEpochCount) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.keygenThreshold = object.keygenThreshold !== undefined && object.keygenThreshold !== null ? Threshold.fromPartial(object.keygenThreshold) : undefined;
    message.signingThreshold = object.signingThreshold !== undefined && object.signingThreshold !== null ? Threshold.fromPartial(object.signingThreshold) : undefined;
    message.keygenTimeout = object.keygenTimeout !== undefined && object.keygenTimeout !== null ? Long.fromValue(object.keygenTimeout) : Long.ZERO;
    message.keygenGracePeriod = object.keygenGracePeriod !== undefined && object.keygenGracePeriod !== null ? Long.fromValue(object.keygenGracePeriod) : Long.ZERO;
    message.signingTimeout = object.signingTimeout !== undefined && object.signingTimeout !== null ? Long.fromValue(object.signingTimeout) : Long.ZERO;
    message.signingGracePeriod = object.signingGracePeriod !== undefined && object.signingGracePeriod !== null ? Long.fromValue(object.signingGracePeriod) : Long.ZERO;
    message.activeEpochCount = object.activeEpochCount !== undefined && object.activeEpochCount !== null ? Long.fromValue(object.activeEpochCount) : Long.UZERO;
    return message;
  }
};