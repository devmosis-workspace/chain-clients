import { Link, LinkAmino, LinkSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface MsgCyberlink {
  neuron: string;
  links: Link[];
}
export interface MsgCyberlinkProtoMsg {
  typeUrl: "/cyber.graph.v1beta1.MsgCyberlink";
  value: Uint8Array;
}
export interface MsgCyberlinkAmino {
  neuron?: string;
  links?: LinkAmino[];
}
export interface MsgCyberlinkAminoMsg {
  type: "/cyber.graph.v1beta1.MsgCyberlink";
  value: MsgCyberlinkAmino;
}
export interface MsgCyberlinkSDKType {
  neuron: string;
  links: LinkSDKType[];
}
export interface MsgCyberlinkResponse {}
export interface MsgCyberlinkResponseProtoMsg {
  typeUrl: "/cyber.graph.v1beta1.MsgCyberlinkResponse";
  value: Uint8Array;
}
export interface MsgCyberlinkResponseAmino {}
export interface MsgCyberlinkResponseAminoMsg {
  type: "/cyber.graph.v1beta1.MsgCyberlinkResponse";
  value: MsgCyberlinkResponseAmino;
}
export interface MsgCyberlinkResponseSDKType {}
function createBaseMsgCyberlink(): MsgCyberlink {
  return {
    neuron: "",
    links: []
  };
}
export const MsgCyberlink = {
  typeUrl: "/cyber.graph.v1beta1.MsgCyberlink",
  encode(message: MsgCyberlink, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.neuron !== "") {
      writer.uint32(10).string(message.neuron);
    }
    for (const v of message.links) {
      Link.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCyberlink {
    return {
      neuron: isSet(object.neuron) ? String(object.neuron) : "",
      links: Array.isArray(object?.links) ? object.links.map((e: any) => Link.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCyberlink>): MsgCyberlink {
    const message = createBaseMsgCyberlink();
    message.neuron = object.neuron ?? "";
    message.links = object.links?.map(e => Link.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCyberlinkAmino): MsgCyberlink {
    const message = createBaseMsgCyberlink();
    if (object.neuron !== undefined && object.neuron !== null) {
      message.neuron = object.neuron;
    }
    message.links = object.links?.map(e => Link.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCyberlink): MsgCyberlinkAmino {
    const obj: any = {};
    obj.neuron = message.neuron === "" ? undefined : message.neuron;
    if (message.links) {
      obj.links = message.links.map(e => e ? Link.toAmino(e) : undefined);
    } else {
      obj.links = message.links;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCyberlinkAminoMsg): MsgCyberlink {
    return MsgCyberlink.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCyberlinkProtoMsg): MsgCyberlink {
    return MsgCyberlink.decode(message.value);
  },
  toProto(message: MsgCyberlink): Uint8Array {
    return MsgCyberlink.encode(message).finish();
  },
  toProtoMsg(message: MsgCyberlink): MsgCyberlinkProtoMsg {
    return {
      typeUrl: "/cyber.graph.v1beta1.MsgCyberlink",
      value: MsgCyberlink.encode(message).finish()
    };
  }
};
function createBaseMsgCyberlinkResponse(): MsgCyberlinkResponse {
  return {};
}
export const MsgCyberlinkResponse = {
  typeUrl: "/cyber.graph.v1beta1.MsgCyberlinkResponse",
  encode(_: MsgCyberlinkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCyberlinkResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCyberlinkResponse>): MsgCyberlinkResponse {
    const message = createBaseMsgCyberlinkResponse();
    return message;
  },
  fromAmino(_: MsgCyberlinkResponseAmino): MsgCyberlinkResponse {
    const message = createBaseMsgCyberlinkResponse();
    return message;
  },
  toAmino(_: MsgCyberlinkResponse): MsgCyberlinkResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCyberlinkResponseAminoMsg): MsgCyberlinkResponse {
    return MsgCyberlinkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCyberlinkResponseProtoMsg): MsgCyberlinkResponse {
    return MsgCyberlinkResponse.decode(message.value);
  },
  toProto(message: MsgCyberlinkResponse): Uint8Array {
    return MsgCyberlinkResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCyberlinkResponse): MsgCyberlinkResponseProtoMsg {
    return {
      typeUrl: "/cyber.graph.v1beta1.MsgCyberlinkResponse",
      value: MsgCyberlinkResponse.encode(message).finish()
    };
  }
};