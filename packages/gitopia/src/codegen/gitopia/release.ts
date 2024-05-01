import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Release {
  creator: string;
  id: bigint;
  repositoryId: bigint;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: Attachment[];
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
  createdAt: bigint;
  updatedAt: bigint;
  publishedAt: bigint;
}
export interface ReleaseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Release";
  value: Uint8Array;
}
export interface ReleaseAmino {
  creator?: string;
  id?: string;
  repositoryId?: string;
  tagName?: string;
  target?: string;
  name?: string;
  description?: string;
  attachments?: AttachmentAmino[];
  draft?: boolean;
  preRelease?: boolean;
  isTag?: boolean;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}
export interface ReleaseAminoMsg {
  type: "/gitopia.gitopia.gitopia.Release";
  value: ReleaseAmino;
}
export interface ReleaseSDKType {
  creator: string;
  id: bigint;
  repositoryId: bigint;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: AttachmentSDKType[];
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
  createdAt: bigint;
  updatedAt: bigint;
  publishedAt: bigint;
}
function createBaseRelease(): Release {
  return {
    creator: "",
    id: BigInt(0),
    repositoryId: BigInt(0),
    tagName: "",
    target: "",
    name: "",
    description: "",
    attachments: [],
    draft: false,
    preRelease: false,
    isTag: false,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    publishedAt: BigInt(0)
  };
}
export const Release = {
  typeUrl: "/gitopia.gitopia.gitopia.Release",
  encode(message: Release, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(24).uint64(message.repositoryId);
    }
    if (message.tagName !== "") {
      writer.uint32(34).string(message.tagName);
    }
    if (message.target !== "") {
      writer.uint32(42).string(message.target);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(58).string(message.description);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.draft === true) {
      writer.uint32(72).bool(message.draft);
    }
    if (message.preRelease === true) {
      writer.uint32(80).bool(message.preRelease);
    }
    if (message.isTag === true) {
      writer.uint32(88).bool(message.isTag);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(96).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.updatedAt);
    }
    if (message.publishedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.publishedAt);
    }
    return writer;
  },
  fromJSON(object: any): Release {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      tagName: isSet(object.tagName) ? String(object.tagName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Attachment.fromJSON(e)) : [],
      draft: isSet(object.draft) ? Boolean(object.draft) : false,
      preRelease: isSet(object.preRelease) ? Boolean(object.preRelease) : false,
      isTag: isSet(object.isTag) ? Boolean(object.isTag) : false,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      publishedAt: isSet(object.publishedAt) ? BigInt(object.publishedAt.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Release>): Release {
    const message = createBaseRelease();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.tagName = object.tagName ?? "";
    message.target = object.target ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.attachments = object.attachments?.map(e => Attachment.fromPartial(e)) || [];
    message.draft = object.draft ?? false;
    message.preRelease = object.preRelease ?? false;
    message.isTag = object.isTag ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.publishedAt = object.publishedAt !== undefined && object.publishedAt !== null ? BigInt(object.publishedAt.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ReleaseAmino): Release {
    const message = createBaseRelease();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.attachments = object.attachments?.map(e => Attachment.fromAmino(e)) || [];
    if (object.draft !== undefined && object.draft !== null) {
      message.draft = object.draft;
    }
    if (object.preRelease !== undefined && object.preRelease !== null) {
      message.preRelease = object.preRelease;
    }
    if (object.isTag !== undefined && object.isTag !== null) {
      message.isTag = object.isTag;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.publishedAt !== undefined && object.publishedAt !== null) {
      message.publishedAt = BigInt(object.publishedAt);
    }
    return message;
  },
  toAmino(message: Release): ReleaseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    obj.target = message.target === "" ? undefined : message.target;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Attachment.toAmino(e) : undefined);
    } else {
      obj.attachments = message.attachments;
    }
    obj.draft = message.draft === false ? undefined : message.draft;
    obj.preRelease = message.preRelease === false ? undefined : message.preRelease;
    obj.isTag = message.isTag === false ? undefined : message.isTag;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.publishedAt = message.publishedAt !== BigInt(0) ? message.publishedAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ReleaseAminoMsg): Release {
    return Release.fromAmino(object.value);
  },
  fromProtoMsg(message: ReleaseProtoMsg): Release {
    return Release.decode(message.value);
  },
  toProto(message: Release): Uint8Array {
    return Release.encode(message).finish();
  },
  toProtoMsg(message: Release): ReleaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Release",
      value: Release.encode(message).finish()
    };
  }
};