import * as _m0 from "protobufjs/minimal";
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
  encode(message: MsgSignData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseListOfMsgSignData(): ListOfMsgSignData {
  return {
    msgs: []
  };
}
export const ListOfMsgSignData = {
  encode(message: ListOfMsgSignData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};