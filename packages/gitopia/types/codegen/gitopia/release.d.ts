import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { BinaryWriter } from "../binary";
export interface Release {
    creator: string;
    id: bigint;
    repositoryId: bigint;
    tagName: string;
    target: string;
    name: string;
    description: string;
    attachments: Attachment[];
    draft: boolean;
    preRelease: boolean;
    isTag: boolean;
    createdAt: bigint;
    updatedAt: bigint;
    publishedAt: bigint;
}
export interface ReleaseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Release";
    value: Uint8Array;
}
export interface ReleaseAmino {
    creator?: string;
    id?: string;
    repositoryId?: string;
    tagName?: string;
    target?: string;
    name?: string;
    description?: string;
    attachments?: AttachmentAmino[];
    draft?: boolean;
    preRelease?: boolean;
    isTag?: boolean;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
}
export interface ReleaseAminoMsg {
    type: "/gitopia.gitopia.gitopia.Release";
    value: ReleaseAmino;
}
export interface ReleaseSDKType {
    creator: string;
    id: bigint;
    repositoryId: bigint;
    tagName: string;
    target: string;
    name: string;
    description: string;
    attachments: AttachmentSDKType[];
    draft: boolean;
    preRelease: boolean;
    isTag: boolean;
    createdAt: bigint;
    updatedAt: bigint;
    publishedAt: bigint;
}
export declare const Release: {
    typeUrl: string;
    encode(message: Release, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Release;
    fromPartial(object: Partial<Release>): Release;
    fromAmino(object: ReleaseAmino): Release;
    toAmino(message: Release): ReleaseAmino;
    fromAminoMsg(object: ReleaseAminoMsg): Release;
    fromProtoMsg(message: ReleaseProtoMsg): Release;
    toProto(message: Release): Uint8Array;
    toProtoMsg(message: Release): ReleaseProtoMsg;
};
