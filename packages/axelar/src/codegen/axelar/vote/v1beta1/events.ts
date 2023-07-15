import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Voted {
  module: string;
  action: string;
  poll: string;
  voter: string;
  state: string;
}
export interface VotedSDKType {
  module: string;
  action: string;
  poll: string;
  voter: string;
  state: string;
}
function createBaseVoted(): Voted {
  return {
    module: "",
    action: "",
    poll: "",
    voter: "",
    state: ""
  };
}
export const Voted = {
  encode(message: Voted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.action !== "") {
      writer.uint32(18).string(message.action);
    }
    if (message.poll !== "") {
      writer.uint32(26).string(message.poll);
    }
    if (message.voter !== "") {
      writer.uint32(34).string(message.voter);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): Voted {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      action: isSet(object.action) ? String(object.action) : "",
      poll: isSet(object.poll) ? String(object.poll) : "",
      voter: isSet(object.voter) ? String(object.voter) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<Voted>): Voted {
    const message = createBaseVoted();
    message.module = object.module ?? "";
    message.action = object.action ?? "";
    message.poll = object.poll ?? "";
    message.voter = object.voter ?? "";
    message.state = object.state ?? "";
    return message;
  }
};