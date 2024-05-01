import { BinaryWriter } from "../binary";
export declare enum TaskType {
    UNKNOWN = 0,
    CREATE_USER = 1,
    CREATE_NON_EMPTY_REPO = 2,
    CREATE_ISSUE = 3,
    CREATE_ISSUE_WITH_BOUNTY = 4,
    CREATE_ISSUE_WITH_BOUNTY_VERIFIED = 5,
    PR_TO_REPO_MERGED = 6,
    PR_TO_VERIFIED_REPO_MERGED = 7,
    PR_TO_VERIFIED_REPO_MERGED_WITH_BOUNTY = 8,
    LORE_STAKED = 9,
    VOTE_PROPOSAL = 10,
    UNRECOGNIZED = -1
}
export declare const TaskTypeSDKType: typeof TaskType;
export declare const TaskTypeAmino: typeof TaskType;
export declare function taskTypeFromJSON(object: any): TaskType;
export declare function taskTypeToJSON(object: TaskType): string;
export interface Task {
    type: TaskType;
    isComplete: boolean;
    weight: number;
}
export interface TaskProtoMsg {
    typeUrl: "/gitopia.gitopia.rewards.Task";
    value: Uint8Array;
}
export interface TaskAmino {
    type?: TaskType;
    isComplete?: boolean;
    weight?: number;
}
export interface TaskAminoMsg {
    type: "/gitopia.gitopia.rewards.Task";
    value: TaskAmino;
}
export interface TaskSDKType {
    type: TaskType;
    isComplete: boolean;
    weight: number;
}
export declare const Task: {
    typeUrl: string;
    encode(message: Task, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Task;
    fromPartial(object: Partial<Task>): Task;
    fromAmino(object: TaskAmino): Task;
    toAmino(message: Task): TaskAmino;
    fromAminoMsg(object: TaskAminoMsg): Task;
    fromProtoMsg(message: TaskProtoMsg): Task;
    toProto(message: Task): Uint8Array;
    toProtoMsg(message: Task): TaskProtoMsg;
};
