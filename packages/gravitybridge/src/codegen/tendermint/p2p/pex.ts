import { NetAddress, NetAddressSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface PexRequest {}
export interface PexRequestSDKType {}
export interface PexAddrs {
  addrs: NetAddress[];
}
export interface PexAddrsSDKType {
  addrs: NetAddressSDKType[];
}
export interface Message {
  pexRequest?: PexRequest;
  pexAddrs?: PexAddrs;
}
export interface MessageSDKType {
  pex_request?: PexRequestSDKType;
  pex_addrs?: PexAddrsSDKType;
}
function createBasePexRequest(): PexRequest {
  return {};
}
export const PexRequest = {
  encode(_: PexRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): PexRequest {
    return {};
  },
  fromPartial(_: Partial<PexRequest>): PexRequest {
    const message = createBasePexRequest();
    return message;
  }
};
function createBasePexAddrs(): PexAddrs {
  return {
    addrs: []
  };
}
export const PexAddrs = {
  encode(message: PexAddrs, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addrs) {
      NetAddress.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PexAddrs {
    return {
      addrs: Array.isArray(object?.addrs) ? object.addrs.map((e: any) => NetAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<PexAddrs>): PexAddrs {
    const message = createBasePexAddrs();
    message.addrs = object.addrs?.map(e => NetAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    pexRequest: undefined,
    pexAddrs: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pexRequest !== undefined) {
      PexRequest.encode(message.pexRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.pexAddrs !== undefined) {
      PexAddrs.encode(message.pexAddrs, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      pexRequest: isSet(object.pexRequest) ? PexRequest.fromJSON(object.pexRequest) : undefined,
      pexAddrs: isSet(object.pexAddrs) ? PexAddrs.fromJSON(object.pexAddrs) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.pexRequest = object.pexRequest !== undefined && object.pexRequest !== null ? PexRequest.fromPartial(object.pexRequest) : undefined;
    message.pexAddrs = object.pexAddrs !== undefined && object.pexAddrs !== null ? PexAddrs.fromPartial(object.pexAddrs) : undefined;
    return message;
  }
};