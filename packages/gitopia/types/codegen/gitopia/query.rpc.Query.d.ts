import { Rpc } from "../helpers";
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
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    vestedAmount(request: QueryVestedAmountRequest): Promise<QueryVestedAmountResponse>;
    task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
    taskAll(request?: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
    branchAll(request?: QueryAllBranchRequest): Promise<QueryAllBranchResponse>;
    repositoryBranch(request: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponse>;
    repositoryBranchSha(request: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponse>;
    repositoryBranchAll(request: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponse>;
    tagAll(request?: QueryAllTagRequest): Promise<QueryAllTagResponse>;
    repositoryTag(request: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponse>;
    repositoryTagSha(request: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponse>;
    repositoryTagAll(request: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponse>;
    daoMember(request: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponse>;
    daoMemberAll(request: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    bounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse>;
    bountyAll(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse>;
    release(request: QueryGetReleaseRequest): Promise<QueryGetReleaseResponse>;
    releaseAll(request?: QueryAllReleaseRequest): Promise<QueryAllReleaseResponse>;
    pullRequestAll(request?: QueryAllPullRequestRequest): Promise<QueryAllPullRequestResponse>;
    dao(request: QueryGetDaoRequest): Promise<QueryGetDaoResponse>;
    daoAll(request?: QueryAllDaoRequest): Promise<QueryAllDaoResponse>;
    issueComment(request: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponse>;
    pullRequestComment(request: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponse>;
    commentAll(request?: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
    issueCommentAll(request: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponse>;
    pullRequestCommentAll(request: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponse>;
    issueAll(request?: QueryAllIssueRequest): Promise<QueryAllIssueResponse>;
    repositoryReleaseLatest(request: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponse>;
    repositoryRelease(request: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponse>;
    repositoryReleaseAll(request: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponse>;
    repositoryIssue(request: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponse>;
    repositoryIssueAll(request: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponse>;
    repositoryPullRequest(request: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponse>;
    repositoryPullRequestAll(request: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponse>;
    repository(request: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponse>;
    repositoryAll(request?: QueryAllRepositoryRequest): Promise<QueryAllRepositoryResponse>;
    forkAll(request: QueryGetAllForkRequest): Promise<QueryGetAllForkResponse>;
    user(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    userDaoAll(request: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponse>;
    userAll(request?: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    anyRepositoryAll(request: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponse>;
    anyRepository(request: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponse>;
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
    pullRequestMergePermission(request: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponse>;
    checkGitServerAuthorization(request: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponse>;
    checkStorageProviderAuthorization(request: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
    vestedAmount(request: QueryVestedAmountRequest): Promise<QueryVestedAmountResponse>;
    task(request: QueryGetTaskRequest): Promise<QueryGetTaskResponse>;
    taskAll(request?: QueryAllTaskRequest): Promise<QueryAllTaskResponse>;
    branchAll(request?: QueryAllBranchRequest): Promise<QueryAllBranchResponse>;
    repositoryBranch(request: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponse>;
    repositoryBranchSha(request: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponse>;
    repositoryBranchAll(request: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponse>;
    tagAll(request?: QueryAllTagRequest): Promise<QueryAllTagResponse>;
    repositoryTag(request: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponse>;
    repositoryTagSha(request: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponse>;
    repositoryTagAll(request: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponse>;
    daoMember(request: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponse>;
    daoMemberAll(request: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponse>;
    memberAll(request?: QueryAllMemberRequest): Promise<QueryAllMemberResponse>;
    bounty(request: QueryGetBountyRequest): Promise<QueryGetBountyResponse>;
    bountyAll(request?: QueryAllBountyRequest): Promise<QueryAllBountyResponse>;
    release(request: QueryGetReleaseRequest): Promise<QueryGetReleaseResponse>;
    releaseAll(request?: QueryAllReleaseRequest): Promise<QueryAllReleaseResponse>;
    pullRequestAll(request?: QueryAllPullRequestRequest): Promise<QueryAllPullRequestResponse>;
    dao(request: QueryGetDaoRequest): Promise<QueryGetDaoResponse>;
    daoAll(request?: QueryAllDaoRequest): Promise<QueryAllDaoResponse>;
    issueComment(request: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponse>;
    pullRequestComment(request: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponse>;
    commentAll(request?: QueryAllCommentRequest): Promise<QueryAllCommentResponse>;
    issueCommentAll(request: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponse>;
    pullRequestCommentAll(request: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponse>;
    issueAll(request?: QueryAllIssueRequest): Promise<QueryAllIssueResponse>;
    repositoryReleaseLatest(request: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponse>;
    repositoryRelease(request: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponse>;
    repositoryReleaseAll(request: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponse>;
    repositoryIssue(request: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponse>;
    repositoryIssueAll(request: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponse>;
    repositoryPullRequest(request: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponse>;
    repositoryPullRequestAll(request: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponse>;
    repository(request: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponse>;
    repositoryAll(request?: QueryAllRepositoryRequest): Promise<QueryAllRepositoryResponse>;
    forkAll(request: QueryGetAllForkRequest): Promise<QueryGetAllForkResponse>;
    user(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    userDaoAll(request: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponse>;
    userAll(request?: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    anyRepositoryAll(request: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponse>;
    anyRepository(request: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponse>;
    whois(request: QueryGetWhoisRequest): Promise<QueryGetWhoisResponse>;
    whoisAll(request?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponse>;
    pullRequestMergePermission(request: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponse>;
    checkGitServerAuthorization(request: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponse>;
    checkStorageProviderAuthorization(request: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponse>;
};
