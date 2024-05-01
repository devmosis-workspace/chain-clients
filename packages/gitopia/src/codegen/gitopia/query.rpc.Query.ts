import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryVestedAmountRequest, QueryVestedAmountResponse, QueryGetTaskRequest, QueryGetTaskResponse, QueryAllTaskRequest, QueryAllTaskResponse, QueryAllBranchRequest, QueryAllBranchResponse, QueryGetRepositoryBranchRequest, QueryGetRepositoryBranchResponse, QueryGetRepositoryBranchShaRequest, QueryGetRepositoryBranchShaResponse, QueryAllRepositoryBranchRequest, QueryAllRepositoryBranchResponse, QueryAllTagRequest, QueryAllTagResponse, QueryGetRepositoryTagRequest, QueryGetRepositoryTagResponse, QueryGetRepositoryTagShaRequest, QueryGetRepositoryTagShaResponse, QueryAllRepositoryTagRequest, QueryAllRepositoryTagResponse, QueryGetDaoMemberRequest, QueryGetDaoMemberResponse, QueryAllDaoMemberRequest, QueryAllDaoMemberResponse, QueryAllMemberRequest, QueryAllMemberResponse, QueryGetBountyRequest, QueryGetBountyResponse, QueryAllBountyRequest, QueryAllBountyResponse, QueryGetReleaseRequest, QueryGetReleaseResponse, QueryAllReleaseRequest, QueryAllReleaseResponse, QueryAllPullRequestRequest, QueryAllPullRequestResponse, QueryGetDaoRequest, QueryGetDaoResponse, QueryAllDaoRequest, QueryAllDaoResponse, QueryGetIssueCommentRequest, QueryGetIssueCommentResponse, QueryGetPullRequestCommentRequest, QueryGetPullRequestCommentResponse, QueryAllCommentRequest, QueryAllCommentResponse, QueryAllIssueCommentRequest, QueryAllIssueCommentResponse, QueryAllPullRequestCommentRequest, QueryAllPullRequestCommentResponse, QueryAllIssueRequest, QueryAllIssueResponse, QueryGetLatestRepositoryReleaseRequest, QueryGetLatestRepositoryReleaseResponse, QueryGetRepositoryReleaseRequest, QueryGetRepositoryReleaseResponse, QueryAllRepositoryReleaseRequest, QueryAllRepositoryReleaseResponse, QueryGetRepositoryIssueRequest, QueryGetRepositoryIssueResponse, QueryAllRepositoryIssueRequest, QueryAllRepositoryIssueResponse, QueryGetRepositoryPullRequestRequest, QueryGetRepositoryPullRequestResponse, QueryAllRepositoryPullRequestRequest, QueryAllRepositoryPullRequestResponse, QueryGetRepositoryRequest, QueryGetRepositoryResponse, QueryAllRepositoryRequest, QueryAllRepositoryResponse, QueryGetAllForkRequest, QueryGetAllForkResponse, QueryGetUserRequest, QueryGetUserResponse, QueryAllUserDaoRequest, QueryAllUserDaoResponse, QueryAllUserRequest, QueryAllUserResponse, QueryAllAnyRepositoryRequest, QueryAllAnyRepositoryResponse, QueryGetAnyRepositoryRequest, QueryGetAnyRepositoryResponse, QueryGetWhoisRequest, QueryGetWhoisResponse, QueryAllWhoisRequest, QueryAllWhoisResponse, QueryGetPullRequestMergePermissionRequest, QueryGetPullRequestMergePermissionResponse, QueryCheckGitServerAuthorizationRequest, QueryCheckGitServerAuthorizationResponse, QueryCheckStorageProviderAuthorizationRequest, QueryCheckStorageProviderAuthorizationResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of gitopia parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** query vested amount for developer address */
  vestedAmount(request: QueryVestedAmountRequest): Promise<QueryVestedAmountResponse>;
  /** Queries a Task by id. */
  task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
  /** Queries a list of Task items. */
  taskAll(request?: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
  /** Queries a list of Branch items. */
  branchAll(request?: QueryAllBranchRequest): Promise<QueryAllBranchResponse>;
  /** Queries Repository Branch by name. */
  repositoryBranch(request: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponse>;
  repositoryBranchSha(request: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponse>;
  /** Queries a list of Repository Branch. */
  repositoryBranchAll(request: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponse>;
  /** Queries a list of Tag items. */
  tagAll(request?: QueryAllTagRequest): Promise<QueryAllTagResponse>;
  /** Queries a Repository Tag by id. */
  repositoryTag(request: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponse>;
  repositoryTagSha(request: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponse>;
  /** Queries a list of Repository Tag. */
  repositoryTagAll(request: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponse>;
  /** Queries a Member by id. */
  daoMember(request: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponse>;
  /** Queries a list of Dao Member. */
  daoMemberAll(request: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponse>;
  /** Queries a list of Member items. */
  memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
  /** Queries a Bounty by id. */
  bounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse>;
  /** Queries a list of Bounty items. */
  bountyAll(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse>;
  /** Queries a release by id. */
  release(request: QueryGetReleaseRequest): Promise<QueryGetReleaseResponse>;
  /** Queries a list of release items. */
  releaseAll(request?: QueryAllReleaseRequest): Promise<QueryAllReleaseResponse>;
  /** Queries a list of pullRequest items. */
  pullRequestAll(request?: QueryAllPullRequestRequest): Promise<QueryAllPullRequestResponse>;
  /** Queries a Dao by id. */
  dao(request: QueryGetDaoRequest): Promise<QueryGetDaoResponse>;
  /** Queries a list of Dao items. */
  daoAll(request?: QueryAllDaoRequest): Promise<QueryAllDaoResponse>;
  /** Queries a issue comment. */
  issueComment(request: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponse>;
  /** Queries a pullrequest comment. */
  pullRequestComment(request: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponse>;
  /** Queries a list of comment. */
  commentAll(request?: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
  /** Queries a list of issue comment. */
  issueCommentAll(request: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponse>;
  /** Queries a list of pullrequest comment. */
  pullRequestCommentAll(request: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponse>;
  /** Queries a list of issue items. */
  issueAll(request?: QueryAllIssueRequest): Promise<QueryAllIssueResponse>;
  repositoryReleaseLatest(request: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponse>;
  repositoryRelease(request: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponse>;
  repositoryReleaseAll(request: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponse>;
  /** Queries a repository issue by iid. */
  repositoryIssue(request: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponse>;
  /** Queries a list of repository issue. */
  repositoryIssueAll(request: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponse>;
  /** Queries a repository pullRequest. */
  repositoryPullRequest(request: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponse>;
  /** Queries a list of repository pullRequest. */
  repositoryPullRequestAll(request: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponse>;
  /** Queries a repository by id. */
  repository(request: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponse>;
  /** Queries a list of repository items. */
  repositoryAll(request?: QueryAllRepositoryRequest): Promise<QueryAllRepositoryResponse>;
  /** Queries a repository forks by id. */
  forkAll(request: QueryGetAllForkRequest): Promise<QueryGetAllForkResponse>;
  /** Queries a user by id. */
  user(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
  /** Queries a list of User Dao. */
  userDaoAll(request: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponse>;
  /** Queries a list of user items. */
  userAll(request?: QueryAllUserRequest): Promise<QueryAllUserResponse>;
  /** Queries a list of user repositories. */
  anyRepositoryAll(request: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponse>;
  /** Queries a repository by user id and repository name */
  anyRepository(request: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponse>;
  /** Queries a whois by id. */
  whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
  /** Queries a list of whois items. */
  whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
  pullRequestMergePermission(request: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponse>;
  checkGitServerAuthorization(request: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponse>;
  checkStorageProviderAuthorization(request: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.vestedAmount = this.vestedAmount.bind(this);
    this.task = this.task.bind(this);
    this.taskAll = this.taskAll.bind(this);
    this.branchAll = this.branchAll.bind(this);
    this.repositoryBranch = this.repositoryBranch.bind(this);
    this.repositoryBranchSha = this.repositoryBranchSha.bind(this);
    this.repositoryBranchAll = this.repositoryBranchAll.bind(this);
    this.tagAll = this.tagAll.bind(this);
    this.repositoryTag = this.repositoryTag.bind(this);
    this.repositoryTagSha = this.repositoryTagSha.bind(this);
    this.repositoryTagAll = this.repositoryTagAll.bind(this);
    this.daoMember = this.daoMember.bind(this);
    this.daoMemberAll = this.daoMemberAll.bind(this);
    this.memberAll = this.memberAll.bind(this);
    this.bounty = this.bounty.bind(this);
    this.bountyAll = this.bountyAll.bind(this);
    this.release = this.release.bind(this);
    this.releaseAll = this.releaseAll.bind(this);
    this.pullRequestAll = this.pullRequestAll.bind(this);
    this.dao = this.dao.bind(this);
    this.daoAll = this.daoAll.bind(this);
    this.issueComment = this.issueComment.bind(this);
    this.pullRequestComment = this.pullRequestComment.bind(this);
    this.commentAll = this.commentAll.bind(this);
    this.issueCommentAll = this.issueCommentAll.bind(this);
    this.pullRequestCommentAll = this.pullRequestCommentAll.bind(this);
    this.issueAll = this.issueAll.bind(this);
    this.repositoryReleaseLatest = this.repositoryReleaseLatest.bind(this);
    this.repositoryRelease = this.repositoryRelease.bind(this);
    this.repositoryReleaseAll = this.repositoryReleaseAll.bind(this);
    this.repositoryIssue = this.repositoryIssue.bind(this);
    this.repositoryIssueAll = this.repositoryIssueAll.bind(this);
    this.repositoryPullRequest = this.repositoryPullRequest.bind(this);
    this.repositoryPullRequestAll = this.repositoryPullRequestAll.bind(this);
    this.repository = this.repository.bind(this);
    this.repositoryAll = this.repositoryAll.bind(this);
    this.forkAll = this.forkAll.bind(this);
    this.user = this.user.bind(this);
    this.userDaoAll = this.userDaoAll.bind(this);
    this.userAll = this.userAll.bind(this);
    this.anyRepositoryAll = this.anyRepositoryAll.bind(this);
    this.anyRepository = this.anyRepository.bind(this);
    this.whois = this.whois.bind(this);
    this.whoisAll = this.whoisAll.bind(this);
    this.pullRequestMergePermission = this.pullRequestMergePermission.bind(this);
    this.checkGitServerAuthorization = this.checkGitServerAuthorization.bind(this);
    this.checkStorageProviderAuthorization = this.checkStorageProviderAuthorization.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  vestedAmount(request: QueryVestedAmountRequest): Promise<QueryVestedAmountResponse> {
    const data = QueryVestedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "VestedAmount", data);
    return promise.then(data => QueryVestedAmountResponse.decode(new BinaryReader(data)));
  }
  task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse> {
    const data = QueryGetTaskRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Task", data);
    return promise.then(data => QueryGetTaskResponse.decode(new BinaryReader(data)));
  }
  taskAll(request: QueryAllTaskRequest = {
    pagination: undefined
  }): Promise<QueryAllTaskResponse> {
    const data = QueryAllTaskRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "TaskAll", data);
    return promise.then(data => QueryAllTaskResponse.decode(new BinaryReader(data)));
  }
  branchAll(request: QueryAllBranchRequest = {
    pagination: undefined
  }): Promise<QueryAllBranchResponse> {
    const data = QueryAllBranchRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "BranchAll", data);
    return promise.then(data => QueryAllBranchResponse.decode(new BinaryReader(data)));
  }
  repositoryBranch(request: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponse> {
    const data = QueryGetRepositoryBranchRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryBranch", data);
    return promise.then(data => QueryGetRepositoryBranchResponse.decode(new BinaryReader(data)));
  }
  repositoryBranchSha(request: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponse> {
    const data = QueryGetRepositoryBranchShaRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryBranchSha", data);
    return promise.then(data => QueryGetRepositoryBranchShaResponse.decode(new BinaryReader(data)));
  }
  repositoryBranchAll(request: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponse> {
    const data = QueryAllRepositoryBranchRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryBranchAll", data);
    return promise.then(data => QueryAllRepositoryBranchResponse.decode(new BinaryReader(data)));
  }
  tagAll(request: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponse> {
    const data = QueryAllTagRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "TagAll", data);
    return promise.then(data => QueryAllTagResponse.decode(new BinaryReader(data)));
  }
  repositoryTag(request: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponse> {
    const data = QueryGetRepositoryTagRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryTag", data);
    return promise.then(data => QueryGetRepositoryTagResponse.decode(new BinaryReader(data)));
  }
  repositoryTagSha(request: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponse> {
    const data = QueryGetRepositoryTagShaRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryTagSha", data);
    return promise.then(data => QueryGetRepositoryTagShaResponse.decode(new BinaryReader(data)));
  }
  repositoryTagAll(request: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponse> {
    const data = QueryAllRepositoryTagRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryTagAll", data);
    return promise.then(data => QueryAllRepositoryTagResponse.decode(new BinaryReader(data)));
  }
  daoMember(request: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponse> {
    const data = QueryGetDaoMemberRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "DaoMember", data);
    return promise.then(data => QueryGetDaoMemberResponse.decode(new BinaryReader(data)));
  }
  daoMemberAll(request: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponse> {
    const data = QueryAllDaoMemberRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "DaoMemberAll", data);
    return promise.then(data => QueryAllDaoMemberResponse.decode(new BinaryReader(data)));
  }
  memberAll(request: QueryAllMemberRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberResponse> {
    const data = QueryAllMemberRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "MemberAll", data);
    return promise.then(data => QueryAllMemberResponse.decode(new BinaryReader(data)));
  }
  bounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse> {
    const data = QueryGetBountyRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Bounty", data);
    return promise.then(data => QueryGetBountyResponse.decode(new BinaryReader(data)));
  }
  bountyAll(request: QueryAllBountyRequest = {
    pagination: undefined
  }): Promise<QueryAllBountyResponse> {
    const data = QueryAllBountyRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "BountyAll", data);
    return promise.then(data => QueryAllBountyResponse.decode(new BinaryReader(data)));
  }
  release(request: QueryGetReleaseRequest): Promise<QueryGetReleaseResponse> {
    const data = QueryGetReleaseRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Release", data);
    return promise.then(data => QueryGetReleaseResponse.decode(new BinaryReader(data)));
  }
  releaseAll(request: QueryAllReleaseRequest = {
    pagination: undefined
  }): Promise<QueryAllReleaseResponse> {
    const data = QueryAllReleaseRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "ReleaseAll", data);
    return promise.then(data => QueryAllReleaseResponse.decode(new BinaryReader(data)));
  }
  pullRequestAll(request: QueryAllPullRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllPullRequestResponse> {
    const data = QueryAllPullRequestRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "PullRequestAll", data);
    return promise.then(data => QueryAllPullRequestResponse.decode(new BinaryReader(data)));
  }
  dao(request: QueryGetDaoRequest): Promise<QueryGetDaoResponse> {
    const data = QueryGetDaoRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Dao", data);
    return promise.then(data => QueryGetDaoResponse.decode(new BinaryReader(data)));
  }
  daoAll(request: QueryAllDaoRequest = {
    pagination: undefined
  }): Promise<QueryAllDaoResponse> {
    const data = QueryAllDaoRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "DaoAll", data);
    return promise.then(data => QueryAllDaoResponse.decode(new BinaryReader(data)));
  }
  issueComment(request: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponse> {
    const data = QueryGetIssueCommentRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "IssueComment", data);
    return promise.then(data => QueryGetIssueCommentResponse.decode(new BinaryReader(data)));
  }
  pullRequestComment(request: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponse> {
    const data = QueryGetPullRequestCommentRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "PullRequestComment", data);
    return promise.then(data => QueryGetPullRequestCommentResponse.decode(new BinaryReader(data)));
  }
  commentAll(request: QueryAllCommentRequest = {
    pagination: undefined
  }): Promise<QueryAllCommentResponse> {
    const data = QueryAllCommentRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "CommentAll", data);
    return promise.then(data => QueryAllCommentResponse.decode(new BinaryReader(data)));
  }
  issueCommentAll(request: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponse> {
    const data = QueryAllIssueCommentRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "IssueCommentAll", data);
    return promise.then(data => QueryAllIssueCommentResponse.decode(new BinaryReader(data)));
  }
  pullRequestCommentAll(request: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponse> {
    const data = QueryAllPullRequestCommentRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "PullRequestCommentAll", data);
    return promise.then(data => QueryAllPullRequestCommentResponse.decode(new BinaryReader(data)));
  }
  issueAll(request: QueryAllIssueRequest = {
    pagination: undefined
  }): Promise<QueryAllIssueResponse> {
    const data = QueryAllIssueRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "IssueAll", data);
    return promise.then(data => QueryAllIssueResponse.decode(new BinaryReader(data)));
  }
  repositoryReleaseLatest(request: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponse> {
    const data = QueryGetLatestRepositoryReleaseRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryReleaseLatest", data);
    return promise.then(data => QueryGetLatestRepositoryReleaseResponse.decode(new BinaryReader(data)));
  }
  repositoryRelease(request: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponse> {
    const data = QueryGetRepositoryReleaseRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryRelease", data);
    return promise.then(data => QueryGetRepositoryReleaseResponse.decode(new BinaryReader(data)));
  }
  repositoryReleaseAll(request: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponse> {
    const data = QueryAllRepositoryReleaseRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryReleaseAll", data);
    return promise.then(data => QueryAllRepositoryReleaseResponse.decode(new BinaryReader(data)));
  }
  repositoryIssue(request: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponse> {
    const data = QueryGetRepositoryIssueRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryIssue", data);
    return promise.then(data => QueryGetRepositoryIssueResponse.decode(new BinaryReader(data)));
  }
  repositoryIssueAll(request: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponse> {
    const data = QueryAllRepositoryIssueRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryIssueAll", data);
    return promise.then(data => QueryAllRepositoryIssueResponse.decode(new BinaryReader(data)));
  }
  repositoryPullRequest(request: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponse> {
    const data = QueryGetRepositoryPullRequestRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryPullRequest", data);
    return promise.then(data => QueryGetRepositoryPullRequestResponse.decode(new BinaryReader(data)));
  }
  repositoryPullRequestAll(request: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponse> {
    const data = QueryAllRepositoryPullRequestRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryPullRequestAll", data);
    return promise.then(data => QueryAllRepositoryPullRequestResponse.decode(new BinaryReader(data)));
  }
  repository(request: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponse> {
    const data = QueryGetRepositoryRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Repository", data);
    return promise.then(data => QueryGetRepositoryResponse.decode(new BinaryReader(data)));
  }
  repositoryAll(request: QueryAllRepositoryRequest = {
    pagination: undefined
  }): Promise<QueryAllRepositoryResponse> {
    const data = QueryAllRepositoryRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "RepositoryAll", data);
    return promise.then(data => QueryAllRepositoryResponse.decode(new BinaryReader(data)));
  }
  forkAll(request: QueryGetAllForkRequest): Promise<QueryGetAllForkResponse> {
    const data = QueryGetAllForkRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "ForkAll", data);
    return promise.then(data => QueryGetAllForkResponse.decode(new BinaryReader(data)));
  }
  user(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
    const data = QueryGetUserRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "User", data);
    return promise.then(data => QueryGetUserResponse.decode(new BinaryReader(data)));
  }
  userDaoAll(request: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponse> {
    const data = QueryAllUserDaoRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "UserDaoAll", data);
    return promise.then(data => QueryAllUserDaoResponse.decode(new BinaryReader(data)));
  }
  userAll(request: QueryAllUserRequest = {
    pagination: undefined
  }): Promise<QueryAllUserResponse> {
    const data = QueryAllUserRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "UserAll", data);
    return promise.then(data => QueryAllUserResponse.decode(new BinaryReader(data)));
  }
  anyRepositoryAll(request: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponse> {
    const data = QueryAllAnyRepositoryRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "AnyRepositoryAll", data);
    return promise.then(data => QueryAllAnyRepositoryResponse.decode(new BinaryReader(data)));
  }
  anyRepository(request: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponse> {
    const data = QueryGetAnyRepositoryRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "AnyRepository", data);
    return promise.then(data => QueryGetAnyRepositoryResponse.decode(new BinaryReader(data)));
  }
  whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
    const data = QueryGetWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "Whois", data);
    return promise.then(data => QueryGetWhoisResponse.decode(new BinaryReader(data)));
  }
  whoisAll(request: QueryAllWhoisRequest = {
    pagination: undefined
  }): Promise<QueryAllWhoisResponse> {
    const data = QueryAllWhoisRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "WhoisAll", data);
    return promise.then(data => QueryAllWhoisResponse.decode(new BinaryReader(data)));
  }
  pullRequestMergePermission(request: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponse> {
    const data = QueryGetPullRequestMergePermissionRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "PullRequestMergePermission", data);
    return promise.then(data => QueryGetPullRequestMergePermissionResponse.decode(new BinaryReader(data)));
  }
  checkGitServerAuthorization(request: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponse> {
    const data = QueryCheckGitServerAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "CheckGitServerAuthorization", data);
    return promise.then(data => QueryCheckGitServerAuthorizationResponse.decode(new BinaryReader(data)));
  }
  checkStorageProviderAuthorization(request: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponse> {
    const data = QueryCheckStorageProviderAuthorizationRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Query", "CheckStorageProviderAuthorization", data);
    return promise.then(data => QueryCheckStorageProviderAuthorizationResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    vestedAmount(request: QueryVestedAmountRequest): Promise<QueryVestedAmountResponse> {
      return queryService.vestedAmount(request);
    },
    task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse> {
      return queryService.task(request);
    },
    taskAll(request?: QueryAllTaskRequest): Promise<QueryAllTaskResponse> {
      return queryService.taskAll(request);
    },
    branchAll(request?: QueryAllBranchRequest): Promise<QueryAllBranchResponse> {
      return queryService.branchAll(request);
    },
    repositoryBranch(request: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponse> {
      return queryService.repositoryBranch(request);
    },
    repositoryBranchSha(request: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponse> {
      return queryService.repositoryBranchSha(request);
    },
    repositoryBranchAll(request: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponse> {
      return queryService.repositoryBranchAll(request);
    },
    tagAll(request?: QueryAllTagRequest): Promise<QueryAllTagResponse> {
      return queryService.tagAll(request);
    },
    repositoryTag(request: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponse> {
      return queryService.repositoryTag(request);
    },
    repositoryTagSha(request: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponse> {
      return queryService.repositoryTagSha(request);
    },
    repositoryTagAll(request: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponse> {
      return queryService.repositoryTagAll(request);
    },
    daoMember(request: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponse> {
      return queryService.daoMember(request);
    },
    daoMemberAll(request: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponse> {
      return queryService.daoMemberAll(request);
    },
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse> {
      return queryService.memberAll(request);
    },
    bounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse> {
      return queryService.bounty(request);
    },
    bountyAll(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse> {
      return queryService.bountyAll(request);
    },
    release(request: QueryGetReleaseRequest): Promise<QueryGetReleaseResponse> {
      return queryService.release(request);
    },
    releaseAll(request?: QueryAllReleaseRequest): Promise<QueryAllReleaseResponse> {
      return queryService.releaseAll(request);
    },
    pullRequestAll(request?: QueryAllPullRequestRequest): Promise<QueryAllPullRequestResponse> {
      return queryService.pullRequestAll(request);
    },
    dao(request: QueryGetDaoRequest): Promise<QueryGetDaoResponse> {
      return queryService.dao(request);
    },
    daoAll(request?: QueryAllDaoRequest): Promise<QueryAllDaoResponse> {
      return queryService.daoAll(request);
    },
    issueComment(request: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponse> {
      return queryService.issueComment(request);
    },
    pullRequestComment(request: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponse> {
      return queryService.pullRequestComment(request);
    },
    commentAll(request?: QueryAllCommentRequest): Promise<QueryAllCommentResponse> {
      return queryService.commentAll(request);
    },
    issueCommentAll(request: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponse> {
      return queryService.issueCommentAll(request);
    },
    pullRequestCommentAll(request: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponse> {
      return queryService.pullRequestCommentAll(request);
    },
    issueAll(request?: QueryAllIssueRequest): Promise<QueryAllIssueResponse> {
      return queryService.issueAll(request);
    },
    repositoryReleaseLatest(request: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponse> {
      return queryService.repositoryReleaseLatest(request);
    },
    repositoryRelease(request: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponse> {
      return queryService.repositoryRelease(request);
    },
    repositoryReleaseAll(request: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponse> {
      return queryService.repositoryReleaseAll(request);
    },
    repositoryIssue(request: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponse> {
      return queryService.repositoryIssue(request);
    },
    repositoryIssueAll(request: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponse> {
      return queryService.repositoryIssueAll(request);
    },
    repositoryPullRequest(request: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponse> {
      return queryService.repositoryPullRequest(request);
    },
    repositoryPullRequestAll(request: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponse> {
      return queryService.repositoryPullRequestAll(request);
    },
    repository(request: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponse> {
      return queryService.repository(request);
    },
    repositoryAll(request?: QueryAllRepositoryRequest): Promise<QueryAllRepositoryResponse> {
      return queryService.repositoryAll(request);
    },
    forkAll(request: QueryGetAllForkRequest): Promise<QueryGetAllForkResponse> {
      return queryService.forkAll(request);
    },
    user(request: QueryGetUserRequest): Promise<QueryGetUserResponse> {
      return queryService.user(request);
    },
    userDaoAll(request: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponse> {
      return queryService.userDaoAll(request);
    },
    userAll(request?: QueryAllUserRequest): Promise<QueryAllUserResponse> {
      return queryService.userAll(request);
    },
    anyRepositoryAll(request: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponse> {
      return queryService.anyRepositoryAll(request);
    },
    anyRepository(request: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponse> {
      return queryService.anyRepository(request);
    },
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse> {
      return queryService.whois(request);
    },
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse> {
      return queryService.whoisAll(request);
    },
    pullRequestMergePermission(request: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponse> {
      return queryService.pullRequestMergePermission(request);
    },
    checkGitServerAuthorization(request: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponse> {
      return queryService.checkGitServerAuthorization(request);
    },
    checkStorageProviderAuthorization(request: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponse> {
      return queryService.checkStorageProviderAuthorization(request);
    }
  };
};