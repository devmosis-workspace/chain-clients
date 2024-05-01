import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
export interface Params {
  calculationPeriod: bigint;
  dampingFactor: string;
  tolerance: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/cyber.rank.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  calculation_period?: string;
  damping_factor?: string;
  tolerance?: string;
}
export interface ParamsAminoMsg {
  type: "/cyber.rank.v1beta1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  calculation_period: bigint;
  damping_factor: string;
  tolerance: string;
}
export interface RankedParticle {
  particle: string;
  rank: bigint;
}
export interface RankedParticleProtoMsg {
  typeUrl: "/cyber.rank.v1beta1.RankedParticle";
  value: Uint8Array;
}
export interface RankedParticleAmino {
  particle?: string;
  rank?: string;
}
export interface RankedParticleAminoMsg {
  type: "/cyber.rank.v1beta1.RankedParticle";
  value: RankedParticleAmino;
}
export interface RankedParticleSDKType {
  particle: string;
  rank: bigint;
}
function createBaseParams(): Params {
  return {
    calculationPeriod: BigInt(0),
    dampingFactor: "",
    tolerance: ""
  };
}
export const Params = {
  typeUrl: "/cyber.rank.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.calculationPeriod !== BigInt(0)) {
      writer.uint32(8).int64(message.calculationPeriod);
    }
    if (message.dampingFactor !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.dampingFactor, 18).atomics);
    }
    if (message.tolerance !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.tolerance, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      calculationPeriod: isSet(object.calculationPeriod) ? BigInt(object.calculationPeriod.toString()) : BigInt(0),
      dampingFactor: isSet(object.dampingFactor) ? String(object.dampingFactor) : "",
      tolerance: isSet(object.tolerance) ? String(object.tolerance) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.calculationPeriod = object.calculationPeriod !== undefined && object.calculationPeriod !== null ? BigInt(object.calculationPeriod.toString()) : BigInt(0);
    message.dampingFactor = object.dampingFactor ?? "";
    message.tolerance = object.tolerance ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.calculation_period !== undefined && object.calculation_period !== null) {
      message.calculationPeriod = BigInt(object.calculation_period);
    }
    if (object.damping_factor !== undefined && object.damping_factor !== null) {
      message.dampingFactor = object.damping_factor;
    }
    if (object.tolerance !== undefined && object.tolerance !== null) {
      message.tolerance = object.tolerance;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.calculation_period = message.calculationPeriod !== BigInt(0) ? message.calculationPeriod.toString() : undefined;
    obj.damping_factor = message.dampingFactor === "" ? undefined : message.dampingFactor;
    obj.tolerance = message.tolerance === "" ? undefined : message.tolerance;
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
      typeUrl: "/cyber.rank.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseRankedParticle(): RankedParticle {
  return {
    particle: "",
    rank: BigInt(0)
  };
}
export const RankedParticle = {
  typeUrl: "/cyber.rank.v1beta1.RankedParticle",
  encode(message: RankedParticle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.particle !== "") {
      writer.uint32(10).string(message.particle);
    }
    if (message.rank !== BigInt(0)) {
      writer.uint32(16).uint64(message.rank);
    }
    return writer;
  },
  fromJSON(object: any): RankedParticle {
    return {
      particle: isSet(object.particle) ? String(object.particle) : "",
      rank: isSet(object.rank) ? BigInt(object.rank.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RankedParticle>): RankedParticle {
    const message = createBaseRankedParticle();
    message.particle = object.particle ?? "";
    message.rank = object.rank !== undefined && object.rank !== null ? BigInt(object.rank.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RankedParticleAmino): RankedParticle {
    const message = createBaseRankedParticle();
    if (object.particle !== undefined && object.particle !== null) {
      message.particle = object.particle;
    }
    if (object.rank !== undefined && object.rank !== null) {
      message.rank = BigInt(object.rank);
    }
    return message;
  },
  toAmino(message: RankedParticle): RankedParticleAmino {
    const obj: any = {};
    obj.particle = message.particle === "" ? undefined : message.particle;
    obj.rank = message.rank !== BigInt(0) ? message.rank.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RankedParticleAminoMsg): RankedParticle {
    return RankedParticle.fromAmino(object.value);
  },
  fromProtoMsg(message: RankedParticleProtoMsg): RankedParticle {
    return RankedParticle.decode(message.value);
  },
  toProto(message: RankedParticle): Uint8Array {
    return RankedParticle.encode(message).finish();
  },
  toProtoMsg(message: RankedParticle): RankedParticleProtoMsg {
    return {
      typeUrl: "/cyber.rank.v1beta1.RankedParticle",
      value: RankedParticle.encode(message).finish()
    };
  }
};