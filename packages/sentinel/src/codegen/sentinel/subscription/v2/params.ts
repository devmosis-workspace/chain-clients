import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  statusChangeDelay: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/sentinel.subscription.v2.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  status_change_delay?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/sentinel.subscription.v2.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  status_change_delay: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    statusChangeDelay: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/sentinel.subscription.v2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.statusChangeDelay !== undefined) {
      Duration.encode(message.statusChangeDelay, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      statusChangeDelay: isSet(object.statusChangeDelay) ? Duration.fromJSON(object.statusChangeDelay) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.statusChangeDelay = object.statusChangeDelay !== undefined && object.statusChangeDelay !== null ? Duration.fromPartial(object.statusChangeDelay) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.status_change_delay !== undefined && object.status_change_delay !== null) {
      message.statusChangeDelay = Duration.fromAmino(object.status_change_delay);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.status_change_delay = message.statusChangeDelay ? Duration.toAmino(message.statusChangeDelay) : undefined;
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
      typeUrl: "/sentinel.subscription.v2.Params",
      value: Params.encode(message).finish()
    };
  }
};