import * as _0 from "./attachment";
import * as _1 from "./bounty";
import * as _2 from "./branch";
import * as _3 from "./comment";
import * as _4 from "./dao";
import * as _5 from "./exercised_amount";
import * as _6 from "./genesis";
import * as _7 from "./issue";
import * as _8 from "./member";
import * as _9 from "./params";
import * as _10 from "./pullRequest";
import * as _11 from "./query";
import * as _12 from "./reaction";
import * as _13 from "./release";
import * as _14 from "./repository";
import * as _15 from "./tag";
import * as _16 from "./task";
import * as _17 from "./tx";
import * as _18 from "./user";
import * as _19 from "./whois";
import * as _20 from "../offchain/offchain";
import * as _21 from "../rewards/genesis";
import * as _22 from "../rewards/params";
import * as _23 from "../rewards/pool";
import * as _24 from "../rewards/query";
import * as _25 from "../rewards/rewards";
import * as _26 from "../rewards/task";
import * as _27 from "../rewards/tx";
import * as _147 from "./query.lcd";
import * as _148 from "../rewards/query.lcd";
import * as _149 from "./query.rpc.Query";
import * as _150 from "../rewards/query.rpc.Query";
import * as _151 from "./tx.rpc.msg";
import * as _152 from "../rewards/tx.rpc.msg";
export declare namespace gitopia {
    namespace gitopia {
        const gitopia: {
            MsgClientImpl: typeof _151.MsgClientImpl;
            QueryClientImpl: typeof _149.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                vestedAmount(request: _11.QueryVestedAmountRequest): Promise<_11.QueryVestedAmountResponse>;
                task(request: _11.QueryGetTaskRequest): Promise<_11.QueryGetTaskResponse>;
                taskAll(request?: _11.QueryAllTaskRequest): Promise<_11.QueryAllTaskResponse>;
                branchAll(request?: _11.QueryAllBranchRequest): Promise<_11.QueryAllBranchResponse>;
                repositoryBranch(request: _11.QueryGetRepositoryBranchRequest): Promise<_11.QueryGetRepositoryBranchResponse>;
                repositoryBranchSha(request: _11.QueryGetRepositoryBranchShaRequest): Promise<_11.QueryGetRepositoryBranchShaResponse>;
                repositoryBranchAll(request: _11.QueryAllRepositoryBranchRequest): Promise<_11.QueryAllRepositoryBranchResponse>;
                tagAll(request?: _11.QueryAllTagRequest): Promise<_11.QueryAllTagResponse>;
                repositoryTag(request: _11.QueryGetRepositoryTagRequest): Promise<_11.QueryGetRepositoryTagResponse>;
                repositoryTagSha(request: _11.QueryGetRepositoryTagShaRequest): Promise<_11.QueryGetRepositoryTagShaResponse>;
                repositoryTagAll(request: _11.QueryAllRepositoryTagRequest): Promise<_11.QueryAllRepositoryTagResponse>;
                daoMember(request: _11.QueryGetDaoMemberRequest): Promise<_11.QueryGetDaoMemberResponse>;
                daoMemberAll(request: _11.QueryAllDaoMemberRequest): Promise<_11.QueryAllDaoMemberResponse>;
                memberAll(request?: _11.QueryAllMemberRequest): Promise<_11.QueryAllMemberResponse>;
                bounty(request: _11.QueryGetBountyRequest): Promise<_11.QueryGetBountyResponse>;
                bountyAll(request?: _11.QueryAllBountyRequest): Promise<_11.QueryAllBountyResponse>;
                release(request: _11.QueryGetReleaseRequest): Promise<_11.QueryGetReleaseResponse>;
                releaseAll(request?: _11.QueryAllReleaseRequest): Promise<_11.QueryAllReleaseResponse>;
                pullRequestAll(request?: _11.QueryAllPullRequestRequest): Promise<_11.QueryAllPullRequestResponse>;
                dao(request: _11.QueryGetDaoRequest): Promise<_11.QueryGetDaoResponse>;
                daoAll(request?: _11.QueryAllDaoRequest): Promise<_11.QueryAllDaoResponse>;
                issueComment(request: _11.QueryGetIssueCommentRequest): Promise<_11.QueryGetIssueCommentResponse>;
                pullRequestComment(request: _11.QueryGetPullRequestCommentRequest): Promise<_11.QueryGetPullRequestCommentResponse>;
                commentAll(request?: _11.QueryAllCommentRequest): Promise<_11.QueryAllCommentResponse>;
                issueCommentAll(request: _11.QueryAllIssueCommentRequest): Promise<_11.QueryAllIssueCommentResponse>;
                pullRequestCommentAll(request: _11.QueryAllPullRequestCommentRequest): Promise<_11.QueryAllPullRequestCommentResponse>;
                issueAll(request?: _11.QueryAllIssueRequest): Promise<_11.QueryAllIssueResponse>;
                repositoryReleaseLatest(request: _11.QueryGetLatestRepositoryReleaseRequest): Promise<_11.QueryGetLatestRepositoryReleaseResponse>;
                repositoryRelease(request: _11.QueryGetRepositoryReleaseRequest): Promise<_11.QueryGetRepositoryReleaseResponse>;
                repositoryReleaseAll(request: _11.QueryAllRepositoryReleaseRequest): Promise<_11.QueryAllRepositoryReleaseResponse>;
                repositoryIssue(request: _11.QueryGetRepositoryIssueRequest): Promise<_11.QueryGetRepositoryIssueResponse>;
                repositoryIssueAll(request: _11.QueryAllRepositoryIssueRequest): Promise<_11.QueryAllRepositoryIssueResponse>;
                repositoryPullRequest(request: _11.QueryGetRepositoryPullRequestRequest): Promise<_11.QueryGetRepositoryPullRequestResponse>;
                repositoryPullRequestAll(request: _11.QueryAllRepositoryPullRequestRequest): Promise<_11.QueryAllRepositoryPullRequestResponse>;
                repository(request: _11.QueryGetRepositoryRequest): Promise<_11.QueryGetRepositoryResponse>;
                repositoryAll(request?: _11.QueryAllRepositoryRequest): Promise<_11.QueryAllRepositoryResponse>;
                forkAll(request: _11.QueryGetAllForkRequest): Promise<_11.QueryGetAllForkResponse>;
                user(request: _11.QueryGetUserRequest): Promise<_11.QueryGetUserResponse>;
                userDaoAll(request: _11.QueryAllUserDaoRequest): Promise<_11.QueryAllUserDaoResponse>;
                userAll(request?: _11.QueryAllUserRequest): Promise<_11.QueryAllUserResponse>;
                anyRepositoryAll(request: _11.QueryAllAnyRepositoryRequest): Promise<_11.QueryAllAnyRepositoryResponse>;
                anyRepository(request: _11.QueryGetAnyRepositoryRequest): Promise<_11.QueryGetAnyRepositoryResponse>;
                whois(request: _11.QueryGetWhoisRequest): Promise<_11.QueryGetWhoisResponse>;
                whoisAll(request?: _11.QueryAllWhoisRequest): Promise<_11.QueryAllWhoisResponse>;
                pullRequestMergePermission(request: _11.QueryGetPullRequestMergePermissionRequest): Promise<_11.QueryGetPullRequestMergePermissionResponse>;
                checkGitServerAuthorization(request: _11.QueryCheckGitServerAuthorizationRequest): Promise<_11.QueryCheckGitServerAuthorizationResponse>;
                checkStorageProviderAuthorization(request: _11.QueryCheckStorageProviderAuthorizationRequest): Promise<_11.QueryCheckStorageProviderAuthorizationResponse>;
            };
            LCDQueryClient: typeof _147.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    toggleForcePush(value: _17.MsgToggleForcePush): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeProviderPermission(value: _17.MsgRevokeProviderPermission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    authorizeProvider(value: _17.MsgAuthorizeProvider): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createTask(value: _17.MsgCreateTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateTask(value: _17.MsgUpdateTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteTask(value: _17.MsgDeleteTask): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setBranch(value: _17.MsgSetBranch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSetBranch(value: _17.MsgMultiSetBranch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBranch(value: _17.MsgDeleteBranch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiDeleteBranch(value: _17.MsgMultiDeleteBranch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setTag(value: _17.MsgSetTag): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSetTag(value: _17.MsgMultiSetTag): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteTag(value: _17.MsgDeleteTag): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiDeleteTag(value: _17.MsgMultiDeleteTag): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addMember(value: _17.MsgAddMember): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateMemberRole(value: _17.MsgUpdateMemberRole): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeMember(value: _17.MsgRemoveMember): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createBounty(value: _17.MsgCreateBounty): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateBountyExpiry(value: _17.MsgUpdateBountyExpiry): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    closeBounty(value: _17.MsgCloseBounty): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteBounty(value: _17.MsgDeleteBounty): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exercise(value: _17.MsgExercise): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRelease(value: _17.MsgCreateRelease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRelease(value: _17.MsgUpdateRelease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRelease(value: _17.MsgDeleteRelease): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPullRequest(value: _17.MsgCreatePullRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePullRequestTitle(value: _17.MsgUpdatePullRequestTitle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updatePullRequestDescription(value: _17.MsgUpdatePullRequestDescription): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    invokeMergePullRequest(value: _17.MsgInvokeMergePullRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setPullRequestState(value: _17.MsgSetPullRequestState): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addPullRequestReviewers(value: _17.MsgAddPullRequestReviewers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePullRequestReviewers(value: _17.MsgRemovePullRequestReviewers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addPullRequestAssignees(value: _17.MsgAddPullRequestAssignees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePullRequestAssignees(value: _17.MsgRemovePullRequestAssignees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    linkPullRequestIssueByIid(value: _17.MsgLinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    unlinkPullRequestIssueByIid(value: _17.MsgUnlinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addPullRequestLabels(value: _17.MsgAddPullRequestLabels): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removePullRequestLabels(value: _17.MsgRemovePullRequestLabels): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deletePullRequest(value: _17.MsgDeletePullRequest): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createDao(value: _17.MsgCreateDao): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    renameDao(value: _17.MsgRenameDao): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDaoDescription(value: _17.MsgUpdateDaoDescription): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDaoWebsite(value: _17.MsgUpdateDaoWebsite): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDaoLocation(value: _17.MsgUpdateDaoLocation): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDaoAvatar(value: _17.MsgUpdateDaoAvatar): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteDao(value: _17.MsgDeleteDao): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createComment(value: _17.MsgCreateComment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateComment(value: _17.MsgUpdateComment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteComment(value: _17.MsgDeleteComment): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    toggleCommentResolved(value: _17.MsgToggleCommentResolved): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createIssue(value: _17.MsgCreateIssue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateIssueTitle(value: _17.MsgUpdateIssueTitle): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateIssueDescription(value: _17.MsgUpdateIssueDescription): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    toggleIssueState(value: _17.MsgToggleIssueState): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addIssueAssignees(value: _17.MsgAddIssueAssignees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeIssueAssignees(value: _17.MsgRemoveIssueAssignees): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addIssueLabels(value: _17.MsgAddIssueLabels): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeIssueLabels(value: _17.MsgRemoveIssueLabels): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteIssue(value: _17.MsgDeleteIssue): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRepository(value: _17.MsgCreateRepository): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    invokeForkRepository(value: _17.MsgInvokeForkRepository): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forkRepository(value: _17.MsgForkRepository): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    forkRepositorySuccess(value: _17.MsgForkRepositorySuccess): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    renameRepository(value: _17.MsgRenameRepository): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRepositoryDescription(value: _17.MsgUpdateRepositoryDescription): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    toggleRepositoryArchived(value: _17.MsgToggleRepositoryArchived): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeOwner(value: _17.MsgChangeOwner): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRepositoryCollaborator(value: _17.MsgUpdateRepositoryCollaborator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    removeRepositoryCollaborator(value: _17.MsgRemoveRepositoryCollaborator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createRepositoryLabel(value: _17.MsgCreateRepositoryLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRepositoryLabel(value: _17.MsgUpdateRepositoryLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRepositoryLabel(value: _17.MsgDeleteRepositoryLabel): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDefaultBranch(value: _17.MsgSetDefaultBranch): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    toggleRepositoryForking(value: _17.MsgToggleRepositoryForking): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    toggleArweaveBackup(value: _17.MsgToggleArweaveBackup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteRepository(value: _17.MsgDeleteRepository): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createUser(value: _17.MsgCreateUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateUserUsername(value: _17.MsgUpdateUserUsername): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateUserName(value: _17.MsgUpdateUserName): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateUserBio(value: _17.MsgUpdateUserBio): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateUserAvatar(value: _17.MsgUpdateUserAvatar): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deleteUser(value: _17.MsgDeleteUser): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateRepositoryBackupRef(value: _17.MsgUpdateRepositoryBackupRef): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    addRepositoryBackupRef(value: _17.MsgAddRepositoryBackupRef): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateUserPinnedRepositories(value: _17.MsgUpdateUserPinnedRepositories): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateDaoPinnedRepositories(value: _17.MsgUpdateDaoPinnedRepositories): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    distributePlatformIncentives(value: _17.MsgDistributePlatformIncentives): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    toggleForcePush(value: _17.MsgToggleForcePush): {
                        typeUrl: string;
                        value: _17.MsgToggleForcePush;
                    };
                    revokeProviderPermission(value: _17.MsgRevokeProviderPermission): {
                        typeUrl: string;
                        value: _17.MsgRevokeProviderPermission;
                    };
                    authorizeProvider(value: _17.MsgAuthorizeProvider): {
                        typeUrl: string;
                        value: _17.MsgAuthorizeProvider;
                    };
                    createTask(value: _17.MsgCreateTask): {
                        typeUrl: string;
                        value: _17.MsgCreateTask;
                    };
                    updateTask(value: _17.MsgUpdateTask): {
                        typeUrl: string;
                        value: _17.MsgUpdateTask;
                    };
                    deleteTask(value: _17.MsgDeleteTask): {
                        typeUrl: string;
                        value: _17.MsgDeleteTask;
                    };
                    setBranch(value: _17.MsgSetBranch): {
                        typeUrl: string;
                        value: _17.MsgSetBranch;
                    };
                    multiSetBranch(value: _17.MsgMultiSetBranch): {
                        typeUrl: string;
                        value: _17.MsgMultiSetBranch;
                    };
                    deleteBranch(value: _17.MsgDeleteBranch): {
                        typeUrl: string;
                        value: _17.MsgDeleteBranch;
                    };
                    multiDeleteBranch(value: _17.MsgMultiDeleteBranch): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteBranch;
                    };
                    setTag(value: _17.MsgSetTag): {
                        typeUrl: string;
                        value: _17.MsgSetTag;
                    };
                    multiSetTag(value: _17.MsgMultiSetTag): {
                        typeUrl: string;
                        value: _17.MsgMultiSetTag;
                    };
                    deleteTag(value: _17.MsgDeleteTag): {
                        typeUrl: string;
                        value: _17.MsgDeleteTag;
                    };
                    multiDeleteTag(value: _17.MsgMultiDeleteTag): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteTag;
                    };
                    addMember(value: _17.MsgAddMember): {
                        typeUrl: string;
                        value: _17.MsgAddMember;
                    };
                    updateMemberRole(value: _17.MsgUpdateMemberRole): {
                        typeUrl: string;
                        value: _17.MsgUpdateMemberRole;
                    };
                    removeMember(value: _17.MsgRemoveMember): {
                        typeUrl: string;
                        value: _17.MsgRemoveMember;
                    };
                    createBounty(value: _17.MsgCreateBounty): {
                        typeUrl: string;
                        value: _17.MsgCreateBounty;
                    };
                    updateBountyExpiry(value: _17.MsgUpdateBountyExpiry): {
                        typeUrl: string;
                        value: _17.MsgUpdateBountyExpiry;
                    };
                    closeBounty(value: _17.MsgCloseBounty): {
                        typeUrl: string;
                        value: _17.MsgCloseBounty;
                    };
                    deleteBounty(value: _17.MsgDeleteBounty): {
                        typeUrl: string;
                        value: _17.MsgDeleteBounty;
                    };
                    exercise(value: _17.MsgExercise): {
                        typeUrl: string;
                        value: _17.MsgExercise;
                    };
                    createRelease(value: _17.MsgCreateRelease): {
                        typeUrl: string;
                        value: _17.MsgCreateRelease;
                    };
                    updateRelease(value: _17.MsgUpdateRelease): {
                        typeUrl: string;
                        value: _17.MsgUpdateRelease;
                    };
                    deleteRelease(value: _17.MsgDeleteRelease): {
                        typeUrl: string;
                        value: _17.MsgDeleteRelease;
                    };
                    createPullRequest(value: _17.MsgCreatePullRequest): {
                        typeUrl: string;
                        value: _17.MsgCreatePullRequest;
                    };
                    updatePullRequestTitle(value: _17.MsgUpdatePullRequestTitle): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestTitle;
                    };
                    updatePullRequestDescription(value: _17.MsgUpdatePullRequestDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestDescription;
                    };
                    invokeMergePullRequest(value: _17.MsgInvokeMergePullRequest): {
                        typeUrl: string;
                        value: _17.MsgInvokeMergePullRequest;
                    };
                    setPullRequestState(value: _17.MsgSetPullRequestState): {
                        typeUrl: string;
                        value: _17.MsgSetPullRequestState;
                    };
                    addPullRequestReviewers(value: _17.MsgAddPullRequestReviewers): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestReviewers;
                    };
                    removePullRequestReviewers(value: _17.MsgRemovePullRequestReviewers): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestReviewers;
                    };
                    addPullRequestAssignees(value: _17.MsgAddPullRequestAssignees): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestAssignees;
                    };
                    removePullRequestAssignees(value: _17.MsgRemovePullRequestAssignees): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestAssignees;
                    };
                    linkPullRequestIssueByIid(value: _17.MsgLinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: _17.MsgLinkPullRequestIssueByIid;
                    };
                    unlinkPullRequestIssueByIid(value: _17.MsgUnlinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: _17.MsgUnlinkPullRequestIssueByIid;
                    };
                    addPullRequestLabels(value: _17.MsgAddPullRequestLabels): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestLabels;
                    };
                    removePullRequestLabels(value: _17.MsgRemovePullRequestLabels): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestLabels;
                    };
                    deletePullRequest(value: _17.MsgDeletePullRequest): {
                        typeUrl: string;
                        value: _17.MsgDeletePullRequest;
                    };
                    createDao(value: _17.MsgCreateDao): {
                        typeUrl: string;
                        value: _17.MsgCreateDao;
                    };
                    renameDao(value: _17.MsgRenameDao): {
                        typeUrl: string;
                        value: _17.MsgRenameDao;
                    };
                    updateDaoDescription(value: _17.MsgUpdateDaoDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoDescription;
                    };
                    updateDaoWebsite(value: _17.MsgUpdateDaoWebsite): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoWebsite;
                    };
                    updateDaoLocation(value: _17.MsgUpdateDaoLocation): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoLocation;
                    };
                    updateDaoAvatar(value: _17.MsgUpdateDaoAvatar): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoAvatar;
                    };
                    deleteDao(value: _17.MsgDeleteDao): {
                        typeUrl: string;
                        value: _17.MsgDeleteDao;
                    };
                    createComment(value: _17.MsgCreateComment): {
                        typeUrl: string;
                        value: _17.MsgCreateComment;
                    };
                    updateComment(value: _17.MsgUpdateComment): {
                        typeUrl: string;
                        value: _17.MsgUpdateComment;
                    };
                    deleteComment(value: _17.MsgDeleteComment): {
                        typeUrl: string;
                        value: _17.MsgDeleteComment;
                    };
                    toggleCommentResolved(value: _17.MsgToggleCommentResolved): {
                        typeUrl: string;
                        value: _17.MsgToggleCommentResolved;
                    };
                    createIssue(value: _17.MsgCreateIssue): {
                        typeUrl: string;
                        value: _17.MsgCreateIssue;
                    };
                    updateIssueTitle(value: _17.MsgUpdateIssueTitle): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueTitle;
                    };
                    updateIssueDescription(value: _17.MsgUpdateIssueDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueDescription;
                    };
                    toggleIssueState(value: _17.MsgToggleIssueState): {
                        typeUrl: string;
                        value: _17.MsgToggleIssueState;
                    };
                    addIssueAssignees(value: _17.MsgAddIssueAssignees): {
                        typeUrl: string;
                        value: _17.MsgAddIssueAssignees;
                    };
                    removeIssueAssignees(value: _17.MsgRemoveIssueAssignees): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueAssignees;
                    };
                    addIssueLabels(value: _17.MsgAddIssueLabels): {
                        typeUrl: string;
                        value: _17.MsgAddIssueLabels;
                    };
                    removeIssueLabels(value: _17.MsgRemoveIssueLabels): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueLabels;
                    };
                    deleteIssue(value: _17.MsgDeleteIssue): {
                        typeUrl: string;
                        value: _17.MsgDeleteIssue;
                    };
                    createRepository(value: _17.MsgCreateRepository): {
                        typeUrl: string;
                        value: _17.MsgCreateRepository;
                    };
                    invokeForkRepository(value: _17.MsgInvokeForkRepository): {
                        typeUrl: string;
                        value: _17.MsgInvokeForkRepository;
                    };
                    forkRepository(value: _17.MsgForkRepository): {
                        typeUrl: string;
                        value: _17.MsgForkRepository;
                    };
                    forkRepositorySuccess(value: _17.MsgForkRepositorySuccess): {
                        typeUrl: string;
                        value: _17.MsgForkRepositorySuccess;
                    };
                    renameRepository(value: _17.MsgRenameRepository): {
                        typeUrl: string;
                        value: _17.MsgRenameRepository;
                    };
                    updateRepositoryDescription(value: _17.MsgUpdateRepositoryDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryDescription;
                    };
                    toggleRepositoryArchived(value: _17.MsgToggleRepositoryArchived): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryArchived;
                    };
                    changeOwner(value: _17.MsgChangeOwner): {
                        typeUrl: string;
                        value: _17.MsgChangeOwner;
                    };
                    updateRepositoryCollaborator(value: _17.MsgUpdateRepositoryCollaborator): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryCollaborator;
                    };
                    removeRepositoryCollaborator(value: _17.MsgRemoveRepositoryCollaborator): {
                        typeUrl: string;
                        value: _17.MsgRemoveRepositoryCollaborator;
                    };
                    createRepositoryLabel(value: _17.MsgCreateRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgCreateRepositoryLabel;
                    };
                    updateRepositoryLabel(value: _17.MsgUpdateRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryLabel;
                    };
                    deleteRepositoryLabel(value: _17.MsgDeleteRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepositoryLabel;
                    };
                    setDefaultBranch(value: _17.MsgSetDefaultBranch): {
                        typeUrl: string;
                        value: _17.MsgSetDefaultBranch;
                    };
                    toggleRepositoryForking(value: _17.MsgToggleRepositoryForking): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryForking;
                    };
                    toggleArweaveBackup(value: _17.MsgToggleArweaveBackup): {
                        typeUrl: string;
                        value: _17.MsgToggleArweaveBackup;
                    };
                    deleteRepository(value: _17.MsgDeleteRepository): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepository;
                    };
                    createUser(value: _17.MsgCreateUser): {
                        typeUrl: string;
                        value: _17.MsgCreateUser;
                    };
                    updateUserUsername(value: _17.MsgUpdateUserUsername): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserUsername;
                    };
                    updateUserName(value: _17.MsgUpdateUserName): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserName;
                    };
                    updateUserBio(value: _17.MsgUpdateUserBio): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserBio;
                    };
                    updateUserAvatar(value: _17.MsgUpdateUserAvatar): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserAvatar;
                    };
                    deleteUser(value: _17.MsgDeleteUser): {
                        typeUrl: string;
                        value: _17.MsgDeleteUser;
                    };
                    updateRepositoryBackupRef(value: _17.MsgUpdateRepositoryBackupRef): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryBackupRef;
                    };
                    addRepositoryBackupRef(value: _17.MsgAddRepositoryBackupRef): {
                        typeUrl: string;
                        value: _17.MsgAddRepositoryBackupRef;
                    };
                    updateUserPinnedRepositories(value: _17.MsgUpdateUserPinnedRepositories): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserPinnedRepositories;
                    };
                    updateDaoPinnedRepositories(value: _17.MsgUpdateDaoPinnedRepositories): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoPinnedRepositories;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                    distributePlatformIncentives(value: _17.MsgDistributePlatformIncentives): {
                        typeUrl: string;
                        value: _17.MsgDistributePlatformIncentives;
                    };
                };
                fromJSON: {
                    toggleForcePush(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleForcePush;
                    };
                    revokeProviderPermission(value: any): {
                        typeUrl: string;
                        value: _17.MsgRevokeProviderPermission;
                    };
                    authorizeProvider(value: any): {
                        typeUrl: string;
                        value: _17.MsgAuthorizeProvider;
                    };
                    createTask(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateTask;
                    };
                    updateTask(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateTask;
                    };
                    deleteTask(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteTask;
                    };
                    setBranch(value: any): {
                        typeUrl: string;
                        value: _17.MsgSetBranch;
                    };
                    multiSetBranch(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSetBranch;
                    };
                    deleteBranch(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteBranch;
                    };
                    multiDeleteBranch(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteBranch;
                    };
                    setTag(value: any): {
                        typeUrl: string;
                        value: _17.MsgSetTag;
                    };
                    multiSetTag(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiSetTag;
                    };
                    deleteTag(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteTag;
                    };
                    multiDeleteTag(value: any): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteTag;
                    };
                    addMember(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddMember;
                    };
                    updateMemberRole(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateMemberRole;
                    };
                    removeMember(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemoveMember;
                    };
                    createBounty(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateBounty;
                    };
                    updateBountyExpiry(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateBountyExpiry;
                    };
                    closeBounty(value: any): {
                        typeUrl: string;
                        value: _17.MsgCloseBounty;
                    };
                    deleteBounty(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteBounty;
                    };
                    exercise(value: any): {
                        typeUrl: string;
                        value: _17.MsgExercise;
                    };
                    createRelease(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateRelease;
                    };
                    updateRelease(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateRelease;
                    };
                    deleteRelease(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteRelease;
                    };
                    createPullRequest(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreatePullRequest;
                    };
                    updatePullRequestTitle(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestTitle;
                    };
                    updatePullRequestDescription(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestDescription;
                    };
                    invokeMergePullRequest(value: any): {
                        typeUrl: string;
                        value: _17.MsgInvokeMergePullRequest;
                    };
                    setPullRequestState(value: any): {
                        typeUrl: string;
                        value: _17.MsgSetPullRequestState;
                    };
                    addPullRequestReviewers(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestReviewers;
                    };
                    removePullRequestReviewers(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestReviewers;
                    };
                    addPullRequestAssignees(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestAssignees;
                    };
                    removePullRequestAssignees(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestAssignees;
                    };
                    linkPullRequestIssueByIid(value: any): {
                        typeUrl: string;
                        value: _17.MsgLinkPullRequestIssueByIid;
                    };
                    unlinkPullRequestIssueByIid(value: any): {
                        typeUrl: string;
                        value: _17.MsgUnlinkPullRequestIssueByIid;
                    };
                    addPullRequestLabels(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestLabels;
                    };
                    removePullRequestLabels(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestLabels;
                    };
                    deletePullRequest(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeletePullRequest;
                    };
                    createDao(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateDao;
                    };
                    renameDao(value: any): {
                        typeUrl: string;
                        value: _17.MsgRenameDao;
                    };
                    updateDaoDescription(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoDescription;
                    };
                    updateDaoWebsite(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoWebsite;
                    };
                    updateDaoLocation(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoLocation;
                    };
                    updateDaoAvatar(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoAvatar;
                    };
                    deleteDao(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteDao;
                    };
                    createComment(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateComment;
                    };
                    updateComment(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateComment;
                    };
                    deleteComment(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteComment;
                    };
                    toggleCommentResolved(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleCommentResolved;
                    };
                    createIssue(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateIssue;
                    };
                    updateIssueTitle(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueTitle;
                    };
                    updateIssueDescription(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueDescription;
                    };
                    toggleIssueState(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleIssueState;
                    };
                    addIssueAssignees(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddIssueAssignees;
                    };
                    removeIssueAssignees(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueAssignees;
                    };
                    addIssueLabels(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddIssueLabels;
                    };
                    removeIssueLabels(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueLabels;
                    };
                    deleteIssue(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteIssue;
                    };
                    createRepository(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateRepository;
                    };
                    invokeForkRepository(value: any): {
                        typeUrl: string;
                        value: _17.MsgInvokeForkRepository;
                    };
                    forkRepository(value: any): {
                        typeUrl: string;
                        value: _17.MsgForkRepository;
                    };
                    forkRepositorySuccess(value: any): {
                        typeUrl: string;
                        value: _17.MsgForkRepositorySuccess;
                    };
                    renameRepository(value: any): {
                        typeUrl: string;
                        value: _17.MsgRenameRepository;
                    };
                    updateRepositoryDescription(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryDescription;
                    };
                    toggleRepositoryArchived(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryArchived;
                    };
                    changeOwner(value: any): {
                        typeUrl: string;
                        value: _17.MsgChangeOwner;
                    };
                    updateRepositoryCollaborator(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryCollaborator;
                    };
                    removeRepositoryCollaborator(value: any): {
                        typeUrl: string;
                        value: _17.MsgRemoveRepositoryCollaborator;
                    };
                    createRepositoryLabel(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateRepositoryLabel;
                    };
                    updateRepositoryLabel(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryLabel;
                    };
                    deleteRepositoryLabel(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepositoryLabel;
                    };
                    setDefaultBranch(value: any): {
                        typeUrl: string;
                        value: _17.MsgSetDefaultBranch;
                    };
                    toggleRepositoryForking(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryForking;
                    };
                    toggleArweaveBackup(value: any): {
                        typeUrl: string;
                        value: _17.MsgToggleArweaveBackup;
                    };
                    deleteRepository(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepository;
                    };
                    createUser(value: any): {
                        typeUrl: string;
                        value: _17.MsgCreateUser;
                    };
                    updateUserUsername(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserUsername;
                    };
                    updateUserName(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserName;
                    };
                    updateUserBio(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserBio;
                    };
                    updateUserAvatar(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserAvatar;
                    };
                    deleteUser(value: any): {
                        typeUrl: string;
                        value: _17.MsgDeleteUser;
                    };
                    updateRepositoryBackupRef(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryBackupRef;
                    };
                    addRepositoryBackupRef(value: any): {
                        typeUrl: string;
                        value: _17.MsgAddRepositoryBackupRef;
                    };
                    updateUserPinnedRepositories(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserPinnedRepositories;
                    };
                    updateDaoPinnedRepositories(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoPinnedRepositories;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                    distributePlatformIncentives(value: any): {
                        typeUrl: string;
                        value: _17.MsgDistributePlatformIncentives;
                    };
                };
                fromPartial: {
                    toggleForcePush(value: _17.MsgToggleForcePush): {
                        typeUrl: string;
                        value: _17.MsgToggleForcePush;
                    };
                    revokeProviderPermission(value: _17.MsgRevokeProviderPermission): {
                        typeUrl: string;
                        value: _17.MsgRevokeProviderPermission;
                    };
                    authorizeProvider(value: _17.MsgAuthorizeProvider): {
                        typeUrl: string;
                        value: _17.MsgAuthorizeProvider;
                    };
                    createTask(value: _17.MsgCreateTask): {
                        typeUrl: string;
                        value: _17.MsgCreateTask;
                    };
                    updateTask(value: _17.MsgUpdateTask): {
                        typeUrl: string;
                        value: _17.MsgUpdateTask;
                    };
                    deleteTask(value: _17.MsgDeleteTask): {
                        typeUrl: string;
                        value: _17.MsgDeleteTask;
                    };
                    setBranch(value: _17.MsgSetBranch): {
                        typeUrl: string;
                        value: _17.MsgSetBranch;
                    };
                    multiSetBranch(value: _17.MsgMultiSetBranch): {
                        typeUrl: string;
                        value: _17.MsgMultiSetBranch;
                    };
                    deleteBranch(value: _17.MsgDeleteBranch): {
                        typeUrl: string;
                        value: _17.MsgDeleteBranch;
                    };
                    multiDeleteBranch(value: _17.MsgMultiDeleteBranch): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteBranch;
                    };
                    setTag(value: _17.MsgSetTag): {
                        typeUrl: string;
                        value: _17.MsgSetTag;
                    };
                    multiSetTag(value: _17.MsgMultiSetTag): {
                        typeUrl: string;
                        value: _17.MsgMultiSetTag;
                    };
                    deleteTag(value: _17.MsgDeleteTag): {
                        typeUrl: string;
                        value: _17.MsgDeleteTag;
                    };
                    multiDeleteTag(value: _17.MsgMultiDeleteTag): {
                        typeUrl: string;
                        value: _17.MsgMultiDeleteTag;
                    };
                    addMember(value: _17.MsgAddMember): {
                        typeUrl: string;
                        value: _17.MsgAddMember;
                    };
                    updateMemberRole(value: _17.MsgUpdateMemberRole): {
                        typeUrl: string;
                        value: _17.MsgUpdateMemberRole;
                    };
                    removeMember(value: _17.MsgRemoveMember): {
                        typeUrl: string;
                        value: _17.MsgRemoveMember;
                    };
                    createBounty(value: _17.MsgCreateBounty): {
                        typeUrl: string;
                        value: _17.MsgCreateBounty;
                    };
                    updateBountyExpiry(value: _17.MsgUpdateBountyExpiry): {
                        typeUrl: string;
                        value: _17.MsgUpdateBountyExpiry;
                    };
                    closeBounty(value: _17.MsgCloseBounty): {
                        typeUrl: string;
                        value: _17.MsgCloseBounty;
                    };
                    deleteBounty(value: _17.MsgDeleteBounty): {
                        typeUrl: string;
                        value: _17.MsgDeleteBounty;
                    };
                    exercise(value: _17.MsgExercise): {
                        typeUrl: string;
                        value: _17.MsgExercise;
                    };
                    createRelease(value: _17.MsgCreateRelease): {
                        typeUrl: string;
                        value: _17.MsgCreateRelease;
                    };
                    updateRelease(value: _17.MsgUpdateRelease): {
                        typeUrl: string;
                        value: _17.MsgUpdateRelease;
                    };
                    deleteRelease(value: _17.MsgDeleteRelease): {
                        typeUrl: string;
                        value: _17.MsgDeleteRelease;
                    };
                    createPullRequest(value: _17.MsgCreatePullRequest): {
                        typeUrl: string;
                        value: _17.MsgCreatePullRequest;
                    };
                    updatePullRequestTitle(value: _17.MsgUpdatePullRequestTitle): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestTitle;
                    };
                    updatePullRequestDescription(value: _17.MsgUpdatePullRequestDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdatePullRequestDescription;
                    };
                    invokeMergePullRequest(value: _17.MsgInvokeMergePullRequest): {
                        typeUrl: string;
                        value: _17.MsgInvokeMergePullRequest;
                    };
                    setPullRequestState(value: _17.MsgSetPullRequestState): {
                        typeUrl: string;
                        value: _17.MsgSetPullRequestState;
                    };
                    addPullRequestReviewers(value: _17.MsgAddPullRequestReviewers): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestReviewers;
                    };
                    removePullRequestReviewers(value: _17.MsgRemovePullRequestReviewers): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestReviewers;
                    };
                    addPullRequestAssignees(value: _17.MsgAddPullRequestAssignees): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestAssignees;
                    };
                    removePullRequestAssignees(value: _17.MsgRemovePullRequestAssignees): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestAssignees;
                    };
                    linkPullRequestIssueByIid(value: _17.MsgLinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: _17.MsgLinkPullRequestIssueByIid;
                    };
                    unlinkPullRequestIssueByIid(value: _17.MsgUnlinkPullRequestIssueByIid): {
                        typeUrl: string;
                        value: _17.MsgUnlinkPullRequestIssueByIid;
                    };
                    addPullRequestLabels(value: _17.MsgAddPullRequestLabels): {
                        typeUrl: string;
                        value: _17.MsgAddPullRequestLabels;
                    };
                    removePullRequestLabels(value: _17.MsgRemovePullRequestLabels): {
                        typeUrl: string;
                        value: _17.MsgRemovePullRequestLabels;
                    };
                    deletePullRequest(value: _17.MsgDeletePullRequest): {
                        typeUrl: string;
                        value: _17.MsgDeletePullRequest;
                    };
                    createDao(value: _17.MsgCreateDao): {
                        typeUrl: string;
                        value: _17.MsgCreateDao;
                    };
                    renameDao(value: _17.MsgRenameDao): {
                        typeUrl: string;
                        value: _17.MsgRenameDao;
                    };
                    updateDaoDescription(value: _17.MsgUpdateDaoDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoDescription;
                    };
                    updateDaoWebsite(value: _17.MsgUpdateDaoWebsite): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoWebsite;
                    };
                    updateDaoLocation(value: _17.MsgUpdateDaoLocation): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoLocation;
                    };
                    updateDaoAvatar(value: _17.MsgUpdateDaoAvatar): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoAvatar;
                    };
                    deleteDao(value: _17.MsgDeleteDao): {
                        typeUrl: string;
                        value: _17.MsgDeleteDao;
                    };
                    createComment(value: _17.MsgCreateComment): {
                        typeUrl: string;
                        value: _17.MsgCreateComment;
                    };
                    updateComment(value: _17.MsgUpdateComment): {
                        typeUrl: string;
                        value: _17.MsgUpdateComment;
                    };
                    deleteComment(value: _17.MsgDeleteComment): {
                        typeUrl: string;
                        value: _17.MsgDeleteComment;
                    };
                    toggleCommentResolved(value: _17.MsgToggleCommentResolved): {
                        typeUrl: string;
                        value: _17.MsgToggleCommentResolved;
                    };
                    createIssue(value: _17.MsgCreateIssue): {
                        typeUrl: string;
                        value: _17.MsgCreateIssue;
                    };
                    updateIssueTitle(value: _17.MsgUpdateIssueTitle): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueTitle;
                    };
                    updateIssueDescription(value: _17.MsgUpdateIssueDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateIssueDescription;
                    };
                    toggleIssueState(value: _17.MsgToggleIssueState): {
                        typeUrl: string;
                        value: _17.MsgToggleIssueState;
                    };
                    addIssueAssignees(value: _17.MsgAddIssueAssignees): {
                        typeUrl: string;
                        value: _17.MsgAddIssueAssignees;
                    };
                    removeIssueAssignees(value: _17.MsgRemoveIssueAssignees): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueAssignees;
                    };
                    addIssueLabels(value: _17.MsgAddIssueLabels): {
                        typeUrl: string;
                        value: _17.MsgAddIssueLabels;
                    };
                    removeIssueLabels(value: _17.MsgRemoveIssueLabels): {
                        typeUrl: string;
                        value: _17.MsgRemoveIssueLabels;
                    };
                    deleteIssue(value: _17.MsgDeleteIssue): {
                        typeUrl: string;
                        value: _17.MsgDeleteIssue;
                    };
                    createRepository(value: _17.MsgCreateRepository): {
                        typeUrl: string;
                        value: _17.MsgCreateRepository;
                    };
                    invokeForkRepository(value: _17.MsgInvokeForkRepository): {
                        typeUrl: string;
                        value: _17.MsgInvokeForkRepository;
                    };
                    forkRepository(value: _17.MsgForkRepository): {
                        typeUrl: string;
                        value: _17.MsgForkRepository;
                    };
                    forkRepositorySuccess(value: _17.MsgForkRepositorySuccess): {
                        typeUrl: string;
                        value: _17.MsgForkRepositorySuccess;
                    };
                    renameRepository(value: _17.MsgRenameRepository): {
                        typeUrl: string;
                        value: _17.MsgRenameRepository;
                    };
                    updateRepositoryDescription(value: _17.MsgUpdateRepositoryDescription): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryDescription;
                    };
                    toggleRepositoryArchived(value: _17.MsgToggleRepositoryArchived): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryArchived;
                    };
                    changeOwner(value: _17.MsgChangeOwner): {
                        typeUrl: string;
                        value: _17.MsgChangeOwner;
                    };
                    updateRepositoryCollaborator(value: _17.MsgUpdateRepositoryCollaborator): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryCollaborator;
                    };
                    removeRepositoryCollaborator(value: _17.MsgRemoveRepositoryCollaborator): {
                        typeUrl: string;
                        value: _17.MsgRemoveRepositoryCollaborator;
                    };
                    createRepositoryLabel(value: _17.MsgCreateRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgCreateRepositoryLabel;
                    };
                    updateRepositoryLabel(value: _17.MsgUpdateRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryLabel;
                    };
                    deleteRepositoryLabel(value: _17.MsgDeleteRepositoryLabel): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepositoryLabel;
                    };
                    setDefaultBranch(value: _17.MsgSetDefaultBranch): {
                        typeUrl: string;
                        value: _17.MsgSetDefaultBranch;
                    };
                    toggleRepositoryForking(value: _17.MsgToggleRepositoryForking): {
                        typeUrl: string;
                        value: _17.MsgToggleRepositoryForking;
                    };
                    toggleArweaveBackup(value: _17.MsgToggleArweaveBackup): {
                        typeUrl: string;
                        value: _17.MsgToggleArweaveBackup;
                    };
                    deleteRepository(value: _17.MsgDeleteRepository): {
                        typeUrl: string;
                        value: _17.MsgDeleteRepository;
                    };
                    createUser(value: _17.MsgCreateUser): {
                        typeUrl: string;
                        value: _17.MsgCreateUser;
                    };
                    updateUserUsername(value: _17.MsgUpdateUserUsername): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserUsername;
                    };
                    updateUserName(value: _17.MsgUpdateUserName): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserName;
                    };
                    updateUserBio(value: _17.MsgUpdateUserBio): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserBio;
                    };
                    updateUserAvatar(value: _17.MsgUpdateUserAvatar): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserAvatar;
                    };
                    deleteUser(value: _17.MsgDeleteUser): {
                        typeUrl: string;
                        value: _17.MsgDeleteUser;
                    };
                    updateRepositoryBackupRef(value: _17.MsgUpdateRepositoryBackupRef): {
                        typeUrl: string;
                        value: _17.MsgUpdateRepositoryBackupRef;
                    };
                    addRepositoryBackupRef(value: _17.MsgAddRepositoryBackupRef): {
                        typeUrl: string;
                        value: _17.MsgAddRepositoryBackupRef;
                    };
                    updateUserPinnedRepositories(value: _17.MsgUpdateUserPinnedRepositories): {
                        typeUrl: string;
                        value: _17.MsgUpdateUserPinnedRepositories;
                    };
                    updateDaoPinnedRepositories(value: _17.MsgUpdateDaoPinnedRepositories): {
                        typeUrl: string;
                        value: _17.MsgUpdateDaoPinnedRepositories;
                    };
                    updateParams(value: _17.MsgUpdateParams): {
                        typeUrl: string;
                        value: _17.MsgUpdateParams;
                    };
                    distributePlatformIncentives(value: _17.MsgDistributePlatformIncentives): {
                        typeUrl: string;
                        value: _17.MsgDistributePlatformIncentives;
                    };
                };
            };
            AminoConverter: {
                "/gitopia.gitopia.gitopia.MsgToggleForcePush": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleForcePush) => _17.MsgToggleForcePushAmino;
                    fromAmino: (object: _17.MsgToggleForcePushAmino) => _17.MsgToggleForcePush;
                };
                "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRevokeProviderPermission) => _17.MsgRevokeProviderPermissionAmino;
                    fromAmino: (object: _17.MsgRevokeProviderPermissionAmino) => _17.MsgRevokeProviderPermission;
                };
                "/gitopia.gitopia.gitopia.MsgAuthorizeProvider": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAuthorizeProvider) => _17.MsgAuthorizeProviderAmino;
                    fromAmino: (object: _17.MsgAuthorizeProviderAmino) => _17.MsgAuthorizeProvider;
                };
                "/gitopia.gitopia.gitopia.MsgCreateTask": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateTask) => _17.MsgCreateTaskAmino;
                    fromAmino: (object: _17.MsgCreateTaskAmino) => _17.MsgCreateTask;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateTask": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateTask) => _17.MsgUpdateTaskAmino;
                    fromAmino: (object: _17.MsgUpdateTaskAmino) => _17.MsgUpdateTask;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteTask": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteTask) => _17.MsgDeleteTaskAmino;
                    fromAmino: (object: _17.MsgDeleteTaskAmino) => _17.MsgDeleteTask;
                };
                "/gitopia.gitopia.gitopia.MsgSetBranch": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSetBranch) => _17.MsgSetBranchAmino;
                    fromAmino: (object: _17.MsgSetBranchAmino) => _17.MsgSetBranch;
                };
                "/gitopia.gitopia.gitopia.MsgMultiSetBranch": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiSetBranch) => _17.MsgMultiSetBranchAmino;
                    fromAmino: (object: _17.MsgMultiSetBranchAmino) => _17.MsgMultiSetBranch;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteBranch": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteBranch) => _17.MsgDeleteBranchAmino;
                    fromAmino: (object: _17.MsgDeleteBranchAmino) => _17.MsgDeleteBranch;
                };
                "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiDeleteBranch) => _17.MsgMultiDeleteBranchAmino;
                    fromAmino: (object: _17.MsgMultiDeleteBranchAmino) => _17.MsgMultiDeleteBranch;
                };
                "/gitopia.gitopia.gitopia.MsgSetTag": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSetTag) => _17.MsgSetTagAmino;
                    fromAmino: (object: _17.MsgSetTagAmino) => _17.MsgSetTag;
                };
                "/gitopia.gitopia.gitopia.MsgMultiSetTag": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiSetTag) => _17.MsgMultiSetTagAmino;
                    fromAmino: (object: _17.MsgMultiSetTagAmino) => _17.MsgMultiSetTag;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteTag": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteTag) => _17.MsgDeleteTagAmino;
                    fromAmino: (object: _17.MsgDeleteTagAmino) => _17.MsgDeleteTag;
                };
                "/gitopia.gitopia.gitopia.MsgMultiDeleteTag": {
                    aminoType: string;
                    toAmino: (message: _17.MsgMultiDeleteTag) => _17.MsgMultiDeleteTagAmino;
                    fromAmino: (object: _17.MsgMultiDeleteTagAmino) => _17.MsgMultiDeleteTag;
                };
                "/gitopia.gitopia.gitopia.MsgAddMember": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddMember) => _17.MsgAddMemberAmino;
                    fromAmino: (object: _17.MsgAddMemberAmino) => _17.MsgAddMember;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateMemberRole": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateMemberRole) => _17.MsgUpdateMemberRoleAmino;
                    fromAmino: (object: _17.MsgUpdateMemberRoleAmino) => _17.MsgUpdateMemberRole;
                };
                "/gitopia.gitopia.gitopia.MsgRemoveMember": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemoveMember) => _17.MsgRemoveMemberAmino;
                    fromAmino: (object: _17.MsgRemoveMemberAmino) => _17.MsgRemoveMember;
                };
                "/gitopia.gitopia.gitopia.MsgCreateBounty": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateBounty) => _17.MsgCreateBountyAmino;
                    fromAmino: (object: _17.MsgCreateBountyAmino) => _17.MsgCreateBounty;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateBountyExpiry) => _17.MsgUpdateBountyExpiryAmino;
                    fromAmino: (object: _17.MsgUpdateBountyExpiryAmino) => _17.MsgUpdateBountyExpiry;
                };
                "/gitopia.gitopia.gitopia.MsgCloseBounty": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCloseBounty) => _17.MsgCloseBountyAmino;
                    fromAmino: (object: _17.MsgCloseBountyAmino) => _17.MsgCloseBounty;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteBounty": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteBounty) => _17.MsgDeleteBountyAmino;
                    fromAmino: (object: _17.MsgDeleteBountyAmino) => _17.MsgDeleteBounty;
                };
                "/gitopia.gitopia.gitopia.MsgExercise": {
                    aminoType: string;
                    toAmino: (message: _17.MsgExercise) => _17.MsgExerciseAmino;
                    fromAmino: (object: _17.MsgExerciseAmino) => _17.MsgExercise;
                };
                "/gitopia.gitopia.gitopia.MsgCreateRelease": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateRelease) => _17.MsgCreateReleaseAmino;
                    fromAmino: (object: _17.MsgCreateReleaseAmino) => _17.MsgCreateRelease;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateRelease": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateRelease) => _17.MsgUpdateReleaseAmino;
                    fromAmino: (object: _17.MsgUpdateReleaseAmino) => _17.MsgUpdateRelease;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteRelease": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteRelease) => _17.MsgDeleteReleaseAmino;
                    fromAmino: (object: _17.MsgDeleteReleaseAmino) => _17.MsgDeleteRelease;
                };
                "/gitopia.gitopia.gitopia.MsgCreatePullRequest": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreatePullRequest) => _17.MsgCreatePullRequestAmino;
                    fromAmino: (object: _17.MsgCreatePullRequestAmino) => _17.MsgCreatePullRequest;
                };
                "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdatePullRequestTitle) => _17.MsgUpdatePullRequestTitleAmino;
                    fromAmino: (object: _17.MsgUpdatePullRequestTitleAmino) => _17.MsgUpdatePullRequestTitle;
                };
                "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdatePullRequestDescription) => _17.MsgUpdatePullRequestDescriptionAmino;
                    fromAmino: (object: _17.MsgUpdatePullRequestDescriptionAmino) => _17.MsgUpdatePullRequestDescription;
                };
                "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest": {
                    aminoType: string;
                    toAmino: (message: _17.MsgInvokeMergePullRequest) => _17.MsgInvokeMergePullRequestAmino;
                    fromAmino: (object: _17.MsgInvokeMergePullRequestAmino) => _17.MsgInvokeMergePullRequest;
                };
                "/gitopia.gitopia.gitopia.MsgSetPullRequestState": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSetPullRequestState) => _17.MsgSetPullRequestStateAmino;
                    fromAmino: (object: _17.MsgSetPullRequestStateAmino) => _17.MsgSetPullRequestState;
                };
                "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddPullRequestReviewers) => _17.MsgAddPullRequestReviewersAmino;
                    fromAmino: (object: _17.MsgAddPullRequestReviewersAmino) => _17.MsgAddPullRequestReviewers;
                };
                "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemovePullRequestReviewers) => _17.MsgRemovePullRequestReviewersAmino;
                    fromAmino: (object: _17.MsgRemovePullRequestReviewersAmino) => _17.MsgRemovePullRequestReviewers;
                };
                "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddPullRequestAssignees) => _17.MsgAddPullRequestAssigneesAmino;
                    fromAmino: (object: _17.MsgAddPullRequestAssigneesAmino) => _17.MsgAddPullRequestAssignees;
                };
                "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemovePullRequestAssignees) => _17.MsgRemovePullRequestAssigneesAmino;
                    fromAmino: (object: _17.MsgRemovePullRequestAssigneesAmino) => _17.MsgRemovePullRequestAssignees;
                };
                "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid": {
                    aminoType: string;
                    toAmino: (message: _17.MsgLinkPullRequestIssueByIid) => _17.MsgLinkPullRequestIssueByIidAmino;
                    fromAmino: (object: _17.MsgLinkPullRequestIssueByIidAmino) => _17.MsgLinkPullRequestIssueByIid;
                };
                "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUnlinkPullRequestIssueByIid) => _17.MsgUnlinkPullRequestIssueByIidAmino;
                    fromAmino: (object: _17.MsgUnlinkPullRequestIssueByIidAmino) => _17.MsgUnlinkPullRequestIssueByIid;
                };
                "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddPullRequestLabels) => _17.MsgAddPullRequestLabelsAmino;
                    fromAmino: (object: _17.MsgAddPullRequestLabelsAmino) => _17.MsgAddPullRequestLabels;
                };
                "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemovePullRequestLabels) => _17.MsgRemovePullRequestLabelsAmino;
                    fromAmino: (object: _17.MsgRemovePullRequestLabelsAmino) => _17.MsgRemovePullRequestLabels;
                };
                "/gitopia.gitopia.gitopia.MsgDeletePullRequest": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeletePullRequest) => _17.MsgDeletePullRequestAmino;
                    fromAmino: (object: _17.MsgDeletePullRequestAmino) => _17.MsgDeletePullRequest;
                };
                "/gitopia.gitopia.gitopia.MsgCreateDao": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateDao) => _17.MsgCreateDaoAmino;
                    fromAmino: (object: _17.MsgCreateDaoAmino) => _17.MsgCreateDao;
                };
                "/gitopia.gitopia.gitopia.MsgRenameDao": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRenameDao) => _17.MsgRenameDaoAmino;
                    fromAmino: (object: _17.MsgRenameDaoAmino) => _17.MsgRenameDao;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDaoDescription) => _17.MsgUpdateDaoDescriptionAmino;
                    fromAmino: (object: _17.MsgUpdateDaoDescriptionAmino) => _17.MsgUpdateDaoDescription;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDaoWebsite) => _17.MsgUpdateDaoWebsiteAmino;
                    fromAmino: (object: _17.MsgUpdateDaoWebsiteAmino) => _17.MsgUpdateDaoWebsite;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDaoLocation) => _17.MsgUpdateDaoLocationAmino;
                    fromAmino: (object: _17.MsgUpdateDaoLocationAmino) => _17.MsgUpdateDaoLocation;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDaoAvatar) => _17.MsgUpdateDaoAvatarAmino;
                    fromAmino: (object: _17.MsgUpdateDaoAvatarAmino) => _17.MsgUpdateDaoAvatar;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteDao": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteDao) => _17.MsgDeleteDaoAmino;
                    fromAmino: (object: _17.MsgDeleteDaoAmino) => _17.MsgDeleteDao;
                };
                "/gitopia.gitopia.gitopia.MsgCreateComment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateComment) => _17.MsgCreateCommentAmino;
                    fromAmino: (object: _17.MsgCreateCommentAmino) => _17.MsgCreateComment;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateComment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateComment) => _17.MsgUpdateCommentAmino;
                    fromAmino: (object: _17.MsgUpdateCommentAmino) => _17.MsgUpdateComment;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteComment": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteComment) => _17.MsgDeleteCommentAmino;
                    fromAmino: (object: _17.MsgDeleteCommentAmino) => _17.MsgDeleteComment;
                };
                "/gitopia.gitopia.gitopia.MsgToggleCommentResolved": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleCommentResolved) => _17.MsgToggleCommentResolvedAmino;
                    fromAmino: (object: _17.MsgToggleCommentResolvedAmino) => _17.MsgToggleCommentResolved;
                };
                "/gitopia.gitopia.gitopia.MsgCreateIssue": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateIssue) => _17.MsgCreateIssueAmino;
                    fromAmino: (object: _17.MsgCreateIssueAmino) => _17.MsgCreateIssue;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateIssueTitle) => _17.MsgUpdateIssueTitleAmino;
                    fromAmino: (object: _17.MsgUpdateIssueTitleAmino) => _17.MsgUpdateIssueTitle;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateIssueDescription) => _17.MsgUpdateIssueDescriptionAmino;
                    fromAmino: (object: _17.MsgUpdateIssueDescriptionAmino) => _17.MsgUpdateIssueDescription;
                };
                "/gitopia.gitopia.gitopia.MsgToggleIssueState": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleIssueState) => _17.MsgToggleIssueStateAmino;
                    fromAmino: (object: _17.MsgToggleIssueStateAmino) => _17.MsgToggleIssueState;
                };
                "/gitopia.gitopia.gitopia.MsgAddIssueAssignees": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddIssueAssignees) => _17.MsgAddIssueAssigneesAmino;
                    fromAmino: (object: _17.MsgAddIssueAssigneesAmino) => _17.MsgAddIssueAssignees;
                };
                "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemoveIssueAssignees) => _17.MsgRemoveIssueAssigneesAmino;
                    fromAmino: (object: _17.MsgRemoveIssueAssigneesAmino) => _17.MsgRemoveIssueAssignees;
                };
                "/gitopia.gitopia.gitopia.MsgAddIssueLabels": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddIssueLabels) => _17.MsgAddIssueLabelsAmino;
                    fromAmino: (object: _17.MsgAddIssueLabelsAmino) => _17.MsgAddIssueLabels;
                };
                "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemoveIssueLabels) => _17.MsgRemoveIssueLabelsAmino;
                    fromAmino: (object: _17.MsgRemoveIssueLabelsAmino) => _17.MsgRemoveIssueLabels;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteIssue": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteIssue) => _17.MsgDeleteIssueAmino;
                    fromAmino: (object: _17.MsgDeleteIssueAmino) => _17.MsgDeleteIssue;
                };
                "/gitopia.gitopia.gitopia.MsgCreateRepository": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateRepository) => _17.MsgCreateRepositoryAmino;
                    fromAmino: (object: _17.MsgCreateRepositoryAmino) => _17.MsgCreateRepository;
                };
                "/gitopia.gitopia.gitopia.MsgInvokeForkRepository": {
                    aminoType: string;
                    toAmino: (message: _17.MsgInvokeForkRepository) => _17.MsgInvokeForkRepositoryAmino;
                    fromAmino: (object: _17.MsgInvokeForkRepositoryAmino) => _17.MsgInvokeForkRepository;
                };
                "/gitopia.gitopia.gitopia.MsgForkRepository": {
                    aminoType: string;
                    toAmino: (message: _17.MsgForkRepository) => _17.MsgForkRepositoryAmino;
                    fromAmino: (object: _17.MsgForkRepositoryAmino) => _17.MsgForkRepository;
                };
                "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess": {
                    aminoType: string;
                    toAmino: (message: _17.MsgForkRepositorySuccess) => _17.MsgForkRepositorySuccessAmino;
                    fromAmino: (object: _17.MsgForkRepositorySuccessAmino) => _17.MsgForkRepositorySuccess;
                };
                "/gitopia.gitopia.gitopia.MsgRenameRepository": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRenameRepository) => _17.MsgRenameRepositoryAmino;
                    fromAmino: (object: _17.MsgRenameRepositoryAmino) => _17.MsgRenameRepository;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateRepositoryDescription) => _17.MsgUpdateRepositoryDescriptionAmino;
                    fromAmino: (object: _17.MsgUpdateRepositoryDescriptionAmino) => _17.MsgUpdateRepositoryDescription;
                };
                "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleRepositoryArchived) => _17.MsgToggleRepositoryArchivedAmino;
                    fromAmino: (object: _17.MsgToggleRepositoryArchivedAmino) => _17.MsgToggleRepositoryArchived;
                };
                "/gitopia.gitopia.gitopia.MsgChangeOwner": {
                    aminoType: string;
                    toAmino: (message: _17.MsgChangeOwner) => _17.MsgChangeOwnerAmino;
                    fromAmino: (object: _17.MsgChangeOwnerAmino) => _17.MsgChangeOwner;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateRepositoryCollaborator) => _17.MsgUpdateRepositoryCollaboratorAmino;
                    fromAmino: (object: _17.MsgUpdateRepositoryCollaboratorAmino) => _17.MsgUpdateRepositoryCollaborator;
                };
                "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator": {
                    aminoType: string;
                    toAmino: (message: _17.MsgRemoveRepositoryCollaborator) => _17.MsgRemoveRepositoryCollaboratorAmino;
                    fromAmino: (object: _17.MsgRemoveRepositoryCollaboratorAmino) => _17.MsgRemoveRepositoryCollaborator;
                };
                "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateRepositoryLabel) => _17.MsgCreateRepositoryLabelAmino;
                    fromAmino: (object: _17.MsgCreateRepositoryLabelAmino) => _17.MsgCreateRepositoryLabel;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateRepositoryLabel) => _17.MsgUpdateRepositoryLabelAmino;
                    fromAmino: (object: _17.MsgUpdateRepositoryLabelAmino) => _17.MsgUpdateRepositoryLabel;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteRepositoryLabel) => _17.MsgDeleteRepositoryLabelAmino;
                    fromAmino: (object: _17.MsgDeleteRepositoryLabelAmino) => _17.MsgDeleteRepositoryLabel;
                };
                "/gitopia.gitopia.gitopia.MsgSetDefaultBranch": {
                    aminoType: string;
                    toAmino: (message: _17.MsgSetDefaultBranch) => _17.MsgSetDefaultBranchAmino;
                    fromAmino: (object: _17.MsgSetDefaultBranchAmino) => _17.MsgSetDefaultBranch;
                };
                "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleRepositoryForking) => _17.MsgToggleRepositoryForkingAmino;
                    fromAmino: (object: _17.MsgToggleRepositoryForkingAmino) => _17.MsgToggleRepositoryForking;
                };
                "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup": {
                    aminoType: string;
                    toAmino: (message: _17.MsgToggleArweaveBackup) => _17.MsgToggleArweaveBackupAmino;
                    fromAmino: (object: _17.MsgToggleArweaveBackupAmino) => _17.MsgToggleArweaveBackup;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteRepository": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteRepository) => _17.MsgDeleteRepositoryAmino;
                    fromAmino: (object: _17.MsgDeleteRepositoryAmino) => _17.MsgDeleteRepository;
                };
                "/gitopia.gitopia.gitopia.MsgCreateUser": {
                    aminoType: string;
                    toAmino: (message: _17.MsgCreateUser) => _17.MsgCreateUserAmino;
                    fromAmino: (object: _17.MsgCreateUserAmino) => _17.MsgCreateUser;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateUserUsername": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateUserUsername) => _17.MsgUpdateUserUsernameAmino;
                    fromAmino: (object: _17.MsgUpdateUserUsernameAmino) => _17.MsgUpdateUserUsername;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateUserName": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateUserName) => _17.MsgUpdateUserNameAmino;
                    fromAmino: (object: _17.MsgUpdateUserNameAmino) => _17.MsgUpdateUserName;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateUserBio": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateUserBio) => _17.MsgUpdateUserBioAmino;
                    fromAmino: (object: _17.MsgUpdateUserBioAmino) => _17.MsgUpdateUserBio;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateUserAvatar) => _17.MsgUpdateUserAvatarAmino;
                    fromAmino: (object: _17.MsgUpdateUserAvatarAmino) => _17.MsgUpdateUserAvatar;
                };
                "/gitopia.gitopia.gitopia.MsgDeleteUser": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDeleteUser) => _17.MsgDeleteUserAmino;
                    fromAmino: (object: _17.MsgDeleteUserAmino) => _17.MsgDeleteUser;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateRepositoryBackupRef) => _17.MsgUpdateRepositoryBackupRefAmino;
                    fromAmino: (object: _17.MsgUpdateRepositoryBackupRefAmino) => _17.MsgUpdateRepositoryBackupRef;
                };
                "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef": {
                    aminoType: string;
                    toAmino: (message: _17.MsgAddRepositoryBackupRef) => _17.MsgAddRepositoryBackupRefAmino;
                    fromAmino: (object: _17.MsgAddRepositoryBackupRefAmino) => _17.MsgAddRepositoryBackupRef;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateUserPinnedRepositories) => _17.MsgUpdateUserPinnedRepositoriesAmino;
                    fromAmino: (object: _17.MsgUpdateUserPinnedRepositoriesAmino) => _17.MsgUpdateUserPinnedRepositories;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateDaoPinnedRepositories) => _17.MsgUpdateDaoPinnedRepositoriesAmino;
                    fromAmino: (object: _17.MsgUpdateDaoPinnedRepositoriesAmino) => _17.MsgUpdateDaoPinnedRepositories;
                };
                "/gitopia.gitopia.gitopia.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _17.MsgUpdateParams) => _17.MsgUpdateParamsAmino;
                    fromAmino: (object: _17.MsgUpdateParamsAmino) => _17.MsgUpdateParams;
                };
                "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives": {
                    aminoType: string;
                    toAmino: (message: _17.MsgDistributePlatformIncentives) => _17.MsgDistributePlatformIncentivesAmino;
                    fromAmino: (object: _17.MsgDistributePlatformIncentivesAmino) => _17.MsgDistributePlatformIncentives;
                };
            };
            ownerTypeFromJSON(object: any): _19.OwnerType;
            ownerTypeToJSON(object: _19.OwnerType): string;
            OwnerType: typeof _19.OwnerType;
            OwnerTypeSDKType: typeof _19.OwnerType;
            OwnerTypeAmino: typeof _19.OwnerType;
            Whois: {
                typeUrl: string;
                encode(message: _19.Whois, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _19.Whois;
                fromPartial(object: Partial<_19.Whois>): _19.Whois;
                fromAmino(object: _19.WhoisAmino): _19.Whois;
                toAmino(message: _19.Whois): _19.WhoisAmino;
                fromAminoMsg(object: _19.WhoisAminoMsg): _19.Whois;
                fromProtoMsg(message: _19.WhoisProtoMsg): _19.Whois;
                toProto(message: _19.Whois): Uint8Array;
                toProtoMsg(message: _19.Whois): _19.WhoisProtoMsg;
            };
            User: {
                typeUrl: string;
                encode(message: _18.User, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.User;
                fromPartial(object: Partial<_18.User>): _18.User;
                fromAmino(object: _18.UserAmino): _18.User;
                toAmino(message: _18.User): _18.UserAmino;
                fromAminoMsg(object: _18.UserAminoMsg): _18.User;
                fromProtoMsg(message: _18.UserProtoMsg): _18.User;
                toProto(message: _18.User): Uint8Array;
                toProtoMsg(message: _18.User): _18.UserProtoMsg;
            };
            UserDao: {
                typeUrl: string;
                encode(message: _18.UserDao, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _18.UserDao;
                fromPartial(object: Partial<_18.UserDao>): _18.UserDao;
                fromAmino(object: _18.UserDaoAmino): _18.UserDao;
                toAmino(message: _18.UserDao): _18.UserDaoAmino;
                fromAminoMsg(object: _18.UserDaoAminoMsg): _18.UserDao;
                fromProtoMsg(message: _18.UserDaoProtoMsg): _18.UserDao;
                toProto(message: _18.UserDao): Uint8Array;
                toProtoMsg(message: _18.UserDao): _18.UserDaoProtoMsg;
            };
            providerPermissionFromJSON(object: any): _17.ProviderPermission;
            providerPermissionToJSON(object: _17.ProviderPermission): string;
            ProviderPermission: typeof _17.ProviderPermission;
            ProviderPermissionSDKType: typeof _17.ProviderPermission;
            ProviderPermissionAmino: typeof _17.ProviderPermission;
            MsgExercise: {
                typeUrl: string;
                encode(message: _17.MsgExercise, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgExercise;
                fromPartial(object: Partial<_17.MsgExercise>): _17.MsgExercise;
                fromAmino(object: _17.MsgExerciseAmino): _17.MsgExercise;
                toAmino(message: _17.MsgExercise): _17.MsgExerciseAmino;
                fromAminoMsg(object: _17.MsgExerciseAminoMsg): _17.MsgExercise;
                fromProtoMsg(message: _17.MsgExerciseProtoMsg): _17.MsgExercise;
                toProto(message: _17.MsgExercise): Uint8Array;
                toProtoMsg(message: _17.MsgExercise): _17.MsgExerciseProtoMsg;
            };
            MsgExerciseResponse: {
                typeUrl: string;
                encode(_: _17.MsgExerciseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgExerciseResponse;
                fromPartial(_: Partial<_17.MsgExerciseResponse>): _17.MsgExerciseResponse;
                fromAmino(_: _17.MsgExerciseResponseAmino): _17.MsgExerciseResponse;
                toAmino(_: _17.MsgExerciseResponse): _17.MsgExerciseResponseAmino;
                fromAminoMsg(object: _17.MsgExerciseResponseAminoMsg): _17.MsgExerciseResponse;
                fromProtoMsg(message: _17.MsgExerciseResponseProtoMsg): _17.MsgExerciseResponse;
                toProto(message: _17.MsgExerciseResponse): Uint8Array;
                toProtoMsg(message: _17.MsgExerciseResponse): _17.MsgExerciseResponseProtoMsg;
            };
            MsgToggleForcePush: {
                typeUrl: string;
                encode(message: _17.MsgToggleForcePush, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleForcePush;
                fromPartial(object: Partial<_17.MsgToggleForcePush>): _17.MsgToggleForcePush;
                fromAmino(object: _17.MsgToggleForcePushAmino): _17.MsgToggleForcePush;
                toAmino(message: _17.MsgToggleForcePush): _17.MsgToggleForcePushAmino;
                fromAminoMsg(object: _17.MsgToggleForcePushAminoMsg): _17.MsgToggleForcePush;
                fromProtoMsg(message: _17.MsgToggleForcePushProtoMsg): _17.MsgToggleForcePush;
                toProto(message: _17.MsgToggleForcePush): Uint8Array;
                toProtoMsg(message: _17.MsgToggleForcePush): _17.MsgToggleForcePushProtoMsg;
            };
            MsgToggleForcePushResponse: {
                typeUrl: string;
                encode(_: _17.MsgToggleForcePushResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgToggleForcePushResponse;
                fromPartial(_: Partial<_17.MsgToggleForcePushResponse>): _17.MsgToggleForcePushResponse;
                fromAmino(_: _17.MsgToggleForcePushResponseAmino): _17.MsgToggleForcePushResponse;
                toAmino(_: _17.MsgToggleForcePushResponse): _17.MsgToggleForcePushResponseAmino;
                fromAminoMsg(object: _17.MsgToggleForcePushResponseAminoMsg): _17.MsgToggleForcePushResponse;
                fromProtoMsg(message: _17.MsgToggleForcePushResponseProtoMsg): _17.MsgToggleForcePushResponse;
                toProto(message: _17.MsgToggleForcePushResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleForcePushResponse): _17.MsgToggleForcePushResponseProtoMsg;
            };
            MsgRevokeProviderPermission: {
                typeUrl: string;
                encode(message: _17.MsgRevokeProviderPermission, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRevokeProviderPermission;
                fromPartial(object: Partial<_17.MsgRevokeProviderPermission>): _17.MsgRevokeProviderPermission;
                fromAmino(object: _17.MsgRevokeProviderPermissionAmino): _17.MsgRevokeProviderPermission;
                toAmino(message: _17.MsgRevokeProviderPermission): _17.MsgRevokeProviderPermissionAmino;
                fromAminoMsg(object: _17.MsgRevokeProviderPermissionAminoMsg): _17.MsgRevokeProviderPermission;
                fromProtoMsg(message: _17.MsgRevokeProviderPermissionProtoMsg): _17.MsgRevokeProviderPermission;
                toProto(message: _17.MsgRevokeProviderPermission): Uint8Array;
                toProtoMsg(message: _17.MsgRevokeProviderPermission): _17.MsgRevokeProviderPermissionProtoMsg;
            };
            MsgRevokeProviderPermissionResponse: {
                typeUrl: string;
                encode(_: _17.MsgRevokeProviderPermissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRevokeProviderPermissionResponse;
                fromPartial(_: Partial<_17.MsgRevokeProviderPermissionResponse>): _17.MsgRevokeProviderPermissionResponse;
                fromAmino(_: _17.MsgRevokeProviderPermissionResponseAmino): _17.MsgRevokeProviderPermissionResponse;
                toAmino(_: _17.MsgRevokeProviderPermissionResponse): _17.MsgRevokeProviderPermissionResponseAmino;
                fromAminoMsg(object: _17.MsgRevokeProviderPermissionResponseAminoMsg): _17.MsgRevokeProviderPermissionResponse;
                fromProtoMsg(message: _17.MsgRevokeProviderPermissionResponseProtoMsg): _17.MsgRevokeProviderPermissionResponse;
                toProto(message: _17.MsgRevokeProviderPermissionResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRevokeProviderPermissionResponse): _17.MsgRevokeProviderPermissionResponseProtoMsg;
            };
            MsgAuthorizeProvider: {
                typeUrl: string;
                encode(message: _17.MsgAuthorizeProvider, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAuthorizeProvider;
                fromPartial(object: Partial<_17.MsgAuthorizeProvider>): _17.MsgAuthorizeProvider;
                fromAmino(object: _17.MsgAuthorizeProviderAmino): _17.MsgAuthorizeProvider;
                toAmino(message: _17.MsgAuthorizeProvider): _17.MsgAuthorizeProviderAmino;
                fromAminoMsg(object: _17.MsgAuthorizeProviderAminoMsg): _17.MsgAuthorizeProvider;
                fromProtoMsg(message: _17.MsgAuthorizeProviderProtoMsg): _17.MsgAuthorizeProvider;
                toProto(message: _17.MsgAuthorizeProvider): Uint8Array;
                toProtoMsg(message: _17.MsgAuthorizeProvider): _17.MsgAuthorizeProviderProtoMsg;
            };
            MsgAuthorizeProviderResponse: {
                typeUrl: string;
                encode(_: _17.MsgAuthorizeProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAuthorizeProviderResponse;
                fromPartial(_: Partial<_17.MsgAuthorizeProviderResponse>): _17.MsgAuthorizeProviderResponse;
                fromAmino(_: _17.MsgAuthorizeProviderResponseAmino): _17.MsgAuthorizeProviderResponse;
                toAmino(_: _17.MsgAuthorizeProviderResponse): _17.MsgAuthorizeProviderResponseAmino;
                fromAminoMsg(object: _17.MsgAuthorizeProviderResponseAminoMsg): _17.MsgAuthorizeProviderResponse;
                fromProtoMsg(message: _17.MsgAuthorizeProviderResponseProtoMsg): _17.MsgAuthorizeProviderResponse;
                toProto(message: _17.MsgAuthorizeProviderResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAuthorizeProviderResponse): _17.MsgAuthorizeProviderResponseProtoMsg;
            };
            MsgCreateTask: {
                typeUrl: string;
                encode(message: _17.MsgCreateTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateTask;
                fromPartial(object: Partial<_17.MsgCreateTask>): _17.MsgCreateTask;
                fromAmino(object: _17.MsgCreateTaskAmino): _17.MsgCreateTask;
                toAmino(message: _17.MsgCreateTask): _17.MsgCreateTaskAmino;
                fromAminoMsg(object: _17.MsgCreateTaskAminoMsg): _17.MsgCreateTask;
                fromProtoMsg(message: _17.MsgCreateTaskProtoMsg): _17.MsgCreateTask;
                toProto(message: _17.MsgCreateTask): Uint8Array;
                toProtoMsg(message: _17.MsgCreateTask): _17.MsgCreateTaskProtoMsg;
            };
            MsgCreateTaskResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateTaskResponse;
                fromPartial(object: Partial<_17.MsgCreateTaskResponse>): _17.MsgCreateTaskResponse;
                fromAmino(object: _17.MsgCreateTaskResponseAmino): _17.MsgCreateTaskResponse;
                toAmino(message: _17.MsgCreateTaskResponse): _17.MsgCreateTaskResponseAmino;
                fromAminoMsg(object: _17.MsgCreateTaskResponseAminoMsg): _17.MsgCreateTaskResponse;
                fromProtoMsg(message: _17.MsgCreateTaskResponseProtoMsg): _17.MsgCreateTaskResponse;
                toProto(message: _17.MsgCreateTaskResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateTaskResponse): _17.MsgCreateTaskResponseProtoMsg;
            };
            MsgUpdateTask: {
                typeUrl: string;
                encode(message: _17.MsgUpdateTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateTask;
                fromPartial(object: Partial<_17.MsgUpdateTask>): _17.MsgUpdateTask;
                fromAmino(object: _17.MsgUpdateTaskAmino): _17.MsgUpdateTask;
                toAmino(message: _17.MsgUpdateTask): _17.MsgUpdateTaskAmino;
                fromAminoMsg(object: _17.MsgUpdateTaskAminoMsg): _17.MsgUpdateTask;
                fromProtoMsg(message: _17.MsgUpdateTaskProtoMsg): _17.MsgUpdateTask;
                toProto(message: _17.MsgUpdateTask): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateTask): _17.MsgUpdateTaskProtoMsg;
            };
            MsgUpdateTaskResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateTaskResponse;
                fromPartial(_: Partial<_17.MsgUpdateTaskResponse>): _17.MsgUpdateTaskResponse;
                fromAmino(_: _17.MsgUpdateTaskResponseAmino): _17.MsgUpdateTaskResponse;
                toAmino(_: _17.MsgUpdateTaskResponse): _17.MsgUpdateTaskResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateTaskResponseAminoMsg): _17.MsgUpdateTaskResponse;
                fromProtoMsg(message: _17.MsgUpdateTaskResponseProtoMsg): _17.MsgUpdateTaskResponse;
                toProto(message: _17.MsgUpdateTaskResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateTaskResponse): _17.MsgUpdateTaskResponseProtoMsg;
            };
            MsgDeleteTask: {
                typeUrl: string;
                encode(message: _17.MsgDeleteTask, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteTask;
                fromPartial(object: Partial<_17.MsgDeleteTask>): _17.MsgDeleteTask;
                fromAmino(object: _17.MsgDeleteTaskAmino): _17.MsgDeleteTask;
                toAmino(message: _17.MsgDeleteTask): _17.MsgDeleteTaskAmino;
                fromAminoMsg(object: _17.MsgDeleteTaskAminoMsg): _17.MsgDeleteTask;
                fromProtoMsg(message: _17.MsgDeleteTaskProtoMsg): _17.MsgDeleteTask;
                toProto(message: _17.MsgDeleteTask): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteTask): _17.MsgDeleteTaskProtoMsg;
            };
            MsgUpdateRepositoryBackupRef: {
                typeUrl: string;
                encode(message: _17.MsgUpdateRepositoryBackupRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateRepositoryBackupRef;
                fromPartial(object: Partial<_17.MsgUpdateRepositoryBackupRef>): _17.MsgUpdateRepositoryBackupRef;
                fromAmino(object: _17.MsgUpdateRepositoryBackupRefAmino): _17.MsgUpdateRepositoryBackupRef;
                toAmino(message: _17.MsgUpdateRepositoryBackupRef): _17.MsgUpdateRepositoryBackupRefAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryBackupRefAminoMsg): _17.MsgUpdateRepositoryBackupRef;
                fromProtoMsg(message: _17.MsgUpdateRepositoryBackupRefProtoMsg): _17.MsgUpdateRepositoryBackupRef;
                toProto(message: _17.MsgUpdateRepositoryBackupRef): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryBackupRef): _17.MsgUpdateRepositoryBackupRefProtoMsg;
            };
            MsgUpdateRepositoryBackupRefResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateRepositoryBackupRefResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateRepositoryBackupRefResponse;
                fromPartial(_: Partial<_17.MsgUpdateRepositoryBackupRefResponse>): _17.MsgUpdateRepositoryBackupRefResponse;
                fromAmino(_: _17.MsgUpdateRepositoryBackupRefResponseAmino): _17.MsgUpdateRepositoryBackupRefResponse;
                toAmino(_: _17.MsgUpdateRepositoryBackupRefResponse): _17.MsgUpdateRepositoryBackupRefResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryBackupRefResponseAminoMsg): _17.MsgUpdateRepositoryBackupRefResponse;
                fromProtoMsg(message: _17.MsgUpdateRepositoryBackupRefResponseProtoMsg): _17.MsgUpdateRepositoryBackupRefResponse;
                toProto(message: _17.MsgUpdateRepositoryBackupRefResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryBackupRefResponse): _17.MsgUpdateRepositoryBackupRefResponseProtoMsg;
            };
            MsgAddRepositoryBackupRef: {
                typeUrl: string;
                encode(message: _17.MsgAddRepositoryBackupRef, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddRepositoryBackupRef;
                fromPartial(object: Partial<_17.MsgAddRepositoryBackupRef>): _17.MsgAddRepositoryBackupRef;
                fromAmino(object: _17.MsgAddRepositoryBackupRefAmino): _17.MsgAddRepositoryBackupRef;
                toAmino(message: _17.MsgAddRepositoryBackupRef): _17.MsgAddRepositoryBackupRefAmino;
                fromAminoMsg(object: _17.MsgAddRepositoryBackupRefAminoMsg): _17.MsgAddRepositoryBackupRef;
                fromProtoMsg(message: _17.MsgAddRepositoryBackupRefProtoMsg): _17.MsgAddRepositoryBackupRef;
                toProto(message: _17.MsgAddRepositoryBackupRef): Uint8Array;
                toProtoMsg(message: _17.MsgAddRepositoryBackupRef): _17.MsgAddRepositoryBackupRefProtoMsg;
            };
            MsgAddRepositoryBackupRefResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddRepositoryBackupRefResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddRepositoryBackupRefResponse;
                fromPartial(_: Partial<_17.MsgAddRepositoryBackupRefResponse>): _17.MsgAddRepositoryBackupRefResponse;
                fromAmino(_: _17.MsgAddRepositoryBackupRefResponseAmino): _17.MsgAddRepositoryBackupRefResponse;
                toAmino(_: _17.MsgAddRepositoryBackupRefResponse): _17.MsgAddRepositoryBackupRefResponseAmino;
                fromAminoMsg(object: _17.MsgAddRepositoryBackupRefResponseAminoMsg): _17.MsgAddRepositoryBackupRefResponse;
                fromProtoMsg(message: _17.MsgAddRepositoryBackupRefResponseProtoMsg): _17.MsgAddRepositoryBackupRefResponse;
                toProto(message: _17.MsgAddRepositoryBackupRefResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddRepositoryBackupRefResponse): _17.MsgAddRepositoryBackupRefResponseProtoMsg;
            };
            MsgDeleteTaskResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteTaskResponse;
                fromPartial(_: Partial<_17.MsgDeleteTaskResponse>): _17.MsgDeleteTaskResponse;
                fromAmino(_: _17.MsgDeleteTaskResponseAmino): _17.MsgDeleteTaskResponse;
                toAmino(_: _17.MsgDeleteTaskResponse): _17.MsgDeleteTaskResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteTaskResponseAminoMsg): _17.MsgDeleteTaskResponse;
                fromProtoMsg(message: _17.MsgDeleteTaskResponseProtoMsg): _17.MsgDeleteTaskResponse;
                toProto(message: _17.MsgDeleteTaskResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteTaskResponse): _17.MsgDeleteTaskResponseProtoMsg;
            };
            MsgDeleteStorageProviderResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteStorageProviderResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteStorageProviderResponse;
                fromPartial(_: Partial<_17.MsgDeleteStorageProviderResponse>): _17.MsgDeleteStorageProviderResponse;
                fromAmino(_: _17.MsgDeleteStorageProviderResponseAmino): _17.MsgDeleteStorageProviderResponse;
                toAmino(_: _17.MsgDeleteStorageProviderResponse): _17.MsgDeleteStorageProviderResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteStorageProviderResponseAminoMsg): _17.MsgDeleteStorageProviderResponse;
                fromProtoMsg(message: _17.MsgDeleteStorageProviderResponseProtoMsg): _17.MsgDeleteStorageProviderResponse;
                toProto(message: _17.MsgDeleteStorageProviderResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteStorageProviderResponse): _17.MsgDeleteStorageProviderResponseProtoMsg;
            };
            MsgSetBranch: {
                typeUrl: string;
                encode(message: _17.MsgSetBranch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetBranch;
                fromPartial(object: Partial<_17.MsgSetBranch>): _17.MsgSetBranch;
                fromAmino(object: _17.MsgSetBranchAmino): _17.MsgSetBranch;
                toAmino(message: _17.MsgSetBranch): _17.MsgSetBranchAmino;
                fromAminoMsg(object: _17.MsgSetBranchAminoMsg): _17.MsgSetBranch;
                fromProtoMsg(message: _17.MsgSetBranchProtoMsg): _17.MsgSetBranch;
                toProto(message: _17.MsgSetBranch): Uint8Array;
                toProtoMsg(message: _17.MsgSetBranch): _17.MsgSetBranchProtoMsg;
            };
            MsgSetBranch_Branch: {
                typeUrl: string;
                encode(message: _17.MsgSetBranch_Branch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetBranch_Branch;
                fromPartial(object: Partial<_17.MsgSetBranch_Branch>): _17.MsgSetBranch_Branch;
                fromAmino(object: _17.MsgSetBranch_BranchAmino): _17.MsgSetBranch_Branch;
                toAmino(message: _17.MsgSetBranch_Branch): _17.MsgSetBranch_BranchAmino;
                fromAminoMsg(object: _17.MsgSetBranch_BranchAminoMsg): _17.MsgSetBranch_Branch;
                fromProtoMsg(message: _17.MsgSetBranch_BranchProtoMsg): _17.MsgSetBranch_Branch;
                toProto(message: _17.MsgSetBranch_Branch): Uint8Array;
                toProtoMsg(message: _17.MsgSetBranch_Branch): _17.MsgSetBranch_BranchProtoMsg;
            };
            MsgSetBranchResponse: {
                typeUrl: string;
                encode(_: _17.MsgSetBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgSetBranchResponse;
                fromPartial(_: Partial<_17.MsgSetBranchResponse>): _17.MsgSetBranchResponse;
                fromAmino(_: _17.MsgSetBranchResponseAmino): _17.MsgSetBranchResponse;
                toAmino(_: _17.MsgSetBranchResponse): _17.MsgSetBranchResponseAmino;
                fromAminoMsg(object: _17.MsgSetBranchResponseAminoMsg): _17.MsgSetBranchResponse;
                fromProtoMsg(message: _17.MsgSetBranchResponseProtoMsg): _17.MsgSetBranchResponse;
                toProto(message: _17.MsgSetBranchResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSetBranchResponse): _17.MsgSetBranchResponseProtoMsg;
            };
            MsgSetDefaultBranch: {
                typeUrl: string;
                encode(message: _17.MsgSetDefaultBranch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetDefaultBranch;
                fromPartial(object: Partial<_17.MsgSetDefaultBranch>): _17.MsgSetDefaultBranch;
                fromAmino(object: _17.MsgSetDefaultBranchAmino): _17.MsgSetDefaultBranch;
                toAmino(message: _17.MsgSetDefaultBranch): _17.MsgSetDefaultBranchAmino;
                fromAminoMsg(object: _17.MsgSetDefaultBranchAminoMsg): _17.MsgSetDefaultBranch;
                fromProtoMsg(message: _17.MsgSetDefaultBranchProtoMsg): _17.MsgSetDefaultBranch;
                toProto(message: _17.MsgSetDefaultBranch): Uint8Array;
                toProtoMsg(message: _17.MsgSetDefaultBranch): _17.MsgSetDefaultBranchProtoMsg;
            };
            MsgSetDefaultBranchResponse: {
                typeUrl: string;
                encode(_: _17.MsgSetDefaultBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgSetDefaultBranchResponse;
                fromPartial(_: Partial<_17.MsgSetDefaultBranchResponse>): _17.MsgSetDefaultBranchResponse;
                fromAmino(_: _17.MsgSetDefaultBranchResponseAmino): _17.MsgSetDefaultBranchResponse;
                toAmino(_: _17.MsgSetDefaultBranchResponse): _17.MsgSetDefaultBranchResponseAmino;
                fromAminoMsg(object: _17.MsgSetDefaultBranchResponseAminoMsg): _17.MsgSetDefaultBranchResponse;
                fromProtoMsg(message: _17.MsgSetDefaultBranchResponseProtoMsg): _17.MsgSetDefaultBranchResponse;
                toProto(message: _17.MsgSetDefaultBranchResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSetDefaultBranchResponse): _17.MsgSetDefaultBranchResponseProtoMsg;
            };
            MsgMultiSetBranch: {
                typeUrl: string;
                encode(message: _17.MsgMultiSetBranch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiSetBranch;
                fromPartial(object: Partial<_17.MsgMultiSetBranch>): _17.MsgMultiSetBranch;
                fromAmino(object: _17.MsgMultiSetBranchAmino): _17.MsgMultiSetBranch;
                toAmino(message: _17.MsgMultiSetBranch): _17.MsgMultiSetBranchAmino;
                fromAminoMsg(object: _17.MsgMultiSetBranchAminoMsg): _17.MsgMultiSetBranch;
                fromProtoMsg(message: _17.MsgMultiSetBranchProtoMsg): _17.MsgMultiSetBranch;
                toProto(message: _17.MsgMultiSetBranch): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetBranch): _17.MsgMultiSetBranchProtoMsg;
            };
            MsgMultiSetBranch_Branch: {
                typeUrl: string;
                encode(message: _17.MsgMultiSetBranch_Branch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiSetBranch_Branch;
                fromPartial(object: Partial<_17.MsgMultiSetBranch_Branch>): _17.MsgMultiSetBranch_Branch;
                fromAmino(object: _17.MsgMultiSetBranch_BranchAmino): _17.MsgMultiSetBranch_Branch;
                toAmino(message: _17.MsgMultiSetBranch_Branch): _17.MsgMultiSetBranch_BranchAmino;
                fromAminoMsg(object: _17.MsgMultiSetBranch_BranchAminoMsg): _17.MsgMultiSetBranch_Branch;
                fromProtoMsg(message: _17.MsgMultiSetBranch_BranchProtoMsg): _17.MsgMultiSetBranch_Branch;
                toProto(message: _17.MsgMultiSetBranch_Branch): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetBranch_Branch): _17.MsgMultiSetBranch_BranchProtoMsg;
            };
            MsgMultiSetBranchResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiSetBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgMultiSetBranchResponse;
                fromPartial(_: Partial<_17.MsgMultiSetBranchResponse>): _17.MsgMultiSetBranchResponse;
                fromAmino(_: _17.MsgMultiSetBranchResponseAmino): _17.MsgMultiSetBranchResponse;
                toAmino(_: _17.MsgMultiSetBranchResponse): _17.MsgMultiSetBranchResponseAmino;
                fromAminoMsg(object: _17.MsgMultiSetBranchResponseAminoMsg): _17.MsgMultiSetBranchResponse;
                fromProtoMsg(message: _17.MsgMultiSetBranchResponseProtoMsg): _17.MsgMultiSetBranchResponse;
                toProto(message: _17.MsgMultiSetBranchResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetBranchResponse): _17.MsgMultiSetBranchResponseProtoMsg;
            };
            MsgDeleteBranch: {
                typeUrl: string;
                encode(message: _17.MsgDeleteBranch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteBranch;
                fromPartial(object: Partial<_17.MsgDeleteBranch>): _17.MsgDeleteBranch;
                fromAmino(object: _17.MsgDeleteBranchAmino): _17.MsgDeleteBranch;
                toAmino(message: _17.MsgDeleteBranch): _17.MsgDeleteBranchAmino;
                fromAminoMsg(object: _17.MsgDeleteBranchAminoMsg): _17.MsgDeleteBranch;
                fromProtoMsg(message: _17.MsgDeleteBranchProtoMsg): _17.MsgDeleteBranch;
                toProto(message: _17.MsgDeleteBranch): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteBranch): _17.MsgDeleteBranchProtoMsg;
            };
            MsgDeleteBranchResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteBranchResponse;
                fromPartial(_: Partial<_17.MsgDeleteBranchResponse>): _17.MsgDeleteBranchResponse;
                fromAmino(_: _17.MsgDeleteBranchResponseAmino): _17.MsgDeleteBranchResponse;
                toAmino(_: _17.MsgDeleteBranchResponse): _17.MsgDeleteBranchResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteBranchResponseAminoMsg): _17.MsgDeleteBranchResponse;
                fromProtoMsg(message: _17.MsgDeleteBranchResponseProtoMsg): _17.MsgDeleteBranchResponse;
                toProto(message: _17.MsgDeleteBranchResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteBranchResponse): _17.MsgDeleteBranchResponseProtoMsg;
            };
            MsgMultiDeleteBranch: {
                typeUrl: string;
                encode(message: _17.MsgMultiDeleteBranch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiDeleteBranch;
                fromPartial(object: Partial<_17.MsgMultiDeleteBranch>): _17.MsgMultiDeleteBranch;
                fromAmino(object: _17.MsgMultiDeleteBranchAmino): _17.MsgMultiDeleteBranch;
                toAmino(message: _17.MsgMultiDeleteBranch): _17.MsgMultiDeleteBranchAmino;
                fromAminoMsg(object: _17.MsgMultiDeleteBranchAminoMsg): _17.MsgMultiDeleteBranch;
                fromProtoMsg(message: _17.MsgMultiDeleteBranchProtoMsg): _17.MsgMultiDeleteBranch;
                toProto(message: _17.MsgMultiDeleteBranch): Uint8Array;
                toProtoMsg(message: _17.MsgMultiDeleteBranch): _17.MsgMultiDeleteBranchProtoMsg;
            };
            MsgMultiDeleteBranchResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiDeleteBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgMultiDeleteBranchResponse;
                fromPartial(_: Partial<_17.MsgMultiDeleteBranchResponse>): _17.MsgMultiDeleteBranchResponse;
                fromAmino(_: _17.MsgMultiDeleteBranchResponseAmino): _17.MsgMultiDeleteBranchResponse;
                toAmino(_: _17.MsgMultiDeleteBranchResponse): _17.MsgMultiDeleteBranchResponseAmino;
                fromAminoMsg(object: _17.MsgMultiDeleteBranchResponseAminoMsg): _17.MsgMultiDeleteBranchResponse;
                fromProtoMsg(message: _17.MsgMultiDeleteBranchResponseProtoMsg): _17.MsgMultiDeleteBranchResponse;
                toProto(message: _17.MsgMultiDeleteBranchResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiDeleteBranchResponse): _17.MsgMultiDeleteBranchResponseProtoMsg;
            };
            MsgSetTag: {
                typeUrl: string;
                encode(message: _17.MsgSetTag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetTag;
                fromPartial(object: Partial<_17.MsgSetTag>): _17.MsgSetTag;
                fromAmino(object: _17.MsgSetTagAmino): _17.MsgSetTag;
                toAmino(message: _17.MsgSetTag): _17.MsgSetTagAmino;
                fromAminoMsg(object: _17.MsgSetTagAminoMsg): _17.MsgSetTag;
                fromProtoMsg(message: _17.MsgSetTagProtoMsg): _17.MsgSetTag;
                toProto(message: _17.MsgSetTag): Uint8Array;
                toProtoMsg(message: _17.MsgSetTag): _17.MsgSetTagProtoMsg;
            };
            MsgSetTag_Tag: {
                typeUrl: string;
                encode(message: _17.MsgSetTag_Tag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetTag_Tag;
                fromPartial(object: Partial<_17.MsgSetTag_Tag>): _17.MsgSetTag_Tag;
                fromAmino(object: _17.MsgSetTag_TagAmino): _17.MsgSetTag_Tag;
                toAmino(message: _17.MsgSetTag_Tag): _17.MsgSetTag_TagAmino;
                fromAminoMsg(object: _17.MsgSetTag_TagAminoMsg): _17.MsgSetTag_Tag;
                fromProtoMsg(message: _17.MsgSetTag_TagProtoMsg): _17.MsgSetTag_Tag;
                toProto(message: _17.MsgSetTag_Tag): Uint8Array;
                toProtoMsg(message: _17.MsgSetTag_Tag): _17.MsgSetTag_TagProtoMsg;
            };
            MsgSetTagResponse: {
                typeUrl: string;
                encode(_: _17.MsgSetTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgSetTagResponse;
                fromPartial(_: Partial<_17.MsgSetTagResponse>): _17.MsgSetTagResponse;
                fromAmino(_: _17.MsgSetTagResponseAmino): _17.MsgSetTagResponse;
                toAmino(_: _17.MsgSetTagResponse): _17.MsgSetTagResponseAmino;
                fromAminoMsg(object: _17.MsgSetTagResponseAminoMsg): _17.MsgSetTagResponse;
                fromProtoMsg(message: _17.MsgSetTagResponseProtoMsg): _17.MsgSetTagResponse;
                toProto(message: _17.MsgSetTagResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSetTagResponse): _17.MsgSetTagResponseProtoMsg;
            };
            MsgMultiSetTag: {
                typeUrl: string;
                encode(message: _17.MsgMultiSetTag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiSetTag;
                fromPartial(object: Partial<_17.MsgMultiSetTag>): _17.MsgMultiSetTag;
                fromAmino(object: _17.MsgMultiSetTagAmino): _17.MsgMultiSetTag;
                toAmino(message: _17.MsgMultiSetTag): _17.MsgMultiSetTagAmino;
                fromAminoMsg(object: _17.MsgMultiSetTagAminoMsg): _17.MsgMultiSetTag;
                fromProtoMsg(message: _17.MsgMultiSetTagProtoMsg): _17.MsgMultiSetTag;
                toProto(message: _17.MsgMultiSetTag): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetTag): _17.MsgMultiSetTagProtoMsg;
            };
            MsgMultiSetTag_Tag: {
                typeUrl: string;
                encode(message: _17.MsgMultiSetTag_Tag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiSetTag_Tag;
                fromPartial(object: Partial<_17.MsgMultiSetTag_Tag>): _17.MsgMultiSetTag_Tag;
                fromAmino(object: _17.MsgMultiSetTag_TagAmino): _17.MsgMultiSetTag_Tag;
                toAmino(message: _17.MsgMultiSetTag_Tag): _17.MsgMultiSetTag_TagAmino;
                fromAminoMsg(object: _17.MsgMultiSetTag_TagAminoMsg): _17.MsgMultiSetTag_Tag;
                fromProtoMsg(message: _17.MsgMultiSetTag_TagProtoMsg): _17.MsgMultiSetTag_Tag;
                toProto(message: _17.MsgMultiSetTag_Tag): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetTag_Tag): _17.MsgMultiSetTag_TagProtoMsg;
            };
            MsgMultiSetTagResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiSetTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgMultiSetTagResponse;
                fromPartial(_: Partial<_17.MsgMultiSetTagResponse>): _17.MsgMultiSetTagResponse;
                fromAmino(_: _17.MsgMultiSetTagResponseAmino): _17.MsgMultiSetTagResponse;
                toAmino(_: _17.MsgMultiSetTagResponse): _17.MsgMultiSetTagResponseAmino;
                fromAminoMsg(object: _17.MsgMultiSetTagResponseAminoMsg): _17.MsgMultiSetTagResponse;
                fromProtoMsg(message: _17.MsgMultiSetTagResponseProtoMsg): _17.MsgMultiSetTagResponse;
                toProto(message: _17.MsgMultiSetTagResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiSetTagResponse): _17.MsgMultiSetTagResponseProtoMsg;
            };
            MsgDeleteTag: {
                typeUrl: string;
                encode(message: _17.MsgDeleteTag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteTag;
                fromPartial(object: Partial<_17.MsgDeleteTag>): _17.MsgDeleteTag;
                fromAmino(object: _17.MsgDeleteTagAmino): _17.MsgDeleteTag;
                toAmino(message: _17.MsgDeleteTag): _17.MsgDeleteTagAmino;
                fromAminoMsg(object: _17.MsgDeleteTagAminoMsg): _17.MsgDeleteTag;
                fromProtoMsg(message: _17.MsgDeleteTagProtoMsg): _17.MsgDeleteTag;
                toProto(message: _17.MsgDeleteTag): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteTag): _17.MsgDeleteTagProtoMsg;
            };
            MsgDeleteTagResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteTagResponse;
                fromPartial(_: Partial<_17.MsgDeleteTagResponse>): _17.MsgDeleteTagResponse;
                fromAmino(_: _17.MsgDeleteTagResponseAmino): _17.MsgDeleteTagResponse;
                toAmino(_: _17.MsgDeleteTagResponse): _17.MsgDeleteTagResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteTagResponseAminoMsg): _17.MsgDeleteTagResponse;
                fromProtoMsg(message: _17.MsgDeleteTagResponseProtoMsg): _17.MsgDeleteTagResponse;
                toProto(message: _17.MsgDeleteTagResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteTagResponse): _17.MsgDeleteTagResponseProtoMsg;
            };
            MsgMultiDeleteTag: {
                typeUrl: string;
                encode(message: _17.MsgMultiDeleteTag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgMultiDeleteTag;
                fromPartial(object: Partial<_17.MsgMultiDeleteTag>): _17.MsgMultiDeleteTag;
                fromAmino(object: _17.MsgMultiDeleteTagAmino): _17.MsgMultiDeleteTag;
                toAmino(message: _17.MsgMultiDeleteTag): _17.MsgMultiDeleteTagAmino;
                fromAminoMsg(object: _17.MsgMultiDeleteTagAminoMsg): _17.MsgMultiDeleteTag;
                fromProtoMsg(message: _17.MsgMultiDeleteTagProtoMsg): _17.MsgMultiDeleteTag;
                toProto(message: _17.MsgMultiDeleteTag): Uint8Array;
                toProtoMsg(message: _17.MsgMultiDeleteTag): _17.MsgMultiDeleteTagProtoMsg;
            };
            MsgMultiDeleteTagResponse: {
                typeUrl: string;
                encode(_: _17.MsgMultiDeleteTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgMultiDeleteTagResponse;
                fromPartial(_: Partial<_17.MsgMultiDeleteTagResponse>): _17.MsgMultiDeleteTagResponse;
                fromAmino(_: _17.MsgMultiDeleteTagResponseAmino): _17.MsgMultiDeleteTagResponse;
                toAmino(_: _17.MsgMultiDeleteTagResponse): _17.MsgMultiDeleteTagResponseAmino;
                fromAminoMsg(object: _17.MsgMultiDeleteTagResponseAminoMsg): _17.MsgMultiDeleteTagResponse;
                fromProtoMsg(message: _17.MsgMultiDeleteTagResponseProtoMsg): _17.MsgMultiDeleteTagResponse;
                toProto(message: _17.MsgMultiDeleteTagResponse): Uint8Array;
                toProtoMsg(message: _17.MsgMultiDeleteTagResponse): _17.MsgMultiDeleteTagResponseProtoMsg;
            };
            MsgAddMember: {
                typeUrl: string;
                encode(message: _17.MsgAddMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddMember;
                fromPartial(object: Partial<_17.MsgAddMember>): _17.MsgAddMember;
                fromAmino(object: _17.MsgAddMemberAmino): _17.MsgAddMember;
                toAmino(message: _17.MsgAddMember): _17.MsgAddMemberAmino;
                fromAminoMsg(object: _17.MsgAddMemberAminoMsg): _17.MsgAddMember;
                fromProtoMsg(message: _17.MsgAddMemberProtoMsg): _17.MsgAddMember;
                toProto(message: _17.MsgAddMember): Uint8Array;
                toProtoMsg(message: _17.MsgAddMember): _17.MsgAddMemberProtoMsg;
            };
            MsgAddMemberResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddMemberResponse;
                fromPartial(_: Partial<_17.MsgAddMemberResponse>): _17.MsgAddMemberResponse;
                fromAmino(_: _17.MsgAddMemberResponseAmino): _17.MsgAddMemberResponse;
                toAmino(_: _17.MsgAddMemberResponse): _17.MsgAddMemberResponseAmino;
                fromAminoMsg(object: _17.MsgAddMemberResponseAminoMsg): _17.MsgAddMemberResponse;
                fromProtoMsg(message: _17.MsgAddMemberResponseProtoMsg): _17.MsgAddMemberResponse;
                toProto(message: _17.MsgAddMemberResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddMemberResponse): _17.MsgAddMemberResponseProtoMsg;
            };
            MsgUpdateMemberRole: {
                typeUrl: string;
                encode(message: _17.MsgUpdateMemberRole, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateMemberRole;
                fromPartial(object: Partial<_17.MsgUpdateMemberRole>): _17.MsgUpdateMemberRole;
                fromAmino(object: _17.MsgUpdateMemberRoleAmino): _17.MsgUpdateMemberRole;
                toAmino(message: _17.MsgUpdateMemberRole): _17.MsgUpdateMemberRoleAmino;
                fromAminoMsg(object: _17.MsgUpdateMemberRoleAminoMsg): _17.MsgUpdateMemberRole;
                fromProtoMsg(message: _17.MsgUpdateMemberRoleProtoMsg): _17.MsgUpdateMemberRole;
                toProto(message: _17.MsgUpdateMemberRole): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateMemberRole): _17.MsgUpdateMemberRoleProtoMsg;
            };
            MsgUpdateMemberRoleResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateMemberRoleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateMemberRoleResponse;
                fromPartial(_: Partial<_17.MsgUpdateMemberRoleResponse>): _17.MsgUpdateMemberRoleResponse;
                fromAmino(_: _17.MsgUpdateMemberRoleResponseAmino): _17.MsgUpdateMemberRoleResponse;
                toAmino(_: _17.MsgUpdateMemberRoleResponse): _17.MsgUpdateMemberRoleResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateMemberRoleResponseAminoMsg): _17.MsgUpdateMemberRoleResponse;
                fromProtoMsg(message: _17.MsgUpdateMemberRoleResponseProtoMsg): _17.MsgUpdateMemberRoleResponse;
                toProto(message: _17.MsgUpdateMemberRoleResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateMemberRoleResponse): _17.MsgUpdateMemberRoleResponseProtoMsg;
            };
            MsgRemoveMember: {
                typeUrl: string;
                encode(message: _17.MsgRemoveMember, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemoveMember;
                fromPartial(object: Partial<_17.MsgRemoveMember>): _17.MsgRemoveMember;
                fromAmino(object: _17.MsgRemoveMemberAmino): _17.MsgRemoveMember;
                toAmino(message: _17.MsgRemoveMember): _17.MsgRemoveMemberAmino;
                fromAminoMsg(object: _17.MsgRemoveMemberAminoMsg): _17.MsgRemoveMember;
                fromProtoMsg(message: _17.MsgRemoveMemberProtoMsg): _17.MsgRemoveMember;
                toProto(message: _17.MsgRemoveMember): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveMember): _17.MsgRemoveMemberProtoMsg;
            };
            MsgRemoveMemberResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemoveMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemoveMemberResponse;
                fromPartial(_: Partial<_17.MsgRemoveMemberResponse>): _17.MsgRemoveMemberResponse;
                fromAmino(_: _17.MsgRemoveMemberResponseAmino): _17.MsgRemoveMemberResponse;
                toAmino(_: _17.MsgRemoveMemberResponse): _17.MsgRemoveMemberResponseAmino;
                fromAminoMsg(object: _17.MsgRemoveMemberResponseAminoMsg): _17.MsgRemoveMemberResponse;
                fromProtoMsg(message: _17.MsgRemoveMemberResponseProtoMsg): _17.MsgRemoveMemberResponse;
                toProto(message: _17.MsgRemoveMemberResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveMemberResponse): _17.MsgRemoveMemberResponseProtoMsg;
            };
            MsgCreateBounty: {
                typeUrl: string;
                encode(message: _17.MsgCreateBounty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateBounty;
                fromPartial(object: Partial<_17.MsgCreateBounty>): _17.MsgCreateBounty;
                fromAmino(object: _17.MsgCreateBountyAmino): _17.MsgCreateBounty;
                toAmino(message: _17.MsgCreateBounty): _17.MsgCreateBountyAmino;
                fromAminoMsg(object: _17.MsgCreateBountyAminoMsg): _17.MsgCreateBounty;
                fromProtoMsg(message: _17.MsgCreateBountyProtoMsg): _17.MsgCreateBounty;
                toProto(message: _17.MsgCreateBounty): Uint8Array;
                toProtoMsg(message: _17.MsgCreateBounty): _17.MsgCreateBountyProtoMsg;
            };
            MsgCreateBountyResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateBountyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateBountyResponse;
                fromPartial(object: Partial<_17.MsgCreateBountyResponse>): _17.MsgCreateBountyResponse;
                fromAmino(object: _17.MsgCreateBountyResponseAmino): _17.MsgCreateBountyResponse;
                toAmino(message: _17.MsgCreateBountyResponse): _17.MsgCreateBountyResponseAmino;
                fromAminoMsg(object: _17.MsgCreateBountyResponseAminoMsg): _17.MsgCreateBountyResponse;
                fromProtoMsg(message: _17.MsgCreateBountyResponseProtoMsg): _17.MsgCreateBountyResponse;
                toProto(message: _17.MsgCreateBountyResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateBountyResponse): _17.MsgCreateBountyResponseProtoMsg;
            };
            MsgUpdateBountyExpiry: {
                typeUrl: string;
                encode(message: _17.MsgUpdateBountyExpiry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateBountyExpiry;
                fromPartial(object: Partial<_17.MsgUpdateBountyExpiry>): _17.MsgUpdateBountyExpiry;
                fromAmino(object: _17.MsgUpdateBountyExpiryAmino): _17.MsgUpdateBountyExpiry;
                toAmino(message: _17.MsgUpdateBountyExpiry): _17.MsgUpdateBountyExpiryAmino;
                fromAminoMsg(object: _17.MsgUpdateBountyExpiryAminoMsg): _17.MsgUpdateBountyExpiry;
                fromProtoMsg(message: _17.MsgUpdateBountyExpiryProtoMsg): _17.MsgUpdateBountyExpiry;
                toProto(message: _17.MsgUpdateBountyExpiry): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateBountyExpiry): _17.MsgUpdateBountyExpiryProtoMsg;
            };
            MsgUpdateBountyExpiryResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateBountyExpiryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateBountyExpiryResponse;
                fromPartial(_: Partial<_17.MsgUpdateBountyExpiryResponse>): _17.MsgUpdateBountyExpiryResponse;
                fromAmino(_: _17.MsgUpdateBountyExpiryResponseAmino): _17.MsgUpdateBountyExpiryResponse;
                toAmino(_: _17.MsgUpdateBountyExpiryResponse): _17.MsgUpdateBountyExpiryResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateBountyExpiryResponseAminoMsg): _17.MsgUpdateBountyExpiryResponse;
                fromProtoMsg(message: _17.MsgUpdateBountyExpiryResponseProtoMsg): _17.MsgUpdateBountyExpiryResponse;
                toProto(message: _17.MsgUpdateBountyExpiryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateBountyExpiryResponse): _17.MsgUpdateBountyExpiryResponseProtoMsg;
            };
            MsgCloseBounty: {
                typeUrl: string;
                encode(message: _17.MsgCloseBounty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCloseBounty;
                fromPartial(object: Partial<_17.MsgCloseBounty>): _17.MsgCloseBounty;
                fromAmino(object: _17.MsgCloseBountyAmino): _17.MsgCloseBounty;
                toAmino(message: _17.MsgCloseBounty): _17.MsgCloseBountyAmino;
                fromAminoMsg(object: _17.MsgCloseBountyAminoMsg): _17.MsgCloseBounty;
                fromProtoMsg(message: _17.MsgCloseBountyProtoMsg): _17.MsgCloseBounty;
                toProto(message: _17.MsgCloseBounty): Uint8Array;
                toProtoMsg(message: _17.MsgCloseBounty): _17.MsgCloseBountyProtoMsg;
            };
            MsgCloseBountyResponse: {
                typeUrl: string;
                encode(_: _17.MsgCloseBountyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgCloseBountyResponse;
                fromPartial(_: Partial<_17.MsgCloseBountyResponse>): _17.MsgCloseBountyResponse;
                fromAmino(_: _17.MsgCloseBountyResponseAmino): _17.MsgCloseBountyResponse;
                toAmino(_: _17.MsgCloseBountyResponse): _17.MsgCloseBountyResponseAmino;
                fromAminoMsg(object: _17.MsgCloseBountyResponseAminoMsg): _17.MsgCloseBountyResponse;
                fromProtoMsg(message: _17.MsgCloseBountyResponseProtoMsg): _17.MsgCloseBountyResponse;
                toProto(message: _17.MsgCloseBountyResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCloseBountyResponse): _17.MsgCloseBountyResponseProtoMsg;
            };
            MsgDeleteBounty: {
                typeUrl: string;
                encode(message: _17.MsgDeleteBounty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteBounty;
                fromPartial(object: Partial<_17.MsgDeleteBounty>): _17.MsgDeleteBounty;
                fromAmino(object: _17.MsgDeleteBountyAmino): _17.MsgDeleteBounty;
                toAmino(message: _17.MsgDeleteBounty): _17.MsgDeleteBountyAmino;
                fromAminoMsg(object: _17.MsgDeleteBountyAminoMsg): _17.MsgDeleteBounty;
                fromProtoMsg(message: _17.MsgDeleteBountyProtoMsg): _17.MsgDeleteBounty;
                toProto(message: _17.MsgDeleteBounty): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteBounty): _17.MsgDeleteBountyProtoMsg;
            };
            MsgDeleteBountyResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteBountyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteBountyResponse;
                fromPartial(_: Partial<_17.MsgDeleteBountyResponse>): _17.MsgDeleteBountyResponse;
                fromAmino(_: _17.MsgDeleteBountyResponseAmino): _17.MsgDeleteBountyResponse;
                toAmino(_: _17.MsgDeleteBountyResponse): _17.MsgDeleteBountyResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteBountyResponseAminoMsg): _17.MsgDeleteBountyResponse;
                fromProtoMsg(message: _17.MsgDeleteBountyResponseProtoMsg): _17.MsgDeleteBountyResponse;
                toProto(message: _17.MsgDeleteBountyResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteBountyResponse): _17.MsgDeleteBountyResponseProtoMsg;
            };
            MsgCreateRelease: {
                typeUrl: string;
                encode(message: _17.MsgCreateRelease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateRelease;
                fromPartial(object: Partial<_17.MsgCreateRelease>): _17.MsgCreateRelease;
                fromAmino(object: _17.MsgCreateReleaseAmino): _17.MsgCreateRelease;
                toAmino(message: _17.MsgCreateRelease): _17.MsgCreateReleaseAmino;
                fromAminoMsg(object: _17.MsgCreateReleaseAminoMsg): _17.MsgCreateRelease;
                fromProtoMsg(message: _17.MsgCreateReleaseProtoMsg): _17.MsgCreateRelease;
                toProto(message: _17.MsgCreateRelease): Uint8Array;
                toProtoMsg(message: _17.MsgCreateRelease): _17.MsgCreateReleaseProtoMsg;
            };
            MsgCreateReleaseResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateReleaseResponse;
                fromPartial(object: Partial<_17.MsgCreateReleaseResponse>): _17.MsgCreateReleaseResponse;
                fromAmino(object: _17.MsgCreateReleaseResponseAmino): _17.MsgCreateReleaseResponse;
                toAmino(message: _17.MsgCreateReleaseResponse): _17.MsgCreateReleaseResponseAmino;
                fromAminoMsg(object: _17.MsgCreateReleaseResponseAminoMsg): _17.MsgCreateReleaseResponse;
                fromProtoMsg(message: _17.MsgCreateReleaseResponseProtoMsg): _17.MsgCreateReleaseResponse;
                toProto(message: _17.MsgCreateReleaseResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateReleaseResponse): _17.MsgCreateReleaseResponseProtoMsg;
            };
            MsgUpdateRelease: {
                typeUrl: string;
                encode(message: _17.MsgUpdateRelease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateRelease;
                fromPartial(object: Partial<_17.MsgUpdateRelease>): _17.MsgUpdateRelease;
                fromAmino(object: _17.MsgUpdateReleaseAmino): _17.MsgUpdateRelease;
                toAmino(message: _17.MsgUpdateRelease): _17.MsgUpdateReleaseAmino;
                fromAminoMsg(object: _17.MsgUpdateReleaseAminoMsg): _17.MsgUpdateRelease;
                fromProtoMsg(message: _17.MsgUpdateReleaseProtoMsg): _17.MsgUpdateRelease;
                toProto(message: _17.MsgUpdateRelease): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRelease): _17.MsgUpdateReleaseProtoMsg;
            };
            MsgUpdateReleaseResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateReleaseResponse;
                fromPartial(_: Partial<_17.MsgUpdateReleaseResponse>): _17.MsgUpdateReleaseResponse;
                fromAmino(_: _17.MsgUpdateReleaseResponseAmino): _17.MsgUpdateReleaseResponse;
                toAmino(_: _17.MsgUpdateReleaseResponse): _17.MsgUpdateReleaseResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateReleaseResponseAminoMsg): _17.MsgUpdateReleaseResponse;
                fromProtoMsg(message: _17.MsgUpdateReleaseResponseProtoMsg): _17.MsgUpdateReleaseResponse;
                toProto(message: _17.MsgUpdateReleaseResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateReleaseResponse): _17.MsgUpdateReleaseResponseProtoMsg;
            };
            MsgDeleteRelease: {
                typeUrl: string;
                encode(message: _17.MsgDeleteRelease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteRelease;
                fromPartial(object: Partial<_17.MsgDeleteRelease>): _17.MsgDeleteRelease;
                fromAmino(object: _17.MsgDeleteReleaseAmino): _17.MsgDeleteRelease;
                toAmino(message: _17.MsgDeleteRelease): _17.MsgDeleteReleaseAmino;
                fromAminoMsg(object: _17.MsgDeleteReleaseAminoMsg): _17.MsgDeleteRelease;
                fromProtoMsg(message: _17.MsgDeleteReleaseProtoMsg): _17.MsgDeleteRelease;
                toProto(message: _17.MsgDeleteRelease): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteRelease): _17.MsgDeleteReleaseProtoMsg;
            };
            MsgDeleteReleaseResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteReleaseResponse;
                fromPartial(_: Partial<_17.MsgDeleteReleaseResponse>): _17.MsgDeleteReleaseResponse;
                fromAmino(_: _17.MsgDeleteReleaseResponseAmino): _17.MsgDeleteReleaseResponse;
                toAmino(_: _17.MsgDeleteReleaseResponse): _17.MsgDeleteReleaseResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteReleaseResponseAminoMsg): _17.MsgDeleteReleaseResponse;
                fromProtoMsg(message: _17.MsgDeleteReleaseResponseProtoMsg): _17.MsgDeleteReleaseResponse;
                toProto(message: _17.MsgDeleteReleaseResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteReleaseResponse): _17.MsgDeleteReleaseResponseProtoMsg;
            };
            MsgCreatePullRequest: {
                typeUrl: string;
                encode(message: _17.MsgCreatePullRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreatePullRequest;
                fromPartial(object: Partial<_17.MsgCreatePullRequest>): _17.MsgCreatePullRequest;
                fromAmino(object: _17.MsgCreatePullRequestAmino): _17.MsgCreatePullRequest;
                toAmino(message: _17.MsgCreatePullRequest): _17.MsgCreatePullRequestAmino;
                fromAminoMsg(object: _17.MsgCreatePullRequestAminoMsg): _17.MsgCreatePullRequest;
                fromProtoMsg(message: _17.MsgCreatePullRequestProtoMsg): _17.MsgCreatePullRequest;
                toProto(message: _17.MsgCreatePullRequest): Uint8Array;
                toProtoMsg(message: _17.MsgCreatePullRequest): _17.MsgCreatePullRequestProtoMsg;
            };
            MsgCreatePullRequestResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreatePullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreatePullRequestResponse;
                fromPartial(object: Partial<_17.MsgCreatePullRequestResponse>): _17.MsgCreatePullRequestResponse;
                fromAmino(object: _17.MsgCreatePullRequestResponseAmino): _17.MsgCreatePullRequestResponse;
                toAmino(message: _17.MsgCreatePullRequestResponse): _17.MsgCreatePullRequestResponseAmino;
                fromAminoMsg(object: _17.MsgCreatePullRequestResponseAminoMsg): _17.MsgCreatePullRequestResponse;
                fromProtoMsg(message: _17.MsgCreatePullRequestResponseProtoMsg): _17.MsgCreatePullRequestResponse;
                toProto(message: _17.MsgCreatePullRequestResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreatePullRequestResponse): _17.MsgCreatePullRequestResponseProtoMsg;
            };
            MsgUpdatePullRequestTitle: {
                typeUrl: string;
                encode(message: _17.MsgUpdatePullRequestTitle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdatePullRequestTitle;
                fromPartial(object: Partial<_17.MsgUpdatePullRequestTitle>): _17.MsgUpdatePullRequestTitle;
                fromAmino(object: _17.MsgUpdatePullRequestTitleAmino): _17.MsgUpdatePullRequestTitle;
                toAmino(message: _17.MsgUpdatePullRequestTitle): _17.MsgUpdatePullRequestTitleAmino;
                fromAminoMsg(object: _17.MsgUpdatePullRequestTitleAminoMsg): _17.MsgUpdatePullRequestTitle;
                fromProtoMsg(message: _17.MsgUpdatePullRequestTitleProtoMsg): _17.MsgUpdatePullRequestTitle;
                toProto(message: _17.MsgUpdatePullRequestTitle): Uint8Array;
                toProtoMsg(message: _17.MsgUpdatePullRequestTitle): _17.MsgUpdatePullRequestTitleProtoMsg;
            };
            MsgUpdatePullRequestTitleResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdatePullRequestTitleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdatePullRequestTitleResponse;
                fromPartial(_: Partial<_17.MsgUpdatePullRequestTitleResponse>): _17.MsgUpdatePullRequestTitleResponse;
                fromAmino(_: _17.MsgUpdatePullRequestTitleResponseAmino): _17.MsgUpdatePullRequestTitleResponse;
                toAmino(_: _17.MsgUpdatePullRequestTitleResponse): _17.MsgUpdatePullRequestTitleResponseAmino;
                fromAminoMsg(object: _17.MsgUpdatePullRequestTitleResponseAminoMsg): _17.MsgUpdatePullRequestTitleResponse;
                fromProtoMsg(message: _17.MsgUpdatePullRequestTitleResponseProtoMsg): _17.MsgUpdatePullRequestTitleResponse;
                toProto(message: _17.MsgUpdatePullRequestTitleResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdatePullRequestTitleResponse): _17.MsgUpdatePullRequestTitleResponseProtoMsg;
            };
            MsgUpdatePullRequestDescription: {
                typeUrl: string;
                encode(message: _17.MsgUpdatePullRequestDescription, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdatePullRequestDescription;
                fromPartial(object: Partial<_17.MsgUpdatePullRequestDescription>): _17.MsgUpdatePullRequestDescription;
                fromAmino(object: _17.MsgUpdatePullRequestDescriptionAmino): _17.MsgUpdatePullRequestDescription;
                toAmino(message: _17.MsgUpdatePullRequestDescription): _17.MsgUpdatePullRequestDescriptionAmino;
                fromAminoMsg(object: _17.MsgUpdatePullRequestDescriptionAminoMsg): _17.MsgUpdatePullRequestDescription;
                fromProtoMsg(message: _17.MsgUpdatePullRequestDescriptionProtoMsg): _17.MsgUpdatePullRequestDescription;
                toProto(message: _17.MsgUpdatePullRequestDescription): Uint8Array;
                toProtoMsg(message: _17.MsgUpdatePullRequestDescription): _17.MsgUpdatePullRequestDescriptionProtoMsg;
            };
            MsgUpdatePullRequestDescriptionResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdatePullRequestDescriptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdatePullRequestDescriptionResponse;
                fromPartial(_: Partial<_17.MsgUpdatePullRequestDescriptionResponse>): _17.MsgUpdatePullRequestDescriptionResponse;
                fromAmino(_: _17.MsgUpdatePullRequestDescriptionResponseAmino): _17.MsgUpdatePullRequestDescriptionResponse;
                toAmino(_: _17.MsgUpdatePullRequestDescriptionResponse): _17.MsgUpdatePullRequestDescriptionResponseAmino;
                fromAminoMsg(object: _17.MsgUpdatePullRequestDescriptionResponseAminoMsg): _17.MsgUpdatePullRequestDescriptionResponse;
                fromProtoMsg(message: _17.MsgUpdatePullRequestDescriptionResponseProtoMsg): _17.MsgUpdatePullRequestDescriptionResponse;
                toProto(message: _17.MsgUpdatePullRequestDescriptionResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdatePullRequestDescriptionResponse): _17.MsgUpdatePullRequestDescriptionResponseProtoMsg;
            };
            MsgInvokeMergePullRequest: {
                typeUrl: string;
                encode(message: _17.MsgInvokeMergePullRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgInvokeMergePullRequest;
                fromPartial(object: Partial<_17.MsgInvokeMergePullRequest>): _17.MsgInvokeMergePullRequest;
                fromAmino(object: _17.MsgInvokeMergePullRequestAmino): _17.MsgInvokeMergePullRequest;
                toAmino(message: _17.MsgInvokeMergePullRequest): _17.MsgInvokeMergePullRequestAmino;
                fromAminoMsg(object: _17.MsgInvokeMergePullRequestAminoMsg): _17.MsgInvokeMergePullRequest;
                fromProtoMsg(message: _17.MsgInvokeMergePullRequestProtoMsg): _17.MsgInvokeMergePullRequest;
                toProto(message: _17.MsgInvokeMergePullRequest): Uint8Array;
                toProtoMsg(message: _17.MsgInvokeMergePullRequest): _17.MsgInvokeMergePullRequestProtoMsg;
            };
            MsgInvokeMergePullRequestResponse: {
                typeUrl: string;
                encode(_: _17.MsgInvokeMergePullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgInvokeMergePullRequestResponse;
                fromPartial(_: Partial<_17.MsgInvokeMergePullRequestResponse>): _17.MsgInvokeMergePullRequestResponse;
                fromAmino(_: _17.MsgInvokeMergePullRequestResponseAmino): _17.MsgInvokeMergePullRequestResponse;
                toAmino(_: _17.MsgInvokeMergePullRequestResponse): _17.MsgInvokeMergePullRequestResponseAmino;
                fromAminoMsg(object: _17.MsgInvokeMergePullRequestResponseAminoMsg): _17.MsgInvokeMergePullRequestResponse;
                fromProtoMsg(message: _17.MsgInvokeMergePullRequestResponseProtoMsg): _17.MsgInvokeMergePullRequestResponse;
                toProto(message: _17.MsgInvokeMergePullRequestResponse): Uint8Array;
                toProtoMsg(message: _17.MsgInvokeMergePullRequestResponse): _17.MsgInvokeMergePullRequestResponseProtoMsg;
            };
            MsgSetPullRequestState: {
                typeUrl: string;
                encode(message: _17.MsgSetPullRequestState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetPullRequestState;
                fromPartial(object: Partial<_17.MsgSetPullRequestState>): _17.MsgSetPullRequestState;
                fromAmino(object: _17.MsgSetPullRequestStateAmino): _17.MsgSetPullRequestState;
                toAmino(message: _17.MsgSetPullRequestState): _17.MsgSetPullRequestStateAmino;
                fromAminoMsg(object: _17.MsgSetPullRequestStateAminoMsg): _17.MsgSetPullRequestState;
                fromProtoMsg(message: _17.MsgSetPullRequestStateProtoMsg): _17.MsgSetPullRequestState;
                toProto(message: _17.MsgSetPullRequestState): Uint8Array;
                toProtoMsg(message: _17.MsgSetPullRequestState): _17.MsgSetPullRequestStateProtoMsg;
            };
            MsgSetPullRequestStateResponse: {
                typeUrl: string;
                encode(message: _17.MsgSetPullRequestStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgSetPullRequestStateResponse;
                fromPartial(object: Partial<_17.MsgSetPullRequestStateResponse>): _17.MsgSetPullRequestStateResponse;
                fromAmino(object: _17.MsgSetPullRequestStateResponseAmino): _17.MsgSetPullRequestStateResponse;
                toAmino(message: _17.MsgSetPullRequestStateResponse): _17.MsgSetPullRequestStateResponseAmino;
                fromAminoMsg(object: _17.MsgSetPullRequestStateResponseAminoMsg): _17.MsgSetPullRequestStateResponse;
                fromProtoMsg(message: _17.MsgSetPullRequestStateResponseProtoMsg): _17.MsgSetPullRequestStateResponse;
                toProto(message: _17.MsgSetPullRequestStateResponse): Uint8Array;
                toProtoMsg(message: _17.MsgSetPullRequestStateResponse): _17.MsgSetPullRequestStateResponseProtoMsg;
            };
            MsgAddPullRequestReviewers: {
                typeUrl: string;
                encode(message: _17.MsgAddPullRequestReviewers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddPullRequestReviewers;
                fromPartial(object: Partial<_17.MsgAddPullRequestReviewers>): _17.MsgAddPullRequestReviewers;
                fromAmino(object: _17.MsgAddPullRequestReviewersAmino): _17.MsgAddPullRequestReviewers;
                toAmino(message: _17.MsgAddPullRequestReviewers): _17.MsgAddPullRequestReviewersAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestReviewersAminoMsg): _17.MsgAddPullRequestReviewers;
                fromProtoMsg(message: _17.MsgAddPullRequestReviewersProtoMsg): _17.MsgAddPullRequestReviewers;
                toProto(message: _17.MsgAddPullRequestReviewers): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestReviewers): _17.MsgAddPullRequestReviewersProtoMsg;
            };
            MsgAddPullRequestReviewersResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddPullRequestReviewersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddPullRequestReviewersResponse;
                fromPartial(_: Partial<_17.MsgAddPullRequestReviewersResponse>): _17.MsgAddPullRequestReviewersResponse;
                fromAmino(_: _17.MsgAddPullRequestReviewersResponseAmino): _17.MsgAddPullRequestReviewersResponse;
                toAmino(_: _17.MsgAddPullRequestReviewersResponse): _17.MsgAddPullRequestReviewersResponseAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestReviewersResponseAminoMsg): _17.MsgAddPullRequestReviewersResponse;
                fromProtoMsg(message: _17.MsgAddPullRequestReviewersResponseProtoMsg): _17.MsgAddPullRequestReviewersResponse;
                toProto(message: _17.MsgAddPullRequestReviewersResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestReviewersResponse): _17.MsgAddPullRequestReviewersResponseProtoMsg;
            };
            MsgRemovePullRequestReviewers: {
                typeUrl: string;
                encode(message: _17.MsgRemovePullRequestReviewers, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemovePullRequestReviewers;
                fromPartial(object: Partial<_17.MsgRemovePullRequestReviewers>): _17.MsgRemovePullRequestReviewers;
                fromAmino(object: _17.MsgRemovePullRequestReviewersAmino): _17.MsgRemovePullRequestReviewers;
                toAmino(message: _17.MsgRemovePullRequestReviewers): _17.MsgRemovePullRequestReviewersAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestReviewersAminoMsg): _17.MsgRemovePullRequestReviewers;
                fromProtoMsg(message: _17.MsgRemovePullRequestReviewersProtoMsg): _17.MsgRemovePullRequestReviewers;
                toProto(message: _17.MsgRemovePullRequestReviewers): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestReviewers): _17.MsgRemovePullRequestReviewersProtoMsg;
            };
            MsgRemovePullRequestReviewersResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemovePullRequestReviewersResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemovePullRequestReviewersResponse;
                fromPartial(_: Partial<_17.MsgRemovePullRequestReviewersResponse>): _17.MsgRemovePullRequestReviewersResponse;
                fromAmino(_: _17.MsgRemovePullRequestReviewersResponseAmino): _17.MsgRemovePullRequestReviewersResponse;
                toAmino(_: _17.MsgRemovePullRequestReviewersResponse): _17.MsgRemovePullRequestReviewersResponseAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestReviewersResponseAminoMsg): _17.MsgRemovePullRequestReviewersResponse;
                fromProtoMsg(message: _17.MsgRemovePullRequestReviewersResponseProtoMsg): _17.MsgRemovePullRequestReviewersResponse;
                toProto(message: _17.MsgRemovePullRequestReviewersResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestReviewersResponse): _17.MsgRemovePullRequestReviewersResponseProtoMsg;
            };
            MsgAddPullRequestAssignees: {
                typeUrl: string;
                encode(message: _17.MsgAddPullRequestAssignees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddPullRequestAssignees;
                fromPartial(object: Partial<_17.MsgAddPullRequestAssignees>): _17.MsgAddPullRequestAssignees;
                fromAmino(object: _17.MsgAddPullRequestAssigneesAmino): _17.MsgAddPullRequestAssignees;
                toAmino(message: _17.MsgAddPullRequestAssignees): _17.MsgAddPullRequestAssigneesAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestAssigneesAminoMsg): _17.MsgAddPullRequestAssignees;
                fromProtoMsg(message: _17.MsgAddPullRequestAssigneesProtoMsg): _17.MsgAddPullRequestAssignees;
                toProto(message: _17.MsgAddPullRequestAssignees): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestAssignees): _17.MsgAddPullRequestAssigneesProtoMsg;
            };
            MsgAddPullRequestAssigneesResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddPullRequestAssigneesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddPullRequestAssigneesResponse;
                fromPartial(_: Partial<_17.MsgAddPullRequestAssigneesResponse>): _17.MsgAddPullRequestAssigneesResponse;
                fromAmino(_: _17.MsgAddPullRequestAssigneesResponseAmino): _17.MsgAddPullRequestAssigneesResponse;
                toAmino(_: _17.MsgAddPullRequestAssigneesResponse): _17.MsgAddPullRequestAssigneesResponseAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestAssigneesResponseAminoMsg): _17.MsgAddPullRequestAssigneesResponse;
                fromProtoMsg(message: _17.MsgAddPullRequestAssigneesResponseProtoMsg): _17.MsgAddPullRequestAssigneesResponse;
                toProto(message: _17.MsgAddPullRequestAssigneesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestAssigneesResponse): _17.MsgAddPullRequestAssigneesResponseProtoMsg;
            };
            MsgRemovePullRequestAssignees: {
                typeUrl: string;
                encode(message: _17.MsgRemovePullRequestAssignees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemovePullRequestAssignees;
                fromPartial(object: Partial<_17.MsgRemovePullRequestAssignees>): _17.MsgRemovePullRequestAssignees;
                fromAmino(object: _17.MsgRemovePullRequestAssigneesAmino): _17.MsgRemovePullRequestAssignees;
                toAmino(message: _17.MsgRemovePullRequestAssignees): _17.MsgRemovePullRequestAssigneesAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestAssigneesAminoMsg): _17.MsgRemovePullRequestAssignees;
                fromProtoMsg(message: _17.MsgRemovePullRequestAssigneesProtoMsg): _17.MsgRemovePullRequestAssignees;
                toProto(message: _17.MsgRemovePullRequestAssignees): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestAssignees): _17.MsgRemovePullRequestAssigneesProtoMsg;
            };
            MsgRemovePullRequestAssigneesResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemovePullRequestAssigneesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemovePullRequestAssigneesResponse;
                fromPartial(_: Partial<_17.MsgRemovePullRequestAssigneesResponse>): _17.MsgRemovePullRequestAssigneesResponse;
                fromAmino(_: _17.MsgRemovePullRequestAssigneesResponseAmino): _17.MsgRemovePullRequestAssigneesResponse;
                toAmino(_: _17.MsgRemovePullRequestAssigneesResponse): _17.MsgRemovePullRequestAssigneesResponseAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestAssigneesResponseAminoMsg): _17.MsgRemovePullRequestAssigneesResponse;
                fromProtoMsg(message: _17.MsgRemovePullRequestAssigneesResponseProtoMsg): _17.MsgRemovePullRequestAssigneesResponse;
                toProto(message: _17.MsgRemovePullRequestAssigneesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestAssigneesResponse): _17.MsgRemovePullRequestAssigneesResponseProtoMsg;
            };
            MsgLinkPullRequestIssueByIid: {
                typeUrl: string;
                encode(message: _17.MsgLinkPullRequestIssueByIid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgLinkPullRequestIssueByIid;
                fromPartial(object: Partial<_17.MsgLinkPullRequestIssueByIid>): _17.MsgLinkPullRequestIssueByIid;
                fromAmino(object: _17.MsgLinkPullRequestIssueByIidAmino): _17.MsgLinkPullRequestIssueByIid;
                toAmino(message: _17.MsgLinkPullRequestIssueByIid): _17.MsgLinkPullRequestIssueByIidAmino;
                fromAminoMsg(object: _17.MsgLinkPullRequestIssueByIidAminoMsg): _17.MsgLinkPullRequestIssueByIid;
                fromProtoMsg(message: _17.MsgLinkPullRequestIssueByIidProtoMsg): _17.MsgLinkPullRequestIssueByIid;
                toProto(message: _17.MsgLinkPullRequestIssueByIid): Uint8Array;
                toProtoMsg(message: _17.MsgLinkPullRequestIssueByIid): _17.MsgLinkPullRequestIssueByIidProtoMsg;
            };
            MsgLinkPullRequestIssueByIidResponse: {
                typeUrl: string;
                encode(_: _17.MsgLinkPullRequestIssueByIidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgLinkPullRequestIssueByIidResponse;
                fromPartial(_: Partial<_17.MsgLinkPullRequestIssueByIidResponse>): _17.MsgLinkPullRequestIssueByIidResponse;
                fromAmino(_: _17.MsgLinkPullRequestIssueByIidResponseAmino): _17.MsgLinkPullRequestIssueByIidResponse;
                toAmino(_: _17.MsgLinkPullRequestIssueByIidResponse): _17.MsgLinkPullRequestIssueByIidResponseAmino;
                fromAminoMsg(object: _17.MsgLinkPullRequestIssueByIidResponseAminoMsg): _17.MsgLinkPullRequestIssueByIidResponse;
                fromProtoMsg(message: _17.MsgLinkPullRequestIssueByIidResponseProtoMsg): _17.MsgLinkPullRequestIssueByIidResponse;
                toProto(message: _17.MsgLinkPullRequestIssueByIidResponse): Uint8Array;
                toProtoMsg(message: _17.MsgLinkPullRequestIssueByIidResponse): _17.MsgLinkPullRequestIssueByIidResponseProtoMsg;
            };
            MsgUnlinkPullRequestIssueByIid: {
                typeUrl: string;
                encode(message: _17.MsgUnlinkPullRequestIssueByIid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUnlinkPullRequestIssueByIid;
                fromPartial(object: Partial<_17.MsgUnlinkPullRequestIssueByIid>): _17.MsgUnlinkPullRequestIssueByIid;
                fromAmino(object: _17.MsgUnlinkPullRequestIssueByIidAmino): _17.MsgUnlinkPullRequestIssueByIid;
                toAmino(message: _17.MsgUnlinkPullRequestIssueByIid): _17.MsgUnlinkPullRequestIssueByIidAmino;
                fromAminoMsg(object: _17.MsgUnlinkPullRequestIssueByIidAminoMsg): _17.MsgUnlinkPullRequestIssueByIid;
                fromProtoMsg(message: _17.MsgUnlinkPullRequestIssueByIidProtoMsg): _17.MsgUnlinkPullRequestIssueByIid;
                toProto(message: _17.MsgUnlinkPullRequestIssueByIid): Uint8Array;
                toProtoMsg(message: _17.MsgUnlinkPullRequestIssueByIid): _17.MsgUnlinkPullRequestIssueByIidProtoMsg;
            };
            MsgUnlinkPullRequestIssueByIidResponse: {
                typeUrl: string;
                encode(_: _17.MsgUnlinkPullRequestIssueByIidResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUnlinkPullRequestIssueByIidResponse;
                fromPartial(_: Partial<_17.MsgUnlinkPullRequestIssueByIidResponse>): _17.MsgUnlinkPullRequestIssueByIidResponse;
                fromAmino(_: _17.MsgUnlinkPullRequestIssueByIidResponseAmino): _17.MsgUnlinkPullRequestIssueByIidResponse;
                toAmino(_: _17.MsgUnlinkPullRequestIssueByIidResponse): _17.MsgUnlinkPullRequestIssueByIidResponseAmino;
                fromAminoMsg(object: _17.MsgUnlinkPullRequestIssueByIidResponseAminoMsg): _17.MsgUnlinkPullRequestIssueByIidResponse;
                fromProtoMsg(message: _17.MsgUnlinkPullRequestIssueByIidResponseProtoMsg): _17.MsgUnlinkPullRequestIssueByIidResponse;
                toProto(message: _17.MsgUnlinkPullRequestIssueByIidResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUnlinkPullRequestIssueByIidResponse): _17.MsgUnlinkPullRequestIssueByIidResponseProtoMsg;
            };
            MsgAddPullRequestLabels: {
                typeUrl: string;
                encode(message: _17.MsgAddPullRequestLabels, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddPullRequestLabels;
                fromPartial(object: Partial<_17.MsgAddPullRequestLabels>): _17.MsgAddPullRequestLabels;
                fromAmino(object: _17.MsgAddPullRequestLabelsAmino): _17.MsgAddPullRequestLabels;
                toAmino(message: _17.MsgAddPullRequestLabels): _17.MsgAddPullRequestLabelsAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestLabelsAminoMsg): _17.MsgAddPullRequestLabels;
                fromProtoMsg(message: _17.MsgAddPullRequestLabelsProtoMsg): _17.MsgAddPullRequestLabels;
                toProto(message: _17.MsgAddPullRequestLabels): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestLabels): _17.MsgAddPullRequestLabelsProtoMsg;
            };
            MsgAddPullRequestLabelsResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddPullRequestLabelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddPullRequestLabelsResponse;
                fromPartial(_: Partial<_17.MsgAddPullRequestLabelsResponse>): _17.MsgAddPullRequestLabelsResponse;
                fromAmino(_: _17.MsgAddPullRequestLabelsResponseAmino): _17.MsgAddPullRequestLabelsResponse;
                toAmino(_: _17.MsgAddPullRequestLabelsResponse): _17.MsgAddPullRequestLabelsResponseAmino;
                fromAminoMsg(object: _17.MsgAddPullRequestLabelsResponseAminoMsg): _17.MsgAddPullRequestLabelsResponse;
                fromProtoMsg(message: _17.MsgAddPullRequestLabelsResponseProtoMsg): _17.MsgAddPullRequestLabelsResponse;
                toProto(message: _17.MsgAddPullRequestLabelsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddPullRequestLabelsResponse): _17.MsgAddPullRequestLabelsResponseProtoMsg;
            };
            MsgRemovePullRequestLabels: {
                typeUrl: string;
                encode(message: _17.MsgRemovePullRequestLabels, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemovePullRequestLabels;
                fromPartial(object: Partial<_17.MsgRemovePullRequestLabels>): _17.MsgRemovePullRequestLabels;
                fromAmino(object: _17.MsgRemovePullRequestLabelsAmino): _17.MsgRemovePullRequestLabels;
                toAmino(message: _17.MsgRemovePullRequestLabels): _17.MsgRemovePullRequestLabelsAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestLabelsAminoMsg): _17.MsgRemovePullRequestLabels;
                fromProtoMsg(message: _17.MsgRemovePullRequestLabelsProtoMsg): _17.MsgRemovePullRequestLabels;
                toProto(message: _17.MsgRemovePullRequestLabels): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestLabels): _17.MsgRemovePullRequestLabelsProtoMsg;
            };
            MsgRemovePullRequestLabelsResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemovePullRequestLabelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemovePullRequestLabelsResponse;
                fromPartial(_: Partial<_17.MsgRemovePullRequestLabelsResponse>): _17.MsgRemovePullRequestLabelsResponse;
                fromAmino(_: _17.MsgRemovePullRequestLabelsResponseAmino): _17.MsgRemovePullRequestLabelsResponse;
                toAmino(_: _17.MsgRemovePullRequestLabelsResponse): _17.MsgRemovePullRequestLabelsResponseAmino;
                fromAminoMsg(object: _17.MsgRemovePullRequestLabelsResponseAminoMsg): _17.MsgRemovePullRequestLabelsResponse;
                fromProtoMsg(message: _17.MsgRemovePullRequestLabelsResponseProtoMsg): _17.MsgRemovePullRequestLabelsResponse;
                toProto(message: _17.MsgRemovePullRequestLabelsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemovePullRequestLabelsResponse): _17.MsgRemovePullRequestLabelsResponseProtoMsg;
            };
            MsgDeletePullRequest: {
                typeUrl: string;
                encode(message: _17.MsgDeletePullRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeletePullRequest;
                fromPartial(object: Partial<_17.MsgDeletePullRequest>): _17.MsgDeletePullRequest;
                fromAmino(object: _17.MsgDeletePullRequestAmino): _17.MsgDeletePullRequest;
                toAmino(message: _17.MsgDeletePullRequest): _17.MsgDeletePullRequestAmino;
                fromAminoMsg(object: _17.MsgDeletePullRequestAminoMsg): _17.MsgDeletePullRequest;
                fromProtoMsg(message: _17.MsgDeletePullRequestProtoMsg): _17.MsgDeletePullRequest;
                toProto(message: _17.MsgDeletePullRequest): Uint8Array;
                toProtoMsg(message: _17.MsgDeletePullRequest): _17.MsgDeletePullRequestProtoMsg;
            };
            MsgDeletePullRequestResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeletePullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeletePullRequestResponse;
                fromPartial(_: Partial<_17.MsgDeletePullRequestResponse>): _17.MsgDeletePullRequestResponse;
                fromAmino(_: _17.MsgDeletePullRequestResponseAmino): _17.MsgDeletePullRequestResponse;
                toAmino(_: _17.MsgDeletePullRequestResponse): _17.MsgDeletePullRequestResponseAmino;
                fromAminoMsg(object: _17.MsgDeletePullRequestResponseAminoMsg): _17.MsgDeletePullRequestResponse;
                fromProtoMsg(message: _17.MsgDeletePullRequestResponseProtoMsg): _17.MsgDeletePullRequestResponse;
                toProto(message: _17.MsgDeletePullRequestResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeletePullRequestResponse): _17.MsgDeletePullRequestResponseProtoMsg;
            };
            MsgCreateDao: {
                typeUrl: string;
                encode(message: _17.MsgCreateDao, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateDao;
                fromPartial(object: Partial<_17.MsgCreateDao>): _17.MsgCreateDao;
                fromAmino(object: _17.MsgCreateDaoAmino): _17.MsgCreateDao;
                toAmino(message: _17.MsgCreateDao): _17.MsgCreateDaoAmino;
                fromAminoMsg(object: _17.MsgCreateDaoAminoMsg): _17.MsgCreateDao;
                fromProtoMsg(message: _17.MsgCreateDaoProtoMsg): _17.MsgCreateDao;
                toProto(message: _17.MsgCreateDao): Uint8Array;
                toProtoMsg(message: _17.MsgCreateDao): _17.MsgCreateDaoProtoMsg;
            };
            MsgCreateDaoResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateDaoResponse;
                fromPartial(object: Partial<_17.MsgCreateDaoResponse>): _17.MsgCreateDaoResponse;
                fromAmino(object: _17.MsgCreateDaoResponseAmino): _17.MsgCreateDaoResponse;
                toAmino(message: _17.MsgCreateDaoResponse): _17.MsgCreateDaoResponseAmino;
                fromAminoMsg(object: _17.MsgCreateDaoResponseAminoMsg): _17.MsgCreateDaoResponse;
                fromProtoMsg(message: _17.MsgCreateDaoResponseProtoMsg): _17.MsgCreateDaoResponse;
                toProto(message: _17.MsgCreateDaoResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateDaoResponse): _17.MsgCreateDaoResponseProtoMsg;
            };
            MsgRenameDao: {
                typeUrl: string;
                encode(message: _17.MsgRenameDao, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRenameDao;
                fromPartial(object: Partial<_17.MsgRenameDao>): _17.MsgRenameDao;
                fromAmino(object: _17.MsgRenameDaoAmino): _17.MsgRenameDao;
                toAmino(message: _17.MsgRenameDao): _17.MsgRenameDaoAmino;
                fromAminoMsg(object: _17.MsgRenameDaoAminoMsg): _17.MsgRenameDao;
                fromProtoMsg(message: _17.MsgRenameDaoProtoMsg): _17.MsgRenameDao;
                toProto(message: _17.MsgRenameDao): Uint8Array;
                toProtoMsg(message: _17.MsgRenameDao): _17.MsgRenameDaoProtoMsg;
            };
            MsgRenameDaoResponse: {
                typeUrl: string;
                encode(_: _17.MsgRenameDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRenameDaoResponse;
                fromPartial(_: Partial<_17.MsgRenameDaoResponse>): _17.MsgRenameDaoResponse;
                fromAmino(_: _17.MsgRenameDaoResponseAmino): _17.MsgRenameDaoResponse;
                toAmino(_: _17.MsgRenameDaoResponse): _17.MsgRenameDaoResponseAmino;
                fromAminoMsg(object: _17.MsgRenameDaoResponseAminoMsg): _17.MsgRenameDaoResponse;
                fromProtoMsg(message: _17.MsgRenameDaoResponseProtoMsg): _17.MsgRenameDaoResponse;
                toProto(message: _17.MsgRenameDaoResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRenameDaoResponse): _17.MsgRenameDaoResponseProtoMsg;
            };
            MsgUpdateDaoDescription: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDaoDescription, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDaoDescription;
                fromPartial(object: Partial<_17.MsgUpdateDaoDescription>): _17.MsgUpdateDaoDescription;
                fromAmino(object: _17.MsgUpdateDaoDescriptionAmino): _17.MsgUpdateDaoDescription;
                toAmino(message: _17.MsgUpdateDaoDescription): _17.MsgUpdateDaoDescriptionAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoDescriptionAminoMsg): _17.MsgUpdateDaoDescription;
                fromProtoMsg(message: _17.MsgUpdateDaoDescriptionProtoMsg): _17.MsgUpdateDaoDescription;
                toProto(message: _17.MsgUpdateDaoDescription): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoDescription): _17.MsgUpdateDaoDescriptionProtoMsg;
            };
            MsgUpdateDaoDescriptionResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDaoDescriptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDaoDescriptionResponse;
                fromPartial(_: Partial<_17.MsgUpdateDaoDescriptionResponse>): _17.MsgUpdateDaoDescriptionResponse;
                fromAmino(_: _17.MsgUpdateDaoDescriptionResponseAmino): _17.MsgUpdateDaoDescriptionResponse;
                toAmino(_: _17.MsgUpdateDaoDescriptionResponse): _17.MsgUpdateDaoDescriptionResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoDescriptionResponseAminoMsg): _17.MsgUpdateDaoDescriptionResponse;
                fromProtoMsg(message: _17.MsgUpdateDaoDescriptionResponseProtoMsg): _17.MsgUpdateDaoDescriptionResponse;
                toProto(message: _17.MsgUpdateDaoDescriptionResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoDescriptionResponse): _17.MsgUpdateDaoDescriptionResponseProtoMsg;
            };
            MsgUpdateDaoWebsite: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDaoWebsite, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDaoWebsite;
                fromPartial(object: Partial<_17.MsgUpdateDaoWebsite>): _17.MsgUpdateDaoWebsite;
                fromAmino(object: _17.MsgUpdateDaoWebsiteAmino): _17.MsgUpdateDaoWebsite;
                toAmino(message: _17.MsgUpdateDaoWebsite): _17.MsgUpdateDaoWebsiteAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoWebsiteAminoMsg): _17.MsgUpdateDaoWebsite;
                fromProtoMsg(message: _17.MsgUpdateDaoWebsiteProtoMsg): _17.MsgUpdateDaoWebsite;
                toProto(message: _17.MsgUpdateDaoWebsite): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoWebsite): _17.MsgUpdateDaoWebsiteProtoMsg;
            };
            MsgUpdateDaoWebsiteResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDaoWebsiteResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDaoWebsiteResponse;
                fromPartial(_: Partial<_17.MsgUpdateDaoWebsiteResponse>): _17.MsgUpdateDaoWebsiteResponse;
                fromAmino(_: _17.MsgUpdateDaoWebsiteResponseAmino): _17.MsgUpdateDaoWebsiteResponse;
                toAmino(_: _17.MsgUpdateDaoWebsiteResponse): _17.MsgUpdateDaoWebsiteResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoWebsiteResponseAminoMsg): _17.MsgUpdateDaoWebsiteResponse;
                fromProtoMsg(message: _17.MsgUpdateDaoWebsiteResponseProtoMsg): _17.MsgUpdateDaoWebsiteResponse;
                toProto(message: _17.MsgUpdateDaoWebsiteResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoWebsiteResponse): _17.MsgUpdateDaoWebsiteResponseProtoMsg;
            };
            MsgUpdateDaoLocation: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDaoLocation, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDaoLocation;
                fromPartial(object: Partial<_17.MsgUpdateDaoLocation>): _17.MsgUpdateDaoLocation;
                fromAmino(object: _17.MsgUpdateDaoLocationAmino): _17.MsgUpdateDaoLocation;
                toAmino(message: _17.MsgUpdateDaoLocation): _17.MsgUpdateDaoLocationAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoLocationAminoMsg): _17.MsgUpdateDaoLocation;
                fromProtoMsg(message: _17.MsgUpdateDaoLocationProtoMsg): _17.MsgUpdateDaoLocation;
                toProto(message: _17.MsgUpdateDaoLocation): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoLocation): _17.MsgUpdateDaoLocationProtoMsg;
            };
            MsgUpdateDaoLocationResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDaoLocationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDaoLocationResponse;
                fromPartial(_: Partial<_17.MsgUpdateDaoLocationResponse>): _17.MsgUpdateDaoLocationResponse;
                fromAmino(_: _17.MsgUpdateDaoLocationResponseAmino): _17.MsgUpdateDaoLocationResponse;
                toAmino(_: _17.MsgUpdateDaoLocationResponse): _17.MsgUpdateDaoLocationResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoLocationResponseAminoMsg): _17.MsgUpdateDaoLocationResponse;
                fromProtoMsg(message: _17.MsgUpdateDaoLocationResponseProtoMsg): _17.MsgUpdateDaoLocationResponse;
                toProto(message: _17.MsgUpdateDaoLocationResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoLocationResponse): _17.MsgUpdateDaoLocationResponseProtoMsg;
            };
            MsgUpdateDaoAvatar: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDaoAvatar, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDaoAvatar;
                fromPartial(object: Partial<_17.MsgUpdateDaoAvatar>): _17.MsgUpdateDaoAvatar;
                fromAmino(object: _17.MsgUpdateDaoAvatarAmino): _17.MsgUpdateDaoAvatar;
                toAmino(message: _17.MsgUpdateDaoAvatar): _17.MsgUpdateDaoAvatarAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoAvatarAminoMsg): _17.MsgUpdateDaoAvatar;
                fromProtoMsg(message: _17.MsgUpdateDaoAvatarProtoMsg): _17.MsgUpdateDaoAvatar;
                toProto(message: _17.MsgUpdateDaoAvatar): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoAvatar): _17.MsgUpdateDaoAvatarProtoMsg;
            };
            MsgUpdateDaoAvatarResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDaoAvatarResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDaoAvatarResponse;
                fromPartial(_: Partial<_17.MsgUpdateDaoAvatarResponse>): _17.MsgUpdateDaoAvatarResponse;
                fromAmino(_: _17.MsgUpdateDaoAvatarResponseAmino): _17.MsgUpdateDaoAvatarResponse;
                toAmino(_: _17.MsgUpdateDaoAvatarResponse): _17.MsgUpdateDaoAvatarResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoAvatarResponseAminoMsg): _17.MsgUpdateDaoAvatarResponse;
                fromProtoMsg(message: _17.MsgUpdateDaoAvatarResponseProtoMsg): _17.MsgUpdateDaoAvatarResponse;
                toProto(message: _17.MsgUpdateDaoAvatarResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoAvatarResponse): _17.MsgUpdateDaoAvatarResponseProtoMsg;
            };
            MsgDeleteDao: {
                typeUrl: string;
                encode(message: _17.MsgDeleteDao, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteDao;
                fromPartial(object: Partial<_17.MsgDeleteDao>): _17.MsgDeleteDao;
                fromAmino(object: _17.MsgDeleteDaoAmino): _17.MsgDeleteDao;
                toAmino(message: _17.MsgDeleteDao): _17.MsgDeleteDaoAmino;
                fromAminoMsg(object: _17.MsgDeleteDaoAminoMsg): _17.MsgDeleteDao;
                fromProtoMsg(message: _17.MsgDeleteDaoProtoMsg): _17.MsgDeleteDao;
                toProto(message: _17.MsgDeleteDao): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteDao): _17.MsgDeleteDaoProtoMsg;
            };
            MsgDeleteDaoResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteDaoResponse;
                fromPartial(_: Partial<_17.MsgDeleteDaoResponse>): _17.MsgDeleteDaoResponse;
                fromAmino(_: _17.MsgDeleteDaoResponseAmino): _17.MsgDeleteDaoResponse;
                toAmino(_: _17.MsgDeleteDaoResponse): _17.MsgDeleteDaoResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteDaoResponseAminoMsg): _17.MsgDeleteDaoResponse;
                fromProtoMsg(message: _17.MsgDeleteDaoResponseProtoMsg): _17.MsgDeleteDaoResponse;
                toProto(message: _17.MsgDeleteDaoResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteDaoResponse): _17.MsgDeleteDaoResponseProtoMsg;
            };
            MsgCreateComment: {
                typeUrl: string;
                encode(message: _17.MsgCreateComment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateComment;
                fromPartial(object: Partial<_17.MsgCreateComment>): _17.MsgCreateComment;
                fromAmino(object: _17.MsgCreateCommentAmino): _17.MsgCreateComment;
                toAmino(message: _17.MsgCreateComment): _17.MsgCreateCommentAmino;
                fromAminoMsg(object: _17.MsgCreateCommentAminoMsg): _17.MsgCreateComment;
                fromProtoMsg(message: _17.MsgCreateCommentProtoMsg): _17.MsgCreateComment;
                toProto(message: _17.MsgCreateComment): Uint8Array;
                toProtoMsg(message: _17.MsgCreateComment): _17.MsgCreateCommentProtoMsg;
            };
            MsgCreateCommentResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateCommentResponse;
                fromPartial(object: Partial<_17.MsgCreateCommentResponse>): _17.MsgCreateCommentResponse;
                fromAmino(object: _17.MsgCreateCommentResponseAmino): _17.MsgCreateCommentResponse;
                toAmino(message: _17.MsgCreateCommentResponse): _17.MsgCreateCommentResponseAmino;
                fromAminoMsg(object: _17.MsgCreateCommentResponseAminoMsg): _17.MsgCreateCommentResponse;
                fromProtoMsg(message: _17.MsgCreateCommentResponseProtoMsg): _17.MsgCreateCommentResponse;
                toProto(message: _17.MsgCreateCommentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateCommentResponse): _17.MsgCreateCommentResponseProtoMsg;
            };
            MsgUpdateComment: {
                typeUrl: string;
                encode(message: _17.MsgUpdateComment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateComment;
                fromPartial(object: Partial<_17.MsgUpdateComment>): _17.MsgUpdateComment;
                fromAmino(object: _17.MsgUpdateCommentAmino): _17.MsgUpdateComment;
                toAmino(message: _17.MsgUpdateComment): _17.MsgUpdateCommentAmino;
                fromAminoMsg(object: _17.MsgUpdateCommentAminoMsg): _17.MsgUpdateComment;
                fromProtoMsg(message: _17.MsgUpdateCommentProtoMsg): _17.MsgUpdateComment;
                toProto(message: _17.MsgUpdateComment): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateComment): _17.MsgUpdateCommentProtoMsg;
            };
            MsgUpdateCommentResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateCommentResponse;
                fromPartial(_: Partial<_17.MsgUpdateCommentResponse>): _17.MsgUpdateCommentResponse;
                fromAmino(_: _17.MsgUpdateCommentResponseAmino): _17.MsgUpdateCommentResponse;
                toAmino(_: _17.MsgUpdateCommentResponse): _17.MsgUpdateCommentResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateCommentResponseAminoMsg): _17.MsgUpdateCommentResponse;
                fromProtoMsg(message: _17.MsgUpdateCommentResponseProtoMsg): _17.MsgUpdateCommentResponse;
                toProto(message: _17.MsgUpdateCommentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateCommentResponse): _17.MsgUpdateCommentResponseProtoMsg;
            };
            MsgDeleteComment: {
                typeUrl: string;
                encode(message: _17.MsgDeleteComment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteComment;
                fromPartial(object: Partial<_17.MsgDeleteComment>): _17.MsgDeleteComment;
                fromAmino(object: _17.MsgDeleteCommentAmino): _17.MsgDeleteComment;
                toAmino(message: _17.MsgDeleteComment): _17.MsgDeleteCommentAmino;
                fromAminoMsg(object: _17.MsgDeleteCommentAminoMsg): _17.MsgDeleteComment;
                fromProtoMsg(message: _17.MsgDeleteCommentProtoMsg): _17.MsgDeleteComment;
                toProto(message: _17.MsgDeleteComment): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteComment): _17.MsgDeleteCommentProtoMsg;
            };
            MsgDeleteCommentResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteCommentResponse;
                fromPartial(_: Partial<_17.MsgDeleteCommentResponse>): _17.MsgDeleteCommentResponse;
                fromAmino(_: _17.MsgDeleteCommentResponseAmino): _17.MsgDeleteCommentResponse;
                toAmino(_: _17.MsgDeleteCommentResponse): _17.MsgDeleteCommentResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteCommentResponseAminoMsg): _17.MsgDeleteCommentResponse;
                fromProtoMsg(message: _17.MsgDeleteCommentResponseProtoMsg): _17.MsgDeleteCommentResponse;
                toProto(message: _17.MsgDeleteCommentResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteCommentResponse): _17.MsgDeleteCommentResponseProtoMsg;
            };
            MsgToggleCommentResolved: {
                typeUrl: string;
                encode(message: _17.MsgToggleCommentResolved, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleCommentResolved;
                fromPartial(object: Partial<_17.MsgToggleCommentResolved>): _17.MsgToggleCommentResolved;
                fromAmino(object: _17.MsgToggleCommentResolvedAmino): _17.MsgToggleCommentResolved;
                toAmino(message: _17.MsgToggleCommentResolved): _17.MsgToggleCommentResolvedAmino;
                fromAminoMsg(object: _17.MsgToggleCommentResolvedAminoMsg): _17.MsgToggleCommentResolved;
                fromProtoMsg(message: _17.MsgToggleCommentResolvedProtoMsg): _17.MsgToggleCommentResolved;
                toProto(message: _17.MsgToggleCommentResolved): Uint8Array;
                toProtoMsg(message: _17.MsgToggleCommentResolved): _17.MsgToggleCommentResolvedProtoMsg;
            };
            MsgToggleCommentResolvedResponse: {
                typeUrl: string;
                encode(message: _17.MsgToggleCommentResolvedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleCommentResolvedResponse;
                fromPartial(object: Partial<_17.MsgToggleCommentResolvedResponse>): _17.MsgToggleCommentResolvedResponse;
                fromAmino(object: _17.MsgToggleCommentResolvedResponseAmino): _17.MsgToggleCommentResolvedResponse;
                toAmino(message: _17.MsgToggleCommentResolvedResponse): _17.MsgToggleCommentResolvedResponseAmino;
                fromAminoMsg(object: _17.MsgToggleCommentResolvedResponseAminoMsg): _17.MsgToggleCommentResolvedResponse;
                fromProtoMsg(message: _17.MsgToggleCommentResolvedResponseProtoMsg): _17.MsgToggleCommentResolvedResponse;
                toProto(message: _17.MsgToggleCommentResolvedResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleCommentResolvedResponse): _17.MsgToggleCommentResolvedResponseProtoMsg;
            };
            MsgCreateIssue: {
                typeUrl: string;
                encode(message: _17.MsgCreateIssue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateIssue;
                fromPartial(object: Partial<_17.MsgCreateIssue>): _17.MsgCreateIssue;
                fromAmino(object: _17.MsgCreateIssueAmino): _17.MsgCreateIssue;
                toAmino(message: _17.MsgCreateIssue): _17.MsgCreateIssueAmino;
                fromAminoMsg(object: _17.MsgCreateIssueAminoMsg): _17.MsgCreateIssue;
                fromProtoMsg(message: _17.MsgCreateIssueProtoMsg): _17.MsgCreateIssue;
                toProto(message: _17.MsgCreateIssue): Uint8Array;
                toProtoMsg(message: _17.MsgCreateIssue): _17.MsgCreateIssueProtoMsg;
            };
            MsgCreateIssueResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateIssueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateIssueResponse;
                fromPartial(object: Partial<_17.MsgCreateIssueResponse>): _17.MsgCreateIssueResponse;
                fromAmino(object: _17.MsgCreateIssueResponseAmino): _17.MsgCreateIssueResponse;
                toAmino(message: _17.MsgCreateIssueResponse): _17.MsgCreateIssueResponseAmino;
                fromAminoMsg(object: _17.MsgCreateIssueResponseAminoMsg): _17.MsgCreateIssueResponse;
                fromProtoMsg(message: _17.MsgCreateIssueResponseProtoMsg): _17.MsgCreateIssueResponse;
                toProto(message: _17.MsgCreateIssueResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateIssueResponse): _17.MsgCreateIssueResponseProtoMsg;
            };
            MsgUpdateIssueTitle: {
                typeUrl: string;
                encode(message: _17.MsgUpdateIssueTitle, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateIssueTitle;
                fromPartial(object: Partial<_17.MsgUpdateIssueTitle>): _17.MsgUpdateIssueTitle;
                fromAmino(object: _17.MsgUpdateIssueTitleAmino): _17.MsgUpdateIssueTitle;
                toAmino(message: _17.MsgUpdateIssueTitle): _17.MsgUpdateIssueTitleAmino;
                fromAminoMsg(object: _17.MsgUpdateIssueTitleAminoMsg): _17.MsgUpdateIssueTitle;
                fromProtoMsg(message: _17.MsgUpdateIssueTitleProtoMsg): _17.MsgUpdateIssueTitle;
                toProto(message: _17.MsgUpdateIssueTitle): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateIssueTitle): _17.MsgUpdateIssueTitleProtoMsg;
            };
            MsgUpdateIssueTitleResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateIssueTitleResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateIssueTitleResponse;
                fromPartial(_: Partial<_17.MsgUpdateIssueTitleResponse>): _17.MsgUpdateIssueTitleResponse;
                fromAmino(_: _17.MsgUpdateIssueTitleResponseAmino): _17.MsgUpdateIssueTitleResponse;
                toAmino(_: _17.MsgUpdateIssueTitleResponse): _17.MsgUpdateIssueTitleResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateIssueTitleResponseAminoMsg): _17.MsgUpdateIssueTitleResponse;
                fromProtoMsg(message: _17.MsgUpdateIssueTitleResponseProtoMsg): _17.MsgUpdateIssueTitleResponse;
                toProto(message: _17.MsgUpdateIssueTitleResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateIssueTitleResponse): _17.MsgUpdateIssueTitleResponseProtoMsg;
            };
            MsgUpdateIssueDescription: {
                typeUrl: string;
                encode(message: _17.MsgUpdateIssueDescription, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateIssueDescription;
                fromPartial(object: Partial<_17.MsgUpdateIssueDescription>): _17.MsgUpdateIssueDescription;
                fromAmino(object: _17.MsgUpdateIssueDescriptionAmino): _17.MsgUpdateIssueDescription;
                toAmino(message: _17.MsgUpdateIssueDescription): _17.MsgUpdateIssueDescriptionAmino;
                fromAminoMsg(object: _17.MsgUpdateIssueDescriptionAminoMsg): _17.MsgUpdateIssueDescription;
                fromProtoMsg(message: _17.MsgUpdateIssueDescriptionProtoMsg): _17.MsgUpdateIssueDescription;
                toProto(message: _17.MsgUpdateIssueDescription): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateIssueDescription): _17.MsgUpdateIssueDescriptionProtoMsg;
            };
            MsgUpdateIssueDescriptionResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateIssueDescriptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateIssueDescriptionResponse;
                fromPartial(_: Partial<_17.MsgUpdateIssueDescriptionResponse>): _17.MsgUpdateIssueDescriptionResponse;
                fromAmino(_: _17.MsgUpdateIssueDescriptionResponseAmino): _17.MsgUpdateIssueDescriptionResponse;
                toAmino(_: _17.MsgUpdateIssueDescriptionResponse): _17.MsgUpdateIssueDescriptionResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateIssueDescriptionResponseAminoMsg): _17.MsgUpdateIssueDescriptionResponse;
                fromProtoMsg(message: _17.MsgUpdateIssueDescriptionResponseProtoMsg): _17.MsgUpdateIssueDescriptionResponse;
                toProto(message: _17.MsgUpdateIssueDescriptionResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateIssueDescriptionResponse): _17.MsgUpdateIssueDescriptionResponseProtoMsg;
            };
            MsgToggleIssueState: {
                typeUrl: string;
                encode(message: _17.MsgToggleIssueState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleIssueState;
                fromPartial(object: Partial<_17.MsgToggleIssueState>): _17.MsgToggleIssueState;
                fromAmino(object: _17.MsgToggleIssueStateAmino): _17.MsgToggleIssueState;
                toAmino(message: _17.MsgToggleIssueState): _17.MsgToggleIssueStateAmino;
                fromAminoMsg(object: _17.MsgToggleIssueStateAminoMsg): _17.MsgToggleIssueState;
                fromProtoMsg(message: _17.MsgToggleIssueStateProtoMsg): _17.MsgToggleIssueState;
                toProto(message: _17.MsgToggleIssueState): Uint8Array;
                toProtoMsg(message: _17.MsgToggleIssueState): _17.MsgToggleIssueStateProtoMsg;
            };
            MsgToggleIssueStateResponse: {
                typeUrl: string;
                encode(message: _17.MsgToggleIssueStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleIssueStateResponse;
                fromPartial(object: Partial<_17.MsgToggleIssueStateResponse>): _17.MsgToggleIssueStateResponse;
                fromAmino(object: _17.MsgToggleIssueStateResponseAmino): _17.MsgToggleIssueStateResponse;
                toAmino(message: _17.MsgToggleIssueStateResponse): _17.MsgToggleIssueStateResponseAmino;
                fromAminoMsg(object: _17.MsgToggleIssueStateResponseAminoMsg): _17.MsgToggleIssueStateResponse;
                fromProtoMsg(message: _17.MsgToggleIssueStateResponseProtoMsg): _17.MsgToggleIssueStateResponse;
                toProto(message: _17.MsgToggleIssueStateResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleIssueStateResponse): _17.MsgToggleIssueStateResponseProtoMsg;
            };
            MsgAddIssueAssignees: {
                typeUrl: string;
                encode(message: _17.MsgAddIssueAssignees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddIssueAssignees;
                fromPartial(object: Partial<_17.MsgAddIssueAssignees>): _17.MsgAddIssueAssignees;
                fromAmino(object: _17.MsgAddIssueAssigneesAmino): _17.MsgAddIssueAssignees;
                toAmino(message: _17.MsgAddIssueAssignees): _17.MsgAddIssueAssigneesAmino;
                fromAminoMsg(object: _17.MsgAddIssueAssigneesAminoMsg): _17.MsgAddIssueAssignees;
                fromProtoMsg(message: _17.MsgAddIssueAssigneesProtoMsg): _17.MsgAddIssueAssignees;
                toProto(message: _17.MsgAddIssueAssignees): Uint8Array;
                toProtoMsg(message: _17.MsgAddIssueAssignees): _17.MsgAddIssueAssigneesProtoMsg;
            };
            MsgAddIssueAssigneesResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddIssueAssigneesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddIssueAssigneesResponse;
                fromPartial(_: Partial<_17.MsgAddIssueAssigneesResponse>): _17.MsgAddIssueAssigneesResponse;
                fromAmino(_: _17.MsgAddIssueAssigneesResponseAmino): _17.MsgAddIssueAssigneesResponse;
                toAmino(_: _17.MsgAddIssueAssigneesResponse): _17.MsgAddIssueAssigneesResponseAmino;
                fromAminoMsg(object: _17.MsgAddIssueAssigneesResponseAminoMsg): _17.MsgAddIssueAssigneesResponse;
                fromProtoMsg(message: _17.MsgAddIssueAssigneesResponseProtoMsg): _17.MsgAddIssueAssigneesResponse;
                toProto(message: _17.MsgAddIssueAssigneesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddIssueAssigneesResponse): _17.MsgAddIssueAssigneesResponseProtoMsg;
            };
            MsgRemoveIssueAssignees: {
                typeUrl: string;
                encode(message: _17.MsgRemoveIssueAssignees, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemoveIssueAssignees;
                fromPartial(object: Partial<_17.MsgRemoveIssueAssignees>): _17.MsgRemoveIssueAssignees;
                fromAmino(object: _17.MsgRemoveIssueAssigneesAmino): _17.MsgRemoveIssueAssignees;
                toAmino(message: _17.MsgRemoveIssueAssignees): _17.MsgRemoveIssueAssigneesAmino;
                fromAminoMsg(object: _17.MsgRemoveIssueAssigneesAminoMsg): _17.MsgRemoveIssueAssignees;
                fromProtoMsg(message: _17.MsgRemoveIssueAssigneesProtoMsg): _17.MsgRemoveIssueAssignees;
                toProto(message: _17.MsgRemoveIssueAssignees): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveIssueAssignees): _17.MsgRemoveIssueAssigneesProtoMsg;
            };
            MsgRemoveIssueAssigneesResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemoveIssueAssigneesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemoveIssueAssigneesResponse;
                fromPartial(_: Partial<_17.MsgRemoveIssueAssigneesResponse>): _17.MsgRemoveIssueAssigneesResponse;
                fromAmino(_: _17.MsgRemoveIssueAssigneesResponseAmino): _17.MsgRemoveIssueAssigneesResponse;
                toAmino(_: _17.MsgRemoveIssueAssigneesResponse): _17.MsgRemoveIssueAssigneesResponseAmino;
                fromAminoMsg(object: _17.MsgRemoveIssueAssigneesResponseAminoMsg): _17.MsgRemoveIssueAssigneesResponse;
                fromProtoMsg(message: _17.MsgRemoveIssueAssigneesResponseProtoMsg): _17.MsgRemoveIssueAssigneesResponse;
                toProto(message: _17.MsgRemoveIssueAssigneesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveIssueAssigneesResponse): _17.MsgRemoveIssueAssigneesResponseProtoMsg;
            };
            MsgAddIssueLabels: {
                typeUrl: string;
                encode(message: _17.MsgAddIssueLabels, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgAddIssueLabels;
                fromPartial(object: Partial<_17.MsgAddIssueLabels>): _17.MsgAddIssueLabels;
                fromAmino(object: _17.MsgAddIssueLabelsAmino): _17.MsgAddIssueLabels;
                toAmino(message: _17.MsgAddIssueLabels): _17.MsgAddIssueLabelsAmino;
                fromAminoMsg(object: _17.MsgAddIssueLabelsAminoMsg): _17.MsgAddIssueLabels;
                fromProtoMsg(message: _17.MsgAddIssueLabelsProtoMsg): _17.MsgAddIssueLabels;
                toProto(message: _17.MsgAddIssueLabels): Uint8Array;
                toProtoMsg(message: _17.MsgAddIssueLabels): _17.MsgAddIssueLabelsProtoMsg;
            };
            MsgAddIssueLabelsResponse: {
                typeUrl: string;
                encode(_: _17.MsgAddIssueLabelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgAddIssueLabelsResponse;
                fromPartial(_: Partial<_17.MsgAddIssueLabelsResponse>): _17.MsgAddIssueLabelsResponse;
                fromAmino(_: _17.MsgAddIssueLabelsResponseAmino): _17.MsgAddIssueLabelsResponse;
                toAmino(_: _17.MsgAddIssueLabelsResponse): _17.MsgAddIssueLabelsResponseAmino;
                fromAminoMsg(object: _17.MsgAddIssueLabelsResponseAminoMsg): _17.MsgAddIssueLabelsResponse;
                fromProtoMsg(message: _17.MsgAddIssueLabelsResponseProtoMsg): _17.MsgAddIssueLabelsResponse;
                toProto(message: _17.MsgAddIssueLabelsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgAddIssueLabelsResponse): _17.MsgAddIssueLabelsResponseProtoMsg;
            };
            MsgRemoveIssueLabels: {
                typeUrl: string;
                encode(message: _17.MsgRemoveIssueLabels, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemoveIssueLabels;
                fromPartial(object: Partial<_17.MsgRemoveIssueLabels>): _17.MsgRemoveIssueLabels;
                fromAmino(object: _17.MsgRemoveIssueLabelsAmino): _17.MsgRemoveIssueLabels;
                toAmino(message: _17.MsgRemoveIssueLabels): _17.MsgRemoveIssueLabelsAmino;
                fromAminoMsg(object: _17.MsgRemoveIssueLabelsAminoMsg): _17.MsgRemoveIssueLabels;
                fromProtoMsg(message: _17.MsgRemoveIssueLabelsProtoMsg): _17.MsgRemoveIssueLabels;
                toProto(message: _17.MsgRemoveIssueLabels): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveIssueLabels): _17.MsgRemoveIssueLabelsProtoMsg;
            };
            MsgRemoveIssueLabelsResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemoveIssueLabelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemoveIssueLabelsResponse;
                fromPartial(_: Partial<_17.MsgRemoveIssueLabelsResponse>): _17.MsgRemoveIssueLabelsResponse;
                fromAmino(_: _17.MsgRemoveIssueLabelsResponseAmino): _17.MsgRemoveIssueLabelsResponse;
                toAmino(_: _17.MsgRemoveIssueLabelsResponse): _17.MsgRemoveIssueLabelsResponseAmino;
                fromAminoMsg(object: _17.MsgRemoveIssueLabelsResponseAminoMsg): _17.MsgRemoveIssueLabelsResponse;
                fromProtoMsg(message: _17.MsgRemoveIssueLabelsResponseProtoMsg): _17.MsgRemoveIssueLabelsResponse;
                toProto(message: _17.MsgRemoveIssueLabelsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveIssueLabelsResponse): _17.MsgRemoveIssueLabelsResponseProtoMsg;
            };
            MsgDeleteIssue: {
                typeUrl: string;
                encode(message: _17.MsgDeleteIssue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteIssue;
                fromPartial(object: Partial<_17.MsgDeleteIssue>): _17.MsgDeleteIssue;
                fromAmino(object: _17.MsgDeleteIssueAmino): _17.MsgDeleteIssue;
                toAmino(message: _17.MsgDeleteIssue): _17.MsgDeleteIssueAmino;
                fromAminoMsg(object: _17.MsgDeleteIssueAminoMsg): _17.MsgDeleteIssue;
                fromProtoMsg(message: _17.MsgDeleteIssueProtoMsg): _17.MsgDeleteIssue;
                toProto(message: _17.MsgDeleteIssue): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteIssue): _17.MsgDeleteIssueProtoMsg;
            };
            MsgDeleteIssueResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteIssueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteIssueResponse;
                fromPartial(_: Partial<_17.MsgDeleteIssueResponse>): _17.MsgDeleteIssueResponse;
                fromAmino(_: _17.MsgDeleteIssueResponseAmino): _17.MsgDeleteIssueResponse;
                toAmino(_: _17.MsgDeleteIssueResponse): _17.MsgDeleteIssueResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteIssueResponseAminoMsg): _17.MsgDeleteIssueResponse;
                fromProtoMsg(message: _17.MsgDeleteIssueResponseProtoMsg): _17.MsgDeleteIssueResponse;
                toProto(message: _17.MsgDeleteIssueResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteIssueResponse): _17.MsgDeleteIssueResponseProtoMsg;
            };
            MsgCreateRepository: {
                typeUrl: string;
                encode(message: _17.MsgCreateRepository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateRepository;
                fromPartial(object: Partial<_17.MsgCreateRepository>): _17.MsgCreateRepository;
                fromAmino(object: _17.MsgCreateRepositoryAmino): _17.MsgCreateRepository;
                toAmino(message: _17.MsgCreateRepository): _17.MsgCreateRepositoryAmino;
                fromAminoMsg(object: _17.MsgCreateRepositoryAminoMsg): _17.MsgCreateRepository;
                fromProtoMsg(message: _17.MsgCreateRepositoryProtoMsg): _17.MsgCreateRepository;
                toProto(message: _17.MsgCreateRepository): Uint8Array;
                toProtoMsg(message: _17.MsgCreateRepository): _17.MsgCreateRepositoryProtoMsg;
            };
            MsgCreateRepositoryResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateRepositoryResponse;
                fromPartial(object: Partial<_17.MsgCreateRepositoryResponse>): _17.MsgCreateRepositoryResponse;
                fromAmino(object: _17.MsgCreateRepositoryResponseAmino): _17.MsgCreateRepositoryResponse;
                toAmino(message: _17.MsgCreateRepositoryResponse): _17.MsgCreateRepositoryResponseAmino;
                fromAminoMsg(object: _17.MsgCreateRepositoryResponseAminoMsg): _17.MsgCreateRepositoryResponse;
                fromProtoMsg(message: _17.MsgCreateRepositoryResponseProtoMsg): _17.MsgCreateRepositoryResponse;
                toProto(message: _17.MsgCreateRepositoryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateRepositoryResponse): _17.MsgCreateRepositoryResponseProtoMsg;
            };
            MsgInvokeForkRepository: {
                typeUrl: string;
                encode(message: _17.MsgInvokeForkRepository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgInvokeForkRepository;
                fromPartial(object: Partial<_17.MsgInvokeForkRepository>): _17.MsgInvokeForkRepository;
                fromAmino(object: _17.MsgInvokeForkRepositoryAmino): _17.MsgInvokeForkRepository;
                toAmino(message: _17.MsgInvokeForkRepository): _17.MsgInvokeForkRepositoryAmino;
                fromAminoMsg(object: _17.MsgInvokeForkRepositoryAminoMsg): _17.MsgInvokeForkRepository;
                fromProtoMsg(message: _17.MsgInvokeForkRepositoryProtoMsg): _17.MsgInvokeForkRepository;
                toProto(message: _17.MsgInvokeForkRepository): Uint8Array;
                toProtoMsg(message: _17.MsgInvokeForkRepository): _17.MsgInvokeForkRepositoryProtoMsg;
            };
            MsgInvokeForkRepositoryResponse: {
                typeUrl: string;
                encode(_: _17.MsgInvokeForkRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgInvokeForkRepositoryResponse;
                fromPartial(_: Partial<_17.MsgInvokeForkRepositoryResponse>): _17.MsgInvokeForkRepositoryResponse;
                fromAmino(_: _17.MsgInvokeForkRepositoryResponseAmino): _17.MsgInvokeForkRepositoryResponse;
                toAmino(_: _17.MsgInvokeForkRepositoryResponse): _17.MsgInvokeForkRepositoryResponseAmino;
                fromAminoMsg(object: _17.MsgInvokeForkRepositoryResponseAminoMsg): _17.MsgInvokeForkRepositoryResponse;
                fromProtoMsg(message: _17.MsgInvokeForkRepositoryResponseProtoMsg): _17.MsgInvokeForkRepositoryResponse;
                toProto(message: _17.MsgInvokeForkRepositoryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgInvokeForkRepositoryResponse): _17.MsgInvokeForkRepositoryResponseProtoMsg;
            };
            MsgForkRepository: {
                typeUrl: string;
                encode(message: _17.MsgForkRepository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgForkRepository;
                fromPartial(object: Partial<_17.MsgForkRepository>): _17.MsgForkRepository;
                fromAmino(object: _17.MsgForkRepositoryAmino): _17.MsgForkRepository;
                toAmino(message: _17.MsgForkRepository): _17.MsgForkRepositoryAmino;
                fromAminoMsg(object: _17.MsgForkRepositoryAminoMsg): _17.MsgForkRepository;
                fromProtoMsg(message: _17.MsgForkRepositoryProtoMsg): _17.MsgForkRepository;
                toProto(message: _17.MsgForkRepository): Uint8Array;
                toProtoMsg(message: _17.MsgForkRepository): _17.MsgForkRepositoryProtoMsg;
            };
            MsgForkRepositoryResponse: {
                typeUrl: string;
                encode(message: _17.MsgForkRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgForkRepositoryResponse;
                fromPartial(object: Partial<_17.MsgForkRepositoryResponse>): _17.MsgForkRepositoryResponse;
                fromAmino(object: _17.MsgForkRepositoryResponseAmino): _17.MsgForkRepositoryResponse;
                toAmino(message: _17.MsgForkRepositoryResponse): _17.MsgForkRepositoryResponseAmino;
                fromAminoMsg(object: _17.MsgForkRepositoryResponseAminoMsg): _17.MsgForkRepositoryResponse;
                fromProtoMsg(message: _17.MsgForkRepositoryResponseProtoMsg): _17.MsgForkRepositoryResponse;
                toProto(message: _17.MsgForkRepositoryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgForkRepositoryResponse): _17.MsgForkRepositoryResponseProtoMsg;
            };
            MsgForkRepositorySuccess: {
                typeUrl: string;
                encode(message: _17.MsgForkRepositorySuccess, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgForkRepositorySuccess;
                fromPartial(object: Partial<_17.MsgForkRepositorySuccess>): _17.MsgForkRepositorySuccess;
                fromAmino(object: _17.MsgForkRepositorySuccessAmino): _17.MsgForkRepositorySuccess;
                toAmino(message: _17.MsgForkRepositorySuccess): _17.MsgForkRepositorySuccessAmino;
                fromAminoMsg(object: _17.MsgForkRepositorySuccessAminoMsg): _17.MsgForkRepositorySuccess;
                fromProtoMsg(message: _17.MsgForkRepositorySuccessProtoMsg): _17.MsgForkRepositorySuccess;
                toProto(message: _17.MsgForkRepositorySuccess): Uint8Array;
                toProtoMsg(message: _17.MsgForkRepositorySuccess): _17.MsgForkRepositorySuccessProtoMsg;
            };
            MsgForkRepositorySuccessResponse: {
                typeUrl: string;
                encode(message: _17.MsgForkRepositorySuccessResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgForkRepositorySuccessResponse;
                fromPartial(object: Partial<_17.MsgForkRepositorySuccessResponse>): _17.MsgForkRepositorySuccessResponse;
                fromAmino(object: _17.MsgForkRepositorySuccessResponseAmino): _17.MsgForkRepositorySuccessResponse;
                toAmino(message: _17.MsgForkRepositorySuccessResponse): _17.MsgForkRepositorySuccessResponseAmino;
                fromAminoMsg(object: _17.MsgForkRepositorySuccessResponseAminoMsg): _17.MsgForkRepositorySuccessResponse;
                fromProtoMsg(message: _17.MsgForkRepositorySuccessResponseProtoMsg): _17.MsgForkRepositorySuccessResponse;
                toProto(message: _17.MsgForkRepositorySuccessResponse): Uint8Array;
                toProtoMsg(message: _17.MsgForkRepositorySuccessResponse): _17.MsgForkRepositorySuccessResponseProtoMsg;
            };
            MsgRenameRepository: {
                typeUrl: string;
                encode(message: _17.MsgRenameRepository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRenameRepository;
                fromPartial(object: Partial<_17.MsgRenameRepository>): _17.MsgRenameRepository;
                fromAmino(object: _17.MsgRenameRepositoryAmino): _17.MsgRenameRepository;
                toAmino(message: _17.MsgRenameRepository): _17.MsgRenameRepositoryAmino;
                fromAminoMsg(object: _17.MsgRenameRepositoryAminoMsg): _17.MsgRenameRepository;
                fromProtoMsg(message: _17.MsgRenameRepositoryProtoMsg): _17.MsgRenameRepository;
                toProto(message: _17.MsgRenameRepository): Uint8Array;
                toProtoMsg(message: _17.MsgRenameRepository): _17.MsgRenameRepositoryProtoMsg;
            };
            MsgRenameRepositoryResponse: {
                typeUrl: string;
                encode(_: _17.MsgRenameRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRenameRepositoryResponse;
                fromPartial(_: Partial<_17.MsgRenameRepositoryResponse>): _17.MsgRenameRepositoryResponse;
                fromAmino(_: _17.MsgRenameRepositoryResponseAmino): _17.MsgRenameRepositoryResponse;
                toAmino(_: _17.MsgRenameRepositoryResponse): _17.MsgRenameRepositoryResponseAmino;
                fromAminoMsg(object: _17.MsgRenameRepositoryResponseAminoMsg): _17.MsgRenameRepositoryResponse;
                fromProtoMsg(message: _17.MsgRenameRepositoryResponseProtoMsg): _17.MsgRenameRepositoryResponse;
                toProto(message: _17.MsgRenameRepositoryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRenameRepositoryResponse): _17.MsgRenameRepositoryResponseProtoMsg;
            };
            MsgUpdateRepositoryDescription: {
                typeUrl: string;
                encode(message: _17.MsgUpdateRepositoryDescription, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateRepositoryDescription;
                fromPartial(object: Partial<_17.MsgUpdateRepositoryDescription>): _17.MsgUpdateRepositoryDescription;
                fromAmino(object: _17.MsgUpdateRepositoryDescriptionAmino): _17.MsgUpdateRepositoryDescription;
                toAmino(message: _17.MsgUpdateRepositoryDescription): _17.MsgUpdateRepositoryDescriptionAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryDescriptionAminoMsg): _17.MsgUpdateRepositoryDescription;
                fromProtoMsg(message: _17.MsgUpdateRepositoryDescriptionProtoMsg): _17.MsgUpdateRepositoryDescription;
                toProto(message: _17.MsgUpdateRepositoryDescription): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryDescription): _17.MsgUpdateRepositoryDescriptionProtoMsg;
            };
            MsgUpdateRepositoryDescriptionResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateRepositoryDescriptionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateRepositoryDescriptionResponse;
                fromPartial(_: Partial<_17.MsgUpdateRepositoryDescriptionResponse>): _17.MsgUpdateRepositoryDescriptionResponse;
                fromAmino(_: _17.MsgUpdateRepositoryDescriptionResponseAmino): _17.MsgUpdateRepositoryDescriptionResponse;
                toAmino(_: _17.MsgUpdateRepositoryDescriptionResponse): _17.MsgUpdateRepositoryDescriptionResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryDescriptionResponseAminoMsg): _17.MsgUpdateRepositoryDescriptionResponse;
                fromProtoMsg(message: _17.MsgUpdateRepositoryDescriptionResponseProtoMsg): _17.MsgUpdateRepositoryDescriptionResponse;
                toProto(message: _17.MsgUpdateRepositoryDescriptionResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryDescriptionResponse): _17.MsgUpdateRepositoryDescriptionResponseProtoMsg;
            };
            MsgToggleRepositoryArchived: {
                typeUrl: string;
                encode(message: _17.MsgToggleRepositoryArchived, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleRepositoryArchived;
                fromPartial(object: Partial<_17.MsgToggleRepositoryArchived>): _17.MsgToggleRepositoryArchived;
                fromAmino(object: _17.MsgToggleRepositoryArchivedAmino): _17.MsgToggleRepositoryArchived;
                toAmino(message: _17.MsgToggleRepositoryArchived): _17.MsgToggleRepositoryArchivedAmino;
                fromAminoMsg(object: _17.MsgToggleRepositoryArchivedAminoMsg): _17.MsgToggleRepositoryArchived;
                fromProtoMsg(message: _17.MsgToggleRepositoryArchivedProtoMsg): _17.MsgToggleRepositoryArchived;
                toProto(message: _17.MsgToggleRepositoryArchived): Uint8Array;
                toProtoMsg(message: _17.MsgToggleRepositoryArchived): _17.MsgToggleRepositoryArchivedProtoMsg;
            };
            MsgToggleRepositoryArchivedResponse: {
                typeUrl: string;
                encode(_: _17.MsgToggleRepositoryArchivedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgToggleRepositoryArchivedResponse;
                fromPartial(_: Partial<_17.MsgToggleRepositoryArchivedResponse>): _17.MsgToggleRepositoryArchivedResponse;
                fromAmino(_: _17.MsgToggleRepositoryArchivedResponseAmino): _17.MsgToggleRepositoryArchivedResponse;
                toAmino(_: _17.MsgToggleRepositoryArchivedResponse): _17.MsgToggleRepositoryArchivedResponseAmino;
                fromAminoMsg(object: _17.MsgToggleRepositoryArchivedResponseAminoMsg): _17.MsgToggleRepositoryArchivedResponse;
                fromProtoMsg(message: _17.MsgToggleRepositoryArchivedResponseProtoMsg): _17.MsgToggleRepositoryArchivedResponse;
                toProto(message: _17.MsgToggleRepositoryArchivedResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleRepositoryArchivedResponse): _17.MsgToggleRepositoryArchivedResponseProtoMsg;
            };
            MsgChangeOwner: {
                typeUrl: string;
                encode(message: _17.MsgChangeOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgChangeOwner;
                fromPartial(object: Partial<_17.MsgChangeOwner>): _17.MsgChangeOwner;
                fromAmino(object: _17.MsgChangeOwnerAmino): _17.MsgChangeOwner;
                toAmino(message: _17.MsgChangeOwner): _17.MsgChangeOwnerAmino;
                fromAminoMsg(object: _17.MsgChangeOwnerAminoMsg): _17.MsgChangeOwner;
                fromProtoMsg(message: _17.MsgChangeOwnerProtoMsg): _17.MsgChangeOwner;
                toProto(message: _17.MsgChangeOwner): Uint8Array;
                toProtoMsg(message: _17.MsgChangeOwner): _17.MsgChangeOwnerProtoMsg;
            };
            MsgChangeOwnerResponse: {
                typeUrl: string;
                encode(_: _17.MsgChangeOwnerResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgChangeOwnerResponse;
                fromPartial(_: Partial<_17.MsgChangeOwnerResponse>): _17.MsgChangeOwnerResponse;
                fromAmino(_: _17.MsgChangeOwnerResponseAmino): _17.MsgChangeOwnerResponse;
                toAmino(_: _17.MsgChangeOwnerResponse): _17.MsgChangeOwnerResponseAmino;
                fromAminoMsg(object: _17.MsgChangeOwnerResponseAminoMsg): _17.MsgChangeOwnerResponse;
                fromProtoMsg(message: _17.MsgChangeOwnerResponseProtoMsg): _17.MsgChangeOwnerResponse;
                toProto(message: _17.MsgChangeOwnerResponse): Uint8Array;
                toProtoMsg(message: _17.MsgChangeOwnerResponse): _17.MsgChangeOwnerResponseProtoMsg;
            };
            MsgUpdateRepositoryCollaborator: {
                typeUrl: string;
                encode(message: _17.MsgUpdateRepositoryCollaborator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateRepositoryCollaborator;
                fromPartial(object: Partial<_17.MsgUpdateRepositoryCollaborator>): _17.MsgUpdateRepositoryCollaborator;
                fromAmino(object: _17.MsgUpdateRepositoryCollaboratorAmino): _17.MsgUpdateRepositoryCollaborator;
                toAmino(message: _17.MsgUpdateRepositoryCollaborator): _17.MsgUpdateRepositoryCollaboratorAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryCollaboratorAminoMsg): _17.MsgUpdateRepositoryCollaborator;
                fromProtoMsg(message: _17.MsgUpdateRepositoryCollaboratorProtoMsg): _17.MsgUpdateRepositoryCollaborator;
                toProto(message: _17.MsgUpdateRepositoryCollaborator): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryCollaborator): _17.MsgUpdateRepositoryCollaboratorProtoMsg;
            };
            MsgUpdateRepositoryCollaboratorResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateRepositoryCollaboratorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateRepositoryCollaboratorResponse;
                fromPartial(_: Partial<_17.MsgUpdateRepositoryCollaboratorResponse>): _17.MsgUpdateRepositoryCollaboratorResponse;
                fromAmino(_: _17.MsgUpdateRepositoryCollaboratorResponseAmino): _17.MsgUpdateRepositoryCollaboratorResponse;
                toAmino(_: _17.MsgUpdateRepositoryCollaboratorResponse): _17.MsgUpdateRepositoryCollaboratorResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryCollaboratorResponseAminoMsg): _17.MsgUpdateRepositoryCollaboratorResponse;
                fromProtoMsg(message: _17.MsgUpdateRepositoryCollaboratorResponseProtoMsg): _17.MsgUpdateRepositoryCollaboratorResponse;
                toProto(message: _17.MsgUpdateRepositoryCollaboratorResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryCollaboratorResponse): _17.MsgUpdateRepositoryCollaboratorResponseProtoMsg;
            };
            MsgRemoveRepositoryCollaborator: {
                typeUrl: string;
                encode(message: _17.MsgRemoveRepositoryCollaborator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgRemoveRepositoryCollaborator;
                fromPartial(object: Partial<_17.MsgRemoveRepositoryCollaborator>): _17.MsgRemoveRepositoryCollaborator;
                fromAmino(object: _17.MsgRemoveRepositoryCollaboratorAmino): _17.MsgRemoveRepositoryCollaborator;
                toAmino(message: _17.MsgRemoveRepositoryCollaborator): _17.MsgRemoveRepositoryCollaboratorAmino;
                fromAminoMsg(object: _17.MsgRemoveRepositoryCollaboratorAminoMsg): _17.MsgRemoveRepositoryCollaborator;
                fromProtoMsg(message: _17.MsgRemoveRepositoryCollaboratorProtoMsg): _17.MsgRemoveRepositoryCollaborator;
                toProto(message: _17.MsgRemoveRepositoryCollaborator): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveRepositoryCollaborator): _17.MsgRemoveRepositoryCollaboratorProtoMsg;
            };
            MsgRemoveRepositoryCollaboratorResponse: {
                typeUrl: string;
                encode(_: _17.MsgRemoveRepositoryCollaboratorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgRemoveRepositoryCollaboratorResponse;
                fromPartial(_: Partial<_17.MsgRemoveRepositoryCollaboratorResponse>): _17.MsgRemoveRepositoryCollaboratorResponse;
                fromAmino(_: _17.MsgRemoveRepositoryCollaboratorResponseAmino): _17.MsgRemoveRepositoryCollaboratorResponse;
                toAmino(_: _17.MsgRemoveRepositoryCollaboratorResponse): _17.MsgRemoveRepositoryCollaboratorResponseAmino;
                fromAminoMsg(object: _17.MsgRemoveRepositoryCollaboratorResponseAminoMsg): _17.MsgRemoveRepositoryCollaboratorResponse;
                fromProtoMsg(message: _17.MsgRemoveRepositoryCollaboratorResponseProtoMsg): _17.MsgRemoveRepositoryCollaboratorResponse;
                toProto(message: _17.MsgRemoveRepositoryCollaboratorResponse): Uint8Array;
                toProtoMsg(message: _17.MsgRemoveRepositoryCollaboratorResponse): _17.MsgRemoveRepositoryCollaboratorResponseProtoMsg;
            };
            MsgCreateRepositoryLabel: {
                typeUrl: string;
                encode(message: _17.MsgCreateRepositoryLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateRepositoryLabel;
                fromPartial(object: Partial<_17.MsgCreateRepositoryLabel>): _17.MsgCreateRepositoryLabel;
                fromAmino(object: _17.MsgCreateRepositoryLabelAmino): _17.MsgCreateRepositoryLabel;
                toAmino(message: _17.MsgCreateRepositoryLabel): _17.MsgCreateRepositoryLabelAmino;
                fromAminoMsg(object: _17.MsgCreateRepositoryLabelAminoMsg): _17.MsgCreateRepositoryLabel;
                fromProtoMsg(message: _17.MsgCreateRepositoryLabelProtoMsg): _17.MsgCreateRepositoryLabel;
                toProto(message: _17.MsgCreateRepositoryLabel): Uint8Array;
                toProtoMsg(message: _17.MsgCreateRepositoryLabel): _17.MsgCreateRepositoryLabelProtoMsg;
            };
            MsgCreateRepositoryLabelResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateRepositoryLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateRepositoryLabelResponse;
                fromPartial(object: Partial<_17.MsgCreateRepositoryLabelResponse>): _17.MsgCreateRepositoryLabelResponse;
                fromAmino(object: _17.MsgCreateRepositoryLabelResponseAmino): _17.MsgCreateRepositoryLabelResponse;
                toAmino(message: _17.MsgCreateRepositoryLabelResponse): _17.MsgCreateRepositoryLabelResponseAmino;
                fromAminoMsg(object: _17.MsgCreateRepositoryLabelResponseAminoMsg): _17.MsgCreateRepositoryLabelResponse;
                fromProtoMsg(message: _17.MsgCreateRepositoryLabelResponseProtoMsg): _17.MsgCreateRepositoryLabelResponse;
                toProto(message: _17.MsgCreateRepositoryLabelResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateRepositoryLabelResponse): _17.MsgCreateRepositoryLabelResponseProtoMsg;
            };
            MsgUpdateRepositoryLabel: {
                typeUrl: string;
                encode(message: _17.MsgUpdateRepositoryLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateRepositoryLabel;
                fromPartial(object: Partial<_17.MsgUpdateRepositoryLabel>): _17.MsgUpdateRepositoryLabel;
                fromAmino(object: _17.MsgUpdateRepositoryLabelAmino): _17.MsgUpdateRepositoryLabel;
                toAmino(message: _17.MsgUpdateRepositoryLabel): _17.MsgUpdateRepositoryLabelAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryLabelAminoMsg): _17.MsgUpdateRepositoryLabel;
                fromProtoMsg(message: _17.MsgUpdateRepositoryLabelProtoMsg): _17.MsgUpdateRepositoryLabel;
                toProto(message: _17.MsgUpdateRepositoryLabel): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryLabel): _17.MsgUpdateRepositoryLabelProtoMsg;
            };
            MsgUpdateRepositoryLabelResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateRepositoryLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateRepositoryLabelResponse;
                fromPartial(_: Partial<_17.MsgUpdateRepositoryLabelResponse>): _17.MsgUpdateRepositoryLabelResponse;
                fromAmino(_: _17.MsgUpdateRepositoryLabelResponseAmino): _17.MsgUpdateRepositoryLabelResponse;
                toAmino(_: _17.MsgUpdateRepositoryLabelResponse): _17.MsgUpdateRepositoryLabelResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateRepositoryLabelResponseAminoMsg): _17.MsgUpdateRepositoryLabelResponse;
                fromProtoMsg(message: _17.MsgUpdateRepositoryLabelResponseProtoMsg): _17.MsgUpdateRepositoryLabelResponse;
                toProto(message: _17.MsgUpdateRepositoryLabelResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateRepositoryLabelResponse): _17.MsgUpdateRepositoryLabelResponseProtoMsg;
            };
            MsgDeleteRepositoryLabel: {
                typeUrl: string;
                encode(message: _17.MsgDeleteRepositoryLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteRepositoryLabel;
                fromPartial(object: Partial<_17.MsgDeleteRepositoryLabel>): _17.MsgDeleteRepositoryLabel;
                fromAmino(object: _17.MsgDeleteRepositoryLabelAmino): _17.MsgDeleteRepositoryLabel;
                toAmino(message: _17.MsgDeleteRepositoryLabel): _17.MsgDeleteRepositoryLabelAmino;
                fromAminoMsg(object: _17.MsgDeleteRepositoryLabelAminoMsg): _17.MsgDeleteRepositoryLabel;
                fromProtoMsg(message: _17.MsgDeleteRepositoryLabelProtoMsg): _17.MsgDeleteRepositoryLabel;
                toProto(message: _17.MsgDeleteRepositoryLabel): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteRepositoryLabel): _17.MsgDeleteRepositoryLabelProtoMsg;
            };
            MsgDeleteRepositoryLabelResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteRepositoryLabelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteRepositoryLabelResponse;
                fromPartial(_: Partial<_17.MsgDeleteRepositoryLabelResponse>): _17.MsgDeleteRepositoryLabelResponse;
                fromAmino(_: _17.MsgDeleteRepositoryLabelResponseAmino): _17.MsgDeleteRepositoryLabelResponse;
                toAmino(_: _17.MsgDeleteRepositoryLabelResponse): _17.MsgDeleteRepositoryLabelResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteRepositoryLabelResponseAminoMsg): _17.MsgDeleteRepositoryLabelResponse;
                fromProtoMsg(message: _17.MsgDeleteRepositoryLabelResponseProtoMsg): _17.MsgDeleteRepositoryLabelResponse;
                toProto(message: _17.MsgDeleteRepositoryLabelResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteRepositoryLabelResponse): _17.MsgDeleteRepositoryLabelResponseProtoMsg;
            };
            MsgToggleRepositoryForking: {
                typeUrl: string;
                encode(message: _17.MsgToggleRepositoryForking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleRepositoryForking;
                fromPartial(object: Partial<_17.MsgToggleRepositoryForking>): _17.MsgToggleRepositoryForking;
                fromAmino(object: _17.MsgToggleRepositoryForkingAmino): _17.MsgToggleRepositoryForking;
                toAmino(message: _17.MsgToggleRepositoryForking): _17.MsgToggleRepositoryForkingAmino;
                fromAminoMsg(object: _17.MsgToggleRepositoryForkingAminoMsg): _17.MsgToggleRepositoryForking;
                fromProtoMsg(message: _17.MsgToggleRepositoryForkingProtoMsg): _17.MsgToggleRepositoryForking;
                toProto(message: _17.MsgToggleRepositoryForking): Uint8Array;
                toProtoMsg(message: _17.MsgToggleRepositoryForking): _17.MsgToggleRepositoryForkingProtoMsg;
            };
            MsgToggleRepositoryForkingResponse: {
                typeUrl: string;
                encode(message: _17.MsgToggleRepositoryForkingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleRepositoryForkingResponse;
                fromPartial(object: Partial<_17.MsgToggleRepositoryForkingResponse>): _17.MsgToggleRepositoryForkingResponse;
                fromAmino(object: _17.MsgToggleRepositoryForkingResponseAmino): _17.MsgToggleRepositoryForkingResponse;
                toAmino(message: _17.MsgToggleRepositoryForkingResponse): _17.MsgToggleRepositoryForkingResponseAmino;
                fromAminoMsg(object: _17.MsgToggleRepositoryForkingResponseAminoMsg): _17.MsgToggleRepositoryForkingResponse;
                fromProtoMsg(message: _17.MsgToggleRepositoryForkingResponseProtoMsg): _17.MsgToggleRepositoryForkingResponse;
                toProto(message: _17.MsgToggleRepositoryForkingResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleRepositoryForkingResponse): _17.MsgToggleRepositoryForkingResponseProtoMsg;
            };
            MsgToggleArweaveBackup: {
                typeUrl: string;
                encode(message: _17.MsgToggleArweaveBackup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleArweaveBackup;
                fromPartial(object: Partial<_17.MsgToggleArweaveBackup>): _17.MsgToggleArweaveBackup;
                fromAmino(object: _17.MsgToggleArweaveBackupAmino): _17.MsgToggleArweaveBackup;
                toAmino(message: _17.MsgToggleArweaveBackup): _17.MsgToggleArweaveBackupAmino;
                fromAminoMsg(object: _17.MsgToggleArweaveBackupAminoMsg): _17.MsgToggleArweaveBackup;
                fromProtoMsg(message: _17.MsgToggleArweaveBackupProtoMsg): _17.MsgToggleArweaveBackup;
                toProto(message: _17.MsgToggleArweaveBackup): Uint8Array;
                toProtoMsg(message: _17.MsgToggleArweaveBackup): _17.MsgToggleArweaveBackupProtoMsg;
            };
            MsgToggleArweaveBackupResponse: {
                typeUrl: string;
                encode(message: _17.MsgToggleArweaveBackupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgToggleArweaveBackupResponse;
                fromPartial(object: Partial<_17.MsgToggleArweaveBackupResponse>): _17.MsgToggleArweaveBackupResponse;
                fromAmino(object: _17.MsgToggleArweaveBackupResponseAmino): _17.MsgToggleArweaveBackupResponse;
                toAmino(message: _17.MsgToggleArweaveBackupResponse): _17.MsgToggleArweaveBackupResponseAmino;
                fromAminoMsg(object: _17.MsgToggleArweaveBackupResponseAminoMsg): _17.MsgToggleArweaveBackupResponse;
                fromProtoMsg(message: _17.MsgToggleArweaveBackupResponseProtoMsg): _17.MsgToggleArweaveBackupResponse;
                toProto(message: _17.MsgToggleArweaveBackupResponse): Uint8Array;
                toProtoMsg(message: _17.MsgToggleArweaveBackupResponse): _17.MsgToggleArweaveBackupResponseProtoMsg;
            };
            MsgDeleteRepository: {
                typeUrl: string;
                encode(message: _17.MsgDeleteRepository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteRepository;
                fromPartial(object: Partial<_17.MsgDeleteRepository>): _17.MsgDeleteRepository;
                fromAmino(object: _17.MsgDeleteRepositoryAmino): _17.MsgDeleteRepository;
                toAmino(message: _17.MsgDeleteRepository): _17.MsgDeleteRepositoryAmino;
                fromAminoMsg(object: _17.MsgDeleteRepositoryAminoMsg): _17.MsgDeleteRepository;
                fromProtoMsg(message: _17.MsgDeleteRepositoryProtoMsg): _17.MsgDeleteRepository;
                toProto(message: _17.MsgDeleteRepository): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteRepository): _17.MsgDeleteRepositoryProtoMsg;
            };
            MsgDeleteRepositoryResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteRepositoryResponse;
                fromPartial(_: Partial<_17.MsgDeleteRepositoryResponse>): _17.MsgDeleteRepositoryResponse;
                fromAmino(_: _17.MsgDeleteRepositoryResponseAmino): _17.MsgDeleteRepositoryResponse;
                toAmino(_: _17.MsgDeleteRepositoryResponse): _17.MsgDeleteRepositoryResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteRepositoryResponseAminoMsg): _17.MsgDeleteRepositoryResponse;
                fromProtoMsg(message: _17.MsgDeleteRepositoryResponseProtoMsg): _17.MsgDeleteRepositoryResponse;
                toProto(message: _17.MsgDeleteRepositoryResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteRepositoryResponse): _17.MsgDeleteRepositoryResponseProtoMsg;
            };
            MsgCreateUser: {
                typeUrl: string;
                encode(message: _17.MsgCreateUser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateUser;
                fromPartial(object: Partial<_17.MsgCreateUser>): _17.MsgCreateUser;
                fromAmino(object: _17.MsgCreateUserAmino): _17.MsgCreateUser;
                toAmino(message: _17.MsgCreateUser): _17.MsgCreateUserAmino;
                fromAminoMsg(object: _17.MsgCreateUserAminoMsg): _17.MsgCreateUser;
                fromProtoMsg(message: _17.MsgCreateUserProtoMsg): _17.MsgCreateUser;
                toProto(message: _17.MsgCreateUser): Uint8Array;
                toProtoMsg(message: _17.MsgCreateUser): _17.MsgCreateUserProtoMsg;
            };
            MsgCreateUserResponse: {
                typeUrl: string;
                encode(message: _17.MsgCreateUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgCreateUserResponse;
                fromPartial(object: Partial<_17.MsgCreateUserResponse>): _17.MsgCreateUserResponse;
                fromAmino(object: _17.MsgCreateUserResponseAmino): _17.MsgCreateUserResponse;
                toAmino(message: _17.MsgCreateUserResponse): _17.MsgCreateUserResponseAmino;
                fromAminoMsg(object: _17.MsgCreateUserResponseAminoMsg): _17.MsgCreateUserResponse;
                fromProtoMsg(message: _17.MsgCreateUserResponseProtoMsg): _17.MsgCreateUserResponse;
                toProto(message: _17.MsgCreateUserResponse): Uint8Array;
                toProtoMsg(message: _17.MsgCreateUserResponse): _17.MsgCreateUserResponseProtoMsg;
            };
            MsgUpdateUserUsername: {
                typeUrl: string;
                encode(message: _17.MsgUpdateUserUsername, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateUserUsername;
                fromPartial(object: Partial<_17.MsgUpdateUserUsername>): _17.MsgUpdateUserUsername;
                fromAmino(object: _17.MsgUpdateUserUsernameAmino): _17.MsgUpdateUserUsername;
                toAmino(message: _17.MsgUpdateUserUsername): _17.MsgUpdateUserUsernameAmino;
                fromAminoMsg(object: _17.MsgUpdateUserUsernameAminoMsg): _17.MsgUpdateUserUsername;
                fromProtoMsg(message: _17.MsgUpdateUserUsernameProtoMsg): _17.MsgUpdateUserUsername;
                toProto(message: _17.MsgUpdateUserUsername): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserUsername): _17.MsgUpdateUserUsernameProtoMsg;
            };
            MsgUpdateUserUsernameResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateUserUsernameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateUserUsernameResponse;
                fromPartial(_: Partial<_17.MsgUpdateUserUsernameResponse>): _17.MsgUpdateUserUsernameResponse;
                fromAmino(_: _17.MsgUpdateUserUsernameResponseAmino): _17.MsgUpdateUserUsernameResponse;
                toAmino(_: _17.MsgUpdateUserUsernameResponse): _17.MsgUpdateUserUsernameResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateUserUsernameResponseAminoMsg): _17.MsgUpdateUserUsernameResponse;
                fromProtoMsg(message: _17.MsgUpdateUserUsernameResponseProtoMsg): _17.MsgUpdateUserUsernameResponse;
                toProto(message: _17.MsgUpdateUserUsernameResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserUsernameResponse): _17.MsgUpdateUserUsernameResponseProtoMsg;
            };
            MsgUpdateUserName: {
                typeUrl: string;
                encode(message: _17.MsgUpdateUserName, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateUserName;
                fromPartial(object: Partial<_17.MsgUpdateUserName>): _17.MsgUpdateUserName;
                fromAmino(object: _17.MsgUpdateUserNameAmino): _17.MsgUpdateUserName;
                toAmino(message: _17.MsgUpdateUserName): _17.MsgUpdateUserNameAmino;
                fromAminoMsg(object: _17.MsgUpdateUserNameAminoMsg): _17.MsgUpdateUserName;
                fromProtoMsg(message: _17.MsgUpdateUserNameProtoMsg): _17.MsgUpdateUserName;
                toProto(message: _17.MsgUpdateUserName): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserName): _17.MsgUpdateUserNameProtoMsg;
            };
            MsgUpdateUserNameResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateUserNameResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateUserNameResponse;
                fromPartial(_: Partial<_17.MsgUpdateUserNameResponse>): _17.MsgUpdateUserNameResponse;
                fromAmino(_: _17.MsgUpdateUserNameResponseAmino): _17.MsgUpdateUserNameResponse;
                toAmino(_: _17.MsgUpdateUserNameResponse): _17.MsgUpdateUserNameResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateUserNameResponseAminoMsg): _17.MsgUpdateUserNameResponse;
                fromProtoMsg(message: _17.MsgUpdateUserNameResponseProtoMsg): _17.MsgUpdateUserNameResponse;
                toProto(message: _17.MsgUpdateUserNameResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserNameResponse): _17.MsgUpdateUserNameResponseProtoMsg;
            };
            MsgUpdateUserBio: {
                typeUrl: string;
                encode(message: _17.MsgUpdateUserBio, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateUserBio;
                fromPartial(object: Partial<_17.MsgUpdateUserBio>): _17.MsgUpdateUserBio;
                fromAmino(object: _17.MsgUpdateUserBioAmino): _17.MsgUpdateUserBio;
                toAmino(message: _17.MsgUpdateUserBio): _17.MsgUpdateUserBioAmino;
                fromAminoMsg(object: _17.MsgUpdateUserBioAminoMsg): _17.MsgUpdateUserBio;
                fromProtoMsg(message: _17.MsgUpdateUserBioProtoMsg): _17.MsgUpdateUserBio;
                toProto(message: _17.MsgUpdateUserBio): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserBio): _17.MsgUpdateUserBioProtoMsg;
            };
            MsgUpdateUserBioResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateUserBioResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateUserBioResponse;
                fromPartial(_: Partial<_17.MsgUpdateUserBioResponse>): _17.MsgUpdateUserBioResponse;
                fromAmino(_: _17.MsgUpdateUserBioResponseAmino): _17.MsgUpdateUserBioResponse;
                toAmino(_: _17.MsgUpdateUserBioResponse): _17.MsgUpdateUserBioResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateUserBioResponseAminoMsg): _17.MsgUpdateUserBioResponse;
                fromProtoMsg(message: _17.MsgUpdateUserBioResponseProtoMsg): _17.MsgUpdateUserBioResponse;
                toProto(message: _17.MsgUpdateUserBioResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserBioResponse): _17.MsgUpdateUserBioResponseProtoMsg;
            };
            MsgUpdateUserAvatar: {
                typeUrl: string;
                encode(message: _17.MsgUpdateUserAvatar, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateUserAvatar;
                fromPartial(object: Partial<_17.MsgUpdateUserAvatar>): _17.MsgUpdateUserAvatar;
                fromAmino(object: _17.MsgUpdateUserAvatarAmino): _17.MsgUpdateUserAvatar;
                toAmino(message: _17.MsgUpdateUserAvatar): _17.MsgUpdateUserAvatarAmino;
                fromAminoMsg(object: _17.MsgUpdateUserAvatarAminoMsg): _17.MsgUpdateUserAvatar;
                fromProtoMsg(message: _17.MsgUpdateUserAvatarProtoMsg): _17.MsgUpdateUserAvatar;
                toProto(message: _17.MsgUpdateUserAvatar): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserAvatar): _17.MsgUpdateUserAvatarProtoMsg;
            };
            MsgUpdateUserAvatarResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateUserAvatarResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateUserAvatarResponse;
                fromPartial(_: Partial<_17.MsgUpdateUserAvatarResponse>): _17.MsgUpdateUserAvatarResponse;
                fromAmino(_: _17.MsgUpdateUserAvatarResponseAmino): _17.MsgUpdateUserAvatarResponse;
                toAmino(_: _17.MsgUpdateUserAvatarResponse): _17.MsgUpdateUserAvatarResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateUserAvatarResponseAminoMsg): _17.MsgUpdateUserAvatarResponse;
                fromProtoMsg(message: _17.MsgUpdateUserAvatarResponseProtoMsg): _17.MsgUpdateUserAvatarResponse;
                toProto(message: _17.MsgUpdateUserAvatarResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserAvatarResponse): _17.MsgUpdateUserAvatarResponseProtoMsg;
            };
            MsgDeleteUser: {
                typeUrl: string;
                encode(message: _17.MsgDeleteUser, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDeleteUser;
                fromPartial(object: Partial<_17.MsgDeleteUser>): _17.MsgDeleteUser;
                fromAmino(object: _17.MsgDeleteUserAmino): _17.MsgDeleteUser;
                toAmino(message: _17.MsgDeleteUser): _17.MsgDeleteUserAmino;
                fromAminoMsg(object: _17.MsgDeleteUserAminoMsg): _17.MsgDeleteUser;
                fromProtoMsg(message: _17.MsgDeleteUserProtoMsg): _17.MsgDeleteUser;
                toProto(message: _17.MsgDeleteUser): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteUser): _17.MsgDeleteUserProtoMsg;
            };
            MsgDeleteUserResponse: {
                typeUrl: string;
                encode(_: _17.MsgDeleteUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDeleteUserResponse;
                fromPartial(_: Partial<_17.MsgDeleteUserResponse>): _17.MsgDeleteUserResponse;
                fromAmino(_: _17.MsgDeleteUserResponseAmino): _17.MsgDeleteUserResponse;
                toAmino(_: _17.MsgDeleteUserResponse): _17.MsgDeleteUserResponseAmino;
                fromAminoMsg(object: _17.MsgDeleteUserResponseAminoMsg): _17.MsgDeleteUserResponse;
                fromProtoMsg(message: _17.MsgDeleteUserResponseProtoMsg): _17.MsgDeleteUserResponse;
                toProto(message: _17.MsgDeleteUserResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDeleteUserResponse): _17.MsgDeleteUserResponseProtoMsg;
            };
            MsgUpdateUserPinnedRepositories: {
                typeUrl: string;
                encode(message: _17.MsgUpdateUserPinnedRepositories, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateUserPinnedRepositories;
                fromPartial(object: Partial<_17.MsgUpdateUserPinnedRepositories>): _17.MsgUpdateUserPinnedRepositories;
                fromAmino(object: _17.MsgUpdateUserPinnedRepositoriesAmino): _17.MsgUpdateUserPinnedRepositories;
                toAmino(message: _17.MsgUpdateUserPinnedRepositories): _17.MsgUpdateUserPinnedRepositoriesAmino;
                fromAminoMsg(object: _17.MsgUpdateUserPinnedRepositoriesAminoMsg): _17.MsgUpdateUserPinnedRepositories;
                fromProtoMsg(message: _17.MsgUpdateUserPinnedRepositoriesProtoMsg): _17.MsgUpdateUserPinnedRepositories;
                toProto(message: _17.MsgUpdateUserPinnedRepositories): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserPinnedRepositories): _17.MsgUpdateUserPinnedRepositoriesProtoMsg;
            };
            MsgUpdateUserPinnedRepositoriesResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateUserPinnedRepositoriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateUserPinnedRepositoriesResponse;
                fromPartial(_: Partial<_17.MsgUpdateUserPinnedRepositoriesResponse>): _17.MsgUpdateUserPinnedRepositoriesResponse;
                fromAmino(_: _17.MsgUpdateUserPinnedRepositoriesResponseAmino): _17.MsgUpdateUserPinnedRepositoriesResponse;
                toAmino(_: _17.MsgUpdateUserPinnedRepositoriesResponse): _17.MsgUpdateUserPinnedRepositoriesResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateUserPinnedRepositoriesResponseAminoMsg): _17.MsgUpdateUserPinnedRepositoriesResponse;
                fromProtoMsg(message: _17.MsgUpdateUserPinnedRepositoriesResponseProtoMsg): _17.MsgUpdateUserPinnedRepositoriesResponse;
                toProto(message: _17.MsgUpdateUserPinnedRepositoriesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateUserPinnedRepositoriesResponse): _17.MsgUpdateUserPinnedRepositoriesResponseProtoMsg;
            };
            MsgUpdateDaoPinnedRepositories: {
                typeUrl: string;
                encode(message: _17.MsgUpdateDaoPinnedRepositories, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateDaoPinnedRepositories;
                fromPartial(object: Partial<_17.MsgUpdateDaoPinnedRepositories>): _17.MsgUpdateDaoPinnedRepositories;
                fromAmino(object: _17.MsgUpdateDaoPinnedRepositoriesAmino): _17.MsgUpdateDaoPinnedRepositories;
                toAmino(message: _17.MsgUpdateDaoPinnedRepositories): _17.MsgUpdateDaoPinnedRepositoriesAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoPinnedRepositoriesAminoMsg): _17.MsgUpdateDaoPinnedRepositories;
                fromProtoMsg(message: _17.MsgUpdateDaoPinnedRepositoriesProtoMsg): _17.MsgUpdateDaoPinnedRepositories;
                toProto(message: _17.MsgUpdateDaoPinnedRepositories): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoPinnedRepositories): _17.MsgUpdateDaoPinnedRepositoriesProtoMsg;
            };
            MsgUpdateDaoPinnedRepositoriesResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateDaoPinnedRepositoriesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateDaoPinnedRepositoriesResponse;
                fromPartial(_: Partial<_17.MsgUpdateDaoPinnedRepositoriesResponse>): _17.MsgUpdateDaoPinnedRepositoriesResponse;
                fromAmino(_: _17.MsgUpdateDaoPinnedRepositoriesResponseAmino): _17.MsgUpdateDaoPinnedRepositoriesResponse;
                toAmino(_: _17.MsgUpdateDaoPinnedRepositoriesResponse): _17.MsgUpdateDaoPinnedRepositoriesResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateDaoPinnedRepositoriesResponseAminoMsg): _17.MsgUpdateDaoPinnedRepositoriesResponse;
                fromProtoMsg(message: _17.MsgUpdateDaoPinnedRepositoriesResponseProtoMsg): _17.MsgUpdateDaoPinnedRepositoriesResponse;
                toProto(message: _17.MsgUpdateDaoPinnedRepositoriesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateDaoPinnedRepositoriesResponse): _17.MsgUpdateDaoPinnedRepositoriesResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _17.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgUpdateParams;
                fromPartial(object: Partial<_17.MsgUpdateParams>): _17.MsgUpdateParams;
                fromAmino(object: _17.MsgUpdateParamsAmino): _17.MsgUpdateParams;
                toAmino(message: _17.MsgUpdateParams): _17.MsgUpdateParamsAmino;
                fromAminoMsg(object: _17.MsgUpdateParamsAminoMsg): _17.MsgUpdateParams;
                fromProtoMsg(message: _17.MsgUpdateParamsProtoMsg): _17.MsgUpdateParams;
                toProto(message: _17.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateParams): _17.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _17.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_17.MsgUpdateParamsResponse>): _17.MsgUpdateParamsResponse;
                fromAmino(_: _17.MsgUpdateParamsResponseAmino): _17.MsgUpdateParamsResponse;
                toAmino(_: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _17.MsgUpdateParamsResponseAminoMsg): _17.MsgUpdateParamsResponse;
                fromProtoMsg(message: _17.MsgUpdateParamsResponseProtoMsg): _17.MsgUpdateParamsResponse;
                toProto(message: _17.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _17.MsgUpdateParamsResponse): _17.MsgUpdateParamsResponseProtoMsg;
            };
            MsgDistributePlatformIncentives: {
                typeUrl: string;
                encode(message: _17.MsgDistributePlatformIncentives, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDistributePlatformIncentives;
                fromPartial(object: Partial<_17.MsgDistributePlatformIncentives>): _17.MsgDistributePlatformIncentives;
                fromAmino(object: _17.MsgDistributePlatformIncentivesAmino): _17.MsgDistributePlatformIncentives;
                toAmino(message: _17.MsgDistributePlatformIncentives): _17.MsgDistributePlatformIncentivesAmino;
                fromAminoMsg(object: _17.MsgDistributePlatformIncentivesAminoMsg): _17.MsgDistributePlatformIncentives;
                fromProtoMsg(message: _17.MsgDistributePlatformIncentivesProtoMsg): _17.MsgDistributePlatformIncentives;
                toProto(message: _17.MsgDistributePlatformIncentives): Uint8Array;
                toProtoMsg(message: _17.MsgDistributePlatformIncentives): _17.MsgDistributePlatformIncentivesProtoMsg;
            };
            MsgDistributePlatformIncentives_Address: {
                typeUrl: string;
                encode(message: _17.MsgDistributePlatformIncentives_Address, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _17.MsgDistributePlatformIncentives_Address;
                fromPartial(object: Partial<_17.MsgDistributePlatformIncentives_Address>): _17.MsgDistributePlatformIncentives_Address;
                fromAmino(object: _17.MsgDistributePlatformIncentives_AddressAmino): _17.MsgDistributePlatformIncentives_Address;
                toAmino(message: _17.MsgDistributePlatformIncentives_Address): _17.MsgDistributePlatformIncentives_AddressAmino;
                fromAminoMsg(object: _17.MsgDistributePlatformIncentives_AddressAminoMsg): _17.MsgDistributePlatformIncentives_Address;
                fromProtoMsg(message: _17.MsgDistributePlatformIncentives_AddressProtoMsg): _17.MsgDistributePlatformIncentives_Address;
                toProto(message: _17.MsgDistributePlatformIncentives_Address): Uint8Array;
                toProtoMsg(message: _17.MsgDistributePlatformIncentives_Address): _17.MsgDistributePlatformIncentives_AddressProtoMsg;
            };
            MsgDistributePlatformIncentivesResponse: {
                typeUrl: string;
                encode(_: _17.MsgDistributePlatformIncentivesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _17.MsgDistributePlatformIncentivesResponse;
                fromPartial(_: Partial<_17.MsgDistributePlatformIncentivesResponse>): _17.MsgDistributePlatformIncentivesResponse;
                fromAmino(_: _17.MsgDistributePlatformIncentivesResponseAmino): _17.MsgDistributePlatformIncentivesResponse;
                toAmino(_: _17.MsgDistributePlatformIncentivesResponse): _17.MsgDistributePlatformIncentivesResponseAmino;
                fromAminoMsg(object: _17.MsgDistributePlatformIncentivesResponseAminoMsg): _17.MsgDistributePlatformIncentivesResponse;
                fromProtoMsg(message: _17.MsgDistributePlatformIncentivesResponseProtoMsg): _17.MsgDistributePlatformIncentivesResponse;
                toProto(message: _17.MsgDistributePlatformIncentivesResponse): Uint8Array;
                toProtoMsg(message: _17.MsgDistributePlatformIncentivesResponse): _17.MsgDistributePlatformIncentivesResponseProtoMsg;
            };
            taskTypeFromJSON(object: any): _16.TaskType;
            taskTypeToJSON(object: _16.TaskType): string;
            taskStateFromJSON(object: any): _16.TaskState;
            taskStateToJSON(object: _16.TaskState): string;
            TaskType: typeof _16.TaskType;
            TaskTypeSDKType: typeof _16.TaskType;
            TaskTypeAmino: typeof _16.TaskType;
            TaskState: typeof _16.TaskState;
            TaskStateSDKType: typeof _16.TaskState;
            TaskStateAmino: typeof _16.TaskState;
            Task: {
                typeUrl: string;
                encode(message: _16.Task, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _16.Task;
                fromPartial(object: Partial<_16.Task>): _16.Task;
                fromAmino(object: _16.TaskAmino): _16.Task;
                toAmino(message: _16.Task): _16.TaskAmino;
                fromAminoMsg(object: _16.TaskAminoMsg): _16.Task;
                fromProtoMsg(message: _16.TaskProtoMsg): _16.Task;
                toProto(message: _16.Task): Uint8Array;
                toProtoMsg(message: _16.Task): _16.TaskProtoMsg;
            };
            Tag: {
                typeUrl: string;
                encode(message: _15.Tag, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _15.Tag;
                fromPartial(object: Partial<_15.Tag>): _15.Tag;
                fromAmino(object: _15.TagAmino): _15.Tag;
                toAmino(message: _15.Tag): _15.TagAmino;
                fromAminoMsg(object: _15.TagAminoMsg): _15.Tag;
                fromProtoMsg(message: _15.TagProtoMsg): _15.Tag;
                toProto(message: _15.Tag): Uint8Array;
                toProtoMsg(message: _15.Tag): _15.TagProtoMsg;
            };
            repositoryCollaborator_PermissionFromJSON(object: any): _14.RepositoryCollaborator_Permission;
            repositoryCollaborator_PermissionToJSON(object: _14.RepositoryCollaborator_Permission): string;
            repositoryBackup_StoreFromJSON(object: any): _14.RepositoryBackup_Store;
            repositoryBackup_StoreToJSON(object: _14.RepositoryBackup_Store): string;
            RepositoryCollaborator_Permission: typeof _14.RepositoryCollaborator_Permission;
            RepositoryCollaborator_PermissionSDKType: typeof _14.RepositoryCollaborator_Permission;
            RepositoryCollaborator_PermissionAmino: typeof _14.RepositoryCollaborator_Permission;
            RepositoryBackup_Store: typeof _14.RepositoryBackup_Store;
            RepositoryBackup_StoreSDKType: typeof _14.RepositoryBackup_Store;
            RepositoryBackup_StoreAmino: typeof _14.RepositoryBackup_Store;
            Repository: {
                typeUrl: string;
                encode(message: _14.Repository, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.Repository;
                fromPartial(object: Partial<_14.Repository>): _14.Repository;
                fromAmino(object: _14.RepositoryAmino): _14.Repository;
                toAmino(message: _14.Repository): _14.RepositoryAmino;
                fromAminoMsg(object: _14.RepositoryAminoMsg): _14.Repository;
                fromProtoMsg(message: _14.RepositoryProtoMsg): _14.Repository;
                toProto(message: _14.Repository): Uint8Array;
                toProtoMsg(message: _14.Repository): _14.RepositoryProtoMsg;
            };
            RepositoryId: {
                typeUrl: string;
                encode(message: _14.RepositoryId, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryId;
                fromPartial(object: Partial<_14.RepositoryId>): _14.RepositoryId;
                fromAmino(object: _14.RepositoryIdAmino): _14.RepositoryId;
                toAmino(message: _14.RepositoryId): _14.RepositoryIdAmino;
                fromAminoMsg(object: _14.RepositoryIdAminoMsg): _14.RepositoryId;
                fromProtoMsg(message: _14.RepositoryIdProtoMsg): _14.RepositoryId;
                toProto(message: _14.RepositoryId): Uint8Array;
                toProtoMsg(message: _14.RepositoryId): _14.RepositoryIdProtoMsg;
            };
            BaseRepositoryKey: {
                typeUrl: string;
                encode(message: _14.BaseRepositoryKey, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.BaseRepositoryKey;
                fromPartial(object: Partial<_14.BaseRepositoryKey>): _14.BaseRepositoryKey;
                fromAmino(object: _14.BaseRepositoryKeyAmino): _14.BaseRepositoryKey;
                toAmino(message: _14.BaseRepositoryKey): _14.BaseRepositoryKeyAmino;
                fromAminoMsg(object: _14.BaseRepositoryKeyAminoMsg): _14.BaseRepositoryKey;
                fromProtoMsg(message: _14.BaseRepositoryKeyProtoMsg): _14.BaseRepositoryKey;
                toProto(message: _14.BaseRepositoryKey): Uint8Array;
                toProtoMsg(message: _14.BaseRepositoryKey): _14.BaseRepositoryKeyProtoMsg;
            };
            RepositoryOwner: {
                typeUrl: string;
                encode(message: _14.RepositoryOwner, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryOwner;
                fromPartial(object: Partial<_14.RepositoryOwner>): _14.RepositoryOwner;
                fromAmino(object: _14.RepositoryOwnerAmino): _14.RepositoryOwner;
                toAmino(message: _14.RepositoryOwner): _14.RepositoryOwnerAmino;
                fromAminoMsg(object: _14.RepositoryOwnerAminoMsg): _14.RepositoryOwner;
                fromProtoMsg(message: _14.RepositoryOwnerProtoMsg): _14.RepositoryOwner;
                toProto(message: _14.RepositoryOwner): Uint8Array;
                toProtoMsg(message: _14.RepositoryOwner): _14.RepositoryOwnerProtoMsg;
            };
            IssueIid: {
                typeUrl: string;
                encode(message: _14.IssueIid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.IssueIid;
                fromPartial(object: Partial<_14.IssueIid>): _14.IssueIid;
                fromAmino(object: _14.IssueIidAmino): _14.IssueIid;
                toAmino(message: _14.IssueIid): _14.IssueIidAmino;
                fromAminoMsg(object: _14.IssueIidAminoMsg): _14.IssueIid;
                fromProtoMsg(message: _14.IssueIidProtoMsg): _14.IssueIid;
                toProto(message: _14.IssueIid): Uint8Array;
                toProtoMsg(message: _14.IssueIid): _14.IssueIidProtoMsg;
            };
            PullRequestIid: {
                typeUrl: string;
                encode(message: _14.PullRequestIid, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.PullRequestIid;
                fromPartial(object: Partial<_14.PullRequestIid>): _14.PullRequestIid;
                fromAmino(object: _14.PullRequestIidAmino): _14.PullRequestIid;
                toAmino(message: _14.PullRequestIid): _14.PullRequestIidAmino;
                fromAminoMsg(object: _14.PullRequestIidAminoMsg): _14.PullRequestIid;
                fromProtoMsg(message: _14.PullRequestIidProtoMsg): _14.PullRequestIid;
                toProto(message: _14.PullRequestIid): Uint8Array;
                toProtoMsg(message: _14.PullRequestIid): _14.PullRequestIidProtoMsg;
            };
            RepositoryCollaborator: {
                typeUrl: string;
                encode(message: _14.RepositoryCollaborator, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryCollaborator;
                fromPartial(object: Partial<_14.RepositoryCollaborator>): _14.RepositoryCollaborator;
                fromAmino(object: _14.RepositoryCollaboratorAmino): _14.RepositoryCollaborator;
                toAmino(message: _14.RepositoryCollaborator): _14.RepositoryCollaboratorAmino;
                fromAminoMsg(object: _14.RepositoryCollaboratorAminoMsg): _14.RepositoryCollaborator;
                fromProtoMsg(message: _14.RepositoryCollaboratorProtoMsg): _14.RepositoryCollaborator;
                toProto(message: _14.RepositoryCollaborator): Uint8Array;
                toProtoMsg(message: _14.RepositoryCollaborator): _14.RepositoryCollaboratorProtoMsg;
            };
            RepositoryLabel: {
                typeUrl: string;
                encode(message: _14.RepositoryLabel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryLabel;
                fromPartial(object: Partial<_14.RepositoryLabel>): _14.RepositoryLabel;
                fromAmino(object: _14.RepositoryLabelAmino): _14.RepositoryLabel;
                toAmino(message: _14.RepositoryLabel): _14.RepositoryLabelAmino;
                fromAminoMsg(object: _14.RepositoryLabelAminoMsg): _14.RepositoryLabel;
                fromProtoMsg(message: _14.RepositoryLabelProtoMsg): _14.RepositoryLabel;
                toProto(message: _14.RepositoryLabel): Uint8Array;
                toProtoMsg(message: _14.RepositoryLabel): _14.RepositoryLabelProtoMsg;
            };
            RepositoryRelease: {
                typeUrl: string;
                encode(message: _14.RepositoryRelease, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryRelease;
                fromPartial(object: Partial<_14.RepositoryRelease>): _14.RepositoryRelease;
                fromAmino(object: _14.RepositoryReleaseAmino): _14.RepositoryRelease;
                toAmino(message: _14.RepositoryRelease): _14.RepositoryReleaseAmino;
                fromAminoMsg(object: _14.RepositoryReleaseAminoMsg): _14.RepositoryRelease;
                fromProtoMsg(message: _14.RepositoryReleaseProtoMsg): _14.RepositoryRelease;
                toProto(message: _14.RepositoryRelease): Uint8Array;
                toProtoMsg(message: _14.RepositoryRelease): _14.RepositoryReleaseProtoMsg;
            };
            RepositoryBackup: {
                typeUrl: string;
                encode(message: _14.RepositoryBackup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _14.RepositoryBackup;
                fromPartial(object: Partial<_14.RepositoryBackup>): _14.RepositoryBackup;
                fromAmino(object: _14.RepositoryBackupAmino): _14.RepositoryBackup;
                toAmino(message: _14.RepositoryBackup): _14.RepositoryBackupAmino;
                fromAminoMsg(object: _14.RepositoryBackupAminoMsg): _14.RepositoryBackup;
                fromProtoMsg(message: _14.RepositoryBackupProtoMsg): _14.RepositoryBackup;
                toProto(message: _14.RepositoryBackup): Uint8Array;
                toProtoMsg(message: _14.RepositoryBackup): _14.RepositoryBackupProtoMsg;
            };
            Release: {
                typeUrl: string;
                encode(message: _13.Release, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _13.Release;
                fromPartial(object: Partial<_13.Release>): _13.Release;
                fromAmino(object: _13.ReleaseAmino): _13.Release;
                toAmino(message: _13.Release): _13.ReleaseAmino;
                fromAminoMsg(object: _13.ReleaseAminoMsg): _13.Release;
                fromProtoMsg(message: _13.ReleaseProtoMsg): _13.Release;
                toProto(message: _13.Release): Uint8Array;
                toProtoMsg(message: _13.Release): _13.ReleaseProtoMsg;
            };
            emojiFromJSON(object: any): _12.Emoji;
            emojiToJSON(object: _12.Emoji): string;
            Emoji: typeof _12.Emoji;
            EmojiSDKType: typeof _12.Emoji;
            EmojiAmino: typeof _12.Emoji;
            Reaction: {
                typeUrl: string;
                encode(message: _12.Reaction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _12.Reaction;
                fromPartial(object: Partial<_12.Reaction>): _12.Reaction;
                fromAmino(object: _12.ReactionAmino): _12.Reaction;
                toAmino(message: _12.Reaction): _12.ReactionAmino;
                fromAminoMsg(object: _12.ReactionAminoMsg): _12.Reaction;
                fromProtoMsg(message: _12.ReactionProtoMsg): _12.Reaction;
                toProto(message: _12.Reaction): Uint8Array;
                toProtoMsg(message: _12.Reaction): _12.ReactionProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _11.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _11.QueryParamsRequest;
                fromPartial(_: Partial<_11.QueryParamsRequest>): _11.QueryParamsRequest;
                fromAmino(_: _11.QueryParamsRequestAmino): _11.QueryParamsRequest;
                toAmino(_: _11.QueryParamsRequest): _11.QueryParamsRequestAmino;
                fromAminoMsg(object: _11.QueryParamsRequestAminoMsg): _11.QueryParamsRequest;
                fromProtoMsg(message: _11.QueryParamsRequestProtoMsg): _11.QueryParamsRequest;
                toProto(message: _11.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _11.QueryParamsRequest): _11.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _11.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryParamsResponse;
                fromPartial(object: Partial<_11.QueryParamsResponse>): _11.QueryParamsResponse;
                fromAmino(object: _11.QueryParamsResponseAmino): _11.QueryParamsResponse;
                toAmino(message: _11.QueryParamsResponse): _11.QueryParamsResponseAmino;
                fromAminoMsg(object: _11.QueryParamsResponseAminoMsg): _11.QueryParamsResponse;
                fromProtoMsg(message: _11.QueryParamsResponseProtoMsg): _11.QueryParamsResponse;
                toProto(message: _11.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _11.QueryParamsResponse): _11.QueryParamsResponseProtoMsg;
            };
            QueryVestedAmountRequest: {
                typeUrl: string;
                encode(message: _11.QueryVestedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryVestedAmountRequest;
                fromPartial(object: Partial<_11.QueryVestedAmountRequest>): _11.QueryVestedAmountRequest;
                fromAmino(object: _11.QueryVestedAmountRequestAmino): _11.QueryVestedAmountRequest;
                toAmino(message: _11.QueryVestedAmountRequest): _11.QueryVestedAmountRequestAmino;
                fromAminoMsg(object: _11.QueryVestedAmountRequestAminoMsg): _11.QueryVestedAmountRequest;
                fromProtoMsg(message: _11.QueryVestedAmountRequestProtoMsg): _11.QueryVestedAmountRequest;
                toProto(message: _11.QueryVestedAmountRequest): Uint8Array;
                toProtoMsg(message: _11.QueryVestedAmountRequest): _11.QueryVestedAmountRequestProtoMsg;
            };
            QueryVestedAmountResponse: {
                typeUrl: string;
                encode(message: _11.QueryVestedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryVestedAmountResponse;
                fromPartial(object: Partial<_11.QueryVestedAmountResponse>): _11.QueryVestedAmountResponse;
                fromAmino(object: _11.QueryVestedAmountResponseAmino): _11.QueryVestedAmountResponse;
                toAmino(message: _11.QueryVestedAmountResponse): _11.QueryVestedAmountResponseAmino;
                fromAminoMsg(object: _11.QueryVestedAmountResponseAminoMsg): _11.QueryVestedAmountResponse;
                fromProtoMsg(message: _11.QueryVestedAmountResponseProtoMsg): _11.QueryVestedAmountResponse;
                toProto(message: _11.QueryVestedAmountResponse): Uint8Array;
                toProtoMsg(message: _11.QueryVestedAmountResponse): _11.QueryVestedAmountResponseProtoMsg;
            };
            QueryCheckStorageProviderAuthorizationRequest: {
                typeUrl: string;
                encode(message: _11.QueryCheckStorageProviderAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCheckStorageProviderAuthorizationRequest;
                fromPartial(object: Partial<_11.QueryCheckStorageProviderAuthorizationRequest>): _11.QueryCheckStorageProviderAuthorizationRequest;
                fromAmino(object: _11.QueryCheckStorageProviderAuthorizationRequestAmino): _11.QueryCheckStorageProviderAuthorizationRequest;
                toAmino(message: _11.QueryCheckStorageProviderAuthorizationRequest): _11.QueryCheckStorageProviderAuthorizationRequestAmino;
                fromAminoMsg(object: _11.QueryCheckStorageProviderAuthorizationRequestAminoMsg): _11.QueryCheckStorageProviderAuthorizationRequest;
                fromProtoMsg(message: _11.QueryCheckStorageProviderAuthorizationRequestProtoMsg): _11.QueryCheckStorageProviderAuthorizationRequest;
                toProto(message: _11.QueryCheckStorageProviderAuthorizationRequest): Uint8Array;
                toProtoMsg(message: _11.QueryCheckStorageProviderAuthorizationRequest): _11.QueryCheckStorageProviderAuthorizationRequestProtoMsg;
            };
            QueryCheckStorageProviderAuthorizationResponse: {
                typeUrl: string;
                encode(message: _11.QueryCheckStorageProviderAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCheckStorageProviderAuthorizationResponse;
                fromPartial(object: Partial<_11.QueryCheckStorageProviderAuthorizationResponse>): _11.QueryCheckStorageProviderAuthorizationResponse;
                fromAmino(object: _11.QueryCheckStorageProviderAuthorizationResponseAmino): _11.QueryCheckStorageProviderAuthorizationResponse;
                toAmino(message: _11.QueryCheckStorageProviderAuthorizationResponse): _11.QueryCheckStorageProviderAuthorizationResponseAmino;
                fromAminoMsg(object: _11.QueryCheckStorageProviderAuthorizationResponseAminoMsg): _11.QueryCheckStorageProviderAuthorizationResponse;
                fromProtoMsg(message: _11.QueryCheckStorageProviderAuthorizationResponseProtoMsg): _11.QueryCheckStorageProviderAuthorizationResponse;
                toProto(message: _11.QueryCheckStorageProviderAuthorizationResponse): Uint8Array;
                toProtoMsg(message: _11.QueryCheckStorageProviderAuthorizationResponse): _11.QueryCheckStorageProviderAuthorizationResponseProtoMsg;
            };
            QueryGetTaskRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetTaskRequest;
                fromPartial(object: Partial<_11.QueryGetTaskRequest>): _11.QueryGetTaskRequest;
                fromAmino(object: _11.QueryGetTaskRequestAmino): _11.QueryGetTaskRequest;
                toAmino(message: _11.QueryGetTaskRequest): _11.QueryGetTaskRequestAmino;
                fromAminoMsg(object: _11.QueryGetTaskRequestAminoMsg): _11.QueryGetTaskRequest;
                fromProtoMsg(message: _11.QueryGetTaskRequestProtoMsg): _11.QueryGetTaskRequest;
                toProto(message: _11.QueryGetTaskRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetTaskRequest): _11.QueryGetTaskRequestProtoMsg;
            };
            QueryGetTaskResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetTaskResponse;
                fromPartial(object: Partial<_11.QueryGetTaskResponse>): _11.QueryGetTaskResponse;
                fromAmino(object: _11.QueryGetTaskResponseAmino): _11.QueryGetTaskResponse;
                toAmino(message: _11.QueryGetTaskResponse): _11.QueryGetTaskResponseAmino;
                fromAminoMsg(object: _11.QueryGetTaskResponseAminoMsg): _11.QueryGetTaskResponse;
                fromProtoMsg(message: _11.QueryGetTaskResponseProtoMsg): _11.QueryGetTaskResponse;
                toProto(message: _11.QueryGetTaskResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetTaskResponse): _11.QueryGetTaskResponseProtoMsg;
            };
            QueryAllTaskRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllTaskRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllTaskRequest;
                fromPartial(object: Partial<_11.QueryAllTaskRequest>): _11.QueryAllTaskRequest;
                fromAmino(object: _11.QueryAllTaskRequestAmino): _11.QueryAllTaskRequest;
                toAmino(message: _11.QueryAllTaskRequest): _11.QueryAllTaskRequestAmino;
                fromAminoMsg(object: _11.QueryAllTaskRequestAminoMsg): _11.QueryAllTaskRequest;
                fromProtoMsg(message: _11.QueryAllTaskRequestProtoMsg): _11.QueryAllTaskRequest;
                toProto(message: _11.QueryAllTaskRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllTaskRequest): _11.QueryAllTaskRequestProtoMsg;
            };
            QueryAllTaskResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllTaskResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllTaskResponse;
                fromPartial(object: Partial<_11.QueryAllTaskResponse>): _11.QueryAllTaskResponse;
                fromAmino(object: _11.QueryAllTaskResponseAmino): _11.QueryAllTaskResponse;
                toAmino(message: _11.QueryAllTaskResponse): _11.QueryAllTaskResponseAmino;
                fromAminoMsg(object: _11.QueryAllTaskResponseAminoMsg): _11.QueryAllTaskResponse;
                fromProtoMsg(message: _11.QueryAllTaskResponseProtoMsg): _11.QueryAllTaskResponse;
                toProto(message: _11.QueryAllTaskResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllTaskResponse): _11.QueryAllTaskResponseProtoMsg;
            };
            QueryCheckGitServerAuthorizationRequest: {
                typeUrl: string;
                encode(message: _11.QueryCheckGitServerAuthorizationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCheckGitServerAuthorizationRequest;
                fromPartial(object: Partial<_11.QueryCheckGitServerAuthorizationRequest>): _11.QueryCheckGitServerAuthorizationRequest;
                fromAmino(object: _11.QueryCheckGitServerAuthorizationRequestAmino): _11.QueryCheckGitServerAuthorizationRequest;
                toAmino(message: _11.QueryCheckGitServerAuthorizationRequest): _11.QueryCheckGitServerAuthorizationRequestAmino;
                fromAminoMsg(object: _11.QueryCheckGitServerAuthorizationRequestAminoMsg): _11.QueryCheckGitServerAuthorizationRequest;
                fromProtoMsg(message: _11.QueryCheckGitServerAuthorizationRequestProtoMsg): _11.QueryCheckGitServerAuthorizationRequest;
                toProto(message: _11.QueryCheckGitServerAuthorizationRequest): Uint8Array;
                toProtoMsg(message: _11.QueryCheckGitServerAuthorizationRequest): _11.QueryCheckGitServerAuthorizationRequestProtoMsg;
            };
            QueryCheckGitServerAuthorizationResponse: {
                typeUrl: string;
                encode(message: _11.QueryCheckGitServerAuthorizationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryCheckGitServerAuthorizationResponse;
                fromPartial(object: Partial<_11.QueryCheckGitServerAuthorizationResponse>): _11.QueryCheckGitServerAuthorizationResponse;
                fromAmino(object: _11.QueryCheckGitServerAuthorizationResponseAmino): _11.QueryCheckGitServerAuthorizationResponse;
                toAmino(message: _11.QueryCheckGitServerAuthorizationResponse): _11.QueryCheckGitServerAuthorizationResponseAmino;
                fromAminoMsg(object: _11.QueryCheckGitServerAuthorizationResponseAminoMsg): _11.QueryCheckGitServerAuthorizationResponse;
                fromProtoMsg(message: _11.QueryCheckGitServerAuthorizationResponseProtoMsg): _11.QueryCheckGitServerAuthorizationResponse;
                toProto(message: _11.QueryCheckGitServerAuthorizationResponse): Uint8Array;
                toProtoMsg(message: _11.QueryCheckGitServerAuthorizationResponse): _11.QueryCheckGitServerAuthorizationResponseProtoMsg;
            };
            QueryAllBranchRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllBranchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBranchRequest;
                fromPartial(object: Partial<_11.QueryAllBranchRequest>): _11.QueryAllBranchRequest;
                fromAmino(object: _11.QueryAllBranchRequestAmino): _11.QueryAllBranchRequest;
                toAmino(message: _11.QueryAllBranchRequest): _11.QueryAllBranchRequestAmino;
                fromAminoMsg(object: _11.QueryAllBranchRequestAminoMsg): _11.QueryAllBranchRequest;
                fromProtoMsg(message: _11.QueryAllBranchRequestProtoMsg): _11.QueryAllBranchRequest;
                toProto(message: _11.QueryAllBranchRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllBranchRequest): _11.QueryAllBranchRequestProtoMsg;
            };
            QueryAllBranchResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBranchResponse;
                fromPartial(object: Partial<_11.QueryAllBranchResponse>): _11.QueryAllBranchResponse;
                fromAmino(object: _11.QueryAllBranchResponseAmino): _11.QueryAllBranchResponse;
                toAmino(message: _11.QueryAllBranchResponse): _11.QueryAllBranchResponseAmino;
                fromAminoMsg(object: _11.QueryAllBranchResponseAminoMsg): _11.QueryAllBranchResponse;
                fromProtoMsg(message: _11.QueryAllBranchResponseProtoMsg): _11.QueryAllBranchResponse;
                toProto(message: _11.QueryAllBranchResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllBranchResponse): _11.QueryAllBranchResponseProtoMsg;
            };
            QueryGetRepositoryBranchRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryBranchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryBranchRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryBranchRequest>): _11.QueryGetRepositoryBranchRequest;
                fromAmino(object: _11.QueryGetRepositoryBranchRequestAmino): _11.QueryGetRepositoryBranchRequest;
                toAmino(message: _11.QueryGetRepositoryBranchRequest): _11.QueryGetRepositoryBranchRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryBranchRequestAminoMsg): _11.QueryGetRepositoryBranchRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryBranchRequestProtoMsg): _11.QueryGetRepositoryBranchRequest;
                toProto(message: _11.QueryGetRepositoryBranchRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryBranchRequest): _11.QueryGetRepositoryBranchRequestProtoMsg;
            };
            QueryGetRepositoryBranchResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryBranchResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryBranchResponse>): _11.QueryGetRepositoryBranchResponse;
                fromAmino(object: _11.QueryGetRepositoryBranchResponseAmino): _11.QueryGetRepositoryBranchResponse;
                toAmino(message: _11.QueryGetRepositoryBranchResponse): _11.QueryGetRepositoryBranchResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryBranchResponseAminoMsg): _11.QueryGetRepositoryBranchResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryBranchResponseProtoMsg): _11.QueryGetRepositoryBranchResponse;
                toProto(message: _11.QueryGetRepositoryBranchResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryBranchResponse): _11.QueryGetRepositoryBranchResponseProtoMsg;
            };
            QueryGetRepositoryBranchShaRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryBranchShaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryBranchShaRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryBranchShaRequest>): _11.QueryGetRepositoryBranchShaRequest;
                fromAmino(object: _11.QueryGetRepositoryBranchShaRequestAmino): _11.QueryGetRepositoryBranchShaRequest;
                toAmino(message: _11.QueryGetRepositoryBranchShaRequest): _11.QueryGetRepositoryBranchShaRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryBranchShaRequestAminoMsg): _11.QueryGetRepositoryBranchShaRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryBranchShaRequestProtoMsg): _11.QueryGetRepositoryBranchShaRequest;
                toProto(message: _11.QueryGetRepositoryBranchShaRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryBranchShaRequest): _11.QueryGetRepositoryBranchShaRequestProtoMsg;
            };
            QueryGetRepositoryBranchShaResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryBranchShaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryBranchShaResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryBranchShaResponse>): _11.QueryGetRepositoryBranchShaResponse;
                fromAmino(object: _11.QueryGetRepositoryBranchShaResponseAmino): _11.QueryGetRepositoryBranchShaResponse;
                toAmino(message: _11.QueryGetRepositoryBranchShaResponse): _11.QueryGetRepositoryBranchShaResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryBranchShaResponseAminoMsg): _11.QueryGetRepositoryBranchShaResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryBranchShaResponseProtoMsg): _11.QueryGetRepositoryBranchShaResponse;
                toProto(message: _11.QueryGetRepositoryBranchShaResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryBranchShaResponse): _11.QueryGetRepositoryBranchShaResponseProtoMsg;
            };
            QueryAllRepositoryBranchRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryBranchRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryBranchRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryBranchRequest>): _11.QueryAllRepositoryBranchRequest;
                fromAmino(object: _11.QueryAllRepositoryBranchRequestAmino): _11.QueryAllRepositoryBranchRequest;
                toAmino(message: _11.QueryAllRepositoryBranchRequest): _11.QueryAllRepositoryBranchRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryBranchRequestAminoMsg): _11.QueryAllRepositoryBranchRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryBranchRequestProtoMsg): _11.QueryAllRepositoryBranchRequest;
                toProto(message: _11.QueryAllRepositoryBranchRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryBranchRequest): _11.QueryAllRepositoryBranchRequestProtoMsg;
            };
            QueryAllRepositoryBranchResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryBranchResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryBranchResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryBranchResponse>): _11.QueryAllRepositoryBranchResponse;
                fromAmino(object: _11.QueryAllRepositoryBranchResponseAmino): _11.QueryAllRepositoryBranchResponse;
                toAmino(message: _11.QueryAllRepositoryBranchResponse): _11.QueryAllRepositoryBranchResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryBranchResponseAminoMsg): _11.QueryAllRepositoryBranchResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryBranchResponseProtoMsg): _11.QueryAllRepositoryBranchResponse;
                toProto(message: _11.QueryAllRepositoryBranchResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryBranchResponse): _11.QueryAllRepositoryBranchResponseProtoMsg;
            };
            QueryAllTagRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllTagRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllTagRequest;
                fromPartial(object: Partial<_11.QueryAllTagRequest>): _11.QueryAllTagRequest;
                fromAmino(object: _11.QueryAllTagRequestAmino): _11.QueryAllTagRequest;
                toAmino(message: _11.QueryAllTagRequest): _11.QueryAllTagRequestAmino;
                fromAminoMsg(object: _11.QueryAllTagRequestAminoMsg): _11.QueryAllTagRequest;
                fromProtoMsg(message: _11.QueryAllTagRequestProtoMsg): _11.QueryAllTagRequest;
                toProto(message: _11.QueryAllTagRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllTagRequest): _11.QueryAllTagRequestProtoMsg;
            };
            QueryAllTagResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllTagResponse;
                fromPartial(object: Partial<_11.QueryAllTagResponse>): _11.QueryAllTagResponse;
                fromAmino(object: _11.QueryAllTagResponseAmino): _11.QueryAllTagResponse;
                toAmino(message: _11.QueryAllTagResponse): _11.QueryAllTagResponseAmino;
                fromAminoMsg(object: _11.QueryAllTagResponseAminoMsg): _11.QueryAllTagResponse;
                fromProtoMsg(message: _11.QueryAllTagResponseProtoMsg): _11.QueryAllTagResponse;
                toProto(message: _11.QueryAllTagResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllTagResponse): _11.QueryAllTagResponseProtoMsg;
            };
            QueryGetRepositoryTagRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryTagRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryTagRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryTagRequest>): _11.QueryGetRepositoryTagRequest;
                fromAmino(object: _11.QueryGetRepositoryTagRequestAmino): _11.QueryGetRepositoryTagRequest;
                toAmino(message: _11.QueryGetRepositoryTagRequest): _11.QueryGetRepositoryTagRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryTagRequestAminoMsg): _11.QueryGetRepositoryTagRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryTagRequestProtoMsg): _11.QueryGetRepositoryTagRequest;
                toProto(message: _11.QueryGetRepositoryTagRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryTagRequest): _11.QueryGetRepositoryTagRequestProtoMsg;
            };
            QueryGetRepositoryTagResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryTagResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryTagResponse>): _11.QueryGetRepositoryTagResponse;
                fromAmino(object: _11.QueryGetRepositoryTagResponseAmino): _11.QueryGetRepositoryTagResponse;
                toAmino(message: _11.QueryGetRepositoryTagResponse): _11.QueryGetRepositoryTagResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryTagResponseAminoMsg): _11.QueryGetRepositoryTagResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryTagResponseProtoMsg): _11.QueryGetRepositoryTagResponse;
                toProto(message: _11.QueryGetRepositoryTagResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryTagResponse): _11.QueryGetRepositoryTagResponseProtoMsg;
            };
            QueryGetRepositoryTagShaRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryTagShaRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryTagShaRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryTagShaRequest>): _11.QueryGetRepositoryTagShaRequest;
                fromAmino(object: _11.QueryGetRepositoryTagShaRequestAmino): _11.QueryGetRepositoryTagShaRequest;
                toAmino(message: _11.QueryGetRepositoryTagShaRequest): _11.QueryGetRepositoryTagShaRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryTagShaRequestAminoMsg): _11.QueryGetRepositoryTagShaRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryTagShaRequestProtoMsg): _11.QueryGetRepositoryTagShaRequest;
                toProto(message: _11.QueryGetRepositoryTagShaRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryTagShaRequest): _11.QueryGetRepositoryTagShaRequestProtoMsg;
            };
            QueryGetRepositoryTagShaResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryTagShaResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryTagShaResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryTagShaResponse>): _11.QueryGetRepositoryTagShaResponse;
                fromAmino(object: _11.QueryGetRepositoryTagShaResponseAmino): _11.QueryGetRepositoryTagShaResponse;
                toAmino(message: _11.QueryGetRepositoryTagShaResponse): _11.QueryGetRepositoryTagShaResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryTagShaResponseAminoMsg): _11.QueryGetRepositoryTagShaResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryTagShaResponseProtoMsg): _11.QueryGetRepositoryTagShaResponse;
                toProto(message: _11.QueryGetRepositoryTagShaResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryTagShaResponse): _11.QueryGetRepositoryTagShaResponseProtoMsg;
            };
            QueryAllRepositoryTagRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryTagRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryTagRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryTagRequest>): _11.QueryAllRepositoryTagRequest;
                fromAmino(object: _11.QueryAllRepositoryTagRequestAmino): _11.QueryAllRepositoryTagRequest;
                toAmino(message: _11.QueryAllRepositoryTagRequest): _11.QueryAllRepositoryTagRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryTagRequestAminoMsg): _11.QueryAllRepositoryTagRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryTagRequestProtoMsg): _11.QueryAllRepositoryTagRequest;
                toProto(message: _11.QueryAllRepositoryTagRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryTagRequest): _11.QueryAllRepositoryTagRequestProtoMsg;
            };
            QueryAllRepositoryTagResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryTagResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryTagResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryTagResponse>): _11.QueryAllRepositoryTagResponse;
                fromAmino(object: _11.QueryAllRepositoryTagResponseAmino): _11.QueryAllRepositoryTagResponse;
                toAmino(message: _11.QueryAllRepositoryTagResponse): _11.QueryAllRepositoryTagResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryTagResponseAminoMsg): _11.QueryAllRepositoryTagResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryTagResponseProtoMsg): _11.QueryAllRepositoryTagResponse;
                toProto(message: _11.QueryAllRepositoryTagResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryTagResponse): _11.QueryAllRepositoryTagResponseProtoMsg;
            };
            QueryGetDaoMemberRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetDaoMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetDaoMemberRequest;
                fromPartial(object: Partial<_11.QueryGetDaoMemberRequest>): _11.QueryGetDaoMemberRequest;
                fromAmino(object: _11.QueryGetDaoMemberRequestAmino): _11.QueryGetDaoMemberRequest;
                toAmino(message: _11.QueryGetDaoMemberRequest): _11.QueryGetDaoMemberRequestAmino;
                fromAminoMsg(object: _11.QueryGetDaoMemberRequestAminoMsg): _11.QueryGetDaoMemberRequest;
                fromProtoMsg(message: _11.QueryGetDaoMemberRequestProtoMsg): _11.QueryGetDaoMemberRequest;
                toProto(message: _11.QueryGetDaoMemberRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetDaoMemberRequest): _11.QueryGetDaoMemberRequestProtoMsg;
            };
            QueryGetDaoMemberResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetDaoMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetDaoMemberResponse;
                fromPartial(object: Partial<_11.QueryGetDaoMemberResponse>): _11.QueryGetDaoMemberResponse;
                fromAmino(object: _11.QueryGetDaoMemberResponseAmino): _11.QueryGetDaoMemberResponse;
                toAmino(message: _11.QueryGetDaoMemberResponse): _11.QueryGetDaoMemberResponseAmino;
                fromAminoMsg(object: _11.QueryGetDaoMemberResponseAminoMsg): _11.QueryGetDaoMemberResponse;
                fromProtoMsg(message: _11.QueryGetDaoMemberResponseProtoMsg): _11.QueryGetDaoMemberResponse;
                toProto(message: _11.QueryGetDaoMemberResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetDaoMemberResponse): _11.QueryGetDaoMemberResponseProtoMsg;
            };
            QueryAllDaoMemberRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllDaoMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllDaoMemberRequest;
                fromPartial(object: Partial<_11.QueryAllDaoMemberRequest>): _11.QueryAllDaoMemberRequest;
                fromAmino(object: _11.QueryAllDaoMemberRequestAmino): _11.QueryAllDaoMemberRequest;
                toAmino(message: _11.QueryAllDaoMemberRequest): _11.QueryAllDaoMemberRequestAmino;
                fromAminoMsg(object: _11.QueryAllDaoMemberRequestAminoMsg): _11.QueryAllDaoMemberRequest;
                fromProtoMsg(message: _11.QueryAllDaoMemberRequestProtoMsg): _11.QueryAllDaoMemberRequest;
                toProto(message: _11.QueryAllDaoMemberRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllDaoMemberRequest): _11.QueryAllDaoMemberRequestProtoMsg;
            };
            QueryAllDaoMemberResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllDaoMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllDaoMemberResponse;
                fromPartial(object: Partial<_11.QueryAllDaoMemberResponse>): _11.QueryAllDaoMemberResponse;
                fromAmino(object: _11.QueryAllDaoMemberResponseAmino): _11.QueryAllDaoMemberResponse;
                toAmino(message: _11.QueryAllDaoMemberResponse): _11.QueryAllDaoMemberResponseAmino;
                fromAminoMsg(object: _11.QueryAllDaoMemberResponseAminoMsg): _11.QueryAllDaoMemberResponse;
                fromProtoMsg(message: _11.QueryAllDaoMemberResponseProtoMsg): _11.QueryAllDaoMemberResponse;
                toProto(message: _11.QueryAllDaoMemberResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllDaoMemberResponse): _11.QueryAllDaoMemberResponseProtoMsg;
            };
            QueryAllMemberRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllMemberRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllMemberRequest;
                fromPartial(object: Partial<_11.QueryAllMemberRequest>): _11.QueryAllMemberRequest;
                fromAmino(object: _11.QueryAllMemberRequestAmino): _11.QueryAllMemberRequest;
                toAmino(message: _11.QueryAllMemberRequest): _11.QueryAllMemberRequestAmino;
                fromAminoMsg(object: _11.QueryAllMemberRequestAminoMsg): _11.QueryAllMemberRequest;
                fromProtoMsg(message: _11.QueryAllMemberRequestProtoMsg): _11.QueryAllMemberRequest;
                toProto(message: _11.QueryAllMemberRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllMemberRequest): _11.QueryAllMemberRequestProtoMsg;
            };
            QueryAllMemberResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllMemberResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllMemberResponse;
                fromPartial(object: Partial<_11.QueryAllMemberResponse>): _11.QueryAllMemberResponse;
                fromAmino(object: _11.QueryAllMemberResponseAmino): _11.QueryAllMemberResponse;
                toAmino(message: _11.QueryAllMemberResponse): _11.QueryAllMemberResponseAmino;
                fromAminoMsg(object: _11.QueryAllMemberResponseAminoMsg): _11.QueryAllMemberResponse;
                fromProtoMsg(message: _11.QueryAllMemberResponseProtoMsg): _11.QueryAllMemberResponse;
                toProto(message: _11.QueryAllMemberResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllMemberResponse): _11.QueryAllMemberResponseProtoMsg;
            };
            QueryGetBountyRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetBountyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetBountyRequest;
                fromPartial(object: Partial<_11.QueryGetBountyRequest>): _11.QueryGetBountyRequest;
                fromAmino(object: _11.QueryGetBountyRequestAmino): _11.QueryGetBountyRequest;
                toAmino(message: _11.QueryGetBountyRequest): _11.QueryGetBountyRequestAmino;
                fromAminoMsg(object: _11.QueryGetBountyRequestAminoMsg): _11.QueryGetBountyRequest;
                fromProtoMsg(message: _11.QueryGetBountyRequestProtoMsg): _11.QueryGetBountyRequest;
                toProto(message: _11.QueryGetBountyRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetBountyRequest): _11.QueryGetBountyRequestProtoMsg;
            };
            QueryGetBountyResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetBountyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetBountyResponse;
                fromPartial(object: Partial<_11.QueryGetBountyResponse>): _11.QueryGetBountyResponse;
                fromAmino(object: _11.QueryGetBountyResponseAmino): _11.QueryGetBountyResponse;
                toAmino(message: _11.QueryGetBountyResponse): _11.QueryGetBountyResponseAmino;
                fromAminoMsg(object: _11.QueryGetBountyResponseAminoMsg): _11.QueryGetBountyResponse;
                fromProtoMsg(message: _11.QueryGetBountyResponseProtoMsg): _11.QueryGetBountyResponse;
                toProto(message: _11.QueryGetBountyResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetBountyResponse): _11.QueryGetBountyResponseProtoMsg;
            };
            QueryAllBountyRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllBountyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBountyRequest;
                fromPartial(object: Partial<_11.QueryAllBountyRequest>): _11.QueryAllBountyRequest;
                fromAmino(object: _11.QueryAllBountyRequestAmino): _11.QueryAllBountyRequest;
                toAmino(message: _11.QueryAllBountyRequest): _11.QueryAllBountyRequestAmino;
                fromAminoMsg(object: _11.QueryAllBountyRequestAminoMsg): _11.QueryAllBountyRequest;
                fromProtoMsg(message: _11.QueryAllBountyRequestProtoMsg): _11.QueryAllBountyRequest;
                toProto(message: _11.QueryAllBountyRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllBountyRequest): _11.QueryAllBountyRequestProtoMsg;
            };
            QueryAllBountyResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllBountyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllBountyResponse;
                fromPartial(object: Partial<_11.QueryAllBountyResponse>): _11.QueryAllBountyResponse;
                fromAmino(object: _11.QueryAllBountyResponseAmino): _11.QueryAllBountyResponse;
                toAmino(message: _11.QueryAllBountyResponse): _11.QueryAllBountyResponseAmino;
                fromAminoMsg(object: _11.QueryAllBountyResponseAminoMsg): _11.QueryAllBountyResponse;
                fromProtoMsg(message: _11.QueryAllBountyResponseProtoMsg): _11.QueryAllBountyResponse;
                toProto(message: _11.QueryAllBountyResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllBountyResponse): _11.QueryAllBountyResponseProtoMsg;
            };
            QueryGetPullRequestMergePermissionRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestMergePermissionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestMergePermissionRequest;
                fromPartial(object: Partial<_11.QueryGetPullRequestMergePermissionRequest>): _11.QueryGetPullRequestMergePermissionRequest;
                fromAmino(object: _11.QueryGetPullRequestMergePermissionRequestAmino): _11.QueryGetPullRequestMergePermissionRequest;
                toAmino(message: _11.QueryGetPullRequestMergePermissionRequest): _11.QueryGetPullRequestMergePermissionRequestAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestMergePermissionRequestAminoMsg): _11.QueryGetPullRequestMergePermissionRequest;
                fromProtoMsg(message: _11.QueryGetPullRequestMergePermissionRequestProtoMsg): _11.QueryGetPullRequestMergePermissionRequest;
                toProto(message: _11.QueryGetPullRequestMergePermissionRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestMergePermissionRequest): _11.QueryGetPullRequestMergePermissionRequestProtoMsg;
            };
            QueryGetPullRequestMergePermissionResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestMergePermissionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestMergePermissionResponse;
                fromPartial(object: Partial<_11.QueryGetPullRequestMergePermissionResponse>): _11.QueryGetPullRequestMergePermissionResponse;
                fromAmino(object: _11.QueryGetPullRequestMergePermissionResponseAmino): _11.QueryGetPullRequestMergePermissionResponse;
                toAmino(message: _11.QueryGetPullRequestMergePermissionResponse): _11.QueryGetPullRequestMergePermissionResponseAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestMergePermissionResponseAminoMsg): _11.QueryGetPullRequestMergePermissionResponse;
                fromProtoMsg(message: _11.QueryGetPullRequestMergePermissionResponseProtoMsg): _11.QueryGetPullRequestMergePermissionResponse;
                toProto(message: _11.QueryGetPullRequestMergePermissionResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestMergePermissionResponse): _11.QueryGetPullRequestMergePermissionResponseProtoMsg;
            };
            QueryGetReleaseRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetReleaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetReleaseRequest;
                fromPartial(object: Partial<_11.QueryGetReleaseRequest>): _11.QueryGetReleaseRequest;
                fromAmino(object: _11.QueryGetReleaseRequestAmino): _11.QueryGetReleaseRequest;
                toAmino(message: _11.QueryGetReleaseRequest): _11.QueryGetReleaseRequestAmino;
                fromAminoMsg(object: _11.QueryGetReleaseRequestAminoMsg): _11.QueryGetReleaseRequest;
                fromProtoMsg(message: _11.QueryGetReleaseRequestProtoMsg): _11.QueryGetReleaseRequest;
                toProto(message: _11.QueryGetReleaseRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetReleaseRequest): _11.QueryGetReleaseRequestProtoMsg;
            };
            QueryGetReleaseResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetReleaseResponse;
                fromPartial(object: Partial<_11.QueryGetReleaseResponse>): _11.QueryGetReleaseResponse;
                fromAmino(object: _11.QueryGetReleaseResponseAmino): _11.QueryGetReleaseResponse;
                toAmino(message: _11.QueryGetReleaseResponse): _11.QueryGetReleaseResponseAmino;
                fromAminoMsg(object: _11.QueryGetReleaseResponseAminoMsg): _11.QueryGetReleaseResponse;
                fromProtoMsg(message: _11.QueryGetReleaseResponseProtoMsg): _11.QueryGetReleaseResponse;
                toProto(message: _11.QueryGetReleaseResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetReleaseResponse): _11.QueryGetReleaseResponseProtoMsg;
            };
            QueryAllReleaseRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllReleaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllReleaseRequest;
                fromPartial(object: Partial<_11.QueryAllReleaseRequest>): _11.QueryAllReleaseRequest;
                fromAmino(object: _11.QueryAllReleaseRequestAmino): _11.QueryAllReleaseRequest;
                toAmino(message: _11.QueryAllReleaseRequest): _11.QueryAllReleaseRequestAmino;
                fromAminoMsg(object: _11.QueryAllReleaseRequestAminoMsg): _11.QueryAllReleaseRequest;
                fromProtoMsg(message: _11.QueryAllReleaseRequestProtoMsg): _11.QueryAllReleaseRequest;
                toProto(message: _11.QueryAllReleaseRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllReleaseRequest): _11.QueryAllReleaseRequestProtoMsg;
            };
            QueryAllReleaseResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllReleaseResponse;
                fromPartial(object: Partial<_11.QueryAllReleaseResponse>): _11.QueryAllReleaseResponse;
                fromAmino(object: _11.QueryAllReleaseResponseAmino): _11.QueryAllReleaseResponse;
                toAmino(message: _11.QueryAllReleaseResponse): _11.QueryAllReleaseResponseAmino;
                fromAminoMsg(object: _11.QueryAllReleaseResponseAminoMsg): _11.QueryAllReleaseResponse;
                fromProtoMsg(message: _11.QueryAllReleaseResponseProtoMsg): _11.QueryAllReleaseResponse;
                toProto(message: _11.QueryAllReleaseResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllReleaseResponse): _11.QueryAllReleaseResponseProtoMsg;
            };
            QueryGetPullRequestRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestRequest;
                fromPartial(object: Partial<_11.QueryGetPullRequestRequest>): _11.QueryGetPullRequestRequest;
                fromAmino(object: _11.QueryGetPullRequestRequestAmino): _11.QueryGetPullRequestRequest;
                toAmino(message: _11.QueryGetPullRequestRequest): _11.QueryGetPullRequestRequestAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestRequestAminoMsg): _11.QueryGetPullRequestRequest;
                fromProtoMsg(message: _11.QueryGetPullRequestRequestProtoMsg): _11.QueryGetPullRequestRequest;
                toProto(message: _11.QueryGetPullRequestRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestRequest): _11.QueryGetPullRequestRequestProtoMsg;
            };
            QueryGetPullRequestResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestResponse;
                fromPartial(object: Partial<_11.QueryGetPullRequestResponse>): _11.QueryGetPullRequestResponse;
                fromAmino(object: _11.QueryGetPullRequestResponseAmino): _11.QueryGetPullRequestResponse;
                toAmino(message: _11.QueryGetPullRequestResponse): _11.QueryGetPullRequestResponseAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestResponseAminoMsg): _11.QueryGetPullRequestResponse;
                fromProtoMsg(message: _11.QueryGetPullRequestResponseProtoMsg): _11.QueryGetPullRequestResponse;
                toProto(message: _11.QueryGetPullRequestResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestResponse): _11.QueryGetPullRequestResponseProtoMsg;
            };
            QueryAllPullRequestRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllPullRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllPullRequestRequest;
                fromPartial(object: Partial<_11.QueryAllPullRequestRequest>): _11.QueryAllPullRequestRequest;
                fromAmino(object: _11.QueryAllPullRequestRequestAmino): _11.QueryAllPullRequestRequest;
                toAmino(message: _11.QueryAllPullRequestRequest): _11.QueryAllPullRequestRequestAmino;
                fromAminoMsg(object: _11.QueryAllPullRequestRequestAminoMsg): _11.QueryAllPullRequestRequest;
                fromProtoMsg(message: _11.QueryAllPullRequestRequestProtoMsg): _11.QueryAllPullRequestRequest;
                toProto(message: _11.QueryAllPullRequestRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllPullRequestRequest): _11.QueryAllPullRequestRequestProtoMsg;
            };
            QueryAllPullRequestResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllPullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllPullRequestResponse;
                fromPartial(object: Partial<_11.QueryAllPullRequestResponse>): _11.QueryAllPullRequestResponse;
                fromAmino(object: _11.QueryAllPullRequestResponseAmino): _11.QueryAllPullRequestResponse;
                toAmino(message: _11.QueryAllPullRequestResponse): _11.QueryAllPullRequestResponseAmino;
                fromAminoMsg(object: _11.QueryAllPullRequestResponseAminoMsg): _11.QueryAllPullRequestResponse;
                fromProtoMsg(message: _11.QueryAllPullRequestResponseProtoMsg): _11.QueryAllPullRequestResponse;
                toProto(message: _11.QueryAllPullRequestResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllPullRequestResponse): _11.QueryAllPullRequestResponseProtoMsg;
            };
            QueryGetDaoRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetDaoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetDaoRequest;
                fromPartial(object: Partial<_11.QueryGetDaoRequest>): _11.QueryGetDaoRequest;
                fromAmino(object: _11.QueryGetDaoRequestAmino): _11.QueryGetDaoRequest;
                toAmino(message: _11.QueryGetDaoRequest): _11.QueryGetDaoRequestAmino;
                fromAminoMsg(object: _11.QueryGetDaoRequestAminoMsg): _11.QueryGetDaoRequest;
                fromProtoMsg(message: _11.QueryGetDaoRequestProtoMsg): _11.QueryGetDaoRequest;
                toProto(message: _11.QueryGetDaoRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetDaoRequest): _11.QueryGetDaoRequestProtoMsg;
            };
            QueryGetDaoResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetDaoResponse;
                fromPartial(object: Partial<_11.QueryGetDaoResponse>): _11.QueryGetDaoResponse;
                fromAmino(object: _11.QueryGetDaoResponseAmino): _11.QueryGetDaoResponse;
                toAmino(message: _11.QueryGetDaoResponse): _11.QueryGetDaoResponseAmino;
                fromAminoMsg(object: _11.QueryGetDaoResponseAminoMsg): _11.QueryGetDaoResponse;
                fromProtoMsg(message: _11.QueryGetDaoResponseProtoMsg): _11.QueryGetDaoResponse;
                toProto(message: _11.QueryGetDaoResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetDaoResponse): _11.QueryGetDaoResponseProtoMsg;
            };
            QueryAllDaoRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllDaoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllDaoRequest;
                fromPartial(object: Partial<_11.QueryAllDaoRequest>): _11.QueryAllDaoRequest;
                fromAmino(object: _11.QueryAllDaoRequestAmino): _11.QueryAllDaoRequest;
                toAmino(message: _11.QueryAllDaoRequest): _11.QueryAllDaoRequestAmino;
                fromAminoMsg(object: _11.QueryAllDaoRequestAminoMsg): _11.QueryAllDaoRequest;
                fromProtoMsg(message: _11.QueryAllDaoRequestProtoMsg): _11.QueryAllDaoRequest;
                toProto(message: _11.QueryAllDaoRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllDaoRequest): _11.QueryAllDaoRequestProtoMsg;
            };
            QueryAllDaoResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllDaoResponse;
                fromPartial(object: Partial<_11.QueryAllDaoResponse>): _11.QueryAllDaoResponse;
                fromAmino(object: _11.QueryAllDaoResponseAmino): _11.QueryAllDaoResponse;
                toAmino(message: _11.QueryAllDaoResponse): _11.QueryAllDaoResponseAmino;
                fromAminoMsg(object: _11.QueryAllDaoResponseAminoMsg): _11.QueryAllDaoResponse;
                fromProtoMsg(message: _11.QueryAllDaoResponseProtoMsg): _11.QueryAllDaoResponse;
                toProto(message: _11.QueryAllDaoResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllDaoResponse): _11.QueryAllDaoResponseProtoMsg;
            };
            QueryGetIssueCommentRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetIssueCommentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetIssueCommentRequest;
                fromPartial(object: Partial<_11.QueryGetIssueCommentRequest>): _11.QueryGetIssueCommentRequest;
                fromAmino(object: _11.QueryGetIssueCommentRequestAmino): _11.QueryGetIssueCommentRequest;
                toAmino(message: _11.QueryGetIssueCommentRequest): _11.QueryGetIssueCommentRequestAmino;
                fromAminoMsg(object: _11.QueryGetIssueCommentRequestAminoMsg): _11.QueryGetIssueCommentRequest;
                fromProtoMsg(message: _11.QueryGetIssueCommentRequestProtoMsg): _11.QueryGetIssueCommentRequest;
                toProto(message: _11.QueryGetIssueCommentRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetIssueCommentRequest): _11.QueryGetIssueCommentRequestProtoMsg;
            };
            QueryGetIssueCommentResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetIssueCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetIssueCommentResponse;
                fromPartial(object: Partial<_11.QueryGetIssueCommentResponse>): _11.QueryGetIssueCommentResponse;
                fromAmino(object: _11.QueryGetIssueCommentResponseAmino): _11.QueryGetIssueCommentResponse;
                toAmino(message: _11.QueryGetIssueCommentResponse): _11.QueryGetIssueCommentResponseAmino;
                fromAminoMsg(object: _11.QueryGetIssueCommentResponseAminoMsg): _11.QueryGetIssueCommentResponse;
                fromProtoMsg(message: _11.QueryGetIssueCommentResponseProtoMsg): _11.QueryGetIssueCommentResponse;
                toProto(message: _11.QueryGetIssueCommentResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetIssueCommentResponse): _11.QueryGetIssueCommentResponseProtoMsg;
            };
            QueryGetPullRequestCommentRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestCommentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestCommentRequest;
                fromPartial(object: Partial<_11.QueryGetPullRequestCommentRequest>): _11.QueryGetPullRequestCommentRequest;
                fromAmino(object: _11.QueryGetPullRequestCommentRequestAmino): _11.QueryGetPullRequestCommentRequest;
                toAmino(message: _11.QueryGetPullRequestCommentRequest): _11.QueryGetPullRequestCommentRequestAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestCommentRequestAminoMsg): _11.QueryGetPullRequestCommentRequest;
                fromProtoMsg(message: _11.QueryGetPullRequestCommentRequestProtoMsg): _11.QueryGetPullRequestCommentRequest;
                toProto(message: _11.QueryGetPullRequestCommentRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestCommentRequest): _11.QueryGetPullRequestCommentRequestProtoMsg;
            };
            QueryGetPullRequestCommentResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetPullRequestCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetPullRequestCommentResponse;
                fromPartial(object: Partial<_11.QueryGetPullRequestCommentResponse>): _11.QueryGetPullRequestCommentResponse;
                fromAmino(object: _11.QueryGetPullRequestCommentResponseAmino): _11.QueryGetPullRequestCommentResponse;
                toAmino(message: _11.QueryGetPullRequestCommentResponse): _11.QueryGetPullRequestCommentResponseAmino;
                fromAminoMsg(object: _11.QueryGetPullRequestCommentResponseAminoMsg): _11.QueryGetPullRequestCommentResponse;
                fromProtoMsg(message: _11.QueryGetPullRequestCommentResponseProtoMsg): _11.QueryGetPullRequestCommentResponse;
                toProto(message: _11.QueryGetPullRequestCommentResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetPullRequestCommentResponse): _11.QueryGetPullRequestCommentResponseProtoMsg;
            };
            QueryAllCommentRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllCommentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllCommentRequest;
                fromPartial(object: Partial<_11.QueryAllCommentRequest>): _11.QueryAllCommentRequest;
                fromAmino(object: _11.QueryAllCommentRequestAmino): _11.QueryAllCommentRequest;
                toAmino(message: _11.QueryAllCommentRequest): _11.QueryAllCommentRequestAmino;
                fromAminoMsg(object: _11.QueryAllCommentRequestAminoMsg): _11.QueryAllCommentRequest;
                fromProtoMsg(message: _11.QueryAllCommentRequestProtoMsg): _11.QueryAllCommentRequest;
                toProto(message: _11.QueryAllCommentRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllCommentRequest): _11.QueryAllCommentRequestProtoMsg;
            };
            QueryAllCommentResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllCommentResponse;
                fromPartial(object: Partial<_11.QueryAllCommentResponse>): _11.QueryAllCommentResponse;
                fromAmino(object: _11.QueryAllCommentResponseAmino): _11.QueryAllCommentResponse;
                toAmino(message: _11.QueryAllCommentResponse): _11.QueryAllCommentResponseAmino;
                fromAminoMsg(object: _11.QueryAllCommentResponseAminoMsg): _11.QueryAllCommentResponse;
                fromProtoMsg(message: _11.QueryAllCommentResponseProtoMsg): _11.QueryAllCommentResponse;
                toProto(message: _11.QueryAllCommentResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllCommentResponse): _11.QueryAllCommentResponseProtoMsg;
            };
            QueryAllIssueCommentRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllIssueCommentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllIssueCommentRequest;
                fromPartial(object: Partial<_11.QueryAllIssueCommentRequest>): _11.QueryAllIssueCommentRequest;
                fromAmino(object: _11.QueryAllIssueCommentRequestAmino): _11.QueryAllIssueCommentRequest;
                toAmino(message: _11.QueryAllIssueCommentRequest): _11.QueryAllIssueCommentRequestAmino;
                fromAminoMsg(object: _11.QueryAllIssueCommentRequestAminoMsg): _11.QueryAllIssueCommentRequest;
                fromProtoMsg(message: _11.QueryAllIssueCommentRequestProtoMsg): _11.QueryAllIssueCommentRequest;
                toProto(message: _11.QueryAllIssueCommentRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllIssueCommentRequest): _11.QueryAllIssueCommentRequestProtoMsg;
            };
            QueryAllIssueCommentResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllIssueCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllIssueCommentResponse;
                fromPartial(object: Partial<_11.QueryAllIssueCommentResponse>): _11.QueryAllIssueCommentResponse;
                fromAmino(object: _11.QueryAllIssueCommentResponseAmino): _11.QueryAllIssueCommentResponse;
                toAmino(message: _11.QueryAllIssueCommentResponse): _11.QueryAllIssueCommentResponseAmino;
                fromAminoMsg(object: _11.QueryAllIssueCommentResponseAminoMsg): _11.QueryAllIssueCommentResponse;
                fromProtoMsg(message: _11.QueryAllIssueCommentResponseProtoMsg): _11.QueryAllIssueCommentResponse;
                toProto(message: _11.QueryAllIssueCommentResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllIssueCommentResponse): _11.QueryAllIssueCommentResponseProtoMsg;
            };
            QueryAllPullRequestCommentRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllPullRequestCommentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllPullRequestCommentRequest;
                fromPartial(object: Partial<_11.QueryAllPullRequestCommentRequest>): _11.QueryAllPullRequestCommentRequest;
                fromAmino(object: _11.QueryAllPullRequestCommentRequestAmino): _11.QueryAllPullRequestCommentRequest;
                toAmino(message: _11.QueryAllPullRequestCommentRequest): _11.QueryAllPullRequestCommentRequestAmino;
                fromAminoMsg(object: _11.QueryAllPullRequestCommentRequestAminoMsg): _11.QueryAllPullRequestCommentRequest;
                fromProtoMsg(message: _11.QueryAllPullRequestCommentRequestProtoMsg): _11.QueryAllPullRequestCommentRequest;
                toProto(message: _11.QueryAllPullRequestCommentRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllPullRequestCommentRequest): _11.QueryAllPullRequestCommentRequestProtoMsg;
            };
            QueryAllPullRequestCommentResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllPullRequestCommentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllPullRequestCommentResponse;
                fromPartial(object: Partial<_11.QueryAllPullRequestCommentResponse>): _11.QueryAllPullRequestCommentResponse;
                fromAmino(object: _11.QueryAllPullRequestCommentResponseAmino): _11.QueryAllPullRequestCommentResponse;
                toAmino(message: _11.QueryAllPullRequestCommentResponse): _11.QueryAllPullRequestCommentResponseAmino;
                fromAminoMsg(object: _11.QueryAllPullRequestCommentResponseAminoMsg): _11.QueryAllPullRequestCommentResponse;
                fromProtoMsg(message: _11.QueryAllPullRequestCommentResponseProtoMsg): _11.QueryAllPullRequestCommentResponse;
                toProto(message: _11.QueryAllPullRequestCommentResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllPullRequestCommentResponse): _11.QueryAllPullRequestCommentResponseProtoMsg;
            };
            QueryAllIssueRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllIssueRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllIssueRequest;
                fromPartial(object: Partial<_11.QueryAllIssueRequest>): _11.QueryAllIssueRequest;
                fromAmino(object: _11.QueryAllIssueRequestAmino): _11.QueryAllIssueRequest;
                toAmino(message: _11.QueryAllIssueRequest): _11.QueryAllIssueRequestAmino;
                fromAminoMsg(object: _11.QueryAllIssueRequestAminoMsg): _11.QueryAllIssueRequest;
                fromProtoMsg(message: _11.QueryAllIssueRequestProtoMsg): _11.QueryAllIssueRequest;
                toProto(message: _11.QueryAllIssueRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllIssueRequest): _11.QueryAllIssueRequestProtoMsg;
            };
            QueryAllIssueResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllIssueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllIssueResponse;
                fromPartial(object: Partial<_11.QueryAllIssueResponse>): _11.QueryAllIssueResponse;
                fromAmino(object: _11.QueryAllIssueResponseAmino): _11.QueryAllIssueResponse;
                toAmino(message: _11.QueryAllIssueResponse): _11.QueryAllIssueResponseAmino;
                fromAminoMsg(object: _11.QueryAllIssueResponseAminoMsg): _11.QueryAllIssueResponse;
                fromProtoMsg(message: _11.QueryAllIssueResponseProtoMsg): _11.QueryAllIssueResponse;
                toProto(message: _11.QueryAllIssueResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllIssueResponse): _11.QueryAllIssueResponseProtoMsg;
            };
            QueryGetLatestRepositoryReleaseRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetLatestRepositoryReleaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetLatestRepositoryReleaseRequest;
                fromPartial(object: Partial<_11.QueryGetLatestRepositoryReleaseRequest>): _11.QueryGetLatestRepositoryReleaseRequest;
                fromAmino(object: _11.QueryGetLatestRepositoryReleaseRequestAmino): _11.QueryGetLatestRepositoryReleaseRequest;
                toAmino(message: _11.QueryGetLatestRepositoryReleaseRequest): _11.QueryGetLatestRepositoryReleaseRequestAmino;
                fromAminoMsg(object: _11.QueryGetLatestRepositoryReleaseRequestAminoMsg): _11.QueryGetLatestRepositoryReleaseRequest;
                fromProtoMsg(message: _11.QueryGetLatestRepositoryReleaseRequestProtoMsg): _11.QueryGetLatestRepositoryReleaseRequest;
                toProto(message: _11.QueryGetLatestRepositoryReleaseRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetLatestRepositoryReleaseRequest): _11.QueryGetLatestRepositoryReleaseRequestProtoMsg;
            };
            QueryGetLatestRepositoryReleaseResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetLatestRepositoryReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetLatestRepositoryReleaseResponse;
                fromPartial(object: Partial<_11.QueryGetLatestRepositoryReleaseResponse>): _11.QueryGetLatestRepositoryReleaseResponse;
                fromAmino(object: _11.QueryGetLatestRepositoryReleaseResponseAmino): _11.QueryGetLatestRepositoryReleaseResponse;
                toAmino(message: _11.QueryGetLatestRepositoryReleaseResponse): _11.QueryGetLatestRepositoryReleaseResponseAmino;
                fromAminoMsg(object: _11.QueryGetLatestRepositoryReleaseResponseAminoMsg): _11.QueryGetLatestRepositoryReleaseResponse;
                fromProtoMsg(message: _11.QueryGetLatestRepositoryReleaseResponseProtoMsg): _11.QueryGetLatestRepositoryReleaseResponse;
                toProto(message: _11.QueryGetLatestRepositoryReleaseResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetLatestRepositoryReleaseResponse): _11.QueryGetLatestRepositoryReleaseResponseProtoMsg;
            };
            QueryGetRepositoryReleaseRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryReleaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryReleaseRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryReleaseRequest>): _11.QueryGetRepositoryReleaseRequest;
                fromAmino(object: _11.QueryGetRepositoryReleaseRequestAmino): _11.QueryGetRepositoryReleaseRequest;
                toAmino(message: _11.QueryGetRepositoryReleaseRequest): _11.QueryGetRepositoryReleaseRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryReleaseRequestAminoMsg): _11.QueryGetRepositoryReleaseRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryReleaseRequestProtoMsg): _11.QueryGetRepositoryReleaseRequest;
                toProto(message: _11.QueryGetRepositoryReleaseRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryReleaseRequest): _11.QueryGetRepositoryReleaseRequestProtoMsg;
            };
            QueryGetRepositoryReleaseResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryReleaseResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryReleaseResponse>): _11.QueryGetRepositoryReleaseResponse;
                fromAmino(object: _11.QueryGetRepositoryReleaseResponseAmino): _11.QueryGetRepositoryReleaseResponse;
                toAmino(message: _11.QueryGetRepositoryReleaseResponse): _11.QueryGetRepositoryReleaseResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryReleaseResponseAminoMsg): _11.QueryGetRepositoryReleaseResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryReleaseResponseProtoMsg): _11.QueryGetRepositoryReleaseResponse;
                toProto(message: _11.QueryGetRepositoryReleaseResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryReleaseResponse): _11.QueryGetRepositoryReleaseResponseProtoMsg;
            };
            QueryAllRepositoryReleaseRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryReleaseRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryReleaseRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryReleaseRequest>): _11.QueryAllRepositoryReleaseRequest;
                fromAmino(object: _11.QueryAllRepositoryReleaseRequestAmino): _11.QueryAllRepositoryReleaseRequest;
                toAmino(message: _11.QueryAllRepositoryReleaseRequest): _11.QueryAllRepositoryReleaseRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryReleaseRequestAminoMsg): _11.QueryAllRepositoryReleaseRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryReleaseRequestProtoMsg): _11.QueryAllRepositoryReleaseRequest;
                toProto(message: _11.QueryAllRepositoryReleaseRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryReleaseRequest): _11.QueryAllRepositoryReleaseRequestProtoMsg;
            };
            QueryAllRepositoryReleaseResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryReleaseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryReleaseResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryReleaseResponse>): _11.QueryAllRepositoryReleaseResponse;
                fromAmino(object: _11.QueryAllRepositoryReleaseResponseAmino): _11.QueryAllRepositoryReleaseResponse;
                toAmino(message: _11.QueryAllRepositoryReleaseResponse): _11.QueryAllRepositoryReleaseResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryReleaseResponseAminoMsg): _11.QueryAllRepositoryReleaseResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryReleaseResponseProtoMsg): _11.QueryAllRepositoryReleaseResponse;
                toProto(message: _11.QueryAllRepositoryReleaseResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryReleaseResponse): _11.QueryAllRepositoryReleaseResponseProtoMsg;
            };
            QueryGetRepositoryIssueRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryIssueRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryIssueRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryIssueRequest>): _11.QueryGetRepositoryIssueRequest;
                fromAmino(object: _11.QueryGetRepositoryIssueRequestAmino): _11.QueryGetRepositoryIssueRequest;
                toAmino(message: _11.QueryGetRepositoryIssueRequest): _11.QueryGetRepositoryIssueRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryIssueRequestAminoMsg): _11.QueryGetRepositoryIssueRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryIssueRequestProtoMsg): _11.QueryGetRepositoryIssueRequest;
                toProto(message: _11.QueryGetRepositoryIssueRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryIssueRequest): _11.QueryGetRepositoryIssueRequestProtoMsg;
            };
            QueryGetRepositoryIssueResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryIssueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryIssueResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryIssueResponse>): _11.QueryGetRepositoryIssueResponse;
                fromAmino(object: _11.QueryGetRepositoryIssueResponseAmino): _11.QueryGetRepositoryIssueResponse;
                toAmino(message: _11.QueryGetRepositoryIssueResponse): _11.QueryGetRepositoryIssueResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryIssueResponseAminoMsg): _11.QueryGetRepositoryIssueResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryIssueResponseProtoMsg): _11.QueryGetRepositoryIssueResponse;
                toProto(message: _11.QueryGetRepositoryIssueResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryIssueResponse): _11.QueryGetRepositoryIssueResponseProtoMsg;
            };
            QueryGetRepositoryPullRequestRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryPullRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryPullRequestRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryPullRequestRequest>): _11.QueryGetRepositoryPullRequestRequest;
                fromAmino(object: _11.QueryGetRepositoryPullRequestRequestAmino): _11.QueryGetRepositoryPullRequestRequest;
                toAmino(message: _11.QueryGetRepositoryPullRequestRequest): _11.QueryGetRepositoryPullRequestRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryPullRequestRequestAminoMsg): _11.QueryGetRepositoryPullRequestRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryPullRequestRequestProtoMsg): _11.QueryGetRepositoryPullRequestRequest;
                toProto(message: _11.QueryGetRepositoryPullRequestRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryPullRequestRequest): _11.QueryGetRepositoryPullRequestRequestProtoMsg;
            };
            QueryGetRepositoryPullRequestResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryPullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryPullRequestResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryPullRequestResponse>): _11.QueryGetRepositoryPullRequestResponse;
                fromAmino(object: _11.QueryGetRepositoryPullRequestResponseAmino): _11.QueryGetRepositoryPullRequestResponse;
                toAmino(message: _11.QueryGetRepositoryPullRequestResponse): _11.QueryGetRepositoryPullRequestResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryPullRequestResponseAminoMsg): _11.QueryGetRepositoryPullRequestResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryPullRequestResponseProtoMsg): _11.QueryGetRepositoryPullRequestResponse;
                toProto(message: _11.QueryGetRepositoryPullRequestResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryPullRequestResponse): _11.QueryGetRepositoryPullRequestResponseProtoMsg;
            };
            QueryAllRepositoryIssueRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryIssueRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryIssueRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryIssueRequest>): _11.QueryAllRepositoryIssueRequest;
                fromAmino(object: _11.QueryAllRepositoryIssueRequestAmino): _11.QueryAllRepositoryIssueRequest;
                toAmino(message: _11.QueryAllRepositoryIssueRequest): _11.QueryAllRepositoryIssueRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryIssueRequestAminoMsg): _11.QueryAllRepositoryIssueRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryIssueRequestProtoMsg): _11.QueryAllRepositoryIssueRequest;
                toProto(message: _11.QueryAllRepositoryIssueRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryIssueRequest): _11.QueryAllRepositoryIssueRequestProtoMsg;
            };
            IssueOptions: {
                typeUrl: string;
                encode(message: _11.IssueOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.IssueOptions;
                fromPartial(object: Partial<_11.IssueOptions>): _11.IssueOptions;
                fromAmino(object: _11.IssueOptionsAmino): _11.IssueOptions;
                toAmino(message: _11.IssueOptions): _11.IssueOptionsAmino;
                fromAminoMsg(object: _11.IssueOptionsAminoMsg): _11.IssueOptions;
                fromProtoMsg(message: _11.IssueOptionsProtoMsg): _11.IssueOptions;
                toProto(message: _11.IssueOptions): Uint8Array;
                toProtoMsg(message: _11.IssueOptions): _11.IssueOptionsProtoMsg;
            };
            QueryAllRepositoryIssueResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryIssueResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryIssueResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryIssueResponse>): _11.QueryAllRepositoryIssueResponse;
                fromAmino(object: _11.QueryAllRepositoryIssueResponseAmino): _11.QueryAllRepositoryIssueResponse;
                toAmino(message: _11.QueryAllRepositoryIssueResponse): _11.QueryAllRepositoryIssueResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryIssueResponseAminoMsg): _11.QueryAllRepositoryIssueResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryIssueResponseProtoMsg): _11.QueryAllRepositoryIssueResponse;
                toProto(message: _11.QueryAllRepositoryIssueResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryIssueResponse): _11.QueryAllRepositoryIssueResponseProtoMsg;
            };
            QueryAllRepositoryPullRequestRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryPullRequestRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryPullRequestRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryPullRequestRequest>): _11.QueryAllRepositoryPullRequestRequest;
                fromAmino(object: _11.QueryAllRepositoryPullRequestRequestAmino): _11.QueryAllRepositoryPullRequestRequest;
                toAmino(message: _11.QueryAllRepositoryPullRequestRequest): _11.QueryAllRepositoryPullRequestRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryPullRequestRequestAminoMsg): _11.QueryAllRepositoryPullRequestRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryPullRequestRequestProtoMsg): _11.QueryAllRepositoryPullRequestRequest;
                toProto(message: _11.QueryAllRepositoryPullRequestRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryPullRequestRequest): _11.QueryAllRepositoryPullRequestRequestProtoMsg;
            };
            PullRequestOptions: {
                typeUrl: string;
                encode(message: _11.PullRequestOptions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.PullRequestOptions;
                fromPartial(object: Partial<_11.PullRequestOptions>): _11.PullRequestOptions;
                fromAmino(object: _11.PullRequestOptionsAmino): _11.PullRequestOptions;
                toAmino(message: _11.PullRequestOptions): _11.PullRequestOptionsAmino;
                fromAminoMsg(object: _11.PullRequestOptionsAminoMsg): _11.PullRequestOptions;
                fromProtoMsg(message: _11.PullRequestOptionsProtoMsg): _11.PullRequestOptions;
                toProto(message: _11.PullRequestOptions): Uint8Array;
                toProtoMsg(message: _11.PullRequestOptions): _11.PullRequestOptionsProtoMsg;
            };
            QueryAllRepositoryPullRequestResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryPullRequestResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryPullRequestResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryPullRequestResponse>): _11.QueryAllRepositoryPullRequestResponse;
                fromAmino(object: _11.QueryAllRepositoryPullRequestResponseAmino): _11.QueryAllRepositoryPullRequestResponse;
                toAmino(message: _11.QueryAllRepositoryPullRequestResponse): _11.QueryAllRepositoryPullRequestResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryPullRequestResponseAminoMsg): _11.QueryAllRepositoryPullRequestResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryPullRequestResponseProtoMsg): _11.QueryAllRepositoryPullRequestResponse;
                toProto(message: _11.QueryAllRepositoryPullRequestResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryPullRequestResponse): _11.QueryAllRepositoryPullRequestResponseProtoMsg;
            };
            QueryGetRepositoryRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryRequest;
                fromPartial(object: Partial<_11.QueryGetRepositoryRequest>): _11.QueryGetRepositoryRequest;
                fromAmino(object: _11.QueryGetRepositoryRequestAmino): _11.QueryGetRepositoryRequest;
                toAmino(message: _11.QueryGetRepositoryRequest): _11.QueryGetRepositoryRequestAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryRequestAminoMsg): _11.QueryGetRepositoryRequest;
                fromProtoMsg(message: _11.QueryGetRepositoryRequestProtoMsg): _11.QueryGetRepositoryRequest;
                toProto(message: _11.QueryGetRepositoryRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryRequest): _11.QueryGetRepositoryRequestProtoMsg;
            };
            QueryGetRepositoryResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetRepositoryResponse;
                fromPartial(object: Partial<_11.QueryGetRepositoryResponse>): _11.QueryGetRepositoryResponse;
                fromAmino(object: _11.QueryGetRepositoryResponseAmino): _11.QueryGetRepositoryResponse;
                toAmino(message: _11.QueryGetRepositoryResponse): _11.QueryGetRepositoryResponseAmino;
                fromAminoMsg(object: _11.QueryGetRepositoryResponseAminoMsg): _11.QueryGetRepositoryResponse;
                fromProtoMsg(message: _11.QueryGetRepositoryResponseProtoMsg): _11.QueryGetRepositoryResponse;
                toProto(message: _11.QueryGetRepositoryResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetRepositoryResponse): _11.QueryGetRepositoryResponseProtoMsg;
            };
            RepositoryFork: {
                typeUrl: string;
                encode(message: _11.RepositoryFork, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.RepositoryFork;
                fromPartial(object: Partial<_11.RepositoryFork>): _11.RepositoryFork;
                fromAmino(object: _11.RepositoryForkAmino): _11.RepositoryFork;
                toAmino(message: _11.RepositoryFork): _11.RepositoryForkAmino;
                fromAminoMsg(object: _11.RepositoryForkAminoMsg): _11.RepositoryFork;
                fromProtoMsg(message: _11.RepositoryForkProtoMsg): _11.RepositoryFork;
                toProto(message: _11.RepositoryFork): Uint8Array;
                toProtoMsg(message: _11.RepositoryFork): _11.RepositoryForkProtoMsg;
            };
            QueryGetAllForkRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetAllForkRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetAllForkRequest;
                fromPartial(object: Partial<_11.QueryGetAllForkRequest>): _11.QueryGetAllForkRequest;
                fromAmino(object: _11.QueryGetAllForkRequestAmino): _11.QueryGetAllForkRequest;
                toAmino(message: _11.QueryGetAllForkRequest): _11.QueryGetAllForkRequestAmino;
                fromAminoMsg(object: _11.QueryGetAllForkRequestAminoMsg): _11.QueryGetAllForkRequest;
                fromProtoMsg(message: _11.QueryGetAllForkRequestProtoMsg): _11.QueryGetAllForkRequest;
                toProto(message: _11.QueryGetAllForkRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetAllForkRequest): _11.QueryGetAllForkRequestProtoMsg;
            };
            QueryGetAllForkResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetAllForkResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetAllForkResponse;
                fromPartial(object: Partial<_11.QueryGetAllForkResponse>): _11.QueryGetAllForkResponse;
                fromAmino(object: _11.QueryGetAllForkResponseAmino): _11.QueryGetAllForkResponse;
                toAmino(message: _11.QueryGetAllForkResponse): _11.QueryGetAllForkResponseAmino;
                fromAminoMsg(object: _11.QueryGetAllForkResponseAminoMsg): _11.QueryGetAllForkResponse;
                fromProtoMsg(message: _11.QueryGetAllForkResponseProtoMsg): _11.QueryGetAllForkResponse;
                toProto(message: _11.QueryGetAllForkResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetAllForkResponse): _11.QueryGetAllForkResponseProtoMsg;
            };
            QueryAllRepositoryRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryRequest;
                fromPartial(object: Partial<_11.QueryAllRepositoryRequest>): _11.QueryAllRepositoryRequest;
                fromAmino(object: _11.QueryAllRepositoryRequestAmino): _11.QueryAllRepositoryRequest;
                toAmino(message: _11.QueryAllRepositoryRequest): _11.QueryAllRepositoryRequestAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryRequestAminoMsg): _11.QueryAllRepositoryRequest;
                fromProtoMsg(message: _11.QueryAllRepositoryRequestProtoMsg): _11.QueryAllRepositoryRequest;
                toProto(message: _11.QueryAllRepositoryRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryRequest): _11.QueryAllRepositoryRequestProtoMsg;
            };
            QueryAllRepositoryResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllRepositoryResponse;
                fromPartial(object: Partial<_11.QueryAllRepositoryResponse>): _11.QueryAllRepositoryResponse;
                fromAmino(object: _11.QueryAllRepositoryResponseAmino): _11.QueryAllRepositoryResponse;
                toAmino(message: _11.QueryAllRepositoryResponse): _11.QueryAllRepositoryResponseAmino;
                fromAminoMsg(object: _11.QueryAllRepositoryResponseAminoMsg): _11.QueryAllRepositoryResponse;
                fromProtoMsg(message: _11.QueryAllRepositoryResponseProtoMsg): _11.QueryAllRepositoryResponse;
                toProto(message: _11.QueryAllRepositoryResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllRepositoryResponse): _11.QueryAllRepositoryResponseProtoMsg;
            };
            QueryGetUserRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetUserRequest;
                fromPartial(object: Partial<_11.QueryGetUserRequest>): _11.QueryGetUserRequest;
                fromAmino(object: _11.QueryGetUserRequestAmino): _11.QueryGetUserRequest;
                toAmino(message: _11.QueryGetUserRequest): _11.QueryGetUserRequestAmino;
                fromAminoMsg(object: _11.QueryGetUserRequestAminoMsg): _11.QueryGetUserRequest;
                fromProtoMsg(message: _11.QueryGetUserRequestProtoMsg): _11.QueryGetUserRequest;
                toProto(message: _11.QueryGetUserRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetUserRequest): _11.QueryGetUserRequestProtoMsg;
            };
            QueryGetUserResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetUserResponse;
                fromPartial(object: Partial<_11.QueryGetUserResponse>): _11.QueryGetUserResponse;
                fromAmino(object: _11.QueryGetUserResponseAmino): _11.QueryGetUserResponse;
                toAmino(message: _11.QueryGetUserResponse): _11.QueryGetUserResponseAmino;
                fromAminoMsg(object: _11.QueryGetUserResponseAminoMsg): _11.QueryGetUserResponse;
                fromProtoMsg(message: _11.QueryGetUserResponseProtoMsg): _11.QueryGetUserResponse;
                toProto(message: _11.QueryGetUserResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetUserResponse): _11.QueryGetUserResponseProtoMsg;
            };
            QueryAllUserDaoRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllUserDaoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllUserDaoRequest;
                fromPartial(object: Partial<_11.QueryAllUserDaoRequest>): _11.QueryAllUserDaoRequest;
                fromAmino(object: _11.QueryAllUserDaoRequestAmino): _11.QueryAllUserDaoRequest;
                toAmino(message: _11.QueryAllUserDaoRequest): _11.QueryAllUserDaoRequestAmino;
                fromAminoMsg(object: _11.QueryAllUserDaoRequestAminoMsg): _11.QueryAllUserDaoRequest;
                fromProtoMsg(message: _11.QueryAllUserDaoRequestProtoMsg): _11.QueryAllUserDaoRequest;
                toProto(message: _11.QueryAllUserDaoRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllUserDaoRequest): _11.QueryAllUserDaoRequestProtoMsg;
            };
            QueryAllUserDaoResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllUserDaoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllUserDaoResponse;
                fromPartial(object: Partial<_11.QueryAllUserDaoResponse>): _11.QueryAllUserDaoResponse;
                fromAmino(object: _11.QueryAllUserDaoResponseAmino): _11.QueryAllUserDaoResponse;
                toAmino(message: _11.QueryAllUserDaoResponse): _11.QueryAllUserDaoResponseAmino;
                fromAminoMsg(object: _11.QueryAllUserDaoResponseAminoMsg): _11.QueryAllUserDaoResponse;
                fromProtoMsg(message: _11.QueryAllUserDaoResponseProtoMsg): _11.QueryAllUserDaoResponse;
                toProto(message: _11.QueryAllUserDaoResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllUserDaoResponse): _11.QueryAllUserDaoResponseProtoMsg;
            };
            QueryAllUserRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllUserRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllUserRequest;
                fromPartial(object: Partial<_11.QueryAllUserRequest>): _11.QueryAllUserRequest;
                fromAmino(object: _11.QueryAllUserRequestAmino): _11.QueryAllUserRequest;
                toAmino(message: _11.QueryAllUserRequest): _11.QueryAllUserRequestAmino;
                fromAminoMsg(object: _11.QueryAllUserRequestAminoMsg): _11.QueryAllUserRequest;
                fromProtoMsg(message: _11.QueryAllUserRequestProtoMsg): _11.QueryAllUserRequest;
                toProto(message: _11.QueryAllUserRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllUserRequest): _11.QueryAllUserRequestProtoMsg;
            };
            QueryAllUserResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllUserResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllUserResponse;
                fromPartial(object: Partial<_11.QueryAllUserResponse>): _11.QueryAllUserResponse;
                fromAmino(object: _11.QueryAllUserResponseAmino): _11.QueryAllUserResponse;
                toAmino(message: _11.QueryAllUserResponse): _11.QueryAllUserResponseAmino;
                fromAminoMsg(object: _11.QueryAllUserResponseAminoMsg): _11.QueryAllUserResponse;
                fromProtoMsg(message: _11.QueryAllUserResponseProtoMsg): _11.QueryAllUserResponse;
                toProto(message: _11.QueryAllUserResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllUserResponse): _11.QueryAllUserResponseProtoMsg;
            };
            QueryAllAnyRepositoryRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllAnyRepositoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllAnyRepositoryRequest;
                fromPartial(object: Partial<_11.QueryAllAnyRepositoryRequest>): _11.QueryAllAnyRepositoryRequest;
                fromAmino(object: _11.QueryAllAnyRepositoryRequestAmino): _11.QueryAllAnyRepositoryRequest;
                toAmino(message: _11.QueryAllAnyRepositoryRequest): _11.QueryAllAnyRepositoryRequestAmino;
                fromAminoMsg(object: _11.QueryAllAnyRepositoryRequestAminoMsg): _11.QueryAllAnyRepositoryRequest;
                fromProtoMsg(message: _11.QueryAllAnyRepositoryRequestProtoMsg): _11.QueryAllAnyRepositoryRequest;
                toProto(message: _11.QueryAllAnyRepositoryRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllAnyRepositoryRequest): _11.QueryAllAnyRepositoryRequestProtoMsg;
            };
            QueryAllAnyRepositoryResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllAnyRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllAnyRepositoryResponse;
                fromPartial(object: Partial<_11.QueryAllAnyRepositoryResponse>): _11.QueryAllAnyRepositoryResponse;
                fromAmino(object: _11.QueryAllAnyRepositoryResponseAmino): _11.QueryAllAnyRepositoryResponse;
                toAmino(message: _11.QueryAllAnyRepositoryResponse): _11.QueryAllAnyRepositoryResponseAmino;
                fromAminoMsg(object: _11.QueryAllAnyRepositoryResponseAminoMsg): _11.QueryAllAnyRepositoryResponse;
                fromProtoMsg(message: _11.QueryAllAnyRepositoryResponseProtoMsg): _11.QueryAllAnyRepositoryResponse;
                toProto(message: _11.QueryAllAnyRepositoryResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllAnyRepositoryResponse): _11.QueryAllAnyRepositoryResponseProtoMsg;
            };
            QueryGetAnyRepositoryRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetAnyRepositoryRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetAnyRepositoryRequest;
                fromPartial(object: Partial<_11.QueryGetAnyRepositoryRequest>): _11.QueryGetAnyRepositoryRequest;
                fromAmino(object: _11.QueryGetAnyRepositoryRequestAmino): _11.QueryGetAnyRepositoryRequest;
                toAmino(message: _11.QueryGetAnyRepositoryRequest): _11.QueryGetAnyRepositoryRequestAmino;
                fromAminoMsg(object: _11.QueryGetAnyRepositoryRequestAminoMsg): _11.QueryGetAnyRepositoryRequest;
                fromProtoMsg(message: _11.QueryGetAnyRepositoryRequestProtoMsg): _11.QueryGetAnyRepositoryRequest;
                toProto(message: _11.QueryGetAnyRepositoryRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetAnyRepositoryRequest): _11.QueryGetAnyRepositoryRequestProtoMsg;
            };
            QueryGetAnyRepositoryResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetAnyRepositoryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetAnyRepositoryResponse;
                fromPartial(object: Partial<_11.QueryGetAnyRepositoryResponse>): _11.QueryGetAnyRepositoryResponse;
                fromAmino(object: _11.QueryGetAnyRepositoryResponseAmino): _11.QueryGetAnyRepositoryResponse;
                toAmino(message: _11.QueryGetAnyRepositoryResponse): _11.QueryGetAnyRepositoryResponseAmino;
                fromAminoMsg(object: _11.QueryGetAnyRepositoryResponseAminoMsg): _11.QueryGetAnyRepositoryResponse;
                fromProtoMsg(message: _11.QueryGetAnyRepositoryResponseProtoMsg): _11.QueryGetAnyRepositoryResponse;
                toProto(message: _11.QueryGetAnyRepositoryResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetAnyRepositoryResponse): _11.QueryGetAnyRepositoryResponseProtoMsg;
            };
            QueryGetWhoisRequest: {
                typeUrl: string;
                encode(message: _11.QueryGetWhoisRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetWhoisRequest;
                fromPartial(object: Partial<_11.QueryGetWhoisRequest>): _11.QueryGetWhoisRequest;
                fromAmino(object: _11.QueryGetWhoisRequestAmino): _11.QueryGetWhoisRequest;
                toAmino(message: _11.QueryGetWhoisRequest): _11.QueryGetWhoisRequestAmino;
                fromAminoMsg(object: _11.QueryGetWhoisRequestAminoMsg): _11.QueryGetWhoisRequest;
                fromProtoMsg(message: _11.QueryGetWhoisRequestProtoMsg): _11.QueryGetWhoisRequest;
                toProto(message: _11.QueryGetWhoisRequest): Uint8Array;
                toProtoMsg(message: _11.QueryGetWhoisRequest): _11.QueryGetWhoisRequestProtoMsg;
            };
            QueryGetWhoisResponse: {
                typeUrl: string;
                encode(message: _11.QueryGetWhoisResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryGetWhoisResponse;
                fromPartial(object: Partial<_11.QueryGetWhoisResponse>): _11.QueryGetWhoisResponse;
                fromAmino(object: _11.QueryGetWhoisResponseAmino): _11.QueryGetWhoisResponse;
                toAmino(message: _11.QueryGetWhoisResponse): _11.QueryGetWhoisResponseAmino;
                fromAminoMsg(object: _11.QueryGetWhoisResponseAminoMsg): _11.QueryGetWhoisResponse;
                fromProtoMsg(message: _11.QueryGetWhoisResponseProtoMsg): _11.QueryGetWhoisResponse;
                toProto(message: _11.QueryGetWhoisResponse): Uint8Array;
                toProtoMsg(message: _11.QueryGetWhoisResponse): _11.QueryGetWhoisResponseProtoMsg;
            };
            QueryAllWhoisRequest: {
                typeUrl: string;
                encode(message: _11.QueryAllWhoisRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllWhoisRequest;
                fromPartial(object: Partial<_11.QueryAllWhoisRequest>): _11.QueryAllWhoisRequest;
                fromAmino(object: _11.QueryAllWhoisRequestAmino): _11.QueryAllWhoisRequest;
                toAmino(message: _11.QueryAllWhoisRequest): _11.QueryAllWhoisRequestAmino;
                fromAminoMsg(object: _11.QueryAllWhoisRequestAminoMsg): _11.QueryAllWhoisRequest;
                fromProtoMsg(message: _11.QueryAllWhoisRequestProtoMsg): _11.QueryAllWhoisRequest;
                toProto(message: _11.QueryAllWhoisRequest): Uint8Array;
                toProtoMsg(message: _11.QueryAllWhoisRequest): _11.QueryAllWhoisRequestProtoMsg;
            };
            QueryAllWhoisResponse: {
                typeUrl: string;
                encode(message: _11.QueryAllWhoisResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _11.QueryAllWhoisResponse;
                fromPartial(object: Partial<_11.QueryAllWhoisResponse>): _11.QueryAllWhoisResponse;
                fromAmino(object: _11.QueryAllWhoisResponseAmino): _11.QueryAllWhoisResponse;
                toAmino(message: _11.QueryAllWhoisResponse): _11.QueryAllWhoisResponseAmino;
                fromAminoMsg(object: _11.QueryAllWhoisResponseAminoMsg): _11.QueryAllWhoisResponse;
                fromProtoMsg(message: _11.QueryAllWhoisResponseProtoMsg): _11.QueryAllWhoisResponse;
                toProto(message: _11.QueryAllWhoisResponse): Uint8Array;
                toProtoMsg(message: _11.QueryAllWhoisResponse): _11.QueryAllWhoisResponseProtoMsg;
            };
            pullRequest_StateFromJSON(object: any): _10.PullRequest_State;
            pullRequest_StateToJSON(object: _10.PullRequest_State): string;
            PullRequest_State: typeof _10.PullRequest_State;
            PullRequest_StateSDKType: typeof _10.PullRequest_State;
            PullRequest_StateAmino: typeof _10.PullRequest_State;
            PullRequest: {
                typeUrl: string;
                encode(message: _10.PullRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PullRequest;
                fromPartial(object: Partial<_10.PullRequest>): _10.PullRequest;
                fromAmino(object: _10.PullRequestAmino): _10.PullRequest;
                toAmino(message: _10.PullRequest): _10.PullRequestAmino;
                fromAminoMsg(object: _10.PullRequestAminoMsg): _10.PullRequest;
                fromProtoMsg(message: _10.PullRequestProtoMsg): _10.PullRequest;
                toProto(message: _10.PullRequest): Uint8Array;
                toProtoMsg(message: _10.PullRequest): _10.PullRequestProtoMsg;
            };
            PullRequestHead: {
                typeUrl: string;
                encode(message: _10.PullRequestHead, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PullRequestHead;
                fromPartial(object: Partial<_10.PullRequestHead>): _10.PullRequestHead;
                fromAmino(object: _10.PullRequestHeadAmino): _10.PullRequestHead;
                toAmino(message: _10.PullRequestHead): _10.PullRequestHeadAmino;
                fromAminoMsg(object: _10.PullRequestHeadAminoMsg): _10.PullRequestHead;
                fromProtoMsg(message: _10.PullRequestHeadProtoMsg): _10.PullRequestHead;
                toProto(message: _10.PullRequestHead): Uint8Array;
                toProtoMsg(message: _10.PullRequestHead): _10.PullRequestHeadProtoMsg;
            };
            PullRequestBase: {
                typeUrl: string;
                encode(message: _10.PullRequestBase, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _10.PullRequestBase;
                fromPartial(object: Partial<_10.PullRequestBase>): _10.PullRequestBase;
                fromAmino(object: _10.PullRequestBaseAmino): _10.PullRequestBase;
                toAmino(message: _10.PullRequestBase): _10.PullRequestBaseAmino;
                fromAminoMsg(object: _10.PullRequestBaseAminoMsg): _10.PullRequestBase;
                fromProtoMsg(message: _10.PullRequestBaseProtoMsg): _10.PullRequestBase;
                toProto(message: _10.PullRequestBase): Uint8Array;
                toProtoMsg(message: _10.PullRequestBase): _10.PullRequestBaseProtoMsg;
            };
            DistributionProportion: {
                typeUrl: string;
                encode(message: _9.DistributionProportion, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.DistributionProportion;
                fromPartial(object: Partial<_9.DistributionProportion>): _9.DistributionProportion;
                fromAmino(object: _9.DistributionProportionAmino): _9.DistributionProportion;
                toAmino(message: _9.DistributionProportion): _9.DistributionProportionAmino;
                fromAminoMsg(object: _9.DistributionProportionAminoMsg): _9.DistributionProportion;
                fromProtoMsg(message: _9.DistributionProportionProtoMsg): _9.DistributionProportion;
                toProto(message: _9.DistributionProportion): Uint8Array;
                toProtoMsg(message: _9.DistributionProportion): _9.DistributionProportionProtoMsg;
            };
            PoolProportions: {
                typeUrl: string;
                encode(message: _9.PoolProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.PoolProportions;
                fromPartial(object: Partial<_9.PoolProportions>): _9.PoolProportions;
                fromAmino(object: _9.PoolProportionsAmino): _9.PoolProportions;
                toAmino(message: _9.PoolProportions): _9.PoolProportionsAmino;
                fromAminoMsg(object: _9.PoolProportionsAminoMsg): _9.PoolProportions;
                fromProtoMsg(message: _9.PoolProportionsProtoMsg): _9.PoolProportions;
                toProto(message: _9.PoolProportions): Uint8Array;
                toProtoMsg(message: _9.PoolProportions): _9.PoolProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _9.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _9.Params;
                fromPartial(object: Partial<_9.Params>): _9.Params;
                fromAmino(object: _9.ParamsAmino): _9.Params;
                toAmino(message: _9.Params): _9.ParamsAmino;
                fromAminoMsg(object: _9.ParamsAminoMsg): _9.Params;
                fromProtoMsg(message: _9.ParamsProtoMsg): _9.Params;
                toProto(message: _9.Params): Uint8Array;
                toProtoMsg(message: _9.Params): _9.ParamsProtoMsg;
            };
            memberRoleFromJSON(object: any): _8.MemberRole;
            memberRoleToJSON(object: _8.MemberRole): string;
            MemberRole: typeof _8.MemberRole;
            MemberRoleSDKType: typeof _8.MemberRole;
            MemberRoleAmino: typeof _8.MemberRole;
            Member: {
                typeUrl: string;
                encode(message: _8.Member, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _8.Member;
                fromPartial(object: Partial<_8.Member>): _8.Member;
                fromAmino(object: _8.MemberAmino): _8.Member;
                toAmino(message: _8.Member): _8.MemberAmino;
                fromAminoMsg(object: _8.MemberAminoMsg): _8.Member;
                fromProtoMsg(message: _8.MemberProtoMsg): _8.Member;
                toProto(message: _8.Member): Uint8Array;
                toProtoMsg(message: _8.Member): _8.MemberProtoMsg;
            };
            issue_StateFromJSON(object: any): _7.Issue_State;
            issue_StateToJSON(object: _7.Issue_State): string;
            Issue_State: typeof _7.Issue_State;
            Issue_StateSDKType: typeof _7.Issue_State;
            Issue_StateAmino: typeof _7.Issue_State;
            Issue: {
                typeUrl: string;
                encode(message: _7.Issue, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _7.Issue;
                fromPartial(object: Partial<_7.Issue>): _7.Issue;
                fromAmino(object: _7.IssueAmino): _7.Issue;
                toAmino(message: _7.Issue): _7.IssueAmino;
                fromAminoMsg(object: _7.IssueAminoMsg): _7.Issue;
                fromProtoMsg(message: _7.IssueProtoMsg): _7.Issue;
                toProto(message: _7.Issue): Uint8Array;
                toProtoMsg(message: _7.Issue): _7.IssueProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _6.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _6.GenesisState;
                fromPartial(object: Partial<_6.GenesisState>): _6.GenesisState;
                fromAmino(object: _6.GenesisStateAmino): _6.GenesisState;
                toAmino(message: _6.GenesisState): _6.GenesisStateAmino;
                fromAminoMsg(object: _6.GenesisStateAminoMsg): _6.GenesisState;
                fromProtoMsg(message: _6.GenesisStateProtoMsg): _6.GenesisState;
                toProto(message: _6.GenesisState): Uint8Array;
                toProtoMsg(message: _6.GenesisState): _6.GenesisStateProtoMsg;
            };
            ExercisedAmount: {
                typeUrl: string;
                encode(message: _5.ExercisedAmount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _5.ExercisedAmount;
                fromPartial(object: Partial<_5.ExercisedAmount>): _5.ExercisedAmount;
                fromAmino(object: _5.ExercisedAmountAmino): _5.ExercisedAmount;
                toAmino(message: _5.ExercisedAmount): _5.ExercisedAmountAmino;
                fromAminoMsg(object: _5.ExercisedAmountAminoMsg): _5.ExercisedAmount;
                fromProtoMsg(message: _5.ExercisedAmountProtoMsg): _5.ExercisedAmount;
                toProto(message: _5.ExercisedAmount): Uint8Array;
                toProtoMsg(message: _5.ExercisedAmount): _5.ExercisedAmountProtoMsg;
            };
            Dao: {
                typeUrl: string;
                encode(message: _4.Dao, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _4.Dao;
                fromPartial(object: Partial<_4.Dao>): _4.Dao;
                fromAmino(object: _4.DaoAmino): _4.Dao;
                toAmino(message: _4.Dao): _4.DaoAmino;
                fromAminoMsg(object: _4.DaoAminoMsg): _4.Dao;
                fromProtoMsg(message: _4.DaoProtoMsg): _4.Dao;
                toProto(message: _4.Dao): Uint8Array;
                toProtoMsg(message: _4.Dao): _4.DaoProtoMsg;
            };
            commentTypeFromJSON(object: any): _3.CommentType;
            commentTypeToJSON(object: _3.CommentType): string;
            commentParentFromJSON(object: any): _3.CommentParent;
            commentParentToJSON(object: _3.CommentParent): string;
            CommentType: typeof _3.CommentType;
            CommentTypeSDKType: typeof _3.CommentType;
            CommentTypeAmino: typeof _3.CommentType;
            CommentParent: typeof _3.CommentParent;
            CommentParentSDKType: typeof _3.CommentParent;
            CommentParentAmino: typeof _3.CommentParent;
            Comment: {
                typeUrl: string;
                encode(message: _3.Comment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _3.Comment;
                fromPartial(object: Partial<_3.Comment>): _3.Comment;
                fromAmino(object: _3.CommentAmino): _3.Comment;
                toAmino(message: _3.Comment): _3.CommentAmino;
                fromAminoMsg(object: _3.CommentAminoMsg): _3.Comment;
                fromProtoMsg(message: _3.CommentProtoMsg): _3.Comment;
                toProto(message: _3.Comment): Uint8Array;
                toProtoMsg(message: _3.Comment): _3.CommentProtoMsg;
            };
            Branch: {
                typeUrl: string;
                encode(message: _2.Branch, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _2.Branch;
                fromPartial(object: Partial<_2.Branch>): _2.Branch;
                fromAmino(object: _2.BranchAmino): _2.Branch;
                toAmino(message: _2.Branch): _2.BranchAmino;
                fromAminoMsg(object: _2.BranchAminoMsg): _2.Branch;
                fromProtoMsg(message: _2.BranchProtoMsg): _2.Branch;
                toProto(message: _2.Branch): Uint8Array;
                toProtoMsg(message: _2.Branch): _2.BranchProtoMsg;
            };
            bountyStateFromJSON(object: any): _1.BountyState;
            bountyStateToJSON(object: _1.BountyState): string;
            bountyParentFromJSON(object: any): _1.BountyParent;
            bountyParentToJSON(object: _1.BountyParent): string;
            BountyState: typeof _1.BountyState;
            BountyStateSDKType: typeof _1.BountyState;
            BountyStateAmino: typeof _1.BountyState;
            BountyParent: typeof _1.BountyParent;
            BountyParentSDKType: typeof _1.BountyParent;
            BountyParentAmino: typeof _1.BountyParent;
            Bounty: {
                typeUrl: string;
                encode(message: _1.Bounty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _1.Bounty;
                fromPartial(object: Partial<_1.Bounty>): _1.Bounty;
                fromAmino(object: _1.BountyAmino): _1.Bounty;
                toAmino(message: _1.Bounty): _1.BountyAmino;
                fromAminoMsg(object: _1.BountyAminoMsg): _1.Bounty;
                fromProtoMsg(message: _1.BountyProtoMsg): _1.Bounty;
                toProto(message: _1.Bounty): Uint8Array;
                toProtoMsg(message: _1.Bounty): _1.BountyProtoMsg;
            };
            Attachment: {
                typeUrl: string;
                encode(message: _0.Attachment, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _0.Attachment;
                fromPartial(object: Partial<_0.Attachment>): _0.Attachment;
                fromAmino(object: _0.AttachmentAmino): _0.Attachment;
                toAmino(message: _0.Attachment): _0.AttachmentAmino;
                fromAminoMsg(object: _0.AttachmentAminoMsg): _0.Attachment;
                fromProtoMsg(message: _0.AttachmentProtoMsg): _0.Attachment;
                toProto(message: _0.Attachment): Uint8Array;
                toProtoMsg(message: _0.Attachment): _0.AttachmentProtoMsg;
            };
        };
        const offchain: {
            MsgSignData: {
                typeUrl: string;
                encode(message: _20.MsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.MsgSignData;
                fromPartial(object: Partial<_20.MsgSignData>): _20.MsgSignData;
                fromAmino(object: _20.MsgSignDataAmino): _20.MsgSignData;
                toAmino(message: _20.MsgSignData): _20.MsgSignDataAmino;
                fromAminoMsg(object: _20.MsgSignDataAminoMsg): _20.MsgSignData;
                fromProtoMsg(message: _20.MsgSignDataProtoMsg): _20.MsgSignData;
                toProto(message: _20.MsgSignData): Uint8Array;
                toProtoMsg(message: _20.MsgSignData): _20.MsgSignDataProtoMsg;
            };
            ListOfMsgSignData: {
                typeUrl: string;
                encode(message: _20.ListOfMsgSignData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _20.ListOfMsgSignData;
                fromPartial(object: Partial<_20.ListOfMsgSignData>): _20.ListOfMsgSignData;
                fromAmino(object: _20.ListOfMsgSignDataAmino): _20.ListOfMsgSignData;
                toAmino(message: _20.ListOfMsgSignData): _20.ListOfMsgSignDataAmino;
                fromAminoMsg(object: _20.ListOfMsgSignDataAminoMsg): _20.ListOfMsgSignData;
                fromProtoMsg(message: _20.ListOfMsgSignDataProtoMsg): _20.ListOfMsgSignData;
                toProto(message: _20.ListOfMsgSignData): Uint8Array;
                toProtoMsg(message: _20.ListOfMsgSignData): _20.ListOfMsgSignDataProtoMsg;
            };
        };
        const rewards: {
            MsgClientImpl: typeof _152.MsgClientImpl;
            QueryClientImpl: typeof _150.QueryClientImpl;
            createRpcQueryExtension: (base: QueryClient) => {
                params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                tasks(request: _24.QueryTasksRequest): Promise<_24.QueryTasksResponse>;
                reward(request: _24.QueryGetRewardRequest): Promise<_24.QueryGetRewardResponse>;
                rewardsAll(request?: _24.QueryAllRewardsRequest): Promise<_24.QueryAllRewardsResponse>;
            };
            LCDQueryClient: typeof _148.LCDQueryClient;
            registry: readonly [string, GeneratedType][];
            load: (protoRegistry: Registry) => void;
            MessageComposer: {
                encoded: {
                    claim(value: _27.MsgClaim): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createReward(value: _27.MsgCreateReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    claim(value: _27.MsgClaim): {
                        typeUrl: string;
                        value: _27.MsgClaim;
                    };
                    createReward(value: _27.MsgCreateReward): {
                        typeUrl: string;
                        value: _27.MsgCreateReward;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
                fromJSON: {
                    claim(value: any): {
                        typeUrl: string;
                        value: _27.MsgClaim;
                    };
                    createReward(value: any): {
                        typeUrl: string;
                        value: _27.MsgCreateReward;
                    };
                    updateParams(value: any): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
                fromPartial: {
                    claim(value: _27.MsgClaim): {
                        typeUrl: string;
                        value: _27.MsgClaim;
                    };
                    createReward(value: _27.MsgCreateReward): {
                        typeUrl: string;
                        value: _27.MsgCreateReward;
                    };
                    updateParams(value: _27.MsgUpdateParams): {
                        typeUrl: string;
                        value: _27.MsgUpdateParams;
                    };
                };
            };
            AminoConverter: {
                "/gitopia.gitopia.rewards.MsgClaim": {
                    aminoType: string;
                    toAmino: (message: _27.MsgClaim) => _27.MsgClaimAmino;
                    fromAmino: (object: _27.MsgClaimAmino) => _27.MsgClaim;
                };
                "/gitopia.gitopia.rewards.MsgCreateReward": {
                    aminoType: string;
                    toAmino: (message: _27.MsgCreateReward) => _27.MsgCreateRewardAmino;
                    fromAmino: (object: _27.MsgCreateRewardAmino) => _27.MsgCreateReward;
                };
                "/gitopia.gitopia.rewards.MsgUpdateParams": {
                    aminoType: string;
                    toAmino: (message: _27.MsgUpdateParams) => _27.MsgUpdateParamsAmino;
                    fromAmino: (object: _27.MsgUpdateParamsAmino) => _27.MsgUpdateParams;
                };
            };
            MsgCreateReward: {
                typeUrl: string;
                encode(message: _27.MsgCreateReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgCreateReward;
                fromPartial(object: Partial<_27.MsgCreateReward>): _27.MsgCreateReward;
                fromAmino(object: _27.MsgCreateRewardAmino): _27.MsgCreateReward;
                toAmino(message: _27.MsgCreateReward): _27.MsgCreateRewardAmino;
                fromAminoMsg(object: _27.MsgCreateRewardAminoMsg): _27.MsgCreateReward;
                fromProtoMsg(message: _27.MsgCreateRewardProtoMsg): _27.MsgCreateReward;
                toProto(message: _27.MsgCreateReward): Uint8Array;
                toProtoMsg(message: _27.MsgCreateReward): _27.MsgCreateRewardProtoMsg;
            };
            MsgCreateRewardResponse: {
                typeUrl: string;
                encode(message: _27.MsgCreateRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgCreateRewardResponse;
                fromPartial(object: Partial<_27.MsgCreateRewardResponse>): _27.MsgCreateRewardResponse;
                fromAmino(object: _27.MsgCreateRewardResponseAmino): _27.MsgCreateRewardResponse;
                toAmino(message: _27.MsgCreateRewardResponse): _27.MsgCreateRewardResponseAmino;
                fromAminoMsg(object: _27.MsgCreateRewardResponseAminoMsg): _27.MsgCreateRewardResponse;
                fromProtoMsg(message: _27.MsgCreateRewardResponseProtoMsg): _27.MsgCreateRewardResponse;
                toProto(message: _27.MsgCreateRewardResponse): Uint8Array;
                toProtoMsg(message: _27.MsgCreateRewardResponse): _27.MsgCreateRewardResponseProtoMsg;
            };
            MsgClaim: {
                typeUrl: string;
                encode(message: _27.MsgClaim, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgClaim;
                fromPartial(object: Partial<_27.MsgClaim>): _27.MsgClaim;
                fromAmino(object: _27.MsgClaimAmino): _27.MsgClaim;
                toAmino(message: _27.MsgClaim): _27.MsgClaimAmino;
                fromAminoMsg(object: _27.MsgClaimAminoMsg): _27.MsgClaim;
                fromProtoMsg(message: _27.MsgClaimProtoMsg): _27.MsgClaim;
                toProto(message: _27.MsgClaim): Uint8Array;
                toProtoMsg(message: _27.MsgClaim): _27.MsgClaimProtoMsg;
            };
            ClaimResponseReward: {
                typeUrl: string;
                encode(message: _27.ClaimResponseReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.ClaimResponseReward;
                fromPartial(object: Partial<_27.ClaimResponseReward>): _27.ClaimResponseReward;
                fromAmino(object: _27.ClaimResponseRewardAmino): _27.ClaimResponseReward;
                toAmino(message: _27.ClaimResponseReward): _27.ClaimResponseRewardAmino;
                fromAminoMsg(object: _27.ClaimResponseRewardAminoMsg): _27.ClaimResponseReward;
                fromProtoMsg(message: _27.ClaimResponseRewardProtoMsg): _27.ClaimResponseReward;
                toProto(message: _27.ClaimResponseReward): Uint8Array;
                toProtoMsg(message: _27.ClaimResponseReward): _27.ClaimResponseRewardProtoMsg;
            };
            MsgClaimResponse: {
                typeUrl: string;
                encode(message: _27.MsgClaimResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgClaimResponse;
                fromPartial(object: Partial<_27.MsgClaimResponse>): _27.MsgClaimResponse;
                fromAmino(object: _27.MsgClaimResponseAmino): _27.MsgClaimResponse;
                toAmino(message: _27.MsgClaimResponse): _27.MsgClaimResponseAmino;
                fromAminoMsg(object: _27.MsgClaimResponseAminoMsg): _27.MsgClaimResponse;
                fromProtoMsg(message: _27.MsgClaimResponseProtoMsg): _27.MsgClaimResponse;
                toProto(message: _27.MsgClaimResponse): Uint8Array;
                toProtoMsg(message: _27.MsgClaimResponse): _27.MsgClaimResponseProtoMsg;
            };
            MsgUpdateParams: {
                typeUrl: string;
                encode(message: _27.MsgUpdateParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _27.MsgUpdateParams;
                fromPartial(object: Partial<_27.MsgUpdateParams>): _27.MsgUpdateParams;
                fromAmino(object: _27.MsgUpdateParamsAmino): _27.MsgUpdateParams;
                toAmino(message: _27.MsgUpdateParams): _27.MsgUpdateParamsAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsAminoMsg): _27.MsgUpdateParams;
                fromProtoMsg(message: _27.MsgUpdateParamsProtoMsg): _27.MsgUpdateParams;
                toProto(message: _27.MsgUpdateParams): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParams): _27.MsgUpdateParamsProtoMsg;
            };
            MsgUpdateParamsResponse: {
                typeUrl: string;
                encode(_: _27.MsgUpdateParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _27.MsgUpdateParamsResponse;
                fromPartial(_: Partial<_27.MsgUpdateParamsResponse>): _27.MsgUpdateParamsResponse;
                fromAmino(_: _27.MsgUpdateParamsResponseAmino): _27.MsgUpdateParamsResponse;
                toAmino(_: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseAmino;
                fromAminoMsg(object: _27.MsgUpdateParamsResponseAminoMsg): _27.MsgUpdateParamsResponse;
                fromProtoMsg(message: _27.MsgUpdateParamsResponseProtoMsg): _27.MsgUpdateParamsResponse;
                toProto(message: _27.MsgUpdateParamsResponse): Uint8Array;
                toProtoMsg(message: _27.MsgUpdateParamsResponse): _27.MsgUpdateParamsResponseProtoMsg;
            };
            taskTypeFromJSON(object: any): _26.TaskType;
            taskTypeToJSON(object: _26.TaskType): string;
            TaskType: typeof _26.TaskType;
            TaskTypeSDKType: typeof _26.TaskType;
            TaskTypeAmino: typeof _26.TaskType;
            Task: {
                typeUrl: string;
                encode(message: _26.Task, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _26.Task;
                fromPartial(object: Partial<_26.Task>): _26.Task;
                fromAmino(object: _26.TaskAmino): _26.Task;
                toAmino(message: _26.Task): _26.TaskAmino;
                fromAminoMsg(object: _26.TaskAminoMsg): _26.Task;
                fromProtoMsg(message: _26.TaskProtoMsg): _26.Task;
                toProto(message: _26.Task): Uint8Array;
                toProtoMsg(message: _26.Task): _26.TaskProtoMsg;
            };
            Reward: {
                typeUrl: string;
                encode(message: _25.Reward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.Reward;
                fromPartial(object: Partial<_25.Reward>): _25.Reward;
                fromAmino(object: _25.RewardAmino): _25.Reward;
                toAmino(message: _25.Reward): _25.RewardAmino;
                fromAminoMsg(object: _25.RewardAminoMsg): _25.Reward;
                fromProtoMsg(message: _25.RewardProtoMsg): _25.Reward;
                toProto(message: _25.Reward): Uint8Array;
                toProtoMsg(message: _25.Reward): _25.RewardProtoMsg;
            };
            RecipientReward: {
                typeUrl: string;
                encode(message: _25.RecipientReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _25.RecipientReward;
                fromPartial(object: Partial<_25.RecipientReward>): _25.RecipientReward;
                fromAmino(object: _25.RecipientRewardAmino): _25.RecipientReward;
                toAmino(message: _25.RecipientReward): _25.RecipientRewardAmino;
                fromAminoMsg(object: _25.RecipientRewardAminoMsg): _25.RecipientReward;
                fromProtoMsg(message: _25.RecipientRewardProtoMsg): _25.RecipientReward;
                toProto(message: _25.RecipientReward): Uint8Array;
                toProtoMsg(message: _25.RecipientReward): _25.RecipientRewardProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                encode(_: _24.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(_: any): _24.QueryParamsRequest;
                fromPartial(_: Partial<_24.QueryParamsRequest>): _24.QueryParamsRequest;
                fromAmino(_: _24.QueryParamsRequestAmino): _24.QueryParamsRequest;
                toAmino(_: _24.QueryParamsRequest): _24.QueryParamsRequestAmino;
                fromAminoMsg(object: _24.QueryParamsRequestAminoMsg): _24.QueryParamsRequest;
                fromProtoMsg(message: _24.QueryParamsRequestProtoMsg): _24.QueryParamsRequest;
                toProto(message: _24.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryParamsRequest): _24.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                encode(message: _24.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryParamsResponse;
                fromPartial(object: Partial<_24.QueryParamsResponse>): _24.QueryParamsResponse;
                fromAmino(object: _24.QueryParamsResponseAmino): _24.QueryParamsResponse;
                toAmino(message: _24.QueryParamsResponse): _24.QueryParamsResponseAmino;
                fromAminoMsg(object: _24.QueryParamsResponseAminoMsg): _24.QueryParamsResponse;
                fromProtoMsg(message: _24.QueryParamsResponseProtoMsg): _24.QueryParamsResponse;
                toProto(message: _24.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryParamsResponse): _24.QueryParamsResponseProtoMsg;
            };
            QueryTasksRequest: {
                typeUrl: string;
                encode(message: _24.QueryTasksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTasksRequest;
                fromPartial(object: Partial<_24.QueryTasksRequest>): _24.QueryTasksRequest;
                fromAmino(object: _24.QueryTasksRequestAmino): _24.QueryTasksRequest;
                toAmino(message: _24.QueryTasksRequest): _24.QueryTasksRequestAmino;
                fromAminoMsg(object: _24.QueryTasksRequestAminoMsg): _24.QueryTasksRequest;
                fromProtoMsg(message: _24.QueryTasksRequestProtoMsg): _24.QueryTasksRequest;
                toProto(message: _24.QueryTasksRequest): Uint8Array;
                toProtoMsg(message: _24.QueryTasksRequest): _24.QueryTasksRequestProtoMsg;
            };
            QueryTasksResponse: {
                typeUrl: string;
                encode(message: _24.QueryTasksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryTasksResponse;
                fromPartial(object: Partial<_24.QueryTasksResponse>): _24.QueryTasksResponse;
                fromAmino(object: _24.QueryTasksResponseAmino): _24.QueryTasksResponse;
                toAmino(message: _24.QueryTasksResponse): _24.QueryTasksResponseAmino;
                fromAminoMsg(object: _24.QueryTasksResponseAminoMsg): _24.QueryTasksResponse;
                fromProtoMsg(message: _24.QueryTasksResponseProtoMsg): _24.QueryTasksResponse;
                toProto(message: _24.QueryTasksResponse): Uint8Array;
                toProtoMsg(message: _24.QueryTasksResponse): _24.QueryTasksResponseProtoMsg;
            };
            QueryGetRewardRequest: {
                typeUrl: string;
                encode(message: _24.QueryGetRewardRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGetRewardRequest;
                fromPartial(object: Partial<_24.QueryGetRewardRequest>): _24.QueryGetRewardRequest;
                fromAmino(object: _24.QueryGetRewardRequestAmino): _24.QueryGetRewardRequest;
                toAmino(message: _24.QueryGetRewardRequest): _24.QueryGetRewardRequestAmino;
                fromAminoMsg(object: _24.QueryGetRewardRequestAminoMsg): _24.QueryGetRewardRequest;
                fromProtoMsg(message: _24.QueryGetRewardRequestProtoMsg): _24.QueryGetRewardRequest;
                toProto(message: _24.QueryGetRewardRequest): Uint8Array;
                toProtoMsg(message: _24.QueryGetRewardRequest): _24.QueryGetRewardRequestProtoMsg;
            };
            QueryGetRewardResponseReward: {
                typeUrl: string;
                encode(message: _24.QueryGetRewardResponseReward, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGetRewardResponseReward;
                fromPartial(object: Partial<_24.QueryGetRewardResponseReward>): _24.QueryGetRewardResponseReward;
                fromAmino(object: _24.QueryGetRewardResponseRewardAmino): _24.QueryGetRewardResponseReward;
                toAmino(message: _24.QueryGetRewardResponseReward): _24.QueryGetRewardResponseRewardAmino;
                fromAminoMsg(object: _24.QueryGetRewardResponseRewardAminoMsg): _24.QueryGetRewardResponseReward;
                fromProtoMsg(message: _24.QueryGetRewardResponseRewardProtoMsg): _24.QueryGetRewardResponseReward;
                toProto(message: _24.QueryGetRewardResponseReward): Uint8Array;
                toProtoMsg(message: _24.QueryGetRewardResponseReward): _24.QueryGetRewardResponseRewardProtoMsg;
            };
            QueryGetRewardResponse: {
                typeUrl: string;
                encode(message: _24.QueryGetRewardResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryGetRewardResponse;
                fromPartial(object: Partial<_24.QueryGetRewardResponse>): _24.QueryGetRewardResponse;
                fromAmino(object: _24.QueryGetRewardResponseAmino): _24.QueryGetRewardResponse;
                toAmino(message: _24.QueryGetRewardResponse): _24.QueryGetRewardResponseAmino;
                fromAminoMsg(object: _24.QueryGetRewardResponseAminoMsg): _24.QueryGetRewardResponse;
                fromProtoMsg(message: _24.QueryGetRewardResponseProtoMsg): _24.QueryGetRewardResponse;
                toProto(message: _24.QueryGetRewardResponse): Uint8Array;
                toProtoMsg(message: _24.QueryGetRewardResponse): _24.QueryGetRewardResponseProtoMsg;
            };
            QueryAllRewardsRequest: {
                typeUrl: string;
                encode(message: _24.QueryAllRewardsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAllRewardsRequest;
                fromPartial(object: Partial<_24.QueryAllRewardsRequest>): _24.QueryAllRewardsRequest;
                fromAmino(object: _24.QueryAllRewardsRequestAmino): _24.QueryAllRewardsRequest;
                toAmino(message: _24.QueryAllRewardsRequest): _24.QueryAllRewardsRequestAmino;
                fromAminoMsg(object: _24.QueryAllRewardsRequestAminoMsg): _24.QueryAllRewardsRequest;
                fromProtoMsg(message: _24.QueryAllRewardsRequestProtoMsg): _24.QueryAllRewardsRequest;
                toProto(message: _24.QueryAllRewardsRequest): Uint8Array;
                toProtoMsg(message: _24.QueryAllRewardsRequest): _24.QueryAllRewardsRequestProtoMsg;
            };
            QueryAllRewardsResponse: {
                typeUrl: string;
                encode(message: _24.QueryAllRewardsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _24.QueryAllRewardsResponse;
                fromPartial(object: Partial<_24.QueryAllRewardsResponse>): _24.QueryAllRewardsResponse;
                fromAmino(object: _24.QueryAllRewardsResponseAmino): _24.QueryAllRewardsResponse;
                toAmino(message: _24.QueryAllRewardsResponse): _24.QueryAllRewardsResponseAmino;
                fromAminoMsg(object: _24.QueryAllRewardsResponseAminoMsg): _24.QueryAllRewardsResponse;
                fromProtoMsg(message: _24.QueryAllRewardsResponseProtoMsg): _24.QueryAllRewardsResponse;
                toProto(message: _24.QueryAllRewardsResponse): Uint8Array;
                toProtoMsg(message: _24.QueryAllRewardsResponse): _24.QueryAllRewardsResponseProtoMsg;
            };
            seriesFromJSON(object: any): _23.Series;
            seriesToJSON(object: _23.Series): string;
            Series: typeof _23.Series;
            SeriesSDKType: typeof _23.Series;
            SeriesAmino: typeof _23.Series;
            RewardPool: {
                typeUrl: string;
                encode(message: _23.RewardPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _23.RewardPool;
                fromPartial(object: Partial<_23.RewardPool>): _23.RewardPool;
                fromAmino(object: _23.RewardPoolAmino): _23.RewardPool;
                toAmino(message: _23.RewardPool): _23.RewardPoolAmino;
                fromAminoMsg(object: _23.RewardPoolAminoMsg): _23.RewardPool;
                fromProtoMsg(message: _23.RewardPoolProtoMsg): _23.RewardPool;
                toProto(message: _23.RewardPool): Uint8Array;
                toProtoMsg(message: _23.RewardPool): _23.RewardPoolProtoMsg;
            };
            Params: {
                typeUrl: string;
                encode(message: _22.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _22.Params;
                fromPartial(object: Partial<_22.Params>): _22.Params;
                fromAmino(object: _22.ParamsAmino): _22.Params;
                toAmino(message: _22.Params): _22.ParamsAmino;
                fromAminoMsg(object: _22.ParamsAminoMsg): _22.Params;
                fromProtoMsg(message: _22.ParamsProtoMsg): _22.Params;
                toProto(message: _22.Params): Uint8Array;
                toProtoMsg(message: _22.Params): _22.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                encode(message: _21.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                fromJSON(object: any): _21.GenesisState;
                fromPartial(object: Partial<_21.GenesisState>): _21.GenesisState;
                fromAmino(object: _21.GenesisStateAmino): _21.GenesisState;
                toAmino(message: _21.GenesisState): _21.GenesisStateAmino;
                fromAminoMsg(object: _21.GenesisStateAminoMsg): _21.GenesisState;
                fromProtoMsg(message: _21.GenesisStateProtoMsg): _21.GenesisState;
                toProto(message: _21.GenesisState): Uint8Array;
                toProtoMsg(message: _21.GenesisState): _21.GenesisStateProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            gitopia: {
                gitopia: {
                    gitopia: _151.MsgClientImpl;
                    rewards: _152.MsgClientImpl;
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: any;
        }) => Promise<{
            gitopia: {
                gitopia: {
                    gitopia: {
                        params(request?: _11.QueryParamsRequest): Promise<_11.QueryParamsResponse>;
                        vestedAmount(request: _11.QueryVestedAmountRequest): Promise<_11.QueryVestedAmountResponse>;
                        task(request: _11.QueryGetTaskRequest): Promise<_11.QueryGetTaskResponse>;
                        taskAll(request?: _11.QueryAllTaskRequest): Promise<_11.QueryAllTaskResponse>;
                        branchAll(request?: _11.QueryAllBranchRequest): Promise<_11.QueryAllBranchResponse>;
                        repositoryBranch(request: _11.QueryGetRepositoryBranchRequest): Promise<_11.QueryGetRepositoryBranchResponse>;
                        repositoryBranchSha(request: _11.QueryGetRepositoryBranchShaRequest): Promise<_11.QueryGetRepositoryBranchShaResponse>;
                        repositoryBranchAll(request: _11.QueryAllRepositoryBranchRequest): Promise<_11.QueryAllRepositoryBranchResponse>;
                        tagAll(request?: _11.QueryAllTagRequest): Promise<_11.QueryAllTagResponse>;
                        repositoryTag(request: _11.QueryGetRepositoryTagRequest): Promise<_11.QueryGetRepositoryTagResponse>;
                        repositoryTagSha(request: _11.QueryGetRepositoryTagShaRequest): Promise<_11.QueryGetRepositoryTagShaResponse>;
                        repositoryTagAll(request: _11.QueryAllRepositoryTagRequest): Promise<_11.QueryAllRepositoryTagResponse>;
                        daoMember(request: _11.QueryGetDaoMemberRequest): Promise<_11.QueryGetDaoMemberResponse>;
                        daoMemberAll(request: _11.QueryAllDaoMemberRequest): Promise<_11.QueryAllDaoMemberResponse>;
                        memberAll(request?: _11.QueryAllMemberRequest): Promise<_11.QueryAllMemberResponse>;
                        bounty(request: _11.QueryGetBountyRequest): Promise<_11.QueryGetBountyResponse>;
                        bountyAll(request?: _11.QueryAllBountyRequest): Promise<_11.QueryAllBountyResponse>;
                        release(request: _11.QueryGetReleaseRequest): Promise<_11.QueryGetReleaseResponse>;
                        releaseAll(request?: _11.QueryAllReleaseRequest): Promise<_11.QueryAllReleaseResponse>;
                        pullRequestAll(request?: _11.QueryAllPullRequestRequest): Promise<_11.QueryAllPullRequestResponse>;
                        dao(request: _11.QueryGetDaoRequest): Promise<_11.QueryGetDaoResponse>;
                        daoAll(request?: _11.QueryAllDaoRequest): Promise<_11.QueryAllDaoResponse>;
                        issueComment(request: _11.QueryGetIssueCommentRequest): Promise<_11.QueryGetIssueCommentResponse>;
                        pullRequestComment(request: _11.QueryGetPullRequestCommentRequest): Promise<_11.QueryGetPullRequestCommentResponse>;
                        commentAll(request?: _11.QueryAllCommentRequest): Promise<_11.QueryAllCommentResponse>;
                        issueCommentAll(request: _11.QueryAllIssueCommentRequest): Promise<_11.QueryAllIssueCommentResponse>;
                        pullRequestCommentAll(request: _11.QueryAllPullRequestCommentRequest): Promise<_11.QueryAllPullRequestCommentResponse>;
                        issueAll(request?: _11.QueryAllIssueRequest): Promise<_11.QueryAllIssueResponse>;
                        repositoryReleaseLatest(request: _11.QueryGetLatestRepositoryReleaseRequest): Promise<_11.QueryGetLatestRepositoryReleaseResponse>;
                        repositoryRelease(request: _11.QueryGetRepositoryReleaseRequest): Promise<_11.QueryGetRepositoryReleaseResponse>;
                        repositoryReleaseAll(request: _11.QueryAllRepositoryReleaseRequest): Promise<_11.QueryAllRepositoryReleaseResponse>;
                        repositoryIssue(request: _11.QueryGetRepositoryIssueRequest): Promise<_11.QueryGetRepositoryIssueResponse>;
                        repositoryIssueAll(request: _11.QueryAllRepositoryIssueRequest): Promise<_11.QueryAllRepositoryIssueResponse>;
                        repositoryPullRequest(request: _11.QueryGetRepositoryPullRequestRequest): Promise<_11.QueryGetRepositoryPullRequestResponse>;
                        repositoryPullRequestAll(request: _11.QueryAllRepositoryPullRequestRequest): Promise<_11.QueryAllRepositoryPullRequestResponse>;
                        repository(request: _11.QueryGetRepositoryRequest): Promise<_11.QueryGetRepositoryResponse>;
                        repositoryAll(request?: _11.QueryAllRepositoryRequest): Promise<_11.QueryAllRepositoryResponse>;
                        forkAll(request: _11.QueryGetAllForkRequest): Promise<_11.QueryGetAllForkResponse>;
                        user(request: _11.QueryGetUserRequest): Promise<_11.QueryGetUserResponse>;
                        userDaoAll(request: _11.QueryAllUserDaoRequest): Promise<_11.QueryAllUserDaoResponse>;
                        userAll(request?: _11.QueryAllUserRequest): Promise<_11.QueryAllUserResponse>;
                        anyRepositoryAll(request: _11.QueryAllAnyRepositoryRequest): Promise<_11.QueryAllAnyRepositoryResponse>;
                        anyRepository(request: _11.QueryGetAnyRepositoryRequest): Promise<_11.QueryGetAnyRepositoryResponse>;
                        whois(request: _11.QueryGetWhoisRequest): Promise<_11.QueryGetWhoisResponse>;
                        whoisAll(request?: _11.QueryAllWhoisRequest): Promise<_11.QueryAllWhoisResponse>;
                        pullRequestMergePermission(request: _11.QueryGetPullRequestMergePermissionRequest): Promise<_11.QueryGetPullRequestMergePermissionResponse>;
                        checkGitServerAuthorization(request: _11.QueryCheckGitServerAuthorizationRequest): Promise<_11.QueryCheckGitServerAuthorizationResponse>;
                        checkStorageProviderAuthorization(request: _11.QueryCheckStorageProviderAuthorizationRequest): Promise<_11.QueryCheckStorageProviderAuthorizationResponse>;
                    };
                    rewards: {
                        params(request?: _24.QueryParamsRequest): Promise<_24.QueryParamsResponse>;
                        tasks(request: _24.QueryTasksRequest): Promise<_24.QueryTasksResponse>;
                        reward(request: _24.QueryGetRewardRequest): Promise<_24.QueryGetRewardResponse>;
                        rewardsAll(request?: _24.QueryAllRewardsRequest): Promise<_24.QueryAllRewardsResponse>;
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        accountAddressByID(request: import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountAddressByIDResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccountByName(request: import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountByNameResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    node: {
                        v1beta1: {
                            config(request?: import("../cosmos/base/node/v1beta1/query").ConfigRequest): Promise<import("../cosmos/base/node/v1beta1/query").ConfigResponse>;
                        };
                    };
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            aBCIQuery(request: import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").ABCIQueryResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                        groups(request?: import("../cosmos/group/v1/query").QueryGroupsRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
        createLCDClient: ({ restEndpoint }: {
            restEndpoint: string;
        }) => Promise<{
            gitopia: {
                gitopia: {
                    gitopia: _147.LCDQueryClient;
                    rewards: _148.LCDQueryClient;
                };
            };
            cosmos: {
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
                };
                base: {
                    node: {
                        v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
                    };
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
                    v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
                };
            };
        }>;
    };
}
