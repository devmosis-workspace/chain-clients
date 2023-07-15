import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64 } from "../../../helpers";
export interface RegisterProxyRequest {
  sender: Uint8Array;
  proxyAddr: Uint8Array;
}
export interface RegisterProxyRequestSDKType {
  sender: Uint8Array;
  proxy_addr: Uint8Array;
}
export interface RegisterProxyResponse {}
export interface RegisterProxyResponseSDKType {}
export interface DeactivateProxyRequest {
  sender: Uint8Array;
}
export interface DeactivateProxyRequestSDKType {
  sender: Uint8Array;
}
export interface DeactivateProxyResponse {}
export interface DeactivateProxyResponseSDKType {}
function createBaseRegisterProxyRequest(): RegisterProxyRequest {
  return {
    sender: new Uint8Array(),
    proxyAddr: new Uint8Array()
  };
}
export const RegisterProxyRequest = {
  encode(message: RegisterProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRegisterProxyResponse(): RegisterProxyResponse {
  return {};
}
export const RegisterProxyResponse = {
  encode(_: RegisterProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): RegisterProxyResponse {
    return {};
  },
  fromPartial(_: Partial<RegisterProxyResponse>): RegisterProxyResponse {
    const message = createBaseRegisterProxyResponse();
    return message;
  }
};
function createBaseDeactivateProxyRequest(): DeactivateProxyRequest {
  return {
    sender: new Uint8Array()
  };
}
export const DeactivateProxyRequest = {
  encode(message: DeactivateProxyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseDeactivateProxyResponse(): DeactivateProxyResponse {
  return {};
}
export const DeactivateProxyResponse = {
  encode(_: DeactivateProxyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): DeactivateProxyResponse {
    return {};
  },
  fromPartial(_: Partial<DeactivateProxyResponse>): DeactivateProxyResponse {
    const message = createBaseDeactivateProxyResponse();
    return message;
  }
};