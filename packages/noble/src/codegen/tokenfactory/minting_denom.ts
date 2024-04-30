import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface MintingDenom {
  denom: string;
}
export interface MintingDenomProtoMsg {
  typeUrl: "/noble.tokenfactory.MintingDenom";
  value: Uint8Array;
}
export interface MintingDenomAmino {
  denom?: string;
}
export interface MintingDenomAminoMsg {
  type: "/noble.tokenfactory.MintingDenom";
  value: MintingDenomAmino;
}
export interface MintingDenomSDKType {
  denom: string;
}
function createBaseMintingDenom(): MintingDenom {
  return {
    denom: ""
  };
}
export const MintingDenom = {
  typeUrl: "/noble.tokenfactory.MintingDenom",
  encode(message: MintingDenom, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): MintingDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<MintingDenom>): MintingDenom {
    const message = createBaseMintingDenom();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: MintingDenomAmino): MintingDenom {
    const message = createBaseMintingDenom();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: MintingDenom): MintingDenomAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: MintingDenomAminoMsg): MintingDenom {
    return MintingDenom.fromAmino(object.value);
  },
  fromProtoMsg(message: MintingDenomProtoMsg): MintingDenom {
    return MintingDenom.decode(message.value);
  },
  toProto(message: MintingDenom): Uint8Array {
    return MintingDenom.encode(message).finish();
  },
  toProtoMsg(message: MintingDenom): MintingDenomProtoMsg {
    return {
      typeUrl: "/noble.tokenfactory.MintingDenom",
      value: MintingDenom.encode(message).finish()
    };
  }
};