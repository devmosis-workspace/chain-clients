import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  /**
   * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
   * behalf of interchain account
   */
  minTimeoutDuration: Duration;
}
export interface ParamsProtoMsg {
  typeUrl: "/chainmain.icaauth.v1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  /**
   * minTimeoutDuration defines the minimum value of packet timeout when submitting transactions to host chain on
   * behalf of interchain account
   */
  minTimeoutDuration?: DurationAmino;
}
export interface ParamsAminoMsg {
  type: "/chainmain.icaauth.v1.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  minTimeoutDuration: DurationSDKType;
}
function createBaseParams(): Params {
  return {
    minTimeoutDuration: Duration.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/chainmain.icaauth.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minTimeoutDuration !== undefined) {
      Duration.encode(message.minTimeoutDuration, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minTimeoutDuration: isSet(object.minTimeoutDuration) ? Duration.fromJSON(object.minTimeoutDuration) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minTimeoutDuration = object.minTimeoutDuration !== undefined && object.minTimeoutDuration !== null ? Duration.fromPartial(object.minTimeoutDuration) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      minTimeoutDuration: object?.minTimeoutDuration ? Duration.fromAmino(object.minTimeoutDuration) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minTimeoutDuration = message.minTimeoutDuration ? Duration.toAmino(message.minTimeoutDuration) : undefined;
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
      typeUrl: "/chainmain.icaauth.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};