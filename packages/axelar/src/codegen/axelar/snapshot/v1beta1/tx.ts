import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export interface RegisterProxyRequest {
  sender: Uint8Array;
  proxyAddr: Uint8Array;
}
export interface RegisterProxyRequestProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest";
  value: Uint8Array;
}
export interface RegisterProxyRequestAmino {
  sender?: string;
  proxy_addr?: string;
}
export interface RegisterProxyRequestAminoMsg {
  type: "/axelar.snapshot.v1beta1.RegisterProxyRequest";
  value: RegisterProxyRequestAmino;
}
export interface RegisterProxyRequestSDKType {
  sender: Uint8Array;
  proxy_addr: Uint8Array;
}
export interface RegisterProxyResponse {}
export interface RegisterProxyResponseProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse";
  value: Uint8Array;
}
export interface RegisterProxyResponseAmino {}
export interface RegisterProxyResponseAminoMsg {
  type: "/axelar.snapshot.v1beta1.RegisterProxyResponse";
  value: RegisterProxyResponseAmino;
}
export interface RegisterProxyResponseSDKType {}
export interface DeactivateProxyRequest {
  sender: Uint8Array;
}
export interface DeactivateProxyRequestProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest";
  value: Uint8Array;
}
export interface DeactivateProxyRequestAmino {
  sender?: string;
}
export interface DeactivateProxyRequestAminoMsg {
  type: "/axelar.snapshot.v1beta1.DeactivateProxyRequest";
  value: DeactivateProxyRequestAmino;
}
export interface DeactivateProxyRequestSDKType {
  sender: Uint8Array;
}
export interface DeactivateProxyResponse {}
export interface DeactivateProxyResponseProtoMsg {
  typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse";
  value: Uint8Array;
}
export interface DeactivateProxyResponseAmino {}
export interface DeactivateProxyResponseAminoMsg {
  type: "/axelar.snapshot.v1beta1.DeactivateProxyResponse";
  value: DeactivateProxyResponseAmino;
}
export interface DeactivateProxyResponseSDKType {}
function createBaseRegisterProxyRequest(): RegisterProxyRequest {
  return {
    sender: new Uint8Array(),
    proxyAddr: new Uint8Array()
  };
}
export const RegisterProxyRequest = {
  typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest",
  encode(message: RegisterProxyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (message.proxyAddr.length !== 0) {
      writer.uint32(18).bytes(message.proxyAddr);
    }
    return writer;
  },
  fromJSON(object: any): RegisterProxyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      proxyAddr: isSet(object.proxyAddr) ? bytesFromBase64(object.proxyAddr) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<RegisterProxyRequest>): RegisterProxyRequest {
    const message = createBaseRegisterProxyRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.proxyAddr = object.proxyAddr ?? new Uint8Array();
    return message;
  },
  fromAmino(object: RegisterProxyRequestAmino): RegisterProxyRequest {
    const message = createBaseRegisterProxyRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    if (object.proxy_addr !== undefined && object.proxy_addr !== null) {
      message.proxyAddr = bytesFromBase64(object.proxy_addr);
    }
    return message;
  },
  toAmino(message: RegisterProxyRequest): RegisterProxyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    obj.proxy_addr = message.proxyAddr ? base64FromBytes(message.proxyAddr) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisterProxyRequestAminoMsg): RegisterProxyRequest {
    return RegisterProxyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterProxyRequestProtoMsg): RegisterProxyRequest {
    return RegisterProxyRequest.decode(message.value);
  },
  toProto(message: RegisterProxyRequest): Uint8Array {
    return RegisterProxyRequest.encode(message).finish();
  },
  toProtoMsg(message: RegisterProxyRequest): RegisterProxyRequestProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyRequest",
      value: RegisterProxyRequest.encode(message).finish()
    };
  }
};
function createBaseRegisterProxyResponse(): RegisterProxyResponse {
  return {};
}
export const RegisterProxyResponse = {
  typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse",
  encode(_: RegisterProxyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): RegisterProxyResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterProxyResponse>): RegisterProxyResponse {
    const message = createBaseRegisterProxyResponse();
    return message;
  },
  fromAmino(_: RegisterProxyResponseAmino): RegisterProxyResponse {
    const message = createBaseRegisterProxyResponse();
    return message;
  },
  toAmino(_: RegisterProxyResponse): RegisterProxyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: RegisterProxyResponseAminoMsg): RegisterProxyResponse {
    return RegisterProxyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisterProxyResponseProtoMsg): RegisterProxyResponse {
    return RegisterProxyResponse.decode(message.value);
  },
  toProto(message: RegisterProxyResponse): Uint8Array {
    return RegisterProxyResponse.encode(message).finish();
  },
  toProtoMsg(message: RegisterProxyResponse): RegisterProxyResponseProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.RegisterProxyResponse",
      value: RegisterProxyResponse.encode(message).finish()
    };
  }
};
function createBaseDeactivateProxyRequest(): DeactivateProxyRequest {
  return {
    sender: new Uint8Array()
  };
}
export const DeactivateProxyRequest = {
  typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest",
  encode(message: DeactivateProxyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    return writer;
  },
  fromJSON(object: any): DeactivateProxyRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<DeactivateProxyRequest>): DeactivateProxyRequest {
    const message = createBaseDeactivateProxyRequest();
    message.sender = object.sender ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DeactivateProxyRequestAmino): DeactivateProxyRequest {
    const message = createBaseDeactivateProxyRequest();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = bytesFromBase64(object.sender);
    }
    return message;
  },
  toAmino(message: DeactivateProxyRequest): DeactivateProxyRequestAmino {
    const obj: any = {};
    obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeactivateProxyRequestAminoMsg): DeactivateProxyRequest {
    return DeactivateProxyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeactivateProxyRequestProtoMsg): DeactivateProxyRequest {
    return DeactivateProxyRequest.decode(message.value);
  },
  toProto(message: DeactivateProxyRequest): Uint8Array {
    return DeactivateProxyRequest.encode(message).finish();
  },
  toProtoMsg(message: DeactivateProxyRequest): DeactivateProxyRequestProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyRequest",
      value: DeactivateProxyRequest.encode(message).finish()
    };
  }
};
function createBaseDeactivateProxyResponse(): DeactivateProxyResponse {
  return {};
}
export const DeactivateProxyResponse = {
  typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse",
  encode(_: DeactivateProxyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): DeactivateProxyResponse {
    return {};
  },
  fromPartial(_: Partial<DeactivateProxyResponse>): DeactivateProxyResponse {
    const message = createBaseDeactivateProxyResponse();
    return message;
  },
  fromAmino(_: DeactivateProxyResponseAmino): DeactivateProxyResponse {
    const message = createBaseDeactivateProxyResponse();
    return message;
  },
  toAmino(_: DeactivateProxyResponse): DeactivateProxyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: DeactivateProxyResponseAminoMsg): DeactivateProxyResponse {
    return DeactivateProxyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DeactivateProxyResponseProtoMsg): DeactivateProxyResponse {
    return DeactivateProxyResponse.decode(message.value);
  },
  toProto(message: DeactivateProxyResponse): Uint8Array {
    return DeactivateProxyResponse.encode(message).finish();
  },
  toProtoMsg(message: DeactivateProxyResponse): DeactivateProxyResponseProtoMsg {
    return {
      typeUrl: "/axelar.snapshot.v1beta1.DeactivateProxyResponse",
      value: DeactivateProxyResponse.encode(message).finish()
    };
  }
};