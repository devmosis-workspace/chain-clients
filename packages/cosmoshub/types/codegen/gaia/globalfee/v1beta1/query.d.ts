import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequest {
}
/**
 * QueryMinimumGasPricesRequest is the request type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesRequestSDKType {
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponse {
    minimumGasPrices: DecCoin[];
}
/**
 * QueryMinimumGasPricesResponse is the response type for the
 * Query/MinimumGasPrices RPC method.
 */
export interface QueryMinimumGasPricesResponseSDKType {
    minimum_gas_prices: DecCoinSDKType[];
}
export declare const QueryMinimumGasPricesRequest: {
    encode(_: QueryMinimumGasPricesRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryMinimumGasPricesRequest;
    fromPartial(_: Partial<QueryMinimumGasPricesRequest>): QueryMinimumGasPricesRequest;
};
export declare const QueryMinimumGasPricesResponse: {
    encode(message: QueryMinimumGasPricesResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMinimumGasPricesResponse;
    fromPartial(object: Partial<QueryMinimumGasPricesResponse>): QueryMinimumGasPricesResponse;
};
