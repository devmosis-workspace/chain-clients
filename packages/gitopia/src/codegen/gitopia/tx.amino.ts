import { MsgToggleForcePush, MsgRevokeProviderPermission, MsgAuthorizeProvider, MsgCreateTask, MsgUpdateTask, MsgDeleteTask, MsgSetBranch, MsgMultiSetBranch, MsgDeleteBranch, MsgMultiDeleteBranch, MsgSetTag, MsgMultiSetTag, MsgDeleteTag, MsgMultiDeleteTag, MsgAddMember, MsgUpdateMemberRole, MsgRemoveMember, MsgCreateBounty, MsgUpdateBountyExpiry, MsgCloseBounty, MsgDeleteBounty, MsgExercise, MsgCreateRelease, MsgUpdateRelease, MsgDeleteRelease, MsgCreatePullRequest, MsgUpdatePullRequestTitle, MsgUpdatePullRequestDescription, MsgInvokeMergePullRequest, MsgSetPullRequestState, MsgAddPullRequestReviewers, MsgRemovePullRequestReviewers, MsgAddPullRequestAssignees, MsgRemovePullRequestAssignees, MsgLinkPullRequestIssueByIid, MsgUnlinkPullRequestIssueByIid, MsgAddPullRequestLabels, MsgRemovePullRequestLabels, MsgDeletePullRequest, MsgCreateDao, MsgRenameDao, MsgUpdateDaoDescription, MsgUpdateDaoWebsite, MsgUpdateDaoLocation, MsgUpdateDaoAvatar, MsgDeleteDao, MsgCreateComment, MsgUpdateComment, MsgDeleteComment, MsgToggleCommentResolved, MsgCreateIssue, MsgUpdateIssueTitle, MsgUpdateIssueDescription, MsgToggleIssueState, MsgAddIssueAssignees, MsgRemoveIssueAssignees, MsgAddIssueLabels, MsgRemoveIssueLabels, MsgDeleteIssue, MsgCreateRepository, MsgInvokeForkRepository, MsgForkRepository, MsgForkRepositorySuccess, MsgRenameRepository, MsgUpdateRepositoryDescription, MsgToggleRepositoryArchived, MsgChangeOwner, MsgUpdateRepositoryCollaborator, MsgRemoveRepositoryCollaborator, MsgCreateRepositoryLabel, MsgUpdateRepositoryLabel, MsgDeleteRepositoryLabel, MsgSetDefaultBranch, MsgToggleRepositoryForking, MsgToggleArweaveBackup, MsgDeleteRepository, MsgCreateUser, MsgUpdateUserUsername, MsgUpdateUserName, MsgUpdateUserBio, MsgUpdateUserAvatar, MsgDeleteUser, MsgUpdateRepositoryBackupRef, MsgAddRepositoryBackupRef, MsgUpdateUserPinnedRepositories, MsgUpdateDaoPinnedRepositories, MsgUpdateParams, MsgDistributePlatformIncentives } from "./tx";
export const AminoConverter = {
  "/gitopia.gitopia.gitopia.MsgToggleForcePush": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
    toAmino: MsgToggleForcePush.toAmino,
    fromAmino: MsgToggleForcePush.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
    toAmino: MsgRevokeProviderPermission.toAmino,
    fromAmino: MsgRevokeProviderPermission.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAuthorizeProvider": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
    toAmino: MsgAuthorizeProvider.toAmino,
    fromAmino: MsgAuthorizeProvider.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateTask": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateTask",
    toAmino: MsgCreateTask.toAmino,
    fromAmino: MsgCreateTask.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateTask": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateTask",
    toAmino: MsgUpdateTask.toAmino,
    fromAmino: MsgUpdateTask.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteTask": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteTask",
    toAmino: MsgDeleteTask.toAmino,
    fromAmino: MsgDeleteTask.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgSetBranch": {
    aminoType: "/gitopia.gitopia.gitopia.MsgSetBranch",
    toAmino: MsgSetBranch.toAmino,
    fromAmino: MsgSetBranch.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgMultiSetBranch": {
    aminoType: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
    toAmino: MsgMultiSetBranch.toAmino,
    fromAmino: MsgMultiSetBranch.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteBranch": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
    toAmino: MsgDeleteBranch.toAmino,
    fromAmino: MsgDeleteBranch.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch": {
    aminoType: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
    toAmino: MsgMultiDeleteBranch.toAmino,
    fromAmino: MsgMultiDeleteBranch.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgSetTag": {
    aminoType: "/gitopia.gitopia.gitopia.MsgSetTag",
    toAmino: MsgSetTag.toAmino,
    fromAmino: MsgSetTag.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgMultiSetTag": {
    aminoType: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
    toAmino: MsgMultiSetTag.toAmino,
    fromAmino: MsgMultiSetTag.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteTag": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteTag",
    toAmino: MsgDeleteTag.toAmino,
    fromAmino: MsgDeleteTag.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgMultiDeleteTag": {
    aminoType: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
    toAmino: MsgMultiDeleteTag.toAmino,
    fromAmino: MsgMultiDeleteTag.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddMember": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddMember",
    toAmino: MsgAddMember.toAmino,
    fromAmino: MsgAddMember.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateMemberRole": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
    toAmino: MsgUpdateMemberRole.toAmino,
    fromAmino: MsgUpdateMemberRole.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemoveMember": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemoveMember",
    toAmino: MsgRemoveMember.toAmino,
    fromAmino: MsgRemoveMember.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateBounty": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateBounty",
    toAmino: MsgCreateBounty.toAmino,
    fromAmino: MsgCreateBounty.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
    toAmino: MsgUpdateBountyExpiry.toAmino,
    fromAmino: MsgUpdateBountyExpiry.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCloseBounty": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCloseBounty",
    toAmino: MsgCloseBounty.toAmino,
    fromAmino: MsgCloseBounty.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteBounty": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
    toAmino: MsgDeleteBounty.toAmino,
    fromAmino: MsgDeleteBounty.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgExercise": {
    aminoType: "/gitopia.gitopia.gitopia.MsgExercise",
    toAmino: MsgExercise.toAmino,
    fromAmino: MsgExercise.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateRelease": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateRelease",
    toAmino: MsgCreateRelease.toAmino,
    fromAmino: MsgCreateRelease.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateRelease": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
    toAmino: MsgUpdateRelease.toAmino,
    fromAmino: MsgUpdateRelease.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteRelease": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
    toAmino: MsgDeleteRelease.toAmino,
    fromAmino: MsgDeleteRelease.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreatePullRequest": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
    toAmino: MsgCreatePullRequest.toAmino,
    fromAmino: MsgCreatePullRequest.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
    toAmino: MsgUpdatePullRequestTitle.toAmino,
    fromAmino: MsgUpdatePullRequestTitle.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
    toAmino: MsgUpdatePullRequestDescription.toAmino,
    fromAmino: MsgUpdatePullRequestDescription.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest": {
    aminoType: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
    toAmino: MsgInvokeMergePullRequest.toAmino,
    fromAmino: MsgInvokeMergePullRequest.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgSetPullRequestState": {
    aminoType: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
    toAmino: MsgSetPullRequestState.toAmino,
    fromAmino: MsgSetPullRequestState.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
    toAmino: MsgAddPullRequestReviewers.toAmino,
    fromAmino: MsgAddPullRequestReviewers.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
    toAmino: MsgRemovePullRequestReviewers.toAmino,
    fromAmino: MsgRemovePullRequestReviewers.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
    toAmino: MsgAddPullRequestAssignees.toAmino,
    fromAmino: MsgAddPullRequestAssignees.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
    toAmino: MsgRemovePullRequestAssignees.toAmino,
    fromAmino: MsgRemovePullRequestAssignees.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid": {
    aminoType: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
    toAmino: MsgLinkPullRequestIssueByIid.toAmino,
    fromAmino: MsgLinkPullRequestIssueByIid.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
    toAmino: MsgUnlinkPullRequestIssueByIid.toAmino,
    fromAmino: MsgUnlinkPullRequestIssueByIid.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
    toAmino: MsgAddPullRequestLabels.toAmino,
    fromAmino: MsgAddPullRequestLabels.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
    toAmino: MsgRemovePullRequestLabels.toAmino,
    fromAmino: MsgRemovePullRequestLabels.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeletePullRequest": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
    toAmino: MsgDeletePullRequest.toAmino,
    fromAmino: MsgDeletePullRequest.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateDao": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateDao",
    toAmino: MsgCreateDao.toAmino,
    fromAmino: MsgCreateDao.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRenameDao": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRenameDao",
    toAmino: MsgRenameDao.toAmino,
    fromAmino: MsgRenameDao.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
    toAmino: MsgUpdateDaoDescription.toAmino,
    fromAmino: MsgUpdateDaoDescription.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
    toAmino: MsgUpdateDaoWebsite.toAmino,
    fromAmino: MsgUpdateDaoWebsite.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
    toAmino: MsgUpdateDaoLocation.toAmino,
    fromAmino: MsgUpdateDaoLocation.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
    toAmino: MsgUpdateDaoAvatar.toAmino,
    fromAmino: MsgUpdateDaoAvatar.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteDao": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteDao",
    toAmino: MsgDeleteDao.toAmino,
    fromAmino: MsgDeleteDao.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateComment": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateComment",
    toAmino: MsgCreateComment.toAmino,
    fromAmino: MsgCreateComment.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateComment": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateComment",
    toAmino: MsgUpdateComment.toAmino,
    fromAmino: MsgUpdateComment.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteComment": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteComment",
    toAmino: MsgDeleteComment.toAmino,
    fromAmino: MsgDeleteComment.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgToggleCommentResolved": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
    toAmino: MsgToggleCommentResolved.toAmino,
    fromAmino: MsgToggleCommentResolved.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateIssue": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateIssue",
    toAmino: MsgCreateIssue.toAmino,
    fromAmino: MsgCreateIssue.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
    toAmino: MsgUpdateIssueTitle.toAmino,
    fromAmino: MsgUpdateIssueTitle.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
    toAmino: MsgUpdateIssueDescription.toAmino,
    fromAmino: MsgUpdateIssueDescription.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgToggleIssueState": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
    toAmino: MsgToggleIssueState.toAmino,
    fromAmino: MsgToggleIssueState.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddIssueAssignees": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
    toAmino: MsgAddIssueAssignees.toAmino,
    fromAmino: MsgAddIssueAssignees.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
    toAmino: MsgRemoveIssueAssignees.toAmino,
    fromAmino: MsgRemoveIssueAssignees.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddIssueLabels": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
    toAmino: MsgAddIssueLabels.toAmino,
    fromAmino: MsgAddIssueLabels.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
    toAmino: MsgRemoveIssueLabels.toAmino,
    fromAmino: MsgRemoveIssueLabels.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteIssue": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
    toAmino: MsgDeleteIssue.toAmino,
    fromAmino: MsgDeleteIssue.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateRepository": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateRepository",
    toAmino: MsgCreateRepository.toAmino,
    fromAmino: MsgCreateRepository.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgInvokeForkRepository": {
    aminoType: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
    toAmino: MsgInvokeForkRepository.toAmino,
    fromAmino: MsgInvokeForkRepository.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgForkRepository": {
    aminoType: "/gitopia.gitopia.gitopia.MsgForkRepository",
    toAmino: MsgForkRepository.toAmino,
    fromAmino: MsgForkRepository.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess": {
    aminoType: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
    toAmino: MsgForkRepositorySuccess.toAmino,
    fromAmino: MsgForkRepositorySuccess.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRenameRepository": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRenameRepository",
    toAmino: MsgRenameRepository.toAmino,
    fromAmino: MsgRenameRepository.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
    toAmino: MsgUpdateRepositoryDescription.toAmino,
    fromAmino: MsgUpdateRepositoryDescription.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
    toAmino: MsgToggleRepositoryArchived.toAmino,
    fromAmino: MsgToggleRepositoryArchived.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgChangeOwner": {
    aminoType: "/gitopia.gitopia.gitopia.MsgChangeOwner",
    toAmino: MsgChangeOwner.toAmino,
    fromAmino: MsgChangeOwner.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
    toAmino: MsgUpdateRepositoryCollaborator.toAmino,
    fromAmino: MsgUpdateRepositoryCollaborator.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator": {
    aminoType: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
    toAmino: MsgRemoveRepositoryCollaborator.toAmino,
    fromAmino: MsgRemoveRepositoryCollaborator.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
    toAmino: MsgCreateRepositoryLabel.toAmino,
    fromAmino: MsgCreateRepositoryLabel.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
    toAmino: MsgUpdateRepositoryLabel.toAmino,
    fromAmino: MsgUpdateRepositoryLabel.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
    toAmino: MsgDeleteRepositoryLabel.toAmino,
    fromAmino: MsgDeleteRepositoryLabel.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgSetDefaultBranch": {
    aminoType: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
    toAmino: MsgSetDefaultBranch.toAmino,
    fromAmino: MsgSetDefaultBranch.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
    toAmino: MsgToggleRepositoryForking.toAmino,
    fromAmino: MsgToggleRepositoryForking.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup": {
    aminoType: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
    toAmino: MsgToggleArweaveBackup.toAmino,
    fromAmino: MsgToggleArweaveBackup.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteRepository": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
    toAmino: MsgDeleteRepository.toAmino,
    fromAmino: MsgDeleteRepository.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgCreateUser": {
    aminoType: "/gitopia.gitopia.gitopia.MsgCreateUser",
    toAmino: MsgCreateUser.toAmino,
    fromAmino: MsgCreateUser.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateUserUsername": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
    toAmino: MsgUpdateUserUsername.toAmino,
    fromAmino: MsgUpdateUserUsername.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateUserName": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
    toAmino: MsgUpdateUserName.toAmino,
    fromAmino: MsgUpdateUserName.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateUserBio": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
    toAmino: MsgUpdateUserBio.toAmino,
    fromAmino: MsgUpdateUserBio.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
    toAmino: MsgUpdateUserAvatar.toAmino,
    fromAmino: MsgUpdateUserAvatar.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDeleteUser": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDeleteUser",
    toAmino: MsgDeleteUser.toAmino,
    fromAmino: MsgDeleteUser.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
    toAmino: MsgUpdateRepositoryBackupRef.toAmino,
    fromAmino: MsgUpdateRepositoryBackupRef.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef": {
    aminoType: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
    toAmino: MsgAddRepositoryBackupRef.toAmino,
    fromAmino: MsgAddRepositoryBackupRef.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
    toAmino: MsgUpdateUserPinnedRepositories.toAmino,
    fromAmino: MsgUpdateUserPinnedRepositories.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
    toAmino: MsgUpdateDaoPinnedRepositories.toAmino,
    fromAmino: MsgUpdateDaoPinnedRepositories.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgUpdateParams": {
    aminoType: "/gitopia.gitopia.gitopia.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino
  },
  "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives": {
    aminoType: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
    toAmino: MsgDistributePlatformIncentives.toAmino,
    fromAmino: MsgDistributePlatformIncentives.fromAmino
  }
};