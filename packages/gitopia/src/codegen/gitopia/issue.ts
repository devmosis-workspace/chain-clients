import { PullRequestIid, PullRequestIidAmino, PullRequestIidSDKType } from "./repository";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum Issue_State {
  OPEN = 0,
  CLOSED = 1,
  UNRECOGNIZED = -1,
}
export const Issue_StateSDKType = Issue_State;
export const Issue_StateAmino = Issue_State;
export function issue_StateFromJSON(object: any): Issue_State {
  switch (object) {
    case 0:
    case "OPEN":
      return Issue_State.OPEN;
    case 1:
    case "CLOSED":
      return Issue_State.CLOSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Issue_State.UNRECOGNIZED;
  }
}
export function issue_StateToJSON(object: Issue_State): string {
  switch (object) {
    case Issue_State.OPEN:
      return "OPEN";
    case Issue_State.CLOSED:
      return "CLOSED";
    case Issue_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Issue {
  creator: string;
  id: bigint;
  iid: bigint;
  title: string;
  state: Issue_State;
  description: string;
  commentsCount: bigint;
  pullRequests: PullRequestIid[];
  repositoryId: bigint;
  labels: bigint[];
  weight: bigint;
  assignees: string[];
  bounties: bigint[];
  createdAt: bigint;
  updatedAt: bigint;
  closedAt: bigint;
  closedBy: string;
}
export interface IssueProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Issue";
  value: Uint8Array;
}
export interface IssueAmino {
  creator?: string;
  id?: string;
  iid?: string;
  title?: string;
  state?: Issue_State;
  description?: string;
  commentsCount?: string;
  pullRequests?: PullRequestIidAmino[];
  repositoryId?: string;
  labels?: string[];
  weight?: string;
  assignees?: string[];
  bounties?: string[];
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  closedBy?: string;
}
export interface IssueAminoMsg {
  type: "/gitopia.gitopia.gitopia.Issue";
  value: IssueAmino;
}
export interface IssueSDKType {
  creator: string;
  id: bigint;
  iid: bigint;
  title: string;
  state: Issue_State;
  description: string;
  commentsCount: bigint;
  pullRequests: PullRequestIidSDKType[];
  repositoryId: bigint;
  labels: bigint[];
  weight: bigint;
  assignees: string[];
  bounties: bigint[];
  createdAt: bigint;
  updatedAt: bigint;
  closedAt: bigint;
  closedBy: string;
}
function createBaseIssue(): Issue {
  return {
    creator: "",
    id: BigInt(0),
    iid: BigInt(0),
    title: "",
    state: 0,
    description: "",
    commentsCount: BigInt(0),
    pullRequests: [],
    repositoryId: BigInt(0),
    labels: [],
    weight: BigInt(0),
    assignees: [],
    bounties: [],
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    closedAt: BigInt(0),
    closedBy: ""
  };
}
export const Issue = {
  typeUrl: "/gitopia.gitopia.gitopia.Issue",
  encode(message: Issue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.commentsCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.commentsCount);
    }
    for (const v of message.pullRequests) {
      PullRequestIid.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(72).uint64(message.repositoryId);
    }
    writer.uint32(82).fork();
    for (const v of message.labels) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.weight !== BigInt(0)) {
      writer.uint32(88).uint64(message.weight);
    }
    for (const v of message.assignees) {
      writer.uint32(98).string(v!);
    }
    writer.uint32(106).fork();
    for (const v of message.bounties) {
      writer.uint64(v);
    }
    writer.ldelim();
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
    return writer;
  },
  fromJSON(object: any): Issue {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      title: isSet(object.title) ? String(object.title) : "",
      state: isSet(object.state) ? issue_StateFromJSON(object.state) : -1,
      description: isSet(object.description) ? String(object.description) : "",
      commentsCount: isSet(object.commentsCount) ? BigInt(object.commentsCount.toString()) : BigInt(0),
      pullRequests: Array.isArray(object?.pullRequests) ? object.pullRequests.map((e: any) => PullRequestIid.fromJSON(e)) : [],
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => BigInt(e.toString())) : [],
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : [],
      bounties: Array.isArray(object?.bounties) ? object.bounties.map((e: any) => BigInt(e.toString())) : [],
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      closedAt: isSet(object.closedAt) ? BigInt(object.closedAt.toString()) : BigInt(0),
      closedBy: isSet(object.closedBy) ? String(object.closedBy) : ""
    };
  },
  fromPartial(object: Partial<Issue>): Issue {
    const message = createBaseIssue();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.title = object.title ?? "";
    message.state = object.state ?? 0;
    message.description = object.description ?? "";
    message.commentsCount = object.commentsCount !== undefined && object.commentsCount !== null ? BigInt(object.commentsCount.toString()) : BigInt(0);
    message.pullRequests = object.pullRequests?.map(e => PullRequestIid.fromPartial(e)) || [];
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.labels = object.labels?.map(e => BigInt(e.toString())) || [];
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    message.bounties = object.bounties?.map(e => BigInt(e.toString())) || [];
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.closedAt = object.closedAt !== undefined && object.closedAt !== null ? BigInt(object.closedAt.toString()) : BigInt(0);
    message.closedBy = object.closedBy ?? "";
    return message;
  },
  fromAmino(object: IssueAmino): Issue {
    const message = createBaseIssue();
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
    if (object.commentsCount !== undefined && object.commentsCount !== null) {
      message.commentsCount = BigInt(object.commentsCount);
    }
    message.pullRequests = object.pullRequests?.map(e => PullRequestIid.fromAmino(e)) || [];
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    message.labels = object.labels?.map(e => BigInt(e)) || [];
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    message.bounties = object.bounties?.map(e => BigInt(e)) || [];
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
    return message;
  },
  toAmino(message: Issue): IssueAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.description = message.description === "" ? undefined : message.description;
    obj.commentsCount = message.commentsCount !== BigInt(0) ? message.commentsCount.toString() : undefined;
    if (message.pullRequests) {
      obj.pullRequests = message.pullRequests.map(e => e ? PullRequestIid.toAmino(e) : undefined);
    } else {
      obj.pullRequests = message.pullRequests;
    }
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    if (message.labels) {
      obj.labels = message.labels.map(e => e.toString());
    } else {
      obj.labels = message.labels;
    }
    obj.weight = message.weight !== BigInt(0) ? message.weight.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    if (message.bounties) {
      obj.bounties = message.bounties.map(e => e.toString());
    } else {
      obj.bounties = message.bounties;
    }
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.closedAt = message.closedAt !== BigInt(0) ? message.closedAt.toString() : undefined;
    obj.closedBy = message.closedBy === "" ? undefined : message.closedBy;
    return obj;
  },
  fromAminoMsg(object: IssueAminoMsg): Issue {
    return Issue.fromAmino(object.value);
  },
  fromProtoMsg(message: IssueProtoMsg): Issue {
    return Issue.decode(message.value);
  },
  toProto(message: Issue): Uint8Array {
    return Issue.encode(message).finish();
  },
  toProtoMsg(message: Issue): IssueProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Issue",
      value: Issue.encode(message).finish()
    };
  }
};