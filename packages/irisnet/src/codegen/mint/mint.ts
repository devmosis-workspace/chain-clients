import { Timestamp, TimestampAmino, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
import { isSet, fromJsonTimestamp } from "../helpers";
import { Decimal } from "@cosmjs/math";
/** Minter represents the minting state */
export interface Minter {
  /** time which the last update was made to the minter */
  lastUpdate: Timestamp;
  /** base inflation */
  inflationBase: string;
}
export interface MinterProtoMsg {
  typeUrl: "/irishub.mint.Minter";
  value: Uint8Array;
}
/** Minter represents the minting state */
export interface MinterAmino {
  /** time which the last update was made to the minter */
  last_update?: TimestampAmino;
  /** base inflation */
  inflation_base: string;
}
export interface MinterAminoMsg {
  type: "/irishub.mint.Minter";
  value: MinterAmino;
}
/** Minter represents the minting state */
export interface MinterSDKType {
  last_update: TimestampSDKType;
  inflation_base: string;
}
/** Params defines mint module's parameters */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** inflation rate */
  inflation: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/irishub.mint.Params";
  value: Uint8Array;
}
/** Params defines mint module's parameters */
export interface ParamsAmino {
  /** type of coin to mint */
  mint_denom: string;
  /** inflation rate */
  inflation: string;
}
export interface ParamsAminoMsg {
  type: "/irishub.mint.Params";
  value: ParamsAmino;
}
/** Params defines mint module's parameters */
export interface ParamsSDKType {
  mint_denom: string;
  inflation: string;
}
function createBaseMinter(): Minter {
  return {
    lastUpdate: Timestamp.fromPartial({}),
    inflationBase: ""
  };
}
export const Minter = {
  typeUrl: "/irishub.mint.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MinterAmino): Minter {
    return {
      lastUpdate: object.last_update,
      inflationBase: object.inflation_base
    };
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.last_update = message.lastUpdate;
    obj.inflation_base = message.inflationBase;
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
      typeUrl: "/irishub.mint.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    inflation: ""
  };
}
export const Params = {
  typeUrl: "/irishub.mint.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.inflation !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.inflation, 18).atomics);
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
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      mintDenom: object.mint_denom,
      inflation: object.inflation
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    obj.inflation = message.inflation;
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
      typeUrl: "/irishub.mint.Params",
      value: Params.encode(message).finish()
    };
  }
};