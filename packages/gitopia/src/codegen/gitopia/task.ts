import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum TaskType {
  TASK_TYPE_FORK_REPOSITORY = 0,
  TASK_TYPE_SET_PULL_REQUEST_STATE = 1,
  UNRECOGNIZED = -1,
}
export const TaskTypeSDKType = TaskType;
export const TaskTypeAmino = TaskType;
export function taskTypeFromJSON(object: any): TaskType {
  switch (object) {
    case 0:
    case "TASK_TYPE_FORK_REPOSITORY":
      return TaskType.TASK_TYPE_FORK_REPOSITORY;
    case 1:
    case "TASK_TYPE_SET_PULL_REQUEST_STATE":
      return TaskType.TASK_TYPE_SET_PULL_REQUEST_STATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskType.UNRECOGNIZED;
  }
}
export function taskTypeToJSON(object: TaskType): string {
  switch (object) {
    case TaskType.TASK_TYPE_FORK_REPOSITORY:
      return "TASK_TYPE_FORK_REPOSITORY";
    case TaskType.TASK_TYPE_SET_PULL_REQUEST_STATE:
      return "TASK_TYPE_SET_PULL_REQUEST_STATE";
    case TaskType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum TaskState {
  TASK_STATE_PENDING = 0,
  TASK_STATE_SUCCESS = 1,
  TASK_STATE_FAILURE = 2,
  UNRECOGNIZED = -1,
}
export const TaskStateSDKType = TaskState;
export const TaskStateAmino = TaskState;
export function taskStateFromJSON(object: any): TaskState {
  switch (object) {
    case 0:
    case "TASK_STATE_PENDING":
      return TaskState.TASK_STATE_PENDING;
    case 1:
    case "TASK_STATE_SUCCESS":
      return TaskState.TASK_STATE_SUCCESS;
    case 2:
    case "TASK_STATE_FAILURE":
      return TaskState.TASK_STATE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskState.UNRECOGNIZED;
  }
}
export function taskStateToJSON(object: TaskState): string {
  switch (object) {
    case TaskState.TASK_STATE_PENDING:
      return "TASK_STATE_PENDING";
    case TaskState.TASK_STATE_SUCCESS:
      return "TASK_STATE_SUCCESS";
    case TaskState.TASK_STATE_FAILURE:
      return "TASK_STATE_FAILURE";
    case TaskState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseTask(): Task {
  return {
    id: BigInt(0),
    type: 0,
    state: 0,
    message: "",
    creator: "",
    provider: ""
  };
}
export const Task = {
  typeUrl: "/gitopia.gitopia.gitopia.Task",
  encode(message: Task, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.message !== "") {
      writer.uint32(34).string(message.message);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    if (message.provider !== "") {
      writer.uint32(50).string(message.provider);
    }
    return writer;
  },
  fromJSON(object: any): Task {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      type: isSet(object.type) ? taskTypeFromJSON(object.type) : -1,
      state: isSet(object.state) ? taskStateFromJSON(object.state) : -1,
      message: isSet(object.message) ? String(object.message) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  fromPartial(object: Partial<Task>): Task {
    const message = createBaseTask();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.type = object.type ?? 0;
    message.state = object.state ?? 0;
    message.message = object.message ?? "";
    message.creator = object.creator ?? "";
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: TaskAmino): Task {
    const message = createBaseTask();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: Task): TaskAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.type = message.type === 0 ? undefined : message.type;
    obj.state = message.state === 0 ? undefined : message.state;
    obj.message = message.message === "" ? undefined : message.message;
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.provider = message.provider === "" ? undefined : message.provider;
    return obj;
  },
  fromAminoMsg(object: TaskAminoMsg): Task {
    return Task.fromAmino(object.value);
  },
  fromProtoMsg(message: TaskProtoMsg): Task {
    return Task.decode(message.value);
  },
  toProto(message: Task): Uint8Array {
    return Task.encode(message).finish();
  },
  toProtoMsg(message: Task): TaskProtoMsg {
    return {
      typeUrl: "/gitopia.gitopia.gitopia.Task",
      value: Task.encode(message).finish()
    };
  }
};