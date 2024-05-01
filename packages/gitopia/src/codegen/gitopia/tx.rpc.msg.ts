import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgToggleForcePush, MsgToggleForcePushResponse, MsgRevokeProviderPermission, MsgRevokeProviderPermissionResponse, MsgAuthorizeProvider, MsgAuthorizeProviderResponse, MsgCreateTask, MsgCreateTaskResponse, MsgUpdateTask, MsgUpdateTaskResponse, MsgDeleteTask, MsgDeleteTaskResponse, MsgSetBranch, MsgSetBranchResponse, MsgMultiSetBranch, MsgMultiSetBranchResponse, MsgDeleteBranch, MsgDeleteBranchResponse, MsgMultiDeleteBranch, MsgMultiDeleteBranchResponse, MsgSetTag, MsgSetTagResponse, MsgMultiSetTag, MsgMultiSetTagResponse, MsgDeleteTag, MsgDeleteTagResponse, MsgMultiDeleteTag, MsgMultiDeleteTagResponse, MsgAddMember, MsgAddMemberResponse, MsgUpdateMemberRole, MsgUpdateMemberRoleResponse, MsgRemoveMember, MsgRemoveMemberResponse, MsgCreateBounty, MsgCreateBountyResponse, MsgUpdateBountyExpiry, MsgUpdateBountyExpiryResponse, MsgCloseBounty, MsgCloseBountyResponse, MsgDeleteBounty, MsgDeleteBountyResponse, MsgExercise, MsgExerciseResponse, MsgCreateRelease, MsgCreateReleaseResponse, MsgUpdateRelease, MsgUpdateReleaseResponse, MsgDeleteRelease, MsgDeleteReleaseResponse, MsgCreatePullRequest, MsgCreatePullRequestResponse, MsgUpdatePullRequestTitle, MsgUpdatePullRequestTitleResponse, MsgUpdatePullRequestDescription, MsgUpdatePullRequestDescriptionResponse, MsgInvokeMergePullRequest, MsgInvokeMergePullRequestResponse, MsgSetPullRequestState, MsgSetPullRequestStateResponse, MsgAddPullRequestReviewers, MsgAddPullRequestReviewersResponse, MsgRemovePullRequestReviewers, MsgRemovePullRequestReviewersResponse, MsgAddPullRequestAssignees, MsgAddPullRequestAssigneesResponse, MsgRemovePullRequestAssignees, MsgRemovePullRequestAssigneesResponse, MsgLinkPullRequestIssueByIid, MsgLinkPullRequestIssueByIidResponse, MsgUnlinkPullRequestIssueByIid, MsgUnlinkPullRequestIssueByIidResponse, MsgAddPullRequestLabels, MsgAddPullRequestLabelsResponse, MsgRemovePullRequestLabels, MsgRemovePullRequestLabelsResponse, MsgDeletePullRequest, MsgDeletePullRequestResponse, MsgCreateDao, MsgCreateDaoResponse, MsgRenameDao, MsgRenameDaoResponse, MsgUpdateDaoDescription, MsgUpdateDaoDescriptionResponse, MsgUpdateDaoWebsite, MsgUpdateDaoWebsiteResponse, MsgUpdateDaoLocation, MsgUpdateDaoLocationResponse, MsgUpdateDaoAvatar, MsgUpdateDaoAvatarResponse, MsgDeleteDao, MsgDeleteDaoResponse, MsgCreateComment, MsgCreateCommentResponse, MsgUpdateComment, MsgUpdateCommentResponse, MsgDeleteComment, MsgDeleteCommentResponse, MsgToggleCommentResolved, MsgToggleCommentResolvedResponse, MsgCreateIssue, MsgCreateIssueResponse, MsgUpdateIssueTitle, MsgUpdateIssueTitleResponse, MsgUpdateIssueDescription, MsgUpdateIssueDescriptionResponse, MsgToggleIssueState, MsgToggleIssueStateResponse, MsgAddIssueAssignees, MsgAddIssueAssigneesResponse, MsgRemoveIssueAssignees, MsgRemoveIssueAssigneesResponse, MsgAddIssueLabels, MsgAddIssueLabelsResponse, MsgRemoveIssueLabels, MsgRemoveIssueLabelsResponse, MsgDeleteIssue, MsgDeleteIssueResponse, MsgCreateRepository, MsgCreateRepositoryResponse, MsgInvokeForkRepository, MsgInvokeForkRepositoryResponse, MsgForkRepository, MsgForkRepositoryResponse, MsgForkRepositorySuccess, MsgForkRepositorySuccessResponse, MsgRenameRepository, MsgRenameRepositoryResponse, MsgUpdateRepositoryDescription, MsgUpdateRepositoryDescriptionResponse, MsgToggleRepositoryArchived, MsgToggleRepositoryArchivedResponse, MsgChangeOwner, MsgChangeOwnerResponse, MsgUpdateRepositoryCollaborator, MsgUpdateRepositoryCollaboratorResponse, MsgRemoveRepositoryCollaborator, MsgRemoveRepositoryCollaboratorResponse, MsgCreateRepositoryLabel, MsgCreateRepositoryLabelResponse, MsgUpdateRepositoryLabel, MsgUpdateRepositoryLabelResponse, MsgDeleteRepositoryLabel, MsgDeleteRepositoryLabelResponse, MsgSetDefaultBranch, MsgSetDefaultBranchResponse, MsgToggleRepositoryForking, MsgToggleRepositoryForkingResponse, MsgToggleArweaveBackup, MsgToggleArweaveBackupResponse, MsgDeleteRepository, MsgDeleteRepositoryResponse, MsgCreateUser, MsgCreateUserResponse, MsgUpdateUserUsername, MsgUpdateUserUsernameResponse, MsgUpdateUserName, MsgUpdateUserNameResponse, MsgUpdateUserBio, MsgUpdateUserBioResponse, MsgUpdateUserAvatar, MsgUpdateUserAvatarResponse, MsgDeleteUser, MsgDeleteUserResponse, MsgUpdateRepositoryBackupRef, MsgUpdateRepositoryBackupRefResponse, MsgAddRepositoryBackupRef, MsgAddRepositoryBackupRefResponse, MsgUpdateUserPinnedRepositories, MsgUpdateUserPinnedRepositoriesResponse, MsgUpdateDaoPinnedRepositories, MsgUpdateDaoPinnedRepositoriesResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgDistributePlatformIncentives, MsgDistributePlatformIncentivesResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  toggleForcePush(request: MsgToggleForcePush): Promise<MsgToggleForcePushResponse>;
  revokeProviderPermission(request: MsgRevokeProviderPermission): Promise<MsgRevokeProviderPermissionResponse>;
  authorizeProvider(request: MsgAuthorizeProvider): Promise<MsgAuthorizeProviderResponse>;
  createTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
  updateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse>;
  deleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
  setBranch(request: MsgSetBranch): Promise<MsgSetBranchResponse>;
  multiSetBranch(request: MsgMultiSetBranch): Promise<MsgMultiSetBranchResponse>;
  deleteBranch(request: MsgDeleteBranch): Promise<MsgDeleteBranchResponse>;
  multiDeleteBranch(request: MsgMultiDeleteBranch): Promise<MsgMultiDeleteBranchResponse>;
  setTag(request: MsgSetTag): Promise<MsgSetTagResponse>;
  multiSetTag(request: MsgMultiSetTag): Promise<MsgMultiSetTagResponse>;
  deleteTag(request: MsgDeleteTag): Promise<MsgDeleteTagResponse>;
  multiDeleteTag(request: MsgMultiDeleteTag): Promise<MsgMultiDeleteTagResponse>;
  addMember(request: MsgAddMember): Promise<MsgAddMemberResponse>;
  updateMemberRole(request: MsgUpdateMemberRole): Promise<MsgUpdateMemberRoleResponse>;
  removeMember(request: MsgRemoveMember): Promise<MsgRemoveMemberResponse>;
  createBounty(request: MsgCreateBounty): Promise<MsgCreateBountyResponse>;
  updateBountyExpiry(request: MsgUpdateBountyExpiry): Promise<MsgUpdateBountyExpiryResponse>;
  closeBounty(request: MsgCloseBounty): Promise<MsgCloseBountyResponse>;
  deleteBounty(request: MsgDeleteBounty): Promise<MsgDeleteBountyResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  exercise(request: MsgExercise): Promise<MsgExerciseResponse>;
  createRelease(request: MsgCreateRelease): Promise<MsgCreateReleaseResponse>;
  updateRelease(request: MsgUpdateRelease): Promise<MsgUpdateReleaseResponse>;
  deleteRelease(request: MsgDeleteRelease): Promise<MsgDeleteReleaseResponse>;
  createPullRequest(request: MsgCreatePullRequest): Promise<MsgCreatePullRequestResponse>;
  updatePullRequestTitle(request: MsgUpdatePullRequestTitle): Promise<MsgUpdatePullRequestTitleResponse>;
  updatePullRequestDescription(request: MsgUpdatePullRequestDescription): Promise<MsgUpdatePullRequestDescriptionResponse>;
  invokeMergePullRequest(request: MsgInvokeMergePullRequest): Promise<MsgInvokeMergePullRequestResponse>;
  setPullRequestState(request: MsgSetPullRequestState): Promise<MsgSetPullRequestStateResponse>;
  addPullRequestReviewers(request: MsgAddPullRequestReviewers): Promise<MsgAddPullRequestReviewersResponse>;
  removePullRequestReviewers(request: MsgRemovePullRequestReviewers): Promise<MsgRemovePullRequestReviewersResponse>;
  addPullRequestAssignees(request: MsgAddPullRequestAssignees): Promise<MsgAddPullRequestAssigneesResponse>;
  removePullRequestAssignees(request: MsgRemovePullRequestAssignees): Promise<MsgRemovePullRequestAssigneesResponse>;
  linkPullRequestIssueByIid(request: MsgLinkPullRequestIssueByIid): Promise<MsgLinkPullRequestIssueByIidResponse>;
  unlinkPullRequestIssueByIid(request: MsgUnlinkPullRequestIssueByIid): Promise<MsgUnlinkPullRequestIssueByIidResponse>;
  addPullRequestLabels(request: MsgAddPullRequestLabels): Promise<MsgAddPullRequestLabelsResponse>;
  removePullRequestLabels(request: MsgRemovePullRequestLabels): Promise<MsgRemovePullRequestLabelsResponse>;
  deletePullRequest(request: MsgDeletePullRequest): Promise<MsgDeletePullRequestResponse>;
  createDao(request: MsgCreateDao): Promise<MsgCreateDaoResponse>;
  renameDao(request: MsgRenameDao): Promise<MsgRenameDaoResponse>;
  updateDaoDescription(request: MsgUpdateDaoDescription): Promise<MsgUpdateDaoDescriptionResponse>;
  updateDaoWebsite(request: MsgUpdateDaoWebsite): Promise<MsgUpdateDaoWebsiteResponse>;
  updateDaoLocation(request: MsgUpdateDaoLocation): Promise<MsgUpdateDaoLocationResponse>;
  updateDaoAvatar(request: MsgUpdateDaoAvatar): Promise<MsgUpdateDaoAvatarResponse>;
  deleteDao(request: MsgDeleteDao): Promise<MsgDeleteDaoResponse>;
  createComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>;
  updateComment(request: MsgUpdateComment): Promise<MsgUpdateCommentResponse>;
  deleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse>;
  toggleCommentResolved(request: MsgToggleCommentResolved): Promise<MsgToggleCommentResolvedResponse>;
  createIssue(request: MsgCreateIssue): Promise<MsgCreateIssueResponse>;
  updateIssueTitle(request: MsgUpdateIssueTitle): Promise<MsgUpdateIssueTitleResponse>;
  updateIssueDescription(request: MsgUpdateIssueDescription): Promise<MsgUpdateIssueDescriptionResponse>;
  toggleIssueState(request: MsgToggleIssueState): Promise<MsgToggleIssueStateResponse>;
  addIssueAssignees(request: MsgAddIssueAssignees): Promise<MsgAddIssueAssigneesResponse>;
  removeIssueAssignees(request: MsgRemoveIssueAssignees): Promise<MsgRemoveIssueAssigneesResponse>;
  addIssueLabels(request: MsgAddIssueLabels): Promise<MsgAddIssueLabelsResponse>;
  removeIssueLabels(request: MsgRemoveIssueLabels): Promise<MsgRemoveIssueLabelsResponse>;
  deleteIssue(request: MsgDeleteIssue): Promise<MsgDeleteIssueResponse>;
  createRepository(request: MsgCreateRepository): Promise<MsgCreateRepositoryResponse>;
  invokeForkRepository(request: MsgInvokeForkRepository): Promise<MsgInvokeForkRepositoryResponse>;
  forkRepository(request: MsgForkRepository): Promise<MsgForkRepositoryResponse>;
  forkRepositorySuccess(request: MsgForkRepositorySuccess): Promise<MsgForkRepositorySuccessResponse>;
  renameRepository(request: MsgRenameRepository): Promise<MsgRenameRepositoryResponse>;
  updateRepositoryDescription(request: MsgUpdateRepositoryDescription): Promise<MsgUpdateRepositoryDescriptionResponse>;
  toggleRepositoryArchived(request: MsgToggleRepositoryArchived): Promise<MsgToggleRepositoryArchivedResponse>;
  changeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse>;
  updateRepositoryCollaborator(request: MsgUpdateRepositoryCollaborator): Promise<MsgUpdateRepositoryCollaboratorResponse>;
  removeRepositoryCollaborator(request: MsgRemoveRepositoryCollaborator): Promise<MsgRemoveRepositoryCollaboratorResponse>;
  createRepositoryLabel(request: MsgCreateRepositoryLabel): Promise<MsgCreateRepositoryLabelResponse>;
  updateRepositoryLabel(request: MsgUpdateRepositoryLabel): Promise<MsgUpdateRepositoryLabelResponse>;
  deleteRepositoryLabel(request: MsgDeleteRepositoryLabel): Promise<MsgDeleteRepositoryLabelResponse>;
  setDefaultBranch(request: MsgSetDefaultBranch): Promise<MsgSetDefaultBranchResponse>;
  toggleRepositoryForking(request: MsgToggleRepositoryForking): Promise<MsgToggleRepositoryForkingResponse>;
  toggleArweaveBackup(request: MsgToggleArweaveBackup): Promise<MsgToggleArweaveBackupResponse>;
  deleteRepository(request: MsgDeleteRepository): Promise<MsgDeleteRepositoryResponse>;
  createUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
  updateUserUsername(request: MsgUpdateUserUsername): Promise<MsgUpdateUserUsernameResponse>;
  updateUserName(request: MsgUpdateUserName): Promise<MsgUpdateUserNameResponse>;
  updateUserBio(request: MsgUpdateUserBio): Promise<MsgUpdateUserBioResponse>;
  updateUserAvatar(request: MsgUpdateUserAvatar): Promise<MsgUpdateUserAvatarResponse>;
  deleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
  /** rpc TransferUser(MsgTransferUser) returns (MsgTransferUserResponse); */
  updateRepositoryBackupRef(request: MsgUpdateRepositoryBackupRef): Promise<MsgUpdateRepositoryBackupRefResponse>;
  addRepositoryBackupRef(request: MsgAddRepositoryBackupRef): Promise<MsgAddRepositoryBackupRefResponse>;
  updateUserPinnedRepositories(request: MsgUpdateUserPinnedRepositories): Promise<MsgUpdateUserPinnedRepositoriesResponse>;
  updateDaoPinnedRepositories(request: MsgUpdateDaoPinnedRepositories): Promise<MsgUpdateDaoPinnedRepositoriesResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gitopia module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  distributePlatformIncentives(request: MsgDistributePlatformIncentives): Promise<MsgDistributePlatformIncentivesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.toggleForcePush = this.toggleForcePush.bind(this);
    this.revokeProviderPermission = this.revokeProviderPermission.bind(this);
    this.authorizeProvider = this.authorizeProvider.bind(this);
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setBranch = this.setBranch.bind(this);
    this.multiSetBranch = this.multiSetBranch.bind(this);
    this.deleteBranch = this.deleteBranch.bind(this);
    this.multiDeleteBranch = this.multiDeleteBranch.bind(this);
    this.setTag = this.setTag.bind(this);
    this.multiSetTag = this.multiSetTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.multiDeleteTag = this.multiDeleteTag.bind(this);
    this.addMember = this.addMember.bind(this);
    this.updateMemberRole = this.updateMemberRole.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.createBounty = this.createBounty.bind(this);
    this.updateBountyExpiry = this.updateBountyExpiry.bind(this);
    this.closeBounty = this.closeBounty.bind(this);
    this.deleteBounty = this.deleteBounty.bind(this);
    this.exercise = this.exercise.bind(this);
    this.createRelease = this.createRelease.bind(this);
    this.updateRelease = this.updateRelease.bind(this);
    this.deleteRelease = this.deleteRelease.bind(this);
    this.createPullRequest = this.createPullRequest.bind(this);
    this.updatePullRequestTitle = this.updatePullRequestTitle.bind(this);
    this.updatePullRequestDescription = this.updatePullRequestDescription.bind(this);
    this.invokeMergePullRequest = this.invokeMergePullRequest.bind(this);
    this.setPullRequestState = this.setPullRequestState.bind(this);
    this.addPullRequestReviewers = this.addPullRequestReviewers.bind(this);
    this.removePullRequestReviewers = this.removePullRequestReviewers.bind(this);
    this.addPullRequestAssignees = this.addPullRequestAssignees.bind(this);
    this.removePullRequestAssignees = this.removePullRequestAssignees.bind(this);
    this.linkPullRequestIssueByIid = this.linkPullRequestIssueByIid.bind(this);
    this.unlinkPullRequestIssueByIid = this.unlinkPullRequestIssueByIid.bind(this);
    this.addPullRequestLabels = this.addPullRequestLabels.bind(this);
    this.removePullRequestLabels = this.removePullRequestLabels.bind(this);
    this.deletePullRequest = this.deletePullRequest.bind(this);
    this.createDao = this.createDao.bind(this);
    this.renameDao = this.renameDao.bind(this);
    this.updateDaoDescription = this.updateDaoDescription.bind(this);
    this.updateDaoWebsite = this.updateDaoWebsite.bind(this);
    this.updateDaoLocation = this.updateDaoLocation.bind(this);
    this.updateDaoAvatar = this.updateDaoAvatar.bind(this);
    this.deleteDao = this.deleteDao.bind(this);
    this.createComment = this.createComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.toggleCommentResolved = this.toggleCommentResolved.bind(this);
    this.createIssue = this.createIssue.bind(this);
    this.updateIssueTitle = this.updateIssueTitle.bind(this);
    this.updateIssueDescription = this.updateIssueDescription.bind(this);
    this.toggleIssueState = this.toggleIssueState.bind(this);
    this.addIssueAssignees = this.addIssueAssignees.bind(this);
    this.removeIssueAssignees = this.removeIssueAssignees.bind(this);
    this.addIssueLabels = this.addIssueLabels.bind(this);
    this.removeIssueLabels = this.removeIssueLabels.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.createRepository = this.createRepository.bind(this);
    this.invokeForkRepository = this.invokeForkRepository.bind(this);
    this.forkRepository = this.forkRepository.bind(this);
    this.forkRepositorySuccess = this.forkRepositorySuccess.bind(this);
    this.renameRepository = this.renameRepository.bind(this);
    this.updateRepositoryDescription = this.updateRepositoryDescription.bind(this);
    this.toggleRepositoryArchived = this.toggleRepositoryArchived.bind(this);
    this.changeOwner = this.changeOwner.bind(this);
    this.updateRepositoryCollaborator = this.updateRepositoryCollaborator.bind(this);
    this.removeRepositoryCollaborator = this.removeRepositoryCollaborator.bind(this);
    this.createRepositoryLabel = this.createRepositoryLabel.bind(this);
    this.updateRepositoryLabel = this.updateRepositoryLabel.bind(this);
    this.deleteRepositoryLabel = this.deleteRepositoryLabel.bind(this);
    this.setDefaultBranch = this.setDefaultBranch.bind(this);
    this.toggleRepositoryForking = this.toggleRepositoryForking.bind(this);
    this.toggleArweaveBackup = this.toggleArweaveBackup.bind(this);
    this.deleteRepository = this.deleteRepository.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUserUsername = this.updateUserUsername.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.updateUserBio = this.updateUserBio.bind(this);
    this.updateUserAvatar = this.updateUserAvatar.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.updateRepositoryBackupRef = this.updateRepositoryBackupRef.bind(this);
    this.addRepositoryBackupRef = this.addRepositoryBackupRef.bind(this);
    this.updateUserPinnedRepositories = this.updateUserPinnedRepositories.bind(this);
    this.updateDaoPinnedRepositories = this.updateDaoPinnedRepositories.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.distributePlatformIncentives = this.distributePlatformIncentives.bind(this);
  }
  toggleForcePush(request: MsgToggleForcePush): Promise<MsgToggleForcePushResponse> {
    const data = MsgToggleForcePush.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleForcePush", data);
    return promise.then(data => MsgToggleForcePushResponse.decode(new BinaryReader(data)));
  }
  revokeProviderPermission(request: MsgRevokeProviderPermission): Promise<MsgRevokeProviderPermissionResponse> {
    const data = MsgRevokeProviderPermission.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RevokeProviderPermission", data);
    return promise.then(data => MsgRevokeProviderPermissionResponse.decode(new BinaryReader(data)));
  }
  authorizeProvider(request: MsgAuthorizeProvider): Promise<MsgAuthorizeProviderResponse> {
    const data = MsgAuthorizeProvider.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AuthorizeProvider", data);
    return promise.then(data => MsgAuthorizeProviderResponse.decode(new BinaryReader(data)));
  }
  createTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateTask", data);
    return promise.then(data => MsgCreateTaskResponse.decode(new BinaryReader(data)));
  }
  updateTask(request: MsgUpdateTask): Promise<MsgUpdateTaskResponse> {
    const data = MsgUpdateTask.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateTask", data);
    return promise.then(data => MsgUpdateTaskResponse.decode(new BinaryReader(data)));
  }
  deleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse> {
    const data = MsgDeleteTask.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteTask", data);
    return promise.then(data => MsgDeleteTaskResponse.decode(new BinaryReader(data)));
  }
  setBranch(request: MsgSetBranch): Promise<MsgSetBranchResponse> {
    const data = MsgSetBranch.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "SetBranch", data);
    return promise.then(data => MsgSetBranchResponse.decode(new BinaryReader(data)));
  }
  multiSetBranch(request: MsgMultiSetBranch): Promise<MsgMultiSetBranchResponse> {
    const data = MsgMultiSetBranch.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "MultiSetBranch", data);
    return promise.then(data => MsgMultiSetBranchResponse.decode(new BinaryReader(data)));
  }
  deleteBranch(request: MsgDeleteBranch): Promise<MsgDeleteBranchResponse> {
    const data = MsgDeleteBranch.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteBranch", data);
    return promise.then(data => MsgDeleteBranchResponse.decode(new BinaryReader(data)));
  }
  multiDeleteBranch(request: MsgMultiDeleteBranch): Promise<MsgMultiDeleteBranchResponse> {
    const data = MsgMultiDeleteBranch.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "MultiDeleteBranch", data);
    return promise.then(data => MsgMultiDeleteBranchResponse.decode(new BinaryReader(data)));
  }
  setTag(request: MsgSetTag): Promise<MsgSetTagResponse> {
    const data = MsgSetTag.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "SetTag", data);
    return promise.then(data => MsgSetTagResponse.decode(new BinaryReader(data)));
  }
  multiSetTag(request: MsgMultiSetTag): Promise<MsgMultiSetTagResponse> {
    const data = MsgMultiSetTag.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "MultiSetTag", data);
    return promise.then(data => MsgMultiSetTagResponse.decode(new BinaryReader(data)));
  }
  deleteTag(request: MsgDeleteTag): Promise<MsgDeleteTagResponse> {
    const data = MsgDeleteTag.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteTag", data);
    return promise.then(data => MsgDeleteTagResponse.decode(new BinaryReader(data)));
  }
  multiDeleteTag(request: MsgMultiDeleteTag): Promise<MsgMultiDeleteTagResponse> {
    const data = MsgMultiDeleteTag.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "MultiDeleteTag", data);
    return promise.then(data => MsgMultiDeleteTagResponse.decode(new BinaryReader(data)));
  }
  addMember(request: MsgAddMember): Promise<MsgAddMemberResponse> {
    const data = MsgAddMember.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddMember", data);
    return promise.then(data => MsgAddMemberResponse.decode(new BinaryReader(data)));
  }
  updateMemberRole(request: MsgUpdateMemberRole): Promise<MsgUpdateMemberRoleResponse> {
    const data = MsgUpdateMemberRole.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateMemberRole", data);
    return promise.then(data => MsgUpdateMemberRoleResponse.decode(new BinaryReader(data)));
  }
  removeMember(request: MsgRemoveMember): Promise<MsgRemoveMemberResponse> {
    const data = MsgRemoveMember.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemoveMember", data);
    return promise.then(data => MsgRemoveMemberResponse.decode(new BinaryReader(data)));
  }
  createBounty(request: MsgCreateBounty): Promise<MsgCreateBountyResponse> {
    const data = MsgCreateBounty.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateBounty", data);
    return promise.then(data => MsgCreateBountyResponse.decode(new BinaryReader(data)));
  }
  updateBountyExpiry(request: MsgUpdateBountyExpiry): Promise<MsgUpdateBountyExpiryResponse> {
    const data = MsgUpdateBountyExpiry.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateBountyExpiry", data);
    return promise.then(data => MsgUpdateBountyExpiryResponse.decode(new BinaryReader(data)));
  }
  closeBounty(request: MsgCloseBounty): Promise<MsgCloseBountyResponse> {
    const data = MsgCloseBounty.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CloseBounty", data);
    return promise.then(data => MsgCloseBountyResponse.decode(new BinaryReader(data)));
  }
  deleteBounty(request: MsgDeleteBounty): Promise<MsgDeleteBountyResponse> {
    const data = MsgDeleteBounty.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteBounty", data);
    return promise.then(data => MsgDeleteBountyResponse.decode(new BinaryReader(data)));
  }
  exercise(request: MsgExercise): Promise<MsgExerciseResponse> {
    const data = MsgExercise.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "Exercise", data);
    return promise.then(data => MsgExerciseResponse.decode(new BinaryReader(data)));
  }
  createRelease(request: MsgCreateRelease): Promise<MsgCreateReleaseResponse> {
    const data = MsgCreateRelease.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateRelease", data);
    return promise.then(data => MsgCreateReleaseResponse.decode(new BinaryReader(data)));
  }
  updateRelease(request: MsgUpdateRelease): Promise<MsgUpdateReleaseResponse> {
    const data = MsgUpdateRelease.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateRelease", data);
    return promise.then(data => MsgUpdateReleaseResponse.decode(new BinaryReader(data)));
  }
  deleteRelease(request: MsgDeleteRelease): Promise<MsgDeleteReleaseResponse> {
    const data = MsgDeleteRelease.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteRelease", data);
    return promise.then(data => MsgDeleteReleaseResponse.decode(new BinaryReader(data)));
  }
  createPullRequest(request: MsgCreatePullRequest): Promise<MsgCreatePullRequestResponse> {
    const data = MsgCreatePullRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreatePullRequest", data);
    return promise.then(data => MsgCreatePullRequestResponse.decode(new BinaryReader(data)));
  }
  updatePullRequestTitle(request: MsgUpdatePullRequestTitle): Promise<MsgUpdatePullRequestTitleResponse> {
    const data = MsgUpdatePullRequestTitle.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdatePullRequestTitle", data);
    return promise.then(data => MsgUpdatePullRequestTitleResponse.decode(new BinaryReader(data)));
  }
  updatePullRequestDescription(request: MsgUpdatePullRequestDescription): Promise<MsgUpdatePullRequestDescriptionResponse> {
    const data = MsgUpdatePullRequestDescription.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdatePullRequestDescription", data);
    return promise.then(data => MsgUpdatePullRequestDescriptionResponse.decode(new BinaryReader(data)));
  }
  invokeMergePullRequest(request: MsgInvokeMergePullRequest): Promise<MsgInvokeMergePullRequestResponse> {
    const data = MsgInvokeMergePullRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "InvokeMergePullRequest", data);
    return promise.then(data => MsgInvokeMergePullRequestResponse.decode(new BinaryReader(data)));
  }
  setPullRequestState(request: MsgSetPullRequestState): Promise<MsgSetPullRequestStateResponse> {
    const data = MsgSetPullRequestState.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "SetPullRequestState", data);
    return promise.then(data => MsgSetPullRequestStateResponse.decode(new BinaryReader(data)));
  }
  addPullRequestReviewers(request: MsgAddPullRequestReviewers): Promise<MsgAddPullRequestReviewersResponse> {
    const data = MsgAddPullRequestReviewers.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddPullRequestReviewers", data);
    return promise.then(data => MsgAddPullRequestReviewersResponse.decode(new BinaryReader(data)));
  }
  removePullRequestReviewers(request: MsgRemovePullRequestReviewers): Promise<MsgRemovePullRequestReviewersResponse> {
    const data = MsgRemovePullRequestReviewers.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemovePullRequestReviewers", data);
    return promise.then(data => MsgRemovePullRequestReviewersResponse.decode(new BinaryReader(data)));
  }
  addPullRequestAssignees(request: MsgAddPullRequestAssignees): Promise<MsgAddPullRequestAssigneesResponse> {
    const data = MsgAddPullRequestAssignees.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddPullRequestAssignees", data);
    return promise.then(data => MsgAddPullRequestAssigneesResponse.decode(new BinaryReader(data)));
  }
  removePullRequestAssignees(request: MsgRemovePullRequestAssignees): Promise<MsgRemovePullRequestAssigneesResponse> {
    const data = MsgRemovePullRequestAssignees.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemovePullRequestAssignees", data);
    return promise.then(data => MsgRemovePullRequestAssigneesResponse.decode(new BinaryReader(data)));
  }
  linkPullRequestIssueByIid(request: MsgLinkPullRequestIssueByIid): Promise<MsgLinkPullRequestIssueByIidResponse> {
    const data = MsgLinkPullRequestIssueByIid.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "LinkPullRequestIssueByIid", data);
    return promise.then(data => MsgLinkPullRequestIssueByIidResponse.decode(new BinaryReader(data)));
  }
  unlinkPullRequestIssueByIid(request: MsgUnlinkPullRequestIssueByIid): Promise<MsgUnlinkPullRequestIssueByIidResponse> {
    const data = MsgUnlinkPullRequestIssueByIid.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UnlinkPullRequestIssueByIid", data);
    return promise.then(data => MsgUnlinkPullRequestIssueByIidResponse.decode(new BinaryReader(data)));
  }
  addPullRequestLabels(request: MsgAddPullRequestLabels): Promise<MsgAddPullRequestLabelsResponse> {
    const data = MsgAddPullRequestLabels.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddPullRequestLabels", data);
    return promise.then(data => MsgAddPullRequestLabelsResponse.decode(new BinaryReader(data)));
  }
  removePullRequestLabels(request: MsgRemovePullRequestLabels): Promise<MsgRemovePullRequestLabelsResponse> {
    const data = MsgRemovePullRequestLabels.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemovePullRequestLabels", data);
    return promise.then(data => MsgRemovePullRequestLabelsResponse.decode(new BinaryReader(data)));
  }
  deletePullRequest(request: MsgDeletePullRequest): Promise<MsgDeletePullRequestResponse> {
    const data = MsgDeletePullRequest.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeletePullRequest", data);
    return promise.then(data => MsgDeletePullRequestResponse.decode(new BinaryReader(data)));
  }
  createDao(request: MsgCreateDao): Promise<MsgCreateDaoResponse> {
    const data = MsgCreateDao.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateDao", data);
    return promise.then(data => MsgCreateDaoResponse.decode(new BinaryReader(data)));
  }
  renameDao(request: MsgRenameDao): Promise<MsgRenameDaoResponse> {
    const data = MsgRenameDao.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RenameDao", data);
    return promise.then(data => MsgRenameDaoResponse.decode(new BinaryReader(data)));
  }
  updateDaoDescription(request: MsgUpdateDaoDescription): Promise<MsgUpdateDaoDescriptionResponse> {
    const data = MsgUpdateDaoDescription.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateDaoDescription", data);
    return promise.then(data => MsgUpdateDaoDescriptionResponse.decode(new BinaryReader(data)));
  }
  updateDaoWebsite(request: MsgUpdateDaoWebsite): Promise<MsgUpdateDaoWebsiteResponse> {
    const data = MsgUpdateDaoWebsite.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateDaoWebsite", data);
    return promise.then(data => MsgUpdateDaoWebsiteResponse.decode(new BinaryReader(data)));
  }
  updateDaoLocation(request: MsgUpdateDaoLocation): Promise<MsgUpdateDaoLocationResponse> {
    const data = MsgUpdateDaoLocation.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateDaoLocation", data);
    return promise.then(data => MsgUpdateDaoLocationResponse.decode(new BinaryReader(data)));
  }
  updateDaoAvatar(request: MsgUpdateDaoAvatar): Promise<MsgUpdateDaoAvatarResponse> {
    const data = MsgUpdateDaoAvatar.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateDaoAvatar", data);
    return promise.then(data => MsgUpdateDaoAvatarResponse.decode(new BinaryReader(data)));
  }
  deleteDao(request: MsgDeleteDao): Promise<MsgDeleteDaoResponse> {
    const data = MsgDeleteDao.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteDao", data);
    return promise.then(data => MsgDeleteDaoResponse.decode(new BinaryReader(data)));
  }
  createComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse> {
    const data = MsgCreateComment.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateComment", data);
    return promise.then(data => MsgCreateCommentResponse.decode(new BinaryReader(data)));
  }
  updateComment(request: MsgUpdateComment): Promise<MsgUpdateCommentResponse> {
    const data = MsgUpdateComment.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateComment", data);
    return promise.then(data => MsgUpdateCommentResponse.decode(new BinaryReader(data)));
  }
  deleteComment(request: MsgDeleteComment): Promise<MsgDeleteCommentResponse> {
    const data = MsgDeleteComment.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteComment", data);
    return promise.then(data => MsgDeleteCommentResponse.decode(new BinaryReader(data)));
  }
  toggleCommentResolved(request: MsgToggleCommentResolved): Promise<MsgToggleCommentResolvedResponse> {
    const data = MsgToggleCommentResolved.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleCommentResolved", data);
    return promise.then(data => MsgToggleCommentResolvedResponse.decode(new BinaryReader(data)));
  }
  createIssue(request: MsgCreateIssue): Promise<MsgCreateIssueResponse> {
    const data = MsgCreateIssue.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateIssue", data);
    return promise.then(data => MsgCreateIssueResponse.decode(new BinaryReader(data)));
  }
  updateIssueTitle(request: MsgUpdateIssueTitle): Promise<MsgUpdateIssueTitleResponse> {
    const data = MsgUpdateIssueTitle.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateIssueTitle", data);
    return promise.then(data => MsgUpdateIssueTitleResponse.decode(new BinaryReader(data)));
  }
  updateIssueDescription(request: MsgUpdateIssueDescription): Promise<MsgUpdateIssueDescriptionResponse> {
    const data = MsgUpdateIssueDescription.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateIssueDescription", data);
    return promise.then(data => MsgUpdateIssueDescriptionResponse.decode(new BinaryReader(data)));
  }
  toggleIssueState(request: MsgToggleIssueState): Promise<MsgToggleIssueStateResponse> {
    const data = MsgToggleIssueState.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleIssueState", data);
    return promise.then(data => MsgToggleIssueStateResponse.decode(new BinaryReader(data)));
  }
  addIssueAssignees(request: MsgAddIssueAssignees): Promise<MsgAddIssueAssigneesResponse> {
    const data = MsgAddIssueAssignees.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddIssueAssignees", data);
    return promise.then(data => MsgAddIssueAssigneesResponse.decode(new BinaryReader(data)));
  }
  removeIssueAssignees(request: MsgRemoveIssueAssignees): Promise<MsgRemoveIssueAssigneesResponse> {
    const data = MsgRemoveIssueAssignees.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemoveIssueAssignees", data);
    return promise.then(data => MsgRemoveIssueAssigneesResponse.decode(new BinaryReader(data)));
  }
  addIssueLabels(request: MsgAddIssueLabels): Promise<MsgAddIssueLabelsResponse> {
    const data = MsgAddIssueLabels.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddIssueLabels", data);
    return promise.then(data => MsgAddIssueLabelsResponse.decode(new BinaryReader(data)));
  }
  removeIssueLabels(request: MsgRemoveIssueLabels): Promise<MsgRemoveIssueLabelsResponse> {
    const data = MsgRemoveIssueLabels.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemoveIssueLabels", data);
    return promise.then(data => MsgRemoveIssueLabelsResponse.decode(new BinaryReader(data)));
  }
  deleteIssue(request: MsgDeleteIssue): Promise<MsgDeleteIssueResponse> {
    const data = MsgDeleteIssue.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteIssue", data);
    return promise.then(data => MsgDeleteIssueResponse.decode(new BinaryReader(data)));
  }
  createRepository(request: MsgCreateRepository): Promise<MsgCreateRepositoryResponse> {
    const data = MsgCreateRepository.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateRepository", data);
    return promise.then(data => MsgCreateRepositoryResponse.decode(new BinaryReader(data)));
  }
  invokeForkRepository(request: MsgInvokeForkRepository): Promise<MsgInvokeForkRepositoryResponse> {
    const data = MsgInvokeForkRepository.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "InvokeForkRepository", data);
    return promise.then(data => MsgInvokeForkRepositoryResponse.decode(new BinaryReader(data)));
  }
  forkRepository(request: MsgForkRepository): Promise<MsgForkRepositoryResponse> {
    const data = MsgForkRepository.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ForkRepository", data);
    return promise.then(data => MsgForkRepositoryResponse.decode(new BinaryReader(data)));
  }
  forkRepositorySuccess(request: MsgForkRepositorySuccess): Promise<MsgForkRepositorySuccessResponse> {
    const data = MsgForkRepositorySuccess.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ForkRepositorySuccess", data);
    return promise.then(data => MsgForkRepositorySuccessResponse.decode(new BinaryReader(data)));
  }
  renameRepository(request: MsgRenameRepository): Promise<MsgRenameRepositoryResponse> {
    const data = MsgRenameRepository.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RenameRepository", data);
    return promise.then(data => MsgRenameRepositoryResponse.decode(new BinaryReader(data)));
  }
  updateRepositoryDescription(request: MsgUpdateRepositoryDescription): Promise<MsgUpdateRepositoryDescriptionResponse> {
    const data = MsgUpdateRepositoryDescription.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateRepositoryDescription", data);
    return promise.then(data => MsgUpdateRepositoryDescriptionResponse.decode(new BinaryReader(data)));
  }
  toggleRepositoryArchived(request: MsgToggleRepositoryArchived): Promise<MsgToggleRepositoryArchivedResponse> {
    const data = MsgToggleRepositoryArchived.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleRepositoryArchived", data);
    return promise.then(data => MsgToggleRepositoryArchivedResponse.decode(new BinaryReader(data)));
  }
  changeOwner(request: MsgChangeOwner): Promise<MsgChangeOwnerResponse> {
    const data = MsgChangeOwner.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ChangeOwner", data);
    return promise.then(data => MsgChangeOwnerResponse.decode(new BinaryReader(data)));
  }
  updateRepositoryCollaborator(request: MsgUpdateRepositoryCollaborator): Promise<MsgUpdateRepositoryCollaboratorResponse> {
    const data = MsgUpdateRepositoryCollaborator.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateRepositoryCollaborator", data);
    return promise.then(data => MsgUpdateRepositoryCollaboratorResponse.decode(new BinaryReader(data)));
  }
  removeRepositoryCollaborator(request: MsgRemoveRepositoryCollaborator): Promise<MsgRemoveRepositoryCollaboratorResponse> {
    const data = MsgRemoveRepositoryCollaborator.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "RemoveRepositoryCollaborator", data);
    return promise.then(data => MsgRemoveRepositoryCollaboratorResponse.decode(new BinaryReader(data)));
  }
  createRepositoryLabel(request: MsgCreateRepositoryLabel): Promise<MsgCreateRepositoryLabelResponse> {
    const data = MsgCreateRepositoryLabel.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateRepositoryLabel", data);
    return promise.then(data => MsgCreateRepositoryLabelResponse.decode(new BinaryReader(data)));
  }
  updateRepositoryLabel(request: MsgUpdateRepositoryLabel): Promise<MsgUpdateRepositoryLabelResponse> {
    const data = MsgUpdateRepositoryLabel.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateRepositoryLabel", data);
    return promise.then(data => MsgUpdateRepositoryLabelResponse.decode(new BinaryReader(data)));
  }
  deleteRepositoryLabel(request: MsgDeleteRepositoryLabel): Promise<MsgDeleteRepositoryLabelResponse> {
    const data = MsgDeleteRepositoryLabel.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteRepositoryLabel", data);
    return promise.then(data => MsgDeleteRepositoryLabelResponse.decode(new BinaryReader(data)));
  }
  setDefaultBranch(request: MsgSetDefaultBranch): Promise<MsgSetDefaultBranchResponse> {
    const data = MsgSetDefaultBranch.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "SetDefaultBranch", data);
    return promise.then(data => MsgSetDefaultBranchResponse.decode(new BinaryReader(data)));
  }
  toggleRepositoryForking(request: MsgToggleRepositoryForking): Promise<MsgToggleRepositoryForkingResponse> {
    const data = MsgToggleRepositoryForking.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleRepositoryForking", data);
    return promise.then(data => MsgToggleRepositoryForkingResponse.decode(new BinaryReader(data)));
  }
  toggleArweaveBackup(request: MsgToggleArweaveBackup): Promise<MsgToggleArweaveBackupResponse> {
    const data = MsgToggleArweaveBackup.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "ToggleArweaveBackup", data);
    return promise.then(data => MsgToggleArweaveBackupResponse.decode(new BinaryReader(data)));
  }
  deleteRepository(request: MsgDeleteRepository): Promise<MsgDeleteRepositoryResponse> {
    const data = MsgDeleteRepository.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteRepository", data);
    return promise.then(data => MsgDeleteRepositoryResponse.decode(new BinaryReader(data)));
  }
  createUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "CreateUser", data);
    return promise.then(data => MsgCreateUserResponse.decode(new BinaryReader(data)));
  }
  updateUserUsername(request: MsgUpdateUserUsername): Promise<MsgUpdateUserUsernameResponse> {
    const data = MsgUpdateUserUsername.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateUserUsername", data);
    return promise.then(data => MsgUpdateUserUsernameResponse.decode(new BinaryReader(data)));
  }
  updateUserName(request: MsgUpdateUserName): Promise<MsgUpdateUserNameResponse> {
    const data = MsgUpdateUserName.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateUserName", data);
    return promise.then(data => MsgUpdateUserNameResponse.decode(new BinaryReader(data)));
  }
  updateUserBio(request: MsgUpdateUserBio): Promise<MsgUpdateUserBioResponse> {
    const data = MsgUpdateUserBio.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateUserBio", data);
    return promise.then(data => MsgUpdateUserBioResponse.decode(new BinaryReader(data)));
  }
  updateUserAvatar(request: MsgUpdateUserAvatar): Promise<MsgUpdateUserAvatarResponse> {
    const data = MsgUpdateUserAvatar.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateUserAvatar", data);
    return promise.then(data => MsgUpdateUserAvatarResponse.decode(new BinaryReader(data)));
  }
  deleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DeleteUser", data);
    return promise.then(data => MsgDeleteUserResponse.decode(new BinaryReader(data)));
  }
  updateRepositoryBackupRef(request: MsgUpdateRepositoryBackupRef): Promise<MsgUpdateRepositoryBackupRefResponse> {
    const data = MsgUpdateRepositoryBackupRef.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateRepositoryBackupRef", data);
    return promise.then(data => MsgUpdateRepositoryBackupRefResponse.decode(new BinaryReader(data)));
  }
  addRepositoryBackupRef(request: MsgAddRepositoryBackupRef): Promise<MsgAddRepositoryBackupRefResponse> {
    const data = MsgAddRepositoryBackupRef.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "AddRepositoryBackupRef", data);
    return promise.then(data => MsgAddRepositoryBackupRefResponse.decode(new BinaryReader(data)));
  }
  updateUserPinnedRepositories(request: MsgUpdateUserPinnedRepositories): Promise<MsgUpdateUserPinnedRepositoriesResponse> {
    const data = MsgUpdateUserPinnedRepositories.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateUserPinnedRepositories", data);
    return promise.then(data => MsgUpdateUserPinnedRepositoriesResponse.decode(new BinaryReader(data)));
  }
  updateDaoPinnedRepositories(request: MsgUpdateDaoPinnedRepositories): Promise<MsgUpdateDaoPinnedRepositoriesResponse> {
    const data = MsgUpdateDaoPinnedRepositories.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateDaoPinnedRepositories", data);
    return promise.then(data => MsgUpdateDaoPinnedRepositoriesResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  distributePlatformIncentives(request: MsgDistributePlatformIncentives): Promise<MsgDistributePlatformIncentivesResponse> {
    const data = MsgDistributePlatformIncentives.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.gitopia.Msg", "DistributePlatformIncentives", data);
    return promise.then(data => MsgDistributePlatformIncentivesResponse.decode(new BinaryReader(data)));
  }
}