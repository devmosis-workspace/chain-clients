import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Minter represents the minting state. */
export interface Minter {
  /** current annual inflation rate */
  inflation: string;
  phase: Long;
  startPhaseBlock: Long;
  /** current annual expected provisions */
  annualProvisions: string;
  targetSupply: string;
}
/** Minter represents the minting state. */
export interface MinterSDKType {
  inflation: string;
  phase: Long;
  start_phase_block: Long;
  annual_provisions: string;
  target_supply: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** expected blocks per year */
  blocksPerYear: Long;
}
/** Params holds parameters for the mint module. */
export interface ParamsSDKType {
  mint_denom: string;
  blocks_per_year: Long;
}
function createBaseMinter(): Minter {
  return {
    inflation: "",
    phase: Long.UZERO,
    startPhaseBlock: Long.UZERO,
    annualProvisions: "",
    targetSupply: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.inflation !== "") {
      writer.uint32(10).string(message.inflation);
    }
    if (!message.phase.isZero()) {
      writer.uint32(16).uint64(message.phase);
    }
    if (!message.startPhaseBlock.isZero()) {
      writer.uint32(24).uint64(message.startPhaseBlock);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(34).string(message.annualProvisions);
    }
    if (message.targetSupply !== "") {
      writer.uint32(42).string(message.targetSupply);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      inflation: isSet(object.inflation) ? String(object.inflation) : "",
      phase: isSet(object.phase) ? Long.fromValue(object.phase) : Long.UZERO,
      startPhaseBlock: isSet(object.startPhaseBlock) ? Long.fromValue(object.startPhaseBlock) : Long.UZERO,
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : "",
      targetSupply: isSet(object.targetSupply) ? String(object.targetSupply) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflation = object.inflation ?? "";
    message.phase = object.phase !== undefined && object.phase !== null ? Long.fromValue(object.phase) : Long.UZERO;
    message.startPhaseBlock = object.startPhaseBlock !== undefined && object.startPhaseBlock !== null ? Long.fromValue(object.startPhaseBlock) : Long.UZERO;
    message.annualProvisions = object.annualProvisions ?? "";
    message.targetSupply = object.targetSupply ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    blocksPerYear: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (!message.blocksPerYear.isZero()) {
      writer.uint32(16).uint64(message.blocksPerYear);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      blocksPerYear: isSet(object.blocksPerYear) ? Long.fromValue(object.blocksPerYear) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? Long.fromValue(object.blocksPerYear) : Long.UZERO;
    return message;
  }
};