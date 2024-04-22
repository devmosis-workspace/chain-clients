import { Threshold, ThresholdAmino, ThresholdSDKType } from "../../utils/v1beta1/threshold";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  keygenThreshold: Threshold;
  signingThreshold: Threshold;
  keygenTimeout: bigint;
  keygenGracePeriod: bigint;
  signingTimeout: bigint;
  signingGracePeriod: bigint;
  activeEpochCount: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.multisig.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  keygen_threshold?: ThresholdAmino;
  signing_threshold?: ThresholdAmino;
  keygen_timeout?: string;
  keygen_grace_period?: string;
  signing_timeout?: string;
  signing_grace_period?: string;
  active_epoch_count?: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.multisig.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  keygen_threshold: ThresholdSDKType;
  signing_threshold: ThresholdSDKType;
  keygen_timeout: bigint;
  keygen_grace_period: bigint;
  signing_timeout: bigint;
  signing_grace_period: bigint;
  active_epoch_count: bigint;
}
function createBaseParams(): Params {
  return {
    keygenThreshold: Threshold.fromPartial({}),
    signingThreshold: Threshold.fromPartial({}),
    keygenTimeout: BigInt(0),
    keygenGracePeriod: BigInt(0),
    signingTimeout: BigInt(0),
    signingGracePeriod: BigInt(0),
    activeEpochCount: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelar.multisig.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keygenThreshold !== undefined) {
      Threshold.encode(message.keygenThreshold, writer.uint32(10).fork()).ldelim();
    }
    if (message.signingThreshold !== undefined) {
      Threshold.encode(message.signingThreshold, writer.uint32(18).fork()).ldelim();
    }
    if (message.keygenTimeout !== BigInt(0)) {
      writer.uint32(24).int64(message.keygenTimeout);
    }
    if (message.keygenGracePeriod !== BigInt(0)) {
      writer.uint32(32).int64(message.keygenGracePeriod);
    }
    if (message.signingTimeout !== BigInt(0)) {
      writer.uint32(40).int64(message.signingTimeout);
    }
    if (message.signingGracePeriod !== BigInt(0)) {
      writer.uint32(48).int64(message.signingGracePeriod);
    }
    if (message.activeEpochCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.activeEpochCount);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      keygenThreshold: isSet(object.keygenThreshold) ? Threshold.fromJSON(object.keygenThreshold) : undefined,
      signingThreshold: isSet(object.signingThreshold) ? Threshold.fromJSON(object.signingThreshold) : undefined,
      keygenTimeout: isSet(object.keygenTimeout) ? BigInt(object.keygenTimeout.toString()) : BigInt(0),
      keygenGracePeriod: isSet(object.keygenGracePeriod) ? BigInt(object.keygenGracePeriod.toString()) : BigInt(0),
      signingTimeout: isSet(object.signingTimeout) ? BigInt(object.signingTimeout.toString()) : BigInt(0),
      signingGracePeriod: isSet(object.signingGracePeriod) ? BigInt(object.signingGracePeriod.toString()) : BigInt(0),
      activeEpochCount: isSet(object.activeEpochCount) ? BigInt(object.activeEpochCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.keygenThreshold = object.keygenThreshold !== undefined && object.keygenThreshold !== null ? Threshold.fromPartial(object.keygenThreshold) : undefined;
    message.signingThreshold = object.signingThreshold !== undefined && object.signingThreshold !== null ? Threshold.fromPartial(object.signingThreshold) : undefined;
    message.keygenTimeout = object.keygenTimeout !== undefined && object.keygenTimeout !== null ? BigInt(object.keygenTimeout.toString()) : BigInt(0);
    message.keygenGracePeriod = object.keygenGracePeriod !== undefined && object.keygenGracePeriod !== null ? BigInt(object.keygenGracePeriod.toString()) : BigInt(0);
    message.signingTimeout = object.signingTimeout !== undefined && object.signingTimeout !== null ? BigInt(object.signingTimeout.toString()) : BigInt(0);
    message.signingGracePeriod = object.signingGracePeriod !== undefined && object.signingGracePeriod !== null ? BigInt(object.signingGracePeriod.toString()) : BigInt(0);
    message.activeEpochCount = object.activeEpochCount !== undefined && object.activeEpochCount !== null ? BigInt(object.activeEpochCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.keygen_threshold !== undefined && object.keygen_threshold !== null) {
      message.keygenThreshold = Threshold.fromAmino(object.keygen_threshold);
    }
    if (object.signing_threshold !== undefined && object.signing_threshold !== null) {
      message.signingThreshold = Threshold.fromAmino(object.signing_threshold);
    }
    if (object.keygen_timeout !== undefined && object.keygen_timeout !== null) {
      message.keygenTimeout = BigInt(object.keygen_timeout);
    }
    if (object.keygen_grace_period !== undefined && object.keygen_grace_period !== null) {
      message.keygenGracePeriod = BigInt(object.keygen_grace_period);
    }
    if (object.signing_timeout !== undefined && object.signing_timeout !== null) {
      message.signingTimeout = BigInt(object.signing_timeout);
    }
    if (object.signing_grace_period !== undefined && object.signing_grace_period !== null) {
      message.signingGracePeriod = BigInt(object.signing_grace_period);
    }
    if (object.active_epoch_count !== undefined && object.active_epoch_count !== null) {
      message.activeEpochCount = BigInt(object.active_epoch_count);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.keygen_threshold = message.keygenThreshold ? Threshold.toAmino(message.keygenThreshold) : undefined;
    obj.signing_threshold = message.signingThreshold ? Threshold.toAmino(message.signingThreshold) : undefined;
    obj.keygen_timeout = message.keygenTimeout ? message.keygenTimeout.toString() : undefined;
    obj.keygen_grace_period = message.keygenGracePeriod ? message.keygenGracePeriod.toString() : undefined;
    obj.signing_timeout = message.signingTimeout ? message.signingTimeout.toString() : undefined;
    obj.signing_grace_period = message.signingGracePeriod ? message.signingGracePeriod.toString() : undefined;
    obj.active_epoch_count = message.activeEpochCount ? message.activeEpochCount.toString() : undefined;
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
      typeUrl: "/axelar.multisig.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};