import { BinaryWriter } from "../binary";
import { isSet } from "../helpers";
export enum TaskType {
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
  UNRECOGNIZED = -1,
}
export const TaskTypeSDKType = TaskType;
export const TaskTypeAmino = TaskType;
export function taskTypeFromJSON(object: any): TaskType {
  switch (object) {
    case 0:
    case "UNKNOWN":
      return TaskType.UNKNOWN;
    case 1:
    case "CREATE_USER":
      return TaskType.CREATE_USER;
    case 2:
    case "CREATE_NON_EMPTY_REPO":
      return TaskType.CREATE_NON_EMPTY_REPO;
    case 3:
    case "CREATE_ISSUE":
      return TaskType.CREATE_ISSUE;
    case 4:
    case "CREATE_ISSUE_WITH_BOUNTY":
      return TaskType.CREATE_ISSUE_WITH_BOUNTY;
    case 5:
    case "CREATE_ISSUE_WITH_BOUNTY_VERIFIED":
      return TaskType.CREATE_ISSUE_WITH_BOUNTY_VERIFIED;
    case 6:
    case "PR_TO_REPO_MERGED":
      return TaskType.PR_TO_REPO_MERGED;
    case 7:
    case "PR_TO_VERIFIED_REPO_MERGED":
      return TaskType.PR_TO_VERIFIED_REPO_MERGED;
    case 8:
    case "PR_TO_VERIFIED_REPO_MERGED_WITH_BOUNTY":
      return TaskType.PR_TO_VERIFIED_REPO_MERGED_WITH_BOUNTY;
    case 9:
    case "LORE_STAKED":
      return TaskType.LORE_STAKED;
    case 10:
    case "VOTE_PROPOSAL":
      return TaskType.VOTE_PROPOSAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskType.UNRECOGNIZED;
  }
}
export function taskTypeToJSON(object: TaskType): string {
  switch (object) {
    case TaskType.UNKNOWN:
      return "UNKNOWN";
    case TaskType.CREATE_USER:
      return "CREATE_USER";
    case TaskType.CREATE_NON_EMPTY_REPO:
      return "CREATE_NON_EMPTY_REPO";
    case TaskType.CREATE_ISSUE:
      return "CREATE_ISSUE";
    case TaskType.CREATE_ISSUE_WITH_BOUNTY:
      return "CREATE_ISSUE_WITH_BOUNTY";
    case TaskType.CREATE_ISSUE_WITH_BOUNTY_VERIFIED:
      return "CREATE_ISSUE_WITH_BOUNTY_VERIFIED";
    case TaskType.PR_TO_REPO_MERGED:
      return "PR_TO_REPO_MERGED";
    case TaskType.PR_TO_VERIFIED_REPO_MERGED:
      return "PR_TO_VERIFIED_REPO_MERGED";
    case TaskType.PR_TO_VERIFIED_REPO_MERGED_WITH_BOUNTY:
      return "PR_TO_VERIFIED_REPO_MERGED_WITH_BOUNTY";
    case TaskType.LORE_STAKED:
      return "LORE_STAKED";
    case TaskType.VOTE_PROPOSAL:
      return "VOTE_PROPOSAL";
    case TaskType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
function createBaseTask(): Task {
  return {
    type: 0,
    isComplete: false,
    weight: 0
  };
}
export const Task = {
  typeUrl: "/gitopia.gitopia.rewards.Task",
  encode(message: Task, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.isComplete === true) {
      writer.uint32(16).bool(message.isComplete);
    }
    if (message.weight !== 0) {
      writer.uint32(24).int32(message.weight);
    }
    return writer;
  },
  fromJSON(object: any): Task {
    return {
      type: isSet(object.type) ? taskTypeFromJSON(object.type) : -1,
      isComplete: isSet(object.isComplete) ? Boolean(object.isComplete) : false,
      weight: isSet(object.weight) ? Number(object.weight) : 0
    };
  },
  fromPartial(object: Partial<Task>): Task {
    const message = createBaseTask();
    message.type = object.type ?? 0;
    message.isComplete = object.isComplete ?? false;
    message.weight = object.weight ?? 0;
    return message;
  },
  fromAmino(object: TaskAmino): Task {
    const message = createBaseTask();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.isComplete !== undefined && object.isComplete !== null) {
      message.isComplete = object.isComplete;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: Task): TaskAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.isComplete = message.isComplete === false ? undefined : message.isComplete;
    obj.weight = message.weight === 0 ? undefined : message.weight;
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
      typeUrl: "/gitopia.gitopia.rewards.Task",
      value: Task.encode(message).finish()
    };
  }
};