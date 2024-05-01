import { RepositoryId, RepositoryIdAmino, RepositoryIdSDKType, RepositoryBackup_Store } from "./repository";
import { TaskType, TaskState } from "./task";
import { MemberRole } from "./member";
import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { BountyParent } from "./bounty";
import { CommentParent } from "./comment";
import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
export declare enum ProviderPermission {
    GIT_SERVER = 0,
    STORAGE = 1,
    UNRECOGNIZED = -1
}
export declare const ProviderPermissionSDKType: typeof ProviderPermission;
export declare const ProviderPermissionAmino: typeof ProviderPermission;
export declare function providerPermissionFromJSON(object: any): ProviderPermission;
export declare function providerPermissionToJSON(object: ProviderPermission): string;
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
export interface MsgExerciseResponse {
}
export interface MsgExerciseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgExerciseResponse";
    value: Uint8Array;
}
export interface MsgExerciseResponseAmino {
}
export interface MsgExerciseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgExerciseResponse";
    value: MsgExerciseResponseAmino;
}
export interface MsgExerciseResponseSDKType {
}
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
export interface MsgToggleForcePushResponse {
}
export interface MsgToggleForcePushResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse";
    value: Uint8Array;
}
export interface MsgToggleForcePushResponseAmino {
}
export interface MsgToggleForcePushResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgToggleForcePushResponse";
    value: MsgToggleForcePushResponseAmino;
}
export interface MsgToggleForcePushResponseSDKType {
}
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
export interface MsgRevokeProviderPermissionResponse {
}
export interface MsgRevokeProviderPermissionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse";
    value: Uint8Array;
}
export interface MsgRevokeProviderPermissionResponseAmino {
}
export interface MsgRevokeProviderPermissionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRevokeProviderPermissionResponse";
    value: MsgRevokeProviderPermissionResponseAmino;
}
export interface MsgRevokeProviderPermissionResponseSDKType {
}
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
export interface MsgAuthorizeProviderResponse {
}
export interface MsgAuthorizeProviderResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse";
    value: Uint8Array;
}
export interface MsgAuthorizeProviderResponseAmino {
}
export interface MsgAuthorizeProviderResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAuthorizeProviderResponse";
    value: MsgAuthorizeProviderResponseAmino;
}
export interface MsgAuthorizeProviderResponseSDKType {
}
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
export interface MsgUpdateTaskResponse {
}
export interface MsgUpdateTaskResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse";
    value: Uint8Array;
}
export interface MsgUpdateTaskResponseAmino {
}
export interface MsgUpdateTaskResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateTaskResponse";
    value: MsgUpdateTaskResponseAmino;
}
export interface MsgUpdateTaskResponseSDKType {
}
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
export interface MsgUpdateRepositoryBackupRefResponse {
}
export interface MsgUpdateRepositoryBackupRefResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse";
    value: Uint8Array;
}
export interface MsgUpdateRepositoryBackupRefResponseAmino {
}
export interface MsgUpdateRepositoryBackupRefResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryBackupRefResponse";
    value: MsgUpdateRepositoryBackupRefResponseAmino;
}
export interface MsgUpdateRepositoryBackupRefResponseSDKType {
}
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
export interface MsgAddRepositoryBackupRefResponse {
}
export interface MsgAddRepositoryBackupRefResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse";
    value: Uint8Array;
}
export interface MsgAddRepositoryBackupRefResponseAmino {
}
export interface MsgAddRepositoryBackupRefResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddRepositoryBackupRefResponse";
    value: MsgAddRepositoryBackupRefResponseAmino;
}
export interface MsgAddRepositoryBackupRefResponseSDKType {
}
export interface MsgDeleteTaskResponse {
}
export interface MsgDeleteTaskResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse";
    value: Uint8Array;
}
export interface MsgDeleteTaskResponseAmino {
}
export interface MsgDeleteTaskResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteTaskResponse";
    value: MsgDeleteTaskResponseAmino;
}
export interface MsgDeleteTaskResponseSDKType {
}
export interface MsgDeleteStorageProviderResponse {
}
export interface MsgDeleteStorageProviderResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse";
    value: Uint8Array;
}
export interface MsgDeleteStorageProviderResponseAmino {
}
export interface MsgDeleteStorageProviderResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteStorageProviderResponse";
    value: MsgDeleteStorageProviderResponseAmino;
}
export interface MsgDeleteStorageProviderResponseSDKType {
}
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
export interface MsgSetBranchResponse {
}
export interface MsgSetBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgSetBranchResponse";
    value: Uint8Array;
}
export interface MsgSetBranchResponseAmino {
}
export interface MsgSetBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgSetBranchResponse";
    value: MsgSetBranchResponseAmino;
}
export interface MsgSetBranchResponseSDKType {
}
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
export interface MsgSetDefaultBranchResponse {
}
export interface MsgSetDefaultBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse";
    value: Uint8Array;
}
export interface MsgSetDefaultBranchResponseAmino {
}
export interface MsgSetDefaultBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgSetDefaultBranchResponse";
    value: MsgSetDefaultBranchResponseAmino;
}
export interface MsgSetDefaultBranchResponseSDKType {
}
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
export interface MsgMultiSetBranchResponse {
}
export interface MsgMultiSetBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse";
    value: Uint8Array;
}
export interface MsgMultiSetBranchResponseAmino {
}
export interface MsgMultiSetBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgMultiSetBranchResponse";
    value: MsgMultiSetBranchResponseAmino;
}
export interface MsgMultiSetBranchResponseSDKType {
}
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
export interface MsgDeleteBranchResponse {
}
export interface MsgDeleteBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse";
    value: Uint8Array;
}
export interface MsgDeleteBranchResponseAmino {
}
export interface MsgDeleteBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteBranchResponse";
    value: MsgDeleteBranchResponseAmino;
}
export interface MsgDeleteBranchResponseSDKType {
}
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
export interface MsgMultiDeleteBranchResponse {
}
export interface MsgMultiDeleteBranchResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse";
    value: Uint8Array;
}
export interface MsgMultiDeleteBranchResponseAmino {
}
export interface MsgMultiDeleteBranchResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgMultiDeleteBranchResponse";
    value: MsgMultiDeleteBranchResponseAmino;
}
export interface MsgMultiDeleteBranchResponseSDKType {
}
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
export interface MsgSetTagResponse {
}
export interface MsgSetTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgSetTagResponse";
    value: Uint8Array;
}
export interface MsgSetTagResponseAmino {
}
export interface MsgSetTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgSetTagResponse";
    value: MsgSetTagResponseAmino;
}
export interface MsgSetTagResponseSDKType {
}
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
export interface MsgMultiSetTagResponse {
}
export interface MsgMultiSetTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse";
    value: Uint8Array;
}
export interface MsgMultiSetTagResponseAmino {
}
export interface MsgMultiSetTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgMultiSetTagResponse";
    value: MsgMultiSetTagResponseAmino;
}
export interface MsgMultiSetTagResponseSDKType {
}
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
export interface MsgDeleteTagResponse {
}
export interface MsgDeleteTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse";
    value: Uint8Array;
}
export interface MsgDeleteTagResponseAmino {
}
export interface MsgDeleteTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteTagResponse";
    value: MsgDeleteTagResponseAmino;
}
export interface MsgDeleteTagResponseSDKType {
}
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
export interface MsgMultiDeleteTagResponse {
}
export interface MsgMultiDeleteTagResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse";
    value: Uint8Array;
}
export interface MsgMultiDeleteTagResponseAmino {
}
export interface MsgMultiDeleteTagResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgMultiDeleteTagResponse";
    value: MsgMultiDeleteTagResponseAmino;
}
export interface MsgMultiDeleteTagResponseSDKType {
}
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
export interface MsgAddMemberResponse {
}
export interface MsgAddMemberResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddMemberResponse";
    value: Uint8Array;
}
export interface MsgAddMemberResponseAmino {
}
export interface MsgAddMemberResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddMemberResponse";
    value: MsgAddMemberResponseAmino;
}
export interface MsgAddMemberResponseSDKType {
}
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
export interface MsgUpdateMemberRoleResponse {
}
export interface MsgUpdateMemberRoleResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse";
    value: Uint8Array;
}
export interface MsgUpdateMemberRoleResponseAmino {
}
export interface MsgUpdateMemberRoleResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateMemberRoleResponse";
    value: MsgUpdateMemberRoleResponseAmino;
}
export interface MsgUpdateMemberRoleResponseSDKType {
}
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
export interface MsgRemoveMemberResponse {
}
export interface MsgRemoveMemberResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse";
    value: Uint8Array;
}
export interface MsgRemoveMemberResponseAmino {
}
export interface MsgRemoveMemberResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemoveMemberResponse";
    value: MsgRemoveMemberResponseAmino;
}
export interface MsgRemoveMemberResponseSDKType {
}
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
export interface MsgUpdateBountyExpiryResponse {
}
export interface MsgUpdateBountyExpiryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse";
    value: Uint8Array;
}
export interface MsgUpdateBountyExpiryResponseAmino {
}
export interface MsgUpdateBountyExpiryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateBountyExpiryResponse";
    value: MsgUpdateBountyExpiryResponseAmino;
}
export interface MsgUpdateBountyExpiryResponseSDKType {
}
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
export interface MsgCloseBountyResponse {
}
export interface MsgCloseBountyResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse";
    value: Uint8Array;
}
export interface MsgCloseBountyResponseAmino {
}
export interface MsgCloseBountyResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgCloseBountyResponse";
    value: MsgCloseBountyResponseAmino;
}
export interface MsgCloseBountyResponseSDKType {
}
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
export interface MsgDeleteBountyResponse {
}
export interface MsgDeleteBountyResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse";
    value: Uint8Array;
}
export interface MsgDeleteBountyResponseAmino {
}
export interface MsgDeleteBountyResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteBountyResponse";
    value: MsgDeleteBountyResponseAmino;
}
export interface MsgDeleteBountyResponseSDKType {
}
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
export interface MsgUpdateReleaseResponse {
}
export interface MsgUpdateReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse";
    value: Uint8Array;
}
export interface MsgUpdateReleaseResponseAmino {
}
export interface MsgUpdateReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateReleaseResponse";
    value: MsgUpdateReleaseResponseAmino;
}
export interface MsgUpdateReleaseResponseSDKType {
}
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
export interface MsgDeleteReleaseResponse {
}
export interface MsgDeleteReleaseResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse";
    value: Uint8Array;
}
export interface MsgDeleteReleaseResponseAmino {
}
export interface MsgDeleteReleaseResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteReleaseResponse";
    value: MsgDeleteReleaseResponseAmino;
}
export interface MsgDeleteReleaseResponseSDKType {
}
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
export interface MsgUpdatePullRequestTitleResponse {
}
export interface MsgUpdatePullRequestTitleResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse";
    value: Uint8Array;
}
export interface MsgUpdatePullRequestTitleResponseAmino {
}
export interface MsgUpdatePullRequestTitleResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestTitleResponse";
    value: MsgUpdatePullRequestTitleResponseAmino;
}
export interface MsgUpdatePullRequestTitleResponseSDKType {
}
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
export interface MsgUpdatePullRequestDescriptionResponse {
}
export interface MsgUpdatePullRequestDescriptionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse";
    value: Uint8Array;
}
export interface MsgUpdatePullRequestDescriptionResponseAmino {
}
export interface MsgUpdatePullRequestDescriptionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdatePullRequestDescriptionResponse";
    value: MsgUpdatePullRequestDescriptionResponseAmino;
}
export interface MsgUpdatePullRequestDescriptionResponseSDKType {
}
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
export interface MsgInvokeMergePullRequestResponse {
}
export interface MsgInvokeMergePullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse";
    value: Uint8Array;
}
export interface MsgInvokeMergePullRequestResponseAmino {
}
export interface MsgInvokeMergePullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgInvokeMergePullRequestResponse";
    value: MsgInvokeMergePullRequestResponseAmino;
}
export interface MsgInvokeMergePullRequestResponseSDKType {
}
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
export interface MsgAddPullRequestReviewersResponse {
}
export interface MsgAddPullRequestReviewersResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse";
    value: Uint8Array;
}
export interface MsgAddPullRequestReviewersResponseAmino {
}
export interface MsgAddPullRequestReviewersResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddPullRequestReviewersResponse";
    value: MsgAddPullRequestReviewersResponseAmino;
}
export interface MsgAddPullRequestReviewersResponseSDKType {
}
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
export interface MsgRemovePullRequestReviewersResponse {
}
export interface MsgRemovePullRequestReviewersResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse";
    value: Uint8Array;
}
export interface MsgRemovePullRequestReviewersResponseAmino {
}
export interface MsgRemovePullRequestReviewersResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestReviewersResponse";
    value: MsgRemovePullRequestReviewersResponseAmino;
}
export interface MsgRemovePullRequestReviewersResponseSDKType {
}
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
export interface MsgAddPullRequestAssigneesResponse {
}
export interface MsgAddPullRequestAssigneesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse";
    value: Uint8Array;
}
export interface MsgAddPullRequestAssigneesResponseAmino {
}
export interface MsgAddPullRequestAssigneesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddPullRequestAssigneesResponse";
    value: MsgAddPullRequestAssigneesResponseAmino;
}
export interface MsgAddPullRequestAssigneesResponseSDKType {
}
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
export interface MsgRemovePullRequestAssigneesResponse {
}
export interface MsgRemovePullRequestAssigneesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse";
    value: Uint8Array;
}
export interface MsgRemovePullRequestAssigneesResponseAmino {
}
export interface MsgRemovePullRequestAssigneesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestAssigneesResponse";
    value: MsgRemovePullRequestAssigneesResponseAmino;
}
export interface MsgRemovePullRequestAssigneesResponseSDKType {
}
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
export interface MsgLinkPullRequestIssueByIidResponse {
}
export interface MsgLinkPullRequestIssueByIidResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse";
    value: Uint8Array;
}
export interface MsgLinkPullRequestIssueByIidResponseAmino {
}
export interface MsgLinkPullRequestIssueByIidResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgLinkPullRequestIssueByIidResponse";
    value: MsgLinkPullRequestIssueByIidResponseAmino;
}
export interface MsgLinkPullRequestIssueByIidResponseSDKType {
}
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
export interface MsgUnlinkPullRequestIssueByIidResponse {
}
export interface MsgUnlinkPullRequestIssueByIidResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse";
    value: Uint8Array;
}
export interface MsgUnlinkPullRequestIssueByIidResponseAmino {
}
export interface MsgUnlinkPullRequestIssueByIidResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUnlinkPullRequestIssueByIidResponse";
    value: MsgUnlinkPullRequestIssueByIidResponseAmino;
}
export interface MsgUnlinkPullRequestIssueByIidResponseSDKType {
}
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
export interface MsgAddPullRequestLabelsResponse {
}
export interface MsgAddPullRequestLabelsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse";
    value: Uint8Array;
}
export interface MsgAddPullRequestLabelsResponseAmino {
}
export interface MsgAddPullRequestLabelsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddPullRequestLabelsResponse";
    value: MsgAddPullRequestLabelsResponseAmino;
}
export interface MsgAddPullRequestLabelsResponseSDKType {
}
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
export interface MsgRemovePullRequestLabelsResponse {
}
export interface MsgRemovePullRequestLabelsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse";
    value: Uint8Array;
}
export interface MsgRemovePullRequestLabelsResponseAmino {
}
export interface MsgRemovePullRequestLabelsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemovePullRequestLabelsResponse";
    value: MsgRemovePullRequestLabelsResponseAmino;
}
export interface MsgRemovePullRequestLabelsResponseSDKType {
}
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
export interface MsgDeletePullRequestResponse {
}
export interface MsgDeletePullRequestResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse";
    value: Uint8Array;
}
export interface MsgDeletePullRequestResponseAmino {
}
export interface MsgDeletePullRequestResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeletePullRequestResponse";
    value: MsgDeletePullRequestResponseAmino;
}
export interface MsgDeletePullRequestResponseSDKType {
}
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
export interface MsgRenameDaoResponse {
}
export interface MsgRenameDaoResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse";
    value: Uint8Array;
}
export interface MsgRenameDaoResponseAmino {
}
export interface MsgRenameDaoResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRenameDaoResponse";
    value: MsgRenameDaoResponseAmino;
}
export interface MsgRenameDaoResponseSDKType {
}
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
export interface MsgUpdateDaoDescriptionResponse {
}
export interface MsgUpdateDaoDescriptionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse";
    value: Uint8Array;
}
export interface MsgUpdateDaoDescriptionResponseAmino {
}
export interface MsgUpdateDaoDescriptionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateDaoDescriptionResponse";
    value: MsgUpdateDaoDescriptionResponseAmino;
}
export interface MsgUpdateDaoDescriptionResponseSDKType {
}
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
export interface MsgUpdateDaoWebsiteResponse {
}
export interface MsgUpdateDaoWebsiteResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse";
    value: Uint8Array;
}
export interface MsgUpdateDaoWebsiteResponseAmino {
}
export interface MsgUpdateDaoWebsiteResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateDaoWebsiteResponse";
    value: MsgUpdateDaoWebsiteResponseAmino;
}
export interface MsgUpdateDaoWebsiteResponseSDKType {
}
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
export interface MsgUpdateDaoLocationResponse {
}
export interface MsgUpdateDaoLocationResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse";
    value: Uint8Array;
}
export interface MsgUpdateDaoLocationResponseAmino {
}
export interface MsgUpdateDaoLocationResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateDaoLocationResponse";
    value: MsgUpdateDaoLocationResponseAmino;
}
export interface MsgUpdateDaoLocationResponseSDKType {
}
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
export interface MsgUpdateDaoAvatarResponse {
}
export interface MsgUpdateDaoAvatarResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse";
    value: Uint8Array;
}
export interface MsgUpdateDaoAvatarResponseAmino {
}
export interface MsgUpdateDaoAvatarResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateDaoAvatarResponse";
    value: MsgUpdateDaoAvatarResponseAmino;
}
export interface MsgUpdateDaoAvatarResponseSDKType {
}
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
export interface MsgDeleteDaoResponse {
}
export interface MsgDeleteDaoResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse";
    value: Uint8Array;
}
export interface MsgDeleteDaoResponseAmino {
}
export interface MsgDeleteDaoResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteDaoResponse";
    value: MsgDeleteDaoResponseAmino;
}
export interface MsgDeleteDaoResponseSDKType {
}
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
export interface MsgUpdateCommentResponse {
}
export interface MsgUpdateCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse";
    value: Uint8Array;
}
export interface MsgUpdateCommentResponseAmino {
}
export interface MsgUpdateCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateCommentResponse";
    value: MsgUpdateCommentResponseAmino;
}
export interface MsgUpdateCommentResponseSDKType {
}
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
export interface MsgDeleteCommentResponse {
}
export interface MsgDeleteCommentResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse";
    value: Uint8Array;
}
export interface MsgDeleteCommentResponseAmino {
}
export interface MsgDeleteCommentResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteCommentResponse";
    value: MsgDeleteCommentResponseAmino;
}
export interface MsgDeleteCommentResponseSDKType {
}
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
export interface MsgUpdateIssueTitleResponse {
}
export interface MsgUpdateIssueTitleResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse";
    value: Uint8Array;
}
export interface MsgUpdateIssueTitleResponseAmino {
}
export interface MsgUpdateIssueTitleResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateIssueTitleResponse";
    value: MsgUpdateIssueTitleResponseAmino;
}
export interface MsgUpdateIssueTitleResponseSDKType {
}
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
export interface MsgUpdateIssueDescriptionResponse {
}
export interface MsgUpdateIssueDescriptionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse";
    value: Uint8Array;
}
export interface MsgUpdateIssueDescriptionResponseAmino {
}
export interface MsgUpdateIssueDescriptionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateIssueDescriptionResponse";
    value: MsgUpdateIssueDescriptionResponseAmino;
}
export interface MsgUpdateIssueDescriptionResponseSDKType {
}
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
export interface MsgAddIssueAssigneesResponse {
}
export interface MsgAddIssueAssigneesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse";
    value: Uint8Array;
}
export interface MsgAddIssueAssigneesResponseAmino {
}
export interface MsgAddIssueAssigneesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddIssueAssigneesResponse";
    value: MsgAddIssueAssigneesResponseAmino;
}
export interface MsgAddIssueAssigneesResponseSDKType {
}
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
export interface MsgRemoveIssueAssigneesResponse {
}
export interface MsgRemoveIssueAssigneesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse";
    value: Uint8Array;
}
export interface MsgRemoveIssueAssigneesResponseAmino {
}
export interface MsgRemoveIssueAssigneesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemoveIssueAssigneesResponse";
    value: MsgRemoveIssueAssigneesResponseAmino;
}
export interface MsgRemoveIssueAssigneesResponseSDKType {
}
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
export interface MsgAddIssueLabelsResponse {
}
export interface MsgAddIssueLabelsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse";
    value: Uint8Array;
}
export interface MsgAddIssueLabelsResponseAmino {
}
export interface MsgAddIssueLabelsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgAddIssueLabelsResponse";
    value: MsgAddIssueLabelsResponseAmino;
}
export interface MsgAddIssueLabelsResponseSDKType {
}
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
export interface MsgRemoveIssueLabelsResponse {
}
export interface MsgRemoveIssueLabelsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse";
    value: Uint8Array;
}
export interface MsgRemoveIssueLabelsResponseAmino {
}
export interface MsgRemoveIssueLabelsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemoveIssueLabelsResponse";
    value: MsgRemoveIssueLabelsResponseAmino;
}
export interface MsgRemoveIssueLabelsResponseSDKType {
}
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
export interface MsgDeleteIssueResponse {
}
export interface MsgDeleteIssueResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse";
    value: Uint8Array;
}
export interface MsgDeleteIssueResponseAmino {
}
export interface MsgDeleteIssueResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteIssueResponse";
    value: MsgDeleteIssueResponseAmino;
}
export interface MsgDeleteIssueResponseSDKType {
}
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
export interface MsgInvokeForkRepositoryResponse {
}
export interface MsgInvokeForkRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse";
    value: Uint8Array;
}
export interface MsgInvokeForkRepositoryResponseAmino {
}
export interface MsgInvokeForkRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgInvokeForkRepositoryResponse";
    value: MsgInvokeForkRepositoryResponseAmino;
}
export interface MsgInvokeForkRepositoryResponseSDKType {
}
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
export interface MsgRenameRepositoryResponse {
}
export interface MsgRenameRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse";
    value: Uint8Array;
}
export interface MsgRenameRepositoryResponseAmino {
}
export interface MsgRenameRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRenameRepositoryResponse";
    value: MsgRenameRepositoryResponseAmino;
}
export interface MsgRenameRepositoryResponseSDKType {
}
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
export interface MsgUpdateRepositoryDescriptionResponse {
}
export interface MsgUpdateRepositoryDescriptionResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse";
    value: Uint8Array;
}
export interface MsgUpdateRepositoryDescriptionResponseAmino {
}
export interface MsgUpdateRepositoryDescriptionResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryDescriptionResponse";
    value: MsgUpdateRepositoryDescriptionResponseAmino;
}
export interface MsgUpdateRepositoryDescriptionResponseSDKType {
}
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
export interface MsgToggleRepositoryArchivedResponse {
}
export interface MsgToggleRepositoryArchivedResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse";
    value: Uint8Array;
}
export interface MsgToggleRepositoryArchivedResponseAmino {
}
export interface MsgToggleRepositoryArchivedResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgToggleRepositoryArchivedResponse";
    value: MsgToggleRepositoryArchivedResponseAmino;
}
export interface MsgToggleRepositoryArchivedResponseSDKType {
}
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
export interface MsgChangeOwnerResponse {
}
export interface MsgChangeOwnerResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse";
    value: Uint8Array;
}
export interface MsgChangeOwnerResponseAmino {
}
export interface MsgChangeOwnerResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgChangeOwnerResponse";
    value: MsgChangeOwnerResponseAmino;
}
export interface MsgChangeOwnerResponseSDKType {
}
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
export interface MsgUpdateRepositoryCollaboratorResponse {
}
export interface MsgUpdateRepositoryCollaboratorResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse";
    value: Uint8Array;
}
export interface MsgUpdateRepositoryCollaboratorResponseAmino {
}
export interface MsgUpdateRepositoryCollaboratorResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryCollaboratorResponse";
    value: MsgUpdateRepositoryCollaboratorResponseAmino;
}
export interface MsgUpdateRepositoryCollaboratorResponseSDKType {
}
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
export interface MsgRemoveRepositoryCollaboratorResponse {
}
export interface MsgRemoveRepositoryCollaboratorResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse";
    value: Uint8Array;
}
export interface MsgRemoveRepositoryCollaboratorResponseAmino {
}
export interface MsgRemoveRepositoryCollaboratorResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgRemoveRepositoryCollaboratorResponse";
    value: MsgRemoveRepositoryCollaboratorResponseAmino;
}
export interface MsgRemoveRepositoryCollaboratorResponseSDKType {
}
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
export interface MsgUpdateRepositoryLabelResponse {
}
export interface MsgUpdateRepositoryLabelResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse";
    value: Uint8Array;
}
export interface MsgUpdateRepositoryLabelResponseAmino {
}
export interface MsgUpdateRepositoryLabelResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateRepositoryLabelResponse";
    value: MsgUpdateRepositoryLabelResponseAmino;
}
export interface MsgUpdateRepositoryLabelResponseSDKType {
}
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
export interface MsgDeleteRepositoryLabelResponse {
}
export interface MsgDeleteRepositoryLabelResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse";
    value: Uint8Array;
}
export interface MsgDeleteRepositoryLabelResponseAmino {
}
export interface MsgDeleteRepositoryLabelResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryLabelResponse";
    value: MsgDeleteRepositoryLabelResponseAmino;
}
export interface MsgDeleteRepositoryLabelResponseSDKType {
}
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
export interface MsgDeleteRepositoryResponse {
}
export interface MsgDeleteRepositoryResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse";
    value: Uint8Array;
}
export interface MsgDeleteRepositoryResponseAmino {
}
export interface MsgDeleteRepositoryResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteRepositoryResponse";
    value: MsgDeleteRepositoryResponseAmino;
}
export interface MsgDeleteRepositoryResponseSDKType {
}
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
export interface MsgUpdateUserUsernameResponse {
}
export interface MsgUpdateUserUsernameResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserUsernameResponseAmino {
}
export interface MsgUpdateUserUsernameResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateUserUsernameResponse";
    value: MsgUpdateUserUsernameResponseAmino;
}
export interface MsgUpdateUserUsernameResponseSDKType {
}
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
export interface MsgUpdateUserNameResponse {
}
export interface MsgUpdateUserNameResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserNameResponseAmino {
}
export interface MsgUpdateUserNameResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateUserNameResponse";
    value: MsgUpdateUserNameResponseAmino;
}
export interface MsgUpdateUserNameResponseSDKType {
}
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
export interface MsgUpdateUserBioResponse {
}
export interface MsgUpdateUserBioResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserBioResponseAmino {
}
export interface MsgUpdateUserBioResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateUserBioResponse";
    value: MsgUpdateUserBioResponseAmino;
}
export interface MsgUpdateUserBioResponseSDKType {
}
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
export interface MsgUpdateUserAvatarResponse {
}
export interface MsgUpdateUserAvatarResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserAvatarResponseAmino {
}
export interface MsgUpdateUserAvatarResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateUserAvatarResponse";
    value: MsgUpdateUserAvatarResponseAmino;
}
export interface MsgUpdateUserAvatarResponseSDKType {
}
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
export interface MsgDeleteUserResponse {
}
export interface MsgDeleteUserResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse";
    value: Uint8Array;
}
export interface MsgDeleteUserResponseAmino {
}
export interface MsgDeleteUserResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDeleteUserResponse";
    value: MsgDeleteUserResponseAmino;
}
export interface MsgDeleteUserResponseSDKType {
}
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
export interface MsgUpdateUserPinnedRepositoriesResponse {
}
export interface MsgUpdateUserPinnedRepositoriesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse";
    value: Uint8Array;
}
export interface MsgUpdateUserPinnedRepositoriesResponseAmino {
}
export interface MsgUpdateUserPinnedRepositoriesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateUserPinnedRepositoriesResponse";
    value: MsgUpdateUserPinnedRepositoriesResponseAmino;
}
export interface MsgUpdateUserPinnedRepositoriesResponseSDKType {
}
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
export interface MsgUpdateDaoPinnedRepositoriesResponse {
}
export interface MsgUpdateDaoPinnedRepositoriesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse";
    value: Uint8Array;
}
export interface MsgUpdateDaoPinnedRepositoriesResponseAmino {
}
export interface MsgUpdateDaoPinnedRepositoriesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateDaoPinnedRepositoriesResponse";
    value: MsgUpdateDaoPinnedRepositoriesResponseAmino;
}
export interface MsgUpdateDaoPinnedRepositoriesResponseSDKType {
}
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
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
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
export interface MsgDistributePlatformIncentivesResponse {
}
export interface MsgDistributePlatformIncentivesResponseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse";
    value: Uint8Array;
}
export interface MsgDistributePlatformIncentivesResponseAmino {
}
export interface MsgDistributePlatformIncentivesResponseAminoMsg {
    type: "/gitopia.gitopia.gitopia.MsgDistributePlatformIncentivesResponse";
    value: MsgDistributePlatformIncentivesResponseAmino;
}
export interface MsgDistributePlatformIncentivesResponseSDKType {
}
export declare const MsgExercise: {
    typeUrl: string;
    encode(message: MsgExercise, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExercise;
    fromPartial(object: Partial<MsgExercise>): MsgExercise;
    fromAmino(object: MsgExerciseAmino): MsgExercise;
    toAmino(message: MsgExercise): MsgExerciseAmino;
    fromAminoMsg(object: MsgExerciseAminoMsg): MsgExercise;
    fromProtoMsg(message: MsgExerciseProtoMsg): MsgExercise;
    toProto(message: MsgExercise): Uint8Array;
    toProtoMsg(message: MsgExercise): MsgExerciseProtoMsg;
};
export declare const MsgExerciseResponse: {
    typeUrl: string;
    encode(_: MsgExerciseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgExerciseResponse;
    fromPartial(_: Partial<MsgExerciseResponse>): MsgExerciseResponse;
    fromAmino(_: MsgExerciseResponseAmino): MsgExerciseResponse;
    toAmino(_: MsgExerciseResponse): MsgExerciseResponseAmino;
    fromAminoMsg(object: MsgExerciseResponseAminoMsg): MsgExerciseResponse;
    fromProtoMsg(message: MsgExerciseResponseProtoMsg): MsgExerciseResponse;
    toProto(message: MsgExerciseResponse): Uint8Array;
    toProtoMsg(message: MsgExerciseResponse): MsgExerciseResponseProtoMsg;
};
export declare const MsgToggleForcePush: {
    typeUrl: string;
    encode(message: MsgToggleForcePush, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleForcePush;
    fromPartial(object: Partial<MsgToggleForcePush>): MsgToggleForcePush;
    fromAmino(object: MsgToggleForcePushAmino): MsgToggleForcePush;
    toAmino(message: MsgToggleForcePush): MsgToggleForcePushAmino;
    fromAminoMsg(object: MsgToggleForcePushAminoMsg): MsgToggleForcePush;
    fromProtoMsg(message: MsgToggleForcePushProtoMsg): MsgToggleForcePush;
    toProto(message: MsgToggleForcePush): Uint8Array;
    toProtoMsg(message: MsgToggleForcePush): MsgToggleForcePushProtoMsg;
};
export declare const MsgToggleForcePushResponse: {
    typeUrl: string;
    encode(_: MsgToggleForcePushResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgToggleForcePushResponse;
    fromPartial(_: Partial<MsgToggleForcePushResponse>): MsgToggleForcePushResponse;
    fromAmino(_: MsgToggleForcePushResponseAmino): MsgToggleForcePushResponse;
    toAmino(_: MsgToggleForcePushResponse): MsgToggleForcePushResponseAmino;
    fromAminoMsg(object: MsgToggleForcePushResponseAminoMsg): MsgToggleForcePushResponse;
    fromProtoMsg(message: MsgToggleForcePushResponseProtoMsg): MsgToggleForcePushResponse;
    toProto(message: MsgToggleForcePushResponse): Uint8Array;
    toProtoMsg(message: MsgToggleForcePushResponse): MsgToggleForcePushResponseProtoMsg;
};
export declare const MsgRevokeProviderPermission: {
    typeUrl: string;
    encode(message: MsgRevokeProviderPermission, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRevokeProviderPermission;
    fromPartial(object: Partial<MsgRevokeProviderPermission>): MsgRevokeProviderPermission;
    fromAmino(object: MsgRevokeProviderPermissionAmino): MsgRevokeProviderPermission;
    toAmino(message: MsgRevokeProviderPermission): MsgRevokeProviderPermissionAmino;
    fromAminoMsg(object: MsgRevokeProviderPermissionAminoMsg): MsgRevokeProviderPermission;
    fromProtoMsg(message: MsgRevokeProviderPermissionProtoMsg): MsgRevokeProviderPermission;
    toProto(message: MsgRevokeProviderPermission): Uint8Array;
    toProtoMsg(message: MsgRevokeProviderPermission): MsgRevokeProviderPermissionProtoMsg;
};
export declare const MsgRevokeProviderPermissionResponse: {
    typeUrl: string;
    encode(_: MsgRevokeProviderPermissionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRevokeProviderPermissionResponse;
    fromPartial(_: Partial<MsgRevokeProviderPermissionResponse>): MsgRevokeProviderPermissionResponse;
    fromAmino(_: MsgRevokeProviderPermissionResponseAmino): MsgRevokeProviderPermissionResponse;
    toAmino(_: MsgRevokeProviderPermissionResponse): MsgRevokeProviderPermissionResponseAmino;
    fromAminoMsg(object: MsgRevokeProviderPermissionResponseAminoMsg): MsgRevokeProviderPermissionResponse;
    fromProtoMsg(message: MsgRevokeProviderPermissionResponseProtoMsg): MsgRevokeProviderPermissionResponse;
    toProto(message: MsgRevokeProviderPermissionResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeProviderPermissionResponse): MsgRevokeProviderPermissionResponseProtoMsg;
};
export declare const MsgAuthorizeProvider: {
    typeUrl: string;
    encode(message: MsgAuthorizeProvider, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAuthorizeProvider;
    fromPartial(object: Partial<MsgAuthorizeProvider>): MsgAuthorizeProvider;
    fromAmino(object: MsgAuthorizeProviderAmino): MsgAuthorizeProvider;
    toAmino(message: MsgAuthorizeProvider): MsgAuthorizeProviderAmino;
    fromAminoMsg(object: MsgAuthorizeProviderAminoMsg): MsgAuthorizeProvider;
    fromProtoMsg(message: MsgAuthorizeProviderProtoMsg): MsgAuthorizeProvider;
    toProto(message: MsgAuthorizeProvider): Uint8Array;
    toProtoMsg(message: MsgAuthorizeProvider): MsgAuthorizeProviderProtoMsg;
};
export declare const MsgAuthorizeProviderResponse: {
    typeUrl: string;
    encode(_: MsgAuthorizeProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAuthorizeProviderResponse;
    fromPartial(_: Partial<MsgAuthorizeProviderResponse>): MsgAuthorizeProviderResponse;
    fromAmino(_: MsgAuthorizeProviderResponseAmino): MsgAuthorizeProviderResponse;
    toAmino(_: MsgAuthorizeProviderResponse): MsgAuthorizeProviderResponseAmino;
    fromAminoMsg(object: MsgAuthorizeProviderResponseAminoMsg): MsgAuthorizeProviderResponse;
    fromProtoMsg(message: MsgAuthorizeProviderResponseProtoMsg): MsgAuthorizeProviderResponse;
    toProto(message: MsgAuthorizeProviderResponse): Uint8Array;
    toProtoMsg(message: MsgAuthorizeProviderResponse): MsgAuthorizeProviderResponseProtoMsg;
};
export declare const MsgCreateTask: {
    typeUrl: string;
    encode(message: MsgCreateTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTask;
    fromPartial(object: Partial<MsgCreateTask>): MsgCreateTask;
    fromAmino(object: MsgCreateTaskAmino): MsgCreateTask;
    toAmino(message: MsgCreateTask): MsgCreateTaskAmino;
    fromAminoMsg(object: MsgCreateTaskAminoMsg): MsgCreateTask;
    fromProtoMsg(message: MsgCreateTaskProtoMsg): MsgCreateTask;
    toProto(message: MsgCreateTask): Uint8Array;
    toProtoMsg(message: MsgCreateTask): MsgCreateTaskProtoMsg;
};
export declare const MsgCreateTaskResponse: {
    typeUrl: string;
    encode(message: MsgCreateTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateTaskResponse;
    fromPartial(object: Partial<MsgCreateTaskResponse>): MsgCreateTaskResponse;
    fromAmino(object: MsgCreateTaskResponseAmino): MsgCreateTaskResponse;
    toAmino(message: MsgCreateTaskResponse): MsgCreateTaskResponseAmino;
    fromAminoMsg(object: MsgCreateTaskResponseAminoMsg): MsgCreateTaskResponse;
    fromProtoMsg(message: MsgCreateTaskResponseProtoMsg): MsgCreateTaskResponse;
    toProto(message: MsgCreateTaskResponse): Uint8Array;
    toProtoMsg(message: MsgCreateTaskResponse): MsgCreateTaskResponseProtoMsg;
};
export declare const MsgUpdateTask: {
    typeUrl: string;
    encode(message: MsgUpdateTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateTask;
    fromPartial(object: Partial<MsgUpdateTask>): MsgUpdateTask;
    fromAmino(object: MsgUpdateTaskAmino): MsgUpdateTask;
    toAmino(message: MsgUpdateTask): MsgUpdateTaskAmino;
    fromAminoMsg(object: MsgUpdateTaskAminoMsg): MsgUpdateTask;
    fromProtoMsg(message: MsgUpdateTaskProtoMsg): MsgUpdateTask;
    toProto(message: MsgUpdateTask): Uint8Array;
    toProtoMsg(message: MsgUpdateTask): MsgUpdateTaskProtoMsg;
};
export declare const MsgUpdateTaskResponse: {
    typeUrl: string;
    encode(_: MsgUpdateTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateTaskResponse;
    fromPartial(_: Partial<MsgUpdateTaskResponse>): MsgUpdateTaskResponse;
    fromAmino(_: MsgUpdateTaskResponseAmino): MsgUpdateTaskResponse;
    toAmino(_: MsgUpdateTaskResponse): MsgUpdateTaskResponseAmino;
    fromAminoMsg(object: MsgUpdateTaskResponseAminoMsg): MsgUpdateTaskResponse;
    fromProtoMsg(message: MsgUpdateTaskResponseProtoMsg): MsgUpdateTaskResponse;
    toProto(message: MsgUpdateTaskResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateTaskResponse): MsgUpdateTaskResponseProtoMsg;
};
export declare const MsgDeleteTask: {
    typeUrl: string;
    encode(message: MsgDeleteTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteTask;
    fromPartial(object: Partial<MsgDeleteTask>): MsgDeleteTask;
    fromAmino(object: MsgDeleteTaskAmino): MsgDeleteTask;
    toAmino(message: MsgDeleteTask): MsgDeleteTaskAmino;
    fromAminoMsg(object: MsgDeleteTaskAminoMsg): MsgDeleteTask;
    fromProtoMsg(message: MsgDeleteTaskProtoMsg): MsgDeleteTask;
    toProto(message: MsgDeleteTask): Uint8Array;
    toProtoMsg(message: MsgDeleteTask): MsgDeleteTaskProtoMsg;
};
export declare const MsgUpdateRepositoryBackupRef: {
    typeUrl: string;
    encode(message: MsgUpdateRepositoryBackupRef, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRepositoryBackupRef;
    fromPartial(object: Partial<MsgUpdateRepositoryBackupRef>): MsgUpdateRepositoryBackupRef;
    fromAmino(object: MsgUpdateRepositoryBackupRefAmino): MsgUpdateRepositoryBackupRef;
    toAmino(message: MsgUpdateRepositoryBackupRef): MsgUpdateRepositoryBackupRefAmino;
    fromAminoMsg(object: MsgUpdateRepositoryBackupRefAminoMsg): MsgUpdateRepositoryBackupRef;
    fromProtoMsg(message: MsgUpdateRepositoryBackupRefProtoMsg): MsgUpdateRepositoryBackupRef;
    toProto(message: MsgUpdateRepositoryBackupRef): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryBackupRef): MsgUpdateRepositoryBackupRefProtoMsg;
};
export declare const MsgUpdateRepositoryBackupRefResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRepositoryBackupRefResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRepositoryBackupRefResponse;
    fromPartial(_: Partial<MsgUpdateRepositoryBackupRefResponse>): MsgUpdateRepositoryBackupRefResponse;
    fromAmino(_: MsgUpdateRepositoryBackupRefResponseAmino): MsgUpdateRepositoryBackupRefResponse;
    toAmino(_: MsgUpdateRepositoryBackupRefResponse): MsgUpdateRepositoryBackupRefResponseAmino;
    fromAminoMsg(object: MsgUpdateRepositoryBackupRefResponseAminoMsg): MsgUpdateRepositoryBackupRefResponse;
    fromProtoMsg(message: MsgUpdateRepositoryBackupRefResponseProtoMsg): MsgUpdateRepositoryBackupRefResponse;
    toProto(message: MsgUpdateRepositoryBackupRefResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryBackupRefResponse): MsgUpdateRepositoryBackupRefResponseProtoMsg;
};
export declare const MsgAddRepositoryBackupRef: {
    typeUrl: string;
    encode(message: MsgAddRepositoryBackupRef, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddRepositoryBackupRef;
    fromPartial(object: Partial<MsgAddRepositoryBackupRef>): MsgAddRepositoryBackupRef;
    fromAmino(object: MsgAddRepositoryBackupRefAmino): MsgAddRepositoryBackupRef;
    toAmino(message: MsgAddRepositoryBackupRef): MsgAddRepositoryBackupRefAmino;
    fromAminoMsg(object: MsgAddRepositoryBackupRefAminoMsg): MsgAddRepositoryBackupRef;
    fromProtoMsg(message: MsgAddRepositoryBackupRefProtoMsg): MsgAddRepositoryBackupRef;
    toProto(message: MsgAddRepositoryBackupRef): Uint8Array;
    toProtoMsg(message: MsgAddRepositoryBackupRef): MsgAddRepositoryBackupRefProtoMsg;
};
export declare const MsgAddRepositoryBackupRefResponse: {
    typeUrl: string;
    encode(_: MsgAddRepositoryBackupRefResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddRepositoryBackupRefResponse;
    fromPartial(_: Partial<MsgAddRepositoryBackupRefResponse>): MsgAddRepositoryBackupRefResponse;
    fromAmino(_: MsgAddRepositoryBackupRefResponseAmino): MsgAddRepositoryBackupRefResponse;
    toAmino(_: MsgAddRepositoryBackupRefResponse): MsgAddRepositoryBackupRefResponseAmino;
    fromAminoMsg(object: MsgAddRepositoryBackupRefResponseAminoMsg): MsgAddRepositoryBackupRefResponse;
    fromProtoMsg(message: MsgAddRepositoryBackupRefResponseProtoMsg): MsgAddRepositoryBackupRefResponse;
    toProto(message: MsgAddRepositoryBackupRefResponse): Uint8Array;
    toProtoMsg(message: MsgAddRepositoryBackupRefResponse): MsgAddRepositoryBackupRefResponseProtoMsg;
};
export declare const MsgDeleteTaskResponse: {
    typeUrl: string;
    encode(_: MsgDeleteTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteTaskResponse;
    fromPartial(_: Partial<MsgDeleteTaskResponse>): MsgDeleteTaskResponse;
    fromAmino(_: MsgDeleteTaskResponseAmino): MsgDeleteTaskResponse;
    toAmino(_: MsgDeleteTaskResponse): MsgDeleteTaskResponseAmino;
    fromAminoMsg(object: MsgDeleteTaskResponseAminoMsg): MsgDeleteTaskResponse;
    fromProtoMsg(message: MsgDeleteTaskResponseProtoMsg): MsgDeleteTaskResponse;
    toProto(message: MsgDeleteTaskResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTaskResponse): MsgDeleteTaskResponseProtoMsg;
};
export declare const MsgDeleteStorageProviderResponse: {
    typeUrl: string;
    encode(_: MsgDeleteStorageProviderResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteStorageProviderResponse;
    fromPartial(_: Partial<MsgDeleteStorageProviderResponse>): MsgDeleteStorageProviderResponse;
    fromAmino(_: MsgDeleteStorageProviderResponseAmino): MsgDeleteStorageProviderResponse;
    toAmino(_: MsgDeleteStorageProviderResponse): MsgDeleteStorageProviderResponseAmino;
    fromAminoMsg(object: MsgDeleteStorageProviderResponseAminoMsg): MsgDeleteStorageProviderResponse;
    fromProtoMsg(message: MsgDeleteStorageProviderResponseProtoMsg): MsgDeleteStorageProviderResponse;
    toProto(message: MsgDeleteStorageProviderResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteStorageProviderResponse): MsgDeleteStorageProviderResponseProtoMsg;
};
export declare const MsgSetBranch: {
    typeUrl: string;
    encode(message: MsgSetBranch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetBranch;
    fromPartial(object: Partial<MsgSetBranch>): MsgSetBranch;
    fromAmino(object: MsgSetBranchAmino): MsgSetBranch;
    toAmino(message: MsgSetBranch): MsgSetBranchAmino;
    fromAminoMsg(object: MsgSetBranchAminoMsg): MsgSetBranch;
    fromProtoMsg(message: MsgSetBranchProtoMsg): MsgSetBranch;
    toProto(message: MsgSetBranch): Uint8Array;
    toProtoMsg(message: MsgSetBranch): MsgSetBranchProtoMsg;
};
export declare const MsgSetBranch_Branch: {
    typeUrl: string;
    encode(message: MsgSetBranch_Branch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetBranch_Branch;
    fromPartial(object: Partial<MsgSetBranch_Branch>): MsgSetBranch_Branch;
    fromAmino(object: MsgSetBranch_BranchAmino): MsgSetBranch_Branch;
    toAmino(message: MsgSetBranch_Branch): MsgSetBranch_BranchAmino;
    fromAminoMsg(object: MsgSetBranch_BranchAminoMsg): MsgSetBranch_Branch;
    fromProtoMsg(message: MsgSetBranch_BranchProtoMsg): MsgSetBranch_Branch;
    toProto(message: MsgSetBranch_Branch): Uint8Array;
    toProtoMsg(message: MsgSetBranch_Branch): MsgSetBranch_BranchProtoMsg;
};
export declare const MsgSetBranchResponse: {
    typeUrl: string;
    encode(_: MsgSetBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetBranchResponse;
    fromPartial(_: Partial<MsgSetBranchResponse>): MsgSetBranchResponse;
    fromAmino(_: MsgSetBranchResponseAmino): MsgSetBranchResponse;
    toAmino(_: MsgSetBranchResponse): MsgSetBranchResponseAmino;
    fromAminoMsg(object: MsgSetBranchResponseAminoMsg): MsgSetBranchResponse;
    fromProtoMsg(message: MsgSetBranchResponseProtoMsg): MsgSetBranchResponse;
    toProto(message: MsgSetBranchResponse): Uint8Array;
    toProtoMsg(message: MsgSetBranchResponse): MsgSetBranchResponseProtoMsg;
};
export declare const MsgSetDefaultBranch: {
    typeUrl: string;
    encode(message: MsgSetDefaultBranch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetDefaultBranch;
    fromPartial(object: Partial<MsgSetDefaultBranch>): MsgSetDefaultBranch;
    fromAmino(object: MsgSetDefaultBranchAmino): MsgSetDefaultBranch;
    toAmino(message: MsgSetDefaultBranch): MsgSetDefaultBranchAmino;
    fromAminoMsg(object: MsgSetDefaultBranchAminoMsg): MsgSetDefaultBranch;
    fromProtoMsg(message: MsgSetDefaultBranchProtoMsg): MsgSetDefaultBranch;
    toProto(message: MsgSetDefaultBranch): Uint8Array;
    toProtoMsg(message: MsgSetDefaultBranch): MsgSetDefaultBranchProtoMsg;
};
export declare const MsgSetDefaultBranchResponse: {
    typeUrl: string;
    encode(_: MsgSetDefaultBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetDefaultBranchResponse;
    fromPartial(_: Partial<MsgSetDefaultBranchResponse>): MsgSetDefaultBranchResponse;
    fromAmino(_: MsgSetDefaultBranchResponseAmino): MsgSetDefaultBranchResponse;
    toAmino(_: MsgSetDefaultBranchResponse): MsgSetDefaultBranchResponseAmino;
    fromAminoMsg(object: MsgSetDefaultBranchResponseAminoMsg): MsgSetDefaultBranchResponse;
    fromProtoMsg(message: MsgSetDefaultBranchResponseProtoMsg): MsgSetDefaultBranchResponse;
    toProto(message: MsgSetDefaultBranchResponse): Uint8Array;
    toProtoMsg(message: MsgSetDefaultBranchResponse): MsgSetDefaultBranchResponseProtoMsg;
};
export declare const MsgMultiSetBranch: {
    typeUrl: string;
    encode(message: MsgMultiSetBranch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiSetBranch;
    fromPartial(object: Partial<MsgMultiSetBranch>): MsgMultiSetBranch;
    fromAmino(object: MsgMultiSetBranchAmino): MsgMultiSetBranch;
    toAmino(message: MsgMultiSetBranch): MsgMultiSetBranchAmino;
    fromAminoMsg(object: MsgMultiSetBranchAminoMsg): MsgMultiSetBranch;
    fromProtoMsg(message: MsgMultiSetBranchProtoMsg): MsgMultiSetBranch;
    toProto(message: MsgMultiSetBranch): Uint8Array;
    toProtoMsg(message: MsgMultiSetBranch): MsgMultiSetBranchProtoMsg;
};
export declare const MsgMultiSetBranch_Branch: {
    typeUrl: string;
    encode(message: MsgMultiSetBranch_Branch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiSetBranch_Branch;
    fromPartial(object: Partial<MsgMultiSetBranch_Branch>): MsgMultiSetBranch_Branch;
    fromAmino(object: MsgMultiSetBranch_BranchAmino): MsgMultiSetBranch_Branch;
    toAmino(message: MsgMultiSetBranch_Branch): MsgMultiSetBranch_BranchAmino;
    fromAminoMsg(object: MsgMultiSetBranch_BranchAminoMsg): MsgMultiSetBranch_Branch;
    fromProtoMsg(message: MsgMultiSetBranch_BranchProtoMsg): MsgMultiSetBranch_Branch;
    toProto(message: MsgMultiSetBranch_Branch): Uint8Array;
    toProtoMsg(message: MsgMultiSetBranch_Branch): MsgMultiSetBranch_BranchProtoMsg;
};
export declare const MsgMultiSetBranchResponse: {
    typeUrl: string;
    encode(_: MsgMultiSetBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMultiSetBranchResponse;
    fromPartial(_: Partial<MsgMultiSetBranchResponse>): MsgMultiSetBranchResponse;
    fromAmino(_: MsgMultiSetBranchResponseAmino): MsgMultiSetBranchResponse;
    toAmino(_: MsgMultiSetBranchResponse): MsgMultiSetBranchResponseAmino;
    fromAminoMsg(object: MsgMultiSetBranchResponseAminoMsg): MsgMultiSetBranchResponse;
    fromProtoMsg(message: MsgMultiSetBranchResponseProtoMsg): MsgMultiSetBranchResponse;
    toProto(message: MsgMultiSetBranchResponse): Uint8Array;
    toProtoMsg(message: MsgMultiSetBranchResponse): MsgMultiSetBranchResponseProtoMsg;
};
export declare const MsgDeleteBranch: {
    typeUrl: string;
    encode(message: MsgDeleteBranch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteBranch;
    fromPartial(object: Partial<MsgDeleteBranch>): MsgDeleteBranch;
    fromAmino(object: MsgDeleteBranchAmino): MsgDeleteBranch;
    toAmino(message: MsgDeleteBranch): MsgDeleteBranchAmino;
    fromAminoMsg(object: MsgDeleteBranchAminoMsg): MsgDeleteBranch;
    fromProtoMsg(message: MsgDeleteBranchProtoMsg): MsgDeleteBranch;
    toProto(message: MsgDeleteBranch): Uint8Array;
    toProtoMsg(message: MsgDeleteBranch): MsgDeleteBranchProtoMsg;
};
export declare const MsgDeleteBranchResponse: {
    typeUrl: string;
    encode(_: MsgDeleteBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteBranchResponse;
    fromPartial(_: Partial<MsgDeleteBranchResponse>): MsgDeleteBranchResponse;
    fromAmino(_: MsgDeleteBranchResponseAmino): MsgDeleteBranchResponse;
    toAmino(_: MsgDeleteBranchResponse): MsgDeleteBranchResponseAmino;
    fromAminoMsg(object: MsgDeleteBranchResponseAminoMsg): MsgDeleteBranchResponse;
    fromProtoMsg(message: MsgDeleteBranchResponseProtoMsg): MsgDeleteBranchResponse;
    toProto(message: MsgDeleteBranchResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteBranchResponse): MsgDeleteBranchResponseProtoMsg;
};
export declare const MsgMultiDeleteBranch: {
    typeUrl: string;
    encode(message: MsgMultiDeleteBranch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiDeleteBranch;
    fromPartial(object: Partial<MsgMultiDeleteBranch>): MsgMultiDeleteBranch;
    fromAmino(object: MsgMultiDeleteBranchAmino): MsgMultiDeleteBranch;
    toAmino(message: MsgMultiDeleteBranch): MsgMultiDeleteBranchAmino;
    fromAminoMsg(object: MsgMultiDeleteBranchAminoMsg): MsgMultiDeleteBranch;
    fromProtoMsg(message: MsgMultiDeleteBranchProtoMsg): MsgMultiDeleteBranch;
    toProto(message: MsgMultiDeleteBranch): Uint8Array;
    toProtoMsg(message: MsgMultiDeleteBranch): MsgMultiDeleteBranchProtoMsg;
};
export declare const MsgMultiDeleteBranchResponse: {
    typeUrl: string;
    encode(_: MsgMultiDeleteBranchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMultiDeleteBranchResponse;
    fromPartial(_: Partial<MsgMultiDeleteBranchResponse>): MsgMultiDeleteBranchResponse;
    fromAmino(_: MsgMultiDeleteBranchResponseAmino): MsgMultiDeleteBranchResponse;
    toAmino(_: MsgMultiDeleteBranchResponse): MsgMultiDeleteBranchResponseAmino;
    fromAminoMsg(object: MsgMultiDeleteBranchResponseAminoMsg): MsgMultiDeleteBranchResponse;
    fromProtoMsg(message: MsgMultiDeleteBranchResponseProtoMsg): MsgMultiDeleteBranchResponse;
    toProto(message: MsgMultiDeleteBranchResponse): Uint8Array;
    toProtoMsg(message: MsgMultiDeleteBranchResponse): MsgMultiDeleteBranchResponseProtoMsg;
};
export declare const MsgSetTag: {
    typeUrl: string;
    encode(message: MsgSetTag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetTag;
    fromPartial(object: Partial<MsgSetTag>): MsgSetTag;
    fromAmino(object: MsgSetTagAmino): MsgSetTag;
    toAmino(message: MsgSetTag): MsgSetTagAmino;
    fromAminoMsg(object: MsgSetTagAminoMsg): MsgSetTag;
    fromProtoMsg(message: MsgSetTagProtoMsg): MsgSetTag;
    toProto(message: MsgSetTag): Uint8Array;
    toProtoMsg(message: MsgSetTag): MsgSetTagProtoMsg;
};
export declare const MsgSetTag_Tag: {
    typeUrl: string;
    encode(message: MsgSetTag_Tag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetTag_Tag;
    fromPartial(object: Partial<MsgSetTag_Tag>): MsgSetTag_Tag;
    fromAmino(object: MsgSetTag_TagAmino): MsgSetTag_Tag;
    toAmino(message: MsgSetTag_Tag): MsgSetTag_TagAmino;
    fromAminoMsg(object: MsgSetTag_TagAminoMsg): MsgSetTag_Tag;
    fromProtoMsg(message: MsgSetTag_TagProtoMsg): MsgSetTag_Tag;
    toProto(message: MsgSetTag_Tag): Uint8Array;
    toProtoMsg(message: MsgSetTag_Tag): MsgSetTag_TagProtoMsg;
};
export declare const MsgSetTagResponse: {
    typeUrl: string;
    encode(_: MsgSetTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSetTagResponse;
    fromPartial(_: Partial<MsgSetTagResponse>): MsgSetTagResponse;
    fromAmino(_: MsgSetTagResponseAmino): MsgSetTagResponse;
    toAmino(_: MsgSetTagResponse): MsgSetTagResponseAmino;
    fromAminoMsg(object: MsgSetTagResponseAminoMsg): MsgSetTagResponse;
    fromProtoMsg(message: MsgSetTagResponseProtoMsg): MsgSetTagResponse;
    toProto(message: MsgSetTagResponse): Uint8Array;
    toProtoMsg(message: MsgSetTagResponse): MsgSetTagResponseProtoMsg;
};
export declare const MsgMultiSetTag: {
    typeUrl: string;
    encode(message: MsgMultiSetTag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiSetTag;
    fromPartial(object: Partial<MsgMultiSetTag>): MsgMultiSetTag;
    fromAmino(object: MsgMultiSetTagAmino): MsgMultiSetTag;
    toAmino(message: MsgMultiSetTag): MsgMultiSetTagAmino;
    fromAminoMsg(object: MsgMultiSetTagAminoMsg): MsgMultiSetTag;
    fromProtoMsg(message: MsgMultiSetTagProtoMsg): MsgMultiSetTag;
    toProto(message: MsgMultiSetTag): Uint8Array;
    toProtoMsg(message: MsgMultiSetTag): MsgMultiSetTagProtoMsg;
};
export declare const MsgMultiSetTag_Tag: {
    typeUrl: string;
    encode(message: MsgMultiSetTag_Tag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiSetTag_Tag;
    fromPartial(object: Partial<MsgMultiSetTag_Tag>): MsgMultiSetTag_Tag;
    fromAmino(object: MsgMultiSetTag_TagAmino): MsgMultiSetTag_Tag;
    toAmino(message: MsgMultiSetTag_Tag): MsgMultiSetTag_TagAmino;
    fromAminoMsg(object: MsgMultiSetTag_TagAminoMsg): MsgMultiSetTag_Tag;
    fromProtoMsg(message: MsgMultiSetTag_TagProtoMsg): MsgMultiSetTag_Tag;
    toProto(message: MsgMultiSetTag_Tag): Uint8Array;
    toProtoMsg(message: MsgMultiSetTag_Tag): MsgMultiSetTag_TagProtoMsg;
};
export declare const MsgMultiSetTagResponse: {
    typeUrl: string;
    encode(_: MsgMultiSetTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMultiSetTagResponse;
    fromPartial(_: Partial<MsgMultiSetTagResponse>): MsgMultiSetTagResponse;
    fromAmino(_: MsgMultiSetTagResponseAmino): MsgMultiSetTagResponse;
    toAmino(_: MsgMultiSetTagResponse): MsgMultiSetTagResponseAmino;
    fromAminoMsg(object: MsgMultiSetTagResponseAminoMsg): MsgMultiSetTagResponse;
    fromProtoMsg(message: MsgMultiSetTagResponseProtoMsg): MsgMultiSetTagResponse;
    toProto(message: MsgMultiSetTagResponse): Uint8Array;
    toProtoMsg(message: MsgMultiSetTagResponse): MsgMultiSetTagResponseProtoMsg;
};
export declare const MsgDeleteTag: {
    typeUrl: string;
    encode(message: MsgDeleteTag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteTag;
    fromPartial(object: Partial<MsgDeleteTag>): MsgDeleteTag;
    fromAmino(object: MsgDeleteTagAmino): MsgDeleteTag;
    toAmino(message: MsgDeleteTag): MsgDeleteTagAmino;
    fromAminoMsg(object: MsgDeleteTagAminoMsg): MsgDeleteTag;
    fromProtoMsg(message: MsgDeleteTagProtoMsg): MsgDeleteTag;
    toProto(message: MsgDeleteTag): Uint8Array;
    toProtoMsg(message: MsgDeleteTag): MsgDeleteTagProtoMsg;
};
export declare const MsgDeleteTagResponse: {
    typeUrl: string;
    encode(_: MsgDeleteTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteTagResponse;
    fromPartial(_: Partial<MsgDeleteTagResponse>): MsgDeleteTagResponse;
    fromAmino(_: MsgDeleteTagResponseAmino): MsgDeleteTagResponse;
    toAmino(_: MsgDeleteTagResponse): MsgDeleteTagResponseAmino;
    fromAminoMsg(object: MsgDeleteTagResponseAminoMsg): MsgDeleteTagResponse;
    fromProtoMsg(message: MsgDeleteTagResponseProtoMsg): MsgDeleteTagResponse;
    toProto(message: MsgDeleteTagResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteTagResponse): MsgDeleteTagResponseProtoMsg;
};
export declare const MsgMultiDeleteTag: {
    typeUrl: string;
    encode(message: MsgMultiDeleteTag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMultiDeleteTag;
    fromPartial(object: Partial<MsgMultiDeleteTag>): MsgMultiDeleteTag;
    fromAmino(object: MsgMultiDeleteTagAmino): MsgMultiDeleteTag;
    toAmino(message: MsgMultiDeleteTag): MsgMultiDeleteTagAmino;
    fromAminoMsg(object: MsgMultiDeleteTagAminoMsg): MsgMultiDeleteTag;
    fromProtoMsg(message: MsgMultiDeleteTagProtoMsg): MsgMultiDeleteTag;
    toProto(message: MsgMultiDeleteTag): Uint8Array;
    toProtoMsg(message: MsgMultiDeleteTag): MsgMultiDeleteTagProtoMsg;
};
export declare const MsgMultiDeleteTagResponse: {
    typeUrl: string;
    encode(_: MsgMultiDeleteTagResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMultiDeleteTagResponse;
    fromPartial(_: Partial<MsgMultiDeleteTagResponse>): MsgMultiDeleteTagResponse;
    fromAmino(_: MsgMultiDeleteTagResponseAmino): MsgMultiDeleteTagResponse;
    toAmino(_: MsgMultiDeleteTagResponse): MsgMultiDeleteTagResponseAmino;
    fromAminoMsg(object: MsgMultiDeleteTagResponseAminoMsg): MsgMultiDeleteTagResponse;
    fromProtoMsg(message: MsgMultiDeleteTagResponseProtoMsg): MsgMultiDeleteTagResponse;
    toProto(message: MsgMultiDeleteTagResponse): Uint8Array;
    toProtoMsg(message: MsgMultiDeleteTagResponse): MsgMultiDeleteTagResponseProtoMsg;
};
export declare const MsgAddMember: {
    typeUrl: string;
    encode(message: MsgAddMember, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddMember;
    fromPartial(object: Partial<MsgAddMember>): MsgAddMember;
    fromAmino(object: MsgAddMemberAmino): MsgAddMember;
    toAmino(message: MsgAddMember): MsgAddMemberAmino;
    fromAminoMsg(object: MsgAddMemberAminoMsg): MsgAddMember;
    fromProtoMsg(message: MsgAddMemberProtoMsg): MsgAddMember;
    toProto(message: MsgAddMember): Uint8Array;
    toProtoMsg(message: MsgAddMember): MsgAddMemberProtoMsg;
};
export declare const MsgAddMemberResponse: {
    typeUrl: string;
    encode(_: MsgAddMemberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddMemberResponse;
    fromPartial(_: Partial<MsgAddMemberResponse>): MsgAddMemberResponse;
    fromAmino(_: MsgAddMemberResponseAmino): MsgAddMemberResponse;
    toAmino(_: MsgAddMemberResponse): MsgAddMemberResponseAmino;
    fromAminoMsg(object: MsgAddMemberResponseAminoMsg): MsgAddMemberResponse;
    fromProtoMsg(message: MsgAddMemberResponseProtoMsg): MsgAddMemberResponse;
    toProto(message: MsgAddMemberResponse): Uint8Array;
    toProtoMsg(message: MsgAddMemberResponse): MsgAddMemberResponseProtoMsg;
};
export declare const MsgUpdateMemberRole: {
    typeUrl: string;
    encode(message: MsgUpdateMemberRole, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateMemberRole;
    fromPartial(object: Partial<MsgUpdateMemberRole>): MsgUpdateMemberRole;
    fromAmino(object: MsgUpdateMemberRoleAmino): MsgUpdateMemberRole;
    toAmino(message: MsgUpdateMemberRole): MsgUpdateMemberRoleAmino;
    fromAminoMsg(object: MsgUpdateMemberRoleAminoMsg): MsgUpdateMemberRole;
    fromProtoMsg(message: MsgUpdateMemberRoleProtoMsg): MsgUpdateMemberRole;
    toProto(message: MsgUpdateMemberRole): Uint8Array;
    toProtoMsg(message: MsgUpdateMemberRole): MsgUpdateMemberRoleProtoMsg;
};
export declare const MsgUpdateMemberRoleResponse: {
    typeUrl: string;
    encode(_: MsgUpdateMemberRoleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateMemberRoleResponse;
    fromPartial(_: Partial<MsgUpdateMemberRoleResponse>): MsgUpdateMemberRoleResponse;
    fromAmino(_: MsgUpdateMemberRoleResponseAmino): MsgUpdateMemberRoleResponse;
    toAmino(_: MsgUpdateMemberRoleResponse): MsgUpdateMemberRoleResponseAmino;
    fromAminoMsg(object: MsgUpdateMemberRoleResponseAminoMsg): MsgUpdateMemberRoleResponse;
    fromProtoMsg(message: MsgUpdateMemberRoleResponseProtoMsg): MsgUpdateMemberRoleResponse;
    toProto(message: MsgUpdateMemberRoleResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateMemberRoleResponse): MsgUpdateMemberRoleResponseProtoMsg;
};
export declare const MsgRemoveMember: {
    typeUrl: string;
    encode(message: MsgRemoveMember, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveMember;
    fromPartial(object: Partial<MsgRemoveMember>): MsgRemoveMember;
    fromAmino(object: MsgRemoveMemberAmino): MsgRemoveMember;
    toAmino(message: MsgRemoveMember): MsgRemoveMemberAmino;
    fromAminoMsg(object: MsgRemoveMemberAminoMsg): MsgRemoveMember;
    fromProtoMsg(message: MsgRemoveMemberProtoMsg): MsgRemoveMember;
    toProto(message: MsgRemoveMember): Uint8Array;
    toProtoMsg(message: MsgRemoveMember): MsgRemoveMemberProtoMsg;
};
export declare const MsgRemoveMemberResponse: {
    typeUrl: string;
    encode(_: MsgRemoveMemberResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveMemberResponse;
    fromPartial(_: Partial<MsgRemoveMemberResponse>): MsgRemoveMemberResponse;
    fromAmino(_: MsgRemoveMemberResponseAmino): MsgRemoveMemberResponse;
    toAmino(_: MsgRemoveMemberResponse): MsgRemoveMemberResponseAmino;
    fromAminoMsg(object: MsgRemoveMemberResponseAminoMsg): MsgRemoveMemberResponse;
    fromProtoMsg(message: MsgRemoveMemberResponseProtoMsg): MsgRemoveMemberResponse;
    toProto(message: MsgRemoveMemberResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveMemberResponse): MsgRemoveMemberResponseProtoMsg;
};
export declare const MsgCreateBounty: {
    typeUrl: string;
    encode(message: MsgCreateBounty, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBounty;
    fromPartial(object: Partial<MsgCreateBounty>): MsgCreateBounty;
    fromAmino(object: MsgCreateBountyAmino): MsgCreateBounty;
    toAmino(message: MsgCreateBounty): MsgCreateBountyAmino;
    fromAminoMsg(object: MsgCreateBountyAminoMsg): MsgCreateBounty;
    fromProtoMsg(message: MsgCreateBountyProtoMsg): MsgCreateBounty;
    toProto(message: MsgCreateBounty): Uint8Array;
    toProtoMsg(message: MsgCreateBounty): MsgCreateBountyProtoMsg;
};
export declare const MsgCreateBountyResponse: {
    typeUrl: string;
    encode(message: MsgCreateBountyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateBountyResponse;
    fromPartial(object: Partial<MsgCreateBountyResponse>): MsgCreateBountyResponse;
    fromAmino(object: MsgCreateBountyResponseAmino): MsgCreateBountyResponse;
    toAmino(message: MsgCreateBountyResponse): MsgCreateBountyResponseAmino;
    fromAminoMsg(object: MsgCreateBountyResponseAminoMsg): MsgCreateBountyResponse;
    fromProtoMsg(message: MsgCreateBountyResponseProtoMsg): MsgCreateBountyResponse;
    toProto(message: MsgCreateBountyResponse): Uint8Array;
    toProtoMsg(message: MsgCreateBountyResponse): MsgCreateBountyResponseProtoMsg;
};
export declare const MsgUpdateBountyExpiry: {
    typeUrl: string;
    encode(message: MsgUpdateBountyExpiry, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateBountyExpiry;
    fromPartial(object: Partial<MsgUpdateBountyExpiry>): MsgUpdateBountyExpiry;
    fromAmino(object: MsgUpdateBountyExpiryAmino): MsgUpdateBountyExpiry;
    toAmino(message: MsgUpdateBountyExpiry): MsgUpdateBountyExpiryAmino;
    fromAminoMsg(object: MsgUpdateBountyExpiryAminoMsg): MsgUpdateBountyExpiry;
    fromProtoMsg(message: MsgUpdateBountyExpiryProtoMsg): MsgUpdateBountyExpiry;
    toProto(message: MsgUpdateBountyExpiry): Uint8Array;
    toProtoMsg(message: MsgUpdateBountyExpiry): MsgUpdateBountyExpiryProtoMsg;
};
export declare const MsgUpdateBountyExpiryResponse: {
    typeUrl: string;
    encode(_: MsgUpdateBountyExpiryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateBountyExpiryResponse;
    fromPartial(_: Partial<MsgUpdateBountyExpiryResponse>): MsgUpdateBountyExpiryResponse;
    fromAmino(_: MsgUpdateBountyExpiryResponseAmino): MsgUpdateBountyExpiryResponse;
    toAmino(_: MsgUpdateBountyExpiryResponse): MsgUpdateBountyExpiryResponseAmino;
    fromAminoMsg(object: MsgUpdateBountyExpiryResponseAminoMsg): MsgUpdateBountyExpiryResponse;
    fromProtoMsg(message: MsgUpdateBountyExpiryResponseProtoMsg): MsgUpdateBountyExpiryResponse;
    toProto(message: MsgUpdateBountyExpiryResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateBountyExpiryResponse): MsgUpdateBountyExpiryResponseProtoMsg;
};
export declare const MsgCloseBounty: {
    typeUrl: string;
    encode(message: MsgCloseBounty, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseBounty;
    fromPartial(object: Partial<MsgCloseBounty>): MsgCloseBounty;
    fromAmino(object: MsgCloseBountyAmino): MsgCloseBounty;
    toAmino(message: MsgCloseBounty): MsgCloseBountyAmino;
    fromAminoMsg(object: MsgCloseBountyAminoMsg): MsgCloseBounty;
    fromProtoMsg(message: MsgCloseBountyProtoMsg): MsgCloseBounty;
    toProto(message: MsgCloseBounty): Uint8Array;
    toProtoMsg(message: MsgCloseBounty): MsgCloseBountyProtoMsg;
};
export declare const MsgCloseBountyResponse: {
    typeUrl: string;
    encode(_: MsgCloseBountyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseBountyResponse;
    fromPartial(_: Partial<MsgCloseBountyResponse>): MsgCloseBountyResponse;
    fromAmino(_: MsgCloseBountyResponseAmino): MsgCloseBountyResponse;
    toAmino(_: MsgCloseBountyResponse): MsgCloseBountyResponseAmino;
    fromAminoMsg(object: MsgCloseBountyResponseAminoMsg): MsgCloseBountyResponse;
    fromProtoMsg(message: MsgCloseBountyResponseProtoMsg): MsgCloseBountyResponse;
    toProto(message: MsgCloseBountyResponse): Uint8Array;
    toProtoMsg(message: MsgCloseBountyResponse): MsgCloseBountyResponseProtoMsg;
};
export declare const MsgDeleteBounty: {
    typeUrl: string;
    encode(message: MsgDeleteBounty, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteBounty;
    fromPartial(object: Partial<MsgDeleteBounty>): MsgDeleteBounty;
    fromAmino(object: MsgDeleteBountyAmino): MsgDeleteBounty;
    toAmino(message: MsgDeleteBounty): MsgDeleteBountyAmino;
    fromAminoMsg(object: MsgDeleteBountyAminoMsg): MsgDeleteBounty;
    fromProtoMsg(message: MsgDeleteBountyProtoMsg): MsgDeleteBounty;
    toProto(message: MsgDeleteBounty): Uint8Array;
    toProtoMsg(message: MsgDeleteBounty): MsgDeleteBountyProtoMsg;
};
export declare const MsgDeleteBountyResponse: {
    typeUrl: string;
    encode(_: MsgDeleteBountyResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteBountyResponse;
    fromPartial(_: Partial<MsgDeleteBountyResponse>): MsgDeleteBountyResponse;
    fromAmino(_: MsgDeleteBountyResponseAmino): MsgDeleteBountyResponse;
    toAmino(_: MsgDeleteBountyResponse): MsgDeleteBountyResponseAmino;
    fromAminoMsg(object: MsgDeleteBountyResponseAminoMsg): MsgDeleteBountyResponse;
    fromProtoMsg(message: MsgDeleteBountyResponseProtoMsg): MsgDeleteBountyResponse;
    toProto(message: MsgDeleteBountyResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteBountyResponse): MsgDeleteBountyResponseProtoMsg;
};
export declare const MsgCreateRelease: {
    typeUrl: string;
    encode(message: MsgCreateRelease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRelease;
    fromPartial(object: Partial<MsgCreateRelease>): MsgCreateRelease;
    fromAmino(object: MsgCreateReleaseAmino): MsgCreateRelease;
    toAmino(message: MsgCreateRelease): MsgCreateReleaseAmino;
    fromAminoMsg(object: MsgCreateReleaseAminoMsg): MsgCreateRelease;
    fromProtoMsg(message: MsgCreateReleaseProtoMsg): MsgCreateRelease;
    toProto(message: MsgCreateRelease): Uint8Array;
    toProtoMsg(message: MsgCreateRelease): MsgCreateReleaseProtoMsg;
};
export declare const MsgCreateReleaseResponse: {
    typeUrl: string;
    encode(message: MsgCreateReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateReleaseResponse;
    fromPartial(object: Partial<MsgCreateReleaseResponse>): MsgCreateReleaseResponse;
    fromAmino(object: MsgCreateReleaseResponseAmino): MsgCreateReleaseResponse;
    toAmino(message: MsgCreateReleaseResponse): MsgCreateReleaseResponseAmino;
    fromAminoMsg(object: MsgCreateReleaseResponseAminoMsg): MsgCreateReleaseResponse;
    fromProtoMsg(message: MsgCreateReleaseResponseProtoMsg): MsgCreateReleaseResponse;
    toProto(message: MsgCreateReleaseResponse): Uint8Array;
    toProtoMsg(message: MsgCreateReleaseResponse): MsgCreateReleaseResponseProtoMsg;
};
export declare const MsgUpdateRelease: {
    typeUrl: string;
    encode(message: MsgUpdateRelease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRelease;
    fromPartial(object: Partial<MsgUpdateRelease>): MsgUpdateRelease;
    fromAmino(object: MsgUpdateReleaseAmino): MsgUpdateRelease;
    toAmino(message: MsgUpdateRelease): MsgUpdateReleaseAmino;
    fromAminoMsg(object: MsgUpdateReleaseAminoMsg): MsgUpdateRelease;
    fromProtoMsg(message: MsgUpdateReleaseProtoMsg): MsgUpdateRelease;
    toProto(message: MsgUpdateRelease): Uint8Array;
    toProtoMsg(message: MsgUpdateRelease): MsgUpdateReleaseProtoMsg;
};
export declare const MsgUpdateReleaseResponse: {
    typeUrl: string;
    encode(_: MsgUpdateReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateReleaseResponse;
    fromPartial(_: Partial<MsgUpdateReleaseResponse>): MsgUpdateReleaseResponse;
    fromAmino(_: MsgUpdateReleaseResponseAmino): MsgUpdateReleaseResponse;
    toAmino(_: MsgUpdateReleaseResponse): MsgUpdateReleaseResponseAmino;
    fromAminoMsg(object: MsgUpdateReleaseResponseAminoMsg): MsgUpdateReleaseResponse;
    fromProtoMsg(message: MsgUpdateReleaseResponseProtoMsg): MsgUpdateReleaseResponse;
    toProto(message: MsgUpdateReleaseResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateReleaseResponse): MsgUpdateReleaseResponseProtoMsg;
};
export declare const MsgDeleteRelease: {
    typeUrl: string;
    encode(message: MsgDeleteRelease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteRelease;
    fromPartial(object: Partial<MsgDeleteRelease>): MsgDeleteRelease;
    fromAmino(object: MsgDeleteReleaseAmino): MsgDeleteRelease;
    toAmino(message: MsgDeleteRelease): MsgDeleteReleaseAmino;
    fromAminoMsg(object: MsgDeleteReleaseAminoMsg): MsgDeleteRelease;
    fromProtoMsg(message: MsgDeleteReleaseProtoMsg): MsgDeleteRelease;
    toProto(message: MsgDeleteRelease): Uint8Array;
    toProtoMsg(message: MsgDeleteRelease): MsgDeleteReleaseProtoMsg;
};
export declare const MsgDeleteReleaseResponse: {
    typeUrl: string;
    encode(_: MsgDeleteReleaseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteReleaseResponse;
    fromPartial(_: Partial<MsgDeleteReleaseResponse>): MsgDeleteReleaseResponse;
    fromAmino(_: MsgDeleteReleaseResponseAmino): MsgDeleteReleaseResponse;
    toAmino(_: MsgDeleteReleaseResponse): MsgDeleteReleaseResponseAmino;
    fromAminoMsg(object: MsgDeleteReleaseResponseAminoMsg): MsgDeleteReleaseResponse;
    fromProtoMsg(message: MsgDeleteReleaseResponseProtoMsg): MsgDeleteReleaseResponse;
    toProto(message: MsgDeleteReleaseResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteReleaseResponse): MsgDeleteReleaseResponseProtoMsg;
};
export declare const MsgCreatePullRequest: {
    typeUrl: string;
    encode(message: MsgCreatePullRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePullRequest;
    fromPartial(object: Partial<MsgCreatePullRequest>): MsgCreatePullRequest;
    fromAmino(object: MsgCreatePullRequestAmino): MsgCreatePullRequest;
    toAmino(message: MsgCreatePullRequest): MsgCreatePullRequestAmino;
    fromAminoMsg(object: MsgCreatePullRequestAminoMsg): MsgCreatePullRequest;
    fromProtoMsg(message: MsgCreatePullRequestProtoMsg): MsgCreatePullRequest;
    toProto(message: MsgCreatePullRequest): Uint8Array;
    toProtoMsg(message: MsgCreatePullRequest): MsgCreatePullRequestProtoMsg;
};
export declare const MsgCreatePullRequestResponse: {
    typeUrl: string;
    encode(message: MsgCreatePullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreatePullRequestResponse;
    fromPartial(object: Partial<MsgCreatePullRequestResponse>): MsgCreatePullRequestResponse;
    fromAmino(object: MsgCreatePullRequestResponseAmino): MsgCreatePullRequestResponse;
    toAmino(message: MsgCreatePullRequestResponse): MsgCreatePullRequestResponseAmino;
    fromAminoMsg(object: MsgCreatePullRequestResponseAminoMsg): MsgCreatePullRequestResponse;
    fromProtoMsg(message: MsgCreatePullRequestResponseProtoMsg): MsgCreatePullRequestResponse;
    toProto(message: MsgCreatePullRequestResponse): Uint8Array;
    toProtoMsg(message: MsgCreatePullRequestResponse): MsgCreatePullRequestResponseProtoMsg;
};
export declare const MsgUpdatePullRequestTitle: {
    typeUrl: string;
    encode(message: MsgUpdatePullRequestTitle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePullRequestTitle;
    fromPartial(object: Partial<MsgUpdatePullRequestTitle>): MsgUpdatePullRequestTitle;
    fromAmino(object: MsgUpdatePullRequestTitleAmino): MsgUpdatePullRequestTitle;
    toAmino(message: MsgUpdatePullRequestTitle): MsgUpdatePullRequestTitleAmino;
    fromAminoMsg(object: MsgUpdatePullRequestTitleAminoMsg): MsgUpdatePullRequestTitle;
    fromProtoMsg(message: MsgUpdatePullRequestTitleProtoMsg): MsgUpdatePullRequestTitle;
    toProto(message: MsgUpdatePullRequestTitle): Uint8Array;
    toProtoMsg(message: MsgUpdatePullRequestTitle): MsgUpdatePullRequestTitleProtoMsg;
};
export declare const MsgUpdatePullRequestTitleResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePullRequestTitleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePullRequestTitleResponse;
    fromPartial(_: Partial<MsgUpdatePullRequestTitleResponse>): MsgUpdatePullRequestTitleResponse;
    fromAmino(_: MsgUpdatePullRequestTitleResponseAmino): MsgUpdatePullRequestTitleResponse;
    toAmino(_: MsgUpdatePullRequestTitleResponse): MsgUpdatePullRequestTitleResponseAmino;
    fromAminoMsg(object: MsgUpdatePullRequestTitleResponseAminoMsg): MsgUpdatePullRequestTitleResponse;
    fromProtoMsg(message: MsgUpdatePullRequestTitleResponseProtoMsg): MsgUpdatePullRequestTitleResponse;
    toProto(message: MsgUpdatePullRequestTitleResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePullRequestTitleResponse): MsgUpdatePullRequestTitleResponseProtoMsg;
};
export declare const MsgUpdatePullRequestDescription: {
    typeUrl: string;
    encode(message: MsgUpdatePullRequestDescription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdatePullRequestDescription;
    fromPartial(object: Partial<MsgUpdatePullRequestDescription>): MsgUpdatePullRequestDescription;
    fromAmino(object: MsgUpdatePullRequestDescriptionAmino): MsgUpdatePullRequestDescription;
    toAmino(message: MsgUpdatePullRequestDescription): MsgUpdatePullRequestDescriptionAmino;
    fromAminoMsg(object: MsgUpdatePullRequestDescriptionAminoMsg): MsgUpdatePullRequestDescription;
    fromProtoMsg(message: MsgUpdatePullRequestDescriptionProtoMsg): MsgUpdatePullRequestDescription;
    toProto(message: MsgUpdatePullRequestDescription): Uint8Array;
    toProtoMsg(message: MsgUpdatePullRequestDescription): MsgUpdatePullRequestDescriptionProtoMsg;
};
export declare const MsgUpdatePullRequestDescriptionResponse: {
    typeUrl: string;
    encode(_: MsgUpdatePullRequestDescriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdatePullRequestDescriptionResponse;
    fromPartial(_: Partial<MsgUpdatePullRequestDescriptionResponse>): MsgUpdatePullRequestDescriptionResponse;
    fromAmino(_: MsgUpdatePullRequestDescriptionResponseAmino): MsgUpdatePullRequestDescriptionResponse;
    toAmino(_: MsgUpdatePullRequestDescriptionResponse): MsgUpdatePullRequestDescriptionResponseAmino;
    fromAminoMsg(object: MsgUpdatePullRequestDescriptionResponseAminoMsg): MsgUpdatePullRequestDescriptionResponse;
    fromProtoMsg(message: MsgUpdatePullRequestDescriptionResponseProtoMsg): MsgUpdatePullRequestDescriptionResponse;
    toProto(message: MsgUpdatePullRequestDescriptionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdatePullRequestDescriptionResponse): MsgUpdatePullRequestDescriptionResponseProtoMsg;
};
export declare const MsgInvokeMergePullRequest: {
    typeUrl: string;
    encode(message: MsgInvokeMergePullRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInvokeMergePullRequest;
    fromPartial(object: Partial<MsgInvokeMergePullRequest>): MsgInvokeMergePullRequest;
    fromAmino(object: MsgInvokeMergePullRequestAmino): MsgInvokeMergePullRequest;
    toAmino(message: MsgInvokeMergePullRequest): MsgInvokeMergePullRequestAmino;
    fromAminoMsg(object: MsgInvokeMergePullRequestAminoMsg): MsgInvokeMergePullRequest;
    fromProtoMsg(message: MsgInvokeMergePullRequestProtoMsg): MsgInvokeMergePullRequest;
    toProto(message: MsgInvokeMergePullRequest): Uint8Array;
    toProtoMsg(message: MsgInvokeMergePullRequest): MsgInvokeMergePullRequestProtoMsg;
};
export declare const MsgInvokeMergePullRequestResponse: {
    typeUrl: string;
    encode(_: MsgInvokeMergePullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInvokeMergePullRequestResponse;
    fromPartial(_: Partial<MsgInvokeMergePullRequestResponse>): MsgInvokeMergePullRequestResponse;
    fromAmino(_: MsgInvokeMergePullRequestResponseAmino): MsgInvokeMergePullRequestResponse;
    toAmino(_: MsgInvokeMergePullRequestResponse): MsgInvokeMergePullRequestResponseAmino;
    fromAminoMsg(object: MsgInvokeMergePullRequestResponseAminoMsg): MsgInvokeMergePullRequestResponse;
    fromProtoMsg(message: MsgInvokeMergePullRequestResponseProtoMsg): MsgInvokeMergePullRequestResponse;
    toProto(message: MsgInvokeMergePullRequestResponse): Uint8Array;
    toProtoMsg(message: MsgInvokeMergePullRequestResponse): MsgInvokeMergePullRequestResponseProtoMsg;
};
export declare const MsgSetPullRequestState: {
    typeUrl: string;
    encode(message: MsgSetPullRequestState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetPullRequestState;
    fromPartial(object: Partial<MsgSetPullRequestState>): MsgSetPullRequestState;
    fromAmino(object: MsgSetPullRequestStateAmino): MsgSetPullRequestState;
    toAmino(message: MsgSetPullRequestState): MsgSetPullRequestStateAmino;
    fromAminoMsg(object: MsgSetPullRequestStateAminoMsg): MsgSetPullRequestState;
    fromProtoMsg(message: MsgSetPullRequestStateProtoMsg): MsgSetPullRequestState;
    toProto(message: MsgSetPullRequestState): Uint8Array;
    toProtoMsg(message: MsgSetPullRequestState): MsgSetPullRequestStateProtoMsg;
};
export declare const MsgSetPullRequestStateResponse: {
    typeUrl: string;
    encode(message: MsgSetPullRequestStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSetPullRequestStateResponse;
    fromPartial(object: Partial<MsgSetPullRequestStateResponse>): MsgSetPullRequestStateResponse;
    fromAmino(object: MsgSetPullRequestStateResponseAmino): MsgSetPullRequestStateResponse;
    toAmino(message: MsgSetPullRequestStateResponse): MsgSetPullRequestStateResponseAmino;
    fromAminoMsg(object: MsgSetPullRequestStateResponseAminoMsg): MsgSetPullRequestStateResponse;
    fromProtoMsg(message: MsgSetPullRequestStateResponseProtoMsg): MsgSetPullRequestStateResponse;
    toProto(message: MsgSetPullRequestStateResponse): Uint8Array;
    toProtoMsg(message: MsgSetPullRequestStateResponse): MsgSetPullRequestStateResponseProtoMsg;
};
export declare const MsgAddPullRequestReviewers: {
    typeUrl: string;
    encode(message: MsgAddPullRequestReviewers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddPullRequestReviewers;
    fromPartial(object: Partial<MsgAddPullRequestReviewers>): MsgAddPullRequestReviewers;
    fromAmino(object: MsgAddPullRequestReviewersAmino): MsgAddPullRequestReviewers;
    toAmino(message: MsgAddPullRequestReviewers): MsgAddPullRequestReviewersAmino;
    fromAminoMsg(object: MsgAddPullRequestReviewersAminoMsg): MsgAddPullRequestReviewers;
    fromProtoMsg(message: MsgAddPullRequestReviewersProtoMsg): MsgAddPullRequestReviewers;
    toProto(message: MsgAddPullRequestReviewers): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestReviewers): MsgAddPullRequestReviewersProtoMsg;
};
export declare const MsgAddPullRequestReviewersResponse: {
    typeUrl: string;
    encode(_: MsgAddPullRequestReviewersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddPullRequestReviewersResponse;
    fromPartial(_: Partial<MsgAddPullRequestReviewersResponse>): MsgAddPullRequestReviewersResponse;
    fromAmino(_: MsgAddPullRequestReviewersResponseAmino): MsgAddPullRequestReviewersResponse;
    toAmino(_: MsgAddPullRequestReviewersResponse): MsgAddPullRequestReviewersResponseAmino;
    fromAminoMsg(object: MsgAddPullRequestReviewersResponseAminoMsg): MsgAddPullRequestReviewersResponse;
    fromProtoMsg(message: MsgAddPullRequestReviewersResponseProtoMsg): MsgAddPullRequestReviewersResponse;
    toProto(message: MsgAddPullRequestReviewersResponse): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestReviewersResponse): MsgAddPullRequestReviewersResponseProtoMsg;
};
export declare const MsgRemovePullRequestReviewers: {
    typeUrl: string;
    encode(message: MsgRemovePullRequestReviewers, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemovePullRequestReviewers;
    fromPartial(object: Partial<MsgRemovePullRequestReviewers>): MsgRemovePullRequestReviewers;
    fromAmino(object: MsgRemovePullRequestReviewersAmino): MsgRemovePullRequestReviewers;
    toAmino(message: MsgRemovePullRequestReviewers): MsgRemovePullRequestReviewersAmino;
    fromAminoMsg(object: MsgRemovePullRequestReviewersAminoMsg): MsgRemovePullRequestReviewers;
    fromProtoMsg(message: MsgRemovePullRequestReviewersProtoMsg): MsgRemovePullRequestReviewers;
    toProto(message: MsgRemovePullRequestReviewers): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestReviewers): MsgRemovePullRequestReviewersProtoMsg;
};
export declare const MsgRemovePullRequestReviewersResponse: {
    typeUrl: string;
    encode(_: MsgRemovePullRequestReviewersResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemovePullRequestReviewersResponse;
    fromPartial(_: Partial<MsgRemovePullRequestReviewersResponse>): MsgRemovePullRequestReviewersResponse;
    fromAmino(_: MsgRemovePullRequestReviewersResponseAmino): MsgRemovePullRequestReviewersResponse;
    toAmino(_: MsgRemovePullRequestReviewersResponse): MsgRemovePullRequestReviewersResponseAmino;
    fromAminoMsg(object: MsgRemovePullRequestReviewersResponseAminoMsg): MsgRemovePullRequestReviewersResponse;
    fromProtoMsg(message: MsgRemovePullRequestReviewersResponseProtoMsg): MsgRemovePullRequestReviewersResponse;
    toProto(message: MsgRemovePullRequestReviewersResponse): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestReviewersResponse): MsgRemovePullRequestReviewersResponseProtoMsg;
};
export declare const MsgAddPullRequestAssignees: {
    typeUrl: string;
    encode(message: MsgAddPullRequestAssignees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddPullRequestAssignees;
    fromPartial(object: Partial<MsgAddPullRequestAssignees>): MsgAddPullRequestAssignees;
    fromAmino(object: MsgAddPullRequestAssigneesAmino): MsgAddPullRequestAssignees;
    toAmino(message: MsgAddPullRequestAssignees): MsgAddPullRequestAssigneesAmino;
    fromAminoMsg(object: MsgAddPullRequestAssigneesAminoMsg): MsgAddPullRequestAssignees;
    fromProtoMsg(message: MsgAddPullRequestAssigneesProtoMsg): MsgAddPullRequestAssignees;
    toProto(message: MsgAddPullRequestAssignees): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestAssignees): MsgAddPullRequestAssigneesProtoMsg;
};
export declare const MsgAddPullRequestAssigneesResponse: {
    typeUrl: string;
    encode(_: MsgAddPullRequestAssigneesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddPullRequestAssigneesResponse;
    fromPartial(_: Partial<MsgAddPullRequestAssigneesResponse>): MsgAddPullRequestAssigneesResponse;
    fromAmino(_: MsgAddPullRequestAssigneesResponseAmino): MsgAddPullRequestAssigneesResponse;
    toAmino(_: MsgAddPullRequestAssigneesResponse): MsgAddPullRequestAssigneesResponseAmino;
    fromAminoMsg(object: MsgAddPullRequestAssigneesResponseAminoMsg): MsgAddPullRequestAssigneesResponse;
    fromProtoMsg(message: MsgAddPullRequestAssigneesResponseProtoMsg): MsgAddPullRequestAssigneesResponse;
    toProto(message: MsgAddPullRequestAssigneesResponse): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestAssigneesResponse): MsgAddPullRequestAssigneesResponseProtoMsg;
};
export declare const MsgRemovePullRequestAssignees: {
    typeUrl: string;
    encode(message: MsgRemovePullRequestAssignees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemovePullRequestAssignees;
    fromPartial(object: Partial<MsgRemovePullRequestAssignees>): MsgRemovePullRequestAssignees;
    fromAmino(object: MsgRemovePullRequestAssigneesAmino): MsgRemovePullRequestAssignees;
    toAmino(message: MsgRemovePullRequestAssignees): MsgRemovePullRequestAssigneesAmino;
    fromAminoMsg(object: MsgRemovePullRequestAssigneesAminoMsg): MsgRemovePullRequestAssignees;
    fromProtoMsg(message: MsgRemovePullRequestAssigneesProtoMsg): MsgRemovePullRequestAssignees;
    toProto(message: MsgRemovePullRequestAssignees): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestAssignees): MsgRemovePullRequestAssigneesProtoMsg;
};
export declare const MsgRemovePullRequestAssigneesResponse: {
    typeUrl: string;
    encode(_: MsgRemovePullRequestAssigneesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemovePullRequestAssigneesResponse;
    fromPartial(_: Partial<MsgRemovePullRequestAssigneesResponse>): MsgRemovePullRequestAssigneesResponse;
    fromAmino(_: MsgRemovePullRequestAssigneesResponseAmino): MsgRemovePullRequestAssigneesResponse;
    toAmino(_: MsgRemovePullRequestAssigneesResponse): MsgRemovePullRequestAssigneesResponseAmino;
    fromAminoMsg(object: MsgRemovePullRequestAssigneesResponseAminoMsg): MsgRemovePullRequestAssigneesResponse;
    fromProtoMsg(message: MsgRemovePullRequestAssigneesResponseProtoMsg): MsgRemovePullRequestAssigneesResponse;
    toProto(message: MsgRemovePullRequestAssigneesResponse): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestAssigneesResponse): MsgRemovePullRequestAssigneesResponseProtoMsg;
};
export declare const MsgLinkPullRequestIssueByIid: {
    typeUrl: string;
    encode(message: MsgLinkPullRequestIssueByIid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgLinkPullRequestIssueByIid;
    fromPartial(object: Partial<MsgLinkPullRequestIssueByIid>): MsgLinkPullRequestIssueByIid;
    fromAmino(object: MsgLinkPullRequestIssueByIidAmino): MsgLinkPullRequestIssueByIid;
    toAmino(message: MsgLinkPullRequestIssueByIid): MsgLinkPullRequestIssueByIidAmino;
    fromAminoMsg(object: MsgLinkPullRequestIssueByIidAminoMsg): MsgLinkPullRequestIssueByIid;
    fromProtoMsg(message: MsgLinkPullRequestIssueByIidProtoMsg): MsgLinkPullRequestIssueByIid;
    toProto(message: MsgLinkPullRequestIssueByIid): Uint8Array;
    toProtoMsg(message: MsgLinkPullRequestIssueByIid): MsgLinkPullRequestIssueByIidProtoMsg;
};
export declare const MsgLinkPullRequestIssueByIidResponse: {
    typeUrl: string;
    encode(_: MsgLinkPullRequestIssueByIidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgLinkPullRequestIssueByIidResponse;
    fromPartial(_: Partial<MsgLinkPullRequestIssueByIidResponse>): MsgLinkPullRequestIssueByIidResponse;
    fromAmino(_: MsgLinkPullRequestIssueByIidResponseAmino): MsgLinkPullRequestIssueByIidResponse;
    toAmino(_: MsgLinkPullRequestIssueByIidResponse): MsgLinkPullRequestIssueByIidResponseAmino;
    fromAminoMsg(object: MsgLinkPullRequestIssueByIidResponseAminoMsg): MsgLinkPullRequestIssueByIidResponse;
    fromProtoMsg(message: MsgLinkPullRequestIssueByIidResponseProtoMsg): MsgLinkPullRequestIssueByIidResponse;
    toProto(message: MsgLinkPullRequestIssueByIidResponse): Uint8Array;
    toProtoMsg(message: MsgLinkPullRequestIssueByIidResponse): MsgLinkPullRequestIssueByIidResponseProtoMsg;
};
export declare const MsgUnlinkPullRequestIssueByIid: {
    typeUrl: string;
    encode(message: MsgUnlinkPullRequestIssueByIid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUnlinkPullRequestIssueByIid;
    fromPartial(object: Partial<MsgUnlinkPullRequestIssueByIid>): MsgUnlinkPullRequestIssueByIid;
    fromAmino(object: MsgUnlinkPullRequestIssueByIidAmino): MsgUnlinkPullRequestIssueByIid;
    toAmino(message: MsgUnlinkPullRequestIssueByIid): MsgUnlinkPullRequestIssueByIidAmino;
    fromAminoMsg(object: MsgUnlinkPullRequestIssueByIidAminoMsg): MsgUnlinkPullRequestIssueByIid;
    fromProtoMsg(message: MsgUnlinkPullRequestIssueByIidProtoMsg): MsgUnlinkPullRequestIssueByIid;
    toProto(message: MsgUnlinkPullRequestIssueByIid): Uint8Array;
    toProtoMsg(message: MsgUnlinkPullRequestIssueByIid): MsgUnlinkPullRequestIssueByIidProtoMsg;
};
export declare const MsgUnlinkPullRequestIssueByIidResponse: {
    typeUrl: string;
    encode(_: MsgUnlinkPullRequestIssueByIidResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUnlinkPullRequestIssueByIidResponse;
    fromPartial(_: Partial<MsgUnlinkPullRequestIssueByIidResponse>): MsgUnlinkPullRequestIssueByIidResponse;
    fromAmino(_: MsgUnlinkPullRequestIssueByIidResponseAmino): MsgUnlinkPullRequestIssueByIidResponse;
    toAmino(_: MsgUnlinkPullRequestIssueByIidResponse): MsgUnlinkPullRequestIssueByIidResponseAmino;
    fromAminoMsg(object: MsgUnlinkPullRequestIssueByIidResponseAminoMsg): MsgUnlinkPullRequestIssueByIidResponse;
    fromProtoMsg(message: MsgUnlinkPullRequestIssueByIidResponseProtoMsg): MsgUnlinkPullRequestIssueByIidResponse;
    toProto(message: MsgUnlinkPullRequestIssueByIidResponse): Uint8Array;
    toProtoMsg(message: MsgUnlinkPullRequestIssueByIidResponse): MsgUnlinkPullRequestIssueByIidResponseProtoMsg;
};
export declare const MsgAddPullRequestLabels: {
    typeUrl: string;
    encode(message: MsgAddPullRequestLabels, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddPullRequestLabels;
    fromPartial(object: Partial<MsgAddPullRequestLabels>): MsgAddPullRequestLabels;
    fromAmino(object: MsgAddPullRequestLabelsAmino): MsgAddPullRequestLabels;
    toAmino(message: MsgAddPullRequestLabels): MsgAddPullRequestLabelsAmino;
    fromAminoMsg(object: MsgAddPullRequestLabelsAminoMsg): MsgAddPullRequestLabels;
    fromProtoMsg(message: MsgAddPullRequestLabelsProtoMsg): MsgAddPullRequestLabels;
    toProto(message: MsgAddPullRequestLabels): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestLabels): MsgAddPullRequestLabelsProtoMsg;
};
export declare const MsgAddPullRequestLabelsResponse: {
    typeUrl: string;
    encode(_: MsgAddPullRequestLabelsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddPullRequestLabelsResponse;
    fromPartial(_: Partial<MsgAddPullRequestLabelsResponse>): MsgAddPullRequestLabelsResponse;
    fromAmino(_: MsgAddPullRequestLabelsResponseAmino): MsgAddPullRequestLabelsResponse;
    toAmino(_: MsgAddPullRequestLabelsResponse): MsgAddPullRequestLabelsResponseAmino;
    fromAminoMsg(object: MsgAddPullRequestLabelsResponseAminoMsg): MsgAddPullRequestLabelsResponse;
    fromProtoMsg(message: MsgAddPullRequestLabelsResponseProtoMsg): MsgAddPullRequestLabelsResponse;
    toProto(message: MsgAddPullRequestLabelsResponse): Uint8Array;
    toProtoMsg(message: MsgAddPullRequestLabelsResponse): MsgAddPullRequestLabelsResponseProtoMsg;
};
export declare const MsgRemovePullRequestLabels: {
    typeUrl: string;
    encode(message: MsgRemovePullRequestLabels, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemovePullRequestLabels;
    fromPartial(object: Partial<MsgRemovePullRequestLabels>): MsgRemovePullRequestLabels;
    fromAmino(object: MsgRemovePullRequestLabelsAmino): MsgRemovePullRequestLabels;
    toAmino(message: MsgRemovePullRequestLabels): MsgRemovePullRequestLabelsAmino;
    fromAminoMsg(object: MsgRemovePullRequestLabelsAminoMsg): MsgRemovePullRequestLabels;
    fromProtoMsg(message: MsgRemovePullRequestLabelsProtoMsg): MsgRemovePullRequestLabels;
    toProto(message: MsgRemovePullRequestLabels): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestLabels): MsgRemovePullRequestLabelsProtoMsg;
};
export declare const MsgRemovePullRequestLabelsResponse: {
    typeUrl: string;
    encode(_: MsgRemovePullRequestLabelsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemovePullRequestLabelsResponse;
    fromPartial(_: Partial<MsgRemovePullRequestLabelsResponse>): MsgRemovePullRequestLabelsResponse;
    fromAmino(_: MsgRemovePullRequestLabelsResponseAmino): MsgRemovePullRequestLabelsResponse;
    toAmino(_: MsgRemovePullRequestLabelsResponse): MsgRemovePullRequestLabelsResponseAmino;
    fromAminoMsg(object: MsgRemovePullRequestLabelsResponseAminoMsg): MsgRemovePullRequestLabelsResponse;
    fromProtoMsg(message: MsgRemovePullRequestLabelsResponseProtoMsg): MsgRemovePullRequestLabelsResponse;
    toProto(message: MsgRemovePullRequestLabelsResponse): Uint8Array;
    toProtoMsg(message: MsgRemovePullRequestLabelsResponse): MsgRemovePullRequestLabelsResponseProtoMsg;
};
export declare const MsgDeletePullRequest: {
    typeUrl: string;
    encode(message: MsgDeletePullRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeletePullRequest;
    fromPartial(object: Partial<MsgDeletePullRequest>): MsgDeletePullRequest;
    fromAmino(object: MsgDeletePullRequestAmino): MsgDeletePullRequest;
    toAmino(message: MsgDeletePullRequest): MsgDeletePullRequestAmino;
    fromAminoMsg(object: MsgDeletePullRequestAminoMsg): MsgDeletePullRequest;
    fromProtoMsg(message: MsgDeletePullRequestProtoMsg): MsgDeletePullRequest;
    toProto(message: MsgDeletePullRequest): Uint8Array;
    toProtoMsg(message: MsgDeletePullRequest): MsgDeletePullRequestProtoMsg;
};
export declare const MsgDeletePullRequestResponse: {
    typeUrl: string;
    encode(_: MsgDeletePullRequestResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeletePullRequestResponse;
    fromPartial(_: Partial<MsgDeletePullRequestResponse>): MsgDeletePullRequestResponse;
    fromAmino(_: MsgDeletePullRequestResponseAmino): MsgDeletePullRequestResponse;
    toAmino(_: MsgDeletePullRequestResponse): MsgDeletePullRequestResponseAmino;
    fromAminoMsg(object: MsgDeletePullRequestResponseAminoMsg): MsgDeletePullRequestResponse;
    fromProtoMsg(message: MsgDeletePullRequestResponseProtoMsg): MsgDeletePullRequestResponse;
    toProto(message: MsgDeletePullRequestResponse): Uint8Array;
    toProtoMsg(message: MsgDeletePullRequestResponse): MsgDeletePullRequestResponseProtoMsg;
};
export declare const MsgCreateDao: {
    typeUrl: string;
    encode(message: MsgCreateDao, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDao;
    fromPartial(object: Partial<MsgCreateDao>): MsgCreateDao;
    fromAmino(object: MsgCreateDaoAmino): MsgCreateDao;
    toAmino(message: MsgCreateDao): MsgCreateDaoAmino;
    fromAminoMsg(object: MsgCreateDaoAminoMsg): MsgCreateDao;
    fromProtoMsg(message: MsgCreateDaoProtoMsg): MsgCreateDao;
    toProto(message: MsgCreateDao): Uint8Array;
    toProtoMsg(message: MsgCreateDao): MsgCreateDaoProtoMsg;
};
export declare const MsgCreateDaoResponse: {
    typeUrl: string;
    encode(message: MsgCreateDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDaoResponse;
    fromPartial(object: Partial<MsgCreateDaoResponse>): MsgCreateDaoResponse;
    fromAmino(object: MsgCreateDaoResponseAmino): MsgCreateDaoResponse;
    toAmino(message: MsgCreateDaoResponse): MsgCreateDaoResponseAmino;
    fromAminoMsg(object: MsgCreateDaoResponseAminoMsg): MsgCreateDaoResponse;
    fromProtoMsg(message: MsgCreateDaoResponseProtoMsg): MsgCreateDaoResponse;
    toProto(message: MsgCreateDaoResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDaoResponse): MsgCreateDaoResponseProtoMsg;
};
export declare const MsgRenameDao: {
    typeUrl: string;
    encode(message: MsgRenameDao, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRenameDao;
    fromPartial(object: Partial<MsgRenameDao>): MsgRenameDao;
    fromAmino(object: MsgRenameDaoAmino): MsgRenameDao;
    toAmino(message: MsgRenameDao): MsgRenameDaoAmino;
    fromAminoMsg(object: MsgRenameDaoAminoMsg): MsgRenameDao;
    fromProtoMsg(message: MsgRenameDaoProtoMsg): MsgRenameDao;
    toProto(message: MsgRenameDao): Uint8Array;
    toProtoMsg(message: MsgRenameDao): MsgRenameDaoProtoMsg;
};
export declare const MsgRenameDaoResponse: {
    typeUrl: string;
    encode(_: MsgRenameDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRenameDaoResponse;
    fromPartial(_: Partial<MsgRenameDaoResponse>): MsgRenameDaoResponse;
    fromAmino(_: MsgRenameDaoResponseAmino): MsgRenameDaoResponse;
    toAmino(_: MsgRenameDaoResponse): MsgRenameDaoResponseAmino;
    fromAminoMsg(object: MsgRenameDaoResponseAminoMsg): MsgRenameDaoResponse;
    fromProtoMsg(message: MsgRenameDaoResponseProtoMsg): MsgRenameDaoResponse;
    toProto(message: MsgRenameDaoResponse): Uint8Array;
    toProtoMsg(message: MsgRenameDaoResponse): MsgRenameDaoResponseProtoMsg;
};
export declare const MsgUpdateDaoDescription: {
    typeUrl: string;
    encode(message: MsgUpdateDaoDescription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDaoDescription;
    fromPartial(object: Partial<MsgUpdateDaoDescription>): MsgUpdateDaoDescription;
    fromAmino(object: MsgUpdateDaoDescriptionAmino): MsgUpdateDaoDescription;
    toAmino(message: MsgUpdateDaoDescription): MsgUpdateDaoDescriptionAmino;
    fromAminoMsg(object: MsgUpdateDaoDescriptionAminoMsg): MsgUpdateDaoDescription;
    fromProtoMsg(message: MsgUpdateDaoDescriptionProtoMsg): MsgUpdateDaoDescription;
    toProto(message: MsgUpdateDaoDescription): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoDescription): MsgUpdateDaoDescriptionProtoMsg;
};
export declare const MsgUpdateDaoDescriptionResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDaoDescriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDaoDescriptionResponse;
    fromPartial(_: Partial<MsgUpdateDaoDescriptionResponse>): MsgUpdateDaoDescriptionResponse;
    fromAmino(_: MsgUpdateDaoDescriptionResponseAmino): MsgUpdateDaoDescriptionResponse;
    toAmino(_: MsgUpdateDaoDescriptionResponse): MsgUpdateDaoDescriptionResponseAmino;
    fromAminoMsg(object: MsgUpdateDaoDescriptionResponseAminoMsg): MsgUpdateDaoDescriptionResponse;
    fromProtoMsg(message: MsgUpdateDaoDescriptionResponseProtoMsg): MsgUpdateDaoDescriptionResponse;
    toProto(message: MsgUpdateDaoDescriptionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoDescriptionResponse): MsgUpdateDaoDescriptionResponseProtoMsg;
};
export declare const MsgUpdateDaoWebsite: {
    typeUrl: string;
    encode(message: MsgUpdateDaoWebsite, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDaoWebsite;
    fromPartial(object: Partial<MsgUpdateDaoWebsite>): MsgUpdateDaoWebsite;
    fromAmino(object: MsgUpdateDaoWebsiteAmino): MsgUpdateDaoWebsite;
    toAmino(message: MsgUpdateDaoWebsite): MsgUpdateDaoWebsiteAmino;
    fromAminoMsg(object: MsgUpdateDaoWebsiteAminoMsg): MsgUpdateDaoWebsite;
    fromProtoMsg(message: MsgUpdateDaoWebsiteProtoMsg): MsgUpdateDaoWebsite;
    toProto(message: MsgUpdateDaoWebsite): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoWebsite): MsgUpdateDaoWebsiteProtoMsg;
};
export declare const MsgUpdateDaoWebsiteResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDaoWebsiteResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDaoWebsiteResponse;
    fromPartial(_: Partial<MsgUpdateDaoWebsiteResponse>): MsgUpdateDaoWebsiteResponse;
    fromAmino(_: MsgUpdateDaoWebsiteResponseAmino): MsgUpdateDaoWebsiteResponse;
    toAmino(_: MsgUpdateDaoWebsiteResponse): MsgUpdateDaoWebsiteResponseAmino;
    fromAminoMsg(object: MsgUpdateDaoWebsiteResponseAminoMsg): MsgUpdateDaoWebsiteResponse;
    fromProtoMsg(message: MsgUpdateDaoWebsiteResponseProtoMsg): MsgUpdateDaoWebsiteResponse;
    toProto(message: MsgUpdateDaoWebsiteResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoWebsiteResponse): MsgUpdateDaoWebsiteResponseProtoMsg;
};
export declare const MsgUpdateDaoLocation: {
    typeUrl: string;
    encode(message: MsgUpdateDaoLocation, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDaoLocation;
    fromPartial(object: Partial<MsgUpdateDaoLocation>): MsgUpdateDaoLocation;
    fromAmino(object: MsgUpdateDaoLocationAmino): MsgUpdateDaoLocation;
    toAmino(message: MsgUpdateDaoLocation): MsgUpdateDaoLocationAmino;
    fromAminoMsg(object: MsgUpdateDaoLocationAminoMsg): MsgUpdateDaoLocation;
    fromProtoMsg(message: MsgUpdateDaoLocationProtoMsg): MsgUpdateDaoLocation;
    toProto(message: MsgUpdateDaoLocation): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoLocation): MsgUpdateDaoLocationProtoMsg;
};
export declare const MsgUpdateDaoLocationResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDaoLocationResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDaoLocationResponse;
    fromPartial(_: Partial<MsgUpdateDaoLocationResponse>): MsgUpdateDaoLocationResponse;
    fromAmino(_: MsgUpdateDaoLocationResponseAmino): MsgUpdateDaoLocationResponse;
    toAmino(_: MsgUpdateDaoLocationResponse): MsgUpdateDaoLocationResponseAmino;
    fromAminoMsg(object: MsgUpdateDaoLocationResponseAminoMsg): MsgUpdateDaoLocationResponse;
    fromProtoMsg(message: MsgUpdateDaoLocationResponseProtoMsg): MsgUpdateDaoLocationResponse;
    toProto(message: MsgUpdateDaoLocationResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoLocationResponse): MsgUpdateDaoLocationResponseProtoMsg;
};
export declare const MsgUpdateDaoAvatar: {
    typeUrl: string;
    encode(message: MsgUpdateDaoAvatar, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDaoAvatar;
    fromPartial(object: Partial<MsgUpdateDaoAvatar>): MsgUpdateDaoAvatar;
    fromAmino(object: MsgUpdateDaoAvatarAmino): MsgUpdateDaoAvatar;
    toAmino(message: MsgUpdateDaoAvatar): MsgUpdateDaoAvatarAmino;
    fromAminoMsg(object: MsgUpdateDaoAvatarAminoMsg): MsgUpdateDaoAvatar;
    fromProtoMsg(message: MsgUpdateDaoAvatarProtoMsg): MsgUpdateDaoAvatar;
    toProto(message: MsgUpdateDaoAvatar): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoAvatar): MsgUpdateDaoAvatarProtoMsg;
};
export declare const MsgUpdateDaoAvatarResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDaoAvatarResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDaoAvatarResponse;
    fromPartial(_: Partial<MsgUpdateDaoAvatarResponse>): MsgUpdateDaoAvatarResponse;
    fromAmino(_: MsgUpdateDaoAvatarResponseAmino): MsgUpdateDaoAvatarResponse;
    toAmino(_: MsgUpdateDaoAvatarResponse): MsgUpdateDaoAvatarResponseAmino;
    fromAminoMsg(object: MsgUpdateDaoAvatarResponseAminoMsg): MsgUpdateDaoAvatarResponse;
    fromProtoMsg(message: MsgUpdateDaoAvatarResponseProtoMsg): MsgUpdateDaoAvatarResponse;
    toProto(message: MsgUpdateDaoAvatarResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoAvatarResponse): MsgUpdateDaoAvatarResponseProtoMsg;
};
export declare const MsgDeleteDao: {
    typeUrl: string;
    encode(message: MsgDeleteDao, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteDao;
    fromPartial(object: Partial<MsgDeleteDao>): MsgDeleteDao;
    fromAmino(object: MsgDeleteDaoAmino): MsgDeleteDao;
    toAmino(message: MsgDeleteDao): MsgDeleteDaoAmino;
    fromAminoMsg(object: MsgDeleteDaoAminoMsg): MsgDeleteDao;
    fromProtoMsg(message: MsgDeleteDaoProtoMsg): MsgDeleteDao;
    toProto(message: MsgDeleteDao): Uint8Array;
    toProtoMsg(message: MsgDeleteDao): MsgDeleteDaoProtoMsg;
};
export declare const MsgDeleteDaoResponse: {
    typeUrl: string;
    encode(_: MsgDeleteDaoResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteDaoResponse;
    fromPartial(_: Partial<MsgDeleteDaoResponse>): MsgDeleteDaoResponse;
    fromAmino(_: MsgDeleteDaoResponseAmino): MsgDeleteDaoResponse;
    toAmino(_: MsgDeleteDaoResponse): MsgDeleteDaoResponseAmino;
    fromAminoMsg(object: MsgDeleteDaoResponseAminoMsg): MsgDeleteDaoResponse;
    fromProtoMsg(message: MsgDeleteDaoResponseProtoMsg): MsgDeleteDaoResponse;
    toProto(message: MsgDeleteDaoResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteDaoResponse): MsgDeleteDaoResponseProtoMsg;
};
export declare const MsgCreateComment: {
    typeUrl: string;
    encode(message: MsgCreateComment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateComment;
    fromPartial(object: Partial<MsgCreateComment>): MsgCreateComment;
    fromAmino(object: MsgCreateCommentAmino): MsgCreateComment;
    toAmino(message: MsgCreateComment): MsgCreateCommentAmino;
    fromAminoMsg(object: MsgCreateCommentAminoMsg): MsgCreateComment;
    fromProtoMsg(message: MsgCreateCommentProtoMsg): MsgCreateComment;
    toProto(message: MsgCreateComment): Uint8Array;
    toProtoMsg(message: MsgCreateComment): MsgCreateCommentProtoMsg;
};
export declare const MsgCreateCommentResponse: {
    typeUrl: string;
    encode(message: MsgCreateCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateCommentResponse;
    fromPartial(object: Partial<MsgCreateCommentResponse>): MsgCreateCommentResponse;
    fromAmino(object: MsgCreateCommentResponseAmino): MsgCreateCommentResponse;
    toAmino(message: MsgCreateCommentResponse): MsgCreateCommentResponseAmino;
    fromAminoMsg(object: MsgCreateCommentResponseAminoMsg): MsgCreateCommentResponse;
    fromProtoMsg(message: MsgCreateCommentResponseProtoMsg): MsgCreateCommentResponse;
    toProto(message: MsgCreateCommentResponse): Uint8Array;
    toProtoMsg(message: MsgCreateCommentResponse): MsgCreateCommentResponseProtoMsg;
};
export declare const MsgUpdateComment: {
    typeUrl: string;
    encode(message: MsgUpdateComment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateComment;
    fromPartial(object: Partial<MsgUpdateComment>): MsgUpdateComment;
    fromAmino(object: MsgUpdateCommentAmino): MsgUpdateComment;
    toAmino(message: MsgUpdateComment): MsgUpdateCommentAmino;
    fromAminoMsg(object: MsgUpdateCommentAminoMsg): MsgUpdateComment;
    fromProtoMsg(message: MsgUpdateCommentProtoMsg): MsgUpdateComment;
    toProto(message: MsgUpdateComment): Uint8Array;
    toProtoMsg(message: MsgUpdateComment): MsgUpdateCommentProtoMsg;
};
export declare const MsgUpdateCommentResponse: {
    typeUrl: string;
    encode(_: MsgUpdateCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateCommentResponse;
    fromPartial(_: Partial<MsgUpdateCommentResponse>): MsgUpdateCommentResponse;
    fromAmino(_: MsgUpdateCommentResponseAmino): MsgUpdateCommentResponse;
    toAmino(_: MsgUpdateCommentResponse): MsgUpdateCommentResponseAmino;
    fromAminoMsg(object: MsgUpdateCommentResponseAminoMsg): MsgUpdateCommentResponse;
    fromProtoMsg(message: MsgUpdateCommentResponseProtoMsg): MsgUpdateCommentResponse;
    toProto(message: MsgUpdateCommentResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateCommentResponse): MsgUpdateCommentResponseProtoMsg;
};
export declare const MsgDeleteComment: {
    typeUrl: string;
    encode(message: MsgDeleteComment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteComment;
    fromPartial(object: Partial<MsgDeleteComment>): MsgDeleteComment;
    fromAmino(object: MsgDeleteCommentAmino): MsgDeleteComment;
    toAmino(message: MsgDeleteComment): MsgDeleteCommentAmino;
    fromAminoMsg(object: MsgDeleteCommentAminoMsg): MsgDeleteComment;
    fromProtoMsg(message: MsgDeleteCommentProtoMsg): MsgDeleteComment;
    toProto(message: MsgDeleteComment): Uint8Array;
    toProtoMsg(message: MsgDeleteComment): MsgDeleteCommentProtoMsg;
};
export declare const MsgDeleteCommentResponse: {
    typeUrl: string;
    encode(_: MsgDeleteCommentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteCommentResponse;
    fromPartial(_: Partial<MsgDeleteCommentResponse>): MsgDeleteCommentResponse;
    fromAmino(_: MsgDeleteCommentResponseAmino): MsgDeleteCommentResponse;
    toAmino(_: MsgDeleteCommentResponse): MsgDeleteCommentResponseAmino;
    fromAminoMsg(object: MsgDeleteCommentResponseAminoMsg): MsgDeleteCommentResponse;
    fromProtoMsg(message: MsgDeleteCommentResponseProtoMsg): MsgDeleteCommentResponse;
    toProto(message: MsgDeleteCommentResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteCommentResponse): MsgDeleteCommentResponseProtoMsg;
};
export declare const MsgToggleCommentResolved: {
    typeUrl: string;
    encode(message: MsgToggleCommentResolved, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleCommentResolved;
    fromPartial(object: Partial<MsgToggleCommentResolved>): MsgToggleCommentResolved;
    fromAmino(object: MsgToggleCommentResolvedAmino): MsgToggleCommentResolved;
    toAmino(message: MsgToggleCommentResolved): MsgToggleCommentResolvedAmino;
    fromAminoMsg(object: MsgToggleCommentResolvedAminoMsg): MsgToggleCommentResolved;
    fromProtoMsg(message: MsgToggleCommentResolvedProtoMsg): MsgToggleCommentResolved;
    toProto(message: MsgToggleCommentResolved): Uint8Array;
    toProtoMsg(message: MsgToggleCommentResolved): MsgToggleCommentResolvedProtoMsg;
};
export declare const MsgToggleCommentResolvedResponse: {
    typeUrl: string;
    encode(message: MsgToggleCommentResolvedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleCommentResolvedResponse;
    fromPartial(object: Partial<MsgToggleCommentResolvedResponse>): MsgToggleCommentResolvedResponse;
    fromAmino(object: MsgToggleCommentResolvedResponseAmino): MsgToggleCommentResolvedResponse;
    toAmino(message: MsgToggleCommentResolvedResponse): MsgToggleCommentResolvedResponseAmino;
    fromAminoMsg(object: MsgToggleCommentResolvedResponseAminoMsg): MsgToggleCommentResolvedResponse;
    fromProtoMsg(message: MsgToggleCommentResolvedResponseProtoMsg): MsgToggleCommentResolvedResponse;
    toProto(message: MsgToggleCommentResolvedResponse): Uint8Array;
    toProtoMsg(message: MsgToggleCommentResolvedResponse): MsgToggleCommentResolvedResponseProtoMsg;
};
export declare const MsgCreateIssue: {
    typeUrl: string;
    encode(message: MsgCreateIssue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateIssue;
    fromPartial(object: Partial<MsgCreateIssue>): MsgCreateIssue;
    fromAmino(object: MsgCreateIssueAmino): MsgCreateIssue;
    toAmino(message: MsgCreateIssue): MsgCreateIssueAmino;
    fromAminoMsg(object: MsgCreateIssueAminoMsg): MsgCreateIssue;
    fromProtoMsg(message: MsgCreateIssueProtoMsg): MsgCreateIssue;
    toProto(message: MsgCreateIssue): Uint8Array;
    toProtoMsg(message: MsgCreateIssue): MsgCreateIssueProtoMsg;
};
export declare const MsgCreateIssueResponse: {
    typeUrl: string;
    encode(message: MsgCreateIssueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateIssueResponse;
    fromPartial(object: Partial<MsgCreateIssueResponse>): MsgCreateIssueResponse;
    fromAmino(object: MsgCreateIssueResponseAmino): MsgCreateIssueResponse;
    toAmino(message: MsgCreateIssueResponse): MsgCreateIssueResponseAmino;
    fromAminoMsg(object: MsgCreateIssueResponseAminoMsg): MsgCreateIssueResponse;
    fromProtoMsg(message: MsgCreateIssueResponseProtoMsg): MsgCreateIssueResponse;
    toProto(message: MsgCreateIssueResponse): Uint8Array;
    toProtoMsg(message: MsgCreateIssueResponse): MsgCreateIssueResponseProtoMsg;
};
export declare const MsgUpdateIssueTitle: {
    typeUrl: string;
    encode(message: MsgUpdateIssueTitle, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateIssueTitle;
    fromPartial(object: Partial<MsgUpdateIssueTitle>): MsgUpdateIssueTitle;
    fromAmino(object: MsgUpdateIssueTitleAmino): MsgUpdateIssueTitle;
    toAmino(message: MsgUpdateIssueTitle): MsgUpdateIssueTitleAmino;
    fromAminoMsg(object: MsgUpdateIssueTitleAminoMsg): MsgUpdateIssueTitle;
    fromProtoMsg(message: MsgUpdateIssueTitleProtoMsg): MsgUpdateIssueTitle;
    toProto(message: MsgUpdateIssueTitle): Uint8Array;
    toProtoMsg(message: MsgUpdateIssueTitle): MsgUpdateIssueTitleProtoMsg;
};
export declare const MsgUpdateIssueTitleResponse: {
    typeUrl: string;
    encode(_: MsgUpdateIssueTitleResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateIssueTitleResponse;
    fromPartial(_: Partial<MsgUpdateIssueTitleResponse>): MsgUpdateIssueTitleResponse;
    fromAmino(_: MsgUpdateIssueTitleResponseAmino): MsgUpdateIssueTitleResponse;
    toAmino(_: MsgUpdateIssueTitleResponse): MsgUpdateIssueTitleResponseAmino;
    fromAminoMsg(object: MsgUpdateIssueTitleResponseAminoMsg): MsgUpdateIssueTitleResponse;
    fromProtoMsg(message: MsgUpdateIssueTitleResponseProtoMsg): MsgUpdateIssueTitleResponse;
    toProto(message: MsgUpdateIssueTitleResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateIssueTitleResponse): MsgUpdateIssueTitleResponseProtoMsg;
};
export declare const MsgUpdateIssueDescription: {
    typeUrl: string;
    encode(message: MsgUpdateIssueDescription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateIssueDescription;
    fromPartial(object: Partial<MsgUpdateIssueDescription>): MsgUpdateIssueDescription;
    fromAmino(object: MsgUpdateIssueDescriptionAmino): MsgUpdateIssueDescription;
    toAmino(message: MsgUpdateIssueDescription): MsgUpdateIssueDescriptionAmino;
    fromAminoMsg(object: MsgUpdateIssueDescriptionAminoMsg): MsgUpdateIssueDescription;
    fromProtoMsg(message: MsgUpdateIssueDescriptionProtoMsg): MsgUpdateIssueDescription;
    toProto(message: MsgUpdateIssueDescription): Uint8Array;
    toProtoMsg(message: MsgUpdateIssueDescription): MsgUpdateIssueDescriptionProtoMsg;
};
export declare const MsgUpdateIssueDescriptionResponse: {
    typeUrl: string;
    encode(_: MsgUpdateIssueDescriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateIssueDescriptionResponse;
    fromPartial(_: Partial<MsgUpdateIssueDescriptionResponse>): MsgUpdateIssueDescriptionResponse;
    fromAmino(_: MsgUpdateIssueDescriptionResponseAmino): MsgUpdateIssueDescriptionResponse;
    toAmino(_: MsgUpdateIssueDescriptionResponse): MsgUpdateIssueDescriptionResponseAmino;
    fromAminoMsg(object: MsgUpdateIssueDescriptionResponseAminoMsg): MsgUpdateIssueDescriptionResponse;
    fromProtoMsg(message: MsgUpdateIssueDescriptionResponseProtoMsg): MsgUpdateIssueDescriptionResponse;
    toProto(message: MsgUpdateIssueDescriptionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateIssueDescriptionResponse): MsgUpdateIssueDescriptionResponseProtoMsg;
};
export declare const MsgToggleIssueState: {
    typeUrl: string;
    encode(message: MsgToggleIssueState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleIssueState;
    fromPartial(object: Partial<MsgToggleIssueState>): MsgToggleIssueState;
    fromAmino(object: MsgToggleIssueStateAmino): MsgToggleIssueState;
    toAmino(message: MsgToggleIssueState): MsgToggleIssueStateAmino;
    fromAminoMsg(object: MsgToggleIssueStateAminoMsg): MsgToggleIssueState;
    fromProtoMsg(message: MsgToggleIssueStateProtoMsg): MsgToggleIssueState;
    toProto(message: MsgToggleIssueState): Uint8Array;
    toProtoMsg(message: MsgToggleIssueState): MsgToggleIssueStateProtoMsg;
};
export declare const MsgToggleIssueStateResponse: {
    typeUrl: string;
    encode(message: MsgToggleIssueStateResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleIssueStateResponse;
    fromPartial(object: Partial<MsgToggleIssueStateResponse>): MsgToggleIssueStateResponse;
    fromAmino(object: MsgToggleIssueStateResponseAmino): MsgToggleIssueStateResponse;
    toAmino(message: MsgToggleIssueStateResponse): MsgToggleIssueStateResponseAmino;
    fromAminoMsg(object: MsgToggleIssueStateResponseAminoMsg): MsgToggleIssueStateResponse;
    fromProtoMsg(message: MsgToggleIssueStateResponseProtoMsg): MsgToggleIssueStateResponse;
    toProto(message: MsgToggleIssueStateResponse): Uint8Array;
    toProtoMsg(message: MsgToggleIssueStateResponse): MsgToggleIssueStateResponseProtoMsg;
};
export declare const MsgAddIssueAssignees: {
    typeUrl: string;
    encode(message: MsgAddIssueAssignees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddIssueAssignees;
    fromPartial(object: Partial<MsgAddIssueAssignees>): MsgAddIssueAssignees;
    fromAmino(object: MsgAddIssueAssigneesAmino): MsgAddIssueAssignees;
    toAmino(message: MsgAddIssueAssignees): MsgAddIssueAssigneesAmino;
    fromAminoMsg(object: MsgAddIssueAssigneesAminoMsg): MsgAddIssueAssignees;
    fromProtoMsg(message: MsgAddIssueAssigneesProtoMsg): MsgAddIssueAssignees;
    toProto(message: MsgAddIssueAssignees): Uint8Array;
    toProtoMsg(message: MsgAddIssueAssignees): MsgAddIssueAssigneesProtoMsg;
};
export declare const MsgAddIssueAssigneesResponse: {
    typeUrl: string;
    encode(_: MsgAddIssueAssigneesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddIssueAssigneesResponse;
    fromPartial(_: Partial<MsgAddIssueAssigneesResponse>): MsgAddIssueAssigneesResponse;
    fromAmino(_: MsgAddIssueAssigneesResponseAmino): MsgAddIssueAssigneesResponse;
    toAmino(_: MsgAddIssueAssigneesResponse): MsgAddIssueAssigneesResponseAmino;
    fromAminoMsg(object: MsgAddIssueAssigneesResponseAminoMsg): MsgAddIssueAssigneesResponse;
    fromProtoMsg(message: MsgAddIssueAssigneesResponseProtoMsg): MsgAddIssueAssigneesResponse;
    toProto(message: MsgAddIssueAssigneesResponse): Uint8Array;
    toProtoMsg(message: MsgAddIssueAssigneesResponse): MsgAddIssueAssigneesResponseProtoMsg;
};
export declare const MsgRemoveIssueAssignees: {
    typeUrl: string;
    encode(message: MsgRemoveIssueAssignees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveIssueAssignees;
    fromPartial(object: Partial<MsgRemoveIssueAssignees>): MsgRemoveIssueAssignees;
    fromAmino(object: MsgRemoveIssueAssigneesAmino): MsgRemoveIssueAssignees;
    toAmino(message: MsgRemoveIssueAssignees): MsgRemoveIssueAssigneesAmino;
    fromAminoMsg(object: MsgRemoveIssueAssigneesAminoMsg): MsgRemoveIssueAssignees;
    fromProtoMsg(message: MsgRemoveIssueAssigneesProtoMsg): MsgRemoveIssueAssignees;
    toProto(message: MsgRemoveIssueAssignees): Uint8Array;
    toProtoMsg(message: MsgRemoveIssueAssignees): MsgRemoveIssueAssigneesProtoMsg;
};
export declare const MsgRemoveIssueAssigneesResponse: {
    typeUrl: string;
    encode(_: MsgRemoveIssueAssigneesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveIssueAssigneesResponse;
    fromPartial(_: Partial<MsgRemoveIssueAssigneesResponse>): MsgRemoveIssueAssigneesResponse;
    fromAmino(_: MsgRemoveIssueAssigneesResponseAmino): MsgRemoveIssueAssigneesResponse;
    toAmino(_: MsgRemoveIssueAssigneesResponse): MsgRemoveIssueAssigneesResponseAmino;
    fromAminoMsg(object: MsgRemoveIssueAssigneesResponseAminoMsg): MsgRemoveIssueAssigneesResponse;
    fromProtoMsg(message: MsgRemoveIssueAssigneesResponseProtoMsg): MsgRemoveIssueAssigneesResponse;
    toProto(message: MsgRemoveIssueAssigneesResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveIssueAssigneesResponse): MsgRemoveIssueAssigneesResponseProtoMsg;
};
export declare const MsgAddIssueLabels: {
    typeUrl: string;
    encode(message: MsgAddIssueLabels, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgAddIssueLabels;
    fromPartial(object: Partial<MsgAddIssueLabels>): MsgAddIssueLabels;
    fromAmino(object: MsgAddIssueLabelsAmino): MsgAddIssueLabels;
    toAmino(message: MsgAddIssueLabels): MsgAddIssueLabelsAmino;
    fromAminoMsg(object: MsgAddIssueLabelsAminoMsg): MsgAddIssueLabels;
    fromProtoMsg(message: MsgAddIssueLabelsProtoMsg): MsgAddIssueLabels;
    toProto(message: MsgAddIssueLabels): Uint8Array;
    toProtoMsg(message: MsgAddIssueLabels): MsgAddIssueLabelsProtoMsg;
};
export declare const MsgAddIssueLabelsResponse: {
    typeUrl: string;
    encode(_: MsgAddIssueLabelsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgAddIssueLabelsResponse;
    fromPartial(_: Partial<MsgAddIssueLabelsResponse>): MsgAddIssueLabelsResponse;
    fromAmino(_: MsgAddIssueLabelsResponseAmino): MsgAddIssueLabelsResponse;
    toAmino(_: MsgAddIssueLabelsResponse): MsgAddIssueLabelsResponseAmino;
    fromAminoMsg(object: MsgAddIssueLabelsResponseAminoMsg): MsgAddIssueLabelsResponse;
    fromProtoMsg(message: MsgAddIssueLabelsResponseProtoMsg): MsgAddIssueLabelsResponse;
    toProto(message: MsgAddIssueLabelsResponse): Uint8Array;
    toProtoMsg(message: MsgAddIssueLabelsResponse): MsgAddIssueLabelsResponseProtoMsg;
};
export declare const MsgRemoveIssueLabels: {
    typeUrl: string;
    encode(message: MsgRemoveIssueLabels, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveIssueLabels;
    fromPartial(object: Partial<MsgRemoveIssueLabels>): MsgRemoveIssueLabels;
    fromAmino(object: MsgRemoveIssueLabelsAmino): MsgRemoveIssueLabels;
    toAmino(message: MsgRemoveIssueLabels): MsgRemoveIssueLabelsAmino;
    fromAminoMsg(object: MsgRemoveIssueLabelsAminoMsg): MsgRemoveIssueLabels;
    fromProtoMsg(message: MsgRemoveIssueLabelsProtoMsg): MsgRemoveIssueLabels;
    toProto(message: MsgRemoveIssueLabels): Uint8Array;
    toProtoMsg(message: MsgRemoveIssueLabels): MsgRemoveIssueLabelsProtoMsg;
};
export declare const MsgRemoveIssueLabelsResponse: {
    typeUrl: string;
    encode(_: MsgRemoveIssueLabelsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveIssueLabelsResponse;
    fromPartial(_: Partial<MsgRemoveIssueLabelsResponse>): MsgRemoveIssueLabelsResponse;
    fromAmino(_: MsgRemoveIssueLabelsResponseAmino): MsgRemoveIssueLabelsResponse;
    toAmino(_: MsgRemoveIssueLabelsResponse): MsgRemoveIssueLabelsResponseAmino;
    fromAminoMsg(object: MsgRemoveIssueLabelsResponseAminoMsg): MsgRemoveIssueLabelsResponse;
    fromProtoMsg(message: MsgRemoveIssueLabelsResponseProtoMsg): MsgRemoveIssueLabelsResponse;
    toProto(message: MsgRemoveIssueLabelsResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveIssueLabelsResponse): MsgRemoveIssueLabelsResponseProtoMsg;
};
export declare const MsgDeleteIssue: {
    typeUrl: string;
    encode(message: MsgDeleteIssue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteIssue;
    fromPartial(object: Partial<MsgDeleteIssue>): MsgDeleteIssue;
    fromAmino(object: MsgDeleteIssueAmino): MsgDeleteIssue;
    toAmino(message: MsgDeleteIssue): MsgDeleteIssueAmino;
    fromAminoMsg(object: MsgDeleteIssueAminoMsg): MsgDeleteIssue;
    fromProtoMsg(message: MsgDeleteIssueProtoMsg): MsgDeleteIssue;
    toProto(message: MsgDeleteIssue): Uint8Array;
    toProtoMsg(message: MsgDeleteIssue): MsgDeleteIssueProtoMsg;
};
export declare const MsgDeleteIssueResponse: {
    typeUrl: string;
    encode(_: MsgDeleteIssueResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteIssueResponse;
    fromPartial(_: Partial<MsgDeleteIssueResponse>): MsgDeleteIssueResponse;
    fromAmino(_: MsgDeleteIssueResponseAmino): MsgDeleteIssueResponse;
    toAmino(_: MsgDeleteIssueResponse): MsgDeleteIssueResponseAmino;
    fromAminoMsg(object: MsgDeleteIssueResponseAminoMsg): MsgDeleteIssueResponse;
    fromProtoMsg(message: MsgDeleteIssueResponseProtoMsg): MsgDeleteIssueResponse;
    toProto(message: MsgDeleteIssueResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteIssueResponse): MsgDeleteIssueResponseProtoMsg;
};
export declare const MsgCreateRepository: {
    typeUrl: string;
    encode(message: MsgCreateRepository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRepository;
    fromPartial(object: Partial<MsgCreateRepository>): MsgCreateRepository;
    fromAmino(object: MsgCreateRepositoryAmino): MsgCreateRepository;
    toAmino(message: MsgCreateRepository): MsgCreateRepositoryAmino;
    fromAminoMsg(object: MsgCreateRepositoryAminoMsg): MsgCreateRepository;
    fromProtoMsg(message: MsgCreateRepositoryProtoMsg): MsgCreateRepository;
    toProto(message: MsgCreateRepository): Uint8Array;
    toProtoMsg(message: MsgCreateRepository): MsgCreateRepositoryProtoMsg;
};
export declare const MsgCreateRepositoryResponse: {
    typeUrl: string;
    encode(message: MsgCreateRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRepositoryResponse;
    fromPartial(object: Partial<MsgCreateRepositoryResponse>): MsgCreateRepositoryResponse;
    fromAmino(object: MsgCreateRepositoryResponseAmino): MsgCreateRepositoryResponse;
    toAmino(message: MsgCreateRepositoryResponse): MsgCreateRepositoryResponseAmino;
    fromAminoMsg(object: MsgCreateRepositoryResponseAminoMsg): MsgCreateRepositoryResponse;
    fromProtoMsg(message: MsgCreateRepositoryResponseProtoMsg): MsgCreateRepositoryResponse;
    toProto(message: MsgCreateRepositoryResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRepositoryResponse): MsgCreateRepositoryResponseProtoMsg;
};
export declare const MsgInvokeForkRepository: {
    typeUrl: string;
    encode(message: MsgInvokeForkRepository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgInvokeForkRepository;
    fromPartial(object: Partial<MsgInvokeForkRepository>): MsgInvokeForkRepository;
    fromAmino(object: MsgInvokeForkRepositoryAmino): MsgInvokeForkRepository;
    toAmino(message: MsgInvokeForkRepository): MsgInvokeForkRepositoryAmino;
    fromAminoMsg(object: MsgInvokeForkRepositoryAminoMsg): MsgInvokeForkRepository;
    fromProtoMsg(message: MsgInvokeForkRepositoryProtoMsg): MsgInvokeForkRepository;
    toProto(message: MsgInvokeForkRepository): Uint8Array;
    toProtoMsg(message: MsgInvokeForkRepository): MsgInvokeForkRepositoryProtoMsg;
};
export declare const MsgInvokeForkRepositoryResponse: {
    typeUrl: string;
    encode(_: MsgInvokeForkRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgInvokeForkRepositoryResponse;
    fromPartial(_: Partial<MsgInvokeForkRepositoryResponse>): MsgInvokeForkRepositoryResponse;
    fromAmino(_: MsgInvokeForkRepositoryResponseAmino): MsgInvokeForkRepositoryResponse;
    toAmino(_: MsgInvokeForkRepositoryResponse): MsgInvokeForkRepositoryResponseAmino;
    fromAminoMsg(object: MsgInvokeForkRepositoryResponseAminoMsg): MsgInvokeForkRepositoryResponse;
    fromProtoMsg(message: MsgInvokeForkRepositoryResponseProtoMsg): MsgInvokeForkRepositoryResponse;
    toProto(message: MsgInvokeForkRepositoryResponse): Uint8Array;
    toProtoMsg(message: MsgInvokeForkRepositoryResponse): MsgInvokeForkRepositoryResponseProtoMsg;
};
export declare const MsgForkRepository: {
    typeUrl: string;
    encode(message: MsgForkRepository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForkRepository;
    fromPartial(object: Partial<MsgForkRepository>): MsgForkRepository;
    fromAmino(object: MsgForkRepositoryAmino): MsgForkRepository;
    toAmino(message: MsgForkRepository): MsgForkRepositoryAmino;
    fromAminoMsg(object: MsgForkRepositoryAminoMsg): MsgForkRepository;
    fromProtoMsg(message: MsgForkRepositoryProtoMsg): MsgForkRepository;
    toProto(message: MsgForkRepository): Uint8Array;
    toProtoMsg(message: MsgForkRepository): MsgForkRepositoryProtoMsg;
};
export declare const MsgForkRepositoryResponse: {
    typeUrl: string;
    encode(message: MsgForkRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForkRepositoryResponse;
    fromPartial(object: Partial<MsgForkRepositoryResponse>): MsgForkRepositoryResponse;
    fromAmino(object: MsgForkRepositoryResponseAmino): MsgForkRepositoryResponse;
    toAmino(message: MsgForkRepositoryResponse): MsgForkRepositoryResponseAmino;
    fromAminoMsg(object: MsgForkRepositoryResponseAminoMsg): MsgForkRepositoryResponse;
    fromProtoMsg(message: MsgForkRepositoryResponseProtoMsg): MsgForkRepositoryResponse;
    toProto(message: MsgForkRepositoryResponse): Uint8Array;
    toProtoMsg(message: MsgForkRepositoryResponse): MsgForkRepositoryResponseProtoMsg;
};
export declare const MsgForkRepositorySuccess: {
    typeUrl: string;
    encode(message: MsgForkRepositorySuccess, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForkRepositorySuccess;
    fromPartial(object: Partial<MsgForkRepositorySuccess>): MsgForkRepositorySuccess;
    fromAmino(object: MsgForkRepositorySuccessAmino): MsgForkRepositorySuccess;
    toAmino(message: MsgForkRepositorySuccess): MsgForkRepositorySuccessAmino;
    fromAminoMsg(object: MsgForkRepositorySuccessAminoMsg): MsgForkRepositorySuccess;
    fromProtoMsg(message: MsgForkRepositorySuccessProtoMsg): MsgForkRepositorySuccess;
    toProto(message: MsgForkRepositorySuccess): Uint8Array;
    toProtoMsg(message: MsgForkRepositorySuccess): MsgForkRepositorySuccessProtoMsg;
};
export declare const MsgForkRepositorySuccessResponse: {
    typeUrl: string;
    encode(message: MsgForkRepositorySuccessResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgForkRepositorySuccessResponse;
    fromPartial(object: Partial<MsgForkRepositorySuccessResponse>): MsgForkRepositorySuccessResponse;
    fromAmino(object: MsgForkRepositorySuccessResponseAmino): MsgForkRepositorySuccessResponse;
    toAmino(message: MsgForkRepositorySuccessResponse): MsgForkRepositorySuccessResponseAmino;
    fromAminoMsg(object: MsgForkRepositorySuccessResponseAminoMsg): MsgForkRepositorySuccessResponse;
    fromProtoMsg(message: MsgForkRepositorySuccessResponseProtoMsg): MsgForkRepositorySuccessResponse;
    toProto(message: MsgForkRepositorySuccessResponse): Uint8Array;
    toProtoMsg(message: MsgForkRepositorySuccessResponse): MsgForkRepositorySuccessResponseProtoMsg;
};
export declare const MsgRenameRepository: {
    typeUrl: string;
    encode(message: MsgRenameRepository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRenameRepository;
    fromPartial(object: Partial<MsgRenameRepository>): MsgRenameRepository;
    fromAmino(object: MsgRenameRepositoryAmino): MsgRenameRepository;
    toAmino(message: MsgRenameRepository): MsgRenameRepositoryAmino;
    fromAminoMsg(object: MsgRenameRepositoryAminoMsg): MsgRenameRepository;
    fromProtoMsg(message: MsgRenameRepositoryProtoMsg): MsgRenameRepository;
    toProto(message: MsgRenameRepository): Uint8Array;
    toProtoMsg(message: MsgRenameRepository): MsgRenameRepositoryProtoMsg;
};
export declare const MsgRenameRepositoryResponse: {
    typeUrl: string;
    encode(_: MsgRenameRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRenameRepositoryResponse;
    fromPartial(_: Partial<MsgRenameRepositoryResponse>): MsgRenameRepositoryResponse;
    fromAmino(_: MsgRenameRepositoryResponseAmino): MsgRenameRepositoryResponse;
    toAmino(_: MsgRenameRepositoryResponse): MsgRenameRepositoryResponseAmino;
    fromAminoMsg(object: MsgRenameRepositoryResponseAminoMsg): MsgRenameRepositoryResponse;
    fromProtoMsg(message: MsgRenameRepositoryResponseProtoMsg): MsgRenameRepositoryResponse;
    toProto(message: MsgRenameRepositoryResponse): Uint8Array;
    toProtoMsg(message: MsgRenameRepositoryResponse): MsgRenameRepositoryResponseProtoMsg;
};
export declare const MsgUpdateRepositoryDescription: {
    typeUrl: string;
    encode(message: MsgUpdateRepositoryDescription, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRepositoryDescription;
    fromPartial(object: Partial<MsgUpdateRepositoryDescription>): MsgUpdateRepositoryDescription;
    fromAmino(object: MsgUpdateRepositoryDescriptionAmino): MsgUpdateRepositoryDescription;
    toAmino(message: MsgUpdateRepositoryDescription): MsgUpdateRepositoryDescriptionAmino;
    fromAminoMsg(object: MsgUpdateRepositoryDescriptionAminoMsg): MsgUpdateRepositoryDescription;
    fromProtoMsg(message: MsgUpdateRepositoryDescriptionProtoMsg): MsgUpdateRepositoryDescription;
    toProto(message: MsgUpdateRepositoryDescription): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryDescription): MsgUpdateRepositoryDescriptionProtoMsg;
};
export declare const MsgUpdateRepositoryDescriptionResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRepositoryDescriptionResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRepositoryDescriptionResponse;
    fromPartial(_: Partial<MsgUpdateRepositoryDescriptionResponse>): MsgUpdateRepositoryDescriptionResponse;
    fromAmino(_: MsgUpdateRepositoryDescriptionResponseAmino): MsgUpdateRepositoryDescriptionResponse;
    toAmino(_: MsgUpdateRepositoryDescriptionResponse): MsgUpdateRepositoryDescriptionResponseAmino;
    fromAminoMsg(object: MsgUpdateRepositoryDescriptionResponseAminoMsg): MsgUpdateRepositoryDescriptionResponse;
    fromProtoMsg(message: MsgUpdateRepositoryDescriptionResponseProtoMsg): MsgUpdateRepositoryDescriptionResponse;
    toProto(message: MsgUpdateRepositoryDescriptionResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryDescriptionResponse): MsgUpdateRepositoryDescriptionResponseProtoMsg;
};
export declare const MsgToggleRepositoryArchived: {
    typeUrl: string;
    encode(message: MsgToggleRepositoryArchived, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleRepositoryArchived;
    fromPartial(object: Partial<MsgToggleRepositoryArchived>): MsgToggleRepositoryArchived;
    fromAmino(object: MsgToggleRepositoryArchivedAmino): MsgToggleRepositoryArchived;
    toAmino(message: MsgToggleRepositoryArchived): MsgToggleRepositoryArchivedAmino;
    fromAminoMsg(object: MsgToggleRepositoryArchivedAminoMsg): MsgToggleRepositoryArchived;
    fromProtoMsg(message: MsgToggleRepositoryArchivedProtoMsg): MsgToggleRepositoryArchived;
    toProto(message: MsgToggleRepositoryArchived): Uint8Array;
    toProtoMsg(message: MsgToggleRepositoryArchived): MsgToggleRepositoryArchivedProtoMsg;
};
export declare const MsgToggleRepositoryArchivedResponse: {
    typeUrl: string;
    encode(_: MsgToggleRepositoryArchivedResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgToggleRepositoryArchivedResponse;
    fromPartial(_: Partial<MsgToggleRepositoryArchivedResponse>): MsgToggleRepositoryArchivedResponse;
    fromAmino(_: MsgToggleRepositoryArchivedResponseAmino): MsgToggleRepositoryArchivedResponse;
    toAmino(_: MsgToggleRepositoryArchivedResponse): MsgToggleRepositoryArchivedResponseAmino;
    fromAminoMsg(object: MsgToggleRepositoryArchivedResponseAminoMsg): MsgToggleRepositoryArchivedResponse;
    fromProtoMsg(message: MsgToggleRepositoryArchivedResponseProtoMsg): MsgToggleRepositoryArchivedResponse;
    toProto(message: MsgToggleRepositoryArchivedResponse): Uint8Array;
    toProtoMsg(message: MsgToggleRepositoryArchivedResponse): MsgToggleRepositoryArchivedResponseProtoMsg;
};
export declare const MsgChangeOwner: {
    typeUrl: string;
    encode(message: MsgChangeOwner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeOwner;
    fromPartial(object: Partial<MsgChangeOwner>): MsgChangeOwner;
    fromAmino(object: MsgChangeOwnerAmino): MsgChangeOwner;
    toAmino(message: MsgChangeOwner): MsgChangeOwnerAmino;
    fromAminoMsg(object: MsgChangeOwnerAminoMsg): MsgChangeOwner;
    fromProtoMsg(message: MsgChangeOwnerProtoMsg): MsgChangeOwner;
    toProto(message: MsgChangeOwner): Uint8Array;
    toProtoMsg(message: MsgChangeOwner): MsgChangeOwnerProtoMsg;
};
export declare const MsgChangeOwnerResponse: {
    typeUrl: string;
    encode(_: MsgChangeOwnerResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeOwnerResponse;
    fromPartial(_: Partial<MsgChangeOwnerResponse>): MsgChangeOwnerResponse;
    fromAmino(_: MsgChangeOwnerResponseAmino): MsgChangeOwnerResponse;
    toAmino(_: MsgChangeOwnerResponse): MsgChangeOwnerResponseAmino;
    fromAminoMsg(object: MsgChangeOwnerResponseAminoMsg): MsgChangeOwnerResponse;
    fromProtoMsg(message: MsgChangeOwnerResponseProtoMsg): MsgChangeOwnerResponse;
    toProto(message: MsgChangeOwnerResponse): Uint8Array;
    toProtoMsg(message: MsgChangeOwnerResponse): MsgChangeOwnerResponseProtoMsg;
};
export declare const MsgUpdateRepositoryCollaborator: {
    typeUrl: string;
    encode(message: MsgUpdateRepositoryCollaborator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRepositoryCollaborator;
    fromPartial(object: Partial<MsgUpdateRepositoryCollaborator>): MsgUpdateRepositoryCollaborator;
    fromAmino(object: MsgUpdateRepositoryCollaboratorAmino): MsgUpdateRepositoryCollaborator;
    toAmino(message: MsgUpdateRepositoryCollaborator): MsgUpdateRepositoryCollaboratorAmino;
    fromAminoMsg(object: MsgUpdateRepositoryCollaboratorAminoMsg): MsgUpdateRepositoryCollaborator;
    fromProtoMsg(message: MsgUpdateRepositoryCollaboratorProtoMsg): MsgUpdateRepositoryCollaborator;
    toProto(message: MsgUpdateRepositoryCollaborator): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryCollaborator): MsgUpdateRepositoryCollaboratorProtoMsg;
};
export declare const MsgUpdateRepositoryCollaboratorResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRepositoryCollaboratorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRepositoryCollaboratorResponse;
    fromPartial(_: Partial<MsgUpdateRepositoryCollaboratorResponse>): MsgUpdateRepositoryCollaboratorResponse;
    fromAmino(_: MsgUpdateRepositoryCollaboratorResponseAmino): MsgUpdateRepositoryCollaboratorResponse;
    toAmino(_: MsgUpdateRepositoryCollaboratorResponse): MsgUpdateRepositoryCollaboratorResponseAmino;
    fromAminoMsg(object: MsgUpdateRepositoryCollaboratorResponseAminoMsg): MsgUpdateRepositoryCollaboratorResponse;
    fromProtoMsg(message: MsgUpdateRepositoryCollaboratorResponseProtoMsg): MsgUpdateRepositoryCollaboratorResponse;
    toProto(message: MsgUpdateRepositoryCollaboratorResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryCollaboratorResponse): MsgUpdateRepositoryCollaboratorResponseProtoMsg;
};
export declare const MsgRemoveRepositoryCollaborator: {
    typeUrl: string;
    encode(message: MsgRemoveRepositoryCollaborator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRemoveRepositoryCollaborator;
    fromPartial(object: Partial<MsgRemoveRepositoryCollaborator>): MsgRemoveRepositoryCollaborator;
    fromAmino(object: MsgRemoveRepositoryCollaboratorAmino): MsgRemoveRepositoryCollaborator;
    toAmino(message: MsgRemoveRepositoryCollaborator): MsgRemoveRepositoryCollaboratorAmino;
    fromAminoMsg(object: MsgRemoveRepositoryCollaboratorAminoMsg): MsgRemoveRepositoryCollaborator;
    fromProtoMsg(message: MsgRemoveRepositoryCollaboratorProtoMsg): MsgRemoveRepositoryCollaborator;
    toProto(message: MsgRemoveRepositoryCollaborator): Uint8Array;
    toProtoMsg(message: MsgRemoveRepositoryCollaborator): MsgRemoveRepositoryCollaboratorProtoMsg;
};
export declare const MsgRemoveRepositoryCollaboratorResponse: {
    typeUrl: string;
    encode(_: MsgRemoveRepositoryCollaboratorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRemoveRepositoryCollaboratorResponse;
    fromPartial(_: Partial<MsgRemoveRepositoryCollaboratorResponse>): MsgRemoveRepositoryCollaboratorResponse;
    fromAmino(_: MsgRemoveRepositoryCollaboratorResponseAmino): MsgRemoveRepositoryCollaboratorResponse;
    toAmino(_: MsgRemoveRepositoryCollaboratorResponse): MsgRemoveRepositoryCollaboratorResponseAmino;
    fromAminoMsg(object: MsgRemoveRepositoryCollaboratorResponseAminoMsg): MsgRemoveRepositoryCollaboratorResponse;
    fromProtoMsg(message: MsgRemoveRepositoryCollaboratorResponseProtoMsg): MsgRemoveRepositoryCollaboratorResponse;
    toProto(message: MsgRemoveRepositoryCollaboratorResponse): Uint8Array;
    toProtoMsg(message: MsgRemoveRepositoryCollaboratorResponse): MsgRemoveRepositoryCollaboratorResponseProtoMsg;
};
export declare const MsgCreateRepositoryLabel: {
    typeUrl: string;
    encode(message: MsgCreateRepositoryLabel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRepositoryLabel;
    fromPartial(object: Partial<MsgCreateRepositoryLabel>): MsgCreateRepositoryLabel;
    fromAmino(object: MsgCreateRepositoryLabelAmino): MsgCreateRepositoryLabel;
    toAmino(message: MsgCreateRepositoryLabel): MsgCreateRepositoryLabelAmino;
    fromAminoMsg(object: MsgCreateRepositoryLabelAminoMsg): MsgCreateRepositoryLabel;
    fromProtoMsg(message: MsgCreateRepositoryLabelProtoMsg): MsgCreateRepositoryLabel;
    toProto(message: MsgCreateRepositoryLabel): Uint8Array;
    toProtoMsg(message: MsgCreateRepositoryLabel): MsgCreateRepositoryLabelProtoMsg;
};
export declare const MsgCreateRepositoryLabelResponse: {
    typeUrl: string;
    encode(message: MsgCreateRepositoryLabelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateRepositoryLabelResponse;
    fromPartial(object: Partial<MsgCreateRepositoryLabelResponse>): MsgCreateRepositoryLabelResponse;
    fromAmino(object: MsgCreateRepositoryLabelResponseAmino): MsgCreateRepositoryLabelResponse;
    toAmino(message: MsgCreateRepositoryLabelResponse): MsgCreateRepositoryLabelResponseAmino;
    fromAminoMsg(object: MsgCreateRepositoryLabelResponseAminoMsg): MsgCreateRepositoryLabelResponse;
    fromProtoMsg(message: MsgCreateRepositoryLabelResponseProtoMsg): MsgCreateRepositoryLabelResponse;
    toProto(message: MsgCreateRepositoryLabelResponse): Uint8Array;
    toProtoMsg(message: MsgCreateRepositoryLabelResponse): MsgCreateRepositoryLabelResponseProtoMsg;
};
export declare const MsgUpdateRepositoryLabel: {
    typeUrl: string;
    encode(message: MsgUpdateRepositoryLabel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateRepositoryLabel;
    fromPartial(object: Partial<MsgUpdateRepositoryLabel>): MsgUpdateRepositoryLabel;
    fromAmino(object: MsgUpdateRepositoryLabelAmino): MsgUpdateRepositoryLabel;
    toAmino(message: MsgUpdateRepositoryLabel): MsgUpdateRepositoryLabelAmino;
    fromAminoMsg(object: MsgUpdateRepositoryLabelAminoMsg): MsgUpdateRepositoryLabel;
    fromProtoMsg(message: MsgUpdateRepositoryLabelProtoMsg): MsgUpdateRepositoryLabel;
    toProto(message: MsgUpdateRepositoryLabel): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryLabel): MsgUpdateRepositoryLabelProtoMsg;
};
export declare const MsgUpdateRepositoryLabelResponse: {
    typeUrl: string;
    encode(_: MsgUpdateRepositoryLabelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateRepositoryLabelResponse;
    fromPartial(_: Partial<MsgUpdateRepositoryLabelResponse>): MsgUpdateRepositoryLabelResponse;
    fromAmino(_: MsgUpdateRepositoryLabelResponseAmino): MsgUpdateRepositoryLabelResponse;
    toAmino(_: MsgUpdateRepositoryLabelResponse): MsgUpdateRepositoryLabelResponseAmino;
    fromAminoMsg(object: MsgUpdateRepositoryLabelResponseAminoMsg): MsgUpdateRepositoryLabelResponse;
    fromProtoMsg(message: MsgUpdateRepositoryLabelResponseProtoMsg): MsgUpdateRepositoryLabelResponse;
    toProto(message: MsgUpdateRepositoryLabelResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateRepositoryLabelResponse): MsgUpdateRepositoryLabelResponseProtoMsg;
};
export declare const MsgDeleteRepositoryLabel: {
    typeUrl: string;
    encode(message: MsgDeleteRepositoryLabel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteRepositoryLabel;
    fromPartial(object: Partial<MsgDeleteRepositoryLabel>): MsgDeleteRepositoryLabel;
    fromAmino(object: MsgDeleteRepositoryLabelAmino): MsgDeleteRepositoryLabel;
    toAmino(message: MsgDeleteRepositoryLabel): MsgDeleteRepositoryLabelAmino;
    fromAminoMsg(object: MsgDeleteRepositoryLabelAminoMsg): MsgDeleteRepositoryLabel;
    fromProtoMsg(message: MsgDeleteRepositoryLabelProtoMsg): MsgDeleteRepositoryLabel;
    toProto(message: MsgDeleteRepositoryLabel): Uint8Array;
    toProtoMsg(message: MsgDeleteRepositoryLabel): MsgDeleteRepositoryLabelProtoMsg;
};
export declare const MsgDeleteRepositoryLabelResponse: {
    typeUrl: string;
    encode(_: MsgDeleteRepositoryLabelResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteRepositoryLabelResponse;
    fromPartial(_: Partial<MsgDeleteRepositoryLabelResponse>): MsgDeleteRepositoryLabelResponse;
    fromAmino(_: MsgDeleteRepositoryLabelResponseAmino): MsgDeleteRepositoryLabelResponse;
    toAmino(_: MsgDeleteRepositoryLabelResponse): MsgDeleteRepositoryLabelResponseAmino;
    fromAminoMsg(object: MsgDeleteRepositoryLabelResponseAminoMsg): MsgDeleteRepositoryLabelResponse;
    fromProtoMsg(message: MsgDeleteRepositoryLabelResponseProtoMsg): MsgDeleteRepositoryLabelResponse;
    toProto(message: MsgDeleteRepositoryLabelResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteRepositoryLabelResponse): MsgDeleteRepositoryLabelResponseProtoMsg;
};
export declare const MsgToggleRepositoryForking: {
    typeUrl: string;
    encode(message: MsgToggleRepositoryForking, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleRepositoryForking;
    fromPartial(object: Partial<MsgToggleRepositoryForking>): MsgToggleRepositoryForking;
    fromAmino(object: MsgToggleRepositoryForkingAmino): MsgToggleRepositoryForking;
    toAmino(message: MsgToggleRepositoryForking): MsgToggleRepositoryForkingAmino;
    fromAminoMsg(object: MsgToggleRepositoryForkingAminoMsg): MsgToggleRepositoryForking;
    fromProtoMsg(message: MsgToggleRepositoryForkingProtoMsg): MsgToggleRepositoryForking;
    toProto(message: MsgToggleRepositoryForking): Uint8Array;
    toProtoMsg(message: MsgToggleRepositoryForking): MsgToggleRepositoryForkingProtoMsg;
};
export declare const MsgToggleRepositoryForkingResponse: {
    typeUrl: string;
    encode(message: MsgToggleRepositoryForkingResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleRepositoryForkingResponse;
    fromPartial(object: Partial<MsgToggleRepositoryForkingResponse>): MsgToggleRepositoryForkingResponse;
    fromAmino(object: MsgToggleRepositoryForkingResponseAmino): MsgToggleRepositoryForkingResponse;
    toAmino(message: MsgToggleRepositoryForkingResponse): MsgToggleRepositoryForkingResponseAmino;
    fromAminoMsg(object: MsgToggleRepositoryForkingResponseAminoMsg): MsgToggleRepositoryForkingResponse;
    fromProtoMsg(message: MsgToggleRepositoryForkingResponseProtoMsg): MsgToggleRepositoryForkingResponse;
    toProto(message: MsgToggleRepositoryForkingResponse): Uint8Array;
    toProtoMsg(message: MsgToggleRepositoryForkingResponse): MsgToggleRepositoryForkingResponseProtoMsg;
};
export declare const MsgToggleArweaveBackup: {
    typeUrl: string;
    encode(message: MsgToggleArweaveBackup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleArweaveBackup;
    fromPartial(object: Partial<MsgToggleArweaveBackup>): MsgToggleArweaveBackup;
    fromAmino(object: MsgToggleArweaveBackupAmino): MsgToggleArweaveBackup;
    toAmino(message: MsgToggleArweaveBackup): MsgToggleArweaveBackupAmino;
    fromAminoMsg(object: MsgToggleArweaveBackupAminoMsg): MsgToggleArweaveBackup;
    fromProtoMsg(message: MsgToggleArweaveBackupProtoMsg): MsgToggleArweaveBackup;
    toProto(message: MsgToggleArweaveBackup): Uint8Array;
    toProtoMsg(message: MsgToggleArweaveBackup): MsgToggleArweaveBackupProtoMsg;
};
export declare const MsgToggleArweaveBackupResponse: {
    typeUrl: string;
    encode(message: MsgToggleArweaveBackupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleArweaveBackupResponse;
    fromPartial(object: Partial<MsgToggleArweaveBackupResponse>): MsgToggleArweaveBackupResponse;
    fromAmino(object: MsgToggleArweaveBackupResponseAmino): MsgToggleArweaveBackupResponse;
    toAmino(message: MsgToggleArweaveBackupResponse): MsgToggleArweaveBackupResponseAmino;
    fromAminoMsg(object: MsgToggleArweaveBackupResponseAminoMsg): MsgToggleArweaveBackupResponse;
    fromProtoMsg(message: MsgToggleArweaveBackupResponseProtoMsg): MsgToggleArweaveBackupResponse;
    toProto(message: MsgToggleArweaveBackupResponse): Uint8Array;
    toProtoMsg(message: MsgToggleArweaveBackupResponse): MsgToggleArweaveBackupResponseProtoMsg;
};
export declare const MsgDeleteRepository: {
    typeUrl: string;
    encode(message: MsgDeleteRepository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteRepository;
    fromPartial(object: Partial<MsgDeleteRepository>): MsgDeleteRepository;
    fromAmino(object: MsgDeleteRepositoryAmino): MsgDeleteRepository;
    toAmino(message: MsgDeleteRepository): MsgDeleteRepositoryAmino;
    fromAminoMsg(object: MsgDeleteRepositoryAminoMsg): MsgDeleteRepository;
    fromProtoMsg(message: MsgDeleteRepositoryProtoMsg): MsgDeleteRepository;
    toProto(message: MsgDeleteRepository): Uint8Array;
    toProtoMsg(message: MsgDeleteRepository): MsgDeleteRepositoryProtoMsg;
};
export declare const MsgDeleteRepositoryResponse: {
    typeUrl: string;
    encode(_: MsgDeleteRepositoryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteRepositoryResponse;
    fromPartial(_: Partial<MsgDeleteRepositoryResponse>): MsgDeleteRepositoryResponse;
    fromAmino(_: MsgDeleteRepositoryResponseAmino): MsgDeleteRepositoryResponse;
    toAmino(_: MsgDeleteRepositoryResponse): MsgDeleteRepositoryResponseAmino;
    fromAminoMsg(object: MsgDeleteRepositoryResponseAminoMsg): MsgDeleteRepositoryResponse;
    fromProtoMsg(message: MsgDeleteRepositoryResponseProtoMsg): MsgDeleteRepositoryResponse;
    toProto(message: MsgDeleteRepositoryResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteRepositoryResponse): MsgDeleteRepositoryResponseProtoMsg;
};
export declare const MsgCreateUser: {
    typeUrl: string;
    encode(message: MsgCreateUser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateUser;
    fromPartial(object: Partial<MsgCreateUser>): MsgCreateUser;
    fromAmino(object: MsgCreateUserAmino): MsgCreateUser;
    toAmino(message: MsgCreateUser): MsgCreateUserAmino;
    fromAminoMsg(object: MsgCreateUserAminoMsg): MsgCreateUser;
    fromProtoMsg(message: MsgCreateUserProtoMsg): MsgCreateUser;
    toProto(message: MsgCreateUser): Uint8Array;
    toProtoMsg(message: MsgCreateUser): MsgCreateUserProtoMsg;
};
export declare const MsgCreateUserResponse: {
    typeUrl: string;
    encode(message: MsgCreateUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateUserResponse;
    fromPartial(object: Partial<MsgCreateUserResponse>): MsgCreateUserResponse;
    fromAmino(object: MsgCreateUserResponseAmino): MsgCreateUserResponse;
    toAmino(message: MsgCreateUserResponse): MsgCreateUserResponseAmino;
    fromAminoMsg(object: MsgCreateUserResponseAminoMsg): MsgCreateUserResponse;
    fromProtoMsg(message: MsgCreateUserResponseProtoMsg): MsgCreateUserResponse;
    toProto(message: MsgCreateUserResponse): Uint8Array;
    toProtoMsg(message: MsgCreateUserResponse): MsgCreateUserResponseProtoMsg;
};
export declare const MsgUpdateUserUsername: {
    typeUrl: string;
    encode(message: MsgUpdateUserUsername, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateUserUsername;
    fromPartial(object: Partial<MsgUpdateUserUsername>): MsgUpdateUserUsername;
    fromAmino(object: MsgUpdateUserUsernameAmino): MsgUpdateUserUsername;
    toAmino(message: MsgUpdateUserUsername): MsgUpdateUserUsernameAmino;
    fromAminoMsg(object: MsgUpdateUserUsernameAminoMsg): MsgUpdateUserUsername;
    fromProtoMsg(message: MsgUpdateUserUsernameProtoMsg): MsgUpdateUserUsername;
    toProto(message: MsgUpdateUserUsername): Uint8Array;
    toProtoMsg(message: MsgUpdateUserUsername): MsgUpdateUserUsernameProtoMsg;
};
export declare const MsgUpdateUserUsernameResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserUsernameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateUserUsernameResponse;
    fromPartial(_: Partial<MsgUpdateUserUsernameResponse>): MsgUpdateUserUsernameResponse;
    fromAmino(_: MsgUpdateUserUsernameResponseAmino): MsgUpdateUserUsernameResponse;
    toAmino(_: MsgUpdateUserUsernameResponse): MsgUpdateUserUsernameResponseAmino;
    fromAminoMsg(object: MsgUpdateUserUsernameResponseAminoMsg): MsgUpdateUserUsernameResponse;
    fromProtoMsg(message: MsgUpdateUserUsernameResponseProtoMsg): MsgUpdateUserUsernameResponse;
    toProto(message: MsgUpdateUserUsernameResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserUsernameResponse): MsgUpdateUserUsernameResponseProtoMsg;
};
export declare const MsgUpdateUserName: {
    typeUrl: string;
    encode(message: MsgUpdateUserName, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateUserName;
    fromPartial(object: Partial<MsgUpdateUserName>): MsgUpdateUserName;
    fromAmino(object: MsgUpdateUserNameAmino): MsgUpdateUserName;
    toAmino(message: MsgUpdateUserName): MsgUpdateUserNameAmino;
    fromAminoMsg(object: MsgUpdateUserNameAminoMsg): MsgUpdateUserName;
    fromProtoMsg(message: MsgUpdateUserNameProtoMsg): MsgUpdateUserName;
    toProto(message: MsgUpdateUserName): Uint8Array;
    toProtoMsg(message: MsgUpdateUserName): MsgUpdateUserNameProtoMsg;
};
export declare const MsgUpdateUserNameResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserNameResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateUserNameResponse;
    fromPartial(_: Partial<MsgUpdateUserNameResponse>): MsgUpdateUserNameResponse;
    fromAmino(_: MsgUpdateUserNameResponseAmino): MsgUpdateUserNameResponse;
    toAmino(_: MsgUpdateUserNameResponse): MsgUpdateUserNameResponseAmino;
    fromAminoMsg(object: MsgUpdateUserNameResponseAminoMsg): MsgUpdateUserNameResponse;
    fromProtoMsg(message: MsgUpdateUserNameResponseProtoMsg): MsgUpdateUserNameResponse;
    toProto(message: MsgUpdateUserNameResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserNameResponse): MsgUpdateUserNameResponseProtoMsg;
};
export declare const MsgUpdateUserBio: {
    typeUrl: string;
    encode(message: MsgUpdateUserBio, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateUserBio;
    fromPartial(object: Partial<MsgUpdateUserBio>): MsgUpdateUserBio;
    fromAmino(object: MsgUpdateUserBioAmino): MsgUpdateUserBio;
    toAmino(message: MsgUpdateUserBio): MsgUpdateUserBioAmino;
    fromAminoMsg(object: MsgUpdateUserBioAminoMsg): MsgUpdateUserBio;
    fromProtoMsg(message: MsgUpdateUserBioProtoMsg): MsgUpdateUserBio;
    toProto(message: MsgUpdateUserBio): Uint8Array;
    toProtoMsg(message: MsgUpdateUserBio): MsgUpdateUserBioProtoMsg;
};
export declare const MsgUpdateUserBioResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserBioResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateUserBioResponse;
    fromPartial(_: Partial<MsgUpdateUserBioResponse>): MsgUpdateUserBioResponse;
    fromAmino(_: MsgUpdateUserBioResponseAmino): MsgUpdateUserBioResponse;
    toAmino(_: MsgUpdateUserBioResponse): MsgUpdateUserBioResponseAmino;
    fromAminoMsg(object: MsgUpdateUserBioResponseAminoMsg): MsgUpdateUserBioResponse;
    fromProtoMsg(message: MsgUpdateUserBioResponseProtoMsg): MsgUpdateUserBioResponse;
    toProto(message: MsgUpdateUserBioResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserBioResponse): MsgUpdateUserBioResponseProtoMsg;
};
export declare const MsgUpdateUserAvatar: {
    typeUrl: string;
    encode(message: MsgUpdateUserAvatar, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateUserAvatar;
    fromPartial(object: Partial<MsgUpdateUserAvatar>): MsgUpdateUserAvatar;
    fromAmino(object: MsgUpdateUserAvatarAmino): MsgUpdateUserAvatar;
    toAmino(message: MsgUpdateUserAvatar): MsgUpdateUserAvatarAmino;
    fromAminoMsg(object: MsgUpdateUserAvatarAminoMsg): MsgUpdateUserAvatar;
    fromProtoMsg(message: MsgUpdateUserAvatarProtoMsg): MsgUpdateUserAvatar;
    toProto(message: MsgUpdateUserAvatar): Uint8Array;
    toProtoMsg(message: MsgUpdateUserAvatar): MsgUpdateUserAvatarProtoMsg;
};
export declare const MsgUpdateUserAvatarResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserAvatarResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateUserAvatarResponse;
    fromPartial(_: Partial<MsgUpdateUserAvatarResponse>): MsgUpdateUserAvatarResponse;
    fromAmino(_: MsgUpdateUserAvatarResponseAmino): MsgUpdateUserAvatarResponse;
    toAmino(_: MsgUpdateUserAvatarResponse): MsgUpdateUserAvatarResponseAmino;
    fromAminoMsg(object: MsgUpdateUserAvatarResponseAminoMsg): MsgUpdateUserAvatarResponse;
    fromProtoMsg(message: MsgUpdateUserAvatarResponseProtoMsg): MsgUpdateUserAvatarResponse;
    toProto(message: MsgUpdateUserAvatarResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserAvatarResponse): MsgUpdateUserAvatarResponseProtoMsg;
};
export declare const MsgDeleteUser: {
    typeUrl: string;
    encode(message: MsgDeleteUser, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDeleteUser;
    fromPartial(object: Partial<MsgDeleteUser>): MsgDeleteUser;
    fromAmino(object: MsgDeleteUserAmino): MsgDeleteUser;
    toAmino(message: MsgDeleteUser): MsgDeleteUserAmino;
    fromAminoMsg(object: MsgDeleteUserAminoMsg): MsgDeleteUser;
    fromProtoMsg(message: MsgDeleteUserProtoMsg): MsgDeleteUser;
    toProto(message: MsgDeleteUser): Uint8Array;
    toProtoMsg(message: MsgDeleteUser): MsgDeleteUserProtoMsg;
};
export declare const MsgDeleteUserResponse: {
    typeUrl: string;
    encode(_: MsgDeleteUserResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDeleteUserResponse;
    fromPartial(_: Partial<MsgDeleteUserResponse>): MsgDeleteUserResponse;
    fromAmino(_: MsgDeleteUserResponseAmino): MsgDeleteUserResponse;
    toAmino(_: MsgDeleteUserResponse): MsgDeleteUserResponseAmino;
    fromAminoMsg(object: MsgDeleteUserResponseAminoMsg): MsgDeleteUserResponse;
    fromProtoMsg(message: MsgDeleteUserResponseProtoMsg): MsgDeleteUserResponse;
    toProto(message: MsgDeleteUserResponse): Uint8Array;
    toProtoMsg(message: MsgDeleteUserResponse): MsgDeleteUserResponseProtoMsg;
};
export declare const MsgUpdateUserPinnedRepositories: {
    typeUrl: string;
    encode(message: MsgUpdateUserPinnedRepositories, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateUserPinnedRepositories;
    fromPartial(object: Partial<MsgUpdateUserPinnedRepositories>): MsgUpdateUserPinnedRepositories;
    fromAmino(object: MsgUpdateUserPinnedRepositoriesAmino): MsgUpdateUserPinnedRepositories;
    toAmino(message: MsgUpdateUserPinnedRepositories): MsgUpdateUserPinnedRepositoriesAmino;
    fromAminoMsg(object: MsgUpdateUserPinnedRepositoriesAminoMsg): MsgUpdateUserPinnedRepositories;
    fromProtoMsg(message: MsgUpdateUserPinnedRepositoriesProtoMsg): MsgUpdateUserPinnedRepositories;
    toProto(message: MsgUpdateUserPinnedRepositories): Uint8Array;
    toProtoMsg(message: MsgUpdateUserPinnedRepositories): MsgUpdateUserPinnedRepositoriesProtoMsg;
};
export declare const MsgUpdateUserPinnedRepositoriesResponse: {
    typeUrl: string;
    encode(_: MsgUpdateUserPinnedRepositoriesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateUserPinnedRepositoriesResponse;
    fromPartial(_: Partial<MsgUpdateUserPinnedRepositoriesResponse>): MsgUpdateUserPinnedRepositoriesResponse;
    fromAmino(_: MsgUpdateUserPinnedRepositoriesResponseAmino): MsgUpdateUserPinnedRepositoriesResponse;
    toAmino(_: MsgUpdateUserPinnedRepositoriesResponse): MsgUpdateUserPinnedRepositoriesResponseAmino;
    fromAminoMsg(object: MsgUpdateUserPinnedRepositoriesResponseAminoMsg): MsgUpdateUserPinnedRepositoriesResponse;
    fromProtoMsg(message: MsgUpdateUserPinnedRepositoriesResponseProtoMsg): MsgUpdateUserPinnedRepositoriesResponse;
    toProto(message: MsgUpdateUserPinnedRepositoriesResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateUserPinnedRepositoriesResponse): MsgUpdateUserPinnedRepositoriesResponseProtoMsg;
};
export declare const MsgUpdateDaoPinnedRepositories: {
    typeUrl: string;
    encode(message: MsgUpdateDaoPinnedRepositories, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDaoPinnedRepositories;
    fromPartial(object: Partial<MsgUpdateDaoPinnedRepositories>): MsgUpdateDaoPinnedRepositories;
    fromAmino(object: MsgUpdateDaoPinnedRepositoriesAmino): MsgUpdateDaoPinnedRepositories;
    toAmino(message: MsgUpdateDaoPinnedRepositories): MsgUpdateDaoPinnedRepositoriesAmino;
    fromAminoMsg(object: MsgUpdateDaoPinnedRepositoriesAminoMsg): MsgUpdateDaoPinnedRepositories;
    fromProtoMsg(message: MsgUpdateDaoPinnedRepositoriesProtoMsg): MsgUpdateDaoPinnedRepositories;
    toProto(message: MsgUpdateDaoPinnedRepositories): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoPinnedRepositories): MsgUpdateDaoPinnedRepositoriesProtoMsg;
};
export declare const MsgUpdateDaoPinnedRepositoriesResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDaoPinnedRepositoriesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDaoPinnedRepositoriesResponse;
    fromPartial(_: Partial<MsgUpdateDaoPinnedRepositoriesResponse>): MsgUpdateDaoPinnedRepositoriesResponse;
    fromAmino(_: MsgUpdateDaoPinnedRepositoriesResponseAmino): MsgUpdateDaoPinnedRepositoriesResponse;
    toAmino(_: MsgUpdateDaoPinnedRepositoriesResponse): MsgUpdateDaoPinnedRepositoriesResponseAmino;
    fromAminoMsg(object: MsgUpdateDaoPinnedRepositoriesResponseAminoMsg): MsgUpdateDaoPinnedRepositoriesResponse;
    fromProtoMsg(message: MsgUpdateDaoPinnedRepositoriesResponseProtoMsg): MsgUpdateDaoPinnedRepositoriesResponse;
    toProto(message: MsgUpdateDaoPinnedRepositoriesResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDaoPinnedRepositoriesResponse): MsgUpdateDaoPinnedRepositoriesResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
export declare const MsgDistributePlatformIncentives: {
    typeUrl: string;
    encode(message: MsgDistributePlatformIncentives, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDistributePlatformIncentives;
    fromPartial(object: Partial<MsgDistributePlatformIncentives>): MsgDistributePlatformIncentives;
    fromAmino(object: MsgDistributePlatformIncentivesAmino): MsgDistributePlatformIncentives;
    toAmino(message: MsgDistributePlatformIncentives): MsgDistributePlatformIncentivesAmino;
    fromAminoMsg(object: MsgDistributePlatformIncentivesAminoMsg): MsgDistributePlatformIncentives;
    fromProtoMsg(message: MsgDistributePlatformIncentivesProtoMsg): MsgDistributePlatformIncentives;
    toProto(message: MsgDistributePlatformIncentives): Uint8Array;
    toProtoMsg(message: MsgDistributePlatformIncentives): MsgDistributePlatformIncentivesProtoMsg;
};
export declare const MsgDistributePlatformIncentives_Address: {
    typeUrl: string;
    encode(message: MsgDistributePlatformIncentives_Address, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDistributePlatformIncentives_Address;
    fromPartial(object: Partial<MsgDistributePlatformIncentives_Address>): MsgDistributePlatformIncentives_Address;
    fromAmino(object: MsgDistributePlatformIncentives_AddressAmino): MsgDistributePlatformIncentives_Address;
    toAmino(message: MsgDistributePlatformIncentives_Address): MsgDistributePlatformIncentives_AddressAmino;
    fromAminoMsg(object: MsgDistributePlatformIncentives_AddressAminoMsg): MsgDistributePlatformIncentives_Address;
    fromProtoMsg(message: MsgDistributePlatformIncentives_AddressProtoMsg): MsgDistributePlatformIncentives_Address;
    toProto(message: MsgDistributePlatformIncentives_Address): Uint8Array;
    toProtoMsg(message: MsgDistributePlatformIncentives_Address): MsgDistributePlatformIncentives_AddressProtoMsg;
};
export declare const MsgDistributePlatformIncentivesResponse: {
    typeUrl: string;
    encode(_: MsgDistributePlatformIncentivesResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDistributePlatformIncentivesResponse;
    fromPartial(_: Partial<MsgDistributePlatformIncentivesResponse>): MsgDistributePlatformIncentivesResponse;
    fromAmino(_: MsgDistributePlatformIncentivesResponseAmino): MsgDistributePlatformIncentivesResponse;
    toAmino(_: MsgDistributePlatformIncentivesResponse): MsgDistributePlatformIncentivesResponseAmino;
    fromAminoMsg(object: MsgDistributePlatformIncentivesResponseAminoMsg): MsgDistributePlatformIncentivesResponse;
    fromProtoMsg(message: MsgDistributePlatformIncentivesResponseProtoMsg): MsgDistributePlatformIncentivesResponse;
    toProto(message: MsgDistributePlatformIncentivesResponse): Uint8Array;
    toProtoMsg(message: MsgDistributePlatformIncentivesResponse): MsgDistributePlatformIncentivesResponseProtoMsg;
};
