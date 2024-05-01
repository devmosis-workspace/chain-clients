import { Attachment, AttachmentAmino, AttachmentSDKType } from "./attachment";
import { Reaction, ReactionAmino, ReactionSDKType } from "./reaction";
import { BinaryWriter } from "../binary";
export declare enum CommentType {
    COMMENT_TYPE_NONE = 0,
    COMMENT_TYPE_REPLY = 1,
    COMMENT_TYPE_ADD_LABELS = 2,
    COMMENT_TYPE_REMOVE_LABELS = 3,
    COMMENT_TYPE_ADD_ASSIGNEES = 4,
    COMMENT_TYPE_REMOVE_ASSIGNEES = 5,
    COMMENT_TYPE_ADD_REVIEWERS = 6,
    COMMENT_TYPE_REMOVE_REVIEWERS = 7,
    COMMENT_TYPE_MODIFIED_TITLE = 8,
    COMMENT_TYPE_MODIFIED_DESCRIPTION = 9,
    COMMENT_TYPE_ISSUE_CLOSED = 10,
    COMMENT_TYPE_ISSUE_OPENED = 11,
    COMMENT_TYPE_PULL_REQUEST_CLOSED = 12,
    COMMENT_TYPE_PULL_REQUEST_OPENED = 13,
    COMMENT_TYPE_PULL_REQUEST_MERGED = 14,
    COMMENT_TYPE_REVIEW = 15,
    COMMENT_TYPE_ADD_BOUNTY = 16,
    COMMENT_TYPE_MODIFIED_BOUNTY = 17,
    COMMENT_TYPE_CLOSED_BOUNTY = 18,
    UNRECOGNIZED = -1
}
export declare const CommentTypeSDKType: typeof CommentType;
export declare const CommentTypeAmino: typeof CommentType;
export declare function commentTypeFromJSON(object: any): CommentType;
export declare function commentTypeToJSON(object: CommentType): string;
export declare enum CommentParent {
    COMMENT_PARENT_NONE = 0,
    COMMENT_PARENT_ISSUE = 1,
    COMMENT_PARENT_PULL_REQUEST = 2,
    UNRECOGNIZED = -1
}
export declare const CommentParentSDKType: typeof CommentParent;
export declare const CommentParentAmino: typeof CommentParent;
export declare function commentParentFromJSON(object: any): CommentParent;
export declare function commentParentToJSON(object: CommentParent): string;
export interface Comment {
    creator: string;
    id: bigint;
    repositoryId: bigint;
    parentIid: bigint;
    parent: CommentParent;
    commentIid: bigint;
    body: string;
    attachments: Attachment[];
    diffHunk: string;
    path: string;
    position: bigint;
    system: boolean;
    authorAssociation: string;
    createdAt: bigint;
    updatedAt: bigint;
    commentType: CommentType;
    resolved: boolean;
    replies: bigint[];
    reactions: Reaction[];
    hidden: boolean;
}
export interface CommentProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Comment";
    value: Uint8Array;
}
export interface CommentAmino {
    creator?: string;
    id?: string;
    repositoryId?: string;
    parentIid?: string;
    parent?: CommentParent;
    commentIid?: string;
    body?: string;
    attachments?: AttachmentAmino[];
    diffHunk?: string;
    path?: string;
    position?: string;
    system?: boolean;
    authorAssociation?: string;
    createdAt?: string;
    updatedAt?: string;
    commentType?: CommentType;
    resolved?: boolean;
    replies?: string[];
    reactions?: ReactionAmino[];
    hidden?: boolean;
}
export interface CommentAminoMsg {
    type: "/gitopia.gitopia.gitopia.Comment";
    value: CommentAmino;
}
export interface CommentSDKType {
    creator: string;
    id: bigint;
    repositoryId: bigint;
    parentIid: bigint;
    parent: CommentParent;
    commentIid: bigint;
    body: string;
    attachments: AttachmentSDKType[];
    diffHunk: string;
    path: string;
    position: bigint;
    system: boolean;
    authorAssociation: string;
    createdAt: bigint;
    updatedAt: bigint;
    commentType: CommentType;
    resolved: boolean;
    replies: bigint[];
    reactions: ReactionSDKType[];
    hidden: boolean;
}
export declare const Comment: {
    typeUrl: string;
    encode(message: Comment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Comment;
    fromPartial(object: Partial<Comment>): Comment;
    fromAmino(object: CommentAmino): Comment;
    toAmino(message: Comment): CommentAmino;
    fromAminoMsg(object: CommentAminoMsg): Comment;
    fromProtoMsg(message: CommentProtoMsg): Comment;
    toProto(message: Comment): Uint8Array;
    toProtoMsg(message: Comment): CommentProtoMsg;
};
