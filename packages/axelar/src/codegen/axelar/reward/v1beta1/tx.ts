import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RefundMsgRequest {
  sender: Uint8Array;
  innerMessage?: Any;
}
export interface RefundMsgRequestSDKType {
  sender: Uint8Array;
  inner_message?: AnySDKType;
}
export interface RefundMsgResponse {
  data: Uint8Array;
  log: string;
}
export interface RefundMsgResponseSDKType {
  data: Uint8Array;
  log: string;
}
function createBaseRefundMsgRequest(): RefundMsgRequest {
  return {
    sender: new Uint8Array(),
    innerMessage: undefined
  };
}
export const RefundMsgRequest = {
  encode(message: RefundMsgRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.innerMessage !== undefined) {
      Any.encode(message.innerMessage, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RefundMsgRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      innerMessage: isSet(object.innerMessage) ? Any.fromJSON(object.innerMessage) : undefined
    };
  },
  fromPartial(object: Partial<RefundMsgRequest>): RefundMsgRequest {
    const message = createBaseRefundMsgRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.innerMessage = object.innerMessage !== undefined && object.innerMessage !== null ? Any.fromPartial(object.innerMessage) : undefined;
    return message;
  }
};
function createBaseRefundMsgResponse(): RefundMsgResponse {
  return {
    data: new Uint8Array(),
    log: ""
  };
}
export const RefundMsgResponse = {
  encode(message: RefundMsgResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.log !== "") {
      writer.uint32(18).string(message.log);
    }
    return writer;
  },
  fromJSON(object: any): RefundMsgResponse {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      log: isSet(object.log) ? String(object.log) : ""
    };
  },
  fromPartial(object: Partial<RefundMsgResponse>): RefundMsgResponse {
    const message = createBaseRefundMsgResponse();
    message.data = object.data ?? new Uint8Array();
    message.log = object.log ?? "";
    return message;
  }
};