import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgToggleForcePush, MsgRevokeProviderPermission, MsgAuthorizeProvider, MsgCreateTask, MsgUpdateTask, MsgDeleteTask, MsgSetBranch, MsgMultiSetBranch, MsgDeleteBranch, MsgMultiDeleteBranch, MsgSetTag, MsgMultiSetTag, MsgDeleteTag, MsgMultiDeleteTag, MsgAddMember, MsgUpdateMemberRole, MsgRemoveMember, MsgCreateBounty, MsgUpdateBountyExpiry, MsgCloseBounty, MsgDeleteBounty, MsgExercise, MsgCreateRelease, MsgUpdateRelease, MsgDeleteRelease, MsgCreatePullRequest, MsgUpdatePullRequestTitle, MsgUpdatePullRequestDescription, MsgInvokeMergePullRequest, MsgSetPullRequestState, MsgAddPullRequestReviewers, MsgRemovePullRequestReviewers, MsgAddPullRequestAssignees, MsgRemovePullRequestAssignees, MsgLinkPullRequestIssueByIid, MsgUnlinkPullRequestIssueByIid, MsgAddPullRequestLabels, MsgRemovePullRequestLabels, MsgDeletePullRequest, MsgCreateDao, MsgRenameDao, MsgUpdateDaoDescription, MsgUpdateDaoWebsite, MsgUpdateDaoLocation, MsgUpdateDaoAvatar, MsgDeleteDao, MsgCreateComment, MsgUpdateComment, MsgDeleteComment, MsgToggleCommentResolved, MsgCreateIssue, MsgUpdateIssueTitle, MsgUpdateIssueDescription, MsgToggleIssueState, MsgAddIssueAssignees, MsgRemoveIssueAssignees, MsgAddIssueLabels, MsgRemoveIssueLabels, MsgDeleteIssue, MsgCreateRepository, MsgInvokeForkRepository, MsgForkRepository, MsgForkRepositorySuccess, MsgRenameRepository, MsgUpdateRepositoryDescription, MsgToggleRepositoryArchived, MsgChangeOwner, MsgUpdateRepositoryCollaborator, MsgRemoveRepositoryCollaborator, MsgCreateRepositoryLabel, MsgUpdateRepositoryLabel, MsgDeleteRepositoryLabel, MsgSetDefaultBranch, MsgToggleRepositoryForking, MsgToggleArweaveBackup, MsgDeleteRepository, MsgCreateUser, MsgUpdateUserUsername, MsgUpdateUserName, MsgUpdateUserBio, MsgUpdateUserAvatar, MsgDeleteUser, MsgUpdateRepositoryBackupRef, MsgAddRepositoryBackupRef, MsgUpdateUserPinnedRepositories, MsgUpdateDaoPinnedRepositories, MsgUpdateParams, MsgDistributePlatformIncentives } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/gitopia.gitopia.gitopia.MsgToggleForcePush", MsgToggleForcePush], ["/gitopia.gitopia.gitopia.MsgRevokeProviderPermission", MsgRevokeProviderPermission], ["/gitopia.gitopia.gitopia.MsgAuthorizeProvider", MsgAuthorizeProvider], ["/gitopia.gitopia.gitopia.MsgCreateTask", MsgCreateTask], ["/gitopia.gitopia.gitopia.MsgUpdateTask", MsgUpdateTask], ["/gitopia.gitopia.gitopia.MsgDeleteTask", MsgDeleteTask], ["/gitopia.gitopia.gitopia.MsgSetBranch", MsgSetBranch], ["/gitopia.gitopia.gitopia.MsgMultiSetBranch", MsgMultiSetBranch], ["/gitopia.gitopia.gitopia.MsgDeleteBranch", MsgDeleteBranch], ["/gitopia.gitopia.gitopia.MsgMultiDeleteBranch", MsgMultiDeleteBranch], ["/gitopia.gitopia.gitopia.MsgSetTag", MsgSetTag], ["/gitopia.gitopia.gitopia.MsgMultiSetTag", MsgMultiSetTag], ["/gitopia.gitopia.gitopia.MsgDeleteTag", MsgDeleteTag], ["/gitopia.gitopia.gitopia.MsgMultiDeleteTag", MsgMultiDeleteTag], ["/gitopia.gitopia.gitopia.MsgAddMember", MsgAddMember], ["/gitopia.gitopia.gitopia.MsgUpdateMemberRole", MsgUpdateMemberRole], ["/gitopia.gitopia.gitopia.MsgRemoveMember", MsgRemoveMember], ["/gitopia.gitopia.gitopia.MsgCreateBounty", MsgCreateBounty], ["/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry", MsgUpdateBountyExpiry], ["/gitopia.gitopia.gitopia.MsgCloseBounty", MsgCloseBounty], ["/gitopia.gitopia.gitopia.MsgDeleteBounty", MsgDeleteBounty], ["/gitopia.gitopia.gitopia.MsgExercise", MsgExercise], ["/gitopia.gitopia.gitopia.MsgCreateRelease", MsgCreateRelease], ["/gitopia.gitopia.gitopia.MsgUpdateRelease", MsgUpdateRelease], ["/gitopia.gitopia.gitopia.MsgDeleteRelease", MsgDeleteRelease], ["/gitopia.gitopia.gitopia.MsgCreatePullRequest", MsgCreatePullRequest], ["/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle", MsgUpdatePullRequestTitle], ["/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription", MsgUpdatePullRequestDescription], ["/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest", MsgInvokeMergePullRequest], ["/gitopia.gitopia.gitopia.MsgSetPullRequestState", MsgSetPullRequestState], ["/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers", MsgAddPullRequestReviewers], ["/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers", MsgRemovePullRequestReviewers], ["/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees", MsgAddPullRequestAssignees], ["/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees", MsgRemovePullRequestAssignees], ["/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid", MsgLinkPullRequestIssueByIid], ["/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid", MsgUnlinkPullRequestIssueByIid], ["/gitopia.gitopia.gitopia.MsgAddPullRequestLabels", MsgAddPullRequestLabels], ["/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels", MsgRemovePullRequestLabels], ["/gitopia.gitopia.gitopia.MsgDeletePullRequest", MsgDeletePullRequest], ["/gitopia.gitopia.gitopia.MsgCreateDao", MsgCreateDao], ["/gitopia.gitopia.gitopia.MsgRenameDao", MsgRenameDao], ["/gitopia.gitopia.gitopia.MsgUpdateDaoDescription", MsgUpdateDaoDescription], ["/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite", MsgUpdateDaoWebsite], ["/gitopia.gitopia.gitopia.MsgUpdateDaoLocation", MsgUpdateDaoLocation], ["/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar", MsgUpdateDaoAvatar], ["/gitopia.gitopia.gitopia.MsgDeleteDao", MsgDeleteDao], ["/gitopia.gitopia.gitopia.MsgCreateComment", MsgCreateComment], ["/gitopia.gitopia.gitopia.MsgUpdateComment", MsgUpdateComment], ["/gitopia.gitopia.gitopia.MsgDeleteComment", MsgDeleteComment], ["/gitopia.gitopia.gitopia.MsgToggleCommentResolved", MsgToggleCommentResolved], ["/gitopia.gitopia.gitopia.MsgCreateIssue", MsgCreateIssue], ["/gitopia.gitopia.gitopia.MsgUpdateIssueTitle", MsgUpdateIssueTitle], ["/gitopia.gitopia.gitopia.MsgUpdateIssueDescription", MsgUpdateIssueDescription], ["/gitopia.gitopia.gitopia.MsgToggleIssueState", MsgToggleIssueState], ["/gitopia.gitopia.gitopia.MsgAddIssueAssignees", MsgAddIssueAssignees], ["/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees", MsgRemoveIssueAssignees], ["/gitopia.gitopia.gitopia.MsgAddIssueLabels", MsgAddIssueLabels], ["/gitopia.gitopia.gitopia.MsgRemoveIssueLabels", MsgRemoveIssueLabels], ["/gitopia.gitopia.gitopia.MsgDeleteIssue", MsgDeleteIssue], ["/gitopia.gitopia.gitopia.MsgCreateRepository", MsgCreateRepository], ["/gitopia.gitopia.gitopia.MsgInvokeForkRepository", MsgInvokeForkRepository], ["/gitopia.gitopia.gitopia.MsgForkRepository", MsgForkRepository], ["/gitopia.gitopia.gitopia.MsgForkRepositorySuccess", MsgForkRepositorySuccess], ["/gitopia.gitopia.gitopia.MsgRenameRepository", MsgRenameRepository], ["/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription", MsgUpdateRepositoryDescription], ["/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived", MsgToggleRepositoryArchived], ["/gitopia.gitopia.gitopia.MsgChangeOwner", MsgChangeOwner], ["/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator", MsgUpdateRepositoryCollaborator], ["/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator", MsgRemoveRepositoryCollaborator], ["/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel", MsgCreateRepositoryLabel], ["/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel", MsgUpdateRepositoryLabel], ["/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel", MsgDeleteRepositoryLabel], ["/gitopia.gitopia.gitopia.MsgSetDefaultBranch", MsgSetDefaultBranch], ["/gitopia.gitopia.gitopia.MsgToggleRepositoryForking", MsgToggleRepositoryForking], ["/gitopia.gitopia.gitopia.MsgToggleArweaveBackup", MsgToggleArweaveBackup], ["/gitopia.gitopia.gitopia.MsgDeleteRepository", MsgDeleteRepository], ["/gitopia.gitopia.gitopia.MsgCreateUser", MsgCreateUser], ["/gitopia.gitopia.gitopia.MsgUpdateUserUsername", MsgUpdateUserUsername], ["/gitopia.gitopia.gitopia.MsgUpdateUserName", MsgUpdateUserName], ["/gitopia.gitopia.gitopia.MsgUpdateUserBio", MsgUpdateUserBio], ["/gitopia.gitopia.gitopia.MsgUpdateUserAvatar", MsgUpdateUserAvatar], ["/gitopia.gitopia.gitopia.MsgDeleteUser", MsgDeleteUser], ["/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef", MsgUpdateRepositoryBackupRef], ["/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef", MsgAddRepositoryBackupRef], ["/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories", MsgUpdateUserPinnedRepositories], ["/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories", MsgUpdateDaoPinnedRepositories], ["/gitopia.gitopia.gitopia.MsgUpdateParams", MsgUpdateParams], ["/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives", MsgDistributePlatformIncentives]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    toggleForcePush(value: MsgToggleForcePush) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
        value: MsgToggleForcePush.encode(value).finish()
      };
    },
    revokeProviderPermission(value: MsgRevokeProviderPermission) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
        value: MsgRevokeProviderPermission.encode(value).finish()
      };
    },
    authorizeProvider(value: MsgAuthorizeProvider) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
        value: MsgAuthorizeProvider.encode(value).finish()
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
        value: MsgCreateTask.encode(value).finish()
      };
    },
    updateTask(value: MsgUpdateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
        value: MsgUpdateTask.encode(value).finish()
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
        value: MsgDeleteTask.encode(value).finish()
      };
    },
    setBranch(value: MsgSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
        value: MsgSetBranch.encode(value).finish()
      };
    },
    multiSetBranch(value: MsgMultiSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
        value: MsgMultiSetBranch.encode(value).finish()
      };
    },
    deleteBranch(value: MsgDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
        value: MsgDeleteBranch.encode(value).finish()
      };
    },
    multiDeleteBranch(value: MsgMultiDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
        value: MsgMultiDeleteBranch.encode(value).finish()
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
        value: MsgSetTag.encode(value).finish()
      };
    },
    multiSetTag(value: MsgMultiSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
        value: MsgMultiSetTag.encode(value).finish()
      };
    },
    deleteTag(value: MsgDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
        value: MsgDeleteTag.encode(value).finish()
      };
    },
    multiDeleteTag(value: MsgMultiDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
        value: MsgMultiDeleteTag.encode(value).finish()
      };
    },
    addMember(value: MsgAddMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
        value: MsgAddMember.encode(value).finish()
      };
    },
    updateMemberRole(value: MsgUpdateMemberRole) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
        value: MsgUpdateMemberRole.encode(value).finish()
      };
    },
    removeMember(value: MsgRemoveMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
        value: MsgRemoveMember.encode(value).finish()
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
        value: MsgCreateBounty.encode(value).finish()
      };
    },
    updateBountyExpiry(value: MsgUpdateBountyExpiry) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
        value: MsgUpdateBountyExpiry.encode(value).finish()
      };
    },
    closeBounty(value: MsgCloseBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
        value: MsgCloseBounty.encode(value).finish()
      };
    },
    deleteBounty(value: MsgDeleteBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
        value: MsgDeleteBounty.encode(value).finish()
      };
    },
    exercise(value: MsgExercise) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
        value: MsgExercise.encode(value).finish()
      };
    },
    createRelease(value: MsgCreateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
        value: MsgCreateRelease.encode(value).finish()
      };
    },
    updateRelease(value: MsgUpdateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
        value: MsgUpdateRelease.encode(value).finish()
      };
    },
    deleteRelease(value: MsgDeleteRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
        value: MsgDeleteRelease.encode(value).finish()
      };
    },
    createPullRequest(value: MsgCreatePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
        value: MsgCreatePullRequest.encode(value).finish()
      };
    },
    updatePullRequestTitle(value: MsgUpdatePullRequestTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
        value: MsgUpdatePullRequestTitle.encode(value).finish()
      };
    },
    updatePullRequestDescription(value: MsgUpdatePullRequestDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
        value: MsgUpdatePullRequestDescription.encode(value).finish()
      };
    },
    invokeMergePullRequest(value: MsgInvokeMergePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
        value: MsgInvokeMergePullRequest.encode(value).finish()
      };
    },
    setPullRequestState(value: MsgSetPullRequestState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
        value: MsgSetPullRequestState.encode(value).finish()
      };
    },
    addPullRequestReviewers(value: MsgAddPullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
        value: MsgAddPullRequestReviewers.encode(value).finish()
      };
    },
    removePullRequestReviewers(value: MsgRemovePullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
        value: MsgRemovePullRequestReviewers.encode(value).finish()
      };
    },
    addPullRequestAssignees(value: MsgAddPullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
        value: MsgAddPullRequestAssignees.encode(value).finish()
      };
    },
    removePullRequestAssignees(value: MsgRemovePullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
        value: MsgRemovePullRequestAssignees.encode(value).finish()
      };
    },
    linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
        value: MsgLinkPullRequestIssueByIid.encode(value).finish()
      };
    },
    unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
        value: MsgUnlinkPullRequestIssueByIid.encode(value).finish()
      };
    },
    addPullRequestLabels(value: MsgAddPullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
        value: MsgAddPullRequestLabels.encode(value).finish()
      };
    },
    removePullRequestLabels(value: MsgRemovePullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
        value: MsgRemovePullRequestLabels.encode(value).finish()
      };
    },
    deletePullRequest(value: MsgDeletePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
        value: MsgDeletePullRequest.encode(value).finish()
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
        value: MsgCreateDao.encode(value).finish()
      };
    },
    renameDao(value: MsgRenameDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
        value: MsgRenameDao.encode(value).finish()
      };
    },
    updateDaoDescription(value: MsgUpdateDaoDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
        value: MsgUpdateDaoDescription.encode(value).finish()
      };
    },
    updateDaoWebsite(value: MsgUpdateDaoWebsite) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
        value: MsgUpdateDaoWebsite.encode(value).finish()
      };
    },
    updateDaoLocation(value: MsgUpdateDaoLocation) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
        value: MsgUpdateDaoLocation.encode(value).finish()
      };
    },
    updateDaoAvatar(value: MsgUpdateDaoAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
        value: MsgUpdateDaoAvatar.encode(value).finish()
      };
    },
    deleteDao(value: MsgDeleteDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
        value: MsgDeleteDao.encode(value).finish()
      };
    },
    createComment(value: MsgCreateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
        value: MsgCreateComment.encode(value).finish()
      };
    },
    updateComment(value: MsgUpdateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
        value: MsgUpdateComment.encode(value).finish()
      };
    },
    deleteComment(value: MsgDeleteComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
        value: MsgDeleteComment.encode(value).finish()
      };
    },
    toggleCommentResolved(value: MsgToggleCommentResolved) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
        value: MsgToggleCommentResolved.encode(value).finish()
      };
    },
    createIssue(value: MsgCreateIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
        value: MsgCreateIssue.encode(value).finish()
      };
    },
    updateIssueTitle(value: MsgUpdateIssueTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
        value: MsgUpdateIssueTitle.encode(value).finish()
      };
    },
    updateIssueDescription(value: MsgUpdateIssueDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
        value: MsgUpdateIssueDescription.encode(value).finish()
      };
    },
    toggleIssueState(value: MsgToggleIssueState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
        value: MsgToggleIssueState.encode(value).finish()
      };
    },
    addIssueAssignees(value: MsgAddIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
        value: MsgAddIssueAssignees.encode(value).finish()
      };
    },
    removeIssueAssignees(value: MsgRemoveIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
        value: MsgRemoveIssueAssignees.encode(value).finish()
      };
    },
    addIssueLabels(value: MsgAddIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
        value: MsgAddIssueLabels.encode(value).finish()
      };
    },
    removeIssueLabels(value: MsgRemoveIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
        value: MsgRemoveIssueLabels.encode(value).finish()
      };
    },
    deleteIssue(value: MsgDeleteIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
        value: MsgDeleteIssue.encode(value).finish()
      };
    },
    createRepository(value: MsgCreateRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
        value: MsgCreateRepository.encode(value).finish()
      };
    },
    invokeForkRepository(value: MsgInvokeForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
        value: MsgInvokeForkRepository.encode(value).finish()
      };
    },
    forkRepository(value: MsgForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
        value: MsgForkRepository.encode(value).finish()
      };
    },
    forkRepositorySuccess(value: MsgForkRepositorySuccess) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
        value: MsgForkRepositorySuccess.encode(value).finish()
      };
    },
    renameRepository(value: MsgRenameRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
        value: MsgRenameRepository.encode(value).finish()
      };
    },
    updateRepositoryDescription(value: MsgUpdateRepositoryDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
        value: MsgUpdateRepositoryDescription.encode(value).finish()
      };
    },
    toggleRepositoryArchived(value: MsgToggleRepositoryArchived) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
        value: MsgToggleRepositoryArchived.encode(value).finish()
      };
    },
    changeOwner(value: MsgChangeOwner) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
        value: MsgChangeOwner.encode(value).finish()
      };
    },
    updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
        value: MsgUpdateRepositoryCollaborator.encode(value).finish()
      };
    },
    removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
        value: MsgRemoveRepositoryCollaborator.encode(value).finish()
      };
    },
    createRepositoryLabel(value: MsgCreateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
        value: MsgCreateRepositoryLabel.encode(value).finish()
      };
    },
    updateRepositoryLabel(value: MsgUpdateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
        value: MsgUpdateRepositoryLabel.encode(value).finish()
      };
    },
    deleteRepositoryLabel(value: MsgDeleteRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
        value: MsgDeleteRepositoryLabel.encode(value).finish()
      };
    },
    setDefaultBranch(value: MsgSetDefaultBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
        value: MsgSetDefaultBranch.encode(value).finish()
      };
    },
    toggleRepositoryForking(value: MsgToggleRepositoryForking) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
        value: MsgToggleRepositoryForking.encode(value).finish()
      };
    },
    toggleArweaveBackup(value: MsgToggleArweaveBackup) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
        value: MsgToggleArweaveBackup.encode(value).finish()
      };
    },
    deleteRepository(value: MsgDeleteRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
        value: MsgDeleteRepository.encode(value).finish()
      };
    },
    createUser(value: MsgCreateUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
        value: MsgCreateUser.encode(value).finish()
      };
    },
    updateUserUsername(value: MsgUpdateUserUsername) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
        value: MsgUpdateUserUsername.encode(value).finish()
      };
    },
    updateUserName(value: MsgUpdateUserName) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
        value: MsgUpdateUserName.encode(value).finish()
      };
    },
    updateUserBio(value: MsgUpdateUserBio) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
        value: MsgUpdateUserBio.encode(value).finish()
      };
    },
    updateUserAvatar(value: MsgUpdateUserAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
        value: MsgUpdateUserAvatar.encode(value).finish()
      };
    },
    deleteUser(value: MsgDeleteUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
        value: MsgDeleteUser.encode(value).finish()
      };
    },
    updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
        value: MsgUpdateRepositoryBackupRef.encode(value).finish()
      };
    },
    addRepositoryBackupRef(value: MsgAddRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
        value: MsgAddRepositoryBackupRef.encode(value).finish()
      };
    },
    updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
        value: MsgUpdateUserPinnedRepositories.encode(value).finish()
      };
    },
    updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
        value: MsgUpdateDaoPinnedRepositories.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    distributePlatformIncentives(value: MsgDistributePlatformIncentives) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
        value: MsgDistributePlatformIncentives.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    toggleForcePush(value: MsgToggleForcePush) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
        value
      };
    },
    revokeProviderPermission(value: MsgRevokeProviderPermission) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
        value
      };
    },
    authorizeProvider(value: MsgAuthorizeProvider) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
        value
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
        value
      };
    },
    updateTask(value: MsgUpdateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
        value
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
        value
      };
    },
    setBranch(value: MsgSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
        value
      };
    },
    multiSetBranch(value: MsgMultiSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
        value
      };
    },
    deleteBranch(value: MsgDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
        value
      };
    },
    multiDeleteBranch(value: MsgMultiDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
        value
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
        value
      };
    },
    multiSetTag(value: MsgMultiSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
        value
      };
    },
    deleteTag(value: MsgDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
        value
      };
    },
    multiDeleteTag(value: MsgMultiDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
        value
      };
    },
    addMember(value: MsgAddMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
        value
      };
    },
    updateMemberRole(value: MsgUpdateMemberRole) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
        value
      };
    },
    removeMember(value: MsgRemoveMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
        value
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
        value
      };
    },
    updateBountyExpiry(value: MsgUpdateBountyExpiry) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
        value
      };
    },
    closeBounty(value: MsgCloseBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
        value
      };
    },
    deleteBounty(value: MsgDeleteBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
        value
      };
    },
    exercise(value: MsgExercise) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
        value
      };
    },
    createRelease(value: MsgCreateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
        value
      };
    },
    updateRelease(value: MsgUpdateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
        value
      };
    },
    deleteRelease(value: MsgDeleteRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
        value
      };
    },
    createPullRequest(value: MsgCreatePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
        value
      };
    },
    updatePullRequestTitle(value: MsgUpdatePullRequestTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
        value
      };
    },
    updatePullRequestDescription(value: MsgUpdatePullRequestDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
        value
      };
    },
    invokeMergePullRequest(value: MsgInvokeMergePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
        value
      };
    },
    setPullRequestState(value: MsgSetPullRequestState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
        value
      };
    },
    addPullRequestReviewers(value: MsgAddPullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
        value
      };
    },
    removePullRequestReviewers(value: MsgRemovePullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
        value
      };
    },
    addPullRequestAssignees(value: MsgAddPullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
        value
      };
    },
    removePullRequestAssignees(value: MsgRemovePullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
        value
      };
    },
    linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
        value
      };
    },
    unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
        value
      };
    },
    addPullRequestLabels(value: MsgAddPullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
        value
      };
    },
    removePullRequestLabels(value: MsgRemovePullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
        value
      };
    },
    deletePullRequest(value: MsgDeletePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
        value
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
        value
      };
    },
    renameDao(value: MsgRenameDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
        value
      };
    },
    updateDaoDescription(value: MsgUpdateDaoDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
        value
      };
    },
    updateDaoWebsite(value: MsgUpdateDaoWebsite) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
        value
      };
    },
    updateDaoLocation(value: MsgUpdateDaoLocation) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
        value
      };
    },
    updateDaoAvatar(value: MsgUpdateDaoAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
        value
      };
    },
    deleteDao(value: MsgDeleteDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
        value
      };
    },
    createComment(value: MsgCreateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
        value
      };
    },
    updateComment(value: MsgUpdateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
        value
      };
    },
    deleteComment(value: MsgDeleteComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
        value
      };
    },
    toggleCommentResolved(value: MsgToggleCommentResolved) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
        value
      };
    },
    createIssue(value: MsgCreateIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
        value
      };
    },
    updateIssueTitle(value: MsgUpdateIssueTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
        value
      };
    },
    updateIssueDescription(value: MsgUpdateIssueDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
        value
      };
    },
    toggleIssueState(value: MsgToggleIssueState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
        value
      };
    },
    addIssueAssignees(value: MsgAddIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
        value
      };
    },
    removeIssueAssignees(value: MsgRemoveIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
        value
      };
    },
    addIssueLabels(value: MsgAddIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
        value
      };
    },
    removeIssueLabels(value: MsgRemoveIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
        value
      };
    },
    deleteIssue(value: MsgDeleteIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
        value
      };
    },
    createRepository(value: MsgCreateRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
        value
      };
    },
    invokeForkRepository(value: MsgInvokeForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
        value
      };
    },
    forkRepository(value: MsgForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
        value
      };
    },
    forkRepositorySuccess(value: MsgForkRepositorySuccess) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
        value
      };
    },
    renameRepository(value: MsgRenameRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
        value
      };
    },
    updateRepositoryDescription(value: MsgUpdateRepositoryDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
        value
      };
    },
    toggleRepositoryArchived(value: MsgToggleRepositoryArchived) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
        value
      };
    },
    changeOwner(value: MsgChangeOwner) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
        value
      };
    },
    updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
        value
      };
    },
    removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
        value
      };
    },
    createRepositoryLabel(value: MsgCreateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
        value
      };
    },
    updateRepositoryLabel(value: MsgUpdateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
        value
      };
    },
    deleteRepositoryLabel(value: MsgDeleteRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
        value
      };
    },
    setDefaultBranch(value: MsgSetDefaultBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
        value
      };
    },
    toggleRepositoryForking(value: MsgToggleRepositoryForking) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
        value
      };
    },
    toggleArweaveBackup(value: MsgToggleArweaveBackup) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
        value
      };
    },
    deleteRepository(value: MsgDeleteRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
        value
      };
    },
    createUser(value: MsgCreateUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
        value
      };
    },
    updateUserUsername(value: MsgUpdateUserUsername) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
        value
      };
    },
    updateUserName(value: MsgUpdateUserName) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
        value
      };
    },
    updateUserBio(value: MsgUpdateUserBio) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
        value
      };
    },
    updateUserAvatar(value: MsgUpdateUserAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
        value
      };
    },
    deleteUser(value: MsgDeleteUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
        value
      };
    },
    updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
        value
      };
    },
    addRepositoryBackupRef(value: MsgAddRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
        value
      };
    },
    updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
        value
      };
    },
    updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
        value
      };
    },
    distributePlatformIncentives(value: MsgDistributePlatformIncentives) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
        value
      };
    }
  },
  fromJSON: {
    toggleForcePush(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
        value: MsgToggleForcePush.fromJSON(value)
      };
    },
    revokeProviderPermission(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
        value: MsgRevokeProviderPermission.fromJSON(value)
      };
    },
    authorizeProvider(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
        value: MsgAuthorizeProvider.fromJSON(value)
      };
    },
    createTask(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
        value: MsgCreateTask.fromJSON(value)
      };
    },
    updateTask(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
        value: MsgUpdateTask.fromJSON(value)
      };
    },
    deleteTask(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
        value: MsgDeleteTask.fromJSON(value)
      };
    },
    setBranch(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
        value: MsgSetBranch.fromJSON(value)
      };
    },
    multiSetBranch(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
        value: MsgMultiSetBranch.fromJSON(value)
      };
    },
    deleteBranch(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
        value: MsgDeleteBranch.fromJSON(value)
      };
    },
    multiDeleteBranch(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
        value: MsgMultiDeleteBranch.fromJSON(value)
      };
    },
    setTag(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
        value: MsgSetTag.fromJSON(value)
      };
    },
    multiSetTag(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
        value: MsgMultiSetTag.fromJSON(value)
      };
    },
    deleteTag(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
        value: MsgDeleteTag.fromJSON(value)
      };
    },
    multiDeleteTag(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
        value: MsgMultiDeleteTag.fromJSON(value)
      };
    },
    addMember(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
        value: MsgAddMember.fromJSON(value)
      };
    },
    updateMemberRole(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
        value: MsgUpdateMemberRole.fromJSON(value)
      };
    },
    removeMember(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
        value: MsgRemoveMember.fromJSON(value)
      };
    },
    createBounty(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
        value: MsgCreateBounty.fromJSON(value)
      };
    },
    updateBountyExpiry(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
        value: MsgUpdateBountyExpiry.fromJSON(value)
      };
    },
    closeBounty(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
        value: MsgCloseBounty.fromJSON(value)
      };
    },
    deleteBounty(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
        value: MsgDeleteBounty.fromJSON(value)
      };
    },
    exercise(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
        value: MsgExercise.fromJSON(value)
      };
    },
    createRelease(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
        value: MsgCreateRelease.fromJSON(value)
      };
    },
    updateRelease(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
        value: MsgUpdateRelease.fromJSON(value)
      };
    },
    deleteRelease(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
        value: MsgDeleteRelease.fromJSON(value)
      };
    },
    createPullRequest(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
        value: MsgCreatePullRequest.fromJSON(value)
      };
    },
    updatePullRequestTitle(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
        value: MsgUpdatePullRequestTitle.fromJSON(value)
      };
    },
    updatePullRequestDescription(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
        value: MsgUpdatePullRequestDescription.fromJSON(value)
      };
    },
    invokeMergePullRequest(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
        value: MsgInvokeMergePullRequest.fromJSON(value)
      };
    },
    setPullRequestState(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
        value: MsgSetPullRequestState.fromJSON(value)
      };
    },
    addPullRequestReviewers(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
        value: MsgAddPullRequestReviewers.fromJSON(value)
      };
    },
    removePullRequestReviewers(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
        value: MsgRemovePullRequestReviewers.fromJSON(value)
      };
    },
    addPullRequestAssignees(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
        value: MsgAddPullRequestAssignees.fromJSON(value)
      };
    },
    removePullRequestAssignees(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
        value: MsgRemovePullRequestAssignees.fromJSON(value)
      };
    },
    linkPullRequestIssueByIid(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
        value: MsgLinkPullRequestIssueByIid.fromJSON(value)
      };
    },
    unlinkPullRequestIssueByIid(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
        value: MsgUnlinkPullRequestIssueByIid.fromJSON(value)
      };
    },
    addPullRequestLabels(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
        value: MsgAddPullRequestLabels.fromJSON(value)
      };
    },
    removePullRequestLabels(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
        value: MsgRemovePullRequestLabels.fromJSON(value)
      };
    },
    deletePullRequest(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
        value: MsgDeletePullRequest.fromJSON(value)
      };
    },
    createDao(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
        value: MsgCreateDao.fromJSON(value)
      };
    },
    renameDao(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
        value: MsgRenameDao.fromJSON(value)
      };
    },
    updateDaoDescription(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
        value: MsgUpdateDaoDescription.fromJSON(value)
      };
    },
    updateDaoWebsite(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
        value: MsgUpdateDaoWebsite.fromJSON(value)
      };
    },
    updateDaoLocation(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
        value: MsgUpdateDaoLocation.fromJSON(value)
      };
    },
    updateDaoAvatar(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
        value: MsgUpdateDaoAvatar.fromJSON(value)
      };
    },
    deleteDao(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
        value: MsgDeleteDao.fromJSON(value)
      };
    },
    createComment(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
        value: MsgCreateComment.fromJSON(value)
      };
    },
    updateComment(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
        value: MsgUpdateComment.fromJSON(value)
      };
    },
    deleteComment(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
        value: MsgDeleteComment.fromJSON(value)
      };
    },
    toggleCommentResolved(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
        value: MsgToggleCommentResolved.fromJSON(value)
      };
    },
    createIssue(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
        value: MsgCreateIssue.fromJSON(value)
      };
    },
    updateIssueTitle(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
        value: MsgUpdateIssueTitle.fromJSON(value)
      };
    },
    updateIssueDescription(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
        value: MsgUpdateIssueDescription.fromJSON(value)
      };
    },
    toggleIssueState(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
        value: MsgToggleIssueState.fromJSON(value)
      };
    },
    addIssueAssignees(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
        value: MsgAddIssueAssignees.fromJSON(value)
      };
    },
    removeIssueAssignees(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
        value: MsgRemoveIssueAssignees.fromJSON(value)
      };
    },
    addIssueLabels(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
        value: MsgAddIssueLabels.fromJSON(value)
      };
    },
    removeIssueLabels(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
        value: MsgRemoveIssueLabels.fromJSON(value)
      };
    },
    deleteIssue(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
        value: MsgDeleteIssue.fromJSON(value)
      };
    },
    createRepository(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
        value: MsgCreateRepository.fromJSON(value)
      };
    },
    invokeForkRepository(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
        value: MsgInvokeForkRepository.fromJSON(value)
      };
    },
    forkRepository(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
        value: MsgForkRepository.fromJSON(value)
      };
    },
    forkRepositorySuccess(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
        value: MsgForkRepositorySuccess.fromJSON(value)
      };
    },
    renameRepository(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
        value: MsgRenameRepository.fromJSON(value)
      };
    },
    updateRepositoryDescription(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
        value: MsgUpdateRepositoryDescription.fromJSON(value)
      };
    },
    toggleRepositoryArchived(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
        value: MsgToggleRepositoryArchived.fromJSON(value)
      };
    },
    changeOwner(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
        value: MsgChangeOwner.fromJSON(value)
      };
    },
    updateRepositoryCollaborator(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
        value: MsgUpdateRepositoryCollaborator.fromJSON(value)
      };
    },
    removeRepositoryCollaborator(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
        value: MsgRemoveRepositoryCollaborator.fromJSON(value)
      };
    },
    createRepositoryLabel(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
        value: MsgCreateRepositoryLabel.fromJSON(value)
      };
    },
    updateRepositoryLabel(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
        value: MsgUpdateRepositoryLabel.fromJSON(value)
      };
    },
    deleteRepositoryLabel(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
        value: MsgDeleteRepositoryLabel.fromJSON(value)
      };
    },
    setDefaultBranch(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
        value: MsgSetDefaultBranch.fromJSON(value)
      };
    },
    toggleRepositoryForking(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
        value: MsgToggleRepositoryForking.fromJSON(value)
      };
    },
    toggleArweaveBackup(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
        value: MsgToggleArweaveBackup.fromJSON(value)
      };
    },
    deleteRepository(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
        value: MsgDeleteRepository.fromJSON(value)
      };
    },
    createUser(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
        value: MsgCreateUser.fromJSON(value)
      };
    },
    updateUserUsername(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
        value: MsgUpdateUserUsername.fromJSON(value)
      };
    },
    updateUserName(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
        value: MsgUpdateUserName.fromJSON(value)
      };
    },
    updateUserBio(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
        value: MsgUpdateUserBio.fromJSON(value)
      };
    },
    updateUserAvatar(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
        value: MsgUpdateUserAvatar.fromJSON(value)
      };
    },
    deleteUser(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
        value: MsgDeleteUser.fromJSON(value)
      };
    },
    updateRepositoryBackupRef(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
        value: MsgUpdateRepositoryBackupRef.fromJSON(value)
      };
    },
    addRepositoryBackupRef(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
        value: MsgAddRepositoryBackupRef.fromJSON(value)
      };
    },
    updateUserPinnedRepositories(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
        value: MsgUpdateUserPinnedRepositories.fromJSON(value)
      };
    },
    updateDaoPinnedRepositories(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
        value: MsgUpdateDaoPinnedRepositories.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    distributePlatformIncentives(value: any) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
        value: MsgDistributePlatformIncentives.fromJSON(value)
      };
    }
  },
  fromPartial: {
    toggleForcePush(value: MsgToggleForcePush) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
        value: MsgToggleForcePush.fromPartial(value)
      };
    },
    revokeProviderPermission(value: MsgRevokeProviderPermission) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
        value: MsgRevokeProviderPermission.fromPartial(value)
      };
    },
    authorizeProvider(value: MsgAuthorizeProvider) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
        value: MsgAuthorizeProvider.fromPartial(value)
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
        value: MsgCreateTask.fromPartial(value)
      };
    },
    updateTask(value: MsgUpdateTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
        value: MsgUpdateTask.fromPartial(value)
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
        value: MsgDeleteTask.fromPartial(value)
      };
    },
    setBranch(value: MsgSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
        value: MsgSetBranch.fromPartial(value)
      };
    },
    multiSetBranch(value: MsgMultiSetBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
        value: MsgMultiSetBranch.fromPartial(value)
      };
    },
    deleteBranch(value: MsgDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
        value: MsgDeleteBranch.fromPartial(value)
      };
    },
    multiDeleteBranch(value: MsgMultiDeleteBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
        value: MsgMultiDeleteBranch.fromPartial(value)
      };
    },
    setTag(value: MsgSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
        value: MsgSetTag.fromPartial(value)
      };
    },
    multiSetTag(value: MsgMultiSetTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
        value: MsgMultiSetTag.fromPartial(value)
      };
    },
    deleteTag(value: MsgDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
        value: MsgDeleteTag.fromPartial(value)
      };
    },
    multiDeleteTag(value: MsgMultiDeleteTag) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
        value: MsgMultiDeleteTag.fromPartial(value)
      };
    },
    addMember(value: MsgAddMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
        value: MsgAddMember.fromPartial(value)
      };
    },
    updateMemberRole(value: MsgUpdateMemberRole) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
        value: MsgUpdateMemberRole.fromPartial(value)
      };
    },
    removeMember(value: MsgRemoveMember) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
        value: MsgRemoveMember.fromPartial(value)
      };
    },
    createBounty(value: MsgCreateBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
        value: MsgCreateBounty.fromPartial(value)
      };
    },
    updateBountyExpiry(value: MsgUpdateBountyExpiry) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
        value: MsgUpdateBountyExpiry.fromPartial(value)
      };
    },
    closeBounty(value: MsgCloseBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
        value: MsgCloseBounty.fromPartial(value)
      };
    },
    deleteBounty(value: MsgDeleteBounty) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
        value: MsgDeleteBounty.fromPartial(value)
      };
    },
    exercise(value: MsgExercise) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
        value: MsgExercise.fromPartial(value)
      };
    },
    createRelease(value: MsgCreateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
        value: MsgCreateRelease.fromPartial(value)
      };
    },
    updateRelease(value: MsgUpdateRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
        value: MsgUpdateRelease.fromPartial(value)
      };
    },
    deleteRelease(value: MsgDeleteRelease) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
        value: MsgDeleteRelease.fromPartial(value)
      };
    },
    createPullRequest(value: MsgCreatePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
        value: MsgCreatePullRequest.fromPartial(value)
      };
    },
    updatePullRequestTitle(value: MsgUpdatePullRequestTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
        value: MsgUpdatePullRequestTitle.fromPartial(value)
      };
    },
    updatePullRequestDescription(value: MsgUpdatePullRequestDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
        value: MsgUpdatePullRequestDescription.fromPartial(value)
      };
    },
    invokeMergePullRequest(value: MsgInvokeMergePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
        value: MsgInvokeMergePullRequest.fromPartial(value)
      };
    },
    setPullRequestState(value: MsgSetPullRequestState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
        value: MsgSetPullRequestState.fromPartial(value)
      };
    },
    addPullRequestReviewers(value: MsgAddPullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
        value: MsgAddPullRequestReviewers.fromPartial(value)
      };
    },
    removePullRequestReviewers(value: MsgRemovePullRequestReviewers) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
        value: MsgRemovePullRequestReviewers.fromPartial(value)
      };
    },
    addPullRequestAssignees(value: MsgAddPullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
        value: MsgAddPullRequestAssignees.fromPartial(value)
      };
    },
    removePullRequestAssignees(value: MsgRemovePullRequestAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
        value: MsgRemovePullRequestAssignees.fromPartial(value)
      };
    },
    linkPullRequestIssueByIid(value: MsgLinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
        value: MsgLinkPullRequestIssueByIid.fromPartial(value)
      };
    },
    unlinkPullRequestIssueByIid(value: MsgUnlinkPullRequestIssueByIid) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
        value: MsgUnlinkPullRequestIssueByIid.fromPartial(value)
      };
    },
    addPullRequestLabels(value: MsgAddPullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
        value: MsgAddPullRequestLabels.fromPartial(value)
      };
    },
    removePullRequestLabels(value: MsgRemovePullRequestLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
        value: MsgRemovePullRequestLabels.fromPartial(value)
      };
    },
    deletePullRequest(value: MsgDeletePullRequest) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
        value: MsgDeletePullRequest.fromPartial(value)
      };
    },
    createDao(value: MsgCreateDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
        value: MsgCreateDao.fromPartial(value)
      };
    },
    renameDao(value: MsgRenameDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
        value: MsgRenameDao.fromPartial(value)
      };
    },
    updateDaoDescription(value: MsgUpdateDaoDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
        value: MsgUpdateDaoDescription.fromPartial(value)
      };
    },
    updateDaoWebsite(value: MsgUpdateDaoWebsite) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
        value: MsgUpdateDaoWebsite.fromPartial(value)
      };
    },
    updateDaoLocation(value: MsgUpdateDaoLocation) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
        value: MsgUpdateDaoLocation.fromPartial(value)
      };
    },
    updateDaoAvatar(value: MsgUpdateDaoAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
        value: MsgUpdateDaoAvatar.fromPartial(value)
      };
    },
    deleteDao(value: MsgDeleteDao) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
        value: MsgDeleteDao.fromPartial(value)
      };
    },
    createComment(value: MsgCreateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
        value: MsgCreateComment.fromPartial(value)
      };
    },
    updateComment(value: MsgUpdateComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
        value: MsgUpdateComment.fromPartial(value)
      };
    },
    deleteComment(value: MsgDeleteComment) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
        value: MsgDeleteComment.fromPartial(value)
      };
    },
    toggleCommentResolved(value: MsgToggleCommentResolved) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
        value: MsgToggleCommentResolved.fromPartial(value)
      };
    },
    createIssue(value: MsgCreateIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
        value: MsgCreateIssue.fromPartial(value)
      };
    },
    updateIssueTitle(value: MsgUpdateIssueTitle) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
        value: MsgUpdateIssueTitle.fromPartial(value)
      };
    },
    updateIssueDescription(value: MsgUpdateIssueDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
        value: MsgUpdateIssueDescription.fromPartial(value)
      };
    },
    toggleIssueState(value: MsgToggleIssueState) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
        value: MsgToggleIssueState.fromPartial(value)
      };
    },
    addIssueAssignees(value: MsgAddIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
        value: MsgAddIssueAssignees.fromPartial(value)
      };
    },
    removeIssueAssignees(value: MsgRemoveIssueAssignees) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
        value: MsgRemoveIssueAssignees.fromPartial(value)
      };
    },
    addIssueLabels(value: MsgAddIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
        value: MsgAddIssueLabels.fromPartial(value)
      };
    },
    removeIssueLabels(value: MsgRemoveIssueLabels) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
        value: MsgRemoveIssueLabels.fromPartial(value)
      };
    },
    deleteIssue(value: MsgDeleteIssue) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
        value: MsgDeleteIssue.fromPartial(value)
      };
    },
    createRepository(value: MsgCreateRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
        value: MsgCreateRepository.fromPartial(value)
      };
    },
    invokeForkRepository(value: MsgInvokeForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
        value: MsgInvokeForkRepository.fromPartial(value)
      };
    },
    forkRepository(value: MsgForkRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
        value: MsgForkRepository.fromPartial(value)
      };
    },
    forkRepositorySuccess(value: MsgForkRepositorySuccess) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
        value: MsgForkRepositorySuccess.fromPartial(value)
      };
    },
    renameRepository(value: MsgRenameRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
        value: MsgRenameRepository.fromPartial(value)
      };
    },
    updateRepositoryDescription(value: MsgUpdateRepositoryDescription) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
        value: MsgUpdateRepositoryDescription.fromPartial(value)
      };
    },
    toggleRepositoryArchived(value: MsgToggleRepositoryArchived) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
        value: MsgToggleRepositoryArchived.fromPartial(value)
      };
    },
    changeOwner(value: MsgChangeOwner) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
        value: MsgChangeOwner.fromPartial(value)
      };
    },
    updateRepositoryCollaborator(value: MsgUpdateRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
        value: MsgUpdateRepositoryCollaborator.fromPartial(value)
      };
    },
    removeRepositoryCollaborator(value: MsgRemoveRepositoryCollaborator) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
        value: MsgRemoveRepositoryCollaborator.fromPartial(value)
      };
    },
    createRepositoryLabel(value: MsgCreateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
        value: MsgCreateRepositoryLabel.fromPartial(value)
      };
    },
    updateRepositoryLabel(value: MsgUpdateRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
        value: MsgUpdateRepositoryLabel.fromPartial(value)
      };
    },
    deleteRepositoryLabel(value: MsgDeleteRepositoryLabel) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
        value: MsgDeleteRepositoryLabel.fromPartial(value)
      };
    },
    setDefaultBranch(value: MsgSetDefaultBranch) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
        value: MsgSetDefaultBranch.fromPartial(value)
      };
    },
    toggleRepositoryForking(value: MsgToggleRepositoryForking) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
        value: MsgToggleRepositoryForking.fromPartial(value)
      };
    },
    toggleArweaveBackup(value: MsgToggleArweaveBackup) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
        value: MsgToggleArweaveBackup.fromPartial(value)
      };
    },
    deleteRepository(value: MsgDeleteRepository) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
        value: MsgDeleteRepository.fromPartial(value)
      };
    },
    createUser(value: MsgCreateUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
        value: MsgCreateUser.fromPartial(value)
      };
    },
    updateUserUsername(value: MsgUpdateUserUsername) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
        value: MsgUpdateUserUsername.fromPartial(value)
      };
    },
    updateUserName(value: MsgUpdateUserName) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
        value: MsgUpdateUserName.fromPartial(value)
      };
    },
    updateUserBio(value: MsgUpdateUserBio) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
        value: MsgUpdateUserBio.fromPartial(value)
      };
    },
    updateUserAvatar(value: MsgUpdateUserAvatar) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
        value: MsgUpdateUserAvatar.fromPartial(value)
      };
    },
    deleteUser(value: MsgDeleteUser) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
        value: MsgDeleteUser.fromPartial(value)
      };
    },
    updateRepositoryBackupRef(value: MsgUpdateRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
        value: MsgUpdateRepositoryBackupRef.fromPartial(value)
      };
    },
    addRepositoryBackupRef(value: MsgAddRepositoryBackupRef) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
        value: MsgAddRepositoryBackupRef.fromPartial(value)
      };
    },
    updateUserPinnedRepositories(value: MsgUpdateUserPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
        value: MsgUpdateUserPinnedRepositories.fromPartial(value)
      };
    },
    updateDaoPinnedRepositories(value: MsgUpdateDaoPinnedRepositories) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
        value: MsgUpdateDaoPinnedRepositories.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    distributePlatformIncentives(value: MsgDistributePlatformIncentives) {
      return {
        typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
        value: MsgDistributePlatformIncentives.fromPartial(value)
      };
    }
  }
};