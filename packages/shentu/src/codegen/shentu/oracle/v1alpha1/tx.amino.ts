import { MsgCreateOperator, MsgRemoveOperator, MsgAddCollateral, MsgReduceCollateral, MsgWithdrawReward, MsgCreateTask, MsgTaskResponse, MsgDeleteTask, MsgCreateTxTask, MsgTxTaskResponse, MsgDeleteTxTask } from "./tx";
export const AminoConverter = {
  "/shentu.oracle.v1alpha1.MsgCreateOperator": {
    aminoType: "/shentu.oracle.v1alpha1.MsgCreateOperator",
    toAmino: MsgCreateOperator.toAmino,
    fromAmino: MsgCreateOperator.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgRemoveOperator": {
    aminoType: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
    toAmino: MsgRemoveOperator.toAmino,
    fromAmino: MsgRemoveOperator.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgAddCollateral": {
    aminoType: "/shentu.oracle.v1alpha1.MsgAddCollateral",
    toAmino: MsgAddCollateral.toAmino,
    fromAmino: MsgAddCollateral.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgReduceCollateral": {
    aminoType: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
    toAmino: MsgReduceCollateral.toAmino,
    fromAmino: MsgReduceCollateral.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgWithdrawReward": {
    aminoType: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
    toAmino: MsgWithdrawReward.toAmino,
    fromAmino: MsgWithdrawReward.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgCreateTask": {
    aminoType: "/shentu.oracle.v1alpha1.MsgCreateTask",
    toAmino: MsgCreateTask.toAmino,
    fromAmino: MsgCreateTask.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgTaskResponse": {
    aminoType: "/shentu.oracle.v1alpha1.MsgTaskResponse",
    toAmino: MsgTaskResponse.toAmino,
    fromAmino: MsgTaskResponse.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgDeleteTask": {
    aminoType: "/shentu.oracle.v1alpha1.MsgDeleteTask",
    toAmino: MsgDeleteTask.toAmino,
    fromAmino: MsgDeleteTask.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgCreateTxTask": {
    aminoType: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
    toAmino: MsgCreateTxTask.toAmino,
    fromAmino: MsgCreateTxTask.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgTxTaskResponse": {
    aminoType: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
    toAmino: MsgTxTaskResponse.toAmino,
    fromAmino: MsgTxTaskResponse.fromAmino
  },
  "/shentu.oracle.v1alpha1.MsgDeleteTxTask": {
    aminoType: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
    toAmino: MsgDeleteTxTask.toAmino,
    fromAmino: MsgDeleteTxTask.fromAmino
  }
};