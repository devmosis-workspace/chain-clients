import { BinaryWriter } from "../binary";
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
export declare const Dao: {
    typeUrl: string;
    encode(message: Dao, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Dao;
    fromPartial(object: Partial<Dao>): Dao;
    fromAmino(object: DaoAmino): Dao;
    toAmino(message: Dao): DaoAmino;
    fromAminoMsg(object: DaoAminoMsg): Dao;
    fromProtoMsg(message: DaoProtoMsg): Dao;
    toProto(message: Dao): Uint8Array;
    toProtoMsg(message: Dao): DaoProtoMsg;
};
