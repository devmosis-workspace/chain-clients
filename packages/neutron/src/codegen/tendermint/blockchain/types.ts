import { Block, BlockSDKType } from "../types/block";
import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** BlockRequest requests a block for a specific height */
export interface BlockRequest {
  height: Long;
}
/** BlockRequest requests a block for a specific height */
export interface BlockRequestSDKType {
  height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponse {
  height: Long;
}
/** NoBlockResponse informs the node that the peer does not have block at the requested height */
export interface NoBlockResponseSDKType {
  height: Long;
}
/** BlockResponse returns block to the requested */
export interface BlockResponse {
  block?: Block;
}
/** BlockResponse returns block to the requested */
export interface BlockResponseSDKType {
  block?: BlockSDKType;
}
/** StatusRequest requests the status of a peer. */
export interface StatusRequest {}
/** StatusRequest requests the status of a peer. */
export interface StatusRequestSDKType {}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponse {
  height: Long;
  base: Long;
}
/** StatusResponse is a peer response to inform their status. */
export interface StatusResponseSDKType {
  height: Long;
  base: Long;
}
export interface Message {
  blockRequest?: BlockRequest;
  noBlockResponse?: NoBlockResponse;
  blockResponse?: BlockResponse;
  statusRequest?: StatusRequest;
  statusResponse?: StatusResponse;
}
export interface MessageSDKType {
  block_request?: BlockRequestSDKType;
  no_block_response?: NoBlockResponseSDKType;
  block_response?: BlockResponseSDKType;
  status_request?: StatusRequestSDKType;
  status_response?: StatusResponseSDKType;
}
function createBaseBlockRequest(): BlockRequest {
  return {
    height: Long.ZERO
  };
}
export const BlockRequest = {
  encode(message: BlockRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): BlockRequest {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<BlockRequest>): BlockRequest {
    const message = createBaseBlockRequest();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseNoBlockResponse(): NoBlockResponse {
  return {
    height: Long.ZERO
  };
}
export const NoBlockResponse = {
  encode(message: NoBlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): NoBlockResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO
    };
  },
  fromPartial(object: Partial<NoBlockResponse>): NoBlockResponse {
    const message = createBaseNoBlockResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    return message;
  }
};
function createBaseBlockResponse(): BlockResponse {
  return {
    block: undefined
  };
}
export const BlockResponse = {
  encode(message: BlockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): BlockResponse {
    return {
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  fromPartial(object: Partial<BlockResponse>): BlockResponse {
    const message = createBaseBlockResponse();
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseStatusRequest(): StatusRequest {
  return {};
}
export const StatusRequest = {
  encode(_: StatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): StatusRequest {
    return {};
  },
  fromPartial(_: Partial<StatusRequest>): StatusRequest {
    const message = createBaseStatusRequest();
    return message;
  }
};
function createBaseStatusResponse(): StatusResponse {
  return {
    height: Long.ZERO,
    base: Long.ZERO
  };
}
export const StatusResponse = {
  encode(message: StatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (!message.base.isZero()) {
      writer.uint32(16).int64(message.base);
    }
    return writer;
  },
  fromJSON(object: any): StatusResponse {
    return {
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      base: isSet(object.base) ? Long.fromValue(object.base) : Long.ZERO
    };
  },
  fromPartial(object: Partial<StatusResponse>): StatusResponse {
    const message = createBaseStatusResponse();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.base = object.base !== undefined && object.base !== null ? Long.fromValue(object.base) : Long.ZERO;
    return message;
  }
};
function createBaseMessage(): Message {
  return {
    blockRequest: undefined,
    noBlockResponse: undefined,
    blockResponse: undefined,
    statusRequest: undefined,
    statusResponse: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.blockRequest !== undefined) {
      BlockRequest.encode(message.blockRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.noBlockResponse !== undefined) {
      NoBlockResponse.encode(message.noBlockResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.blockResponse !== undefined) {
      BlockResponse.encode(message.blockResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.statusRequest !== undefined) {
      StatusRequest.encode(message.statusRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.statusResponse !== undefined) {
      StatusResponse.encode(message.statusResponse, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Message {
    return {
      blockRequest: isSet(object.blockRequest) ? BlockRequest.fromJSON(object.blockRequest) : undefined,
      noBlockResponse: isSet(object.noBlockResponse) ? NoBlockResponse.fromJSON(object.noBlockResponse) : undefined,
      blockResponse: isSet(object.blockResponse) ? BlockResponse.fromJSON(object.blockResponse) : undefined,
      statusRequest: isSet(object.statusRequest) ? StatusRequest.fromJSON(object.statusRequest) : undefined,
      statusResponse: isSet(object.statusResponse) ? StatusResponse.fromJSON(object.statusResponse) : undefined
    };
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.blockRequest = object.blockRequest !== undefined && object.blockRequest !== null ? BlockRequest.fromPartial(object.blockRequest) : undefined;
    message.noBlockResponse = object.noBlockResponse !== undefined && object.noBlockResponse !== null ? NoBlockResponse.fromPartial(object.noBlockResponse) : undefined;
    message.blockResponse = object.blockResponse !== undefined && object.blockResponse !== null ? BlockResponse.fromPartial(object.blockResponse) : undefined;
    message.statusRequest = object.statusRequest !== undefined && object.statusRequest !== null ? StatusRequest.fromPartial(object.statusRequest) : undefined;
    message.statusResponse = object.statusResponse !== undefined && object.statusResponse !== null ? StatusResponse.fromPartial(object.statusResponse) : undefined;
    return message;
  }
};