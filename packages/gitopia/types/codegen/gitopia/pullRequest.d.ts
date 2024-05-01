import { IssueIid, IssueIidAmino, IssueIidSDKType } from "./repository";
import { BinaryWriter } from "../binary";
export declare enum PullRequest_State {
    OPEN = 0,
    CLOSED = 1,
    MERGED = 2,
    UNRECOGNIZED = -1
}
export declare const PullRequest_StateSDKType: typeof PullRequest_State;
export declare const PullRequest_StateAmino: typeof PullRequest_State;
export declare function pullRequest_StateFromJSON(object: any): PullRequest_State;
export declare function pullRequest_StateToJSON(object: PullRequest_State): string;
export interface PullRequest {
    creator: string;
    id: bigint;
    iid: bigint;
    title: string;
    state: PullRequest_State;
    description: string;
    locked: boolean;
    commentsCount: bigint;
    issues: IssueIid[];
    labels: bigint[];
    assignees: string[];
    reviewers: string[];
    draft: boolean;
    createdAt: bigint;
    updatedAt: bigint;
    closedAt: bigint;
    closedBy: string;
    mergedAt: bigint;
    mergedBy: string;
    mergeCommitSha: string;
    maintainerCanModify: boolean;
    head?: PullRequestHead;
    base?: PullRequestBase;
}
export interface PullRequestProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PullRequest";
    value: Uint8Array;
}
export interface PullRequestAmino {
    creator?: string;
    id?: string;
    iid?: string;
    title?: string;
    state?: PullRequest_State;
    description?: string;
    locked?: boolean;
    commentsCount?: string;
    issues?: IssueIidAmino[];
    labels?: string[];
    assignees?: string[];
    reviewers?: string[];
    draft?: boolean;
    createdAt?: string;
    updatedAt?: string;
    closedAt?: string;
    closedBy?: string;
    mergedAt?: string;
    mergedBy?: string;
    mergeCommitSha?: string;
    maintainerCanModify?: boolean;
    head?: PullRequestHeadAmino;
    base?: PullRequestBaseAmino;
}
export interface PullRequestAminoMsg {
    type: "/gitopia.gitopia.gitopia.PullRequest";
    value: PullRequestAmino;
}
export interface PullRequestSDKType {
    creator: string;
    id: bigint;
    iid: bigint;
    title: string;
    state: PullRequest_State;
    description: string;
    locked: boolean;
    commentsCount: bigint;
    issues: IssueIidSDKType[];
    labels: bigint[];
    assignees: string[];
    reviewers: string[];
    draft: boolean;
    createdAt: bigint;
    updatedAt: bigint;
    closedAt: bigint;
    closedBy: string;
    mergedAt: bigint;
    mergedBy: string;
    mergeCommitSha: string;
    maintainerCanModify: boolean;
    head?: PullRequestHeadSDKType;
    base?: PullRequestBaseSDKType;
}
export interface PullRequestHead {
    repositoryId: bigint;
    branch: string;
    commitSha: string;
}
export interface PullRequestHeadProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PullRequestHead";
    value: Uint8Array;
}
export interface PullRequestHeadAmino {
    repositoryId?: string;
    branch?: string;
    commitSha?: string;
}
export interface PullRequestHeadAminoMsg {
    type: "/gitopia.gitopia.gitopia.PullRequestHead";
    value: PullRequestHeadAmino;
}
export interface PullRequestHeadSDKType {
    repositoryId: bigint;
    branch: string;
    commitSha: string;
}
export interface PullRequestBase {
    repositoryId: bigint;
    branch: string;
    commitSha: string;
}
export interface PullRequestBaseProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.PullRequestBase";
    value: Uint8Array;
}
export interface PullRequestBaseAmino {
    repositoryId?: string;
    branch?: string;
    commitSha?: string;
}
export interface PullRequestBaseAminoMsg {
    type: "/gitopia.gitopia.gitopia.PullRequestBase";
    value: PullRequestBaseAmino;
}
export interface PullRequestBaseSDKType {
    repositoryId: bigint;
    branch: string;
    commitSha: string;
}
export declare const PullRequest: {
    typeUrl: string;
    encode(message: PullRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PullRequest;
    fromPartial(object: Partial<PullRequest>): PullRequest;
    fromAmino(object: PullRequestAmino): PullRequest;
    toAmino(message: PullRequest): PullRequestAmino;
    fromAminoMsg(object: PullRequestAminoMsg): PullRequest;
    fromProtoMsg(message: PullRequestProtoMsg): PullRequest;
    toProto(message: PullRequest): Uint8Array;
    toProtoMsg(message: PullRequest): PullRequestProtoMsg;
};
export declare const PullRequestHead: {
    typeUrl: string;
    encode(message: PullRequestHead, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PullRequestHead;
    fromPartial(object: Partial<PullRequestHead>): PullRequestHead;
    fromAmino(object: PullRequestHeadAmino): PullRequestHead;
    toAmino(message: PullRequestHead): PullRequestHeadAmino;
    fromAminoMsg(object: PullRequestHeadAminoMsg): PullRequestHead;
    fromProtoMsg(message: PullRequestHeadProtoMsg): PullRequestHead;
    toProto(message: PullRequestHead): Uint8Array;
    toProtoMsg(message: PullRequestHead): PullRequestHeadProtoMsg;
};
export declare const PullRequestBase: {
    typeUrl: string;
    encode(message: PullRequestBase, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): PullRequestBase;
    fromPartial(object: Partial<PullRequestBase>): PullRequestBase;
    fromAmino(object: PullRequestBaseAmino): PullRequestBase;
    toAmino(message: PullRequestBase): PullRequestBaseAmino;
    fromAminoMsg(object: PullRequestBaseAminoMsg): PullRequestBase;
    fromProtoMsg(message: PullRequestBaseProtoMsg): PullRequestBase;
    toProto(message: PullRequestBase): Uint8Array;
    toProtoMsg(message: PullRequestBase): PullRequestBaseProtoMsg;
};
