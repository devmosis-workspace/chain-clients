import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** TaskStatus enumerates the valid statuses of a task. */
export enum TaskStatus {
  TASK_STATUS_UNSPECIFIED = 0,
  TASK_STATUS_PENDING = 1,
  TASK_STATUS_SUCCEEDED = 2,
  TASK_STATUS_FAILED = 3,
  UNRECOGNIZED = -1,
}
export const TaskStatusSDKType = TaskStatus;
export const TaskStatusAmino = TaskStatus;
export function taskStatusFromJSON(object: any): TaskStatus {
  switch (object) {
    case 0:
    case "TASK_STATUS_UNSPECIFIED":
      return TaskStatus.TASK_STATUS_UNSPECIFIED;
    case 1:
    case "TASK_STATUS_PENDING":
      return TaskStatus.TASK_STATUS_PENDING;
    case 2:
    case "TASK_STATUS_SUCCEEDED":
      return TaskStatus.TASK_STATUS_SUCCEEDED;
    case 3:
    case "TASK_STATUS_FAILED":
      return TaskStatus.TASK_STATUS_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TaskStatus.UNRECOGNIZED;
  }
}
export function taskStatusToJSON(object: TaskStatus): string {
  switch (object) {
    case TaskStatus.TASK_STATUS_UNSPECIFIED:
      return "TASK_STATUS_UNSPECIFIED";
    case TaskStatus.TASK_STATUS_PENDING:
      return "TASK_STATUS_PENDING";
    case TaskStatus.TASK_STATUS_SUCCEEDED:
      return "TASK_STATUS_SUCCEEDED";
    case TaskStatus.TASK_STATUS_FAILED:
      return "TASK_STATUS_FAILED";
    case TaskStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Withdraw stores a withdraw of "Amount" scheduled for a given "DueBlock." */
export interface Withdraw {
  address: string;
  amount: Coin[];
  dueBlock: bigint;
}
export interface WithdrawProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.Withdraw";
  value: Uint8Array;
}
/** Withdraw stores a withdraw of "Amount" scheduled for a given "DueBlock." */
export interface WithdrawAmino {
  address?: string;
  amount?: CoinAmino[];
  due_block?: string;
}
export interface WithdrawAminoMsg {
  type: "/shentu.oracle.v1alpha1.Withdraw";
  value: WithdrawAmino;
}
/** Withdraw stores a withdraw of "Amount" scheduled for a given "DueBlock." */
export interface WithdrawSDKType {
  address: string;
  amount: CoinSDKType[];
  due_block: bigint;
}
export interface Task {
  contract: string;
  function: string;
  beginBlock: bigint;
  bounty: Coin[];
  description: string;
  expiration: Timestamp;
  creator: string;
  responses: Response[];
  result: string;
  expireHeight: bigint;
  waitingBlocks: bigint;
  status: TaskStatus;
}
export interface TaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.Task";
  value: Uint8Array;
}
export interface TaskAmino {
  contract?: string;
  function?: string;
  begin_block?: string;
  bounty?: CoinAmino[];
  description?: string;
  expiration?: string;
  creator?: string;
  responses?: ResponseAmino[];
  result?: string;
  expire_height?: string;
  waiting_blocks?: string;
  status?: TaskStatus;
}
export interface TaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.Task";
  value: TaskAmino;
}
export interface TaskSDKType {
  contract: string;
  function: string;
  begin_block: bigint;
  bounty: CoinSDKType[];
  description: string;
  expiration: TimestampSDKType;
  creator: string;
  responses: ResponseSDKType[];
  result: string;
  expire_height: bigint;
  waiting_blocks: bigint;
  status: TaskStatus;
}
export interface Response {
  operator: string;
  score: string;
  weight: string;
  reward: Coin[];
}
export interface ResponseProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.Response";
  value: Uint8Array;
}
export interface ResponseAmino {
  operator?: string;
  score?: string;
  weight?: string;
  reward?: CoinAmino[];
}
export interface ResponseAminoMsg {
  type: "/shentu.oracle.v1alpha1.Response";
  value: ResponseAmino;
}
export interface ResponseSDKType {
  operator: string;
  score: string;
  weight: string;
  reward: CoinSDKType[];
}
export interface Operator {
  address: string;
  proposer: string;
  collateral: Coin[];
  accumulatedRewards: Coin[];
  name: string;
}
export interface OperatorProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.Operator";
  value: Uint8Array;
}
export interface OperatorAmino {
  address?: string;
  proposer?: string;
  collateral?: CoinAmino[];
  accumulated_rewards?: CoinAmino[];
  name?: string;
}
export interface OperatorAminoMsg {
  type: "/shentu.oracle.v1alpha1.Operator";
  value: OperatorAmino;
}
export interface OperatorSDKType {
  address: string;
  proposer: string;
  collateral: CoinSDKType[];
  accumulated_rewards: CoinSDKType[];
  name: string;
}
export interface TaskParams {
  expirationDuration: Duration;
  aggregationWindow: bigint;
  aggregationResult: string;
  thresholdScore: string;
  epsilon1: string;
  epsilon2: string;
  shortcutQuorum: Uint8Array;
}
export interface TaskParamsProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.TaskParams";
  value: Uint8Array;
}
export interface TaskParamsAmino {
  expiration_duration?: DurationAmino;
  aggregation_window?: string;
  aggregation_result?: string;
  threshold_score?: string;
  epsilon1?: string;
  epsilon2?: string;
  shortcut_quorum?: string;
}
export interface TaskParamsAminoMsg {
  type: "/shentu.oracle.v1alpha1.TaskParams";
  value: TaskParamsAmino;
}
export interface TaskParamsSDKType {
  expiration_duration: DurationSDKType;
  aggregation_window: bigint;
  aggregation_result: string;
  threshold_score: string;
  epsilon1: string;
  epsilon2: string;
  shortcut_quorum: Uint8Array;
}
export interface LockedPoolParams {
  lockedInBlocks: bigint;
  minimumCollateral: bigint;
}
export interface LockedPoolParamsProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.LockedPoolParams";
  value: Uint8Array;
}
export interface LockedPoolParamsAmino {
  locked_in_blocks?: string;
  minimum_collateral?: string;
}
export interface LockedPoolParamsAminoMsg {
  type: "/shentu.oracle.v1alpha1.LockedPoolParams";
  value: LockedPoolParamsAmino;
}
export interface LockedPoolParamsSDKType {
  locked_in_blocks: bigint;
  minimum_collateral: bigint;
}
export interface TaskID {
  tid: Uint8Array;
}
export interface TaskIDProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.TaskID";
  value: Uint8Array;
}
export interface TaskIDAmino {
  tid?: string;
}
export interface TaskIDAminoMsg {
  type: "/shentu.oracle.v1alpha1.TaskID";
  value: TaskIDAmino;
}
export interface TaskIDSDKType {
  tid: Uint8Array;
}
export interface TaskIDs {
  taskIds: TaskID[];
}
export interface TaskIDsProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.TaskIDs";
  value: Uint8Array;
}
export interface TaskIDsAmino {
  task_ids?: TaskIDAmino[];
}
export interface TaskIDsAminoMsg {
  type: "/shentu.oracle.v1alpha1.TaskIDs";
  value: TaskIDsAmino;
}
export interface TaskIDsSDKType {
  task_ids: TaskIDSDKType[];
}
export interface CoinsProto {
  coins: Coin[];
}
export interface CoinsProtoProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.CoinsProto";
  value: Uint8Array;
}
export interface CoinsProtoAmino {
  coins?: CoinAmino[];
}
export interface CoinsProtoAminoMsg {
  type: "/shentu.oracle.v1alpha1.CoinsProto";
  value: CoinsProtoAmino;
}
export interface CoinsProtoSDKType {
  coins: CoinSDKType[];
}
export interface TxTask {
  $typeUrl?: "/shentu.oracle.v1alpha1.TxTask";
  atxHash: Uint8Array;
  creator: string;
  bounty: Coin[];
  validTime: Timestamp;
  expiration: Timestamp;
  responses: Response[];
  score: bigint;
  status: TaskStatus;
}
export interface TxTaskProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.TxTask";
  value: Uint8Array;
}
export interface TxTaskAmino {
  atx_hash?: string;
  creator?: string;
  bounty?: CoinAmino[];
  valid_time?: string;
  expiration?: string;
  responses?: ResponseAmino[];
  score?: string;
  status?: TaskStatus;
}
export interface TxTaskAminoMsg {
  type: "/shentu.oracle.v1alpha1.TxTask";
  value: TxTaskAmino;
}
export interface TxTaskSDKType {
  $typeUrl?: "/shentu.oracle.v1alpha1.TxTask";
  atx_hash: Uint8Array;
  creator: string;
  bounty: CoinSDKType[];
  valid_time: TimestampSDKType;
  expiration: TimestampSDKType;
  responses: ResponseSDKType[];
  score: bigint;
  status: TaskStatus;
}
function createBaseWithdraw(): Withdraw {
  return {
    address: "",
    amount: [],
    dueBlock: BigInt(0)
  };
}
export const Withdraw = {
  typeUrl: "/shentu.oracle.v1alpha1.Withdraw",
  encode(message: Withdraw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.dueBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.dueBlock);
    }
    return writer;
  },
  fromJSON(object: any): Withdraw {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      dueBlock: isSet(object.dueBlock) ? BigInt(object.dueBlock.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Withdraw>): Withdraw {
    const message = createBaseWithdraw();
    message.address = object.address ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.dueBlock = object.dueBlock !== undefined && object.dueBlock !== null ? BigInt(object.dueBlock.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: WithdrawAmino): Withdraw {
    const message = createBaseWithdraw();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
    if (object.due_block !== undefined && object.due_block !== null) {
      message.dueBlock = BigInt(object.due_block);
    }
    return message;
  },
  toAmino(message: Withdraw): WithdrawAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = message.amount;
    }
    obj.due_block = message.dueBlock !== BigInt(0) ? message.dueBlock.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: WithdrawAminoMsg): Withdraw {
    return Withdraw.fromAmino(object.value);
  },
  fromProtoMsg(message: WithdrawProtoMsg): Withdraw {
    return Withdraw.decode(message.value);
  },
  toProto(message: Withdraw): Uint8Array {
    return Withdraw.encode(message).finish();
  },
  toProtoMsg(message: Withdraw): WithdrawProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.Withdraw",
      value: Withdraw.encode(message).finish()
    };
  }
};
function createBaseTask(): Task {
  return {
    contract: "",
    function: "",
    beginBlock: BigInt(0),
    bounty: [],
    description: "",
    expiration: Timestamp.fromPartial({}),
    creator: "",
    responses: [],
    result: "",
    expireHeight: BigInt(0),
    waitingBlocks: BigInt(0),
    status: 0
  };
}
export const Task = {
  typeUrl: "/shentu.oracle.v1alpha1.Task",
  encode(message: Task, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    if (message.beginBlock !== BigInt(0)) {
      writer.uint32(24).int64(message.beginBlock);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(50).fork()).ldelim();
    }
    if (message.creator !== "") {
      writer.uint32(58).string(message.creator);
    }
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.result !== "") {
      writer.uint32(74).string(message.result);
    }
    if (message.expireHeight !== BigInt(0)) {
      writer.uint32(80).int64(message.expireHeight);
    }
    if (message.waitingBlocks !== BigInt(0)) {
      writer.uint32(88).int64(message.waitingBlocks);
    }
    if (message.status !== 0) {
      writer.uint32(96).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): Task {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : "",
      beginBlock: isSet(object.beginBlock) ? BigInt(object.beginBlock.toString()) : BigInt(0),
      bounty: Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      creator: isSet(object.creator) ? String(object.creator) : "",
      responses: Array.isArray(object?.responses) ? object.responses.map((e: any) => Response.fromJSON(e)) : [],
      result: isSet(object.result) ? String(object.result) : "",
      expireHeight: isSet(object.expireHeight) ? BigInt(object.expireHeight.toString()) : BigInt(0),
      waitingBlocks: isSet(object.waitingBlocks) ? BigInt(object.waitingBlocks.toString()) : BigInt(0),
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<Task>): Task {
    const message = createBaseTask();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.beginBlock = object.beginBlock !== undefined && object.beginBlock !== null ? BigInt(object.beginBlock.toString()) : BigInt(0);
    message.bounty = object.bounty?.map(e => Coin.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.creator = object.creator ?? "";
    message.responses = object.responses?.map(e => Response.fromPartial(e)) || [];
    message.result = object.result ?? "";
    message.expireHeight = object.expireHeight !== undefined && object.expireHeight !== null ? BigInt(object.expireHeight.toString()) : BigInt(0);
    message.waitingBlocks = object.waitingBlocks !== undefined && object.waitingBlocks !== null ? BigInt(object.waitingBlocks.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: TaskAmino): Task {
    const message = createBaseTask();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    if (object.begin_block !== undefined && object.begin_block !== null) {
      message.beginBlock = BigInt(object.begin_block);
    }
    message.bounty = object.bounty?.map(e => Coin.fromAmino(e)) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromAmino(object.expiration);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.responses = object.responses?.map(e => Response.fromAmino(e)) || [];
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    if (object.expire_height !== undefined && object.expire_height !== null) {
      message.expireHeight = BigInt(object.expire_height);
    }
    if (object.waiting_blocks !== undefined && object.waiting_blocks !== null) {
      message.waitingBlocks = BigInt(object.waiting_blocks);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: Task): TaskAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    obj.begin_block = message.beginBlock !== BigInt(0) ? message.beginBlock.toString() : undefined;
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.description = message.description === "" ? undefined : message.description;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.responses) {
      obj.responses = message.responses.map(e => e ? Response.toAmino(e) : undefined);
    } else {
      obj.responses = message.responses;
    }
    obj.result = message.result === "" ? undefined : message.result;
    obj.expire_height = message.expireHeight !== BigInt(0) ? message.expireHeight.toString() : undefined;
    obj.waiting_blocks = message.waitingBlocks !== BigInt(0) ? message.waitingBlocks.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
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
      typeUrl: "/shentu.oracle.v1alpha1.Task",
      value: Task.encode(message).finish()
    };
  }
};
function createBaseResponse(): Response {
  return {
    operator: "",
    score: "",
    weight: "",
    reward: []
  };
}
export const Response = {
  typeUrl: "/shentu.oracle.v1alpha1.Response",
  encode(message: Response, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.score !== "") {
      writer.uint32(18).string(message.score);
    }
    if (message.weight !== "") {
      writer.uint32(26).string(message.weight);
    }
    for (const v of message.reward) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Response {
    return {
      operator: isSet(object.operator) ? String(object.operator) : "",
      score: isSet(object.score) ? String(object.score) : "",
      weight: isSet(object.weight) ? String(object.weight) : "",
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Response>): Response {
    const message = createBaseResponse();
    message.operator = object.operator ?? "";
    message.score = object.score ?? "";
    message.weight = object.weight ?? "";
    message.reward = object.reward?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ResponseAmino): Response {
    const message = createBaseResponse();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.score !== undefined && object.score !== null) {
      message.score = object.score;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    message.reward = object.reward?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Response): ResponseAmino {
    const obj: any = {};
    obj.operator = message.operator === "" ? undefined : message.operator;
    obj.score = message.score === "" ? undefined : message.score;
    obj.weight = message.weight === "" ? undefined : message.weight;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.reward = message.reward;
    }
    return obj;
  },
  fromAminoMsg(object: ResponseAminoMsg): Response {
    return Response.fromAmino(object.value);
  },
  fromProtoMsg(message: ResponseProtoMsg): Response {
    return Response.decode(message.value);
  },
  toProto(message: Response): Uint8Array {
    return Response.encode(message).finish();
  },
  toProtoMsg(message: Response): ResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.Response",
      value: Response.encode(message).finish()
    };
  }
};
function createBaseOperator(): Operator {
  return {
    address: "",
    proposer: "",
    collateral: [],
    accumulatedRewards: [],
    name: ""
  };
}
export const Operator = {
  typeUrl: "/shentu.oracle.v1alpha1.Operator",
  encode(message: Operator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    for (const v of message.collateral) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.accumulatedRewards) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },
  fromJSON(object: any): Operator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      collateral: Array.isArray(object?.collateral) ? object.collateral.map((e: any) => Coin.fromJSON(e)) : [],
      accumulatedRewards: Array.isArray(object?.accumulatedRewards) ? object.accumulatedRewards.map((e: any) => Coin.fromJSON(e)) : [],
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  fromPartial(object: Partial<Operator>): Operator {
    const message = createBaseOperator();
    message.address = object.address ?? "";
    message.proposer = object.proposer ?? "";
    message.collateral = object.collateral?.map(e => Coin.fromPartial(e)) || [];
    message.accumulatedRewards = object.accumulatedRewards?.map(e => Coin.fromPartial(e)) || [];
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: OperatorAmino): Operator {
    const message = createBaseOperator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    message.collateral = object.collateral?.map(e => Coin.fromAmino(e)) || [];
    message.accumulatedRewards = object.accumulated_rewards?.map(e => Coin.fromAmino(e)) || [];
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: Operator): OperatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    if (message.collateral) {
      obj.collateral = message.collateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.collateral = message.collateral;
    }
    if (message.accumulatedRewards) {
      obj.accumulated_rewards = message.accumulatedRewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.accumulated_rewards = message.accumulatedRewards;
    }
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: OperatorAminoMsg): Operator {
    return Operator.fromAmino(object.value);
  },
  fromProtoMsg(message: OperatorProtoMsg): Operator {
    return Operator.decode(message.value);
  },
  toProto(message: Operator): Uint8Array {
    return Operator.encode(message).finish();
  },
  toProtoMsg(message: Operator): OperatorProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.Operator",
      value: Operator.encode(message).finish()
    };
  }
};
function createBaseTaskParams(): TaskParams {
  return {
    expirationDuration: Duration.fromPartial({}),
    aggregationWindow: BigInt(0),
    aggregationResult: "",
    thresholdScore: "",
    epsilon1: "",
    epsilon2: "",
    shortcutQuorum: new Uint8Array()
  };
}
export const TaskParams = {
  typeUrl: "/shentu.oracle.v1alpha1.TaskParams",
  encode(message: TaskParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.expirationDuration !== undefined) {
      Duration.encode(message.expirationDuration, writer.uint32(10).fork()).ldelim();
    }
    if (message.aggregationWindow !== BigInt(0)) {
      writer.uint32(16).int64(message.aggregationWindow);
    }
    if (message.aggregationResult !== "") {
      writer.uint32(26).string(message.aggregationResult);
    }
    if (message.thresholdScore !== "") {
      writer.uint32(34).string(message.thresholdScore);
    }
    if (message.epsilon1 !== "") {
      writer.uint32(42).string(message.epsilon1);
    }
    if (message.epsilon2 !== "") {
      writer.uint32(50).string(message.epsilon2);
    }
    if (message.shortcutQuorum.length !== 0) {
      writer.uint32(58).bytes(message.shortcutQuorum);
    }
    return writer;
  },
  fromJSON(object: any): TaskParams {
    return {
      expirationDuration: isSet(object.expirationDuration) ? Duration.fromJSON(object.expirationDuration) : undefined,
      aggregationWindow: isSet(object.aggregationWindow) ? BigInt(object.aggregationWindow.toString()) : BigInt(0),
      aggregationResult: isSet(object.aggregationResult) ? String(object.aggregationResult) : "",
      thresholdScore: isSet(object.thresholdScore) ? String(object.thresholdScore) : "",
      epsilon1: isSet(object.epsilon1) ? String(object.epsilon1) : "",
      epsilon2: isSet(object.epsilon2) ? String(object.epsilon2) : "",
      shortcutQuorum: isSet(object.shortcutQuorum) ? bytesFromBase64(object.shortcutQuorum) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TaskParams>): TaskParams {
    const message = createBaseTaskParams();
    message.expirationDuration = object.expirationDuration !== undefined && object.expirationDuration !== null ? Duration.fromPartial(object.expirationDuration) : undefined;
    message.aggregationWindow = object.aggregationWindow !== undefined && object.aggregationWindow !== null ? BigInt(object.aggregationWindow.toString()) : BigInt(0);
    message.aggregationResult = object.aggregationResult ?? "";
    message.thresholdScore = object.thresholdScore ?? "";
    message.epsilon1 = object.epsilon1 ?? "";
    message.epsilon2 = object.epsilon2 ?? "";
    message.shortcutQuorum = object.shortcutQuorum ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TaskParamsAmino): TaskParams {
    const message = createBaseTaskParams();
    if (object.expiration_duration !== undefined && object.expiration_duration !== null) {
      message.expirationDuration = Duration.fromAmino(object.expiration_duration);
    }
    if (object.aggregation_window !== undefined && object.aggregation_window !== null) {
      message.aggregationWindow = BigInt(object.aggregation_window);
    }
    if (object.aggregation_result !== undefined && object.aggregation_result !== null) {
      message.aggregationResult = object.aggregation_result;
    }
    if (object.threshold_score !== undefined && object.threshold_score !== null) {
      message.thresholdScore = object.threshold_score;
    }
    if (object.epsilon1 !== undefined && object.epsilon1 !== null) {
      message.epsilon1 = object.epsilon1;
    }
    if (object.epsilon2 !== undefined && object.epsilon2 !== null) {
      message.epsilon2 = object.epsilon2;
    }
    if (object.shortcut_quorum !== undefined && object.shortcut_quorum !== null) {
      message.shortcutQuorum = bytesFromBase64(object.shortcut_quorum);
    }
    return message;
  },
  toAmino(message: TaskParams): TaskParamsAmino {
    const obj: any = {};
    obj.expiration_duration = message.expirationDuration ? Duration.toAmino(message.expirationDuration) : undefined;
    obj.aggregation_window = message.aggregationWindow !== BigInt(0) ? message.aggregationWindow.toString() : undefined;
    obj.aggregation_result = message.aggregationResult === "" ? undefined : message.aggregationResult;
    obj.threshold_score = message.thresholdScore === "" ? undefined : message.thresholdScore;
    obj.epsilon1 = message.epsilon1 === "" ? undefined : message.epsilon1;
    obj.epsilon2 = message.epsilon2 === "" ? undefined : message.epsilon2;
    obj.shortcut_quorum = message.shortcutQuorum ? base64FromBytes(message.shortcutQuorum) : undefined;
    return obj;
  },
  fromAminoMsg(object: TaskParamsAminoMsg): TaskParams {
    return TaskParams.fromAmino(object.value);
  },
  fromProtoMsg(message: TaskParamsProtoMsg): TaskParams {
    return TaskParams.decode(message.value);
  },
  toProto(message: TaskParams): Uint8Array {
    return TaskParams.encode(message).finish();
  },
  toProtoMsg(message: TaskParams): TaskParamsProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.TaskParams",
      value: TaskParams.encode(message).finish()
    };
  }
};
function createBaseLockedPoolParams(): LockedPoolParams {
  return {
    lockedInBlocks: BigInt(0),
    minimumCollateral: BigInt(0)
  };
}
export const LockedPoolParams = {
  typeUrl: "/shentu.oracle.v1alpha1.LockedPoolParams",
  encode(message: LockedPoolParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lockedInBlocks !== BigInt(0)) {
      writer.uint32(8).int64(message.lockedInBlocks);
    }
    if (message.minimumCollateral !== BigInt(0)) {
      writer.uint32(16).int64(message.minimumCollateral);
    }
    return writer;
  },
  fromJSON(object: any): LockedPoolParams {
    return {
      lockedInBlocks: isSet(object.lockedInBlocks) ? BigInt(object.lockedInBlocks.toString()) : BigInt(0),
      minimumCollateral: isSet(object.minimumCollateral) ? BigInt(object.minimumCollateral.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<LockedPoolParams>): LockedPoolParams {
    const message = createBaseLockedPoolParams();
    message.lockedInBlocks = object.lockedInBlocks !== undefined && object.lockedInBlocks !== null ? BigInt(object.lockedInBlocks.toString()) : BigInt(0);
    message.minimumCollateral = object.minimumCollateral !== undefined && object.minimumCollateral !== null ? BigInt(object.minimumCollateral.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: LockedPoolParamsAmino): LockedPoolParams {
    const message = createBaseLockedPoolParams();
    if (object.locked_in_blocks !== undefined && object.locked_in_blocks !== null) {
      message.lockedInBlocks = BigInt(object.locked_in_blocks);
    }
    if (object.minimum_collateral !== undefined && object.minimum_collateral !== null) {
      message.minimumCollateral = BigInt(object.minimum_collateral);
    }
    return message;
  },
  toAmino(message: LockedPoolParams): LockedPoolParamsAmino {
    const obj: any = {};
    obj.locked_in_blocks = message.lockedInBlocks !== BigInt(0) ? message.lockedInBlocks.toString() : undefined;
    obj.minimum_collateral = message.minimumCollateral !== BigInt(0) ? message.minimumCollateral.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LockedPoolParamsAminoMsg): LockedPoolParams {
    return LockedPoolParams.fromAmino(object.value);
  },
  fromProtoMsg(message: LockedPoolParamsProtoMsg): LockedPoolParams {
    return LockedPoolParams.decode(message.value);
  },
  toProto(message: LockedPoolParams): Uint8Array {
    return LockedPoolParams.encode(message).finish();
  },
  toProtoMsg(message: LockedPoolParams): LockedPoolParamsProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.LockedPoolParams",
      value: LockedPoolParams.encode(message).finish()
    };
  }
};
function createBaseTaskID(): TaskID {
  return {
    tid: new Uint8Array()
  };
}
export const TaskID = {
  typeUrl: "/shentu.oracle.v1alpha1.TaskID",
  encode(message: TaskID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tid.length !== 0) {
      writer.uint32(10).bytes(message.tid);
    }
    return writer;
  },
  fromJSON(object: any): TaskID {
    return {
      tid: isSet(object.tid) ? bytesFromBase64(object.tid) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<TaskID>): TaskID {
    const message = createBaseTaskID();
    message.tid = object.tid ?? new Uint8Array();
    return message;
  },
  fromAmino(object: TaskIDAmino): TaskID {
    const message = createBaseTaskID();
    if (object.tid !== undefined && object.tid !== null) {
      message.tid = bytesFromBase64(object.tid);
    }
    return message;
  },
  toAmino(message: TaskID): TaskIDAmino {
    const obj: any = {};
    obj.tid = message.tid ? base64FromBytes(message.tid) : undefined;
    return obj;
  },
  fromAminoMsg(object: TaskIDAminoMsg): TaskID {
    return TaskID.fromAmino(object.value);
  },
  fromProtoMsg(message: TaskIDProtoMsg): TaskID {
    return TaskID.decode(message.value);
  },
  toProto(message: TaskID): Uint8Array {
    return TaskID.encode(message).finish();
  },
  toProtoMsg(message: TaskID): TaskIDProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.TaskID",
      value: TaskID.encode(message).finish()
    };
  }
};
function createBaseTaskIDs(): TaskIDs {
  return {
    taskIds: []
  };
}
export const TaskIDs = {
  typeUrl: "/shentu.oracle.v1alpha1.TaskIDs",
  encode(message: TaskIDs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.taskIds) {
      TaskID.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TaskIDs {
    return {
      taskIds: Array.isArray(object?.taskIds) ? object.taskIds.map((e: any) => TaskID.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<TaskIDs>): TaskIDs {
    const message = createBaseTaskIDs();
    message.taskIds = object.taskIds?.map(e => TaskID.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TaskIDsAmino): TaskIDs {
    const message = createBaseTaskIDs();
    message.taskIds = object.task_ids?.map(e => TaskID.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TaskIDs): TaskIDsAmino {
    const obj: any = {};
    if (message.taskIds) {
      obj.task_ids = message.taskIds.map(e => e ? TaskID.toAmino(e) : undefined);
    } else {
      obj.task_ids = message.taskIds;
    }
    return obj;
  },
  fromAminoMsg(object: TaskIDsAminoMsg): TaskIDs {
    return TaskIDs.fromAmino(object.value);
  },
  fromProtoMsg(message: TaskIDsProtoMsg): TaskIDs {
    return TaskIDs.decode(message.value);
  },
  toProto(message: TaskIDs): Uint8Array {
    return TaskIDs.encode(message).finish();
  },
  toProtoMsg(message: TaskIDs): TaskIDsProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.TaskIDs",
      value: TaskIDs.encode(message).finish()
    };
  }
};
function createBaseCoinsProto(): CoinsProto {
  return {
    coins: []
  };
}
export const CoinsProto = {
  typeUrl: "/shentu.oracle.v1alpha1.CoinsProto",
  encode(message: CoinsProto, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CoinsProto {
    return {
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<CoinsProto>): CoinsProto {
    const message = createBaseCoinsProto();
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CoinsProtoAmino): CoinsProto {
    const message = createBaseCoinsProto();
    message.coins = object.coins?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CoinsProto): CoinsProtoAmino {
    const obj: any = {};
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = message.coins;
    }
    return obj;
  },
  fromAminoMsg(object: CoinsProtoAminoMsg): CoinsProto {
    return CoinsProto.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinsProtoProtoMsg): CoinsProto {
    return CoinsProto.decode(message.value);
  },
  toProto(message: CoinsProto): Uint8Array {
    return CoinsProto.encode(message).finish();
  },
  toProtoMsg(message: CoinsProto): CoinsProtoProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.CoinsProto",
      value: CoinsProto.encode(message).finish()
    };
  }
};
function createBaseTxTask(): TxTask {
  return {
    $typeUrl: "/shentu.oracle.v1alpha1.TxTask",
    atxHash: new Uint8Array(),
    creator: "",
    bounty: [],
    validTime: Timestamp.fromPartial({}),
    expiration: Timestamp.fromPartial({}),
    responses: [],
    score: BigInt(0),
    status: 0
  };
}
export const TxTask = {
  typeUrl: "/shentu.oracle.v1alpha1.TxTask",
  encode(message: TxTask, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash.length !== 0) {
      writer.uint32(10).bytes(message.atxHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    for (const v of message.bounty) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.validTime !== undefined) {
      Timestamp.encode(message.validTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.responses) {
      Response.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.score !== BigInt(0)) {
      writer.uint32(56).int64(message.score);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): TxTask {
    return {
      atxHash: isSet(object.atxHash) ? bytesFromBase64(object.atxHash) : new Uint8Array(),
      creator: isSet(object.creator) ? String(object.creator) : "",
      bounty: Array.isArray(object?.bounty) ? object.bounty.map((e: any) => Coin.fromJSON(e)) : [],
      validTime: isSet(object.validTime) ? fromJsonTimestamp(object.validTime) : undefined,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined,
      responses: Array.isArray(object?.responses) ? object.responses.map((e: any) => Response.fromJSON(e)) : [],
      score: isSet(object.score) ? BigInt(object.score.toString()) : BigInt(0),
      status: isSet(object.status) ? taskStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<TxTask>): TxTask {
    const message = createBaseTxTask();
    message.atxHash = object.atxHash ?? new Uint8Array();
    message.creator = object.creator ?? "";
    message.bounty = object.bounty?.map(e => Coin.fromPartial(e)) || [];
    message.validTime = object.validTime !== undefined && object.validTime !== null ? Timestamp.fromPartial(object.validTime) : undefined;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    message.responses = object.responses?.map(e => Response.fromPartial(e)) || [];
    message.score = object.score !== undefined && object.score !== null ? BigInt(object.score.toString()) : BigInt(0);
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: TxTaskAmino): TxTask {
    const message = createBaseTxTask();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = bytesFromBase64(object.atx_hash);
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    message.bounty = object.bounty?.map(e => Coin.fromAmino(e)) || [];
    if (object.valid_time !== undefined && object.valid_time !== null) {
      message.validTime = Timestamp.fromAmino(object.valid_time);
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = Timestamp.fromAmino(object.expiration);
    }
    message.responses = object.responses?.map(e => Response.fromAmino(e)) || [];
    if (object.score !== undefined && object.score !== null) {
      message.score = BigInt(object.score);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: TxTask): TxTaskAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash ? base64FromBytes(message.atxHash) : undefined;
    obj.creator = message.creator === "" ? undefined : message.creator;
    if (message.bounty) {
      obj.bounty = message.bounty.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.bounty = message.bounty;
    }
    obj.valid_time = message.validTime ? Timestamp.toAmino(message.validTime) : undefined;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    if (message.responses) {
      obj.responses = message.responses.map(e => e ? Response.toAmino(e) : undefined);
    } else {
      obj.responses = message.responses;
    }
    obj.score = message.score !== BigInt(0) ? message.score.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: TxTaskAminoMsg): TxTask {
    return TxTask.fromAmino(object.value);
  },
  fromProtoMsg(message: TxTaskProtoMsg): TxTask {
    return TxTask.decode(message.value);
  },
  toProto(message: TxTask): Uint8Array {
    return TxTask.encode(message).finish();
  },
  toProtoMsg(message: TxTask): TxTaskProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.TxTask",
      value: TxTask.encode(message).finish()
    };
  }
};