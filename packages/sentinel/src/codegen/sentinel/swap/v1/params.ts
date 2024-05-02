import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  swapEnabled: boolean;
  swapDenom: string;
  approveBy: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/sentinel.swap.v1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  swap_enabled?: boolean;
  swap_denom?: string;
  approve_by?: string;
}
export interface ParamsAminoMsg {
  type: "/sentinel.swap.v1.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  swap_enabled: boolean;
  swap_denom: string;
  approve_by: string;
}
function createBaseParams(): Params {
  return {
    swapEnabled: false,
    swapDenom: "",
    approveBy: ""
  };
}
export const Params = {
  typeUrl: "/sentinel.swap.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.swapEnabled === true) {
      writer.uint32(8).bool(message.swapEnabled);
    }
    if (message.swapDenom !== "") {
      writer.uint32(18).string(message.swapDenom);
    }
    if (message.approveBy !== "") {
      writer.uint32(26).string(message.approveBy);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      swapEnabled: isSet(object.swapEnabled) ? Boolean(object.swapEnabled) : false,
      swapDenom: isSet(object.swapDenom) ? String(object.swapDenom) : "",
      approveBy: isSet(object.approveBy) ? String(object.approveBy) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.swapEnabled = object.swapEnabled ?? false;
    message.swapDenom = object.swapDenom ?? "";
    message.approveBy = object.approveBy ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.swap_enabled !== undefined && object.swap_enabled !== null) {
      message.swapEnabled = object.swap_enabled;
    }
    if (object.swap_denom !== undefined && object.swap_denom !== null) {
      message.swapDenom = object.swap_denom;
    }
    if (object.approve_by !== undefined && object.approve_by !== null) {
      message.approveBy = object.approve_by;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.swap_enabled = message.swapEnabled === false ? undefined : message.swapEnabled;
    obj.swap_denom = message.swapDenom === "" ? undefined : message.swapDenom;
    obj.approve_by = message.approveBy === "" ? undefined : message.approveBy;
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
      typeUrl: "/sentinel.swap.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};