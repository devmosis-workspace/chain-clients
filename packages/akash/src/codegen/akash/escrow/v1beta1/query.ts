import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountAmino, AccountSDKType, Payment, PaymentAmino, PaymentSDKType } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination: PageRequest;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestAmino {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination?: PageRequestAmino;
}
export interface QueryAccountsRequestAminoMsg {
  type: "/akash.escrow.v1beta1.QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequestSDKType {
  scope: string;
  xid: string;
  owner: string;
  state: string;
  pagination: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
  accounts: Account[];
  pagination: PageResponse;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseAmino {
  accounts: AccountAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAccountsResponseAminoMsg {
  type: "/akash.escrow.v1beta1.QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponseSDKType {
  accounts: AccountSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination: PageRequest;
}
export interface QueryPaymentsRequestProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest";
  value: Uint8Array;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestAmino {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination?: PageRequestAmino;
}
export interface QueryPaymentsRequestAminoMsg {
  type: "/akash.escrow.v1beta1.QueryPaymentsRequest";
  value: QueryPaymentsRequestAmino;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequestSDKType {
  scope: string;
  xid: string;
  id: string;
  owner: string;
  state: string;
  pagination: PageRequestSDKType;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
  payments: Payment[];
  pagination: PageResponse;
}
export interface QueryPaymentsResponseProtoMsg {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseAmino {
  payments: PaymentAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryPaymentsResponseAminoMsg {
  type: "/akash.escrow.v1beta1.QueryPaymentsResponse";
  value: QueryPaymentsResponseAmino;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponseSDKType {
  payments: PaymentSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    scope: "",
    xid: "",
    owner: "",
    state: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(34).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    return {
      scope: object.scope,
      xid: object.xid,
      owner: object.owner,
      state: object.state,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope;
    obj.xid = message.xid;
    obj.owner = message.owner;
    obj.state = message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map(e => Account.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    return {
      accounts: Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map(e => e ? Account.toAmino(e) : undefined);
    } else {
      obj.accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsRequest(): QueryPaymentsRequest {
  return {
    scope: "",
    xid: "",
    id: "",
    owner: "",
    state: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryPaymentsRequest = {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
  encode(message: QueryPaymentsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.scope !== "") {
      writer.uint32(10).string(message.scope);
    }
    if (message.xid !== "") {
      writer.uint32(18).string(message.xid);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.state !== "") {
      writer.uint32(42).string(message.state);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPaymentsRequest {
    return {
      scope: isSet(object.scope) ? String(object.scope) : "",
      xid: isSet(object.xid) ? String(object.xid) : "",
      id: isSet(object.id) ? String(object.id) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      state: isSet(object.state) ? String(object.state) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPaymentsRequest>): QueryPaymentsRequest {
    const message = createBaseQueryPaymentsRequest();
    message.scope = object.scope ?? "";
    message.xid = object.xid ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.state = object.state ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsRequestAmino): QueryPaymentsRequest {
    return {
      scope: object.scope,
      xid: object.xid,
      id: object.id,
      owner: object.owner,
      state: object.state,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPaymentsRequest): QueryPaymentsRequestAmino {
    const obj: any = {};
    obj.scope = message.scope;
    obj.xid = message.xid;
    obj.id = message.id;
    obj.owner = message.owner;
    obj.state = message.state;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsRequestAminoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsRequestProtoMsg): QueryPaymentsRequest {
    return QueryPaymentsRequest.decode(message.value);
  },
  toProto(message: QueryPaymentsRequest): Uint8Array {
    return QueryPaymentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsRequest): QueryPaymentsRequestProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryPaymentsRequest",
      value: QueryPaymentsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPaymentsResponse(): QueryPaymentsResponse {
  return {
    payments: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryPaymentsResponse = {
  typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
  encode(message: QueryPaymentsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.payments) {
      Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryPaymentsResponse>): QueryPaymentsResponse {
    const message = createBaseQueryPaymentsResponse();
    message.payments = object.payments?.map(e => Payment.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryPaymentsResponseAmino): QueryPaymentsResponse {
    return {
      payments: Array.isArray(object?.payments) ? object.payments.map((e: any) => Payment.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryPaymentsResponse): QueryPaymentsResponseAmino {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map(e => e ? Payment.toAmino(e) : undefined);
    } else {
      obj.payments = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryPaymentsResponseAminoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPaymentsResponseProtoMsg): QueryPaymentsResponse {
    return QueryPaymentsResponse.decode(message.value);
  },
  toProto(message: QueryPaymentsResponse): Uint8Array {
    return QueryPaymentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPaymentsResponse): QueryPaymentsResponseProtoMsg {
    return {
      typeUrl: "/akash.escrow.v1beta1.QueryPaymentsResponse",
      value: QueryPaymentsResponse.encode(message).finish()
    };
  }
};