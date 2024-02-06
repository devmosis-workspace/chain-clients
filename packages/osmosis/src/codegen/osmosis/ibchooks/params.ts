import { BinaryWriter } from "../../binary";
export interface Params {
  allowedAsyncAckContracts: string[];
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.ibchooks.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  allowed_async_ack_contracts?: string[];
}
export interface ParamsAminoMsg {
  type: "osmosis/ibchooks/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  allowed_async_ack_contracts: string[];
}
function createBaseParams(): Params {
  return {
    allowedAsyncAckContracts: []
  };
}
export const Params = {
  typeUrl: "/osmosis.ibchooks.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allowedAsyncAckContracts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      allowedAsyncAckContracts: Array.isArray(object?.allowedAsyncAckContracts) ? object.allowedAsyncAckContracts.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts = object.allowedAsyncAckContracts?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.allowedAsyncAckContracts = object.allowed_async_ack_contracts?.map(e => e) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.allowedAsyncAckContracts) {
      obj.allowed_async_ack_contracts = message.allowedAsyncAckContracts.map(e => e);
    } else {
      obj.allowed_async_ack_contracts = [];
    }
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/ibchooks/params",
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
      typeUrl: "/osmosis.ibchooks.Params",
      value: Params.encode(message).finish()
    };
  }
};