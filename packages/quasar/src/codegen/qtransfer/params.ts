import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  wasmHooksEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/quasarlabs.quasarnode.qtransfer.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  wasm_hooks_enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "/quasarlabs.quasarnode.qtransfer.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  wasm_hooks_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    wasmHooksEnabled: false
  };
}
export const Params = {
  typeUrl: "/quasarlabs.quasarnode.qtransfer.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.wasmHooksEnabled === true) {
      writer.uint32(8).bool(message.wasmHooksEnabled);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      wasmHooksEnabled: isSet(object.wasmHooksEnabled) ? Boolean(object.wasmHooksEnabled) : false
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.wasmHooksEnabled = object.wasmHooksEnabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.wasm_hooks_enabled !== undefined && object.wasm_hooks_enabled !== null) {
      message.wasmHooksEnabled = object.wasm_hooks_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.wasm_hooks_enabled = message.wasmHooksEnabled;
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
      typeUrl: "/quasarlabs.quasarnode.qtransfer.Params",
      value: Params.encode(message).finish()
    };
  }
};