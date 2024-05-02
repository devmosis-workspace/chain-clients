import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateOperator, MsgCreateOperatorResponse, MsgRemoveOperator, MsgRemoveOperatorResponse, MsgAddCollateral, MsgAddCollateralResponse, MsgReduceCollateral, MsgReduceCollateralResponse, MsgWithdrawReward, MsgWithdrawRewardResponse, MsgCreateTask, MsgCreateTaskResponse, MsgTaskResponse, MsgTaskResponseResponse, MsgDeleteTask, MsgDeleteTaskResponse, MsgCreateTxTask, MsgCreateTxTaskResponse, MsgTxTaskResponse, MsgTxTaskResponseResponse, MsgDeleteTxTask, MsgDeleteTxTaskResponse } from "./tx";
/** Msg defines the shield Msg service. */
export interface Msg {
  createOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse>;
  removeOperator(request: MsgRemoveOperator): Promise<MsgRemoveOperatorResponse>;
  addCollateral(request: MsgAddCollateral): Promise<MsgAddCollateralResponse>;
  reduceCollateral(request: MsgReduceCollateral): Promise<MsgReduceCollateralResponse>;
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse>;
  createTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse>;
  taskResponse(request: MsgTaskResponse): Promise<MsgTaskResponseResponse>;
  deleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse>;
  createTxTask(request: MsgCreateTxTask): Promise<MsgCreateTxTaskResponse>;
  txTaskResponse(request: MsgTxTaskResponse): Promise<MsgTxTaskResponseResponse>;
  deleteTxTask(request: MsgDeleteTxTask): Promise<MsgDeleteTxTaskResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createOperator = this.createOperator.bind(this);
    this.removeOperator = this.removeOperator.bind(this);
    this.addCollateral = this.addCollateral.bind(this);
    this.reduceCollateral = this.reduceCollateral.bind(this);
    this.withdrawReward = this.withdrawReward.bind(this);
    this.createTask = this.createTask.bind(this);
    this.taskResponse = this.taskResponse.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.createTxTask = this.createTxTask.bind(this);
    this.txTaskResponse = this.txTaskResponse.bind(this);
    this.deleteTxTask = this.deleteTxTask.bind(this);
  }
  createOperator(request: MsgCreateOperator): Promise<MsgCreateOperatorResponse> {
    const data = MsgCreateOperator.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "CreateOperator", data);
    return promise.then(data => MsgCreateOperatorResponse.decode(new BinaryReader(data)));
  }
  removeOperator(request: MsgRemoveOperator): Promise<MsgRemoveOperatorResponse> {
    const data = MsgRemoveOperator.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "RemoveOperator", data);
    return promise.then(data => MsgRemoveOperatorResponse.decode(new BinaryReader(data)));
  }
  addCollateral(request: MsgAddCollateral): Promise<MsgAddCollateralResponse> {
    const data = MsgAddCollateral.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "AddCollateral", data);
    return promise.then(data => MsgAddCollateralResponse.decode(new BinaryReader(data)));
  }
  reduceCollateral(request: MsgReduceCollateral): Promise<MsgReduceCollateralResponse> {
    const data = MsgReduceCollateral.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "ReduceCollateral", data);
    return promise.then(data => MsgReduceCollateralResponse.decode(new BinaryReader(data)));
  }
  withdrawReward(request: MsgWithdrawReward): Promise<MsgWithdrawRewardResponse> {
    const data = MsgWithdrawReward.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "WithdrawReward", data);
    return promise.then(data => MsgWithdrawRewardResponse.decode(new BinaryReader(data)));
  }
  createTask(request: MsgCreateTask): Promise<MsgCreateTaskResponse> {
    const data = MsgCreateTask.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "CreateTask", data);
    return promise.then(data => MsgCreateTaskResponse.decode(new BinaryReader(data)));
  }
  taskResponse(request: MsgTaskResponse): Promise<MsgTaskResponseResponse> {
    const data = MsgTaskResponse.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "TaskResponse", data);
    return promise.then(data => MsgTaskResponseResponse.decode(new BinaryReader(data)));
  }
  deleteTask(request: MsgDeleteTask): Promise<MsgDeleteTaskResponse> {
    const data = MsgDeleteTask.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "DeleteTask", data);
    return promise.then(data => MsgDeleteTaskResponse.decode(new BinaryReader(data)));
  }
  createTxTask(request: MsgCreateTxTask): Promise<MsgCreateTxTaskResponse> {
    const data = MsgCreateTxTask.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "CreateTxTask", data);
    return promise.then(data => MsgCreateTxTaskResponse.decode(new BinaryReader(data)));
  }
  txTaskResponse(request: MsgTxTaskResponse): Promise<MsgTxTaskResponseResponse> {
    const data = MsgTxTaskResponse.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "TxTaskResponse", data);
    return promise.then(data => MsgTxTaskResponseResponse.decode(new BinaryReader(data)));
  }
  deleteTxTask(request: MsgDeleteTxTask): Promise<MsgDeleteTxTaskResponse> {
    const data = MsgDeleteTxTask.encode(request).finish();
    const promise = this.rpc.request("shentu.oracle.v1alpha1.Msg", "DeleteTxTask", data);
    return promise.then(data => MsgDeleteTxTaskResponse.decode(new BinaryReader(data)));
  }
}