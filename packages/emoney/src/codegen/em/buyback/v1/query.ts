import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp } from "../../../helpers";
export interface QueryBalanceRequest {}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/em.buyback.v1.QueryBalanceRequest";
  value: Uint8Array;
}
export interface QueryBalanceRequestAmino {}
export interface QueryBalanceRequestAminoMsg {
  type: "/em.buyback.v1.QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
export interface QueryBalanceRequestSDKType {}
export interface QueryBalanceResponse {
  balance: Coin[];
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/em.buyback.v1.QueryBalanceResponse";
  value: Uint8Array;
}
export interface QueryBalanceResponseAmino {
  balance: CoinAmino[];
}
export interface QueryBalanceResponseAminoMsg {
  type: "/em.buyback.v1.QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
export interface QueryBalanceResponseSDKType {
  balance: CoinSDKType[];
}
export interface QueryBuybackTimeRequest {}
export interface QueryBuybackTimeRequestProtoMsg {
  typeUrl: "/em.buyback.v1.QueryBuybackTimeRequest";
  value: Uint8Array;
}
export interface QueryBuybackTimeRequestAmino {}
export interface QueryBuybackTimeRequestAminoMsg {
  type: "/em.buyback.v1.QueryBuybackTimeRequest";
  value: QueryBuybackTimeRequestAmino;
}
export interface QueryBuybackTimeRequestSDKType {}
export interface QueryBuybackTimeResponse {
  lastRun: Timestamp;
  nextRun: Timestamp;
}
export interface QueryBuybackTimeResponseProtoMsg {
  typeUrl: "/em.buyback.v1.QueryBuybackTimeResponse";
  value: Uint8Array;
}
export interface QueryBuybackTimeResponseAmino {
  last_run?: TimestampAmino;
  next_run?: TimestampAmino;
}
export interface QueryBuybackTimeResponseAminoMsg {
  type: "/em.buyback.v1.QueryBuybackTimeResponse";
  value: QueryBuybackTimeResponseAmino;
}
export interface QueryBuybackTimeResponseSDKType {
  last_run: TimestampSDKType;
  next_run: TimestampSDKType;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {};
}
export const QueryBalanceRequest = {
  typeUrl: "/em.buyback.v1.QueryBalanceRequest",
  encode(_: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBalanceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    return message;
  },
  fromAmino(_: QueryBalanceRequestAmino): QueryBalanceRequest {
    return {};
  },
  toAmino(_: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/em.buyback.v1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    balance: []
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/em.buyback.v1.QueryBalanceResponse",
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.balance) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBalanceResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    message.balance = object.balance?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    return {
      balance: Array.isArray(object?.balance) ? object.balance.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    if (message.balance) {
      obj.balance = message.balance.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.balance = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/em.buyback.v1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryBuybackTimeRequest(): QueryBuybackTimeRequest {
  return {};
}
export const QueryBuybackTimeRequest = {
  typeUrl: "/em.buyback.v1.QueryBuybackTimeRequest",
  encode(_: QueryBuybackTimeRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryBuybackTimeRequest {
    return {};
  },
  fromPartial(_: Partial<QueryBuybackTimeRequest>): QueryBuybackTimeRequest {
    const message = createBaseQueryBuybackTimeRequest();
    return message;
  },
  fromAmino(_: QueryBuybackTimeRequestAmino): QueryBuybackTimeRequest {
    return {};
  },
  toAmino(_: QueryBuybackTimeRequest): QueryBuybackTimeRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryBuybackTimeRequestAminoMsg): QueryBuybackTimeRequest {
    return QueryBuybackTimeRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBuybackTimeRequestProtoMsg): QueryBuybackTimeRequest {
    return QueryBuybackTimeRequest.decode(message.value);
  },
  toProto(message: QueryBuybackTimeRequest): Uint8Array {
    return QueryBuybackTimeRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBuybackTimeRequest): QueryBuybackTimeRequestProtoMsg {
    return {
      typeUrl: "/em.buyback.v1.QueryBuybackTimeRequest",
      value: QueryBuybackTimeRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBuybackTimeResponse(): QueryBuybackTimeResponse {
  return {
    lastRun: Timestamp.fromPartial({}),
    nextRun: Timestamp.fromPartial({})
  };
}
export const QueryBuybackTimeResponse = {
  typeUrl: "/em.buyback.v1.QueryBuybackTimeResponse",
  encode(message: QueryBuybackTimeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lastRun !== undefined) {
      Timestamp.encode(message.lastRun, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextRun !== undefined) {
      Timestamp.encode(message.nextRun, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryBuybackTimeResponse {
    return {
      lastRun: isSet(object.lastRun) ? fromJsonTimestamp(object.lastRun) : undefined,
      nextRun: isSet(object.nextRun) ? fromJsonTimestamp(object.nextRun) : undefined
    };
  },
  fromPartial(object: Partial<QueryBuybackTimeResponse>): QueryBuybackTimeResponse {
    const message = createBaseQueryBuybackTimeResponse();
    message.lastRun = object.lastRun !== undefined && object.lastRun !== null ? Timestamp.fromPartial(object.lastRun) : undefined;
    message.nextRun = object.nextRun !== undefined && object.nextRun !== null ? Timestamp.fromPartial(object.nextRun) : undefined;
    return message;
  },
  fromAmino(object: QueryBuybackTimeResponseAmino): QueryBuybackTimeResponse {
    return {
      lastRun: object.last_run,
      nextRun: object.next_run
    };
  },
  toAmino(message: QueryBuybackTimeResponse): QueryBuybackTimeResponseAmino {
    const obj: any = {};
    obj.last_run = message.lastRun;
    obj.next_run = message.nextRun;
    return obj;
  },
  fromAminoMsg(object: QueryBuybackTimeResponseAminoMsg): QueryBuybackTimeResponse {
    return QueryBuybackTimeResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBuybackTimeResponseProtoMsg): QueryBuybackTimeResponse {
    return QueryBuybackTimeResponse.decode(message.value);
  },
  toProto(message: QueryBuybackTimeResponse): Uint8Array {
    return QueryBuybackTimeResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBuybackTimeResponse): QueryBuybackTimeResponseProtoMsg {
    return {
      typeUrl: "/em.buyback.v1.QueryBuybackTimeResponse",
      value: QueryBuybackTimeResponse.encode(message).finish()
    };
  }
};