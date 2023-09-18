import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RefundMsgRequest {
  sender: Uint8Array;
  innerMessage: (Any) | undefined;
}
export interface RefundMsgRequestProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest";
  value: Uint8Array;
}
export type RefundMsgRequestEncoded = Omit<RefundMsgRequest, "innerMessage"> & {
  innerMessage?: AnyProtoMsg | undefined;
};
export interface RefundMsgRequestAmino {
  sender: Uint8Array;
  inner_message?: AnyAmino;
}
export interface RefundMsgRequestAminoMsg {
  type: "/axelar.reward.v1beta1.RefundMsgRequest";
  value: RefundMsgRequestAmino;
}
export interface RefundMsgRequestSDKType {
  sender: Uint8Array;
  inner_message: AnySDKType | undefined;
}
export interface RefundMsgResponse {
  data: Uint8Array;
  log: string;
}
export interface RefundMsgResponseProtoMsg {
  typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse";
  value: Uint8Array;
}
export interface RefundMsgResponseAmino {
  data: Uint8Array;
  log: string;
}
export interface RefundMsgResponseAminoMsg {
  type: "/axelar.reward.v1beta1.RefundMsgResponse";
  value: RefundMsgResponseAmino;
}
export interface RefundMsgResponseSDKType {
  data: Uint8Array;
  log: string;
}
function createBaseRefundMsgRequest(): RefundMsgRequest {
  return {
    sender: new Uint8Array(),
    innerMessage: Any.fromPartial({})
  };
}
export const RefundMsgRequest = {
  typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest",
  encode(message: RefundMsgRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.innerMessage !== undefined) {
      Any.encode((message.innerMessage as Any), writer.uint32(18).fork()).ldelim();
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
  },
  fromAmino(object: RefundMsgRequestAmino): RefundMsgRequest {
    return {
      sender: object.sender,
      innerMessage: object?.inner_message ? Refundable_FromAmino(object.inner_message) : undefined
    };
  },
  toAmino(message: RefundMsgRequest): RefundMsgRequestAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.inner_message = message.innerMessage ? Refundable_ToAmino((message.innerMessage as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: RefundMsgRequestAminoMsg): RefundMsgRequest {
    return RefundMsgRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RefundMsgRequestProtoMsg): RefundMsgRequest {
    return RefundMsgRequest.decode(message.value);
  },
  toProto(message: RefundMsgRequest): Uint8Array {
    return RefundMsgRequest.encode(message).finish();
  },
  toProtoMsg(message: RefundMsgRequest): RefundMsgRequestProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.RefundMsgRequest",
      value: RefundMsgRequest.encode(message).finish()
    };
  }
};
function createBaseRefundMsgResponse(): RefundMsgResponse {
  return {
    data: new Uint8Array(),
    log: ""
  };
}
export const RefundMsgResponse = {
  typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse",
  encode(message: RefundMsgResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RefundMsgResponseAmino): RefundMsgResponse {
    return {
      data: object.data,
      log: object.log
    };
  },
  toAmino(message: RefundMsgResponse): RefundMsgResponseAmino {
    const obj: any = {};
    obj.data = message.data;
    obj.log = message.log;
    return obj;
  },
  fromAminoMsg(object: RefundMsgResponseAminoMsg): RefundMsgResponse {
    return RefundMsgResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RefundMsgResponseProtoMsg): RefundMsgResponse {
    return RefundMsgResponse.decode(message.value);
  },
  toProto(message: RefundMsgResponse): Uint8Array {
    return RefundMsgResponse.encode(message).finish();
  },
  toProtoMsg(message: RefundMsgResponse): RefundMsgResponseProtoMsg {
    return {
      typeUrl: "/axelar.reward.v1beta1.RefundMsgResponse",
      value: RefundMsgResponse.encode(message).finish()
    };
  }
};
export const Refundable_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Refundable_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Refundable_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};