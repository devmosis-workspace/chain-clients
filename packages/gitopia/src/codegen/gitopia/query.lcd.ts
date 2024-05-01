import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryVestedAmountRequest, QueryVestedAmountResponseSDKType, QueryGetTaskRequest, QueryGetTaskResponseSDKType, QueryAllTaskRequest, QueryAllTaskResponseSDKType, QueryAllBranchRequest, QueryAllBranchResponseSDKType, QueryGetRepositoryBranchRequest, QueryGetRepositoryBranchResponseSDKType, QueryGetRepositoryBranchShaRequest, QueryGetRepositoryBranchShaResponseSDKType, QueryAllRepositoryBranchRequest, QueryAllRepositoryBranchResponseSDKType, QueryAllTagRequest, QueryAllTagResponseSDKType, QueryGetRepositoryTagRequest, QueryGetRepositoryTagResponseSDKType, QueryGetRepositoryTagShaRequest, QueryGetRepositoryTagShaResponseSDKType, QueryAllRepositoryTagRequest, QueryAllRepositoryTagResponseSDKType, QueryGetDaoMemberRequest, QueryGetDaoMemberResponseSDKType, QueryAllDaoMemberRequest, QueryAllDaoMemberResponseSDKType, QueryAllMemberRequest, QueryAllMemberResponseSDKType, QueryGetBountyRequest, QueryGetBountyResponseSDKType, QueryAllBountyRequest, QueryAllBountyResponseSDKType, QueryGetReleaseRequest, QueryGetReleaseResponseSDKType, QueryAllReleaseRequest, QueryAllReleaseResponseSDKType, QueryAllPullRequestRequest, QueryAllPullRequestResponseSDKType, QueryGetDaoRequest, QueryGetDaoResponseSDKType, QueryAllDaoRequest, QueryAllDaoResponseSDKType, QueryGetIssueCommentRequest, QueryGetIssueCommentResponseSDKType, QueryGetPullRequestCommentRequest, QueryGetPullRequestCommentResponseSDKType, QueryAllCommentRequest, QueryAllCommentResponseSDKType, QueryAllIssueCommentRequest, QueryAllIssueCommentResponseSDKType, QueryAllPullRequestCommentRequest, QueryAllPullRequestCommentResponseSDKType, QueryAllIssueRequest, QueryAllIssueResponseSDKType, QueryGetLatestRepositoryReleaseRequest, QueryGetLatestRepositoryReleaseResponseSDKType, QueryGetRepositoryReleaseRequest, QueryGetRepositoryReleaseResponseSDKType, QueryAllRepositoryReleaseRequest, QueryAllRepositoryReleaseResponseSDKType, QueryGetRepositoryIssueRequest, QueryGetRepositoryIssueResponseSDKType, QueryAllRepositoryIssueRequest, QueryAllRepositoryIssueResponseSDKType, QueryGetRepositoryPullRequestRequest, QueryGetRepositoryPullRequestResponseSDKType, QueryAllRepositoryPullRequestRequest, QueryAllRepositoryPullRequestResponseSDKType, QueryGetRepositoryRequest, QueryGetRepositoryResponseSDKType, QueryAllRepositoryRequest, QueryAllRepositoryResponseSDKType, QueryGetAllForkRequest, QueryGetAllForkResponseSDKType, QueryGetUserRequest, QueryGetUserResponseSDKType, QueryAllUserDaoRequest, QueryAllUserDaoResponseSDKType, QueryAllUserRequest, QueryAllUserResponseSDKType, QueryAllAnyRepositoryRequest, QueryAllAnyRepositoryResponseSDKType, QueryGetAnyRepositoryRequest, QueryGetAnyRepositoryResponseSDKType, QueryGetWhoisRequest, QueryGetWhoisResponseSDKType, QueryAllWhoisRequest, QueryAllWhoisResponseSDKType, QueryGetPullRequestMergePermissionRequest, QueryGetPullRequestMergePermissionResponseSDKType, QueryCheckGitServerAuthorizationRequest, QueryCheckGitServerAuthorizationResponseSDKType, QueryCheckStorageProviderAuthorizationRequest, QueryCheckStorageProviderAuthorizationResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params returns the total set of gitopia parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* query vested amount for developer address */
  async vestedAmount(params: QueryVestedAmountRequest): Promise<QueryVestedAmountResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/vestedAmount/${params.address}`;
    return await this.req.get<QueryVestedAmountResponseSDKType>(endpoint);
  }
  /* Queries a Task by id. */
  async task(params: QueryGetTaskRequest): Promise<QueryGetTaskResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/task/${params.id}`;
    return await this.req.get<QueryGetTaskResponseSDKType>(endpoint);
  }
  /* Queries a list of Task items. */
  async taskAll(params: QueryAllTaskRequest = {
    pagination: undefined
  }): Promise<QueryAllTaskResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/task`;
    return await this.req.get<QueryAllTaskResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Branch items. */
  async branchAll(params: QueryAllBranchRequest = {
    pagination: undefined
  }): Promise<QueryAllBranchResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/branch`;
    return await this.req.get<QueryAllBranchResponseSDKType>(endpoint, options);
  }
  /* Queries Repository Branch by name. */
  async repositoryBranch(params: QueryGetRepositoryBranchRequest): Promise<QueryGetRepositoryBranchResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/branch/${params.branchName}`;
    return await this.req.get<QueryGetRepositoryBranchResponseSDKType>(endpoint);
  }
  /* RepositoryBranchSha */
  async repositoryBranchSha(params: QueryGetRepositoryBranchShaRequest): Promise<QueryGetRepositoryBranchShaResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/branch/${params.branchName}/sha`;
    return await this.req.get<QueryGetRepositoryBranchShaResponseSDKType>(endpoint);
  }
  /* Queries a list of Repository Branch. */
  async repositoryBranchAll(params: QueryAllRepositoryBranchRequest): Promise<QueryAllRepositoryBranchResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/branch`;
    return await this.req.get<QueryAllRepositoryBranchResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Tag items. */
  async tagAll(params: QueryAllTagRequest = {
    pagination: undefined
  }): Promise<QueryAllTagResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/tag`;
    return await this.req.get<QueryAllTagResponseSDKType>(endpoint, options);
  }
  /* Queries a Repository Tag by id. */
  async repositoryTag(params: QueryGetRepositoryTagRequest): Promise<QueryGetRepositoryTagResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/tag/${params.tagName}`;
    return await this.req.get<QueryGetRepositoryTagResponseSDKType>(endpoint);
  }
  /* RepositoryTagSha */
  async repositoryTagSha(params: QueryGetRepositoryTagShaRequest): Promise<QueryGetRepositoryTagShaResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/tag/${params.tagName}/sha`;
    return await this.req.get<QueryGetRepositoryTagShaResponseSDKType>(endpoint);
  }
  /* Queries a list of Repository Tag. */
  async repositoryTagAll(params: QueryAllRepositoryTagRequest): Promise<QueryAllRepositoryTagResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/tag`;
    return await this.req.get<QueryAllRepositoryTagResponseSDKType>(endpoint, options);
  }
  /* Queries a Member by id. */
  async daoMember(params: QueryGetDaoMemberRequest): Promise<QueryGetDaoMemberResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/dao/${params.daoId}/member/${params.userId}`;
    return await this.req.get<QueryGetDaoMemberResponseSDKType>(endpoint);
  }
  /* Queries a list of Dao Member. */
  async daoMemberAll(params: QueryAllDaoMemberRequest): Promise<QueryAllDaoMemberResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/dao/${params.daoId}/member`;
    return await this.req.get<QueryAllDaoMemberResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Member items. */
  async memberAll(params: QueryAllMemberRequest = {
    pagination: undefined
  }): Promise<QueryAllMemberResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/member`;
    return await this.req.get<QueryAllMemberResponseSDKType>(endpoint, options);
  }
  /* Queries a Bounty by id. */
  async bounty(params: QueryGetBountyRequest): Promise<QueryGetBountyResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/bounty/${params.id}`;
    return await this.req.get<QueryGetBountyResponseSDKType>(endpoint);
  }
  /* Queries a list of Bounty items. */
  async bountyAll(params: QueryAllBountyRequest = {
    pagination: undefined
  }): Promise<QueryAllBountyResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/bounty`;
    return await this.req.get<QueryAllBountyResponseSDKType>(endpoint, options);
  }
  /* Queries a release by id. */
  async release(params: QueryGetReleaseRequest): Promise<QueryGetReleaseResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/release/${params.id}`;
    return await this.req.get<QueryGetReleaseResponseSDKType>(endpoint);
  }
  /* Queries a list of release items. */
  async releaseAll(params: QueryAllReleaseRequest = {
    pagination: undefined
  }): Promise<QueryAllReleaseResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/release`;
    return await this.req.get<QueryAllReleaseResponseSDKType>(endpoint, options);
  }
  /* Queries a list of pullRequest items. */
  async pullRequestAll(params: QueryAllPullRequestRequest = {
    pagination: undefined
  }): Promise<QueryAllPullRequestResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/pullRequest`;
    return await this.req.get<QueryAllPullRequestResponseSDKType>(endpoint, options);
  }
  /* Queries a Dao by id. */
  async dao(params: QueryGetDaoRequest): Promise<QueryGetDaoResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/dao/${params.id}`;
    return await this.req.get<QueryGetDaoResponseSDKType>(endpoint);
  }
  /* Queries a list of Dao items. */
  async daoAll(params: QueryAllDaoRequest = {
    pagination: undefined
  }): Promise<QueryAllDaoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/dao`;
    return await this.req.get<QueryAllDaoResponseSDKType>(endpoint, options);
  }
  /* Queries a issue comment. */
  async issueComment(params: QueryGetIssueCommentRequest): Promise<QueryGetIssueCommentResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/repository/${params.repositoryId}/issue/${params.issueIid}/comment/${params.commentIid}`;
    return await this.req.get<QueryGetIssueCommentResponseSDKType>(endpoint);
  }
  /* Queries a pullrequest comment. */
  async pullRequestComment(params: QueryGetPullRequestCommentRequest): Promise<QueryGetPullRequestCommentResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/repository/${params.repositoryId}/pullrequest/${params.pullRequestIid}/comment/${params.commentIid}`;
    return await this.req.get<QueryGetPullRequestCommentResponseSDKType>(endpoint);
  }
  /* Queries a list of comment. */
  async commentAll(params: QueryAllCommentRequest = {
    pagination: undefined
  }): Promise<QueryAllCommentResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/comment`;
    return await this.req.get<QueryAllCommentResponseSDKType>(endpoint, options);
  }
  /* Queries a list of issue comment. */
  async issueCommentAll(params: QueryAllIssueCommentRequest): Promise<QueryAllIssueCommentResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/repository/${params.repositoryId}/issue/${params.issueIid}/comment`;
    return await this.req.get<QueryAllIssueCommentResponseSDKType>(endpoint, options);
  }
  /* Queries a list of pullrequest comment. */
  async pullRequestCommentAll(params: QueryAllPullRequestCommentRequest): Promise<QueryAllPullRequestCommentResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/repository/${params.repositoryId}/pullrequest/${params.pullRequestIid}/comment`;
    return await this.req.get<QueryAllPullRequestCommentResponseSDKType>(endpoint, options);
  }
  /* Queries a list of issue items. */
  async issueAll(params: QueryAllIssueRequest = {
    pagination: undefined
  }): Promise<QueryAllIssueResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/issue`;
    return await this.req.get<QueryAllIssueResponseSDKType>(endpoint, options);
  }
  /* RepositoryReleaseLatest */
  async repositoryReleaseLatest(params: QueryGetLatestRepositoryReleaseRequest): Promise<QueryGetLatestRepositoryReleaseResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/releases/latest`;
    return await this.req.get<QueryGetLatestRepositoryReleaseResponseSDKType>(endpoint);
  }
  /* RepositoryRelease */
  async repositoryRelease(params: QueryGetRepositoryReleaseRequest): Promise<QueryGetRepositoryReleaseResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/releases/tag/${params.tagName}`;
    return await this.req.get<QueryGetRepositoryReleaseResponseSDKType>(endpoint);
  }
  /* RepositoryReleaseAll */
  async repositoryReleaseAll(params: QueryAllRepositoryReleaseRequest): Promise<QueryAllRepositoryReleaseResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/releases`;
    return await this.req.get<QueryAllRepositoryReleaseResponseSDKType>(endpoint, options);
  }
  /* Queries a repository issue by iid. */
  async repositoryIssue(params: QueryGetRepositoryIssueRequest): Promise<QueryGetRepositoryIssueResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/${params.repositoryName}/issue/${params.issueIid}`;
    return await this.req.get<QueryGetRepositoryIssueResponseSDKType>(endpoint);
  }
  /* Queries a list of repository issue. */
  async repositoryIssueAll(params: QueryAllRepositoryIssueRequest): Promise<QueryAllRepositoryIssueResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.option !== "undefined") {
      options.params.option = params.option;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/${params.repositoryName}/issue`;
    return await this.req.get<QueryAllRepositoryIssueResponseSDKType>(endpoint, options);
  }
  /* Queries a repository pullRequest. */
  async repositoryPullRequest(params: QueryGetRepositoryPullRequestRequest): Promise<QueryGetRepositoryPullRequestResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/${params.repositoryName}/pull/${params.pullIid}`;
    return await this.req.get<QueryGetRepositoryPullRequestResponseSDKType>(endpoint);
  }
  /* Queries a list of repository pullRequest. */
  async repositoryPullRequestAll(params: QueryAllRepositoryPullRequestRequest): Promise<QueryAllRepositoryPullRequestResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.option !== "undefined") {
      options.params.option = params.option;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/${params.repositoryName}/pull`;
    return await this.req.get<QueryAllRepositoryPullRequestResponseSDKType>(endpoint, options);
  }
  /* Queries a repository by id. */
  async repository(params: QueryGetRepositoryRequest): Promise<QueryGetRepositoryResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/repository/${params.id}`;
    return await this.req.get<QueryGetRepositoryResponseSDKType>(endpoint);
  }
  /* Queries a list of repository items. */
  async repositoryAll(params: QueryAllRepositoryRequest = {
    pagination: undefined
  }): Promise<QueryAllRepositoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/repository`;
    return await this.req.get<QueryAllRepositoryResponseSDKType>(endpoint, options);
  }
  /* Queries a repository forks by id. */
  async forkAll(params: QueryGetAllForkRequest): Promise<QueryGetAllForkResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/${params.id}/repository/${params.repositoryName}/forks`;
    return await this.req.get<QueryGetAllForkResponseSDKType>(endpoint, options);
  }
  /* Queries a user by id. */
  async user(params: QueryGetUserRequest): Promise<QueryGetUserResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/user/${params.id}`;
    return await this.req.get<QueryGetUserResponseSDKType>(endpoint);
  }
  /* Queries a list of User Dao. */
  async userDaoAll(params: QueryAllUserDaoRequest): Promise<QueryAllUserDaoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/user/${params.userId}/dao`;
    return await this.req.get<QueryAllUserDaoResponseSDKType>(endpoint, options);
  }
  /* Queries a list of user items. */
  async userAll(params: QueryAllUserRequest = {
    pagination: undefined
  }): Promise<QueryAllUserResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/user`;
    return await this.req.get<QueryAllUserResponseSDKType>(endpoint, options);
  }
  /* Queries a list of user repositories. */
  async anyRepositoryAll(params: QueryAllAnyRepositoryRequest): Promise<QueryAllAnyRepositoryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/user/${params.id}/repository`;
    return await this.req.get<QueryAllAnyRepositoryResponseSDKType>(endpoint, options);
  }
  /* Queries a repository by user id and repository name */
  async anyRepository(params: QueryGetAnyRepositoryRequest): Promise<QueryGetAnyRepositoryResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/user/${params.id}/repository/${params.repositoryName}`;
    return await this.req.get<QueryGetAnyRepositoryResponseSDKType>(endpoint);
  }
  /* Queries a whois by id. */
  async whois(params: QueryGetWhoisRequest): Promise<QueryGetWhoisResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/whois/${params.name}`;
    return await this.req.get<QueryGetWhoisResponseSDKType>(endpoint);
  }
  /* Queries a list of whois items. */
  async whoisAll(params: QueryAllWhoisRequest = {
    pagination: undefined
  }): Promise<QueryAllWhoisResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `gitopia/gitopia/gitopia/whois`;
    return await this.req.get<QueryAllWhoisResponseSDKType>(endpoint, options);
  }
  /* PullRequestMergePermission */
  async pullRequestMergePermission(params: QueryGetPullRequestMergePermissionRequest): Promise<QueryGetPullRequestMergePermissionResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/permissions/${params.userId}/repository/${params.repositoryId}/pull/${params.pullIid}/merge`;
    return await this.req.get<QueryGetPullRequestMergePermissionResponseSDKType>(endpoint);
  }
  /* CheckGitServerAuthorization */
  async checkGitServerAuthorization(params: QueryCheckGitServerAuthorizationRequest): Promise<QueryCheckGitServerAuthorizationResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/authorizations/git-server/${params.userAddress}/${params.providerAddress}`;
    return await this.req.get<QueryCheckGitServerAuthorizationResponseSDKType>(endpoint);
  }
  /* CheckStorageProviderAuthorization */
  async checkStorageProviderAuthorization(params: QueryCheckStorageProviderAuthorizationRequest): Promise<QueryCheckStorageProviderAuthorizationResponseSDKType> {
    const endpoint = `gitopia/gitopia/gitopia/authorizations/storage-provider/${params.userAddress}/${params.providerAddress}`;
    return await this.req.get<QueryCheckStorageProviderAuthorizationResponseSDKType>(endpoint);
  }
}