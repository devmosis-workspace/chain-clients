import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface Params {
  registryName: string;
  feePerByte: DecCoin;
}
export interface ParamsProtoMsg {
  typeUrl: "/likechain.iscn.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  registry_name: string;
  fee_per_byte?: DecCoinAmino;
}
export interface ParamsAminoMsg {
  type: "/likechain.iscn.Params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  registry_name: string;
  fee_per_byte: DecCoinSDKType;
}
function createBaseParams(): Params {
  return {
    registryName: "",
    feePerByte: DecCoin.fromPartial({})
  };
}
export const Params = {
  typeUrl: "/likechain.iscn.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.registryName !== "") {
      writer.uint32(10).string(message.registryName);
    }
    if (message.feePerByte !== undefined) {
      DecCoin.encode(message.feePerByte, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      registryName: isSet(object.registryName) ? String(object.registryName) : "",
      feePerByte: isSet(object.feePerByte) ? DecCoin.fromJSON(object.feePerByte) : undefined
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.registryName = object.registryName ?? "";
    message.feePerByte = object.feePerByte !== undefined && object.feePerByte !== null ? DecCoin.fromPartial(object.feePerByte) : undefined;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      registryName: object.registry_name,
      feePerByte: object?.fee_per_byte ? DecCoin.fromAmino(object.fee_per_byte) : undefined
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.registry_name = message.registryName;
    obj.fee_per_byte = message.feePerByte ? DecCoin.toAmino(message.feePerByte) : undefined;
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
      typeUrl: "/likechain.iscn.Params",
      value: Params.encode(message).finish()
    };
  }
};