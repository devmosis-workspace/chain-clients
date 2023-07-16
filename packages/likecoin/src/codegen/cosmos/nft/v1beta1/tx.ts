import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSend {
  /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
  classId: string;
  /** id defines the unique identification of nft */
  id: string;
  /** sender is the address of the owner of nft */
  sender: string;
  /** receiver is the receiver address of nft */
  receiver: string;
}
/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSendSDKType {
  class_id: string;
  id: string;
  sender: string;
  receiver: string;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {}
function createBaseMsgSend(): MsgSend {
  return {
    classId: "",
    id: "",
    sender: "",
    receiver: ""
  };
}
export const MsgSend = {
  encode(message: MsgSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classId !== "") {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  fromJSON(object: any): MsgSend {
    return {
      classId: isSet(object.classId) ? String(object.classId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  fromPartial(object: Partial<MsgSend>): MsgSend {
    const message = createBaseMsgSend();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  }
};
function createBaseMsgSendResponse(): MsgSendResponse {
  return {};
}
export const MsgSendResponse = {
  encode(_: MsgSendResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSendResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSendResponse>): MsgSendResponse {
    const message = createBaseMsgSendResponse();
    return message;
  }
};