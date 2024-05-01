import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Link {
  from: string;
  to: string;
}
export interface LinkProtoMsg {
  typeUrl: "/cyber.graph.v1beta1.Link";
  value: Uint8Array;
}
export interface LinkAmino {
  from?: string;
  to?: string;
}
export interface LinkAminoMsg {
  type: "/cyber.graph.v1beta1.Link";
  value: LinkAmino;
}
export interface LinkSDKType {
  from: string;
  to: string;
}
function createBaseLink(): Link {
  return {
    from: "",
    to: ""
  };
}
export const Link = {
  typeUrl: "/cyber.graph.v1beta1.Link",
  encode(message: Link, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    return writer;
  },
  fromJSON(object: any): Link {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  fromPartial(object: Partial<Link>): Link {
    const message = createBaseLink();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: LinkAmino): Link {
    const message = createBaseLink();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: Link): LinkAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: LinkAminoMsg): Link {
    return Link.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkProtoMsg): Link {
    return Link.decode(message.value);
  },
  toProto(message: Link): Uint8Array {
    return Link.encode(message).finish();
  },
  toProtoMsg(message: Link): LinkProtoMsg {
    return {
      typeUrl: "/cyber.graph.v1beta1.Link",
      value: Link.encode(message).finish()
    };
  }
};