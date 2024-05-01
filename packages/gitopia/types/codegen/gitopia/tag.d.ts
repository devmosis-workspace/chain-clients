import { BinaryWriter } from "../binary";
export interface Tag {
    id: bigint;
    repositoryId: bigint;
    name: string;
    sha: string;
    createdAt: bigint;
    updatedAt: bigint;
}
export interface TagProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Tag";
    value: Uint8Array;
}
export interface TagAmino {
    id?: string;
    repositoryId?: string;
    name?: string;
    sha?: string;
    createdAt?: string;
    updatedAt?: string;
}
export interface TagAminoMsg {
    type: "/gitopia.gitopia.gitopia.Tag";
    value: TagAmino;
}
export interface TagSDKType {
    id: bigint;
    repositoryId: bigint;
    name: string;
    sha: string;
    createdAt: bigint;
    updatedAt: bigint;
}
export declare const Tag: {
    typeUrl: string;
    encode(message: Tag, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Tag;
    fromPartial(object: Partial<Tag>): Tag;
    fromAmino(object: TagAmino): Tag;
    toAmino(message: Tag): TagAmino;
    fromAminoMsg(object: TagAminoMsg): Tag;
    fromProtoMsg(message: TagProtoMsg): Tag;
    toProto(message: Tag): Uint8Array;
    toProtoMsg(message: Tag): TagProtoMsg;
};
