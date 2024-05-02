import { Operator, OperatorAmino, OperatorSDKType, LockedPoolParams, LockedPoolParamsAmino, LockedPoolParamsSDKType, TaskParams, TaskParamsAmino, TaskParamsSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, Task, TaskAmino, TaskSDKType, TxTask, TxTaskAmino, TxTaskSDKType } from "./oracle";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
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
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
