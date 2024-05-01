import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgInvestmint {
  neuron: string;
  amount: Coin;
  resource: string;
  length: bigint;
}
export interface MsgInvestmintProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.MsgInvestmint";
  value: Uint8Array;
}
export interface MsgInvestmintAmino {
  neuron?: string;
  amount?: CoinAmino;
  resource?: string;
  length?: string;
}
export interface MsgInvestmintAminoMsg {
  type: "/cyber.resources.v1beta1.MsgInvestmint";
  value: MsgInvestmintAmino;
}
export interface MsgInvestmintSDKType {
  neuron: string;
  amount: CoinSDKType;
  resource: string;
  length: bigint;
}
export interface MsgInvestmintResponse {}
export interface MsgInvestmintResponseProtoMsg {
  typeUrl: "/cyber.resources.v1beta1.MsgInvestmintResponse";
  value: Uint8Array;
}
export interface MsgInvestmintResponseAmino {}
export interface MsgInvestmintResponseAminoMsg {
  type: "/cyber.resources.v1beta1.MsgInvestmintResponse";
  value: MsgInvestmintResponseAmino;
}
export interface MsgInvestmintResponseSDKType {}
function createBaseMsgInvestmint(): MsgInvestmint {
  return {
    neuron: "",
    amount: Coin.fromPartial({}),
    resource: "",
    length: BigInt(0)
  };
}
export const MsgInvestmint = {
  typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
  encode(message: MsgInvestmint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.resource !== "") {
      writer.uint32(26).string(message.resource);
    }
    if (message.length !== BigInt(0)) {
      writer.uint32(32).uint64(message.length);
    }
    return writer;
  },
  fromJSON(object: any): MsgInvestmint {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      resource: isSet(object.resource) ? String(object.resource) : "",
      length: isSet(object.length) ? BigInt(object.length.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgInvestmint>): MsgInvestmint {
    const message = createBaseMsgInvestmint();
    message.neuron = object.neuron ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.resource = object.resource ?? "";
    message.length = object.length !== undefined && object.length !== null ? BigInt(object.length.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgInvestmintAmino): MsgInvestmint {
    const message = createBaseMsgInvestmint();
    if (object.neuron !== undefined && object.neuron !== null) {
      message.neuron = object.neuron;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = object.resource;
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = BigInt(object.length);
    }
    return message;
  },
  toAmino(message: MsgInvestmint): MsgInvestmintAmino {
    const obj: any = {};
    obj.neuron = message.neuron === "" ? undefined : message.neuron;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.resource = message.resource === "" ? undefined : message.resource;
    obj.length = message.length !== BigInt(0) ? message.length.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgInvestmintAminoMsg): MsgInvestmint {
    return MsgInvestmint.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvestmintProtoMsg): MsgInvestmint {
    return MsgInvestmint.decode(message.value);
  },
  toProto(message: MsgInvestmint): Uint8Array {
    return MsgInvestmint.encode(message).finish();
  },
  toProtoMsg(message: MsgInvestmint): MsgInvestmintProtoMsg {
    return {
      typeUrl: "/cyber.resources.v1beta1.MsgInvestmint",
      value: MsgInvestmint.encode(message).finish()
    };
  }
};
function createBaseMsgInvestmintResponse(): MsgInvestmintResponse {
  return {};
}
export const MsgInvestmintResponse = {
  typeUrl: "/cyber.resources.v1beta1.MsgInvestmintResponse",
  encode(_: MsgInvestmintResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInvestmintResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInvestmintResponse>): MsgInvestmintResponse {
    const message = createBaseMsgInvestmintResponse();
    return message;
  },
  fromAmino(_: MsgInvestmintResponseAmino): MsgInvestmintResponse {
    const message = createBaseMsgInvestmintResponse();
    return message;
  },
  toAmino(_: MsgInvestmintResponse): MsgInvestmintResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInvestmintResponseAminoMsg): MsgInvestmintResponse {
    return MsgInvestmintResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvestmintResponseProtoMsg): MsgInvestmintResponse {
    return MsgInvestmintResponse.decode(message.value);
  },
  toProto(message: MsgInvestmintResponse): Uint8Array {
    return MsgInvestmintResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInvestmintResponse): MsgInvestmintResponseProtoMsg {
    return {
      typeUrl: "/cyber.resources.v1beta1.MsgInvestmintResponse",
      value: MsgInvestmintResponse.encode(message).finish()
    };
  }
};