import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Attachment {
  name: string;
  size: bigint;
  sha: string;
  uploader: string;
}
export interface AttachmentProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Attachment";
  value: Uint8Array;
}
export interface AttachmentAmino {
  name?: string;
  size?: string;
  sha?: string;
  uploader?: string;
}
export interface AttachmentAminoMsg {
  type: "/gitopia.gitopia.gitopia.Attachment";
  value: AttachmentAmino;
}
export interface AttachmentSDKType {
  name: string;
  size: bigint;
  sha: string;
  uploader: string;
}
function createBaseAttachment(): Attachment {
  return {
    name: "",
    size: BigInt(0),
    sha: "",
    uploader: ""
  };
}
export const Attachment = {
  typeUrl: "/gitopia.gitopia.gitopia.Attachment",
  encode(message: Attachment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.size !== BigInt(0)) {
      writer.uint32(16).uint64(message.size);
    }
    if (message.sha !== "") {
      writer.uint32(26).string(message.sha);
    }
    if (message.uploader !== "") {
      writer.uint32(34).string(message.uploader);
    }
    return writer;
  },
  fromJSON(object: any): Attachment {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      size: isSet(object.size) ? BigInt(object.size.toString()) : BigInt(0),
      sha: isSet(object.sha) ? String(object.sha) : "",
      uploader: isSet(object.uploader) ? String(object.uploader) : ""
    };
  },
  fromPartial(object: Partial<Attachment>): Attachment {
    const message = createBaseAttachment();
    message.name = object.name ?? "";
    message.size = object.size !== undefined && object.size !== null ? BigInt(object.size.toString()) : BigInt(0);
    message.sha = object.sha ?? "";
    message.uploader = object.uploader ?? "";
    return message;
  },
  fromAmino(object: AttachmentAmino): Attachment {
    const message = createBaseAttachment();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.size !== undefined && object.size !== null) {
      message.size = BigInt(object.size);
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    if (object.uploader !== undefined && object.uploader !== null) {
      message.uploader = object.uploader;
    }
    return message;
  },
  toAmino(message: Attachment): AttachmentAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.size = message.size !== BigInt(0) ? message.size.toString() : undefined;
    obj.sha = message.sha === "" ? undefined : message.sha;
    obj.uploader = message.uploader === "" ? undefined : message.uploader;
    return obj;
  },
  fromAminoMsg(object: AttachmentAminoMsg): Attachment {
    return Attachment.fromAmino(object.value);
  },
  fromProtoMsg(message: AttachmentProtoMsg): Attachment {
    return Attachment.decode(message.value);
  },
  toProto(message: Attachment): Uint8Array {
    return Attachment.encode(message).finish();
  },
  toProtoMsg(message: Attachment): AttachmentProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Attachment",
      value: Attachment.encode(message).finish()
    };
  }
};