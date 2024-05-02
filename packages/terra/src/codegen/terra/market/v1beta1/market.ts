import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** Params defines the parameters for the market module. */
export interface Params {
  basePool: Uint8Array;
  poolRecoveryPeriod: bigint;
  minStabilitySpread: Uint8Array;
}
export interface ParamsProtoMsg {
  typeUrl: "/terra.market.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the market module. */
export interface ParamsAmino {
  base_pool?: string;
  pool_recovery_period?: string;
  min_stability_spread?: string;
}
export interface ParamsAminoMsg {
  type: "/terra.market.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the market module. */
export interface ParamsSDKType {
  base_pool: Uint8Array;
  pool_recovery_period: bigint;
  min_stability_spread: Uint8Array;
}
function createBaseParams(): Params {
  return {
    basePool: new Uint8Array(),
    poolRecoveryPeriod: BigInt(0),
    minStabilitySpread: new Uint8Array()
  };
}
export const Params = {
  typeUrl: "/terra.market.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.basePool.length !== 0) {
      writer.uint32(10).bytes(message.basePool);
    }
    if (message.poolRecoveryPeriod !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolRecoveryPeriod);
    }
    if (message.minStabilitySpread.length !== 0) {
      writer.uint32(26).bytes(message.minStabilitySpread);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      basePool: isSet(object.basePool) ? bytesFromBase64(object.basePool) : new Uint8Array(),
      poolRecoveryPeriod: isSet(object.poolRecoveryPeriod) ? BigInt(object.poolRecoveryPeriod.toString()) : BigInt(0),
      minStabilitySpread: isSet(object.minStabilitySpread) ? bytesFromBase64(object.minStabilitySpread) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.basePool = object.basePool ?? new Uint8Array();
    message.poolRecoveryPeriod = object.poolRecoveryPeriod !== undefined && object.poolRecoveryPeriod !== null ? BigInt(object.poolRecoveryPeriod.toString()) : BigInt(0);
    message.minStabilitySpread = object.minStabilitySpread ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.base_pool !== undefined && object.base_pool !== null) {
      message.basePool = bytesFromBase64(object.base_pool);
    }
    if (object.pool_recovery_period !== undefined && object.pool_recovery_period !== null) {
      message.poolRecoveryPeriod = BigInt(object.pool_recovery_period);
    }
    if (object.min_stability_spread !== undefined && object.min_stability_spread !== null) {
      message.minStabilitySpread = bytesFromBase64(object.min_stability_spread);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.base_pool = message.basePool ? base64FromBytes(message.basePool) : undefined;
    obj.pool_recovery_period = message.poolRecoveryPeriod !== BigInt(0) ? message.poolRecoveryPeriod.toString() : undefined;
    obj.min_stability_spread = message.minStabilitySpread ? base64FromBytes(message.minStabilitySpread) : undefined;
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
      typeUrl: "/terra.market.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};