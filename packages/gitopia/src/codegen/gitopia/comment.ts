import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { Reaction, ReactionAmino, ReactionSDKType } from "./reaction";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum CommentType {
  COMMENT_TYPE_NONE = 0,
  COMMENT_TYPE_REPLY = 1,
  COMMENT_TYPE_ADD_LABELS = 2,
  COMMENT_TYPE_REMOVE_LABELS = 3,
  COMMENT_TYPE_ADD_ASSIGNEES = 4,
  COMMENT_TYPE_REMOVE_ASSIGNEES = 5,
  COMMENT_TYPE_ADD_REVIEWERS = 6,
  COMMENT_TYPE_REMOVE_REVIEWERS = 7,
  COMMENT_TYPE_MODIFIED_TITLE = 8,
  COMMENT_TYPE_MODIFIED_DESCRIPTION = 9,
  COMMENT_TYPE_ISSUE_CLOSED = 10,
  COMMENT_TYPE_ISSUE_OPENED = 11,
  COMMENT_TYPE_PULL_REQUEST_CLOSED = 12,
  COMMENT_TYPE_PULL_REQUEST_OPENED = 13,
  COMMENT_TYPE_PULL_REQUEST_MERGED = 14,
  COMMENT_TYPE_REVIEW = 15,
  COMMENT_TYPE_ADD_BOUNTY = 16,
  COMMENT_TYPE_MODIFIED_BOUNTY = 17,
  COMMENT_TYPE_CLOSED_BOUNTY = 18,
  UNRECOGNIZED = -1,
}
export const CommentTypeSDKType = CommentType;
export const CommentTypeAmino = CommentType;
export function commentTypeFromJSON(object: any): CommentType {
  switch (object) {
    case 0:
    case "COMMENT_TYPE_NONE":
      return CommentType.COMMENT_TYPE_NONE;
    case 1:
    case "COMMENT_TYPE_REPLY":
      return CommentType.COMMENT_TYPE_REPLY;
    case 2:
    case "COMMENT_TYPE_ADD_LABELS":
      return CommentType.COMMENT_TYPE_ADD_LABELS;
    case 3:
    case "COMMENT_TYPE_REMOVE_LABELS":
      return CommentType.COMMENT_TYPE_REMOVE_LABELS;
    case 4:
    case "COMMENT_TYPE_ADD_ASSIGNEES":
      return CommentType.COMMENT_TYPE_ADD_ASSIGNEES;
    case 5:
    case "COMMENT_TYPE_REMOVE_ASSIGNEES":
      return CommentType.COMMENT_TYPE_REMOVE_ASSIGNEES;
    case 6:
    case "COMMENT_TYPE_ADD_REVIEWERS":
      return CommentType.COMMENT_TYPE_ADD_REVIEWERS;
    case 7:
    case "COMMENT_TYPE_REMOVE_REVIEWERS":
      return CommentType.COMMENT_TYPE_REMOVE_REVIEWERS;
    case 8:
    case "COMMENT_TYPE_MODIFIED_TITLE":
      return CommentType.COMMENT_TYPE_MODIFIED_TITLE;
    case 9:
    case "COMMENT_TYPE_MODIFIED_DESCRIPTION":
      return CommentType.COMMENT_TYPE_MODIFIED_DESCRIPTION;
    case 10:
    case "COMMENT_TYPE_ISSUE_CLOSED":
      return CommentType.COMMENT_TYPE_ISSUE_CLOSED;
    case 11:
    case "COMMENT_TYPE_ISSUE_OPENED":
      return CommentType.COMMENT_TYPE_ISSUE_OPENED;
    case 12:
    case "COMMENT_TYPE_PULL_REQUEST_CLOSED":
      return CommentType.COMMENT_TYPE_PULL_REQUEST_CLOSED;
    case 13:
    case "COMMENT_TYPE_PULL_REQUEST_OPENED":
      return CommentType.COMMENT_TYPE_PULL_REQUEST_OPENED;
    case 14:
    case "COMMENT_TYPE_PULL_REQUEST_MERGED":
      return CommentType.COMMENT_TYPE_PULL_REQUEST_MERGED;
    case 15:
    case "COMMENT_TYPE_REVIEW":
      return CommentType.COMMENT_TYPE_REVIEW;
    case 16:
    case "COMMENT_TYPE_ADD_BOUNTY":
      return CommentType.COMMENT_TYPE_ADD_BOUNTY;
    case 17:
    case "COMMENT_TYPE_MODIFIED_BOUNTY":
      return CommentType.COMMENT_TYPE_MODIFIED_BOUNTY;
    case 18:
    case "COMMENT_TYPE_CLOSED_BOUNTY":
      return CommentType.COMMENT_TYPE_CLOSED_BOUNTY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommentType.UNRECOGNIZED;
  }
}
export function commentTypeToJSON(object: CommentType): string {
  switch (object) {
    case CommentType.COMMENT_TYPE_NONE:
      return "COMMENT_TYPE_NONE";
    case CommentType.COMMENT_TYPE_REPLY:
      return "COMMENT_TYPE_REPLY";
    case CommentType.COMMENT_TYPE_ADD_LABELS:
      return "COMMENT_TYPE_ADD_LABELS";
    case CommentType.COMMENT_TYPE_REMOVE_LABELS:
      return "COMMENT_TYPE_REMOVE_LABELS";
    case CommentType.COMMENT_TYPE_ADD_ASSIGNEES:
      return "COMMENT_TYPE_ADD_ASSIGNEES";
    case CommentType.COMMENT_TYPE_REMOVE_ASSIGNEES:
      return "COMMENT_TYPE_REMOVE_ASSIGNEES";
    case CommentType.COMMENT_TYPE_ADD_REVIEWERS:
      return "COMMENT_TYPE_ADD_REVIEWERS";
    case CommentType.COMMENT_TYPE_REMOVE_REVIEWERS:
      return "COMMENT_TYPE_REMOVE_REVIEWERS";
    case CommentType.COMMENT_TYPE_MODIFIED_TITLE:
      return "COMMENT_TYPE_MODIFIED_TITLE";
    case CommentType.COMMENT_TYPE_MODIFIED_DESCRIPTION:
      return "COMMENT_TYPE_MODIFIED_DESCRIPTION";
    case CommentType.COMMENT_TYPE_ISSUE_CLOSED:
      return "COMMENT_TYPE_ISSUE_CLOSED";
    case CommentType.COMMENT_TYPE_ISSUE_OPENED:
      return "COMMENT_TYPE_ISSUE_OPENED";
    case CommentType.COMMENT_TYPE_PULL_REQUEST_CLOSED:
      return "COMMENT_TYPE_PULL_REQUEST_CLOSED";
    case CommentType.COMMENT_TYPE_PULL_REQUEST_OPENED:
      return "COMMENT_TYPE_PULL_REQUEST_OPENED";
    case CommentType.COMMENT_TYPE_PULL_REQUEST_MERGED:
      return "COMMENT_TYPE_PULL_REQUEST_MERGED";
    case CommentType.COMMENT_TYPE_REVIEW:
      return "COMMENT_TYPE_REVIEW";
    case CommentType.COMMENT_TYPE_ADD_BOUNTY:
      return "COMMENT_TYPE_ADD_BOUNTY";
    case CommentType.COMMENT_TYPE_MODIFIED_BOUNTY:
      return "COMMENT_TYPE_MODIFIED_BOUNTY";
    case CommentType.COMMENT_TYPE_CLOSED_BOUNTY:
      return "COMMENT_TYPE_CLOSED_BOUNTY";
    case CommentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum CommentParent {
  COMMENT_PARENT_NONE = 0,
  COMMENT_PARENT_ISSUE = 1,
  COMMENT_PARENT_PULL_REQUEST = 2,
  UNRECOGNIZED = -1,
}
export const CommentParentSDKType = CommentParent;
export const CommentParentAmino = CommentParent;
export function commentParentFromJSON(object: any): CommentParent {
  switch (object) {
    case 0:
    case "COMMENT_PARENT_NONE":
      return CommentParent.COMMENT_PARENT_NONE;
    case 1:
    case "COMMENT_PARENT_ISSUE":
      return CommentParent.COMMENT_PARENT_ISSUE;
    case 2:
    case "COMMENT_PARENT_PULL_REQUEST":
      return CommentParent.COMMENT_PARENT_PULL_REQUEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CommentParent.UNRECOGNIZED;
  }
}
export function commentParentToJSON(object: CommentParent): string {
  switch (object) {
    case CommentParent.COMMENT_PARENT_NONE:
      return "COMMENT_PARENT_NONE";
    case CommentParent.COMMENT_PARENT_ISSUE:
      return "COMMENT_PARENT_ISSUE";
    case CommentParent.COMMENT_PARENT_PULL_REQUEST:
      return "COMMENT_PARENT_PULL_REQUEST";
    case CommentParent.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Comment {
  creator: string;
  id: bigint;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
  body: string;
  attachments: Attachment[];
  diffHunk: string;
  path: string;
  position: bigint;
  system: boolean;
  authorAssociation: string;
  createdAt: bigint;
  updatedAt: bigint;
  commentType: CommentType;
  resolved: boolean;
  replies: bigint[];
  reactions: Reaction[];
  hidden: boolean;
}
export interface CommentProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Comment";
  value: Uint8Array;
}
export interface CommentAmino {
  creator?: string;
  id?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: CommentParent;
  commentIid?: string;
  body?: string;
  attachments?: AttachmentAmino[];
  diffHunk?: string;
  path?: string;
  position?: string;
  system?: boolean;
  authorAssociation?: string;
  createdAt?: string;
  updatedAt?: string;
  commentType?: CommentType;
  resolved?: boolean;
  replies?: string[];
  reactions?: ReactionAmino[];
  hidden?: boolean;
}
export interface CommentAminoMsg {
  type: "/gitopia.gitopia.gitopia.Comment";
  value: CommentAmino;
}
export interface CommentSDKType {
  creator: string;
  id: bigint;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
  body: string;
  attachments: AttachmentSDKType[];
  diffHunk: string;
  path: string;
  position: bigint;
  system: boolean;
  authorAssociation: string;
  createdAt: bigint;
  updatedAt: bigint;
  commentType: CommentType;
  resolved: boolean;
  replies: bigint[];
  reactions: ReactionSDKType[];
  hidden: boolean;
}
function createBaseComment(): Comment {
  return {
    creator: "",
    id: BigInt(0),
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    commentIid: BigInt(0),
    body: "",
    attachments: [],
    diffHunk: "",
    path: "",
    position: BigInt(0),
    system: false,
    authorAssociation: "",
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    commentType: 0,
    resolved: false,
    replies: [],
    reactions: [],
    hidden: false
  };
}
export const Comment = {
  typeUrl: "/gitopia.gitopia.gitopia.Comment",
  encode(message: Comment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(24).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(32).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(40).int32(message.parent);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(48).uint64(message.commentIid);
    }
    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.diffHunk !== "") {
      writer.uint32(74).string(message.diffHunk);
    }
    if (message.path !== "") {
      writer.uint32(82).string(message.path);
    }
    if (message.position !== BigInt(0)) {
      writer.uint32(88).uint64(message.position);
    }
    if (message.system === true) {
      writer.uint32(96).bool(message.system);
    }
    if (message.authorAssociation !== "") {
      writer.uint32(106).string(message.authorAssociation);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(112).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.updatedAt);
    }
    if (message.commentType !== 0) {
      writer.uint32(128).int32(message.commentType);
    }
    if (message.resolved === true) {
      writer.uint32(136).bool(message.resolved);
    }
    writer.uint32(146).fork();
    for (const v of message.replies) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.reactions) {
      Reaction.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.hidden === true) {
      writer.uint32(160).bool(message.hidden);
    }
    return writer;
  },
  fromJSON(object: any): Comment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? commentParentFromJSON(object.parent) : -1,
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0),
      body: isSet(object.body) ? String(object.body) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Attachment.fromJSON(e)) : [],
      diffHunk: isSet(object.diffHunk) ? String(object.diffHunk) : "",
      path: isSet(object.path) ? String(object.path) : "",
      position: isSet(object.position) ? BigInt(object.position.toString()) : BigInt(0),
      system: isSet(object.system) ? Boolean(object.system) : false,
      authorAssociation: isSet(object.authorAssociation) ? String(object.authorAssociation) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      commentType: isSet(object.commentType) ? commentTypeFromJSON(object.commentType) : -1,
      resolved: isSet(object.resolved) ? Boolean(object.resolved) : false,
      replies: Array.isArray(object?.replies) ? object.replies.map((e: any) => BigInt(e.toString())) : [],
      reactions: Array.isArray(object?.reactions) ? object.reactions.map((e: any) => Reaction.fromJSON(e)) : [],
      hidden: isSet(object.hidden) ? Boolean(object.hidden) : false
    };
  },
  fromPartial(object: Partial<Comment>): Comment {
    const message = createBaseComment();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    message.body = object.body ?? "";
    message.attachments = object.attachments?.map(e => Attachment.fromPartial(e)) || [];
    message.diffHunk = object.diffHunk ?? "";
    message.path = object.path ?? "";
    message.position = object.position !== undefined && object.position !== null ? BigInt(object.position.toString()) : BigInt(0);
    message.system = object.system ?? false;
    message.authorAssociation = object.authorAssociation ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.commentType = object.commentType ?? 0;
    message.resolved = object.resolved ?? false;
    message.replies = object.replies?.map(e => BigInt(e.toString())) || [];
    message.reactions = object.reactions?.map(e => Reaction.fromPartial(e)) || [];
    message.hidden = object.hidden ?? false;
    return message;
  },
  fromAmino(object: CommentAmino): Comment {
    const message = createBaseComment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    message.attachments = object.attachments?.map(e => Attachment.fromAmino(e)) || [];
    if (object.diffHunk !== undefined && object.diffHunk !== null) {
      message.diffHunk = object.diffHunk;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = BigInt(object.position);
    }
    if (object.system !== undefined && object.system !== null) {
      message.system = object.system;
    }
    if (object.authorAssociation !== undefined && object.authorAssociation !== null) {
      message.authorAssociation = object.authorAssociation;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.commentType !== undefined && object.commentType !== null) {
      message.commentType = object.commentType;
    }
    if (object.resolved !== undefined && object.resolved !== null) {
      message.resolved = object.resolved;
    }
    message.replies = object.replies?.map(e => BigInt(e)) || [];
    message.reactions = object.reactions?.map(e => Reaction.fromAmino(e)) || [];
    if (object.hidden !== undefined && object.hidden !== null) {
      message.hidden = object.hidden;
    }
    return message;
  },
  toAmino(message: Comment): CommentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    obj.body = message.body === "" ? undefined : message.body;
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Attachment.toAmino(e) : undefined);
    } else {
      obj.attachments = message.attachments;
    }
    obj.diffHunk = message.diffHunk === "" ? undefined : message.diffHunk;
    obj.path = message.path === "" ? undefined : message.path;
    obj.position = message.position !== BigInt(0) ? message.position.toString() : undefined;
    obj.system = message.system === false ? undefined : message.system;
    obj.authorAssociation = message.authorAssociation === "" ? undefined : message.authorAssociation;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.commentType = message.commentType === 0 ? undefined : message.commentType;
    obj.resolved = message.resolved === false ? undefined : message.resolved;
    if (message.replies) {
      obj.replies = message.replies.map(e => e.toString());
    } else {
      obj.replies = message.replies;
    }
    if (message.reactions) {
      obj.reactions = message.reactions.map(e => e ? Reaction.toAmino(e) : undefined);
    } else {
      obj.reactions = message.reactions;
    }
    obj.hidden = message.hidden === false ? undefined : message.hidden;
    return obj;
  },
  fromAminoMsg(object: CommentAminoMsg): Comment {
    return Comment.fromAmino(object.value);
  },
  fromProtoMsg(message: CommentProtoMsg): Comment {
    return Comment.decode(message.value);
  },
  toProto(message: Comment): Uint8Array {
    return Comment.encode(message).finish();
  },
  toProtoMsg(message: Comment): CommentProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Comment",
      value: Comment.encode(message).finish()
    };
  }
};