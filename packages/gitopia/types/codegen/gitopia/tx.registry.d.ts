import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgToggleForcePush, MsgRevokeProviderPermission, MsgAuthorizeProvider, MsgCreateTask, MsgUpdateTask, MsgDeleteTask, MsgSetBranch, MsgMultiSetBranch, MsgDeleteBranch, MsgMultiDeleteBranch, MsgSetTag, MsgMultiSetTag, MsgDeleteTag, MsgMultiDeleteTag, MsgAddMember, MsgUpdateMemberRole, MsgRemoveMember, MsgCreateBounty, MsgUpdateBountyExpiry, MsgCloseBounty, MsgDeleteBounty, MsgExercise, MsgCreateRelease, MsgUpdateRelease, MsgDeleteRelease, MsgCreatePullRequest, MsgUpdatePullRequestTitle, MsgUpdatePullRequestDescription, MsgInvokeMergePullRequest, MsgSetPullRequestState, MsgAddPullRequestReviewers, MsgRemovePullRequestReviewers, MsgAddPullRequestAssignees, MsgRemovePullRequestAssignees, MsgLinkPullRequestIssueByIid, MsgUnlinkPullRequestIssueByIid, MsgAddPullRequestLabels, MsgRemovePullRequestLabels, MsgDeletePullRequest, MsgCreateDao, MsgRenameDao, MsgUpdateDaoDescription, MsgUpdateDaoWebsite, MsgUpdateDaoLocation, MsgUpdateDaoAvatar, MsgDeleteDao, MsgCreateComment, MsgUpdateComment, MsgDeleteComment, MsgToggleCommentResolved, MsgCreateIssue, MsgUpdateIssueTitle, MsgUpdateIssueDescription, MsgToggleIssueState, MsgAddIssueAssignees, MsgRemoveIssueAssignees, MsgAddIssueLabels, MsgRemoveIssueLabels, MsgDeleteIssue, MsgCreateRepository, MsgInvokeForkRepository, MsgForkRepository, MsgForkRepositorySuccess, MsgRenameRepository, MsgUpdateRepositoryDescription, MsgToggleRepositoryArchived, MsgChangeOwner, MsgUpdateRepositoryCollaborator, MsgRemoveRepositoryCollaborator, MsgCreateRepositoryLabel, MsgUpdateRepositoryLabel, MsgDeleteRepositoryLabel, MsgSetDefaultBranch, MsgToggleRepositoryForking, MsgToggleArweaveBackup, MsgDeleteRepository, MsgCreateUser, MsgUpdateUserUsername, MsgUpdateUserName, MsgUpdateUserBio, MsgUpdateUserAvatar, MsgDeleteUser, MsgUpdateRepositoryBackupRef, MsgAddRepositoryBackupRef, MsgUpdateUserPinnedRepositories, MsgUpdateDaoPinnedRepositories, MsgUpdateParams, MsgDistributePlatformIncentives } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        toggleForcePush(value: MsgToggleForcePush): {
            typeUrl: string;
            value: Uint8Array;
        };
        revokeProviderPermission(value: MsgRevokeProviderPermission): {
            typeUrl: string;
            value: Uint8Array;
        };
        authorizeProvider(value: MsgAuthorizeProvider): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateTask(value: MsgUpdateTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        setBranch(value: MsgSetBranch): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiSetBranch(value: MsgMultiSetBranch): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteBranch(value: MsgDeleteBranch): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiDeleteBranch(value: MsgMultiDeleteBranch): {
            typeUrl: string;
            value: Uint8Array;
        };
        setTag(value: MsgSetTag): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiSetTag(value: MsgMultiSetTag): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTag(value: MsgDeleteTag): {
            typeUrl: string;
            value: Uint8Array;
        };
        multiDeleteTag(value: MsgMultiDeleteTag): {
            typeUrl: string;
            value: Uint8Array;
        };
        addMember(value: MsgAddMember): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateMemberRole(value: MsgUpdateMemberRole): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeMember(value: MsgRemoveMember): {
            typeUrl: string;
            value: Uint8Array;
        };
        createBounty(value: MsgCreateBounty): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBountyExpiry(value: MsgUpdateBountyExpiry): {
            typeUrl: string;
            value: Uint8Array;
        };
        closeBounty(value: MsgCloseBounty): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteBounty(value: MsgDeleteBounty): {
            typeUrl: string;
            value: Uint8Array;
        };
        exercise(value: MsgExercise): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRelease(value: MsgCreateRelease): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRelease(value: MsgUpdateRelease): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRelease(value: MsgDeleteRelease): {
            typeUrl: string;
            value: Uint8Array;
        };
        createPullRequest(value: MsgCreatePullRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePullRequestTitle(value: MsgUpdatePullRequestTitle): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePullRequestDescription(value: MsgUpdatePullRequestDescription): {
            typeUrl: string;
            value: Uint8Array;
        };
        invokeMergePullRequest(value: MsgInvokeMergePullRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        setPullRequestState(value: MsgSetPullRequestState): {
            typeUrl: string;
            value: Uint8Array;
        };
        addPullRequestReviewers(value: MsgAddPullRequestReviewers): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePullRequestReviewers(value: MsgRemovePullRequestReviewers): {
            typeUrl: string;
            value: Uint8Array;
        };
        addPullRequestAssignees(value: MsgAddPullRequestAssignees): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePullRequestAssignees(value: MsgRemovePullRequestAssignees): {
            typeUrl: string;
            value: Uint8Array;
        };
        linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid): {
            typeUrl: string;
            value: Uint8Array;
        };
        unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid): {
            typeUrl: string;
            value: Uint8Array;
        };
        addPullRequestLabels(value: MsgAddPullRequestLabels): {
            typeUrl: string;
            value: Uint8Array;
        };
        removePullRequestLabels(value: MsgRemovePullRequestLabels): {
            typeUrl: string;
            value: Uint8Array;
        };
        deletePullRequest(value: MsgDeletePullRequest): {
            typeUrl: string;
            value: Uint8Array;
        };
        createDao(value: MsgCreateDao): {
            typeUrl: string;
            value: Uint8Array;
        };
        renameDao(value: MsgRenameDao): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDaoDescription(value: MsgUpdateDaoDescription): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDaoWebsite(value: MsgUpdateDaoWebsite): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDaoLocation(value: MsgUpdateDaoLocation): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDaoAvatar(value: MsgUpdateDaoAvatar): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteDao(value: MsgDeleteDao): {
            typeUrl: string;
            value: Uint8Array;
        };
        createComment(value: MsgCreateComment): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateComment(value: MsgUpdateComment): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteComment(value: MsgDeleteComment): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleCommentResolved(value: MsgToggleCommentResolved): {
            typeUrl: string;
            value: Uint8Array;
        };
        createIssue(value: MsgCreateIssue): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateIssueTitle(value: MsgUpdateIssueTitle): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateIssueDescription(value: MsgUpdateIssueDescription): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleIssueState(value: MsgToggleIssueState): {
            typeUrl: string;
            value: Uint8Array;
        };
        addIssueAssignees(value: MsgAddIssueAssignees): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeIssueAssignees(value: MsgRemoveIssueAssignees): {
            typeUrl: string;
            value: Uint8Array;
        };
        addIssueLabels(value: MsgAddIssueLabels): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeIssueLabels(value: MsgRemoveIssueLabels): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteIssue(value: MsgDeleteIssue): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRepository(value: MsgCreateRepository): {
            typeUrl: string;
            value: Uint8Array;
        };
        invokeForkRepository(value: MsgInvokeForkRepository): {
            typeUrl: string;
            value: Uint8Array;
        };
        forkRepository(value: MsgForkRepository): {
            typeUrl: string;
            value: Uint8Array;
        };
        forkRepositorySuccess(value: MsgForkRepositorySuccess): {
            typeUrl: string;
            value: Uint8Array;
        };
        renameRepository(value: MsgRenameRepository): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRepositoryDescription(value: MsgUpdateRepositoryDescription): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleRepositoryArchived(value: MsgToggleRepositoryArchived): {
            typeUrl: string;
            value: Uint8Array;
        };
        changeOwner(value: MsgChangeOwner): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator): {
            typeUrl: string;
            value: Uint8Array;
        };
        createRepositoryLabel(value: MsgCreateRepositoryLabel): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRepositoryLabel(value: MsgUpdateRepositoryLabel): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRepositoryLabel(value: MsgDeleteRepositoryLabel): {
            typeUrl: string;
            value: Uint8Array;
        };
        setDefaultBranch(value: MsgSetDefaultBranch): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleRepositoryForking(value: MsgToggleRepositoryForking): {
            typeUrl: string;
            value: Uint8Array;
        };
        toggleArweaveBackup(value: MsgToggleArweaveBackup): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteRepository(value: MsgDeleteRepository): {
            typeUrl: string;
            value: Uint8Array;
        };
        createUser(value: MsgCreateUser): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserUsername(value: MsgUpdateUserUsername): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserName(value: MsgUpdateUserName): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserBio(value: MsgUpdateUserBio): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserAvatar(value: MsgUpdateUserAvatar): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteUser(value: MsgDeleteUser): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef): {
            typeUrl: string;
            value: Uint8Array;
        };
        addRepositoryBackupRef(value: MsgAddRepositoryBackupRef): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array;
        };
        distributePlatformIncentives(value: MsgDistributePlatformIncentives): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        toggleForcePush(value: MsgToggleForcePush): {
            typeUrl: string;
            value: MsgToggleForcePush;
        };
        revokeProviderPermission(value: MsgRevokeProviderPermission): {
            typeUrl: string;
            value: MsgRevokeProviderPermission;
        };
        authorizeProvider(value: MsgAuthorizeProvider): {
            typeUrl: string;
            value: MsgAuthorizeProvider;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        updateTask(value: MsgUpdateTask): {
            typeUrl: string;
            value: MsgUpdateTask;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        setBranch(value: MsgSetBranch): {
            typeUrl: string;
            value: MsgSetBranch;
        };
        multiSetBranch(value: MsgMultiSetBranch): {
            typeUrl: string;
            value: MsgMultiSetBranch;
        };
        deleteBranch(value: MsgDeleteBranch): {
            typeUrl: string;
            value: MsgDeleteBranch;
        };
        multiDeleteBranch(value: MsgMultiDeleteBranch): {
            typeUrl: string;
            value: MsgMultiDeleteBranch;
        };
        setTag(value: MsgSetTag): {
            typeUrl: string;
            value: MsgSetTag;
        };
        multiSetTag(value: MsgMultiSetTag): {
            typeUrl: string;
            value: MsgMultiSetTag;
        };
        deleteTag(value: MsgDeleteTag): {
            typeUrl: string;
            value: MsgDeleteTag;
        };
        multiDeleteTag(value: MsgMultiDeleteTag): {
            typeUrl: string;
            value: MsgMultiDeleteTag;
        };
        addMember(value: MsgAddMember): {
            typeUrl: string;
            value: MsgAddMember;
        };
        updateMemberRole(value: MsgUpdateMemberRole): {
            typeUrl: string;
            value: MsgUpdateMemberRole;
        };
        removeMember(value: MsgRemoveMember): {
            typeUrl: string;
            value: MsgRemoveMember;
        };
        createBounty(value: MsgCreateBounty): {
            typeUrl: string;
            value: MsgCreateBounty;
        };
        updateBountyExpiry(value: MsgUpdateBountyExpiry): {
            typeUrl: string;
            value: MsgUpdateBountyExpiry;
        };
        closeBounty(value: MsgCloseBounty): {
            typeUrl: string;
            value: MsgCloseBounty;
        };
        deleteBounty(value: MsgDeleteBounty): {
            typeUrl: string;
            value: MsgDeleteBounty;
        };
        exercise(value: MsgExercise): {
            typeUrl: string;
            value: MsgExercise;
        };
        createRelease(value: MsgCreateRelease): {
            typeUrl: string;
            value: MsgCreateRelease;
        };
        updateRelease(value: MsgUpdateRelease): {
            typeUrl: string;
            value: MsgUpdateRelease;
        };
        deleteRelease(value: MsgDeleteRelease): {
            typeUrl: string;
            value: MsgDeleteRelease;
        };
        createPullRequest(value: MsgCreatePullRequest): {
            typeUrl: string;
            value: MsgCreatePullRequest;
        };
        updatePullRequestTitle(value: MsgUpdatePullRequestTitle): {
            typeUrl: string;
            value: MsgUpdatePullRequestTitle;
        };
        updatePullRequestDescription(value: MsgUpdatePullRequestDescription): {
            typeUrl: string;
            value: MsgUpdatePullRequestDescription;
        };
        invokeMergePullRequest(value: MsgInvokeMergePullRequest): {
            typeUrl: string;
            value: MsgInvokeMergePullRequest;
        };
        setPullRequestState(value: MsgSetPullRequestState): {
            typeUrl: string;
            value: MsgSetPullRequestState;
        };
        addPullRequestReviewers(value: MsgAddPullRequestReviewers): {
            typeUrl: string;
            value: MsgAddPullRequestReviewers;
        };
        removePullRequestReviewers(value: MsgRemovePullRequestReviewers): {
            typeUrl: string;
            value: MsgRemovePullRequestReviewers;
        };
        addPullRequestAssignees(value: MsgAddPullRequestAssignees): {
            typeUrl: string;
            value: MsgAddPullRequestAssignees;
        };
        removePullRequestAssignees(value: MsgRemovePullRequestAssignees): {
            typeUrl: string;
            value: MsgRemovePullRequestAssignees;
        };
        linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid): {
            typeUrl: string;
            value: MsgLinkPullRequestIssueByIid;
        };
        unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid): {
            typeUrl: string;
            value: MsgUnlinkPullRequestIssueByIid;
        };
        addPullRequestLabels(value: MsgAddPullRequestLabels): {
            typeUrl: string;
            value: MsgAddPullRequestLabels;
        };
        removePullRequestLabels(value: MsgRemovePullRequestLabels): {
            typeUrl: string;
            value: MsgRemovePullRequestLabels;
        };
        deletePullRequest(value: MsgDeletePullRequest): {
            typeUrl: string;
            value: MsgDeletePullRequest;
        };
        createDao(value: MsgCreateDao): {
            typeUrl: string;
            value: MsgCreateDao;
        };
        renameDao(value: MsgRenameDao): {
            typeUrl: string;
            value: MsgRenameDao;
        };
        updateDaoDescription(value: MsgUpdateDaoDescription): {
            typeUrl: string;
            value: MsgUpdateDaoDescription;
        };
        updateDaoWebsite(value: MsgUpdateDaoWebsite): {
            typeUrl: string;
            value: MsgUpdateDaoWebsite;
        };
        updateDaoLocation(value: MsgUpdateDaoLocation): {
            typeUrl: string;
            value: MsgUpdateDaoLocation;
        };
        updateDaoAvatar(value: MsgUpdateDaoAvatar): {
            typeUrl: string;
            value: MsgUpdateDaoAvatar;
        };
        deleteDao(value: MsgDeleteDao): {
            typeUrl: string;
            value: MsgDeleteDao;
        };
        createComment(value: MsgCreateComment): {
            typeUrl: string;
            value: MsgCreateComment;
        };
        updateComment(value: MsgUpdateComment): {
            typeUrl: string;
            value: MsgUpdateComment;
        };
        deleteComment(value: MsgDeleteComment): {
            typeUrl: string;
            value: MsgDeleteComment;
        };
        toggleCommentResolved(value: MsgToggleCommentResolved): {
            typeUrl: string;
            value: MsgToggleCommentResolved;
        };
        createIssue(value: MsgCreateIssue): {
            typeUrl: string;
            value: MsgCreateIssue;
        };
        updateIssueTitle(value: MsgUpdateIssueTitle): {
            typeUrl: string;
            value: MsgUpdateIssueTitle;
        };
        updateIssueDescription(value: MsgUpdateIssueDescription): {
            typeUrl: string;
            value: MsgUpdateIssueDescription;
        };
        toggleIssueState(value: MsgToggleIssueState): {
            typeUrl: string;
            value: MsgToggleIssueState;
        };
        addIssueAssignees(value: MsgAddIssueAssignees): {
            typeUrl: string;
            value: MsgAddIssueAssignees;
        };
        removeIssueAssignees(value: MsgRemoveIssueAssignees): {
            typeUrl: string;
            value: MsgRemoveIssueAssignees;
        };
        addIssueLabels(value: MsgAddIssueLabels): {
            typeUrl: string;
            value: MsgAddIssueLabels;
        };
        removeIssueLabels(value: MsgRemoveIssueLabels): {
            typeUrl: string;
            value: MsgRemoveIssueLabels;
        };
        deleteIssue(value: MsgDeleteIssue): {
            typeUrl: string;
            value: MsgDeleteIssue;
        };
        createRepository(value: MsgCreateRepository): {
            typeUrl: string;
            value: MsgCreateRepository;
        };
        invokeForkRepository(value: MsgInvokeForkRepository): {
            typeUrl: string;
            value: MsgInvokeForkRepository;
        };
        forkRepository(value: MsgForkRepository): {
            typeUrl: string;
            value: MsgForkRepository;
        };
        forkRepositorySuccess(value: MsgForkRepositorySuccess): {
            typeUrl: string;
            value: MsgForkRepositorySuccess;
        };
        renameRepository(value: MsgRenameRepository): {
            typeUrl: string;
            value: MsgRenameRepository;
        };
        updateRepositoryDescription(value: MsgUpdateRepositoryDescription): {
            typeUrl: string;
            value: MsgUpdateRepositoryDescription;
        };
        toggleRepositoryArchived(value: MsgToggleRepositoryArchived): {
            typeUrl: string;
            value: MsgToggleRepositoryArchived;
        };
        changeOwner(value: MsgChangeOwner): {
            typeUrl: string;
            value: MsgChangeOwner;
        };
        updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator): {
            typeUrl: string;
            value: MsgUpdateRepositoryCollaborator;
        };
        removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator): {
            typeUrl: string;
            value: MsgRemoveRepositoryCollaborator;
        };
        createRepositoryLabel(value: MsgCreateRepositoryLabel): {
            typeUrl: string;
            value: MsgCreateRepositoryLabel;
        };
        updateRepositoryLabel(value: MsgUpdateRepositoryLabel): {
            typeUrl: string;
            value: MsgUpdateRepositoryLabel;
        };
        deleteRepositoryLabel(value: MsgDeleteRepositoryLabel): {
            typeUrl: string;
            value: MsgDeleteRepositoryLabel;
        };
        setDefaultBranch(value: MsgSetDefaultBranch): {
            typeUrl: string;
            value: MsgSetDefaultBranch;
        };
        toggleRepositoryForking(value: MsgToggleRepositoryForking): {
            typeUrl: string;
            value: MsgToggleRepositoryForking;
        };
        toggleArweaveBackup(value: MsgToggleArweaveBackup): {
            typeUrl: string;
            value: MsgToggleArweaveBackup;
        };
        deleteRepository(value: MsgDeleteRepository): {
            typeUrl: string;
            value: MsgDeleteRepository;
        };
        createUser(value: MsgCreateUser): {
            typeUrl: string;
            value: MsgCreateUser;
        };
        updateUserUsername(value: MsgUpdateUserUsername): {
            typeUrl: string;
            value: MsgUpdateUserUsername;
        };
        updateUserName(value: MsgUpdateUserName): {
            typeUrl: string;
            value: MsgUpdateUserName;
        };
        updateUserBio(value: MsgUpdateUserBio): {
            typeUrl: string;
            value: MsgUpdateUserBio;
        };
        updateUserAvatar(value: MsgUpdateUserAvatar): {
            typeUrl: string;
            value: MsgUpdateUserAvatar;
        };
        deleteUser(value: MsgDeleteUser): {
            typeUrl: string;
            value: MsgDeleteUser;
        };
        updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef): {
            typeUrl: string;
            value: MsgUpdateRepositoryBackupRef;
        };
        addRepositoryBackupRef(value: MsgAddRepositoryBackupRef): {
            typeUrl: string;
            value: MsgAddRepositoryBackupRef;
        };
        updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories): {
            typeUrl: string;
            value: MsgUpdateUserPinnedRepositories;
        };
        updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories): {
            typeUrl: string;
            value: MsgUpdateDaoPinnedRepositories;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        distributePlatformIncentives(value: MsgDistributePlatformIncentives): {
            typeUrl: string;
            value: MsgDistributePlatformIncentives;
        };
    };
    fromJSON: {
        toggleForcePush(value: any): {
            typeUrl: string;
            value: MsgToggleForcePush;
        };
        revokeProviderPermission(value: any): {
            typeUrl: string;
            value: MsgRevokeProviderPermission;
        };
        authorizeProvider(value: any): {
            typeUrl: string;
            value: MsgAuthorizeProvider;
        };
        createTask(value: any): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        updateTask(value: any): {
            typeUrl: string;
            value: MsgUpdateTask;
        };
        deleteTask(value: any): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        setBranch(value: any): {
            typeUrl: string;
            value: MsgSetBranch;
        };
        multiSetBranch(value: any): {
            typeUrl: string;
            value: MsgMultiSetBranch;
        };
        deleteBranch(value: any): {
            typeUrl: string;
            value: MsgDeleteBranch;
        };
        multiDeleteBranch(value: any): {
            typeUrl: string;
            value: MsgMultiDeleteBranch;
        };
        setTag(value: any): {
            typeUrl: string;
            value: MsgSetTag;
        };
        multiSetTag(value: any): {
            typeUrl: string;
            value: MsgMultiSetTag;
        };
        deleteTag(value: any): {
            typeUrl: string;
            value: MsgDeleteTag;
        };
        multiDeleteTag(value: any): {
            typeUrl: string;
            value: MsgMultiDeleteTag;
        };
        addMember(value: any): {
            typeUrl: string;
            value: MsgAddMember;
        };
        updateMemberRole(value: any): {
            typeUrl: string;
            value: MsgUpdateMemberRole;
        };
        removeMember(value: any): {
            typeUrl: string;
            value: MsgRemoveMember;
        };
        createBounty(value: any): {
            typeUrl: string;
            value: MsgCreateBounty;
        };
        updateBountyExpiry(value: any): {
            typeUrl: string;
            value: MsgUpdateBountyExpiry;
        };
        closeBounty(value: any): {
            typeUrl: string;
            value: MsgCloseBounty;
        };
        deleteBounty(value: any): {
            typeUrl: string;
            value: MsgDeleteBounty;
        };
        exercise(value: any): {
            typeUrl: string;
            value: MsgExercise;
        };
        createRelease(value: any): {
            typeUrl: string;
            value: MsgCreateRelease;
        };
        updateRelease(value: any): {
            typeUrl: string;
            value: MsgUpdateRelease;
        };
        deleteRelease(value: any): {
            typeUrl: string;
            value: MsgDeleteRelease;
        };
        createPullRequest(value: any): {
            typeUrl: string;
            value: MsgCreatePullRequest;
        };
        updatePullRequestTitle(value: any): {
            typeUrl: string;
            value: MsgUpdatePullRequestTitle;
        };
        updatePullRequestDescription(value: any): {
            typeUrl: string;
            value: MsgUpdatePullRequestDescription;
        };
        invokeMergePullRequest(value: any): {
            typeUrl: string;
            value: MsgInvokeMergePullRequest;
        };
        setPullRequestState(value: any): {
            typeUrl: string;
            value: MsgSetPullRequestState;
        };
        addPullRequestReviewers(value: any): {
            typeUrl: string;
            value: MsgAddPullRequestReviewers;
        };
        removePullRequestReviewers(value: any): {
            typeUrl: string;
            value: MsgRemovePullRequestReviewers;
        };
        addPullRequestAssignees(value: any): {
            typeUrl: string;
            value: MsgAddPullRequestAssignees;
        };
        removePullRequestAssignees(value: any): {
            typeUrl: string;
            value: MsgRemovePullRequestAssignees;
        };
        linkPullRequestIssueByIid(value: any): {
            typeUrl: string;
            value: MsgLinkPullRequestIssueByIid;
        };
        unlinkPullRequestIssueByIid(value: any): {
            typeUrl: string;
            value: MsgUnlinkPullRequestIssueByIid;
        };
        addPullRequestLabels(value: any): {
            typeUrl: string;
            value: MsgAddPullRequestLabels;
        };
        removePullRequestLabels(value: any): {
            typeUrl: string;
            value: MsgRemovePullRequestLabels;
        };
        deletePullRequest(value: any): {
            typeUrl: string;
            value: MsgDeletePullRequest;
        };
        createDao(value: any): {
            typeUrl: string;
            value: MsgCreateDao;
        };
        renameDao(value: any): {
            typeUrl: string;
            value: MsgRenameDao;
        };
        updateDaoDescription(value: any): {
            typeUrl: string;
            value: MsgUpdateDaoDescription;
        };
        updateDaoWebsite(value: any): {
            typeUrl: string;
            value: MsgUpdateDaoWebsite;
        };
        updateDaoLocation(value: any): {
            typeUrl: string;
            value: MsgUpdateDaoLocation;
        };
        updateDaoAvatar(value: any): {
            typeUrl: string;
            value: MsgUpdateDaoAvatar;
        };
        deleteDao(value: any): {
            typeUrl: string;
            value: MsgDeleteDao;
        };
        createComment(value: any): {
            typeUrl: string;
            value: MsgCreateComment;
        };
        updateComment(value: any): {
            typeUrl: string;
            value: MsgUpdateComment;
        };
        deleteComment(value: any): {
            typeUrl: string;
            value: MsgDeleteComment;
        };
        toggleCommentResolved(value: any): {
            typeUrl: string;
            value: MsgToggleCommentResolved;
        };
        createIssue(value: any): {
            typeUrl: string;
            value: MsgCreateIssue;
        };
        updateIssueTitle(value: any): {
            typeUrl: string;
            value: MsgUpdateIssueTitle;
        };
        updateIssueDescription(value: any): {
            typeUrl: string;
            value: MsgUpdateIssueDescription;
        };
        toggleIssueState(value: any): {
            typeUrl: string;
            value: MsgToggleIssueState;
        };
        addIssueAssignees(value: any): {
            typeUrl: string;
            value: MsgAddIssueAssignees;
        };
        removeIssueAssignees(value: any): {
            typeUrl: string;
            value: MsgRemoveIssueAssignees;
        };
        addIssueLabels(value: any): {
            typeUrl: string;
            value: MsgAddIssueLabels;
        };
        removeIssueLabels(value: any): {
            typeUrl: string;
            value: MsgRemoveIssueLabels;
        };
        deleteIssue(value: any): {
            typeUrl: string;
            value: MsgDeleteIssue;
        };
        createRepository(value: any): {
            typeUrl: string;
            value: MsgCreateRepository;
        };
        invokeForkRepository(value: any): {
            typeUrl: string;
            value: MsgInvokeForkRepository;
        };
        forkRepository(value: any): {
            typeUrl: string;
            value: MsgForkRepository;
        };
        forkRepositorySuccess(value: any): {
            typeUrl: string;
            value: MsgForkRepositorySuccess;
        };
        renameRepository(value: any): {
            typeUrl: string;
            value: MsgRenameRepository;
        };
        updateRepositoryDescription(value: any): {
            typeUrl: string;
            value: MsgUpdateRepositoryDescription;
        };
        toggleRepositoryArchived(value: any): {
            typeUrl: string;
            value: MsgToggleRepositoryArchived;
        };
        changeOwner(value: any): {
            typeUrl: string;
            value: MsgChangeOwner;
        };
        updateRepositoryCollaborator(value: any): {
            typeUrl: string;
            value: MsgUpdateRepositoryCollaborator;
        };
        removeRepositoryCollaborator(value: any): {
            typeUrl: string;
            value: MsgRemoveRepositoryCollaborator;
        };
        createRepositoryLabel(value: any): {
            typeUrl: string;
            value: MsgCreateRepositoryLabel;
        };
        updateRepositoryLabel(value: any): {
            typeUrl: string;
            value: MsgUpdateRepositoryLabel;
        };
        deleteRepositoryLabel(value: any): {
            typeUrl: string;
            value: MsgDeleteRepositoryLabel;
        };
        setDefaultBranch(value: any): {
            typeUrl: string;
            value: MsgSetDefaultBranch;
        };
        toggleRepositoryForking(value: any): {
            typeUrl: string;
            value: MsgToggleRepositoryForking;
        };
        toggleArweaveBackup(value: any): {
            typeUrl: string;
            value: MsgToggleArweaveBackup;
        };
        deleteRepository(value: any): {
            typeUrl: string;
            value: MsgDeleteRepository;
        };
        createUser(value: any): {
            typeUrl: string;
            value: MsgCreateUser;
        };
        updateUserUsername(value: any): {
            typeUrl: string;
            value: MsgUpdateUserUsername;
        };
        updateUserName(value: any): {
            typeUrl: string;
            value: MsgUpdateUserName;
        };
        updateUserBio(value: any): {
            typeUrl: string;
            value: MsgUpdateUserBio;
        };
        updateUserAvatar(value: any): {
            typeUrl: string;
            value: MsgUpdateUserAvatar;
        };
        deleteUser(value: any): {
            typeUrl: string;
            value: MsgDeleteUser;
        };
        updateRepositoryBackupRef(value: any): {
            typeUrl: string;
            value: MsgUpdateRepositoryBackupRef;
        };
        addRepositoryBackupRef(value: any): {
            typeUrl: string;
            value: MsgAddRepositoryBackupRef;
        };
        updateUserPinnedRepositories(value: any): {
            typeUrl: string;
            value: MsgUpdateUserPinnedRepositories;
        };
        updateDaoPinnedRepositories(value: any): {
            typeUrl: string;
            value: MsgUpdateDaoPinnedRepositories;
        };
        updateParams(value: any): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        distributePlatformIncentives(value: any): {
            typeUrl: string;
            value: MsgDistributePlatformIncentives;
        };
    };
    fromPartial: {
        toggleForcePush(value: MsgToggleForcePush): {
            typeUrl: string;
            value: MsgToggleForcePush;
        };
        revokeProviderPermission(value: MsgRevokeProviderPermission): {
            typeUrl: string;
            value: MsgRevokeProviderPermission;
        };
        authorizeProvider(value: MsgAuthorizeProvider): {
            typeUrl: string;
            value: MsgAuthorizeProvider;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        updateTask(value: MsgUpdateTask): {
            typeUrl: string;
            value: MsgUpdateTask;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        setBranch(value: MsgSetBranch): {
            typeUrl: string;
            value: MsgSetBranch;
        };
        multiSetBranch(value: MsgMultiSetBranch): {
            typeUrl: string;
            value: MsgMultiSetBranch;
        };
        deleteBranch(value: MsgDeleteBranch): {
            typeUrl: string;
            value: MsgDeleteBranch;
        };
        multiDeleteBranch(value: MsgMultiDeleteBranch): {
            typeUrl: string;
            value: MsgMultiDeleteBranch;
        };
        setTag(value: MsgSetTag): {
            typeUrl: string;
            value: MsgSetTag;
        };
        multiSetTag(value: MsgMultiSetTag): {
            typeUrl: string;
            value: MsgMultiSetTag;
        };
        deleteTag(value: MsgDeleteTag): {
            typeUrl: string;
            value: MsgDeleteTag;
        };
        multiDeleteTag(value: MsgMultiDeleteTag): {
            typeUrl: string;
            value: MsgMultiDeleteTag;
        };
        addMember(value: MsgAddMember): {
            typeUrl: string;
            value: MsgAddMember;
        };
        updateMemberRole(value: MsgUpdateMemberRole): {
            typeUrl: string;
            value: MsgUpdateMemberRole;
        };
        removeMember(value: MsgRemoveMember): {
            typeUrl: string;
            value: MsgRemoveMember;
        };
        createBounty(value: MsgCreateBounty): {
            typeUrl: string;
            value: MsgCreateBounty;
        };
        updateBountyExpiry(value: MsgUpdateBountyExpiry): {
            typeUrl: string;
            value: MsgUpdateBountyExpiry;
        };
        closeBounty(value: MsgCloseBounty): {
            typeUrl: string;
            value: MsgCloseBounty;
        };
        deleteBounty(value: MsgDeleteBounty): {
            typeUrl: string;
            value: MsgDeleteBounty;
        };
        exercise(value: MsgExercise): {
            typeUrl: string;
            value: MsgExercise;
        };
        createRelease(value: MsgCreateRelease): {
            typeUrl: string;
            value: MsgCreateRelease;
        };
        updateRelease(value: MsgUpdateRelease): {
            typeUrl: string;
            value: MsgUpdateRelease;
        };
        deleteRelease(value: MsgDeleteRelease): {
            typeUrl: string;
            value: MsgDeleteRelease;
        };
        createPullRequest(value: MsgCreatePullRequest): {
            typeUrl: string;
            value: MsgCreatePullRequest;
        };
        updatePullRequestTitle(value: MsgUpdatePullRequestTitle): {
            typeUrl: string;
            value: MsgUpdatePullRequestTitle;
        };
        updatePullRequestDescription(value: MsgUpdatePullRequestDescription): {
            typeUrl: string;
            value: MsgUpdatePullRequestDescription;
        };
        invokeMergePullRequest(value: MsgInvokeMergePullRequest): {
            typeUrl: string;
            value: MsgInvokeMergePullRequest;
        };
        setPullRequestState(value: MsgSetPullRequestState): {
            typeUrl: string;
            value: MsgSetPullRequestState;
        };
        addPullRequestReviewers(value: MsgAddPullRequestReviewers): {
            typeUrl: string;
            value: MsgAddPullRequestReviewers;
        };
        removePullRequestReviewers(value: MsgRemovePullRequestReviewers): {
            typeUrl: string;
            value: MsgRemovePullRequestReviewers;
        };
        addPullRequestAssignees(value: MsgAddPullRequestAssignees): {
            typeUrl: string;
            value: MsgAddPullRequestAssignees;
        };
        removePullRequestAssignees(value: MsgRemovePullRequestAssignees): {
            typeUrl: string;
            value: MsgRemovePullRequestAssignees;
        };
        linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid): {
            typeUrl: string;
            value: MsgLinkPullRequestIssueByIid;
        };
        unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid): {
            typeUrl: string;
            value: MsgUnlinkPullRequestIssueByIid;
        };
        addPullRequestLabels(value: MsgAddPullRequestLabels): {
            typeUrl: string;
            value: MsgAddPullRequestLabels;
        };
        removePullRequestLabels(value: MsgRemovePullRequestLabels): {
            typeUrl: string;
            value: MsgRemovePullRequestLabels;
        };
        deletePullRequest(value: MsgDeletePullRequest): {
            typeUrl: string;
            value: MsgDeletePullRequest;
        };
        createDao(value: MsgCreateDao): {
            typeUrl: string;
            value: MsgCreateDao;
        };
        renameDao(value: MsgRenameDao): {
            typeUrl: string;
            value: MsgRenameDao;
        };
        updateDaoDescription(value: MsgUpdateDaoDescription): {
            typeUrl: string;
            value: MsgUpdateDaoDescription;
        };
        updateDaoWebsite(value: MsgUpdateDaoWebsite): {
            typeUrl: string;
            value: MsgUpdateDaoWebsite;
        };
        updateDaoLocation(value: MsgUpdateDaoLocation): {
            typeUrl: string;
            value: MsgUpdateDaoLocation;
        };
        updateDaoAvatar(value: MsgUpdateDaoAvatar): {
            typeUrl: string;
            value: MsgUpdateDaoAvatar;
        };
        deleteDao(value: MsgDeleteDao): {
            typeUrl: string;
            value: MsgDeleteDao;
        };
        createComment(value: MsgCreateComment): {
            typeUrl: string;
            value: MsgCreateComment;
        };
        updateComment(value: MsgUpdateComment): {
            typeUrl: string;
            value: MsgUpdateComment;
        };
        deleteComment(value: MsgDeleteComment): {
            typeUrl: string;
            value: MsgDeleteComment;
        };
        toggleCommentResolved(value: MsgToggleCommentResolved): {
            typeUrl: string;
            value: MsgToggleCommentResolved;
        };
        createIssue(value: MsgCreateIssue): {
            typeUrl: string;
            value: MsgCreateIssue;
        };
        updateIssueTitle(value: MsgUpdateIssueTitle): {
            typeUrl: string;
            value: MsgUpdateIssueTitle;
        };
        updateIssueDescription(value: MsgUpdateIssueDescription): {
            typeUrl: string;
            value: MsgUpdateIssueDescription;
        };
        toggleIssueState(value: MsgToggleIssueState): {
            typeUrl: string;
            value: MsgToggleIssueState;
        };
        addIssueAssignees(value: MsgAddIssueAssignees): {
            typeUrl: string;
            value: MsgAddIssueAssignees;
        };
        removeIssueAssignees(value: MsgRemoveIssueAssignees): {
            typeUrl: string;
            value: MsgRemoveIssueAssignees;
        };
        addIssueLabels(value: MsgAddIssueLabels): {
            typeUrl: string;
            value: MsgAddIssueLabels;
        };
        removeIssueLabels(value: MsgRemoveIssueLabels): {
            typeUrl: string;
            value: MsgRemoveIssueLabels;
        };
        deleteIssue(value: MsgDeleteIssue): {
            typeUrl: string;
            value: MsgDeleteIssue;
        };
        createRepository(value: MsgCreateRepository): {
            typeUrl: string;
            value: MsgCreateRepository;
        };
        invokeForkRepository(value: MsgInvokeForkRepository): {
            typeUrl: string;
            value: MsgInvokeForkRepository;
        };
        forkRepository(value: MsgForkRepository): {
            typeUrl: string;
            value: MsgForkRepository;
        };
        forkRepositorySuccess(value: MsgForkRepositorySuccess): {
            typeUrl: string;
            value: MsgForkRepositorySuccess;
        };
        renameRepository(value: MsgRenameRepository): {
            typeUrl: string;
            value: MsgRenameRepository;
        };
        updateRepositoryDescription(value: MsgUpdateRepositoryDescription): {
            typeUrl: string;
            value: MsgUpdateRepositoryDescription;
        };
        toggleRepositoryArchived(value: MsgToggleRepositoryArchived): {
            typeUrl: string;
            value: MsgToggleRepositoryArchived;
        };
        changeOwner(value: MsgChangeOwner): {
            typeUrl: string;
            value: MsgChangeOwner;
        };
        updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator): {
            typeUrl: string;
            value: MsgUpdateRepositoryCollaborator;
        };
        removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator): {
            typeUrl: string;
            value: MsgRemoveRepositoryCollaborator;
        };
        createRepositoryLabel(value: MsgCreateRepositoryLabel): {
            typeUrl: string;
            value: MsgCreateRepositoryLabel;
        };
        updateRepositoryLabel(value: MsgUpdateRepositoryLabel): {
            typeUrl: string;
            value: MsgUpdateRepositoryLabel;
        };
        deleteRepositoryLabel(value: MsgDeleteRepositoryLabel): {
            typeUrl: string;
            value: MsgDeleteRepositoryLabel;
        };
        setDefaultBranch(value: MsgSetDefaultBranch): {
            typeUrl: string;
            value: MsgSetDefaultBranch;
        };
        toggleRepositoryForking(value: MsgToggleRepositoryForking): {
            typeUrl: string;
            value: MsgToggleRepositoryForking;
        };
        toggleArweaveBackup(value: MsgToggleArweaveBackup): {
            typeUrl: string;
            value: MsgToggleArweaveBackup;
        };
        deleteRepository(value: MsgDeleteRepository): {
            typeUrl: string;
            value: MsgDeleteRepository;
        };
        createUser(value: MsgCreateUser): {
            typeUrl: string;
            value: MsgCreateUser;
        };
        updateUserUsername(value: MsgUpdateUserUsername): {
            typeUrl: string;
            value: MsgUpdateUserUsername;
        };
        updateUserName(value: MsgUpdateUserName): {
            typeUrl: string;
            value: MsgUpdateUserName;
        };
        updateUserBio(value: MsgUpdateUserBio): {
            typeUrl: string;
            value: MsgUpdateUserBio;
        };
        updateUserAvatar(value: MsgUpdateUserAvatar): {
            typeUrl: string;
            value: MsgUpdateUserAvatar;
        };
        deleteUser(value: MsgDeleteUser): {
            typeUrl: string;
            value: MsgDeleteUser;
        };
        updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef): {
            typeUrl: string;
            value: MsgUpdateRepositoryBackupRef;
        };
        addRepositoryBackupRef(value: MsgAddRepositoryBackupRef): {
            typeUrl: string;
            value: MsgAddRepositoryBackupRef;
        };
        updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories): {
            typeUrl: string;
            value: MsgUpdateUserPinnedRepositories;
        };
        updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories): {
            typeUrl: string;
            value: MsgUpdateDaoPinnedRepositories;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
        distributePlatformIncentives(value: MsgDistributePlatformIncentives): {
            typeUrl: string;
            value: MsgDistributePlatformIncentives;
        };
    };
};
