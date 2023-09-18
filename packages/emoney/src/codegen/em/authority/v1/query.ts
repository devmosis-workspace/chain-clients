import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanAmino, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface QueryGasPricesRequest {}
export interface QueryGasPricesRequestProtoMsg {
  typeUrl: "/em.authority.v1.QueryGasPricesRequest";
  value: Uint8Array;
}
export interface QueryGasPricesRequestAmino {}
export interface QueryGasPricesRequestAminoMsg {
  type: "/em.authority.v1.QueryGasPricesRequest";
  value: QueryGasPricesRequestAmino;
}
export interface QueryGasPricesRequestSDKType {}
export interface QueryGasPricesResponse {
  minGasPrices: DecCoin[];
}
export interface QueryGasPricesResponseProtoMsg {
  typeUrl: "/em.authority.v1.QueryGasPricesResponse";
  value: Uint8Array;
}
export interface QueryGasPricesResponseAmino {
  min_gas_prices: DecCoinAmino[];
}
export interface QueryGasPricesResponseAminoMsg {
  type: "/em.authority.v1.QueryGasPricesResponse";
  value: QueryGasPricesResponseAmino;
}
export interface QueryGasPricesResponseSDKType {
  min_gas_prices: DecCoinSDKType[];
}
export interface QueryUpgradePlanRequest {}
export interface QueryUpgradePlanRequestProtoMsg {
  typeUrl: "/em.authority.v1.QueryUpgradePlanRequest";
  value: Uint8Array;
}
export interface QueryUpgradePlanRequestAmino {}
export interface QueryUpgradePlanRequestAminoMsg {
  type: "/em.authority.v1.QueryUpgradePlanRequest";
  value: QueryUpgradePlanRequestAmino;
}
export interface QueryUpgradePlanRequestSDKType {}
export interface QueryUpgradePlanResponse {
  plan: Plan;
}
export interface QueryUpgradePlanResponseProtoMsg {
  typeUrl: "/em.authority.v1.QueryUpgradePlanResponse";
  value: Uint8Array;
}
export interface QueryUpgradePlanResponseAmino {
  plan?: PlanAmino;
}
export interface QueryUpgradePlanResponseAminoMsg {
  type: "/em.authority.v1.QueryUpgradePlanResponse";
  value: QueryUpgradePlanResponseAmino;
}
export interface QueryUpgradePlanResponseSDKType {
  plan: PlanSDKType;
}
function createBaseQueryGasPricesRequest(): QueryGasPricesRequest {
  return {};
}
export const QueryGasPricesRequest = {
  typeUrl: "/em.authority.v1.QueryGasPricesRequest",
  encode(_: QueryGasPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryGasPricesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGasPricesRequest>): QueryGasPricesRequest {
    const message = createBaseQueryGasPricesRequest();
    return message;
  },
  fromAmino(_: QueryGasPricesRequestAmino): QueryGasPricesRequest {
    return {};
  },
  toAmino(_: QueryGasPricesRequest): QueryGasPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryGasPricesRequestAminoMsg): QueryGasPricesRequest {
    return QueryGasPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGasPricesRequestProtoMsg): QueryGasPricesRequest {
    return QueryGasPricesRequest.decode(message.value);
  },
  toProto(message: QueryGasPricesRequest): Uint8Array {
    return QueryGasPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGasPricesRequest): QueryGasPricesRequestProtoMsg {
    return {
      typeUrl: "/em.authority.v1.QueryGasPricesRequest",
      value: QueryGasPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGasPricesResponse(): QueryGasPricesResponse {
  return {
    minGasPrices: []
  };
}
export const QueryGasPricesResponse = {
  typeUrl: "/em.authority.v1.QueryGasPricesResponse",
  encode(message: QueryGasPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minGasPrices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryGasPricesResponse {
    return {
      minGasPrices: Array.isArray(object?.minGasPrices) ? object.minGasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryGasPricesResponse>): QueryGasPricesResponse {
    const message = createBaseQueryGasPricesResponse();
    message.minGasPrices = object.minGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGasPricesResponseAmino): QueryGasPricesResponse {
    return {
      minGasPrices: Array.isArray(object?.min_gas_prices) ? object.min_gas_prices.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGasPricesResponse): QueryGasPricesResponseAmino {
    const obj: any = {};
    if (message.minGasPrices) {
      obj.min_gas_prices = message.minGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.min_gas_prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGasPricesResponseAminoMsg): QueryGasPricesResponse {
    return QueryGasPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGasPricesResponseProtoMsg): QueryGasPricesResponse {
    return QueryGasPricesResponse.decode(message.value);
  },
  toProto(message: QueryGasPricesResponse): Uint8Array {
    return QueryGasPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGasPricesResponse): QueryGasPricesResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.QueryGasPricesResponse",
      value: QueryGasPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradePlanRequest(): QueryUpgradePlanRequest {
  return {};
}
export const QueryUpgradePlanRequest = {
  typeUrl: "/em.authority.v1.QueryUpgradePlanRequest",
  encode(_: QueryUpgradePlanRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryUpgradePlanRequest {
    return {};
  },
  fromPartial(_: Partial<QueryUpgradePlanRequest>): QueryUpgradePlanRequest {
    const message = createBaseQueryUpgradePlanRequest();
    return message;
  },
  fromAmino(_: QueryUpgradePlanRequestAmino): QueryUpgradePlanRequest {
    return {};
  },
  toAmino(_: QueryUpgradePlanRequest): QueryUpgradePlanRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradePlanRequestAminoMsg): QueryUpgradePlanRequest {
    return QueryUpgradePlanRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUpgradePlanRequestProtoMsg): QueryUpgradePlanRequest {
    return QueryUpgradePlanRequest.decode(message.value);
  },
  toProto(message: QueryUpgradePlanRequest): Uint8Array {
    return QueryUpgradePlanRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradePlanRequest): QueryUpgradePlanRequestProtoMsg {
    return {
      typeUrl: "/em.authority.v1.QueryUpgradePlanRequest",
      value: QueryUpgradePlanRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradePlanResponse(): QueryUpgradePlanResponse {
  return {
    plan: Plan.fromPartial({})
  };
}
export const QueryUpgradePlanResponse = {
  typeUrl: "/em.authority.v1.QueryUpgradePlanResponse",
  encode(message: QueryUpgradePlanResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryUpgradePlanResponse {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  fromPartial(object: Partial<QueryUpgradePlanResponse>): QueryUpgradePlanResponse {
    const message = createBaseQueryUpgradePlanResponse();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
  fromAmino(object: QueryUpgradePlanResponseAmino): QueryUpgradePlanResponse {
    return {
      plan: object?.plan ? Plan.fromAmino(object.plan) : undefined
    };
  },
  toAmino(message: QueryUpgradePlanResponse): QueryUpgradePlanResponseAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradePlanResponseAminoMsg): QueryUpgradePlanResponse {
    return QueryUpgradePlanResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUpgradePlanResponseProtoMsg): QueryUpgradePlanResponse {
    return QueryUpgradePlanResponse.decode(message.value);
  },
  toProto(message: QueryUpgradePlanResponse): Uint8Array {
    return QueryUpgradePlanResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradePlanResponse): QueryUpgradePlanResponseProtoMsg {
    return {
      typeUrl: "/em.authority.v1.QueryUpgradePlanResponse",
      value: QueryUpgradePlanResponse.encode(message).finish()
    };
  }
};