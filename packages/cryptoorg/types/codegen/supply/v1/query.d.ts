import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequest {
}
/**
 * SupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface SupplyRequestSDKType {
}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponse {
    /** supply is the supply of the coins */
    supply: Coin[];
}
/**
 * SupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface SupplyResponseSDKType {
    supply: CoinSDKType[];
}
export declare const SupplyRequest: {
    encode(_: SupplyRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): SupplyRequest;
    fromPartial(_: Partial<SupplyRequest>): SupplyRequest;
};
export declare const SupplyResponse: {
    encode(message: SupplyResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SupplyResponse;
    fromPartial(object: Partial<SupplyResponse>): SupplyResponse;
};
