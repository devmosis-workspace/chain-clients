import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface Dao {
  creator: string;
  id: bigint;
  address: string;
  name: string;
  avatarUrl: string;
  followers: string[];
  following: string[];
  teams: bigint[];
  location: string;
  website: string;
  verified: boolean;
  description: string;
  createdAt: bigint;
  updatedAt: bigint;
  pinnedRepos: bigint[];
}
export interface DaoProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.Dao";
  value: Uint8Array;
}
export interface DaoAmino {
  creator?: string;
  id?: string;
  address?: string;
  name?: string;
  avatarUrl?: string;
  followers?: string[];
  following?: string[];
  teams?: string[];
  location?: string;
  website?: string;
  verified?: boolean;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  pinned_repos?: string[];
}
export interface DaoAminoMsg {
  type: "/gitopia.gitopia.gitopia.Dao";
  value: DaoAmino;
}
export interface DaoSDKType {
  creator: string;
  id: bigint;
  address: string;
  name: string;
  avatarUrl: string;
  followers: string[];
  following: string[];
  teams: bigint[];
  location: string;
  website: string;
  verified: boolean;
  description: string;
  createdAt: bigint;
  updatedAt: bigint;
  pinned_repos: bigint[];
}
function createBaseDao(): Dao {
  return {
    creator: "",
    id: BigInt(0),
    address: "",
    name: "",
    avatarUrl: "",
    followers: [],
    following: [],
    teams: [],
    location: "",
    website: "",
    verified: false,
    description: "",
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    pinnedRepos: []
  };
}
export const Dao = {
  typeUrl: "/gitopia.gitopia.gitopia.Dao",
  encode(message: Dao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(42).string(message.avatarUrl);
    }
    for (const v of message.followers) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.following) {
      writer.uint32(58).string(v!);
    }
    writer.uint32(66).fork();
    for (const v of message.teams) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.location !== "") {
      writer.uint32(74).string(message.location);
    }
    if (message.website !== "") {
      writer.uint32(82).string(message.website);
    }
    if (message.verified === true) {
      writer.uint32(88).bool(message.verified);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(104).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(112).int64(message.updatedAt);
    }
    writer.uint32(122).fork();
    for (const v of message.pinnedRepos) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): Dao {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      address: isSet(object.address) ? String(object.address) : "",
      name: isSet(object.name) ? String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      followers: Array.isArray(object?.followers) ? object.followers.map((e: any) => String(e)) : [],
      following: Array.isArray(object?.following) ? object.following.map((e: any) => String(e)) : [],
      teams: Array.isArray(object?.teams) ? object.teams.map((e: any) => BigInt(e.toString())) : [],
      location: isSet(object.location) ? String(object.location) : "",
      website: isSet(object.website) ? String(object.website) : "",
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      description: isSet(object.description) ? String(object.description) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      pinnedRepos: Array.isArray(object?.pinnedRepos) ? object.pinnedRepos.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<Dao>): Dao {
    const message = createBaseDao();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.address = object.address ?? "";
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.followers = object.followers?.map(e => e) || [];
    message.following = object.following?.map(e => e) || [];
    message.teams = object.teams?.map(e => BigInt(e.toString())) || [];
    message.location = object.location ?? "";
    message.website = object.website ?? "";
    message.verified = object.verified ?? false;
    message.description = object.description ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.pinnedRepos = object.pinnedRepos?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: DaoAmino): Dao {
    const message = createBaseDao();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = object.avatarUrl;
    }
    message.followers = object.followers?.map(e => e) || [];
    message.following = object.following?.map(e => e) || [];
    message.teams = object.teams?.map(e => BigInt(e)) || [];
    if (object.location !== undefined && object.location !== null) {
      message.location = object.location;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    message.pinnedRepos = object.pinned_repos?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: Dao): DaoAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.name = message.name === "" ? undefined : message.name;
    obj.avatarUrl = message.avatarUrl === "" ? undefined : message.avatarUrl;
    if (message.followers) {
      obj.followers = message.followers.map(e => e);
    } else {
      obj.followers = message.followers;
    }
    if (message.following) {
      obj.following = message.following.map(e => e);
    } else {
      obj.following = message.following;
    }
    if (message.teams) {
      obj.teams = message.teams.map(e => e.toString());
    } else {
      obj.teams = message.teams;
    }
    obj.location = message.location === "" ? undefined : message.location;
    obj.website = message.website === "" ? undefined : message.website;
    obj.verified = message.verified === false ? undefined : message.verified;
    obj.description = message.description === "" ? undefined : message.description;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    if (message.pinnedRepos) {
      obj.pinned_repos = message.pinnedRepos.map(e => e.toString());
    } else {
      obj.pinned_repos = message.pinnedRepos;
    }
    return obj;
  },
  fromAminoMsg(object: DaoAminoMsg): Dao {
    return Dao.fromAmino(object.value);
  },
  fromProtoMsg(message: DaoProtoMsg): Dao {
    return Dao.decode(message.value);
  },
  toProto(message: Dao): Uint8Array {
    return Dao.encode(message).finish();
  },
  toProtoMsg(message: Dao): DaoProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Dao",
      value: Dao.encode(message).finish()
    };
  }
};