import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Deposit, DepositAmino, DepositSDKType } from "./deposit";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryDepositsRequest {
  pagination?: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/sentinel.deposit.v1.QueryDepositsRequest";
  value: Uint8Array;
}
export interface QueryDepositsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "/sentinel.deposit.v1.QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
export interface QueryDepositsRequestSDKType {
  pagination?: PageRequestSDKType;
}
export interface QueryDepositRequest {
  address: string;
}
export interface QueryDepositRequestProtoMsg {
  typeUrl: "/sentinel.deposit.v1.QueryDepositRequest";
  value: Uint8Array;
}
export interface QueryDepositRequestAmino {
  address?: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "/sentinel.deposit.v1.QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
export interface QueryDepositRequestSDKType {
  address: string;
}
export interface QueryDepositsResponse {
  deposits: Deposit[];
  pagination?: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/sentinel.deposit.v1.QueryDepositsResponse";
  value: Uint8Array;
}
export interface QueryDepositsResponseAmino {
  deposits?: DepositAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/sentinel.deposit.v1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryDepositResponse {
  deposit: Deposit;
}
export interface QueryDepositResponseProtoMsg {
  typeUrl: "/sentinel.deposit.v1.QueryDepositResponse";
  value: Uint8Array;
}
export interface QueryDepositResponseAmino {
  deposit?: DepositAmino;
}
export interface QueryDepositResponseAminoMsg {
  type: "/sentinel.deposit.v1.QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
export interface QueryDepositResponseSDKType {
  deposit: DepositSDKType;
}
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/sentinel.deposit.v1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    address: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/sentinel.deposit.v1.QueryDepositRequest",
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/sentinel.deposit.v1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: Deposit.fromPartial({})
  };
}
export const QueryDepositResponse = {
  typeUrl: "/sentinel.deposit.v1.QueryDepositResponse",
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositResponse {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/sentinel.deposit.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};