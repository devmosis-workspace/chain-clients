import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateOperator, MsgRemoveOperator, MsgAddCollateral, MsgReduceCollateral, MsgWithdrawReward, MsgCreateTask, MsgTaskResponse, MsgDeleteTask, MsgCreateTxTask, MsgTxTaskResponse, MsgDeleteTxTask } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.oracle.v1alpha1.MsgCreateOperator", MsgCreateOperator], ["/shentu.oracle.v1alpha1.MsgRemoveOperator", MsgRemoveOperator], ["/shentu.oracle.v1alpha1.MsgAddCollateral", MsgAddCollateral], ["/shentu.oracle.v1alpha1.MsgReduceCollateral", MsgReduceCollateral], ["/shentu.oracle.v1alpha1.MsgWithdrawReward", MsgWithdrawReward], ["/shentu.oracle.v1alpha1.MsgCreateTask", MsgCreateTask], ["/shentu.oracle.v1alpha1.MsgTaskResponse", MsgTaskResponse], ["/shentu.oracle.v1alpha1.MsgDeleteTask", MsgDeleteTask], ["/shentu.oracle.v1alpha1.MsgCreateTxTask", MsgCreateTxTask], ["/shentu.oracle.v1alpha1.MsgTxTaskResponse", MsgTxTaskResponse], ["/shentu.oracle.v1alpha1.MsgDeleteTxTask", MsgDeleteTxTask]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createOperator(value: MsgCreateOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
        value: MsgCreateOperator.encode(value).finish()
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
        value: MsgRemoveOperator.encode(value).finish()
      };
    },
    addCollateral(value: MsgAddCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
        value: MsgAddCollateral.encode(value).finish()
      };
    },
    reduceCollateral(value: MsgReduceCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
        value: MsgReduceCollateral.encode(value).finish()
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
        value: MsgWithdrawReward.encode(value).finish()
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
        value: MsgCreateTask.encode(value).finish()
      };
    },
    taskResponse(value: MsgTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
        value: MsgTaskResponse.encode(value).finish()
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
        value: MsgDeleteTask.encode(value).finish()
      };
    },
    createTxTask(value: MsgCreateTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
        value: MsgCreateTxTask.encode(value).finish()
      };
    },
    txTaskResponse(value: MsgTxTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
        value: MsgTxTaskResponse.encode(value).finish()
      };
    },
    deleteTxTask(value: MsgDeleteTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
        value: MsgDeleteTxTask.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createOperator(value: MsgCreateOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
        value
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
        value
      };
    },
    addCollateral(value: MsgAddCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
        value
      };
    },
    reduceCollateral(value: MsgReduceCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
        value
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
        value
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
        value
      };
    },
    taskResponse(value: MsgTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
        value
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
        value
      };
    },
    createTxTask(value: MsgCreateTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
        value
      };
    },
    txTaskResponse(value: MsgTxTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
        value
      };
    },
    deleteTxTask(value: MsgDeleteTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
        value
      };
    }
  },
  fromJSON: {
    createOperator(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
        value: MsgCreateOperator.fromJSON(value)
      };
    },
    removeOperator(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
        value: MsgRemoveOperator.fromJSON(value)
      };
    },
    addCollateral(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
        value: MsgAddCollateral.fromJSON(value)
      };
    },
    reduceCollateral(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
        value: MsgReduceCollateral.fromJSON(value)
      };
    },
    withdrawReward(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
        value: MsgWithdrawReward.fromJSON(value)
      };
    },
    createTask(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
        value: MsgCreateTask.fromJSON(value)
      };
    },
    taskResponse(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
        value: MsgTaskResponse.fromJSON(value)
      };
    },
    deleteTask(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
        value: MsgDeleteTask.fromJSON(value)
      };
    },
    createTxTask(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
        value: MsgCreateTxTask.fromJSON(value)
      };
    },
    txTaskResponse(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
        value: MsgTxTaskResponse.fromJSON(value)
      };
    },
    deleteTxTask(value: any) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
        value: MsgDeleteTxTask.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createOperator(value: MsgCreateOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateOperator",
        value: MsgCreateOperator.fromPartial(value)
      };
    },
    removeOperator(value: MsgRemoveOperator) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgRemoveOperator",
        value: MsgRemoveOperator.fromPartial(value)
      };
    },
    addCollateral(value: MsgAddCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgAddCollateral",
        value: MsgAddCollateral.fromPartial(value)
      };
    },
    reduceCollateral(value: MsgReduceCollateral) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgReduceCollateral",
        value: MsgReduceCollateral.fromPartial(value)
      };
    },
    withdrawReward(value: MsgWithdrawReward) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgWithdrawReward",
        value: MsgWithdrawReward.fromPartial(value)
      };
    },
    createTask(value: MsgCreateTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTask",
        value: MsgCreateTask.fromPartial(value)
      };
    },
    taskResponse(value: MsgTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTaskResponse",
        value: MsgTaskResponse.fromPartial(value)
      };
    },
    deleteTask(value: MsgDeleteTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTask",
        value: MsgDeleteTask.fromPartial(value)
      };
    },
    createTxTask(value: MsgCreateTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgCreateTxTask",
        value: MsgCreateTxTask.fromPartial(value)
      };
    },
    txTaskResponse(value: MsgTxTaskResponse) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgTxTaskResponse",
        value: MsgTxTaskResponse.fromPartial(value)
      };
    },
    deleteTxTask(value: MsgDeleteTxTask) {
      return {
        typeUrl: "/shentu.oracle.v1alpha1.MsgDeleteTxTask",
        value: MsgDeleteTxTask.fromPartial(value)
      };
    }
  }
};