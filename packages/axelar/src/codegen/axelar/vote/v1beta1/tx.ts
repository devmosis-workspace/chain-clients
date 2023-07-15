import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface VoteRequest {
  sender: Uint8Array;
  pollId: Long;
  vote?: Any;
}
export interface VoteRequestSDKType {
  sender: Uint8Array;
  poll_id: Long;
  vote?: AnySDKType;
}
export interface VoteResponse {
  log: string;
}
export interface VoteResponseSDKType {
  log: string;
}
function createBaseVoteRequest(): VoteRequest {
  return {
    sender: new Uint8Array(),
    pollId: Long.UZERO,
    vote: undefined
  };
}
export const VoteRequest = {
  encode(message: VoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }
    if (!message.pollId.isZero()) {
      writer.uint32(32).uint64(message.pollId);
    }
    if (message.vote !== undefined) {
      Any.encode(message.vote, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VoteRequest {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      pollId: isSet(object.pollId) ? Long.fromValue(object.pollId) : Long.UZERO,
      vote: isSet(object.vote) ? Any.fromJSON(object.vote) : undefined
    };
  },
  fromPartial(object: Partial<VoteRequest>): VoteRequest {
    const message = createBaseVoteRequest();
    message.sender = object.sender ?? new Uint8Array();
    message.pollId = object.pollId !== undefined && object.pollId !== null ? Long.fromValue(object.pollId) : Long.UZERO;
    message.vote = object.vote !== undefined && object.vote !== null ? Any.fromPartial(object.vote) : undefined;
    return message;
  }
};
function createBaseVoteResponse(): VoteResponse {
  return {
    log: ""
  };
}
export const VoteResponse = {
  encode(message: VoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.log !== "") {
      writer.uint32(10).string(message.log);
    }
    return writer;
  },
  fromJSON(object: any): VoteResponse {
    return {
      log: isSet(object.log) ? String(object.log) : ""
    };
  },
  fromPartial(object: Partial<VoteResponse>): VoteResponse {
    const message = createBaseVoteResponse();
    message.log = object.log ?? "";
    return message;
  }
};