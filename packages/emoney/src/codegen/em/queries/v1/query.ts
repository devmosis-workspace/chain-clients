import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryCirculatingRequest {}
export interface QueryCirculatingRequestProtoMsg {
  typeUrl: "/em.queries.v1.QueryCirculatingRequest";
  value: Uint8Array;
}
export interface QueryCirculatingRequestAmino {}
export interface QueryCirculatingRequestAminoMsg {
  type: "/em.queries.v1.QueryCirculatingRequest";
  value: QueryCirculatingRequestAmino;
}
export interface QueryCirculatingRequestSDKType {}
export interface QueryCirculatingResponse {
  total: Coin[];
}
export interface QueryCirculatingResponseProtoMsg {
  typeUrl: "/em.queries.v1.QueryCirculatingResponse";
  value: Uint8Array;
}
export interface QueryCirculatingResponseAmino {
  total: CoinAmino[];
}
export interface QueryCirculatingResponseAminoMsg {
  type: "/em.queries.v1.QueryCirculatingResponse";
  value: QueryCirculatingResponseAmino;
}
export interface QueryCirculatingResponseSDKType {
  total: CoinSDKType[];
}
export interface QuerySpendableRequest {
  address: string;
}
export interface QuerySpendableRequestProtoMsg {
  typeUrl: "/em.queries.v1.QuerySpendableRequest";
  value: Uint8Array;
}
export interface QuerySpendableRequestAmino {
  address: string;
}
export interface QuerySpendableRequestAminoMsg {
  type: "/em.queries.v1.QuerySpendableRequest";
  value: QuerySpendableRequestAmino;
}
export interface QuerySpendableRequestSDKType {
  address: string;
}
export interface QuerySpendableResponse {
  balance: Coin[];
}
export interface QuerySpendableResponseProtoMsg {
  typeUrl: "/em.queries.v1.QuerySpendableResponse";
  value: Uint8Array;
}
export interface QuerySpendableResponseAmino {
  balance: CoinAmino[];
}
export interface QuerySpendableResponseAminoMsg {
  type: "/em.queries.v1.QuerySpendableResponse";
  value: QuerySpendableResponseAmino;
}
export interface QuerySpendableResponseSDKType {
  balance: CoinSDKType[];
}
export interface QueryMissedBlocksRequest {
  /** cons_address is the address to query the missed blocks signing info */
  consAddress: string;
}
export interface QueryMissedBlocksRequestProtoMsg {
  typeUrl: "/em.queries.v1.QueryMissedBlocksRequest";
  value: Uint8Array;
}
export interface QueryMissedBlocksRequestAmino {
  /** cons_address is the address to query the missed blocks signing info */
  cons_address: string;
}
export interface QueryMissedBlocksRequestAminoMsg {
  type: "/em.queries.v1.QueryMissedBlocksRequest";
  value: QueryMissedBlocksRequestAmino;
}
export interface QueryMissedBlocksRequestSDKType {
  cons_address: string;
}
export interface QueryMissedBlocksResponse {
  /** val_signing_info is the signing info of requested val cons address */
  missedBlocksInfo: MissedBlocksInfo;
}
export interface QueryMissedBlocksResponseProtoMsg {
  typeUrl: "/em.queries.v1.QueryMissedBlocksResponse";
  value: Uint8Array;
}
export interface QueryMissedBlocksResponseAmino {
  /** val_signing_info is the signing info of requested val cons address */
  missed_blocks_info?: MissedBlocksInfoAmino;
}
export interface QueryMissedBlocksResponseAminoMsg {
  type: "/em.queries.v1.QueryMissedBlocksResponse";
  value: QueryMissedBlocksResponseAmino;
}
export interface QueryMissedBlocksResponseSDKType {
  missed_blocks_info: MissedBlocksInfoSDKType;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfo {
  consAddress: string;
  /** missed blocks counter (to avoid scanning the array every time) */
  missedBlocksCounter: bigint;
  totalBlocksCounter: bigint;
}
export interface MissedBlocksInfoProtoMsg {
  typeUrl: "/em.queries.v1.MissedBlocksInfo";
  value: Uint8Array;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoAmino {
  cons_address: string;
  /** missed blocks counter (to avoid scanning the array every time) */
  missed_blocks_counter: string;
  total_blocks_counter: string;
}
export interface MissedBlocksInfoAminoMsg {
  type: "/em.queries.v1.MissedBlocksInfo";
  value: MissedBlocksInfoAmino;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoSDKType {
  cons_address: string;
  missed_blocks_counter: bigint;
  total_blocks_counter: bigint;
}
function createBaseQueryCirculatingRequest(): QueryCirculatingRequest {
  return {};
}
export const QueryCirculatingRequest = {
  typeUrl: "/em.queries.v1.QueryCirculatingRequest",
  encode(_: QueryCirculatingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryCirculatingRequest {
    return {};
  },
  fromPartial(_: Partial<QueryCirculatingRequest>): QueryCirculatingRequest {
    const message = createBaseQueryCirculatingRequest();
    return message;
  },
  fromAmino(_: QueryCirculatingRequestAmino): QueryCirculatingRequest {
    return {};
  },
  toAmino(_: QueryCirculatingRequest): QueryCirculatingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingRequestAminoMsg): QueryCirculatingRequest {
    return QueryCirculatingRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingRequestProtoMsg): QueryCirculatingRequest {
    return QueryCirculatingRequest.decode(message.value);
  },
  toProto(message: QueryCirculatingRequest): Uint8Array {
    return QueryCirculatingRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingRequest): QueryCirculatingRequestProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QueryCirculatingRequest",
      value: QueryCirculatingRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCirculatingResponse(): QueryCirculatingResponse {
  return {
    total: []
  };
}
export const QueryCirculatingResponse = {
  typeUrl: "/em.queries.v1.QueryCirculatingResponse",
  encode(message: QueryCirculatingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.total) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryCirculatingResponse {
    return {
      total: Array.isArray(object?.total) ? object.total.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryCirculatingResponse>): QueryCirculatingResponse {
    const message = createBaseQueryCirculatingResponse();
    message.total = object.total?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCirculatingResponseAmino): QueryCirculatingResponse {
    return {
      total: Array.isArray(object?.total) ? object.total.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryCirculatingResponse): QueryCirculatingResponseAmino {
    const obj: any = {};
    if (message.total) {
      obj.total = message.total.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCirculatingResponseAminoMsg): QueryCirculatingResponse {
    return QueryCirculatingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCirculatingResponseProtoMsg): QueryCirculatingResponse {
    return QueryCirculatingResponse.decode(message.value);
  },
  toProto(message: QueryCirculatingResponse): Uint8Array {
    return QueryCirculatingResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCirculatingResponse): QueryCirculatingResponseProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QueryCirculatingResponse",
      value: QueryCirculatingResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableRequest(): QuerySpendableRequest {
  return {
    address: ""
  };
}
export const QuerySpendableRequest = {
  typeUrl: "/em.queries.v1.QuerySpendableRequest",
  encode(message: QuerySpendableRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  fromPartial(object: Partial<QuerySpendableRequest>): QuerySpendableRequest {
    const message = createBaseQuerySpendableRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QuerySpendableRequestAmino): QuerySpendableRequest {
    return {
      address: object.address
    };
  },
  toAmino(message: QuerySpendableRequest): QuerySpendableRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QuerySpendableRequestAminoMsg): QuerySpendableRequest {
    return QuerySpendableRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpendableRequestProtoMsg): QuerySpendableRequest {
    return QuerySpendableRequest.decode(message.value);
  },
  toProto(message: QuerySpendableRequest): Uint8Array {
    return QuerySpendableRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableRequest): QuerySpendableRequestProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QuerySpendableRequest",
      value: QuerySpendableRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySpendableResponse(): QuerySpendableResponse {
  return {
    balance: []
  };
}
export const QuerySpendableResponse = {
  typeUrl: "/em.queries.v1.QuerySpendableResponse",
  encode(message: QuerySpendableResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QuerySpendableResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QuerySpendableResponse>): QuerySpendableResponse {
    const message = createBaseQuerySpendableResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QuerySpendableResponseAmino): QuerySpendableResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QuerySpendableResponse): QuerySpendableResponseAmino {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySpendableResponseAminoMsg): QuerySpendableResponse {
    return QuerySpendableResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySpendableResponseProtoMsg): QuerySpendableResponse {
    return QuerySpendableResponse.decode(message.value);
  },
  toProto(message: QuerySpendableResponse): Uint8Array {
    return QuerySpendableResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySpendableResponse): QuerySpendableResponseProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QuerySpendableResponse",
      value: QuerySpendableResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMissedBlocksRequest(): QueryMissedBlocksRequest {
  return {
    consAddress: ""
  };
}
export const QueryMissedBlocksRequest = {
  typeUrl: "/em.queries.v1.QueryMissedBlocksRequest",
  encode(message: QueryMissedBlocksRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryMissedBlocksRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryMissedBlocksRequest>): QueryMissedBlocksRequest {
    const message = createBaseQueryMissedBlocksRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
  fromAmino(object: QueryMissedBlocksRequestAmino): QueryMissedBlocksRequest {
    return {
      consAddress: object.cons_address
    };
  },
  toAmino(message: QueryMissedBlocksRequest): QueryMissedBlocksRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress;
    return obj;
  },
  fromAminoMsg(object: QueryMissedBlocksRequestAminoMsg): QueryMissedBlocksRequest {
    return QueryMissedBlocksRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissedBlocksRequestProtoMsg): QueryMissedBlocksRequest {
    return QueryMissedBlocksRequest.decode(message.value);
  },
  toProto(message: QueryMissedBlocksRequest): Uint8Array {
    return QueryMissedBlocksRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMissedBlocksRequest): QueryMissedBlocksRequestProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QueryMissedBlocksRequest",
      value: QueryMissedBlocksRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMissedBlocksResponse(): QueryMissedBlocksResponse {
  return {
    missedBlocksInfo: MissedBlocksInfo.fromPartial({})
  };
}
export const QueryMissedBlocksResponse = {
  typeUrl: "/em.queries.v1.QueryMissedBlocksResponse",
  encode(message: QueryMissedBlocksResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.missedBlocksInfo !== undefined) {
      MissedBlocksInfo.encode(message.missedBlocksInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryMissedBlocksResponse {
    return {
      missedBlocksInfo: isSet(object.missedBlocksInfo) ? MissedBlocksInfo.fromJSON(object.missedBlocksInfo) : undefined
    };
  },
  fromPartial(object: Partial<QueryMissedBlocksResponse>): QueryMissedBlocksResponse {
    const message = createBaseQueryMissedBlocksResponse();
    message.missedBlocksInfo = object.missedBlocksInfo !== undefined && object.missedBlocksInfo !== null ? MissedBlocksInfo.fromPartial(object.missedBlocksInfo) : undefined;
    return message;
  },
  fromAmino(object: QueryMissedBlocksResponseAmino): QueryMissedBlocksResponse {
    return {
      missedBlocksInfo: object?.missed_blocks_info ? MissedBlocksInfo.fromAmino(object.missed_blocks_info) : undefined
    };
  },
  toAmino(message: QueryMissedBlocksResponse): QueryMissedBlocksResponseAmino {
    const obj: any = {};
    obj.missed_blocks_info = message.missedBlocksInfo ? MissedBlocksInfo.toAmino(message.missedBlocksInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMissedBlocksResponseAminoMsg): QueryMissedBlocksResponse {
    return QueryMissedBlocksResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMissedBlocksResponseProtoMsg): QueryMissedBlocksResponse {
    return QueryMissedBlocksResponse.decode(message.value);
  },
  toProto(message: QueryMissedBlocksResponse): Uint8Array {
    return QueryMissedBlocksResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMissedBlocksResponse): QueryMissedBlocksResponseProtoMsg {
    return {
      typeUrl: "/em.queries.v1.QueryMissedBlocksResponse",
      value: QueryMissedBlocksResponse.encode(message).finish()
    };
  }
};
function createBaseMissedBlocksInfo(): MissedBlocksInfo {
  return {
    consAddress: "",
    missedBlocksCounter: BigInt(0),
    totalBlocksCounter: BigInt(0)
  };
}
export const MissedBlocksInfo = {
  typeUrl: "/em.queries.v1.MissedBlocksInfo",
  encode(message: MissedBlocksInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    if (message.missedBlocksCounter !== BigInt(0)) {
      writer.uint32(16).int64(message.missedBlocksCounter);
    }
    if (message.totalBlocksCounter !== BigInt(0)) {
      writer.uint32(24).int64(message.totalBlocksCounter);
    }
    return writer;
  },
  fromJSON(object: any): MissedBlocksInfo {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : "",
      missedBlocksCounter: isSet(object.missedBlocksCounter) ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0),
      totalBlocksCounter: isSet(object.totalBlocksCounter) ? BigInt(object.totalBlocksCounter.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<MissedBlocksInfo>): MissedBlocksInfo {
    const message = createBaseMissedBlocksInfo();
    message.consAddress = object.consAddress ?? "";
    message.missedBlocksCounter = object.missedBlocksCounter !== undefined && object.missedBlocksCounter !== null ? BigInt(object.missedBlocksCounter.toString()) : BigInt(0);
    message.totalBlocksCounter = object.totalBlocksCounter !== undefined && object.totalBlocksCounter !== null ? BigInt(object.totalBlocksCounter.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: MissedBlocksInfoAmino): MissedBlocksInfo {
    return {
      consAddress: object.cons_address,
      missedBlocksCounter: BigInt(object.missed_blocks_counter),
      totalBlocksCounter: BigInt(object.total_blocks_counter)
    };
  },
  toAmino(message: MissedBlocksInfo): MissedBlocksInfoAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress;
    obj.missed_blocks_counter = message.missedBlocksCounter ? message.missedBlocksCounter.toString() : undefined;
    obj.total_blocks_counter = message.totalBlocksCounter ? message.totalBlocksCounter.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MissedBlocksInfoAminoMsg): MissedBlocksInfo {
    return MissedBlocksInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MissedBlocksInfoProtoMsg): MissedBlocksInfo {
    return MissedBlocksInfo.decode(message.value);
  },
  toProto(message: MissedBlocksInfo): Uint8Array {
    return MissedBlocksInfo.encode(message).finish();
  },
  toProtoMsg(message: MissedBlocksInfo): MissedBlocksInfoProtoMsg {
    return {
      typeUrl: "/em.queries.v1.MissedBlocksInfo",
      value: MissedBlocksInfo.encode(message).finish()
    };
  }
};