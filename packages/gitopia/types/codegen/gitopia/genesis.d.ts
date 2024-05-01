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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
