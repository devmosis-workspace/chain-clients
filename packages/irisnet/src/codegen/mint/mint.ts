import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, fromJsonTimestamp } from "../helpers";
/** Minter represents the minting state */
export interface Minter {
  /** time which the last update was made to the minter */
  lastUpdate?: Timestamp;
  /** base inflation */
  inflationBase: string;
}
/** Minter represents the minting state */
export interface MinterSDKType {
  last_update?: TimestampSDKType;
  inflation_base: string;
}
/** Params defines mint module's parameters */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** inflation rate */
  inflation: string;
}
/** Params defines mint module's parameters */
export interface ParamsSDKType {
  mint_denom: string;
  inflation: string;
}
function createBaseMinter(): Minter {
  return {
    lastUpdate: undefined,
    inflationBase: ""
  };
}
export const Minter = {
  encode(message: Minter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lastUpdate !== undefined) {
      Timestamp.encode(message.lastUpdate, writer.uint32(10).fork()).ldelim();
    }
    if (message.inflationBase !== "") {
      writer.uint32(18).string(message.inflationBase);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      lastUpdate: isSet(object.lastUpdate) ? fromJsonTimestamp(object.lastUpdate) : undefined,
      inflationBase: isSet(object.inflationBase) ? String(object.inflationBase) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.lastUpdate = object.lastUpdate !== undefined && object.lastUpdate !== null ? Timestamp.fromPartial(object.lastUpdate) : undefined;
    message.inflationBase = object.inflationBase ?? "";
    return message;
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflation: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(message.inflation);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      inflation: isSet(object.inflation) ? String(object.inflation) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.inflation = object.inflation ?? "";
    return message;
  }
};