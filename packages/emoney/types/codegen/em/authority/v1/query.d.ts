import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import * as _m0 from "protobufjs/minimal";
export interface QueryGasPricesRequest {
}
export interface QueryGasPricesRequestSDKType {
}
export interface QueryGasPricesResponse {
    minGasPrices: DecCoin[];
}
export interface QueryGasPricesResponseSDKType {
    min_gas_prices: DecCoinSDKType[];
}
export interface QueryUpgradePlanRequest {
}
export interface QueryUpgradePlanRequestSDKType {
}
export interface QueryUpgradePlanResponse {
    plan?: Plan;
}
export interface QueryUpgradePlanResponseSDKType {
    plan?: PlanSDKType;
}
export declare const QueryGasPricesRequest: {
    encode(_: QueryGasPricesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryGasPricesRequest;
    fromPartial(_: Partial<QueryGasPricesRequest>): QueryGasPricesRequest;
};
export declare const QueryGasPricesResponse: {
    encode(message: QueryGasPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryGasPricesResponse;
    fromPartial(object: Partial<QueryGasPricesResponse>): QueryGasPricesResponse;
};
export declare const QueryUpgradePlanRequest: {
    encode(_: QueryUpgradePlanRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryUpgradePlanRequest;
    fromPartial(_: Partial<QueryUpgradePlanRequest>): QueryUpgradePlanRequest;
};
export declare const QueryUpgradePlanResponse: {
    encode(message: QueryUpgradePlanResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryUpgradePlanResponse;
    fromPartial(object: Partial<QueryUpgradePlanResponse>): QueryUpgradePlanResponse;
};
