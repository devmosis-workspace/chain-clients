import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface MsgEmitIBCAck {
  sender: string;
  packetSequence: bigint;
  channel: string;
}
export interface MsgEmitIBCAckProtoMsg {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck";
  value: Uint8Array;
}
export interface MsgEmitIBCAckAmino {
  sender: string;
  packet_sequence: string;
  channel: string;
}
export interface MsgEmitIBCAckAminoMsg {
  type: "osmosis/ibchooks/emit-ibc-ack";
  value: MsgEmitIBCAckAmino;
}
export interface MsgEmitIBCAckSDKType {
  sender: string;
  packet_sequence: bigint;
  channel: string;
}
export interface MsgEmitIBCAckResponse {
  contractResult: string;
  ibcAck: string;
}
export interface MsgEmitIBCAckResponseProtoMsg {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse";
  value: Uint8Array;
}
export interface MsgEmitIBCAckResponseAmino {
  contract_result: string;
  ibc_ack: string;
}
export interface MsgEmitIBCAckResponseAminoMsg {
  type: "osmosis/ibchooks/emit-ibc-ack-response";
  value: MsgEmitIBCAckResponseAmino;
}
export interface MsgEmitIBCAckResponseSDKType {
  contract_result: string;
  ibc_ack: string;
}
function createBaseMsgEmitIBCAck(): MsgEmitIBCAck {
  return {
    sender: "",
    packetSequence: BigInt(0),
    channel: ""
  };
}
export const MsgEmitIBCAck = {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
  encode(message: MsgEmitIBCAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.packetSequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.packetSequence);
    }
    if (message.channel !== "") {
      writer.uint32(26).string(message.channel);
    }
    return writer;
  },
  fromJSON(object: any): MsgEmitIBCAck {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      packetSequence: isSet(object.packetSequence) ? BigInt(object.packetSequence.toString()) : BigInt(0),
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },
  fromPartial(object: Partial<MsgEmitIBCAck>): MsgEmitIBCAck {
    const message = createBaseMsgEmitIBCAck();
    message.sender = object.sender ?? "";
    message.packetSequence = object.packetSequence !== undefined && object.packetSequence !== null ? BigInt(object.packetSequence.toString()) : BigInt(0);
    message.channel = object.channel ?? "";
    return message;
  },
  fromAmino(object: MsgEmitIBCAckAmino): MsgEmitIBCAck {
    return {
      sender: object.sender,
      packetSequence: BigInt(object.packet_sequence),
      channel: object.channel
    };
  },
  toAmino(message: MsgEmitIBCAck): MsgEmitIBCAckAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.packet_sequence = message.packetSequence ? message.packetSequence.toString() : undefined;
    obj.channel = message.channel;
    return obj;
  },
  fromAminoMsg(object: MsgEmitIBCAckAminoMsg): MsgEmitIBCAck {
    return MsgEmitIBCAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckAminoMsg {
    return {
      type: "osmosis/ibchooks/emit-ibc-ack",
      value: MsgEmitIBCAck.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEmitIBCAckProtoMsg): MsgEmitIBCAck {
    return MsgEmitIBCAck.decode(message.value);
  },
  toProto(message: MsgEmitIBCAck): Uint8Array {
    return MsgEmitIBCAck.encode(message).finish();
  },
  toProtoMsg(message: MsgEmitIBCAck): MsgEmitIBCAckProtoMsg {
    return {
      typeUrl: "/osmosis.ibchooks.MsgEmitIBCAck",
      value: MsgEmitIBCAck.encode(message).finish()
    };
  }
};
function createBaseMsgEmitIBCAckResponse(): MsgEmitIBCAckResponse {
  return {
    contractResult: "",
    ibcAck: ""
  };
}
export const MsgEmitIBCAckResponse = {
  typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse",
  encode(message: MsgEmitIBCAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractResult !== "") {
      writer.uint32(10).string(message.contractResult);
    }
    if (message.ibcAck !== "") {
      writer.uint32(18).string(message.ibcAck);
    }
    return writer;
  },
  fromJSON(object: any): MsgEmitIBCAckResponse {
    return {
      contractResult: isSet(object.contractResult) ? String(object.contractResult) : "",
      ibcAck: isSet(object.ibcAck) ? String(object.ibcAck) : ""
    };
  },
  fromPartial(object: Partial<MsgEmitIBCAckResponse>): MsgEmitIBCAckResponse {
    const message = createBaseMsgEmitIBCAckResponse();
    message.contractResult = object.contractResult ?? "";
    message.ibcAck = object.ibcAck ?? "";
    return message;
  },
  fromAmino(object: MsgEmitIBCAckResponseAmino): MsgEmitIBCAckResponse {
    return {
      contractResult: object.contract_result,
      ibcAck: object.ibc_ack
    };
  },
  toAmino(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAmino {
    const obj: any = {};
    obj.contract_result = message.contractResult;
    obj.ibc_ack = message.ibcAck;
    return obj;
  },
  fromAminoMsg(object: MsgEmitIBCAckResponseAminoMsg): MsgEmitIBCAckResponse {
    return MsgEmitIBCAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseAminoMsg {
    return {
      type: "osmosis/ibchooks/emit-ibc-ack-response",
      value: MsgEmitIBCAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEmitIBCAckResponseProtoMsg): MsgEmitIBCAckResponse {
    return MsgEmitIBCAckResponse.decode(message.value);
  },
  toProto(message: MsgEmitIBCAckResponse): Uint8Array {
    return MsgEmitIBCAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEmitIBCAckResponse): MsgEmitIBCAckResponseProtoMsg {
    return {
      typeUrl: "/osmosis.ibchooks.MsgEmitIBCAckResponse",
      value: MsgEmitIBCAckResponse.encode(message).finish()
    };
  }
};