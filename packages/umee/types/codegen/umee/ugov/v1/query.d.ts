import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPrice {
}
/** QueryMinGasPrice is a request type. */
export interface QueryMinGasPriceSDKType {
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponse {
    minGasPrice?: DecCoin;
}
/** QueryMinGasPriceResponse response type. */
export interface QueryMinGasPriceResponseSDKType {
    min_gas_price?: DecCoinSDKType;
}
export declare const QueryMinGasPrice: {
    encode(_: QueryMinGasPrice, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryMinGasPrice;
    fromPartial(_: Partial<QueryMinGasPrice>): QueryMinGasPrice;
};
export declare const QueryMinGasPriceResponse: {
    encode(message: QueryMinGasPriceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMinGasPriceResponse;
    fromPartial(object: Partial<QueryMinGasPriceResponse>): QueryMinGasPriceResponse;
};
