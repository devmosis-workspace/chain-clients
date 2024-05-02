import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryWriter } from "../../../binary";
/** TaskStatus enumerates the valid statuses of a task. */
export declare enum TaskStatus {
    TASK_STATUS_UNSPECIFIED = 0,
    TASK_STATUS_PENDING = 1,
    TASK_STATUS_SUCCEEDED = 2,
    TASK_STATUS_FAILED = 3,
    UNRECOGNIZED = -1
}
export declare const TaskStatusSDKType: typeof TaskStatus;
export declare const TaskStatusAmino: typeof TaskStatus;
export declare function taskStatusFromJSON(object: any): TaskStatus;
export declare function taskStatusToJSON(object: TaskStatus): string;
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
export declare const Withdraw: {
    typeUrl: string;
    encode(message: Withdraw, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Withdraw;
    fromPartial(object: Partial<Withdraw>): Withdraw;
    fromAmino(object: WithdrawAmino): Withdraw;
    toAmino(message: Withdraw): WithdrawAmino;
    fromAminoMsg(object: WithdrawAminoMsg): Withdraw;
    fromProtoMsg(message: WithdrawProtoMsg): Withdraw;
    toProto(message: Withdraw): Uint8Array;
    toProtoMsg(message: Withdraw): WithdrawProtoMsg;
};
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
export declare const Response: {
    typeUrl: string;
    encode(message: Response, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Response;
    fromPartial(object: Partial<Response>): Response;
    fromAmino(object: ResponseAmino): Response;
    toAmino(message: Response): ResponseAmino;
    fromAminoMsg(object: ResponseAminoMsg): Response;
    fromProtoMsg(message: ResponseProtoMsg): Response;
    toProto(message: Response): Uint8Array;
    toProtoMsg(message: Response): ResponseProtoMsg;
};
export declare const Operator: {
    typeUrl: string;
    encode(message: Operator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Operator;
    fromPartial(object: Partial<Operator>): Operator;
    fromAmino(object: OperatorAmino): Operator;
    toAmino(message: Operator): OperatorAmino;
    fromAminoMsg(object: OperatorAminoMsg): Operator;
    fromProtoMsg(message: OperatorProtoMsg): Operator;
    toProto(message: Operator): Uint8Array;
    toProtoMsg(message: Operator): OperatorProtoMsg;
};
export declare const TaskParams: {
    typeUrl: string;
    encode(message: TaskParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TaskParams;
    fromPartial(object: Partial<TaskParams>): TaskParams;
    fromAmino(object: TaskParamsAmino): TaskParams;
    toAmino(message: TaskParams): TaskParamsAmino;
    fromAminoMsg(object: TaskParamsAminoMsg): TaskParams;
    fromProtoMsg(message: TaskParamsProtoMsg): TaskParams;
    toProto(message: TaskParams): Uint8Array;
    toProtoMsg(message: TaskParams): TaskParamsProtoMsg;
};
export declare const LockedPoolParams: {
    typeUrl: string;
    encode(message: LockedPoolParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LockedPoolParams;
    fromPartial(object: Partial<LockedPoolParams>): LockedPoolParams;
    fromAmino(object: LockedPoolParamsAmino): LockedPoolParams;
    toAmino(message: LockedPoolParams): LockedPoolParamsAmino;
    fromAminoMsg(object: LockedPoolParamsAminoMsg): LockedPoolParams;
    fromProtoMsg(message: LockedPoolParamsProtoMsg): LockedPoolParams;
    toProto(message: LockedPoolParams): Uint8Array;
    toProtoMsg(message: LockedPoolParams): LockedPoolParamsProtoMsg;
};
export declare const TaskID: {
    typeUrl: string;
    encode(message: TaskID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TaskID;
    fromPartial(object: Partial<TaskID>): TaskID;
    fromAmino(object: TaskIDAmino): TaskID;
    toAmino(message: TaskID): TaskIDAmino;
    fromAminoMsg(object: TaskIDAminoMsg): TaskID;
    fromProtoMsg(message: TaskIDProtoMsg): TaskID;
    toProto(message: TaskID): Uint8Array;
    toProtoMsg(message: TaskID): TaskIDProtoMsg;
};
export declare const TaskIDs: {
    typeUrl: string;
    encode(message: TaskIDs, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TaskIDs;
    fromPartial(object: Partial<TaskIDs>): TaskIDs;
    fromAmino(object: TaskIDsAmino): TaskIDs;
    toAmino(message: TaskIDs): TaskIDsAmino;
    fromAminoMsg(object: TaskIDsAminoMsg): TaskIDs;
    fromProtoMsg(message: TaskIDsProtoMsg): TaskIDs;
    toProto(message: TaskIDs): Uint8Array;
    toProtoMsg(message: TaskIDs): TaskIDsProtoMsg;
};
export declare const CoinsProto: {
    typeUrl: string;
    encode(message: CoinsProto, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CoinsProto;
    fromPartial(object: Partial<CoinsProto>): CoinsProto;
    fromAmino(object: CoinsProtoAmino): CoinsProto;
    toAmino(message: CoinsProto): CoinsProtoAmino;
    fromAminoMsg(object: CoinsProtoAminoMsg): CoinsProto;
    fromProtoMsg(message: CoinsProtoProtoMsg): CoinsProto;
    toProto(message: CoinsProto): Uint8Array;
    toProtoMsg(message: CoinsProto): CoinsProtoProtoMsg;
};
export declare const TxTask: {
    typeUrl: string;
    encode(message: TxTask, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TxTask;
    fromPartial(object: Partial<TxTask>): TxTask;
    fromAmino(object: TxTaskAmino): TxTask;
    toAmino(message: TxTask): TxTaskAmino;
    fromAminoMsg(object: TxTaskAminoMsg): TxTask;
    fromProtoMsg(message: TxTaskProtoMsg): TxTask;
    toProto(message: TxTask): Uint8Array;
    toProtoMsg(message: TxTask): TxTaskProtoMsg;
};
