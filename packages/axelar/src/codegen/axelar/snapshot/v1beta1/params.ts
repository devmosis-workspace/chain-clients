import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params represent the genesis parameters for the module */
export interface Params {
  /** Params represent the genesis parameters for the module */
  minProxyBalance: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.Params";
  value: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsAmino {
  /** Params represent the genesis parameters for the module */
  min_proxy_balance?: string;
}
export interface ParamsAminoMsg {
  type: "/axelar.snapshot.v1beta1.Params";
  value: ParamsAmino;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
  min_proxy_balance: bigint;
}
function createBaseParams(): Params {
  return {
    minProxyBalance: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/axelar.snapshot.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minProxyBalance !== BigInt(0)) {
      writer.uint32(8).int64(message.minProxyBalance);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      minProxyBalance: isSet(object.minProxyBalance) ? BigInt(object.minProxyBalance.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minProxyBalance = object.minProxyBalance !== undefined && object.minProxyBalance !== null ? BigInt(object.minProxyBalance.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.min_proxy_balance !== undefined && object.min_proxy_balance !== null) {
      message.minProxyBalance = BigInt(object.min_proxy_balance);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.min_proxy_balance = message.minProxyBalance ? message.minProxyBalance.toString() : undefined;
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
      typeUrl: "/axelar.snapshot.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};