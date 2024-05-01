import { RepositoryId, RepositoryIdAmino, RepositoryIdSDKType, RepositoryBackup_Store, repositoryBackup_StoreFromJSON } from "./repository";
import { TaskType, TaskState, taskTypeFromJSON, taskStateFromJSON } from "./task";
import { MemberRole, memberRoleFromJSON } from "./member";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BountyParent, bountyParentFromJSON } from "./bounty";
import { CommentParent, commentParentFromJSON } from "./comment";
import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum ProviderPermission {
  GIT_SERVER = 0,
  STORAGE = 1,
  UNRECOGNIZED = -1,
}
export const ProviderPermissionSDKType = ProviderPermission;
export const ProviderPermissionAmino = ProviderPermission;
export function providerPermissionFromJSON(object: any): ProviderPermission {
  switch (object) {
    case 0:
    case "GIT_SERVER":
      return ProviderPermission.GIT_SERVER;
    case 1:
    case "STORAGE":
      return ProviderPermission.STORAGE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProviderPermission.UNRECOGNIZED;
  }
}
export function providerPermissionToJSON(object: ProviderPermission): string {
  switch (object) {
    case ProviderPermission.GIT_SERVER:
      return "GIT_SERVER";
    case ProviderPermission.STORAGE:
      return "STORAGE";
    case ProviderPermission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface MsgExercise {
  creator: string;
  amount: Coin;
  to: string;
}
export interface MsgExerciseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgExercise";
  value: Uint8Array;
}
export interface MsgExerciseAmino {
  creator?: string;
  amount?: CoinAmino;
  to?: string;
}
export interface MsgExerciseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgExercise";
  value: MsgExerciseAmino;
}
export interface MsgExerciseSDKType {
  creator: string;
  amount: CoinSDKType;
  to: string;
}
export interface MsgExerciseResponse {}
export interface MsgExerciseResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgExerciseResponse";
  value: Uint8Array;
}
export interface MsgExerciseResponseAmino {}
export interface MsgExerciseResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgExerciseResponse";
  value: MsgExerciseResponseAmino;
}
export interface MsgExerciseResponseSDKType {}
export interface MsgToggleForcePush {
  creator: string;
  repositoryId: RepositoryId;
  branchName: string;
}
export interface MsgToggleForcePushProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush";
  value: Uint8Array;
}
export interface MsgToggleForcePushAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branchName?: string;
}
export interface MsgToggleForcePushAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleForcePush";
  value: MsgToggleForcePushAmino;
}
export interface MsgToggleForcePushSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branchName: string;
}
export interface MsgToggleForcePushResponse {}
export interface MsgToggleForcePushResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse";
  value: Uint8Array;
}
export interface MsgToggleForcePushResponseAmino {}
export interface MsgToggleForcePushResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse";
  value: MsgToggleForcePushResponseAmino;
}
export interface MsgToggleForcePushResponseSDKType {}
export interface MsgRevokeProviderPermission {
  creator: string;
  granter: string;
  provider: string;
  permission: ProviderPermission;
}
export interface MsgRevokeProviderPermissionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission";
  value: Uint8Array;
}
export interface MsgRevokeProviderPermissionAmino {
  creator?: string;
  granter?: string;
  provider?: string;
  permission?: ProviderPermission;
}
export interface MsgRevokeProviderPermissionAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission";
  value: MsgRevokeProviderPermissionAmino;
}
export interface MsgRevokeProviderPermissionSDKType {
  creator: string;
  granter: string;
  provider: string;
  permission: ProviderPermission;
}
export interface MsgRevokeProviderPermissionResponse {}
export interface MsgRevokeProviderPermissionResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse";
  value: Uint8Array;
}
export interface MsgRevokeProviderPermissionResponseAmino {}
export interface MsgRevokeProviderPermissionResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse";
  value: MsgRevokeProviderPermissionResponseAmino;
}
export interface MsgRevokeProviderPermissionResponseSDKType {}
export interface MsgAuthorizeProvider {
  creator: string;
  granter: string;
  provider: string;
  permission: ProviderPermission;
}
export interface MsgAuthorizeProviderProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider";
  value: Uint8Array;
}
export interface MsgAuthorizeProviderAmino {
  creator?: string;
  granter?: string;
  provider?: string;
  permission?: ProviderPermission;
}
export interface MsgAuthorizeProviderAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider";
  value: MsgAuthorizeProviderAmino;
}
export interface MsgAuthorizeProviderSDKType {
  creator: string;
  granter: string;
  provider: string;
  permission: ProviderPermission;
}
export interface MsgAuthorizeProviderResponse {}
export interface MsgAuthorizeProviderResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse";
  value: Uint8Array;
}
export interface MsgAuthorizeProviderResponseAmino {}
export interface MsgAuthorizeProviderResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse";
  value: MsgAuthorizeProviderResponseAmino;
}
export interface MsgAuthorizeProviderResponseSDKType {}
export interface MsgCreateTask {
  creator: string;
  taskType: TaskType;
  provider: string;
}
export interface MsgCreateTaskProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask";
  value: Uint8Array;
}
export interface MsgCreateTaskAmino {
  creator?: string;
  taskType?: TaskType;
  provider?: string;
}
export interface MsgCreateTaskAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateTask";
  value: MsgCreateTaskAmino;
}
export interface MsgCreateTaskSDKType {
  creator: string;
  taskType: TaskType;
  provider: string;
}
export interface MsgCreateTaskResponse {
  id: bigint;
}
export interface MsgCreateTaskResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTaskResponse";
  value: Uint8Array;
}
export interface MsgCreateTaskResponseAmino {
  id?: string;
}
export interface MsgCreateTaskResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateTaskResponse";
  value: MsgCreateTaskResponseAmino;
}
export interface MsgCreateTaskResponseSDKType {
  id: bigint;
}
export interface MsgUpdateTask {
  creator: string;
  id: bigint;
  state: TaskState;
  message: string;
}
export interface MsgUpdateTaskProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask";
  value: Uint8Array;
}
export interface MsgUpdateTaskAmino {
  creator?: string;
  id?: string;
  state?: TaskState;
  message?: string;
}
export interface MsgUpdateTaskAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateTask";
  value: MsgUpdateTaskAmino;
}
export interface MsgUpdateTaskSDKType {
  creator: string;
  id: bigint;
  state: TaskState;
  message: string;
}
export interface MsgUpdateTaskResponse {}
export interface MsgUpdateTaskResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse";
  value: Uint8Array;
}
export interface MsgUpdateTaskResponseAmino {}
export interface MsgUpdateTaskResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse";
  value: MsgUpdateTaskResponseAmino;
}
export interface MsgUpdateTaskResponseSDKType {}
export interface MsgDeleteTask {
  creator: string;
  id: bigint;
}
export interface MsgDeleteTaskProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask";
  value: Uint8Array;
}
export interface MsgDeleteTaskAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteTaskAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteTask";
  value: MsgDeleteTaskAmino;
}
export interface MsgDeleteTaskSDKType {
  creator: string;
  id: bigint;
}
export interface MsgUpdateRepositoryBackupRef {
  creator: string;
  repositoryId: RepositoryId;
  store: RepositoryBackup_Store;
  ref: string;
}
export interface MsgUpdateRepositoryBackupRefProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryBackupRefAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  store?: RepositoryBackup_Store;
  ref?: string;
}
export interface MsgUpdateRepositoryBackupRefAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef";
  value: MsgUpdateRepositoryBackupRefAmino;
}
export interface MsgUpdateRepositoryBackupRefSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  store: RepositoryBackup_Store;
  ref: string;
}
export interface MsgUpdateRepositoryBackupRefResponse {}
export interface MsgUpdateRepositoryBackupRefResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryBackupRefResponseAmino {}
export interface MsgUpdateRepositoryBackupRefResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse";
  value: MsgUpdateRepositoryBackupRefResponseAmino;
}
export interface MsgUpdateRepositoryBackupRefResponseSDKType {}
export interface MsgAddRepositoryBackupRef {
  creator: string;
  repositoryId: RepositoryId;
  store: RepositoryBackup_Store;
  ref: string;
}
export interface MsgAddRepositoryBackupRefProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef";
  value: Uint8Array;
}
export interface MsgAddRepositoryBackupRefAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  store?: RepositoryBackup_Store;
  ref?: string;
}
export interface MsgAddRepositoryBackupRefAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef";
  value: MsgAddRepositoryBackupRefAmino;
}
export interface MsgAddRepositoryBackupRefSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  store: RepositoryBackup_Store;
  ref: string;
}
export interface MsgAddRepositoryBackupRefResponse {}
export interface MsgAddRepositoryBackupRefResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse";
  value: Uint8Array;
}
export interface MsgAddRepositoryBackupRefResponseAmino {}
export interface MsgAddRepositoryBackupRefResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse";
  value: MsgAddRepositoryBackupRefResponseAmino;
}
export interface MsgAddRepositoryBackupRefResponseSDKType {}
export interface MsgDeleteTaskResponse {}
export interface MsgDeleteTaskResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse";
  value: Uint8Array;
}
export interface MsgDeleteTaskResponseAmino {}
export interface MsgDeleteTaskResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse";
  value: MsgDeleteTaskResponseAmino;
}
export interface MsgDeleteTaskResponseSDKType {}
export interface MsgDeleteStorageProviderResponse {}
export interface MsgDeleteStorageProviderResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse";
  value: Uint8Array;
}
export interface MsgDeleteStorageProviderResponseAmino {}
export interface MsgDeleteStorageProviderResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse";
  value: MsgDeleteStorageProviderResponseAmino;
}
export interface MsgDeleteStorageProviderResponseSDKType {}
export interface MsgSetBranch {
  creator: string;
  repositoryId: RepositoryId;
  branch: MsgSetBranch_Branch;
}
export interface MsgSetBranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch";
  value: Uint8Array;
}
export interface MsgSetBranchAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branch?: MsgSetBranch_BranchAmino;
}
export interface MsgSetBranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetBranch";
  value: MsgSetBranchAmino;
}
export interface MsgSetBranchSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branch: MsgSetBranch_BranchSDKType;
}
export interface MsgSetBranch_Branch {
  name: string;
  sha: string;
}
export interface MsgSetBranch_BranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Branch";
  value: Uint8Array;
}
export interface MsgSetBranch_BranchAmino {
  name?: string;
  sha?: string;
}
export interface MsgSetBranch_BranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.Branch";
  value: MsgSetBranch_BranchAmino;
}
export interface MsgSetBranch_BranchSDKType {
  name: string;
  sha: string;
}
export interface MsgSetBranchResponse {}
export interface MsgSetBranchResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranchResponse";
  value: Uint8Array;
}
export interface MsgSetBranchResponseAmino {}
export interface MsgSetBranchResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetBranchResponse";
  value: MsgSetBranchResponseAmino;
}
export interface MsgSetBranchResponseSDKType {}
export interface MsgSetDefaultBranch {
  creator: string;
  repositoryId: RepositoryId;
  branch: string;
}
export interface MsgSetDefaultBranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch";
  value: Uint8Array;
}
export interface MsgSetDefaultBranchAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branch?: string;
}
export interface MsgSetDefaultBranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch";
  value: MsgSetDefaultBranchAmino;
}
export interface MsgSetDefaultBranchSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branch: string;
}
export interface MsgSetDefaultBranchResponse {}
export interface MsgSetDefaultBranchResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse";
  value: Uint8Array;
}
export interface MsgSetDefaultBranchResponseAmino {}
export interface MsgSetDefaultBranchResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse";
  value: MsgSetDefaultBranchResponseAmino;
}
export interface MsgSetDefaultBranchResponseSDKType {}
export interface MsgMultiSetBranch {
  creator: string;
  repositoryId: RepositoryId;
  branches: MsgMultiSetBranch_Branch[];
}
export interface MsgMultiSetBranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch";
  value: Uint8Array;
}
export interface MsgMultiSetBranchAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branches?: MsgMultiSetBranch_BranchAmino[];
}
export interface MsgMultiSetBranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiSetBranch";
  value: MsgMultiSetBranchAmino;
}
export interface MsgMultiSetBranchSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branches: MsgMultiSetBranch_BranchSDKType[];
}
export interface MsgMultiSetBranch_Branch {
  name: string;
  sha: string;
}
export interface MsgMultiSetBranch_BranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Branch";
  value: Uint8Array;
}
export interface MsgMultiSetBranch_BranchAmino {
  name?: string;
  sha?: string;
}
export interface MsgMultiSetBranch_BranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.Branch";
  value: MsgMultiSetBranch_BranchAmino;
}
export interface MsgMultiSetBranch_BranchSDKType {
  name: string;
  sha: string;
}
export interface MsgMultiSetBranchResponse {}
export interface MsgMultiSetBranchResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse";
  value: Uint8Array;
}
export interface MsgMultiSetBranchResponseAmino {}
export interface MsgMultiSetBranchResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse";
  value: MsgMultiSetBranchResponseAmino;
}
export interface MsgMultiSetBranchResponseSDKType {}
export interface MsgDeleteBranch {
  creator: string;
  repositoryId: RepositoryId;
  branch: string;
}
export interface MsgDeleteBranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch";
  value: Uint8Array;
}
export interface MsgDeleteBranchAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branch?: string;
}
export interface MsgDeleteBranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteBranch";
  value: MsgDeleteBranchAmino;
}
export interface MsgDeleteBranchSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branch: string;
}
export interface MsgDeleteBranchResponse {}
export interface MsgDeleteBranchResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse";
  value: Uint8Array;
}
export interface MsgDeleteBranchResponseAmino {}
export interface MsgDeleteBranchResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse";
  value: MsgDeleteBranchResponseAmino;
}
export interface MsgDeleteBranchResponseSDKType {}
export interface MsgMultiDeleteBranch {
  creator: string;
  repositoryId: RepositoryId;
  branches: string[];
}
export interface MsgMultiDeleteBranchProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch";
  value: Uint8Array;
}
export interface MsgMultiDeleteBranchAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  branches?: string[];
}
export interface MsgMultiDeleteBranchAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch";
  value: MsgMultiDeleteBranchAmino;
}
export interface MsgMultiDeleteBranchSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  branches: string[];
}
export interface MsgMultiDeleteBranchResponse {}
export interface MsgMultiDeleteBranchResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse";
  value: Uint8Array;
}
export interface MsgMultiDeleteBranchResponseAmino {}
export interface MsgMultiDeleteBranchResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse";
  value: MsgMultiDeleteBranchResponseAmino;
}
export interface MsgMultiDeleteBranchResponseSDKType {}
export interface MsgSetTag {
  creator: string;
  repositoryId: RepositoryId;
  tag: MsgSetTag_Tag;
}
export interface MsgSetTagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag";
  value: Uint8Array;
}
export interface MsgSetTagAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  tag?: MsgSetTag_TagAmino;
}
export interface MsgSetTagAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetTag";
  value: MsgSetTagAmino;
}
export interface MsgSetTagSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  tag: MsgSetTag_TagSDKType;
}
export interface MsgSetTag_Tag {
  name: string;
  sha: string;
}
export interface MsgSetTag_TagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Tag";
  value: Uint8Array;
}
export interface MsgSetTag_TagAmino {
  name?: string;
  sha?: string;
}
export interface MsgSetTag_TagAminoMsg {
  type: "/gitopia.gitopia.gitopia.Tag";
  value: MsgSetTag_TagAmino;
}
export interface MsgSetTag_TagSDKType {
  name: string;
  sha: string;
}
export interface MsgSetTagResponse {}
export interface MsgSetTagResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetTagResponse";
  value: Uint8Array;
}
export interface MsgSetTagResponseAmino {}
export interface MsgSetTagResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetTagResponse";
  value: MsgSetTagResponseAmino;
}
export interface MsgSetTagResponseSDKType {}
export interface MsgMultiSetTag {
  creator: string;
  repositoryId: RepositoryId;
  tags: MsgMultiSetTag_Tag[];
}
export interface MsgMultiSetTagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag";
  value: Uint8Array;
}
export interface MsgMultiSetTagAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  tags?: MsgMultiSetTag_TagAmino[];
}
export interface MsgMultiSetTagAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiSetTag";
  value: MsgMultiSetTagAmino;
}
export interface MsgMultiSetTagSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  tags: MsgMultiSetTag_TagSDKType[];
}
export interface MsgMultiSetTag_Tag {
  name: string;
  sha: string;
}
export interface MsgMultiSetTag_TagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Tag";
  value: Uint8Array;
}
export interface MsgMultiSetTag_TagAmino {
  name?: string;
  sha?: string;
}
export interface MsgMultiSetTag_TagAminoMsg {
  type: "/gitopia.gitopia.gitopia.Tag";
  value: MsgMultiSetTag_TagAmino;
}
export interface MsgMultiSetTag_TagSDKType {
  name: string;
  sha: string;
}
export interface MsgMultiSetTagResponse {}
export interface MsgMultiSetTagResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse";
  value: Uint8Array;
}
export interface MsgMultiSetTagResponseAmino {}
export interface MsgMultiSetTagResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse";
  value: MsgMultiSetTagResponseAmino;
}
export interface MsgMultiSetTagResponseSDKType {}
export interface MsgDeleteTag {
  creator: string;
  repositoryId: RepositoryId;
  tag: string;
}
export interface MsgDeleteTagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag";
  value: Uint8Array;
}
export interface MsgDeleteTagAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  tag?: string;
}
export interface MsgDeleteTagAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteTag";
  value: MsgDeleteTagAmino;
}
export interface MsgDeleteTagSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  tag: string;
}
export interface MsgDeleteTagResponse {}
export interface MsgDeleteTagResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse";
  value: Uint8Array;
}
export interface MsgDeleteTagResponseAmino {}
export interface MsgDeleteTagResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse";
  value: MsgDeleteTagResponseAmino;
}
export interface MsgDeleteTagResponseSDKType {}
export interface MsgMultiDeleteTag {
  creator: string;
  repositoryId: RepositoryId;
  tags: string[];
}
export interface MsgMultiDeleteTagProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag";
  value: Uint8Array;
}
export interface MsgMultiDeleteTagAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  tags?: string[];
}
export interface MsgMultiDeleteTagAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag";
  value: MsgMultiDeleteTagAmino;
}
export interface MsgMultiDeleteTagSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  tags: string[];
}
export interface MsgMultiDeleteTagResponse {}
export interface MsgMultiDeleteTagResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse";
  value: Uint8Array;
}
export interface MsgMultiDeleteTagResponseAmino {}
export interface MsgMultiDeleteTagResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse";
  value: MsgMultiDeleteTagResponseAmino;
}
export interface MsgMultiDeleteTagResponseSDKType {}
export interface MsgAddMember {
  creator: string;
  daoId: string;
  userId: string;
  role: MemberRole;
}
export interface MsgAddMemberProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember";
  value: Uint8Array;
}
export interface MsgAddMemberAmino {
  creator?: string;
  daoId?: string;
  userId?: string;
  role?: MemberRole;
}
export interface MsgAddMemberAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddMember";
  value: MsgAddMemberAmino;
}
export interface MsgAddMemberSDKType {
  creator: string;
  daoId: string;
  userId: string;
  role: MemberRole;
}
export interface MsgAddMemberResponse {}
export interface MsgAddMemberResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddMemberResponse";
  value: Uint8Array;
}
export interface MsgAddMemberResponseAmino {}
export interface MsgAddMemberResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddMemberResponse";
  value: MsgAddMemberResponseAmino;
}
export interface MsgAddMemberResponseSDKType {}
export interface MsgUpdateMemberRole {
  creator: string;
  daoId: string;
  userId: string;
  role: MemberRole;
}
export interface MsgUpdateMemberRoleProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole";
  value: Uint8Array;
}
export interface MsgUpdateMemberRoleAmino {
  creator?: string;
  daoId?: string;
  userId?: string;
  role?: MemberRole;
}
export interface MsgUpdateMemberRoleAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole";
  value: MsgUpdateMemberRoleAmino;
}
export interface MsgUpdateMemberRoleSDKType {
  creator: string;
  daoId: string;
  userId: string;
  role: MemberRole;
}
export interface MsgUpdateMemberRoleResponse {}
export interface MsgUpdateMemberRoleResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse";
  value: Uint8Array;
}
export interface MsgUpdateMemberRoleResponseAmino {}
export interface MsgUpdateMemberRoleResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse";
  value: MsgUpdateMemberRoleResponseAmino;
}
export interface MsgUpdateMemberRoleResponseSDKType {}
export interface MsgRemoveMember {
  creator: string;
  daoId: string;
  userId: string;
}
export interface MsgRemoveMemberProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember";
  value: Uint8Array;
}
export interface MsgRemoveMemberAmino {
  creator?: string;
  daoId?: string;
  userId?: string;
}
export interface MsgRemoveMemberAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveMember";
  value: MsgRemoveMemberAmino;
}
export interface MsgRemoveMemberSDKType {
  creator: string;
  daoId: string;
  userId: string;
}
export interface MsgRemoveMemberResponse {}
export interface MsgRemoveMemberResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse";
  value: Uint8Array;
}
export interface MsgRemoveMemberResponseAmino {}
export interface MsgRemoveMemberResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse";
  value: MsgRemoveMemberResponseAmino;
}
export interface MsgRemoveMemberResponseSDKType {}
export interface MsgCreateBounty {
  creator: string;
  amount: Coin[];
  expiry: bigint;
  repositoryId: bigint;
  parentIid: bigint;
  parent: BountyParent;
}
export interface MsgCreateBountyProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty";
  value: Uint8Array;
}
export interface MsgCreateBountyAmino {
  creator?: string;
  amount?: CoinAmino[];
  expiry?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: BountyParent;
}
export interface MsgCreateBountyAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateBounty";
  value: MsgCreateBountyAmino;
}
export interface MsgCreateBountySDKType {
  creator: string;
  amount: CoinSDKType[];
  expiry: bigint;
  repositoryId: bigint;
  parentIid: bigint;
  parent: BountyParent;
}
export interface MsgCreateBountyResponse {
  id: bigint;
}
export interface MsgCreateBountyResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBountyResponse";
  value: Uint8Array;
}
export interface MsgCreateBountyResponseAmino {
  id?: string;
}
export interface MsgCreateBountyResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateBountyResponse";
  value: MsgCreateBountyResponseAmino;
}
export interface MsgCreateBountyResponseSDKType {
  id: bigint;
}
export interface MsgUpdateBountyExpiry {
  creator: string;
  id: bigint;
  expiry: bigint;
}
export interface MsgUpdateBountyExpiryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry";
  value: Uint8Array;
}
export interface MsgUpdateBountyExpiryAmino {
  creator?: string;
  id?: string;
  expiry?: string;
}
export interface MsgUpdateBountyExpiryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry";
  value: MsgUpdateBountyExpiryAmino;
}
export interface MsgUpdateBountyExpirySDKType {
  creator: string;
  id: bigint;
  expiry: bigint;
}
export interface MsgUpdateBountyExpiryResponse {}
export interface MsgUpdateBountyExpiryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse";
  value: Uint8Array;
}
export interface MsgUpdateBountyExpiryResponseAmino {}
export interface MsgUpdateBountyExpiryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse";
  value: MsgUpdateBountyExpiryResponseAmino;
}
export interface MsgUpdateBountyExpiryResponseSDKType {}
export interface MsgCloseBounty {
  creator: string;
  id: bigint;
}
export interface MsgCloseBountyProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty";
  value: Uint8Array;
}
export interface MsgCloseBountyAmino {
  creator?: string;
  id?: string;
}
export interface MsgCloseBountyAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCloseBounty";
  value: MsgCloseBountyAmino;
}
export interface MsgCloseBountySDKType {
  creator: string;
  id: bigint;
}
export interface MsgCloseBountyResponse {}
export interface MsgCloseBountyResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse";
  value: Uint8Array;
}
export interface MsgCloseBountyResponseAmino {}
export interface MsgCloseBountyResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse";
  value: MsgCloseBountyResponseAmino;
}
export interface MsgCloseBountyResponseSDKType {}
export interface MsgDeleteBounty {
  creator: string;
  id: bigint;
}
export interface MsgDeleteBountyProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty";
  value: Uint8Array;
}
export interface MsgDeleteBountyAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteBountyAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteBounty";
  value: MsgDeleteBountyAmino;
}
export interface MsgDeleteBountySDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteBountyResponse {}
export interface MsgDeleteBountyResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse";
  value: Uint8Array;
}
export interface MsgDeleteBountyResponseAmino {}
export interface MsgDeleteBountyResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse";
  value: MsgDeleteBountyResponseAmino;
}
export interface MsgDeleteBountyResponseSDKType {}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRelease {
  creator: string;
  repositoryId: RepositoryId;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: string;
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
}
export interface MsgCreateReleaseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease";
  value: Uint8Array;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateReleaseAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  tagName?: string;
  target?: string;
  name?: string;
  description?: string;
  attachments?: string;
  draft?: boolean;
  preRelease?: boolean;
  isTag?: boolean;
}
export interface MsgCreateReleaseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateRelease";
  value: MsgCreateReleaseAmino;
}
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateReleaseSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: string;
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
}
export interface MsgCreateReleaseResponse {
  id: bigint;
}
export interface MsgCreateReleaseResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateReleaseResponse";
  value: Uint8Array;
}
export interface MsgCreateReleaseResponseAmino {
  id?: string;
}
export interface MsgCreateReleaseResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateReleaseResponse";
  value: MsgCreateReleaseResponseAmino;
}
export interface MsgCreateReleaseResponseSDKType {
  id: bigint;
}
export interface MsgUpdateRelease {
  creator: string;
  id: bigint;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: string;
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
}
export interface MsgUpdateReleaseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease";
  value: Uint8Array;
}
export interface MsgUpdateReleaseAmino {
  creator?: string;
  id?: string;
  tagName?: string;
  target?: string;
  name?: string;
  description?: string;
  attachments?: string;
  draft?: boolean;
  preRelease?: boolean;
  isTag?: boolean;
}
export interface MsgUpdateReleaseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRelease";
  value: MsgUpdateReleaseAmino;
}
export interface MsgUpdateReleaseSDKType {
  creator: string;
  id: bigint;
  tagName: string;
  target: string;
  name: string;
  description: string;
  attachments: string;
  draft: boolean;
  preRelease: boolean;
  isTag: boolean;
}
export interface MsgUpdateReleaseResponse {}
export interface MsgUpdateReleaseResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse";
  value: Uint8Array;
}
export interface MsgUpdateReleaseResponseAmino {}
export interface MsgUpdateReleaseResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse";
  value: MsgUpdateReleaseResponseAmino;
}
export interface MsgUpdateReleaseResponseSDKType {}
export interface MsgDeleteRelease {
  creator: string;
  id: bigint;
}
export interface MsgDeleteReleaseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease";
  value: Uint8Array;
}
export interface MsgDeleteReleaseAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteReleaseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteRelease";
  value: MsgDeleteReleaseAmino;
}
export interface MsgDeleteReleaseSDKType {
  creator: string;
  id: bigint;
}
export interface MsgDeleteReleaseResponse {}
export interface MsgDeleteReleaseResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse";
  value: Uint8Array;
}
export interface MsgDeleteReleaseResponseAmino {}
export interface MsgDeleteReleaseResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse";
  value: MsgDeleteReleaseResponseAmino;
}
export interface MsgDeleteReleaseResponseSDKType {}
export interface MsgCreatePullRequest {
  creator: string;
  title: string;
  description: string;
  headBranch: string;
  headRepositoryId: RepositoryId;
  baseBranch: string;
  baseRepositoryId: RepositoryId;
  reviewers: string[];
  assignees: string[];
  labelIds: bigint[];
  issueIids: bigint[];
}
export interface MsgCreatePullRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest";
  value: Uint8Array;
}
export interface MsgCreatePullRequestAmino {
  creator?: string;
  title?: string;
  description?: string;
  headBranch?: string;
  headRepositoryId?: RepositoryIdAmino;
  baseBranch?: string;
  baseRepositoryId?: RepositoryIdAmino;
  reviewers?: string[];
  assignees?: string[];
  labelIds?: string[];
  issueIids?: string[];
}
export interface MsgCreatePullRequestAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreatePullRequest";
  value: MsgCreatePullRequestAmino;
}
export interface MsgCreatePullRequestSDKType {
  creator: string;
  title: string;
  description: string;
  headBranch: string;
  headRepositoryId: RepositoryIdSDKType;
  baseBranch: string;
  baseRepositoryId: RepositoryIdSDKType;
  reviewers: string[];
  assignees: string[];
  labelIds: bigint[];
  issueIids: bigint[];
}
export interface MsgCreatePullRequestResponse {
  id: bigint;
  iid: bigint;
}
export interface MsgCreatePullRequestResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequestResponse";
  value: Uint8Array;
}
export interface MsgCreatePullRequestResponseAmino {
  id?: string;
  iid?: string;
}
export interface MsgCreatePullRequestResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreatePullRequestResponse";
  value: MsgCreatePullRequestResponseAmino;
}
export interface MsgCreatePullRequestResponseSDKType {
  id: bigint;
  iid: bigint;
}
export interface MsgUpdatePullRequestTitle {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  title: string;
}
export interface MsgUpdatePullRequestTitleProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle";
  value: Uint8Array;
}
export interface MsgUpdatePullRequestTitleAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  title?: string;
}
export interface MsgUpdatePullRequestTitleAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle";
  value: MsgUpdatePullRequestTitleAmino;
}
export interface MsgUpdatePullRequestTitleSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  title: string;
}
export interface MsgUpdatePullRequestTitleResponse {}
export interface MsgUpdatePullRequestTitleResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse";
  value: Uint8Array;
}
export interface MsgUpdatePullRequestTitleResponseAmino {}
export interface MsgUpdatePullRequestTitleResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse";
  value: MsgUpdatePullRequestTitleResponseAmino;
}
export interface MsgUpdatePullRequestTitleResponseSDKType {}
export interface MsgUpdatePullRequestDescription {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  description: string;
}
export interface MsgUpdatePullRequestDescriptionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription";
  value: Uint8Array;
}
export interface MsgUpdatePullRequestDescriptionAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  description?: string;
}
export interface MsgUpdatePullRequestDescriptionAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription";
  value: MsgUpdatePullRequestDescriptionAmino;
}
export interface MsgUpdatePullRequestDescriptionSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  description: string;
}
export interface MsgUpdatePullRequestDescriptionResponse {}
export interface MsgUpdatePullRequestDescriptionResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse";
  value: Uint8Array;
}
export interface MsgUpdatePullRequestDescriptionResponseAmino {}
export interface MsgUpdatePullRequestDescriptionResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse";
  value: MsgUpdatePullRequestDescriptionResponseAmino;
}
export interface MsgUpdatePullRequestDescriptionResponseSDKType {}
export interface MsgInvokeMergePullRequest {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  provider: string;
}
export interface MsgInvokeMergePullRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest";
  value: Uint8Array;
}
export interface MsgInvokeMergePullRequestAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  provider?: string;
}
export interface MsgInvokeMergePullRequestAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest";
  value: MsgInvokeMergePullRequestAmino;
}
export interface MsgInvokeMergePullRequestSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  provider: string;
}
export interface MsgInvokeMergePullRequestResponse {}
export interface MsgInvokeMergePullRequestResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse";
  value: Uint8Array;
}
export interface MsgInvokeMergePullRequestResponseAmino {}
export interface MsgInvokeMergePullRequestResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse";
  value: MsgInvokeMergePullRequestResponseAmino;
}
export interface MsgInvokeMergePullRequestResponseSDKType {}
export interface MsgSetPullRequestState {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  state: string;
  mergeCommitSha: string;
  commentBody: string;
  taskId: bigint;
}
export interface MsgSetPullRequestStateProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState";
  value: Uint8Array;
}
export interface MsgSetPullRequestStateAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  state?: string;
  mergeCommitSha?: string;
  commentBody?: string;
  taskId?: string;
}
export interface MsgSetPullRequestStateAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetPullRequestState";
  value: MsgSetPullRequestStateAmino;
}
export interface MsgSetPullRequestStateSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  state: string;
  mergeCommitSha: string;
  commentBody: string;
  taskId: bigint;
}
export interface MsgSetPullRequestStateResponse {
  state: string;
}
export interface MsgSetPullRequestStateResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestStateResponse";
  value: Uint8Array;
}
export interface MsgSetPullRequestStateResponseAmino {
  state?: string;
}
export interface MsgSetPullRequestStateResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgSetPullRequestStateResponse";
  value: MsgSetPullRequestStateResponseAmino;
}
export interface MsgSetPullRequestStateResponseSDKType {
  state: string;
}
export interface MsgAddPullRequestReviewers {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  reviewers: string[];
}
export interface MsgAddPullRequestReviewersProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers";
  value: Uint8Array;
}
export interface MsgAddPullRequestReviewersAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  reviewers?: string[];
}
export interface MsgAddPullRequestReviewersAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers";
  value: MsgAddPullRequestReviewersAmino;
}
export interface MsgAddPullRequestReviewersSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  reviewers: string[];
}
export interface MsgAddPullRequestReviewersResponse {}
export interface MsgAddPullRequestReviewersResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse";
  value: Uint8Array;
}
export interface MsgAddPullRequestReviewersResponseAmino {}
export interface MsgAddPullRequestReviewersResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse";
  value: MsgAddPullRequestReviewersResponseAmino;
}
export interface MsgAddPullRequestReviewersResponseSDKType {}
export interface MsgRemovePullRequestReviewers {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  reviewers: string[];
}
export interface MsgRemovePullRequestReviewersProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers";
  value: Uint8Array;
}
export interface MsgRemovePullRequestReviewersAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  reviewers?: string[];
}
export interface MsgRemovePullRequestReviewersAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers";
  value: MsgRemovePullRequestReviewersAmino;
}
export interface MsgRemovePullRequestReviewersSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  reviewers: string[];
}
export interface MsgRemovePullRequestReviewersResponse {}
export interface MsgRemovePullRequestReviewersResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse";
  value: Uint8Array;
}
export interface MsgRemovePullRequestReviewersResponseAmino {}
export interface MsgRemovePullRequestReviewersResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse";
  value: MsgRemovePullRequestReviewersResponseAmino;
}
export interface MsgRemovePullRequestReviewersResponseSDKType {}
export interface MsgAddPullRequestAssignees {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgAddPullRequestAssigneesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees";
  value: Uint8Array;
}
export interface MsgAddPullRequestAssigneesAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  assignees?: string[];
}
export interface MsgAddPullRequestAssigneesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees";
  value: MsgAddPullRequestAssigneesAmino;
}
export interface MsgAddPullRequestAssigneesSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgAddPullRequestAssigneesResponse {}
export interface MsgAddPullRequestAssigneesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse";
  value: Uint8Array;
}
export interface MsgAddPullRequestAssigneesResponseAmino {}
export interface MsgAddPullRequestAssigneesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse";
  value: MsgAddPullRequestAssigneesResponseAmino;
}
export interface MsgAddPullRequestAssigneesResponseSDKType {}
export interface MsgRemovePullRequestAssignees {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgRemovePullRequestAssigneesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees";
  value: Uint8Array;
}
export interface MsgRemovePullRequestAssigneesAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  assignees?: string[];
}
export interface MsgRemovePullRequestAssigneesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees";
  value: MsgRemovePullRequestAssigneesAmino;
}
export interface MsgRemovePullRequestAssigneesSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgRemovePullRequestAssigneesResponse {}
export interface MsgRemovePullRequestAssigneesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse";
  value: Uint8Array;
}
export interface MsgRemovePullRequestAssigneesResponseAmino {}
export interface MsgRemovePullRequestAssigneesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse";
  value: MsgRemovePullRequestAssigneesResponseAmino;
}
export interface MsgRemovePullRequestAssigneesResponseSDKType {}
export interface MsgLinkPullRequestIssueByIid {
  creator: string;
  repositoryId: bigint;
  pullRequestIid: bigint;
  issueIid: bigint;
}
export interface MsgLinkPullRequestIssueByIidProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid";
  value: Uint8Array;
}
export interface MsgLinkPullRequestIssueByIidAmino {
  creator?: string;
  repositoryId?: string;
  pullRequestIid?: string;
  issueIid?: string;
}
export interface MsgLinkPullRequestIssueByIidAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid";
  value: MsgLinkPullRequestIssueByIidAmino;
}
export interface MsgLinkPullRequestIssueByIidSDKType {
  creator: string;
  repositoryId: bigint;
  pullRequestIid: bigint;
  issueIid: bigint;
}
export interface MsgLinkPullRequestIssueByIidResponse {}
export interface MsgLinkPullRequestIssueByIidResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse";
  value: Uint8Array;
}
export interface MsgLinkPullRequestIssueByIidResponseAmino {}
export interface MsgLinkPullRequestIssueByIidResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse";
  value: MsgLinkPullRequestIssueByIidResponseAmino;
}
export interface MsgLinkPullRequestIssueByIidResponseSDKType {}
export interface MsgUnlinkPullRequestIssueByIid {
  creator: string;
  repositoryId: bigint;
  pullRequestIid: bigint;
  issueIid: bigint;
}
export interface MsgUnlinkPullRequestIssueByIidProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid";
  value: Uint8Array;
}
export interface MsgUnlinkPullRequestIssueByIidAmino {
  creator?: string;
  repositoryId?: string;
  pullRequestIid?: string;
  issueIid?: string;
}
export interface MsgUnlinkPullRequestIssueByIidAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid";
  value: MsgUnlinkPullRequestIssueByIidAmino;
}
export interface MsgUnlinkPullRequestIssueByIidSDKType {
  creator: string;
  repositoryId: bigint;
  pullRequestIid: bigint;
  issueIid: bigint;
}
export interface MsgUnlinkPullRequestIssueByIidResponse {}
export interface MsgUnlinkPullRequestIssueByIidResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse";
  value: Uint8Array;
}
export interface MsgUnlinkPullRequestIssueByIidResponseAmino {}
export interface MsgUnlinkPullRequestIssueByIidResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse";
  value: MsgUnlinkPullRequestIssueByIidResponseAmino;
}
export interface MsgUnlinkPullRequestIssueByIidResponseSDKType {}
export interface MsgAddPullRequestLabels {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgAddPullRequestLabelsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels";
  value: Uint8Array;
}
export interface MsgAddPullRequestLabelsAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  labelIds?: string[];
}
export interface MsgAddPullRequestLabelsAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels";
  value: MsgAddPullRequestLabelsAmino;
}
export interface MsgAddPullRequestLabelsSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgAddPullRequestLabelsResponse {}
export interface MsgAddPullRequestLabelsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse";
  value: Uint8Array;
}
export interface MsgAddPullRequestLabelsResponseAmino {}
export interface MsgAddPullRequestLabelsResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse";
  value: MsgAddPullRequestLabelsResponseAmino;
}
export interface MsgAddPullRequestLabelsResponseSDKType {}
export interface MsgRemovePullRequestLabels {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgRemovePullRequestLabelsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels";
  value: Uint8Array;
}
export interface MsgRemovePullRequestLabelsAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  labelIds?: string[];
}
export interface MsgRemovePullRequestLabelsAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels";
  value: MsgRemovePullRequestLabelsAmino;
}
export interface MsgRemovePullRequestLabelsSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgRemovePullRequestLabelsResponse {}
export interface MsgRemovePullRequestLabelsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse";
  value: Uint8Array;
}
export interface MsgRemovePullRequestLabelsResponseAmino {}
export interface MsgRemovePullRequestLabelsResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse";
  value: MsgRemovePullRequestLabelsResponseAmino;
}
export interface MsgRemovePullRequestLabelsResponseSDKType {}
export interface MsgDeletePullRequest {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
}
export interface MsgDeletePullRequestProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest";
  value: Uint8Array;
}
export interface MsgDeletePullRequestAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
}
export interface MsgDeletePullRequestAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeletePullRequest";
  value: MsgDeletePullRequestAmino;
}
export interface MsgDeletePullRequestSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
}
export interface MsgDeletePullRequestResponse {}
export interface MsgDeletePullRequestResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse";
  value: Uint8Array;
}
export interface MsgDeletePullRequestResponseAmino {}
export interface MsgDeletePullRequestResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse";
  value: MsgDeletePullRequestResponseAmino;
}
export interface MsgDeletePullRequestResponseSDKType {}
export interface MsgCreateDao {
  creator: string;
  name: string;
  description: string;
  avatarUrl: string;
  location: string;
  website: string;
}
export interface MsgCreateDaoProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao";
  value: Uint8Array;
}
export interface MsgCreateDaoAmino {
  creator?: string;
  name?: string;
  description?: string;
  avatarUrl?: string;
  location?: string;
  website?: string;
}
export interface MsgCreateDaoAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateDao";
  value: MsgCreateDaoAmino;
}
export interface MsgCreateDaoSDKType {
  creator: string;
  name: string;
  description: string;
  avatarUrl: string;
  location: string;
  website: string;
}
export interface MsgCreateDaoResponse {
  id: string;
}
export interface MsgCreateDaoResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDaoResponse";
  value: Uint8Array;
}
export interface MsgCreateDaoResponseAmino {
  id?: string;
}
export interface MsgCreateDaoResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateDaoResponse";
  value: MsgCreateDaoResponseAmino;
}
export interface MsgCreateDaoResponseSDKType {
  id: string;
}
export interface MsgRenameDao {
  creator: string;
  id: string;
  name: string;
}
export interface MsgRenameDaoProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao";
  value: Uint8Array;
}
export interface MsgRenameDaoAmino {
  creator?: string;
  id?: string;
  name?: string;
}
export interface MsgRenameDaoAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRenameDao";
  value: MsgRenameDaoAmino;
}
export interface MsgRenameDaoSDKType {
  creator: string;
  id: string;
  name: string;
}
export interface MsgRenameDaoResponse {}
export interface MsgRenameDaoResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse";
  value: Uint8Array;
}
export interface MsgRenameDaoResponseAmino {}
export interface MsgRenameDaoResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse";
  value: MsgRenameDaoResponseAmino;
}
export interface MsgRenameDaoResponseSDKType {}
export interface MsgUpdateDaoDescription {
  creator: string;
  id: string;
  description: string;
}
export interface MsgUpdateDaoDescriptionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription";
  value: Uint8Array;
}
export interface MsgUpdateDaoDescriptionAmino {
  creator?: string;
  id?: string;
  description?: string;
}
export interface MsgUpdateDaoDescriptionAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription";
  value: MsgUpdateDaoDescriptionAmino;
}
export interface MsgUpdateDaoDescriptionSDKType {
  creator: string;
  id: string;
  description: string;
}
export interface MsgUpdateDaoDescriptionResponse {}
export interface MsgUpdateDaoDescriptionResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse";
  value: Uint8Array;
}
export interface MsgUpdateDaoDescriptionResponseAmino {}
export interface MsgUpdateDaoDescriptionResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse";
  value: MsgUpdateDaoDescriptionResponseAmino;
}
export interface MsgUpdateDaoDescriptionResponseSDKType {}
export interface MsgUpdateDaoWebsite {
  creator: string;
  id: string;
  url: string;
}
export interface MsgUpdateDaoWebsiteProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite";
  value: Uint8Array;
}
export interface MsgUpdateDaoWebsiteAmino {
  creator?: string;
  id?: string;
  url?: string;
}
export interface MsgUpdateDaoWebsiteAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite";
  value: MsgUpdateDaoWebsiteAmino;
}
export interface MsgUpdateDaoWebsiteSDKType {
  creator: string;
  id: string;
  url: string;
}
export interface MsgUpdateDaoWebsiteResponse {}
export interface MsgUpdateDaoWebsiteResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse";
  value: Uint8Array;
}
export interface MsgUpdateDaoWebsiteResponseAmino {}
export interface MsgUpdateDaoWebsiteResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse";
  value: MsgUpdateDaoWebsiteResponseAmino;
}
export interface MsgUpdateDaoWebsiteResponseSDKType {}
export interface MsgUpdateDaoLocation {
  creator: string;
  id: string;
  location: string;
}
export interface MsgUpdateDaoLocationProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation";
  value: Uint8Array;
}
export interface MsgUpdateDaoLocationAmino {
  creator?: string;
  id?: string;
  location?: string;
}
export interface MsgUpdateDaoLocationAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation";
  value: MsgUpdateDaoLocationAmino;
}
export interface MsgUpdateDaoLocationSDKType {
  creator: string;
  id: string;
  location: string;
}
export interface MsgUpdateDaoLocationResponse {}
export interface MsgUpdateDaoLocationResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse";
  value: Uint8Array;
}
export interface MsgUpdateDaoLocationResponseAmino {}
export interface MsgUpdateDaoLocationResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse";
  value: MsgUpdateDaoLocationResponseAmino;
}
export interface MsgUpdateDaoLocationResponseSDKType {}
export interface MsgUpdateDaoAvatar {
  creator: string;
  id: string;
  url: string;
}
export interface MsgUpdateDaoAvatarProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar";
  value: Uint8Array;
}
export interface MsgUpdateDaoAvatarAmino {
  creator?: string;
  id?: string;
  url?: string;
}
export interface MsgUpdateDaoAvatarAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar";
  value: MsgUpdateDaoAvatarAmino;
}
export interface MsgUpdateDaoAvatarSDKType {
  creator: string;
  id: string;
  url: string;
}
export interface MsgUpdateDaoAvatarResponse {}
export interface MsgUpdateDaoAvatarResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse";
  value: Uint8Array;
}
export interface MsgUpdateDaoAvatarResponseAmino {}
export interface MsgUpdateDaoAvatarResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse";
  value: MsgUpdateDaoAvatarResponseAmino;
}
export interface MsgUpdateDaoAvatarResponseSDKType {}
export interface MsgDeleteDao {
  creator: string;
  id: string;
}
export interface MsgDeleteDaoProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao";
  value: Uint8Array;
}
export interface MsgDeleteDaoAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteDaoAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteDao";
  value: MsgDeleteDaoAmino;
}
export interface MsgDeleteDaoSDKType {
  creator: string;
  id: string;
}
export interface MsgDeleteDaoResponse {}
export interface MsgDeleteDaoResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse";
  value: Uint8Array;
}
export interface MsgDeleteDaoResponseAmino {}
export interface MsgDeleteDaoResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse";
  value: MsgDeleteDaoResponseAmino;
}
export interface MsgDeleteDaoResponseSDKType {}
export interface MsgCreateComment {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  body: string;
  attachments: Attachment[];
  diffHunk: string;
  path: string;
  position: bigint;
}
export interface MsgCreateCommentProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment";
  value: Uint8Array;
}
export interface MsgCreateCommentAmino {
  creator?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: CommentParent;
  body?: string;
  attachments?: AttachmentAmino[];
  diffHunk?: string;
  path?: string;
  position?: string;
}
export interface MsgCreateCommentAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateComment";
  value: MsgCreateCommentAmino;
}
export interface MsgCreateCommentSDKType {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  body: string;
  attachments: AttachmentSDKType[];
  diffHunk: string;
  path: string;
  position: bigint;
}
export interface MsgCreateCommentResponse {
  id: bigint;
}
export interface MsgCreateCommentResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateCommentResponse";
  value: Uint8Array;
}
export interface MsgCreateCommentResponseAmino {
  id?: string;
}
export interface MsgCreateCommentResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateCommentResponse";
  value: MsgCreateCommentResponseAmino;
}
export interface MsgCreateCommentResponseSDKType {
  id: bigint;
}
export interface MsgUpdateComment {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
  body: string;
  attachments: Attachment[];
}
export interface MsgUpdateCommentProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment";
  value: Uint8Array;
}
export interface MsgUpdateCommentAmino {
  creator?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: CommentParent;
  commentIid?: string;
  body?: string;
  attachments?: AttachmentAmino[];
}
export interface MsgUpdateCommentAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateComment";
  value: MsgUpdateCommentAmino;
}
export interface MsgUpdateCommentSDKType {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
  body: string;
  attachments: AttachmentSDKType[];
}
export interface MsgUpdateCommentResponse {}
export interface MsgUpdateCommentResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse";
  value: Uint8Array;
}
export interface MsgUpdateCommentResponseAmino {}
export interface MsgUpdateCommentResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse";
  value: MsgUpdateCommentResponseAmino;
}
export interface MsgUpdateCommentResponseSDKType {}
export interface MsgDeleteComment {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
}
export interface MsgDeleteCommentProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment";
  value: Uint8Array;
}
export interface MsgDeleteCommentAmino {
  creator?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: CommentParent;
  commentIid?: string;
}
export interface MsgDeleteCommentAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteComment";
  value: MsgDeleteCommentAmino;
}
export interface MsgDeleteCommentSDKType {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
}
export interface MsgDeleteCommentResponse {}
export interface MsgDeleteCommentResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse";
  value: Uint8Array;
}
export interface MsgDeleteCommentResponseAmino {}
export interface MsgDeleteCommentResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse";
  value: MsgDeleteCommentResponseAmino;
}
export interface MsgDeleteCommentResponseSDKType {}
export interface MsgToggleCommentResolved {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
}
export interface MsgToggleCommentResolvedProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved";
  value: Uint8Array;
}
export interface MsgToggleCommentResolvedAmino {
  creator?: string;
  repositoryId?: string;
  parentIid?: string;
  parent?: CommentParent;
  commentIid?: string;
}
export interface MsgToggleCommentResolvedAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved";
  value: MsgToggleCommentResolvedAmino;
}
export interface MsgToggleCommentResolvedSDKType {
  creator: string;
  repositoryId: bigint;
  parentIid: bigint;
  parent: CommentParent;
  commentIid: bigint;
}
export interface MsgToggleCommentResolvedResponse {
  resolved: boolean;
}
export interface MsgToggleCommentResolvedResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolvedResponse";
  value: Uint8Array;
}
export interface MsgToggleCommentResolvedResponseAmino {
  resolved?: boolean;
}
export interface MsgToggleCommentResolvedResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleCommentResolvedResponse";
  value: MsgToggleCommentResolvedResponseAmino;
}
export interface MsgToggleCommentResolvedResponseSDKType {
  resolved: boolean;
}
export interface MsgCreateIssue {
  creator: string;
  repositoryId: RepositoryId;
  title: string;
  description: string;
  labelIds: bigint[];
  weight: bigint;
  assignees: string[];
  bountyAmount: Coin[];
  bountyExpiry: bigint;
}
export interface MsgCreateIssueProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue";
  value: Uint8Array;
}
export interface MsgCreateIssueAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  title?: string;
  description?: string;
  labelIds?: string[];
  weight?: string;
  assignees?: string[];
  bountyAmount?: CoinAmino[];
  bountyExpiry?: string;
}
export interface MsgCreateIssueAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateIssue";
  value: MsgCreateIssueAmino;
}
export interface MsgCreateIssueSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  title: string;
  description: string;
  labelIds: bigint[];
  weight: bigint;
  assignees: string[];
  bountyAmount: CoinSDKType[];
  bountyExpiry: bigint;
}
export interface MsgCreateIssueResponse {
  id: bigint;
  iid: bigint;
}
export interface MsgCreateIssueResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssueResponse";
  value: Uint8Array;
}
export interface MsgCreateIssueResponseAmino {
  id?: string;
  iid?: string;
}
export interface MsgCreateIssueResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateIssueResponse";
  value: MsgCreateIssueResponseAmino;
}
export interface MsgCreateIssueResponseSDKType {
  id: bigint;
  iid: bigint;
}
export interface MsgUpdateIssueTitle {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  title: string;
}
export interface MsgUpdateIssueTitleProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle";
  value: Uint8Array;
}
export interface MsgUpdateIssueTitleAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  title?: string;
}
export interface MsgUpdateIssueTitleAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle";
  value: MsgUpdateIssueTitleAmino;
}
export interface MsgUpdateIssueTitleSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  title: string;
}
export interface MsgUpdateIssueTitleResponse {}
export interface MsgUpdateIssueTitleResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse";
  value: Uint8Array;
}
export interface MsgUpdateIssueTitleResponseAmino {}
export interface MsgUpdateIssueTitleResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse";
  value: MsgUpdateIssueTitleResponseAmino;
}
export interface MsgUpdateIssueTitleResponseSDKType {}
export interface MsgUpdateIssueDescription {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  description: string;
}
export interface MsgUpdateIssueDescriptionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription";
  value: Uint8Array;
}
export interface MsgUpdateIssueDescriptionAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  description?: string;
}
export interface MsgUpdateIssueDescriptionAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription";
  value: MsgUpdateIssueDescriptionAmino;
}
export interface MsgUpdateIssueDescriptionSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  description: string;
}
export interface MsgUpdateIssueDescriptionResponse {}
export interface MsgUpdateIssueDescriptionResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse";
  value: Uint8Array;
}
export interface MsgUpdateIssueDescriptionResponseAmino {}
export interface MsgUpdateIssueDescriptionResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse";
  value: MsgUpdateIssueDescriptionResponseAmino;
}
export interface MsgUpdateIssueDescriptionResponseSDKType {}
export interface MsgToggleIssueState {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  commentBody: string;
}
export interface MsgToggleIssueStateProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState";
  value: Uint8Array;
}
export interface MsgToggleIssueStateAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  commentBody?: string;
}
export interface MsgToggleIssueStateAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleIssueState";
  value: MsgToggleIssueStateAmino;
}
export interface MsgToggleIssueStateSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  commentBody: string;
}
export interface MsgToggleIssueStateResponse {
  state: string;
}
export interface MsgToggleIssueStateResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueStateResponse";
  value: Uint8Array;
}
export interface MsgToggleIssueStateResponseAmino {
  state?: string;
}
export interface MsgToggleIssueStateResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleIssueStateResponse";
  value: MsgToggleIssueStateResponseAmino;
}
export interface MsgToggleIssueStateResponseSDKType {
  state: string;
}
export interface MsgAddIssueAssignees {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgAddIssueAssigneesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees";
  value: Uint8Array;
}
export interface MsgAddIssueAssigneesAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  assignees?: string[];
}
export interface MsgAddIssueAssigneesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees";
  value: MsgAddIssueAssigneesAmino;
}
export interface MsgAddIssueAssigneesSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgAddIssueAssigneesResponse {}
export interface MsgAddIssueAssigneesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse";
  value: Uint8Array;
}
export interface MsgAddIssueAssigneesResponseAmino {}
export interface MsgAddIssueAssigneesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse";
  value: MsgAddIssueAssigneesResponseAmino;
}
export interface MsgAddIssueAssigneesResponseSDKType {}
export interface MsgRemoveIssueAssignees {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgRemoveIssueAssigneesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees";
  value: Uint8Array;
}
export interface MsgRemoveIssueAssigneesAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  assignees?: string[];
}
export interface MsgRemoveIssueAssigneesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees";
  value: MsgRemoveIssueAssigneesAmino;
}
export interface MsgRemoveIssueAssigneesSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  assignees: string[];
}
export interface MsgRemoveIssueAssigneesResponse {}
export interface MsgRemoveIssueAssigneesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse";
  value: Uint8Array;
}
export interface MsgRemoveIssueAssigneesResponseAmino {}
export interface MsgRemoveIssueAssigneesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse";
  value: MsgRemoveIssueAssigneesResponseAmino;
}
export interface MsgRemoveIssueAssigneesResponseSDKType {}
export interface MsgAddIssueLabels {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgAddIssueLabelsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels";
  value: Uint8Array;
}
export interface MsgAddIssueLabelsAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  labelIds?: string[];
}
export interface MsgAddIssueLabelsAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddIssueLabels";
  value: MsgAddIssueLabelsAmino;
}
export interface MsgAddIssueLabelsSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgAddIssueLabelsResponse {}
export interface MsgAddIssueLabelsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse";
  value: Uint8Array;
}
export interface MsgAddIssueLabelsResponseAmino {}
export interface MsgAddIssueLabelsResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse";
  value: MsgAddIssueLabelsResponseAmino;
}
export interface MsgAddIssueLabelsResponseSDKType {}
export interface MsgRemoveIssueLabels {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgRemoveIssueLabelsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels";
  value: Uint8Array;
}
export interface MsgRemoveIssueLabelsAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
  labelIds?: string[];
}
export interface MsgRemoveIssueLabelsAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels";
  value: MsgRemoveIssueLabelsAmino;
}
export interface MsgRemoveIssueLabelsSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
  labelIds: bigint[];
}
export interface MsgRemoveIssueLabelsResponse {}
export interface MsgRemoveIssueLabelsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse";
  value: Uint8Array;
}
export interface MsgRemoveIssueLabelsResponseAmino {}
export interface MsgRemoveIssueLabelsResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse";
  value: MsgRemoveIssueLabelsResponseAmino;
}
export interface MsgRemoveIssueLabelsResponseSDKType {}
export interface MsgDeleteIssue {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
}
export interface MsgDeleteIssueProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue";
  value: Uint8Array;
}
export interface MsgDeleteIssueAmino {
  creator?: string;
  repositoryId?: string;
  iid?: string;
}
export interface MsgDeleteIssueAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteIssue";
  value: MsgDeleteIssueAmino;
}
export interface MsgDeleteIssueSDKType {
  creator: string;
  repositoryId: bigint;
  iid: bigint;
}
export interface MsgDeleteIssueResponse {}
export interface MsgDeleteIssueResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse";
  value: Uint8Array;
}
export interface MsgDeleteIssueResponseAmino {}
export interface MsgDeleteIssueResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse";
  value: MsgDeleteIssueResponseAmino;
}
export interface MsgDeleteIssueResponseSDKType {}
export interface MsgCreateRepository {
  creator: string;
  name: string;
  owner: string;
  description: string;
}
export interface MsgCreateRepositoryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository";
  value: Uint8Array;
}
export interface MsgCreateRepositoryAmino {
  creator?: string;
  name?: string;
  owner?: string;
  description?: string;
}
export interface MsgCreateRepositoryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateRepository";
  value: MsgCreateRepositoryAmino;
}
export interface MsgCreateRepositorySDKType {
  creator: string;
  name: string;
  owner: string;
  description: string;
}
export interface MsgCreateRepositoryResponse {
  repositoryId: RepositoryId;
}
export interface MsgCreateRepositoryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryResponse";
  value: Uint8Array;
}
export interface MsgCreateRepositoryResponseAmino {
  repositoryId?: RepositoryIdAmino;
}
export interface MsgCreateRepositoryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateRepositoryResponse";
  value: MsgCreateRepositoryResponseAmino;
}
export interface MsgCreateRepositoryResponseSDKType {
  repositoryId: RepositoryIdSDKType;
}
export interface MsgInvokeForkRepository {
  creator: string;
  repositoryId: RepositoryId;
  forkRepositoryName: string;
  forkRepositoryDescription: string;
  branch: string;
  owner: string;
  provider: string;
}
export interface MsgInvokeForkRepositoryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository";
  value: Uint8Array;
}
export interface MsgInvokeForkRepositoryAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  forkRepositoryName?: string;
  forkRepositoryDescription?: string;
  branch?: string;
  owner?: string;
  provider?: string;
}
export interface MsgInvokeForkRepositoryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository";
  value: MsgInvokeForkRepositoryAmino;
}
export interface MsgInvokeForkRepositorySDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  forkRepositoryName: string;
  forkRepositoryDescription: string;
  branch: string;
  owner: string;
  provider: string;
}
export interface MsgInvokeForkRepositoryResponse {}
export interface MsgInvokeForkRepositoryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse";
  value: Uint8Array;
}
export interface MsgInvokeForkRepositoryResponseAmino {}
export interface MsgInvokeForkRepositoryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse";
  value: MsgInvokeForkRepositoryResponseAmino;
}
export interface MsgInvokeForkRepositoryResponseSDKType {}
export interface MsgForkRepository {
  creator: string;
  repositoryId: RepositoryId;
  forkRepositoryName: string;
  forkRepositoryDescription: string;
  branch: string;
  owner: string;
  taskId: bigint;
}
export interface MsgForkRepositoryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository";
  value: Uint8Array;
}
export interface MsgForkRepositoryAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  forkRepositoryName?: string;
  forkRepositoryDescription?: string;
  branch?: string;
  owner?: string;
  taskId?: string;
}
export interface MsgForkRepositoryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgForkRepository";
  value: MsgForkRepositoryAmino;
}
export interface MsgForkRepositorySDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  forkRepositoryName: string;
  forkRepositoryDescription: string;
  branch: string;
  owner: string;
  taskId: bigint;
}
export interface MsgForkRepositoryResponse {
  id: bigint;
}
export interface MsgForkRepositoryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositoryResponse";
  value: Uint8Array;
}
export interface MsgForkRepositoryResponseAmino {
  id?: string;
}
export interface MsgForkRepositoryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgForkRepositoryResponse";
  value: MsgForkRepositoryResponseAmino;
}
export interface MsgForkRepositoryResponseSDKType {
  id: bigint;
}
export interface MsgForkRepositorySuccess {
  creator: string;
  repositoryId: RepositoryId;
  taskId: bigint;
}
export interface MsgForkRepositorySuccessProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess";
  value: Uint8Array;
}
export interface MsgForkRepositorySuccessAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  taskId?: string;
}
export interface MsgForkRepositorySuccessAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess";
  value: MsgForkRepositorySuccessAmino;
}
export interface MsgForkRepositorySuccessSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  taskId: bigint;
}
export interface MsgForkRepositorySuccessResponse {
  id: bigint;
}
export interface MsgForkRepositorySuccessResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccessResponse";
  value: Uint8Array;
}
export interface MsgForkRepositorySuccessResponseAmino {
  id?: string;
}
export interface MsgForkRepositorySuccessResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccessResponse";
  value: MsgForkRepositorySuccessResponseAmino;
}
export interface MsgForkRepositorySuccessResponseSDKType {
  id: bigint;
}
export interface MsgRenameRepository {
  creator: string;
  repositoryId: RepositoryId;
  name: string;
}
export interface MsgRenameRepositoryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository";
  value: Uint8Array;
}
export interface MsgRenameRepositoryAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  name?: string;
}
export interface MsgRenameRepositoryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRenameRepository";
  value: MsgRenameRepositoryAmino;
}
export interface MsgRenameRepositorySDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  name: string;
}
export interface MsgRenameRepositoryResponse {}
export interface MsgRenameRepositoryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse";
  value: Uint8Array;
}
export interface MsgRenameRepositoryResponseAmino {}
export interface MsgRenameRepositoryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse";
  value: MsgRenameRepositoryResponseAmino;
}
export interface MsgRenameRepositoryResponseSDKType {}
export interface MsgUpdateRepositoryDescription {
  creator: string;
  repositoryId: RepositoryId;
  description: string;
}
export interface MsgUpdateRepositoryDescriptionProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryDescriptionAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  description?: string;
}
export interface MsgUpdateRepositoryDescriptionAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription";
  value: MsgUpdateRepositoryDescriptionAmino;
}
export interface MsgUpdateRepositoryDescriptionSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  description: string;
}
export interface MsgUpdateRepositoryDescriptionResponse {}
export interface MsgUpdateRepositoryDescriptionResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryDescriptionResponseAmino {}
export interface MsgUpdateRepositoryDescriptionResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse";
  value: MsgUpdateRepositoryDescriptionResponseAmino;
}
export interface MsgUpdateRepositoryDescriptionResponseSDKType {}
export interface MsgToggleRepositoryArchived {
  creator: string;
  repositoryId: RepositoryId;
}
export interface MsgToggleRepositoryArchivedProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived";
  value: Uint8Array;
}
export interface MsgToggleRepositoryArchivedAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
}
export interface MsgToggleRepositoryArchivedAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived";
  value: MsgToggleRepositoryArchivedAmino;
}
export interface MsgToggleRepositoryArchivedSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
}
export interface MsgToggleRepositoryArchivedResponse {}
export interface MsgToggleRepositoryArchivedResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse";
  value: Uint8Array;
}
export interface MsgToggleRepositoryArchivedResponseAmino {}
export interface MsgToggleRepositoryArchivedResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse";
  value: MsgToggleRepositoryArchivedResponseAmino;
}
export interface MsgToggleRepositoryArchivedResponseSDKType {}
export interface MsgChangeOwner {
  creator: string;
  repositoryId: RepositoryId;
  owner: string;
}
export interface MsgChangeOwnerProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner";
  value: Uint8Array;
}
export interface MsgChangeOwnerAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  owner?: string;
}
export interface MsgChangeOwnerAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgChangeOwner";
  value: MsgChangeOwnerAmino;
}
export interface MsgChangeOwnerSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  owner: string;
}
export interface MsgChangeOwnerResponse {}
export interface MsgChangeOwnerResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse";
  value: Uint8Array;
}
export interface MsgChangeOwnerResponseAmino {}
export interface MsgChangeOwnerResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse";
  value: MsgChangeOwnerResponseAmino;
}
export interface MsgChangeOwnerResponseSDKType {}
export interface MsgUpdateRepositoryCollaborator {
  creator: string;
  repositoryId: RepositoryId;
  user: string;
  role: string;
}
export interface MsgUpdateRepositoryCollaboratorProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryCollaboratorAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  user?: string;
  role?: string;
}
export interface MsgUpdateRepositoryCollaboratorAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator";
  value: MsgUpdateRepositoryCollaboratorAmino;
}
export interface MsgUpdateRepositoryCollaboratorSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  user: string;
  role: string;
}
export interface MsgUpdateRepositoryCollaboratorResponse {}
export interface MsgUpdateRepositoryCollaboratorResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryCollaboratorResponseAmino {}
export interface MsgUpdateRepositoryCollaboratorResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse";
  value: MsgUpdateRepositoryCollaboratorResponseAmino;
}
export interface MsgUpdateRepositoryCollaboratorResponseSDKType {}
export interface MsgRemoveRepositoryCollaborator {
  creator: string;
  repositoryId: RepositoryId;
  user: string;
}
export interface MsgRemoveRepositoryCollaboratorProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator";
  value: Uint8Array;
}
export interface MsgRemoveRepositoryCollaboratorAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  user?: string;
}
export interface MsgRemoveRepositoryCollaboratorAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator";
  value: MsgRemoveRepositoryCollaboratorAmino;
}
export interface MsgRemoveRepositoryCollaboratorSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  user: string;
}
export interface MsgRemoveRepositoryCollaboratorResponse {}
export interface MsgRemoveRepositoryCollaboratorResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse";
  value: Uint8Array;
}
export interface MsgRemoveRepositoryCollaboratorResponseAmino {}
export interface MsgRemoveRepositoryCollaboratorResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse";
  value: MsgRemoveRepositoryCollaboratorResponseAmino;
}
export interface MsgRemoveRepositoryCollaboratorResponseSDKType {}
export interface MsgCreateRepositoryLabel {
  creator: string;
  repositoryId: RepositoryId;
  name: string;
  color: string;
  description: string;
}
export interface MsgCreateRepositoryLabelProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel";
  value: Uint8Array;
}
export interface MsgCreateRepositoryLabelAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  name?: string;
  color?: string;
  description?: string;
}
export interface MsgCreateRepositoryLabelAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel";
  value: MsgCreateRepositoryLabelAmino;
}
export interface MsgCreateRepositoryLabelSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  name: string;
  color: string;
  description: string;
}
export interface MsgCreateRepositoryLabelResponse {
  id: bigint;
}
export interface MsgCreateRepositoryLabelResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabelResponse";
  value: Uint8Array;
}
export interface MsgCreateRepositoryLabelResponseAmino {
  id?: string;
}
export interface MsgCreateRepositoryLabelResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabelResponse";
  value: MsgCreateRepositoryLabelResponseAmino;
}
export interface MsgCreateRepositoryLabelResponseSDKType {
  id: bigint;
}
export interface MsgUpdateRepositoryLabel {
  creator: string;
  repositoryId: RepositoryId;
  labelId: bigint;
  name: string;
  color: string;
  description: string;
}
export interface MsgUpdateRepositoryLabelProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryLabelAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  labelId?: string;
  name?: string;
  color?: string;
  description?: string;
}
export interface MsgUpdateRepositoryLabelAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel";
  value: MsgUpdateRepositoryLabelAmino;
}
export interface MsgUpdateRepositoryLabelSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  labelId: bigint;
  name: string;
  color: string;
  description: string;
}
export interface MsgUpdateRepositoryLabelResponse {}
export interface MsgUpdateRepositoryLabelResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse";
  value: Uint8Array;
}
export interface MsgUpdateRepositoryLabelResponseAmino {}
export interface MsgUpdateRepositoryLabelResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse";
  value: MsgUpdateRepositoryLabelResponseAmino;
}
export interface MsgUpdateRepositoryLabelResponseSDKType {}
export interface MsgDeleteRepositoryLabel {
  creator: string;
  repositoryId: RepositoryId;
  labelId: bigint;
}
export interface MsgDeleteRepositoryLabelProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel";
  value: Uint8Array;
}
export interface MsgDeleteRepositoryLabelAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
  labelId?: string;
}
export interface MsgDeleteRepositoryLabelAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel";
  value: MsgDeleteRepositoryLabelAmino;
}
export interface MsgDeleteRepositoryLabelSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
  labelId: bigint;
}
export interface MsgDeleteRepositoryLabelResponse {}
export interface MsgDeleteRepositoryLabelResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse";
  value: Uint8Array;
}
export interface MsgDeleteRepositoryLabelResponseAmino {}
export interface MsgDeleteRepositoryLabelResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse";
  value: MsgDeleteRepositoryLabelResponseAmino;
}
export interface MsgDeleteRepositoryLabelResponseSDKType {}
export interface MsgToggleRepositoryForking {
  creator: string;
  repositoryId: RepositoryId;
}
export interface MsgToggleRepositoryForkingProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking";
  value: Uint8Array;
}
export interface MsgToggleRepositoryForkingAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
}
export interface MsgToggleRepositoryForkingAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking";
  value: MsgToggleRepositoryForkingAmino;
}
export interface MsgToggleRepositoryForkingSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
}
export interface MsgToggleRepositoryForkingResponse {
  allowForking: boolean;
}
export interface MsgToggleRepositoryForkingResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForkingResponse";
  value: Uint8Array;
}
export interface MsgToggleRepositoryForkingResponseAmino {
  allowForking?: boolean;
}
export interface MsgToggleRepositoryForkingResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForkingResponse";
  value: MsgToggleRepositoryForkingResponseAmino;
}
export interface MsgToggleRepositoryForkingResponseSDKType {
  allowForking: boolean;
}
export interface MsgToggleArweaveBackup {
  creator: string;
  repositoryId: RepositoryId;
}
export interface MsgToggleArweaveBackupProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup";
  value: Uint8Array;
}
export interface MsgToggleArweaveBackupAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
}
export interface MsgToggleArweaveBackupAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup";
  value: MsgToggleArweaveBackupAmino;
}
export interface MsgToggleArweaveBackupSDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
}
export interface MsgToggleArweaveBackupResponse {
  enableArweaveBackup: boolean;
}
export interface MsgToggleArweaveBackupResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackupResponse";
  value: Uint8Array;
}
export interface MsgToggleArweaveBackupResponseAmino {
  enableArweaveBackup?: boolean;
}
export interface MsgToggleArweaveBackupResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackupResponse";
  value: MsgToggleArweaveBackupResponseAmino;
}
export interface MsgToggleArweaveBackupResponseSDKType {
  enableArweaveBackup: boolean;
}
export interface MsgDeleteRepository {
  creator: string;
  repositoryId: RepositoryId;
}
export interface MsgDeleteRepositoryProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository";
  value: Uint8Array;
}
export interface MsgDeleteRepositoryAmino {
  creator?: string;
  repositoryId?: RepositoryIdAmino;
}
export interface MsgDeleteRepositoryAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteRepository";
  value: MsgDeleteRepositoryAmino;
}
export interface MsgDeleteRepositorySDKType {
  creator: string;
  repositoryId: RepositoryIdSDKType;
}
export interface MsgDeleteRepositoryResponse {}
export interface MsgDeleteRepositoryResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse";
  value: Uint8Array;
}
export interface MsgDeleteRepositoryResponseAmino {}
export interface MsgDeleteRepositoryResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse";
  value: MsgDeleteRepositoryResponseAmino;
}
export interface MsgDeleteRepositoryResponseSDKType {}
export interface MsgCreateUser {
  creator: string;
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
}
export interface MsgCreateUserProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser";
  value: Uint8Array;
}
export interface MsgCreateUserAmino {
  creator?: string;
  username?: string;
  name?: string;
  avatarUrl?: string;
  bio?: string;
}
export interface MsgCreateUserAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateUser";
  value: MsgCreateUserAmino;
}
export interface MsgCreateUserSDKType {
  creator: string;
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
}
export interface MsgCreateUserResponse {
  id: string;
}
export interface MsgCreateUserResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUserResponse";
  value: Uint8Array;
}
export interface MsgCreateUserResponseAmino {
  id?: string;
}
export interface MsgCreateUserResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgCreateUserResponse";
  value: MsgCreateUserResponseAmino;
}
export interface MsgCreateUserResponseSDKType {
  id: string;
}
export interface MsgUpdateUserUsername {
  creator: string;
  username: string;
}
export interface MsgUpdateUserUsernameProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername";
  value: Uint8Array;
}
export interface MsgUpdateUserUsernameAmino {
  creator?: string;
  username?: string;
}
export interface MsgUpdateUserUsernameAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername";
  value: MsgUpdateUserUsernameAmino;
}
export interface MsgUpdateUserUsernameSDKType {
  creator: string;
  username: string;
}
export interface MsgUpdateUserUsernameResponse {}
export interface MsgUpdateUserUsernameResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserUsernameResponseAmino {}
export interface MsgUpdateUserUsernameResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse";
  value: MsgUpdateUserUsernameResponseAmino;
}
export interface MsgUpdateUserUsernameResponseSDKType {}
export interface MsgUpdateUserName {
  creator: string;
  name: string;
}
export interface MsgUpdateUserNameProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName";
  value: Uint8Array;
}
export interface MsgUpdateUserNameAmino {
  creator?: string;
  name?: string;
}
export interface MsgUpdateUserNameAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserName";
  value: MsgUpdateUserNameAmino;
}
export interface MsgUpdateUserNameSDKType {
  creator: string;
  name: string;
}
export interface MsgUpdateUserNameResponse {}
export interface MsgUpdateUserNameResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserNameResponseAmino {}
export interface MsgUpdateUserNameResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse";
  value: MsgUpdateUserNameResponseAmino;
}
export interface MsgUpdateUserNameResponseSDKType {}
export interface MsgUpdateUserBio {
  creator: string;
  bio: string;
}
export interface MsgUpdateUserBioProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio";
  value: Uint8Array;
}
export interface MsgUpdateUserBioAmino {
  creator?: string;
  bio?: string;
}
export interface MsgUpdateUserBioAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserBio";
  value: MsgUpdateUserBioAmino;
}
export interface MsgUpdateUserBioSDKType {
  creator: string;
  bio: string;
}
export interface MsgUpdateUserBioResponse {}
export interface MsgUpdateUserBioResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserBioResponseAmino {}
export interface MsgUpdateUserBioResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse";
  value: MsgUpdateUserBioResponseAmino;
}
export interface MsgUpdateUserBioResponseSDKType {}
export interface MsgUpdateUserAvatar {
  creator: string;
  url: string;
}
export interface MsgUpdateUserAvatarProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar";
  value: Uint8Array;
}
export interface MsgUpdateUserAvatarAmino {
  creator?: string;
  url?: string;
}
export interface MsgUpdateUserAvatarAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar";
  value: MsgUpdateUserAvatarAmino;
}
export interface MsgUpdateUserAvatarSDKType {
  creator: string;
  url: string;
}
export interface MsgUpdateUserAvatarResponse {}
export interface MsgUpdateUserAvatarResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserAvatarResponseAmino {}
export interface MsgUpdateUserAvatarResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse";
  value: MsgUpdateUserAvatarResponseAmino;
}
export interface MsgUpdateUserAvatarResponseSDKType {}
export interface MsgDeleteUser {
  creator: string;
  id: string;
}
export interface MsgDeleteUserProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser";
  value: Uint8Array;
}
export interface MsgDeleteUserAmino {
  creator?: string;
  id?: string;
}
export interface MsgDeleteUserAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteUser";
  value: MsgDeleteUserAmino;
}
export interface MsgDeleteUserSDKType {
  creator: string;
  id: string;
}
export interface MsgDeleteUserResponse {}
export interface MsgDeleteUserResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse";
  value: Uint8Array;
}
export interface MsgDeleteUserResponseAmino {}
export interface MsgDeleteUserResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse";
  value: MsgDeleteUserResponseAmino;
}
export interface MsgDeleteUserResponseSDKType {}
export interface MsgUpdateUserPinnedRepositories {
  creator: string;
  repositoryId: bigint;
}
export interface MsgUpdateUserPinnedRepositoriesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories";
  value: Uint8Array;
}
export interface MsgUpdateUserPinnedRepositoriesAmino {
  creator?: string;
  repositoryId?: string;
}
export interface MsgUpdateUserPinnedRepositoriesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories";
  value: MsgUpdateUserPinnedRepositoriesAmino;
}
export interface MsgUpdateUserPinnedRepositoriesSDKType {
  creator: string;
  repositoryId: bigint;
}
export interface MsgUpdateUserPinnedRepositoriesResponse {}
export interface MsgUpdateUserPinnedRepositoriesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse";
  value: Uint8Array;
}
export interface MsgUpdateUserPinnedRepositoriesResponseAmino {}
export interface MsgUpdateUserPinnedRepositoriesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse";
  value: MsgUpdateUserPinnedRepositoriesResponseAmino;
}
export interface MsgUpdateUserPinnedRepositoriesResponseSDKType {}
export interface MsgUpdateDaoPinnedRepositories {
  creator: string;
  repositoryId: bigint;
  id: string;
}
export interface MsgUpdateDaoPinnedRepositoriesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories";
  value: Uint8Array;
}
export interface MsgUpdateDaoPinnedRepositoriesAmino {
  creator?: string;
  repositoryId?: string;
  id?: string;
}
export interface MsgUpdateDaoPinnedRepositoriesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories";
  value: MsgUpdateDaoPinnedRepositoriesAmino;
}
export interface MsgUpdateDaoPinnedRepositoriesSDKType {
  creator: string;
  repositoryId: bigint;
  id: string;
}
export interface MsgUpdateDaoPinnedRepositoriesResponse {}
export interface MsgUpdateDaoPinnedRepositoriesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse";
  value: Uint8Array;
}
export interface MsgUpdateDaoPinnedRepositoriesResponseAmino {}
export interface MsgUpdateDaoPinnedRepositoriesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse";
  value: MsgUpdateDaoPinnedRepositoriesResponseAmino;
}
export interface MsgUpdateDaoPinnedRepositoriesResponseSDKType {}
export interface MsgUpdateParams {
  /** authority is the address of the governance account. */
  authority: string;
  /**
   * params defines the x/gitopia parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params: Params;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams";
  value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  /**
   * params defines the x/gitopia parameters to update.
   * 
   * NOTE: All parameters must be supplied.
   */
  params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse";
  value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgDistributePlatformIncentives {
  /** authority is the address of the governance account. */
  authority: string;
  addresses: MsgDistributePlatformIncentives_Address[];
}
export interface MsgDistributePlatformIncentivesProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives";
  value: Uint8Array;
}
export interface MsgDistributePlatformIncentivesAmino {
  /** authority is the address of the governance account. */
  authority?: string;
  addresses?: MsgDistributePlatformIncentives_AddressAmino[];
}
export interface MsgDistributePlatformIncentivesAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives";
  value: MsgDistributePlatformIncentivesAmino;
}
export interface MsgDistributePlatformIncentivesSDKType {
  authority: string;
  addresses: MsgDistributePlatformIncentives_AddressSDKType[];
}
export interface MsgDistributePlatformIncentives_Address {
  address: string;
  amount: Coin;
}
export interface MsgDistributePlatformIncentives_AddressProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Address";
  value: Uint8Array;
}
export interface MsgDistributePlatformIncentives_AddressAmino {
  address?: string;
  amount?: CoinAmino;
}
export interface MsgDistributePlatformIncentives_AddressAminoMsg {
  type: "/gitopia.gitopia.gitopia.Address";
  value: MsgDistributePlatformIncentives_AddressAmino;
}
export interface MsgDistributePlatformIncentives_AddressSDKType {
  address: string;
  amount: CoinSDKType;
}
export interface MsgDistributePlatformIncentivesResponse {}
export interface MsgDistributePlatformIncentivesResponseProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse";
  value: Uint8Array;
}
export interface MsgDistributePlatformIncentivesResponseAmino {}
export interface MsgDistributePlatformIncentivesResponseAminoMsg {
  type: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse";
  value: MsgDistributePlatformIncentivesResponseAmino;
}
export interface MsgDistributePlatformIncentivesResponseSDKType {}
function createBaseMsgExercise(): MsgExercise {
  return {
    creator: "",
    amount: Coin.fromPartial({}),
    to: ""
  };
}
export const MsgExercise = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
  encode(message: MsgExercise, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== "") {
      writer.uint32(26).string(message.to);
    }
    return writer;
  },
  fromJSON(object: any): MsgExercise {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      to: isSet(object.to) ? String(object.to) : ""
    };
  },
  fromPartial(object: Partial<MsgExercise>): MsgExercise {
    const message = createBaseMsgExercise();
    message.creator = object.creator ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.to = object.to ?? "";
    return message;
  },
  fromAmino(object: MsgExerciseAmino): MsgExercise {
    const message = createBaseMsgExercise();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    return message;
  },
  toAmino(message: MsgExercise): MsgExerciseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.to = message.to === "" ? undefined : message.to;
    return obj;
  },
  fromAminoMsg(object: MsgExerciseAminoMsg): MsgExercise {
    return MsgExercise.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExerciseProtoMsg): MsgExercise {
    return MsgExercise.decode(message.value);
  },
  toProto(message: MsgExercise): Uint8Array {
    return MsgExercise.encode(message).finish();
  },
  toProtoMsg(message: MsgExercise): MsgExerciseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgExercise",
      value: MsgExercise.encode(message).finish()
    };
  }
};
function createBaseMsgExerciseResponse(): MsgExerciseResponse {
  return {};
}
export const MsgExerciseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgExerciseResponse",
  encode(_: MsgExerciseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgExerciseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgExerciseResponse>): MsgExerciseResponse {
    const message = createBaseMsgExerciseResponse();
    return message;
  },
  fromAmino(_: MsgExerciseResponseAmino): MsgExerciseResponse {
    const message = createBaseMsgExerciseResponse();
    return message;
  },
  toAmino(_: MsgExerciseResponse): MsgExerciseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExerciseResponseAminoMsg): MsgExerciseResponse {
    return MsgExerciseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExerciseResponseProtoMsg): MsgExerciseResponse {
    return MsgExerciseResponse.decode(message.value);
  },
  toProto(message: MsgExerciseResponse): Uint8Array {
    return MsgExerciseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExerciseResponse): MsgExerciseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgExerciseResponse",
      value: MsgExerciseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleForcePush(): MsgToggleForcePush {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branchName: ""
  };
}
export const MsgToggleForcePush = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
  encode(message: MsgToggleForcePush, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.branchName !== "") {
      writer.uint32(26).string(message.branchName);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleForcePush {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branchName: isSet(object.branchName) ? String(object.branchName) : ""
    };
  },
  fromPartial(object: Partial<MsgToggleForcePush>): MsgToggleForcePush {
    const message = createBaseMsgToggleForcePush();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branchName = object.branchName ?? "";
    return message;
  },
  fromAmino(object: MsgToggleForcePushAmino): MsgToggleForcePush {
    const message = createBaseMsgToggleForcePush();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.branchName !== undefined && object.branchName !== null) {
      message.branchName = object.branchName;
    }
    return message;
  },
  toAmino(message: MsgToggleForcePush): MsgToggleForcePushAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.branchName = message.branchName === "" ? undefined : message.branchName;
    return obj;
  },
  fromAminoMsg(object: MsgToggleForcePushAminoMsg): MsgToggleForcePush {
    return MsgToggleForcePush.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleForcePushProtoMsg): MsgToggleForcePush {
    return MsgToggleForcePush.decode(message.value);
  },
  toProto(message: MsgToggleForcePush): Uint8Array {
    return MsgToggleForcePush.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleForcePush): MsgToggleForcePushProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePush",
      value: MsgToggleForcePush.encode(message).finish()
    };
  }
};
function createBaseMsgToggleForcePushResponse(): MsgToggleForcePushResponse {
  return {};
}
export const MsgToggleForcePushResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse",
  encode(_: MsgToggleForcePushResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgToggleForcePushResponse {
    return {};
  },
  fromPartial(_: Partial<MsgToggleForcePushResponse>): MsgToggleForcePushResponse {
    const message = createBaseMsgToggleForcePushResponse();
    return message;
  },
  fromAmino(_: MsgToggleForcePushResponseAmino): MsgToggleForcePushResponse {
    const message = createBaseMsgToggleForcePushResponse();
    return message;
  },
  toAmino(_: MsgToggleForcePushResponse): MsgToggleForcePushResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleForcePushResponseAminoMsg): MsgToggleForcePushResponse {
    return MsgToggleForcePushResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleForcePushResponseProtoMsg): MsgToggleForcePushResponse {
    return MsgToggleForcePushResponse.decode(message.value);
  },
  toProto(message: MsgToggleForcePushResponse): Uint8Array {
    return MsgToggleForcePushResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleForcePushResponse): MsgToggleForcePushResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse",
      value: MsgToggleForcePushResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeProviderPermission(): MsgRevokeProviderPermission {
  return {
    creator: "",
    granter: "",
    provider: "",
    permission: 0
  };
}
export const MsgRevokeProviderPermission = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
  encode(message: MsgRevokeProviderPermission, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.permission !== 0) {
      writer.uint32(32).int32(message.permission);
    }
    return writer;
  },
  fromJSON(object: any): MsgRevokeProviderPermission {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      permission: isSet(object.permission) ? providerPermissionFromJSON(object.permission) : -1
    };
  },
  fromPartial(object: Partial<MsgRevokeProviderPermission>): MsgRevokeProviderPermission {
    const message = createBaseMsgRevokeProviderPermission();
    message.creator = object.creator ?? "";
    message.granter = object.granter ?? "";
    message.provider = object.provider ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
  fromAmino(object: MsgRevokeProviderPermissionAmino): MsgRevokeProviderPermission {
    const message = createBaseMsgRevokeProviderPermission();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    return message;
  },
  toAmino(message: MsgRevokeProviderPermission): MsgRevokeProviderPermissionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.permission = message.permission === 0 ? undefined : message.permission;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeProviderPermissionAminoMsg): MsgRevokeProviderPermission {
    return MsgRevokeProviderPermission.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeProviderPermissionProtoMsg): MsgRevokeProviderPermission {
    return MsgRevokeProviderPermission.decode(message.value);
  },
  toProto(message: MsgRevokeProviderPermission): Uint8Array {
    return MsgRevokeProviderPermission.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeProviderPermission): MsgRevokeProviderPermissionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermission",
      value: MsgRevokeProviderPermission.encode(message).finish()
    };
  }
};
function createBaseMsgRevokeProviderPermissionResponse(): MsgRevokeProviderPermissionResponse {
  return {};
}
export const MsgRevokeProviderPermissionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse",
  encode(_: MsgRevokeProviderPermissionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRevokeProviderPermissionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRevokeProviderPermissionResponse>): MsgRevokeProviderPermissionResponse {
    const message = createBaseMsgRevokeProviderPermissionResponse();
    return message;
  },
  fromAmino(_: MsgRevokeProviderPermissionResponseAmino): MsgRevokeProviderPermissionResponse {
    const message = createBaseMsgRevokeProviderPermissionResponse();
    return message;
  },
  toAmino(_: MsgRevokeProviderPermissionResponse): MsgRevokeProviderPermissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeProviderPermissionResponseAminoMsg): MsgRevokeProviderPermissionResponse {
    return MsgRevokeProviderPermissionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeProviderPermissionResponseProtoMsg): MsgRevokeProviderPermissionResponse {
    return MsgRevokeProviderPermissionResponse.decode(message.value);
  },
  toProto(message: MsgRevokeProviderPermissionResponse): Uint8Array {
    return MsgRevokeProviderPermissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeProviderPermissionResponse): MsgRevokeProviderPermissionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse",
      value: MsgRevokeProviderPermissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAuthorizeProvider(): MsgAuthorizeProvider {
  return {
    creator: "",
    granter: "",
    provider: "",
    permission: 0
  };
}
export const MsgAuthorizeProvider = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
  encode(message: MsgAuthorizeProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.granter !== "") {
      writer.uint32(18).string(message.granter);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    if (message.permission !== 0) {
      writer.uint32(32).int32(message.permission);
    }
    return writer;
  },
  fromJSON(object: any): MsgAuthorizeProvider {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      granter: isSet(object.granter) ? String(object.granter) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      permission: isSet(object.permission) ? providerPermissionFromJSON(object.permission) : -1
    };
  },
  fromPartial(object: Partial<MsgAuthorizeProvider>): MsgAuthorizeProvider {
    const message = createBaseMsgAuthorizeProvider();
    message.creator = object.creator ?? "";
    message.granter = object.granter ?? "";
    message.provider = object.provider ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
  fromAmino(object: MsgAuthorizeProviderAmino): MsgAuthorizeProvider {
    const message = createBaseMsgAuthorizeProvider();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    return message;
  },
  toAmino(message: MsgAuthorizeProvider): MsgAuthorizeProviderAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.provider = message.provider === "" ? undefined : message.provider;
    obj.permission = message.permission === 0 ? undefined : message.permission;
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeProviderAminoMsg): MsgAuthorizeProvider {
    return MsgAuthorizeProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAuthorizeProviderProtoMsg): MsgAuthorizeProvider {
    return MsgAuthorizeProvider.decode(message.value);
  },
  toProto(message: MsgAuthorizeProvider): Uint8Array {
    return MsgAuthorizeProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgAuthorizeProvider): MsgAuthorizeProviderProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProvider",
      value: MsgAuthorizeProvider.encode(message).finish()
    };
  }
};
function createBaseMsgAuthorizeProviderResponse(): MsgAuthorizeProviderResponse {
  return {};
}
export const MsgAuthorizeProviderResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse",
  encode(_: MsgAuthorizeProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAuthorizeProviderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAuthorizeProviderResponse>): MsgAuthorizeProviderResponse {
    const message = createBaseMsgAuthorizeProviderResponse();
    return message;
  },
  fromAmino(_: MsgAuthorizeProviderResponseAmino): MsgAuthorizeProviderResponse {
    const message = createBaseMsgAuthorizeProviderResponse();
    return message;
  },
  toAmino(_: MsgAuthorizeProviderResponse): MsgAuthorizeProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAuthorizeProviderResponseAminoMsg): MsgAuthorizeProviderResponse {
    return MsgAuthorizeProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAuthorizeProviderResponseProtoMsg): MsgAuthorizeProviderResponse {
    return MsgAuthorizeProviderResponse.decode(message.value);
  },
  toProto(message: MsgAuthorizeProviderResponse): Uint8Array {
    return MsgAuthorizeProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAuthorizeProviderResponse): MsgAuthorizeProviderResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse",
      value: MsgAuthorizeProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTask(): MsgCreateTask {
  return {
    creator: "",
    taskType: 0,
    provider: ""
  };
}
export const MsgCreateTask = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
  encode(message: MsgCreateTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.taskType !== 0) {
      writer.uint32(16).int32(message.taskType);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      taskType: isSet(object.taskType) ? taskTypeFromJSON(object.taskType) : -1,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateTask>): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    message.creator = object.creator ?? "";
    message.taskType = object.taskType ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: MsgCreateTaskAmino): MsgCreateTask {
    const message = createBaseMsgCreateTask();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.taskType !== undefined && object.taskType !== null) {
      message.taskType = object.taskType;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: MsgCreateTask): MsgCreateTaskAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.taskType = message.taskType === 0 ? undefined : message.taskType;
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTaskAminoMsg): MsgCreateTask {
    return MsgCreateTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTaskProtoMsg): MsgCreateTask {
    return MsgCreateTask.decode(message.value);
  },
  toProto(message: MsgCreateTask): Uint8Array {
    return MsgCreateTask.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTask): MsgCreateTaskProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTask",
      value: MsgCreateTask.encode(message).finish()
    };
  }
};
function createBaseMsgCreateTaskResponse(): MsgCreateTaskResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateTaskResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTaskResponse",
  encode(message: MsgCreateTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateTaskResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateTaskResponse>): MsgCreateTaskResponse {
    const message = createBaseMsgCreateTaskResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateTaskResponseAmino): MsgCreateTaskResponse {
    const message = createBaseMsgCreateTaskResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateTaskResponse): MsgCreateTaskResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateTaskResponseAminoMsg): MsgCreateTaskResponse {
    return MsgCreateTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateTaskResponseProtoMsg): MsgCreateTaskResponse {
    return MsgCreateTaskResponse.decode(message.value);
  },
  toProto(message: MsgCreateTaskResponse): Uint8Array {
    return MsgCreateTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateTaskResponse): MsgCreateTaskResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateTaskResponse",
      value: MsgCreateTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTask(): MsgUpdateTask {
  return {
    creator: "",
    id: BigInt(0),
    state: 0,
    message: ""
  };
}
export const MsgUpdateTask = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
  encode(message: MsgUpdateTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      state: isSet(object.state) ? taskStateFromJSON(object.state) : -1,
      message: isSet(object.message) ? String(object.message) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateTask>): MsgUpdateTask {
    const message = createBaseMsgUpdateTask();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.state = object.state ?? 0;
    message.message = object.message ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateTaskAmino): MsgUpdateTask {
    const message = createBaseMsgUpdateTask();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    return message;
  },
  toAmino(message: MsgUpdateTask): MsgUpdateTaskAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.message = message.message === "" ? undefined : message.message;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTaskAminoMsg): MsgUpdateTask {
    return MsgUpdateTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTaskProtoMsg): MsgUpdateTask {
    return MsgUpdateTask.decode(message.value);
  },
  toProto(message: MsgUpdateTask): Uint8Array {
    return MsgUpdateTask.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTask): MsgUpdateTaskProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTask",
      value: MsgUpdateTask.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateTaskResponse(): MsgUpdateTaskResponse {
  return {};
}
export const MsgUpdateTaskResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse",
  encode(_: MsgUpdateTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateTaskResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateTaskResponse>): MsgUpdateTaskResponse {
    const message = createBaseMsgUpdateTaskResponse();
    return message;
  },
  fromAmino(_: MsgUpdateTaskResponseAmino): MsgUpdateTaskResponse {
    const message = createBaseMsgUpdateTaskResponse();
    return message;
  },
  toAmino(_: MsgUpdateTaskResponse): MsgUpdateTaskResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateTaskResponseAminoMsg): MsgUpdateTaskResponse {
    return MsgUpdateTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateTaskResponseProtoMsg): MsgUpdateTaskResponse {
    return MsgUpdateTaskResponse.decode(message.value);
  },
  toProto(message: MsgUpdateTaskResponse): Uint8Array {
    return MsgUpdateTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateTaskResponse): MsgUpdateTaskResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse",
      value: MsgUpdateTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTask(): MsgDeleteTask {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteTask = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
  encode(message: MsgDeleteTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteTask {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteTask>): MsgDeleteTask {
    const message = createBaseMsgDeleteTask();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteTaskAmino): MsgDeleteTask {
    const message = createBaseMsgDeleteTask();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteTask): MsgDeleteTaskAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTaskAminoMsg): MsgDeleteTask {
    return MsgDeleteTask.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTaskProtoMsg): MsgDeleteTask {
    return MsgDeleteTask.decode(message.value);
  },
  toProto(message: MsgDeleteTask): Uint8Array {
    return MsgDeleteTask.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTask): MsgDeleteTaskProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTask",
      value: MsgDeleteTask.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryBackupRef(): MsgUpdateRepositoryBackupRef {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    store: 0,
    ref: ""
  };
}
export const MsgUpdateRepositoryBackupRef = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
  encode(message: MsgUpdateRepositoryBackupRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.store !== 0) {
      writer.uint32(24).int32(message.store);
    }
    if (message.ref !== "") {
      writer.uint32(34).string(message.ref);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRepositoryBackupRef {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      store: isSet(object.store) ? repositoryBackup_StoreFromJSON(object.store) : -1,
      ref: isSet(object.ref) ? String(object.ref) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateRepositoryBackupRef>): MsgUpdateRepositoryBackupRef {
    const message = createBaseMsgUpdateRepositoryBackupRef();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.store = object.store ?? 0;
    message.ref = object.ref ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRepositoryBackupRefAmino): MsgUpdateRepositoryBackupRef {
    const message = createBaseMsgUpdateRepositoryBackupRef();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.store !== undefined && object.store !== null) {
      message.store = object.store;
    }
    if (object.ref !== undefined && object.ref !== null) {
      message.ref = object.ref;
    }
    return message;
  },
  toAmino(message: MsgUpdateRepositoryBackupRef): MsgUpdateRepositoryBackupRefAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.store = message.store === 0 ? undefined : message.store;
    obj.ref = message.ref === "" ? undefined : message.ref;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryBackupRefAminoMsg): MsgUpdateRepositoryBackupRef {
    return MsgUpdateRepositoryBackupRef.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryBackupRefProtoMsg): MsgUpdateRepositoryBackupRef {
    return MsgUpdateRepositoryBackupRef.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryBackupRef): Uint8Array {
    return MsgUpdateRepositoryBackupRef.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryBackupRef): MsgUpdateRepositoryBackupRefProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRef",
      value: MsgUpdateRepositoryBackupRef.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryBackupRefResponse(): MsgUpdateRepositoryBackupRefResponse {
  return {};
}
export const MsgUpdateRepositoryBackupRefResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse",
  encode(_: MsgUpdateRepositoryBackupRefResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRepositoryBackupRefResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRepositoryBackupRefResponse>): MsgUpdateRepositoryBackupRefResponse {
    const message = createBaseMsgUpdateRepositoryBackupRefResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRepositoryBackupRefResponseAmino): MsgUpdateRepositoryBackupRefResponse {
    const message = createBaseMsgUpdateRepositoryBackupRefResponse();
    return message;
  },
  toAmino(_: MsgUpdateRepositoryBackupRefResponse): MsgUpdateRepositoryBackupRefResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryBackupRefResponseAminoMsg): MsgUpdateRepositoryBackupRefResponse {
    return MsgUpdateRepositoryBackupRefResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryBackupRefResponseProtoMsg): MsgUpdateRepositoryBackupRefResponse {
    return MsgUpdateRepositoryBackupRefResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryBackupRefResponse): Uint8Array {
    return MsgUpdateRepositoryBackupRefResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryBackupRefResponse): MsgUpdateRepositoryBackupRefResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse",
      value: MsgUpdateRepositoryBackupRefResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddRepositoryBackupRef(): MsgAddRepositoryBackupRef {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    store: 0,
    ref: ""
  };
}
export const MsgAddRepositoryBackupRef = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
  encode(message: MsgAddRepositoryBackupRef, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.store !== 0) {
      writer.uint32(24).int32(message.store);
    }
    if (message.ref !== "") {
      writer.uint32(34).string(message.ref);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddRepositoryBackupRef {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      store: isSet(object.store) ? repositoryBackup_StoreFromJSON(object.store) : -1,
      ref: isSet(object.ref) ? String(object.ref) : ""
    };
  },
  fromPartial(object: Partial<MsgAddRepositoryBackupRef>): MsgAddRepositoryBackupRef {
    const message = createBaseMsgAddRepositoryBackupRef();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.store = object.store ?? 0;
    message.ref = object.ref ?? "";
    return message;
  },
  fromAmino(object: MsgAddRepositoryBackupRefAmino): MsgAddRepositoryBackupRef {
    const message = createBaseMsgAddRepositoryBackupRef();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.store !== undefined && object.store !== null) {
      message.store = object.store;
    }
    if (object.ref !== undefined && object.ref !== null) {
      message.ref = object.ref;
    }
    return message;
  },
  toAmino(message: MsgAddRepositoryBackupRef): MsgAddRepositoryBackupRefAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.store = message.store === 0 ? undefined : message.store;
    obj.ref = message.ref === "" ? undefined : message.ref;
    return obj;
  },
  fromAminoMsg(object: MsgAddRepositoryBackupRefAminoMsg): MsgAddRepositoryBackupRef {
    return MsgAddRepositoryBackupRef.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddRepositoryBackupRefProtoMsg): MsgAddRepositoryBackupRef {
    return MsgAddRepositoryBackupRef.decode(message.value);
  },
  toProto(message: MsgAddRepositoryBackupRef): Uint8Array {
    return MsgAddRepositoryBackupRef.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRepositoryBackupRef): MsgAddRepositoryBackupRefProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRef",
      value: MsgAddRepositoryBackupRef.encode(message).finish()
    };
  }
};
function createBaseMsgAddRepositoryBackupRefResponse(): MsgAddRepositoryBackupRefResponse {
  return {};
}
export const MsgAddRepositoryBackupRefResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse",
  encode(_: MsgAddRepositoryBackupRefResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddRepositoryBackupRefResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddRepositoryBackupRefResponse>): MsgAddRepositoryBackupRefResponse {
    const message = createBaseMsgAddRepositoryBackupRefResponse();
    return message;
  },
  fromAmino(_: MsgAddRepositoryBackupRefResponseAmino): MsgAddRepositoryBackupRefResponse {
    const message = createBaseMsgAddRepositoryBackupRefResponse();
    return message;
  },
  toAmino(_: MsgAddRepositoryBackupRefResponse): MsgAddRepositoryBackupRefResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddRepositoryBackupRefResponseAminoMsg): MsgAddRepositoryBackupRefResponse {
    return MsgAddRepositoryBackupRefResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddRepositoryBackupRefResponseProtoMsg): MsgAddRepositoryBackupRefResponse {
    return MsgAddRepositoryBackupRefResponse.decode(message.value);
  },
  toProto(message: MsgAddRepositoryBackupRefResponse): Uint8Array {
    return MsgAddRepositoryBackupRefResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddRepositoryBackupRefResponse): MsgAddRepositoryBackupRefResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse",
      value: MsgAddRepositoryBackupRefResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTaskResponse(): MsgDeleteTaskResponse {
  return {};
}
export const MsgDeleteTaskResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse",
  encode(_: MsgDeleteTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteTaskResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse {
    const message = createBaseMsgDeleteTaskResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTaskResponseAmino): MsgDeleteTaskResponse {
    const message = createBaseMsgDeleteTaskResponse();
    return message;
  },
  toAmino(_: MsgDeleteTaskResponse): MsgDeleteTaskResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTaskResponseAminoMsg): MsgDeleteTaskResponse {
    return MsgDeleteTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTaskResponseProtoMsg): MsgDeleteTaskResponse {
    return MsgDeleteTaskResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTaskResponse): Uint8Array {
    return MsgDeleteTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTaskResponse): MsgDeleteTaskResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse",
      value: MsgDeleteTaskResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteStorageProviderResponse(): MsgDeleteStorageProviderResponse {
  return {};
}
export const MsgDeleteStorageProviderResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse",
  encode(_: MsgDeleteStorageProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteStorageProviderResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteStorageProviderResponse>): MsgDeleteStorageProviderResponse {
    const message = createBaseMsgDeleteStorageProviderResponse();
    return message;
  },
  fromAmino(_: MsgDeleteStorageProviderResponseAmino): MsgDeleteStorageProviderResponse {
    const message = createBaseMsgDeleteStorageProviderResponse();
    return message;
  },
  toAmino(_: MsgDeleteStorageProviderResponse): MsgDeleteStorageProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteStorageProviderResponseAminoMsg): MsgDeleteStorageProviderResponse {
    return MsgDeleteStorageProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteStorageProviderResponseProtoMsg): MsgDeleteStorageProviderResponse {
    return MsgDeleteStorageProviderResponse.decode(message.value);
  },
  toProto(message: MsgDeleteStorageProviderResponse): Uint8Array {
    return MsgDeleteStorageProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteStorageProviderResponse): MsgDeleteStorageProviderResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse",
      value: MsgDeleteStorageProviderResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetBranch(): MsgSetBranch {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branch: MsgSetBranch_Branch.fromPartial({})
  };
}
export const MsgSetBranch = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
  encode(message: MsgSetBranch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.branch !== undefined) {
      MsgSetBranch_Branch.encode(message.branch, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetBranch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branch: isSet(object.branch) ? MsgSetBranch_Branch.fromJSON(object.branch) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetBranch>): MsgSetBranch {
    const message = createBaseMsgSetBranch();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branch = object.branch !== undefined && object.branch !== null ? MsgSetBranch_Branch.fromPartial(object.branch) : undefined;
    return message;
  },
  fromAmino(object: MsgSetBranchAmino): MsgSetBranch {
    const message = createBaseMsgSetBranch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = MsgSetBranch_Branch.fromAmino(object.branch);
    }
    return message;
  },
  toAmino(message: MsgSetBranch): MsgSetBranchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.branch = message.branch ? MsgSetBranch_Branch.toAmino(message.branch) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetBranchAminoMsg): MsgSetBranch {
    return MsgSetBranch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBranchProtoMsg): MsgSetBranch {
    return MsgSetBranch.decode(message.value);
  },
  toProto(message: MsgSetBranch): Uint8Array {
    return MsgSetBranch.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBranch): MsgSetBranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranch",
      value: MsgSetBranch.encode(message).finish()
    };
  }
};
function createBaseMsgSetBranch_Branch(): MsgSetBranch_Branch {
  return {
    name: "",
    sha: ""
  };
}
export const MsgSetBranch_Branch = {
  typeUrl: "/gitopia.gitopia.gitopia.Branch",
  encode(message: MsgSetBranch_Branch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(18).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetBranch_Branch {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<MsgSetBranch_Branch>): MsgSetBranch_Branch {
    const message = createBaseMsgSetBranch_Branch();
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: MsgSetBranch_BranchAmino): MsgSetBranch_Branch {
    const message = createBaseMsgSetBranch_Branch();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: MsgSetBranch_Branch): MsgSetBranch_BranchAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: MsgSetBranch_BranchAminoMsg): MsgSetBranch_Branch {
    return MsgSetBranch_Branch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBranch_BranchProtoMsg): MsgSetBranch_Branch {
    return MsgSetBranch_Branch.decode(message.value);
  },
  toProto(message: MsgSetBranch_Branch): Uint8Array {
    return MsgSetBranch_Branch.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBranch_Branch): MsgSetBranch_BranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Branch",
      value: MsgSetBranch_Branch.encode(message).finish()
    };
  }
};
function createBaseMsgSetBranchResponse(): MsgSetBranchResponse {
  return {};
}
export const MsgSetBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranchResponse",
  encode(_: MsgSetBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetBranchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetBranchResponse>): MsgSetBranchResponse {
    const message = createBaseMsgSetBranchResponse();
    return message;
  },
  fromAmino(_: MsgSetBranchResponseAmino): MsgSetBranchResponse {
    const message = createBaseMsgSetBranchResponse();
    return message;
  },
  toAmino(_: MsgSetBranchResponse): MsgSetBranchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetBranchResponseAminoMsg): MsgSetBranchResponse {
    return MsgSetBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetBranchResponseProtoMsg): MsgSetBranchResponse {
    return MsgSetBranchResponse.decode(message.value);
  },
  toProto(message: MsgSetBranchResponse): Uint8Array {
    return MsgSetBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetBranchResponse): MsgSetBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranchResponse",
      value: MsgSetBranchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetDefaultBranch(): MsgSetDefaultBranch {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branch: ""
  };
}
export const MsgSetDefaultBranch = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
  encode(message: MsgSetDefaultBranch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.branch !== "") {
      writer.uint32(26).string(message.branch);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetDefaultBranch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branch: isSet(object.branch) ? String(object.branch) : ""
    };
  },
  fromPartial(object: Partial<MsgSetDefaultBranch>): MsgSetDefaultBranch {
    const message = createBaseMsgSetDefaultBranch();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branch = object.branch ?? "";
    return message;
  },
  fromAmino(object: MsgSetDefaultBranchAmino): MsgSetDefaultBranch {
    const message = createBaseMsgSetDefaultBranch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    return message;
  },
  toAmino(message: MsgSetDefaultBranch): MsgSetDefaultBranchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.branch = message.branch === "" ? undefined : message.branch;
    return obj;
  },
  fromAminoMsg(object: MsgSetDefaultBranchAminoMsg): MsgSetDefaultBranch {
    return MsgSetDefaultBranch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDefaultBranchProtoMsg): MsgSetDefaultBranch {
    return MsgSetDefaultBranch.decode(message.value);
  },
  toProto(message: MsgSetDefaultBranch): Uint8Array {
    return MsgSetDefaultBranch.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDefaultBranch): MsgSetDefaultBranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranch",
      value: MsgSetDefaultBranch.encode(message).finish()
    };
  }
};
function createBaseMsgSetDefaultBranchResponse(): MsgSetDefaultBranchResponse {
  return {};
}
export const MsgSetDefaultBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse",
  encode(_: MsgSetDefaultBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetDefaultBranchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetDefaultBranchResponse>): MsgSetDefaultBranchResponse {
    const message = createBaseMsgSetDefaultBranchResponse();
    return message;
  },
  fromAmino(_: MsgSetDefaultBranchResponseAmino): MsgSetDefaultBranchResponse {
    const message = createBaseMsgSetDefaultBranchResponse();
    return message;
  },
  toAmino(_: MsgSetDefaultBranchResponse): MsgSetDefaultBranchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetDefaultBranchResponseAminoMsg): MsgSetDefaultBranchResponse {
    return MsgSetDefaultBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetDefaultBranchResponseProtoMsg): MsgSetDefaultBranchResponse {
    return MsgSetDefaultBranchResponse.decode(message.value);
  },
  toProto(message: MsgSetDefaultBranchResponse): Uint8Array {
    return MsgSetDefaultBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetDefaultBranchResponse): MsgSetDefaultBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse",
      value: MsgSetDefaultBranchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetBranch(): MsgMultiSetBranch {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branches: []
  };
}
export const MsgMultiSetBranch = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
  encode(message: MsgMultiSetBranch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.branches) {
      MsgMultiSetBranch_Branch.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiSetBranch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branches: Array.isArray(object?.branches) ? object.branches.map((e: any) => MsgMultiSetBranch_Branch.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgMultiSetBranch>): MsgMultiSetBranch {
    const message = createBaseMsgMultiSetBranch();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branches = object.branches?.map(e => MsgMultiSetBranch_Branch.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMultiSetBranchAmino): MsgMultiSetBranch {
    const message = createBaseMsgMultiSetBranch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    message.branches = object.branches?.map(e => MsgMultiSetBranch_Branch.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiSetBranch): MsgMultiSetBranchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    if (message.branches) {
      obj.branches = message.branches.map(e => e ? MsgMultiSetBranch_Branch.toAmino(e) : undefined);
    } else {
      obj.branches = message.branches;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetBranchAminoMsg): MsgMultiSetBranch {
    return MsgMultiSetBranch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetBranchProtoMsg): MsgMultiSetBranch {
    return MsgMultiSetBranch.decode(message.value);
  },
  toProto(message: MsgMultiSetBranch): Uint8Array {
    return MsgMultiSetBranch.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetBranch): MsgMultiSetBranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranch",
      value: MsgMultiSetBranch.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetBranch_Branch(): MsgMultiSetBranch_Branch {
  return {
    name: "",
    sha: ""
  };
}
export const MsgMultiSetBranch_Branch = {
  typeUrl: "/gitopia.gitopia.gitopia.Branch",
  encode(message: MsgMultiSetBranch_Branch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(18).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiSetBranch_Branch {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<MsgMultiSetBranch_Branch>): MsgMultiSetBranch_Branch {
    const message = createBaseMsgMultiSetBranch_Branch();
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: MsgMultiSetBranch_BranchAmino): MsgMultiSetBranch_Branch {
    const message = createBaseMsgMultiSetBranch_Branch();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: MsgMultiSetBranch_Branch): MsgMultiSetBranch_BranchAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetBranch_BranchAminoMsg): MsgMultiSetBranch_Branch {
    return MsgMultiSetBranch_Branch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetBranch_BranchProtoMsg): MsgMultiSetBranch_Branch {
    return MsgMultiSetBranch_Branch.decode(message.value);
  },
  toProto(message: MsgMultiSetBranch_Branch): Uint8Array {
    return MsgMultiSetBranch_Branch.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetBranch_Branch): MsgMultiSetBranch_BranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Branch",
      value: MsgMultiSetBranch_Branch.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetBranchResponse(): MsgMultiSetBranchResponse {
  return {};
}
export const MsgMultiSetBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse",
  encode(_: MsgMultiSetBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMultiSetBranchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMultiSetBranchResponse>): MsgMultiSetBranchResponse {
    const message = createBaseMsgMultiSetBranchResponse();
    return message;
  },
  fromAmino(_: MsgMultiSetBranchResponseAmino): MsgMultiSetBranchResponse {
    const message = createBaseMsgMultiSetBranchResponse();
    return message;
  },
  toAmino(_: MsgMultiSetBranchResponse): MsgMultiSetBranchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetBranchResponseAminoMsg): MsgMultiSetBranchResponse {
    return MsgMultiSetBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetBranchResponseProtoMsg): MsgMultiSetBranchResponse {
    return MsgMultiSetBranchResponse.decode(message.value);
  },
  toProto(message: MsgMultiSetBranchResponse): Uint8Array {
    return MsgMultiSetBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetBranchResponse): MsgMultiSetBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse",
      value: MsgMultiSetBranchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBranch(): MsgDeleteBranch {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branch: ""
  };
}
export const MsgDeleteBranch = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
  encode(message: MsgDeleteBranch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.branch !== "") {
      writer.uint32(26).string(message.branch);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteBranch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branch: isSet(object.branch) ? String(object.branch) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteBranch>): MsgDeleteBranch {
    const message = createBaseMsgDeleteBranch();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branch = object.branch ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteBranchAmino): MsgDeleteBranch {
    const message = createBaseMsgDeleteBranch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    return message;
  },
  toAmino(message: MsgDeleteBranch): MsgDeleteBranchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.branch = message.branch === "" ? undefined : message.branch;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBranchAminoMsg): MsgDeleteBranch {
    return MsgDeleteBranch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBranchProtoMsg): MsgDeleteBranch {
    return MsgDeleteBranch.decode(message.value);
  },
  toProto(message: MsgDeleteBranch): Uint8Array {
    return MsgDeleteBranch.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBranch): MsgDeleteBranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranch",
      value: MsgDeleteBranch.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBranchResponse(): MsgDeleteBranchResponse {
  return {};
}
export const MsgDeleteBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse",
  encode(_: MsgDeleteBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteBranchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteBranchResponse>): MsgDeleteBranchResponse {
    const message = createBaseMsgDeleteBranchResponse();
    return message;
  },
  fromAmino(_: MsgDeleteBranchResponseAmino): MsgDeleteBranchResponse {
    const message = createBaseMsgDeleteBranchResponse();
    return message;
  },
  toAmino(_: MsgDeleteBranchResponse): MsgDeleteBranchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBranchResponseAminoMsg): MsgDeleteBranchResponse {
    return MsgDeleteBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBranchResponseProtoMsg): MsgDeleteBranchResponse {
    return MsgDeleteBranchResponse.decode(message.value);
  },
  toProto(message: MsgDeleteBranchResponse): Uint8Array {
    return MsgDeleteBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBranchResponse): MsgDeleteBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse",
      value: MsgDeleteBranchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiDeleteBranch(): MsgMultiDeleteBranch {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    branches: []
  };
}
export const MsgMultiDeleteBranch = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
  encode(message: MsgMultiDeleteBranch, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.branches) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiDeleteBranch {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      branches: Array.isArray(object?.branches) ? object.branches.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgMultiDeleteBranch>): MsgMultiDeleteBranch {
    const message = createBaseMsgMultiDeleteBranch();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.branches = object.branches?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgMultiDeleteBranchAmino): MsgMultiDeleteBranch {
    const message = createBaseMsgMultiDeleteBranch();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    message.branches = object.branches?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgMultiDeleteBranch): MsgMultiDeleteBranchAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    if (message.branches) {
      obj.branches = message.branches.map(e => e);
    } else {
      obj.branches = message.branches;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiDeleteBranchAminoMsg): MsgMultiDeleteBranch {
    return MsgMultiDeleteBranch.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiDeleteBranchProtoMsg): MsgMultiDeleteBranch {
    return MsgMultiDeleteBranch.decode(message.value);
  },
  toProto(message: MsgMultiDeleteBranch): Uint8Array {
    return MsgMultiDeleteBranch.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiDeleteBranch): MsgMultiDeleteBranchProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranch",
      value: MsgMultiDeleteBranch.encode(message).finish()
    };
  }
};
function createBaseMsgMultiDeleteBranchResponse(): MsgMultiDeleteBranchResponse {
  return {};
}
export const MsgMultiDeleteBranchResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse",
  encode(_: MsgMultiDeleteBranchResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMultiDeleteBranchResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMultiDeleteBranchResponse>): MsgMultiDeleteBranchResponse {
    const message = createBaseMsgMultiDeleteBranchResponse();
    return message;
  },
  fromAmino(_: MsgMultiDeleteBranchResponseAmino): MsgMultiDeleteBranchResponse {
    const message = createBaseMsgMultiDeleteBranchResponse();
    return message;
  },
  toAmino(_: MsgMultiDeleteBranchResponse): MsgMultiDeleteBranchResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiDeleteBranchResponseAminoMsg): MsgMultiDeleteBranchResponse {
    return MsgMultiDeleteBranchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiDeleteBranchResponseProtoMsg): MsgMultiDeleteBranchResponse {
    return MsgMultiDeleteBranchResponse.decode(message.value);
  },
  toProto(message: MsgMultiDeleteBranchResponse): Uint8Array {
    return MsgMultiDeleteBranchResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiDeleteBranchResponse): MsgMultiDeleteBranchResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse",
      value: MsgMultiDeleteBranchResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetTag(): MsgSetTag {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    tag: MsgSetTag_Tag.fromPartial({})
  };
}
export const MsgSetTag = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
  encode(message: MsgSetTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.tag !== undefined) {
      MsgSetTag_Tag.encode(message.tag, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetTag {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      tag: isSet(object.tag) ? MsgSetTag_Tag.fromJSON(object.tag) : undefined
    };
  },
  fromPartial(object: Partial<MsgSetTag>): MsgSetTag {
    const message = createBaseMsgSetTag();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.tag = object.tag !== undefined && object.tag !== null ? MsgSetTag_Tag.fromPartial(object.tag) : undefined;
    return message;
  },
  fromAmino(object: MsgSetTagAmino): MsgSetTag {
    const message = createBaseMsgSetTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = MsgSetTag_Tag.fromAmino(object.tag);
    }
    return message;
  },
  toAmino(message: MsgSetTag): MsgSetTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.tag = message.tag ? MsgSetTag_Tag.toAmino(message.tag) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetTagAminoMsg): MsgSetTag {
    return MsgSetTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTagProtoMsg): MsgSetTag {
    return MsgSetTag.decode(message.value);
  },
  toProto(message: MsgSetTag): Uint8Array {
    return MsgSetTag.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTag): MsgSetTagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetTag",
      value: MsgSetTag.encode(message).finish()
    };
  }
};
function createBaseMsgSetTag_Tag(): MsgSetTag_Tag {
  return {
    name: "",
    sha: ""
  };
}
export const MsgSetTag_Tag = {
  typeUrl: "/gitopia.gitopia.gitopia.Tag",
  encode(message: MsgSetTag_Tag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(18).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetTag_Tag {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<MsgSetTag_Tag>): MsgSetTag_Tag {
    const message = createBaseMsgSetTag_Tag();
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: MsgSetTag_TagAmino): MsgSetTag_Tag {
    const message = createBaseMsgSetTag_Tag();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: MsgSetTag_Tag): MsgSetTag_TagAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: MsgSetTag_TagAminoMsg): MsgSetTag_Tag {
    return MsgSetTag_Tag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTag_TagProtoMsg): MsgSetTag_Tag {
    return MsgSetTag_Tag.decode(message.value);
  },
  toProto(message: MsgSetTag_Tag): Uint8Array {
    return MsgSetTag_Tag.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTag_Tag): MsgSetTag_TagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Tag",
      value: MsgSetTag_Tag.encode(message).finish()
    };
  }
};
function createBaseMsgSetTagResponse(): MsgSetTagResponse {
  return {};
}
export const MsgSetTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetTagResponse",
  encode(_: MsgSetTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSetTagResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetTagResponse>): MsgSetTagResponse {
    const message = createBaseMsgSetTagResponse();
    return message;
  },
  fromAmino(_: MsgSetTagResponseAmino): MsgSetTagResponse {
    const message = createBaseMsgSetTagResponse();
    return message;
  },
  toAmino(_: MsgSetTagResponse): MsgSetTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetTagResponseAminoMsg): MsgSetTagResponse {
    return MsgSetTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetTagResponseProtoMsg): MsgSetTagResponse {
    return MsgSetTagResponse.decode(message.value);
  },
  toProto(message: MsgSetTagResponse): Uint8Array {
    return MsgSetTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetTagResponse): MsgSetTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetTagResponse",
      value: MsgSetTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetTag(): MsgMultiSetTag {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    tags: []
  };
}
export const MsgMultiSetTag = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
  encode(message: MsgMultiSetTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tags) {
      MsgMultiSetTag_Tag.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiSetTag {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => MsgMultiSetTag_Tag.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgMultiSetTag>): MsgMultiSetTag {
    const message = createBaseMsgMultiSetTag();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.tags = object.tags?.map(e => MsgMultiSetTag_Tag.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgMultiSetTagAmino): MsgMultiSetTag {
    const message = createBaseMsgMultiSetTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    message.tags = object.tags?.map(e => MsgMultiSetTag_Tag.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgMultiSetTag): MsgMultiSetTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    if (message.tags) {
      obj.tags = message.tags.map(e => e ? MsgMultiSetTag_Tag.toAmino(e) : undefined);
    } else {
      obj.tags = message.tags;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetTagAminoMsg): MsgMultiSetTag {
    return MsgMultiSetTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetTagProtoMsg): MsgMultiSetTag {
    return MsgMultiSetTag.decode(message.value);
  },
  toProto(message: MsgMultiSetTag): Uint8Array {
    return MsgMultiSetTag.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetTag): MsgMultiSetTagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTag",
      value: MsgMultiSetTag.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetTag_Tag(): MsgMultiSetTag_Tag {
  return {
    name: "",
    sha: ""
  };
}
export const MsgMultiSetTag_Tag = {
  typeUrl: "/gitopia.gitopia.gitopia.Tag",
  encode(message: MsgMultiSetTag_Tag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.sha !== "") {
      writer.uint32(18).string(message.sha);
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiSetTag_Tag {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      sha: isSet(object.sha) ? String(object.sha) : ""
    };
  },
  fromPartial(object: Partial<MsgMultiSetTag_Tag>): MsgMultiSetTag_Tag {
    const message = createBaseMsgMultiSetTag_Tag();
    message.name = object.name ?? "";
    message.sha = object.sha ?? "";
    return message;
  },
  fromAmino(object: MsgMultiSetTag_TagAmino): MsgMultiSetTag_Tag {
    const message = createBaseMsgMultiSetTag_Tag();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.sha !== undefined && object.sha !== null) {
      message.sha = object.sha;
    }
    return message;
  },
  toAmino(message: MsgMultiSetTag_Tag): MsgMultiSetTag_TagAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.sha = message.sha === "" ? undefined : message.sha;
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetTag_TagAminoMsg): MsgMultiSetTag_Tag {
    return MsgMultiSetTag_Tag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetTag_TagProtoMsg): MsgMultiSetTag_Tag {
    return MsgMultiSetTag_Tag.decode(message.value);
  },
  toProto(message: MsgMultiSetTag_Tag): Uint8Array {
    return MsgMultiSetTag_Tag.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetTag_Tag): MsgMultiSetTag_TagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Tag",
      value: MsgMultiSetTag_Tag.encode(message).finish()
    };
  }
};
function createBaseMsgMultiSetTagResponse(): MsgMultiSetTagResponse {
  return {};
}
export const MsgMultiSetTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse",
  encode(_: MsgMultiSetTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMultiSetTagResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMultiSetTagResponse>): MsgMultiSetTagResponse {
    const message = createBaseMsgMultiSetTagResponse();
    return message;
  },
  fromAmino(_: MsgMultiSetTagResponseAmino): MsgMultiSetTagResponse {
    const message = createBaseMsgMultiSetTagResponse();
    return message;
  },
  toAmino(_: MsgMultiSetTagResponse): MsgMultiSetTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiSetTagResponseAminoMsg): MsgMultiSetTagResponse {
    return MsgMultiSetTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiSetTagResponseProtoMsg): MsgMultiSetTagResponse {
    return MsgMultiSetTagResponse.decode(message.value);
  },
  toProto(message: MsgMultiSetTagResponse): Uint8Array {
    return MsgMultiSetTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiSetTagResponse): MsgMultiSetTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse",
      value: MsgMultiSetTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTag(): MsgDeleteTag {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    tag: ""
  };
}
export const MsgDeleteTag = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
  encode(message: MsgDeleteTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.tag !== "") {
      writer.uint32(26).string(message.tag);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteTag {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      tag: isSet(object.tag) ? String(object.tag) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteTag>): MsgDeleteTag {
    const message = createBaseMsgDeleteTag();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.tag = object.tag ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteTagAmino): MsgDeleteTag {
    const message = createBaseMsgDeleteTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.tag !== undefined && object.tag !== null) {
      message.tag = object.tag;
    }
    return message;
  },
  toAmino(message: MsgDeleteTag): MsgDeleteTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.tag = message.tag === "" ? undefined : message.tag;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTagAminoMsg): MsgDeleteTag {
    return MsgDeleteTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTagProtoMsg): MsgDeleteTag {
    return MsgDeleteTag.decode(message.value);
  },
  toProto(message: MsgDeleteTag): Uint8Array {
    return MsgDeleteTag.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTag): MsgDeleteTagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTag",
      value: MsgDeleteTag.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteTagResponse(): MsgDeleteTagResponse {
  return {};
}
export const MsgDeleteTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse",
  encode(_: MsgDeleteTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteTagResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteTagResponse>): MsgDeleteTagResponse {
    const message = createBaseMsgDeleteTagResponse();
    return message;
  },
  fromAmino(_: MsgDeleteTagResponseAmino): MsgDeleteTagResponse {
    const message = createBaseMsgDeleteTagResponse();
    return message;
  },
  toAmino(_: MsgDeleteTagResponse): MsgDeleteTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteTagResponseAminoMsg): MsgDeleteTagResponse {
    return MsgDeleteTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteTagResponseProtoMsg): MsgDeleteTagResponse {
    return MsgDeleteTagResponse.decode(message.value);
  },
  toProto(message: MsgDeleteTagResponse): Uint8Array {
    return MsgDeleteTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteTagResponse): MsgDeleteTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse",
      value: MsgDeleteTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgMultiDeleteTag(): MsgMultiDeleteTag {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    tags: []
  };
}
export const MsgMultiDeleteTag = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
  encode(message: MsgMultiDeleteTag, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgMultiDeleteTag {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgMultiDeleteTag>): MsgMultiDeleteTag {
    const message = createBaseMsgMultiDeleteTag();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgMultiDeleteTagAmino): MsgMultiDeleteTag {
    const message = createBaseMsgMultiDeleteTag();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    message.tags = object.tags?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgMultiDeleteTag): MsgMultiDeleteTagAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    if (message.tags) {
      obj.tags = message.tags.map(e => e);
    } else {
      obj.tags = message.tags;
    }
    return obj;
  },
  fromAminoMsg(object: MsgMultiDeleteTagAminoMsg): MsgMultiDeleteTag {
    return MsgMultiDeleteTag.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiDeleteTagProtoMsg): MsgMultiDeleteTag {
    return MsgMultiDeleteTag.decode(message.value);
  },
  toProto(message: MsgMultiDeleteTag): Uint8Array {
    return MsgMultiDeleteTag.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiDeleteTag): MsgMultiDeleteTagProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTag",
      value: MsgMultiDeleteTag.encode(message).finish()
    };
  }
};
function createBaseMsgMultiDeleteTagResponse(): MsgMultiDeleteTagResponse {
  return {};
}
export const MsgMultiDeleteTagResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse",
  encode(_: MsgMultiDeleteTagResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgMultiDeleteTagResponse {
    return {};
  },
  fromPartial(_: Partial<MsgMultiDeleteTagResponse>): MsgMultiDeleteTagResponse {
    const message = createBaseMsgMultiDeleteTagResponse();
    return message;
  },
  fromAmino(_: MsgMultiDeleteTagResponseAmino): MsgMultiDeleteTagResponse {
    const message = createBaseMsgMultiDeleteTagResponse();
    return message;
  },
  toAmino(_: MsgMultiDeleteTagResponse): MsgMultiDeleteTagResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgMultiDeleteTagResponseAminoMsg): MsgMultiDeleteTagResponse {
    return MsgMultiDeleteTagResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMultiDeleteTagResponseProtoMsg): MsgMultiDeleteTagResponse {
    return MsgMultiDeleteTagResponse.decode(message.value);
  },
  toProto(message: MsgMultiDeleteTagResponse): Uint8Array {
    return MsgMultiDeleteTagResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMultiDeleteTagResponse): MsgMultiDeleteTagResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse",
      value: MsgMultiDeleteTagResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddMember(): MsgAddMember {
  return {
    creator: "",
    daoId: "",
    userId: "",
    role: 0
  };
}
export const MsgAddMember = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
  encode(message: MsgAddMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.daoId !== "") {
      writer.uint32(18).string(message.daoId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddMember {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      daoId: isSet(object.daoId) ? String(object.daoId) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      role: isSet(object.role) ? memberRoleFromJSON(object.role) : -1
    };
  },
  fromPartial(object: Partial<MsgAddMember>): MsgAddMember {
    const message = createBaseMsgAddMember();
    message.creator = object.creator ?? "";
    message.daoId = object.daoId ?? "";
    message.userId = object.userId ?? "";
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: MsgAddMemberAmino): MsgAddMember {
    const message = createBaseMsgAddMember();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.daoId !== undefined && object.daoId !== null) {
      message.daoId = object.daoId;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: MsgAddMember): MsgAddMemberAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.daoId = message.daoId === "" ? undefined : message.daoId;
    obj.userId = message.userId === "" ? undefined : message.userId;
    obj.role = message.role === 0 ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MsgAddMemberAminoMsg): MsgAddMember {
    return MsgAddMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMemberProtoMsg): MsgAddMember {
    return MsgAddMember.decode(message.value);
  },
  toProto(message: MsgAddMember): Uint8Array {
    return MsgAddMember.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMember): MsgAddMemberProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddMember",
      value: MsgAddMember.encode(message).finish()
    };
  }
};
function createBaseMsgAddMemberResponse(): MsgAddMemberResponse {
  return {};
}
export const MsgAddMemberResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddMemberResponse",
  encode(_: MsgAddMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddMemberResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddMemberResponse>): MsgAddMemberResponse {
    const message = createBaseMsgAddMemberResponse();
    return message;
  },
  fromAmino(_: MsgAddMemberResponseAmino): MsgAddMemberResponse {
    const message = createBaseMsgAddMemberResponse();
    return message;
  },
  toAmino(_: MsgAddMemberResponse): MsgAddMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddMemberResponseAminoMsg): MsgAddMemberResponse {
    return MsgAddMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddMemberResponseProtoMsg): MsgAddMemberResponse {
    return MsgAddMemberResponse.decode(message.value);
  },
  toProto(message: MsgAddMemberResponse): Uint8Array {
    return MsgAddMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddMemberResponse): MsgAddMemberResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddMemberResponse",
      value: MsgAddMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMemberRole(): MsgUpdateMemberRole {
  return {
    creator: "",
    daoId: "",
    userId: "",
    role: 0
  };
}
export const MsgUpdateMemberRole = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
  encode(message: MsgUpdateMemberRole, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.daoId !== "") {
      writer.uint32(18).string(message.daoId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    if (message.role !== 0) {
      writer.uint32(32).int32(message.role);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateMemberRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      daoId: isSet(object.daoId) ? String(object.daoId) : "",
      userId: isSet(object.userId) ? String(object.userId) : "",
      role: isSet(object.role) ? memberRoleFromJSON(object.role) : -1
    };
  },
  fromPartial(object: Partial<MsgUpdateMemberRole>): MsgUpdateMemberRole {
    const message = createBaseMsgUpdateMemberRole();
    message.creator = object.creator ?? "";
    message.daoId = object.daoId ?? "";
    message.userId = object.userId ?? "";
    message.role = object.role ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateMemberRoleAmino): MsgUpdateMemberRole {
    const message = createBaseMsgUpdateMemberRole();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.daoId !== undefined && object.daoId !== null) {
      message.daoId = object.daoId;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: MsgUpdateMemberRole): MsgUpdateMemberRoleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.daoId = message.daoId === "" ? undefined : message.daoId;
    obj.userId = message.userId === "" ? undefined : message.userId;
    obj.role = message.role === 0 ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMemberRoleAminoMsg): MsgUpdateMemberRole {
    return MsgUpdateMemberRole.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMemberRoleProtoMsg): MsgUpdateMemberRole {
    return MsgUpdateMemberRole.decode(message.value);
  },
  toProto(message: MsgUpdateMemberRole): Uint8Array {
    return MsgUpdateMemberRole.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMemberRole): MsgUpdateMemberRoleProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRole",
      value: MsgUpdateMemberRole.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateMemberRoleResponse(): MsgUpdateMemberRoleResponse {
  return {};
}
export const MsgUpdateMemberRoleResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse",
  encode(_: MsgUpdateMemberRoleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateMemberRoleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateMemberRoleResponse>): MsgUpdateMemberRoleResponse {
    const message = createBaseMsgUpdateMemberRoleResponse();
    return message;
  },
  fromAmino(_: MsgUpdateMemberRoleResponseAmino): MsgUpdateMemberRoleResponse {
    const message = createBaseMsgUpdateMemberRoleResponse();
    return message;
  },
  toAmino(_: MsgUpdateMemberRoleResponse): MsgUpdateMemberRoleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateMemberRoleResponseAminoMsg): MsgUpdateMemberRoleResponse {
    return MsgUpdateMemberRoleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateMemberRoleResponseProtoMsg): MsgUpdateMemberRoleResponse {
    return MsgUpdateMemberRoleResponse.decode(message.value);
  },
  toProto(message: MsgUpdateMemberRoleResponse): Uint8Array {
    return MsgUpdateMemberRoleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateMemberRoleResponse): MsgUpdateMemberRoleResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse",
      value: MsgUpdateMemberRoleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMember(): MsgRemoveMember {
  return {
    creator: "",
    daoId: "",
    userId: ""
  };
}
export const MsgRemoveMember = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
  encode(message: MsgRemoveMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.daoId !== "") {
      writer.uint32(18).string(message.daoId);
    }
    if (message.userId !== "") {
      writer.uint32(26).string(message.userId);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveMember {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      daoId: isSet(object.daoId) ? String(object.daoId) : "",
      userId: isSet(object.userId) ? String(object.userId) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveMember>): MsgRemoveMember {
    const message = createBaseMsgRemoveMember();
    message.creator = object.creator ?? "";
    message.daoId = object.daoId ?? "";
    message.userId = object.userId ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveMemberAmino): MsgRemoveMember {
    const message = createBaseMsgRemoveMember();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.daoId !== undefined && object.daoId !== null) {
      message.daoId = object.daoId;
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId;
    }
    return message;
  },
  toAmino(message: MsgRemoveMember): MsgRemoveMemberAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.daoId = message.daoId === "" ? undefined : message.daoId;
    obj.userId = message.userId === "" ? undefined : message.userId;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMemberAminoMsg): MsgRemoveMember {
    return MsgRemoveMember.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMemberProtoMsg): MsgRemoveMember {
    return MsgRemoveMember.decode(message.value);
  },
  toProto(message: MsgRemoveMember): Uint8Array {
    return MsgRemoveMember.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMember): MsgRemoveMemberProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMember",
      value: MsgRemoveMember.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveMemberResponse(): MsgRemoveMemberResponse {
  return {};
}
export const MsgRemoveMemberResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse",
  encode(_: MsgRemoveMemberResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveMemberResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveMemberResponse>): MsgRemoveMemberResponse {
    const message = createBaseMsgRemoveMemberResponse();
    return message;
  },
  fromAmino(_: MsgRemoveMemberResponseAmino): MsgRemoveMemberResponse {
    const message = createBaseMsgRemoveMemberResponse();
    return message;
  },
  toAmino(_: MsgRemoveMemberResponse): MsgRemoveMemberResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveMemberResponseAminoMsg): MsgRemoveMemberResponse {
    return MsgRemoveMemberResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveMemberResponseProtoMsg): MsgRemoveMemberResponse {
    return MsgRemoveMemberResponse.decode(message.value);
  },
  toProto(message: MsgRemoveMemberResponse): Uint8Array {
    return MsgRemoveMemberResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveMemberResponse): MsgRemoveMemberResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse",
      value: MsgRemoveMemberResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBounty(): MsgCreateBounty {
  return {
    creator: "",
    amount: [],
    expiry: BigInt(0),
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0
  };
}
export const MsgCreateBounty = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
  encode(message: MsgCreateBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(24).int64(message.expiry);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(32).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(40).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(48).int32(message.parent);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBounty {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0),
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? bountyParentFromJSON(object.parent) : -1
    };
  },
  fromPartial(object: Partial<MsgCreateBounty>): MsgCreateBounty {
    const message = createBaseMsgCreateBounty();
    message.creator = object.creator ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    return message;
  },
  fromAmino(object: MsgCreateBountyAmino): MsgCreateBounty {
    const message = createBaseMsgCreateBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    return message;
  },
  toAmino(message: MsgCreateBounty): MsgCreateBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry.toString() : undefined;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBountyAminoMsg): MsgCreateBounty {
    return MsgCreateBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBountyProtoMsg): MsgCreateBounty {
    return MsgCreateBounty.decode(message.value);
  },
  toProto(message: MsgCreateBounty): Uint8Array {
    return MsgCreateBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBounty): MsgCreateBountyProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBounty",
      value: MsgCreateBounty.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBountyResponse(): MsgCreateBountyResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateBountyResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBountyResponse",
  encode(message: MsgCreateBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateBountyResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateBountyResponse>): MsgCreateBountyResponse {
    const message = createBaseMsgCreateBountyResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateBountyResponseAmino): MsgCreateBountyResponse {
    const message = createBaseMsgCreateBountyResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateBountyResponse): MsgCreateBountyResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBountyResponseAminoMsg): MsgCreateBountyResponse {
    return MsgCreateBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBountyResponseProtoMsg): MsgCreateBountyResponse {
    return MsgCreateBountyResponse.decode(message.value);
  },
  toProto(message: MsgCreateBountyResponse): Uint8Array {
    return MsgCreateBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBountyResponse): MsgCreateBountyResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateBountyResponse",
      value: MsgCreateBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBountyExpiry(): MsgUpdateBountyExpiry {
  return {
    creator: "",
    id: BigInt(0),
    expiry: BigInt(0)
  };
}
export const MsgUpdateBountyExpiry = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
  encode(message: MsgUpdateBountyExpiry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.expiry !== BigInt(0)) {
      writer.uint32(24).int64(message.expiry);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateBountyExpiry {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      expiry: isSet(object.expiry) ? BigInt(object.expiry.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUpdateBountyExpiry>): MsgUpdateBountyExpiry {
    const message = createBaseMsgUpdateBountyExpiry();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.expiry = object.expiry !== undefined && object.expiry !== null ? BigInt(object.expiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateBountyExpiryAmino): MsgUpdateBountyExpiry {
    const message = createBaseMsgUpdateBountyExpiry();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = BigInt(object.expiry);
    }
    return message;
  },
  toAmino(message: MsgUpdateBountyExpiry): MsgUpdateBountyExpiryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.expiry = message.expiry !== BigInt(0) ? message.expiry.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBountyExpiryAminoMsg): MsgUpdateBountyExpiry {
    return MsgUpdateBountyExpiry.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBountyExpiryProtoMsg): MsgUpdateBountyExpiry {
    return MsgUpdateBountyExpiry.decode(message.value);
  },
  toProto(message: MsgUpdateBountyExpiry): Uint8Array {
    return MsgUpdateBountyExpiry.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBountyExpiry): MsgUpdateBountyExpiryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiry",
      value: MsgUpdateBountyExpiry.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateBountyExpiryResponse(): MsgUpdateBountyExpiryResponse {
  return {};
}
export const MsgUpdateBountyExpiryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse",
  encode(_: MsgUpdateBountyExpiryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateBountyExpiryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateBountyExpiryResponse>): MsgUpdateBountyExpiryResponse {
    const message = createBaseMsgUpdateBountyExpiryResponse();
    return message;
  },
  fromAmino(_: MsgUpdateBountyExpiryResponseAmino): MsgUpdateBountyExpiryResponse {
    const message = createBaseMsgUpdateBountyExpiryResponse();
    return message;
  },
  toAmino(_: MsgUpdateBountyExpiryResponse): MsgUpdateBountyExpiryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateBountyExpiryResponseAminoMsg): MsgUpdateBountyExpiryResponse {
    return MsgUpdateBountyExpiryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateBountyExpiryResponseProtoMsg): MsgUpdateBountyExpiryResponse {
    return MsgUpdateBountyExpiryResponse.decode(message.value);
  },
  toProto(message: MsgUpdateBountyExpiryResponse): Uint8Array {
    return MsgUpdateBountyExpiryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateBountyExpiryResponse): MsgUpdateBountyExpiryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse",
      value: MsgUpdateBountyExpiryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBounty(): MsgCloseBounty {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgCloseBounty = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
  encode(message: MsgCloseBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseBounty {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCloseBounty>): MsgCloseBounty {
    const message = createBaseMsgCloseBounty();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCloseBountyAmino): MsgCloseBounty {
    const message = createBaseMsgCloseBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCloseBounty): MsgCloseBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseBountyAminoMsg): MsgCloseBounty {
    return MsgCloseBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBountyProtoMsg): MsgCloseBounty {
    return MsgCloseBounty.decode(message.value);
  },
  toProto(message: MsgCloseBounty): Uint8Array {
    return MsgCloseBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBounty): MsgCloseBountyProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBounty",
      value: MsgCloseBounty.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBountyResponse(): MsgCloseBountyResponse {
  return {};
}
export const MsgCloseBountyResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse",
  encode(_: MsgCloseBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgCloseBountyResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseBountyResponse>): MsgCloseBountyResponse {
    const message = createBaseMsgCloseBountyResponse();
    return message;
  },
  fromAmino(_: MsgCloseBountyResponseAmino): MsgCloseBountyResponse {
    const message = createBaseMsgCloseBountyResponse();
    return message;
  },
  toAmino(_: MsgCloseBountyResponse): MsgCloseBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBountyResponseAminoMsg): MsgCloseBountyResponse {
    return MsgCloseBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBountyResponseProtoMsg): MsgCloseBountyResponse {
    return MsgCloseBountyResponse.decode(message.value);
  },
  toProto(message: MsgCloseBountyResponse): Uint8Array {
    return MsgCloseBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBountyResponse): MsgCloseBountyResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse",
      value: MsgCloseBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBounty(): MsgDeleteBounty {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteBounty = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
  encode(message: MsgDeleteBounty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteBounty {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteBounty>): MsgDeleteBounty {
    const message = createBaseMsgDeleteBounty();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteBountyAmino): MsgDeleteBounty {
    const message = createBaseMsgDeleteBounty();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteBounty): MsgDeleteBountyAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBountyAminoMsg): MsgDeleteBounty {
    return MsgDeleteBounty.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBountyProtoMsg): MsgDeleteBounty {
    return MsgDeleteBounty.decode(message.value);
  },
  toProto(message: MsgDeleteBounty): Uint8Array {
    return MsgDeleteBounty.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBounty): MsgDeleteBountyProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBounty",
      value: MsgDeleteBounty.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteBountyResponse(): MsgDeleteBountyResponse {
  return {};
}
export const MsgDeleteBountyResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse",
  encode(_: MsgDeleteBountyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteBountyResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteBountyResponse>): MsgDeleteBountyResponse {
    const message = createBaseMsgDeleteBountyResponse();
    return message;
  },
  fromAmino(_: MsgDeleteBountyResponseAmino): MsgDeleteBountyResponse {
    const message = createBaseMsgDeleteBountyResponse();
    return message;
  },
  toAmino(_: MsgDeleteBountyResponse): MsgDeleteBountyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteBountyResponseAminoMsg): MsgDeleteBountyResponse {
    return MsgDeleteBountyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteBountyResponseProtoMsg): MsgDeleteBountyResponse {
    return MsgDeleteBountyResponse.decode(message.value);
  },
  toProto(message: MsgDeleteBountyResponse): Uint8Array {
    return MsgDeleteBountyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteBountyResponse): MsgDeleteBountyResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse",
      value: MsgDeleteBountyResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRelease(): MsgCreateRelease {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    tagName: "",
    target: "",
    name: "",
    description: "",
    attachments: "",
    draft: false,
    preRelease: false,
    isTag: false
  };
}
export const MsgCreateRelease = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
  encode(message: MsgCreateRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.tagName !== "") {
      writer.uint32(26).string(message.tagName);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.attachments !== "") {
      writer.uint32(58).string(message.attachments);
    }
    if (message.draft === true) {
      writer.uint32(64).bool(message.draft);
    }
    if (message.preRelease === true) {
      writer.uint32(72).bool(message.preRelease);
    }
    if (message.isTag === true) {
      writer.uint32(80).bool(message.isTag);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRelease {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      tagName: isSet(object.tagName) ? String(object.tagName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      attachments: isSet(object.attachments) ? String(object.attachments) : "",
      draft: isSet(object.draft) ? Boolean(object.draft) : false,
      preRelease: isSet(object.preRelease) ? Boolean(object.preRelease) : false,
      isTag: isSet(object.isTag) ? Boolean(object.isTag) : false
    };
  },
  fromPartial(object: Partial<MsgCreateRelease>): MsgCreateRelease {
    const message = createBaseMsgCreateRelease();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.tagName = object.tagName ?? "";
    message.target = object.target ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.attachments = object.attachments ?? "";
    message.draft = object.draft ?? false;
    message.preRelease = object.preRelease ?? false;
    message.isTag = object.isTag ?? false;
    return message;
  },
  fromAmino(object: MsgCreateReleaseAmino): MsgCreateRelease {
    const message = createBaseMsgCreateRelease();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      message.attachments = object.attachments;
    }
    if (object.draft !== undefined && object.draft !== null) {
      message.draft = object.draft;
    }
    if (object.preRelease !== undefined && object.preRelease !== null) {
      message.preRelease = object.preRelease;
    }
    if (object.isTag !== undefined && object.isTag !== null) {
      message.isTag = object.isTag;
    }
    return message;
  },
  toAmino(message: MsgCreateRelease): MsgCreateReleaseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    obj.target = message.target === "" ? undefined : message.target;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.attachments = message.attachments === "" ? undefined : message.attachments;
    obj.draft = message.draft === false ? undefined : message.draft;
    obj.preRelease = message.preRelease === false ? undefined : message.preRelease;
    obj.isTag = message.isTag === false ? undefined : message.isTag;
    return obj;
  },
  fromAminoMsg(object: MsgCreateReleaseAminoMsg): MsgCreateRelease {
    return MsgCreateRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateReleaseProtoMsg): MsgCreateRelease {
    return MsgCreateRelease.decode(message.value);
  },
  toProto(message: MsgCreateRelease): Uint8Array {
    return MsgCreateRelease.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRelease): MsgCreateReleaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRelease",
      value: MsgCreateRelease.encode(message).finish()
    };
  }
};
function createBaseMsgCreateReleaseResponse(): MsgCreateReleaseResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateReleaseResponse",
  encode(message: MsgCreateReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateReleaseResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateReleaseResponse>): MsgCreateReleaseResponse {
    const message = createBaseMsgCreateReleaseResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateReleaseResponseAmino): MsgCreateReleaseResponse {
    const message = createBaseMsgCreateReleaseResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateReleaseResponse): MsgCreateReleaseResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateReleaseResponseAminoMsg): MsgCreateReleaseResponse {
    return MsgCreateReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateReleaseResponseProtoMsg): MsgCreateReleaseResponse {
    return MsgCreateReleaseResponse.decode(message.value);
  },
  toProto(message: MsgCreateReleaseResponse): Uint8Array {
    return MsgCreateReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateReleaseResponse): MsgCreateReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateReleaseResponse",
      value: MsgCreateReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRelease(): MsgUpdateRelease {
  return {
    creator: "",
    id: BigInt(0),
    tagName: "",
    target: "",
    name: "",
    description: "",
    attachments: "",
    draft: false,
    preRelease: false,
    isTag: false
  };
}
export const MsgUpdateRelease = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
  encode(message: MsgUpdateRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.tagName !== "") {
      writer.uint32(26).string(message.tagName);
    }
    if (message.target !== "") {
      writer.uint32(34).string(message.target);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    if (message.attachments !== "") {
      writer.uint32(58).string(message.attachments);
    }
    if (message.draft === true) {
      writer.uint32(64).bool(message.draft);
    }
    if (message.preRelease === true) {
      writer.uint32(72).bool(message.preRelease);
    }
    if (message.isTag === true) {
      writer.uint32(80).bool(message.isTag);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRelease {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      tagName: isSet(object.tagName) ? String(object.tagName) : "",
      target: isSet(object.target) ? String(object.target) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      attachments: isSet(object.attachments) ? String(object.attachments) : "",
      draft: isSet(object.draft) ? Boolean(object.draft) : false,
      preRelease: isSet(object.preRelease) ? Boolean(object.preRelease) : false,
      isTag: isSet(object.isTag) ? Boolean(object.isTag) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateRelease>): MsgUpdateRelease {
    const message = createBaseMsgUpdateRelease();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.tagName = object.tagName ?? "";
    message.target = object.target ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.attachments = object.attachments ?? "";
    message.draft = object.draft ?? false;
    message.preRelease = object.preRelease ?? false;
    message.isTag = object.isTag ?? false;
    return message;
  },
  fromAmino(object: MsgUpdateReleaseAmino): MsgUpdateRelease {
    const message = createBaseMsgUpdateRelease();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      message.attachments = object.attachments;
    }
    if (object.draft !== undefined && object.draft !== null) {
      message.draft = object.draft;
    }
    if (object.preRelease !== undefined && object.preRelease !== null) {
      message.preRelease = object.preRelease;
    }
    if (object.isTag !== undefined && object.isTag !== null) {
      message.isTag = object.isTag;
    }
    return message;
  },
  toAmino(message: MsgUpdateRelease): MsgUpdateReleaseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    obj.target = message.target === "" ? undefined : message.target;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.attachments = message.attachments === "" ? undefined : message.attachments;
    obj.draft = message.draft === false ? undefined : message.draft;
    obj.preRelease = message.preRelease === false ? undefined : message.preRelease;
    obj.isTag = message.isTag === false ? undefined : message.isTag;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReleaseAminoMsg): MsgUpdateRelease {
    return MsgUpdateRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateReleaseProtoMsg): MsgUpdateRelease {
    return MsgUpdateRelease.decode(message.value);
  },
  toProto(message: MsgUpdateRelease): Uint8Array {
    return MsgUpdateRelease.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRelease): MsgUpdateReleaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRelease",
      value: MsgUpdateRelease.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateReleaseResponse(): MsgUpdateReleaseResponse {
  return {};
}
export const MsgUpdateReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse",
  encode(_: MsgUpdateReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateReleaseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateReleaseResponse>): MsgUpdateReleaseResponse {
    const message = createBaseMsgUpdateReleaseResponse();
    return message;
  },
  fromAmino(_: MsgUpdateReleaseResponseAmino): MsgUpdateReleaseResponse {
    const message = createBaseMsgUpdateReleaseResponse();
    return message;
  },
  toAmino(_: MsgUpdateReleaseResponse): MsgUpdateReleaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateReleaseResponseAminoMsg): MsgUpdateReleaseResponse {
    return MsgUpdateReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateReleaseResponseProtoMsg): MsgUpdateReleaseResponse {
    return MsgUpdateReleaseResponse.decode(message.value);
  },
  toProto(message: MsgUpdateReleaseResponse): Uint8Array {
    return MsgUpdateReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateReleaseResponse): MsgUpdateReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse",
      value: MsgUpdateReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRelease(): MsgDeleteRelease {
  return {
    creator: "",
    id: BigInt(0)
  };
}
export const MsgDeleteRelease = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
  encode(message: MsgDeleteRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteRelease {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteRelease>): MsgDeleteRelease {
    const message = createBaseMsgDeleteRelease();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteReleaseAmino): MsgDeleteRelease {
    const message = createBaseMsgDeleteRelease();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgDeleteRelease): MsgDeleteReleaseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteReleaseAminoMsg): MsgDeleteRelease {
    return MsgDeleteRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteReleaseProtoMsg): MsgDeleteRelease {
    return MsgDeleteRelease.decode(message.value);
  },
  toProto(message: MsgDeleteRelease): Uint8Array {
    return MsgDeleteRelease.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRelease): MsgDeleteReleaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRelease",
      value: MsgDeleteRelease.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteReleaseResponse(): MsgDeleteReleaseResponse {
  return {};
}
export const MsgDeleteReleaseResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse",
  encode(_: MsgDeleteReleaseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteReleaseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteReleaseResponse>): MsgDeleteReleaseResponse {
    const message = createBaseMsgDeleteReleaseResponse();
    return message;
  },
  fromAmino(_: MsgDeleteReleaseResponseAmino): MsgDeleteReleaseResponse {
    const message = createBaseMsgDeleteReleaseResponse();
    return message;
  },
  toAmino(_: MsgDeleteReleaseResponse): MsgDeleteReleaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteReleaseResponseAminoMsg): MsgDeleteReleaseResponse {
    return MsgDeleteReleaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteReleaseResponseProtoMsg): MsgDeleteReleaseResponse {
    return MsgDeleteReleaseResponse.decode(message.value);
  },
  toProto(message: MsgDeleteReleaseResponse): Uint8Array {
    return MsgDeleteReleaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteReleaseResponse): MsgDeleteReleaseResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse",
      value: MsgDeleteReleaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePullRequest(): MsgCreatePullRequest {
  return {
    creator: "",
    title: "",
    description: "",
    headBranch: "",
    headRepositoryId: RepositoryId.fromPartial({}),
    baseBranch: "",
    baseRepositoryId: RepositoryId.fromPartial({}),
    reviewers: [],
    assignees: [],
    labelIds: [],
    issueIids: []
  };
}
export const MsgCreatePullRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
  encode(message: MsgCreatePullRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.headBranch !== "") {
      writer.uint32(34).string(message.headBranch);
    }
    if (message.headRepositoryId !== undefined) {
      RepositoryId.encode(message.headRepositoryId, writer.uint32(42).fork()).ldelim();
    }
    if (message.baseBranch !== "") {
      writer.uint32(50).string(message.baseBranch);
    }
    if (message.baseRepositoryId !== undefined) {
      RepositoryId.encode(message.baseRepositoryId, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.reviewers) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.assignees) {
      writer.uint32(74).string(v!);
    }
    writer.uint32(82).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    writer.uint32(90).fork();
    for (const v of message.issueIids) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgCreatePullRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      headBranch: isSet(object.headBranch) ? String(object.headBranch) : "",
      headRepositoryId: isSet(object.headRepositoryId) ? RepositoryId.fromJSON(object.headRepositoryId) : undefined,
      baseBranch: isSet(object.baseBranch) ? String(object.baseBranch) : "",
      baseRepositoryId: isSet(object.baseRepositoryId) ? RepositoryId.fromJSON(object.baseRepositoryId) : undefined,
      reviewers: Array.isArray(object?.reviewers) ? object.reviewers.map((e: any) => String(e)) : [],
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : [],
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : [],
      issueIids: Array.isArray(object?.issueIids) ? object.issueIids.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgCreatePullRequest>): MsgCreatePullRequest {
    const message = createBaseMsgCreatePullRequest();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.headBranch = object.headBranch ?? "";
    message.headRepositoryId = object.headRepositoryId !== undefined && object.headRepositoryId !== null ? RepositoryId.fromPartial(object.headRepositoryId) : undefined;
    message.baseBranch = object.baseBranch ?? "";
    message.baseRepositoryId = object.baseRepositoryId !== undefined && object.baseRepositoryId !== null ? RepositoryId.fromPartial(object.baseRepositoryId) : undefined;
    message.reviewers = object.reviewers?.map(e => e) || [];
    message.assignees = object.assignees?.map(e => e) || [];
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    message.issueIids = object.issueIids?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgCreatePullRequestAmino): MsgCreatePullRequest {
    const message = createBaseMsgCreatePullRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.headBranch !== undefined && object.headBranch !== null) {
      message.headBranch = object.headBranch;
    }
    if (object.headRepositoryId !== undefined && object.headRepositoryId !== null) {
      message.headRepositoryId = RepositoryId.fromAmino(object.headRepositoryId);
    }
    if (object.baseBranch !== undefined && object.baseBranch !== null) {
      message.baseBranch = object.baseBranch;
    }
    if (object.baseRepositoryId !== undefined && object.baseRepositoryId !== null) {
      message.baseRepositoryId = RepositoryId.fromAmino(object.baseRepositoryId);
    }
    message.reviewers = object.reviewers?.map(e => e) || [];
    message.assignees = object.assignees?.map(e => e) || [];
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    message.issueIids = object.issueIids?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgCreatePullRequest): MsgCreatePullRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    obj.headBranch = message.headBranch === "" ? undefined : message.headBranch;
    obj.headRepositoryId = message.headRepositoryId ? RepositoryId.toAmino(message.headRepositoryId) : undefined;
    obj.baseBranch = message.baseBranch === "" ? undefined : message.baseBranch;
    obj.baseRepositoryId = message.baseRepositoryId ? RepositoryId.toAmino(message.baseRepositoryId) : undefined;
    if (message.reviewers) {
      obj.reviewers = message.reviewers.map(e => e);
    } else {
      obj.reviewers = message.reviewers;
    }
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    if (message.issueIids) {
      obj.issueIids = message.issueIids.map(e => e.toString());
    } else {
      obj.issueIids = message.issueIids;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreatePullRequestAminoMsg): MsgCreatePullRequest {
    return MsgCreatePullRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePullRequestProtoMsg): MsgCreatePullRequest {
    return MsgCreatePullRequest.decode(message.value);
  },
  toProto(message: MsgCreatePullRequest): Uint8Array {
    return MsgCreatePullRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePullRequest): MsgCreatePullRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequest",
      value: MsgCreatePullRequest.encode(message).finish()
    };
  }
};
function createBaseMsgCreatePullRequestResponse(): MsgCreatePullRequestResponse {
  return {
    id: BigInt(0),
    iid: BigInt(0)
  };
}
export const MsgCreatePullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequestResponse",
  encode(message: MsgCreatePullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(16).uint64(message.iid);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreatePullRequestResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreatePullRequestResponse>): MsgCreatePullRequestResponse {
    const message = createBaseMsgCreatePullRequestResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreatePullRequestResponseAmino): MsgCreatePullRequestResponse {
    const message = createBaseMsgCreatePullRequestResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    return message;
  },
  toAmino(message: MsgCreatePullRequestResponse): MsgCreatePullRequestResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreatePullRequestResponseAminoMsg): MsgCreatePullRequestResponse {
    return MsgCreatePullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreatePullRequestResponseProtoMsg): MsgCreatePullRequestResponse {
    return MsgCreatePullRequestResponse.decode(message.value);
  },
  toProto(message: MsgCreatePullRequestResponse): Uint8Array {
    return MsgCreatePullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreatePullRequestResponse): MsgCreatePullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreatePullRequestResponse",
      value: MsgCreatePullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePullRequestTitle(): MsgUpdatePullRequestTitle {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    title: ""
  };
}
export const MsgUpdatePullRequestTitle = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
  encode(message: MsgUpdatePullRequestTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePullRequestTitle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      title: isSet(object.title) ? String(object.title) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePullRequestTitle>): MsgUpdatePullRequestTitle {
    const message = createBaseMsgUpdatePullRequestTitle();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.title = object.title ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePullRequestTitleAmino): MsgUpdatePullRequestTitle {
    const message = createBaseMsgUpdatePullRequestTitle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    return message;
  },
  toAmino(message: MsgUpdatePullRequestTitle): MsgUpdatePullRequestTitleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePullRequestTitleAminoMsg): MsgUpdatePullRequestTitle {
    return MsgUpdatePullRequestTitle.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePullRequestTitleProtoMsg): MsgUpdatePullRequestTitle {
    return MsgUpdatePullRequestTitle.decode(message.value);
  },
  toProto(message: MsgUpdatePullRequestTitle): Uint8Array {
    return MsgUpdatePullRequestTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePullRequestTitle): MsgUpdatePullRequestTitleProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitle",
      value: MsgUpdatePullRequestTitle.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePullRequestTitleResponse(): MsgUpdatePullRequestTitleResponse {
  return {};
}
export const MsgUpdatePullRequestTitleResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse",
  encode(_: MsgUpdatePullRequestTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePullRequestTitleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePullRequestTitleResponse>): MsgUpdatePullRequestTitleResponse {
    const message = createBaseMsgUpdatePullRequestTitleResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePullRequestTitleResponseAmino): MsgUpdatePullRequestTitleResponse {
    const message = createBaseMsgUpdatePullRequestTitleResponse();
    return message;
  },
  toAmino(_: MsgUpdatePullRequestTitleResponse): MsgUpdatePullRequestTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePullRequestTitleResponseAminoMsg): MsgUpdatePullRequestTitleResponse {
    return MsgUpdatePullRequestTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePullRequestTitleResponseProtoMsg): MsgUpdatePullRequestTitleResponse {
    return MsgUpdatePullRequestTitleResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePullRequestTitleResponse): Uint8Array {
    return MsgUpdatePullRequestTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePullRequestTitleResponse): MsgUpdatePullRequestTitleResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse",
      value: MsgUpdatePullRequestTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePullRequestDescription(): MsgUpdatePullRequestDescription {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    description: ""
  };
}
export const MsgUpdatePullRequestDescription = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
  encode(message: MsgUpdatePullRequestDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePullRequestDescription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdatePullRequestDescription>): MsgUpdatePullRequestDescription {
    const message = createBaseMsgUpdatePullRequestDescription();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdatePullRequestDescriptionAmino): MsgUpdatePullRequestDescription {
    const message = createBaseMsgUpdatePullRequestDescription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdatePullRequestDescription): MsgUpdatePullRequestDescriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePullRequestDescriptionAminoMsg): MsgUpdatePullRequestDescription {
    return MsgUpdatePullRequestDescription.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePullRequestDescriptionProtoMsg): MsgUpdatePullRequestDescription {
    return MsgUpdatePullRequestDescription.decode(message.value);
  },
  toProto(message: MsgUpdatePullRequestDescription): Uint8Array {
    return MsgUpdatePullRequestDescription.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePullRequestDescription): MsgUpdatePullRequestDescriptionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescription",
      value: MsgUpdatePullRequestDescription.encode(message).finish()
    };
  }
};
function createBaseMsgUpdatePullRequestDescriptionResponse(): MsgUpdatePullRequestDescriptionResponse {
  return {};
}
export const MsgUpdatePullRequestDescriptionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse",
  encode(_: MsgUpdatePullRequestDescriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePullRequestDescriptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePullRequestDescriptionResponse>): MsgUpdatePullRequestDescriptionResponse {
    const message = createBaseMsgUpdatePullRequestDescriptionResponse();
    return message;
  },
  fromAmino(_: MsgUpdatePullRequestDescriptionResponseAmino): MsgUpdatePullRequestDescriptionResponse {
    const message = createBaseMsgUpdatePullRequestDescriptionResponse();
    return message;
  },
  toAmino(_: MsgUpdatePullRequestDescriptionResponse): MsgUpdatePullRequestDescriptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdatePullRequestDescriptionResponseAminoMsg): MsgUpdatePullRequestDescriptionResponse {
    return MsgUpdatePullRequestDescriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdatePullRequestDescriptionResponseProtoMsg): MsgUpdatePullRequestDescriptionResponse {
    return MsgUpdatePullRequestDescriptionResponse.decode(message.value);
  },
  toProto(message: MsgUpdatePullRequestDescriptionResponse): Uint8Array {
    return MsgUpdatePullRequestDescriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdatePullRequestDescriptionResponse): MsgUpdatePullRequestDescriptionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse",
      value: MsgUpdatePullRequestDescriptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInvokeMergePullRequest(): MsgInvokeMergePullRequest {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    provider: ""
  };
}
export const MsgInvokeMergePullRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
  encode(message: MsgInvokeMergePullRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.provider !== "") {
      writer.uint32(34).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): MsgInvokeMergePullRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<MsgInvokeMergePullRequest>): MsgInvokeMergePullRequest {
    const message = createBaseMsgInvokeMergePullRequest();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: MsgInvokeMergePullRequestAmino): MsgInvokeMergePullRequest {
    const message = createBaseMsgInvokeMergePullRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: MsgInvokeMergePullRequest): MsgInvokeMergePullRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: MsgInvokeMergePullRequestAminoMsg): MsgInvokeMergePullRequest {
    return MsgInvokeMergePullRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvokeMergePullRequestProtoMsg): MsgInvokeMergePullRequest {
    return MsgInvokeMergePullRequest.decode(message.value);
  },
  toProto(message: MsgInvokeMergePullRequest): Uint8Array {
    return MsgInvokeMergePullRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgInvokeMergePullRequest): MsgInvokeMergePullRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequest",
      value: MsgInvokeMergePullRequest.encode(message).finish()
    };
  }
};
function createBaseMsgInvokeMergePullRequestResponse(): MsgInvokeMergePullRequestResponse {
  return {};
}
export const MsgInvokeMergePullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse",
  encode(_: MsgInvokeMergePullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInvokeMergePullRequestResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInvokeMergePullRequestResponse>): MsgInvokeMergePullRequestResponse {
    const message = createBaseMsgInvokeMergePullRequestResponse();
    return message;
  },
  fromAmino(_: MsgInvokeMergePullRequestResponseAmino): MsgInvokeMergePullRequestResponse {
    const message = createBaseMsgInvokeMergePullRequestResponse();
    return message;
  },
  toAmino(_: MsgInvokeMergePullRequestResponse): MsgInvokeMergePullRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInvokeMergePullRequestResponseAminoMsg): MsgInvokeMergePullRequestResponse {
    return MsgInvokeMergePullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvokeMergePullRequestResponseProtoMsg): MsgInvokeMergePullRequestResponse {
    return MsgInvokeMergePullRequestResponse.decode(message.value);
  },
  toProto(message: MsgInvokeMergePullRequestResponse): Uint8Array {
    return MsgInvokeMergePullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInvokeMergePullRequestResponse): MsgInvokeMergePullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse",
      value: MsgInvokeMergePullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSetPullRequestState(): MsgSetPullRequestState {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    state: "",
    mergeCommitSha: "",
    commentBody: "",
    taskId: BigInt(0)
  };
}
export const MsgSetPullRequestState = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
  encode(message: MsgSetPullRequestState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.mergeCommitSha !== "") {
      writer.uint32(42).string(message.mergeCommitSha);
    }
    if (message.commentBody !== "") {
      writer.uint32(50).string(message.commentBody);
    }
    if (message.taskId !== BigInt(0)) {
      writer.uint32(56).uint64(message.taskId);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetPullRequestState {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      state: isSet(object.state) ? String(object.state) : "",
      mergeCommitSha: isSet(object.mergeCommitSha) ? String(object.mergeCommitSha) : "",
      commentBody: isSet(object.commentBody) ? String(object.commentBody) : "",
      taskId: isSet(object.taskId) ? BigInt(object.taskId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgSetPullRequestState>): MsgSetPullRequestState {
    const message = createBaseMsgSetPullRequestState();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.state = object.state ?? "";
    message.mergeCommitSha = object.mergeCommitSha ?? "";
    message.commentBody = object.commentBody ?? "";
    message.taskId = object.taskId !== undefined && object.taskId !== null ? BigInt(object.taskId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgSetPullRequestStateAmino): MsgSetPullRequestState {
    const message = createBaseMsgSetPullRequestState();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.mergeCommitSha !== undefined && object.mergeCommitSha !== null) {
      message.mergeCommitSha = object.mergeCommitSha;
    }
    if (object.commentBody !== undefined && object.commentBody !== null) {
      message.commentBody = object.commentBody;
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = BigInt(object.taskId);
    }
    return message;
  },
  toAmino(message: MsgSetPullRequestState): MsgSetPullRequestStateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.state = message.state === "" ? undefined : message.state;
    obj.mergeCommitSha = message.mergeCommitSha === "" ? undefined : message.mergeCommitSha;
    obj.commentBody = message.commentBody === "" ? undefined : message.commentBody;
    obj.taskId = message.taskId !== BigInt(0) ? message.taskId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSetPullRequestStateAminoMsg): MsgSetPullRequestState {
    return MsgSetPullRequestState.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPullRequestStateProtoMsg): MsgSetPullRequestState {
    return MsgSetPullRequestState.decode(message.value);
  },
  toProto(message: MsgSetPullRequestState): Uint8Array {
    return MsgSetPullRequestState.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPullRequestState): MsgSetPullRequestStateProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestState",
      value: MsgSetPullRequestState.encode(message).finish()
    };
  }
};
function createBaseMsgSetPullRequestStateResponse(): MsgSetPullRequestStateResponse {
  return {
    state: ""
  };
}
export const MsgSetPullRequestStateResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestStateResponse",
  encode(message: MsgSetPullRequestStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): MsgSetPullRequestStateResponse {
    return {
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<MsgSetPullRequestStateResponse>): MsgSetPullRequestStateResponse {
    const message = createBaseMsgSetPullRequestStateResponse();
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: MsgSetPullRequestStateResponseAmino): MsgSetPullRequestStateResponse {
    const message = createBaseMsgSetPullRequestStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: MsgSetPullRequestStateResponse): MsgSetPullRequestStateResponseAmino {
    const obj: any = {};
    obj.state = message.state === "" ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: MsgSetPullRequestStateResponseAminoMsg): MsgSetPullRequestStateResponse {
    return MsgSetPullRequestStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSetPullRequestStateResponseProtoMsg): MsgSetPullRequestStateResponse {
    return MsgSetPullRequestStateResponse.decode(message.value);
  },
  toProto(message: MsgSetPullRequestStateResponse): Uint8Array {
    return MsgSetPullRequestStateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetPullRequestStateResponse): MsgSetPullRequestStateResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgSetPullRequestStateResponse",
      value: MsgSetPullRequestStateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestReviewers(): MsgAddPullRequestReviewers {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    reviewers: []
  };
}
export const MsgAddPullRequestReviewers = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
  encode(message: MsgAddPullRequestReviewers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.reviewers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddPullRequestReviewers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      reviewers: Array.isArray(object?.reviewers) ? object.reviewers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddPullRequestReviewers>): MsgAddPullRequestReviewers {
    const message = createBaseMsgAddPullRequestReviewers();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.reviewers = object.reviewers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgAddPullRequestReviewersAmino): MsgAddPullRequestReviewers {
    const message = createBaseMsgAddPullRequestReviewers();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.reviewers = object.reviewers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgAddPullRequestReviewers): MsgAddPullRequestReviewersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.reviewers) {
      obj.reviewers = message.reviewers.map(e => e);
    } else {
      obj.reviewers = message.reviewers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestReviewersAminoMsg): MsgAddPullRequestReviewers {
    return MsgAddPullRequestReviewers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestReviewersProtoMsg): MsgAddPullRequestReviewers {
    return MsgAddPullRequestReviewers.decode(message.value);
  },
  toProto(message: MsgAddPullRequestReviewers): Uint8Array {
    return MsgAddPullRequestReviewers.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestReviewers): MsgAddPullRequestReviewersProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewers",
      value: MsgAddPullRequestReviewers.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestReviewersResponse(): MsgAddPullRequestReviewersResponse {
  return {};
}
export const MsgAddPullRequestReviewersResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse",
  encode(_: MsgAddPullRequestReviewersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddPullRequestReviewersResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddPullRequestReviewersResponse>): MsgAddPullRequestReviewersResponse {
    const message = createBaseMsgAddPullRequestReviewersResponse();
    return message;
  },
  fromAmino(_: MsgAddPullRequestReviewersResponseAmino): MsgAddPullRequestReviewersResponse {
    const message = createBaseMsgAddPullRequestReviewersResponse();
    return message;
  },
  toAmino(_: MsgAddPullRequestReviewersResponse): MsgAddPullRequestReviewersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestReviewersResponseAminoMsg): MsgAddPullRequestReviewersResponse {
    return MsgAddPullRequestReviewersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestReviewersResponseProtoMsg): MsgAddPullRequestReviewersResponse {
    return MsgAddPullRequestReviewersResponse.decode(message.value);
  },
  toProto(message: MsgAddPullRequestReviewersResponse): Uint8Array {
    return MsgAddPullRequestReviewersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestReviewersResponse): MsgAddPullRequestReviewersResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse",
      value: MsgAddPullRequestReviewersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestReviewers(): MsgRemovePullRequestReviewers {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    reviewers: []
  };
}
export const MsgRemovePullRequestReviewers = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
  encode(message: MsgRemovePullRequestReviewers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.reviewers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemovePullRequestReviewers {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      reviewers: Array.isArray(object?.reviewers) ? object.reviewers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRemovePullRequestReviewers>): MsgRemovePullRequestReviewers {
    const message = createBaseMsgRemovePullRequestReviewers();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.reviewers = object.reviewers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRemovePullRequestReviewersAmino): MsgRemovePullRequestReviewers {
    const message = createBaseMsgRemovePullRequestReviewers();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.reviewers = object.reviewers?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRemovePullRequestReviewers): MsgRemovePullRequestReviewersAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.reviewers) {
      obj.reviewers = message.reviewers.map(e => e);
    } else {
      obj.reviewers = message.reviewers;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestReviewersAminoMsg): MsgRemovePullRequestReviewers {
    return MsgRemovePullRequestReviewers.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestReviewersProtoMsg): MsgRemovePullRequestReviewers {
    return MsgRemovePullRequestReviewers.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestReviewers): Uint8Array {
    return MsgRemovePullRequestReviewers.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestReviewers): MsgRemovePullRequestReviewersProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewers",
      value: MsgRemovePullRequestReviewers.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestReviewersResponse(): MsgRemovePullRequestReviewersResponse {
  return {};
}
export const MsgRemovePullRequestReviewersResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse",
  encode(_: MsgRemovePullRequestReviewersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemovePullRequestReviewersResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemovePullRequestReviewersResponse>): MsgRemovePullRequestReviewersResponse {
    const message = createBaseMsgRemovePullRequestReviewersResponse();
    return message;
  },
  fromAmino(_: MsgRemovePullRequestReviewersResponseAmino): MsgRemovePullRequestReviewersResponse {
    const message = createBaseMsgRemovePullRequestReviewersResponse();
    return message;
  },
  toAmino(_: MsgRemovePullRequestReviewersResponse): MsgRemovePullRequestReviewersResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestReviewersResponseAminoMsg): MsgRemovePullRequestReviewersResponse {
    return MsgRemovePullRequestReviewersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestReviewersResponseProtoMsg): MsgRemovePullRequestReviewersResponse {
    return MsgRemovePullRequestReviewersResponse.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestReviewersResponse): Uint8Array {
    return MsgRemovePullRequestReviewersResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestReviewersResponse): MsgRemovePullRequestReviewersResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse",
      value: MsgRemovePullRequestReviewersResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestAssignees(): MsgAddPullRequestAssignees {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    assignees: []
  };
}
export const MsgAddPullRequestAssignees = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
  encode(message: MsgAddPullRequestAssignees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.assignees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddPullRequestAssignees {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddPullRequestAssignees>): MsgAddPullRequestAssignees {
    const message = createBaseMsgAddPullRequestAssignees();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgAddPullRequestAssigneesAmino): MsgAddPullRequestAssignees {
    const message = createBaseMsgAddPullRequestAssignees();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgAddPullRequestAssignees): MsgAddPullRequestAssigneesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestAssigneesAminoMsg): MsgAddPullRequestAssignees {
    return MsgAddPullRequestAssignees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestAssigneesProtoMsg): MsgAddPullRequestAssignees {
    return MsgAddPullRequestAssignees.decode(message.value);
  },
  toProto(message: MsgAddPullRequestAssignees): Uint8Array {
    return MsgAddPullRequestAssignees.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestAssignees): MsgAddPullRequestAssigneesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssignees",
      value: MsgAddPullRequestAssignees.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestAssigneesResponse(): MsgAddPullRequestAssigneesResponse {
  return {};
}
export const MsgAddPullRequestAssigneesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse",
  encode(_: MsgAddPullRequestAssigneesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddPullRequestAssigneesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddPullRequestAssigneesResponse>): MsgAddPullRequestAssigneesResponse {
    const message = createBaseMsgAddPullRequestAssigneesResponse();
    return message;
  },
  fromAmino(_: MsgAddPullRequestAssigneesResponseAmino): MsgAddPullRequestAssigneesResponse {
    const message = createBaseMsgAddPullRequestAssigneesResponse();
    return message;
  },
  toAmino(_: MsgAddPullRequestAssigneesResponse): MsgAddPullRequestAssigneesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestAssigneesResponseAminoMsg): MsgAddPullRequestAssigneesResponse {
    return MsgAddPullRequestAssigneesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestAssigneesResponseProtoMsg): MsgAddPullRequestAssigneesResponse {
    return MsgAddPullRequestAssigneesResponse.decode(message.value);
  },
  toProto(message: MsgAddPullRequestAssigneesResponse): Uint8Array {
    return MsgAddPullRequestAssigneesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestAssigneesResponse): MsgAddPullRequestAssigneesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse",
      value: MsgAddPullRequestAssigneesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestAssignees(): MsgRemovePullRequestAssignees {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    assignees: []
  };
}
export const MsgRemovePullRequestAssignees = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
  encode(message: MsgRemovePullRequestAssignees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.assignees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemovePullRequestAssignees {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRemovePullRequestAssignees>): MsgRemovePullRequestAssignees {
    const message = createBaseMsgRemovePullRequestAssignees();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRemovePullRequestAssigneesAmino): MsgRemovePullRequestAssignees {
    const message = createBaseMsgRemovePullRequestAssignees();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRemovePullRequestAssignees): MsgRemovePullRequestAssigneesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestAssigneesAminoMsg): MsgRemovePullRequestAssignees {
    return MsgRemovePullRequestAssignees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestAssigneesProtoMsg): MsgRemovePullRequestAssignees {
    return MsgRemovePullRequestAssignees.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestAssignees): Uint8Array {
    return MsgRemovePullRequestAssignees.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestAssignees): MsgRemovePullRequestAssigneesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssignees",
      value: MsgRemovePullRequestAssignees.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestAssigneesResponse(): MsgRemovePullRequestAssigneesResponse {
  return {};
}
export const MsgRemovePullRequestAssigneesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse",
  encode(_: MsgRemovePullRequestAssigneesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemovePullRequestAssigneesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemovePullRequestAssigneesResponse>): MsgRemovePullRequestAssigneesResponse {
    const message = createBaseMsgRemovePullRequestAssigneesResponse();
    return message;
  },
  fromAmino(_: MsgRemovePullRequestAssigneesResponseAmino): MsgRemovePullRequestAssigneesResponse {
    const message = createBaseMsgRemovePullRequestAssigneesResponse();
    return message;
  },
  toAmino(_: MsgRemovePullRequestAssigneesResponse): MsgRemovePullRequestAssigneesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestAssigneesResponseAminoMsg): MsgRemovePullRequestAssigneesResponse {
    return MsgRemovePullRequestAssigneesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestAssigneesResponseProtoMsg): MsgRemovePullRequestAssigneesResponse {
    return MsgRemovePullRequestAssigneesResponse.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestAssigneesResponse): Uint8Array {
    return MsgRemovePullRequestAssigneesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestAssigneesResponse): MsgRemovePullRequestAssigneesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse",
      value: MsgRemovePullRequestAssigneesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgLinkPullRequestIssueByIid(): MsgLinkPullRequestIssueByIid {
  return {
    creator: "",
    repositoryId: BigInt(0),
    pullRequestIid: BigInt(0),
    issueIid: BigInt(0)
  };
}
export const MsgLinkPullRequestIssueByIid = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
  encode(message: MsgLinkPullRequestIssueByIid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.pullRequestIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.pullRequestIid);
    }
    if (message.issueIid !== BigInt(0)) {
      writer.uint32(32).uint64(message.issueIid);
    }
    return writer;
  },
  fromJSON(object: any): MsgLinkPullRequestIssueByIid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      pullRequestIid: isSet(object.pullRequestIid) ? BigInt(object.pullRequestIid.toString()) : BigInt(0),
      issueIid: isSet(object.issueIid) ? BigInt(object.issueIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgLinkPullRequestIssueByIid>): MsgLinkPullRequestIssueByIid {
    const message = createBaseMsgLinkPullRequestIssueByIid();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.pullRequestIid = object.pullRequestIid !== undefined && object.pullRequestIid !== null ? BigInt(object.pullRequestIid.toString()) : BigInt(0);
    message.issueIid = object.issueIid !== undefined && object.issueIid !== null ? BigInt(object.issueIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgLinkPullRequestIssueByIidAmino): MsgLinkPullRequestIssueByIid {
    const message = createBaseMsgLinkPullRequestIssueByIid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.pullRequestIid !== undefined && object.pullRequestIid !== null) {
      message.pullRequestIid = BigInt(object.pullRequestIid);
    }
    if (object.issueIid !== undefined && object.issueIid !== null) {
      message.issueIid = BigInt(object.issueIid);
    }
    return message;
  },
  toAmino(message: MsgLinkPullRequestIssueByIid): MsgLinkPullRequestIssueByIidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.pullRequestIid = message.pullRequestIid !== BigInt(0) ? message.pullRequestIid.toString() : undefined;
    obj.issueIid = message.issueIid !== BigInt(0) ? message.issueIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgLinkPullRequestIssueByIidAminoMsg): MsgLinkPullRequestIssueByIid {
    return MsgLinkPullRequestIssueByIid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkPullRequestIssueByIidProtoMsg): MsgLinkPullRequestIssueByIid {
    return MsgLinkPullRequestIssueByIid.decode(message.value);
  },
  toProto(message: MsgLinkPullRequestIssueByIid): Uint8Array {
    return MsgLinkPullRequestIssueByIid.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkPullRequestIssueByIid): MsgLinkPullRequestIssueByIidProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIid",
      value: MsgLinkPullRequestIssueByIid.encode(message).finish()
    };
  }
};
function createBaseMsgLinkPullRequestIssueByIidResponse(): MsgLinkPullRequestIssueByIidResponse {
  return {};
}
export const MsgLinkPullRequestIssueByIidResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse",
  encode(_: MsgLinkPullRequestIssueByIidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgLinkPullRequestIssueByIidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgLinkPullRequestIssueByIidResponse>): MsgLinkPullRequestIssueByIidResponse {
    const message = createBaseMsgLinkPullRequestIssueByIidResponse();
    return message;
  },
  fromAmino(_: MsgLinkPullRequestIssueByIidResponseAmino): MsgLinkPullRequestIssueByIidResponse {
    const message = createBaseMsgLinkPullRequestIssueByIidResponse();
    return message;
  },
  toAmino(_: MsgLinkPullRequestIssueByIidResponse): MsgLinkPullRequestIssueByIidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgLinkPullRequestIssueByIidResponseAminoMsg): MsgLinkPullRequestIssueByIidResponse {
    return MsgLinkPullRequestIssueByIidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgLinkPullRequestIssueByIidResponseProtoMsg): MsgLinkPullRequestIssueByIidResponse {
    return MsgLinkPullRequestIssueByIidResponse.decode(message.value);
  },
  toProto(message: MsgLinkPullRequestIssueByIidResponse): Uint8Array {
    return MsgLinkPullRequestIssueByIidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgLinkPullRequestIssueByIidResponse): MsgLinkPullRequestIssueByIidResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse",
      value: MsgLinkPullRequestIssueByIidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkPullRequestIssueByIid(): MsgUnlinkPullRequestIssueByIid {
  return {
    creator: "",
    repositoryId: BigInt(0),
    pullRequestIid: BigInt(0),
    issueIid: BigInt(0)
  };
}
export const MsgUnlinkPullRequestIssueByIid = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
  encode(message: MsgUnlinkPullRequestIssueByIid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.pullRequestIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.pullRequestIid);
    }
    if (message.issueIid !== BigInt(0)) {
      writer.uint32(32).uint64(message.issueIid);
    }
    return writer;
  },
  fromJSON(object: any): MsgUnlinkPullRequestIssueByIid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      pullRequestIid: isSet(object.pullRequestIid) ? BigInt(object.pullRequestIid.toString()) : BigInt(0),
      issueIid: isSet(object.issueIid) ? BigInt(object.issueIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUnlinkPullRequestIssueByIid>): MsgUnlinkPullRequestIssueByIid {
    const message = createBaseMsgUnlinkPullRequestIssueByIid();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.pullRequestIid = object.pullRequestIid !== undefined && object.pullRequestIid !== null ? BigInt(object.pullRequestIid.toString()) : BigInt(0);
    message.issueIid = object.issueIid !== undefined && object.issueIid !== null ? BigInt(object.issueIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUnlinkPullRequestIssueByIidAmino): MsgUnlinkPullRequestIssueByIid {
    const message = createBaseMsgUnlinkPullRequestIssueByIid();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.pullRequestIid !== undefined && object.pullRequestIid !== null) {
      message.pullRequestIid = BigInt(object.pullRequestIid);
    }
    if (object.issueIid !== undefined && object.issueIid !== null) {
      message.issueIid = BigInt(object.issueIid);
    }
    return message;
  },
  toAmino(message: MsgUnlinkPullRequestIssueByIid): MsgUnlinkPullRequestIssueByIidAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.pullRequestIid = message.pullRequestIid !== BigInt(0) ? message.pullRequestIid.toString() : undefined;
    obj.issueIid = message.issueIid !== BigInt(0) ? message.issueIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkPullRequestIssueByIidAminoMsg): MsgUnlinkPullRequestIssueByIid {
    return MsgUnlinkPullRequestIssueByIid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkPullRequestIssueByIidProtoMsg): MsgUnlinkPullRequestIssueByIid {
    return MsgUnlinkPullRequestIssueByIid.decode(message.value);
  },
  toProto(message: MsgUnlinkPullRequestIssueByIid): Uint8Array {
    return MsgUnlinkPullRequestIssueByIid.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkPullRequestIssueByIid): MsgUnlinkPullRequestIssueByIidProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIid",
      value: MsgUnlinkPullRequestIssueByIid.encode(message).finish()
    };
  }
};
function createBaseMsgUnlinkPullRequestIssueByIidResponse(): MsgUnlinkPullRequestIssueByIidResponse {
  return {};
}
export const MsgUnlinkPullRequestIssueByIidResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse",
  encode(_: MsgUnlinkPullRequestIssueByIidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUnlinkPullRequestIssueByIidResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUnlinkPullRequestIssueByIidResponse>): MsgUnlinkPullRequestIssueByIidResponse {
    const message = createBaseMsgUnlinkPullRequestIssueByIidResponse();
    return message;
  },
  fromAmino(_: MsgUnlinkPullRequestIssueByIidResponseAmino): MsgUnlinkPullRequestIssueByIidResponse {
    const message = createBaseMsgUnlinkPullRequestIssueByIidResponse();
    return message;
  },
  toAmino(_: MsgUnlinkPullRequestIssueByIidResponse): MsgUnlinkPullRequestIssueByIidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnlinkPullRequestIssueByIidResponseAminoMsg): MsgUnlinkPullRequestIssueByIidResponse {
    return MsgUnlinkPullRequestIssueByIidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUnlinkPullRequestIssueByIidResponseProtoMsg): MsgUnlinkPullRequestIssueByIidResponse {
    return MsgUnlinkPullRequestIssueByIidResponse.decode(message.value);
  },
  toProto(message: MsgUnlinkPullRequestIssueByIidResponse): Uint8Array {
    return MsgUnlinkPullRequestIssueByIidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnlinkPullRequestIssueByIidResponse): MsgUnlinkPullRequestIssueByIidResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse",
      value: MsgUnlinkPullRequestIssueByIidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestLabels(): MsgAddPullRequestLabels {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    labelIds: []
  };
}
export const MsgAddPullRequestLabels = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
  encode(message: MsgAddPullRequestLabels, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    writer.uint32(34).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgAddPullRequestLabels {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgAddPullRequestLabels>): MsgAddPullRequestLabels {
    const message = createBaseMsgAddPullRequestLabels();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgAddPullRequestLabelsAmino): MsgAddPullRequestLabels {
    const message = createBaseMsgAddPullRequestLabels();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgAddPullRequestLabels): MsgAddPullRequestLabelsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestLabelsAminoMsg): MsgAddPullRequestLabels {
    return MsgAddPullRequestLabels.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestLabelsProtoMsg): MsgAddPullRequestLabels {
    return MsgAddPullRequestLabels.decode(message.value);
  },
  toProto(message: MsgAddPullRequestLabels): Uint8Array {
    return MsgAddPullRequestLabels.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestLabels): MsgAddPullRequestLabelsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabels",
      value: MsgAddPullRequestLabels.encode(message).finish()
    };
  }
};
function createBaseMsgAddPullRequestLabelsResponse(): MsgAddPullRequestLabelsResponse {
  return {};
}
export const MsgAddPullRequestLabelsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse",
  encode(_: MsgAddPullRequestLabelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddPullRequestLabelsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddPullRequestLabelsResponse>): MsgAddPullRequestLabelsResponse {
    const message = createBaseMsgAddPullRequestLabelsResponse();
    return message;
  },
  fromAmino(_: MsgAddPullRequestLabelsResponseAmino): MsgAddPullRequestLabelsResponse {
    const message = createBaseMsgAddPullRequestLabelsResponse();
    return message;
  },
  toAmino(_: MsgAddPullRequestLabelsResponse): MsgAddPullRequestLabelsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddPullRequestLabelsResponseAminoMsg): MsgAddPullRequestLabelsResponse {
    return MsgAddPullRequestLabelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddPullRequestLabelsResponseProtoMsg): MsgAddPullRequestLabelsResponse {
    return MsgAddPullRequestLabelsResponse.decode(message.value);
  },
  toProto(message: MsgAddPullRequestLabelsResponse): Uint8Array {
    return MsgAddPullRequestLabelsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddPullRequestLabelsResponse): MsgAddPullRequestLabelsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse",
      value: MsgAddPullRequestLabelsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestLabels(): MsgRemovePullRequestLabels {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    labelIds: []
  };
}
export const MsgRemovePullRequestLabels = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
  encode(message: MsgRemovePullRequestLabels, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    writer.uint32(34).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgRemovePullRequestLabels {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgRemovePullRequestLabels>): MsgRemovePullRequestLabels {
    const message = createBaseMsgRemovePullRequestLabels();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRemovePullRequestLabelsAmino): MsgRemovePullRequestLabels {
    const message = createBaseMsgRemovePullRequestLabels();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRemovePullRequestLabels): MsgRemovePullRequestLabelsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestLabelsAminoMsg): MsgRemovePullRequestLabels {
    return MsgRemovePullRequestLabels.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestLabelsProtoMsg): MsgRemovePullRequestLabels {
    return MsgRemovePullRequestLabels.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestLabels): Uint8Array {
    return MsgRemovePullRequestLabels.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestLabels): MsgRemovePullRequestLabelsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabels",
      value: MsgRemovePullRequestLabels.encode(message).finish()
    };
  }
};
function createBaseMsgRemovePullRequestLabelsResponse(): MsgRemovePullRequestLabelsResponse {
  return {};
}
export const MsgRemovePullRequestLabelsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse",
  encode(_: MsgRemovePullRequestLabelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemovePullRequestLabelsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemovePullRequestLabelsResponse>): MsgRemovePullRequestLabelsResponse {
    const message = createBaseMsgRemovePullRequestLabelsResponse();
    return message;
  },
  fromAmino(_: MsgRemovePullRequestLabelsResponseAmino): MsgRemovePullRequestLabelsResponse {
    const message = createBaseMsgRemovePullRequestLabelsResponse();
    return message;
  },
  toAmino(_: MsgRemovePullRequestLabelsResponse): MsgRemovePullRequestLabelsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemovePullRequestLabelsResponseAminoMsg): MsgRemovePullRequestLabelsResponse {
    return MsgRemovePullRequestLabelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemovePullRequestLabelsResponseProtoMsg): MsgRemovePullRequestLabelsResponse {
    return MsgRemovePullRequestLabelsResponse.decode(message.value);
  },
  toProto(message: MsgRemovePullRequestLabelsResponse): Uint8Array {
    return MsgRemovePullRequestLabelsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemovePullRequestLabelsResponse): MsgRemovePullRequestLabelsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse",
      value: MsgRemovePullRequestLabelsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePullRequest(): MsgDeletePullRequest {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0)
  };
}
export const MsgDeletePullRequest = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
  encode(message: MsgDeletePullRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeletePullRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeletePullRequest>): MsgDeletePullRequest {
    const message = createBaseMsgDeletePullRequest();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeletePullRequestAmino): MsgDeletePullRequest {
    const message = createBaseMsgDeletePullRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    return message;
  },
  toAmino(message: MsgDeletePullRequest): MsgDeletePullRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeletePullRequestAminoMsg): MsgDeletePullRequest {
    return MsgDeletePullRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePullRequestProtoMsg): MsgDeletePullRequest {
    return MsgDeletePullRequest.decode(message.value);
  },
  toProto(message: MsgDeletePullRequest): Uint8Array {
    return MsgDeletePullRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePullRequest): MsgDeletePullRequestProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequest",
      value: MsgDeletePullRequest.encode(message).finish()
    };
  }
};
function createBaseMsgDeletePullRequestResponse(): MsgDeletePullRequestResponse {
  return {};
}
export const MsgDeletePullRequestResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse",
  encode(_: MsgDeletePullRequestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeletePullRequestResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeletePullRequestResponse>): MsgDeletePullRequestResponse {
    const message = createBaseMsgDeletePullRequestResponse();
    return message;
  },
  fromAmino(_: MsgDeletePullRequestResponseAmino): MsgDeletePullRequestResponse {
    const message = createBaseMsgDeletePullRequestResponse();
    return message;
  },
  toAmino(_: MsgDeletePullRequestResponse): MsgDeletePullRequestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeletePullRequestResponseAminoMsg): MsgDeletePullRequestResponse {
    return MsgDeletePullRequestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeletePullRequestResponseProtoMsg): MsgDeletePullRequestResponse {
    return MsgDeletePullRequestResponse.decode(message.value);
  },
  toProto(message: MsgDeletePullRequestResponse): Uint8Array {
    return MsgDeletePullRequestResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeletePullRequestResponse): MsgDeletePullRequestResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse",
      value: MsgDeletePullRequestResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDao(): MsgCreateDao {
  return {
    creator: "",
    name: "",
    description: "",
    avatarUrl: "",
    location: "",
    website: ""
  };
}
export const MsgCreateDao = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
  encode(message: MsgCreateDao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.location !== "") {
      writer.uint32(42).string(message.location);
    }
    if (message.website !== "") {
      writer.uint32(50).string(message.website);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDao {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      location: isSet(object.location) ? String(object.location) : "",
      website: isSet(object.website) ? String(object.website) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateDao>): MsgCreateDao {
    const message = createBaseMsgCreateDao();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.location = object.location ?? "";
    message.website = object.website ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDaoAmino): MsgCreateDao {
    const message = createBaseMsgCreateDao();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = object.avatarUrl;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    return message;
  },
  toAmino(message: MsgCreateDao): MsgCreateDaoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.avatarUrl = message.avatarUrl === "" ? undefined : message.avatarUrl;
    obj.location = message.location === "" ? undefined : message.location;
    obj.website = message.website === "" ? undefined : message.website;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDaoAminoMsg): MsgCreateDao {
    return MsgCreateDao.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDaoProtoMsg): MsgCreateDao {
    return MsgCreateDao.decode(message.value);
  },
  toProto(message: MsgCreateDao): Uint8Array {
    return MsgCreateDao.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDao): MsgCreateDaoProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDao",
      value: MsgCreateDao.encode(message).finish()
    };
  }
};
function createBaseMsgCreateDaoResponse(): MsgCreateDaoResponse {
  return {
    id: ""
  };
}
export const MsgCreateDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDaoResponse",
  encode(message: MsgCreateDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateDaoResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateDaoResponse>): MsgCreateDaoResponse {
    const message = createBaseMsgCreateDaoResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateDaoResponseAmino): MsgCreateDaoResponse {
    const message = createBaseMsgCreateDaoResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateDaoResponse): MsgCreateDaoResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDaoResponseAminoMsg): MsgCreateDaoResponse {
    return MsgCreateDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDaoResponseProtoMsg): MsgCreateDaoResponse {
    return MsgCreateDaoResponse.decode(message.value);
  },
  toProto(message: MsgCreateDaoResponse): Uint8Array {
    return MsgCreateDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDaoResponse): MsgCreateDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateDaoResponse",
      value: MsgCreateDaoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenameDao(): MsgRenameDao {
  return {
    creator: "",
    id: "",
    name: ""
  };
}
export const MsgRenameDao = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
  encode(message: MsgRenameDao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgRenameDao {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgRenameDao>): MsgRenameDao {
    const message = createBaseMsgRenameDao();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgRenameDaoAmino): MsgRenameDao {
    const message = createBaseMsgRenameDao();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgRenameDao): MsgRenameDaoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgRenameDaoAminoMsg): MsgRenameDao {
    return MsgRenameDao.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenameDaoProtoMsg): MsgRenameDao {
    return MsgRenameDao.decode(message.value);
  },
  toProto(message: MsgRenameDao): Uint8Array {
    return MsgRenameDao.encode(message).finish();
  },
  toProtoMsg(message: MsgRenameDao): MsgRenameDaoProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDao",
      value: MsgRenameDao.encode(message).finish()
    };
  }
};
function createBaseMsgRenameDaoResponse(): MsgRenameDaoResponse {
  return {};
}
export const MsgRenameDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse",
  encode(_: MsgRenameDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRenameDaoResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenameDaoResponse>): MsgRenameDaoResponse {
    const message = createBaseMsgRenameDaoResponse();
    return message;
  },
  fromAmino(_: MsgRenameDaoResponseAmino): MsgRenameDaoResponse {
    const message = createBaseMsgRenameDaoResponse();
    return message;
  },
  toAmino(_: MsgRenameDaoResponse): MsgRenameDaoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenameDaoResponseAminoMsg): MsgRenameDaoResponse {
    return MsgRenameDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenameDaoResponseProtoMsg): MsgRenameDaoResponse {
    return MsgRenameDaoResponse.decode(message.value);
  },
  toProto(message: MsgRenameDaoResponse): Uint8Array {
    return MsgRenameDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenameDaoResponse): MsgRenameDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse",
      value: MsgRenameDaoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoDescription(): MsgUpdateDaoDescription {
  return {
    creator: "",
    id: "",
    description: ""
  };
}
export const MsgUpdateDaoDescription = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
  encode(message: MsgUpdateDaoDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDaoDescription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDaoDescription>): MsgUpdateDaoDescription {
    const message = createBaseMsgUpdateDaoDescription();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDaoDescriptionAmino): MsgUpdateDaoDescription {
    const message = createBaseMsgUpdateDaoDescription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoDescription): MsgUpdateDaoDescriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoDescriptionAminoMsg): MsgUpdateDaoDescription {
    return MsgUpdateDaoDescription.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoDescriptionProtoMsg): MsgUpdateDaoDescription {
    return MsgUpdateDaoDescription.decode(message.value);
  },
  toProto(message: MsgUpdateDaoDescription): Uint8Array {
    return MsgUpdateDaoDescription.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoDescription): MsgUpdateDaoDescriptionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescription",
      value: MsgUpdateDaoDescription.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoDescriptionResponse(): MsgUpdateDaoDescriptionResponse {
  return {};
}
export const MsgUpdateDaoDescriptionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse",
  encode(_: MsgUpdateDaoDescriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDaoDescriptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDaoDescriptionResponse>): MsgUpdateDaoDescriptionResponse {
    const message = createBaseMsgUpdateDaoDescriptionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoDescriptionResponseAmino): MsgUpdateDaoDescriptionResponse {
    const message = createBaseMsgUpdateDaoDescriptionResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoDescriptionResponse): MsgUpdateDaoDescriptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoDescriptionResponseAminoMsg): MsgUpdateDaoDescriptionResponse {
    return MsgUpdateDaoDescriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoDescriptionResponseProtoMsg): MsgUpdateDaoDescriptionResponse {
    return MsgUpdateDaoDescriptionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoDescriptionResponse): Uint8Array {
    return MsgUpdateDaoDescriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoDescriptionResponse): MsgUpdateDaoDescriptionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse",
      value: MsgUpdateDaoDescriptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoWebsite(): MsgUpdateDaoWebsite {
  return {
    creator: "",
    id: "",
    url: ""
  };
}
export const MsgUpdateDaoWebsite = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
  encode(message: MsgUpdateDaoWebsite, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDaoWebsite {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDaoWebsite>): MsgUpdateDaoWebsite {
    const message = createBaseMsgUpdateDaoWebsite();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDaoWebsiteAmino): MsgUpdateDaoWebsite {
    const message = createBaseMsgUpdateDaoWebsite();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoWebsite): MsgUpdateDaoWebsiteAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoWebsiteAminoMsg): MsgUpdateDaoWebsite {
    return MsgUpdateDaoWebsite.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoWebsiteProtoMsg): MsgUpdateDaoWebsite {
    return MsgUpdateDaoWebsite.decode(message.value);
  },
  toProto(message: MsgUpdateDaoWebsite): Uint8Array {
    return MsgUpdateDaoWebsite.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoWebsite): MsgUpdateDaoWebsiteProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsite",
      value: MsgUpdateDaoWebsite.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoWebsiteResponse(): MsgUpdateDaoWebsiteResponse {
  return {};
}
export const MsgUpdateDaoWebsiteResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse",
  encode(_: MsgUpdateDaoWebsiteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDaoWebsiteResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDaoWebsiteResponse>): MsgUpdateDaoWebsiteResponse {
    const message = createBaseMsgUpdateDaoWebsiteResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoWebsiteResponseAmino): MsgUpdateDaoWebsiteResponse {
    const message = createBaseMsgUpdateDaoWebsiteResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoWebsiteResponse): MsgUpdateDaoWebsiteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoWebsiteResponseAminoMsg): MsgUpdateDaoWebsiteResponse {
    return MsgUpdateDaoWebsiteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoWebsiteResponseProtoMsg): MsgUpdateDaoWebsiteResponse {
    return MsgUpdateDaoWebsiteResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoWebsiteResponse): Uint8Array {
    return MsgUpdateDaoWebsiteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoWebsiteResponse): MsgUpdateDaoWebsiteResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse",
      value: MsgUpdateDaoWebsiteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoLocation(): MsgUpdateDaoLocation {
  return {
    creator: "",
    id: "",
    location: ""
  };
}
export const MsgUpdateDaoLocation = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
  encode(message: MsgUpdateDaoLocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.location !== "") {
      writer.uint32(26).string(message.location);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDaoLocation {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      location: isSet(object.location) ? String(object.location) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDaoLocation>): MsgUpdateDaoLocation {
    const message = createBaseMsgUpdateDaoLocation();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.location = object.location ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDaoLocationAmino): MsgUpdateDaoLocation {
    const message = createBaseMsgUpdateDaoLocation();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoLocation): MsgUpdateDaoLocationAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.location = message.location === "" ? undefined : message.location;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoLocationAminoMsg): MsgUpdateDaoLocation {
    return MsgUpdateDaoLocation.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoLocationProtoMsg): MsgUpdateDaoLocation {
    return MsgUpdateDaoLocation.decode(message.value);
  },
  toProto(message: MsgUpdateDaoLocation): Uint8Array {
    return MsgUpdateDaoLocation.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoLocation): MsgUpdateDaoLocationProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocation",
      value: MsgUpdateDaoLocation.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoLocationResponse(): MsgUpdateDaoLocationResponse {
  return {};
}
export const MsgUpdateDaoLocationResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse",
  encode(_: MsgUpdateDaoLocationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDaoLocationResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDaoLocationResponse>): MsgUpdateDaoLocationResponse {
    const message = createBaseMsgUpdateDaoLocationResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoLocationResponseAmino): MsgUpdateDaoLocationResponse {
    const message = createBaseMsgUpdateDaoLocationResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoLocationResponse): MsgUpdateDaoLocationResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoLocationResponseAminoMsg): MsgUpdateDaoLocationResponse {
    return MsgUpdateDaoLocationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoLocationResponseProtoMsg): MsgUpdateDaoLocationResponse {
    return MsgUpdateDaoLocationResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoLocationResponse): Uint8Array {
    return MsgUpdateDaoLocationResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoLocationResponse): MsgUpdateDaoLocationResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse",
      value: MsgUpdateDaoLocationResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoAvatar(): MsgUpdateDaoAvatar {
  return {
    creator: "",
    id: "",
    url: ""
  };
}
export const MsgUpdateDaoAvatar = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
  encode(message: MsgUpdateDaoAvatar, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.url !== "") {
      writer.uint32(26).string(message.url);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDaoAvatar {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDaoAvatar>): MsgUpdateDaoAvatar {
    const message = createBaseMsgUpdateDaoAvatar();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDaoAvatarAmino): MsgUpdateDaoAvatar {
    const message = createBaseMsgUpdateDaoAvatar();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoAvatar): MsgUpdateDaoAvatarAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoAvatarAminoMsg): MsgUpdateDaoAvatar {
    return MsgUpdateDaoAvatar.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoAvatarProtoMsg): MsgUpdateDaoAvatar {
    return MsgUpdateDaoAvatar.decode(message.value);
  },
  toProto(message: MsgUpdateDaoAvatar): Uint8Array {
    return MsgUpdateDaoAvatar.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoAvatar): MsgUpdateDaoAvatarProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatar",
      value: MsgUpdateDaoAvatar.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoAvatarResponse(): MsgUpdateDaoAvatarResponse {
  return {};
}
export const MsgUpdateDaoAvatarResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse",
  encode(_: MsgUpdateDaoAvatarResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDaoAvatarResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDaoAvatarResponse>): MsgUpdateDaoAvatarResponse {
    const message = createBaseMsgUpdateDaoAvatarResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoAvatarResponseAmino): MsgUpdateDaoAvatarResponse {
    const message = createBaseMsgUpdateDaoAvatarResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoAvatarResponse): MsgUpdateDaoAvatarResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoAvatarResponseAminoMsg): MsgUpdateDaoAvatarResponse {
    return MsgUpdateDaoAvatarResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoAvatarResponseProtoMsg): MsgUpdateDaoAvatarResponse {
    return MsgUpdateDaoAvatarResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoAvatarResponse): Uint8Array {
    return MsgUpdateDaoAvatarResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoAvatarResponse): MsgUpdateDaoAvatarResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse",
      value: MsgUpdateDaoAvatarResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteDao(): MsgDeleteDao {
  return {
    creator: "",
    id: ""
  };
}
export const MsgDeleteDao = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
  encode(message: MsgDeleteDao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteDao {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteDao>): MsgDeleteDao {
    const message = createBaseMsgDeleteDao();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteDaoAmino): MsgDeleteDao {
    const message = createBaseMsgDeleteDao();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgDeleteDao): MsgDeleteDaoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteDaoAminoMsg): MsgDeleteDao {
    return MsgDeleteDao.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteDaoProtoMsg): MsgDeleteDao {
    return MsgDeleteDao.decode(message.value);
  },
  toProto(message: MsgDeleteDao): Uint8Array {
    return MsgDeleteDao.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteDao): MsgDeleteDaoProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDao",
      value: MsgDeleteDao.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteDaoResponse(): MsgDeleteDaoResponse {
  return {};
}
export const MsgDeleteDaoResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse",
  encode(_: MsgDeleteDaoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteDaoResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteDaoResponse>): MsgDeleteDaoResponse {
    const message = createBaseMsgDeleteDaoResponse();
    return message;
  },
  fromAmino(_: MsgDeleteDaoResponseAmino): MsgDeleteDaoResponse {
    const message = createBaseMsgDeleteDaoResponse();
    return message;
  },
  toAmino(_: MsgDeleteDaoResponse): MsgDeleteDaoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteDaoResponseAminoMsg): MsgDeleteDaoResponse {
    return MsgDeleteDaoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteDaoResponseProtoMsg): MsgDeleteDaoResponse {
    return MsgDeleteDaoResponse.decode(message.value);
  },
  toProto(message: MsgDeleteDaoResponse): Uint8Array {
    return MsgDeleteDaoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteDaoResponse): MsgDeleteDaoResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse",
      value: MsgDeleteDaoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateComment(): MsgCreateComment {
  return {
    creator: "",
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    body: "",
    attachments: [],
    diffHunk: "",
    path: "",
    position: BigInt(0)
  };
}
export const MsgCreateComment = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
  encode(message: MsgCreateComment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(32).int32(message.parent);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.diffHunk !== "") {
      writer.uint32(58).string(message.diffHunk);
    }
    if (message.path !== "") {
      writer.uint32(66).string(message.path);
    }
    if (message.position !== BigInt(0)) {
      writer.uint32(72).uint64(message.position);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateComment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? commentParentFromJSON(object.parent) : -1,
      body: isSet(object.body) ? String(object.body) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Attachment.fromJSON(e)) : [],
      diffHunk: isSet(object.diffHunk) ? String(object.diffHunk) : "",
      path: isSet(object.path) ? String(object.path) : "",
      position: isSet(object.position) ? BigInt(object.position.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateComment>): MsgCreateComment {
    const message = createBaseMsgCreateComment();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.body = object.body ?? "";
    message.attachments = object.attachments?.map(e => Attachment.fromPartial(e)) || [];
    message.diffHunk = object.diffHunk ?? "";
    message.path = object.path ?? "";
    message.position = object.position !== undefined && object.position !== null ? BigInt(object.position.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCommentAmino): MsgCreateComment {
    const message = createBaseMsgCreateComment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    message.attachments = object.attachments?.map(e => Attachment.fromAmino(e)) || [];
    if (object.diffHunk !== undefined && object.diffHunk !== null) {
      message.diffHunk = object.diffHunk;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.position !== undefined && object.position !== null) {
      message.position = BigInt(object.position);
    }
    return message;
  },
  toAmino(message: MsgCreateComment): MsgCreateCommentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.body = message.body === "" ? undefined : message.body;
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Attachment.toAmino(e) : undefined);
    } else {
      obj.attachments = message.attachments;
    }
    obj.diffHunk = message.diffHunk === "" ? undefined : message.diffHunk;
    obj.path = message.path === "" ? undefined : message.path;
    obj.position = message.position !== BigInt(0) ? message.position.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCommentAminoMsg): MsgCreateComment {
    return MsgCreateComment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCommentProtoMsg): MsgCreateComment {
    return MsgCreateComment.decode(message.value);
  },
  toProto(message: MsgCreateComment): Uint8Array {
    return MsgCreateComment.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateComment): MsgCreateCommentProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateComment",
      value: MsgCreateComment.encode(message).finish()
    };
  }
};
function createBaseMsgCreateCommentResponse(): MsgCreateCommentResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateCommentResponse",
  encode(message: MsgCreateCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateCommentResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateCommentResponse>): MsgCreateCommentResponse {
    const message = createBaseMsgCreateCommentResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateCommentResponseAmino): MsgCreateCommentResponse {
    const message = createBaseMsgCreateCommentResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateCommentResponse): MsgCreateCommentResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateCommentResponseAminoMsg): MsgCreateCommentResponse {
    return MsgCreateCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCommentResponseProtoMsg): MsgCreateCommentResponse {
    return MsgCreateCommentResponse.decode(message.value);
  },
  toProto(message: MsgCreateCommentResponse): Uint8Array {
    return MsgCreateCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCommentResponse): MsgCreateCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateCommentResponse",
      value: MsgCreateCommentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateComment(): MsgUpdateComment {
  return {
    creator: "",
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    commentIid: BigInt(0),
    body: "",
    attachments: []
  };
}
export const MsgUpdateComment = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
  encode(message: MsgUpdateComment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(32).int32(message.parent);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(40).uint64(message.commentIid);
    }
    if (message.body !== "") {
      writer.uint32(50).string(message.body);
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateComment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? commentParentFromJSON(object.parent) : -1,
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0),
      body: isSet(object.body) ? String(object.body) : "",
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Attachment.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdateComment>): MsgUpdateComment {
    const message = createBaseMsgUpdateComment();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    message.body = object.body ?? "";
    message.attachments = object.attachments?.map(e => Attachment.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgUpdateCommentAmino): MsgUpdateComment {
    const message = createBaseMsgUpdateComment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    }
    message.attachments = object.attachments?.map(e => Attachment.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgUpdateComment): MsgUpdateCommentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    obj.body = message.body === "" ? undefined : message.body;
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Attachment.toAmino(e) : undefined);
    } else {
      obj.attachments = message.attachments;
    }
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCommentAminoMsg): MsgUpdateComment {
    return MsgUpdateComment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCommentProtoMsg): MsgUpdateComment {
    return MsgUpdateComment.decode(message.value);
  },
  toProto(message: MsgUpdateComment): Uint8Array {
    return MsgUpdateComment.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateComment): MsgUpdateCommentProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateComment",
      value: MsgUpdateComment.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateCommentResponse(): MsgUpdateCommentResponse {
  return {};
}
export const MsgUpdateCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse",
  encode(_: MsgUpdateCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateCommentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateCommentResponse>): MsgUpdateCommentResponse {
    const message = createBaseMsgUpdateCommentResponse();
    return message;
  },
  fromAmino(_: MsgUpdateCommentResponseAmino): MsgUpdateCommentResponse {
    const message = createBaseMsgUpdateCommentResponse();
    return message;
  },
  toAmino(_: MsgUpdateCommentResponse): MsgUpdateCommentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateCommentResponseAminoMsg): MsgUpdateCommentResponse {
    return MsgUpdateCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateCommentResponseProtoMsg): MsgUpdateCommentResponse {
    return MsgUpdateCommentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateCommentResponse): Uint8Array {
    return MsgUpdateCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateCommentResponse): MsgUpdateCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse",
      value: MsgUpdateCommentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteComment(): MsgDeleteComment {
  return {
    creator: "",
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    commentIid: BigInt(0)
  };
}
export const MsgDeleteComment = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
  encode(message: MsgDeleteComment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(32).int32(message.parent);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(40).uint64(message.commentIid);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteComment {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? commentParentFromJSON(object.parent) : -1,
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteComment>): MsgDeleteComment {
    const message = createBaseMsgDeleteComment();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteCommentAmino): MsgDeleteComment {
    const message = createBaseMsgDeleteComment();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    return message;
  },
  toAmino(message: MsgDeleteComment): MsgDeleteCommentAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCommentAminoMsg): MsgDeleteComment {
    return MsgDeleteComment.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteCommentProtoMsg): MsgDeleteComment {
    return MsgDeleteComment.decode(message.value);
  },
  toProto(message: MsgDeleteComment): Uint8Array {
    return MsgDeleteComment.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteComment): MsgDeleteCommentProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteComment",
      value: MsgDeleteComment.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteCommentResponse(): MsgDeleteCommentResponse {
  return {};
}
export const MsgDeleteCommentResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse",
  encode(_: MsgDeleteCommentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteCommentResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteCommentResponse>): MsgDeleteCommentResponse {
    const message = createBaseMsgDeleteCommentResponse();
    return message;
  },
  fromAmino(_: MsgDeleteCommentResponseAmino): MsgDeleteCommentResponse {
    const message = createBaseMsgDeleteCommentResponse();
    return message;
  },
  toAmino(_: MsgDeleteCommentResponse): MsgDeleteCommentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteCommentResponseAminoMsg): MsgDeleteCommentResponse {
    return MsgDeleteCommentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteCommentResponseProtoMsg): MsgDeleteCommentResponse {
    return MsgDeleteCommentResponse.decode(message.value);
  },
  toProto(message: MsgDeleteCommentResponse): Uint8Array {
    return MsgDeleteCommentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteCommentResponse): MsgDeleteCommentResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse",
      value: MsgDeleteCommentResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleCommentResolved(): MsgToggleCommentResolved {
  return {
    creator: "",
    repositoryId: BigInt(0),
    parentIid: BigInt(0),
    parent: 0,
    commentIid: BigInt(0)
  };
}
export const MsgToggleCommentResolved = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
  encode(message: MsgToggleCommentResolved, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.parentIid !== BigInt(0)) {
      writer.uint32(24).uint64(message.parentIid);
    }
    if (message.parent !== 0) {
      writer.uint32(32).int32(message.parent);
    }
    if (message.commentIid !== BigInt(0)) {
      writer.uint32(40).uint64(message.commentIid);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleCommentResolved {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      parentIid: isSet(object.parentIid) ? BigInt(object.parentIid.toString()) : BigInt(0),
      parent: isSet(object.parent) ? commentParentFromJSON(object.parent) : -1,
      commentIid: isSet(object.commentIid) ? BigInt(object.commentIid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgToggleCommentResolved>): MsgToggleCommentResolved {
    const message = createBaseMsgToggleCommentResolved();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.parentIid = object.parentIid !== undefined && object.parentIid !== null ? BigInt(object.parentIid.toString()) : BigInt(0);
    message.parent = object.parent ?? 0;
    message.commentIid = object.commentIid !== undefined && object.commentIid !== null ? BigInt(object.commentIid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgToggleCommentResolvedAmino): MsgToggleCommentResolved {
    const message = createBaseMsgToggleCommentResolved();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.parentIid !== undefined && object.parentIid !== null) {
      message.parentIid = BigInt(object.parentIid);
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = object.parent;
    }
    if (object.commentIid !== undefined && object.commentIid !== null) {
      message.commentIid = BigInt(object.commentIid);
    }
    return message;
  },
  toAmino(message: MsgToggleCommentResolved): MsgToggleCommentResolvedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.parentIid = message.parentIid !== BigInt(0) ? message.parentIid.toString() : undefined;
    obj.parent = message.parent === 0 ? undefined : message.parent;
    obj.commentIid = message.commentIid !== BigInt(0) ? message.commentIid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgToggleCommentResolvedAminoMsg): MsgToggleCommentResolved {
    return MsgToggleCommentResolved.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleCommentResolvedProtoMsg): MsgToggleCommentResolved {
    return MsgToggleCommentResolved.decode(message.value);
  },
  toProto(message: MsgToggleCommentResolved): Uint8Array {
    return MsgToggleCommentResolved.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleCommentResolved): MsgToggleCommentResolvedProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolved",
      value: MsgToggleCommentResolved.encode(message).finish()
    };
  }
};
function createBaseMsgToggleCommentResolvedResponse(): MsgToggleCommentResolvedResponse {
  return {
    resolved: false
  };
}
export const MsgToggleCommentResolvedResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolvedResponse",
  encode(message: MsgToggleCommentResolvedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resolved === true) {
      writer.uint32(8).bool(message.resolved);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleCommentResolvedResponse {
    return {
      resolved: isSet(object.resolved) ? Boolean(object.resolved) : false
    };
  },
  fromPartial(object: Partial<MsgToggleCommentResolvedResponse>): MsgToggleCommentResolvedResponse {
    const message = createBaseMsgToggleCommentResolvedResponse();
    message.resolved = object.resolved ?? false;
    return message;
  },
  fromAmino(object: MsgToggleCommentResolvedResponseAmino): MsgToggleCommentResolvedResponse {
    const message = createBaseMsgToggleCommentResolvedResponse();
    if (object.resolved !== undefined && object.resolved !== null) {
      message.resolved = object.resolved;
    }
    return message;
  },
  toAmino(message: MsgToggleCommentResolvedResponse): MsgToggleCommentResolvedResponseAmino {
    const obj: any = {};
    obj.resolved = message.resolved === false ? undefined : message.resolved;
    return obj;
  },
  fromAminoMsg(object: MsgToggleCommentResolvedResponseAminoMsg): MsgToggleCommentResolvedResponse {
    return MsgToggleCommentResolvedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleCommentResolvedResponseProtoMsg): MsgToggleCommentResolvedResponse {
    return MsgToggleCommentResolvedResponse.decode(message.value);
  },
  toProto(message: MsgToggleCommentResolvedResponse): Uint8Array {
    return MsgToggleCommentResolvedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleCommentResolvedResponse): MsgToggleCommentResolvedResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleCommentResolvedResponse",
      value: MsgToggleCommentResolvedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateIssue(): MsgCreateIssue {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    title: "",
    description: "",
    labelIds: [],
    weight: BigInt(0),
    assignees: [],
    bountyAmount: [],
    bountyExpiry: BigInt(0)
  };
}
export const MsgCreateIssue = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
  encode(message: MsgCreateIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    writer.uint32(42).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.weight !== BigInt(0)) {
      writer.uint32(48).uint64(message.weight);
    }
    for (const v of message.assignees) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.bountyAmount) {
      Coin.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.bountyExpiry !== BigInt(0)) {
      writer.uint32(72).int64(message.bountyExpiry);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIssue {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : [],
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : [],
      bountyAmount: Array.isArray(object?.bountyAmount) ? object.bountyAmount.map((e: any) => Coin.fromJSON(e)) : [],
      bountyExpiry: isSet(object.bountyExpiry) ? BigInt(object.bountyExpiry.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateIssue>): MsgCreateIssue {
    const message = createBaseMsgCreateIssue();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    message.bountyAmount = object.bountyAmount?.map(e => Coin.fromPartial(e)) || [];
    message.bountyExpiry = object.bountyExpiry !== undefined && object.bountyExpiry !== null ? BigInt(object.bountyExpiry.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateIssueAmino): MsgCreateIssue {
    const message = createBaseMsgCreateIssue();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    message.bountyAmount = object.bountyAmount?.map(e => Coin.fromAmino(e)) || [];
    if (object.bountyExpiry !== undefined && object.bountyExpiry !== null) {
      message.bountyExpiry = BigInt(object.bountyExpiry);
    }
    return message;
  },
  toAmino(message: MsgCreateIssue): MsgCreateIssueAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    obj.weight = message.weight !== BigInt(0) ? message.weight.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    if (message.bountyAmount) {
      obj.bountyAmount = message.bountyAmount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bountyAmount = message.bountyAmount;
    }
    obj.bountyExpiry = message.bountyExpiry !== BigInt(0) ? message.bountyExpiry.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIssueAminoMsg): MsgCreateIssue {
    return MsgCreateIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIssueProtoMsg): MsgCreateIssue {
    return MsgCreateIssue.decode(message.value);
  },
  toProto(message: MsgCreateIssue): Uint8Array {
    return MsgCreateIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIssue): MsgCreateIssueProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssue",
      value: MsgCreateIssue.encode(message).finish()
    };
  }
};
function createBaseMsgCreateIssueResponse(): MsgCreateIssueResponse {
  return {
    id: BigInt(0),
    iid: BigInt(0)
  };
}
export const MsgCreateIssueResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssueResponse",
  encode(message: MsgCreateIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(16).uint64(message.iid);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIssueResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateIssueResponse>): MsgCreateIssueResponse {
    const message = createBaseMsgCreateIssueResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateIssueResponseAmino): MsgCreateIssueResponse {
    const message = createBaseMsgCreateIssueResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    return message;
  },
  toAmino(message: MsgCreateIssueResponse): MsgCreateIssueResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateIssueResponseAminoMsg): MsgCreateIssueResponse {
    return MsgCreateIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateIssueResponseProtoMsg): MsgCreateIssueResponse {
    return MsgCreateIssueResponse.decode(message.value);
  },
  toProto(message: MsgCreateIssueResponse): Uint8Array {
    return MsgCreateIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateIssueResponse): MsgCreateIssueResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateIssueResponse",
      value: MsgCreateIssueResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIssueTitle(): MsgUpdateIssueTitle {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    title: ""
  };
}
export const MsgUpdateIssueTitle = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
  encode(message: MsgUpdateIssueTitle, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateIssueTitle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      title: isSet(object.title) ? String(object.title) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateIssueTitle>): MsgUpdateIssueTitle {
    const message = createBaseMsgUpdateIssueTitle();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.title = object.title ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateIssueTitleAmino): MsgUpdateIssueTitle {
    const message = createBaseMsgUpdateIssueTitle();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    return message;
  },
  toAmino(message: MsgUpdateIssueTitle): MsgUpdateIssueTitleAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.title = message.title === "" ? undefined : message.title;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIssueTitleAminoMsg): MsgUpdateIssueTitle {
    return MsgUpdateIssueTitle.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIssueTitleProtoMsg): MsgUpdateIssueTitle {
    return MsgUpdateIssueTitle.decode(message.value);
  },
  toProto(message: MsgUpdateIssueTitle): Uint8Array {
    return MsgUpdateIssueTitle.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIssueTitle): MsgUpdateIssueTitleProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitle",
      value: MsgUpdateIssueTitle.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIssueTitleResponse(): MsgUpdateIssueTitleResponse {
  return {};
}
export const MsgUpdateIssueTitleResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse",
  encode(_: MsgUpdateIssueTitleResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateIssueTitleResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateIssueTitleResponse>): MsgUpdateIssueTitleResponse {
    const message = createBaseMsgUpdateIssueTitleResponse();
    return message;
  },
  fromAmino(_: MsgUpdateIssueTitleResponseAmino): MsgUpdateIssueTitleResponse {
    const message = createBaseMsgUpdateIssueTitleResponse();
    return message;
  },
  toAmino(_: MsgUpdateIssueTitleResponse): MsgUpdateIssueTitleResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIssueTitleResponseAminoMsg): MsgUpdateIssueTitleResponse {
    return MsgUpdateIssueTitleResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIssueTitleResponseProtoMsg): MsgUpdateIssueTitleResponse {
    return MsgUpdateIssueTitleResponse.decode(message.value);
  },
  toProto(message: MsgUpdateIssueTitleResponse): Uint8Array {
    return MsgUpdateIssueTitleResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIssueTitleResponse): MsgUpdateIssueTitleResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse",
      value: MsgUpdateIssueTitleResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIssueDescription(): MsgUpdateIssueDescription {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    description: ""
  };
}
export const MsgUpdateIssueDescription = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
  encode(message: MsgUpdateIssueDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateIssueDescription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateIssueDescription>): MsgUpdateIssueDescription {
    const message = createBaseMsgUpdateIssueDescription();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateIssueDescriptionAmino): MsgUpdateIssueDescription {
    const message = createBaseMsgUpdateIssueDescription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateIssueDescription): MsgUpdateIssueDescriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIssueDescriptionAminoMsg): MsgUpdateIssueDescription {
    return MsgUpdateIssueDescription.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIssueDescriptionProtoMsg): MsgUpdateIssueDescription {
    return MsgUpdateIssueDescription.decode(message.value);
  },
  toProto(message: MsgUpdateIssueDescription): Uint8Array {
    return MsgUpdateIssueDescription.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIssueDescription): MsgUpdateIssueDescriptionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescription",
      value: MsgUpdateIssueDescription.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateIssueDescriptionResponse(): MsgUpdateIssueDescriptionResponse {
  return {};
}
export const MsgUpdateIssueDescriptionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse",
  encode(_: MsgUpdateIssueDescriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateIssueDescriptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateIssueDescriptionResponse>): MsgUpdateIssueDescriptionResponse {
    const message = createBaseMsgUpdateIssueDescriptionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateIssueDescriptionResponseAmino): MsgUpdateIssueDescriptionResponse {
    const message = createBaseMsgUpdateIssueDescriptionResponse();
    return message;
  },
  toAmino(_: MsgUpdateIssueDescriptionResponse): MsgUpdateIssueDescriptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateIssueDescriptionResponseAminoMsg): MsgUpdateIssueDescriptionResponse {
    return MsgUpdateIssueDescriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateIssueDescriptionResponseProtoMsg): MsgUpdateIssueDescriptionResponse {
    return MsgUpdateIssueDescriptionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateIssueDescriptionResponse): Uint8Array {
    return MsgUpdateIssueDescriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateIssueDescriptionResponse): MsgUpdateIssueDescriptionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse",
      value: MsgUpdateIssueDescriptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleIssueState(): MsgToggleIssueState {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    commentBody: ""
  };
}
export const MsgToggleIssueState = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
  encode(message: MsgToggleIssueState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    if (message.commentBody !== "") {
      writer.uint32(34).string(message.commentBody);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleIssueState {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      commentBody: isSet(object.commentBody) ? String(object.commentBody) : ""
    };
  },
  fromPartial(object: Partial<MsgToggleIssueState>): MsgToggleIssueState {
    const message = createBaseMsgToggleIssueState();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.commentBody = object.commentBody ?? "";
    return message;
  },
  fromAmino(object: MsgToggleIssueStateAmino): MsgToggleIssueState {
    const message = createBaseMsgToggleIssueState();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.commentBody !== undefined && object.commentBody !== null) {
      message.commentBody = object.commentBody;
    }
    return message;
  },
  toAmino(message: MsgToggleIssueState): MsgToggleIssueStateAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.commentBody = message.commentBody === "" ? undefined : message.commentBody;
    return obj;
  },
  fromAminoMsg(object: MsgToggleIssueStateAminoMsg): MsgToggleIssueState {
    return MsgToggleIssueState.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleIssueStateProtoMsg): MsgToggleIssueState {
    return MsgToggleIssueState.decode(message.value);
  },
  toProto(message: MsgToggleIssueState): Uint8Array {
    return MsgToggleIssueState.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleIssueState): MsgToggleIssueStateProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueState",
      value: MsgToggleIssueState.encode(message).finish()
    };
  }
};
function createBaseMsgToggleIssueStateResponse(): MsgToggleIssueStateResponse {
  return {
    state: ""
  };
}
export const MsgToggleIssueStateResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueStateResponse",
  encode(message: MsgToggleIssueStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== "") {
      writer.uint32(10).string(message.state);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleIssueStateResponse {
    return {
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  fromPartial(object: Partial<MsgToggleIssueStateResponse>): MsgToggleIssueStateResponse {
    const message = createBaseMsgToggleIssueStateResponse();
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: MsgToggleIssueStateResponseAmino): MsgToggleIssueStateResponse {
    const message = createBaseMsgToggleIssueStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: MsgToggleIssueStateResponse): MsgToggleIssueStateResponseAmino {
    const obj: any = {};
    obj.state = message.state === "" ? undefined : message.state;
    return obj;
  },
  fromAminoMsg(object: MsgToggleIssueStateResponseAminoMsg): MsgToggleIssueStateResponse {
    return MsgToggleIssueStateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleIssueStateResponseProtoMsg): MsgToggleIssueStateResponse {
    return MsgToggleIssueStateResponse.decode(message.value);
  },
  toProto(message: MsgToggleIssueStateResponse): Uint8Array {
    return MsgToggleIssueStateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleIssueStateResponse): MsgToggleIssueStateResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleIssueStateResponse",
      value: MsgToggleIssueStateResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddIssueAssignees(): MsgAddIssueAssignees {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    assignees: []
  };
}
export const MsgAddIssueAssignees = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
  encode(message: MsgAddIssueAssignees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.assignees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgAddIssueAssignees {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgAddIssueAssignees>): MsgAddIssueAssignees {
    const message = createBaseMsgAddIssueAssignees();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgAddIssueAssigneesAmino): MsgAddIssueAssignees {
    const message = createBaseMsgAddIssueAssignees();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgAddIssueAssignees): MsgAddIssueAssigneesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddIssueAssigneesAminoMsg): MsgAddIssueAssignees {
    return MsgAddIssueAssignees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddIssueAssigneesProtoMsg): MsgAddIssueAssignees {
    return MsgAddIssueAssignees.decode(message.value);
  },
  toProto(message: MsgAddIssueAssignees): Uint8Array {
    return MsgAddIssueAssignees.encode(message).finish();
  },
  toProtoMsg(message: MsgAddIssueAssignees): MsgAddIssueAssigneesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssignees",
      value: MsgAddIssueAssignees.encode(message).finish()
    };
  }
};
function createBaseMsgAddIssueAssigneesResponse(): MsgAddIssueAssigneesResponse {
  return {};
}
export const MsgAddIssueAssigneesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse",
  encode(_: MsgAddIssueAssigneesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddIssueAssigneesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddIssueAssigneesResponse>): MsgAddIssueAssigneesResponse {
    const message = createBaseMsgAddIssueAssigneesResponse();
    return message;
  },
  fromAmino(_: MsgAddIssueAssigneesResponseAmino): MsgAddIssueAssigneesResponse {
    const message = createBaseMsgAddIssueAssigneesResponse();
    return message;
  },
  toAmino(_: MsgAddIssueAssigneesResponse): MsgAddIssueAssigneesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddIssueAssigneesResponseAminoMsg): MsgAddIssueAssigneesResponse {
    return MsgAddIssueAssigneesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddIssueAssigneesResponseProtoMsg): MsgAddIssueAssigneesResponse {
    return MsgAddIssueAssigneesResponse.decode(message.value);
  },
  toProto(message: MsgAddIssueAssigneesResponse): Uint8Array {
    return MsgAddIssueAssigneesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddIssueAssigneesResponse): MsgAddIssueAssigneesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse",
      value: MsgAddIssueAssigneesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveIssueAssignees(): MsgRemoveIssueAssignees {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    assignees: []
  };
}
export const MsgRemoveIssueAssignees = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
  encode(message: MsgRemoveIssueAssignees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    for (const v of message.assignees) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveIssueAssignees {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      assignees: Array.isArray(object?.assignees) ? object.assignees.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgRemoveIssueAssignees>): MsgRemoveIssueAssignees {
    const message = createBaseMsgRemoveIssueAssignees();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgRemoveIssueAssigneesAmino): MsgRemoveIssueAssignees {
    const message = createBaseMsgRemoveIssueAssignees();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.assignees = object.assignees?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgRemoveIssueAssignees): MsgRemoveIssueAssigneesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.assignees) {
      obj.assignees = message.assignees.map(e => e);
    } else {
      obj.assignees = message.assignees;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemoveIssueAssigneesAminoMsg): MsgRemoveIssueAssignees {
    return MsgRemoveIssueAssignees.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveIssueAssigneesProtoMsg): MsgRemoveIssueAssignees {
    return MsgRemoveIssueAssignees.decode(message.value);
  },
  toProto(message: MsgRemoveIssueAssignees): Uint8Array {
    return MsgRemoveIssueAssignees.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveIssueAssignees): MsgRemoveIssueAssigneesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssignees",
      value: MsgRemoveIssueAssignees.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveIssueAssigneesResponse(): MsgRemoveIssueAssigneesResponse {
  return {};
}
export const MsgRemoveIssueAssigneesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse",
  encode(_: MsgRemoveIssueAssigneesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveIssueAssigneesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveIssueAssigneesResponse>): MsgRemoveIssueAssigneesResponse {
    const message = createBaseMsgRemoveIssueAssigneesResponse();
    return message;
  },
  fromAmino(_: MsgRemoveIssueAssigneesResponseAmino): MsgRemoveIssueAssigneesResponse {
    const message = createBaseMsgRemoveIssueAssigneesResponse();
    return message;
  },
  toAmino(_: MsgRemoveIssueAssigneesResponse): MsgRemoveIssueAssigneesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveIssueAssigneesResponseAminoMsg): MsgRemoveIssueAssigneesResponse {
    return MsgRemoveIssueAssigneesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveIssueAssigneesResponseProtoMsg): MsgRemoveIssueAssigneesResponse {
    return MsgRemoveIssueAssigneesResponse.decode(message.value);
  },
  toProto(message: MsgRemoveIssueAssigneesResponse): Uint8Array {
    return MsgRemoveIssueAssigneesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveIssueAssigneesResponse): MsgRemoveIssueAssigneesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse",
      value: MsgRemoveIssueAssigneesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddIssueLabels(): MsgAddIssueLabels {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    labelIds: []
  };
}
export const MsgAddIssueLabels = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
  encode(message: MsgAddIssueLabels, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    writer.uint32(34).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgAddIssueLabels {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgAddIssueLabels>): MsgAddIssueLabels {
    const message = createBaseMsgAddIssueLabels();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgAddIssueLabelsAmino): MsgAddIssueLabels {
    const message = createBaseMsgAddIssueLabels();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgAddIssueLabels): MsgAddIssueLabelsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddIssueLabelsAminoMsg): MsgAddIssueLabels {
    return MsgAddIssueLabels.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddIssueLabelsProtoMsg): MsgAddIssueLabels {
    return MsgAddIssueLabels.decode(message.value);
  },
  toProto(message: MsgAddIssueLabels): Uint8Array {
    return MsgAddIssueLabels.encode(message).finish();
  },
  toProtoMsg(message: MsgAddIssueLabels): MsgAddIssueLabelsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabels",
      value: MsgAddIssueLabels.encode(message).finish()
    };
  }
};
function createBaseMsgAddIssueLabelsResponse(): MsgAddIssueLabelsResponse {
  return {};
}
export const MsgAddIssueLabelsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse",
  encode(_: MsgAddIssueLabelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgAddIssueLabelsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAddIssueLabelsResponse>): MsgAddIssueLabelsResponse {
    const message = createBaseMsgAddIssueLabelsResponse();
    return message;
  },
  fromAmino(_: MsgAddIssueLabelsResponseAmino): MsgAddIssueLabelsResponse {
    const message = createBaseMsgAddIssueLabelsResponse();
    return message;
  },
  toAmino(_: MsgAddIssueLabelsResponse): MsgAddIssueLabelsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddIssueLabelsResponseAminoMsg): MsgAddIssueLabelsResponse {
    return MsgAddIssueLabelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAddIssueLabelsResponseProtoMsg): MsgAddIssueLabelsResponse {
    return MsgAddIssueLabelsResponse.decode(message.value);
  },
  toProto(message: MsgAddIssueLabelsResponse): Uint8Array {
    return MsgAddIssueLabelsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddIssueLabelsResponse): MsgAddIssueLabelsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse",
      value: MsgAddIssueLabelsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveIssueLabels(): MsgRemoveIssueLabels {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0),
    labelIds: []
  };
}
export const MsgRemoveIssueLabels = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
  encode(message: MsgRemoveIssueLabels, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    writer.uint32(34).fork();
    for (const v of message.labelIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): MsgRemoveIssueLabels {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      labelIds: Array.isArray(object?.labelIds) ? object.labelIds.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<MsgRemoveIssueLabels>): MsgRemoveIssueLabels {
    const message = createBaseMsgRemoveIssueLabels();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.labelIds = object.labelIds?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRemoveIssueLabelsAmino): MsgRemoveIssueLabels {
    const message = createBaseMsgRemoveIssueLabels();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    message.labelIds = object.labelIds?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRemoveIssueLabels): MsgRemoveIssueLabelsAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    if (message.labelIds) {
      obj.labelIds = message.labelIds.map(e => e.toString());
    } else {
      obj.labelIds = message.labelIds;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRemoveIssueLabelsAminoMsg): MsgRemoveIssueLabels {
    return MsgRemoveIssueLabels.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveIssueLabelsProtoMsg): MsgRemoveIssueLabels {
    return MsgRemoveIssueLabels.decode(message.value);
  },
  toProto(message: MsgRemoveIssueLabels): Uint8Array {
    return MsgRemoveIssueLabels.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveIssueLabels): MsgRemoveIssueLabelsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabels",
      value: MsgRemoveIssueLabels.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveIssueLabelsResponse(): MsgRemoveIssueLabelsResponse {
  return {};
}
export const MsgRemoveIssueLabelsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse",
  encode(_: MsgRemoveIssueLabelsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveIssueLabelsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveIssueLabelsResponse>): MsgRemoveIssueLabelsResponse {
    const message = createBaseMsgRemoveIssueLabelsResponse();
    return message;
  },
  fromAmino(_: MsgRemoveIssueLabelsResponseAmino): MsgRemoveIssueLabelsResponse {
    const message = createBaseMsgRemoveIssueLabelsResponse();
    return message;
  },
  toAmino(_: MsgRemoveIssueLabelsResponse): MsgRemoveIssueLabelsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveIssueLabelsResponseAminoMsg): MsgRemoveIssueLabelsResponse {
    return MsgRemoveIssueLabelsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveIssueLabelsResponseProtoMsg): MsgRemoveIssueLabelsResponse {
    return MsgRemoveIssueLabelsResponse.decode(message.value);
  },
  toProto(message: MsgRemoveIssueLabelsResponse): Uint8Array {
    return MsgRemoveIssueLabelsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveIssueLabelsResponse): MsgRemoveIssueLabelsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse",
      value: MsgRemoveIssueLabelsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteIssue(): MsgDeleteIssue {
  return {
    creator: "",
    repositoryId: BigInt(0),
    iid: BigInt(0)
  };
}
export const MsgDeleteIssue = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
  encode(message: MsgDeleteIssue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.iid !== BigInt(0)) {
      writer.uint32(24).uint64(message.iid);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteIssue {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteIssue>): MsgDeleteIssue {
    const message = createBaseMsgDeleteIssue();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteIssueAmino): MsgDeleteIssue {
    const message = createBaseMsgDeleteIssue();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    return message;
  },
  toAmino(message: MsgDeleteIssue): MsgDeleteIssueAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteIssueAminoMsg): MsgDeleteIssue {
    return MsgDeleteIssue.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteIssueProtoMsg): MsgDeleteIssue {
    return MsgDeleteIssue.decode(message.value);
  },
  toProto(message: MsgDeleteIssue): Uint8Array {
    return MsgDeleteIssue.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteIssue): MsgDeleteIssueProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssue",
      value: MsgDeleteIssue.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteIssueResponse(): MsgDeleteIssueResponse {
  return {};
}
export const MsgDeleteIssueResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse",
  encode(_: MsgDeleteIssueResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteIssueResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteIssueResponse>): MsgDeleteIssueResponse {
    const message = createBaseMsgDeleteIssueResponse();
    return message;
  },
  fromAmino(_: MsgDeleteIssueResponseAmino): MsgDeleteIssueResponse {
    const message = createBaseMsgDeleteIssueResponse();
    return message;
  },
  toAmino(_: MsgDeleteIssueResponse): MsgDeleteIssueResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteIssueResponseAminoMsg): MsgDeleteIssueResponse {
    return MsgDeleteIssueResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteIssueResponseProtoMsg): MsgDeleteIssueResponse {
    return MsgDeleteIssueResponse.decode(message.value);
  },
  toProto(message: MsgDeleteIssueResponse): Uint8Array {
    return MsgDeleteIssueResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteIssueResponse): MsgDeleteIssueResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse",
      value: MsgDeleteIssueResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRepository(): MsgCreateRepository {
  return {
    creator: "",
    name: "",
    owner: "",
    description: ""
  };
}
export const MsgCreateRepository = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
  encode(message: MsgCreateRepository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRepository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateRepository>): MsgCreateRepository {
    const message = createBaseMsgCreateRepository();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgCreateRepositoryAmino): MsgCreateRepository {
    const message = createBaseMsgCreateRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgCreateRepository): MsgCreateRepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRepositoryAminoMsg): MsgCreateRepository {
    return MsgCreateRepository.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRepositoryProtoMsg): MsgCreateRepository {
    return MsgCreateRepository.decode(message.value);
  },
  toProto(message: MsgCreateRepository): Uint8Array {
    return MsgCreateRepository.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRepository): MsgCreateRepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepository",
      value: MsgCreateRepository.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRepositoryResponse(): MsgCreateRepositoryResponse {
  return {
    repositoryId: RepositoryId.fromPartial({})
  };
}
export const MsgCreateRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryResponse",
  encode(message: MsgCreateRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRepositoryResponse {
    return {
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined
    };
  },
  fromPartial(object: Partial<MsgCreateRepositoryResponse>): MsgCreateRepositoryResponse {
    const message = createBaseMsgCreateRepositoryResponse();
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateRepositoryResponseAmino): MsgCreateRepositoryResponse {
    const message = createBaseMsgCreateRepositoryResponse();
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgCreateRepositoryResponse): MsgCreateRepositoryResponseAmino {
    const obj: any = {};
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRepositoryResponseAminoMsg): MsgCreateRepositoryResponse {
    return MsgCreateRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRepositoryResponseProtoMsg): MsgCreateRepositoryResponse {
    return MsgCreateRepositoryResponse.decode(message.value);
  },
  toProto(message: MsgCreateRepositoryResponse): Uint8Array {
    return MsgCreateRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRepositoryResponse): MsgCreateRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryResponse",
      value: MsgCreateRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgInvokeForkRepository(): MsgInvokeForkRepository {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    forkRepositoryName: "",
    forkRepositoryDescription: "",
    branch: "",
    owner: "",
    provider: ""
  };
}
export const MsgInvokeForkRepository = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
  encode(message: MsgInvokeForkRepository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.forkRepositoryName !== "") {
      writer.uint32(26).string(message.forkRepositoryName);
    }
    if (message.forkRepositoryDescription !== "") {
      writer.uint32(34).string(message.forkRepositoryDescription);
    }
    if (message.branch !== "") {
      writer.uint32(42).string(message.branch);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.provider !== "") {
      writer.uint32(58).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): MsgInvokeForkRepository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      forkRepositoryName: isSet(object.forkRepositoryName) ? String(object.forkRepositoryName) : "",
      forkRepositoryDescription: isSet(object.forkRepositoryDescription) ? String(object.forkRepositoryDescription) : "",
      branch: isSet(object.branch) ? String(object.branch) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<MsgInvokeForkRepository>): MsgInvokeForkRepository {
    const message = createBaseMsgInvokeForkRepository();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.forkRepositoryName = object.forkRepositoryName ?? "";
    message.forkRepositoryDescription = object.forkRepositoryDescription ?? "";
    message.branch = object.branch ?? "";
    message.owner = object.owner ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: MsgInvokeForkRepositoryAmino): MsgInvokeForkRepository {
    const message = createBaseMsgInvokeForkRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.forkRepositoryName !== undefined && object.forkRepositoryName !== null) {
      message.forkRepositoryName = object.forkRepositoryName;
    }
    if (object.forkRepositoryDescription !== undefined && object.forkRepositoryDescription !== null) {
      message.forkRepositoryDescription = object.forkRepositoryDescription;
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: MsgInvokeForkRepository): MsgInvokeForkRepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.forkRepositoryName = message.forkRepositoryName === "" ? undefined : message.forkRepositoryName;
    obj.forkRepositoryDescription = message.forkRepositoryDescription === "" ? undefined : message.forkRepositoryDescription;
    obj.branch = message.branch === "" ? undefined : message.branch;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: MsgInvokeForkRepositoryAminoMsg): MsgInvokeForkRepository {
    return MsgInvokeForkRepository.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvokeForkRepositoryProtoMsg): MsgInvokeForkRepository {
    return MsgInvokeForkRepository.decode(message.value);
  },
  toProto(message: MsgInvokeForkRepository): Uint8Array {
    return MsgInvokeForkRepository.encode(message).finish();
  },
  toProtoMsg(message: MsgInvokeForkRepository): MsgInvokeForkRepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepository",
      value: MsgInvokeForkRepository.encode(message).finish()
    };
  }
};
function createBaseMsgInvokeForkRepositoryResponse(): MsgInvokeForkRepositoryResponse {
  return {};
}
export const MsgInvokeForkRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse",
  encode(_: MsgInvokeForkRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgInvokeForkRepositoryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgInvokeForkRepositoryResponse>): MsgInvokeForkRepositoryResponse {
    const message = createBaseMsgInvokeForkRepositoryResponse();
    return message;
  },
  fromAmino(_: MsgInvokeForkRepositoryResponseAmino): MsgInvokeForkRepositoryResponse {
    const message = createBaseMsgInvokeForkRepositoryResponse();
    return message;
  },
  toAmino(_: MsgInvokeForkRepositoryResponse): MsgInvokeForkRepositoryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgInvokeForkRepositoryResponseAminoMsg): MsgInvokeForkRepositoryResponse {
    return MsgInvokeForkRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgInvokeForkRepositoryResponseProtoMsg): MsgInvokeForkRepositoryResponse {
    return MsgInvokeForkRepositoryResponse.decode(message.value);
  },
  toProto(message: MsgInvokeForkRepositoryResponse): Uint8Array {
    return MsgInvokeForkRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgInvokeForkRepositoryResponse): MsgInvokeForkRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse",
      value: MsgInvokeForkRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForkRepository(): MsgForkRepository {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    forkRepositoryName: "",
    forkRepositoryDescription: "",
    branch: "",
    owner: "",
    taskId: BigInt(0)
  };
}
export const MsgForkRepository = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
  encode(message: MsgForkRepository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.forkRepositoryName !== "") {
      writer.uint32(26).string(message.forkRepositoryName);
    }
    if (message.forkRepositoryDescription !== "") {
      writer.uint32(34).string(message.forkRepositoryDescription);
    }
    if (message.branch !== "") {
      writer.uint32(42).string(message.branch);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    if (message.taskId !== BigInt(0)) {
      writer.uint32(56).uint64(message.taskId);
    }
    return writer;
  },
  fromJSON(object: any): MsgForkRepository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      forkRepositoryName: isSet(object.forkRepositoryName) ? String(object.forkRepositoryName) : "",
      forkRepositoryDescription: isSet(object.forkRepositoryDescription) ? String(object.forkRepositoryDescription) : "",
      branch: isSet(object.branch) ? String(object.branch) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      taskId: isSet(object.taskId) ? BigInt(object.taskId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgForkRepository>): MsgForkRepository {
    const message = createBaseMsgForkRepository();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.forkRepositoryName = object.forkRepositoryName ?? "";
    message.forkRepositoryDescription = object.forkRepositoryDescription ?? "";
    message.branch = object.branch ?? "";
    message.owner = object.owner ?? "";
    message.taskId = object.taskId !== undefined && object.taskId !== null ? BigInt(object.taskId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgForkRepositoryAmino): MsgForkRepository {
    const message = createBaseMsgForkRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.forkRepositoryName !== undefined && object.forkRepositoryName !== null) {
      message.forkRepositoryName = object.forkRepositoryName;
    }
    if (object.forkRepositoryDescription !== undefined && object.forkRepositoryDescription !== null) {
      message.forkRepositoryDescription = object.forkRepositoryDescription;
    }
    if (object.branch !== undefined && object.branch !== null) {
      message.branch = object.branch;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = BigInt(object.taskId);
    }
    return message;
  },
  toAmino(message: MsgForkRepository): MsgForkRepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.forkRepositoryName = message.forkRepositoryName === "" ? undefined : message.forkRepositoryName;
    obj.forkRepositoryDescription = message.forkRepositoryDescription === "" ? undefined : message.forkRepositoryDescription;
    obj.branch = message.branch === "" ? undefined : message.branch;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.taskId = message.taskId !== BigInt(0) ? message.taskId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForkRepositoryAminoMsg): MsgForkRepository {
    return MsgForkRepository.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForkRepositoryProtoMsg): MsgForkRepository {
    return MsgForkRepository.decode(message.value);
  },
  toProto(message: MsgForkRepository): Uint8Array {
    return MsgForkRepository.encode(message).finish();
  },
  toProtoMsg(message: MsgForkRepository): MsgForkRepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepository",
      value: MsgForkRepository.encode(message).finish()
    };
  }
};
function createBaseMsgForkRepositoryResponse(): MsgForkRepositoryResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgForkRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositoryResponse",
  encode(message: MsgForkRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgForkRepositoryResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgForkRepositoryResponse>): MsgForkRepositoryResponse {
    const message = createBaseMsgForkRepositoryResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgForkRepositoryResponseAmino): MsgForkRepositoryResponse {
    const message = createBaseMsgForkRepositoryResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgForkRepositoryResponse): MsgForkRepositoryResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForkRepositoryResponseAminoMsg): MsgForkRepositoryResponse {
    return MsgForkRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForkRepositoryResponseProtoMsg): MsgForkRepositoryResponse {
    return MsgForkRepositoryResponse.decode(message.value);
  },
  toProto(message: MsgForkRepositoryResponse): Uint8Array {
    return MsgForkRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForkRepositoryResponse): MsgForkRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositoryResponse",
      value: MsgForkRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgForkRepositorySuccess(): MsgForkRepositorySuccess {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    taskId: BigInt(0)
  };
}
export const MsgForkRepositorySuccess = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
  encode(message: MsgForkRepositorySuccess, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.taskId !== BigInt(0)) {
      writer.uint32(24).uint64(message.taskId);
    }
    return writer;
  },
  fromJSON(object: any): MsgForkRepositorySuccess {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      taskId: isSet(object.taskId) ? BigInt(object.taskId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgForkRepositorySuccess>): MsgForkRepositorySuccess {
    const message = createBaseMsgForkRepositorySuccess();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.taskId = object.taskId !== undefined && object.taskId !== null ? BigInt(object.taskId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgForkRepositorySuccessAmino): MsgForkRepositorySuccess {
    const message = createBaseMsgForkRepositorySuccess();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.taskId !== undefined && object.taskId !== null) {
      message.taskId = BigInt(object.taskId);
    }
    return message;
  },
  toAmino(message: MsgForkRepositorySuccess): MsgForkRepositorySuccessAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.taskId = message.taskId !== BigInt(0) ? message.taskId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForkRepositorySuccessAminoMsg): MsgForkRepositorySuccess {
    return MsgForkRepositorySuccess.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForkRepositorySuccessProtoMsg): MsgForkRepositorySuccess {
    return MsgForkRepositorySuccess.decode(message.value);
  },
  toProto(message: MsgForkRepositorySuccess): Uint8Array {
    return MsgForkRepositorySuccess.encode(message).finish();
  },
  toProtoMsg(message: MsgForkRepositorySuccess): MsgForkRepositorySuccessProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccess",
      value: MsgForkRepositorySuccess.encode(message).finish()
    };
  }
};
function createBaseMsgForkRepositorySuccessResponse(): MsgForkRepositorySuccessResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgForkRepositorySuccessResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccessResponse",
  encode(message: MsgForkRepositorySuccessResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgForkRepositorySuccessResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgForkRepositorySuccessResponse>): MsgForkRepositorySuccessResponse {
    const message = createBaseMsgForkRepositorySuccessResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgForkRepositorySuccessResponseAmino): MsgForkRepositorySuccessResponse {
    const message = createBaseMsgForkRepositorySuccessResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgForkRepositorySuccessResponse): MsgForkRepositorySuccessResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgForkRepositorySuccessResponseAminoMsg): MsgForkRepositorySuccessResponse {
    return MsgForkRepositorySuccessResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgForkRepositorySuccessResponseProtoMsg): MsgForkRepositorySuccessResponse {
    return MsgForkRepositorySuccessResponse.decode(message.value);
  },
  toProto(message: MsgForkRepositorySuccessResponse): Uint8Array {
    return MsgForkRepositorySuccessResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgForkRepositorySuccessResponse): MsgForkRepositorySuccessResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgForkRepositorySuccessResponse",
      value: MsgForkRepositorySuccessResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRenameRepository(): MsgRenameRepository {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    name: ""
  };
}
export const MsgRenameRepository = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
  encode(message: MsgRenameRepository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgRenameRepository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgRenameRepository>): MsgRenameRepository {
    const message = createBaseMsgRenameRepository();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgRenameRepositoryAmino): MsgRenameRepository {
    const message = createBaseMsgRenameRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgRenameRepository): MsgRenameRepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgRenameRepositoryAminoMsg): MsgRenameRepository {
    return MsgRenameRepository.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenameRepositoryProtoMsg): MsgRenameRepository {
    return MsgRenameRepository.decode(message.value);
  },
  toProto(message: MsgRenameRepository): Uint8Array {
    return MsgRenameRepository.encode(message).finish();
  },
  toProtoMsg(message: MsgRenameRepository): MsgRenameRepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepository",
      value: MsgRenameRepository.encode(message).finish()
    };
  }
};
function createBaseMsgRenameRepositoryResponse(): MsgRenameRepositoryResponse {
  return {};
}
export const MsgRenameRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse",
  encode(_: MsgRenameRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRenameRepositoryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRenameRepositoryResponse>): MsgRenameRepositoryResponse {
    const message = createBaseMsgRenameRepositoryResponse();
    return message;
  },
  fromAmino(_: MsgRenameRepositoryResponseAmino): MsgRenameRepositoryResponse {
    const message = createBaseMsgRenameRepositoryResponse();
    return message;
  },
  toAmino(_: MsgRenameRepositoryResponse): MsgRenameRepositoryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRenameRepositoryResponseAminoMsg): MsgRenameRepositoryResponse {
    return MsgRenameRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRenameRepositoryResponseProtoMsg): MsgRenameRepositoryResponse {
    return MsgRenameRepositoryResponse.decode(message.value);
  },
  toProto(message: MsgRenameRepositoryResponse): Uint8Array {
    return MsgRenameRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRenameRepositoryResponse): MsgRenameRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse",
      value: MsgRenameRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryDescription(): MsgUpdateRepositoryDescription {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    description: ""
  };
}
export const MsgUpdateRepositoryDescription = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
  encode(message: MsgUpdateRepositoryDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRepositoryDescription {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateRepositoryDescription>): MsgUpdateRepositoryDescription {
    const message = createBaseMsgUpdateRepositoryDescription();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRepositoryDescriptionAmino): MsgUpdateRepositoryDescription {
    const message = createBaseMsgUpdateRepositoryDescription();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateRepositoryDescription): MsgUpdateRepositoryDescriptionAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryDescriptionAminoMsg): MsgUpdateRepositoryDescription {
    return MsgUpdateRepositoryDescription.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryDescriptionProtoMsg): MsgUpdateRepositoryDescription {
    return MsgUpdateRepositoryDescription.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryDescription): Uint8Array {
    return MsgUpdateRepositoryDescription.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryDescription): MsgUpdateRepositoryDescriptionProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescription",
      value: MsgUpdateRepositoryDescription.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryDescriptionResponse(): MsgUpdateRepositoryDescriptionResponse {
  return {};
}
export const MsgUpdateRepositoryDescriptionResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse",
  encode(_: MsgUpdateRepositoryDescriptionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRepositoryDescriptionResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRepositoryDescriptionResponse>): MsgUpdateRepositoryDescriptionResponse {
    const message = createBaseMsgUpdateRepositoryDescriptionResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRepositoryDescriptionResponseAmino): MsgUpdateRepositoryDescriptionResponse {
    const message = createBaseMsgUpdateRepositoryDescriptionResponse();
    return message;
  },
  toAmino(_: MsgUpdateRepositoryDescriptionResponse): MsgUpdateRepositoryDescriptionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryDescriptionResponseAminoMsg): MsgUpdateRepositoryDescriptionResponse {
    return MsgUpdateRepositoryDescriptionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryDescriptionResponseProtoMsg): MsgUpdateRepositoryDescriptionResponse {
    return MsgUpdateRepositoryDescriptionResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryDescriptionResponse): Uint8Array {
    return MsgUpdateRepositoryDescriptionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryDescriptionResponse): MsgUpdateRepositoryDescriptionResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse",
      value: MsgUpdateRepositoryDescriptionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleRepositoryArchived(): MsgToggleRepositoryArchived {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({})
  };
}
export const MsgToggleRepositoryArchived = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
  encode(message: MsgToggleRepositoryArchived, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleRepositoryArchived {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined
    };
  },
  fromPartial(object: Partial<MsgToggleRepositoryArchived>): MsgToggleRepositoryArchived {
    const message = createBaseMsgToggleRepositoryArchived();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    return message;
  },
  fromAmino(object: MsgToggleRepositoryArchivedAmino): MsgToggleRepositoryArchived {
    const message = createBaseMsgToggleRepositoryArchived();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgToggleRepositoryArchived): MsgToggleRepositoryArchivedAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgToggleRepositoryArchivedAminoMsg): MsgToggleRepositoryArchived {
    return MsgToggleRepositoryArchived.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleRepositoryArchivedProtoMsg): MsgToggleRepositoryArchived {
    return MsgToggleRepositoryArchived.decode(message.value);
  },
  toProto(message: MsgToggleRepositoryArchived): Uint8Array {
    return MsgToggleRepositoryArchived.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleRepositoryArchived): MsgToggleRepositoryArchivedProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchived",
      value: MsgToggleRepositoryArchived.encode(message).finish()
    };
  }
};
function createBaseMsgToggleRepositoryArchivedResponse(): MsgToggleRepositoryArchivedResponse {
  return {};
}
export const MsgToggleRepositoryArchivedResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse",
  encode(_: MsgToggleRepositoryArchivedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgToggleRepositoryArchivedResponse {
    return {};
  },
  fromPartial(_: Partial<MsgToggleRepositoryArchivedResponse>): MsgToggleRepositoryArchivedResponse {
    const message = createBaseMsgToggleRepositoryArchivedResponse();
    return message;
  },
  fromAmino(_: MsgToggleRepositoryArchivedResponseAmino): MsgToggleRepositoryArchivedResponse {
    const message = createBaseMsgToggleRepositoryArchivedResponse();
    return message;
  },
  toAmino(_: MsgToggleRepositoryArchivedResponse): MsgToggleRepositoryArchivedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgToggleRepositoryArchivedResponseAminoMsg): MsgToggleRepositoryArchivedResponse {
    return MsgToggleRepositoryArchivedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleRepositoryArchivedResponseProtoMsg): MsgToggleRepositoryArchivedResponse {
    return MsgToggleRepositoryArchivedResponse.decode(message.value);
  },
  toProto(message: MsgToggleRepositoryArchivedResponse): Uint8Array {
    return MsgToggleRepositoryArchivedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleRepositoryArchivedResponse): MsgToggleRepositoryArchivedResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse",
      value: MsgToggleRepositoryArchivedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOwner(): MsgChangeOwner {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    owner: ""
  };
}
export const MsgChangeOwner = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
  encode(message: MsgChangeOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    return writer;
  },
  fromJSON(object: any): MsgChangeOwner {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  fromPartial(object: Partial<MsgChangeOwner>): MsgChangeOwner {
    const message = createBaseMsgChangeOwner();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgChangeOwnerAmino): MsgChangeOwner {
    const message = createBaseMsgChangeOwner();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgChangeOwner): MsgChangeOwnerAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: MsgChangeOwnerAminoMsg): MsgChangeOwner {
    return MsgChangeOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOwnerProtoMsg): MsgChangeOwner {
    return MsgChangeOwner.decode(message.value);
  },
  toProto(message: MsgChangeOwner): Uint8Array {
    return MsgChangeOwner.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOwner): MsgChangeOwnerProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwner",
      value: MsgChangeOwner.encode(message).finish()
    };
  }
};
function createBaseMsgChangeOwnerResponse(): MsgChangeOwnerResponse {
  return {};
}
export const MsgChangeOwnerResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse",
  encode(_: MsgChangeOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgChangeOwnerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgChangeOwnerResponse>): MsgChangeOwnerResponse {
    const message = createBaseMsgChangeOwnerResponse();
    return message;
  },
  fromAmino(_: MsgChangeOwnerResponseAmino): MsgChangeOwnerResponse {
    const message = createBaseMsgChangeOwnerResponse();
    return message;
  },
  toAmino(_: MsgChangeOwnerResponse): MsgChangeOwnerResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChangeOwnerResponseAminoMsg): MsgChangeOwnerResponse {
    return MsgChangeOwnerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgChangeOwnerResponseProtoMsg): MsgChangeOwnerResponse {
    return MsgChangeOwnerResponse.decode(message.value);
  },
  toProto(message: MsgChangeOwnerResponse): Uint8Array {
    return MsgChangeOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChangeOwnerResponse): MsgChangeOwnerResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse",
      value: MsgChangeOwnerResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryCollaborator(): MsgUpdateRepositoryCollaborator {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    user: "",
    role: ""
  };
}
export const MsgUpdateRepositoryCollaborator = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
  encode(message: MsgUpdateRepositoryCollaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRepositoryCollaborator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      user: isSet(object.user) ? String(object.user) : "",
      role: isSet(object.role) ? String(object.role) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateRepositoryCollaborator>): MsgUpdateRepositoryCollaborator {
    const message = createBaseMsgUpdateRepositoryCollaborator();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.user = object.user ?? "";
    message.role = object.role ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRepositoryCollaboratorAmino): MsgUpdateRepositoryCollaborator {
    const message = createBaseMsgUpdateRepositoryCollaborator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    }
    return message;
  },
  toAmino(message: MsgUpdateRepositoryCollaborator): MsgUpdateRepositoryCollaboratorAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    obj.role = message.role === "" ? undefined : message.role;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryCollaboratorAminoMsg): MsgUpdateRepositoryCollaborator {
    return MsgUpdateRepositoryCollaborator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryCollaboratorProtoMsg): MsgUpdateRepositoryCollaborator {
    return MsgUpdateRepositoryCollaborator.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryCollaborator): Uint8Array {
    return MsgUpdateRepositoryCollaborator.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryCollaborator): MsgUpdateRepositoryCollaboratorProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaborator",
      value: MsgUpdateRepositoryCollaborator.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryCollaboratorResponse(): MsgUpdateRepositoryCollaboratorResponse {
  return {};
}
export const MsgUpdateRepositoryCollaboratorResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse",
  encode(_: MsgUpdateRepositoryCollaboratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRepositoryCollaboratorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRepositoryCollaboratorResponse>): MsgUpdateRepositoryCollaboratorResponse {
    const message = createBaseMsgUpdateRepositoryCollaboratorResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRepositoryCollaboratorResponseAmino): MsgUpdateRepositoryCollaboratorResponse {
    const message = createBaseMsgUpdateRepositoryCollaboratorResponse();
    return message;
  },
  toAmino(_: MsgUpdateRepositoryCollaboratorResponse): MsgUpdateRepositoryCollaboratorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryCollaboratorResponseAminoMsg): MsgUpdateRepositoryCollaboratorResponse {
    return MsgUpdateRepositoryCollaboratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryCollaboratorResponseProtoMsg): MsgUpdateRepositoryCollaboratorResponse {
    return MsgUpdateRepositoryCollaboratorResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryCollaboratorResponse): Uint8Array {
    return MsgUpdateRepositoryCollaboratorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryCollaboratorResponse): MsgUpdateRepositoryCollaboratorResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse",
      value: MsgUpdateRepositoryCollaboratorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveRepositoryCollaborator(): MsgRemoveRepositoryCollaborator {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    user: ""
  };
}
export const MsgRemoveRepositoryCollaborator = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
  encode(message: MsgRemoveRepositoryCollaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.user !== "") {
      writer.uint32(26).string(message.user);
    }
    return writer;
  },
  fromJSON(object: any): MsgRemoveRepositoryCollaborator {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      user: isSet(object.user) ? String(object.user) : ""
    };
  },
  fromPartial(object: Partial<MsgRemoveRepositoryCollaborator>): MsgRemoveRepositoryCollaborator {
    const message = createBaseMsgRemoveRepositoryCollaborator();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.user = object.user ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveRepositoryCollaboratorAmino): MsgRemoveRepositoryCollaborator {
    const message = createBaseMsgRemoveRepositoryCollaborator();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    }
    return message;
  },
  toAmino(message: MsgRemoveRepositoryCollaborator): MsgRemoveRepositoryCollaboratorAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.user = message.user === "" ? undefined : message.user;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRepositoryCollaboratorAminoMsg): MsgRemoveRepositoryCollaborator {
    return MsgRemoveRepositoryCollaborator.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveRepositoryCollaboratorProtoMsg): MsgRemoveRepositoryCollaborator {
    return MsgRemoveRepositoryCollaborator.decode(message.value);
  },
  toProto(message: MsgRemoveRepositoryCollaborator): Uint8Array {
    return MsgRemoveRepositoryCollaborator.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRepositoryCollaborator): MsgRemoveRepositoryCollaboratorProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaborator",
      value: MsgRemoveRepositoryCollaborator.encode(message).finish()
    };
  }
};
function createBaseMsgRemoveRepositoryCollaboratorResponse(): MsgRemoveRepositoryCollaboratorResponse {
  return {};
}
export const MsgRemoveRepositoryCollaboratorResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse",
  encode(_: MsgRemoveRepositoryCollaboratorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgRemoveRepositoryCollaboratorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgRemoveRepositoryCollaboratorResponse>): MsgRemoveRepositoryCollaboratorResponse {
    const message = createBaseMsgRemoveRepositoryCollaboratorResponse();
    return message;
  },
  fromAmino(_: MsgRemoveRepositoryCollaboratorResponseAmino): MsgRemoveRepositoryCollaboratorResponse {
    const message = createBaseMsgRemoveRepositoryCollaboratorResponse();
    return message;
  },
  toAmino(_: MsgRemoveRepositoryCollaboratorResponse): MsgRemoveRepositoryCollaboratorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveRepositoryCollaboratorResponseAminoMsg): MsgRemoveRepositoryCollaboratorResponse {
    return MsgRemoveRepositoryCollaboratorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveRepositoryCollaboratorResponseProtoMsg): MsgRemoveRepositoryCollaboratorResponse {
    return MsgRemoveRepositoryCollaboratorResponse.decode(message.value);
  },
  toProto(message: MsgRemoveRepositoryCollaboratorResponse): Uint8Array {
    return MsgRemoveRepositoryCollaboratorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveRepositoryCollaboratorResponse): MsgRemoveRepositoryCollaboratorResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse",
      value: MsgRemoveRepositoryCollaboratorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRepositoryLabel(): MsgCreateRepositoryLabel {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    name: "",
    color: "",
    description: ""
  };
}
export const MsgCreateRepositoryLabel = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
  encode(message: MsgCreateRepositoryLabel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.color !== "") {
      writer.uint32(34).string(message.color);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRepositoryLabel {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? String(object.color) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateRepositoryLabel>): MsgCreateRepositoryLabel {
    const message = createBaseMsgCreateRepositoryLabel();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.name = object.name ?? "";
    message.color = object.color ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgCreateRepositoryLabelAmino): MsgCreateRepositoryLabel {
    const message = createBaseMsgCreateRepositoryLabel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgCreateRepositoryLabel): MsgCreateRepositoryLabelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.color = message.color === "" ? undefined : message.color;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRepositoryLabelAminoMsg): MsgCreateRepositoryLabel {
    return MsgCreateRepositoryLabel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRepositoryLabelProtoMsg): MsgCreateRepositoryLabel {
    return MsgCreateRepositoryLabel.decode(message.value);
  },
  toProto(message: MsgCreateRepositoryLabel): Uint8Array {
    return MsgCreateRepositoryLabel.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRepositoryLabel): MsgCreateRepositoryLabelProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabel",
      value: MsgCreateRepositoryLabel.encode(message).finish()
    };
  }
};
function createBaseMsgCreateRepositoryLabelResponse(): MsgCreateRepositoryLabelResponse {
  return {
    id: BigInt(0)
  };
}
export const MsgCreateRepositoryLabelResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabelResponse",
  encode(message: MsgCreateRepositoryLabelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateRepositoryLabelResponse {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgCreateRepositoryLabelResponse>): MsgCreateRepositoryLabelResponse {
    const message = createBaseMsgCreateRepositoryLabelResponse();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgCreateRepositoryLabelResponseAmino): MsgCreateRepositoryLabelResponse {
    const message = createBaseMsgCreateRepositoryLabelResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: MsgCreateRepositoryLabelResponse): MsgCreateRepositoryLabelResponseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateRepositoryLabelResponseAminoMsg): MsgCreateRepositoryLabelResponse {
    return MsgCreateRepositoryLabelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateRepositoryLabelResponseProtoMsg): MsgCreateRepositoryLabelResponse {
    return MsgCreateRepositoryLabelResponse.decode(message.value);
  },
  toProto(message: MsgCreateRepositoryLabelResponse): Uint8Array {
    return MsgCreateRepositoryLabelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateRepositoryLabelResponse): MsgCreateRepositoryLabelResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateRepositoryLabelResponse",
      value: MsgCreateRepositoryLabelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryLabel(): MsgUpdateRepositoryLabel {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    labelId: BigInt(0),
    name: "",
    color: "",
    description: ""
  };
}
export const MsgUpdateRepositoryLabel = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
  encode(message: MsgUpdateRepositoryLabel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.labelId !== BigInt(0)) {
      writer.uint32(24).uint64(message.labelId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.color !== "") {
      writer.uint32(42).string(message.color);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRepositoryLabel {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      labelId: isSet(object.labelId) ? BigInt(object.labelId.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? String(object.color) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateRepositoryLabel>): MsgUpdateRepositoryLabel {
    const message = createBaseMsgUpdateRepositoryLabel();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.labelId = object.labelId !== undefined && object.labelId !== null ? BigInt(object.labelId.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.color = object.color ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateRepositoryLabelAmino): MsgUpdateRepositoryLabel {
    const message = createBaseMsgUpdateRepositoryLabel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.labelId !== undefined && object.labelId !== null) {
      message.labelId = BigInt(object.labelId);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.color !== undefined && object.color !== null) {
      message.color = object.color;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: MsgUpdateRepositoryLabel): MsgUpdateRepositoryLabelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.labelId = message.labelId !== BigInt(0) ? message.labelId.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.color = message.color === "" ? undefined : message.color;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryLabelAminoMsg): MsgUpdateRepositoryLabel {
    return MsgUpdateRepositoryLabel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryLabelProtoMsg): MsgUpdateRepositoryLabel {
    return MsgUpdateRepositoryLabel.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryLabel): Uint8Array {
    return MsgUpdateRepositoryLabel.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryLabel): MsgUpdateRepositoryLabelProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabel",
      value: MsgUpdateRepositoryLabel.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateRepositoryLabelResponse(): MsgUpdateRepositoryLabelResponse {
  return {};
}
export const MsgUpdateRepositoryLabelResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse",
  encode(_: MsgUpdateRepositoryLabelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRepositoryLabelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRepositoryLabelResponse>): MsgUpdateRepositoryLabelResponse {
    const message = createBaseMsgUpdateRepositoryLabelResponse();
    return message;
  },
  fromAmino(_: MsgUpdateRepositoryLabelResponseAmino): MsgUpdateRepositoryLabelResponse {
    const message = createBaseMsgUpdateRepositoryLabelResponse();
    return message;
  },
  toAmino(_: MsgUpdateRepositoryLabelResponse): MsgUpdateRepositoryLabelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateRepositoryLabelResponseAminoMsg): MsgUpdateRepositoryLabelResponse {
    return MsgUpdateRepositoryLabelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateRepositoryLabelResponseProtoMsg): MsgUpdateRepositoryLabelResponse {
    return MsgUpdateRepositoryLabelResponse.decode(message.value);
  },
  toProto(message: MsgUpdateRepositoryLabelResponse): Uint8Array {
    return MsgUpdateRepositoryLabelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateRepositoryLabelResponse): MsgUpdateRepositoryLabelResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse",
      value: MsgUpdateRepositoryLabelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRepositoryLabel(): MsgDeleteRepositoryLabel {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({}),
    labelId: BigInt(0)
  };
}
export const MsgDeleteRepositoryLabel = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
  encode(message: MsgDeleteRepositoryLabel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    if (message.labelId !== BigInt(0)) {
      writer.uint32(24).uint64(message.labelId);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteRepositoryLabel {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined,
      labelId: isSet(object.labelId) ? BigInt(object.labelId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgDeleteRepositoryLabel>): MsgDeleteRepositoryLabel {
    const message = createBaseMsgDeleteRepositoryLabel();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    message.labelId = object.labelId !== undefined && object.labelId !== null ? BigInt(object.labelId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgDeleteRepositoryLabelAmino): MsgDeleteRepositoryLabel {
    const message = createBaseMsgDeleteRepositoryLabel();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    if (object.labelId !== undefined && object.labelId !== null) {
      message.labelId = BigInt(object.labelId);
    }
    return message;
  },
  toAmino(message: MsgDeleteRepositoryLabel): MsgDeleteRepositoryLabelAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    obj.labelId = message.labelId !== BigInt(0) ? message.labelId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRepositoryLabelAminoMsg): MsgDeleteRepositoryLabel {
    return MsgDeleteRepositoryLabel.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRepositoryLabelProtoMsg): MsgDeleteRepositoryLabel {
    return MsgDeleteRepositoryLabel.decode(message.value);
  },
  toProto(message: MsgDeleteRepositoryLabel): Uint8Array {
    return MsgDeleteRepositoryLabel.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRepositoryLabel): MsgDeleteRepositoryLabelProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabel",
      value: MsgDeleteRepositoryLabel.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRepositoryLabelResponse(): MsgDeleteRepositoryLabelResponse {
  return {};
}
export const MsgDeleteRepositoryLabelResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse",
  encode(_: MsgDeleteRepositoryLabelResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteRepositoryLabelResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteRepositoryLabelResponse>): MsgDeleteRepositoryLabelResponse {
    const message = createBaseMsgDeleteRepositoryLabelResponse();
    return message;
  },
  fromAmino(_: MsgDeleteRepositoryLabelResponseAmino): MsgDeleteRepositoryLabelResponse {
    const message = createBaseMsgDeleteRepositoryLabelResponse();
    return message;
  },
  toAmino(_: MsgDeleteRepositoryLabelResponse): MsgDeleteRepositoryLabelResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRepositoryLabelResponseAminoMsg): MsgDeleteRepositoryLabelResponse {
    return MsgDeleteRepositoryLabelResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRepositoryLabelResponseProtoMsg): MsgDeleteRepositoryLabelResponse {
    return MsgDeleteRepositoryLabelResponse.decode(message.value);
  },
  toProto(message: MsgDeleteRepositoryLabelResponse): Uint8Array {
    return MsgDeleteRepositoryLabelResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRepositoryLabelResponse): MsgDeleteRepositoryLabelResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse",
      value: MsgDeleteRepositoryLabelResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleRepositoryForking(): MsgToggleRepositoryForking {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({})
  };
}
export const MsgToggleRepositoryForking = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
  encode(message: MsgToggleRepositoryForking, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleRepositoryForking {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined
    };
  },
  fromPartial(object: Partial<MsgToggleRepositoryForking>): MsgToggleRepositoryForking {
    const message = createBaseMsgToggleRepositoryForking();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    return message;
  },
  fromAmino(object: MsgToggleRepositoryForkingAmino): MsgToggleRepositoryForking {
    const message = createBaseMsgToggleRepositoryForking();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgToggleRepositoryForking): MsgToggleRepositoryForkingAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgToggleRepositoryForkingAminoMsg): MsgToggleRepositoryForking {
    return MsgToggleRepositoryForking.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleRepositoryForkingProtoMsg): MsgToggleRepositoryForking {
    return MsgToggleRepositoryForking.decode(message.value);
  },
  toProto(message: MsgToggleRepositoryForking): Uint8Array {
    return MsgToggleRepositoryForking.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleRepositoryForking): MsgToggleRepositoryForkingProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForking",
      value: MsgToggleRepositoryForking.encode(message).finish()
    };
  }
};
function createBaseMsgToggleRepositoryForkingResponse(): MsgToggleRepositoryForkingResponse {
  return {
    allowForking: false
  };
}
export const MsgToggleRepositoryForkingResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForkingResponse",
  encode(message: MsgToggleRepositoryForkingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.allowForking === true) {
      writer.uint32(8).bool(message.allowForking);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleRepositoryForkingResponse {
    return {
      allowForking: isSet(object.allowForking) ? Boolean(object.allowForking) : false
    };
  },
  fromPartial(object: Partial<MsgToggleRepositoryForkingResponse>): MsgToggleRepositoryForkingResponse {
    const message = createBaseMsgToggleRepositoryForkingResponse();
    message.allowForking = object.allowForking ?? false;
    return message;
  },
  fromAmino(object: MsgToggleRepositoryForkingResponseAmino): MsgToggleRepositoryForkingResponse {
    const message = createBaseMsgToggleRepositoryForkingResponse();
    if (object.allowForking !== undefined && object.allowForking !== null) {
      message.allowForking = object.allowForking;
    }
    return message;
  },
  toAmino(message: MsgToggleRepositoryForkingResponse): MsgToggleRepositoryForkingResponseAmino {
    const obj: any = {};
    obj.allowForking = message.allowForking === false ? undefined : message.allowForking;
    return obj;
  },
  fromAminoMsg(object: MsgToggleRepositoryForkingResponseAminoMsg): MsgToggleRepositoryForkingResponse {
    return MsgToggleRepositoryForkingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleRepositoryForkingResponseProtoMsg): MsgToggleRepositoryForkingResponse {
    return MsgToggleRepositoryForkingResponse.decode(message.value);
  },
  toProto(message: MsgToggleRepositoryForkingResponse): Uint8Array {
    return MsgToggleRepositoryForkingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleRepositoryForkingResponse): MsgToggleRepositoryForkingResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryForkingResponse",
      value: MsgToggleRepositoryForkingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgToggleArweaveBackup(): MsgToggleArweaveBackup {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({})
  };
}
export const MsgToggleArweaveBackup = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
  encode(message: MsgToggleArweaveBackup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleArweaveBackup {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined
    };
  },
  fromPartial(object: Partial<MsgToggleArweaveBackup>): MsgToggleArweaveBackup {
    const message = createBaseMsgToggleArweaveBackup();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    return message;
  },
  fromAmino(object: MsgToggleArweaveBackupAmino): MsgToggleArweaveBackup {
    const message = createBaseMsgToggleArweaveBackup();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgToggleArweaveBackup): MsgToggleArweaveBackupAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgToggleArweaveBackupAminoMsg): MsgToggleArweaveBackup {
    return MsgToggleArweaveBackup.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleArweaveBackupProtoMsg): MsgToggleArweaveBackup {
    return MsgToggleArweaveBackup.decode(message.value);
  },
  toProto(message: MsgToggleArweaveBackup): Uint8Array {
    return MsgToggleArweaveBackup.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleArweaveBackup): MsgToggleArweaveBackupProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackup",
      value: MsgToggleArweaveBackup.encode(message).finish()
    };
  }
};
function createBaseMsgToggleArweaveBackupResponse(): MsgToggleArweaveBackupResponse {
  return {
    enableArweaveBackup: false
  };
}
export const MsgToggleArweaveBackupResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackupResponse",
  encode(message: MsgToggleArweaveBackupResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableArweaveBackup === true) {
      writer.uint32(8).bool(message.enableArweaveBackup);
    }
    return writer;
  },
  fromJSON(object: any): MsgToggleArweaveBackupResponse {
    return {
      enableArweaveBackup: isSet(object.enableArweaveBackup) ? Boolean(object.enableArweaveBackup) : false
    };
  },
  fromPartial(object: Partial<MsgToggleArweaveBackupResponse>): MsgToggleArweaveBackupResponse {
    const message = createBaseMsgToggleArweaveBackupResponse();
    message.enableArweaveBackup = object.enableArweaveBackup ?? false;
    return message;
  },
  fromAmino(object: MsgToggleArweaveBackupResponseAmino): MsgToggleArweaveBackupResponse {
    const message = createBaseMsgToggleArweaveBackupResponse();
    if (object.enableArweaveBackup !== undefined && object.enableArweaveBackup !== null) {
      message.enableArweaveBackup = object.enableArweaveBackup;
    }
    return message;
  },
  toAmino(message: MsgToggleArweaveBackupResponse): MsgToggleArweaveBackupResponseAmino {
    const obj: any = {};
    obj.enableArweaveBackup = message.enableArweaveBackup === false ? undefined : message.enableArweaveBackup;
    return obj;
  },
  fromAminoMsg(object: MsgToggleArweaveBackupResponseAminoMsg): MsgToggleArweaveBackupResponse {
    return MsgToggleArweaveBackupResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgToggleArweaveBackupResponseProtoMsg): MsgToggleArweaveBackupResponse {
    return MsgToggleArweaveBackupResponse.decode(message.value);
  },
  toProto(message: MsgToggleArweaveBackupResponse): Uint8Array {
    return MsgToggleArweaveBackupResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgToggleArweaveBackupResponse): MsgToggleArweaveBackupResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgToggleArweaveBackupResponse",
      value: MsgToggleArweaveBackupResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRepository(): MsgDeleteRepository {
  return {
    creator: "",
    repositoryId: RepositoryId.fromPartial({})
  };
}
export const MsgDeleteRepository = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
  encode(message: MsgDeleteRepository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== undefined) {
      RepositoryId.encode(message.repositoryId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteRepository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? RepositoryId.fromJSON(object.repositoryId) : undefined
    };
  },
  fromPartial(object: Partial<MsgDeleteRepository>): MsgDeleteRepository {
    const message = createBaseMsgDeleteRepository();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? RepositoryId.fromPartial(object.repositoryId) : undefined;
    return message;
  },
  fromAmino(object: MsgDeleteRepositoryAmino): MsgDeleteRepository {
    const message = createBaseMsgDeleteRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = RepositoryId.fromAmino(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgDeleteRepository): MsgDeleteRepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId ? RepositoryId.toAmino(message.repositoryId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRepositoryAminoMsg): MsgDeleteRepository {
    return MsgDeleteRepository.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRepositoryProtoMsg): MsgDeleteRepository {
    return MsgDeleteRepository.decode(message.value);
  },
  toProto(message: MsgDeleteRepository): Uint8Array {
    return MsgDeleteRepository.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRepository): MsgDeleteRepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepository",
      value: MsgDeleteRepository.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteRepositoryResponse(): MsgDeleteRepositoryResponse {
  return {};
}
export const MsgDeleteRepositoryResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse",
  encode(_: MsgDeleteRepositoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteRepositoryResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteRepositoryResponse>): MsgDeleteRepositoryResponse {
    const message = createBaseMsgDeleteRepositoryResponse();
    return message;
  },
  fromAmino(_: MsgDeleteRepositoryResponseAmino): MsgDeleteRepositoryResponse {
    const message = createBaseMsgDeleteRepositoryResponse();
    return message;
  },
  toAmino(_: MsgDeleteRepositoryResponse): MsgDeleteRepositoryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteRepositoryResponseAminoMsg): MsgDeleteRepositoryResponse {
    return MsgDeleteRepositoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteRepositoryResponseProtoMsg): MsgDeleteRepositoryResponse {
    return MsgDeleteRepositoryResponse.decode(message.value);
  },
  toProto(message: MsgDeleteRepositoryResponse): Uint8Array {
    return MsgDeleteRepositoryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteRepositoryResponse): MsgDeleteRepositoryResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse",
      value: MsgDeleteRepositoryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCreateUser(): MsgCreateUser {
  return {
    creator: "",
    username: "",
    name: "",
    avatarUrl: "",
    bio: ""
  };
}
export const MsgCreateUser = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
  encode(message: MsgCreateUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(34).string(message.avatarUrl);
    }
    if (message.bio !== "") {
      writer.uint32(42).string(message.bio);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : "",
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      bio: isSet(object.bio) ? String(object.bio) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateUser>): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.bio = object.bio ?? "";
    return message;
  },
  fromAmino(object: MsgCreateUserAmino): MsgCreateUser {
    const message = createBaseMsgCreateUser();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = object.avatarUrl;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    }
    return message;
  },
  toAmino(message: MsgCreateUser): MsgCreateUserAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.username = message.username === "" ? undefined : message.username;
    obj.name = message.name === "" ? undefined : message.name;
    obj.avatarUrl = message.avatarUrl === "" ? undefined : message.avatarUrl;
    obj.bio = message.bio === "" ? undefined : message.bio;
    return obj;
  },
  fromAminoMsg(object: MsgCreateUserAminoMsg): MsgCreateUser {
    return MsgCreateUser.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateUserProtoMsg): MsgCreateUser {
    return MsgCreateUser.decode(message.value);
  },
  toProto(message: MsgCreateUser): Uint8Array {
    return MsgCreateUser.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateUser): MsgCreateUserProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUser",
      value: MsgCreateUser.encode(message).finish()
    };
  }
};
function createBaseMsgCreateUserResponse(): MsgCreateUserResponse {
  return {
    id: ""
  };
}
export const MsgCreateUserResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUserResponse",
  encode(message: MsgCreateUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateUserResponse {
    return {
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgCreateUserResponse>): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgCreateUserResponseAmino): MsgCreateUserResponse {
    const message = createBaseMsgCreateUserResponse();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgCreateUserResponse): MsgCreateUserResponseAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgCreateUserResponseAminoMsg): MsgCreateUserResponse {
    return MsgCreateUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateUserResponseProtoMsg): MsgCreateUserResponse {
    return MsgCreateUserResponse.decode(message.value);
  },
  toProto(message: MsgCreateUserResponse): Uint8Array {
    return MsgCreateUserResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateUserResponse): MsgCreateUserResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgCreateUserResponse",
      value: MsgCreateUserResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserUsername(): MsgUpdateUserUsername {
  return {
    creator: "",
    username: ""
  };
}
export const MsgUpdateUserUsername = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
  encode(message: MsgUpdateUserUsername, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateUserUsername {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      username: isSet(object.username) ? String(object.username) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateUserUsername>): MsgUpdateUserUsername {
    const message = createBaseMsgUpdateUserUsername();
    message.creator = object.creator ?? "";
    message.username = object.username ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateUserUsernameAmino): MsgUpdateUserUsername {
    const message = createBaseMsgUpdateUserUsername();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    return message;
  },
  toAmino(message: MsgUpdateUserUsername): MsgUpdateUserUsernameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.username = message.username === "" ? undefined : message.username;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserUsernameAminoMsg): MsgUpdateUserUsername {
    return MsgUpdateUserUsername.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserUsernameProtoMsg): MsgUpdateUserUsername {
    return MsgUpdateUserUsername.decode(message.value);
  },
  toProto(message: MsgUpdateUserUsername): Uint8Array {
    return MsgUpdateUserUsername.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserUsername): MsgUpdateUserUsernameProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsername",
      value: MsgUpdateUserUsername.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserUsernameResponse(): MsgUpdateUserUsernameResponse {
  return {};
}
export const MsgUpdateUserUsernameResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse",
  encode(_: MsgUpdateUserUsernameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateUserUsernameResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateUserUsernameResponse>): MsgUpdateUserUsernameResponse {
    const message = createBaseMsgUpdateUserUsernameResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserUsernameResponseAmino): MsgUpdateUserUsernameResponse {
    const message = createBaseMsgUpdateUserUsernameResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserUsernameResponse): MsgUpdateUserUsernameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserUsernameResponseAminoMsg): MsgUpdateUserUsernameResponse {
    return MsgUpdateUserUsernameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserUsernameResponseProtoMsg): MsgUpdateUserUsernameResponse {
    return MsgUpdateUserUsernameResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserUsernameResponse): Uint8Array {
    return MsgUpdateUserUsernameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserUsernameResponse): MsgUpdateUserUsernameResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse",
      value: MsgUpdateUserUsernameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserName(): MsgUpdateUserName {
  return {
    creator: "",
    name: ""
  };
}
export const MsgUpdateUserName = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
  encode(message: MsgUpdateUserName, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateUserName {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateUserName>): MsgUpdateUserName {
    const message = createBaseMsgUpdateUserName();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateUserNameAmino): MsgUpdateUserName {
    const message = createBaseMsgUpdateUserName();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgUpdateUserName): MsgUpdateUserNameAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserNameAminoMsg): MsgUpdateUserName {
    return MsgUpdateUserName.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserNameProtoMsg): MsgUpdateUserName {
    return MsgUpdateUserName.decode(message.value);
  },
  toProto(message: MsgUpdateUserName): Uint8Array {
    return MsgUpdateUserName.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserName): MsgUpdateUserNameProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserName",
      value: MsgUpdateUserName.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserNameResponse(): MsgUpdateUserNameResponse {
  return {};
}
export const MsgUpdateUserNameResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse",
  encode(_: MsgUpdateUserNameResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateUserNameResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateUserNameResponse>): MsgUpdateUserNameResponse {
    const message = createBaseMsgUpdateUserNameResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserNameResponseAmino): MsgUpdateUserNameResponse {
    const message = createBaseMsgUpdateUserNameResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserNameResponse): MsgUpdateUserNameResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserNameResponseAminoMsg): MsgUpdateUserNameResponse {
    return MsgUpdateUserNameResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserNameResponseProtoMsg): MsgUpdateUserNameResponse {
    return MsgUpdateUserNameResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserNameResponse): Uint8Array {
    return MsgUpdateUserNameResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserNameResponse): MsgUpdateUserNameResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse",
      value: MsgUpdateUserNameResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserBio(): MsgUpdateUserBio {
  return {
    creator: "",
    bio: ""
  };
}
export const MsgUpdateUserBio = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
  encode(message: MsgUpdateUserBio, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.bio !== "") {
      writer.uint32(18).string(message.bio);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateUserBio {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      bio: isSet(object.bio) ? String(object.bio) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateUserBio>): MsgUpdateUserBio {
    const message = createBaseMsgUpdateUserBio();
    message.creator = object.creator ?? "";
    message.bio = object.bio ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateUserBioAmino): MsgUpdateUserBio {
    const message = createBaseMsgUpdateUserBio();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    }
    return message;
  },
  toAmino(message: MsgUpdateUserBio): MsgUpdateUserBioAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.bio = message.bio === "" ? undefined : message.bio;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserBioAminoMsg): MsgUpdateUserBio {
    return MsgUpdateUserBio.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserBioProtoMsg): MsgUpdateUserBio {
    return MsgUpdateUserBio.decode(message.value);
  },
  toProto(message: MsgUpdateUserBio): Uint8Array {
    return MsgUpdateUserBio.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserBio): MsgUpdateUserBioProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBio",
      value: MsgUpdateUserBio.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserBioResponse(): MsgUpdateUserBioResponse {
  return {};
}
export const MsgUpdateUserBioResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse",
  encode(_: MsgUpdateUserBioResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateUserBioResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateUserBioResponse>): MsgUpdateUserBioResponse {
    const message = createBaseMsgUpdateUserBioResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserBioResponseAmino): MsgUpdateUserBioResponse {
    const message = createBaseMsgUpdateUserBioResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserBioResponse): MsgUpdateUserBioResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserBioResponseAminoMsg): MsgUpdateUserBioResponse {
    return MsgUpdateUserBioResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserBioResponseProtoMsg): MsgUpdateUserBioResponse {
    return MsgUpdateUserBioResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserBioResponse): Uint8Array {
    return MsgUpdateUserBioResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserBioResponse): MsgUpdateUserBioResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse",
      value: MsgUpdateUserBioResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserAvatar(): MsgUpdateUserAvatar {
  return {
    creator: "",
    url: ""
  };
}
export const MsgUpdateUserAvatar = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
  encode(message: MsgUpdateUserAvatar, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.url !== "") {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateUserAvatar {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      url: isSet(object.url) ? String(object.url) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateUserAvatar>): MsgUpdateUserAvatar {
    const message = createBaseMsgUpdateUserAvatar();
    message.creator = object.creator ?? "";
    message.url = object.url ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateUserAvatarAmino): MsgUpdateUserAvatar {
    const message = createBaseMsgUpdateUserAvatar();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.url !== undefined && object.url !== null) {
      message.url = object.url;
    }
    return message;
  },
  toAmino(message: MsgUpdateUserAvatar): MsgUpdateUserAvatarAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.url = message.url === "" ? undefined : message.url;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserAvatarAminoMsg): MsgUpdateUserAvatar {
    return MsgUpdateUserAvatar.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserAvatarProtoMsg): MsgUpdateUserAvatar {
    return MsgUpdateUserAvatar.decode(message.value);
  },
  toProto(message: MsgUpdateUserAvatar): Uint8Array {
    return MsgUpdateUserAvatar.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserAvatar): MsgUpdateUserAvatarProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatar",
      value: MsgUpdateUserAvatar.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserAvatarResponse(): MsgUpdateUserAvatarResponse {
  return {};
}
export const MsgUpdateUserAvatarResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse",
  encode(_: MsgUpdateUserAvatarResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateUserAvatarResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateUserAvatarResponse>): MsgUpdateUserAvatarResponse {
    const message = createBaseMsgUpdateUserAvatarResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserAvatarResponseAmino): MsgUpdateUserAvatarResponse {
    const message = createBaseMsgUpdateUserAvatarResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserAvatarResponse): MsgUpdateUserAvatarResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserAvatarResponseAminoMsg): MsgUpdateUserAvatarResponse {
    return MsgUpdateUserAvatarResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserAvatarResponseProtoMsg): MsgUpdateUserAvatarResponse {
    return MsgUpdateUserAvatarResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserAvatarResponse): Uint8Array {
    return MsgUpdateUserAvatarResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserAvatarResponse): MsgUpdateUserAvatarResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse",
      value: MsgUpdateUserAvatarResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteUser(): MsgDeleteUser {
  return {
    creator: "",
    id: ""
  };
}
export const MsgDeleteUser = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
  encode(message: MsgDeleteUser, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgDeleteUser {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgDeleteUser>): MsgDeleteUser {
    const message = createBaseMsgDeleteUser();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteUserAmino): MsgDeleteUser {
    const message = createBaseMsgDeleteUser();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgDeleteUser): MsgDeleteUserAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgDeleteUserAminoMsg): MsgDeleteUser {
    return MsgDeleteUser.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteUserProtoMsg): MsgDeleteUser {
    return MsgDeleteUser.decode(message.value);
  },
  toProto(message: MsgDeleteUser): Uint8Array {
    return MsgDeleteUser.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteUser): MsgDeleteUserProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUser",
      value: MsgDeleteUser.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteUserResponse(): MsgDeleteUserResponse {
  return {};
}
export const MsgDeleteUserResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse",
  encode(_: MsgDeleteUserResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDeleteUserResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDeleteUserResponse>): MsgDeleteUserResponse {
    const message = createBaseMsgDeleteUserResponse();
    return message;
  },
  fromAmino(_: MsgDeleteUserResponseAmino): MsgDeleteUserResponse {
    const message = createBaseMsgDeleteUserResponse();
    return message;
  },
  toAmino(_: MsgDeleteUserResponse): MsgDeleteUserResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteUserResponseAminoMsg): MsgDeleteUserResponse {
    return MsgDeleteUserResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteUserResponseProtoMsg): MsgDeleteUserResponse {
    return MsgDeleteUserResponse.decode(message.value);
  },
  toProto(message: MsgDeleteUserResponse): Uint8Array {
    return MsgDeleteUserResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteUserResponse): MsgDeleteUserResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse",
      value: MsgDeleteUserResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserPinnedRepositories(): MsgUpdateUserPinnedRepositories {
  return {
    creator: "",
    repositoryId: BigInt(0)
  };
}
export const MsgUpdateUserPinnedRepositories = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
  encode(message: MsgUpdateUserPinnedRepositories, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateUserPinnedRepositories {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MsgUpdateUserPinnedRepositories>): MsgUpdateUserPinnedRepositories {
    const message = createBaseMsgUpdateUserPinnedRepositories();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MsgUpdateUserPinnedRepositoriesAmino): MsgUpdateUserPinnedRepositories {
    const message = createBaseMsgUpdateUserPinnedRepositories();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    return message;
  },
  toAmino(message: MsgUpdateUserPinnedRepositories): MsgUpdateUserPinnedRepositoriesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserPinnedRepositoriesAminoMsg): MsgUpdateUserPinnedRepositories {
    return MsgUpdateUserPinnedRepositories.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserPinnedRepositoriesProtoMsg): MsgUpdateUserPinnedRepositories {
    return MsgUpdateUserPinnedRepositories.decode(message.value);
  },
  toProto(message: MsgUpdateUserPinnedRepositories): Uint8Array {
    return MsgUpdateUserPinnedRepositories.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserPinnedRepositories): MsgUpdateUserPinnedRepositoriesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositories",
      value: MsgUpdateUserPinnedRepositories.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateUserPinnedRepositoriesResponse(): MsgUpdateUserPinnedRepositoriesResponse {
  return {};
}
export const MsgUpdateUserPinnedRepositoriesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse",
  encode(_: MsgUpdateUserPinnedRepositoriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateUserPinnedRepositoriesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateUserPinnedRepositoriesResponse>): MsgUpdateUserPinnedRepositoriesResponse {
    const message = createBaseMsgUpdateUserPinnedRepositoriesResponse();
    return message;
  },
  fromAmino(_: MsgUpdateUserPinnedRepositoriesResponseAmino): MsgUpdateUserPinnedRepositoriesResponse {
    const message = createBaseMsgUpdateUserPinnedRepositoriesResponse();
    return message;
  },
  toAmino(_: MsgUpdateUserPinnedRepositoriesResponse): MsgUpdateUserPinnedRepositoriesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateUserPinnedRepositoriesResponseAminoMsg): MsgUpdateUserPinnedRepositoriesResponse {
    return MsgUpdateUserPinnedRepositoriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateUserPinnedRepositoriesResponseProtoMsg): MsgUpdateUserPinnedRepositoriesResponse {
    return MsgUpdateUserPinnedRepositoriesResponse.decode(message.value);
  },
  toProto(message: MsgUpdateUserPinnedRepositoriesResponse): Uint8Array {
    return MsgUpdateUserPinnedRepositoriesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateUserPinnedRepositoriesResponse): MsgUpdateUserPinnedRepositoriesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse",
      value: MsgUpdateUserPinnedRepositoriesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoPinnedRepositories(): MsgUpdateDaoPinnedRepositories {
  return {
    creator: "",
    repositoryId: BigInt(0),
    id: ""
  };
}
export const MsgUpdateDaoPinnedRepositories = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
  encode(message: MsgUpdateDaoPinnedRepositories, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.repositoryId !== BigInt(0)) {
      writer.uint32(16).uint64(message.repositoryId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateDaoPinnedRepositories {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      repositoryId: isSet(object.repositoryId) ? BigInt(object.repositoryId.toString()) : BigInt(0),
      id: isSet(object.id) ? String(object.id) : ""
    };
  },
  fromPartial(object: Partial<MsgUpdateDaoPinnedRepositories>): MsgUpdateDaoPinnedRepositories {
    const message = createBaseMsgUpdateDaoPinnedRepositories();
    message.creator = object.creator ?? "";
    message.repositoryId = object.repositoryId !== undefined && object.repositoryId !== null ? BigInt(object.repositoryId.toString()) : BigInt(0);
    message.id = object.id ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDaoPinnedRepositoriesAmino): MsgUpdateDaoPinnedRepositories {
    const message = createBaseMsgUpdateDaoPinnedRepositories();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.repositoryId !== undefined && object.repositoryId !== null) {
      message.repositoryId = BigInt(object.repositoryId);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: MsgUpdateDaoPinnedRepositories): MsgUpdateDaoPinnedRepositoriesAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.repositoryId = message.repositoryId !== BigInt(0) ? message.repositoryId.toString() : undefined;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoPinnedRepositoriesAminoMsg): MsgUpdateDaoPinnedRepositories {
    return MsgUpdateDaoPinnedRepositories.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoPinnedRepositoriesProtoMsg): MsgUpdateDaoPinnedRepositories {
    return MsgUpdateDaoPinnedRepositories.decode(message.value);
  },
  toProto(message: MsgUpdateDaoPinnedRepositories): Uint8Array {
    return MsgUpdateDaoPinnedRepositories.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoPinnedRepositories): MsgUpdateDaoPinnedRepositoriesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositories",
      value: MsgUpdateDaoPinnedRepositories.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDaoPinnedRepositoriesResponse(): MsgUpdateDaoPinnedRepositoriesResponse {
  return {};
}
export const MsgUpdateDaoPinnedRepositoriesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse",
  encode(_: MsgUpdateDaoPinnedRepositoriesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateDaoPinnedRepositoriesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateDaoPinnedRepositoriesResponse>): MsgUpdateDaoPinnedRepositoriesResponse {
    const message = createBaseMsgUpdateDaoPinnedRepositoriesResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDaoPinnedRepositoriesResponseAmino): MsgUpdateDaoPinnedRepositoriesResponse {
    const message = createBaseMsgUpdateDaoPinnedRepositoriesResponse();
    return message;
  },
  toAmino(_: MsgUpdateDaoPinnedRepositoriesResponse): MsgUpdateDaoPinnedRepositoriesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDaoPinnedRepositoriesResponseAminoMsg): MsgUpdateDaoPinnedRepositoriesResponse {
    return MsgUpdateDaoPinnedRepositoriesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDaoPinnedRepositoriesResponseProtoMsg): MsgUpdateDaoPinnedRepositoriesResponse {
    return MsgUpdateDaoPinnedRepositoriesResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDaoPinnedRepositoriesResponse): Uint8Array {
    return MsgUpdateDaoPinnedRepositoriesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDaoPinnedRepositoriesResponse): MsgUpdateDaoPinnedRepositoriesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse",
      value: MsgUpdateDaoPinnedRepositoriesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgUpdateParams = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDistributePlatformIncentives(): MsgDistributePlatformIncentives {
  return {
    authority: "",
    addresses: []
  };
}
export const MsgDistributePlatformIncentives = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
  encode(message: MsgDistributePlatformIncentives, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.addresses) {
      MsgDistributePlatformIncentives_Address.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDistributePlatformIncentives {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => MsgDistributePlatformIncentives_Address.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgDistributePlatformIncentives>): MsgDistributePlatformIncentives {
    const message = createBaseMsgDistributePlatformIncentives();
    message.authority = object.authority ?? "";
    message.addresses = object.addresses?.map(e => MsgDistributePlatformIncentives_Address.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDistributePlatformIncentivesAmino): MsgDistributePlatformIncentives {
    const message = createBaseMsgDistributePlatformIncentives();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    message.addresses = object.addresses?.map(e => MsgDistributePlatformIncentives_Address.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDistributePlatformIncentives): MsgDistributePlatformIncentivesAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e ? MsgDistributePlatformIncentives_Address.toAmino(e) : undefined);
    } else {
      obj.addresses = message.addresses;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDistributePlatformIncentivesAminoMsg): MsgDistributePlatformIncentives {
    return MsgDistributePlatformIncentives.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributePlatformIncentivesProtoMsg): MsgDistributePlatformIncentives {
    return MsgDistributePlatformIncentives.decode(message.value);
  },
  toProto(message: MsgDistributePlatformIncentives): Uint8Array {
    return MsgDistributePlatformIncentives.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributePlatformIncentives): MsgDistributePlatformIncentivesProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentives",
      value: MsgDistributePlatformIncentives.encode(message).finish()
    };
  }
};
function createBaseMsgDistributePlatformIncentives_Address(): MsgDistributePlatformIncentives_Address {
  return {
    address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgDistributePlatformIncentives_Address = {
  typeUrl: "/gitopia.gitopia.gitopia.Address",
  encode(message: MsgDistributePlatformIncentives_Address, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgDistributePlatformIncentives_Address {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  fromPartial(object: Partial<MsgDistributePlatformIncentives_Address>): MsgDistributePlatformIncentives_Address {
    const message = createBaseMsgDistributePlatformIncentives_Address();
    message.address = object.address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgDistributePlatformIncentives_AddressAmino): MsgDistributePlatformIncentives_Address {
    const message = createBaseMsgDistributePlatformIncentives_Address();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgDistributePlatformIncentives_Address): MsgDistributePlatformIncentives_AddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDistributePlatformIncentives_AddressAminoMsg): MsgDistributePlatformIncentives_Address {
    return MsgDistributePlatformIncentives_Address.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributePlatformIncentives_AddressProtoMsg): MsgDistributePlatformIncentives_Address {
    return MsgDistributePlatformIncentives_Address.decode(message.value);
  },
  toProto(message: MsgDistributePlatformIncentives_Address): Uint8Array {
    return MsgDistributePlatformIncentives_Address.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributePlatformIncentives_Address): MsgDistributePlatformIncentives_AddressProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Address",
      value: MsgDistributePlatformIncentives_Address.encode(message).finish()
    };
  }
};
function createBaseMsgDistributePlatformIncentivesResponse(): MsgDistributePlatformIncentivesResponse {
  return {};
}
export const MsgDistributePlatformIncentivesResponse = {
  typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse",
  encode(_: MsgDistributePlatformIncentivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgDistributePlatformIncentivesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDistributePlatformIncentivesResponse>): MsgDistributePlatformIncentivesResponse {
    const message = createBaseMsgDistributePlatformIncentivesResponse();
    return message;
  },
  fromAmino(_: MsgDistributePlatformIncentivesResponseAmino): MsgDistributePlatformIncentivesResponse {
    const message = createBaseMsgDistributePlatformIncentivesResponse();
    return message;
  },
  toAmino(_: MsgDistributePlatformIncentivesResponse): MsgDistributePlatformIncentivesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDistributePlatformIncentivesResponseAminoMsg): MsgDistributePlatformIncentivesResponse {
    return MsgDistributePlatformIncentivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDistributePlatformIncentivesResponseProtoMsg): MsgDistributePlatformIncentivesResponse {
    return MsgDistributePlatformIncentivesResponse.decode(message.value);
  },
  toProto(message: MsgDistributePlatformIncentivesResponse): Uint8Array {
    return MsgDistributePlatformIncentivesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDistributePlatformIncentivesResponse): MsgDistributePlatformIncentivesResponseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse",
      value: MsgDistributePlatformIncentivesResponse.encode(message).finish()
    };
  }
};