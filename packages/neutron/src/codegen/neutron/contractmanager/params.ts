import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Params defines the parameters for the module. */
export interface Params {
  sudoCallGasLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/neutron.contractmanager.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
  sudo_call_gas_limit?: string;
}
export interface ParamsAminoMsg {
  type: "/neutron.contractmanager.Params";
  value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  sudo_call_gas_limit: bigint;
}
function createBaseParams(): Params {
  return {
    sudoCallGasLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/neutron.contractmanager.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sudoCallGasLimit !== BigInt(0)) {
      writer.uint32(8).uint64(message.sudoCallGasLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      sudoCallGasLimit: isSet(object.sudoCallGasLimit) ? BigInt(object.sudoCallGasLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.sudoCallGasLimit = object.sudoCallGasLimit !== undefined && object.sudoCallGasLimit !== null ? BigInt(object.sudoCallGasLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.sudo_call_gas_limit !== undefined && object.sudo_call_gas_limit !== null) {
      message.sudoCallGasLimit = BigInt(object.sudo_call_gas_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.sudo_call_gas_limit = message.sudoCallGasLimit ? message.sudoCallGasLimit.toString() : undefined;
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
      typeUrl: "/neutron.contractmanager.Params",
      value: Params.encode(message).finish()
    };
  }
};