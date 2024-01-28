import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for x/stats module. */
export interface Params {
  /** The desired number of seconds in the look-back window. */
  windowDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/dydxprotocol.stats.Params";
  value: Uint8Array;
}
/** Params defines the parameters for x/stats module. */
export interface ParamsAmino {
  /** The desired number of seconds in the look-back window. */
  window_duration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/dydxprotocol.stats.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for x/stats module. */
export interface ParamsSDKType {
  window_duration: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    windowDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/dydxprotocol.stats.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowDuration !== undefined) {
      Duration.encode(message.windowDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      windowDuration: isSet(object.windowDuration) ? Duration.fromJSON(object.windowDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.windowDuration = object.windowDuration !== undefined && object.windowDuration !== null ? Duration.fromPartial(object.windowDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.window_duration !== undefined && object.window_duration !== null) {
      message.windowDuration = Duration.fromAmino(object.window_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.window_duration = message.windowDuration ? Duration.toAmino(message.windowDuration) : undefined;
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
      typeUrl: "/dydxprotocol.stats.Params",
      value: Params.encode(message).finish()
    };
  }
};