import { Operator, OperatorAmino, OperatorSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, Task, TaskAmino, TaskSDKType, TxTask, TxTaskAmino, TxTaskSDKType, Response, ResponseAmino, ResponseSDKType, TaskParams, TaskParamsAmino, TaskParamsSDKType, LockedPoolParams, LockedPoolParamsAmino, LockedPoolParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
export interface QueryOperatorRequest {
    address: string;
}
export interface QueryOperatorRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorRequest";
    value: Uint8Array;
}
export interface QueryOperatorRequestAmino {
    address?: string;
}
export interface QueryOperatorRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryOperatorRequest";
    value: QueryOperatorRequestAmino;
}
export interface QueryOperatorRequestSDKType {
    address: string;
}
export interface QueryOperatorResponse {
    operator: Operator;
}
export interface QueryOperatorResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorResponse";
    value: Uint8Array;
}
export interface QueryOperatorResponseAmino {
    operator?: OperatorAmino;
}
export interface QueryOperatorResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryOperatorResponse";
    value: QueryOperatorResponseAmino;
}
export interface QueryOperatorResponseSDKType {
    operator: OperatorSDKType;
}
export interface QueryOperatorsRequest {
}
export interface QueryOperatorsRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsRequest";
    value: Uint8Array;
}
export interface QueryOperatorsRequestAmino {
}
export interface QueryOperatorsRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryOperatorsRequest";
    value: QueryOperatorsRequestAmino;
}
export interface QueryOperatorsRequestSDKType {
}
export interface QueryOperatorsResponse {
    operators: Operator[];
}
export interface QueryOperatorsResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsResponse";
    value: Uint8Array;
}
export interface QueryOperatorsResponseAmino {
    operators?: OperatorAmino[];
}
export interface QueryOperatorsResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryOperatorsResponse";
    value: QueryOperatorsResponseAmino;
}
export interface QueryOperatorsResponseSDKType {
    operators: OperatorSDKType[];
}
export interface QueryWithdrawsRequest {
}
export interface QueryWithdrawsRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest";
    value: Uint8Array;
}
export interface QueryWithdrawsRequestAmino {
}
export interface QueryWithdrawsRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest";
    value: QueryWithdrawsRequestAmino;
}
export interface QueryWithdrawsRequestSDKType {
}
export interface QueryWithdrawsResponse {
    withdraws: Withdraw[];
}
export interface QueryWithdrawsResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsResponse";
    value: Uint8Array;
}
export interface QueryWithdrawsResponseAmino {
    withdraws?: WithdrawAmino[];
}
export interface QueryWithdrawsResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryWithdrawsResponse";
    value: QueryWithdrawsResponseAmino;
}
export interface QueryWithdrawsResponseSDKType {
    withdraws: WithdrawSDKType[];
}
export interface QueryTaskRequest {
    contract: string;
    function: string;
}
export interface QueryTaskRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTaskRequest";
    value: Uint8Array;
}
export interface QueryTaskRequestAmino {
    contract?: string;
    function?: string;
}
export interface QueryTaskRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTaskRequest";
    value: QueryTaskRequestAmino;
}
export interface QueryTaskRequestSDKType {
    contract: string;
    function: string;
}
export interface QueryTaskResponse {
    task: Task;
}
export interface QueryTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTaskResponse";
    value: Uint8Array;
}
export interface QueryTaskResponseAmino {
    task?: TaskAmino;
}
export interface QueryTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTaskResponse";
    value: QueryTaskResponseAmino;
}
export interface QueryTaskResponseSDKType {
    task: TaskSDKType;
}
export interface QueryTxTaskRequest {
    atxHash: string;
}
export interface QueryTxTaskRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskRequest";
    value: Uint8Array;
}
export interface QueryTxTaskRequestAmino {
    atx_hash?: string;
}
export interface QueryTxTaskRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTxTaskRequest";
    value: QueryTxTaskRequestAmino;
}
export interface QueryTxTaskRequestSDKType {
    atx_hash: string;
}
export interface QueryTxTaskResponse {
    task: TxTask;
}
export interface QueryTxTaskResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskResponse";
    value: Uint8Array;
}
export interface QueryTxTaskResponseAmino {
    task?: TxTaskAmino;
}
export interface QueryTxTaskResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTxTaskResponse";
    value: QueryTxTaskResponseAmino;
}
export interface QueryTxTaskResponseSDKType {
    task: TxTaskSDKType;
}
export interface QueryResponseRequest {
    contract: string;
    function: string;
    operatorAddress: string;
}
export interface QueryResponseRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryResponseRequest";
    value: Uint8Array;
}
export interface QueryResponseRequestAmino {
    contract?: string;
    function?: string;
    operator_address?: string;
}
export interface QueryResponseRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryResponseRequest";
    value: QueryResponseRequestAmino;
}
export interface QueryResponseRequestSDKType {
    contract: string;
    function: string;
    operator_address: string;
}
export interface QueryResponseResponse {
    response: Response;
}
export interface QueryResponseResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryResponseResponse";
    value: Uint8Array;
}
export interface QueryResponseResponseAmino {
    response?: ResponseAmino;
}
export interface QueryResponseResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryResponseResponse";
    value: QueryResponseResponseAmino;
}
export interface QueryResponseResponseSDKType {
    response: ResponseSDKType;
}
export interface QueryTxResponseRequest {
    atxHash: string;
    operatorAddress: string;
}
export interface QueryTxResponseRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseRequest";
    value: Uint8Array;
}
export interface QueryTxResponseRequestAmino {
    atx_hash?: string;
    operator_address?: string;
}
export interface QueryTxResponseRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTxResponseRequest";
    value: QueryTxResponseRequestAmino;
}
export interface QueryTxResponseRequestSDKType {
    atx_hash: string;
    operator_address: string;
}
export interface QueryTxResponseResponse {
    response: Response;
}
export interface QueryTxResponseResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseResponse";
    value: Uint8Array;
}
export interface QueryTxResponseResponseAmino {
    response?: ResponseAmino;
}
export interface QueryTxResponseResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryTxResponseResponse";
    value: QueryTxResponseResponseAmino;
}
export interface QueryTxResponseResponseSDKType {
    response: ResponseSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    taskParams: TaskParams;
    poolParams: LockedPoolParams;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/shentu.oracle.v1alpha1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    task_params?: TaskParamsAmino;
    pool_params?: LockedPoolParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
    type: "/shentu.oracle.v1alpha1.QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    task_params: TaskParamsSDKType;
    pool_params: LockedPoolParamsSDKType;
}
export declare const QueryOperatorRequest: {
    typeUrl: string;
    encode(message: QueryOperatorRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOperatorRequest;
    fromPartial(object: Partial<QueryOperatorRequest>): QueryOperatorRequest;
    fromAmino(object: QueryOperatorRequestAmino): QueryOperatorRequest;
    toAmino(message: QueryOperatorRequest): QueryOperatorRequestAmino;
    fromAminoMsg(object: QueryOperatorRequestAminoMsg): QueryOperatorRequest;
    fromProtoMsg(message: QueryOperatorRequestProtoMsg): QueryOperatorRequest;
    toProto(message: QueryOperatorRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorRequest): QueryOperatorRequestProtoMsg;
};
export declare const QueryOperatorResponse: {
    typeUrl: string;
    encode(message: QueryOperatorResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOperatorResponse;
    fromPartial(object: Partial<QueryOperatorResponse>): QueryOperatorResponse;
    fromAmino(object: QueryOperatorResponseAmino): QueryOperatorResponse;
    toAmino(message: QueryOperatorResponse): QueryOperatorResponseAmino;
    fromAminoMsg(object: QueryOperatorResponseAminoMsg): QueryOperatorResponse;
    fromProtoMsg(message: QueryOperatorResponseProtoMsg): QueryOperatorResponse;
    toProto(message: QueryOperatorResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorResponse): QueryOperatorResponseProtoMsg;
};
export declare const QueryOperatorsRequest: {
    typeUrl: string;
    encode(_: QueryOperatorsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryOperatorsRequest;
    fromPartial(_: Partial<QueryOperatorsRequest>): QueryOperatorsRequest;
    fromAmino(_: QueryOperatorsRequestAmino): QueryOperatorsRequest;
    toAmino(_: QueryOperatorsRequest): QueryOperatorsRequestAmino;
    fromAminoMsg(object: QueryOperatorsRequestAminoMsg): QueryOperatorsRequest;
    fromProtoMsg(message: QueryOperatorsRequestProtoMsg): QueryOperatorsRequest;
    toProto(message: QueryOperatorsRequest): Uint8Array;
    toProtoMsg(message: QueryOperatorsRequest): QueryOperatorsRequestProtoMsg;
};
export declare const QueryOperatorsResponse: {
    typeUrl: string;
    encode(message: QueryOperatorsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryOperatorsResponse;
    fromPartial(object: Partial<QueryOperatorsResponse>): QueryOperatorsResponse;
    fromAmino(object: QueryOperatorsResponseAmino): QueryOperatorsResponse;
    toAmino(message: QueryOperatorsResponse): QueryOperatorsResponseAmino;
    fromAminoMsg(object: QueryOperatorsResponseAminoMsg): QueryOperatorsResponse;
    fromProtoMsg(message: QueryOperatorsResponseProtoMsg): QueryOperatorsResponse;
    toProto(message: QueryOperatorsResponse): Uint8Array;
    toProtoMsg(message: QueryOperatorsResponse): QueryOperatorsResponseProtoMsg;
};
export declare const QueryWithdrawsRequest: {
    typeUrl: string;
    encode(_: QueryWithdrawsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryWithdrawsRequest;
    fromPartial(_: Partial<QueryWithdrawsRequest>): QueryWithdrawsRequest;
    fromAmino(_: QueryWithdrawsRequestAmino): QueryWithdrawsRequest;
    toAmino(_: QueryWithdrawsRequest): QueryWithdrawsRequestAmino;
    fromAminoMsg(object: QueryWithdrawsRequestAminoMsg): QueryWithdrawsRequest;
    fromProtoMsg(message: QueryWithdrawsRequestProtoMsg): QueryWithdrawsRequest;
    toProto(message: QueryWithdrawsRequest): Uint8Array;
    toProtoMsg(message: QueryWithdrawsRequest): QueryWithdrawsRequestProtoMsg;
};
export declare const QueryWithdrawsResponse: {
    typeUrl: string;
    encode(message: QueryWithdrawsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryWithdrawsResponse;
    fromPartial(object: Partial<QueryWithdrawsResponse>): QueryWithdrawsResponse;
    fromAmino(object: QueryWithdrawsResponseAmino): QueryWithdrawsResponse;
    toAmino(message: QueryWithdrawsResponse): QueryWithdrawsResponseAmino;
    fromAminoMsg(object: QueryWithdrawsResponseAminoMsg): QueryWithdrawsResponse;
    fromProtoMsg(message: QueryWithdrawsResponseProtoMsg): QueryWithdrawsResponse;
    toProto(message: QueryWithdrawsResponse): Uint8Array;
    toProtoMsg(message: QueryWithdrawsResponse): QueryWithdrawsResponseProtoMsg;
};
export declare const QueryTaskRequest: {
    typeUrl: string;
    encode(message: QueryTaskRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaskRequest;
    fromPartial(object: Partial<QueryTaskRequest>): QueryTaskRequest;
    fromAmino(object: QueryTaskRequestAmino): QueryTaskRequest;
    toAmino(message: QueryTaskRequest): QueryTaskRequestAmino;
    fromAminoMsg(object: QueryTaskRequestAminoMsg): QueryTaskRequest;
    fromProtoMsg(message: QueryTaskRequestProtoMsg): QueryTaskRequest;
    toProto(message: QueryTaskRequest): Uint8Array;
    toProtoMsg(message: QueryTaskRequest): QueryTaskRequestProtoMsg;
};
export declare const QueryTaskResponse: {
    typeUrl: string;
    encode(message: QueryTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTaskResponse;
    fromPartial(object: Partial<QueryTaskResponse>): QueryTaskResponse;
    fromAmino(object: QueryTaskResponseAmino): QueryTaskResponse;
    toAmino(message: QueryTaskResponse): QueryTaskResponseAmino;
    fromAminoMsg(object: QueryTaskResponseAminoMsg): QueryTaskResponse;
    fromProtoMsg(message: QueryTaskResponseProtoMsg): QueryTaskResponse;
    toProto(message: QueryTaskResponse): Uint8Array;
    toProtoMsg(message: QueryTaskResponse): QueryTaskResponseProtoMsg;
};
export declare const QueryTxTaskRequest: {
    typeUrl: string;
    encode(message: QueryTxTaskRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxTaskRequest;
    fromPartial(object: Partial<QueryTxTaskRequest>): QueryTxTaskRequest;
    fromAmino(object: QueryTxTaskRequestAmino): QueryTxTaskRequest;
    toAmino(message: QueryTxTaskRequest): QueryTxTaskRequestAmino;
    fromAminoMsg(object: QueryTxTaskRequestAminoMsg): QueryTxTaskRequest;
    fromProtoMsg(message: QueryTxTaskRequestProtoMsg): QueryTxTaskRequest;
    toProto(message: QueryTxTaskRequest): Uint8Array;
    toProtoMsg(message: QueryTxTaskRequest): QueryTxTaskRequestProtoMsg;
};
export declare const QueryTxTaskResponse: {
    typeUrl: string;
    encode(message: QueryTxTaskResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxTaskResponse;
    fromPartial(object: Partial<QueryTxTaskResponse>): QueryTxTaskResponse;
    fromAmino(object: QueryTxTaskResponseAmino): QueryTxTaskResponse;
    toAmino(message: QueryTxTaskResponse): QueryTxTaskResponseAmino;
    fromAminoMsg(object: QueryTxTaskResponseAminoMsg): QueryTxTaskResponse;
    fromProtoMsg(message: QueryTxTaskResponseProtoMsg): QueryTxTaskResponse;
    toProto(message: QueryTxTaskResponse): Uint8Array;
    toProtoMsg(message: QueryTxTaskResponse): QueryTxTaskResponseProtoMsg;
};
export declare const QueryResponseRequest: {
    typeUrl: string;
    encode(message: QueryResponseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResponseRequest;
    fromPartial(object: Partial<QueryResponseRequest>): QueryResponseRequest;
    fromAmino(object: QueryResponseRequestAmino): QueryResponseRequest;
    toAmino(message: QueryResponseRequest): QueryResponseRequestAmino;
    fromAminoMsg(object: QueryResponseRequestAminoMsg): QueryResponseRequest;
    fromProtoMsg(message: QueryResponseRequestProtoMsg): QueryResponseRequest;
    toProto(message: QueryResponseRequest): Uint8Array;
    toProtoMsg(message: QueryResponseRequest): QueryResponseRequestProtoMsg;
};
export declare const QueryResponseResponse: {
    typeUrl: string;
    encode(message: QueryResponseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryResponseResponse;
    fromPartial(object: Partial<QueryResponseResponse>): QueryResponseResponse;
    fromAmino(object: QueryResponseResponseAmino): QueryResponseResponse;
    toAmino(message: QueryResponseResponse): QueryResponseResponseAmino;
    fromAminoMsg(object: QueryResponseResponseAminoMsg): QueryResponseResponse;
    fromProtoMsg(message: QueryResponseResponseProtoMsg): QueryResponseResponse;
    toProto(message: QueryResponseResponse): Uint8Array;
    toProtoMsg(message: QueryResponseResponse): QueryResponseResponseProtoMsg;
};
export declare const QueryTxResponseRequest: {
    typeUrl: string;
    encode(message: QueryTxResponseRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxResponseRequest;
    fromPartial(object: Partial<QueryTxResponseRequest>): QueryTxResponseRequest;
    fromAmino(object: QueryTxResponseRequestAmino): QueryTxResponseRequest;
    toAmino(message: QueryTxResponseRequest): QueryTxResponseRequestAmino;
    fromAminoMsg(object: QueryTxResponseRequestAminoMsg): QueryTxResponseRequest;
    fromProtoMsg(message: QueryTxResponseRequestProtoMsg): QueryTxResponseRequest;
    toProto(message: QueryTxResponseRequest): Uint8Array;
    toProtoMsg(message: QueryTxResponseRequest): QueryTxResponseRequestProtoMsg;
};
export declare const QueryTxResponseResponse: {
    typeUrl: string;
    encode(message: QueryTxResponseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryTxResponseResponse;
    fromPartial(object: Partial<QueryTxResponseResponse>): QueryTxResponseResponse;
    fromAmino(object: QueryTxResponseResponseAmino): QueryTxResponseResponse;
    toAmino(message: QueryTxResponseResponse): QueryTxResponseResponseAmino;
    fromAminoMsg(object: QueryTxResponseResponseAminoMsg): QueryTxResponseResponse;
    fromProtoMsg(message: QueryTxResponseResponseProtoMsg): QueryTxResponseResponse;
    toProto(message: QueryTxResponseResponse): Uint8Array;
    toProtoMsg(message: QueryTxResponseResponse): QueryTxResponseResponseProtoMsg;
};
export declare const QueryParamsRequest: {
    typeUrl: string;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): QueryParamsRequest;
    fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): QueryParamsResponse;
    fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
