import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryVestedAmountRequest, QueryVestedAmountResponseSDKType, QueryGetTaskRequest, QueryGetTaskResponseSDKType, QueryAllTaskRequest, QueryAllTaskResponseSDKType, QueryAllBranchRequest, QueryAllBranchResponseSDKType, QueryGetRepositoryBranchRequest, QueryGetRepositoryBranchResponseSDKType, QueryGetRepositoryBranchShaRequest, QueryGetRepositoryBranchShaResponseSDKType, QueryAllRepositoryBranchRequest, QueryAllRepositoryBranchResponseSDKType, QueryAllTagRequest, QueryAllTagResponseSDKType, QueryGetRepositoryTagRequest, QueryGetRepositoryTagResponseSDKType, QueryGetRepositoryTagShaRequest, QueryGetRepositoryTagShaResponseSDKType, QueryAllRepositoryTagRequest, QueryAllRepositoryTagResponseSDKType, QueryGetDaoMemberRequest, QueryGetDaoMemberResponseSDKType, QueryAllDaoMemberRequest, QueryAllDaoMemberResponseSDKType, QueryAllMemberRequest, QueryAllMemberResponseSDKType, QueryGetBountyRequest, QueryGetBountyResponseSDKType, QueryAllBountyRequest, QueryAllBountyResponseSDKType, QueryGetReleaseRequest, QueryGetReleaseResponseSDKType, QueryAllReleaseRequest, QueryAllReleaseResponseSDKType, QueryAllPullRequestRequest, QueryAllPullRequestResponseSDKType, QueryGetDaoRequest, QueryGetDaoResponseSDKType, QueryAllDaoRequest, QueryAllDaoResponseSDKType, QueryGetIssueCommentRequest, QueryGetIssueCommentResponseSDKType, QueryGetPullRequestCommentRequest, QueryGetPullRequestCommentResponseSDKType, QueryAllCommentRequest, QueryAllCommentResponseSDKType, QueryAllIssueCommentRequest, QueryAllIssueCommentResponseSDKType, QueryAllPullRequestCommentRequest, QueryAllPullRequestCommentResponseSDKType, QueryAllIssueRequest, QueryAllIssueResponseSDKType, QueryGetLatestRepositoryReleaseRequest, QueryGetLatestRepositoryReleaseResponseSDKType, QueryGetRepositoryReleaseRequest, QueryGetRepositoryReleaseResponseSDKType, QueryAllRepositoryReleaseRequest, QueryAllRepositoryReleaseResponseSDKType, QueryGetRepositoryIssueRequest, QueryGetRepositoryIssueResponseSDKType, QueryAllRepositoryIssueRequest, QueryAllRepositoryIssueResponseSDKType, QueryGetRepositoryPullRequestRequest, QueryGetRepositoryPullRequestResponseSDKType, QueryAllRepositoryPullRequestRequest, QueryAllRepositoryPullRequestResponseSDKType, QueryGetRepositoryRequest, QueryGetRepositoryResponseSDKType, QueryAllRepositoryRequest, QueryAllRepositoryResponseSDKType, QueryGetAllForkRequest, QueryGetAllForkResponseSDKType, QueryGetUserRequest, QueryGetUserResponseSDKType, QueryAllUserDaoRequest, QueryAllUserDaoResponseSDKType, QueryAllUserRequest, QueryAllUserResponseSDKType, QueryAllAnyRepositoryRequest, QueryAllAnyRepositoryResponseSDKType, QueryGetAnyRepositoryRequest, QueryGetAnyRepositoryResponseSDKType, QueryGetWhoisRequest, QueryGetWhoisResponseSDKType, QueryAllWhoisRequest, QueryAllWhoisResponseSDKType, QueryGetPullRequestMergePermissionRequest, QueryGetPullRequestMergePermissionResponseSDKType, QueryCheckGitServerAuthorizationRequest, QueryCheckGitServerAuthorizationResponseSDKType, QueryCheckStorageProviderAuthorizationRequest, QueryCheckStorageProviderAuthorizationResponseSDKType } from "./query";
export declare class LCDQueryClient {
    req: LCDClient;
    constructor({ requestClient }: {
        requestClient: LCDClient;
    });
    params(_params?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
    vestedAmount(params: QueryVestedAmountRequest): Promise<QueryVestedAmountResponseSDKType>;
    task(params: QueryGetTaskRequest): Promise<QueryGetTaskResponseSDKType>;
    taskAll(params?: QueryAllTaskRequest): Promise<QueryAllTaskResponseSDKType>;
    branchAll(params?: QueryAllBranchRequest): Promise<QueryAllBranchResponseSDKType>;
    repositoryBranch(params: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponseSDKType>;
    repositoryBranchSha(params: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponseSDKType>;
    repositoryBranchAll(params: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponseSDKType>;
    tagAll(params?: QueryAllTagRequest): Promise<QueryAllTagResponseSDKType>;
    repositoryTag(params: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponseSDKType>;
    repositoryTagSha(params: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponseSDKType>;
    repositoryTagAll(params: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponseSDKType>;
    daoMember(params: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponseSDKType>;
    daoMemberAll(params: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponseSDKType>;
    memberAll(params?: QueryAllMemberRequest): Promise<QueryAllMemberResponseSDKType>;
    bounty(params: QueryGetBountyRequest): Promise<QueryGetBountyResponseSDKType>;
    bountyAll(params?: QueryAllBountyRequest): Promise<QueryAllBountyResponseSDKType>;
    release(params: QueryGetReleaseRequest): Promise<QueryGetReleaseResponseSDKType>;
    releaseAll(params?: QueryAllReleaseRequest): Promise<QueryAllReleaseResponseSDKType>;
    pullRequestAll(params?: QueryAllPullRequestRequest): Promise<QueryAllPullRequestResponseSDKType>;
    dao(params: QueryGetDaoRequest): Promise<QueryGetDaoResponseSDKType>;
    daoAll(params?: QueryAllDaoRequest): Promise<QueryAllDaoResponseSDKType>;
    issueComment(params: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponseSDKType>;
    pullRequestComment(params: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponseSDKType>;
    commentAll(params?: QueryAllCommentRequest): Promise<QueryAllCommentResponseSDKType>;
    issueCommentAll(params: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponseSDKType>;
    pullRequestCommentAll(params: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponseSDKType>;
    issueAll(params?: QueryAllIssueRequest): Promise<QueryAllIssueResponseSDKType>;
    repositoryReleaseLatest(params: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponseSDKType>;
    repositoryRelease(params: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponseSDKType>;
    repositoryReleaseAll(params: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponseSDKType>;
    repositoryIssue(params: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponseSDKType>;
    repositoryIssueAll(params: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponseSDKType>;
    repositoryPullRequest(params: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponseSDKType>;
    repositoryPullRequestAll(params: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponseSDKType>;
    repository(params: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponseSDKType>;
    repositoryAll(params?: QueryAllRepositoryRequest): Promise<QueryAllRepositoryResponseSDKType>;
    forkAll(params: QueryGetAllForkRequest): Promise<QueryGetAllForkResponseSDKType>;
    user(params: QueryGetUserRequest): Promise<QueryGetUserResponseSDKType>;
    userDaoAll(params: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponseSDKType>;
    userAll(params?: QueryAllUserRequest): Promise<QueryAllUserResponseSDKType>;
    anyRepositoryAll(params: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponseSDKType>;
    anyRepository(params: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponseSDKType>;
    whois(params: QueryGetWhoisRequest): Promise<QueryGetWhoisResponseSDKType>;
    whoisAll(params?: QueryAllWhoisRequest): Promise<QueryAllWhoisResponseSDKType>;
    pullRequestMergePermission(params: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponseSDKType>;
    checkGitServerAuthorization(params: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponseSDKType>;
    checkStorageProviderAuthorization(params: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponseSDKType>;
}