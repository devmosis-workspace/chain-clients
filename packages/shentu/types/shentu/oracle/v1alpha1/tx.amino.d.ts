import { MsgCreateOperator, MsgRemoveOperator, MsgAddCollateral, MsgReduceCollateral, MsgWithdrawReward, MsgCreateTask, MsgTaskResponse, MsgDeleteTask, MsgCreateTxTask, MsgTxTaskResponse, MsgDeleteTxTask } from "./tx";
export declare const AminoConverter: {
    "/shentu.oracle.v1alpha1.MsgCreateOperator": {
        aminoType: string;
        toAmino: (message: MsgCreateOperator) => import("./tx").MsgCreateOperatorAmino;
        fromAmino: (object: import("./tx").MsgCreateOperatorAmino) => MsgCreateOperator;
    };
    "/shentu.oracle.v1alpha1.MsgRemoveOperator": {
        aminoType: string;
        toAmino: (message: MsgRemoveOperator) => import("./tx").MsgRemoveOperatorAmino;
        fromAmino: (object: import("./tx").MsgRemoveOperatorAmino) => MsgRemoveOperator;
    };
    "/shentu.oracle.v1alpha1.MsgAddCollateral": {
        aminoType: string;
        toAmino: (message: MsgAddCollateral) => import("./tx").MsgAddCollateralAmino;
        fromAmino: (object: import("./tx").MsgAddCollateralAmino) => MsgAddCollateral;
    };
    "/shentu.oracle.v1alpha1.MsgReduceCollateral": {
        aminoType: string;
        toAmino: (message: MsgReduceCollateral) => import("./tx").MsgReduceCollateralAmino;
        fromAmino: (object: import("./tx").MsgReduceCollateralAmino) => MsgReduceCollateral;
    };
    "/shentu.oracle.v1alpha1.MsgWithdrawReward": {
        aminoType: string;
        toAmino: (message: MsgWithdrawReward) => import("./tx").MsgWithdrawRewardAmino;
        fromAmino: (object: import("./tx").MsgWithdrawRewardAmino) => MsgWithdrawReward;
    };
    "/shentu.oracle.v1alpha1.MsgCreateTask": {
        aminoType: string;
        toAmino: (message: MsgCreateTask) => import("./tx").MsgCreateTaskAmino;
        fromAmino: (object: import("./tx").MsgCreateTaskAmino) => MsgCreateTask;
    };
    "/shentu.oracle.v1alpha1.MsgTaskResponse": {
        aminoType: string;
        toAmino: (message: MsgTaskResponse) => import("./tx").MsgTaskResponseAmino;
        fromAmino: (object: import("./tx").MsgTaskResponseAmino) => MsgTaskResponse;
    };
    "/shentu.oracle.v1alpha1.MsgDeleteTask": {
        aminoType: string;
        toAmino: (message: MsgDeleteTask) => import("./tx").MsgDeleteTaskAmino;
        fromAmino: (object: import("./tx").MsgDeleteTaskAmino) => MsgDeleteTask;
    };
    "/shentu.oracle.v1alpha1.MsgCreateTxTask": {
        aminoType: string;
        toAmino: (message: MsgCreateTxTask) => import("./tx").MsgCreateTxTaskAmino;
        fromAmino: (object: import("./tx").MsgCreateTxTaskAmino) => MsgCreateTxTask;
    };
    "/shentu.oracle.v1alpha1.MsgTxTaskResponse": {
        aminoType: string;
        toAmino: (message: MsgTxTaskResponse) => import("./tx").MsgTxTaskResponseAmino;
        fromAmino: (object: import("./tx").MsgTxTaskResponseAmino) => MsgTxTaskResponse;
    };
    "/shentu.oracle.v1alpha1.MsgDeleteTxTask": {
        aminoType: string;
        toAmino: (message: MsgDeleteTxTask) => import("./tx").MsgDeleteTxTaskAmino;
        fromAmino: (object: import("./tx").MsgDeleteTxTaskAmino) => MsgDeleteTxTask;
    };
};
