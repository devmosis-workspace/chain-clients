import { OwnerType, ownerTypeFromJSON } from "./whois";
import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum RepositoryCollaborator_Permission {
  READ = 0,
  TRIAGE = 1,
  WRITE = 2,
  MAINTAIN = 3,
  ADMIN = 4,
  UNRECOGNIZED = -1,
}
export const RepositoryCollaborator_PermissionSDKType = RepositoryCollaborator_Permission;
export const RepositoryCollaborator_PermissionAmino = RepositoryCollaborator_Permission;
export function repositoryCollaborator_PermissionFromJSON(object: any): RepositoryCollaborator_Permission {
  switch (object) {
    case 0:
    case "READ":
      return RepositoryCollaborator_Permission.READ;
    case 1:
    case "TRIAGE":
      return RepositoryCollaborator_Permission.TRIAGE;
    case 2:
    case "WRITE":
      return RepositoryCollaborator_Permission.WRITE;
    case 3:
    case "MAINTAIN":
      return RepositoryCollaborator_Permission.MAINTAIN;
    case 4:
    case "ADMIN":
      return RepositoryCollaborator_Permission.ADMIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RepositoryCollaborator_Permission.UNRECOGNIZED;
  }
}
export function repositoryCollaborator_PermissionToJSON(object: RepositoryCollaborator_Permission): string {
  switch (object) {
    case RepositoryCollaborator_Permission.READ:
      return "READ";
    case RepositoryCollaborator_Permission.TRIAGE:
      return "TRIAGE";
    case RepositoryCollaborator_Permission.WRITE:
      return "WRITE";
    case RepositoryCollaborator_Permission.MAINTAIN:
      return "MAINTAIN";
    case RepositoryCollaborator_Permission.ADMIN:
      return "ADMIN";
    case RepositoryCollaborator_Permission.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum RepositoryBackup_Store {
  IPFS = 0,
  ARWEAVE = 1,
  UNRECOGNIZED = -1,
}
export const RepositoryBackup_StoreSDKType = RepositoryBackup_Store;
export const RepositoryBackup_StoreAmino = RepositoryBackup_Store;
export function repositoryBackup_StoreFromJSON(object: any): RepositoryBackup_Store {
  switch (object) {
    case 0:
    case "IPFS":
      return RepositoryBackup_Store.IPFS;
    case 1:
    case "ARWEAVE":
      return RepositoryBackup_Store.ARWEAVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RepositoryBackup_Store.UNRECOGNIZED;
  }
}
export function repositoryBackup_StoreToJSON(object: RepositoryBackup_Store): string {
  switch (object) {
    case RepositoryBackup_Store.IPFS:
      return "IPFS";
    case RepositoryBackup_Store.ARWEAVE:
      return "ARWEAVE";
    case RepositoryBackup_Store.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseRepository(): Repository {
  return {
    creator: "",
    id: BigInt(0),
    name: "",
    owner: undefined,
    description: "",
    forks: [],
    subscribers: "",
    commits: "",
    issuesCount: BigInt(0),
    pullsCount: BigInt(0),
    labels: [],
    labelsCount: BigInt(0),
    releases: [],
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    pushedAt: BigInt(0),
    stargazers: [],
    archived: false,
    license: "",
    defaultBranch: "",
    parent: BigInt(0),
    fork: false,
    collaborators: [],
    allowForking: false,
    backups: [],
    enableArweaveBackup: false
  };
}
export const Repository = {
  typeUrl: "/gitopia.gitopia.gitopia.Repository",
  encode(message: Repository, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.owner !== undefined) {
      RepositoryOwner.encode(message.owner, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    writer.uint32(50).fork();
    for (const v of message.forks) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.subscribers !== "") {
      writer.uint32(58).string(message.subscribers);
    }
    if (message.commits !== "") {
      writer.uint32(66).string(message.commits);
    }
    if (message.issuesCount !== BigInt(0)) {
      writer.uint32(72).uint64(message.issuesCount);
    }
    if (message.pullsCount !== BigInt(0)) {
      writer.uint32(80).uint64(message.pullsCount);
    }
    for (const v of message.labels) {
      RepositoryLabel.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.labelsCount !== BigInt(0)) {
      writer.uint32(96).uint64(message.labelsCount);
    }
    for (const v of message.releases) {
      RepositoryRelease.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(112).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(120).int64(message.updatedAt);
    }
    if (message.pushedAt !== BigInt(0)) {
      writer.uint32(128).int64(message.pushedAt);
    }
    writer.uint32(138).fork();
    for (const v of message.stargazers) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.archived === true) {
      writer.uint32(144).bool(message.archived);
    }
    if (message.license !== "") {
      writer.uint32(154).string(message.license);
    }
    if (message.defaultBranch !== "") {
      writer.uint32(162).string(message.defaultBranch);
    }
    if (message.parent !== BigInt(0)) {
      writer.uint32(168).uint64(message.parent);
    }
    if (message.fork === true) {
      writer.uint32(176).bool(message.fork);
    }
    for (const v of message.collaborators) {
      RepositoryCollaborator.encode(v!, writer.uint32(186).fork()).ldelim();
    }
    if (message.allowForking === true) {
      writer.uint32(192).bool(message.allowForking);
    }
    for (const v of message.backups) {
      RepositoryBackup.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.enableArweaveBackup === true) {
      writer.uint32(208).bool(message.enableArweaveBackup);
    }
    return writer;
  },
  fromJSON(object: any): Repository {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      owner: isSet(object.owner) ? RepositoryOwner.fromJSON(object.owner) : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      forks: Array.isArray(object?.forks) ? object.forks.map((e: any) => BigInt(e.toString())) : [],
      subscribers: isSet(object.subscribers) ? String(object.subscribers) : "",
      commits: isSet(object.commits) ? String(object.commits) : "",
      issuesCount: isSet(object.issuesCount) ? BigInt(object.issuesCount.toString()) : BigInt(0),
      pullsCount: isSet(object.pullsCount) ? BigInt(object.pullsCount.toString()) : BigInt(0),
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => RepositoryLabel.fromJSON(e)) : [],
      labelsCount: isSet(object.labelsCount) ? BigInt(object.labelsCount.toString()) : BigInt(0),
      releases: Array.isArray(object?.releases) ? object.releases.map((e: any) => RepositoryRelease.fromJSON(e)) : [],
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      pushedAt: isSet(object.pushedAt) ? BigInt(object.pushedAt.toString()) : BigInt(0),
      stargazers: Array.isArray(object?.stargazers) ? object.stargazers.map((e: any) => BigInt(e.toString())) : [],
      archived: isSet(object.archived) ? Boolean(object.archived) : false,
      license: isSet(object.license) ? String(object.license) : "",
      defaultBranch: isSet(object.defaultBranch) ? String(object.defaultBranch) : "",
      parent: isSet(object.parent) ? BigInt(object.parent.toString()) : BigInt(0),
      fork: isSet(object.fork) ? Boolean(object.fork) : false,
      collaborators: Array.isArray(object?.collaborators) ? object.collaborators.map((e: any) => RepositoryCollaborator.fromJSON(e)) : [],
      allowForking: isSet(object.allowForking) ? Boolean(object.allowForking) : false,
      backups: Array.isArray(object?.backups) ? object.backups.map((e: any) => RepositoryBackup.fromJSON(e)) : [],
      enableArweaveBackup: isSet(object.enableArweaveBackup) ? Boolean(object.enableArweaveBackup) : false
    };
  },
  fromPartial(object: Partial<Repository>): Repository {
    const message = createBaseRepository();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.owner = object.owner !== undefined && object.owner !== null ? RepositoryOwner.fromPartial(object.owner) : undefined;
    message.description = object.description ?? "";
    message.forks = object.forks?.map(e => BigInt(e.toString())) || [];
    message.subscribers = object.subscribers ?? "";
    message.commits = object.commits ?? "";
    message.issuesCount = object.issuesCount !== undefined && object.issuesCount !== null ? BigInt(object.issuesCount.toString()) : BigInt(0);
    message.pullsCount = object.pullsCount !== undefined && object.pullsCount !== null ? BigInt(object.pullsCount.toString()) : BigInt(0);
    message.labels = object.labels?.map(e => RepositoryLabel.fromPartial(e)) || [];
    message.labelsCount = object.labelsCount !== undefined && object.labelsCount !== null ? BigInt(object.labelsCount.toString()) : BigInt(0);
    message.releases = object.releases?.map(e => RepositoryRelease.fromPartial(e)) || [];
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.pushedAt = object.pushedAt !== undefined && object.pushedAt !== null ? BigInt(object.pushedAt.toString()) : BigInt(0);
    message.stargazers = object.stargazers?.map(e => BigInt(e.toString())) || [];
    message.archived = object.archived ?? false;
    message.license = object.license ?? "";
    message.defaultBranch = object.defaultBranch ?? "";
    message.parent = object.parent !== undefined && object.parent !== null ? BigInt(object.parent.toString()) : BigInt(0);
    message.fork = object.fork ?? false;
    message.collaborators = object.collaborators?.map(e => RepositoryCollaborator.fromPartial(e)) || [];
    message.allowForking = object.allowForking ?? false;
    message.backups = object.backups?.map(e => RepositoryBackup.fromPartial(e)) || [];
    message.enableArweaveBackup = object.enableArweaveBackup ?? false;
    return message;
  },
  fromAmino(object: RepositoryAmino): Repository {
    const message = createBaseRepository();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = RepositoryOwner.fromAmino(object.owner);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.forks = object.forks?.map(e => BigInt(e)) || [];
    if (object.subscribers !== undefined && object.subscribers !== null) {
      message.subscribers = object.subscribers;
    }
    if (object.commits !== undefined && object.commits !== null) {
      message.commits = object.commits;
    }
    if (object.issuesCount !== undefined && object.issuesCount !== null) {
      message.issuesCount = BigInt(object.issuesCount);
    }
    if (object.pullsCount !== undefined && object.pullsCount !== null) {
      message.pullsCount = BigInt(object.pullsCount);
    }
    message.labels = object.labels?.map(e => RepositoryLabel.fromAmino(e)) || [];
    if (object.labelsCount !== undefined && object.labelsCount !== null) {
      message.labelsCount = BigInt(object.labelsCount);
    }
    message.releases = object.releases?.map(e => RepositoryRelease.fromAmino(e)) || [];
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.pushedAt !== undefined && object.pushedAt !== null) {
      message.pushedAt = BigInt(object.pushedAt);
    }
    message.stargazers = object.stargazers?.map(e => BigInt(e)) || [];
    if (object.archived !== undefined && object.archived !== null) {
      message.archived = object.archived;
    }
    if (object.license !== undefined && object.license !== null) {
      message.license = object.license;
    }
    if (object.defaultBranch !== undefined && object.defaultBranch !== null) {
      message.defaultBranch = object.defaultBranch;
    }
    if (object.parent !== undefined && object.parent !== null) {
      message.parent = BigInt(object.parent);
    }
    if (object.fork !== undefined && object.fork !== null) {
      message.fork = object.fork;
    }
    message.collaborators = object.collaborators?.map(e => RepositoryCollaborator.fromAmino(e)) || [];
    if (object.allowForking !== undefined && object.allowForking !== null) {
      message.allowForking = object.allowForking;
    }
    message.backups = object.backups?.map(e => RepositoryBackup.fromAmino(e)) || [];
    if (object.enableArweaveBackup !== undefined && object.enableArweaveBackup !== null) {
      message.enableArweaveBackup = object.enableArweaveBackup;
    }
    return message;
  },
  toAmino(message: Repository): RepositoryAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.owner = message.owner ? RepositoryOwner.toAmino(message.owner) : undefined;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.forks) {
      obj.forks = message.forks.map(e => e.toString());
    } else {
      obj.forks = message.forks;
    }
    obj.subscribers = message.subscribers === "" ? undefined : message.subscribers;
    obj.commits = message.commits === "" ? undefined : message.commits;
    obj.issuesCount = message.issuesCount !== BigInt(0) ? message.issuesCount.toString() : undefined;
    obj.pullsCount = message.pullsCount !== BigInt(0) ? message.pullsCount.toString() : undefined;
    if (message.labels) {
      obj.labels = message.labels.map(e => e ? RepositoryLabel.toAmino(e) : undefined);
    } else {
      obj.labels = message.labels;
    }
    obj.labelsCount = message.labelsCount !== BigInt(0) ? message.labelsCount.toString() : undefined;
    if (message.releases) {
      obj.releases = message.releases.map(e => e ? RepositoryRelease.toAmino(e) : undefined);
    } else {
      obj.releases = message.releases;
    }
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.pushedAt = message.pushedAt !== BigInt(0) ? message.pushedAt.toString() : undefined;
    if (message.stargazers) {
      obj.stargazers = message.stargazers.map(e => e.toString());
    } else {
      obj.stargazers = message.stargazers;
    }
    obj.archived = message.archived === false ? undefined : message.archived;
    obj.license = message.license === "" ? undefined : message.license;
    obj.defaultBranch = message.defaultBranch === "" ? undefined : message.defaultBranch;
    obj.parent = message.parent !== BigInt(0) ? message.parent.toString() : undefined;
    obj.fork = message.fork === false ? undefined : message.fork;
    if (message.collaborators) {
      obj.collaborators = message.collaborators.map(e => e ? RepositoryCollaborator.toAmino(e) : undefined);
    } else {
      obj.collaborators = message.collaborators;
    }
    obj.allowForking = message.allowForking === false ? undefined : message.allowForking;
    if (message.backups) {
      obj.backups = message.backups.map(e => e ? RepositoryBackup.toAmino(e) : undefined);
    } else {
      obj.backups = message.backups;
    }
    obj.enableArweaveBackup = message.enableArweaveBackup === false ? undefined : message.enableArweaveBackup;
    return obj;
  },
  fromAminoMsg(object: RepositoryAminoMsg): Repository {
    return Repository.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryProtoMsg): Repository {
    return Repository.decode(message.value);
  },
  toProto(message: Repository): Uint8Array {
    return Repository.encode(message).finish();
  },
  toProtoMsg(message: Repository): RepositoryProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Repository",
      value: Repository.encode(message).finish()
    };
  }
};
function createBaseRepositoryId(): RepositoryId {
  return {
    id: "",
    name: ""
  };
}
export const RepositoryId = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryId",
  encode(message: RepositoryId, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryId {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<RepositoryId>): RepositoryId {
    const message = createBaseRepositoryId();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: RepositoryIdAmino): RepositoryId {
    const message = createBaseRepositoryId();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: RepositoryId): RepositoryIdAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: RepositoryIdAminoMsg): RepositoryId {
    return RepositoryId.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryIdProtoMsg): RepositoryId {
    return RepositoryId.decode(message.value);
  },
  toProto(message: RepositoryId): Uint8Array {
    return RepositoryId.encode(message).finish();
  },
  toProtoMsg(message: RepositoryId): RepositoryIdProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryId",
      value: RepositoryId.encode(message).finish()
    };
  }
};
function createBaseBaseRepositoryKey(): BaseRepositoryKey {
  return {
    id: BigInt(0),
    address: "",
    name: ""
  };
}
export const BaseRepositoryKey = {
  typeUrl: "/gitopia.gitopia.gitopia.BaseRepositoryKey",
  encode(message: BaseRepositoryKey, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): BaseRepositoryKey {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<BaseRepositoryKey>): BaseRepositoryKey {
    const message = createBaseBaseRepositoryKey();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: BaseRepositoryKeyAmino): BaseRepositoryKey {
    const message = createBaseBaseRepositoryKey();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: BaseRepositoryKey): BaseRepositoryKeyAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: BaseRepositoryKeyAminoMsg): BaseRepositoryKey {
    return BaseRepositoryKey.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseRepositoryKeyProtoMsg): BaseRepositoryKey {
    return BaseRepositoryKey.decode(message.value);
  },
  toProto(message: BaseRepositoryKey): Uint8Array {
    return BaseRepositoryKey.encode(message).finish();
  },
  toProtoMsg(message: BaseRepositoryKey): BaseRepositoryKeyProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.BaseRepositoryKey",
      value: BaseRepositoryKey.encode(message).finish()
    };
  }
};
function createBaseRepositoryOwner(): RepositoryOwner {
  return {
    id: "",
    type: 0
  };
}
export const RepositoryOwner = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryOwner",
  encode(message: RepositoryOwner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryOwner {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      type: isSet(object.type) ? ownerTypeFromJSON(object.type) : -1
    };
  },
  fromPartial(object: Partial<RepositoryOwner>): RepositoryOwner {
    const message = createBaseRepositoryOwner();
    message.id = object.id ?? "";
    message.type = object.type ?? 0;
    return message;
  },
  fromAmino(object: RepositoryOwnerAmino): RepositoryOwner {
    const message = createBaseRepositoryOwner();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toAmino(message: RepositoryOwner): RepositoryOwnerAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.type = message.type === 0 ? undefined : message.type;
    return obj;
  },
  fromAminoMsg(object: RepositoryOwnerAminoMsg): RepositoryOwner {
    return RepositoryOwner.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryOwnerProtoMsg): RepositoryOwner {
    return RepositoryOwner.decode(message.value);
  },
  toProto(message: RepositoryOwner): Uint8Array {
    return RepositoryOwner.encode(message).finish();
  },
  toProtoMsg(message: RepositoryOwner): RepositoryOwnerProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryOwner",
      value: RepositoryOwner.encode(message).finish()
    };
  }
};
function createBaseIssueIid(): IssueIid {
  return {
    iid: BigInt(0),
    id: BigInt(0)
  };
}
export const IssueIid = {
  typeUrl: "/gitopia.gitopia.gitopia.IssueIid",
  encode(message: IssueIid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iid !== BigInt(0)) {
      writer.uint32(8).uint64(message.iid);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): IssueIid {
    return {
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<IssueIid>): IssueIid {
    const message = createBaseIssueIid();
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: IssueIidAmino): IssueIid {
    const message = createBaseIssueIid();
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: IssueIid): IssueIidAmino {
    const obj: any = {};
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IssueIidAminoMsg): IssueIid {
    return IssueIid.fromAmino(object.value);
  },
  fromProtoMsg(message: IssueIidProtoMsg): IssueIid {
    return IssueIid.decode(message.value);
  },
  toProto(message: IssueIid): Uint8Array {
    return IssueIid.encode(message).finish();
  },
  toProtoMsg(message: IssueIid): IssueIidProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.IssueIid",
      value: IssueIid.encode(message).finish()
    };
  }
};
function createBasePullRequestIid(): PullRequestIid {
  return {
    iid: BigInt(0),
    id: BigInt(0)
  };
}
export const PullRequestIid = {
  typeUrl: "/gitopia.gitopia.gitopia.PullRequestIid",
  encode(message: PullRequestIid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iid !== BigInt(0)) {
      writer.uint32(8).uint64(message.iid);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): PullRequestIid {
    return {
      iid: isSet(object.iid) ? BigInt(object.iid.toString()) : BigInt(0),
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<PullRequestIid>): PullRequestIid {
    const message = createBasePullRequestIid();
    message.iid = object.iid !== undefined && object.iid !== null ? BigInt(object.iid.toString()) : BigInt(0);
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: PullRequestIidAmino): PullRequestIid {
    const message = createBasePullRequestIid();
    if (object.iid !== undefined && object.iid !== null) {
      message.iid = BigInt(object.iid);
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    return message;
  },
  toAmino(message: PullRequestIid): PullRequestIidAmino {
    const obj: any = {};
    obj.iid = message.iid !== BigInt(0) ? message.iid.toString() : undefined;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PullRequestIidAminoMsg): PullRequestIid {
    return PullRequestIid.fromAmino(object.value);
  },
  fromProtoMsg(message: PullRequestIidProtoMsg): PullRequestIid {
    return PullRequestIid.decode(message.value);
  },
  toProto(message: PullRequestIid): Uint8Array {
    return PullRequestIid.encode(message).finish();
  },
  toProtoMsg(message: PullRequestIid): PullRequestIidProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.PullRequestIid",
      value: PullRequestIid.encode(message).finish()
    };
  }
};
function createBaseRepositoryCollaborator(): RepositoryCollaborator {
  return {
    id: "",
    permission: 0
  };
}
export const RepositoryCollaborator = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryCollaborator",
  encode(message: RepositoryCollaborator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.permission !== 0) {
      writer.uint32(16).int32(message.permission);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryCollaborator {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      permission: isSet(object.permission) ? repositoryCollaborator_PermissionFromJSON(object.permission) : -1
    };
  },
  fromPartial(object: Partial<RepositoryCollaborator>): RepositoryCollaborator {
    const message = createBaseRepositoryCollaborator();
    message.id = object.id ?? "";
    message.permission = object.permission ?? 0;
    return message;
  },
  fromAmino(object: RepositoryCollaboratorAmino): RepositoryCollaborator {
    const message = createBaseRepositoryCollaborator();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.permission !== undefined && object.permission !== null) {
      message.permission = object.permission;
    }
    return message;
  },
  toAmino(message: RepositoryCollaborator): RepositoryCollaboratorAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.permission = message.permission === 0 ? undefined : message.permission;
    return obj;
  },
  fromAminoMsg(object: RepositoryCollaboratorAminoMsg): RepositoryCollaborator {
    return RepositoryCollaborator.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryCollaboratorProtoMsg): RepositoryCollaborator {
    return RepositoryCollaborator.decode(message.value);
  },
  toProto(message: RepositoryCollaborator): Uint8Array {
    return RepositoryCollaborator.encode(message).finish();
  },
  toProtoMsg(message: RepositoryCollaborator): RepositoryCollaboratorProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryCollaborator",
      value: RepositoryCollaborator.encode(message).finish()
    };
  }
};
function createBaseRepositoryLabel(): RepositoryLabel {
  return {
    id: BigInt(0),
    name: "",
    color: "",
    description: ""
  };
}
export const RepositoryLabel = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryLabel",
  encode(message: RepositoryLabel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.color !== "") {
      writer.uint32(26).string(message.color);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryLabel {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      color: isSet(object.color) ? String(object.color) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<RepositoryLabel>): RepositoryLabel {
    const message = createBaseRepositoryLabel();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.color = object.color ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: RepositoryLabelAmino): RepositoryLabel {
    const message = createBaseRepositoryLabel();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
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
  toAmino(message: RepositoryLabel): RepositoryLabelAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.color = message.color === "" ? undefined : message.color;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: RepositoryLabelAminoMsg): RepositoryLabel {
    return RepositoryLabel.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryLabelProtoMsg): RepositoryLabel {
    return RepositoryLabel.decode(message.value);
  },
  toProto(message: RepositoryLabel): Uint8Array {
    return RepositoryLabel.encode(message).finish();
  },
  toProtoMsg(message: RepositoryLabel): RepositoryLabelProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryLabel",
      value: RepositoryLabel.encode(message).finish()
    };
  }
};
function createBaseRepositoryRelease(): RepositoryRelease {
  return {
    id: BigInt(0),
    tagName: ""
  };
}
export const RepositoryRelease = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryRelease",
  encode(message: RepositoryRelease, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.tagName !== "") {
      writer.uint32(18).string(message.tagName);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryRelease {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      tagName: isSet(object.tagName) ? String(object.tagName) : ""
    };
  },
  fromPartial(object: Partial<RepositoryRelease>): RepositoryRelease {
    const message = createBaseRepositoryRelease();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.tagName = object.tagName ?? "";
    return message;
  },
  fromAmino(object: RepositoryReleaseAmino): RepositoryRelease {
    const message = createBaseRepositoryRelease();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.tagName !== undefined && object.tagName !== null) {
      message.tagName = object.tagName;
    }
    return message;
  },
  toAmino(message: RepositoryRelease): RepositoryReleaseAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.tagName = message.tagName === "" ? undefined : message.tagName;
    return obj;
  },
  fromAminoMsg(object: RepositoryReleaseAminoMsg): RepositoryRelease {
    return RepositoryRelease.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryReleaseProtoMsg): RepositoryRelease {
    return RepositoryRelease.decode(message.value);
  },
  toProto(message: RepositoryRelease): Uint8Array {
    return RepositoryRelease.encode(message).finish();
  },
  toProtoMsg(message: RepositoryRelease): RepositoryReleaseProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryRelease",
      value: RepositoryRelease.encode(message).finish()
    };
  }
};
function createBaseRepositoryBackup(): RepositoryBackup {
  return {
    store: 0,
    refs: []
  };
}
export const RepositoryBackup = {
  typeUrl: "/gitopia.gitopia.gitopia.RepositoryBackup",
  encode(message: RepositoryBackup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.store !== 0) {
      writer.uint32(8).int32(message.store);
    }
    for (const v of message.refs) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RepositoryBackup {
    return {
      store: isSet(object.store) ? repositoryBackup_StoreFromJSON(object.store) : -1,
      refs: Array.isArray(object?.refs) ? object.refs.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RepositoryBackup>): RepositoryBackup {
    const message = createBaseRepositoryBackup();
    message.store = object.store ?? 0;
    message.refs = object.refs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RepositoryBackupAmino): RepositoryBackup {
    const message = createBaseRepositoryBackup();
    if (object.store !== undefined && object.store !== null) {
      message.store = object.store;
    }
    message.refs = object.refs?.map(e => e) || [];
    return message;
  },
  toAmino(message: RepositoryBackup): RepositoryBackupAmino {
    const obj: any = {};
    obj.store = message.store === 0 ? undefined : message.store;
    if (message.refs) {
      obj.refs = message.refs.map(e => e);
    } else {
      obj.refs = message.refs;
    }
    return obj;
  },
  fromAminoMsg(object: RepositoryBackupAminoMsg): RepositoryBackup {
    return RepositoryBackup.fromAmino(object.value);
  },
  fromProtoMsg(message: RepositoryBackupProtoMsg): RepositoryBackup {
    return RepositoryBackup.decode(message.value);
  },
  toProto(message: RepositoryBackup): Uint8Array {
    return RepositoryBackup.encode(message).finish();
  },
  toProtoMsg(message: RepositoryBackup): RepositoryBackupProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.RepositoryBackup",
      value: RepositoryBackup.encode(message).finish()
    };
  }
};