import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequest {
  from: string;
  txHash: Uint8Array;
  receiver: string;
  amount: string;
}
export interface MsgSwapRequestProtoMsg {
  typeUrl: "/sentinel.swap.v1.MsgSwapRequest";
  value: Uint8Array;
}
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequestAmino {
  from?: string;
  tx_hash?: string;
  receiver?: string;
  amount?: string;
}
export interface MsgSwapRequestAminoMsg {
  type: "/sentinel.swap.v1.MsgSwapRequest";
  value: MsgSwapRequestAmino;
}
/**
 * MsgSwapRequest defines the SDK message for swapping an ERC-20 token to the
 * native coin
 */
export interface MsgSwapRequestSDKType {
  from: string;
  tx_hash: Uint8Array;
  receiver: string;
  amount: string;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponse {}
export interface MsgSwapResponseProtoMsg {
  typeUrl: "/sentinel.swap.v1.MsgSwapResponse";
  value: Uint8Array;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponseAmino {}
export interface MsgSwapResponseAminoMsg {
  type: "/sentinel.swap.v1.MsgSwapResponse";
  value: MsgSwapResponseAmino;
}
/** MsgSwapResponse defines the response of message MsgSwapRequest */
export interface MsgSwapResponseSDKType {}
function createBaseMsgSwapRequest(): MsgSwapRequest {
  return {
    from: "",
    txHash: new Uint8Array(),
    receiver: "",
    amount: ""
  };
}
export const MsgSwapRequest = {
  typeUrl: "/sentinel.swap.v1.MsgSwapRequest",
  encode(message: MsgSwapRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.txHash.length !== 0) {
      writer.uint32(18).bytes(message.txHash);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): MsgSwapRequest {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      txHash: isSet(object.txHash) ? bytesFromBase64(object.txHash) : new Uint8Array(),
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<MsgSwapRequest>): MsgSwapRequest {
    const message = createBaseMsgSwapRequest();
    message.from = object.from ?? "";
    message.txHash = object.txHash ?? new Uint8Array();
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: MsgSwapRequestAmino): MsgSwapRequest {
    const message = createBaseMsgSwapRequest();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.tx_hash !== undefined && object.tx_hash !== null) {
      message.txHash = bytesFromBase64(object.tx_hash);
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    }
    return message;
  },
  toAmino(message: MsgSwapRequest): MsgSwapRequestAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.tx_hash = message.txHash ? base64FromBytes(message.txHash) : undefined;
    obj.receiver = message.receiver === "" ? undefined : message.receiver;
    obj.amount = message.amount === "" ? undefined : message.amount;
    return obj;
  },
  fromAminoMsg(object: MsgSwapRequestAminoMsg): MsgSwapRequest {
    return MsgSwapRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapRequestProtoMsg): MsgSwapRequest {
    return MsgSwapRequest.decode(message.value);
  },
  toProto(message: MsgSwapRequest): Uint8Array {
    return MsgSwapRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapRequest): MsgSwapRequestProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.MsgSwapRequest",
      value: MsgSwapRequest.encode(message).finish()
    };
  }
};
function createBaseMsgSwapResponse(): MsgSwapResponse {
  return {};
}
export const MsgSwapResponse = {
  typeUrl: "/sentinel.swap.v1.MsgSwapResponse",
  encode(_: MsgSwapResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSwapResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSwapResponse>): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
  fromAmino(_: MsgSwapResponseAmino): MsgSwapResponse {
    const message = createBaseMsgSwapResponse();
    return message;
  },
  toAmino(_: MsgSwapResponse): MsgSwapResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSwapResponseAminoMsg): MsgSwapResponse {
    return MsgSwapResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSwapResponseProtoMsg): MsgSwapResponse {
    return MsgSwapResponse.decode(message.value);
  },
  toProto(message: MsgSwapResponse): Uint8Array {
    return MsgSwapResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSwapResponse): MsgSwapResponseProtoMsg {
    return {
      typeUrl: "/sentinel.swap.v1.MsgSwapResponse",
      value: MsgSwapResponse.encode(message).finish()
    };
  }
};