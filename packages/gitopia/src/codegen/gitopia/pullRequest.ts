import { IssueIid, IssueIidAmino, IssueIidSDKType } from "./repository";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum PullRequest_State {
  OPEN = 0,
  CLOSED = 1,
  MERGED = 2,
  UNRECOGNIZED = -1,
}
export const PullRequest_StateSDKType = PullRequest_State;
export const PullRequest_StateAmino = PullRequest_State;
export function pullRequest_StateFromJSON(object: any): PullRequest_State {
  switch (object) {
    case 0:
    case "OPEN":
      return PullRequest_State.OPEN;
    case 1:
    case "CLOSED":
      return PullRequest_State.CLOSED;
    case 2:
    case "MERGED":
      return PullRequest_State.MERGED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PullRequest_State.UNRECOGNIZED;
  }
}
export function pullRequest_StateToJSON(object: PullRequest_State): string {
  switch (object) {
    case PullRequest_State.OPEN:
      return "OPEN";
    case PullRequest_State.CLOSED:
      return "CLOSED";
    case PullRequest_State.MERGED:
      return "MERGED";
    case PullRequest_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface PullRequest {
  creator: string;
  id: bigint;
  iid: bigint;
  title: string;
  state: PullRequest_State;
  description: string;
  locked: boolean;
  commentsCount: bigint;
  issues: IssueIid[];
  labels: bigint[];
  assignees: string[];
  reviewers: string[];
  draft: boolean;
  createdAt: bigint;
  updatedAt: bigint;
  closedAt: bigint;
  closedBy: string;
  mergedAt: bigint;
  mergedBy: string;
  mergeCommitSha: string;
  maintainerCanModify: boolean;
  head?: PullRequestHead;
  base?: PullRequestBase;
}
export interface PullRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequest";
  value: Uint8Array;
}
export interface PullRequestAmino {
  creator?: string;
  id?: string;
  iid?: string;
  title?: string;
  state?: PullRequest_State;
  description?: string;
  locked?: boolean;
  commentsCount?: string;
  issues?: IssueIidAmino[];
  labels?: string[];
  assignees?: string[];
  reviewers?: string[];
  draft?: boolean;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  closedBy?: string;
  mergedAt?: string;
  mergedBy?: string;
  mergeCommitSha?: string;
  maintainerCanModify?: boolean;
  head?: PullRequestHeadAmino;
  base?: PullRequestBaseAmino;
}
export interface PullRequestAminoMsg {
  type: "/gitopia.gitopia.gitopia.PullRequest";
  value: PullRequestAmino;
}
export interface PullRequestSDKType {
  creator: string;
  id: bigint;
  iid: bigint;
  title: string;
  state: PullRequest_State;
  description: string;
  locked: boolean;
  commentsCount: bigint;
  issues: IssueIidSDKType[];
  labels: bigint[];
  assignees: string[];
  reviewers: string[];
  draft: boolean;
  createdAt: bigint;
  updatedAt: bigint;
  closedAt: bigint;
  closedBy: string;
  mergedAt: bigint;
  mergedBy: string;
  mergeCommitSha: string;
  maintainerCanModify: boolean;
  head?: PullRequestHeadSDKType;
  base?: PullRequestBaseSDKType;
}
export interface PullRequestHead {
  repositoryId: bigint;
  branch: string;
  commitSha: string;
}
export interface PullRequestHeadProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestHead";
  value: Uint8Array;
}
export interface PullRequestHeadAmino {
  repositoryId?: string;
  branch?: string;
  commitSha?: string;
}
export interface PullRequestHeadAminoMsg {
  type: "/gitopia.gitopia.gitopia.PullRequestHead";
  value: PullRequestHeadAmino;
}
export interface PullRequestHeadSDKType {
  repositoryId: bigint;
  branch: string;
  commitSha: string;
}
export interface PullRequestBase {
  repositoryId: bigint;
  branch: string;
  commitSha: string;
}
export interface PullRequestBaseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestBase";
  value: Uint8Array;
}
export interface PullRequestBaseAmino {
  repositoryId?: string;
  branch?: string;
  commitSha?: string;
}
export interface PullRequestBaseAminoMsg {
  type: "/gitopia.gitopia.gitopia.PullRequestBase";
  value: PullRequestBaseAmino;
}
export interface PullRequestBaseSDKType {
  repositoryId: bigint;
  branch: string;
  commitSha: string;
}
function createBasePullRequest(): PullRequest {
  return {
    creator: "",
    id: BigInt(0),
    iid: BigInt(0),
    title: "",
    state: 0,
    description: "",
    locked: false,
    commentsCount: BigInt(0),
    issues: [],
    labels: [],
    assignees: [],
    reviewers: [],
    draft: false,
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    closedAt: BigInt(0),
    closedBy: "",
    mergedAt: BigInt(0),
    mergedBy: "",
    mergeCommitSha: "",
    maintainerCanModify: false,
    head: undefined,
    base: undefined
  };
}
export const PullRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequest",
  encode(message: PullRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.locked === true) {
      writer.uint32(56).bool(message.locked);
    }
    if (message.commentsCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.commentsCount);
    }
    for (const v of message.issues) {
      IssueIid.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    writer.uint32(82).fork();
    for (const v of message.labels) {
      writer.uint64(v);
    }
    writer.ldelim();
    for (const v of message.assignees) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.reviewers) {
      writer.uint32(98).string(v!);
    }
    if (message.draft === true) {
      writer.uint32(104).bool(message.draft);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(112).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.updatedAt);
    }
    if (message.closedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.closedAt);
    }
    if (message.closedBy !== "") {
      writer.uint32(138).string(message.closedBy);
    }
    if (message.mergedAt !== BigInt(0)) {
      writer.uint32(144).int64(message.mergedAt);
    }
    if (message.mergedBy !== "") {
      writer.uint32(154).string(message.mergedBy);
    }
    if (message.mergeCommitSha !== "") {
      writer.uint32(162).string(message.mergeCommitSha);
    }
    if (message.maintainerCanModify === true) {
      writer.uint32(168).bool(message.maintainerCanModify);
    }
    if (message.head !== undefined) {
      PullRequestHead.encode(message.head, writer.uint32(178).fork()).ldelim();
    }
    if (message.base !== undefined) {
      PullRequestBase.encode(message.base, writer.uint32(186).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): PullRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      title: isSet(object.title) ? String(object.title) : "",
      state: isSet(object.state) ? pullRequest_StateFromJSON(object.state) : -1,
      description: isSet(object.description) ? String(object.description) : "",
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
      commentsCount: isSet(object.commentsCount) ? BigInt(object.commentsCount.toString()) : BigInt(0),
      issues: Array.isArray(object?.issues) ? object.issues.map((e: any) => IssueIid.fromJSON(e)) : [],
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => BigInt(e.toString())) : [],
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : [],
      reviewers: Array.isArray(object?.reviewers) ? object.reviewers.map((e: any) => String(e)) : [],
      draft: isSet(object.draft) ? Boolean(object.draft) : false,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      closedAt: isSet(object.closedAt) ? BigInt(object.closedAt.toString()) : BigInt(0),
      closedBy: isSet(object.closedBy) ? String(object.closedBy) : "",
      mergedAt: isSet(object.mergedAt) ? BigInt(object.mergedAt.toString()) : BigInt(0),
      mergedBy: isSet(object.mergedBy) ? String(object.mergedBy) : "",
      mergeCommitSha: isSet(object.mergeCommitSha) ? String(object.mergeCommitSha) : "",
      maintainerCanModify: isSet(object.maintainerCanModify) ? Boolean(object.maintainerCanModify) : false,
      head: isSet(object.head) ? PullRequestHead.fromJSON(object.head) : undefined,
      base: isSet(object.base) ? PullRequestBase.fromJSON(object.base) : undefined
    };
  },
  fromPartial(object: Partial<PullRequest>): PullRequest {
    const message = createBasePullRequest();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.state = object.state ?? 0;
    message.description = object.description ?? "";
    message.locked = object.locked ?? false;
    message.commentsCount = object.commentsCount !== undefined && object.commentsCount !== null ? BigInt(object.commentsCount.toString()) : BigInt(0);
    message.issues = object.issues?.map(e => IssueIid.fromPartial(e)) || [];
    message.labels = object.labels?.map(e => BigInt(e.toString())) || [];
    message.assignees = object.assignees?.map(e => e) || [];
    message.reviewers = object.reviewers?.map(e => e) || [];
    message.draft = object.draft ?? false;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.closedAt = object.closedAt !== undefined && object.closedAt !== null ? BigInt(object.closedAt.toString()) : BigInt(0);
    message.closedBy = object.closedBy ?? "";
    message.mergedAt = object.mergedAt !== undefined && object.mergedAt !== null ? BigInt(object.mergedAt.toString()) : BigInt(0);
    message.mergedBy = object.mergedBy ?? "";
    message.mergeCommitSha = object.mergeCommitSha ?? "";
    message.maintainerCanModify = object.maintainerCanModify ?? false;
    message.head = object.head !== undefined && object.head !== null ? PullRequestHead.fromPartial(object.head) : undefined;
    message.base = object.base !== undefined && object.base !== null ? PullRequestBase.fromPartial(object.base) : undefined;
    return message;
  },
  fromAmino(object: PullRequestAmino): PullRequest {
    const message = createBasePullRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.locked !== undefined && object.locked !== null) {
      message.locked = object.locked;
    }
    if (object.commentsCount !== undefined && object.commentsCount !== null) {
      message.commentsCount = BigInt(object.commentsCount);
    }
    message.issues = object.issues?.map(e => IssueIid.fromAmino(e)) || [];
    message.labels = object.labels?.map(e => BigInt(e)) || [];
    message.assignees = object.assignees?.map(e => e) || [];
    message.reviewers = object.reviewers?.map(e => e) || [];
    if (object.draft !== undefined && object.draft !== null) {
      message.draft = object.draft;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.closedAt !== undefined && object.closedAt !== null) {
      message.closedAt = BigInt(object.closedAt);
    }
    if (object.closedBy !== undefined && object.closedBy !== null) {
      message.closedBy = object.closedBy;
    }
    if (object.mergedAt !== undefined && object.mergedAt !== null) {
      message.mergedAt = BigInt(object.mergedAt);
    }
    if (object.mergedBy !== undefined && object.mergedBy !== null) {
      message.mergedBy = object.mergedBy;
    }
    if (object.mergeCommitSha !== undefined && object.mergeCommitSha !== null) {
      message.mergeCommitSha = object.mergeCommitSha;
    }
    if (object.maintainerCanModify !== undefined && object.maintainerCanModify !== null) {
      message.maintainerCanModify = object.maintainerCanModify;
    }
    if (object.head !== undefined && object.head !== null) {
      message.head = PullRequestHead.fromAmino(object.head);
    }
    if (object.base !== undefined && object.base !== null) {
      message.base = PullRequestBase.fromAmino(object.base);
    }
    return message;
  },
  toAmino(message: PullRequest): PullRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.description = message.description === "" ? undefined : message.description;
    obj.locked = message.locked === false ? undefined : message.locked;
    obj.commentsCount = message.commentsCount !== BigInt(0) ? message.commentsCount.toString() : undefined;
    if (message.issues) {
      obj.issues = message.issues.map(e => e ? IssueIid.toAmino(e) : undefined);
    } else {
      obj.issues = message.issues;
    }
    if (message.labels) {
      obj.labels = message.labels.map(e => e.toString());
    } else {
      obj.labels = message.labels;
    }
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    if (message.reviewers) {
      obj.reviewers = message.reviewers.map(e => e);
    } else {
      obj.reviewers = message.reviewers;
    }
    obj.draft = message.draft === false ? undefined : message.draft;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.closedAt = message.closedAt !== BigInt(0) ? message.closedAt.toString() : undefined;
    obj.closedBy = message.closedBy === "" ? undefined : message.closedBy;
    obj.mergedAt = message.mergedAt !== BigInt(0) ? message.mergedAt.toString() : undefined;
    obj.mergedBy = message.mergedBy === "" ? undefined : message.mergedBy;
    obj.mergeCommitSha = message.mergeCommitSha === "" ? undefined : message.mergeCommitSha;
    obj.maintainerCanModify = message.maintainerCanModify === false ? undefined : message.maintainerCanModify;
    obj.head = message.head ? PullRequestHead.toAmino(message.head) : undefined;
    obj.base = message.base ? PullRequestBase.toAmino(message.base) : undefined;
    return obj;
  },
  fromAminoMsg(object: PullRequestAminoMsg): PullRequest {
    return PullRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: PullRequestProtoMsg): PullRequest {
    return PullRequest.decode(message.value);
  },
  toProto(message: PullRequest): Uint8Array {
    return PullRequest.encode(message).finish();
  },
  toProtoMsg(message: PullRequest): PullRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PullRequest",
      value: PullRequest.encode(message).finish()
    };
  }
};
function createBasePullRequestHead(): PullRequestHead {
  return {
    repositoryId: BigInt(0),
    branch: "",
    commitSha: ""
  };
}
export const PullRequestHead = {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestHead",
  encode(message: PullRequestHead, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.branch !== "") {
      writer.uint32(18).string(message.branch);
    }
    if (message.commitSha !== "") {
      writer.uint32(26).string(message.commitSha);
    }
    return writer;
  },
  fromJSON(object: any): PullRequestHead {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      branch: isSet(object.branch) ? String(object.branch) : "",
      commitSha: isSet(object.commitSha) ? String(object.commitSha) : ""
    };
  },
  fromPartial(object: Partial<PullRequestHead>): PullRequestHead {
    const message = createBasePullRequestHead();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.branch = object.branch ?? "";
    message.commitSha = object.commitSha ?? "";
    return message;
  },
  fromAmino(object: PullRequestHeadAmino): PullRequestHead {
    const message = createBasePullRequestHead();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    if (object.commitSha !== undefined && object.commitSha !== null) {
      message.commitSha = object.commitSha;
    }
    return message;
  },
  toAmino(message: PullRequestHead): PullRequestHeadAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.branch = message.branch === "" ? undefined : message.branch;
    obj.commitSha = message.commitSha === "" ? undefined : message.commitSha;
    return obj;
  },
  fromAminoMsg(object: PullRequestHeadAminoMsg): PullRequestHead {
    return PullRequestHead.fromAmino(object.value);
  },
  fromProtoMsg(message: PullRequestHeadProtoMsg): PullRequestHead {
    return PullRequestHead.decode(message.value);
  },
  toProto(message: PullRequestHead): Uint8Array {
    return PullRequestHead.encode(message).finish();
  },
  toProtoMsg(message: PullRequestHead): PullRequestHeadProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PullRequestHead",
      value: PullRequestHead.encode(message).finish()
    };
  }
};
function createBasePullRequestBase(): PullRequestBase {
  return {
    repositoryId: BigInt(0),
    branch: "",
    commitSha: ""
  };
}
export const PullRequestBase = {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestBase",
  encode(message: PullRequestBase, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.branch !== "") {
      writer.uint32(18).string(message.branch);
    }
    if (message.commitSha !== "") {
      writer.uint32(26).string(message.commitSha);
    }
    return writer;
  },
  fromJSON(object: any): PullRequestBase {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      branch: isSet(object.branch) ? String(object.branch) : "",
      commitSha: isSet(object.commitSha) ? String(object.commitSha) : ""
    };
  },
  fromPartial(object: Partial<PullRequestBase>): PullRequestBase {
    const message = createBasePullRequestBase();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.branch = object.branch ?? "";
    message.commitSha = object.commitSha ?? "";
    return message;
  },
  fromAmino(object: PullRequestBaseAmino): PullRequestBase {
    const message = createBasePullRequestBase();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    if (object.commitSha !== undefined && object.commitSha !== null) {
      message.commitSha = object.commitSha;
    }
    return message;
  },
  toAmino(message: PullRequestBase): PullRequestBaseAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.branch = message.branch === "" ? undefined : message.branch;
    obj.commitSha = message.commitSha === "" ? undefined : message.commitSha;
    return obj;
  },
  fromAminoMsg(object: PullRequestBaseAminoMsg): PullRequestBase {
    return PullRequestBase.fromAmino(object.value);
  },
  fromProtoMsg(message: PullRequestBaseProtoMsg): PullRequestBase {
    return PullRequestBase.decode(message.value);
  },
  toProto(message: PullRequestBase): Uint8Array {
    return PullRequestBase.encode(message).finish();
  },
  toProtoMsg(message: PullRequestBase): PullRequestBaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PullRequestBase",
      value: PullRequestBase.encode(message).finish()
    };
  }
};