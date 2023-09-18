import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  /** IBC packet route timeout window */
  routeTimeoutWindow: bigint;
  transferLimit: bigint;
  endBlockerLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.axelarnet.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  /** IBC packet route timeout window */
  route_timeout_window: string;
  transfer_limit: string;
  end_blocker_limit: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.axelarnet.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  route_timeout_window: bigint;
  transfer_limit: bigint;
  end_blocker_limit: bigint;
}
function createBaseParams(): Params {
  return {
    routeTimeoutWindow: BigInt(0),
    transferLimit: BigInt(0),
    endBlockerLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelar.axelarnet.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.routeTimeoutWindow !== BigInt(0)) {
      writer.uint32(8).uint64(message.routeTimeoutWindow);
    }
    if (message.transferLimit !== BigInt(0)) {
      writer.uint32(24).uint64(message.transferLimit);
    }
    if (message.endBlockerLimit !== BigInt(0)) {
      writer.uint32(32).uint64(message.endBlockerLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      routeTimeoutWindow: isSet(object.routeTimeoutWindow) ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0),
      transferLimit: isSet(object.transferLimit) ? BigInt(object.transferLimit.toString()) : BigInt(0),
      endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.routeTimeoutWindow = object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0);
    message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? BigInt(object.transferLimit.toString()) : BigInt(0);
    message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      routeTimeoutWindow: BigInt(object.route_timeout_window),
      transferLimit: BigInt(object.transfer_limit),
      endBlockerLimit: BigInt(object.end_blocker_limit)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.route_timeout_window = message.routeTimeoutWindow ? message.routeTimeoutWindow.toString() : undefined;
    obj.transfer_limit = message.transferLimit ? message.transferLimit.toString() : undefined;
    obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
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
      typeUrl: "/axelar.axelarnet.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};