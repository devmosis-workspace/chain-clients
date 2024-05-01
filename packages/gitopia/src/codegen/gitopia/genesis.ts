import { ExercisedAmount, ExercisedAmountAmino, ExercisedAmountSDKType } from "./exercised_amount";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Bounty, BountyAmino, BountySDKType } from "./bounty";
import { UserDao, UserDaoAmino, UserDaoSDKType, User, UserAmino, UserSDKType } from "./user";
import { BaseRepositoryKey, BaseRepositoryKeyAmino, BaseRepositoryKeySDKType, Repository, RepositoryAmino, RepositorySDKType } from "./repository";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Tag, TagAmino, TagSDKType } from "./tag";
import { Branch, BranchAmino, BranchSDKType } from "./branch";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { Release, ReleaseAmino, ReleaseSDKType } from "./release";
import { PullRequest, PullRequestAmino, PullRequestSDKType } from "./pullRequest";
import { Dao, DaoAmino, DaoSDKType } from "./dao";
import { Comment, CommentAmino, CommentSDKType } from "./comment";
import { Issue, IssueAmino, IssueSDKType } from "./issue";
import { Whois, WhoisAmino, WhoisSDKType } from "./whois";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
/** GenesisState defines the gitopia module's genesis state. */
export interface GenesisState {
  exercisedAmountList: ExercisedAmount[];
  exercisedAmountCount: bigint;
  /** params defines all the paramaters of the module. */
  params: Params;
  bountyList: Bounty[];
  bountyCount: bigint;
  userDaoList: UserDao[];
  baseRepositoryKeyList: BaseRepositoryKey[];
  memberList: Member[];
  memberCount: bigint;
  tagList: Tag[];
  tagCount: bigint;
  branchList: Branch[];
  branchCount: bigint;
  taskList: Task[];
  taskCount: bigint;
  /** this line is used by starport scaffolding # genesis/proto/state */
  releaseList: Release[];
  releaseCount: bigint;
  pullRequestList: PullRequest[];
  pullRequestCount: bigint;
  daoList: Dao[];
  daoCount: bigint;
  commentList: Comment[];
  commentCount: bigint;
  issueList: Issue[];
  issueCount: bigint;
  repositoryList: Repository[];
  repositoryCount: bigint;
  userList: User[];
  userCount: bigint;
  whoisList: Whois[];
  whoisCount: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gitopia module's genesis state. */
export interface GenesisStateAmino {
  exercisedAmountList?: ExercisedAmountAmino[];
  exercisedAmountCount?: string;
  /** params defines all the paramaters of the module. */
  params?: ParamsAmino;
  bountyList?: BountyAmino[];
  bountyCount?: string;
  userDaoList?: UserDaoAmino[];
  baseRepositoryKeyList?: BaseRepositoryKeyAmino[];
  memberList?: MemberAmino[];
  memberCount?: string;
  tagList?: TagAmino[];
  tagCount?: string;
  branchList?: BranchAmino[];
  branchCount?: string;
  taskList?: TaskAmino[];
  taskCount?: string;
  /** this line is used by starport scaffolding # genesis/proto/state */
  releaseList?: ReleaseAmino[];
  releaseCount?: string;
  pullRequestList?: PullRequestAmino[];
  pullRequestCount?: string;
  daoList?: DaoAmino[];
  daoCount?: string;
  commentList?: CommentAmino[];
  commentCount?: string;
  issueList?: IssueAmino[];
  issueCount?: string;
  repositoryList?: RepositoryAmino[];
  repositoryCount?: string;
  userList?: UserAmino[];
  userCount?: string;
  whoisList?: WhoisAmino[];
  whoisCount?: string;
}
export interface GenesisStateAminoMsg {
  type: "/gitopia.gitopia.gitopia.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gitopia module's genesis state. */
export interface GenesisStateSDKType {
  exercisedAmountList: ExercisedAmountSDKType[];
  exercisedAmountCount: bigint;
  params: ParamsSDKType;
  bountyList: BountySDKType[];
  bountyCount: bigint;
  userDaoList: UserDaoSDKType[];
  baseRepositoryKeyList: BaseRepositoryKeySDKType[];
  memberList: MemberSDKType[];
  memberCount: bigint;
  tagList: TagSDKType[];
  tagCount: bigint;
  branchList: BranchSDKType[];
  branchCount: bigint;
  taskList: TaskSDKType[];
  taskCount: bigint;
  releaseList: ReleaseSDKType[];
  releaseCount: bigint;
  pullRequestList: PullRequestSDKType[];
  pullRequestCount: bigint;
  daoList: DaoSDKType[];
  daoCount: bigint;
  commentList: CommentSDKType[];
  commentCount: bigint;
  issueList: IssueSDKType[];
  issueCount: bigint;
  repositoryList: RepositorySDKType[];
  repositoryCount: bigint;
  userList: UserSDKType[];
  userCount: bigint;
  whoisList: WhoisSDKType[];
  whoisCount: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    exercisedAmountList: [],
    exercisedAmountCount: BigInt(0),
    params: Params.fromPartial({}),
    bountyList: [],
    bountyCount: BigInt(0),
    userDaoList: [],
    baseRepositoryKeyList: [],
    memberList: [],
    memberCount: BigInt(0),
    tagList: [],
    tagCount: BigInt(0),
    branchList: [],
    branchCount: BigInt(0),
    taskList: [],
    taskCount: BigInt(0),
    releaseList: [],
    releaseCount: BigInt(0),
    pullRequestList: [],
    pullRequestCount: BigInt(0),
    daoList: [],
    daoCount: BigInt(0),
    commentList: [],
    commentCount: BigInt(0),
    issueList: [],
    issueCount: BigInt(0),
    repositoryList: [],
    repositoryCount: BigInt(0),
    userList: [],
    userCount: BigInt(0),
    whoisList: [],
    whoisCount: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/gitopia.gitopia.gitopia.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.exercisedAmountList) {
      ExercisedAmount.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.exercisedAmountCount !== BigInt(0)) {
      writer.uint32(248).uint64(message.exercisedAmountCount);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(234).fork()).ldelim();
    }
    for (const v of message.bountyList) {
      Bounty.encode(v!, writer.uint32(218).fork()).ldelim();
    }
    if (message.bountyCount !== BigInt(0)) {
      writer.uint32(224).uint64(message.bountyCount);
    }
    for (const v of message.userDaoList) {
      UserDao.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    for (const v of message.baseRepositoryKeyList) {
      BaseRepositoryKey.encode(v!, writer.uint32(210).fork()).ldelim();
    }
    for (const v of message.memberList) {
      Member.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.memberCount !== BigInt(0)) {
      writer.uint32(192).uint64(message.memberCount);
    }
    for (const v of message.tagList) {
      Tag.encode(v!, writer.uint32(170).fork()).ldelim();
    }
    if (message.tagCount !== BigInt(0)) {
      writer.uint32(176).uint64(message.tagCount);
    }
    for (const v of message.branchList) {
      Branch.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    if (message.branchCount !== BigInt(0)) {
      writer.uint32(160).uint64(message.branchCount);
    }
    for (const v of message.taskList) {
      Task.encode(v!, writer.uint32(138).fork()).ldelim();
    }
    if (message.taskCount !== BigInt(0)) {
      writer.uint32(144).uint64(message.taskCount);
    }
    for (const v of message.releaseList) {
      Release.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    if (message.releaseCount !== BigInt(0)) {
      writer.uint32(128).uint64(message.releaseCount);
    }
    for (const v of message.pullRequestList) {
      PullRequest.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.pullRequestCount !== BigInt(0)) {
      writer.uint32(112).uint64(message.pullRequestCount);
    }
    for (const v of message.daoList) {
      Dao.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.daoCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.daoCount);
    }
    for (const v of message.commentList) {
      Comment.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.commentCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.commentCount);
    }
    for (const v of message.issueList) {
      Issue.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.issueCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.issueCount);
    }
    for (const v of message.repositoryList) {
      Repository.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.repositoryCount !== BigInt(0)) {
      writer.uint32(48).uint64(message.repositoryCount);
    }
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.userCount !== BigInt(0)) {
      writer.uint32(32).uint64(message.userCount);
    }
    for (const v of message.whoisList) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.whoisCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.whoisCount);
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      exercisedAmountList: Array.isArray(object?.exercisedAmountList) ? object.exercisedAmountList.map((e: any) => ExercisedAmount.fromJSON(e)) : [],
      exercisedAmountCount: isSet(object.exercisedAmountCount) ? BigInt(object.exercisedAmountCount.toString()) : BigInt(0),
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bountyList: Array.isArray(object?.bountyList) ? object.bountyList.map((e: any) => Bounty.fromJSON(e)) : [],
      bountyCount: isSet(object.bountyCount) ? BigInt(object.bountyCount.toString()) : BigInt(0),
      userDaoList: Array.isArray(object?.userDaoList) ? object.userDaoList.map((e: any) => UserDao.fromJSON(e)) : [],
      baseRepositoryKeyList: Array.isArray(object?.baseRepositoryKeyList) ? object.baseRepositoryKeyList.map((e: any) => BaseRepositoryKey.fromJSON(e)) : [],
      memberList: Array.isArray(object?.memberList) ? object.memberList.map((e: any) => Member.fromJSON(e)) : [],
      memberCount: isSet(object.memberCount) ? BigInt(object.memberCount.toString()) : BigInt(0),
      tagList: Array.isArray(object?.tagList) ? object.tagList.map((e: any) => Tag.fromJSON(e)) : [],
      tagCount: isSet(object.tagCount) ? BigInt(object.tagCount.toString()) : BigInt(0),
      branchList: Array.isArray(object?.branchList) ? object.branchList.map((e: any) => Branch.fromJSON(e)) : [],
      branchCount: isSet(object.branchCount) ? BigInt(object.branchCount.toString()) : BigInt(0),
      taskList: Array.isArray(object?.taskList) ? object.taskList.map((e: any) => Task.fromJSON(e)) : [],
      taskCount: isSet(object.taskCount) ? BigInt(object.taskCount.toString()) : BigInt(0),
      releaseList: Array.isArray(object?.releaseList) ? object.releaseList.map((e: any) => Release.fromJSON(e)) : [],
      releaseCount: isSet(object.releaseCount) ? BigInt(object.releaseCount.toString()) : BigInt(0),
      pullRequestList: Array.isArray(object?.pullRequestList) ? object.pullRequestList.map((e: any) => PullRequest.fromJSON(e)) : [],
      pullRequestCount: isSet(object.pullRequestCount) ? BigInt(object.pullRequestCount.toString()) : BigInt(0),
      daoList: Array.isArray(object?.daoList) ? object.daoList.map((e: any) => Dao.fromJSON(e)) : [],
      daoCount: isSet(object.daoCount) ? BigInt(object.daoCount.toString()) : BigInt(0),
      commentList: Array.isArray(object?.commentList) ? object.commentList.map((e: any) => Comment.fromJSON(e)) : [],
      commentCount: isSet(object.commentCount) ? BigInt(object.commentCount.toString()) : BigInt(0),
      issueList: Array.isArray(object?.issueList) ? object.issueList.map((e: any) => Issue.fromJSON(e)) : [],
      issueCount: isSet(object.issueCount) ? BigInt(object.issueCount.toString()) : BigInt(0),
      repositoryList: Array.isArray(object?.repositoryList) ? object.repositoryList.map((e: any) => Repository.fromJSON(e)) : [],
      repositoryCount: isSet(object.repositoryCount) ? BigInt(object.repositoryCount.toString()) : BigInt(0),
      userList: Array.isArray(object?.userList) ? object.userList.map((e: any) => User.fromJSON(e)) : [],
      userCount: isSet(object.userCount) ? BigInt(object.userCount.toString()) : BigInt(0),
      whoisList: Array.isArray(object?.whoisList) ? object.whoisList.map((e: any) => Whois.fromJSON(e)) : [],
      whoisCount: isSet(object.whoisCount) ? BigInt(object.whoisCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.exercisedAmountList = object.exercisedAmountList?.map(e => ExercisedAmount.fromPartial(e)) || [];
    message.exercisedAmountCount = object.exercisedAmountCount !== undefined && object.exercisedAmountCount !== null ? BigInt(object.exercisedAmountCount.toString()) : BigInt(0);
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bountyList = object.bountyList?.map(e => Bounty.fromPartial(e)) || [];
    message.bountyCount = object.bountyCount !== undefined && object.bountyCount !== null ? BigInt(object.bountyCount.toString()) : BigInt(0);
    message.userDaoList = object.userDaoList?.map(e => UserDao.fromPartial(e)) || [];
    message.baseRepositoryKeyList = object.baseRepositoryKeyList?.map(e => BaseRepositoryKey.fromPartial(e)) || [];
    message.memberList = object.memberList?.map(e => Member.fromPartial(e)) || [];
    message.memberCount = object.memberCount !== undefined && object.memberCount !== null ? BigInt(object.memberCount.toString()) : BigInt(0);
    message.tagList = object.tagList?.map(e => Tag.fromPartial(e)) || [];
    message.tagCount = object.tagCount !== undefined && object.tagCount !== null ? BigInt(object.tagCount.toString()) : BigInt(0);
    message.branchList = object.branchList?.map(e => Branch.fromPartial(e)) || [];
    message.branchCount = object.branchCount !== undefined && object.branchCount !== null ? BigInt(object.branchCount.toString()) : BigInt(0);
    message.taskList = object.taskList?.map(e => Task.fromPartial(e)) || [];
    message.taskCount = object.taskCount !== undefined && object.taskCount !== null ? BigInt(object.taskCount.toString()) : BigInt(0);
    message.releaseList = object.releaseList?.map(e => Release.fromPartial(e)) || [];
    message.releaseCount = object.releaseCount !== undefined && object.releaseCount !== null ? BigInt(object.releaseCount.toString()) : BigInt(0);
    message.pullRequestList = object.pullRequestList?.map(e => PullRequest.fromPartial(e)) || [];
    message.pullRequestCount = object.pullRequestCount !== undefined && object.pullRequestCount !== null ? BigInt(object.pullRequestCount.toString()) : BigInt(0);
    message.daoList = object.daoList?.map(e => Dao.fromPartial(e)) || [];
    message.daoCount = object.daoCount !== undefined && object.daoCount !== null ? BigInt(object.daoCount.toString()) : BigInt(0);
    message.commentList = object.commentList?.map(e => Comment.fromPartial(e)) || [];
    message.commentCount = object.commentCount !== undefined && object.commentCount !== null ? BigInt(object.commentCount.toString()) : BigInt(0);
    message.issueList = object.issueList?.map(e => Issue.fromPartial(e)) || [];
    message.issueCount = object.issueCount !== undefined && object.issueCount !== null ? BigInt(object.issueCount.toString()) : BigInt(0);
    message.repositoryList = object.repositoryList?.map(e => Repository.fromPartial(e)) || [];
    message.repositoryCount = object.repositoryCount !== undefined && object.repositoryCount !== null ? BigInt(object.repositoryCount.toString()) : BigInt(0);
    message.userList = object.userList?.map(e => User.fromPartial(e)) || [];
    message.userCount = object.userCount !== undefined && object.userCount !== null ? BigInt(object.userCount.toString()) : BigInt(0);
    message.whoisList = object.whoisList?.map(e => Whois.fromPartial(e)) || [];
    message.whoisCount = object.whoisCount !== undefined && object.whoisCount !== null ? BigInt(object.whoisCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.exercisedAmountList = object.exercisedAmountList?.map(e => ExercisedAmount.fromAmino(e)) || [];
    if (object.exercisedAmountCount !== undefined && object.exercisedAmountCount !== null) {
      message.exercisedAmountCount = BigInt(object.exercisedAmountCount);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.bountyList = object.bountyList?.map(e => Bounty.fromAmino(e)) || [];
    if (object.bountyCount !== undefined && object.bountyCount !== null) {
      message.bountyCount = BigInt(object.bountyCount);
    }
    message.userDaoList = object.userDaoList?.map(e => UserDao.fromAmino(e)) || [];
    message.baseRepositoryKeyList = object.baseRepositoryKeyList?.map(e => BaseRepositoryKey.fromAmino(e)) || [];
    message.memberList = object.memberList?.map(e => Member.fromAmino(e)) || [];
    if (object.memberCount !== undefined && object.memberCount !== null) {
      message.memberCount = BigInt(object.memberCount);
    }
    message.tagList = object.tagList?.map(e => Tag.fromAmino(e)) || [];
    if (object.tagCount !== undefined && object.tagCount !== null) {
      message.tagCount = BigInt(object.tagCount);
    }
    message.branchList = object.branchList?.map(e => Branch.fromAmino(e)) || [];
    if (object.branchCount !== undefined && object.branchCount !== null) {
      message.branchCount = BigInt(object.branchCount);
    }
    message.taskList = object.taskList?.map(e => Task.fromAmino(e)) || [];
    if (object.taskCount !== undefined && object.taskCount !== null) {
      message.taskCount = BigInt(object.taskCount);
    }
    message.releaseList = object.releaseList?.map(e => Release.fromAmino(e)) || [];
    if (object.releaseCount !== undefined && object.releaseCount !== null) {
      message.releaseCount = BigInt(object.releaseCount);
    }
    message.pullRequestList = object.pullRequestList?.map(e => PullRequest.fromAmino(e)) || [];
    if (object.pullRequestCount !== undefined && object.pullRequestCount !== null) {
      message.pullRequestCount = BigInt(object.pullRequestCount);
    }
    message.daoList = object.daoList?.map(e => Dao.fromAmino(e)) || [];
    if (object.daoCount !== undefined && object.daoCount !== null) {
      message.daoCount = BigInt(object.daoCount);
    }
    message.commentList = object.commentList?.map(e => Comment.fromAmino(e)) || [];
    if (object.commentCount !== undefined && object.commentCount !== null) {
      message.commentCount = BigInt(object.commentCount);
    }
    message.issueList = object.issueList?.map(e => Issue.fromAmino(e)) || [];
    if (object.issueCount !== undefined && object.issueCount !== null) {
      message.issueCount = BigInt(object.issueCount);
    }
    message.repositoryList = object.repositoryList?.map(e => Repository.fromAmino(e)) || [];
    if (object.repositoryCount !== undefined && object.repositoryCount !== null) {
      message.repositoryCount = BigInt(object.repositoryCount);
    }
    message.userList = object.userList?.map(e => User.fromAmino(e)) || [];
    if (object.userCount !== undefined && object.userCount !== null) {
      message.userCount = BigInt(object.userCount);
    }
    message.whoisList = object.whoisList?.map(e => Whois.fromAmino(e)) || [];
    if (object.whoisCount !== undefined && object.whoisCount !== null) {
      message.whoisCount = BigInt(object.whoisCount);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.exercisedAmountList) {
      obj.exercisedAmountList = message.exercisedAmountList.map(e => e ? ExercisedAmount.toAmino(e) : undefined);
    } else {
      obj.exercisedAmountList = message.exercisedAmountList;
    }
    obj.exercisedAmountCount = message.exercisedAmountCount !== BigInt(0) ? message.exercisedAmountCount.toString() : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.bountyList) {
      obj.bountyList = message.bountyList.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.bountyList = message.bountyList;
    }
    obj.bountyCount = message.bountyCount !== BigInt(0) ? message.bountyCount.toString() : undefined;
    if (message.userDaoList) {
      obj.userDaoList = message.userDaoList.map(e => e ? UserDao.toAmino(e) : undefined);
    } else {
      obj.userDaoList = message.userDaoList;
    }
    if (message.baseRepositoryKeyList) {
      obj.baseRepositoryKeyList = message.baseRepositoryKeyList.map(e => e ? BaseRepositoryKey.toAmino(e) : undefined);
    } else {
      obj.baseRepositoryKeyList = message.baseRepositoryKeyList;
    }
    if (message.memberList) {
      obj.memberList = message.memberList.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.memberList = message.memberList;
    }
    obj.memberCount = message.memberCount !== BigInt(0) ? message.memberCount.toString() : undefined;
    if (message.tagList) {
      obj.tagList = message.tagList.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.tagList = message.tagList;
    }
    obj.tagCount = message.tagCount !== BigInt(0) ? message.tagCount.toString() : undefined;
    if (message.branchList) {
      obj.branchList = message.branchList.map(e => e ? Branch.toAmino(e) : undefined);
    } else {
      obj.branchList = message.branchList;
    }
    obj.branchCount = message.branchCount !== BigInt(0) ? message.branchCount.toString() : undefined;
    if (message.taskList) {
      obj.taskList = message.taskList.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.taskList = message.taskList;
    }
    obj.taskCount = message.taskCount !== BigInt(0) ? message.taskCount.toString() : undefined;
    if (message.releaseList) {
      obj.releaseList = message.releaseList.map(e => e ? Release.toAmino(e) : undefined);
    } else {
      obj.releaseList = message.releaseList;
    }
    obj.releaseCount = message.releaseCount !== BigInt(0) ? message.releaseCount.toString() : undefined;
    if (message.pullRequestList) {
      obj.pullRequestList = message.pullRequestList.map(e => e ? PullRequest.toAmino(e) : undefined);
    } else {
      obj.pullRequestList = message.pullRequestList;
    }
    obj.pullRequestCount = message.pullRequestCount !== BigInt(0) ? message.pullRequestCount.toString() : undefined;
    if (message.daoList) {
      obj.daoList = message.daoList.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.daoList = message.daoList;
    }
    obj.daoCount = message.daoCount !== BigInt(0) ? message.daoCount.toString() : undefined;
    if (message.commentList) {
      obj.commentList = message.commentList.map(e => e ? Comment.toAmino(e) : undefined);
    } else {
      obj.commentList = message.commentList;
    }
    obj.commentCount = message.commentCount !== BigInt(0) ? message.commentCount.toString() : undefined;
    if (message.issueList) {
      obj.issueList = message.issueList.map(e => e ? Issue.toAmino(e) : undefined);
    } else {
      obj.issueList = message.issueList;
    }
    obj.issueCount = message.issueCount !== BigInt(0) ? message.issueCount.toString() : undefined;
    if (message.repositoryList) {
      obj.repositoryList = message.repositoryList.map(e => e ? Repository.toAmino(e) : undefined);
    } else {
      obj.repositoryList = message.repositoryList;
    }
    obj.repositoryCount = message.repositoryCount !== BigInt(0) ? message.repositoryCount.toString() : undefined;
    if (message.userList) {
      obj.userList = message.userList.map(e => e ? User.toAmino(e) : undefined);
    } else {
      obj.userList = message.userList;
    }
    obj.userCount = message.userCount !== BigInt(0) ? message.userCount.toString() : undefined;
    if (message.whoisList) {
      obj.whoisList = message.whoisList.map(e => e ? Whois.toAmino(e) : undefined);
    } else {
      obj.whoisList = message.whoisList;
    }
    obj.whoisCount = message.whoisCount !== BigInt(0) ? message.whoisCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};