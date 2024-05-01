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
import { isSet } from "../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/gitopia.gitopia.gitopia.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVestedAmountRequest(): QueryVestedAmountRequest {
  return {
    address: ""
  };
}
export const QueryVestedAmountRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountRequest",
  encode(message: QueryVestedAmountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryVestedAmountRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryVestedAmountRequest>): QueryVestedAmountRequest {
    const message = createBaseQueryVestedAmountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryVestedAmountRequestAmino): QueryVestedAmountRequest {
    const message = createBaseQueryVestedAmountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryVestedAmountRequest): QueryVestedAmountRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryVestedAmountRequestAminoMsg): QueryVestedAmountRequest {
    return QueryVestedAmountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestedAmountRequestProtoMsg): QueryVestedAmountRequest {
    return QueryVestedAmountRequest.decode(message.value);
  },
  toProto(message: QueryVestedAmountRequest): Uint8Array {
    return QueryVestedAmountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVestedAmountRequest): QueryVestedAmountRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountRequest",
      value: QueryVestedAmountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVestedAmountResponse(): QueryVestedAmountResponse {
  return {
    address: "",
    amount: Coin.fromPartial({}),
    exercisedAmount: Coin.fromPartial({})
  };
}
export const QueryVestedAmountResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountResponse",
  encode(message: QueryVestedAmountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.exercisedAmount !== undefined) {
      Coin.encode(message.exercisedAmount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVestedAmountResponse {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      exercisedAmount: isSet(object.exercisedAmount) ? Coin.fromJSON(object.exercisedAmount) : undefined
    };
  },
  fromPartial(object: Partial<QueryVestedAmountResponse>): QueryVestedAmountResponse {
    const message = createBaseQueryVestedAmountResponse();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.exercisedAmount = object.exercisedAmount !== undefined && object.exercisedAmount !== null ? Coin.fromPartial(object.exercisedAmount) : undefined;
    return message;
  },
  fromAmino(object: QueryVestedAmountResponseAmino): QueryVestedAmountResponse {
    const message = createBaseQueryVestedAmountResponse();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.exercisedAmount !== undefined && object.exercisedAmount !== null) {
      message.exercisedAmount = Coin.fromAmino(object.exercisedAmount);
    }
    return message;
  },
  toAmino(message: QueryVestedAmountResponse): QueryVestedAmountResponseAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.exercisedAmount = message.exercisedAmount ? Coin.toAmino(message.exercisedAmount) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVestedAmountResponseAminoMsg): QueryVestedAmountResponse {
    return QueryVestedAmountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVestedAmountResponseProtoMsg): QueryVestedAmountResponse {
    return QueryVestedAmountResponse.decode(message.value);
  },
  toProto(message: QueryVestedAmountResponse): Uint8Array {
    return QueryVestedAmountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVestedAmountResponse): QueryVestedAmountResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryVestedAmountResponse",
      value: QueryVestedAmountResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCheckStorageProviderAuthorizationRequest(): QueryCheckStorageProviderAuthorizationRequest {
  return {
    userAddress: "",
    providerAddress: ""
  };
}
export const QueryCheckStorageProviderAuthorizationRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationRequest",
  encode(message: QueryCheckStorageProviderAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryCheckStorageProviderAuthorizationRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      providerAddress: isSet(object.providerAddress) ? String(object.providerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryCheckStorageProviderAuthorizationRequest>): QueryCheckStorageProviderAuthorizationRequest {
    const message = createBaseQueryCheckStorageProviderAuthorizationRequest();
    message.userAddress = object.userAddress ?? "";
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryCheckStorageProviderAuthorizationRequestAmino): QueryCheckStorageProviderAuthorizationRequest {
    const message = createBaseQueryCheckStorageProviderAuthorizationRequest();
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = object.userAddress;
    }
    if (object.providerAddress !== undefined && object.providerAddress !== null) {
      message.providerAddress = object.providerAddress;
    }
    return message;
  },
  toAmino(message: QueryCheckStorageProviderAuthorizationRequest): QueryCheckStorageProviderAuthorizationRequestAmino {
    const obj: any = {};
    obj.userAddress = message.userAddress === "" ? undefined : message.userAddress;
    obj.providerAddress = message.providerAddress === "" ? undefined : message.providerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryCheckStorageProviderAuthorizationRequestAminoMsg): QueryCheckStorageProviderAuthorizationRequest {
    return QueryCheckStorageProviderAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCheckStorageProviderAuthorizationRequestProtoMsg): QueryCheckStorageProviderAuthorizationRequest {
    return QueryCheckStorageProviderAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryCheckStorageProviderAuthorizationRequest): Uint8Array {
    return QueryCheckStorageProviderAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCheckStorageProviderAuthorizationRequest): QueryCheckStorageProviderAuthorizationRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationRequest",
      value: QueryCheckStorageProviderAuthorizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCheckStorageProviderAuthorizationResponse(): QueryCheckStorageProviderAuthorizationResponse {
  return {
    haveAuthorization: false
  };
}
export const QueryCheckStorageProviderAuthorizationResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationResponse",
  encode(message: QueryCheckStorageProviderAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.haveAuthorization === true) {
      writer.uint32(8).bool(message.haveAuthorization);
    }
    return writer;
  },
  fromJSON(object: any): QueryCheckStorageProviderAuthorizationResponse {
    return {
      haveAuthorization: isSet(object.haveAuthorization) ? Boolean(object.haveAuthorization) : false
    };
  },
  fromPartial(object: Partial<QueryCheckStorageProviderAuthorizationResponse>): QueryCheckStorageProviderAuthorizationResponse {
    const message = createBaseQueryCheckStorageProviderAuthorizationResponse();
    message.haveAuthorization = object.haveAuthorization ?? false;
    return message;
  },
  fromAmino(object: QueryCheckStorageProviderAuthorizationResponseAmino): QueryCheckStorageProviderAuthorizationResponse {
    const message = createBaseQueryCheckStorageProviderAuthorizationResponse();
    if (object.haveAuthorization !== undefined && object.haveAuthorization !== null) {
      message.haveAuthorization = object.haveAuthorization;
    }
    return message;
  },
  toAmino(message: QueryCheckStorageProviderAuthorizationResponse): QueryCheckStorageProviderAuthorizationResponseAmino {
    const obj: any = {};
    obj.haveAuthorization = message.haveAuthorization === false ? undefined : message.haveAuthorization;
    return obj;
  },
  fromAminoMsg(object: QueryCheckStorageProviderAuthorizationResponseAminoMsg): QueryCheckStorageProviderAuthorizationResponse {
    return QueryCheckStorageProviderAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCheckStorageProviderAuthorizationResponseProtoMsg): QueryCheckStorageProviderAuthorizationResponse {
    return QueryCheckStorageProviderAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryCheckStorageProviderAuthorizationResponse): Uint8Array {
    return QueryCheckStorageProviderAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCheckStorageProviderAuthorizationResponse): QueryCheckStorageProviderAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryCheckStorageProviderAuthorizationResponse",
      value: QueryCheckStorageProviderAuthorizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTaskRequest(): QueryGetTaskRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetTaskRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskRequest",
  encode(message: QueryGetTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetTaskRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetTaskRequest>): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTaskRequestAmino): QueryGetTaskRequest {
    const message = createBaseQueryGetTaskRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetTaskRequest): QueryGetTaskRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTaskRequestAminoMsg): QueryGetTaskRequest {
    return QueryGetTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTaskRequestProtoMsg): QueryGetTaskRequest {
    return QueryGetTaskRequest.decode(message.value);
  },
  toProto(message: QueryGetTaskRequest): Uint8Array {
    return QueryGetTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTaskRequest): QueryGetTaskRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskRequest",
      value: QueryGetTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTaskResponse(): QueryGetTaskResponse {
  return {
    Task: Task.fromPartial({})
  };
}
export const QueryGetTaskResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskResponse",
  encode(message: QueryGetTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Task !== undefined) {
      Task.encode(message.Task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetTaskResponse {
    return {
      Task: isSet(object.Task) ? Task.fromJSON(object.Task) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetTaskResponse>): QueryGetTaskResponse {
    const message = createBaseQueryGetTaskResponse();
    message.Task = object.Task !== undefined && object.Task !== null ? Task.fromPartial(object.Task) : undefined;
    return message;
  },
  fromAmino(object: QueryGetTaskResponseAmino): QueryGetTaskResponse {
    const message = createBaseQueryGetTaskResponse();
    if (object.Task !== undefined && object.Task !== null) {
      message.Task = Task.fromAmino(object.Task);
    }
    return message;
  },
  toAmino(message: QueryGetTaskResponse): QueryGetTaskResponseAmino {
    const obj: any = {};
    obj.Task = message.Task ? Task.toAmino(message.Task) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTaskResponseAminoMsg): QueryGetTaskResponse {
    return QueryGetTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTaskResponseProtoMsg): QueryGetTaskResponse {
    return QueryGetTaskResponse.decode(message.value);
  },
  toProto(message: QueryGetTaskResponse): Uint8Array {
    return QueryGetTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTaskResponse): QueryGetTaskResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetTaskResponse",
      value: QueryGetTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTaskRequest(): QueryAllTaskRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTaskRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskRequest",
  encode(message: QueryAllTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTaskRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTaskRequest>): QueryAllTaskRequest {
    const message = createBaseQueryAllTaskRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTaskRequestAmino): QueryAllTaskRequest {
    const message = createBaseQueryAllTaskRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTaskRequest): QueryAllTaskRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTaskRequestAminoMsg): QueryAllTaskRequest {
    return QueryAllTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTaskRequestProtoMsg): QueryAllTaskRequest {
    return QueryAllTaskRequest.decode(message.value);
  },
  toProto(message: QueryAllTaskRequest): Uint8Array {
    return QueryAllTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTaskRequest): QueryAllTaskRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskRequest",
      value: QueryAllTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTaskResponse(): QueryAllTaskResponse {
  return {
    Task: [],
    pagination: undefined
  };
}
export const QueryAllTaskResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskResponse",
  encode(message: QueryAllTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Task) {
      Task.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTaskResponse {
    return {
      Task: Array.isArray(object?.Task) ? object.Task.map((e: any) => Task.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTaskResponse>): QueryAllTaskResponse {
    const message = createBaseQueryAllTaskResponse();
    message.Task = object.Task?.map(e => Task.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTaskResponseAmino): QueryAllTaskResponse {
    const message = createBaseQueryAllTaskResponse();
    message.Task = object.Task?.map(e => Task.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTaskResponse): QueryAllTaskResponseAmino {
    const obj: any = {};
    if (message.Task) {
      obj.Task = message.Task.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.Task = message.Task;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTaskResponseAminoMsg): QueryAllTaskResponse {
    return QueryAllTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTaskResponseProtoMsg): QueryAllTaskResponse {
    return QueryAllTaskResponse.decode(message.value);
  },
  toProto(message: QueryAllTaskResponse): Uint8Array {
    return QueryAllTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTaskResponse): QueryAllTaskResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllTaskResponse",
      value: QueryAllTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCheckGitServerAuthorizationRequest(): QueryCheckGitServerAuthorizationRequest {
  return {
    userAddress: "",
    providerAddress: ""
  };
}
export const QueryCheckGitServerAuthorizationRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationRequest",
  encode(message: QueryCheckGitServerAuthorizationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.providerAddress !== "") {
      writer.uint32(18).string(message.providerAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryCheckGitServerAuthorizationRequest {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      providerAddress: isSet(object.providerAddress) ? String(object.providerAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryCheckGitServerAuthorizationRequest>): QueryCheckGitServerAuthorizationRequest {
    const message = createBaseQueryCheckGitServerAuthorizationRequest();
    message.userAddress = object.userAddress ?? "";
    message.providerAddress = object.providerAddress ?? "";
    return message;
  },
  fromAmino(object: QueryCheckGitServerAuthorizationRequestAmino): QueryCheckGitServerAuthorizationRequest {
    const message = createBaseQueryCheckGitServerAuthorizationRequest();
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = object.userAddress;
    }
    if (object.providerAddress !== undefined && object.providerAddress !== null) {
      message.providerAddress = object.providerAddress;
    }
    return message;
  },
  toAmino(message: QueryCheckGitServerAuthorizationRequest): QueryCheckGitServerAuthorizationRequestAmino {
    const obj: any = {};
    obj.userAddress = message.userAddress === "" ? undefined : message.userAddress;
    obj.providerAddress = message.providerAddress === "" ? undefined : message.providerAddress;
    return obj;
  },
  fromAminoMsg(object: QueryCheckGitServerAuthorizationRequestAminoMsg): QueryCheckGitServerAuthorizationRequest {
    return QueryCheckGitServerAuthorizationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCheckGitServerAuthorizationRequestProtoMsg): QueryCheckGitServerAuthorizationRequest {
    return QueryCheckGitServerAuthorizationRequest.decode(message.value);
  },
  toProto(message: QueryCheckGitServerAuthorizationRequest): Uint8Array {
    return QueryCheckGitServerAuthorizationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCheckGitServerAuthorizationRequest): QueryCheckGitServerAuthorizationRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationRequest",
      value: QueryCheckGitServerAuthorizationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCheckGitServerAuthorizationResponse(): QueryCheckGitServerAuthorizationResponse {
  return {
    haveAuthorization: false
  };
}
export const QueryCheckGitServerAuthorizationResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationResponse",
  encode(message: QueryCheckGitServerAuthorizationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.haveAuthorization === true) {
      writer.uint32(8).bool(message.haveAuthorization);
    }
    return writer;
  },
  fromJSON(object: any): QueryCheckGitServerAuthorizationResponse {
    return {
      haveAuthorization: isSet(object.haveAuthorization) ? Boolean(object.haveAuthorization) : false
    };
  },
  fromPartial(object: Partial<QueryCheckGitServerAuthorizationResponse>): QueryCheckGitServerAuthorizationResponse {
    const message = createBaseQueryCheckGitServerAuthorizationResponse();
    message.haveAuthorization = object.haveAuthorization ?? false;
    return message;
  },
  fromAmino(object: QueryCheckGitServerAuthorizationResponseAmino): QueryCheckGitServerAuthorizationResponse {
    const message = createBaseQueryCheckGitServerAuthorizationResponse();
    if (object.haveAuthorization !== undefined && object.haveAuthorization !== null) {
      message.haveAuthorization = object.haveAuthorization;
    }
    return message;
  },
  toAmino(message: QueryCheckGitServerAuthorizationResponse): QueryCheckGitServerAuthorizationResponseAmino {
    const obj: any = {};
    obj.haveAuthorization = message.haveAuthorization === false ? undefined : message.haveAuthorization;
    return obj;
  },
  fromAminoMsg(object: QueryCheckGitServerAuthorizationResponseAminoMsg): QueryCheckGitServerAuthorizationResponse {
    return QueryCheckGitServerAuthorizationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCheckGitServerAuthorizationResponseProtoMsg): QueryCheckGitServerAuthorizationResponse {
    return QueryCheckGitServerAuthorizationResponse.decode(message.value);
  },
  toProto(message: QueryCheckGitServerAuthorizationResponse): Uint8Array {
    return QueryCheckGitServerAuthorizationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCheckGitServerAuthorizationResponse): QueryCheckGitServerAuthorizationResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryCheckGitServerAuthorizationResponse",
      value: QueryCheckGitServerAuthorizationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBranchRequest(): QueryAllBranchRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBranchRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchRequest",
  encode(message: QueryAllBranchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBranchRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBranchRequest>): QueryAllBranchRequest {
    const message = createBaseQueryAllBranchRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBranchRequestAmino): QueryAllBranchRequest {
    const message = createBaseQueryAllBranchRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBranchRequest): QueryAllBranchRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBranchRequestAminoMsg): QueryAllBranchRequest {
    return QueryAllBranchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBranchRequestProtoMsg): QueryAllBranchRequest {
    return QueryAllBranchRequest.decode(message.value);
  },
  toProto(message: QueryAllBranchRequest): Uint8Array {
    return QueryAllBranchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBranchRequest): QueryAllBranchRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchRequest",
      value: QueryAllBranchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBranchResponse(): QueryAllBranchResponse {
  return {
    Branch: [],
    pagination: undefined
  };
}
export const QueryAllBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchResponse",
  encode(message: QueryAllBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Branch) {
      Branch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBranchResponse {
    return {
      Branch: Array.isArray(object?.Branch) ? object.Branch.map((e: any) => Branch.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBranchResponse>): QueryAllBranchResponse {
    const message = createBaseQueryAllBranchResponse();
    message.Branch = object.Branch?.map(e => Branch.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBranchResponseAmino): QueryAllBranchResponse {
    const message = createBaseQueryAllBranchResponse();
    message.Branch = object.Branch?.map(e => Branch.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBranchResponse): QueryAllBranchResponseAmino {
    const obj: any = {};
    if (message.Branch) {
      obj.Branch = message.Branch.map(e => e ? Branch.toAmino(e) : undefined);
    } else {
      obj.Branch = message.Branch;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBranchResponseAminoMsg): QueryAllBranchResponse {
    return QueryAllBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBranchResponseProtoMsg): QueryAllBranchResponse {
    return QueryAllBranchResponse.decode(message.value);
  },
  toProto(message: QueryAllBranchResponse): Uint8Array {
    return QueryAllBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBranchResponse): QueryAllBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllBranchResponse",
      value: QueryAllBranchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryBranchRequest(): QueryGetRepositoryBranchRequest {
  return {
    id: "",
    repositoryName: "",
    branchName: ""
  };
}
export const QueryGetRepositoryBranchRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchRequest",
  encode(message: QueryGetRepositoryBranchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.branchName !== "") {
      writer.uint32(26).string(message.branchName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryBranchRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      branchName: isSet(object.branchName) ? String(object.branchName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryBranchRequest>): QueryGetRepositoryBranchRequest {
    const message = createBaseQueryGetRepositoryBranchRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.branchName = object.branchName ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryBranchRequestAmino): QueryGetRepositoryBranchRequest {
    const message = createBaseQueryGetRepositoryBranchRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.branchName !== undefined && object.branchName !== null) {
      message.branchName = object.branchName;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryBranchRequest): QueryGetRepositoryBranchRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.branchName = message.branchName === "" ? undefined : message.branchName;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryBranchRequestAminoMsg): QueryGetRepositoryBranchRequest {
    return QueryGetRepositoryBranchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryBranchRequestProtoMsg): QueryGetRepositoryBranchRequest {
    return QueryGetRepositoryBranchRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryBranchRequest): Uint8Array {
    return QueryGetRepositoryBranchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryBranchRequest): QueryGetRepositoryBranchRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchRequest",
      value: QueryGetRepositoryBranchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryBranchResponse(): QueryGetRepositoryBranchResponse {
  return {
    Branch: Branch.fromPartial({})
  };
}
export const QueryGetRepositoryBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchResponse",
  encode(message: QueryGetRepositoryBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Branch !== undefined) {
      Branch.encode(message.Branch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryBranchResponse {
    return {
      Branch: isSet(object.Branch) ? Branch.fromJSON(object.Branch) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryBranchResponse>): QueryGetRepositoryBranchResponse {
    const message = createBaseQueryGetRepositoryBranchResponse();
    message.Branch = object.Branch !== undefined && object.Branch !== null ? Branch.fromPartial(object.Branch) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryBranchResponseAmino): QueryGetRepositoryBranchResponse {
    const message = createBaseQueryGetRepositoryBranchResponse();
    if (object.Branch !== undefined && object.Branch !== null) {
      message.Branch = Branch.fromAmino(object.Branch);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryBranchResponse): QueryGetRepositoryBranchResponseAmino {
    const obj: any = {};
    obj.Branch = message.Branch ? Branch.toAmino(message.Branch) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryBranchResponseAminoMsg): QueryGetRepositoryBranchResponse {
    return QueryGetRepositoryBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryBranchResponseProtoMsg): QueryGetRepositoryBranchResponse {
    return QueryGetRepositoryBranchResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryBranchResponse): Uint8Array {
    return QueryGetRepositoryBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryBranchResponse): QueryGetRepositoryBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchResponse",
      value: QueryGetRepositoryBranchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryBranchShaRequest(): QueryGetRepositoryBranchShaRequest {
  return {
    id: "",
    repositoryName: "",
    branchName: ""
  };
}
export const QueryGetRepositoryBranchShaRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaRequest",
  encode(message: QueryGetRepositoryBranchShaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.branchName !== "") {
      writer.uint32(26).string(message.branchName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryBranchShaRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      branchName: isSet(object.branchName) ? String(object.branchName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryBranchShaRequest>): QueryGetRepositoryBranchShaRequest {
    const message = createBaseQueryGetRepositoryBranchShaRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.branchName = object.branchName ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryBranchShaRequestAmino): QueryGetRepositoryBranchShaRequest {
    const message = createBaseQueryGetRepositoryBranchShaRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.branchName !== undefined && object.branchName !== null) {
      message.branchName = object.branchName;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryBranchShaRequest): QueryGetRepositoryBranchShaRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.branchName = message.branchName === "" ? undefined : message.branchName;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryBranchShaRequestAminoMsg): QueryGetRepositoryBranchShaRequest {
    return QueryGetRepositoryBranchShaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryBranchShaRequestProtoMsg): QueryGetRepositoryBranchShaRequest {
    return QueryGetRepositoryBranchShaRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryBranchShaRequest): Uint8Array {
    return QueryGetRepositoryBranchShaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryBranchShaRequest): QueryGetRepositoryBranchShaRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaRequest",
      value: QueryGetRepositoryBranchShaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryBranchShaResponse(): QueryGetRepositoryBranchShaResponse {
  return {
    sha: ""
  };
}
export const QueryGetRepositoryBranchShaResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaResponse",
  encode(message: QueryGetRepositoryBranchShaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sha !== "") {
      writer.uint32(10).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryBranchShaResponse {
    return {
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryBranchShaResponse>): QueryGetRepositoryBranchShaResponse {
    const message = createBaseQueryGetRepositoryBranchShaResponse();
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryBranchShaResponseAmino): QueryGetRepositoryBranchShaResponse {
    const message = createBaseQueryGetRepositoryBranchShaResponse();
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryBranchShaResponse): QueryGetRepositoryBranchShaResponseAmino {
    const obj: any = {};
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryBranchShaResponseAminoMsg): QueryGetRepositoryBranchShaResponse {
    return QueryGetRepositoryBranchShaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryBranchShaResponseProtoMsg): QueryGetRepositoryBranchShaResponse {
    return QueryGetRepositoryBranchShaResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryBranchShaResponse): Uint8Array {
    return QueryGetRepositoryBranchShaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryBranchShaResponse): QueryGetRepositoryBranchShaResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryBranchShaResponse",
      value: QueryGetRepositoryBranchShaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryBranchRequest(): QueryAllRepositoryBranchRequest {
  return {
    id: "",
    repositoryName: "",
    pagination: undefined
  };
}
export const QueryAllRepositoryBranchRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchRequest",
  encode(message: QueryAllRepositoryBranchRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryBranchRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryBranchRequest>): QueryAllRepositoryBranchRequest {
    const message = createBaseQueryAllRepositoryBranchRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryBranchRequestAmino): QueryAllRepositoryBranchRequest {
    const message = createBaseQueryAllRepositoryBranchRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryBranchRequest): QueryAllRepositoryBranchRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryBranchRequestAminoMsg): QueryAllRepositoryBranchRequest {
    return QueryAllRepositoryBranchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryBranchRequestProtoMsg): QueryAllRepositoryBranchRequest {
    return QueryAllRepositoryBranchRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryBranchRequest): Uint8Array {
    return QueryAllRepositoryBranchRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryBranchRequest): QueryAllRepositoryBranchRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchRequest",
      value: QueryAllRepositoryBranchRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryBranchResponse(): QueryAllRepositoryBranchResponse {
  return {
    Branch: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchResponse",
  encode(message: QueryAllRepositoryBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Branch) {
      Branch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryBranchResponse {
    return {
      Branch: Array.isArray(object?.Branch) ? object.Branch.map((e: any) => Branch.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryBranchResponse>): QueryAllRepositoryBranchResponse {
    const message = createBaseQueryAllRepositoryBranchResponse();
    message.Branch = object.Branch?.map(e => Branch.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryBranchResponseAmino): QueryAllRepositoryBranchResponse {
    const message = createBaseQueryAllRepositoryBranchResponse();
    message.Branch = object.Branch?.map(e => Branch.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryBranchResponse): QueryAllRepositoryBranchResponseAmino {
    const obj: any = {};
    if (message.Branch) {
      obj.Branch = message.Branch.map(e => e ? Branch.toAmino(e) : undefined);
    } else {
      obj.Branch = message.Branch;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryBranchResponseAminoMsg): QueryAllRepositoryBranchResponse {
    return QueryAllRepositoryBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryBranchResponseProtoMsg): QueryAllRepositoryBranchResponse {
    return QueryAllRepositoryBranchResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryBranchResponse): Uint8Array {
    return QueryAllRepositoryBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryBranchResponse): QueryAllRepositoryBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryBranchResponse",
      value: QueryAllRepositoryBranchResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagRequest(): QueryAllTagRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllTagRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagRequest",
  encode(message: QueryAllTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTagRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTagRequest>): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagRequestAmino): QueryAllTagRequest {
    const message = createBaseQueryAllTagRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagRequest): QueryAllTagRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagRequestAminoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagRequestProtoMsg): QueryAllTagRequest {
    return QueryAllTagRequest.decode(message.value);
  },
  toProto(message: QueryAllTagRequest): Uint8Array {
    return QueryAllTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagRequest): QueryAllTagRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagRequest",
      value: QueryAllTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTagResponse(): QueryAllTagResponse {
  return {
    Tag: [],
    pagination: undefined
  };
}
export const QueryAllTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagResponse",
  encode(message: QueryAllTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Tag) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllTagResponse {
    return {
      Tag: Array.isArray(object?.Tag) ? object.Tag.map((e: any) => Tag.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllTagResponse>): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.Tag = object.Tag?.map(e => Tag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTagResponseAmino): QueryAllTagResponse {
    const message = createBaseQueryAllTagResponse();
    message.Tag = object.Tag?.map(e => Tag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllTagResponse): QueryAllTagResponseAmino {
    const obj: any = {};
    if (message.Tag) {
      obj.Tag = message.Tag.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.Tag = message.Tag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTagResponseAminoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllTagResponseProtoMsg): QueryAllTagResponse {
    return QueryAllTagResponse.decode(message.value);
  },
  toProto(message: QueryAllTagResponse): Uint8Array {
    return QueryAllTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTagResponse): QueryAllTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllTagResponse",
      value: QueryAllTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryTagRequest(): QueryGetRepositoryTagRequest {
  return {
    id: "",
    repositoryName: "",
    tagName: ""
  };
}
export const QueryGetRepositoryTagRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagRequest",
  encode(message: QueryGetRepositoryTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.tagName !== "") {
      writer.uint32(26).string(message.tagName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryTagRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      tagName: isSet(object.tagName) ? String(object.tagName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryTagRequest>): QueryGetRepositoryTagRequest {
    const message = createBaseQueryGetRepositoryTagRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryTagRequestAmino): QueryGetRepositoryTagRequest {
    const message = createBaseQueryGetRepositoryTagRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryTagRequest): QueryGetRepositoryTagRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryTagRequestAminoMsg): QueryGetRepositoryTagRequest {
    return QueryGetRepositoryTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryTagRequestProtoMsg): QueryGetRepositoryTagRequest {
    return QueryGetRepositoryTagRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryTagRequest): Uint8Array {
    return QueryGetRepositoryTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryTagRequest): QueryGetRepositoryTagRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagRequest",
      value: QueryGetRepositoryTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryTagResponse(): QueryGetRepositoryTagResponse {
  return {
    Tag: Tag.fromPartial({})
  };
}
export const QueryGetRepositoryTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagResponse",
  encode(message: QueryGetRepositoryTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Tag !== undefined) {
      Tag.encode(message.Tag, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryTagResponse {
    return {
      Tag: isSet(object.Tag) ? Tag.fromJSON(object.Tag) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryTagResponse>): QueryGetRepositoryTagResponse {
    const message = createBaseQueryGetRepositoryTagResponse();
    message.Tag = object.Tag !== undefined && object.Tag !== null ? Tag.fromPartial(object.Tag) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryTagResponseAmino): QueryGetRepositoryTagResponse {
    const message = createBaseQueryGetRepositoryTagResponse();
    if (object.Tag !== undefined && object.Tag !== null) {
      message.Tag = Tag.fromAmino(object.Tag);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryTagResponse): QueryGetRepositoryTagResponseAmino {
    const obj: any = {};
    obj.Tag = message.Tag ? Tag.toAmino(message.Tag) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryTagResponseAminoMsg): QueryGetRepositoryTagResponse {
    return QueryGetRepositoryTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryTagResponseProtoMsg): QueryGetRepositoryTagResponse {
    return QueryGetRepositoryTagResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryTagResponse): Uint8Array {
    return QueryGetRepositoryTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryTagResponse): QueryGetRepositoryTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagResponse",
      value: QueryGetRepositoryTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryTagShaRequest(): QueryGetRepositoryTagShaRequest {
  return {
    id: "",
    repositoryName: "",
    tagName: ""
  };
}
export const QueryGetRepositoryTagShaRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaRequest",
  encode(message: QueryGetRepositoryTagShaRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.tagName !== "") {
      writer.uint32(26).string(message.tagName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryTagShaRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      tagName: isSet(object.tagName) ? String(object.tagName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryTagShaRequest>): QueryGetRepositoryTagShaRequest {
    const message = createBaseQueryGetRepositoryTagShaRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryTagShaRequestAmino): QueryGetRepositoryTagShaRequest {
    const message = createBaseQueryGetRepositoryTagShaRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryTagShaRequest): QueryGetRepositoryTagShaRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryTagShaRequestAminoMsg): QueryGetRepositoryTagShaRequest {
    return QueryGetRepositoryTagShaRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryTagShaRequestProtoMsg): QueryGetRepositoryTagShaRequest {
    return QueryGetRepositoryTagShaRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryTagShaRequest): Uint8Array {
    return QueryGetRepositoryTagShaRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryTagShaRequest): QueryGetRepositoryTagShaRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaRequest",
      value: QueryGetRepositoryTagShaRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryTagShaResponse(): QueryGetRepositoryTagShaResponse {
  return {
    sha: ""
  };
}
export const QueryGetRepositoryTagShaResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaResponse",
  encode(message: QueryGetRepositoryTagShaResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sha !== "") {
      writer.uint32(10).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryTagShaResponse {
    return {
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryTagShaResponse>): QueryGetRepositoryTagShaResponse {
    const message = createBaseQueryGetRepositoryTagShaResponse();
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryTagShaResponseAmino): QueryGetRepositoryTagShaResponse {
    const message = createBaseQueryGetRepositoryTagShaResponse();
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryTagShaResponse): QueryGetRepositoryTagShaResponseAmino {
    const obj: any = {};
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryTagShaResponseAminoMsg): QueryGetRepositoryTagShaResponse {
    return QueryGetRepositoryTagShaResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryTagShaResponseProtoMsg): QueryGetRepositoryTagShaResponse {
    return QueryGetRepositoryTagShaResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryTagShaResponse): Uint8Array {
    return QueryGetRepositoryTagShaResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryTagShaResponse): QueryGetRepositoryTagShaResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryTagShaResponse",
      value: QueryGetRepositoryTagShaResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryTagRequest(): QueryAllRepositoryTagRequest {
  return {
    id: "",
    repositoryName: "",
    pagination: undefined
  };
}
export const QueryAllRepositoryTagRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagRequest",
  encode(message: QueryAllRepositoryTagRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryTagRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryTagRequest>): QueryAllRepositoryTagRequest {
    const message = createBaseQueryAllRepositoryTagRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryTagRequestAmino): QueryAllRepositoryTagRequest {
    const message = createBaseQueryAllRepositoryTagRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryTagRequest): QueryAllRepositoryTagRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryTagRequestAminoMsg): QueryAllRepositoryTagRequest {
    return QueryAllRepositoryTagRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryTagRequestProtoMsg): QueryAllRepositoryTagRequest {
    return QueryAllRepositoryTagRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryTagRequest): Uint8Array {
    return QueryAllRepositoryTagRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryTagRequest): QueryAllRepositoryTagRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagRequest",
      value: QueryAllRepositoryTagRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryTagResponse(): QueryAllRepositoryTagResponse {
  return {
    Tag: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagResponse",
  encode(message: QueryAllRepositoryTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Tag) {
      Tag.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryTagResponse {
    return {
      Tag: Array.isArray(object?.Tag) ? object.Tag.map((e: any) => Tag.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryTagResponse>): QueryAllRepositoryTagResponse {
    const message = createBaseQueryAllRepositoryTagResponse();
    message.Tag = object.Tag?.map(e => Tag.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryTagResponseAmino): QueryAllRepositoryTagResponse {
    const message = createBaseQueryAllRepositoryTagResponse();
    message.Tag = object.Tag?.map(e => Tag.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryTagResponse): QueryAllRepositoryTagResponseAmino {
    const obj: any = {};
    if (message.Tag) {
      obj.Tag = message.Tag.map(e => e ? Tag.toAmino(e) : undefined);
    } else {
      obj.Tag = message.Tag;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryTagResponseAminoMsg): QueryAllRepositoryTagResponse {
    return QueryAllRepositoryTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryTagResponseProtoMsg): QueryAllRepositoryTagResponse {
    return QueryAllRepositoryTagResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryTagResponse): Uint8Array {
    return QueryAllRepositoryTagResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryTagResponse): QueryAllRepositoryTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryTagResponse",
      value: QueryAllRepositoryTagResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDaoMemberRequest(): QueryGetDaoMemberRequest {
  return {
    daoId: "",
    userId: ""
  };
}
export const QueryGetDaoMemberRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberRequest",
  encode(message: QueryGetDaoMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== "") {
      writer.uint32(10).string(message.daoId);
    }
    if (message.userId !== "") {
      writer.uint32(18).string(message.userId);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDaoMemberRequest {
    return {
      daoId: isSet(object.daoId) ? String(object.daoId) : "",
      userId: isSet(object.userId) ? String(object.userId) : ""
    };
  },
  fromPartial(object: Partial<QueryGetDaoMemberRequest>): QueryGetDaoMemberRequest {
    const message = createBaseQueryGetDaoMemberRequest();
    message.daoId = object.daoId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
  fromAmino(object: QueryGetDaoMemberRequestAmino): QueryGetDaoMemberRequest {
    const message = createBaseQueryGetDaoMemberRequest();
    if (object.daoId !== undefined && object.daoId !== null) {
      message.daoId = object.daoId;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
  toAmino(message: QueryGetDaoMemberRequest): QueryGetDaoMemberRequestAmino {
    const obj: any = {};
    obj.daoId = message.daoId === "" ? undefined : message.daoId;
    obj.userId = message.userId === "" ? undefined : message.userId;
    return obj;
  },
  fromAminoMsg(object: QueryGetDaoMemberRequestAminoMsg): QueryGetDaoMemberRequest {
    return QueryGetDaoMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDaoMemberRequestProtoMsg): QueryGetDaoMemberRequest {
    return QueryGetDaoMemberRequest.decode(message.value);
  },
  toProto(message: QueryGetDaoMemberRequest): Uint8Array {
    return QueryGetDaoMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDaoMemberRequest): QueryGetDaoMemberRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberRequest",
      value: QueryGetDaoMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDaoMemberResponse(): QueryGetDaoMemberResponse {
  return {
    Member: Member.fromPartial({})
  };
}
export const QueryGetDaoMemberResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberResponse",
  encode(message: QueryGetDaoMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Member !== undefined) {
      Member.encode(message.Member, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDaoMemberResponse {
    return {
      Member: isSet(object.Member) ? Member.fromJSON(object.Member) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetDaoMemberResponse>): QueryGetDaoMemberResponse {
    const message = createBaseQueryGetDaoMemberResponse();
    message.Member = object.Member !== undefined && object.Member !== null ? Member.fromPartial(object.Member) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDaoMemberResponseAmino): QueryGetDaoMemberResponse {
    const message = createBaseQueryGetDaoMemberResponse();
    if (object.Member !== undefined && object.Member !== null) {
      message.Member = Member.fromAmino(object.Member);
    }
    return message;
  },
  toAmino(message: QueryGetDaoMemberResponse): QueryGetDaoMemberResponseAmino {
    const obj: any = {};
    obj.Member = message.Member ? Member.toAmino(message.Member) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDaoMemberResponseAminoMsg): QueryGetDaoMemberResponse {
    return QueryGetDaoMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDaoMemberResponseProtoMsg): QueryGetDaoMemberResponse {
    return QueryGetDaoMemberResponse.decode(message.value);
  },
  toProto(message: QueryGetDaoMemberResponse): Uint8Array {
    return QueryGetDaoMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDaoMemberResponse): QueryGetDaoMemberResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoMemberResponse",
      value: QueryGetDaoMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDaoMemberRequest(): QueryAllDaoMemberRequest {
  return {
    daoId: "",
    pagination: undefined
  };
}
export const QueryAllDaoMemberRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberRequest",
  encode(message: QueryAllDaoMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.daoId !== "") {
      writer.uint32(10).string(message.daoId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDaoMemberRequest {
    return {
      daoId: isSet(object.daoId) ? String(object.daoId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDaoMemberRequest>): QueryAllDaoMemberRequest {
    const message = createBaseQueryAllDaoMemberRequest();
    message.daoId = object.daoId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDaoMemberRequestAmino): QueryAllDaoMemberRequest {
    const message = createBaseQueryAllDaoMemberRequest();
    if (object.daoId !== undefined && object.daoId !== null) {
      message.daoId = object.daoId;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDaoMemberRequest): QueryAllDaoMemberRequestAmino {
    const obj: any = {};
    obj.daoId = message.daoId === "" ? undefined : message.daoId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDaoMemberRequestAminoMsg): QueryAllDaoMemberRequest {
    return QueryAllDaoMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDaoMemberRequestProtoMsg): QueryAllDaoMemberRequest {
    return QueryAllDaoMemberRequest.decode(message.value);
  },
  toProto(message: QueryAllDaoMemberRequest): Uint8Array {
    return QueryAllDaoMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDaoMemberRequest): QueryAllDaoMemberRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberRequest",
      value: QueryAllDaoMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDaoMemberResponse(): QueryAllDaoMemberResponse {
  return {
    Member: [],
    pagination: undefined
  };
}
export const QueryAllDaoMemberResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberResponse",
  encode(message: QueryAllDaoMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDaoMemberResponse {
    return {
      Member: Array.isArray(object?.Member) ? object.Member.map((e: any) => Member.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDaoMemberResponse>): QueryAllDaoMemberResponse {
    const message = createBaseQueryAllDaoMemberResponse();
    message.Member = object.Member?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDaoMemberResponseAmino): QueryAllDaoMemberResponse {
    const message = createBaseQueryAllDaoMemberResponse();
    message.Member = object.Member?.map(e => Member.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDaoMemberResponse): QueryAllDaoMemberResponseAmino {
    const obj: any = {};
    if (message.Member) {
      obj.Member = message.Member.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.Member = message.Member;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDaoMemberResponseAminoMsg): QueryAllDaoMemberResponse {
    return QueryAllDaoMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDaoMemberResponseProtoMsg): QueryAllDaoMemberResponse {
    return QueryAllDaoMemberResponse.decode(message.value);
  },
  toProto(message: QueryAllDaoMemberResponse): Uint8Array {
    return QueryAllDaoMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDaoMemberResponse): QueryAllDaoMemberResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoMemberResponse",
      value: QueryAllDaoMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberRequest(): QueryAllMemberRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllMemberRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberRequest",
  encode(message: QueryAllMemberRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMemberRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMemberRequest>): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberRequestAmino): QueryAllMemberRequest {
    const message = createBaseQueryAllMemberRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberRequest): QueryAllMemberRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberRequestAminoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberRequestProtoMsg): QueryAllMemberRequest {
    return QueryAllMemberRequest.decode(message.value);
  },
  toProto(message: QueryAllMemberRequest): Uint8Array {
    return QueryAllMemberRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberRequest): QueryAllMemberRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberRequest",
      value: QueryAllMemberRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllMemberResponse(): QueryAllMemberResponse {
  return {
    Member: [],
    pagination: undefined
  };
}
export const QueryAllMemberResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberResponse",
  encode(message: QueryAllMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Member) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllMemberResponse {
    return {
      Member: Array.isArray(object?.Member) ? object.Member.map((e: any) => Member.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllMemberResponse>): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.Member = object.Member?.map(e => Member.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllMemberResponseAmino): QueryAllMemberResponse {
    const message = createBaseQueryAllMemberResponse();
    message.Member = object.Member?.map(e => Member.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllMemberResponse): QueryAllMemberResponseAmino {
    const obj: any = {};
    if (message.Member) {
      obj.Member = message.Member.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.Member = message.Member;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllMemberResponseAminoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllMemberResponseProtoMsg): QueryAllMemberResponse {
    return QueryAllMemberResponse.decode(message.value);
  },
  toProto(message: QueryAllMemberResponse): Uint8Array {
    return QueryAllMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllMemberResponse): QueryAllMemberResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllMemberResponse",
      value: QueryAllMemberResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyRequest(): QueryGetBountyRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetBountyRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyRequest",
  encode(message: QueryGetBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBountyRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetBountyRequest>): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetBountyRequestAmino): QueryGetBountyRequest {
    const message = createBaseQueryGetBountyRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetBountyRequest): QueryGetBountyRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyRequestAminoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyRequestProtoMsg): QueryGetBountyRequest {
    return QueryGetBountyRequest.decode(message.value);
  },
  toProto(message: QueryGetBountyRequest): Uint8Array {
    return QueryGetBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyRequest): QueryGetBountyRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyRequest",
      value: QueryGetBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetBountyResponse(): QueryGetBountyResponse {
  return {
    Bounty: Bounty.fromPartial({})
  };
}
export const QueryGetBountyResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyResponse",
  encode(message: QueryGetBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Bounty !== undefined) {
      Bounty.encode(message.Bounty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetBountyResponse {
    return {
      Bounty: isSet(object.Bounty) ? Bounty.fromJSON(object.Bounty) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetBountyResponse>): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    message.Bounty = object.Bounty !== undefined && object.Bounty !== null ? Bounty.fromPartial(object.Bounty) : undefined;
    return message;
  },
  fromAmino(object: QueryGetBountyResponseAmino): QueryGetBountyResponse {
    const message = createBaseQueryGetBountyResponse();
    if (object.Bounty !== undefined && object.Bounty !== null) {
      message.Bounty = Bounty.fromAmino(object.Bounty);
    }
    return message;
  },
  toAmino(message: QueryGetBountyResponse): QueryGetBountyResponseAmino {
    const obj: any = {};
    obj.Bounty = message.Bounty ? Bounty.toAmino(message.Bounty) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetBountyResponseAminoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetBountyResponseProtoMsg): QueryGetBountyResponse {
    return QueryGetBountyResponse.decode(message.value);
  },
  toProto(message: QueryGetBountyResponse): Uint8Array {
    return QueryGetBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetBountyResponse): QueryGetBountyResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetBountyResponse",
      value: QueryGetBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyRequest(): QueryAllBountyRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllBountyRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyRequest",
  encode(message: QueryAllBountyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBountyRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBountyRequest>): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyRequestAmino): QueryAllBountyRequest {
    const message = createBaseQueryAllBountyRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyRequest): QueryAllBountyRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyRequestAminoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyRequestProtoMsg): QueryAllBountyRequest {
    return QueryAllBountyRequest.decode(message.value);
  },
  toProto(message: QueryAllBountyRequest): Uint8Array {
    return QueryAllBountyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyRequest): QueryAllBountyRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyRequest",
      value: QueryAllBountyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllBountyResponse(): QueryAllBountyResponse {
  return {
    Bounty: [],
    pagination: undefined
  };
}
export const QueryAllBountyResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyResponse",
  encode(message: QueryAllBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Bounty) {
      Bounty.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllBountyResponse {
    return {
      Bounty: Array.isArray(object?.Bounty) ? object.Bounty.map((e: any) => Bounty.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllBountyResponse>): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.Bounty = object.Bounty?.map(e => Bounty.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllBountyResponseAmino): QueryAllBountyResponse {
    const message = createBaseQueryAllBountyResponse();
    message.Bounty = object.Bounty?.map(e => Bounty.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllBountyResponse): QueryAllBountyResponseAmino {
    const obj: any = {};
    if (message.Bounty) {
      obj.Bounty = message.Bounty.map(e => e ? Bounty.toAmino(e) : undefined);
    } else {
      obj.Bounty = message.Bounty;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllBountyResponseAminoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllBountyResponseProtoMsg): QueryAllBountyResponse {
    return QueryAllBountyResponse.decode(message.value);
  },
  toProto(message: QueryAllBountyResponse): Uint8Array {
    return QueryAllBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllBountyResponse): QueryAllBountyResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllBountyResponse",
      value: QueryAllBountyResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestMergePermissionRequest(): QueryGetPullRequestMergePermissionRequest {
  return {
    userId: "",
    repositoryId: BigInt(0),
    pullIid: BigInt(0)
  };
}
export const QueryGetPullRequestMergePermissionRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionRequest",
  encode(message: QueryGetPullRequestMergePermissionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.pullIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.pullIid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestMergePermissionRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      pullIid: isSet(object.pullIid) ? BigInt(object.pullIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestMergePermissionRequest>): QueryGetPullRequestMergePermissionRequest {
    const message = createBaseQueryGetPullRequestMergePermissionRequest();
    message.userId = object.userId ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.pullIid = object.pullIid !== undefined && object.pullIid !== null ? BigInt(object.pullIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPullRequestMergePermissionRequestAmino): QueryGetPullRequestMergePermissionRequest {
    const message = createBaseQueryGetPullRequestMergePermissionRequest();
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.pullIid !== undefined && object.pullIid !== null) {
      message.pullIid = BigInt(object.pullIid);
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestMergePermissionRequest): QueryGetPullRequestMergePermissionRequestAmino {
    const obj: any = {};
    obj.userId = message.userId === "" ? undefined : message.userId;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.pullIid = message.pullIid !== BigInt(0) ? message.pullIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestMergePermissionRequestAminoMsg): QueryGetPullRequestMergePermissionRequest {
    return QueryGetPullRequestMergePermissionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestMergePermissionRequestProtoMsg): QueryGetPullRequestMergePermissionRequest {
    return QueryGetPullRequestMergePermissionRequest.decode(message.value);
  },
  toProto(message: QueryGetPullRequestMergePermissionRequest): Uint8Array {
    return QueryGetPullRequestMergePermissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestMergePermissionRequest): QueryGetPullRequestMergePermissionRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionRequest",
      value: QueryGetPullRequestMergePermissionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestMergePermissionResponse(): QueryGetPullRequestMergePermissionResponse {
  return {
    havePermission: false
  };
}
export const QueryGetPullRequestMergePermissionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionResponse",
  encode(message: QueryGetPullRequestMergePermissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.havePermission === true) {
      writer.uint32(8).bool(message.havePermission);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestMergePermissionResponse {
    return {
      havePermission: isSet(object.havePermission) ? Boolean(object.havePermission) : false
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestMergePermissionResponse>): QueryGetPullRequestMergePermissionResponse {
    const message = createBaseQueryGetPullRequestMergePermissionResponse();
    message.havePermission = object.havePermission ?? false;
    return message;
  },
  fromAmino(object: QueryGetPullRequestMergePermissionResponseAmino): QueryGetPullRequestMergePermissionResponse {
    const message = createBaseQueryGetPullRequestMergePermissionResponse();
    if (object.havePermission !== undefined && object.havePermission !== null) {
      message.havePermission = object.havePermission;
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestMergePermissionResponse): QueryGetPullRequestMergePermissionResponseAmino {
    const obj: any = {};
    obj.havePermission = message.havePermission === false ? undefined : message.havePermission;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestMergePermissionResponseAminoMsg): QueryGetPullRequestMergePermissionResponse {
    return QueryGetPullRequestMergePermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestMergePermissionResponseProtoMsg): QueryGetPullRequestMergePermissionResponse {
    return QueryGetPullRequestMergePermissionResponse.decode(message.value);
  },
  toProto(message: QueryGetPullRequestMergePermissionResponse): Uint8Array {
    return QueryGetPullRequestMergePermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestMergePermissionResponse): QueryGetPullRequestMergePermissionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestMergePermissionResponse",
      value: QueryGetPullRequestMergePermissionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetReleaseRequest(): QueryGetReleaseRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetReleaseRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseRequest",
  encode(message: QueryGetReleaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetReleaseRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetReleaseRequest>): QueryGetReleaseRequest {
    const message = createBaseQueryGetReleaseRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetReleaseRequestAmino): QueryGetReleaseRequest {
    const message = createBaseQueryGetReleaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetReleaseRequest): QueryGetReleaseRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetReleaseRequestAminoMsg): QueryGetReleaseRequest {
    return QueryGetReleaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReleaseRequestProtoMsg): QueryGetReleaseRequest {
    return QueryGetReleaseRequest.decode(message.value);
  },
  toProto(message: QueryGetReleaseRequest): Uint8Array {
    return QueryGetReleaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReleaseRequest): QueryGetReleaseRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseRequest",
      value: QueryGetReleaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetReleaseResponse(): QueryGetReleaseResponse {
  return {
    Release: undefined
  };
}
export const QueryGetReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseResponse",
  encode(message: QueryGetReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Release !== undefined) {
      Release.encode(message.Release, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetReleaseResponse {
    return {
      Release: isSet(object.Release) ? Release.fromJSON(object.Release) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetReleaseResponse>): QueryGetReleaseResponse {
    const message = createBaseQueryGetReleaseResponse();
    message.Release = object.Release !== undefined && object.Release !== null ? Release.fromPartial(object.Release) : undefined;
    return message;
  },
  fromAmino(object: QueryGetReleaseResponseAmino): QueryGetReleaseResponse {
    const message = createBaseQueryGetReleaseResponse();
    if (object.Release !== undefined && object.Release !== null) {
      message.Release = Release.fromAmino(object.Release);
    }
    return message;
  },
  toAmino(message: QueryGetReleaseResponse): QueryGetReleaseResponseAmino {
    const obj: any = {};
    obj.Release = message.Release ? Release.toAmino(message.Release) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetReleaseResponseAminoMsg): QueryGetReleaseResponse {
    return QueryGetReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetReleaseResponseProtoMsg): QueryGetReleaseResponse {
    return QueryGetReleaseResponse.decode(message.value);
  },
  toProto(message: QueryGetReleaseResponse): Uint8Array {
    return QueryGetReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetReleaseResponse): QueryGetReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetReleaseResponse",
      value: QueryGetReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllReleaseRequest(): QueryAllReleaseRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllReleaseRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseRequest",
  encode(message: QueryAllReleaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllReleaseRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllReleaseRequest>): QueryAllReleaseRequest {
    const message = createBaseQueryAllReleaseRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReleaseRequestAmino): QueryAllReleaseRequest {
    const message = createBaseQueryAllReleaseRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReleaseRequest): QueryAllReleaseRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReleaseRequestAminoMsg): QueryAllReleaseRequest {
    return QueryAllReleaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReleaseRequestProtoMsg): QueryAllReleaseRequest {
    return QueryAllReleaseRequest.decode(message.value);
  },
  toProto(message: QueryAllReleaseRequest): Uint8Array {
    return QueryAllReleaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReleaseRequest): QueryAllReleaseRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseRequest",
      value: QueryAllReleaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllReleaseResponse(): QueryAllReleaseResponse {
  return {
    Release: [],
    pagination: undefined
  };
}
export const QueryAllReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseResponse",
  encode(message: QueryAllReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Release) {
      Release.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllReleaseResponse {
    return {
      Release: Array.isArray(object?.Release) ? object.Release.map((e: any) => Release.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllReleaseResponse>): QueryAllReleaseResponse {
    const message = createBaseQueryAllReleaseResponse();
    message.Release = object.Release?.map(e => Release.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllReleaseResponseAmino): QueryAllReleaseResponse {
    const message = createBaseQueryAllReleaseResponse();
    message.Release = object.Release?.map(e => Release.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllReleaseResponse): QueryAllReleaseResponseAmino {
    const obj: any = {};
    if (message.Release) {
      obj.Release = message.Release.map(e => e ? Release.toAmino(e) : undefined);
    } else {
      obj.Release = message.Release;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllReleaseResponseAminoMsg): QueryAllReleaseResponse {
    return QueryAllReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllReleaseResponseProtoMsg): QueryAllReleaseResponse {
    return QueryAllReleaseResponse.decode(message.value);
  },
  toProto(message: QueryAllReleaseResponse): Uint8Array {
    return QueryAllReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllReleaseResponse): QueryAllReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllReleaseResponse",
      value: QueryAllReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestRequest(): QueryGetPullRequestRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetPullRequestRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestRequest",
  encode(message: QueryGetPullRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestRequest>): QueryGetPullRequestRequest {
    const message = createBaseQueryGetPullRequestRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPullRequestRequestAmino): QueryGetPullRequestRequest {
    const message = createBaseQueryGetPullRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestRequest): QueryGetPullRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestRequestAminoMsg): QueryGetPullRequestRequest {
    return QueryGetPullRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestRequestProtoMsg): QueryGetPullRequestRequest {
    return QueryGetPullRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetPullRequestRequest): Uint8Array {
    return QueryGetPullRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestRequest): QueryGetPullRequestRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestRequest",
      value: QueryGetPullRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestResponse(): QueryGetPullRequestResponse {
  return {
    PullRequest: undefined
  };
}
export const QueryGetPullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestResponse",
  encode(message: QueryGetPullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.PullRequest !== undefined) {
      PullRequest.encode(message.PullRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestResponse {
    return {
      PullRequest: isSet(object.PullRequest) ? PullRequest.fromJSON(object.PullRequest) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestResponse>): QueryGetPullRequestResponse {
    const message = createBaseQueryGetPullRequestResponse();
    message.PullRequest = object.PullRequest !== undefined && object.PullRequest !== null ? PullRequest.fromPartial(object.PullRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPullRequestResponseAmino): QueryGetPullRequestResponse {
    const message = createBaseQueryGetPullRequestResponse();
    if (object.PullRequest !== undefined && object.PullRequest !== null) {
      message.PullRequest = PullRequest.fromAmino(object.PullRequest);
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestResponse): QueryGetPullRequestResponseAmino {
    const obj: any = {};
    obj.PullRequest = message.PullRequest ? PullRequest.toAmino(message.PullRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestResponseAminoMsg): QueryGetPullRequestResponse {
    return QueryGetPullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestResponseProtoMsg): QueryGetPullRequestResponse {
    return QueryGetPullRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetPullRequestResponse): Uint8Array {
    return QueryGetPullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestResponse): QueryGetPullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestResponse",
      value: QueryGetPullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPullRequestRequest(): QueryAllPullRequestRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllPullRequestRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestRequest",
  encode(message: QueryAllPullRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPullRequestRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPullRequestRequest>): QueryAllPullRequestRequest {
    const message = createBaseQueryAllPullRequestRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPullRequestRequestAmino): QueryAllPullRequestRequest {
    const message = createBaseQueryAllPullRequestRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPullRequestRequest): QueryAllPullRequestRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPullRequestRequestAminoMsg): QueryAllPullRequestRequest {
    return QueryAllPullRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPullRequestRequestProtoMsg): QueryAllPullRequestRequest {
    return QueryAllPullRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllPullRequestRequest): Uint8Array {
    return QueryAllPullRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPullRequestRequest): QueryAllPullRequestRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestRequest",
      value: QueryAllPullRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPullRequestResponse(): QueryAllPullRequestResponse {
  return {
    PullRequest: [],
    pagination: undefined
  };
}
export const QueryAllPullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestResponse",
  encode(message: QueryAllPullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.PullRequest) {
      PullRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPullRequestResponse {
    return {
      PullRequest: Array.isArray(object?.PullRequest) ? object.PullRequest.map((e: any) => PullRequest.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPullRequestResponse>): QueryAllPullRequestResponse {
    const message = createBaseQueryAllPullRequestResponse();
    message.PullRequest = object.PullRequest?.map(e => PullRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPullRequestResponseAmino): QueryAllPullRequestResponse {
    const message = createBaseQueryAllPullRequestResponse();
    message.PullRequest = object.PullRequest?.map(e => PullRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPullRequestResponse): QueryAllPullRequestResponseAmino {
    const obj: any = {};
    if (message.PullRequest) {
      obj.PullRequest = message.PullRequest.map(e => e ? PullRequest.toAmino(e) : undefined);
    } else {
      obj.PullRequest = message.PullRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPullRequestResponseAminoMsg): QueryAllPullRequestResponse {
    return QueryAllPullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPullRequestResponseProtoMsg): QueryAllPullRequestResponse {
    return QueryAllPullRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllPullRequestResponse): Uint8Array {
    return QueryAllPullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPullRequestResponse): QueryAllPullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestResponse",
      value: QueryAllPullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetDaoRequest(): QueryGetDaoRequest {
  return {
    id: ""
  };
}
export const QueryGetDaoRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoRequest",
  encode(message: QueryGetDaoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDaoRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryGetDaoRequest>): QueryGetDaoRequest {
    const message = createBaseQueryGetDaoRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetDaoRequestAmino): QueryGetDaoRequest {
    const message = createBaseQueryGetDaoRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryGetDaoRequest): QueryGetDaoRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetDaoRequestAminoMsg): QueryGetDaoRequest {
    return QueryGetDaoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDaoRequestProtoMsg): QueryGetDaoRequest {
    return QueryGetDaoRequest.decode(message.value);
  },
  toProto(message: QueryGetDaoRequest): Uint8Array {
    return QueryGetDaoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDaoRequest): QueryGetDaoRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoRequest",
      value: QueryGetDaoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetDaoResponse(): QueryGetDaoResponse {
  return {
    dao: undefined
  };
}
export const QueryGetDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoResponse",
  encode(message: QueryGetDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dao !== undefined) {
      Dao.encode(message.dao, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetDaoResponse {
    return {
      dao: isSet(object.dao) ? Dao.fromJSON(object.dao) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetDaoResponse>): QueryGetDaoResponse {
    const message = createBaseQueryGetDaoResponse();
    message.dao = object.dao !== undefined && object.dao !== null ? Dao.fromPartial(object.dao) : undefined;
    return message;
  },
  fromAmino(object: QueryGetDaoResponseAmino): QueryGetDaoResponse {
    const message = createBaseQueryGetDaoResponse();
    if (object.dao !== undefined && object.dao !== null) {
      message.dao = Dao.fromAmino(object.dao);
    }
    return message;
  },
  toAmino(message: QueryGetDaoResponse): QueryGetDaoResponseAmino {
    const obj: any = {};
    obj.dao = message.dao ? Dao.toAmino(message.dao) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetDaoResponseAminoMsg): QueryGetDaoResponse {
    return QueryGetDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetDaoResponseProtoMsg): QueryGetDaoResponse {
    return QueryGetDaoResponse.decode(message.value);
  },
  toProto(message: QueryGetDaoResponse): Uint8Array {
    return QueryGetDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetDaoResponse): QueryGetDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetDaoResponse",
      value: QueryGetDaoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllDaoRequest(): QueryAllDaoRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllDaoRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoRequest",
  encode(message: QueryAllDaoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDaoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDaoRequest>): QueryAllDaoRequest {
    const message = createBaseQueryAllDaoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDaoRequestAmino): QueryAllDaoRequest {
    const message = createBaseQueryAllDaoRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDaoRequest): QueryAllDaoRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDaoRequestAminoMsg): QueryAllDaoRequest {
    return QueryAllDaoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDaoRequestProtoMsg): QueryAllDaoRequest {
    return QueryAllDaoRequest.decode(message.value);
  },
  toProto(message: QueryAllDaoRequest): Uint8Array {
    return QueryAllDaoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDaoRequest): QueryAllDaoRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoRequest",
      value: QueryAllDaoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllDaoResponse(): QueryAllDaoResponse {
  return {
    dao: [],
    pagination: undefined
  };
}
export const QueryAllDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoResponse",
  encode(message: QueryAllDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.dao) {
      Dao.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllDaoResponse {
    return {
      dao: Array.isArray(object?.dao) ? object.dao.map((e: any) => Dao.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllDaoResponse>): QueryAllDaoResponse {
    const message = createBaseQueryAllDaoResponse();
    message.dao = object.dao?.map(e => Dao.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllDaoResponseAmino): QueryAllDaoResponse {
    const message = createBaseQueryAllDaoResponse();
    message.dao = object.dao?.map(e => Dao.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllDaoResponse): QueryAllDaoResponseAmino {
    const obj: any = {};
    if (message.dao) {
      obj.dao = message.dao.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.dao = message.dao;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllDaoResponseAminoMsg): QueryAllDaoResponse {
    return QueryAllDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllDaoResponseProtoMsg): QueryAllDaoResponse {
    return QueryAllDaoResponse.decode(message.value);
  },
  toProto(message: QueryAllDaoResponse): Uint8Array {
    return QueryAllDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllDaoResponse): QueryAllDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllDaoResponse",
      value: QueryAllDaoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetIssueCommentRequest(): QueryGetIssueCommentRequest {
  return {
    repositoryId: BigInt(0),
    issueIid: BigInt(0),
    commentIid: BigInt(0)
  };
}
export const QueryGetIssueCommentRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentRequest",
  encode(message: QueryGetIssueCommentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.issueIid !== BigInt(0)) {
      writer.uint32(16).uint64(message.issueIid);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.commentIid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetIssueCommentRequest {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      issueIid: isSet(object.issueIid) ? BigInt(object.issueIid.toString()) : BigInt(0),
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetIssueCommentRequest>): QueryGetIssueCommentRequest {
    const message = createBaseQueryGetIssueCommentRequest();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.issueIid = object.issueIid !== undefined && object.issueIid !== null ? BigInt(object.issueIid.toString()) : BigInt(0);
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetIssueCommentRequestAmino): QueryGetIssueCommentRequest {
    const message = createBaseQueryGetIssueCommentRequest();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.issueIid !== undefined && object.issueIid !== null) {
      message.issueIid = BigInt(object.issueIid);
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    return message;
  },
  toAmino(message: QueryGetIssueCommentRequest): QueryGetIssueCommentRequestAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.issueIid = message.issueIid !== BigInt(0) ? message.issueIid.toString() : undefined;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetIssueCommentRequestAminoMsg): QueryGetIssueCommentRequest {
    return QueryGetIssueCommentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIssueCommentRequestProtoMsg): QueryGetIssueCommentRequest {
    return QueryGetIssueCommentRequest.decode(message.value);
  },
  toProto(message: QueryGetIssueCommentRequest): Uint8Array {
    return QueryGetIssueCommentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIssueCommentRequest): QueryGetIssueCommentRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentRequest",
      value: QueryGetIssueCommentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetIssueCommentResponse(): QueryGetIssueCommentResponse {
  return {
    Comment: undefined
  };
}
export const QueryGetIssueCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentResponse",
  encode(message: QueryGetIssueCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetIssueCommentResponse {
    return {
      Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetIssueCommentResponse>): QueryGetIssueCommentResponse {
    const message = createBaseQueryGetIssueCommentResponse();
    message.Comment = object.Comment !== undefined && object.Comment !== null ? Comment.fromPartial(object.Comment) : undefined;
    return message;
  },
  fromAmino(object: QueryGetIssueCommentResponseAmino): QueryGetIssueCommentResponse {
    const message = createBaseQueryGetIssueCommentResponse();
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromAmino(object.Comment);
    }
    return message;
  },
  toAmino(message: QueryGetIssueCommentResponse): QueryGetIssueCommentResponseAmino {
    const obj: any = {};
    obj.Comment = message.Comment ? Comment.toAmino(message.Comment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetIssueCommentResponseAminoMsg): QueryGetIssueCommentResponse {
    return QueryGetIssueCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetIssueCommentResponseProtoMsg): QueryGetIssueCommentResponse {
    return QueryGetIssueCommentResponse.decode(message.value);
  },
  toProto(message: QueryGetIssueCommentResponse): Uint8Array {
    return QueryGetIssueCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetIssueCommentResponse): QueryGetIssueCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetIssueCommentResponse",
      value: QueryGetIssueCommentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestCommentRequest(): QueryGetPullRequestCommentRequest {
  return {
    repositoryId: BigInt(0),
    pullRequestIid: BigInt(0),
    commentIid: BigInt(0)
  };
}
export const QueryGetPullRequestCommentRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentRequest",
  encode(message: QueryGetPullRequestCommentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.pullRequestIid !== BigInt(0)) {
      writer.uint32(16).uint64(message.pullRequestIid);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.commentIid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestCommentRequest {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      pullRequestIid: isSet(object.pullRequestIid) ? BigInt(object.pullRequestIid.toString()) : BigInt(0),
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestCommentRequest>): QueryGetPullRequestCommentRequest {
    const message = createBaseQueryGetPullRequestCommentRequest();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.pullRequestIid = object.pullRequestIid !== undefined && object.pullRequestIid !== null ? BigInt(object.pullRequestIid.toString()) : BigInt(0);
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPullRequestCommentRequestAmino): QueryGetPullRequestCommentRequest {
    const message = createBaseQueryGetPullRequestCommentRequest();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.pullRequestIid !== undefined && object.pullRequestIid !== null) {
      message.pullRequestIid = BigInt(object.pullRequestIid);
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestCommentRequest): QueryGetPullRequestCommentRequestAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.pullRequestIid = message.pullRequestIid !== BigInt(0) ? message.pullRequestIid.toString() : undefined;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestCommentRequestAminoMsg): QueryGetPullRequestCommentRequest {
    return QueryGetPullRequestCommentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestCommentRequestProtoMsg): QueryGetPullRequestCommentRequest {
    return QueryGetPullRequestCommentRequest.decode(message.value);
  },
  toProto(message: QueryGetPullRequestCommentRequest): Uint8Array {
    return QueryGetPullRequestCommentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestCommentRequest): QueryGetPullRequestCommentRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentRequest",
      value: QueryGetPullRequestCommentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPullRequestCommentResponse(): QueryGetPullRequestCommentResponse {
  return {
    Comment: undefined
  };
}
export const QueryGetPullRequestCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentResponse",
  encode(message: QueryGetPullRequestCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Comment !== undefined) {
      Comment.encode(message.Comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetPullRequestCommentResponse {
    return {
      Comment: isSet(object.Comment) ? Comment.fromJSON(object.Comment) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetPullRequestCommentResponse>): QueryGetPullRequestCommentResponse {
    const message = createBaseQueryGetPullRequestCommentResponse();
    message.Comment = object.Comment !== undefined && object.Comment !== null ? Comment.fromPartial(object.Comment) : undefined;
    return message;
  },
  fromAmino(object: QueryGetPullRequestCommentResponseAmino): QueryGetPullRequestCommentResponse {
    const message = createBaseQueryGetPullRequestCommentResponse();
    if (object.Comment !== undefined && object.Comment !== null) {
      message.Comment = Comment.fromAmino(object.Comment);
    }
    return message;
  },
  toAmino(message: QueryGetPullRequestCommentResponse): QueryGetPullRequestCommentResponseAmino {
    const obj: any = {};
    obj.Comment = message.Comment ? Comment.toAmino(message.Comment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPullRequestCommentResponseAminoMsg): QueryGetPullRequestCommentResponse {
    return QueryGetPullRequestCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPullRequestCommentResponseProtoMsg): QueryGetPullRequestCommentResponse {
    return QueryGetPullRequestCommentResponse.decode(message.value);
  },
  toProto(message: QueryGetPullRequestCommentResponse): Uint8Array {
    return QueryGetPullRequestCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPullRequestCommentResponse): QueryGetPullRequestCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetPullRequestCommentResponse",
      value: QueryGetPullRequestCommentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllCommentRequest(): QueryAllCommentRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllCommentRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentRequest",
  encode(message: QueryAllCommentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllCommentRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllCommentRequest>): QueryAllCommentRequest {
    const message = createBaseQueryAllCommentRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCommentRequestAmino): QueryAllCommentRequest {
    const message = createBaseQueryAllCommentRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCommentRequest): QueryAllCommentRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCommentRequestAminoMsg): QueryAllCommentRequest {
    return QueryAllCommentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCommentRequestProtoMsg): QueryAllCommentRequest {
    return QueryAllCommentRequest.decode(message.value);
  },
  toProto(message: QueryAllCommentRequest): Uint8Array {
    return QueryAllCommentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCommentRequest): QueryAllCommentRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentRequest",
      value: QueryAllCommentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllCommentResponse(): QueryAllCommentResponse {
  return {
    Comment: [],
    pagination: undefined
  };
}
export const QueryAllCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentResponse",
  encode(message: QueryAllCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllCommentResponse {
    return {
      Comment: Array.isArray(object?.Comment) ? object.Comment.map((e: any) => Comment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllCommentResponse>): QueryAllCommentResponse {
    const message = createBaseQueryAllCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllCommentResponseAmino): QueryAllCommentResponse {
    const message = createBaseQueryAllCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllCommentResponse): QueryAllCommentResponseAmino {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map(e => e ? Comment.toAmino(e) : undefined);
    } else {
      obj.Comment = message.Comment;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllCommentResponseAminoMsg): QueryAllCommentResponse {
    return QueryAllCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllCommentResponseProtoMsg): QueryAllCommentResponse {
    return QueryAllCommentResponse.decode(message.value);
  },
  toProto(message: QueryAllCommentResponse): Uint8Array {
    return QueryAllCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllCommentResponse): QueryAllCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllCommentResponse",
      value: QueryAllCommentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllIssueCommentRequest(): QueryAllIssueCommentRequest {
  return {
    repositoryId: BigInt(0),
    issueIid: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllIssueCommentRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentRequest",
  encode(message: QueryAllIssueCommentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.issueIid !== BigInt(0)) {
      writer.uint32(16).uint64(message.issueIid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllIssueCommentRequest {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      issueIid: isSet(object.issueIid) ? BigInt(object.issueIid.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllIssueCommentRequest>): QueryAllIssueCommentRequest {
    const message = createBaseQueryAllIssueCommentRequest();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.issueIid = object.issueIid !== undefined && object.issueIid !== null ? BigInt(object.issueIid.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIssueCommentRequestAmino): QueryAllIssueCommentRequest {
    const message = createBaseQueryAllIssueCommentRequest();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.issueIid !== undefined && object.issueIid !== null) {
      message.issueIid = BigInt(object.issueIid);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIssueCommentRequest): QueryAllIssueCommentRequestAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.issueIid = message.issueIid !== BigInt(0) ? message.issueIid.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIssueCommentRequestAminoMsg): QueryAllIssueCommentRequest {
    return QueryAllIssueCommentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIssueCommentRequestProtoMsg): QueryAllIssueCommentRequest {
    return QueryAllIssueCommentRequest.decode(message.value);
  },
  toProto(message: QueryAllIssueCommentRequest): Uint8Array {
    return QueryAllIssueCommentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIssueCommentRequest): QueryAllIssueCommentRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentRequest",
      value: QueryAllIssueCommentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllIssueCommentResponse(): QueryAllIssueCommentResponse {
  return {
    Comment: [],
    pagination: undefined
  };
}
export const QueryAllIssueCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentResponse",
  encode(message: QueryAllIssueCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllIssueCommentResponse {
    return {
      Comment: Array.isArray(object?.Comment) ? object.Comment.map((e: any) => Comment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllIssueCommentResponse>): QueryAllIssueCommentResponse {
    const message = createBaseQueryAllIssueCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIssueCommentResponseAmino): QueryAllIssueCommentResponse {
    const message = createBaseQueryAllIssueCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIssueCommentResponse): QueryAllIssueCommentResponseAmino {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map(e => e ? Comment.toAmino(e) : undefined);
    } else {
      obj.Comment = message.Comment;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIssueCommentResponseAminoMsg): QueryAllIssueCommentResponse {
    return QueryAllIssueCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIssueCommentResponseProtoMsg): QueryAllIssueCommentResponse {
    return QueryAllIssueCommentResponse.decode(message.value);
  },
  toProto(message: QueryAllIssueCommentResponse): Uint8Array {
    return QueryAllIssueCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIssueCommentResponse): QueryAllIssueCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueCommentResponse",
      value: QueryAllIssueCommentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllPullRequestCommentRequest(): QueryAllPullRequestCommentRequest {
  return {
    repositoryId: BigInt(0),
    pullRequestIid: BigInt(0),
    pagination: undefined
  };
}
export const QueryAllPullRequestCommentRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentRequest",
  encode(message: QueryAllPullRequestCommentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(8).uint64(message.repositoryId);
    }
    if (message.pullRequestIid !== BigInt(0)) {
      writer.uint32(16).uint64(message.pullRequestIid);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPullRequestCommentRequest {
    return {
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      pullRequestIid: isSet(object.pullRequestIid) ? BigInt(object.pullRequestIid.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPullRequestCommentRequest>): QueryAllPullRequestCommentRequest {
    const message = createBaseQueryAllPullRequestCommentRequest();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.pullRequestIid = object.pullRequestIid !== undefined && object.pullRequestIid !== null ? BigInt(object.pullRequestIid.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPullRequestCommentRequestAmino): QueryAllPullRequestCommentRequest {
    const message = createBaseQueryAllPullRequestCommentRequest();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.pullRequestIid !== undefined && object.pullRequestIid !== null) {
      message.pullRequestIid = BigInt(object.pullRequestIid);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPullRequestCommentRequest): QueryAllPullRequestCommentRequestAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.pullRequestIid = message.pullRequestIid !== BigInt(0) ? message.pullRequestIid.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPullRequestCommentRequestAminoMsg): QueryAllPullRequestCommentRequest {
    return QueryAllPullRequestCommentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPullRequestCommentRequestProtoMsg): QueryAllPullRequestCommentRequest {
    return QueryAllPullRequestCommentRequest.decode(message.value);
  },
  toProto(message: QueryAllPullRequestCommentRequest): Uint8Array {
    return QueryAllPullRequestCommentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPullRequestCommentRequest): QueryAllPullRequestCommentRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentRequest",
      value: QueryAllPullRequestCommentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllPullRequestCommentResponse(): QueryAllPullRequestCommentResponse {
  return {
    Comment: [],
    pagination: undefined
  };
}
export const QueryAllPullRequestCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentResponse",
  encode(message: QueryAllPullRequestCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Comment) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllPullRequestCommentResponse {
    return {
      Comment: Array.isArray(object?.Comment) ? object.Comment.map((e: any) => Comment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllPullRequestCommentResponse>): QueryAllPullRequestCommentResponse {
    const message = createBaseQueryAllPullRequestCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllPullRequestCommentResponseAmino): QueryAllPullRequestCommentResponse {
    const message = createBaseQueryAllPullRequestCommentResponse();
    message.Comment = object.Comment?.map(e => Comment.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllPullRequestCommentResponse): QueryAllPullRequestCommentResponseAmino {
    const obj: any = {};
    if (message.Comment) {
      obj.Comment = message.Comment.map(e => e ? Comment.toAmino(e) : undefined);
    } else {
      obj.Comment = message.Comment;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllPullRequestCommentResponseAminoMsg): QueryAllPullRequestCommentResponse {
    return QueryAllPullRequestCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllPullRequestCommentResponseProtoMsg): QueryAllPullRequestCommentResponse {
    return QueryAllPullRequestCommentResponse.decode(message.value);
  },
  toProto(message: QueryAllPullRequestCommentResponse): Uint8Array {
    return QueryAllPullRequestCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllPullRequestCommentResponse): QueryAllPullRequestCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllPullRequestCommentResponse",
      value: QueryAllPullRequestCommentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllIssueRequest(): QueryAllIssueRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllIssueRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueRequest",
  encode(message: QueryAllIssueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllIssueRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllIssueRequest>): QueryAllIssueRequest {
    const message = createBaseQueryAllIssueRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIssueRequestAmino): QueryAllIssueRequest {
    const message = createBaseQueryAllIssueRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIssueRequest): QueryAllIssueRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIssueRequestAminoMsg): QueryAllIssueRequest {
    return QueryAllIssueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIssueRequestProtoMsg): QueryAllIssueRequest {
    return QueryAllIssueRequest.decode(message.value);
  },
  toProto(message: QueryAllIssueRequest): Uint8Array {
    return QueryAllIssueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIssueRequest): QueryAllIssueRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueRequest",
      value: QueryAllIssueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllIssueResponse(): QueryAllIssueResponse {
  return {
    Issue: [],
    pagination: undefined
  };
}
export const QueryAllIssueResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueResponse",
  encode(message: QueryAllIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Issue) {
      Issue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllIssueResponse {
    return {
      Issue: Array.isArray(object?.Issue) ? object.Issue.map((e: any) => Issue.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllIssueResponse>): QueryAllIssueResponse {
    const message = createBaseQueryAllIssueResponse();
    message.Issue = object.Issue?.map(e => Issue.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllIssueResponseAmino): QueryAllIssueResponse {
    const message = createBaseQueryAllIssueResponse();
    message.Issue = object.Issue?.map(e => Issue.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllIssueResponse): QueryAllIssueResponseAmino {
    const obj: any = {};
    if (message.Issue) {
      obj.Issue = message.Issue.map(e => e ? Issue.toAmino(e) : undefined);
    } else {
      obj.Issue = message.Issue;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllIssueResponseAminoMsg): QueryAllIssueResponse {
    return QueryAllIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllIssueResponseProtoMsg): QueryAllIssueResponse {
    return QueryAllIssueResponse.decode(message.value);
  },
  toProto(message: QueryAllIssueResponse): Uint8Array {
    return QueryAllIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllIssueResponse): QueryAllIssueResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllIssueResponse",
      value: QueryAllIssueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestRepositoryReleaseRequest(): QueryGetLatestRepositoryReleaseRequest {
  return {
    id: "",
    repositoryName: ""
  };
}
export const QueryGetLatestRepositoryReleaseRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseRequest",
  encode(message: QueryGetLatestRepositoryReleaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLatestRepositoryReleaseRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetLatestRepositoryReleaseRequest>): QueryGetLatestRepositoryReleaseRequest {
    const message = createBaseQueryGetLatestRepositoryReleaseRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    return message;
  },
  fromAmino(object: QueryGetLatestRepositoryReleaseRequestAmino): QueryGetLatestRepositoryReleaseRequest {
    const message = createBaseQueryGetLatestRepositoryReleaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    return message;
  },
  toAmino(message: QueryGetLatestRepositoryReleaseRequest): QueryGetLatestRepositoryReleaseRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestRepositoryReleaseRequestAminoMsg): QueryGetLatestRepositoryReleaseRequest {
    return QueryGetLatestRepositoryReleaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestRepositoryReleaseRequestProtoMsg): QueryGetLatestRepositoryReleaseRequest {
    return QueryGetLatestRepositoryReleaseRequest.decode(message.value);
  },
  toProto(message: QueryGetLatestRepositoryReleaseRequest): Uint8Array {
    return QueryGetLatestRepositoryReleaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestRepositoryReleaseRequest): QueryGetLatestRepositoryReleaseRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseRequest",
      value: QueryGetLatestRepositoryReleaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestRepositoryReleaseResponse(): QueryGetLatestRepositoryReleaseResponse {
  return {
    Release: undefined
  };
}
export const QueryGetLatestRepositoryReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseResponse",
  encode(message: QueryGetLatestRepositoryReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Release !== undefined) {
      Release.encode(message.Release, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetLatestRepositoryReleaseResponse {
    return {
      Release: isSet(object.Release) ? Release.fromJSON(object.Release) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetLatestRepositoryReleaseResponse>): QueryGetLatestRepositoryReleaseResponse {
    const message = createBaseQueryGetLatestRepositoryReleaseResponse();
    message.Release = object.Release !== undefined && object.Release !== null ? Release.fromPartial(object.Release) : undefined;
    return message;
  },
  fromAmino(object: QueryGetLatestRepositoryReleaseResponseAmino): QueryGetLatestRepositoryReleaseResponse {
    const message = createBaseQueryGetLatestRepositoryReleaseResponse();
    if (object.Release !== undefined && object.Release !== null) {
      message.Release = Release.fromAmino(object.Release);
    }
    return message;
  },
  toAmino(message: QueryGetLatestRepositoryReleaseResponse): QueryGetLatestRepositoryReleaseResponseAmino {
    const obj: any = {};
    obj.Release = message.Release ? Release.toAmino(message.Release) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestRepositoryReleaseResponseAminoMsg): QueryGetLatestRepositoryReleaseResponse {
    return QueryGetLatestRepositoryReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestRepositoryReleaseResponseProtoMsg): QueryGetLatestRepositoryReleaseResponse {
    return QueryGetLatestRepositoryReleaseResponse.decode(message.value);
  },
  toProto(message: QueryGetLatestRepositoryReleaseResponse): Uint8Array {
    return QueryGetLatestRepositoryReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestRepositoryReleaseResponse): QueryGetLatestRepositoryReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetLatestRepositoryReleaseResponse",
      value: QueryGetLatestRepositoryReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryReleaseRequest(): QueryGetRepositoryReleaseRequest {
  return {
    id: "",
    repositoryName: "",
    tagName: ""
  };
}
export const QueryGetRepositoryReleaseRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseRequest",
  encode(message: QueryGetRepositoryReleaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.tagName !== "") {
      writer.uint32(26).string(message.tagName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryReleaseRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      tagName: isSet(object.tagName) ? String(object.tagName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryReleaseRequest>): QueryGetRepositoryReleaseRequest {
    const message = createBaseQueryGetRepositoryReleaseRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: QueryGetRepositoryReleaseRequestAmino): QueryGetRepositoryReleaseRequest {
    const message = createBaseQueryGetRepositoryReleaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryReleaseRequest): QueryGetRepositoryReleaseRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryReleaseRequestAminoMsg): QueryGetRepositoryReleaseRequest {
    return QueryGetRepositoryReleaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryReleaseRequestProtoMsg): QueryGetRepositoryReleaseRequest {
    return QueryGetRepositoryReleaseRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryReleaseRequest): Uint8Array {
    return QueryGetRepositoryReleaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryReleaseRequest): QueryGetRepositoryReleaseRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseRequest",
      value: QueryGetRepositoryReleaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryReleaseResponse(): QueryGetRepositoryReleaseResponse {
  return {
    Release: undefined
  };
}
export const QueryGetRepositoryReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseResponse",
  encode(message: QueryGetRepositoryReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Release !== undefined) {
      Release.encode(message.Release, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryReleaseResponse {
    return {
      Release: isSet(object.Release) ? Release.fromJSON(object.Release) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryReleaseResponse>): QueryGetRepositoryReleaseResponse {
    const message = createBaseQueryGetRepositoryReleaseResponse();
    message.Release = object.Release !== undefined && object.Release !== null ? Release.fromPartial(object.Release) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryReleaseResponseAmino): QueryGetRepositoryReleaseResponse {
    const message = createBaseQueryGetRepositoryReleaseResponse();
    if (object.Release !== undefined && object.Release !== null) {
      message.Release = Release.fromAmino(object.Release);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryReleaseResponse): QueryGetRepositoryReleaseResponseAmino {
    const obj: any = {};
    obj.Release = message.Release ? Release.toAmino(message.Release) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryReleaseResponseAminoMsg): QueryGetRepositoryReleaseResponse {
    return QueryGetRepositoryReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryReleaseResponseProtoMsg): QueryGetRepositoryReleaseResponse {
    return QueryGetRepositoryReleaseResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryReleaseResponse): Uint8Array {
    return QueryGetRepositoryReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryReleaseResponse): QueryGetRepositoryReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryReleaseResponse",
      value: QueryGetRepositoryReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryReleaseRequest(): QueryAllRepositoryReleaseRequest {
  return {
    id: "",
    repositoryName: "",
    pagination: undefined
  };
}
export const QueryAllRepositoryReleaseRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseRequest",
  encode(message: QueryAllRepositoryReleaseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryReleaseRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryReleaseRequest>): QueryAllRepositoryReleaseRequest {
    const message = createBaseQueryAllRepositoryReleaseRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryReleaseRequestAmino): QueryAllRepositoryReleaseRequest {
    const message = createBaseQueryAllRepositoryReleaseRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryReleaseRequest): QueryAllRepositoryReleaseRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryReleaseRequestAminoMsg): QueryAllRepositoryReleaseRequest {
    return QueryAllRepositoryReleaseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryReleaseRequestProtoMsg): QueryAllRepositoryReleaseRequest {
    return QueryAllRepositoryReleaseRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryReleaseRequest): Uint8Array {
    return QueryAllRepositoryReleaseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryReleaseRequest): QueryAllRepositoryReleaseRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseRequest",
      value: QueryAllRepositoryReleaseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryReleaseResponse(): QueryAllRepositoryReleaseResponse {
  return {
    Release: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseResponse",
  encode(message: QueryAllRepositoryReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Release) {
      Release.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryReleaseResponse {
    return {
      Release: Array.isArray(object?.Release) ? object.Release.map((e: any) => Release.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryReleaseResponse>): QueryAllRepositoryReleaseResponse {
    const message = createBaseQueryAllRepositoryReleaseResponse();
    message.Release = object.Release?.map(e => Release.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryReleaseResponseAmino): QueryAllRepositoryReleaseResponse {
    const message = createBaseQueryAllRepositoryReleaseResponse();
    message.Release = object.Release?.map(e => Release.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryReleaseResponse): QueryAllRepositoryReleaseResponseAmino {
    const obj: any = {};
    if (message.Release) {
      obj.Release = message.Release.map(e => e ? Release.toAmino(e) : undefined);
    } else {
      obj.Release = message.Release;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryReleaseResponseAminoMsg): QueryAllRepositoryReleaseResponse {
    return QueryAllRepositoryReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryReleaseResponseProtoMsg): QueryAllRepositoryReleaseResponse {
    return QueryAllRepositoryReleaseResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryReleaseResponse): Uint8Array {
    return QueryAllRepositoryReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryReleaseResponse): QueryAllRepositoryReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryReleaseResponse",
      value: QueryAllRepositoryReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryIssueRequest(): QueryGetRepositoryIssueRequest {
  return {
    id: "",
    repositoryName: "",
    issueIid: BigInt(0)
  };
}
export const QueryGetRepositoryIssueRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueRequest",
  encode(message: QueryGetRepositoryIssueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.issueIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.issueIid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryIssueRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      issueIid: isSet(object.issueIid) ? BigInt(object.issueIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryIssueRequest>): QueryGetRepositoryIssueRequest {
    const message = createBaseQueryGetRepositoryIssueRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.issueIid = object.issueIid !== undefined && object.issueIid !== null ? BigInt(object.issueIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetRepositoryIssueRequestAmino): QueryGetRepositoryIssueRequest {
    const message = createBaseQueryGetRepositoryIssueRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.issueIid !== undefined && object.issueIid !== null) {
      message.issueIid = BigInt(object.issueIid);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryIssueRequest): QueryGetRepositoryIssueRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.issueIid = message.issueIid !== BigInt(0) ? message.issueIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryIssueRequestAminoMsg): QueryGetRepositoryIssueRequest {
    return QueryGetRepositoryIssueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryIssueRequestProtoMsg): QueryGetRepositoryIssueRequest {
    return QueryGetRepositoryIssueRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryIssueRequest): Uint8Array {
    return QueryGetRepositoryIssueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryIssueRequest): QueryGetRepositoryIssueRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueRequest",
      value: QueryGetRepositoryIssueRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryIssueResponse(): QueryGetRepositoryIssueResponse {
  return {
    Issue: undefined
  };
}
export const QueryGetRepositoryIssueResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueResponse",
  encode(message: QueryGetRepositoryIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Issue !== undefined) {
      Issue.encode(message.Issue, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryIssueResponse {
    return {
      Issue: isSet(object.Issue) ? Issue.fromJSON(object.Issue) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryIssueResponse>): QueryGetRepositoryIssueResponse {
    const message = createBaseQueryGetRepositoryIssueResponse();
    message.Issue = object.Issue !== undefined && object.Issue !== null ? Issue.fromPartial(object.Issue) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryIssueResponseAmino): QueryGetRepositoryIssueResponse {
    const message = createBaseQueryGetRepositoryIssueResponse();
    if (object.Issue !== undefined && object.Issue !== null) {
      message.Issue = Issue.fromAmino(object.Issue);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryIssueResponse): QueryGetRepositoryIssueResponseAmino {
    const obj: any = {};
    obj.Issue = message.Issue ? Issue.toAmino(message.Issue) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryIssueResponseAminoMsg): QueryGetRepositoryIssueResponse {
    return QueryGetRepositoryIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryIssueResponseProtoMsg): QueryGetRepositoryIssueResponse {
    return QueryGetRepositoryIssueResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryIssueResponse): Uint8Array {
    return QueryGetRepositoryIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryIssueResponse): QueryGetRepositoryIssueResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryIssueResponse",
      value: QueryGetRepositoryIssueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryPullRequestRequest(): QueryGetRepositoryPullRequestRequest {
  return {
    id: "",
    repositoryName: "",
    pullIid: BigInt(0)
  };
}
export const QueryGetRepositoryPullRequestRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestRequest",
  encode(message: QueryGetRepositoryPullRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.pullIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.pullIid);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryPullRequestRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      pullIid: isSet(object.pullIid) ? BigInt(object.pullIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryPullRequestRequest>): QueryGetRepositoryPullRequestRequest {
    const message = createBaseQueryGetRepositoryPullRequestRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.pullIid = object.pullIid !== undefined && object.pullIid !== null ? BigInt(object.pullIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetRepositoryPullRequestRequestAmino): QueryGetRepositoryPullRequestRequest {
    const message = createBaseQueryGetRepositoryPullRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.pullIid !== undefined && object.pullIid !== null) {
      message.pullIid = BigInt(object.pullIid);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryPullRequestRequest): QueryGetRepositoryPullRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.pullIid = message.pullIid !== BigInt(0) ? message.pullIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryPullRequestRequestAminoMsg): QueryGetRepositoryPullRequestRequest {
    return QueryGetRepositoryPullRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryPullRequestRequestProtoMsg): QueryGetRepositoryPullRequestRequest {
    return QueryGetRepositoryPullRequestRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryPullRequestRequest): Uint8Array {
    return QueryGetRepositoryPullRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryPullRequestRequest): QueryGetRepositoryPullRequestRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestRequest",
      value: QueryGetRepositoryPullRequestRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryPullRequestResponse(): QueryGetRepositoryPullRequestResponse {
  return {
    PullRequest: undefined
  };
}
export const QueryGetRepositoryPullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestResponse",
  encode(message: QueryGetRepositoryPullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.PullRequest !== undefined) {
      PullRequest.encode(message.PullRequest, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryPullRequestResponse {
    return {
      PullRequest: isSet(object.PullRequest) ? PullRequest.fromJSON(object.PullRequest) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryPullRequestResponse>): QueryGetRepositoryPullRequestResponse {
    const message = createBaseQueryGetRepositoryPullRequestResponse();
    message.PullRequest = object.PullRequest !== undefined && object.PullRequest !== null ? PullRequest.fromPartial(object.PullRequest) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryPullRequestResponseAmino): QueryGetRepositoryPullRequestResponse {
    const message = createBaseQueryGetRepositoryPullRequestResponse();
    if (object.PullRequest !== undefined && object.PullRequest !== null) {
      message.PullRequest = PullRequest.fromAmino(object.PullRequest);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryPullRequestResponse): QueryGetRepositoryPullRequestResponseAmino {
    const obj: any = {};
    obj.PullRequest = message.PullRequest ? PullRequest.toAmino(message.PullRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryPullRequestResponseAminoMsg): QueryGetRepositoryPullRequestResponse {
    return QueryGetRepositoryPullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryPullRequestResponseProtoMsg): QueryGetRepositoryPullRequestResponse {
    return QueryGetRepositoryPullRequestResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryPullRequestResponse): Uint8Array {
    return QueryGetRepositoryPullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryPullRequestResponse): QueryGetRepositoryPullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryPullRequestResponse",
      value: QueryGetRepositoryPullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryIssueRequest(): QueryAllRepositoryIssueRequest {
  return {
    id: "",
    repositoryName: "",
    option: undefined,
    pagination: undefined
  };
}
export const QueryAllRepositoryIssueRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueRequest",
  encode(message: QueryAllRepositoryIssueRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.option !== undefined) {
      IssueOptions.encode(message.option, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryIssueRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      option: isSet(object.option) ? IssueOptions.fromJSON(object.option) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryIssueRequest>): QueryAllRepositoryIssueRequest {
    const message = createBaseQueryAllRepositoryIssueRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.option = object.option !== undefined && object.option !== null ? IssueOptions.fromPartial(object.option) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryIssueRequestAmino): QueryAllRepositoryIssueRequest {
    const message = createBaseQueryAllRepositoryIssueRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = IssueOptions.fromAmino(object.option);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryIssueRequest): QueryAllRepositoryIssueRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.option = message.option ? IssueOptions.toAmino(message.option) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryIssueRequestAminoMsg): QueryAllRepositoryIssueRequest {
    return QueryAllRepositoryIssueRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryIssueRequestProtoMsg): QueryAllRepositoryIssueRequest {
    return QueryAllRepositoryIssueRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryIssueRequest): Uint8Array {
    return QueryAllRepositoryIssueRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryIssueRequest): QueryAllRepositoryIssueRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueRequest",
      value: QueryAllRepositoryIssueRequest.encode(message).finish()
    };
  }
};
function createBaseIssueOptions(): IssueOptions {
  return {
    createdBy: "",
    state: "",
    labels: "",
    assignee: "",
    labelIds: [],
    sort: "",
    search: "",
    updatedAfter: BigInt(0),
    updatedBefore: BigInt(0)
  };
}
export const IssueOptions = {
  typeUrl: "/gitopia.gitopia.gitopia.IssueOptions",
  encode(message: IssueOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createdBy !== "") {
      writer.uint32(10).string(message.createdBy);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.labels !== "") {
      writer.uint32(26).string(message.labels);
    }
    if (message.assignee !== "") {
      writer.uint32(34).string(message.assignee);
    }
    writer.uint32(42).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sort !== "") {
      writer.uint32(50).string(message.sort);
    }
    if (message.search !== "") {
      writer.uint32(58).string(message.search);
    }
    if (message.updatedAfter !== BigInt(0)) {
      writer.uint32(64).int64(message.updatedAfter);
    }
    if (message.updatedBefore !== BigInt(0)) {
      writer.uint32(72).int64(message.updatedBefore);
    }
    return writer;
  },
  fromJSON(object: any): IssueOptions {
    return {
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      state: isSet(object.state) ? String(object.state) : "",
      labels: isSet(object.labels) ? String(object.labels) : "",
      assignee: isSet(object.assignee) ? String(object.assignee) : "",
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : [],
      sort: isSet(object.sort) ? String(object.sort) : "",
      search: isSet(object.search) ? String(object.search) : "",
      updatedAfter: isSet(object.updatedAfter) ? BigInt(object.updatedAfter.toString()) : BigInt(0),
      updatedBefore: isSet(object.updatedBefore) ? BigInt(object.updatedBefore.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<IssueOptions>): IssueOptions {
    const message = createBaseIssueOptions();
    message.createdBy = object.createdBy ?? "";
    message.state = object.state ?? "";
    message.labels = object.labels ?? "";
    message.assignee = object.assignee ?? "";
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    message.sort = object.sort ?? "";
    message.search = object.search ?? "";
    message.updatedAfter = object.updatedAfter !== undefined && object.updatedAfter !== null ? BigInt(object.updatedAfter.toString()) : BigInt(0);
    message.updatedBefore = object.updatedBefore !== undefined && object.updatedBefore !== null ? BigInt(object.updatedBefore.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IssueOptionsAmino): IssueOptions {
    const message = createBaseIssueOptions();
    if (object.createdBy !== undefined && object.createdBy !== null) {
      message.createdBy = object.createdBy;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.labels !== undefined && object.labels !== null) {
      message.labels = object.labels;
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = object.sort;
    }
    if (object.search !== undefined && object.search !== null) {
      message.search = object.search;
    }
    if (object.updatedAfter !== undefined && object.updatedAfter !== null) {
      message.updatedAfter = BigInt(object.updatedAfter);
    }
    if (object.updatedBefore !== undefined && object.updatedBefore !== null) {
      message.updatedBefore = BigInt(object.updatedBefore);
    }
    return message;
  },
  toAmino(message: IssueOptions): IssueOptionsAmino {
    const obj: any = {};
    obj.createdBy = message.createdBy === "" ? undefined : message.createdBy;
    obj.state = message.state === "" ? undefined : message.state;
    obj.labels = message.labels === "" ? undefined : message.labels;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    obj.sort = message.sort === "" ? undefined : message.sort;
    obj.search = message.search === "" ? undefined : message.search;
    obj.updatedAfter = message.updatedAfter !== BigInt(0) ? message.updatedAfter.toString() : undefined;
    obj.updatedBefore = message.updatedBefore !== BigInt(0) ? message.updatedBefore.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IssueOptionsAminoMsg): IssueOptions {
    return IssueOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: IssueOptionsProtoMsg): IssueOptions {
    return IssueOptions.decode(message.value);
  },
  toProto(message: IssueOptions): Uint8Array {
    return IssueOptions.encode(message).finish();
  },
  toProtoMsg(message: IssueOptions): IssueOptionsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.IssueOptions",
      value: IssueOptions.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryIssueResponse(): QueryAllRepositoryIssueResponse {
  return {
    Issue: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryIssueResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueResponse",
  encode(message: QueryAllRepositoryIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Issue) {
      Issue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryIssueResponse {
    return {
      Issue: Array.isArray(object?.Issue) ? object.Issue.map((e: any) => Issue.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryIssueResponse>): QueryAllRepositoryIssueResponse {
    const message = createBaseQueryAllRepositoryIssueResponse();
    message.Issue = object.Issue?.map(e => Issue.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryIssueResponseAmino): QueryAllRepositoryIssueResponse {
    const message = createBaseQueryAllRepositoryIssueResponse();
    message.Issue = object.Issue?.map(e => Issue.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryIssueResponse): QueryAllRepositoryIssueResponseAmino {
    const obj: any = {};
    if (message.Issue) {
      obj.Issue = message.Issue.map(e => e ? Issue.toAmino(e) : undefined);
    } else {
      obj.Issue = message.Issue;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryIssueResponseAminoMsg): QueryAllRepositoryIssueResponse {
    return QueryAllRepositoryIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryIssueResponseProtoMsg): QueryAllRepositoryIssueResponse {
    return QueryAllRepositoryIssueResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryIssueResponse): Uint8Array {
    return QueryAllRepositoryIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryIssueResponse): QueryAllRepositoryIssueResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryIssueResponse",
      value: QueryAllRepositoryIssueResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryPullRequestRequest(): QueryAllRepositoryPullRequestRequest {
  return {
    id: "",
    repositoryName: "",
    option: undefined,
    pagination: undefined
  };
}
export const QueryAllRepositoryPullRequestRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestRequest",
  encode(message: QueryAllRepositoryPullRequestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.option !== undefined) {
      PullRequestOptions.encode(message.option, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryPullRequestRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      option: isSet(object.option) ? PullRequestOptions.fromJSON(object.option) : undefined,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryPullRequestRequest>): QueryAllRepositoryPullRequestRequest {
    const message = createBaseQueryAllRepositoryPullRequestRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.option = object.option !== undefined && object.option !== null ? PullRequestOptions.fromPartial(object.option) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryPullRequestRequestAmino): QueryAllRepositoryPullRequestRequest {
    const message = createBaseQueryAllRepositoryPullRequestRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = PullRequestOptions.fromAmino(object.option);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryPullRequestRequest): QueryAllRepositoryPullRequestRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.option = message.option ? PullRequestOptions.toAmino(message.option) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryPullRequestRequestAminoMsg): QueryAllRepositoryPullRequestRequest {
    return QueryAllRepositoryPullRequestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryPullRequestRequestProtoMsg): QueryAllRepositoryPullRequestRequest {
    return QueryAllRepositoryPullRequestRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryPullRequestRequest): Uint8Array {
    return QueryAllRepositoryPullRequestRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryPullRequestRequest): QueryAllRepositoryPullRequestRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestRequest",
      value: QueryAllRepositoryPullRequestRequest.encode(message).finish()
    };
  }
};
function createBasePullRequestOptions(): PullRequestOptions {
  return {
    createdBy: "",
    state: "",
    labels: "",
    assignee: "",
    reviewer: "",
    labelIds: [],
    sort: "",
    search: "",
    updatedAfter: BigInt(0),
    updatedBefore: BigInt(0)
  };
}
export const PullRequestOptions = {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestOptions",
  encode(message: PullRequestOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.createdBy !== "") {
      writer.uint32(10).string(message.createdBy);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    if (message.labels !== "") {
      writer.uint32(26).string(message.labels);
    }
    if (message.assignee !== "") {
      writer.uint32(34).string(message.assignee);
    }
    if (message.reviewer !== "") {
      writer.uint32(42).string(message.reviewer);
    }
    writer.uint32(50).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.sort !== "") {
      writer.uint32(58).string(message.sort);
    }
    if (message.search !== "") {
      writer.uint32(66).string(message.search);
    }
    if (message.updatedAfter !== BigInt(0)) {
      writer.uint32(72).int64(message.updatedAfter);
    }
    if (message.updatedBefore !== BigInt(0)) {
      writer.uint32(80).int64(message.updatedBefore);
    }
    return writer;
  },
  fromJSON(object: any): PullRequestOptions {
    return {
      createdBy: isSet(object.createdBy) ? String(object.createdBy) : "",
      state: isSet(object.state) ? String(object.state) : "",
      labels: isSet(object.labels) ? String(object.labels) : "",
      assignee: isSet(object.assignee) ? String(object.assignee) : "",
      reviewer: isSet(object.reviewer) ? String(object.reviewer) : "",
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : [],
      sort: isSet(object.sort) ? String(object.sort) : "",
      search: isSet(object.search) ? String(object.search) : "",
      updatedAfter: isSet(object.updatedAfter) ? BigInt(object.updatedAfter.toString()) : BigInt(0),
      updatedBefore: isSet(object.updatedBefore) ? BigInt(object.updatedBefore.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PullRequestOptions>): PullRequestOptions {
    const message = createBasePullRequestOptions();
    message.createdBy = object.createdBy ?? "";
    message.state = object.state ?? "";
    message.labels = object.labels ?? "";
    message.assignee = object.assignee ?? "";
    message.reviewer = object.reviewer ?? "";
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    message.sort = object.sort ?? "";
    message.search = object.search ?? "";
    message.updatedAfter = object.updatedAfter !== undefined && object.updatedAfter !== null ? BigInt(object.updatedAfter.toString()) : BigInt(0);
    message.updatedBefore = object.updatedBefore !== undefined && object.updatedBefore !== null ? BigInt(object.updatedBefore.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PullRequestOptionsAmino): PullRequestOptions {
    const message = createBasePullRequestOptions();
    if (object.createdBy !== undefined && object.createdBy !== null) {
      message.createdBy = object.createdBy;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.labels !== undefined && object.labels !== null) {
      message.labels = object.labels;
    }
    if (object.assignee !== undefined && object.assignee !== null) {
      message.assignee = object.assignee;
    }
    if (object.reviewer !== undefined && object.reviewer !== null) {
      message.reviewer = object.reviewer;
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    if (object.sort !== undefined && object.sort !== null) {
      message.sort = object.sort;
    }
    if (object.search !== undefined && object.search !== null) {
      message.search = object.search;
    }
    if (object.updatedAfter !== undefined && object.updatedAfter !== null) {
      message.updatedAfter = BigInt(object.updatedAfter);
    }
    if (object.updatedBefore !== undefined && object.updatedBefore !== null) {
      message.updatedBefore = BigInt(object.updatedBefore);
    }
    return message;
  },
  toAmino(message: PullRequestOptions): PullRequestOptionsAmino {
    const obj: any = {};
    obj.createdBy = message.createdBy === "" ? undefined : message.createdBy;
    obj.state = message.state === "" ? undefined : message.state;
    obj.labels = message.labels === "" ? undefined : message.labels;
    obj.assignee = message.assignee === "" ? undefined : message.assignee;
    obj.reviewer = message.reviewer === "" ? undefined : message.reviewer;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    obj.sort = message.sort === "" ? undefined : message.sort;
    obj.search = message.search === "" ? undefined : message.search;
    obj.updatedAfter = message.updatedAfter !== BigInt(0) ? message.updatedAfter.toString() : undefined;
    obj.updatedBefore = message.updatedBefore !== BigInt(0) ? message.updatedBefore.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PullRequestOptionsAminoMsg): PullRequestOptions {
    return PullRequestOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: PullRequestOptionsProtoMsg): PullRequestOptions {
    return PullRequestOptions.decode(message.value);
  },
  toProto(message: PullRequestOptions): Uint8Array {
    return PullRequestOptions.encode(message).finish();
  },
  toProtoMsg(message: PullRequestOptions): PullRequestOptionsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PullRequestOptions",
      value: PullRequestOptions.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryPullRequestResponse(): QueryAllRepositoryPullRequestResponse {
  return {
    PullRequest: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryPullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestResponse",
  encode(message: QueryAllRepositoryPullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.PullRequest) {
      PullRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryPullRequestResponse {
    return {
      PullRequest: Array.isArray(object?.PullRequest) ? object.PullRequest.map((e: any) => PullRequest.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryPullRequestResponse>): QueryAllRepositoryPullRequestResponse {
    const message = createBaseQueryAllRepositoryPullRequestResponse();
    message.PullRequest = object.PullRequest?.map(e => PullRequest.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryPullRequestResponseAmino): QueryAllRepositoryPullRequestResponse {
    const message = createBaseQueryAllRepositoryPullRequestResponse();
    message.PullRequest = object.PullRequest?.map(e => PullRequest.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryPullRequestResponse): QueryAllRepositoryPullRequestResponseAmino {
    const obj: any = {};
    if (message.PullRequest) {
      obj.PullRequest = message.PullRequest.map(e => e ? PullRequest.toAmino(e) : undefined);
    } else {
      obj.PullRequest = message.PullRequest;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryPullRequestResponseAminoMsg): QueryAllRepositoryPullRequestResponse {
    return QueryAllRepositoryPullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryPullRequestResponseProtoMsg): QueryAllRepositoryPullRequestResponse {
    return QueryAllRepositoryPullRequestResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryPullRequestResponse): Uint8Array {
    return QueryAllRepositoryPullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryPullRequestResponse): QueryAllRepositoryPullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryPullRequestResponse",
      value: QueryAllRepositoryPullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryRequest(): QueryGetRepositoryRequest {
  return {
    id: BigInt(0)
  };
}
export const QueryGetRepositoryRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryRequest",
  encode(message: QueryGetRepositoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryRequest {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryRequest>): QueryGetRepositoryRequest {
    const message = createBaseQueryGetRepositoryRequest();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetRepositoryRequestAmino): QueryGetRepositoryRequest {
    const message = createBaseQueryGetRepositoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryRequest): QueryGetRepositoryRequestAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryRequestAminoMsg): QueryGetRepositoryRequest {
    return QueryGetRepositoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryRequestProtoMsg): QueryGetRepositoryRequest {
    return QueryGetRepositoryRequest.decode(message.value);
  },
  toProto(message: QueryGetRepositoryRequest): Uint8Array {
    return QueryGetRepositoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryRequest): QueryGetRepositoryRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryRequest",
      value: QueryGetRepositoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetRepositoryResponse(): QueryGetRepositoryResponse {
  return {
    Repository: undefined
  };
}
export const QueryGetRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryResponse",
  encode(message: QueryGetRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Repository !== undefined) {
      Repository.encode(message.Repository, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetRepositoryResponse {
    return {
      Repository: isSet(object.Repository) ? Repository.fromJSON(object.Repository) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetRepositoryResponse>): QueryGetRepositoryResponse {
    const message = createBaseQueryGetRepositoryResponse();
    message.Repository = object.Repository !== undefined && object.Repository !== null ? Repository.fromPartial(object.Repository) : undefined;
    return message;
  },
  fromAmino(object: QueryGetRepositoryResponseAmino): QueryGetRepositoryResponse {
    const message = createBaseQueryGetRepositoryResponse();
    if (object.Repository !== undefined && object.Repository !== null) {
      message.Repository = Repository.fromAmino(object.Repository);
    }
    return message;
  },
  toAmino(message: QueryGetRepositoryResponse): QueryGetRepositoryResponseAmino {
    const obj: any = {};
    obj.Repository = message.Repository ? Repository.toAmino(message.Repository) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetRepositoryResponseAminoMsg): QueryGetRepositoryResponse {
    return QueryGetRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetRepositoryResponseProtoMsg): QueryGetRepositoryResponse {
    return QueryGetRepositoryResponse.decode(message.value);
  },
  toProto(message: QueryGetRepositoryResponse): Uint8Array {
    return QueryGetRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetRepositoryResponse): QueryGetRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetRepositoryResponse",
      value: QueryGetRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseRepositoryFork(): RepositoryFork {
  return {
    creator: "",
    id: BigInt(0),
    name: "",
    owner: undefined,
    description: "",
    parent: BigInt(0),
    forksCount: BigInt(0),
    issuesCount: BigInt(0),
    pullsCount: BigInt(0)
  };
}
export const RepositoryFork = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryFork",
  encode(message: RepositoryFork, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.owner !== undefined) {
      RepositoryOwner.encode(message.owner, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.parent !== BigInt(0)) {
      writer.uint32(48).uint64(message.parent);
    }
    if (message.forksCount !== BigInt(0)) {
      writer.uint32(56).uint64(message.forksCount);
    }
    if (message.issuesCount !== BigInt(0)) {
      writer.uint32(64).uint64(message.issuesCount);
    }
    if (message.pullsCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.pullsCount);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryFork {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? RepositoryOwner.fromJSON(object.owner) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      parent: isSet(object.parent) ? BigInt(object.parent.toString()) : BigInt(0),
      forksCount: isSet(object.forksCount) ? BigInt(object.forksCount.toString()) : BigInt(0),
      issuesCount: isSet(object.issuesCount) ? BigInt(object.issuesCount.toString()) : BigInt(0),
      pullsCount: isSet(object.pullsCount) ? BigInt(object.pullsCount.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<RepositoryFork>): RepositoryFork {
    const message = createBaseRepositoryFork();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.owner = object.owner !== undefined && object.owner !== null ? RepositoryOwner.fromPartial(object.owner) : undefined;
    message.description = object.description ?? "";
    message.parent = object.parent !== undefined && object.parent !== null ? BigInt(object.parent.toString()) : BigInt(0);
    message.forksCount = object.forksCount !== undefined && object.forksCount !== null ? BigInt(object.forksCount.toString()) : BigInt(0);
    message.issuesCount = object.issuesCount !== undefined && object.issuesCount !== null ? BigInt(object.issuesCount.toString()) : BigInt(0);
    message.pullsCount = object.pullsCount !== undefined && object.pullsCount !== null ? BigInt(object.pullsCount.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: RepositoryForkAmino): RepositoryFork {
    const message = createBaseRepositoryFork();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = RepositoryOwner.fromAmino(object.owner);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = BigInt(object.parent);
    }
    if (object.forksCount !== undefined && object.forksCount !== null) {
      message.forksCount = BigInt(object.forksCount);
    }
    if (object.issuesCount !== undefined && object.issuesCount !== null) {
      message.issuesCount = BigInt(object.issuesCount);
    }
    if (object.pullsCount !== undefined && object.pullsCount !== null) {
      message.pullsCount = BigInt(object.pullsCount);
    }
    return message;
  },
  toAmino(message: RepositoryFork): RepositoryForkAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner ? RepositoryOwner.toAmino(message.owner) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    obj.parent = message.parent !== BigInt(0) ? message.parent.toString() : undefined;
    obj.forksCount = message.forksCount !== BigInt(0) ? message.forksCount.toString() : undefined;
    obj.issuesCount = message.issuesCount !== BigInt(0) ? message.issuesCount.toString() : undefined;
    obj.pullsCount = message.pullsCount !== BigInt(0) ? message.pullsCount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: RepositoryForkAminoMsg): RepositoryFork {
    return RepositoryFork.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryForkProtoMsg): RepositoryFork {
    return RepositoryFork.decode(message.value);
  },
  toProto(message: RepositoryFork): Uint8Array {
    return RepositoryFork.encode(message).finish();
  },
  toProtoMsg(message: RepositoryFork): RepositoryForkProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryFork",
      value: RepositoryFork.encode(message).finish()
    };
  }
};
function createBaseQueryGetAllForkRequest(): QueryGetAllForkRequest {
  return {
    id: "",
    repositoryName: "",
    pagination: undefined
  };
}
export const QueryGetAllForkRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkRequest",
  encode(message: QueryGetAllForkRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetAllForkRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetAllForkRequest>): QueryGetAllForkRequest {
    const message = createBaseQueryGetAllForkRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAllForkRequestAmino): QueryGetAllForkRequest {
    const message = createBaseQueryGetAllForkRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetAllForkRequest): QueryGetAllForkRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAllForkRequestAminoMsg): QueryGetAllForkRequest {
    return QueryGetAllForkRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAllForkRequestProtoMsg): QueryGetAllForkRequest {
    return QueryGetAllForkRequest.decode(message.value);
  },
  toProto(message: QueryGetAllForkRequest): Uint8Array {
    return QueryGetAllForkRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllForkRequest): QueryGetAllForkRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkRequest",
      value: QueryGetAllForkRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAllForkResponse(): QueryGetAllForkResponse {
  return {
    forks: [],
    pagination: undefined
  };
}
export const QueryGetAllForkResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkResponse",
  encode(message: QueryGetAllForkResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.forks) {
      RepositoryFork.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetAllForkResponse {
    return {
      forks: Array.isArray(object?.forks) ? object.forks.map((e: any) => RepositoryFork.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetAllForkResponse>): QueryGetAllForkResponse {
    const message = createBaseQueryGetAllForkResponse();
    message.forks = object.forks?.map(e => RepositoryFork.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAllForkResponseAmino): QueryGetAllForkResponse {
    const message = createBaseQueryGetAllForkResponse();
    message.forks = object.forks?.map(e => RepositoryFork.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGetAllForkResponse): QueryGetAllForkResponseAmino {
    const obj: any = {};
    if (message.forks) {
      obj.forks = message.forks.map(e => e ? RepositoryFork.toAmino(e) : undefined);
    } else {
      obj.forks = message.forks;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAllForkResponseAminoMsg): QueryGetAllForkResponse {
    return QueryGetAllForkResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAllForkResponseProtoMsg): QueryGetAllForkResponse {
    return QueryGetAllForkResponse.decode(message.value);
  },
  toProto(message: QueryGetAllForkResponse): Uint8Array {
    return QueryGetAllForkResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAllForkResponse): QueryGetAllForkResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetAllForkResponse",
      value: QueryGetAllForkResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryRequest(): QueryAllRepositoryRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllRepositoryRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryRequest",
  encode(message: QueryAllRepositoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryRequest>): QueryAllRepositoryRequest {
    const message = createBaseQueryAllRepositoryRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryRequestAmino): QueryAllRepositoryRequest {
    const message = createBaseQueryAllRepositoryRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryRequest): QueryAllRepositoryRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryRequestAminoMsg): QueryAllRepositoryRequest {
    return QueryAllRepositoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryRequestProtoMsg): QueryAllRepositoryRequest {
    return QueryAllRepositoryRequest.decode(message.value);
  },
  toProto(message: QueryAllRepositoryRequest): Uint8Array {
    return QueryAllRepositoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryRequest): QueryAllRepositoryRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryRequest",
      value: QueryAllRepositoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllRepositoryResponse(): QueryAllRepositoryResponse {
  return {
    Repository: [],
    pagination: undefined
  };
}
export const QueryAllRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryResponse",
  encode(message: QueryAllRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Repository) {
      Repository.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllRepositoryResponse {
    return {
      Repository: Array.isArray(object?.Repository) ? object.Repository.map((e: any) => Repository.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllRepositoryResponse>): QueryAllRepositoryResponse {
    const message = createBaseQueryAllRepositoryResponse();
    message.Repository = object.Repository?.map(e => Repository.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllRepositoryResponseAmino): QueryAllRepositoryResponse {
    const message = createBaseQueryAllRepositoryResponse();
    message.Repository = object.Repository?.map(e => Repository.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllRepositoryResponse): QueryAllRepositoryResponseAmino {
    const obj: any = {};
    if (message.Repository) {
      obj.Repository = message.Repository.map(e => e ? Repository.toAmino(e) : undefined);
    } else {
      obj.Repository = message.Repository;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllRepositoryResponseAminoMsg): QueryAllRepositoryResponse {
    return QueryAllRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllRepositoryResponseProtoMsg): QueryAllRepositoryResponse {
    return QueryAllRepositoryResponse.decode(message.value);
  },
  toProto(message: QueryAllRepositoryResponse): Uint8Array {
    return QueryAllRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllRepositoryResponse): QueryAllRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllRepositoryResponse",
      value: QueryAllRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserRequest(): QueryGetUserRequest {
  return {
    id: ""
  };
}
export const QueryGetUserRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserRequest",
  encode(message: QueryGetUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetUserRequest {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<QueryGetUserRequest>): QueryGetUserRequest {
    const message = createBaseQueryGetUserRequest();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: QueryGetUserRequestAmino): QueryGetUserRequest {
    const message = createBaseQueryGetUserRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryGetUserRequest): QueryGetUserRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserRequestAminoMsg): QueryGetUserRequest {
    return QueryGetUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserRequestProtoMsg): QueryGetUserRequest {
    return QueryGetUserRequest.decode(message.value);
  },
  toProto(message: QueryGetUserRequest): Uint8Array {
    return QueryGetUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserRequest): QueryGetUserRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserRequest",
      value: QueryGetUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetUserResponse(): QueryGetUserResponse {
  return {
    User: undefined
  };
}
export const QueryGetUserResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserResponse",
  encode(message: QueryGetUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.User !== undefined) {
      User.encode(message.User, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetUserResponse {
    return {
      User: isSet(object.User) ? User.fromJSON(object.User) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetUserResponse>): QueryGetUserResponse {
    const message = createBaseQueryGetUserResponse();
    message.User = object.User !== undefined && object.User !== null ? User.fromPartial(object.User) : undefined;
    return message;
  },
  fromAmino(object: QueryGetUserResponseAmino): QueryGetUserResponse {
    const message = createBaseQueryGetUserResponse();
    if (object.User !== undefined && object.User !== null) {
      message.User = User.fromAmino(object.User);
    }
    return message;
  },
  toAmino(message: QueryGetUserResponse): QueryGetUserResponseAmino {
    const obj: any = {};
    obj.User = message.User ? User.toAmino(message.User) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetUserResponseAminoMsg): QueryGetUserResponse {
    return QueryGetUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetUserResponseProtoMsg): QueryGetUserResponse {
    return QueryGetUserResponse.decode(message.value);
  },
  toProto(message: QueryGetUserResponse): Uint8Array {
    return QueryGetUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetUserResponse): QueryGetUserResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetUserResponse",
      value: QueryGetUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDaoRequest(): QueryAllUserDaoRequest {
  return {
    userId: "",
    pagination: undefined
  };
}
export const QueryAllUserDaoRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoRequest",
  encode(message: QueryAllUserDaoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserDaoRequest {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserDaoRequest>): QueryAllUserDaoRequest {
    const message = createBaseQueryAllUserDaoRequest();
    message.userId = object.userId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserDaoRequestAmino): QueryAllUserDaoRequest {
    const message = createBaseQueryAllUserDaoRequest();
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserDaoRequest): QueryAllUserDaoRequestAmino {
    const obj: any = {};
    obj.userId = message.userId === "" ? undefined : message.userId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDaoRequestAminoMsg): QueryAllUserDaoRequest {
    return QueryAllUserDaoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDaoRequestProtoMsg): QueryAllUserDaoRequest {
    return QueryAllUserDaoRequest.decode(message.value);
  },
  toProto(message: QueryAllUserDaoRequest): Uint8Array {
    return QueryAllUserDaoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDaoRequest): QueryAllUserDaoRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoRequest",
      value: QueryAllUserDaoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserDaoResponse(): QueryAllUserDaoResponse {
  return {
    dao: [],
    pagination: undefined
  };
}
export const QueryAllUserDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoResponse",
  encode(message: QueryAllUserDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.dao) {
      Dao.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserDaoResponse {
    return {
      dao: Array.isArray(object?.dao) ? object.dao.map((e: any) => Dao.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserDaoResponse>): QueryAllUserDaoResponse {
    const message = createBaseQueryAllUserDaoResponse();
    message.dao = object.dao?.map(e => Dao.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserDaoResponseAmino): QueryAllUserDaoResponse {
    const message = createBaseQueryAllUserDaoResponse();
    message.dao = object.dao?.map(e => Dao.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserDaoResponse): QueryAllUserDaoResponseAmino {
    const obj: any = {};
    if (message.dao) {
      obj.dao = message.dao.map(e => e ? Dao.toAmino(e) : undefined);
    } else {
      obj.dao = message.dao;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserDaoResponseAminoMsg): QueryAllUserDaoResponse {
    return QueryAllUserDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserDaoResponseProtoMsg): QueryAllUserDaoResponse {
    return QueryAllUserDaoResponse.decode(message.value);
  },
  toProto(message: QueryAllUserDaoResponse): Uint8Array {
    return QueryAllUserDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserDaoResponse): QueryAllUserDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserDaoResponse",
      value: QueryAllUserDaoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserRequest(): QueryAllUserRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllUserRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserRequest",
  encode(message: QueryAllUserRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserRequest>): QueryAllUserRequest {
    const message = createBaseQueryAllUserRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserRequestAmino): QueryAllUserRequest {
    const message = createBaseQueryAllUserRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserRequest): QueryAllUserRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserRequestAminoMsg): QueryAllUserRequest {
    return QueryAllUserRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserRequestProtoMsg): QueryAllUserRequest {
    return QueryAllUserRequest.decode(message.value);
  },
  toProto(message: QueryAllUserRequest): Uint8Array {
    return QueryAllUserRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserRequest): QueryAllUserRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserRequest",
      value: QueryAllUserRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllUserResponse(): QueryAllUserResponse {
  return {
    User: [],
    pagination: undefined
  };
}
export const QueryAllUserResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserResponse",
  encode(message: QueryAllUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.User) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllUserResponse {
    return {
      User: Array.isArray(object?.User) ? object.User.map((e: any) => User.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllUserResponse>): QueryAllUserResponse {
    const message = createBaseQueryAllUserResponse();
    message.User = object.User?.map(e => User.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllUserResponseAmino): QueryAllUserResponse {
    const message = createBaseQueryAllUserResponse();
    message.User = object.User?.map(e => User.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllUserResponse): QueryAllUserResponseAmino {
    const obj: any = {};
    if (message.User) {
      obj.User = message.User.map(e => e ? User.toAmino(e) : undefined);
    } else {
      obj.User = message.User;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllUserResponseAminoMsg): QueryAllUserResponse {
    return QueryAllUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllUserResponseProtoMsg): QueryAllUserResponse {
    return QueryAllUserResponse.decode(message.value);
  },
  toProto(message: QueryAllUserResponse): Uint8Array {
    return QueryAllUserResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllUserResponse): QueryAllUserResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllUserResponse",
      value: QueryAllUserResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllAnyRepositoryRequest(): QueryAllAnyRepositoryRequest {
  return {
    id: "",
    pagination: undefined
  };
}
export const QueryAllAnyRepositoryRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryRequest",
  encode(message: QueryAllAnyRepositoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllAnyRepositoryRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllAnyRepositoryRequest>): QueryAllAnyRepositoryRequest {
    const message = createBaseQueryAllAnyRepositoryRequest();
    message.id = object.id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnyRepositoryRequestAmino): QueryAllAnyRepositoryRequest {
    const message = createBaseQueryAllAnyRepositoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAnyRepositoryRequest): QueryAllAnyRepositoryRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnyRepositoryRequestAminoMsg): QueryAllAnyRepositoryRequest {
    return QueryAllAnyRepositoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnyRepositoryRequestProtoMsg): QueryAllAnyRepositoryRequest {
    return QueryAllAnyRepositoryRequest.decode(message.value);
  },
  toProto(message: QueryAllAnyRepositoryRequest): Uint8Array {
    return QueryAllAnyRepositoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnyRepositoryRequest): QueryAllAnyRepositoryRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryRequest",
      value: QueryAllAnyRepositoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllAnyRepositoryResponse(): QueryAllAnyRepositoryResponse {
  return {
    Repository: [],
    pagination: undefined
  };
}
export const QueryAllAnyRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryResponse",
  encode(message: QueryAllAnyRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Repository) {
      Repository.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllAnyRepositoryResponse {
    return {
      Repository: Array.isArray(object?.Repository) ? object.Repository.map((e: any) => Repository.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllAnyRepositoryResponse>): QueryAllAnyRepositoryResponse {
    const message = createBaseQueryAllAnyRepositoryResponse();
    message.Repository = object.Repository?.map(e => Repository.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllAnyRepositoryResponseAmino): QueryAllAnyRepositoryResponse {
    const message = createBaseQueryAllAnyRepositoryResponse();
    message.Repository = object.Repository?.map(e => Repository.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllAnyRepositoryResponse): QueryAllAnyRepositoryResponseAmino {
    const obj: any = {};
    if (message.Repository) {
      obj.Repository = message.Repository.map(e => e ? Repository.toAmino(e) : undefined);
    } else {
      obj.Repository = message.Repository;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllAnyRepositoryResponseAminoMsg): QueryAllAnyRepositoryResponse {
    return QueryAllAnyRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllAnyRepositoryResponseProtoMsg): QueryAllAnyRepositoryResponse {
    return QueryAllAnyRepositoryResponse.decode(message.value);
  },
  toProto(message: QueryAllAnyRepositoryResponse): Uint8Array {
    return QueryAllAnyRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllAnyRepositoryResponse): QueryAllAnyRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllAnyRepositoryResponse",
      value: QueryAllAnyRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetAnyRepositoryRequest(): QueryGetAnyRepositoryRequest {
  return {
    id: "",
    repositoryName: ""
  };
}
export const QueryGetAnyRepositoryRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryRequest",
  encode(message: QueryGetAnyRepositoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.repositoryName !== "") {
      writer.uint32(18).string(message.repositoryName);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetAnyRepositoryRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      repositoryName: isSet(object.repositoryName) ? String(object.repositoryName) : ""
    };
  },
  fromPartial(object: Partial<QueryGetAnyRepositoryRequest>): QueryGetAnyRepositoryRequest {
    const message = createBaseQueryGetAnyRepositoryRequest();
    message.id = object.id ?? "";
    message.repositoryName = object.repositoryName ?? "";
    return message;
  },
  fromAmino(object: QueryGetAnyRepositoryRequestAmino): QueryGetAnyRepositoryRequest {
    const message = createBaseQueryGetAnyRepositoryRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.repositoryName !== undefined && object.repositoryName !== null) {
      message.repositoryName = object.repositoryName;
    }
    return message;
  },
  toAmino(message: QueryGetAnyRepositoryRequest): QueryGetAnyRepositoryRequestAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.repositoryName = message.repositoryName === "" ? undefined : message.repositoryName;
    return obj;
  },
  fromAminoMsg(object: QueryGetAnyRepositoryRequestAminoMsg): QueryGetAnyRepositoryRequest {
    return QueryGetAnyRepositoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAnyRepositoryRequestProtoMsg): QueryGetAnyRepositoryRequest {
    return QueryGetAnyRepositoryRequest.decode(message.value);
  },
  toProto(message: QueryGetAnyRepositoryRequest): Uint8Array {
    return QueryGetAnyRepositoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAnyRepositoryRequest): QueryGetAnyRepositoryRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryRequest",
      value: QueryGetAnyRepositoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetAnyRepositoryResponse(): QueryGetAnyRepositoryResponse {
  return {
    Repository: undefined
  };
}
export const QueryGetAnyRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryResponse",
  encode(message: QueryGetAnyRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Repository !== undefined) {
      Repository.encode(message.Repository, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetAnyRepositoryResponse {
    return {
      Repository: isSet(object.Repository) ? Repository.fromJSON(object.Repository) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetAnyRepositoryResponse>): QueryGetAnyRepositoryResponse {
    const message = createBaseQueryGetAnyRepositoryResponse();
    message.Repository = object.Repository !== undefined && object.Repository !== null ? Repository.fromPartial(object.Repository) : undefined;
    return message;
  },
  fromAmino(object: QueryGetAnyRepositoryResponseAmino): QueryGetAnyRepositoryResponse {
    const message = createBaseQueryGetAnyRepositoryResponse();
    if (object.Repository !== undefined && object.Repository !== null) {
      message.Repository = Repository.fromAmino(object.Repository);
    }
    return message;
  },
  toAmino(message: QueryGetAnyRepositoryResponse): QueryGetAnyRepositoryResponseAmino {
    const obj: any = {};
    obj.Repository = message.Repository ? Repository.toAmino(message.Repository) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetAnyRepositoryResponseAminoMsg): QueryGetAnyRepositoryResponse {
    return QueryGetAnyRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetAnyRepositoryResponseProtoMsg): QueryGetAnyRepositoryResponse {
    return QueryGetAnyRepositoryResponse.decode(message.value);
  },
  toProto(message: QueryGetAnyRepositoryResponse): Uint8Array {
    return QueryGetAnyRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetAnyRepositoryResponse): QueryGetAnyRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetAnyRepositoryResponse",
      value: QueryGetAnyRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetWhoisRequest(): QueryGetWhoisRequest {
  return {
    name: ""
  };
}
export const QueryGetWhoisRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisRequest",
  encode(message: QueryGetWhoisRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): QueryGetWhoisRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<QueryGetWhoisRequest>): QueryGetWhoisRequest {
    const message = createBaseQueryGetWhoisRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryGetWhoisRequestAmino): QueryGetWhoisRequest {
    const message = createBaseQueryGetWhoisRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryGetWhoisRequest): QueryGetWhoisRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhoisRequestAminoMsg): QueryGetWhoisRequest {
    return QueryGetWhoisRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhoisRequestProtoMsg): QueryGetWhoisRequest {
    return QueryGetWhoisRequest.decode(message.value);
  },
  toProto(message: QueryGetWhoisRequest): Uint8Array {
    return QueryGetWhoisRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhoisRequest): QueryGetWhoisRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisRequest",
      value: QueryGetWhoisRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetWhoisResponse(): QueryGetWhoisResponse {
  return {
    Whois: undefined
  };
}
export const QueryGetWhoisResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisResponse",
  encode(message: QueryGetWhoisResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.Whois !== undefined) {
      Whois.encode(message.Whois, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGetWhoisResponse {
    return {
      Whois: isSet(object.Whois) ? Whois.fromJSON(object.Whois) : undefined
    };
  },
  fromPartial(object: Partial<QueryGetWhoisResponse>): QueryGetWhoisResponse {
    const message = createBaseQueryGetWhoisResponse();
    message.Whois = object.Whois !== undefined && object.Whois !== null ? Whois.fromPartial(object.Whois) : undefined;
    return message;
  },
  fromAmino(object: QueryGetWhoisResponseAmino): QueryGetWhoisResponse {
    const message = createBaseQueryGetWhoisResponse();
    if (object.Whois !== undefined && object.Whois !== null) {
      message.Whois = Whois.fromAmino(object.Whois);
    }
    return message;
  },
  toAmino(message: QueryGetWhoisResponse): QueryGetWhoisResponseAmino {
    const obj: any = {};
    obj.Whois = message.Whois ? Whois.toAmino(message.Whois) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetWhoisResponseAminoMsg): QueryGetWhoisResponse {
    return QueryGetWhoisResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetWhoisResponseProtoMsg): QueryGetWhoisResponse {
    return QueryGetWhoisResponse.decode(message.value);
  },
  toProto(message: QueryGetWhoisResponse): Uint8Array {
    return QueryGetWhoisResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetWhoisResponse): QueryGetWhoisResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryGetWhoisResponse",
      value: QueryGetWhoisResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhoisRequest(): QueryAllWhoisRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllWhoisRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisRequest",
  encode(message: QueryAllWhoisRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllWhoisRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllWhoisRequest>): QueryAllWhoisRequest {
    const message = createBaseQueryAllWhoisRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhoisRequestAmino): QueryAllWhoisRequest {
    const message = createBaseQueryAllWhoisRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhoisRequest): QueryAllWhoisRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhoisRequestAminoMsg): QueryAllWhoisRequest {
    return QueryAllWhoisRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhoisRequestProtoMsg): QueryAllWhoisRequest {
    return QueryAllWhoisRequest.decode(message.value);
  },
  toProto(message: QueryAllWhoisRequest): Uint8Array {
    return QueryAllWhoisRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhoisRequest): QueryAllWhoisRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisRequest",
      value: QueryAllWhoisRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllWhoisResponse(): QueryAllWhoisResponse {
  return {
    Whois: [],
    pagination: undefined
  };
}
export const QueryAllWhoisResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisResponse",
  encode(message: QueryAllWhoisResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.Whois) {
      Whois.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAllWhoisResponse {
    return {
      Whois: Array.isArray(object?.Whois) ? object.Whois.map((e: any) => Whois.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAllWhoisResponse>): QueryAllWhoisResponse {
    const message = createBaseQueryAllWhoisResponse();
    message.Whois = object.Whois?.map(e => Whois.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllWhoisResponseAmino): QueryAllWhoisResponse {
    const message = createBaseQueryAllWhoisResponse();
    message.Whois = object.Whois?.map(e => Whois.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllWhoisResponse): QueryAllWhoisResponseAmino {
    const obj: any = {};
    if (message.Whois) {
      obj.Whois = message.Whois.map(e => e ? Whois.toAmino(e) : undefined);
    } else {
      obj.Whois = message.Whois;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllWhoisResponseAminoMsg): QueryAllWhoisResponse {
    return QueryAllWhoisResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllWhoisResponseProtoMsg): QueryAllWhoisResponse {
    return QueryAllWhoisResponse.decode(message.value);
  },
  toProto(message: QueryAllWhoisResponse): Uint8Array {
    return QueryAllWhoisResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllWhoisResponse): QueryAllWhoisResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.QueryAllWhoisResponse",
      value: QueryAllWhoisResponse.encode(message).finish()
    };
  }
};