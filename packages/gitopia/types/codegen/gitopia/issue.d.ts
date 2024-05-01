import { PullRequestIid, PullRequestIidAmino, PullRequestIidSDKType } from "./repository";
import { BinaryWriter } from "../binary";
export declare enum Issue_State {
    OPEN = 0,
    CLOSED = 1,
    UNRECOGNIZED = -1
}
export declare const Issue_StateSDKType: typeof Issue_State;
export declare const Issue_StateAmino: typeof Issue_State;
export declare function issue_StateFromJSON(object: any): Issue_State;
export declare function issue_StateToJSON(object: Issue_State): string;
export interface Issue {
    creator: string;
    id: bigint;
    iid: bigint;
    title: string;
    state: Issue_State;
    description: string;
    commentsCount: bigint;
    pullRequests: PullRequestIid[];
    repositoryId: bigint;
    labels: bigint[];
    weight: bigint;
    assignees: string[];
    bounties: bigint[];
    createdAt: bigint;
    updatedAt: bigint;
    closedAt: bigint;
    closedBy: string;
}
export interface IssueProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Issue";
    value: Uint8Array;
}
export interface IssueAmino {
    creator?: string;
    id?: string;
    iid?: string;
    title?: string;
    state?: Issue_State;
    description?: string;
    commentsCount?: string;
    pullRequests?: PullRequestIidAmino[];
    repositoryId?: string;
    labels?: string[];
    weight?: string;
    assignees?: string[];
    bounties?: string[];
    createdAt?: string;
    updatedAt?: string;
    closedAt?: string;
    closedBy?: string;
}
export interface IssueAminoMsg {
    type: "/gitopia.gitopia.gitopia.Issue";
    value: IssueAmino;
}
export interface IssueSDKType {
    creator: string;
    id: bigint;
    iid: bigint;
    title: string;
    state: Issue_State;
    description: string;
    commentsCount: bigint;
    pullRequests: PullRequestIidSDKType[];
    repositoryId: bigint;
    labels: bigint[];
    weight: bigint;
    assignees: string[];
    bounties: bigint[];
    createdAt: bigint;
    updatedAt: bigint;
    closedAt: bigint;
    closedBy: string;
}
export declare const Issue: {
    typeUrl: string;
    encode(message: Issue, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Issue;
    fromPartial(object: Partial<Issue>): Issue;
    fromAmino(object: IssueAmino): Issue;
    toAmino(message: Issue): IssueAmino;
    fromAminoMsg(object: IssueAminoMsg): Issue;
    fromProtoMsg(message: IssueProtoMsg): Issue;
    toProto(message: Issue): Uint8Array;
    toProtoMsg(message: Issue): IssueProtoMsg;
};
