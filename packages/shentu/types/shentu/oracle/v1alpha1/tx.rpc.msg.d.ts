import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
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
