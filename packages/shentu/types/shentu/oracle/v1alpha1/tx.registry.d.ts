import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateOperator, MsgRemoveOperator, MsgAddCollateral, MsgReduceCollateral, MsgWithdrawReward, MsgCreateTask, MsgTaskResponse, MsgDeleteTask, MsgCreateTxTask, MsgTxTaskResponse, MsgDeleteTxTask } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createOperator(value: MsgCreateOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeOperator(value: MsgRemoveOperator): {
            typeUrl: string;
            value: Uint8Array;
        };
        addCollateral(value: MsgAddCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        reduceCollateral(value: MsgReduceCollateral): {
            typeUrl: string;
            value: Uint8Array;
        };
        withdrawReward(value: MsgWithdrawReward): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        taskResponse(value: MsgTaskResponse): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        createTxTask(value: MsgCreateTxTask): {
            typeUrl: string;
            value: Uint8Array;
        };
        txTaskResponse(value: MsgTxTaskResponse): {
            typeUrl: string;
            value: Uint8Array;
        };
        deleteTxTask(value: MsgDeleteTxTask): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createOperator(value: MsgCreateOperator): {
            typeUrl: string;
            value: MsgCreateOperator;
        };
        removeOperator(value: MsgRemoveOperator): {
            typeUrl: string;
            value: MsgRemoveOperator;
        };
        addCollateral(value: MsgAddCollateral): {
            typeUrl: string;
            value: MsgAddCollateral;
        };
        reduceCollateral(value: MsgReduceCollateral): {
            typeUrl: string;
            value: MsgReduceCollateral;
        };
        withdrawReward(value: MsgWithdrawReward): {
            typeUrl: string;
            value: MsgWithdrawReward;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        taskResponse(value: MsgTaskResponse): {
            typeUrl: string;
            value: MsgTaskResponse;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        createTxTask(value: MsgCreateTxTask): {
            typeUrl: string;
            value: MsgCreateTxTask;
        };
        txTaskResponse(value: MsgTxTaskResponse): {
            typeUrl: string;
            value: MsgTxTaskResponse;
        };
        deleteTxTask(value: MsgDeleteTxTask): {
            typeUrl: string;
            value: MsgDeleteTxTask;
        };
    };
    fromJSON: {
        createOperator(value: any): {
            typeUrl: string;
            value: MsgCreateOperator;
        };
        removeOperator(value: any): {
            typeUrl: string;
            value: MsgRemoveOperator;
        };
        addCollateral(value: any): {
            typeUrl: string;
            value: MsgAddCollateral;
        };
        reduceCollateral(value: any): {
            typeUrl: string;
            value: MsgReduceCollateral;
        };
        withdrawReward(value: any): {
            typeUrl: string;
            value: MsgWithdrawReward;
        };
        createTask(value: any): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        taskResponse(value: any): {
            typeUrl: string;
            value: MsgTaskResponse;
        };
        deleteTask(value: any): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        createTxTask(value: any): {
            typeUrl: string;
            value: MsgCreateTxTask;
        };
        txTaskResponse(value: any): {
            typeUrl: string;
            value: MsgTxTaskResponse;
        };
        deleteTxTask(value: any): {
            typeUrl: string;
            value: MsgDeleteTxTask;
        };
    };
    fromPartial: {
        createOperator(value: MsgCreateOperator): {
            typeUrl: string;
            value: MsgCreateOperator;
        };
        removeOperator(value: MsgRemoveOperator): {
            typeUrl: string;
            value: MsgRemoveOperator;
        };
        addCollateral(value: MsgAddCollateral): {
            typeUrl: string;
            value: MsgAddCollateral;
        };
        reduceCollateral(value: MsgReduceCollateral): {
            typeUrl: string;
            value: MsgReduceCollateral;
        };
        withdrawReward(value: MsgWithdrawReward): {
            typeUrl: string;
            value: MsgWithdrawReward;
        };
        createTask(value: MsgCreateTask): {
            typeUrl: string;
            value: MsgCreateTask;
        };
        taskResponse(value: MsgTaskResponse): {
            typeUrl: string;
            value: MsgTaskResponse;
        };
        deleteTask(value: MsgDeleteTask): {
            typeUrl: string;
            value: MsgDeleteTask;
        };
        createTxTask(value: MsgCreateTxTask): {
            typeUrl: string;
            value: MsgCreateTxTask;
        };
        txTaskResponse(value: MsgTxTaskResponse): {
            typeUrl: string;
            value: MsgTxTaskResponse;
        };
        deleteTxTask(value: MsgDeleteTxTask): {
            typeUrl: string;
            value: MsgDeleteTxTask;
        };
    };
};
