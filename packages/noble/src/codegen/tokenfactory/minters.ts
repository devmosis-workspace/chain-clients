import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Minters {
  address: string;
  allowance: Coin;
}
export interface MintersProtoMsg {
  typeUrl: "/noble.tokenfactory.Minters";
  value: Uint8Array;
}
export interface MintersAmino {
  address?: string;
  allowance?: CoinAmino;
}
export interface MintersAminoMsg {
  type: "/noble.tokenfactory.Minters";
  value: MintersAmino;
}
export interface MintersSDKType {
  address: string;
  allowance: CoinSDKType;
}
function createBaseMinters(): Minters {
  return {
    address: "",
    allowance: Coin.fromPartial({})
  };
}
export const Minters = {
  typeUrl: "/noble.tokenfactory.Minters",
  encode(message: Minters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.allowance !== undefined) {
      Coin.encode(message.allowance, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Minters {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      allowance: isSet(object.allowance) ? Coin.fromJSON(object.allowance) : undefined
    };
  },
  fromPartial(object: Partial<Minters>): Minters {
    const message = createBaseMinters();
    message.address = object.address ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Coin.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromAmino(object: MintersAmino): Minters {
    const message = createBaseMinters();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.allowance !== undefined && object.allowance !== null) {
      message.allowance = Coin.fromAmino(object.allowance);
    }
    return message;
  },
  toAmino(message: Minters): MintersAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.allowance = message.allowance ? Coin.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: MintersAminoMsg): Minters {
    return Minters.fromAmino(object.value);
  },
  fromProtoMsg(message: MintersProtoMsg): Minters {
    return Minters.decode(message.value);
  },
  toProto(message: Minters): Uint8Array {
    return Minters.encode(message).finish();
  },
  toProtoMsg(message: Minters): MintersProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.Minters",
      value: Minters.encode(message).finish()
    };
  }
};