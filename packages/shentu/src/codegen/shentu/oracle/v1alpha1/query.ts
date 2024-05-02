import { Operator, OperatorAmino, OperatorSDKType, Withdraw, WithdrawAmino, WithdrawSDKType, Task, TaskAmino, TaskSDKType, TxTask, TxTaskAmino, TxTaskSDKType, Response, ResponseAmino, ResponseSDKType, TaskParams, TaskParamsAmino, TaskParamsSDKType, LockedPoolParams, LockedPoolParamsAmino, LockedPoolParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
export interface QueryOperatorsRequest {}
export interface QueryOperatorsRequestProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsRequest";
  value: Uint8Array;
}
export interface QueryOperatorsRequestAmino {}
export interface QueryOperatorsRequestAminoMsg {
  type: "/shentu.oracle.v1alpha1.QueryOperatorsRequest";
  value: QueryOperatorsRequestAmino;
}
export interface QueryOperatorsRequestSDKType {}
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
export interface QueryWithdrawsRequest {}
export interface QueryWithdrawsRequestProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest";
  value: Uint8Array;
}
export interface QueryWithdrawsRequestAmino {}
export interface QueryWithdrawsRequestAminoMsg {
  type: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest";
  value: QueryWithdrawsRequestAmino;
}
export interface QueryWithdrawsRequestSDKType {}
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
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/shentu.oracle.v1alpha1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/shentu.oracle.v1alpha1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
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
function createBaseQueryOperatorRequest(): QueryOperatorRequest {
  return {
    address: ""
  };
}
export const QueryOperatorRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorRequest",
  encode(message: QueryOperatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryOperatorRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryOperatorRequest>): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryOperatorRequestAmino): QueryOperatorRequest {
    const message = createBaseQueryOperatorRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryOperatorRequest): QueryOperatorRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorRequestAminoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorRequestProtoMsg): QueryOperatorRequest {
    return QueryOperatorRequest.decode(message.value);
  },
  toProto(message: QueryOperatorRequest): Uint8Array {
    return QueryOperatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorRequest): QueryOperatorRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorRequest",
      value: QueryOperatorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorResponse(): QueryOperatorResponse {
  return {
    operator: Operator.fromPartial({})
  };
}
export const QueryOperatorResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorResponse",
  encode(message: QueryOperatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.operator !== undefined) {
      Operator.encode(message.operator, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOperatorResponse {
    return {
      operator: isSet(object.operator) ? Operator.fromJSON(object.operator) : undefined
    };
  },
  fromPartial(object: Partial<QueryOperatorResponse>): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    message.operator = object.operator !== undefined && object.operator !== null ? Operator.fromPartial(object.operator) : undefined;
    return message;
  },
  fromAmino(object: QueryOperatorResponseAmino): QueryOperatorResponse {
    const message = createBaseQueryOperatorResponse();
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = Operator.fromAmino(object.operator);
    }
    return message;
  },
  toAmino(message: QueryOperatorResponse): QueryOperatorResponseAmino {
    const obj: any = {};
    obj.operator = message.operator ? Operator.toAmino(message.operator) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryOperatorResponseAminoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorResponseProtoMsg): QueryOperatorResponse {
    return QueryOperatorResponse.decode(message.value);
  },
  toProto(message: QueryOperatorResponse): Uint8Array {
    return QueryOperatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorResponse): QueryOperatorResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorResponse",
      value: QueryOperatorResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsRequest(): QueryOperatorsRequest {
  return {};
}
export const QueryOperatorsRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsRequest",
  encode(_: QueryOperatorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryOperatorsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryOperatorsRequest>): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    return message;
  },
  fromAmino(_: QueryOperatorsRequestAmino): QueryOperatorsRequest {
    const message = createBaseQueryOperatorsRequest();
    return message;
  },
  toAmino(_: QueryOperatorsRequest): QueryOperatorsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsRequestAminoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsRequestProtoMsg): QueryOperatorsRequest {
    return QueryOperatorsRequest.decode(message.value);
  },
  toProto(message: QueryOperatorsRequest): Uint8Array {
    return QueryOperatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsRequest): QueryOperatorsRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsRequest",
      value: QueryOperatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOperatorsResponse(): QueryOperatorsResponse {
  return {
    operators: []
  };
}
export const QueryOperatorsResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsResponse",
  encode(message: QueryOperatorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operators) {
      Operator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryOperatorsResponse {
    return {
      operators: Array.isArray(object?.operators) ? object.operators.map((e: any) => Operator.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryOperatorsResponse>): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryOperatorsResponseAmino): QueryOperatorsResponse {
    const message = createBaseQueryOperatorsResponse();
    message.operators = object.operators?.map(e => Operator.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryOperatorsResponse): QueryOperatorsResponseAmino {
    const obj: any = {};
    if (message.operators) {
      obj.operators = message.operators.map(e => e ? Operator.toAmino(e) : undefined);
    } else {
      obj.operators = message.operators;
    }
    return obj;
  },
  fromAminoMsg(object: QueryOperatorsResponseAminoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOperatorsResponseProtoMsg): QueryOperatorsResponse {
    return QueryOperatorsResponse.decode(message.value);
  },
  toProto(message: QueryOperatorsResponse): Uint8Array {
    return QueryOperatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOperatorsResponse): QueryOperatorsResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryOperatorsResponse",
      value: QueryOperatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawsRequest(): QueryWithdrawsRequest {
  return {};
}
export const QueryWithdrawsRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest",
  encode(_: QueryWithdrawsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryWithdrawsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryWithdrawsRequest>): QueryWithdrawsRequest {
    const message = createBaseQueryWithdrawsRequest();
    return message;
  },
  fromAmino(_: QueryWithdrawsRequestAmino): QueryWithdrawsRequest {
    const message = createBaseQueryWithdrawsRequest();
    return message;
  },
  toAmino(_: QueryWithdrawsRequest): QueryWithdrawsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawsRequestAminoMsg): QueryWithdrawsRequest {
    return QueryWithdrawsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawsRequestProtoMsg): QueryWithdrawsRequest {
    return QueryWithdrawsRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawsRequest): Uint8Array {
    return QueryWithdrawsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawsRequest): QueryWithdrawsRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsRequest",
      value: QueryWithdrawsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawsResponse(): QueryWithdrawsResponse {
  return {
    withdraws: []
  };
}
export const QueryWithdrawsResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsResponse",
  encode(message: QueryWithdrawsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.withdraws) {
      Withdraw.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryWithdrawsResponse {
    return {
      withdraws: Array.isArray(object?.withdraws) ? object.withdraws.map((e: any) => Withdraw.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryWithdrawsResponse>): QueryWithdrawsResponse {
    const message = createBaseQueryWithdrawsResponse();
    message.withdraws = object.withdraws?.map(e => Withdraw.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryWithdrawsResponseAmino): QueryWithdrawsResponse {
    const message = createBaseQueryWithdrawsResponse();
    message.withdraws = object.withdraws?.map(e => Withdraw.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryWithdrawsResponse): QueryWithdrawsResponseAmino {
    const obj: any = {};
    if (message.withdraws) {
      obj.withdraws = message.withdraws.map(e => e ? Withdraw.toAmino(e) : undefined);
    } else {
      obj.withdraws = message.withdraws;
    }
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawsResponseAminoMsg): QueryWithdrawsResponse {
    return QueryWithdrawsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawsResponseProtoMsg): QueryWithdrawsResponse {
    return QueryWithdrawsResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawsResponse): Uint8Array {
    return QueryWithdrawsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawsResponse): QueryWithdrawsResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryWithdrawsResponse",
      value: QueryWithdrawsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTaskRequest(): QueryTaskRequest {
  return {
    contract: "",
    function: ""
  };
}
export const QueryTaskRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTaskRequest",
  encode(message: QueryTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    return writer;
  },
  fromJSON(object: any): QueryTaskRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : ""
    };
  },
  fromPartial(object: Partial<QueryTaskRequest>): QueryTaskRequest {
    const message = createBaseQueryTaskRequest();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    return message;
  },
  fromAmino(object: QueryTaskRequestAmino): QueryTaskRequest {
    const message = createBaseQueryTaskRequest();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    return message;
  },
  toAmino(message: QueryTaskRequest): QueryTaskRequestAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    return obj;
  },
  fromAminoMsg(object: QueryTaskRequestAminoMsg): QueryTaskRequest {
    return QueryTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaskRequestProtoMsg): QueryTaskRequest {
    return QueryTaskRequest.decode(message.value);
  },
  toProto(message: QueryTaskRequest): Uint8Array {
    return QueryTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTaskRequest): QueryTaskRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTaskRequest",
      value: QueryTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTaskResponse(): QueryTaskResponse {
  return {
    task: Task.fromPartial({})
  };
}
export const QueryTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTaskResponse",
  encode(message: QueryTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.task !== undefined) {
      Task.encode(message.task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTaskResponse {
    return {
      task: isSet(object.task) ? Task.fromJSON(object.task) : undefined
    };
  },
  fromPartial(object: Partial<QueryTaskResponse>): QueryTaskResponse {
    const message = createBaseQueryTaskResponse();
    message.task = object.task !== undefined && object.task !== null ? Task.fromPartial(object.task) : undefined;
    return message;
  },
  fromAmino(object: QueryTaskResponseAmino): QueryTaskResponse {
    const message = createBaseQueryTaskResponse();
    if (object.task !== undefined && object.task !== null) {
      message.task = Task.fromAmino(object.task);
    }
    return message;
  },
  toAmino(message: QueryTaskResponse): QueryTaskResponseAmino {
    const obj: any = {};
    obj.task = message.task ? Task.toAmino(message.task) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTaskResponseAminoMsg): QueryTaskResponse {
    return QueryTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTaskResponseProtoMsg): QueryTaskResponse {
    return QueryTaskResponse.decode(message.value);
  },
  toProto(message: QueryTaskResponse): Uint8Array {
    return QueryTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTaskResponse): QueryTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTaskResponse",
      value: QueryTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTxTaskRequest(): QueryTxTaskRequest {
  return {
    atxHash: ""
  };
}
export const QueryTxTaskRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskRequest",
  encode(message: QueryTxTaskRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash !== "") {
      writer.uint32(10).string(message.atxHash);
    }
    return writer;
  },
  fromJSON(object: any): QueryTxTaskRequest {
    return {
      atxHash: isSet(object.atxHash) ? String(object.atxHash) : ""
    };
  },
  fromPartial(object: Partial<QueryTxTaskRequest>): QueryTxTaskRequest {
    const message = createBaseQueryTxTaskRequest();
    message.atxHash = object.atxHash ?? "";
    return message;
  },
  fromAmino(object: QueryTxTaskRequestAmino): QueryTxTaskRequest {
    const message = createBaseQueryTxTaskRequest();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = object.atx_hash;
    }
    return message;
  },
  toAmino(message: QueryTxTaskRequest): QueryTxTaskRequestAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash === "" ? undefined : message.atxHash;
    return obj;
  },
  fromAminoMsg(object: QueryTxTaskRequestAminoMsg): QueryTxTaskRequest {
    return QueryTxTaskRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxTaskRequestProtoMsg): QueryTxTaskRequest {
    return QueryTxTaskRequest.decode(message.value);
  },
  toProto(message: QueryTxTaskRequest): Uint8Array {
    return QueryTxTaskRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxTaskRequest): QueryTxTaskRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskRequest",
      value: QueryTxTaskRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTxTaskResponse(): QueryTxTaskResponse {
  return {
    task: TxTask.fromPartial({})
  };
}
export const QueryTxTaskResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskResponse",
  encode(message: QueryTxTaskResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.task !== undefined) {
      TxTask.encode(message.task, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTxTaskResponse {
    return {
      task: isSet(object.task) ? TxTask.fromJSON(object.task) : undefined
    };
  },
  fromPartial(object: Partial<QueryTxTaskResponse>): QueryTxTaskResponse {
    const message = createBaseQueryTxTaskResponse();
    message.task = object.task !== undefined && object.task !== null ? TxTask.fromPartial(object.task) : undefined;
    return message;
  },
  fromAmino(object: QueryTxTaskResponseAmino): QueryTxTaskResponse {
    const message = createBaseQueryTxTaskResponse();
    if (object.task !== undefined && object.task !== null) {
      message.task = TxTask.fromAmino(object.task);
    }
    return message;
  },
  toAmino(message: QueryTxTaskResponse): QueryTxTaskResponseAmino {
    const obj: any = {};
    obj.task = message.task ? TxTask.toAmino(message.task) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxTaskResponseAminoMsg): QueryTxTaskResponse {
    return QueryTxTaskResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxTaskResponseProtoMsg): QueryTxTaskResponse {
    return QueryTxTaskResponse.decode(message.value);
  },
  toProto(message: QueryTxTaskResponse): Uint8Array {
    return QueryTxTaskResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxTaskResponse): QueryTxTaskResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTxTaskResponse",
      value: QueryTxTaskResponse.encode(message).finish()
    };
  }
};
function createBaseQueryResponseRequest(): QueryResponseRequest {
  return {
    contract: "",
    function: "",
    operatorAddress: ""
  };
}
export const QueryResponseRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryResponseRequest",
  encode(message: QueryResponseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.function !== "") {
      writer.uint32(18).string(message.function);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(26).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryResponseRequest {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      function: isSet(object.function) ? String(object.function) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryResponseRequest>): QueryResponseRequest {
    const message = createBaseQueryResponseRequest();
    message.contract = object.contract ?? "";
    message.function = object.function ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryResponseRequestAmino): QueryResponseRequest {
    const message = createBaseQueryResponseRequest();
    if (object.contract !== undefined && object.contract !== null) {
      message.contract = object.contract;
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = object.function;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: QueryResponseRequest): QueryResponseRequestAmino {
    const obj: any = {};
    obj.contract = message.contract === "" ? undefined : message.contract;
    obj.function = message.function === "" ? undefined : message.function;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryResponseRequestAminoMsg): QueryResponseRequest {
    return QueryResponseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResponseRequestProtoMsg): QueryResponseRequest {
    return QueryResponseRequest.decode(message.value);
  },
  toProto(message: QueryResponseRequest): Uint8Array {
    return QueryResponseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryResponseRequest): QueryResponseRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryResponseRequest",
      value: QueryResponseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryResponseResponse(): QueryResponseResponse {
  return {
    response: Response.fromPartial({})
  };
}
export const QueryResponseResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryResponseResponse",
  encode(message: QueryResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryResponseResponse {
    return {
      response: isSet(object.response) ? Response.fromJSON(object.response) : undefined
    };
  },
  fromPartial(object: Partial<QueryResponseResponse>): QueryResponseResponse {
    const message = createBaseQueryResponseResponse();
    message.response = object.response !== undefined && object.response !== null ? Response.fromPartial(object.response) : undefined;
    return message;
  },
  fromAmino(object: QueryResponseResponseAmino): QueryResponseResponse {
    const message = createBaseQueryResponseResponse();
    if (object.response !== undefined && object.response !== null) {
      message.response = Response.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message: QueryResponseResponse): QueryResponseResponseAmino {
    const obj: any = {};
    obj.response = message.response ? Response.toAmino(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryResponseResponseAminoMsg): QueryResponseResponse {
    return QueryResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryResponseResponseProtoMsg): QueryResponseResponse {
    return QueryResponseResponse.decode(message.value);
  },
  toProto(message: QueryResponseResponse): Uint8Array {
    return QueryResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryResponseResponse): QueryResponseResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryResponseResponse",
      value: QueryResponseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTxResponseRequest(): QueryTxResponseRequest {
  return {
    atxHash: "",
    operatorAddress: ""
  };
}
export const QueryTxResponseRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseRequest",
  encode(message: QueryTxResponseRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.atxHash !== "") {
      writer.uint32(10).string(message.atxHash);
    }
    if (message.operatorAddress !== "") {
      writer.uint32(18).string(message.operatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryTxResponseRequest {
    return {
      atxHash: isSet(object.atxHash) ? String(object.atxHash) : "",
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryTxResponseRequest>): QueryTxResponseRequest {
    const message = createBaseQueryTxResponseRequest();
    message.atxHash = object.atxHash ?? "";
    message.operatorAddress = object.operatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryTxResponseRequestAmino): QueryTxResponseRequest {
    const message = createBaseQueryTxResponseRequest();
    if (object.atx_hash !== undefined && object.atx_hash !== null) {
      message.atxHash = object.atx_hash;
    }
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    return message;
  },
  toAmino(message: QueryTxResponseRequest): QueryTxResponseRequestAmino {
    const obj: any = {};
    obj.atx_hash = message.atxHash === "" ? undefined : message.atxHash;
    obj.operator_address = message.operatorAddress === "" ? undefined : message.operatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryTxResponseRequestAminoMsg): QueryTxResponseRequest {
    return QueryTxResponseRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxResponseRequestProtoMsg): QueryTxResponseRequest {
    return QueryTxResponseRequest.decode(message.value);
  },
  toProto(message: QueryTxResponseRequest): Uint8Array {
    return QueryTxResponseRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxResponseRequest): QueryTxResponseRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseRequest",
      value: QueryTxResponseRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTxResponseResponse(): QueryTxResponseResponse {
  return {
    response: Response.fromPartial({})
  };
}
export const QueryTxResponseResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseResponse",
  encode(message: QueryTxResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.response !== undefined) {
      Response.encode(message.response, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTxResponseResponse {
    return {
      response: isSet(object.response) ? Response.fromJSON(object.response) : undefined
    };
  },
  fromPartial(object: Partial<QueryTxResponseResponse>): QueryTxResponseResponse {
    const message = createBaseQueryTxResponseResponse();
    message.response = object.response !== undefined && object.response !== null ? Response.fromPartial(object.response) : undefined;
    return message;
  },
  fromAmino(object: QueryTxResponseResponseAmino): QueryTxResponseResponse {
    const message = createBaseQueryTxResponseResponse();
    if (object.response !== undefined && object.response !== null) {
      message.response = Response.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message: QueryTxResponseResponse): QueryTxResponseResponseAmino {
    const obj: any = {};
    obj.response = message.response ? Response.toAmino(message.response) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxResponseResponseAminoMsg): QueryTxResponseResponse {
    return QueryTxResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxResponseResponseProtoMsg): QueryTxResponseResponse {
    return QueryTxResponseResponse.decode(message.value);
  },
  toProto(message: QueryTxResponseResponse): Uint8Array {
    return QueryTxResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxResponseResponse): QueryTxResponseResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryTxResponseResponse",
      value: QueryTxResponseResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    taskParams: TaskParams.fromPartial({}),
    poolParams: LockedPoolParams.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/shentu.oracle.v1alpha1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.taskParams !== undefined) {
      TaskParams.encode(message.taskParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolParams !== undefined) {
      LockedPoolParams.encode(message.poolParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      taskParams: isSet(object.taskParams) ? TaskParams.fromJSON(object.taskParams) : undefined,
      poolParams: isSet(object.poolParams) ? LockedPoolParams.fromJSON(object.poolParams) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.taskParams = object.taskParams !== undefined && object.taskParams !== null ? TaskParams.fromPartial(object.taskParams) : undefined;
    message.poolParams = object.poolParams !== undefined && object.poolParams !== null ? LockedPoolParams.fromPartial(object.poolParams) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.task_params !== undefined && object.task_params !== null) {
      message.taskParams = TaskParams.fromAmino(object.task_params);
    }
    if (object.pool_params !== undefined && object.pool_params !== null) {
      message.poolParams = LockedPoolParams.fromAmino(object.pool_params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.task_params = message.taskParams ? TaskParams.toAmino(message.taskParams) : undefined;
    obj.pool_params = message.poolParams ? LockedPoolParams.toAmino(message.poolParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/shentu.oracle.v1alpha1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};