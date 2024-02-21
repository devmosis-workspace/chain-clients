import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface PairID {
  token0: string;
  token1: string;
}
export interface PairIDProtoMsg {
  typeUrl: "/neutron.dex.PairID";
  value: Uint8Array;
}
export interface PairIDAmino {
  token0?: string;
  token1?: string;
}
export interface PairIDAminoMsg {
  type: "/neutron.dex.PairID";
  value: PairIDAmino;
}
export interface PairIDSDKType {
  token0: string;
  token1: string;
}
function createBasePairID(): PairID {
  return {
    token0: "",
    token1: ""
  };
}
export const PairID = {
  typeUrl: "/neutron.dex.PairID",
  encode(message: PairID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.token0 !== "") {
      writer.uint32(10).string(message.token0);
    }
    if (message.token1 !== "") {
      writer.uint32(18).string(message.token1);
    }
    return writer;
  },
  fromJSON(object: any): PairID {
    return {
      token0: isSet(object.token0) ? String(object.token0) : "",
      token1: isSet(object.token1) ? String(object.token1) : ""
    };
  },
  fromPartial(object: Partial<PairID>): PairID {
    const message = createBasePairID();
    message.token0 = object.token0 ?? "";
    message.token1 = object.token1 ?? "";
    return message;
  },
  fromAmino(object: PairIDAmino): PairID {
    const message = createBasePairID();
    if (object.token0 !== undefined && object.token0 !== null) {
      message.token0 = object.token0;
    }
    if (object.token1 !== undefined && object.token1 !== null) {
      message.token1 = object.token1;
    }
    return message;
  },
  toAmino(message: PairID): PairIDAmino {
    const obj: any = {};
    obj.token0 = message.token0;
    obj.token1 = message.token1;
    return obj;
  },
  fromAminoMsg(object: PairIDAminoMsg): PairID {
    return PairID.fromAmino(object.value);
  },
  fromProtoMsg(message: PairIDProtoMsg): PairID {
    return PairID.decode(message.value);
  },
  toProto(message: PairID): Uint8Array {
    return PairID.encode(message).finish();
  },
  toProtoMsg(message: PairID): PairIDProtoMsg {
    return {
      typeUrl: "/neutron.dex.PairID",
      value: PairID.encode(message).finish()
    };
  }
};