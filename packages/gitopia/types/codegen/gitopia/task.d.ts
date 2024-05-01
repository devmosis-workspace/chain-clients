import { BinaryWriter } from "../binary";
export declare enum TaskType {
    TASK_TYPE_FORK_REPOSITORY = 0,
    TASK_TYPE_SET_PULL_REQUEST_STATE = 1,
    UNRECOGNIZED = -1
}
export declare const TaskTypeSDKType: typeof TaskType;
export declare const TaskTypeAmino: typeof TaskType;
export declare function taskTypeFromJSON(object: any): TaskType;
export declare function taskTypeToJSON(object: TaskType): string;
export declare enum TaskState {
    TASK_STATE_PENDING = 0,
    TASK_STATE_SUCCESS = 1,
    TASK_STATE_FAILURE = 2,
    UNRECOGNIZED = -1
}
export declare const TaskStateSDKType: typeof TaskState;
export declare const TaskStateAmino: typeof TaskState;
export declare function taskStateFromJSON(object: any): TaskState;
export declare function taskStateToJSON(object: TaskState): string;
export interface Task {
    id: bigint;
    type: TaskType;
    state: TaskState;
    message: string;
    creator: string;
    provider: string;
}
export interface TaskProtoMsg {
    typeUrl: "/gitopia.gitopia.gitopia.Task";
    value: Uint8Array;
}
export interface TaskAmino {
    id?: string;
    type?: TaskType;
    state?: TaskState;
    message?: string;
    creator?: string;
    provider?: string;
}
export interface TaskAminoMsg {
    type: "/gitopia.gitopia.gitopia.Task";
    value: TaskAmino;
}
export interface TaskSDKType {
    id: bigint;
    type: TaskType;
    state: TaskState;
    message: string;
    creator: string;
    provider: string;
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
