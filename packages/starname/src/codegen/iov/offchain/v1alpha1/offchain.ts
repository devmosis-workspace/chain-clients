import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignData {
  /** signer is the bech32 representation of the signer's account address */
  signer: string;
  /**
   * data represents the raw bytes of the content that is signed (text, json,
   * etc)
   */
  data: Uint8Array;
}
export interface MsgSignDataProtoMsg {
  typeUrl: "/cosmos.offchain.v1alpha1.MsgSignData";
  value: Uint8Array;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataAmino {
  /** signer is the bech32 representation of the signer's account address */
  signer: string;
  /**
   * data represents the raw bytes of the content that is signed (text, json,
   * etc)
   */
  data: Uint8Array;
}
export interface MsgSignDataAminoMsg {
  type: "cosmos-sdk/MsgSignData";
  value: MsgSignDataAmino;
}
/** MsgSignData defines an arbitrary, general-purpose, off-chain message */
export interface MsgSignDataSDKType {
  signer: string;
  data: Uint8Array;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignData {
  /** msgs is a list of messages */
  msgs: MsgSignData[];
}
export interface ListOfMsgSignDataProtoMsg {
  typeUrl: "/cosmos.offchain.v1alpha1.ListOfMsgSignData";
  value: Uint8Array;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignDataAmino {
  /** msgs is a list of messages */
  msgs: MsgSignDataAmino[];
}
export interface ListOfMsgSignDataAminoMsg {
  type: "cosmos-sdk/ListOfMsgSignData";
  value: ListOfMsgSignDataAmino;
}
/**
 * ListOfMsgSignData defines a list of MsgSignData, used to marshal and
 * unmarshal them in a clean way
 */
export interface ListOfMsgSignDataSDKType {
  msgs: MsgSignDataSDKType[];
}
function createBaseMsgSignData(): MsgSignData {
  return {
    signer: "",
    data: new Uint8Array()
  };
}
export const MsgSignData = {
  typeUrl: "/cosmos.offchain.v1alpha1.MsgSignData",
  encode(message: MsgSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },
  fromJSON(object: any): MsgSignData {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<MsgSignData>): MsgSignData {
    const message = createBaseMsgSignData();
    message.signer = object.signer ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgSignDataAmino): MsgSignData {
    return {
      signer: object.signer,
      data: object.data
    };
  },
  toAmino(message: MsgSignData): MsgSignDataAmino {
    const obj: any = {};
    obj.signer = message.signer;
    obj.data = message.data;
    return obj;
  },
  fromAminoMsg(object: MsgSignDataAminoMsg): MsgSignData {
    return MsgSignData.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSignData): MsgSignDataAminoMsg {
    return {
      type: "cosmos-sdk/MsgSignData",
      value: MsgSignData.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSignDataProtoMsg): MsgSignData {
    return MsgSignData.decode(message.value);
  },
  toProto(message: MsgSignData): Uint8Array {
    return MsgSignData.encode(message).finish();
  },
  toProtoMsg(message: MsgSignData): MsgSignDataProtoMsg {
    return {
      typeUrl: "/cosmos.offchain.v1alpha1.MsgSignData",
      value: MsgSignData.encode(message).finish()
    };
  }
};
function createBaseListOfMsgSignData(): ListOfMsgSignData {
  return {
    msgs: []
  };
}
export const ListOfMsgSignData = {
  typeUrl: "/cosmos.offchain.v1alpha1.ListOfMsgSignData",
  encode(message: ListOfMsgSignData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.msgs) {
      MsgSignData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ListOfMsgSignData {
    return {
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgSignData.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<ListOfMsgSignData>): ListOfMsgSignData {
    const message = createBaseListOfMsgSignData();
    message.msgs = object.msgs?.map(e => MsgSignData.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ListOfMsgSignDataAmino): ListOfMsgSignData {
    return {
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgSignData.fromAmino(e)) : []
    };
  },
  toAmino(message: ListOfMsgSignData): ListOfMsgSignDataAmino {
    const obj: any = {};
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgSignData.toAmino(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListOfMsgSignDataAminoMsg): ListOfMsgSignData {
    return ListOfMsgSignData.fromAmino(object.value);
  },
  toAminoMsg(message: ListOfMsgSignData): ListOfMsgSignDataAminoMsg {
    return {
      type: "cosmos-sdk/ListOfMsgSignData",
      value: ListOfMsgSignData.toAmino(message)
    };
  },
  fromProtoMsg(message: ListOfMsgSignDataProtoMsg): ListOfMsgSignData {
    return ListOfMsgSignData.decode(message.value);
  },
  toProto(message: ListOfMsgSignData): Uint8Array {
    return ListOfMsgSignData.encode(message).finish();
  },
  toProtoMsg(message: ListOfMsgSignData): ListOfMsgSignDataProtoMsg {
    return {
      typeUrl: "/cosmos.offchain.v1alpha1.ListOfMsgSignData",
      value: ListOfMsgSignData.encode(message).finish()
    };
  }
};