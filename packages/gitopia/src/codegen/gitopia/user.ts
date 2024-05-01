import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export interface User {
  creator: string;
  id: bigint;
  name: string;
  username: string;
  usernameGithub: string;
  avatarUrl: string;
  followers: string[];
  following: string[];
  starredRepos: bigint[];
  subscriptions: string;
  bio: string;
  createdAt: bigint;
  updatedAt: bigint;
  verified: boolean;
  pinnedRepos: bigint[];
}
export interface UserProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.User";
  value: Uint8Array;
}
export interface UserAmino {
  creator?: string;
  id?: string;
  name?: string;
  username?: string;
  usernameGithub?: string;
  avatarUrl?: string;
  followers?: string[];
  following?: string[];
  starred_repos?: string[];
  subscriptions?: string;
  bio?: string;
  createdAt?: string;
  updatedAt?: string;
  verified?: boolean;
  pinned_repos?: string[];
}
export interface UserAminoMsg {
  type: "/gitopia.gitopia.gitopia.User";
  value: UserAmino;
}
export interface UserSDKType {
  creator: string;
  id: bigint;
  name: string;
  username: string;
  usernameGithub: string;
  avatarUrl: string;
  followers: string[];
  following: string[];
  starred_repos: bigint[];
  subscriptions: string;
  bio: string;
  createdAt: bigint;
  updatedAt: bigint;
  verified: boolean;
  pinned_repos: bigint[];
}
export interface UserDao {
  userAddress: string;
  daoAddress: string;
}
export interface UserDaoProtoMsg {
  typeUrl: "/gitopia.gitopia.gitopia.UserDao";
  value: Uint8Array;
}
export interface UserDaoAmino {
  userAddress?: string;
  daoAddress?: string;
}
export interface UserDaoAminoMsg {
  type: "/gitopia.gitopia.gitopia.UserDao";
  value: UserDaoAmino;
}
export interface UserDaoSDKType {
  userAddress: string;
  daoAddress: string;
}
function createBaseUser(): User {
  return {
    creator: "",
    id: BigInt(0),
    name: "",
    username: "",
    usernameGithub: "",
    avatarUrl: "",
    followers: [],
    following: [],
    starredRepos: [],
    subscriptions: "",
    bio: "",
    createdAt: BigInt(0),
    updatedAt: BigInt(0),
    verified: false,
    pinnedRepos: []
  };
}
export const User = {
  typeUrl: "/gitopia.gitopia.gitopia.User",
  encode(message: User, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.username !== "") {
      writer.uint32(34).string(message.username);
    }
    if (message.usernameGithub !== "") {
      writer.uint32(42).string(message.usernameGithub);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(50).string(message.avatarUrl);
    }
    for (const v of message.followers) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.following) {
      writer.uint32(66).string(v!);
    }
    writer.uint32(74).fork();
    for (const v of message.starredRepos) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.subscriptions !== "") {
      writer.uint32(82).string(message.subscriptions);
    }
    if (message.bio !== "") {
      writer.uint32(90).string(message.bio);
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(96).int64(message.createdAt);
    }
    if (message.updatedAt !== BigInt(0)) {
      writer.uint32(104).int64(message.updatedAt);
    }
    if (message.verified === true) {
      writer.uint32(112).bool(message.verified);
    }
    writer.uint32(122).fork();
    for (const v of message.pinnedRepos) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  fromJSON(object: any): User {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      name: isSet(object.name) ? String(object.name) : "",
      username: isSet(object.username) ? String(object.username) : "",
      usernameGithub: isSet(object.usernameGithub) ? String(object.usernameGithub) : "",
      avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
      followers: Array.isArray(object?.followers) ? object.followers.map((e: any) => String(e)) : [],
      following: Array.isArray(object?.following) ? object.following.map((e: any) => String(e)) : [],
      starredRepos: Array.isArray(object?.starredRepos) ? object.starredRepos.map((e: any) => BigInt(e.toString())) : [],
      subscriptions: isSet(object.subscriptions) ? String(object.subscriptions) : "",
      bio: isSet(object.bio) ? String(object.bio) : "",
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0),
      updatedAt: isSet(object.updatedAt) ? BigInt(object.updatedAt.toString()) : BigInt(0),
      verified: isSet(object.verified) ? Boolean(object.verified) : false,
      pinnedRepos: Array.isArray(object?.pinnedRepos) ? object.pinnedRepos.map((e: any) => BigInt(e.toString())) : []
    };
  },
  fromPartial(object: Partial<User>): User {
    const message = createBaseUser();
    message.creator = object.creator ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.name = object.name ?? "";
    message.username = object.username ?? "";
    message.usernameGithub = object.usernameGithub ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.followers = object.followers?.map(e => e) || [];
    message.following = object.following?.map(e => e) || [];
    message.starredRepos = object.starredRepos?.map(e => BigInt(e.toString())) || [];
    message.subscriptions = object.subscriptions ?? "";
    message.bio = object.bio ?? "";
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.updatedAt = object.updatedAt !== undefined && object.updatedAt !== null ? BigInt(object.updatedAt.toString()) : BigInt(0);
    message.verified = object.verified ?? false;
    message.pinnedRepos = object.pinnedRepos?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: UserAmino): User {
    const message = createBaseUser();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    }
    if (object.usernameGithub !== undefined && object.usernameGithub !== null) {
      message.usernameGithub = object.usernameGithub;
    }
    if (object.avatarUrl !== undefined && object.avatarUrl !== null) {
      message.avatarUrl = object.avatarUrl;
    }
    message.followers = object.followers?.map(e => e) || [];
    message.following = object.following?.map(e => e) || [];
    message.starredRepos = object.starred_repos?.map(e => BigInt(e)) || [];
    if (object.subscriptions !== undefined && object.subscriptions !== null) {
      message.subscriptions = object.subscriptions;
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = BigInt(object.createdAt);
    }
    if (object.updatedAt !== undefined && object.updatedAt !== null) {
      message.updatedAt = BigInt(object.updatedAt);
    }
    if (object.verified !== undefined && object.verified !== null) {
      message.verified = object.verified;
    }
    message.pinnedRepos = object.pinned_repos?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: User): UserAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.name = message.name === "" ? undefined : message.name;
    obj.username = message.username === "" ? undefined : message.username;
    obj.usernameGithub = message.usernameGithub === "" ? undefined : message.usernameGithub;
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
    if (message.starredRepos) {
      obj.starred_repos = message.starredRepos.map(e => e.toString());
    } else {
      obj.starred_repos = message.starredRepos;
    }
    obj.subscriptions = message.subscriptions === "" ? undefined : message.subscriptions;
    obj.bio = message.bio === "" ? undefined : message.bio;
    obj.createdAt = message.createdAt !== BigInt(0) ? message.createdAt.toString() : undefined;
    obj.updatedAt = message.updatedAt !== BigInt(0) ? message.updatedAt.toString() : undefined;
    obj.verified = message.verified === false ? undefined : message.verified;
    if (message.pinnedRepos) {
      obj.pinned_repos = message.pinnedRepos.map(e => e.toString());
    } else {
      obj.pinned_repos = message.pinnedRepos;
    }
    return obj;
  },
  fromAminoMsg(object: UserAminoMsg): User {
    return User.fromAmino(object.value);
  },
  fromProtoMsg(message: UserProtoMsg): User {
    return User.decode(message.value);
  },
  toProto(message: User): Uint8Array {
    return User.encode(message).finish();
  },
  toProtoMsg(message: User): UserProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.User",
      value: User.encode(message).finish()
    };
  }
};
function createBaseUserDao(): UserDao {
  return {
    userAddress: "",
    daoAddress: ""
  };
}
export const UserDao = {
  typeUrl: "/gitopia.gitopia.gitopia.UserDao",
  encode(message: UserDao, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.userAddress !== "") {
      writer.uint32(10).string(message.userAddress);
    }
    if (message.daoAddress !== "") {
      writer.uint32(18).string(message.daoAddress);
    }
    return writer;
  },
  fromJSON(object: any): UserDao {
    return {
      userAddress: isSet(object.userAddress) ? String(object.userAddress) : "",
      daoAddress: isSet(object.daoAddress) ? String(object.daoAddress) : ""
    };
  },
  fromPartial(object: Partial<UserDao>): UserDao {
    const message = createBaseUserDao();
    message.userAddress = object.userAddress ?? "";
    message.daoAddress = object.daoAddress ?? "";
    return message;
  },
  fromAmino(object: UserDaoAmino): UserDao {
    const message = createBaseUserDao();
    if (object.userAddress !== undefined && object.userAddress !== null) {
      message.userAddress = object.userAddress;
    }
    if (object.daoAddress !== undefined && object.daoAddress !== null) {
      message.daoAddress = object.daoAddress;
    }
    return message;
  },
  toAmino(message: UserDao): UserDaoAmino {
    const obj: any = {};
    obj.userAddress = message.userAddress === "" ? undefined : message.userAddress;
    obj.daoAddress = message.daoAddress === "" ? undefined : message.daoAddress;
    return obj;
  },
  fromAminoMsg(object: UserDaoAminoMsg): UserDao {
    return UserDao.fromAmino(object.value);
  },
  fromProtoMsg(message: UserDaoProtoMsg): UserDao {
    return UserDao.decode(message.value);
  },
  toProto(message: UserDao): Uint8Array {
    return UserDao.encode(message).finish();
  },
  toProtoMsg(message: UserDao): UserDaoProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.UserDao",
      value: UserDao.encode(message).finish()
    };
  }
};