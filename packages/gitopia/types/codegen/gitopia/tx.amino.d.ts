import { MsgToggleForcePush, MsgRevokeProviderPermission, MsgAuthorizeProvider, MsgCreateTask, MsgUpdateTask, MsgDeleteTask, MsgSetBranch, MsgMultiSetBranch, MsgDeleteBranch, MsgMultiDeleteBranch, MsgSetTag, MsgMultiSetTag, MsgDeleteTag, MsgMultiDeleteTag, MsgAddMember, MsgUpdateMemberRole, MsgRemoveMember, MsgCreateBounty, MsgUpdateBountyExpiry, MsgCloseBounty, MsgDeleteBounty, MsgExercise, MsgCreateRelease, MsgUpdateRelease, MsgDeleteRelease, MsgCreatePullRequest, MsgUpdatePullRequestTitle, MsgUpdatePullRequestDescription, MsgInvokeMergePullRequest, MsgSetPullRequestState, MsgAddPullRequestReviewers, MsgRemovePullRequestReviewers, MsgAddPullRequestAssignees, MsgRemovePullRequestAssignees, MsgLinkPullRequestIssueByIid, MsgUnlinkPullRequestIssueByIid, MsgAddPullRequestLabels, MsgRemovePullRequestLabels, MsgDeletePullRequest, MsgCreateDao, MsgRenameDao, MsgUpdateDaoDescription, MsgUpdateDaoWebsite, MsgUpdateDaoLocation, MsgUpdateDaoAvatar, MsgDeleteDao, MsgCreateComment, MsgUpdateComment, MsgDeleteComment, MsgToggleCommentResolved, MsgCreateIssue, MsgUpdateIssueTitle, MsgUpdateIssueDescription, MsgToggleIssueState, MsgAddIssueAssignees, MsgRemoveIssueAssignees, MsgAddIssueLabels, MsgRemoveIssueLabels, MsgDeleteIssue, MsgCreateRepository, MsgInvokeForkRepository, MsgForkRepository, MsgForkRepositorySuccess, MsgRenameRepository, MsgUpdateRepositoryDescription, MsgToggleRepositoryArchived, MsgChangeOwner, MsgUpdateRepositoryCollaborator, MsgRemoveRepositoryCollaborator, MsgCreateRepositoryLabel, MsgUpdateRepositoryLabel, MsgDeleteRepositoryLabel, MsgSetDefaultBranch, MsgToggleRepositoryForking, MsgToggleArweaveBackup, MsgDeleteRepository, MsgCreateUser, MsgUpdateUserUsername, MsgUpdateUserName, MsgUpdateUserBio, MsgUpdateUserAvatar, MsgDeleteUser, MsgUpdateRepositoryBackupRef, MsgAddRepositoryBackupRef, MsgUpdateUserPinnedRepositories, MsgUpdateDaoPinnedRepositories, MsgUpdateParams, MsgDistributePlatformIncentives } from "./tx";
export declare const AminoConverter: {
    "/gitopia.gitopia.gitopia.MsgToggleForcePush": {
        aminoType: string;
        toAmino: (message: MsgToggleForcePush) => import("./tx").MsgToggleForcePushAmino;
        fromAmino: (object: import("./tx").MsgToggleForcePushAmino) => MsgToggleForcePush;
    };
    "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission": {
        aminoType: string;
        toAmino: (message: MsgRevokeProviderPermission) => import("./tx").MsgRevokeProviderPermissionAmino;
        fromAmino: (object: import("./tx").MsgRevokeProviderPermissionAmino) => MsgRevokeProviderPermission;
    };
    "/gitopia.gitopia.gitopia.MsgAuthorizeProvider": {
        aminoType: string;
        toAmino: (message: MsgAuthorizeProvider) => import("./tx").MsgAuthorizeProviderAmino;
        fromAmino: (object: import("./tx").MsgAuthorizeProviderAmino) => MsgAuthorizeProvider;
    };
    "/gitopia.gitopia.gitopia.MsgCreateTask": {
        aminoType: string;
        toAmino: (message: MsgCreateTask) => import("./tx").MsgCreateTaskAmino;
        fromAmino: (object: import("./tx").MsgCreateTaskAmino) => MsgCreateTask;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateTask": {
        aminoType: string;
        toAmino: (message: MsgUpdateTask) => import("./tx").MsgUpdateTaskAmino;
        fromAmino: (object: import("./tx").MsgUpdateTaskAmino) => MsgUpdateTask;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteTask": {
        aminoType: string;
        toAmino: (message: MsgDeleteTask) => import("./tx").MsgDeleteTaskAmino;
        fromAmino: (object: import("./tx").MsgDeleteTaskAmino) => MsgDeleteTask;
    };
    "/gitopia.gitopia.gitopia.MsgSetBranch": {
        aminoType: string;
        toAmino: (message: MsgSetBranch) => import("./tx").MsgSetBranchAmino;
        fromAmino: (object: import("./tx").MsgSetBranchAmino) => MsgSetBranch;
    };
    "/gitopia.gitopia.gitopia.MsgMultiSetBranch": {
        aminoType: string;
        toAmino: (message: MsgMultiSetBranch) => import("./tx").MsgMultiSetBranchAmino;
        fromAmino: (object: import("./tx").MsgMultiSetBranchAmino) => MsgMultiSetBranch;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteBranch": {
        aminoType: string;
        toAmino: (message: MsgDeleteBranch) => import("./tx").MsgDeleteBranchAmino;
        fromAmino: (object: import("./tx").MsgDeleteBranchAmino) => MsgDeleteBranch;
    };
    "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch": {
        aminoType: string;
        toAmino: (message: MsgMultiDeleteBranch) => import("./tx").MsgMultiDeleteBranchAmino;
        fromAmino: (object: import("./tx").MsgMultiDeleteBranchAmino) => MsgMultiDeleteBranch;
    };
    "/gitopia.gitopia.gitopia.MsgSetTag": {
        aminoType: string;
        toAmino: (message: MsgSetTag) => import("./tx").MsgSetTagAmino;
        fromAmino: (object: import("./tx").MsgSetTagAmino) => MsgSetTag;
    };
    "/gitopia.gitopia.gitopia.MsgMultiSetTag": {
        aminoType: string;
        toAmino: (message: MsgMultiSetTag) => import("./tx").MsgMultiSetTagAmino;
        fromAmino: (object: import("./tx").MsgMultiSetTagAmino) => MsgMultiSetTag;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteTag": {
        aminoType: string;
        toAmino: (message: MsgDeleteTag) => import("./tx").MsgDeleteTagAmino;
        fromAmino: (object: import("./tx").MsgDeleteTagAmino) => MsgDeleteTag;
    };
    "/gitopia.gitopia.gitopia.MsgMultiDeleteTag": {
        aminoType: string;
        toAmino: (message: MsgMultiDeleteTag) => import("./tx").MsgMultiDeleteTagAmino;
        fromAmino: (object: import("./tx").MsgMultiDeleteTagAmino) => MsgMultiDeleteTag;
    };
    "/gitopia.gitopia.gitopia.MsgAddMember": {
        aminoType: string;
        toAmino: (message: MsgAddMember) => import("./tx").MsgAddMemberAmino;
        fromAmino: (object: import("./tx").MsgAddMemberAmino) => MsgAddMember;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateMemberRole": {
        aminoType: string;
        toAmino: (message: MsgUpdateMemberRole) => import("./tx").MsgUpdateMemberRoleAmino;
        fromAmino: (object: import("./tx").MsgUpdateMemberRoleAmino) => MsgUpdateMemberRole;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveMember": {
        aminoType: string;
        toAmino: (message: MsgRemoveMember) => import("./tx").MsgRemoveMemberAmino;
        fromAmino: (object: import("./tx").MsgRemoveMemberAmino) => MsgRemoveMember;
    };
    "/gitopia.gitopia.gitopia.MsgCreateBounty": {
        aminoType: string;
        toAmino: (message: MsgCreateBounty) => import("./tx").MsgCreateBountyAmino;
        fromAmino: (object: import("./tx").MsgCreateBountyAmino) => MsgCreateBounty;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry": {
        aminoType: string;
        toAmino: (message: MsgUpdateBountyExpiry) => import("./tx").MsgUpdateBountyExpiryAmino;
        fromAmino: (object: import("./tx").MsgUpdateBountyExpiryAmino) => MsgUpdateBountyExpiry;
    };
    "/gitopia.gitopia.gitopia.MsgCloseBounty": {
        aminoType: string;
        toAmino: (message: MsgCloseBounty) => import("./tx").MsgCloseBountyAmino;
        fromAmino: (object: import("./tx").MsgCloseBountyAmino) => MsgCloseBounty;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteBounty": {
        aminoType: string;
        toAmino: (message: MsgDeleteBounty) => import("./tx").MsgDeleteBountyAmino;
        fromAmino: (object: import("./tx").MsgDeleteBountyAmino) => MsgDeleteBounty;
    };
    "/gitopia.gitopia.gitopia.MsgExercise": {
        aminoType: string;
        toAmino: (message: MsgExercise) => import("./tx").MsgExerciseAmino;
        fromAmino: (object: import("./tx").MsgExerciseAmino) => MsgExercise;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRelease": {
        aminoType: string;
        toAmino: (message: MsgCreateRelease) => import("./tx").MsgCreateReleaseAmino;
        fromAmino: (object: import("./tx").MsgCreateReleaseAmino) => MsgCreateRelease;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRelease": {
        aminoType: string;
        toAmino: (message: MsgUpdateRelease) => import("./tx").MsgUpdateReleaseAmino;
        fromAmino: (object: import("./tx").MsgUpdateReleaseAmino) => MsgUpdateRelease;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRelease": {
        aminoType: string;
        toAmino: (message: MsgDeleteRelease) => import("./tx").MsgDeleteReleaseAmino;
        fromAmino: (object: import("./tx").MsgDeleteReleaseAmino) => MsgDeleteRelease;
    };
    "/gitopia.gitopia.gitopia.MsgCreatePullRequest": {
        aminoType: string;
        toAmino: (message: MsgCreatePullRequest) => import("./tx").MsgCreatePullRequestAmino;
        fromAmino: (object: import("./tx").MsgCreatePullRequestAmino) => MsgCreatePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle": {
        aminoType: string;
        toAmino: (message: MsgUpdatePullRequestTitle) => import("./tx").MsgUpdatePullRequestTitleAmino;
        fromAmino: (object: import("./tx").MsgUpdatePullRequestTitleAmino) => MsgUpdatePullRequestTitle;
    };
    "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription": {
        aminoType: string;
        toAmino: (message: MsgUpdatePullRequestDescription) => import("./tx").MsgUpdatePullRequestDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdatePullRequestDescriptionAmino) => MsgUpdatePullRequestDescription;
    };
    "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest": {
        aminoType: string;
        toAmino: (message: MsgInvokeMergePullRequest) => import("./tx").MsgInvokeMergePullRequestAmino;
        fromAmino: (object: import("./tx").MsgInvokeMergePullRequestAmino) => MsgInvokeMergePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgSetPullRequestState": {
        aminoType: string;
        toAmino: (message: MsgSetPullRequestState) => import("./tx").MsgSetPullRequestStateAmino;
        fromAmino: (object: import("./tx").MsgSetPullRequestStateAmino) => MsgSetPullRequestState;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers": {
        aminoType: string;
        toAmino: (message: MsgAddPullRequestReviewers) => import("./tx").MsgAddPullRequestReviewersAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestReviewersAmino) => MsgAddPullRequestReviewers;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers": {
        aminoType: string;
        toAmino: (message: MsgRemovePullRequestReviewers) => import("./tx").MsgRemovePullRequestReviewersAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestReviewersAmino) => MsgRemovePullRequestReviewers;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees": {
        aminoType: string;
        toAmino: (message: MsgAddPullRequestAssignees) => import("./tx").MsgAddPullRequestAssigneesAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestAssigneesAmino) => MsgAddPullRequestAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees": {
        aminoType: string;
        toAmino: (message: MsgRemovePullRequestAssignees) => import("./tx").MsgRemovePullRequestAssigneesAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestAssigneesAmino) => MsgRemovePullRequestAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid": {
        aminoType: string;
        toAmino: (message: MsgLinkPullRequestIssueByIid) => import("./tx").MsgLinkPullRequestIssueByIidAmino;
        fromAmino: (object: import("./tx").MsgLinkPullRequestIssueByIidAmino) => MsgLinkPullRequestIssueByIid;
    };
    "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid": {
        aminoType: string;
        toAmino: (message: MsgUnlinkPullRequestIssueByIid) => import("./tx").MsgUnlinkPullRequestIssueByIidAmino;
        fromAmino: (object: import("./tx").MsgUnlinkPullRequestIssueByIidAmino) => MsgUnlinkPullRequestIssueByIid;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels": {
        aminoType: string;
        toAmino: (message: MsgAddPullRequestLabels) => import("./tx").MsgAddPullRequestLabelsAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestLabelsAmino) => MsgAddPullRequestLabels;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels": {
        aminoType: string;
        toAmino: (message: MsgRemovePullRequestLabels) => import("./tx").MsgRemovePullRequestLabelsAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestLabelsAmino) => MsgRemovePullRequestLabels;
    };
    "/gitopia.gitopia.gitopia.MsgDeletePullRequest": {
        aminoType: string;
        toAmino: (message: MsgDeletePullRequest) => import("./tx").MsgDeletePullRequestAmino;
        fromAmino: (object: import("./tx").MsgDeletePullRequestAmino) => MsgDeletePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgCreateDao": {
        aminoType: string;
        toAmino: (message: MsgCreateDao) => import("./tx").MsgCreateDaoAmino;
        fromAmino: (object: import("./tx").MsgCreateDaoAmino) => MsgCreateDao;
    };
    "/gitopia.gitopia.gitopia.MsgRenameDao": {
        aminoType: string;
        toAmino: (message: MsgRenameDao) => import("./tx").MsgRenameDaoAmino;
        fromAmino: (object: import("./tx").MsgRenameDaoAmino) => MsgRenameDao;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription": {
        aminoType: string;
        toAmino: (message: MsgUpdateDaoDescription) => import("./tx").MsgUpdateDaoDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoDescriptionAmino) => MsgUpdateDaoDescription;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite": {
        aminoType: string;
        toAmino: (message: MsgUpdateDaoWebsite) => import("./tx").MsgUpdateDaoWebsiteAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoWebsiteAmino) => MsgUpdateDaoWebsite;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation": {
        aminoType: string;
        toAmino: (message: MsgUpdateDaoLocation) => import("./tx").MsgUpdateDaoLocationAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoLocationAmino) => MsgUpdateDaoLocation;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar": {
        aminoType: string;
        toAmino: (message: MsgUpdateDaoAvatar) => import("./tx").MsgUpdateDaoAvatarAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoAvatarAmino) => MsgUpdateDaoAvatar;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteDao": {
        aminoType: string;
        toAmino: (message: MsgDeleteDao) => import("./tx").MsgDeleteDaoAmino;
        fromAmino: (object: import("./tx").MsgDeleteDaoAmino) => MsgDeleteDao;
    };
    "/gitopia.gitopia.gitopia.MsgCreateComment": {
        aminoType: string;
        toAmino: (message: MsgCreateComment) => import("./tx").MsgCreateCommentAmino;
        fromAmino: (object: import("./tx").MsgCreateCommentAmino) => MsgCreateComment;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateComment": {
        aminoType: string;
        toAmino: (message: MsgUpdateComment) => import("./tx").MsgUpdateCommentAmino;
        fromAmino: (object: import("./tx").MsgUpdateCommentAmino) => MsgUpdateComment;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteComment": {
        aminoType: string;
        toAmino: (message: MsgDeleteComment) => import("./tx").MsgDeleteCommentAmino;
        fromAmino: (object: import("./tx").MsgDeleteCommentAmino) => MsgDeleteComment;
    };
    "/gitopia.gitopia.gitopia.MsgToggleCommentResolved": {
        aminoType: string;
        toAmino: (message: MsgToggleCommentResolved) => import("./tx").MsgToggleCommentResolvedAmino;
        fromAmino: (object: import("./tx").MsgToggleCommentResolvedAmino) => MsgToggleCommentResolved;
    };
    "/gitopia.gitopia.gitopia.MsgCreateIssue": {
        aminoType: string;
        toAmino: (message: MsgCreateIssue) => import("./tx").MsgCreateIssueAmino;
        fromAmino: (object: import("./tx").MsgCreateIssueAmino) => MsgCreateIssue;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle": {
        aminoType: string;
        toAmino: (message: MsgUpdateIssueTitle) => import("./tx").MsgUpdateIssueTitleAmino;
        fromAmino: (object: import("./tx").MsgUpdateIssueTitleAmino) => MsgUpdateIssueTitle;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription": {
        aminoType: string;
        toAmino: (message: MsgUpdateIssueDescription) => import("./tx").MsgUpdateIssueDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateIssueDescriptionAmino) => MsgUpdateIssueDescription;
    };
    "/gitopia.gitopia.gitopia.MsgToggleIssueState": {
        aminoType: string;
        toAmino: (message: MsgToggleIssueState) => import("./tx").MsgToggleIssueStateAmino;
        fromAmino: (object: import("./tx").MsgToggleIssueStateAmino) => MsgToggleIssueState;
    };
    "/gitopia.gitopia.gitopia.MsgAddIssueAssignees": {
        aminoType: string;
        toAmino: (message: MsgAddIssueAssignees) => import("./tx").MsgAddIssueAssigneesAmino;
        fromAmino: (object: import("./tx").MsgAddIssueAssigneesAmino) => MsgAddIssueAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees": {
        aminoType: string;
        toAmino: (message: MsgRemoveIssueAssignees) => import("./tx").MsgRemoveIssueAssigneesAmino;
        fromAmino: (object: import("./tx").MsgRemoveIssueAssigneesAmino) => MsgRemoveIssueAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgAddIssueLabels": {
        aminoType: string;
        toAmino: (message: MsgAddIssueLabels) => import("./tx").MsgAddIssueLabelsAmino;
        fromAmino: (object: import("./tx").MsgAddIssueLabelsAmino) => MsgAddIssueLabels;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels": {
        aminoType: string;
        toAmino: (message: MsgRemoveIssueLabels) => import("./tx").MsgRemoveIssueLabelsAmino;
        fromAmino: (object: import("./tx").MsgRemoveIssueLabelsAmino) => MsgRemoveIssueLabels;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteIssue": {
        aminoType: string;
        toAmino: (message: MsgDeleteIssue) => import("./tx").MsgDeleteIssueAmino;
        fromAmino: (object: import("./tx").MsgDeleteIssueAmino) => MsgDeleteIssue;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRepository": {
        aminoType: string;
        toAmino: (message: MsgCreateRepository) => import("./tx").MsgCreateRepositoryAmino;
        fromAmino: (object: import("./tx").MsgCreateRepositoryAmino) => MsgCreateRepository;
    };
    "/gitopia.gitopia.gitopia.MsgInvokeForkRepository": {
        aminoType: string;
        toAmino: (message: MsgInvokeForkRepository) => import("./tx").MsgInvokeForkRepositoryAmino;
        fromAmino: (object: import("./tx").MsgInvokeForkRepositoryAmino) => MsgInvokeForkRepository;
    };
    "/gitopia.gitopia.gitopia.MsgForkRepository": {
        aminoType: string;
        toAmino: (message: MsgForkRepository) => import("./tx").MsgForkRepositoryAmino;
        fromAmino: (object: import("./tx").MsgForkRepositoryAmino) => MsgForkRepository;
    };
    "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess": {
        aminoType: string;
        toAmino: (message: MsgForkRepositorySuccess) => import("./tx").MsgForkRepositorySuccessAmino;
        fromAmino: (object: import("./tx").MsgForkRepositorySuccessAmino) => MsgForkRepositorySuccess;
    };
    "/gitopia.gitopia.gitopia.MsgRenameRepository": {
        aminoType: string;
        toAmino: (message: MsgRenameRepository) => import("./tx").MsgRenameRepositoryAmino;
        fromAmino: (object: import("./tx").MsgRenameRepositoryAmino) => MsgRenameRepository;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription": {
        aminoType: string;
        toAmino: (message: MsgUpdateRepositoryDescription) => import("./tx").MsgUpdateRepositoryDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryDescriptionAmino) => MsgUpdateRepositoryDescription;
    };
    "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived": {
        aminoType: string;
        toAmino: (message: MsgToggleRepositoryArchived) => import("./tx").MsgToggleRepositoryArchivedAmino;
        fromAmino: (object: import("./tx").MsgToggleRepositoryArchivedAmino) => MsgToggleRepositoryArchived;
    };
    "/gitopia.gitopia.gitopia.MsgChangeOwner": {
        aminoType: string;
        toAmino: (message: MsgChangeOwner) => import("./tx").MsgChangeOwnerAmino;
        fromAmino: (object: import("./tx").MsgChangeOwnerAmino) => MsgChangeOwner;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator": {
        aminoType: string;
        toAmino: (message: MsgUpdateRepositoryCollaborator) => import("./tx").MsgUpdateRepositoryCollaboratorAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryCollaboratorAmino) => MsgUpdateRepositoryCollaborator;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator": {
        aminoType: string;
        toAmino: (message: MsgRemoveRepositoryCollaborator) => import("./tx").MsgRemoveRepositoryCollaboratorAmino;
        fromAmino: (object: import("./tx").MsgRemoveRepositoryCollaboratorAmino) => MsgRemoveRepositoryCollaborator;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel": {
        aminoType: string;
        toAmino: (message: MsgCreateRepositoryLabel) => import("./tx").MsgCreateRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgCreateRepositoryLabelAmino) => MsgCreateRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel": {
        aminoType: string;
        toAmino: (message: MsgUpdateRepositoryLabel) => import("./tx").MsgUpdateRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryLabelAmino) => MsgUpdateRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel": {
        aminoType: string;
        toAmino: (message: MsgDeleteRepositoryLabel) => import("./tx").MsgDeleteRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgDeleteRepositoryLabelAmino) => MsgDeleteRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgSetDefaultBranch": {
        aminoType: string;
        toAmino: (message: MsgSetDefaultBranch) => import("./tx").MsgSetDefaultBranchAmino;
        fromAmino: (object: import("./tx").MsgSetDefaultBranchAmino) => MsgSetDefaultBranch;
    };
    "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking": {
        aminoType: string;
        toAmino: (message: MsgToggleRepositoryForking) => import("./tx").MsgToggleRepositoryForkingAmino;
        fromAmino: (object: import("./tx").MsgToggleRepositoryForkingAmino) => MsgToggleRepositoryForking;
    };
    "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup": {
        aminoType: string;
        toAmino: (message: MsgToggleArweaveBackup) => import("./tx").MsgToggleArweaveBackupAmino;
        fromAmino: (object: import("./tx").MsgToggleArweaveBackupAmino) => MsgToggleArweaveBackup;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRepository": {
        aminoType: string;
        toAmino: (message: MsgDeleteRepository) => import("./tx").MsgDeleteRepositoryAmino;
        fromAmino: (object: import("./tx").MsgDeleteRepositoryAmino) => MsgDeleteRepository;
    };
    "/gitopia.gitopia.gitopia.MsgCreateUser": {
        aminoType: string;
        toAmino: (message: MsgCreateUser) => import("./tx").MsgCreateUserAmino;
        fromAmino: (object: import("./tx").MsgCreateUserAmino) => MsgCreateUser;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserUsername": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserUsername) => import("./tx").MsgUpdateUserUsernameAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserUsernameAmino) => MsgUpdateUserUsername;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserName": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserName) => import("./tx").MsgUpdateUserNameAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserNameAmino) => MsgUpdateUserName;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserBio": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserBio) => import("./tx").MsgUpdateUserBioAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserBioAmino) => MsgUpdateUserBio;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserAvatar) => import("./tx").MsgUpdateUserAvatarAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserAvatarAmino) => MsgUpdateUserAvatar;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteUser": {
        aminoType: string;
        toAmino: (message: MsgDeleteUser) => import("./tx").MsgDeleteUserAmino;
        fromAmino: (object: import("./tx").MsgDeleteUserAmino) => MsgDeleteUser;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef": {
        aminoType: string;
        toAmino: (message: MsgUpdateRepositoryBackupRef) => import("./tx").MsgUpdateRepositoryBackupRefAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryBackupRefAmino) => MsgUpdateRepositoryBackupRef;
    };
    "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef": {
        aminoType: string;
        toAmino: (message: MsgAddRepositoryBackupRef) => import("./tx").MsgAddRepositoryBackupRefAmino;
        fromAmino: (object: import("./tx").MsgAddRepositoryBackupRefAmino) => MsgAddRepositoryBackupRef;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories": {
        aminoType: string;
        toAmino: (message: MsgUpdateUserPinnedRepositories) => import("./tx").MsgUpdateUserPinnedRepositoriesAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserPinnedRepositoriesAmino) => MsgUpdateUserPinnedRepositories;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories": {
        aminoType: string;
        toAmino: (message: MsgUpdateDaoPinnedRepositories) => import("./tx").MsgUpdateDaoPinnedRepositoriesAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoPinnedRepositoriesAmino) => MsgUpdateDaoPinnedRepositories;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
    "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives": {
        aminoType: string;
        toAmino: (message: MsgDistributePlatformIncentives) => import("./tx").MsgDistributePlatformIncentivesAmino;
        fromAmino: (object: import("./tx").MsgDistributePlatformIncentivesAmino) => MsgDistributePlatformIncentives;
    };
};
