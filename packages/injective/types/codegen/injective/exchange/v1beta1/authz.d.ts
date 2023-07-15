import * as _m0 from "protobufjs/minimal";
/** spot authz messages */
export interface CreateSpotLimitOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
/** spot authz messages */
export interface CreateSpotLimitOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateSpotMarketOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CreateSpotMarketOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateSpotLimitOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateSpotLimitOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelSpotOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CancelSpotOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelSpotOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelSpotOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
/** derivative authz messages */
export interface CreateDerivativeLimitOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CreateDerivativeMarketOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CreateDerivativeMarketOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCreateDerivativeLimitOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface CancelDerivativeOrderAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface CancelDerivativeOrderAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
export interface BatchCancelDerivativeOrdersAuthz {
    subaccountId: string;
    marketIds: string[];
}
export interface BatchCancelDerivativeOrdersAuthzSDKType {
    subaccount_id: string;
    market_ids: string[];
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthz {
    subaccountId: string;
    spotMarkets: string[];
    derivativeMarkets: string[];
}
/** common authz message used in both spot & derivative markets */
export interface BatchUpdateOrdersAuthzSDKType {
    subaccount_id: string;
    spot_markets: string[];
    derivative_markets: string[];
}
export declare const CreateSpotLimitOrderAuthz: {
    encode(message: CreateSpotLimitOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateSpotLimitOrderAuthz;
    fromPartial(object: Partial<CreateSpotLimitOrderAuthz>): CreateSpotLimitOrderAuthz;
};
export declare const CreateSpotMarketOrderAuthz: {
    encode(message: CreateSpotMarketOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateSpotMarketOrderAuthz;
    fromPartial(object: Partial<CreateSpotMarketOrderAuthz>): CreateSpotMarketOrderAuthz;
};
export declare const BatchCreateSpotLimitOrdersAuthz: {
    encode(message: BatchCreateSpotLimitOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchCreateSpotLimitOrdersAuthz;
    fromPartial(object: Partial<BatchCreateSpotLimitOrdersAuthz>): BatchCreateSpotLimitOrdersAuthz;
};
export declare const CancelSpotOrderAuthz: {
    encode(message: CancelSpotOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CancelSpotOrderAuthz;
    fromPartial(object: Partial<CancelSpotOrderAuthz>): CancelSpotOrderAuthz;
};
export declare const BatchCancelSpotOrdersAuthz: {
    encode(message: BatchCancelSpotOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchCancelSpotOrdersAuthz;
    fromPartial(object: Partial<BatchCancelSpotOrdersAuthz>): BatchCancelSpotOrdersAuthz;
};
export declare const CreateDerivativeLimitOrderAuthz: {
    encode(message: CreateDerivativeLimitOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateDerivativeLimitOrderAuthz;
    fromPartial(object: Partial<CreateDerivativeLimitOrderAuthz>): CreateDerivativeLimitOrderAuthz;
};
export declare const CreateDerivativeMarketOrderAuthz: {
    encode(message: CreateDerivativeMarketOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CreateDerivativeMarketOrderAuthz;
    fromPartial(object: Partial<CreateDerivativeMarketOrderAuthz>): CreateDerivativeMarketOrderAuthz;
};
export declare const BatchCreateDerivativeLimitOrdersAuthz: {
    encode(message: BatchCreateDerivativeLimitOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchCreateDerivativeLimitOrdersAuthz;
    fromPartial(object: Partial<BatchCreateDerivativeLimitOrdersAuthz>): BatchCreateDerivativeLimitOrdersAuthz;
};
export declare const CancelDerivativeOrderAuthz: {
    encode(message: CancelDerivativeOrderAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CancelDerivativeOrderAuthz;
    fromPartial(object: Partial<CancelDerivativeOrderAuthz>): CancelDerivativeOrderAuthz;
};
export declare const BatchCancelDerivativeOrdersAuthz: {
    encode(message: BatchCancelDerivativeOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchCancelDerivativeOrdersAuthz;
    fromPartial(object: Partial<BatchCancelDerivativeOrdersAuthz>): BatchCancelDerivativeOrdersAuthz;
};
export declare const BatchUpdateOrdersAuthz: {
    encode(message: BatchUpdateOrdersAuthz, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BatchUpdateOrdersAuthz;
    fromPartial(object: Partial<BatchUpdateOrdersAuthz>): BatchUpdateOrdersAuthz;
};
