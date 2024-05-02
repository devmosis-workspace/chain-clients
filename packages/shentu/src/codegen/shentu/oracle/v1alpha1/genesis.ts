import { Operator, OperatorAmino, OperatorSDKType, LockedPoolParams, LockedPoolParamsAmino, LockedPoolParamsSDKType, TaskParams, TaskParamsAmino, TaskParamsSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, Task, TaskAmino, TaskSDKType, TxTask, TxTaskAmino, TxTaskSDKType } from "./oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisState {
  operators: Operator[];
  totalCollateral: Coin[];
  poolParams?: LockedPoolParams;
  taskParams?: TaskParams;
  withdraws: Withdraw[];
  tasks: Task[];
  txTasks: TxTask[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.GenesisState";
  value: Uint8Array;
}
export interface GenesisStateAmino {
  operators?: OperatorAmino[];
  total_collateral?: CoinAmino[];
  pool_params?: LockedPoolParamsAmino;
  task_params?: TaskParamsAmino;
  withdraws?: WithdrawAmino[];
  tasks?: TaskAmino[];
  tx_tasks?: TxTaskAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/shentu.oracle.v1alpha1.GenesisState";
  value: GenesisStateAmino;
}
export interface GenesisStateSDKType {
  operators: OperatorSDKType[];
  total_collateral: CoinSDKType[];
  pool_params?: LockedPoolParamsSDKType;
  task_params?: TaskParamsSDKType;
  withdraws: WithdrawSDKType[];
  tasks: TaskSDKType[];
  tx_tasks: TxTaskSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    operators: [],
    totalCollateral: [],
    poolParams: undefined,
    taskParams: undefined,
    withdraws: [],
    tasks: [],
    txTasks: []
  };
}
export const GenesisState = {
  typeUrl: "/shentu.oracle.v1alpha1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.totalCollateral) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolParams !== undefined) {
      LockedPoolParams.encode(message.poolParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.taskParams !== undefined) {
      TaskParams.encode(message.taskParams, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.withdraws) {
      Withdraw.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.tasks) {
      Task.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.txTasks) {
      TxTask.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => Operator.fromJSON(e)) : [],
      totalCollateral: Array.isArray(object?.totalCollateral) ? object.totalCollateral.map((e: any) => Coin.fromJSON(e)) : [],
      poolParams: isSet(object.poolParams) ? LockedPoolParams.fromJSON(object.poolParams) : undefined,
      taskParams: isSet(object.taskParams) ? TaskParams.fromJSON(object.taskParams) : undefined,
      withdraws: Array.isArray(object?.withdraws) ? object.withdraws.map((e: any) => Withdraw.fromJSON(e)) : [],
      tasks: Array.isArray(object?.tasks) ? object.tasks.map((e: any) => Task.fromJSON(e)) : [],
      txTasks: Array.isArray(object?.txTasks) ? object.txTasks.map((e: any) => TxTask.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    message.totalCollateral = object.totalCollateral?.map(e => Coin.fromPartial(e)) || [];
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? LockedPoolParams.fromPartial(object.poolParams) : undefined;
    message.taskParams = object.taskParams !== undefined && object.taskParams !== null ? TaskParams.fromPartial(object.taskParams) : undefined;
    message.withdraws = object.withdraws?.map(e => Withdraw.fromPartial(e)) || [];
    message.tasks = object.tasks?.map(e => Task.fromPartial(e)) || [];
    message.txTasks = object.txTasks?.map(e => TxTask.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    message.totalCollateral = object.total_collateral?.map(e => Coin.fromAmino(e)) || [];
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = LockedPoolParams.fromAmino(object.pool_params);
    }
    if (object.task_params !== undefined && object.task_params !== null) {
      message.taskParams = TaskParams.fromAmino(object.task_params);
    }
    message.withdraws = object.withdraws?.map(e => Withdraw.fromAmino(e)) || [];
    message.tasks = object.tasks?.map(e => Task.fromAmino(e)) || [];
    message.txTasks = object.tx_tasks?.map(e => TxTask.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    if (message.totalCollateral) {
      obj.total_collateral = message.totalCollateral.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total_collateral = message.totalCollateral;
    }
    obj.pool_params = message.poolParams ? LockedPoolParams.toAmino(message.poolParams) : undefined;
    obj.task_params = message.taskParams ? TaskParams.toAmino(message.taskParams) : undefined;
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? Withdraw.toAmino(e) : undefined);
    } else {
      obj.withdraws = message.withdraws;
    }
    if (message.tasks) {
      obj.tasks = message.tasks.map(e => e ? Task.toAmino(e) : undefined);
    } else {
      obj.tasks = message.tasks;
    }
    if (message.txTasks) {
      obj.tx_tasks = message.txTasks.map(e => e ? TxTask.toAmino(e) : undefined);
    } else {
      obj.tx_tasks = message.txTasks;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};