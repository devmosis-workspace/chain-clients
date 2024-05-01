import { OwnerType } from "./whois";
import { BinaryWriter } from "../binary";
export declare enum RepositoryCollaborator_Permission {
    READ = 0,
    TRIAGE = 1,
    WRITE = 2,
    MAINTAIN = 3,
    ADMIN = 4,
    UNRECOGNIZED = -1
}
export declare const RepositoryCollaborator_PermissionSDKType: typeof RepositoryCollaborator_Permission;
export declare const RepositoryCollaborator_PermissionAmino: typeof RepositoryCollaborator_Permission;
export declare function repositoryCollaborator_PermissionFromJSON(object: any): RepositoryCollaborator_Permission;
export declare function repositoryCollaborator_PermissionToJSON(object: RepositoryCollaborator_Permission): string;
export declare enum RepositoryBackup_Store {
    IPFS = 0,
    ARWEAVE = 1,
    UNRECOGNIZED = -1
}
export declare const RepositoryBackup_StoreSDKType: typeof RepositoryBackup_Store;
export declare const RepositoryBackup_StoreAmino: typeof RepositoryBackup_Store;
export declare function repositoryBackup_StoreFromJSON(object: any): RepositoryBackup_Store;
export declare function repositoryBackup_StoreToJSON(object: RepositoryBackup_Store): string;
export interface Repository {
    creator: string;
    id: bigint;
    name: string;
    owner?: RepositoryOwner;
    description: string;
    forks: bigint[];
    subscribers: string;
    commits: string;
    issuesCount: bigint;
    pullsCount: bigint;
    labels: RepositoryLabel[];
    labelsCount: bigint;
    releases: RepositoryRelease[];
    createdAt: bigint;
    updatedAt: bigint;
    pushedAt: bigint;
    stargazers: bigint[];
    archived: boolean;
    license: string;
    defaultBranch: string;
    parent: bigint;
    fork: boolean;
    collaborators: RepositoryCollaborator[];
    allowForking: boolean;
    backups: RepositoryBackup[];
    enableArweaveBackup: boolean;
}
export interface RepositoryProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Repository";
    value: Uint8Array;
}
export interface RepositoryAmino {
    creator?: string;
    id?: string;
    name?: string;
    owner?: RepositoryOwnerAmino;
    description?: string;
    forks?: string[];
    subscribers?: string;
    commits?: string;
    issuesCount?: string;
    pullsCount?: string;
    labels?: RepositoryLabelAmino[];
    labelsCount?: string;
    releases?: RepositoryReleaseAmino[];
    createdAt?: string;
    updatedAt?: string;
    pushedAt?: string;
    stargazers?: string[];
    archived?: boolean;
    license?: string;
    defaultBranch?: string;
    parent?: string;
    fork?: boolean;
    collaborators?: RepositoryCollaboratorAmino[];
    allowForking?: boolean;
    backups?: RepositoryBackupAmino[];
    enableArweaveBackup?: boolean;
}
export interface RepositoryAminoMsg {
    type: "/gitopia.gitopia.gitopia.Repository";
    value: RepositoryAmino;
}
export interface RepositorySDKType {
    creator: string;
    id: bigint;
    name: string;
    owner?: RepositoryOwnerSDKType;
    description: string;
    forks: bigint[];
    subscribers: string;
    commits: string;
    issuesCount: bigint;
    pullsCount: bigint;
    labels: RepositoryLabelSDKType[];
    labelsCount: bigint;
    releases: RepositoryReleaseSDKType[];
    createdAt: bigint;
    updatedAt: bigint;
    pushedAt: bigint;
    stargazers: bigint[];
    archived: boolean;
    license: string;
    defaultBranch: string;
    parent: bigint;
    fork: boolean;
    collaborators: RepositoryCollaboratorSDKType[];
    allowForking: boolean;
    backups: RepositoryBackupSDKType[];
    enableArweaveBackup: boolean;
}
export interface RepositoryId {
    id: string;
    name: string;
}
export interface RepositoryIdProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryId";
    value: Uint8Array;
}
export interface RepositoryIdAmino {
    id?: string;
    name?: string;
}
export interface RepositoryIdAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryId";
    value: RepositoryIdAmino;
}
export interface RepositoryIdSDKType {
    id: string;
    name: string;
}
export interface BaseRepositoryKey {
    id: bigint;
    address: string;
    name: string;
}
export interface BaseRepositoryKeyProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.BaseRepositoryKey";
    value: Uint8Array;
}
export interface BaseRepositoryKeyAmino {
    id?: string;
    address?: string;
    name?: string;
}
export interface BaseRepositoryKeyAminoMsg {
    type: "/gitopia.gitopia.gitopia.BaseRepositoryKey";
    value: BaseRepositoryKeyAmino;
}
export interface BaseRepositoryKeySDKType {
    id: bigint;
    address: string;
    name: string;
}
export interface RepositoryOwner {
    id: string;
    type: OwnerType;
}
export interface RepositoryOwnerProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryOwner";
    value: Uint8Array;
}
export interface RepositoryOwnerAmino {
    id?: string;
    type?: OwnerType;
}
export interface RepositoryOwnerAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryOwner";
    value: RepositoryOwnerAmino;
}
export interface RepositoryOwnerSDKType {
    id: string;
    type: OwnerType;
}
export interface IssueIid {
    iid: bigint;
    id: bigint;
}
export interface IssueIidProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.IssueIid";
    value: Uint8Array;
}
export interface IssueIidAmino {
    iid?: string;
    id?: string;
}
export interface IssueIidAminoMsg {
    type: "/gitopia.gitopia.gitopia.IssueIid";
    value: IssueIidAmino;
}
export interface IssueIidSDKType {
    iid: bigint;
    id: bigint;
}
export interface PullRequestIid {
    iid: bigint;
    id: bigint;
}
export interface PullRequestIidProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PullRequestIid";
    value: Uint8Array;
}
export interface PullRequestIidAmino {
    iid?: string;
    id?: string;
}
export interface PullRequestIidAminoMsg {
    type: "/gitopia.gitopia.gitopia.PullRequestIid";
    value: PullRequestIidAmino;
}
export interface PullRequestIidSDKType {
    iid: bigint;
    id: bigint;
}
export interface RepositoryCollaborator {
    id: string;
    permission: RepositoryCollaborator_Permission;
}
export interface RepositoryCollaboratorProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryCollaborator";
    value: Uint8Array;
}
export interface RepositoryCollaboratorAmino {
    id?: string;
    permission?: RepositoryCollaborator_Permission;
}
export interface RepositoryCollaboratorAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryCollaborator";
    value: RepositoryCollaboratorAmino;
}
export interface RepositoryCollaboratorSDKType {
    id: string;
    permission: RepositoryCollaborator_Permission;
}
export interface RepositoryLabel {
    id: bigint;
    name: string;
    color: string;
    description: string;
}
export interface RepositoryLabelProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryLabel";
    value: Uint8Array;
}
export interface RepositoryLabelAmino {
    id?: string;
    name?: string;
    color?: string;
    description?: string;
}
export interface RepositoryLabelAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryLabel";
    value: RepositoryLabelAmino;
}
export interface RepositoryLabelSDKType {
    id: bigint;
    name: string;
    color: string;
    description: string;
}
export interface RepositoryRelease {
    id: bigint;
    tagName: string;
}
export interface RepositoryReleaseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryRelease";
    value: Uint8Array;
}
export interface RepositoryReleaseAmino {
    id?: string;
    tagName?: string;
}
export interface RepositoryReleaseAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryRelease";
    value: RepositoryReleaseAmino;
}
export interface RepositoryReleaseSDKType {
    id: bigint;
    tagName: string;
}
export interface RepositoryBackup {
    store: RepositoryBackup_Store;
    refs: string[];
}
export interface RepositoryBackupProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.RepositoryBackup";
    value: Uint8Array;
}
export interface RepositoryBackupAmino {
    store?: RepositoryBackup_Store;
    refs?: string[];
}
export interface RepositoryBackupAminoMsg {
    type: "/gitopia.gitopia.gitopia.RepositoryBackup";
    value: RepositoryBackupAmino;
}
export interface RepositoryBackupSDKType {
    store: RepositoryBackup_Store;
    refs: string[];
}
export declare const Repository: {
    typeUrl: string;
    encode(message: Repository, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Repository;
    fromPartial(object: Partial<Repository>): Repository;
    fromAmino(object: RepositoryAmino): Repository;
    toAmino(message: Repository): RepositoryAmino;
    fromAminoMsg(object: RepositoryAminoMsg): Repository;
    fromProtoMsg(message: RepositoryProtoMsg): Repository;
    toProto(message: Repository): Uint8Array;
    toProtoMsg(message: Repository): RepositoryProtoMsg;
};
export declare const RepositoryId: {
    typeUrl: string;
    encode(message: RepositoryId, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryId;
    fromPartial(object: Partial<RepositoryId>): RepositoryId;
    fromAmino(object: RepositoryIdAmino): RepositoryId;
    toAmino(message: RepositoryId): RepositoryIdAmino;
    fromAminoMsg(object: RepositoryIdAminoMsg): RepositoryId;
    fromProtoMsg(message: RepositoryIdProtoMsg): RepositoryId;
    toProto(message: RepositoryId): Uint8Array;
    toProtoMsg(message: RepositoryId): RepositoryIdProtoMsg;
};
export declare const BaseRepositoryKey: {
    typeUrl: string;
    encode(message: BaseRepositoryKey, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): BaseRepositoryKey;
    fromPartial(object: Partial<BaseRepositoryKey>): BaseRepositoryKey;
    fromAmino(object: BaseRepositoryKeyAmino): BaseRepositoryKey;
    toAmino(message: BaseRepositoryKey): BaseRepositoryKeyAmino;
    fromAminoMsg(object: BaseRepositoryKeyAminoMsg): BaseRepositoryKey;
    fromProtoMsg(message: BaseRepositoryKeyProtoMsg): BaseRepositoryKey;
    toProto(message: BaseRepositoryKey): Uint8Array;
    toProtoMsg(message: BaseRepositoryKey): BaseRepositoryKeyProtoMsg;
};
export declare const RepositoryOwner: {
    typeUrl: string;
    encode(message: RepositoryOwner, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryOwner;
    fromPartial(object: Partial<RepositoryOwner>): RepositoryOwner;
    fromAmino(object: RepositoryOwnerAmino): RepositoryOwner;
    toAmino(message: RepositoryOwner): RepositoryOwnerAmino;
    fromAminoMsg(object: RepositoryOwnerAminoMsg): RepositoryOwner;
    fromProtoMsg(message: RepositoryOwnerProtoMsg): RepositoryOwner;
    toProto(message: RepositoryOwner): Uint8Array;
    toProtoMsg(message: RepositoryOwner): RepositoryOwnerProtoMsg;
};
export declare const IssueIid: {
    typeUrl: string;
    encode(message: IssueIid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IssueIid;
    fromPartial(object: Partial<IssueIid>): IssueIid;
    fromAmino(object: IssueIidAmino): IssueIid;
    toAmino(message: IssueIid): IssueIidAmino;
    fromAminoMsg(object: IssueIidAminoMsg): IssueIid;
    fromProtoMsg(message: IssueIidProtoMsg): IssueIid;
    toProto(message: IssueIid): Uint8Array;
    toProtoMsg(message: IssueIid): IssueIidProtoMsg;
};
export declare const PullRequestIid: {
    typeUrl: string;
    encode(message: PullRequestIid, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PullRequestIid;
    fromPartial(object: Partial<PullRequestIid>): PullRequestIid;
    fromAmino(object: PullRequestIidAmino): PullRequestIid;
    toAmino(message: PullRequestIid): PullRequestIidAmino;
    fromAminoMsg(object: PullRequestIidAminoMsg): PullRequestIid;
    fromProtoMsg(message: PullRequestIidProtoMsg): PullRequestIid;
    toProto(message: PullRequestIid): Uint8Array;
    toProtoMsg(message: PullRequestIid): PullRequestIidProtoMsg;
};
export declare const RepositoryCollaborator: {
    typeUrl: string;
    encode(message: RepositoryCollaborator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryCollaborator;
    fromPartial(object: Partial<RepositoryCollaborator>): RepositoryCollaborator;
    fromAmino(object: RepositoryCollaboratorAmino): RepositoryCollaborator;
    toAmino(message: RepositoryCollaborator): RepositoryCollaboratorAmino;
    fromAminoMsg(object: RepositoryCollaboratorAminoMsg): RepositoryCollaborator;
    fromProtoMsg(message: RepositoryCollaboratorProtoMsg): RepositoryCollaborator;
    toProto(message: RepositoryCollaborator): Uint8Array;
    toProtoMsg(message: RepositoryCollaborator): RepositoryCollaboratorProtoMsg;
};
export declare const RepositoryLabel: {
    typeUrl: string;
    encode(message: RepositoryLabel, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryLabel;
    fromPartial(object: Partial<RepositoryLabel>): RepositoryLabel;
    fromAmino(object: RepositoryLabelAmino): RepositoryLabel;
    toAmino(message: RepositoryLabel): RepositoryLabelAmino;
    fromAminoMsg(object: RepositoryLabelAminoMsg): RepositoryLabel;
    fromProtoMsg(message: RepositoryLabelProtoMsg): RepositoryLabel;
    toProto(message: RepositoryLabel): Uint8Array;
    toProtoMsg(message: RepositoryLabel): RepositoryLabelProtoMsg;
};
export declare const RepositoryRelease: {
    typeUrl: string;
    encode(message: RepositoryRelease, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryRelease;
    fromPartial(object: Partial<RepositoryRelease>): RepositoryRelease;
    fromAmino(object: RepositoryReleaseAmino): RepositoryRelease;
    toAmino(message: RepositoryRelease): RepositoryReleaseAmino;
    fromAminoMsg(object: RepositoryReleaseAminoMsg): RepositoryRelease;
    fromProtoMsg(message: RepositoryReleaseProtoMsg): RepositoryRelease;
    toProto(message: RepositoryRelease): Uint8Array;
    toProtoMsg(message: RepositoryRelease): RepositoryReleaseProtoMsg;
};
export declare const RepositoryBackup: {
    typeUrl: string;
    encode(message: RepositoryBackup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): RepositoryBackup;
    fromPartial(object: Partial<RepositoryBackup>): RepositoryBackup;
    fromAmino(object: RepositoryBackupAmino): RepositoryBackup;
    toAmino(message: RepositoryBackup): RepositoryBackupAmino;
    fromAminoMsg(object: RepositoryBackupAminoMsg): RepositoryBackup;
    fromProtoMsg(message: RepositoryBackupProtoMsg): RepositoryBackup;
    toProto(message: RepositoryBackup): Uint8Array;
    toProtoMsg(message: RepositoryBackup): RepositoryBackupProtoMsg;
};
