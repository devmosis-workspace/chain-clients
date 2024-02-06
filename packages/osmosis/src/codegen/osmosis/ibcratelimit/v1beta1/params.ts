import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  contractAddress: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
  contract_address?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/ibcratelimit/params";
  value: ParamsAmino;
}
/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
  contract_address: string;
}
function createBaseParams(): Params {
  return {
    contractAddress: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/ibcratelimit/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.ibcratelimit.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};