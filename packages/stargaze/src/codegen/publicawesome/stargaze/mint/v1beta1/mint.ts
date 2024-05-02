import { Timestamp, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../../helpers";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual expected provisions */
  annualProvisions: string;
}
export interface MinterProtoMsg {
  typeUrl: "/publicawesome.stargaze.mint.v1beta1.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state. */
export interface MinterAmino {
  /** current annual expected provisions */
  annual_provisions?: string;
}
export interface MinterAminoMsg {
  type: "/publicawesome.stargaze.mint.v1beta1.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** the time the chain starts */
  startTime: Timestamp;
  /** initial annual provisions */
  initialAnnualProvisions: string;
  /** factor to reduce inflation by each year */
  reductionFactor: string;
  /** expected blocks per year */
  blocksPerYear: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.mint.v1beta1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the mint module. */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom?: string;
  /** the time the chain starts */
  start_time?: string;
  /** initial annual provisions */
  initial_annual_provisions?: string;
  /** factor to reduce inflation by each year */
  reduction_factor?: string;
  /** expected blocks per year */
  blocks_per_year?: string;
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.mint.v1beta1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  start_time: TimestampSDKType;
  initial_annual_provisions: string;
  reduction_factor: string;
  blocks_per_year: bigint;
}
function createBaseMinter(): Minter {
  return {
    annualProvisions: ""
  };
}
export const Minter = {
  typeUrl: "/publicawesome.stargaze.mint.v1beta1.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annualProvisions !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.annualProvisions = object.annualProvisions ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    const message = createBaseMinter();
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.mint.v1beta1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    startTime: Timestamp.fromPartial({}),
    initialAnnualProvisions: "",
    reductionFactor: "",
    blocksPerYear: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.mint.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }
    if (message.initialAnnualProvisions !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.initialAnnualProvisions, 18).atomics);
    }
    if (message.reductionFactor !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.reductionFactor, 18).atomics);
    }
    if (message.blocksPerYear !== BigInt(0)) {
      writer.uint32(40).uint64(message.blocksPerYear);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      initialAnnualProvisions: isSet(object.initialAnnualProvisions) ? String(object.initialAnnualProvisions) : "",
      reductionFactor: isSet(object.reductionFactor) ? String(object.reductionFactor) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? BigInt(object.blocksPerYear.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.initialAnnualProvisions = object.initialAnnualProvisions ?? "";
    message.reductionFactor = object.reductionFactor ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.mint_denom !== undefined && object.mint_denom !== null) {
      message.mintDenom = object.mint_denom;
    }
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = Timestamp.fromAmino(object.start_time);
    }
    if (object.initial_annual_provisions !== undefined && object.initial_annual_provisions !== null) {
      message.initialAnnualProvisions = object.initial_annual_provisions;
    }
    if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
      message.reductionFactor = object.reduction_factor;
    }
    if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
      message.blocksPerYear = BigInt(object.blocks_per_year);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.initial_annual_provisions = message.initialAnnualProvisions === "" ? undefined : message.initialAnnualProvisions;
    obj.reduction_factor = message.reductionFactor === "" ? undefined : message.reductionFactor;
    obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear.toString() : undefined;
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
      typeUrl: "/publicawesome.stargaze.mint.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};