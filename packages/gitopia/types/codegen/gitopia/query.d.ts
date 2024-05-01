import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Task, TaskAmino, TaskSDKType } from "./task";
import { Branch, BranchAmino, BranchSDKType } from "./branch";
import { Tag, TagAmino, TagSDKType } from "./tag";
import { Member, MemberAmino, MemberSDKType } from "./member";
import { Bounty, BountyAmino, BountySDKType } from "./bounty";
import { Release, ReleaseAmino, ReleaseSDKType } from "./release";
import { PullRequest, PullRequestAmino, PullRequestSDKType } from "./pullRequest";
import { Dao, DaoAmino, DaoSDKType } from "./dao";
import { Comment, CommentAmino, CommentSDKType } from "./comment";
import { Issue, IssueAmino, IssueSDKType } from "./issue";
import { Repository, RepositoryAmino, RepositorySDKType, RepositoryOwner, RepositoryOwnerAmino, RepositoryOwnerSDKType } from "./repository";
import { User, UserAmino, UserSDKType } from "./user";
import { Whois, WhoisAmino, WhoisSDKType } from "./whois";
import { BinaryWriter } from "../binary";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType;
}
export interface QueryVestedAmountRequest {
    address: string;
}
export interface QueryVestedAmountRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountRequest";
    value: Uint8Array;
}
export interface QueryVestedAmountRequestAmino {
    address?: string;
}
export interface QueryVestedAmountRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryVestedAmountRequest";
    value: QueryVestedAmountRequestAmino;
}
export interface QueryVestedAmountRequestSDKType {
    address: string;
}
export interface QueryVestedAmountResponse {
    address: string;
    amount: Coin;
    exercisedAmount: Coin;
}
export interface QueryVestedAmountResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountResponse";
    value: Uint8Array;
}
export interface QueryVestedAmountResponseAmino {
    address?: string;
    amount?: CoinAmino;
    exercisedAmount?: CoinAmino;
}
export interface QueryVestedAmountResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryVestedAmountResponse";
    value: QueryVestedAmountResponseAmino;
}
export interface QueryVestedAmountResponseSDKType {
    address: string;
    amount: CoinSDKType;
    exercisedAmount: CoinSDKType;
}
export interface QueryCheckStorageProviderAuthorizationRequest {
    userAddress: string;
    providerAddress: string;
}
export interface QueryCheckStorageProviderAuthorizationRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationRequest";
    value: Uint8Array;
}
export interface QueryCheckStorageProviderAuthorizationRequestAmino {
    userAddress?: string;
    providerAddress?: string;
}
export interface QueryCheckStorageProviderAuthorizationRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationRequest";
    value: QueryCheckStorageProviderAuthorizationRequestAmino;
}
export interface QueryCheckStorageProviderAuthorizationRequestSDKType {
    userAddress: string;
    providerAddress: string;
}
export interface QueryCheckStorageProviderAuthorizationResponse {
    haveAuthorization: boolean;
}
export interface QueryCheckStorageProviderAuthorizationResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationResponse";
    value: Uint8Array;
}
export interface QueryCheckStorageProviderAuthorizationResponseAmino {
    haveAuthorization?: boolean;
}
export interface QueryCheckStorageProviderAuthorizationResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationResponse";
    value: QueryCheckStorageProviderAuthorizationResponseAmino;
}
export interface QueryCheckStorageProviderAuthorizationResponseSDKType {
    haveAuthorization: boolean;
}
export interface QueryGetTaskRequest {
    id: bigint;
}
export interface QueryGetTaskRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskRequest";
    value: Uint8Array;
}
export interface QueryGetTaskRequestAmino {
    id?: string;
}
export interface QueryGetTaskRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetTaskRequest";
    value: QueryGetTaskRequestAmino;
}
export interface QueryGetTaskRequestSDKType {
    id: bigint;
}
export interface QueryGetTaskResponse {
    Task: Task;
}
export interface QueryGetTaskResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskResponse";
    value: Uint8Array;
}
export interface QueryGetTaskResponseAmino {
    Task?: TaskAmino;
}
export interface QueryGetTaskResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetTaskResponse";
    value: QueryGetTaskResponseAmino;
}
export interface QueryGetTaskResponseSDKType {
    Task: TaskSDKType;
}
export interface QueryAllTaskRequest {
    pagination?: PageRequest;
}
export interface QueryAllTaskRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskRequest";
    value: Uint8Array;
}
export interface QueryAllTaskRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllTaskRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllTaskRequest";
    value: QueryAllTaskRequestAmino;
}
export interface QueryAllTaskRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllTaskResponse {
    Task: Task[];
    pagination?: PageResponse;
}
export interface QueryAllTaskResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskResponse";
    value: Uint8Array;
}
export interface QueryAllTaskResponseAmino {
    Task?: TaskAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllTaskResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllTaskResponse";
    value: QueryAllTaskResponseAmino;
}
export interface QueryAllTaskResponseSDKType {
    Task: TaskSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryCheckGitServerAuthorizationRequest {
    userAddress: string;
    providerAddress: string;
}
export interface QueryCheckGitServerAuthorizationRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationRequest";
    value: Uint8Array;
}
export interface QueryCheckGitServerAuthorizationRequestAmino {
    userAddress?: string;
    providerAddress?: string;
}
export interface QueryCheckGitServerAuthorizationRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationRequest";
    value: QueryCheckGitServerAuthorizationRequestAmino;
}
export interface QueryCheckGitServerAuthorizationRequestSDKType {
    userAddress: string;
    providerAddress: string;
}
export interface QueryCheckGitServerAuthorizationResponse {
    haveAuthorization: boolean;
}
export interface QueryCheckGitServerAuthorizationResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationResponse";
    value: Uint8Array;
}
export interface QueryCheckGitServerAuthorizationResponseAmino {
    haveAuthorization?: boolean;
}
export interface QueryCheckGitServerAuthorizationResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationResponse";
    value: QueryCheckGitServerAuthorizationResponseAmino;
}
export interface QueryCheckGitServerAuthorizationResponseSDKType {
    haveAuthorization: boolean;
}
export interface QueryAllBranchRequest {
    pagination?: PageRequest;
}
export interface QueryAllBranchRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchRequest";
    value: Uint8Array;
}
export interface QueryAllBranchRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllBranchRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllBranchRequest";
    value: QueryAllBranchRequestAmino;
}
export interface QueryAllBranchRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllBranchResponse {
    Branch: Branch[];
    pagination?: PageResponse;
}
export interface QueryAllBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchResponse";
    value: Uint8Array;
}
export interface QueryAllBranchResponseAmino {
    Branch?: BranchAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllBranchResponse";
    value: QueryAllBranchResponseAmino;
}
export interface QueryAllBranchResponseSDKType {
    Branch: BranchSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetRepositoryBranchRequest {
    id: string;
    repositoryName: string;
    branchName: string;
}
export interface QueryGetRepositoryBranchRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryBranchRequestAmino {
    id?: string;
    repositoryName?: string;
    branchName?: string;
}
export interface QueryGetRepositoryBranchRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchRequest";
    value: QueryGetRepositoryBranchRequestAmino;
}
export interface QueryGetRepositoryBranchRequestSDKType {
    id: string;
    repositoryName: string;
    branchName: string;
}
export interface QueryGetRepositoryBranchResponse {
    Branch: Branch;
}
export interface QueryGetRepositoryBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryBranchResponseAmino {
    Branch?: BranchAmino;
}
export interface QueryGetRepositoryBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchResponse";
    value: QueryGetRepositoryBranchResponseAmino;
}
export interface QueryGetRepositoryBranchResponseSDKType {
    Branch: BranchSDKType;
}
export interface QueryGetRepositoryBranchShaRequest {
    id: string;
    repositoryName: string;
    branchName: string;
}
export interface QueryGetRepositoryBranchShaRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryBranchShaRequestAmino {
    id?: string;
    repositoryName?: string;
    branchName?: string;
}
export interface QueryGetRepositoryBranchShaRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaRequest";
    value: QueryGetRepositoryBranchShaRequestAmino;
}
export interface QueryGetRepositoryBranchShaRequestSDKType {
    id: string;
    repositoryName: string;
    branchName: string;
}
export interface QueryGetRepositoryBranchShaResponse {
    sha: string;
}
export interface QueryGetRepositoryBranchShaResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryBranchShaResponseAmino {
    sha?: string;
}
export interface QueryGetRepositoryBranchShaResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaResponse";
    value: QueryGetRepositoryBranchShaResponseAmino;
}
export interface QueryGetRepositoryBranchShaResponseSDKType {
    sha: string;
}
export interface QueryAllRepositoryBranchRequest {
    id: string;
    repositoryName: string;
    pagination?: PageRequest;
}
export interface QueryAllRepositoryBranchRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryBranchRequestAmino {
    id?: string;
    repositoryName?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryBranchRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchRequest";
    value: QueryAllRepositoryBranchRequestAmino;
}
export interface QueryAllRepositoryBranchRequestSDKType {
    id: string;
    repositoryName: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllRepositoryBranchResponse {
    Branch: Branch[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryBranchResponseAmino {
    Branch?: BranchAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchResponse";
    value: QueryAllRepositoryBranchResponseAmino;
}
export interface QueryAllRepositoryBranchResponseSDKType {
    Branch: BranchSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllTagRequest {
    pagination?: PageRequest;
}
export interface QueryAllTagRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagRequest";
    value: Uint8Array;
}
export interface QueryAllTagRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllTagRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllTagRequest";
    value: QueryAllTagRequestAmino;
}
export interface QueryAllTagRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllTagResponse {
    Tag: Tag[];
    pagination?: PageResponse;
}
export interface QueryAllTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagResponse";
    value: Uint8Array;
}
export interface QueryAllTagResponseAmino {
    Tag?: TagAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllTagResponse";
    value: QueryAllTagResponseAmino;
}
export interface QueryAllTagResponseSDKType {
    Tag: TagSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetRepositoryTagRequest {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryTagRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryTagRequestAmino {
    id?: string;
    repositoryName?: string;
    tagName?: string;
}
export interface QueryGetRepositoryTagRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagRequest";
    value: QueryGetRepositoryTagRequestAmino;
}
export interface QueryGetRepositoryTagRequestSDKType {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryTagResponse {
    Tag: Tag;
}
export interface QueryGetRepositoryTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryTagResponseAmino {
    Tag?: TagAmino;
}
export interface QueryGetRepositoryTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagResponse";
    value: QueryGetRepositoryTagResponseAmino;
}
export interface QueryGetRepositoryTagResponseSDKType {
    Tag: TagSDKType;
}
export interface QueryGetRepositoryTagShaRequest {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryTagShaRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryTagShaRequestAmino {
    id?: string;
    repositoryName?: string;
    tagName?: string;
}
export interface QueryGetRepositoryTagShaRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaRequest";
    value: QueryGetRepositoryTagShaRequestAmino;
}
export interface QueryGetRepositoryTagShaRequestSDKType {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryTagShaResponse {
    sha: string;
}
export interface QueryGetRepositoryTagShaResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryTagShaResponseAmino {
    sha?: string;
}
export interface QueryGetRepositoryTagShaResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaResponse";
    value: QueryGetRepositoryTagShaResponseAmino;
}
export interface QueryGetRepositoryTagShaResponseSDKType {
    sha: string;
}
export interface QueryAllRepositoryTagRequest {
    id: string;
    repositoryName: string;
    pagination?: PageRequest;
}
export interface QueryAllRepositoryTagRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryTagRequestAmino {
    id?: string;
    repositoryName?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryTagRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagRequest";
    value: QueryAllRepositoryTagRequestAmino;
}
export interface QueryAllRepositoryTagRequestSDKType {
    id: string;
    repositoryName: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllRepositoryTagResponse {
    Tag: Tag[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryTagResponseAmino {
    Tag?: TagAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagResponse";
    value: QueryAllRepositoryTagResponseAmino;
}
export interface QueryAllRepositoryTagResponseSDKType {
    Tag: TagSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetDaoMemberRequest {
    daoId: string;
    userId: string;
}
export interface QueryGetDaoMemberRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberRequest";
    value: Uint8Array;
}
export interface QueryGetDaoMemberRequestAmino {
    daoId?: string;
    userId?: string;
}
export interface QueryGetDaoMemberRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetDaoMemberRequest";
    value: QueryGetDaoMemberRequestAmino;
}
export interface QueryGetDaoMemberRequestSDKType {
    daoId: string;
    userId: string;
}
export interface QueryGetDaoMemberResponse {
    Member: Member;
}
export interface QueryGetDaoMemberResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberResponse";
    value: Uint8Array;
}
export interface QueryGetDaoMemberResponseAmino {
    Member?: MemberAmino;
}
export interface QueryGetDaoMemberResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetDaoMemberResponse";
    value: QueryGetDaoMemberResponseAmino;
}
export interface QueryGetDaoMemberResponseSDKType {
    Member: MemberSDKType;
}
export interface QueryAllDaoMemberRequest {
    daoId: string;
    pagination?: PageRequest;
}
export interface QueryAllDaoMemberRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberRequest";
    value: Uint8Array;
}
export interface QueryAllDaoMemberRequestAmino {
    daoId?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllDaoMemberRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllDaoMemberRequest";
    value: QueryAllDaoMemberRequestAmino;
}
export interface QueryAllDaoMemberRequestSDKType {
    daoId: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllDaoMemberResponse {
    Member: Member[];
    pagination?: PageResponse;
}
export interface QueryAllDaoMemberResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberResponse";
    value: Uint8Array;
}
export interface QueryAllDaoMemberResponseAmino {
    Member?: MemberAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllDaoMemberResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllDaoMemberResponse";
    value: QueryAllDaoMemberResponseAmino;
}
export interface QueryAllDaoMemberResponseSDKType {
    Member: MemberSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllMemberRequest {
    pagination?: PageRequest;
}
export interface QueryAllMemberRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberRequest";
    value: Uint8Array;
}
export interface QueryAllMemberRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllMemberRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllMemberRequest";
    value: QueryAllMemberRequestAmino;
}
export interface QueryAllMemberRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllMemberResponse {
    Member: Member[];
    pagination?: PageResponse;
}
export interface QueryAllMemberResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberResponse";
    value: Uint8Array;
}
export interface QueryAllMemberResponseAmino {
    Member?: MemberAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllMemberResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllMemberResponse";
    value: QueryAllMemberResponseAmino;
}
export interface QueryAllMemberResponseSDKType {
    Member: MemberSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetBountyRequest {
    id: bigint;
}
export interface QueryGetBountyRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyRequest";
    value: Uint8Array;
}
export interface QueryGetBountyRequestAmino {
    id?: string;
}
export interface QueryGetBountyRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetBountyRequest";
    value: QueryGetBountyRequestAmino;
}
export interface QueryGetBountyRequestSDKType {
    id: bigint;
}
export interface QueryGetBountyResponse {
    Bounty: Bounty;
}
export interface QueryGetBountyResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyResponse";
    value: Uint8Array;
}
export interface QueryGetBountyResponseAmino {
    Bounty?: BountyAmino;
}
export interface QueryGetBountyResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetBountyResponse";
    value: QueryGetBountyResponseAmino;
}
export interface QueryGetBountyResponseSDKType {
    Bounty: BountySDKType;
}
export interface QueryAllBountyRequest {
    pagination?: PageRequest;
}
export interface QueryAllBountyRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyRequest";
    value: Uint8Array;
}
export interface QueryAllBountyRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllBountyRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllBountyRequest";
    value: QueryAllBountyRequestAmino;
}
export interface QueryAllBountyRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllBountyResponse {
    Bounty: Bounty[];
    pagination?: PageResponse;
}
export interface QueryAllBountyResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyResponse";
    value: Uint8Array;
}
export interface QueryAllBountyResponseAmino {
    Bounty?: BountyAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllBountyResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllBountyResponse";
    value: QueryAllBountyResponseAmino;
}
export interface QueryAllBountyResponseSDKType {
    Bounty: BountySDKType[];
    pagination?: PageResponseSDKType;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetPullRequestMergePermissionRequest {
    userId: string;
    repositoryId: bigint;
    pullIid: bigint;
}
export interface QueryGetPullRequestMergePermissionRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionRequest";
    value: Uint8Array;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetPullRequestMergePermissionRequestAmino {
    userId?: string;
    repositoryId?: string;
    pullIid?: string;
}
export interface QueryGetPullRequestMergePermissionRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionRequest";
    value: QueryGetPullRequestMergePermissionRequestAmino;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetPullRequestMergePermissionRequestSDKType {
    userId: string;
    repositoryId: bigint;
    pullIid: bigint;
}
export interface QueryGetPullRequestMergePermissionResponse {
    havePermission: boolean;
}
export interface QueryGetPullRequestMergePermissionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionResponse";
    value: Uint8Array;
}
export interface QueryGetPullRequestMergePermissionResponseAmino {
    havePermission?: boolean;
}
export interface QueryGetPullRequestMergePermissionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionResponse";
    value: QueryGetPullRequestMergePermissionResponseAmino;
}
export interface QueryGetPullRequestMergePermissionResponseSDKType {
    havePermission: boolean;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetReleaseRequest {
    id: bigint;
}
export interface QueryGetReleaseRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseRequest";
    value: Uint8Array;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetReleaseRequestAmino {
    id?: string;
}
export interface QueryGetReleaseRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetReleaseRequest";
    value: QueryGetReleaseRequestAmino;
}
/** this line is used by starport scaffolding # 3 */
export interface QueryGetReleaseRequestSDKType {
    id: bigint;
}
export interface QueryGetReleaseResponse {
    Release?: Release;
}
export interface QueryGetReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseResponse";
    value: Uint8Array;
}
export interface QueryGetReleaseResponseAmino {
    Release?: ReleaseAmino;
}
export interface QueryGetReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetReleaseResponse";
    value: QueryGetReleaseResponseAmino;
}
export interface QueryGetReleaseResponseSDKType {
    Release?: ReleaseSDKType;
}
export interface QueryAllReleaseRequest {
    pagination?: PageRequest;
}
export interface QueryAllReleaseRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseRequest";
    value: Uint8Array;
}
export interface QueryAllReleaseRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllReleaseRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllReleaseRequest";
    value: QueryAllReleaseRequestAmino;
}
export interface QueryAllReleaseRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllReleaseResponse {
    Release: Release[];
    pagination?: PageResponse;
}
export interface QueryAllReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseResponse";
    value: Uint8Array;
}
export interface QueryAllReleaseResponseAmino {
    Release?: ReleaseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllReleaseResponse";
    value: QueryAllReleaseResponseAmino;
}
export interface QueryAllReleaseResponseSDKType {
    Release: ReleaseSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetPullRequestRequest {
    id: bigint;
}
export interface QueryGetPullRequestRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestRequest";
    value: Uint8Array;
}
export interface QueryGetPullRequestRequestAmino {
    id?: string;
}
export interface QueryGetPullRequestRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestRequest";
    value: QueryGetPullRequestRequestAmino;
}
export interface QueryGetPullRequestRequestSDKType {
    id: bigint;
}
export interface QueryGetPullRequestResponse {
    PullRequest?: PullRequest;
}
export interface QueryGetPullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestResponse";
    value: Uint8Array;
}
export interface QueryGetPullRequestResponseAmino {
    PullRequest?: PullRequestAmino;
}
export interface QueryGetPullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestResponse";
    value: QueryGetPullRequestResponseAmino;
}
export interface QueryGetPullRequestResponseSDKType {
    PullRequest?: PullRequestSDKType;
}
export interface QueryAllPullRequestRequest {
    pagination?: PageRequest;
}
export interface QueryAllPullRequestRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestRequest";
    value: Uint8Array;
}
export interface QueryAllPullRequestRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllPullRequestRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllPullRequestRequest";
    value: QueryAllPullRequestRequestAmino;
}
export interface QueryAllPullRequestRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllPullRequestResponse {
    PullRequest: PullRequest[];
    pagination?: PageResponse;
}
export interface QueryAllPullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestResponse";
    value: Uint8Array;
}
export interface QueryAllPullRequestResponseAmino {
    PullRequest?: PullRequestAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllPullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllPullRequestResponse";
    value: QueryAllPullRequestResponseAmino;
}
export interface QueryAllPullRequestResponseSDKType {
    PullRequest: PullRequestSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetDaoRequest {
    id: string;
}
export interface QueryGetDaoRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoRequest";
    value: Uint8Array;
}
export interface QueryGetDaoRequestAmino {
    id?: string;
}
export interface QueryGetDaoRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetDaoRequest";
    value: QueryGetDaoRequestAmino;
}
export interface QueryGetDaoRequestSDKType {
    id: string;
}
export interface QueryGetDaoResponse {
    dao?: Dao;
}
export interface QueryGetDaoResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoResponse";
    value: Uint8Array;
}
export interface QueryGetDaoResponseAmino {
    dao?: DaoAmino;
}
export interface QueryGetDaoResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetDaoResponse";
    value: QueryGetDaoResponseAmino;
}
export interface QueryGetDaoResponseSDKType {
    dao?: DaoSDKType;
}
export interface QueryAllDaoRequest {
    pagination?: PageRequest;
}
export interface QueryAllDaoRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoRequest";
    value: Uint8Array;
}
export interface QueryAllDaoRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllDaoRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllDaoRequest";
    value: QueryAllDaoRequestAmino;
}
export interface QueryAllDaoRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllDaoResponse {
    dao: Dao[];
    pagination?: PageResponse;
}
export interface QueryAllDaoResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoResponse";
    value: Uint8Array;
}
export interface QueryAllDaoResponseAmino {
    dao?: DaoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllDaoResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllDaoResponse";
    value: QueryAllDaoResponseAmino;
}
export interface QueryAllDaoResponseSDKType {
    dao: DaoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetIssueCommentRequest {
    repositoryId: bigint;
    issueIid: bigint;
    commentIid: bigint;
}
export interface QueryGetIssueCommentRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentRequest";
    value: Uint8Array;
}
export interface QueryGetIssueCommentRequestAmino {
    repositoryId?: string;
    issueIid?: string;
    commentIid?: string;
}
export interface QueryGetIssueCommentRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetIssueCommentRequest";
    value: QueryGetIssueCommentRequestAmino;
}
export interface QueryGetIssueCommentRequestSDKType {
    repositoryId: bigint;
    issueIid: bigint;
    commentIid: bigint;
}
export interface QueryGetIssueCommentResponse {
    Comment?: Comment;
}
export interface QueryGetIssueCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentResponse";
    value: Uint8Array;
}
export interface QueryGetIssueCommentResponseAmino {
    Comment?: CommentAmino;
}
export interface QueryGetIssueCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetIssueCommentResponse";
    value: QueryGetIssueCommentResponseAmino;
}
export interface QueryGetIssueCommentResponseSDKType {
    Comment?: CommentSDKType;
}
export interface QueryGetPullRequestCommentRequest {
    repositoryId: bigint;
    pullRequestIid: bigint;
    commentIid: bigint;
}
export interface QueryGetPullRequestCommentRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentRequest";
    value: Uint8Array;
}
export interface QueryGetPullRequestCommentRequestAmino {
    repositoryId?: string;
    pullRequestIid?: string;
    commentIid?: string;
}
export interface QueryGetPullRequestCommentRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentRequest";
    value: QueryGetPullRequestCommentRequestAmino;
}
export interface QueryGetPullRequestCommentRequestSDKType {
    repositoryId: bigint;
    pullRequestIid: bigint;
    commentIid: bigint;
}
export interface QueryGetPullRequestCommentResponse {
    Comment?: Comment;
}
export interface QueryGetPullRequestCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentResponse";
    value: Uint8Array;
}
export interface QueryGetPullRequestCommentResponseAmino {
    Comment?: CommentAmino;
}
export interface QueryGetPullRequestCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentResponse";
    value: QueryGetPullRequestCommentResponseAmino;
}
export interface QueryGetPullRequestCommentResponseSDKType {
    Comment?: CommentSDKType;
}
export interface QueryAllCommentRequest {
    pagination?: PageRequest;
}
export interface QueryAllCommentRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentRequest";
    value: Uint8Array;
}
export interface QueryAllCommentRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllCommentRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllCommentRequest";
    value: QueryAllCommentRequestAmino;
}
export interface QueryAllCommentRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllCommentResponse {
    Comment: Comment[];
    pagination?: PageResponse;
}
export interface QueryAllCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentResponse";
    value: Uint8Array;
}
export interface QueryAllCommentResponseAmino {
    Comment?: CommentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllCommentResponse";
    value: QueryAllCommentResponseAmino;
}
export interface QueryAllCommentResponseSDKType {
    Comment: CommentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllIssueCommentRequest {
    repositoryId: bigint;
    issueIid: bigint;
    pagination?: PageRequest;
}
export interface QueryAllIssueCommentRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentRequest";
    value: Uint8Array;
}
export interface QueryAllIssueCommentRequestAmino {
    repositoryId?: string;
    issueIid?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllIssueCommentRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllIssueCommentRequest";
    value: QueryAllIssueCommentRequestAmino;
}
export interface QueryAllIssueCommentRequestSDKType {
    repositoryId: bigint;
    issueIid: bigint;
    pagination?: PageRequestSDKType;
}
export interface QueryAllIssueCommentResponse {
    Comment: Comment[];
    pagination?: PageResponse;
}
export interface QueryAllIssueCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentResponse";
    value: Uint8Array;
}
export interface QueryAllIssueCommentResponseAmino {
    Comment?: CommentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllIssueCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllIssueCommentResponse";
    value: QueryAllIssueCommentResponseAmino;
}
export interface QueryAllIssueCommentResponseSDKType {
    Comment: CommentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllPullRequestCommentRequest {
    repositoryId: bigint;
    pullRequestIid: bigint;
    pagination?: PageRequest;
}
export interface QueryAllPullRequestCommentRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentRequest";
    value: Uint8Array;
}
export interface QueryAllPullRequestCommentRequestAmino {
    repositoryId?: string;
    pullRequestIid?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllPullRequestCommentRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentRequest";
    value: QueryAllPullRequestCommentRequestAmino;
}
export interface QueryAllPullRequestCommentRequestSDKType {
    repositoryId: bigint;
    pullRequestIid: bigint;
    pagination?: PageRequestSDKType;
}
export interface QueryAllPullRequestCommentResponse {
    Comment: Comment[];
    pagination?: PageResponse;
}
export interface QueryAllPullRequestCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentResponse";
    value: Uint8Array;
}
export interface QueryAllPullRequestCommentResponseAmino {
    Comment?: CommentAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllPullRequestCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentResponse";
    value: QueryAllPullRequestCommentResponseAmino;
}
export interface QueryAllPullRequestCommentResponseSDKType {
    Comment: CommentSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllIssueRequest {
    pagination?: PageRequest;
}
export interface QueryAllIssueRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueRequest";
    value: Uint8Array;
}
export interface QueryAllIssueRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllIssueRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllIssueRequest";
    value: QueryAllIssueRequestAmino;
}
export interface QueryAllIssueRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllIssueResponse {
    Issue: Issue[];
    pagination?: PageResponse;
}
export interface QueryAllIssueResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueResponse";
    value: Uint8Array;
}
export interface QueryAllIssueResponseAmino {
    Issue?: IssueAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllIssueResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllIssueResponse";
    value: QueryAllIssueResponseAmino;
}
export interface QueryAllIssueResponseSDKType {
    Issue: IssueSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetLatestRepositoryReleaseRequest {
    id: string;
    repositoryName: string;
}
export interface QueryGetLatestRepositoryReleaseRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseRequest";
    value: Uint8Array;
}
export interface QueryGetLatestRepositoryReleaseRequestAmino {
    id?: string;
    repositoryName?: string;
}
export interface QueryGetLatestRepositoryReleaseRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseRequest";
    value: QueryGetLatestRepositoryReleaseRequestAmino;
}
export interface QueryGetLatestRepositoryReleaseRequestSDKType {
    id: string;
    repositoryName: string;
}
export interface QueryGetLatestRepositoryReleaseResponse {
    Release?: Release;
}
export interface QueryGetLatestRepositoryReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseResponse";
    value: Uint8Array;
}
export interface QueryGetLatestRepositoryReleaseResponseAmino {
    Release?: ReleaseAmino;
}
export interface QueryGetLatestRepositoryReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseResponse";
    value: QueryGetLatestRepositoryReleaseResponseAmino;
}
export interface QueryGetLatestRepositoryReleaseResponseSDKType {
    Release?: ReleaseSDKType;
}
export interface QueryGetRepositoryReleaseRequest {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryReleaseRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryReleaseRequestAmino {
    id?: string;
    repositoryName?: string;
    tagName?: string;
}
export interface QueryGetRepositoryReleaseRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseRequest";
    value: QueryGetRepositoryReleaseRequestAmino;
}
export interface QueryGetRepositoryReleaseRequestSDKType {
    id: string;
    repositoryName: string;
    tagName: string;
}
export interface QueryGetRepositoryReleaseResponse {
    Release?: Release;
}
export interface QueryGetRepositoryReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryReleaseResponseAmino {
    Release?: ReleaseAmino;
}
export interface QueryGetRepositoryReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseResponse";
    value: QueryGetRepositoryReleaseResponseAmino;
}
export interface QueryGetRepositoryReleaseResponseSDKType {
    Release?: ReleaseSDKType;
}
export interface QueryAllRepositoryReleaseRequest {
    id: string;
    repositoryName: string;
    pagination?: PageRequest;
}
export interface QueryAllRepositoryReleaseRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryReleaseRequestAmino {
    id?: string;
    repositoryName?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryReleaseRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseRequest";
    value: QueryAllRepositoryReleaseRequestAmino;
}
export interface QueryAllRepositoryReleaseRequestSDKType {
    id: string;
    repositoryName: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllRepositoryReleaseResponse {
    Release: Release[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryReleaseResponseAmino {
    Release?: ReleaseAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseResponse";
    value: QueryAllRepositoryReleaseResponseAmino;
}
export interface QueryAllRepositoryReleaseResponseSDKType {
    Release: ReleaseSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetRepositoryIssueRequest {
    id: string;
    repositoryName: string;
    issueIid: bigint;
}
export interface QueryGetRepositoryIssueRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryIssueRequestAmino {
    id?: string;
    repositoryName?: string;
    issueIid?: string;
}
export interface QueryGetRepositoryIssueRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueRequest";
    value: QueryGetRepositoryIssueRequestAmino;
}
export interface QueryGetRepositoryIssueRequestSDKType {
    id: string;
    repositoryName: string;
    issueIid: bigint;
}
export interface QueryGetRepositoryIssueResponse {
    Issue?: Issue;
}
export interface QueryGetRepositoryIssueResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryIssueResponseAmino {
    Issue?: IssueAmino;
}
export interface QueryGetRepositoryIssueResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueResponse";
    value: QueryGetRepositoryIssueResponseAmino;
}
export interface QueryGetRepositoryIssueResponseSDKType {
    Issue?: IssueSDKType;
}
export interface QueryGetRepositoryPullRequestRequest {
    id: string;
    repositoryName: string;
    pullIid: bigint;
}
export interface QueryGetRepositoryPullRequestRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryPullRequestRequestAmino {
    id?: string;
    repositoryName?: string;
    pullIid?: string;
}
export interface QueryGetRepositoryPullRequestRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestRequest";
    value: QueryGetRepositoryPullRequestRequestAmino;
}
export interface QueryGetRepositoryPullRequestRequestSDKType {
    id: string;
    repositoryName: string;
    pullIid: bigint;
}
export interface QueryGetRepositoryPullRequestResponse {
    PullRequest?: PullRequest;
}
export interface QueryGetRepositoryPullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryPullRequestResponseAmino {
    PullRequest?: PullRequestAmino;
}
export interface QueryGetRepositoryPullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestResponse";
    value: QueryGetRepositoryPullRequestResponseAmino;
}
export interface QueryGetRepositoryPullRequestResponseSDKType {
    PullRequest?: PullRequestSDKType;
}
export interface QueryAllRepositoryIssueRequest {
    id: string;
    repositoryName: string;
    option?: IssueOptions;
    pagination?: PageRequest;
}
export interface QueryAllRepositoryIssueRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryIssueRequestAmino {
    id?: string;
    repositoryName?: string;
    option?: IssueOptionsAmino;
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryIssueRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueRequest";
    value: QueryAllRepositoryIssueRequestAmino;
}
export interface QueryAllRepositoryIssueRequestSDKType {
    id: string;
    repositoryName: string;
    option?: IssueOptionsSDKType;
    pagination?: PageRequestSDKType;
}
export interface IssueOptions {
    createdBy: string;
    state: string;
    labels: string;
    assignee: string;
    labelIds: bigint[];
    sort: string;
    search: string;
    updatedAfter: bigint;
    updatedBefore: bigint;
}
export interface IssueOptionsProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.IssueOptions";
    value: Uint8Array;
}
export interface IssueOptionsAmino {
    createdBy?: string;
    state?: string;
    labels?: string;
    assignee?: string;
    labelIds?: string[];
    sort?: string;
    search?: string;
    updatedAfter?: string;
    updatedBefore?: string;
}
export interface IssueOptionsAminoMsg {
    type: "/gitopia.gitopia.gitopia.IssueOptions";
    value: IssueOptionsAmino;
}
export interface IssueOptionsSDKType {
    createdBy: string;
    state: string;
    labels: string;
    assignee: string;
    labelIds: bigint[];
    sort: string;
    search: string;
    updatedAfter: bigint;
    updatedBefore: bigint;
}
export interface QueryAllRepositoryIssueResponse {
    Issue: Issue[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryIssueResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryIssueResponseAmino {
    Issue?: IssueAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryIssueResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueResponse";
    value: QueryAllRepositoryIssueResponseAmino;
}
export interface QueryAllRepositoryIssueResponseSDKType {
    Issue: IssueSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllRepositoryPullRequestRequest {
    id: string;
    repositoryName: string;
    option?: PullRequestOptions;
    pagination?: PageRequest;
}
export interface QueryAllRepositoryPullRequestRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryPullRequestRequestAmino {
    id?: string;
    repositoryName?: string;
    option?: PullRequestOptionsAmino;
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryPullRequestRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestRequest";
    value: QueryAllRepositoryPullRequestRequestAmino;
}
export interface QueryAllRepositoryPullRequestRequestSDKType {
    id: string;
    repositoryName: string;
    option?: PullRequestOptionsSDKType;
    pagination?: PageRequestSDKType;
}
export interface PullRequestOptions {
    createdBy: string;
    state: string;
    labels: string;
    assignee: string;
    reviewer: string;
    labelIds: bigint[];
    sort: string;
    search: string;
    updatedAfter: bigint;
    updatedBefore: bigint;
}
export interface PullRequestOptionsProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PullRequestOptions";
    value: Uint8Array;
}
export interface PullRequestOptionsAmino {
    createdBy?: string;
    state?: string;
    labels?: string;
    assignee?: string;
    reviewer?: string;
    labelIds?: string[];
    sort?: string;
    search?: string;
    updatedAfter?: string;
    updatedBefore?: string;
}
export interface PullRequestOptionsAminoMsg {
    type: "/gitopia.gitopia.gitopia.PullRequestOptions";
    value: PullRequestOptionsAmino;
}
export interface PullRequestOptionsSDKType {
    createdBy: string;
    state: string;
    labels: string;
    assignee: string;
    reviewer: string;
    labelIds: bigint[];
    sort: string;
    search: string;
    updatedAfter: bigint;
    updatedBefore: bigint;
}
export interface QueryAllRepositoryPullRequestResponse {
    PullRequest: PullRequest[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryPullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryPullRequestResponseAmino {
    PullRequest?: PullRequestAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryPullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestResponse";
    value: QueryAllRepositoryPullRequestResponseAmino;
}
export interface QueryAllRepositoryPullRequestResponseSDKType {
    PullRequest: PullRequestSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetRepositoryRequest {
    id: bigint;
}
export interface QueryGetRepositoryRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryRequest";
    value: Uint8Array;
}
export interface QueryGetRepositoryRequestAmino {
    id?: string;
}
export interface QueryGetRepositoryRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryRequest";
    value: QueryGetRepositoryRequestAmino;
}
export interface QueryGetRepositoryRequestSDKType {
    id: bigint;
}
export interface QueryGetRepositoryResponse {
    Repository?: Repository;
}
export interface QueryGetRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryResponse";
    value: Uint8Array;
}
export interface QueryGetRepositoryResponseAmino {
    Repository?: RepositoryAmino;
}
export interface QueryGetRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetRepositoryResponse";
    value: QueryGetRepositoryResponseAmino;
}
export interface QueryGetRepositoryResponseSDKType {
    Repository?: RepositorySDKType;
}
export interface RepositoryFork {
    creator: string;
    id: bigint;
    name: string;
    owner?: RepositoryOwner;
    description: string;
    parent: bigint;
    forksCount: bigint;
    issuesCount: bigint;
    pullsCount: bigint;
}
export interface RepositoryForkProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryFork";
    value: Uint8Array;
}
export interface RepositoryForkAmino {
    creator?: string;
    id?: string;
    name?: string;
    owner?: RepositoryOwnerAmino;
    description?: string;
    parent?: string;
    forksCount?: string;
    issuesCount?: string;
    pullsCount?: string;
}
export interface RepositoryForkAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryFork";
    value: RepositoryForkAmino;
}
export interface RepositoryForkSDKType {
    creator: string;
    id: bigint;
    name: string;
    owner?: RepositoryOwnerSDKType;
    description: string;
    parent: bigint;
    forksCount: bigint;
    issuesCount: bigint;
    pullsCount: bigint;
}
export interface QueryGetAllForkRequest {
    id: string;
    repositoryName: string;
    pagination?: PageRequest;
}
export interface QueryGetAllForkRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkRequest";
    value: Uint8Array;
}
export interface QueryGetAllForkRequestAmino {
    id?: string;
    repositoryName?: string;
    pagination?: PageRequestAmino;
}
export interface QueryGetAllForkRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetAllForkRequest";
    value: QueryGetAllForkRequestAmino;
}
export interface QueryGetAllForkRequestSDKType {
    id: string;
    repositoryName: string;
    pagination?: PageRequestSDKType;
}
export interface QueryGetAllForkResponse {
    forks: RepositoryFork[];
    pagination?: PageResponse;
}
export interface QueryGetAllForkResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkResponse";
    value: Uint8Array;
}
export interface QueryGetAllForkResponseAmino {
    forks?: RepositoryForkAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryGetAllForkResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetAllForkResponse";
    value: QueryGetAllForkResponseAmino;
}
export interface QueryGetAllForkResponseSDKType {
    forks: RepositoryForkSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllRepositoryRequest {
    pagination?: PageRequest;
}
export interface QueryAllRepositoryRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryRequest";
    value: Uint8Array;
}
export interface QueryAllRepositoryRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllRepositoryRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryRequest";
    value: QueryAllRepositoryRequestAmino;
}
export interface QueryAllRepositoryRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllRepositoryResponse {
    Repository: Repository[];
    pagination?: PageResponse;
}
export interface QueryAllRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryResponse";
    value: Uint8Array;
}
export interface QueryAllRepositoryResponseAmino {
    Repository?: RepositoryAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllRepositoryResponse";
    value: QueryAllRepositoryResponseAmino;
}
export interface QueryAllRepositoryResponseSDKType {
    Repository: RepositorySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetUserRequest {
    id: string;
}
export interface QueryGetUserRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserRequest";
    value: Uint8Array;
}
export interface QueryGetUserRequestAmino {
    id?: string;
}
export interface QueryGetUserRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetUserRequest";
    value: QueryGetUserRequestAmino;
}
export interface QueryGetUserRequestSDKType {
    id: string;
}
export interface QueryGetUserResponse {
    User?: User;
}
export interface QueryGetUserResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserResponse";
    value: Uint8Array;
}
export interface QueryGetUserResponseAmino {
    User?: UserAmino;
}
export interface QueryGetUserResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetUserResponse";
    value: QueryGetUserResponseAmino;
}
export interface QueryGetUserResponseSDKType {
    User?: UserSDKType;
}
export interface QueryAllUserDaoRequest {
    userId: string;
    pagination?: PageRequest;
}
export interface QueryAllUserDaoRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoRequest";
    value: Uint8Array;
}
export interface QueryAllUserDaoRequestAmino {
    userId?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllUserDaoRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllUserDaoRequest";
    value: QueryAllUserDaoRequestAmino;
}
export interface QueryAllUserDaoRequestSDKType {
    userId: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserDaoResponse {
    dao: Dao[];
    pagination?: PageResponse;
}
export interface QueryAllUserDaoResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoResponse";
    value: Uint8Array;
}
export interface QueryAllUserDaoResponseAmino {
    dao?: DaoAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllUserDaoResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllUserDaoResponse";
    value: QueryAllUserDaoResponseAmino;
}
export interface QueryAllUserDaoResponseSDKType {
    dao: DaoSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllUserRequest {
    pagination?: PageRequest;
}
export interface QueryAllUserRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserRequest";
    value: Uint8Array;
}
export interface QueryAllUserRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllUserRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllUserRequest";
    value: QueryAllUserRequestAmino;
}
export interface QueryAllUserRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllUserResponse {
    User: User[];
    pagination?: PageResponse;
}
export interface QueryAllUserResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserResponse";
    value: Uint8Array;
}
export interface QueryAllUserResponseAmino {
    User?: UserAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllUserResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllUserResponse";
    value: QueryAllUserResponseAmino;
}
export interface QueryAllUserResponseSDKType {
    User: UserSDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryAllAnyRepositoryRequest {
    id: string;
    pagination?: PageRequest;
}
export interface QueryAllAnyRepositoryRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryRequest";
    value: Uint8Array;
}
export interface QueryAllAnyRepositoryRequestAmino {
    id?: string;
    pagination?: PageRequestAmino;
}
export interface QueryAllAnyRepositoryRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryRequest";
    value: QueryAllAnyRepositoryRequestAmino;
}
export interface QueryAllAnyRepositoryRequestSDKType {
    id: string;
    pagination?: PageRequestSDKType;
}
export interface QueryAllAnyRepositoryResponse {
    Repository: Repository[];
    pagination?: PageResponse;
}
export interface QueryAllAnyRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryResponse";
    value: Uint8Array;
}
export interface QueryAllAnyRepositoryResponseAmino {
    Repository?: RepositoryAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllAnyRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryResponse";
    value: QueryAllAnyRepositoryResponseAmino;
}
export interface QueryAllAnyRepositoryResponseSDKType {
    Repository: RepositorySDKType[];
    pagination?: PageResponseSDKType;
}
export interface QueryGetAnyRepositoryRequest {
    id: string;
    repositoryName: string;
}
export interface QueryGetAnyRepositoryRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryRequest";
    value: Uint8Array;
}
export interface QueryGetAnyRepositoryRequestAmino {
    id?: string;
    repositoryName?: string;
}
export interface QueryGetAnyRepositoryRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryRequest";
    value: QueryGetAnyRepositoryRequestAmino;
}
export interface QueryGetAnyRepositoryRequestSDKType {
    id: string;
    repositoryName: string;
}
export interface QueryGetAnyRepositoryResponse {
    Repository?: Repository;
}
export interface QueryGetAnyRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryResponse";
    value: Uint8Array;
}
export interface QueryGetAnyRepositoryResponseAmino {
    Repository?: RepositoryAmino;
}
export interface QueryGetAnyRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryResponse";
    value: QueryGetAnyRepositoryResponseAmino;
}
export interface QueryGetAnyRepositoryResponseSDKType {
    Repository?: RepositorySDKType;
}
export interface QueryGetWhoisRequest {
    name: string;
}
export interface QueryGetWhoisRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisRequest";
    value: Uint8Array;
}
export interface QueryGetWhoisRequestAmino {
    name?: string;
}
export interface QueryGetWhoisRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetWhoisRequest";
    value: QueryGetWhoisRequestAmino;
}
export interface QueryGetWhoisRequestSDKType {
    name: string;
}
export interface QueryGetWhoisResponse {
    Whois?: Whois;
}
export interface QueryGetWhoisResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisResponse";
    value: Uint8Array;
}
export interface QueryGetWhoisResponseAmino {
    Whois?: WhoisAmino;
}
export interface QueryGetWhoisResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryGetWhoisResponse";
    value: QueryGetWhoisResponseAmino;
}
export interface QueryGetWhoisResponseSDKType {
    Whois?: WhoisSDKType;
}
export interface QueryAllWhoisRequest {
    pagination?: PageRequest;
}
export interface QueryAllWhoisRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisRequest";
    value: Uint8Array;
}
export interface QueryAllWhoisRequestAmino {
    pagination?: PageRequestAmino;
}
export interface QueryAllWhoisRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllWhoisRequest";
    value: QueryAllWhoisRequestAmino;
}
export interface QueryAllWhoisRequestSDKType {
    pagination?: PageRequestSDKType;
}
export interface QueryAllWhoisResponse {
    Whois: Whois[];
    pagination?: PageResponse;
}
export interface QueryAllWhoisResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisResponse";
    value: Uint8Array;
}
export interface QueryAllWhoisResponseAmino {
    Whois?: WhoisAmino[];
    pagination?: PageResponseAmino;
}
export interface QueryAllWhoisResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.QueryAllWhoisResponse";
    value: QueryAllWhoisResponseAmino;
}
export interface QueryAllWhoisResponseSDKType {
    Whois: WhoisSDKType[];
    pagination?: PageResponseSDKType;
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryVestedAmountRequest: {
    typeUrl: string;
    encode(message: QueryVestedAmountRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestedAmountRequest;
    fromPartial(object: Partial<QueryVestedAmountRequest>): QueryVestedAmountRequest;
    fromAmino(object: QueryVestedAmountRequestAmino): QueryVestedAmountRequest;
    toAmino(message: QueryVestedAmountRequest): QueryVestedAmountRequestAmino;
    fromAminoMsg(object: QueryVestedAmountRequestAminoMsg): QueryVestedAmountRequest;
    fromProtoMsg(message: QueryVestedAmountRequestProtoMsg): QueryVestedAmountRequest;
    toProto(message: QueryVestedAmountRequest): Uint8Array;
    toProtoMsg(message: QueryVestedAmountRequest): QueryVestedAmountRequestProtoMsg;
};
export declare const QueryVestedAmountResponse: {
    typeUrl: string;
    encode(message: QueryVestedAmountResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryVestedAmountResponse;
    fromPartial(object: Partial<QueryVestedAmountResponse>): QueryVestedAmountResponse;
    fromAmino(object: QueryVestedAmountResponseAmino): QueryVestedAmountResponse;
    toAmino(message: QueryVestedAmountResponse): QueryVestedAmountResponseAmino;
    fromAminoMsg(object: QueryVestedAmountResponseAminoMsg): QueryVestedAmountResponse;
    fromProtoMsg(message: QueryVestedAmountResponseProtoMsg): QueryVestedAmountResponse;
    toProto(message: QueryVestedAmountResponse): Uint8Array;
    toProtoMsg(message: QueryVestedAmountResponse): QueryVestedAmountResponseProtoMsg;
};
export declare const QueryCheckStorageProviderAuthorizationRequest: {
    typeUrl: string;
    encode(message: QueryCheckStorageProviderAuthorizationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCheckStorageProviderAuthorizationRequest;
    fromPartial(object: Partial<QueryCheckStorageProviderAuthorizationRequest>): QueryCheckStorageProviderAuthorizationRequest;
    fromAmino(object: QueryCheckStorageProviderAuthorizationRequestAmino): QueryCheckStorageProviderAuthorizationRequest;
    toAmino(message: QueryCheckStorageProviderAuthorizationRequest): QueryCheckStorageProviderAuthorizationRequestAmino;
    fromAminoMsg(object: QueryCheckStorageProviderAuthorizationRequestAminoMsg): QueryCheckStorageProviderAuthorizationRequest;
    fromProtoMsg(message: QueryCheckStorageProviderAuthorizationRequestProtoMsg): QueryCheckStorageProviderAuthorizationRequest;
    toProto(message: QueryCheckStorageProviderAuthorizationRequest): Uint8Array;
    toProtoMsg(message: QueryCheckStorageProviderAuthorizationRequest): QueryCheckStorageProviderAuthorizationRequestProtoMsg;
};
export declare const QueryCheckStorageProviderAuthorizationResponse: {
    typeUrl: string;
    encode(message: QueryCheckStorageProviderAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCheckStorageProviderAuthorizationResponse;
    fromPartial(object: Partial<QueryCheckStorageProviderAuthorizationResponse>): QueryCheckStorageProviderAuthorizationResponse;
    fromAmino(object: QueryCheckStorageProviderAuthorizationResponseAmino): QueryCheckStorageProviderAuthorizationResponse;
    toAmino(message: QueryCheckStorageProviderAuthorizationResponse): QueryCheckStorageProviderAuthorizationResponseAmino;
    fromAminoMsg(object: QueryCheckStorageProviderAuthorizationResponseAminoMsg): QueryCheckStorageProviderAuthorizationResponse;
    fromProtoMsg(message: QueryCheckStorageProviderAuthorizationResponseProtoMsg): QueryCheckStorageProviderAuthorizationResponse;
    toProto(message: QueryCheckStorageProviderAuthorizationResponse): Uint8Array;
    toProtoMsg(message: QueryCheckStorageProviderAuthorizationResponse): QueryCheckStorageProviderAuthorizationResponseProtoMsg;
};
export declare const QueryGetTaskRequest: {
    typeUrl: string;
    encode(message: QueryGetTaskRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetTaskRequest;
    fromPartial(object: Partial<QueryGetTaskRequest>): QueryGetTaskRequest;
    fromAmino(object: QueryGetTaskRequestAmino): QueryGetTaskRequest;
    toAmino(message: QueryGetTaskRequest): QueryGetTaskRequestAmino;
    fromAminoMsg(object: QueryGetTaskRequestAminoMsg): QueryGetTaskRequest;
    fromProtoMsg(message: QueryGetTaskRequestProtoMsg): QueryGetTaskRequest;
    toProto(message: QueryGetTaskRequest): Uint8Array;
    toProtoMsg(message: QueryGetTaskRequest): QueryGetTaskRequestProtoMsg;
};
export declare const QueryGetTaskResponse: {
    typeUrl: string;
    encode(message: QueryGetTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetTaskResponse;
    fromPartial(object: Partial<QueryGetTaskResponse>): QueryGetTaskResponse;
    fromAmino(object: QueryGetTaskResponseAmino): QueryGetTaskResponse;
    toAmino(message: QueryGetTaskResponse): QueryGetTaskResponseAmino;
    fromAminoMsg(object: QueryGetTaskResponseAminoMsg): QueryGetTaskResponse;
    fromProtoMsg(message: QueryGetTaskResponseProtoMsg): QueryGetTaskResponse;
    toProto(message: QueryGetTaskResponse): Uint8Array;
    toProtoMsg(message: QueryGetTaskResponse): QueryGetTaskResponseProtoMsg;
};
export declare const QueryAllTaskRequest: {
    typeUrl: string;
    encode(message: QueryAllTaskRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTaskRequest;
    fromPartial(object: Partial<QueryAllTaskRequest>): QueryAllTaskRequest;
    fromAmino(object: QueryAllTaskRequestAmino): QueryAllTaskRequest;
    toAmino(message: QueryAllTaskRequest): QueryAllTaskRequestAmino;
    fromAminoMsg(object: QueryAllTaskRequestAminoMsg): QueryAllTaskRequest;
    fromProtoMsg(message: QueryAllTaskRequestProtoMsg): QueryAllTaskRequest;
    toProto(message: QueryAllTaskRequest): Uint8Array;
    toProtoMsg(message: QueryAllTaskRequest): QueryAllTaskRequestProtoMsg;
};
export declare const QueryAllTaskResponse: {
    typeUrl: string;
    encode(message: QueryAllTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTaskResponse;
    fromPartial(object: Partial<QueryAllTaskResponse>): QueryAllTaskResponse;
    fromAmino(object: QueryAllTaskResponseAmino): QueryAllTaskResponse;
    toAmino(message: QueryAllTaskResponse): QueryAllTaskResponseAmino;
    fromAminoMsg(object: QueryAllTaskResponseAminoMsg): QueryAllTaskResponse;
    fromProtoMsg(message: QueryAllTaskResponseProtoMsg): QueryAllTaskResponse;
    toProto(message: QueryAllTaskResponse): Uint8Array;
    toProtoMsg(message: QueryAllTaskResponse): QueryAllTaskResponseProtoMsg;
};
export declare const QueryCheckGitServerAuthorizationRequest: {
    typeUrl: string;
    encode(message: QueryCheckGitServerAuthorizationRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCheckGitServerAuthorizationRequest;
    fromPartial(object: Partial<QueryCheckGitServerAuthorizationRequest>): QueryCheckGitServerAuthorizationRequest;
    fromAmino(object: QueryCheckGitServerAuthorizationRequestAmino): QueryCheckGitServerAuthorizationRequest;
    toAmino(message: QueryCheckGitServerAuthorizationRequest): QueryCheckGitServerAuthorizationRequestAmino;
    fromAminoMsg(object: QueryCheckGitServerAuthorizationRequestAminoMsg): QueryCheckGitServerAuthorizationRequest;
    fromProtoMsg(message: QueryCheckGitServerAuthorizationRequestProtoMsg): QueryCheckGitServerAuthorizationRequest;
    toProto(message: QueryCheckGitServerAuthorizationRequest): Uint8Array;
    toProtoMsg(message: QueryCheckGitServerAuthorizationRequest): QueryCheckGitServerAuthorizationRequestProtoMsg;
};
export declare const QueryCheckGitServerAuthorizationResponse: {
    typeUrl: string;
    encode(message: QueryCheckGitServerAuthorizationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryCheckGitServerAuthorizationResponse;
    fromPartial(object: Partial<QueryCheckGitServerAuthorizationResponse>): QueryCheckGitServerAuthorizationResponse;
    fromAmino(object: QueryCheckGitServerAuthorizationResponseAmino): QueryCheckGitServerAuthorizationResponse;
    toAmino(message: QueryCheckGitServerAuthorizationResponse): QueryCheckGitServerAuthorizationResponseAmino;
    fromAminoMsg(object: QueryCheckGitServerAuthorizationResponseAminoMsg): QueryCheckGitServerAuthorizationResponse;
    fromProtoMsg(message: QueryCheckGitServerAuthorizationResponseProtoMsg): QueryCheckGitServerAuthorizationResponse;
    toProto(message: QueryCheckGitServerAuthorizationResponse): Uint8Array;
    toProtoMsg(message: QueryCheckGitServerAuthorizationResponse): QueryCheckGitServerAuthorizationResponseProtoMsg;
};
export declare const QueryAllBranchRequest: {
    typeUrl: string;
    encode(message: QueryAllBranchRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBranchRequest;
    fromPartial(object: Partial<QueryAllBranchRequest>): QueryAllBranchRequest;
    fromAmino(object: QueryAllBranchRequestAmino): QueryAllBranchRequest;
    toAmino(message: QueryAllBranchRequest): QueryAllBranchRequestAmino;
    fromAminoMsg(object: QueryAllBranchRequestAminoMsg): QueryAllBranchRequest;
    fromProtoMsg(message: QueryAllBranchRequestProtoMsg): QueryAllBranchRequest;
    toProto(message: QueryAllBranchRequest): Uint8Array;
    toProtoMsg(message: QueryAllBranchRequest): QueryAllBranchRequestProtoMsg;
};
export declare const QueryAllBranchResponse: {
    typeUrl: string;
    encode(message: QueryAllBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBranchResponse;
    fromPartial(object: Partial<QueryAllBranchResponse>): QueryAllBranchResponse;
    fromAmino(object: QueryAllBranchResponseAmino): QueryAllBranchResponse;
    toAmino(message: QueryAllBranchResponse): QueryAllBranchResponseAmino;
    fromAminoMsg(object: QueryAllBranchResponseAminoMsg): QueryAllBranchResponse;
    fromProtoMsg(message: QueryAllBranchResponseProtoMsg): QueryAllBranchResponse;
    toProto(message: QueryAllBranchResponse): Uint8Array;
    toProtoMsg(message: QueryAllBranchResponse): QueryAllBranchResponseProtoMsg;
};
export declare const QueryGetRepositoryBranchRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryBranchRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryBranchRequest;
    fromPartial(object: Partial<QueryGetRepositoryBranchRequest>): QueryGetRepositoryBranchRequest;
    fromAmino(object: QueryGetRepositoryBranchRequestAmino): QueryGetRepositoryBranchRequest;
    toAmino(message: QueryGetRepositoryBranchRequest): QueryGetRepositoryBranchRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryBranchRequestAminoMsg): QueryGetRepositoryBranchRequest;
    fromProtoMsg(message: QueryGetRepositoryBranchRequestProtoMsg): QueryGetRepositoryBranchRequest;
    toProto(message: QueryGetRepositoryBranchRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryBranchRequest): QueryGetRepositoryBranchRequestProtoMsg;
};
export declare const QueryGetRepositoryBranchResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryBranchResponse;
    fromPartial(object: Partial<QueryGetRepositoryBranchResponse>): QueryGetRepositoryBranchResponse;
    fromAmino(object: QueryGetRepositoryBranchResponseAmino): QueryGetRepositoryBranchResponse;
    toAmino(message: QueryGetRepositoryBranchResponse): QueryGetRepositoryBranchResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryBranchResponseAminoMsg): QueryGetRepositoryBranchResponse;
    fromProtoMsg(message: QueryGetRepositoryBranchResponseProtoMsg): QueryGetRepositoryBranchResponse;
    toProto(message: QueryGetRepositoryBranchResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryBranchResponse): QueryGetRepositoryBranchResponseProtoMsg;
};
export declare const QueryGetRepositoryBranchShaRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryBranchShaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryBranchShaRequest;
    fromPartial(object: Partial<QueryGetRepositoryBranchShaRequest>): QueryGetRepositoryBranchShaRequest;
    fromAmino(object: QueryGetRepositoryBranchShaRequestAmino): QueryGetRepositoryBranchShaRequest;
    toAmino(message: QueryGetRepositoryBranchShaRequest): QueryGetRepositoryBranchShaRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryBranchShaRequestAminoMsg): QueryGetRepositoryBranchShaRequest;
    fromProtoMsg(message: QueryGetRepositoryBranchShaRequestProtoMsg): QueryGetRepositoryBranchShaRequest;
    toProto(message: QueryGetRepositoryBranchShaRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryBranchShaRequest): QueryGetRepositoryBranchShaRequestProtoMsg;
};
export declare const QueryGetRepositoryBranchShaResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryBranchShaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryBranchShaResponse;
    fromPartial(object: Partial<QueryGetRepositoryBranchShaResponse>): QueryGetRepositoryBranchShaResponse;
    fromAmino(object: QueryGetRepositoryBranchShaResponseAmino): QueryGetRepositoryBranchShaResponse;
    toAmino(message: QueryGetRepositoryBranchShaResponse): QueryGetRepositoryBranchShaResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryBranchShaResponseAminoMsg): QueryGetRepositoryBranchShaResponse;
    fromProtoMsg(message: QueryGetRepositoryBranchShaResponseProtoMsg): QueryGetRepositoryBranchShaResponse;
    toProto(message: QueryGetRepositoryBranchShaResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryBranchShaResponse): QueryGetRepositoryBranchShaResponseProtoMsg;
};
export declare const QueryAllRepositoryBranchRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryBranchRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryBranchRequest;
    fromPartial(object: Partial<QueryAllRepositoryBranchRequest>): QueryAllRepositoryBranchRequest;
    fromAmino(object: QueryAllRepositoryBranchRequestAmino): QueryAllRepositoryBranchRequest;
    toAmino(message: QueryAllRepositoryBranchRequest): QueryAllRepositoryBranchRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryBranchRequestAminoMsg): QueryAllRepositoryBranchRequest;
    fromProtoMsg(message: QueryAllRepositoryBranchRequestProtoMsg): QueryAllRepositoryBranchRequest;
    toProto(message: QueryAllRepositoryBranchRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryBranchRequest): QueryAllRepositoryBranchRequestProtoMsg;
};
export declare const QueryAllRepositoryBranchResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryBranchResponse;
    fromPartial(object: Partial<QueryAllRepositoryBranchResponse>): QueryAllRepositoryBranchResponse;
    fromAmino(object: QueryAllRepositoryBranchResponseAmino): QueryAllRepositoryBranchResponse;
    toAmino(message: QueryAllRepositoryBranchResponse): QueryAllRepositoryBranchResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryBranchResponseAminoMsg): QueryAllRepositoryBranchResponse;
    fromProtoMsg(message: QueryAllRepositoryBranchResponseProtoMsg): QueryAllRepositoryBranchResponse;
    toProto(message: QueryAllRepositoryBranchResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryBranchResponse): QueryAllRepositoryBranchResponseProtoMsg;
};
export declare const QueryAllTagRequest: {
    typeUrl: string;
    encode(message: QueryAllTagRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTagRequest;
    fromPartial(object: Partial<QueryAllTagRequest>): QueryAllTagRequest;
    fromAmino(object: QueryAllTagRequestAmino): QueryAllTagRequest;
    toAmino(message: QueryAllTagRequest): QueryAllTagRequestAmino;
    fromAminoMsg(object: QueryAllTagRequestAminoMsg): QueryAllTagRequest;
    fromProtoMsg(message: QueryAllTagRequestProtoMsg): QueryAllTagRequest;
    toProto(message: QueryAllTagRequest): Uint8Array;
    toProtoMsg(message: QueryAllTagRequest): QueryAllTagRequestProtoMsg;
};
export declare const QueryAllTagResponse: {
    typeUrl: string;
    encode(message: QueryAllTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllTagResponse;
    fromPartial(object: Partial<QueryAllTagResponse>): QueryAllTagResponse;
    fromAmino(object: QueryAllTagResponseAmino): QueryAllTagResponse;
    toAmino(message: QueryAllTagResponse): QueryAllTagResponseAmino;
    fromAminoMsg(object: QueryAllTagResponseAminoMsg): QueryAllTagResponse;
    fromProtoMsg(message: QueryAllTagResponseProtoMsg): QueryAllTagResponse;
    toProto(message: QueryAllTagResponse): Uint8Array;
    toProtoMsg(message: QueryAllTagResponse): QueryAllTagResponseProtoMsg;
};
export declare const QueryGetRepositoryTagRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryTagRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryTagRequest;
    fromPartial(object: Partial<QueryGetRepositoryTagRequest>): QueryGetRepositoryTagRequest;
    fromAmino(object: QueryGetRepositoryTagRequestAmino): QueryGetRepositoryTagRequest;
    toAmino(message: QueryGetRepositoryTagRequest): QueryGetRepositoryTagRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryTagRequestAminoMsg): QueryGetRepositoryTagRequest;
    fromProtoMsg(message: QueryGetRepositoryTagRequestProtoMsg): QueryGetRepositoryTagRequest;
    toProto(message: QueryGetRepositoryTagRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryTagRequest): QueryGetRepositoryTagRequestProtoMsg;
};
export declare const QueryGetRepositoryTagResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryTagResponse;
    fromPartial(object: Partial<QueryGetRepositoryTagResponse>): QueryGetRepositoryTagResponse;
    fromAmino(object: QueryGetRepositoryTagResponseAmino): QueryGetRepositoryTagResponse;
    toAmino(message: QueryGetRepositoryTagResponse): QueryGetRepositoryTagResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryTagResponseAminoMsg): QueryGetRepositoryTagResponse;
    fromProtoMsg(message: QueryGetRepositoryTagResponseProtoMsg): QueryGetRepositoryTagResponse;
    toProto(message: QueryGetRepositoryTagResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryTagResponse): QueryGetRepositoryTagResponseProtoMsg;
};
export declare const QueryGetRepositoryTagShaRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryTagShaRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryTagShaRequest;
    fromPartial(object: Partial<QueryGetRepositoryTagShaRequest>): QueryGetRepositoryTagShaRequest;
    fromAmino(object: QueryGetRepositoryTagShaRequestAmino): QueryGetRepositoryTagShaRequest;
    toAmino(message: QueryGetRepositoryTagShaRequest): QueryGetRepositoryTagShaRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryTagShaRequestAminoMsg): QueryGetRepositoryTagShaRequest;
    fromProtoMsg(message: QueryGetRepositoryTagShaRequestProtoMsg): QueryGetRepositoryTagShaRequest;
    toProto(message: QueryGetRepositoryTagShaRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryTagShaRequest): QueryGetRepositoryTagShaRequestProtoMsg;
};
export declare const QueryGetRepositoryTagShaResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryTagShaResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryTagShaResponse;
    fromPartial(object: Partial<QueryGetRepositoryTagShaResponse>): QueryGetRepositoryTagShaResponse;
    fromAmino(object: QueryGetRepositoryTagShaResponseAmino): QueryGetRepositoryTagShaResponse;
    toAmino(message: QueryGetRepositoryTagShaResponse): QueryGetRepositoryTagShaResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryTagShaResponseAminoMsg): QueryGetRepositoryTagShaResponse;
    fromProtoMsg(message: QueryGetRepositoryTagShaResponseProtoMsg): QueryGetRepositoryTagShaResponse;
    toProto(message: QueryGetRepositoryTagShaResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryTagShaResponse): QueryGetRepositoryTagShaResponseProtoMsg;
};
export declare const QueryAllRepositoryTagRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryTagRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryTagRequest;
    fromPartial(object: Partial<QueryAllRepositoryTagRequest>): QueryAllRepositoryTagRequest;
    fromAmino(object: QueryAllRepositoryTagRequestAmino): QueryAllRepositoryTagRequest;
    toAmino(message: QueryAllRepositoryTagRequest): QueryAllRepositoryTagRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryTagRequestAminoMsg): QueryAllRepositoryTagRequest;
    fromProtoMsg(message: QueryAllRepositoryTagRequestProtoMsg): QueryAllRepositoryTagRequest;
    toProto(message: QueryAllRepositoryTagRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryTagRequest): QueryAllRepositoryTagRequestProtoMsg;
};
export declare const QueryAllRepositoryTagResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryTagResponse;
    fromPartial(object: Partial<QueryAllRepositoryTagResponse>): QueryAllRepositoryTagResponse;
    fromAmino(object: QueryAllRepositoryTagResponseAmino): QueryAllRepositoryTagResponse;
    toAmino(message: QueryAllRepositoryTagResponse): QueryAllRepositoryTagResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryTagResponseAminoMsg): QueryAllRepositoryTagResponse;
    fromProtoMsg(message: QueryAllRepositoryTagResponseProtoMsg): QueryAllRepositoryTagResponse;
    toProto(message: QueryAllRepositoryTagResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryTagResponse): QueryAllRepositoryTagResponseProtoMsg;
};
export declare const QueryGetDaoMemberRequest: {
    typeUrl: string;
    encode(message: QueryGetDaoMemberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetDaoMemberRequest;
    fromPartial(object: Partial<QueryGetDaoMemberRequest>): QueryGetDaoMemberRequest;
    fromAmino(object: QueryGetDaoMemberRequestAmino): QueryGetDaoMemberRequest;
    toAmino(message: QueryGetDaoMemberRequest): QueryGetDaoMemberRequestAmino;
    fromAminoMsg(object: QueryGetDaoMemberRequestAminoMsg): QueryGetDaoMemberRequest;
    fromProtoMsg(message: QueryGetDaoMemberRequestProtoMsg): QueryGetDaoMemberRequest;
    toProto(message: QueryGetDaoMemberRequest): Uint8Array;
    toProtoMsg(message: QueryGetDaoMemberRequest): QueryGetDaoMemberRequestProtoMsg;
};
export declare const QueryGetDaoMemberResponse: {
    typeUrl: string;
    encode(message: QueryGetDaoMemberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetDaoMemberResponse;
    fromPartial(object: Partial<QueryGetDaoMemberResponse>): QueryGetDaoMemberResponse;
    fromAmino(object: QueryGetDaoMemberResponseAmino): QueryGetDaoMemberResponse;
    toAmino(message: QueryGetDaoMemberResponse): QueryGetDaoMemberResponseAmino;
    fromAminoMsg(object: QueryGetDaoMemberResponseAminoMsg): QueryGetDaoMemberResponse;
    fromProtoMsg(message: QueryGetDaoMemberResponseProtoMsg): QueryGetDaoMemberResponse;
    toProto(message: QueryGetDaoMemberResponse): Uint8Array;
    toProtoMsg(message: QueryGetDaoMemberResponse): QueryGetDaoMemberResponseProtoMsg;
};
export declare const QueryAllDaoMemberRequest: {
    typeUrl: string;
    encode(message: QueryAllDaoMemberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllDaoMemberRequest;
    fromPartial(object: Partial<QueryAllDaoMemberRequest>): QueryAllDaoMemberRequest;
    fromAmino(object: QueryAllDaoMemberRequestAmino): QueryAllDaoMemberRequest;
    toAmino(message: QueryAllDaoMemberRequest): QueryAllDaoMemberRequestAmino;
    fromAminoMsg(object: QueryAllDaoMemberRequestAminoMsg): QueryAllDaoMemberRequest;
    fromProtoMsg(message: QueryAllDaoMemberRequestProtoMsg): QueryAllDaoMemberRequest;
    toProto(message: QueryAllDaoMemberRequest): Uint8Array;
    toProtoMsg(message: QueryAllDaoMemberRequest): QueryAllDaoMemberRequestProtoMsg;
};
export declare const QueryAllDaoMemberResponse: {
    typeUrl: string;
    encode(message: QueryAllDaoMemberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllDaoMemberResponse;
    fromPartial(object: Partial<QueryAllDaoMemberResponse>): QueryAllDaoMemberResponse;
    fromAmino(object: QueryAllDaoMemberResponseAmino): QueryAllDaoMemberResponse;
    toAmino(message: QueryAllDaoMemberResponse): QueryAllDaoMemberResponseAmino;
    fromAminoMsg(object: QueryAllDaoMemberResponseAminoMsg): QueryAllDaoMemberResponse;
    fromProtoMsg(message: QueryAllDaoMemberResponseProtoMsg): QueryAllDaoMemberResponse;
    toProto(message: QueryAllDaoMemberResponse): Uint8Array;
    toProtoMsg(message: QueryAllDaoMemberResponse): QueryAllDaoMemberResponseProtoMsg;
};
export declare const QueryAllMemberRequest: {
    typeUrl: string;
    encode(message: QueryAllMemberRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMemberRequest;
    fromPartial(object: Partial<QueryAllMemberRequest>): QueryAllMemberRequest;
    fromAmino(object: QueryAllMemberRequestAmino): QueryAllMemberRequest;
    toAmino(message: QueryAllMemberRequest): QueryAllMemberRequestAmino;
    fromAminoMsg(object: QueryAllMemberRequestAminoMsg): QueryAllMemberRequest;
    fromProtoMsg(message: QueryAllMemberRequestProtoMsg): QueryAllMemberRequest;
    toProto(message: QueryAllMemberRequest): Uint8Array;
    toProtoMsg(message: QueryAllMemberRequest): QueryAllMemberRequestProtoMsg;
};
export declare const QueryAllMemberResponse: {
    typeUrl: string;
    encode(message: QueryAllMemberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllMemberResponse;
    fromPartial(object: Partial<QueryAllMemberResponse>): QueryAllMemberResponse;
    fromAmino(object: QueryAllMemberResponseAmino): QueryAllMemberResponse;
    toAmino(message: QueryAllMemberResponse): QueryAllMemberResponseAmino;
    fromAminoMsg(object: QueryAllMemberResponseAminoMsg): QueryAllMemberResponse;
    fromProtoMsg(message: QueryAllMemberResponseProtoMsg): QueryAllMemberResponse;
    toProto(message: QueryAllMemberResponse): Uint8Array;
    toProtoMsg(message: QueryAllMemberResponse): QueryAllMemberResponseProtoMsg;
};
export declare const QueryGetBountyRequest: {
    typeUrl: string;
    encode(message: QueryGetBountyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetBountyRequest;
    fromPartial(object: Partial<QueryGetBountyRequest>): QueryGetBountyRequest;
    fromAmino(object: QueryGetBountyRequestAmino): QueryGetBountyRequest;
    toAmino(message: QueryGetBountyRequest): QueryGetBountyRequestAmino;
    fromAminoMsg(object: QueryGetBountyRequestAminoMsg): QueryGetBountyRequest;
    fromProtoMsg(message: QueryGetBountyRequestProtoMsg): QueryGetBountyRequest;
    toProto(message: QueryGetBountyRequest): Uint8Array;
    toProtoMsg(message: QueryGetBountyRequest): QueryGetBountyRequestProtoMsg;
};
export declare const QueryGetBountyResponse: {
    typeUrl: string;
    encode(message: QueryGetBountyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetBountyResponse;
    fromPartial(object: Partial<QueryGetBountyResponse>): QueryGetBountyResponse;
    fromAmino(object: QueryGetBountyResponseAmino): QueryGetBountyResponse;
    toAmino(message: QueryGetBountyResponse): QueryGetBountyResponseAmino;
    fromAminoMsg(object: QueryGetBountyResponseAminoMsg): QueryGetBountyResponse;
    fromProtoMsg(message: QueryGetBountyResponseProtoMsg): QueryGetBountyResponse;
    toProto(message: QueryGetBountyResponse): Uint8Array;
    toProtoMsg(message: QueryGetBountyResponse): QueryGetBountyResponseProtoMsg;
};
export declare const QueryAllBountyRequest: {
    typeUrl: string;
    encode(message: QueryAllBountyRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBountyRequest;
    fromPartial(object: Partial<QueryAllBountyRequest>): QueryAllBountyRequest;
    fromAmino(object: QueryAllBountyRequestAmino): QueryAllBountyRequest;
    toAmino(message: QueryAllBountyRequest): QueryAllBountyRequestAmino;
    fromAminoMsg(object: QueryAllBountyRequestAminoMsg): QueryAllBountyRequest;
    fromProtoMsg(message: QueryAllBountyRequestProtoMsg): QueryAllBountyRequest;
    toProto(message: QueryAllBountyRequest): Uint8Array;
    toProtoMsg(message: QueryAllBountyRequest): QueryAllBountyRequestProtoMsg;
};
export declare const QueryAllBountyResponse: {
    typeUrl: string;
    encode(message: QueryAllBountyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllBountyResponse;
    fromPartial(object: Partial<QueryAllBountyResponse>): QueryAllBountyResponse;
    fromAmino(object: QueryAllBountyResponseAmino): QueryAllBountyResponse;
    toAmino(message: QueryAllBountyResponse): QueryAllBountyResponseAmino;
    fromAminoMsg(object: QueryAllBountyResponseAminoMsg): QueryAllBountyResponse;
    fromProtoMsg(message: QueryAllBountyResponseProtoMsg): QueryAllBountyResponse;
    toProto(message: QueryAllBountyResponse): Uint8Array;
    toProtoMsg(message: QueryAllBountyResponse): QueryAllBountyResponseProtoMsg;
};
export declare const QueryGetPullRequestMergePermissionRequest: {
    typeUrl: string;
    encode(message: QueryGetPullRequestMergePermissionRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestMergePermissionRequest;
    fromPartial(object: Partial<QueryGetPullRequestMergePermissionRequest>): QueryGetPullRequestMergePermissionRequest;
    fromAmino(object: QueryGetPullRequestMergePermissionRequestAmino): QueryGetPullRequestMergePermissionRequest;
    toAmino(message: QueryGetPullRequestMergePermissionRequest): QueryGetPullRequestMergePermissionRequestAmino;
    fromAminoMsg(object: QueryGetPullRequestMergePermissionRequestAminoMsg): QueryGetPullRequestMergePermissionRequest;
    fromProtoMsg(message: QueryGetPullRequestMergePermissionRequestProtoMsg): QueryGetPullRequestMergePermissionRequest;
    toProto(message: QueryGetPullRequestMergePermissionRequest): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestMergePermissionRequest): QueryGetPullRequestMergePermissionRequestProtoMsg;
};
export declare const QueryGetPullRequestMergePermissionResponse: {
    typeUrl: string;
    encode(message: QueryGetPullRequestMergePermissionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestMergePermissionResponse;
    fromPartial(object: Partial<QueryGetPullRequestMergePermissionResponse>): QueryGetPullRequestMergePermissionResponse;
    fromAmino(object: QueryGetPullRequestMergePermissionResponseAmino): QueryGetPullRequestMergePermissionResponse;
    toAmino(message: QueryGetPullRequestMergePermissionResponse): QueryGetPullRequestMergePermissionResponseAmino;
    fromAminoMsg(object: QueryGetPullRequestMergePermissionResponseAminoMsg): QueryGetPullRequestMergePermissionResponse;
    fromProtoMsg(message: QueryGetPullRequestMergePermissionResponseProtoMsg): QueryGetPullRequestMergePermissionResponse;
    toProto(message: QueryGetPullRequestMergePermissionResponse): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestMergePermissionResponse): QueryGetPullRequestMergePermissionResponseProtoMsg;
};
export declare const QueryGetReleaseRequest: {
    typeUrl: string;
    encode(message: QueryGetReleaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetReleaseRequest;
    fromPartial(object: Partial<QueryGetReleaseRequest>): QueryGetReleaseRequest;
    fromAmino(object: QueryGetReleaseRequestAmino): QueryGetReleaseRequest;
    toAmino(message: QueryGetReleaseRequest): QueryGetReleaseRequestAmino;
    fromAminoMsg(object: QueryGetReleaseRequestAminoMsg): QueryGetReleaseRequest;
    fromProtoMsg(message: QueryGetReleaseRequestProtoMsg): QueryGetReleaseRequest;
    toProto(message: QueryGetReleaseRequest): Uint8Array;
    toProtoMsg(message: QueryGetReleaseRequest): QueryGetReleaseRequestProtoMsg;
};
export declare const QueryGetReleaseResponse: {
    typeUrl: string;
    encode(message: QueryGetReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetReleaseResponse;
    fromPartial(object: Partial<QueryGetReleaseResponse>): QueryGetReleaseResponse;
    fromAmino(object: QueryGetReleaseResponseAmino): QueryGetReleaseResponse;
    toAmino(message: QueryGetReleaseResponse): QueryGetReleaseResponseAmino;
    fromAminoMsg(object: QueryGetReleaseResponseAminoMsg): QueryGetReleaseResponse;
    fromProtoMsg(message: QueryGetReleaseResponseProtoMsg): QueryGetReleaseResponse;
    toProto(message: QueryGetReleaseResponse): Uint8Array;
    toProtoMsg(message: QueryGetReleaseResponse): QueryGetReleaseResponseProtoMsg;
};
export declare const QueryAllReleaseRequest: {
    typeUrl: string;
    encode(message: QueryAllReleaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllReleaseRequest;
    fromPartial(object: Partial<QueryAllReleaseRequest>): QueryAllReleaseRequest;
    fromAmino(object: QueryAllReleaseRequestAmino): QueryAllReleaseRequest;
    toAmino(message: QueryAllReleaseRequest): QueryAllReleaseRequestAmino;
    fromAminoMsg(object: QueryAllReleaseRequestAminoMsg): QueryAllReleaseRequest;
    fromProtoMsg(message: QueryAllReleaseRequestProtoMsg): QueryAllReleaseRequest;
    toProto(message: QueryAllReleaseRequest): Uint8Array;
    toProtoMsg(message: QueryAllReleaseRequest): QueryAllReleaseRequestProtoMsg;
};
export declare const QueryAllReleaseResponse: {
    typeUrl: string;
    encode(message: QueryAllReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllReleaseResponse;
    fromPartial(object: Partial<QueryAllReleaseResponse>): QueryAllReleaseResponse;
    fromAmino(object: QueryAllReleaseResponseAmino): QueryAllReleaseResponse;
    toAmino(message: QueryAllReleaseResponse): QueryAllReleaseResponseAmino;
    fromAminoMsg(object: QueryAllReleaseResponseAminoMsg): QueryAllReleaseResponse;
    fromProtoMsg(message: QueryAllReleaseResponseProtoMsg): QueryAllReleaseResponse;
    toProto(message: QueryAllReleaseResponse): Uint8Array;
    toProtoMsg(message: QueryAllReleaseResponse): QueryAllReleaseResponseProtoMsg;
};
export declare const QueryGetPullRequestRequest: {
    typeUrl: string;
    encode(message: QueryGetPullRequestRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestRequest;
    fromPartial(object: Partial<QueryGetPullRequestRequest>): QueryGetPullRequestRequest;
    fromAmino(object: QueryGetPullRequestRequestAmino): QueryGetPullRequestRequest;
    toAmino(message: QueryGetPullRequestRequest): QueryGetPullRequestRequestAmino;
    fromAminoMsg(object: QueryGetPullRequestRequestAminoMsg): QueryGetPullRequestRequest;
    fromProtoMsg(message: QueryGetPullRequestRequestProtoMsg): QueryGetPullRequestRequest;
    toProto(message: QueryGetPullRequestRequest): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestRequest): QueryGetPullRequestRequestProtoMsg;
};
export declare const QueryGetPullRequestResponse: {
    typeUrl: string;
    encode(message: QueryGetPullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestResponse;
    fromPartial(object: Partial<QueryGetPullRequestResponse>): QueryGetPullRequestResponse;
    fromAmino(object: QueryGetPullRequestResponseAmino): QueryGetPullRequestResponse;
    toAmino(message: QueryGetPullRequestResponse): QueryGetPullRequestResponseAmino;
    fromAminoMsg(object: QueryGetPullRequestResponseAminoMsg): QueryGetPullRequestResponse;
    fromProtoMsg(message: QueryGetPullRequestResponseProtoMsg): QueryGetPullRequestResponse;
    toProto(message: QueryGetPullRequestResponse): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestResponse): QueryGetPullRequestResponseProtoMsg;
};
export declare const QueryAllPullRequestRequest: {
    typeUrl: string;
    encode(message: QueryAllPullRequestRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPullRequestRequest;
    fromPartial(object: Partial<QueryAllPullRequestRequest>): QueryAllPullRequestRequest;
    fromAmino(object: QueryAllPullRequestRequestAmino): QueryAllPullRequestRequest;
    toAmino(message: QueryAllPullRequestRequest): QueryAllPullRequestRequestAmino;
    fromAminoMsg(object: QueryAllPullRequestRequestAminoMsg): QueryAllPullRequestRequest;
    fromProtoMsg(message: QueryAllPullRequestRequestProtoMsg): QueryAllPullRequestRequest;
    toProto(message: QueryAllPullRequestRequest): Uint8Array;
    toProtoMsg(message: QueryAllPullRequestRequest): QueryAllPullRequestRequestProtoMsg;
};
export declare const QueryAllPullRequestResponse: {
    typeUrl: string;
    encode(message: QueryAllPullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPullRequestResponse;
    fromPartial(object: Partial<QueryAllPullRequestResponse>): QueryAllPullRequestResponse;
    fromAmino(object: QueryAllPullRequestResponseAmino): QueryAllPullRequestResponse;
    toAmino(message: QueryAllPullRequestResponse): QueryAllPullRequestResponseAmino;
    fromAminoMsg(object: QueryAllPullRequestResponseAminoMsg): QueryAllPullRequestResponse;
    fromProtoMsg(message: QueryAllPullRequestResponseProtoMsg): QueryAllPullRequestResponse;
    toProto(message: QueryAllPullRequestResponse): Uint8Array;
    toProtoMsg(message: QueryAllPullRequestResponse): QueryAllPullRequestResponseProtoMsg;
};
export declare const QueryGetDaoRequest: {
    typeUrl: string;
    encode(message: QueryGetDaoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetDaoRequest;
    fromPartial(object: Partial<QueryGetDaoRequest>): QueryGetDaoRequest;
    fromAmino(object: QueryGetDaoRequestAmino): QueryGetDaoRequest;
    toAmino(message: QueryGetDaoRequest): QueryGetDaoRequestAmino;
    fromAminoMsg(object: QueryGetDaoRequestAminoMsg): QueryGetDaoRequest;
    fromProtoMsg(message: QueryGetDaoRequestProtoMsg): QueryGetDaoRequest;
    toProto(message: QueryGetDaoRequest): Uint8Array;
    toProtoMsg(message: QueryGetDaoRequest): QueryGetDaoRequestProtoMsg;
};
export declare const QueryGetDaoResponse: {
    typeUrl: string;
    encode(message: QueryGetDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetDaoResponse;
    fromPartial(object: Partial<QueryGetDaoResponse>): QueryGetDaoResponse;
    fromAmino(object: QueryGetDaoResponseAmino): QueryGetDaoResponse;
    toAmino(message: QueryGetDaoResponse): QueryGetDaoResponseAmino;
    fromAminoMsg(object: QueryGetDaoResponseAminoMsg): QueryGetDaoResponse;
    fromProtoMsg(message: QueryGetDaoResponseProtoMsg): QueryGetDaoResponse;
    toProto(message: QueryGetDaoResponse): Uint8Array;
    toProtoMsg(message: QueryGetDaoResponse): QueryGetDaoResponseProtoMsg;
};
export declare const QueryAllDaoRequest: {
    typeUrl: string;
    encode(message: QueryAllDaoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllDaoRequest;
    fromPartial(object: Partial<QueryAllDaoRequest>): QueryAllDaoRequest;
    fromAmino(object: QueryAllDaoRequestAmino): QueryAllDaoRequest;
    toAmino(message: QueryAllDaoRequest): QueryAllDaoRequestAmino;
    fromAminoMsg(object: QueryAllDaoRequestAminoMsg): QueryAllDaoRequest;
    fromProtoMsg(message: QueryAllDaoRequestProtoMsg): QueryAllDaoRequest;
    toProto(message: QueryAllDaoRequest): Uint8Array;
    toProtoMsg(message: QueryAllDaoRequest): QueryAllDaoRequestProtoMsg;
};
export declare const QueryAllDaoResponse: {
    typeUrl: string;
    encode(message: QueryAllDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllDaoResponse;
    fromPartial(object: Partial<QueryAllDaoResponse>): QueryAllDaoResponse;
    fromAmino(object: QueryAllDaoResponseAmino): QueryAllDaoResponse;
    toAmino(message: QueryAllDaoResponse): QueryAllDaoResponseAmino;
    fromAminoMsg(object: QueryAllDaoResponseAminoMsg): QueryAllDaoResponse;
    fromProtoMsg(message: QueryAllDaoResponseProtoMsg): QueryAllDaoResponse;
    toProto(message: QueryAllDaoResponse): Uint8Array;
    toProtoMsg(message: QueryAllDaoResponse): QueryAllDaoResponseProtoMsg;
};
export declare const QueryGetIssueCommentRequest: {
    typeUrl: string;
    encode(message: QueryGetIssueCommentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetIssueCommentRequest;
    fromPartial(object: Partial<QueryGetIssueCommentRequest>): QueryGetIssueCommentRequest;
    fromAmino(object: QueryGetIssueCommentRequestAmino): QueryGetIssueCommentRequest;
    toAmino(message: QueryGetIssueCommentRequest): QueryGetIssueCommentRequestAmino;
    fromAminoMsg(object: QueryGetIssueCommentRequestAminoMsg): QueryGetIssueCommentRequest;
    fromProtoMsg(message: QueryGetIssueCommentRequestProtoMsg): QueryGetIssueCommentRequest;
    toProto(message: QueryGetIssueCommentRequest): Uint8Array;
    toProtoMsg(message: QueryGetIssueCommentRequest): QueryGetIssueCommentRequestProtoMsg;
};
export declare const QueryGetIssueCommentResponse: {
    typeUrl: string;
    encode(message: QueryGetIssueCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetIssueCommentResponse;
    fromPartial(object: Partial<QueryGetIssueCommentResponse>): QueryGetIssueCommentResponse;
    fromAmino(object: QueryGetIssueCommentResponseAmino): QueryGetIssueCommentResponse;
    toAmino(message: QueryGetIssueCommentResponse): QueryGetIssueCommentResponseAmino;
    fromAminoMsg(object: QueryGetIssueCommentResponseAminoMsg): QueryGetIssueCommentResponse;
    fromProtoMsg(message: QueryGetIssueCommentResponseProtoMsg): QueryGetIssueCommentResponse;
    toProto(message: QueryGetIssueCommentResponse): Uint8Array;
    toProtoMsg(message: QueryGetIssueCommentResponse): QueryGetIssueCommentResponseProtoMsg;
};
export declare const QueryGetPullRequestCommentRequest: {
    typeUrl: string;
    encode(message: QueryGetPullRequestCommentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestCommentRequest;
    fromPartial(object: Partial<QueryGetPullRequestCommentRequest>): QueryGetPullRequestCommentRequest;
    fromAmino(object: QueryGetPullRequestCommentRequestAmino): QueryGetPullRequestCommentRequest;
    toAmino(message: QueryGetPullRequestCommentRequest): QueryGetPullRequestCommentRequestAmino;
    fromAminoMsg(object: QueryGetPullRequestCommentRequestAminoMsg): QueryGetPullRequestCommentRequest;
    fromProtoMsg(message: QueryGetPullRequestCommentRequestProtoMsg): QueryGetPullRequestCommentRequest;
    toProto(message: QueryGetPullRequestCommentRequest): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestCommentRequest): QueryGetPullRequestCommentRequestProtoMsg;
};
export declare const QueryGetPullRequestCommentResponse: {
    typeUrl: string;
    encode(message: QueryGetPullRequestCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetPullRequestCommentResponse;
    fromPartial(object: Partial<QueryGetPullRequestCommentResponse>): QueryGetPullRequestCommentResponse;
    fromAmino(object: QueryGetPullRequestCommentResponseAmino): QueryGetPullRequestCommentResponse;
    toAmino(message: QueryGetPullRequestCommentResponse): QueryGetPullRequestCommentResponseAmino;
    fromAminoMsg(object: QueryGetPullRequestCommentResponseAminoMsg): QueryGetPullRequestCommentResponse;
    fromProtoMsg(message: QueryGetPullRequestCommentResponseProtoMsg): QueryGetPullRequestCommentResponse;
    toProto(message: QueryGetPullRequestCommentResponse): Uint8Array;
    toProtoMsg(message: QueryGetPullRequestCommentResponse): QueryGetPullRequestCommentResponseProtoMsg;
};
export declare const QueryAllCommentRequest: {
    typeUrl: string;
    encode(message: QueryAllCommentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllCommentRequest;
    fromPartial(object: Partial<QueryAllCommentRequest>): QueryAllCommentRequest;
    fromAmino(object: QueryAllCommentRequestAmino): QueryAllCommentRequest;
    toAmino(message: QueryAllCommentRequest): QueryAllCommentRequestAmino;
    fromAminoMsg(object: QueryAllCommentRequestAminoMsg): QueryAllCommentRequest;
    fromProtoMsg(message: QueryAllCommentRequestProtoMsg): QueryAllCommentRequest;
    toProto(message: QueryAllCommentRequest): Uint8Array;
    toProtoMsg(message: QueryAllCommentRequest): QueryAllCommentRequestProtoMsg;
};
export declare const QueryAllCommentResponse: {
    typeUrl: string;
    encode(message: QueryAllCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllCommentResponse;
    fromPartial(object: Partial<QueryAllCommentResponse>): QueryAllCommentResponse;
    fromAmino(object: QueryAllCommentResponseAmino): QueryAllCommentResponse;
    toAmino(message: QueryAllCommentResponse): QueryAllCommentResponseAmino;
    fromAminoMsg(object: QueryAllCommentResponseAminoMsg): QueryAllCommentResponse;
    fromProtoMsg(message: QueryAllCommentResponseProtoMsg): QueryAllCommentResponse;
    toProto(message: QueryAllCommentResponse): Uint8Array;
    toProtoMsg(message: QueryAllCommentResponse): QueryAllCommentResponseProtoMsg;
};
export declare const QueryAllIssueCommentRequest: {
    typeUrl: string;
    encode(message: QueryAllIssueCommentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllIssueCommentRequest;
    fromPartial(object: Partial<QueryAllIssueCommentRequest>): QueryAllIssueCommentRequest;
    fromAmino(object: QueryAllIssueCommentRequestAmino): QueryAllIssueCommentRequest;
    toAmino(message: QueryAllIssueCommentRequest): QueryAllIssueCommentRequestAmino;
    fromAminoMsg(object: QueryAllIssueCommentRequestAminoMsg): QueryAllIssueCommentRequest;
    fromProtoMsg(message: QueryAllIssueCommentRequestProtoMsg): QueryAllIssueCommentRequest;
    toProto(message: QueryAllIssueCommentRequest): Uint8Array;
    toProtoMsg(message: QueryAllIssueCommentRequest): QueryAllIssueCommentRequestProtoMsg;
};
export declare const QueryAllIssueCommentResponse: {
    typeUrl: string;
    encode(message: QueryAllIssueCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllIssueCommentResponse;
    fromPartial(object: Partial<QueryAllIssueCommentResponse>): QueryAllIssueCommentResponse;
    fromAmino(object: QueryAllIssueCommentResponseAmino): QueryAllIssueCommentResponse;
    toAmino(message: QueryAllIssueCommentResponse): QueryAllIssueCommentResponseAmino;
    fromAminoMsg(object: QueryAllIssueCommentResponseAminoMsg): QueryAllIssueCommentResponse;
    fromProtoMsg(message: QueryAllIssueCommentResponseProtoMsg): QueryAllIssueCommentResponse;
    toProto(message: QueryAllIssueCommentResponse): Uint8Array;
    toProtoMsg(message: QueryAllIssueCommentResponse): QueryAllIssueCommentResponseProtoMsg;
};
export declare const QueryAllPullRequestCommentRequest: {
    typeUrl: string;
    encode(message: QueryAllPullRequestCommentRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPullRequestCommentRequest;
    fromPartial(object: Partial<QueryAllPullRequestCommentRequest>): QueryAllPullRequestCommentRequest;
    fromAmino(object: QueryAllPullRequestCommentRequestAmino): QueryAllPullRequestCommentRequest;
    toAmino(message: QueryAllPullRequestCommentRequest): QueryAllPullRequestCommentRequestAmino;
    fromAminoMsg(object: QueryAllPullRequestCommentRequestAminoMsg): QueryAllPullRequestCommentRequest;
    fromProtoMsg(message: QueryAllPullRequestCommentRequestProtoMsg): QueryAllPullRequestCommentRequest;
    toProto(message: QueryAllPullRequestCommentRequest): Uint8Array;
    toProtoMsg(message: QueryAllPullRequestCommentRequest): QueryAllPullRequestCommentRequestProtoMsg;
};
export declare const QueryAllPullRequestCommentResponse: {
    typeUrl: string;
    encode(message: QueryAllPullRequestCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllPullRequestCommentResponse;
    fromPartial(object: Partial<QueryAllPullRequestCommentResponse>): QueryAllPullRequestCommentResponse;
    fromAmino(object: QueryAllPullRequestCommentResponseAmino): QueryAllPullRequestCommentResponse;
    toAmino(message: QueryAllPullRequestCommentResponse): QueryAllPullRequestCommentResponseAmino;
    fromAminoMsg(object: QueryAllPullRequestCommentResponseAminoMsg): QueryAllPullRequestCommentResponse;
    fromProtoMsg(message: QueryAllPullRequestCommentResponseProtoMsg): QueryAllPullRequestCommentResponse;
    toProto(message: QueryAllPullRequestCommentResponse): Uint8Array;
    toProtoMsg(message: QueryAllPullRequestCommentResponse): QueryAllPullRequestCommentResponseProtoMsg;
};
export declare const QueryAllIssueRequest: {
    typeUrl: string;
    encode(message: QueryAllIssueRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllIssueRequest;
    fromPartial(object: Partial<QueryAllIssueRequest>): QueryAllIssueRequest;
    fromAmino(object: QueryAllIssueRequestAmino): QueryAllIssueRequest;
    toAmino(message: QueryAllIssueRequest): QueryAllIssueRequestAmino;
    fromAminoMsg(object: QueryAllIssueRequestAminoMsg): QueryAllIssueRequest;
    fromProtoMsg(message: QueryAllIssueRequestProtoMsg): QueryAllIssueRequest;
    toProto(message: QueryAllIssueRequest): Uint8Array;
    toProtoMsg(message: QueryAllIssueRequest): QueryAllIssueRequestProtoMsg;
};
export declare const QueryAllIssueResponse: {
    typeUrl: string;
    encode(message: QueryAllIssueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllIssueResponse;
    fromPartial(object: Partial<QueryAllIssueResponse>): QueryAllIssueResponse;
    fromAmino(object: QueryAllIssueResponseAmino): QueryAllIssueResponse;
    toAmino(message: QueryAllIssueResponse): QueryAllIssueResponseAmino;
    fromAminoMsg(object: QueryAllIssueResponseAminoMsg): QueryAllIssueResponse;
    fromProtoMsg(message: QueryAllIssueResponseProtoMsg): QueryAllIssueResponse;
    toProto(message: QueryAllIssueResponse): Uint8Array;
    toProtoMsg(message: QueryAllIssueResponse): QueryAllIssueResponseProtoMsg;
};
export declare const QueryGetLatestRepositoryReleaseRequest: {
    typeUrl: string;
    encode(message: QueryGetLatestRepositoryReleaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLatestRepositoryReleaseRequest;
    fromPartial(object: Partial<QueryGetLatestRepositoryReleaseRequest>): QueryGetLatestRepositoryReleaseRequest;
    fromAmino(object: QueryGetLatestRepositoryReleaseRequestAmino): QueryGetLatestRepositoryReleaseRequest;
    toAmino(message: QueryGetLatestRepositoryReleaseRequest): QueryGetLatestRepositoryReleaseRequestAmino;
    fromAminoMsg(object: QueryGetLatestRepositoryReleaseRequestAminoMsg): QueryGetLatestRepositoryReleaseRequest;
    fromProtoMsg(message: QueryGetLatestRepositoryReleaseRequestProtoMsg): QueryGetLatestRepositoryReleaseRequest;
    toProto(message: QueryGetLatestRepositoryReleaseRequest): Uint8Array;
    toProtoMsg(message: QueryGetLatestRepositoryReleaseRequest): QueryGetLatestRepositoryReleaseRequestProtoMsg;
};
export declare const QueryGetLatestRepositoryReleaseResponse: {
    typeUrl: string;
    encode(message: QueryGetLatestRepositoryReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetLatestRepositoryReleaseResponse;
    fromPartial(object: Partial<QueryGetLatestRepositoryReleaseResponse>): QueryGetLatestRepositoryReleaseResponse;
    fromAmino(object: QueryGetLatestRepositoryReleaseResponseAmino): QueryGetLatestRepositoryReleaseResponse;
    toAmino(message: QueryGetLatestRepositoryReleaseResponse): QueryGetLatestRepositoryReleaseResponseAmino;
    fromAminoMsg(object: QueryGetLatestRepositoryReleaseResponseAminoMsg): QueryGetLatestRepositoryReleaseResponse;
    fromProtoMsg(message: QueryGetLatestRepositoryReleaseResponseProtoMsg): QueryGetLatestRepositoryReleaseResponse;
    toProto(message: QueryGetLatestRepositoryReleaseResponse): Uint8Array;
    toProtoMsg(message: QueryGetLatestRepositoryReleaseResponse): QueryGetLatestRepositoryReleaseResponseProtoMsg;
};
export declare const QueryGetRepositoryReleaseRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryReleaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryReleaseRequest;
    fromPartial(object: Partial<QueryGetRepositoryReleaseRequest>): QueryGetRepositoryReleaseRequest;
    fromAmino(object: QueryGetRepositoryReleaseRequestAmino): QueryGetRepositoryReleaseRequest;
    toAmino(message: QueryGetRepositoryReleaseRequest): QueryGetRepositoryReleaseRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryReleaseRequestAminoMsg): QueryGetRepositoryReleaseRequest;
    fromProtoMsg(message: QueryGetRepositoryReleaseRequestProtoMsg): QueryGetRepositoryReleaseRequest;
    toProto(message: QueryGetRepositoryReleaseRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryReleaseRequest): QueryGetRepositoryReleaseRequestProtoMsg;
};
export declare const QueryGetRepositoryReleaseResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryReleaseResponse;
    fromPartial(object: Partial<QueryGetRepositoryReleaseResponse>): QueryGetRepositoryReleaseResponse;
    fromAmino(object: QueryGetRepositoryReleaseResponseAmino): QueryGetRepositoryReleaseResponse;
    toAmino(message: QueryGetRepositoryReleaseResponse): QueryGetRepositoryReleaseResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryReleaseResponseAminoMsg): QueryGetRepositoryReleaseResponse;
    fromProtoMsg(message: QueryGetRepositoryReleaseResponseProtoMsg): QueryGetRepositoryReleaseResponse;
    toProto(message: QueryGetRepositoryReleaseResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryReleaseResponse): QueryGetRepositoryReleaseResponseProtoMsg;
};
export declare const QueryAllRepositoryReleaseRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryReleaseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryReleaseRequest;
    fromPartial(object: Partial<QueryAllRepositoryReleaseRequest>): QueryAllRepositoryReleaseRequest;
    fromAmino(object: QueryAllRepositoryReleaseRequestAmino): QueryAllRepositoryReleaseRequest;
    toAmino(message: QueryAllRepositoryReleaseRequest): QueryAllRepositoryReleaseRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryReleaseRequestAminoMsg): QueryAllRepositoryReleaseRequest;
    fromProtoMsg(message: QueryAllRepositoryReleaseRequestProtoMsg): QueryAllRepositoryReleaseRequest;
    toProto(message: QueryAllRepositoryReleaseRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryReleaseRequest): QueryAllRepositoryReleaseRequestProtoMsg;
};
export declare const QueryAllRepositoryReleaseResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryReleaseResponse;
    fromPartial(object: Partial<QueryAllRepositoryReleaseResponse>): QueryAllRepositoryReleaseResponse;
    fromAmino(object: QueryAllRepositoryReleaseResponseAmino): QueryAllRepositoryReleaseResponse;
    toAmino(message: QueryAllRepositoryReleaseResponse): QueryAllRepositoryReleaseResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryReleaseResponseAminoMsg): QueryAllRepositoryReleaseResponse;
    fromProtoMsg(message: QueryAllRepositoryReleaseResponseProtoMsg): QueryAllRepositoryReleaseResponse;
    toProto(message: QueryAllRepositoryReleaseResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryReleaseResponse): QueryAllRepositoryReleaseResponseProtoMsg;
};
export declare const QueryGetRepositoryIssueRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryIssueRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryIssueRequest;
    fromPartial(object: Partial<QueryGetRepositoryIssueRequest>): QueryGetRepositoryIssueRequest;
    fromAmino(object: QueryGetRepositoryIssueRequestAmino): QueryGetRepositoryIssueRequest;
    toAmino(message: QueryGetRepositoryIssueRequest): QueryGetRepositoryIssueRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryIssueRequestAminoMsg): QueryGetRepositoryIssueRequest;
    fromProtoMsg(message: QueryGetRepositoryIssueRequestProtoMsg): QueryGetRepositoryIssueRequest;
    toProto(message: QueryGetRepositoryIssueRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryIssueRequest): QueryGetRepositoryIssueRequestProtoMsg;
};
export declare const QueryGetRepositoryIssueResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryIssueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryIssueResponse;
    fromPartial(object: Partial<QueryGetRepositoryIssueResponse>): QueryGetRepositoryIssueResponse;
    fromAmino(object: QueryGetRepositoryIssueResponseAmino): QueryGetRepositoryIssueResponse;
    toAmino(message: QueryGetRepositoryIssueResponse): QueryGetRepositoryIssueResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryIssueResponseAminoMsg): QueryGetRepositoryIssueResponse;
    fromProtoMsg(message: QueryGetRepositoryIssueResponseProtoMsg): QueryGetRepositoryIssueResponse;
    toProto(message: QueryGetRepositoryIssueResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryIssueResponse): QueryGetRepositoryIssueResponseProtoMsg;
};
export declare const QueryGetRepositoryPullRequestRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryPullRequestRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryPullRequestRequest;
    fromPartial(object: Partial<QueryGetRepositoryPullRequestRequest>): QueryGetRepositoryPullRequestRequest;
    fromAmino(object: QueryGetRepositoryPullRequestRequestAmino): QueryGetRepositoryPullRequestRequest;
    toAmino(message: QueryGetRepositoryPullRequestRequest): QueryGetRepositoryPullRequestRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryPullRequestRequestAminoMsg): QueryGetRepositoryPullRequestRequest;
    fromProtoMsg(message: QueryGetRepositoryPullRequestRequestProtoMsg): QueryGetRepositoryPullRequestRequest;
    toProto(message: QueryGetRepositoryPullRequestRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryPullRequestRequest): QueryGetRepositoryPullRequestRequestProtoMsg;
};
export declare const QueryGetRepositoryPullRequestResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryPullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryPullRequestResponse;
    fromPartial(object: Partial<QueryGetRepositoryPullRequestResponse>): QueryGetRepositoryPullRequestResponse;
    fromAmino(object: QueryGetRepositoryPullRequestResponseAmino): QueryGetRepositoryPullRequestResponse;
    toAmino(message: QueryGetRepositoryPullRequestResponse): QueryGetRepositoryPullRequestResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryPullRequestResponseAminoMsg): QueryGetRepositoryPullRequestResponse;
    fromProtoMsg(message: QueryGetRepositoryPullRequestResponseProtoMsg): QueryGetRepositoryPullRequestResponse;
    toProto(message: QueryGetRepositoryPullRequestResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryPullRequestResponse): QueryGetRepositoryPullRequestResponseProtoMsg;
};
export declare const QueryAllRepositoryIssueRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryIssueRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryIssueRequest;
    fromPartial(object: Partial<QueryAllRepositoryIssueRequest>): QueryAllRepositoryIssueRequest;
    fromAmino(object: QueryAllRepositoryIssueRequestAmino): QueryAllRepositoryIssueRequest;
    toAmino(message: QueryAllRepositoryIssueRequest): QueryAllRepositoryIssueRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryIssueRequestAminoMsg): QueryAllRepositoryIssueRequest;
    fromProtoMsg(message: QueryAllRepositoryIssueRequestProtoMsg): QueryAllRepositoryIssueRequest;
    toProto(message: QueryAllRepositoryIssueRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryIssueRequest): QueryAllRepositoryIssueRequestProtoMsg;
};
export declare const IssueOptions: {
    typeUrl: string;
    encode(message: IssueOptions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IssueOptions;
    fromPartial(object: Partial<IssueOptions>): IssueOptions;
    fromAmino(object: IssueOptionsAmino): IssueOptions;
    toAmino(message: IssueOptions): IssueOptionsAmino;
    fromAminoMsg(object: IssueOptionsAminoMsg): IssueOptions;
    fromProtoMsg(message: IssueOptionsProtoMsg): IssueOptions;
    toProto(message: IssueOptions): Uint8Array;
    toProtoMsg(message: IssueOptions): IssueOptionsProtoMsg;
};
export declare const QueryAllRepositoryIssueResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryIssueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryIssueResponse;
    fromPartial(object: Partial<QueryAllRepositoryIssueResponse>): QueryAllRepositoryIssueResponse;
    fromAmino(object: QueryAllRepositoryIssueResponseAmino): QueryAllRepositoryIssueResponse;
    toAmino(message: QueryAllRepositoryIssueResponse): QueryAllRepositoryIssueResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryIssueResponseAminoMsg): QueryAllRepositoryIssueResponse;
    fromProtoMsg(message: QueryAllRepositoryIssueResponseProtoMsg): QueryAllRepositoryIssueResponse;
    toProto(message: QueryAllRepositoryIssueResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryIssueResponse): QueryAllRepositoryIssueResponseProtoMsg;
};
export declare const QueryAllRepositoryPullRequestRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryPullRequestRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryPullRequestRequest;
    fromPartial(object: Partial<QueryAllRepositoryPullRequestRequest>): QueryAllRepositoryPullRequestRequest;
    fromAmino(object: QueryAllRepositoryPullRequestRequestAmino): QueryAllRepositoryPullRequestRequest;
    toAmino(message: QueryAllRepositoryPullRequestRequest): QueryAllRepositoryPullRequestRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryPullRequestRequestAminoMsg): QueryAllRepositoryPullRequestRequest;
    fromProtoMsg(message: QueryAllRepositoryPullRequestRequestProtoMsg): QueryAllRepositoryPullRequestRequest;
    toProto(message: QueryAllRepositoryPullRequestRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryPullRequestRequest): QueryAllRepositoryPullRequestRequestProtoMsg;
};
export declare const PullRequestOptions: {
    typeUrl: string;
    encode(message: PullRequestOptions, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PullRequestOptions;
    fromPartial(object: Partial<PullRequestOptions>): PullRequestOptions;
    fromAmino(object: PullRequestOptionsAmino): PullRequestOptions;
    toAmino(message: PullRequestOptions): PullRequestOptionsAmino;
    fromAminoMsg(object: PullRequestOptionsAminoMsg): PullRequestOptions;
    fromProtoMsg(message: PullRequestOptionsProtoMsg): PullRequestOptions;
    toProto(message: PullRequestOptions): Uint8Array;
    toProtoMsg(message: PullRequestOptions): PullRequestOptionsProtoMsg;
};
export declare const QueryAllRepositoryPullRequestResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryPullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryPullRequestResponse;
    fromPartial(object: Partial<QueryAllRepositoryPullRequestResponse>): QueryAllRepositoryPullRequestResponse;
    fromAmino(object: QueryAllRepositoryPullRequestResponseAmino): QueryAllRepositoryPullRequestResponse;
    toAmino(message: QueryAllRepositoryPullRequestResponse): QueryAllRepositoryPullRequestResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryPullRequestResponseAminoMsg): QueryAllRepositoryPullRequestResponse;
    fromProtoMsg(message: QueryAllRepositoryPullRequestResponseProtoMsg): QueryAllRepositoryPullRequestResponse;
    toProto(message: QueryAllRepositoryPullRequestResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryPullRequestResponse): QueryAllRepositoryPullRequestResponseProtoMsg;
};
export declare const QueryGetRepositoryRequest: {
    typeUrl: string;
    encode(message: QueryGetRepositoryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryRequest;
    fromPartial(object: Partial<QueryGetRepositoryRequest>): QueryGetRepositoryRequest;
    fromAmino(object: QueryGetRepositoryRequestAmino): QueryGetRepositoryRequest;
    toAmino(message: QueryGetRepositoryRequest): QueryGetRepositoryRequestAmino;
    fromAminoMsg(object: QueryGetRepositoryRequestAminoMsg): QueryGetRepositoryRequest;
    fromProtoMsg(message: QueryGetRepositoryRequestProtoMsg): QueryGetRepositoryRequest;
    toProto(message: QueryGetRepositoryRequest): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryRequest): QueryGetRepositoryRequestProtoMsg;
};
export declare const QueryGetRepositoryResponse: {
    typeUrl: string;
    encode(message: QueryGetRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetRepositoryResponse;
    fromPartial(object: Partial<QueryGetRepositoryResponse>): QueryGetRepositoryResponse;
    fromAmino(object: QueryGetRepositoryResponseAmino): QueryGetRepositoryResponse;
    toAmino(message: QueryGetRepositoryResponse): QueryGetRepositoryResponseAmino;
    fromAminoMsg(object: QueryGetRepositoryResponseAminoMsg): QueryGetRepositoryResponse;
    fromProtoMsg(message: QueryGetRepositoryResponseProtoMsg): QueryGetRepositoryResponse;
    toProto(message: QueryGetRepositoryResponse): Uint8Array;
    toProtoMsg(message: QueryGetRepositoryResponse): QueryGetRepositoryResponseProtoMsg;
};
export declare const RepositoryFork: {
    typeUrl: string;
    encode(message: RepositoryFork, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryFork;
    fromPartial(object: Partial<RepositoryFork>): RepositoryFork;
    fromAmino(object: RepositoryForkAmino): RepositoryFork;
    toAmino(message: RepositoryFork): RepositoryForkAmino;
    fromAminoMsg(object: RepositoryForkAminoMsg): RepositoryFork;
    fromProtoMsg(message: RepositoryForkProtoMsg): RepositoryFork;
    toProto(message: RepositoryFork): Uint8Array;
    toProtoMsg(message: RepositoryFork): RepositoryForkProtoMsg;
};
export declare const QueryGetAllForkRequest: {
    typeUrl: string;
    encode(message: QueryGetAllForkRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetAllForkRequest;
    fromPartial(object: Partial<QueryGetAllForkRequest>): QueryGetAllForkRequest;
    fromAmino(object: QueryGetAllForkRequestAmino): QueryGetAllForkRequest;
    toAmino(message: QueryGetAllForkRequest): QueryGetAllForkRequestAmino;
    fromAminoMsg(object: QueryGetAllForkRequestAminoMsg): QueryGetAllForkRequest;
    fromProtoMsg(message: QueryGetAllForkRequestProtoMsg): QueryGetAllForkRequest;
    toProto(message: QueryGetAllForkRequest): Uint8Array;
    toProtoMsg(message: QueryGetAllForkRequest): QueryGetAllForkRequestProtoMsg;
};
export declare const QueryGetAllForkResponse: {
    typeUrl: string;
    encode(message: QueryGetAllForkResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetAllForkResponse;
    fromPartial(object: Partial<QueryGetAllForkResponse>): QueryGetAllForkResponse;
    fromAmino(object: QueryGetAllForkResponseAmino): QueryGetAllForkResponse;
    toAmino(message: QueryGetAllForkResponse): QueryGetAllForkResponseAmino;
    fromAminoMsg(object: QueryGetAllForkResponseAminoMsg): QueryGetAllForkResponse;
    fromProtoMsg(message: QueryGetAllForkResponseProtoMsg): QueryGetAllForkResponse;
    toProto(message: QueryGetAllForkResponse): Uint8Array;
    toProtoMsg(message: QueryGetAllForkResponse): QueryGetAllForkResponseProtoMsg;
};
export declare const QueryAllRepositoryRequest: {
    typeUrl: string;
    encode(message: QueryAllRepositoryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryRequest;
    fromPartial(object: Partial<QueryAllRepositoryRequest>): QueryAllRepositoryRequest;
    fromAmino(object: QueryAllRepositoryRequestAmino): QueryAllRepositoryRequest;
    toAmino(message: QueryAllRepositoryRequest): QueryAllRepositoryRequestAmino;
    fromAminoMsg(object: QueryAllRepositoryRequestAminoMsg): QueryAllRepositoryRequest;
    fromProtoMsg(message: QueryAllRepositoryRequestProtoMsg): QueryAllRepositoryRequest;
    toProto(message: QueryAllRepositoryRequest): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryRequest): QueryAllRepositoryRequestProtoMsg;
};
export declare const QueryAllRepositoryResponse: {
    typeUrl: string;
    encode(message: QueryAllRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllRepositoryResponse;
    fromPartial(object: Partial<QueryAllRepositoryResponse>): QueryAllRepositoryResponse;
    fromAmino(object: QueryAllRepositoryResponseAmino): QueryAllRepositoryResponse;
    toAmino(message: QueryAllRepositoryResponse): QueryAllRepositoryResponseAmino;
    fromAminoMsg(object: QueryAllRepositoryResponseAminoMsg): QueryAllRepositoryResponse;
    fromProtoMsg(message: QueryAllRepositoryResponseProtoMsg): QueryAllRepositoryResponse;
    toProto(message: QueryAllRepositoryResponse): Uint8Array;
    toProtoMsg(message: QueryAllRepositoryResponse): QueryAllRepositoryResponseProtoMsg;
};
export declare const QueryGetUserRequest: {
    typeUrl: string;
    encode(message: QueryGetUserRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetUserRequest;
    fromPartial(object: Partial<QueryGetUserRequest>): QueryGetUserRequest;
    fromAmino(object: QueryGetUserRequestAmino): QueryGetUserRequest;
    toAmino(message: QueryGetUserRequest): QueryGetUserRequestAmino;
    fromAminoMsg(object: QueryGetUserRequestAminoMsg): QueryGetUserRequest;
    fromProtoMsg(message: QueryGetUserRequestProtoMsg): QueryGetUserRequest;
    toProto(message: QueryGetUserRequest): Uint8Array;
    toProtoMsg(message: QueryGetUserRequest): QueryGetUserRequestProtoMsg;
};
export declare const QueryGetUserResponse: {
    typeUrl: string;
    encode(message: QueryGetUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetUserResponse;
    fromPartial(object: Partial<QueryGetUserResponse>): QueryGetUserResponse;
    fromAmino(object: QueryGetUserResponseAmino): QueryGetUserResponse;
    toAmino(message: QueryGetUserResponse): QueryGetUserResponseAmino;
    fromAminoMsg(object: QueryGetUserResponseAminoMsg): QueryGetUserResponse;
    fromProtoMsg(message: QueryGetUserResponseProtoMsg): QueryGetUserResponse;
    toProto(message: QueryGetUserResponse): Uint8Array;
    toProtoMsg(message: QueryGetUserResponse): QueryGetUserResponseProtoMsg;
};
export declare const QueryAllUserDaoRequest: {
    typeUrl: string;
    encode(message: QueryAllUserDaoRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserDaoRequest;
    fromPartial(object: Partial<QueryAllUserDaoRequest>): QueryAllUserDaoRequest;
    fromAmino(object: QueryAllUserDaoRequestAmino): QueryAllUserDaoRequest;
    toAmino(message: QueryAllUserDaoRequest): QueryAllUserDaoRequestAmino;
    fromAminoMsg(object: QueryAllUserDaoRequestAminoMsg): QueryAllUserDaoRequest;
    fromProtoMsg(message: QueryAllUserDaoRequestProtoMsg): QueryAllUserDaoRequest;
    toProto(message: QueryAllUserDaoRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserDaoRequest): QueryAllUserDaoRequestProtoMsg;
};
export declare const QueryAllUserDaoResponse: {
    typeUrl: string;
    encode(message: QueryAllUserDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserDaoResponse;
    fromPartial(object: Partial<QueryAllUserDaoResponse>): QueryAllUserDaoResponse;
    fromAmino(object: QueryAllUserDaoResponseAmino): QueryAllUserDaoResponse;
    toAmino(message: QueryAllUserDaoResponse): QueryAllUserDaoResponseAmino;
    fromAminoMsg(object: QueryAllUserDaoResponseAminoMsg): QueryAllUserDaoResponse;
    fromProtoMsg(message: QueryAllUserDaoResponseProtoMsg): QueryAllUserDaoResponse;
    toProto(message: QueryAllUserDaoResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserDaoResponse): QueryAllUserDaoResponseProtoMsg;
};
export declare const QueryAllUserRequest: {
    typeUrl: string;
    encode(message: QueryAllUserRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserRequest;
    fromPartial(object: Partial<QueryAllUserRequest>): QueryAllUserRequest;
    fromAmino(object: QueryAllUserRequestAmino): QueryAllUserRequest;
    toAmino(message: QueryAllUserRequest): QueryAllUserRequestAmino;
    fromAminoMsg(object: QueryAllUserRequestAminoMsg): QueryAllUserRequest;
    fromProtoMsg(message: QueryAllUserRequestProtoMsg): QueryAllUserRequest;
    toProto(message: QueryAllUserRequest): Uint8Array;
    toProtoMsg(message: QueryAllUserRequest): QueryAllUserRequestProtoMsg;
};
export declare const QueryAllUserResponse: {
    typeUrl: string;
    encode(message: QueryAllUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllUserResponse;
    fromPartial(object: Partial<QueryAllUserResponse>): QueryAllUserResponse;
    fromAmino(object: QueryAllUserResponseAmino): QueryAllUserResponse;
    toAmino(message: QueryAllUserResponse): QueryAllUserResponseAmino;
    fromAminoMsg(object: QueryAllUserResponseAminoMsg): QueryAllUserResponse;
    fromProtoMsg(message: QueryAllUserResponseProtoMsg): QueryAllUserResponse;
    toProto(message: QueryAllUserResponse): Uint8Array;
    toProtoMsg(message: QueryAllUserResponse): QueryAllUserResponseProtoMsg;
};
export declare const QueryAllAnyRepositoryRequest: {
    typeUrl: string;
    encode(message: QueryAllAnyRepositoryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllAnyRepositoryRequest;
    fromPartial(object: Partial<QueryAllAnyRepositoryRequest>): QueryAllAnyRepositoryRequest;
    fromAmino(object: QueryAllAnyRepositoryRequestAmino): QueryAllAnyRepositoryRequest;
    toAmino(message: QueryAllAnyRepositoryRequest): QueryAllAnyRepositoryRequestAmino;
    fromAminoMsg(object: QueryAllAnyRepositoryRequestAminoMsg): QueryAllAnyRepositoryRequest;
    fromProtoMsg(message: QueryAllAnyRepositoryRequestProtoMsg): QueryAllAnyRepositoryRequest;
    toProto(message: QueryAllAnyRepositoryRequest): Uint8Array;
    toProtoMsg(message: QueryAllAnyRepositoryRequest): QueryAllAnyRepositoryRequestProtoMsg;
};
export declare const QueryAllAnyRepositoryResponse: {
    typeUrl: string;
    encode(message: QueryAllAnyRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllAnyRepositoryResponse;
    fromPartial(object: Partial<QueryAllAnyRepositoryResponse>): QueryAllAnyRepositoryResponse;
    fromAmino(object: QueryAllAnyRepositoryResponseAmino): QueryAllAnyRepositoryResponse;
    toAmino(message: QueryAllAnyRepositoryResponse): QueryAllAnyRepositoryResponseAmino;
    fromAminoMsg(object: QueryAllAnyRepositoryResponseAminoMsg): QueryAllAnyRepositoryResponse;
    fromProtoMsg(message: QueryAllAnyRepositoryResponseProtoMsg): QueryAllAnyRepositoryResponse;
    toProto(message: QueryAllAnyRepositoryResponse): Uint8Array;
    toProtoMsg(message: QueryAllAnyRepositoryResponse): QueryAllAnyRepositoryResponseProtoMsg;
};
export declare const QueryGetAnyRepositoryRequest: {
    typeUrl: string;
    encode(message: QueryGetAnyRepositoryRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetAnyRepositoryRequest;
    fromPartial(object: Partial<QueryGetAnyRepositoryRequest>): QueryGetAnyRepositoryRequest;
    fromAmino(object: QueryGetAnyRepositoryRequestAmino): QueryGetAnyRepositoryRequest;
    toAmino(message: QueryGetAnyRepositoryRequest): QueryGetAnyRepositoryRequestAmino;
    fromAminoMsg(object: QueryGetAnyRepositoryRequestAminoMsg): QueryGetAnyRepositoryRequest;
    fromProtoMsg(message: QueryGetAnyRepositoryRequestProtoMsg): QueryGetAnyRepositoryRequest;
    toProto(message: QueryGetAnyRepositoryRequest): Uint8Array;
    toProtoMsg(message: QueryGetAnyRepositoryRequest): QueryGetAnyRepositoryRequestProtoMsg;
};
export declare const QueryGetAnyRepositoryResponse: {
    typeUrl: string;
    encode(message: QueryGetAnyRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetAnyRepositoryResponse;
    fromPartial(object: Partial<QueryGetAnyRepositoryResponse>): QueryGetAnyRepositoryResponse;
    fromAmino(object: QueryGetAnyRepositoryResponseAmino): QueryGetAnyRepositoryResponse;
    toAmino(message: QueryGetAnyRepositoryResponse): QueryGetAnyRepositoryResponseAmino;
    fromAminoMsg(object: QueryGetAnyRepositoryResponseAminoMsg): QueryGetAnyRepositoryResponse;
    fromProtoMsg(message: QueryGetAnyRepositoryResponseProtoMsg): QueryGetAnyRepositoryResponse;
    toProto(message: QueryGetAnyRepositoryResponse): Uint8Array;
    toProtoMsg(message: QueryGetAnyRepositoryResponse): QueryGetAnyRepositoryResponseProtoMsg;
};
export declare const QueryGetWhoisRequest: {
    typeUrl: string;
    encode(message: QueryGetWhoisRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetWhoisRequest;
    fromPartial(object: Partial<QueryGetWhoisRequest>): QueryGetWhoisRequest;
    fromAmino(object: QueryGetWhoisRequestAmino): QueryGetWhoisRequest;
    toAmino(message: QueryGetWhoisRequest): QueryGetWhoisRequestAmino;
    fromAminoMsg(object: QueryGetWhoisRequestAminoMsg): QueryGetWhoisRequest;
    fromProtoMsg(message: QueryGetWhoisRequestProtoMsg): QueryGetWhoisRequest;
    toProto(message: QueryGetWhoisRequest): Uint8Array;
    toProtoMsg(message: QueryGetWhoisRequest): QueryGetWhoisRequestProtoMsg;
};
export declare const QueryGetWhoisResponse: {
    typeUrl: string;
    encode(message: QueryGetWhoisResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryGetWhoisResponse;
    fromPartial(object: Partial<QueryGetWhoisResponse>): QueryGetWhoisResponse;
    fromAmino(object: QueryGetWhoisResponseAmino): QueryGetWhoisResponse;
    toAmino(message: QueryGetWhoisResponse): QueryGetWhoisResponseAmino;
    fromAminoMsg(object: QueryGetWhoisResponseAminoMsg): QueryGetWhoisResponse;
    fromProtoMsg(message: QueryGetWhoisResponseProtoMsg): QueryGetWhoisResponse;
    toProto(message: QueryGetWhoisResponse): Uint8Array;
    toProtoMsg(message: QueryGetWhoisResponse): QueryGetWhoisResponseProtoMsg;
};
export declare const QueryAllWhoisRequest: {
    typeUrl: string;
    encode(message: QueryAllWhoisRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllWhoisRequest;
    fromPartial(object: Partial<QueryAllWhoisRequest>): QueryAllWhoisRequest;
    fromAmino(object: QueryAllWhoisRequestAmino): QueryAllWhoisRequest;
    toAmino(message: QueryAllWhoisRequest): QueryAllWhoisRequestAmino;
    fromAminoMsg(object: QueryAllWhoisRequestAminoMsg): QueryAllWhoisRequest;
    fromProtoMsg(message: QueryAllWhoisRequestProtoMsg): QueryAllWhoisRequest;
    toProto(message: QueryAllWhoisRequest): Uint8Array;
    toProtoMsg(message: QueryAllWhoisRequest): QueryAllWhoisRequestProtoMsg;
};
export declare const QueryAllWhoisResponse: {
    typeUrl: string;
    encode(message: QueryAllWhoisResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryAllWhoisResponse;
    fromPartial(object: Partial<QueryAllWhoisResponse>): QueryAllWhoisResponse;
    fromAmino(object: QueryAllWhoisResponseAmino): QueryAllWhoisResponse;
    toAmino(message: QueryAllWhoisResponse): QueryAllWhoisResponseAmino;
    fromAminoMsg(object: QueryAllWhoisResponseAminoMsg): QueryAllWhoisResponse;
    fromProtoMsg(message: QueryAllWhoisResponseProtoMsg): QueryAllWhoisResponse;
    toProto(message: QueryAllWhoisResponse): Uint8Array;
    toProtoMsg(message: QueryAllWhoisResponse): QueryAllWhoisResponseProtoMsg;
};
