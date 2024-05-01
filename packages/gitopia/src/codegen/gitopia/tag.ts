import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Tag {
  id: bigint;
  repositoryId: bigint;
  name: string;
  sha: string;
  createdAt: bigint;
  updatedAt: bigint;
}
export interface TagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Tag";
  value: Uint8Array;
}
export interface TagAmino {
  id?: string;
  repositoryId?: string;
  name?: string;
  sha?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface TagAminoMsg {
  type: "/gitopia.gitopia.gitopia.Tag";
  value: TagAmino;
}
export interface TagSDKType {
  id: bigint;
  repositoryId: bigint;
  name: string;
  sha: string;
  createdAt: bigint;
  updatedAt: bigint;
}
function createBaseTag(): Tag {
  return {
    id: BigInt(0),
    repositoryId: BigInt(0),
    name: "",
    sha: "",
    createdAt: BigInt(0),
    updatedAt: BigInt(0)
  };
}
export const Tag = {
  typeUrl: "/gitopia.gitopia.gitopia.Tag",
  encode(message: Tag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(34).string(message.sha);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(40).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(48).int64(message.updatedAt);
    }
    return writer;
  },
  fromJSON(object: any): Tag {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Tag>): Tag {
    const message = createBaseTag();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TagAmino): Tag {
    const message = createBaseTag();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    return message;
  },
  toAmino(message: Tag): TagAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TagAminoMsg): Tag {
    return Tag.fromAmino(object.value);
  },
  fromProtoMsg(message: TagProtoMsg): Tag {
    return Tag.decode(message.value);
  },
  toProto(message: Tag): Uint8Array {
    return Tag.encode(message).finish();
  },
  toProtoMsg(message: Tag): TagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Tag",
      value: Tag.encode(message).finish()
    };
  }
};