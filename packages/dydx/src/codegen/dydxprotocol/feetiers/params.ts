import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** PerpetualFeeParams defines the parameters for perpetual fees. */
export interface PerpetualFeeParams {
  /** Sorted fee tiers (lowest requirements first). */
  tiers: PerpetualFeeTier[];
}
export interface PerpetualFeeParamsProtoMsg {
  typeUrl: "/dydxprotocol.feetiers.PerpetualFeeParams";
  value: Uint8Array;
}
/** PerpetualFeeParams defines the parameters for perpetual fees. */
export interface PerpetualFeeParamsAmino {
  /** Sorted fee tiers (lowest requirements first). */
  tiers: PerpetualFeeTierAmino[];
}
export interface PerpetualFeeParamsAminoMsg {
  type: "/dydxprotocol.feetiers.PerpetualFeeParams";
  value: PerpetualFeeParamsAmino;
}
/** PerpetualFeeParams defines the parameters for perpetual fees. */
export interface PerpetualFeeParamsSDKType {
  tiers: PerpetualFeeTierSDKType[];
}
/** A fee tier for perpetuals */
export interface PerpetualFeeTier {
  /** Human-readable name of the tier, e.g. "Gold". */
  name: string;
  /** The trader's absolute volume requirement in quote quantums. */
  absoluteVolumeRequirement: bigint;
  /** The total volume share requirement. */
  totalVolumeShareRequirementPpm: number;
  /** The maker volume share requirement. */
  makerVolumeShareRequirementPpm: number;
  /** The maker fee once this tier is reached. */
  makerFeePpm: number;
  /** The taker fee once this tier is reached. */
  takerFeePpm: number;
}
export interface PerpetualFeeTierProtoMsg {
  typeUrl: "/dydxprotocol.feetiers.PerpetualFeeTier";
  value: Uint8Array;
}
/** A fee tier for perpetuals */
export interface PerpetualFeeTierAmino {
  /** Human-readable name of the tier, e.g. "Gold". */
  name: string;
  /** The trader's absolute volume requirement in quote quantums. */
  absolute_volume_requirement: string;
  /** The total volume share requirement. */
  total_volume_share_requirement_ppm: number;
  /** The maker volume share requirement. */
  maker_volume_share_requirement_ppm: number;
  /** The maker fee once this tier is reached. */
  maker_fee_ppm: number;
  /** The taker fee once this tier is reached. */
  taker_fee_ppm: number;
}
export interface PerpetualFeeTierAminoMsg {
  type: "/dydxprotocol.feetiers.PerpetualFeeTier";
  value: PerpetualFeeTierAmino;
}
/** A fee tier for perpetuals */
export interface PerpetualFeeTierSDKType {
  name: string;
  absolute_volume_requirement: bigint;
  total_volume_share_requirement_ppm: number;
  maker_volume_share_requirement_ppm: number;
  maker_fee_ppm: number;
  taker_fee_ppm: number;
}
function createBasePerpetualFeeParams(): PerpetualFeeParams {
  return {
    tiers: []
  };
}
export const PerpetualFeeParams = {
  typeUrl: "/dydxprotocol.feetiers.PerpetualFeeParams",
  encode(message: PerpetualFeeParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.tiers) {
      PerpetualFeeTier.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PerpetualFeeParams {
    return {
      tiers: Array.isArray(object?.tiers) ? object.tiers.map((e: any) => PerpetualFeeTier.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PerpetualFeeParams>): PerpetualFeeParams {
    const message = createBasePerpetualFeeParams();
    message.tiers = object.tiers?.map(e => PerpetualFeeTier.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PerpetualFeeParamsAmino): PerpetualFeeParams {
    return {
      tiers: Array.isArray(object?.tiers) ? object.tiers.map((e: any) => PerpetualFeeTier.fromAmino(e)) : []
    };
  },
  toAmino(message: PerpetualFeeParams): PerpetualFeeParamsAmino {
    const obj: any = {};
    if (message.tiers) {
      obj.tiers = message.tiers.map(e => e ? PerpetualFeeTier.toAmino(e) : undefined);
    } else {
      obj.tiers = [];
    }
    return obj;
  },
  fromAminoMsg(object: PerpetualFeeParamsAminoMsg): PerpetualFeeParams {
    return PerpetualFeeParams.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualFeeParamsProtoMsg): PerpetualFeeParams {
    return PerpetualFeeParams.decode(message.value);
  },
  toProto(message: PerpetualFeeParams): Uint8Array {
    return PerpetualFeeParams.encode(message).finish();
  },
  toProtoMsg(message: PerpetualFeeParams): PerpetualFeeParamsProtoMsg {
    return {
      typeUrl: "/dydxprotocol.feetiers.PerpetualFeeParams",
      value: PerpetualFeeParams.encode(message).finish()
    };
  }
};
function createBasePerpetualFeeTier(): PerpetualFeeTier {
  return {
    name: "",
    absoluteVolumeRequirement: BigInt(0),
    totalVolumeShareRequirementPpm: 0,
    makerVolumeShareRequirementPpm: 0,
    makerFeePpm: 0,
    takerFeePpm: 0
  };
}
export const PerpetualFeeTier = {
  typeUrl: "/dydxprotocol.feetiers.PerpetualFeeTier",
  encode(message: PerpetualFeeTier, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.absoluteVolumeRequirement !== BigInt(0)) {
      writer.uint32(16).uint64(message.absoluteVolumeRequirement);
    }
    if (message.totalVolumeShareRequirementPpm !== 0) {
      writer.uint32(24).uint32(message.totalVolumeShareRequirementPpm);
    }
    if (message.makerVolumeShareRequirementPpm !== 0) {
      writer.uint32(32).uint32(message.makerVolumeShareRequirementPpm);
    }
    if (message.makerFeePpm !== 0) {
      writer.uint32(40).sint32(message.makerFeePpm);
    }
    if (message.takerFeePpm !== 0) {
      writer.uint32(48).sint32(message.takerFeePpm);
    }
    return writer;
  },
  fromJSON(object: any): PerpetualFeeTier {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      absoluteVolumeRequirement: isSet(object.absoluteVolumeRequirement) ? BigInt(object.absoluteVolumeRequirement.toString()) : BigInt(0),
      totalVolumeShareRequirementPpm: isSet(object.totalVolumeShareRequirementPpm) ? Number(object.totalVolumeShareRequirementPpm) : 0,
      makerVolumeShareRequirementPpm: isSet(object.makerVolumeShareRequirementPpm) ? Number(object.makerVolumeShareRequirementPpm) : 0,
      makerFeePpm: isSet(object.makerFeePpm) ? Number(object.makerFeePpm) : 0,
      takerFeePpm: isSet(object.takerFeePpm) ? Number(object.takerFeePpm) : 0
    };
  },
  fromPartial(object: Partial<PerpetualFeeTier>): PerpetualFeeTier {
    const message = createBasePerpetualFeeTier();
    message.name = object.name ?? "";
    message.absoluteVolumeRequirement = object.absoluteVolumeRequirement !== undefined && object.absoluteVolumeRequirement !== null ? BigInt(object.absoluteVolumeRequirement.toString()) : BigInt(0);
    message.totalVolumeShareRequirementPpm = object.totalVolumeShareRequirementPpm ?? 0;
    message.makerVolumeShareRequirementPpm = object.makerVolumeShareRequirementPpm ?? 0;
    message.makerFeePpm = object.makerFeePpm ?? 0;
    message.takerFeePpm = object.takerFeePpm ?? 0;
    return message;
  },
  fromAmino(object: PerpetualFeeTierAmino): PerpetualFeeTier {
    return {
      name: object.name,
      absoluteVolumeRequirement: BigInt(object.absolute_volume_requirement),
      totalVolumeShareRequirementPpm: object.total_volume_share_requirement_ppm,
      makerVolumeShareRequirementPpm: object.maker_volume_share_requirement_ppm,
      makerFeePpm: object.maker_fee_ppm,
      takerFeePpm: object.taker_fee_ppm
    };
  },
  toAmino(message: PerpetualFeeTier): PerpetualFeeTierAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.absolute_volume_requirement = message.absoluteVolumeRequirement ? message.absoluteVolumeRequirement.toString() : undefined;
    obj.total_volume_share_requirement_ppm = message.totalVolumeShareRequirementPpm;
    obj.maker_volume_share_requirement_ppm = message.makerVolumeShareRequirementPpm;
    obj.maker_fee_ppm = message.makerFeePpm;
    obj.taker_fee_ppm = message.takerFeePpm;
    return obj;
  },
  fromAminoMsg(object: PerpetualFeeTierAminoMsg): PerpetualFeeTier {
    return PerpetualFeeTier.fromAmino(object.value);
  },
  fromProtoMsg(message: PerpetualFeeTierProtoMsg): PerpetualFeeTier {
    return PerpetualFeeTier.decode(message.value);
  },
  toProto(message: PerpetualFeeTier): Uint8Array {
    return PerpetualFeeTier.encode(message).finish();
  },
  toProtoMsg(message: PerpetualFeeTier): PerpetualFeeTierProtoMsg {
    return {
      typeUrl: "/dydxprotocol.feetiers.PerpetualFeeTier",
      value: PerpetualFeeTier.encode(message).finish()
    };
  }
};