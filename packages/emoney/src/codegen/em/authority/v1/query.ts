import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryGasPricesRequest {}
export interface QueryGasPricesRequestSDKType {}
export interface QueryGasPricesResponse {
  minGasPrices: DecCoin[];
}
export interface QueryGasPricesResponseSDKType {
  min_gas_prices: DecCoinSDKType[];
}
export interface QueryUpgradePlanRequest {}
export interface QueryUpgradePlanRequestSDKType {}
export interface QueryUpgradePlanResponse {
  plan?: Plan;
}
export interface QueryUpgradePlanResponseSDKType {
  plan?: PlanSDKType;
}
function createBaseQueryGasPricesRequest(): QueryGasPricesRequest {
  return {};
}
export const QueryGasPricesRequest = {
  encode(_: QueryGasPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryGasPricesRequest {
    return {};
  },
  fromPartial(_: Partial<QueryGasPricesRequest>): QueryGasPricesRequest {
    const message = createBaseQueryGasPricesRequest();
    return message;
  }
};
function createBaseQueryGasPricesResponse(): QueryGasPricesResponse {
  return {
    minGasPrices: []
  };
}
export const QueryGasPricesResponse = {
  encode(message: QueryGasPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryUpgradePlanRequest(): QueryUpgradePlanRequest {
  return {};
}
export const QueryUpgradePlanRequest = {
  encode(_: QueryUpgradePlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): QueryUpgradePlanRequest {
    return {};
  },
  fromPartial(_: Partial<QueryUpgradePlanRequest>): QueryUpgradePlanRequest {
    const message = createBaseQueryUpgradePlanRequest();
    return message;
  }
};
function createBaseQueryUpgradePlanResponse(): QueryUpgradePlanResponse {
  return {
    plan: undefined
  };
}
export const QueryUpgradePlanResponse = {
  encode(message: QueryUpgradePlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};