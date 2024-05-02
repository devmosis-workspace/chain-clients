import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the dyncomm module. */
export interface Params {
  maxZero: string;
  slopeBase: string;
  slopeVpImpact: string;
  cap: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/terra.dyncomm.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the dyncomm module. */
export interface ParamsAmino {
  max_zero?: string;
  slope_base?: string;
  slope_vp_impact?: string;
  cap?: string;
}
export interface ParamsAminoMsg {
  type: "/terra.dyncomm.v1beta1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the dyncomm module. */
export interface ParamsSDKType {
  max_zero: string;
  slope_base: string;
  slope_vp_impact: string;
  cap: string;
}
function createBaseParams(): Params {
  return {
    maxZero: "",
    slopeBase: "",
    slopeVpImpact: "",
    cap: ""
  };
}
export const Params = {
  typeUrl: "/terra.dyncomm.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxZero !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.maxZero, 18).atomics);
    }
    if (message.slopeBase !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.slopeBase, 18).atomics);
    }
    if (message.slopeVpImpact !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.slopeVpImpact, 18).atomics);
    }
    if (message.cap !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.cap, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      maxZero: isSet(object.maxZero) ? String(object.maxZero) : "",
      slopeBase: isSet(object.slopeBase) ? String(object.slopeBase) : "",
      slopeVpImpact: isSet(object.slopeVpImpact) ? String(object.slopeVpImpact) : "",
      cap: isSet(object.cap) ? String(object.cap) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxZero = object.maxZero ?? "";
    message.slopeBase = object.slopeBase ?? "";
    message.slopeVpImpact = object.slopeVpImpact ?? "";
    message.cap = object.cap ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_zero !== undefined && object.max_zero !== null) {
      message.maxZero = object.max_zero;
    }
    if (object.slope_base !== undefined && object.slope_base !== null) {
      message.slopeBase = object.slope_base;
    }
    if (object.slope_vp_impact !== undefined && object.slope_vp_impact !== null) {
      message.slopeVpImpact = object.slope_vp_impact;
    }
    if (object.cap !== undefined && object.cap !== null) {
      message.cap = object.cap;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_zero = message.maxZero === "" ? undefined : message.maxZero;
    obj.slope_base = message.slopeBase === "" ? undefined : message.slopeBase;
    obj.slope_vp_impact = message.slopeVpImpact === "" ? undefined : message.slopeVpImpact;
    obj.cap = message.cap === "" ? undefined : message.cap;
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
      typeUrl: "/terra.dyncomm.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};