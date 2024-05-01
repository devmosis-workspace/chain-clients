import { BinaryWriter } from "../binary";
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
export declare const User: {
    typeUrl: string;
    encode(message: User, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): User;
    fromPartial(object: Partial<User>): User;
    fromAmino(object: UserAmino): User;
    toAmino(message: User): UserAmino;
    fromAminoMsg(object: UserAminoMsg): User;
    fromProtoMsg(message: UserProtoMsg): User;
    toProto(message: User): Uint8Array;
    toProtoMsg(message: User): UserProtoMsg;
};
export declare const UserDao: {
    typeUrl: string;
    encode(message: UserDao, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): UserDao;
    fromPartial(object: Partial<UserDao>): UserDao;
    fromAmino(object: UserDaoAmino): UserDao;
    toAmino(message: UserDao): UserDaoAmino;
    fromAminoMsg(object: UserDaoAminoMsg): UserDao;
    fromProtoMsg(message: UserDaoProtoMsg): UserDao;
    toProto(message: UserDao): Uint8Array;
    toProtoMsg(message: UserDao): UserDaoProtoMsg;
};
