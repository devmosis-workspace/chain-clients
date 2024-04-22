import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Voted {
  module: string;
  action: string;
  poll: string;
  voter: string;
  state: string;
}
export interface VotedProtoMsg {
  typeUrl: "/axelar.vote.v1beta1.Voted";
  value: Uint8Array;
}
export interface VotedAmino {
  module?: string;
  action?: string;
  poll?: string;
  voter?: string;
  state?: string;
}
export interface VotedAminoMsg {
  type: "/axelar.vote.v1beta1.Voted";
  value: VotedAmino;
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
  typeUrl: "/axelar.vote.v1beta1.Voted",
  encode(message: Voted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: VotedAmino): Voted {
    const message = createBaseVoted();
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module;
    }
    if (object.action !== undefined && object.action !== null) {
      message.action = object.action;
    }
    if (object.poll !== undefined && object.poll !== null) {
      message.poll = object.poll;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: Voted): VotedAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.action = message.action;
    obj.poll = message.poll;
    obj.voter = message.voter;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: VotedAminoMsg): Voted {
    return Voted.fromAmino(object.value);
  },
  fromProtoMsg(message: VotedProtoMsg): Voted {
    return Voted.decode(message.value);
  },
  toProto(message: Voted): Uint8Array {
    return Voted.encode(message).finish();
  },
  toProtoMsg(message: Voted): VotedProtoMsg {
    return {
      typeUrl: "/axelar.vote.v1beta1.Voted",
      value: Voted.encode(message).finish()
    };
  }
};