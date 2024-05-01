import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const gitopiaAminoConverters: {
    "/gitopia.gitopia.rewards.MsgClaim": {
        aminoType: string;
        toAmino: (message: import("../rewards/tx").MsgClaim) => import("../rewards/tx").MsgClaimAmino;
        fromAmino: (object: import("../rewards/tx").MsgClaimAmino) => import("../rewards/tx").MsgClaim;
    };
    "/gitopia.gitopia.rewards.MsgCreateReward": {
        aminoType: string;
        toAmino: (message: import("../rewards/tx").MsgCreateReward) => import("../rewards/tx").MsgCreateRewardAmino;
        fromAmino: (object: import("../rewards/tx").MsgCreateRewardAmino) => import("../rewards/tx").MsgCreateReward;
    };
    "/gitopia.gitopia.rewards.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("../rewards/tx").MsgUpdateParams) => import("../rewards/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("../rewards/tx").MsgUpdateParamsAmino) => import("../rewards/tx").MsgUpdateParams;
    };
    "/gitopia.gitopia.gitopia.MsgToggleForcePush": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleForcePush) => import("./tx").MsgToggleForcePushAmino;
        fromAmino: (object: import("./tx").MsgToggleForcePushAmino) => import("./tx").MsgToggleForcePush;
    };
    "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRevokeProviderPermission) => import("./tx").MsgRevokeProviderPermissionAmino;
        fromAmino: (object: import("./tx").MsgRevokeProviderPermissionAmino) => import("./tx").MsgRevokeProviderPermission;
    };
    "/gitopia.gitopia.gitopia.MsgAuthorizeProvider": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAuthorizeProvider) => import("./tx").MsgAuthorizeProviderAmino;
        fromAmino: (object: import("./tx").MsgAuthorizeProviderAmino) => import("./tx").MsgAuthorizeProvider;
    };
    "/gitopia.gitopia.gitopia.MsgCreateTask": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateTask) => import("./tx").MsgCreateTaskAmino;
        fromAmino: (object: import("./tx").MsgCreateTaskAmino) => import("./tx").MsgCreateTask;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateTask": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateTask) => import("./tx").MsgUpdateTaskAmino;
        fromAmino: (object: import("./tx").MsgUpdateTaskAmino) => import("./tx").MsgUpdateTask;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteTask": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteTask) => import("./tx").MsgDeleteTaskAmino;
        fromAmino: (object: import("./tx").MsgDeleteTaskAmino) => import("./tx").MsgDeleteTask;
    };
    "/gitopia.gitopia.gitopia.MsgSetBranch": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgSetBranch) => import("./tx").MsgSetBranchAmino;
        fromAmino: (object: import("./tx").MsgSetBranchAmino) => import("./tx").MsgSetBranch;
    };
    "/gitopia.gitopia.gitopia.MsgMultiSetBranch": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgMultiSetBranch) => import("./tx").MsgMultiSetBranchAmino;
        fromAmino: (object: import("./tx").MsgMultiSetBranchAmino) => import("./tx").MsgMultiSetBranch;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteBranch": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteBranch) => import("./tx").MsgDeleteBranchAmino;
        fromAmino: (object: import("./tx").MsgDeleteBranchAmino) => import("./tx").MsgDeleteBranch;
    };
    "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgMultiDeleteBranch) => import("./tx").MsgMultiDeleteBranchAmino;
        fromAmino: (object: import("./tx").MsgMultiDeleteBranchAmino) => import("./tx").MsgMultiDeleteBranch;
    };
    "/gitopia.gitopia.gitopia.MsgSetTag": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgSetTag) => import("./tx").MsgSetTagAmino;
        fromAmino: (object: import("./tx").MsgSetTagAmino) => import("./tx").MsgSetTag;
    };
    "/gitopia.gitopia.gitopia.MsgMultiSetTag": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgMultiSetTag) => import("./tx").MsgMultiSetTagAmino;
        fromAmino: (object: import("./tx").MsgMultiSetTagAmino) => import("./tx").MsgMultiSetTag;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteTag": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteTag) => import("./tx").MsgDeleteTagAmino;
        fromAmino: (object: import("./tx").MsgDeleteTagAmino) => import("./tx").MsgDeleteTag;
    };
    "/gitopia.gitopia.gitopia.MsgMultiDeleteTag": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgMultiDeleteTag) => import("./tx").MsgMultiDeleteTagAmino;
        fromAmino: (object: import("./tx").MsgMultiDeleteTagAmino) => import("./tx").MsgMultiDeleteTag;
    };
    "/gitopia.gitopia.gitopia.MsgAddMember": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddMember) => import("./tx").MsgAddMemberAmino;
        fromAmino: (object: import("./tx").MsgAddMemberAmino) => import("./tx").MsgAddMember;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateMemberRole": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateMemberRole) => import("./tx").MsgUpdateMemberRoleAmino;
        fromAmino: (object: import("./tx").MsgUpdateMemberRoleAmino) => import("./tx").MsgUpdateMemberRole;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveMember": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemoveMember) => import("./tx").MsgRemoveMemberAmino;
        fromAmino: (object: import("./tx").MsgRemoveMemberAmino) => import("./tx").MsgRemoveMember;
    };
    "/gitopia.gitopia.gitopia.MsgCreateBounty": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateBounty) => import("./tx").MsgCreateBountyAmino;
        fromAmino: (object: import("./tx").MsgCreateBountyAmino) => import("./tx").MsgCreateBounty;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateBountyExpiry) => import("./tx").MsgUpdateBountyExpiryAmino;
        fromAmino: (object: import("./tx").MsgUpdateBountyExpiryAmino) => import("./tx").MsgUpdateBountyExpiry;
    };
    "/gitopia.gitopia.gitopia.MsgCloseBounty": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCloseBounty) => import("./tx").MsgCloseBountyAmino;
        fromAmino: (object: import("./tx").MsgCloseBountyAmino) => import("./tx").MsgCloseBounty;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteBounty": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteBounty) => import("./tx").MsgDeleteBountyAmino;
        fromAmino: (object: import("./tx").MsgDeleteBountyAmino) => import("./tx").MsgDeleteBounty;
    };
    "/gitopia.gitopia.gitopia.MsgExercise": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgExercise) => import("./tx").MsgExerciseAmino;
        fromAmino: (object: import("./tx").MsgExerciseAmino) => import("./tx").MsgExercise;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRelease": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateRelease) => import("./tx").MsgCreateReleaseAmino;
        fromAmino: (object: import("./tx").MsgCreateReleaseAmino) => import("./tx").MsgCreateRelease;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRelease": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateRelease) => import("./tx").MsgUpdateReleaseAmino;
        fromAmino: (object: import("./tx").MsgUpdateReleaseAmino) => import("./tx").MsgUpdateRelease;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRelease": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteRelease) => import("./tx").MsgDeleteReleaseAmino;
        fromAmino: (object: import("./tx").MsgDeleteReleaseAmino) => import("./tx").MsgDeleteRelease;
    };
    "/gitopia.gitopia.gitopia.MsgCreatePullRequest": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreatePullRequest) => import("./tx").MsgCreatePullRequestAmino;
        fromAmino: (object: import("./tx").MsgCreatePullRequestAmino) => import("./tx").MsgCreatePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdatePullRequestTitle) => import("./tx").MsgUpdatePullRequestTitleAmino;
        fromAmino: (object: import("./tx").MsgUpdatePullRequestTitleAmino) => import("./tx").MsgUpdatePullRequestTitle;
    };
    "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdatePullRequestDescription) => import("./tx").MsgUpdatePullRequestDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdatePullRequestDescriptionAmino) => import("./tx").MsgUpdatePullRequestDescription;
    };
    "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgInvokeMergePullRequest) => import("./tx").MsgInvokeMergePullRequestAmino;
        fromAmino: (object: import("./tx").MsgInvokeMergePullRequestAmino) => import("./tx").MsgInvokeMergePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgSetPullRequestState": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgSetPullRequestState) => import("./tx").MsgSetPullRequestStateAmino;
        fromAmino: (object: import("./tx").MsgSetPullRequestStateAmino) => import("./tx").MsgSetPullRequestState;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddPullRequestReviewers) => import("./tx").MsgAddPullRequestReviewersAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestReviewersAmino) => import("./tx").MsgAddPullRequestReviewers;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemovePullRequestReviewers) => import("./tx").MsgRemovePullRequestReviewersAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestReviewersAmino) => import("./tx").MsgRemovePullRequestReviewers;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddPullRequestAssignees) => import("./tx").MsgAddPullRequestAssigneesAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestAssigneesAmino) => import("./tx").MsgAddPullRequestAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemovePullRequestAssignees) => import("./tx").MsgRemovePullRequestAssigneesAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestAssigneesAmino) => import("./tx").MsgRemovePullRequestAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgLinkPullRequestIssueByIid) => import("./tx").MsgLinkPullRequestIssueByIidAmino;
        fromAmino: (object: import("./tx").MsgLinkPullRequestIssueByIidAmino) => import("./tx").MsgLinkPullRequestIssueByIid;
    };
    "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUnlinkPullRequestIssueByIid) => import("./tx").MsgUnlinkPullRequestIssueByIidAmino;
        fromAmino: (object: import("./tx").MsgUnlinkPullRequestIssueByIidAmino) => import("./tx").MsgUnlinkPullRequestIssueByIid;
    };
    "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddPullRequestLabels) => import("./tx").MsgAddPullRequestLabelsAmino;
        fromAmino: (object: import("./tx").MsgAddPullRequestLabelsAmino) => import("./tx").MsgAddPullRequestLabels;
    };
    "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemovePullRequestLabels) => import("./tx").MsgRemovePullRequestLabelsAmino;
        fromAmino: (object: import("./tx").MsgRemovePullRequestLabelsAmino) => import("./tx").MsgRemovePullRequestLabels;
    };
    "/gitopia.gitopia.gitopia.MsgDeletePullRequest": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeletePullRequest) => import("./tx").MsgDeletePullRequestAmino;
        fromAmino: (object: import("./tx").MsgDeletePullRequestAmino) => import("./tx").MsgDeletePullRequest;
    };
    "/gitopia.gitopia.gitopia.MsgCreateDao": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateDao) => import("./tx").MsgCreateDaoAmino;
        fromAmino: (object: import("./tx").MsgCreateDaoAmino) => import("./tx").MsgCreateDao;
    };
    "/gitopia.gitopia.gitopia.MsgRenameDao": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRenameDao) => import("./tx").MsgRenameDaoAmino;
        fromAmino: (object: import("./tx").MsgRenameDaoAmino) => import("./tx").MsgRenameDao;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateDaoDescription) => import("./tx").MsgUpdateDaoDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoDescriptionAmino) => import("./tx").MsgUpdateDaoDescription;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateDaoWebsite) => import("./tx").MsgUpdateDaoWebsiteAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoWebsiteAmino) => import("./tx").MsgUpdateDaoWebsite;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateDaoLocation) => import("./tx").MsgUpdateDaoLocationAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoLocationAmino) => import("./tx").MsgUpdateDaoLocation;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateDaoAvatar) => import("./tx").MsgUpdateDaoAvatarAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoAvatarAmino) => import("./tx").MsgUpdateDaoAvatar;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteDao": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteDao) => import("./tx").MsgDeleteDaoAmino;
        fromAmino: (object: import("./tx").MsgDeleteDaoAmino) => import("./tx").MsgDeleteDao;
    };
    "/gitopia.gitopia.gitopia.MsgCreateComment": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateComment) => import("./tx").MsgCreateCommentAmino;
        fromAmino: (object: import("./tx").MsgCreateCommentAmino) => import("./tx").MsgCreateComment;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateComment": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateComment) => import("./tx").MsgUpdateCommentAmino;
        fromAmino: (object: import("./tx").MsgUpdateCommentAmino) => import("./tx").MsgUpdateComment;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteComment": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteComment) => import("./tx").MsgDeleteCommentAmino;
        fromAmino: (object: import("./tx").MsgDeleteCommentAmino) => import("./tx").MsgDeleteComment;
    };
    "/gitopia.gitopia.gitopia.MsgToggleCommentResolved": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleCommentResolved) => import("./tx").MsgToggleCommentResolvedAmino;
        fromAmino: (object: import("./tx").MsgToggleCommentResolvedAmino) => import("./tx").MsgToggleCommentResolved;
    };
    "/gitopia.gitopia.gitopia.MsgCreateIssue": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateIssue) => import("./tx").MsgCreateIssueAmino;
        fromAmino: (object: import("./tx").MsgCreateIssueAmino) => import("./tx").MsgCreateIssue;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateIssueTitle) => import("./tx").MsgUpdateIssueTitleAmino;
        fromAmino: (object: import("./tx").MsgUpdateIssueTitleAmino) => import("./tx").MsgUpdateIssueTitle;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateIssueDescription) => import("./tx").MsgUpdateIssueDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateIssueDescriptionAmino) => import("./tx").MsgUpdateIssueDescription;
    };
    "/gitopia.gitopia.gitopia.MsgToggleIssueState": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleIssueState) => import("./tx").MsgToggleIssueStateAmino;
        fromAmino: (object: import("./tx").MsgToggleIssueStateAmino) => import("./tx").MsgToggleIssueState;
    };
    "/gitopia.gitopia.gitopia.MsgAddIssueAssignees": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddIssueAssignees) => import("./tx").MsgAddIssueAssigneesAmino;
        fromAmino: (object: import("./tx").MsgAddIssueAssigneesAmino) => import("./tx").MsgAddIssueAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemoveIssueAssignees) => import("./tx").MsgRemoveIssueAssigneesAmino;
        fromAmino: (object: import("./tx").MsgRemoveIssueAssigneesAmino) => import("./tx").MsgRemoveIssueAssignees;
    };
    "/gitopia.gitopia.gitopia.MsgAddIssueLabels": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddIssueLabels) => import("./tx").MsgAddIssueLabelsAmino;
        fromAmino: (object: import("./tx").MsgAddIssueLabelsAmino) => import("./tx").MsgAddIssueLabels;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemoveIssueLabels) => import("./tx").MsgRemoveIssueLabelsAmino;
        fromAmino: (object: import("./tx").MsgRemoveIssueLabelsAmino) => import("./tx").MsgRemoveIssueLabels;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteIssue": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteIssue) => import("./tx").MsgDeleteIssueAmino;
        fromAmino: (object: import("./tx").MsgDeleteIssueAmino) => import("./tx").MsgDeleteIssue;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRepository": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateRepository) => import("./tx").MsgCreateRepositoryAmino;
        fromAmino: (object: import("./tx").MsgCreateRepositoryAmino) => import("./tx").MsgCreateRepository;
    };
    "/gitopia.gitopia.gitopia.MsgInvokeForkRepository": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgInvokeForkRepository) => import("./tx").MsgInvokeForkRepositoryAmino;
        fromAmino: (object: import("./tx").MsgInvokeForkRepositoryAmino) => import("./tx").MsgInvokeForkRepository;
    };
    "/gitopia.gitopia.gitopia.MsgForkRepository": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgForkRepository) => import("./tx").MsgForkRepositoryAmino;
        fromAmino: (object: import("./tx").MsgForkRepositoryAmino) => import("./tx").MsgForkRepository;
    };
    "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgForkRepositorySuccess) => import("./tx").MsgForkRepositorySuccessAmino;
        fromAmino: (object: import("./tx").MsgForkRepositorySuccessAmino) => import("./tx").MsgForkRepositorySuccess;
    };
    "/gitopia.gitopia.gitopia.MsgRenameRepository": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRenameRepository) => import("./tx").MsgRenameRepositoryAmino;
        fromAmino: (object: import("./tx").MsgRenameRepositoryAmino) => import("./tx").MsgRenameRepository;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateRepositoryDescription) => import("./tx").MsgUpdateRepositoryDescriptionAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryDescriptionAmino) => import("./tx").MsgUpdateRepositoryDescription;
    };
    "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleRepositoryArchived) => import("./tx").MsgToggleRepositoryArchivedAmino;
        fromAmino: (object: import("./tx").MsgToggleRepositoryArchivedAmino) => import("./tx").MsgToggleRepositoryArchived;
    };
    "/gitopia.gitopia.gitopia.MsgChangeOwner": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgChangeOwner) => import("./tx").MsgChangeOwnerAmino;
        fromAmino: (object: import("./tx").MsgChangeOwnerAmino) => import("./tx").MsgChangeOwner;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateRepositoryCollaborator) => import("./tx").MsgUpdateRepositoryCollaboratorAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryCollaboratorAmino) => import("./tx").MsgUpdateRepositoryCollaborator;
    };
    "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgRemoveRepositoryCollaborator) => import("./tx").MsgRemoveRepositoryCollaboratorAmino;
        fromAmino: (object: import("./tx").MsgRemoveRepositoryCollaboratorAmino) => import("./tx").MsgRemoveRepositoryCollaborator;
    };
    "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateRepositoryLabel) => import("./tx").MsgCreateRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgCreateRepositoryLabelAmino) => import("./tx").MsgCreateRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateRepositoryLabel) => import("./tx").MsgUpdateRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryLabelAmino) => import("./tx").MsgUpdateRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteRepositoryLabel) => import("./tx").MsgDeleteRepositoryLabelAmino;
        fromAmino: (object: import("./tx").MsgDeleteRepositoryLabelAmino) => import("./tx").MsgDeleteRepositoryLabel;
    };
    "/gitopia.gitopia.gitopia.MsgSetDefaultBranch": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgSetDefaultBranch) => import("./tx").MsgSetDefaultBranchAmino;
        fromAmino: (object: import("./tx").MsgSetDefaultBranchAmino) => import("./tx").MsgSetDefaultBranch;
    };
    "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleRepositoryForking) => import("./tx").MsgToggleRepositoryForkingAmino;
        fromAmino: (object: import("./tx").MsgToggleRepositoryForkingAmino) => import("./tx").MsgToggleRepositoryForking;
    };
    "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgToggleArweaveBackup) => import("./tx").MsgToggleArweaveBackupAmino;
        fromAmino: (object: import("./tx").MsgToggleArweaveBackupAmino) => import("./tx").MsgToggleArweaveBackup;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteRepository": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteRepository) => import("./tx").MsgDeleteRepositoryAmino;
        fromAmino: (object: import("./tx").MsgDeleteRepositoryAmino) => import("./tx").MsgDeleteRepository;
    };
    "/gitopia.gitopia.gitopia.MsgCreateUser": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgCreateUser) => import("./tx").MsgCreateUserAmino;
        fromAmino: (object: import("./tx").MsgCreateUserAmino) => import("./tx").MsgCreateUser;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserUsername": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateUserUsername) => import("./tx").MsgUpdateUserUsernameAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserUsernameAmino) => import("./tx").MsgUpdateUserUsername;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserName": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateUserName) => import("./tx").MsgUpdateUserNameAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserNameAmino) => import("./tx").MsgUpdateUserName;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserBio": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateUserBio) => import("./tx").MsgUpdateUserBioAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserBioAmino) => import("./tx").MsgUpdateUserBio;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateUserAvatar) => import("./tx").MsgUpdateUserAvatarAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserAvatarAmino) => import("./tx").MsgUpdateUserAvatar;
    };
    "/gitopia.gitopia.gitopia.MsgDeleteUser": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDeleteUser) => import("./tx").MsgDeleteUserAmino;
        fromAmino: (object: import("./tx").MsgDeleteUserAmino) => import("./tx").MsgDeleteUser;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateRepositoryBackupRef) => import("./tx").MsgUpdateRepositoryBackupRefAmino;
        fromAmino: (object: import("./tx").MsgUpdateRepositoryBackupRefAmino) => import("./tx").MsgUpdateRepositoryBackupRef;
    };
    "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgAddRepositoryBackupRef) => import("./tx").MsgAddRepositoryBackupRefAmino;
        fromAmino: (object: import("./tx").MsgAddRepositoryBackupRefAmino) => import("./tx").MsgAddRepositoryBackupRef;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateUserPinnedRepositories) => import("./tx").MsgUpdateUserPinnedRepositoriesAmino;
        fromAmino: (object: import("./tx").MsgUpdateUserPinnedRepositoriesAmino) => import("./tx").MsgUpdateUserPinnedRepositories;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateDaoPinnedRepositories) => import("./tx").MsgUpdateDaoPinnedRepositoriesAmino;
        fromAmino: (object: import("./tx").MsgUpdateDaoPinnedRepositoriesAmino) => import("./tx").MsgUpdateDaoPinnedRepositories;
    };
    "/gitopia.gitopia.gitopia.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => import("./tx").MsgUpdateParams;
    };
    "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives": {
        aminoType: string;
        toAmino: (message: import("./tx").MsgDistributePlatformIncentives) => import("./tx").MsgDistributePlatformIncentivesAmino;
        fromAmino: (object: import("./tx").MsgDistributePlatformIncentivesAmino) => import("./tx").MsgDistributePlatformIncentives;
    };
};
export declare const gitopiaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningGitopiaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningGitopiaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
