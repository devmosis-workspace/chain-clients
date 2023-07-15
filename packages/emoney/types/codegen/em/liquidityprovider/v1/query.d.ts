import { LiquidityProviderAccount, LiquidityProviderAccountSDKType } from "./liquidityprovider";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
export interface QueryListRequest {
}
export interface QueryListRequestSDKType {
}
export interface QueryListResponse {
    liquidityProviders: LiquidityProviderAccount[];
}
export interface QueryListResponseSDKType {
    liquidity_providers: LiquidityProviderAccountSDKType[];
}
export interface QueryMintableRequest {
    /** address defines the liquidity provider address to query mintable. */
    address: string;
}
export interface QueryMintableRequestSDKType {
    address: string;
}
export interface QueryMintableResponse {
    mintable: Coin[];
}
export interface QueryMintableResponseSDKType {
    mintable: CoinSDKType[];
}
export declare const QueryListRequest: {
    encode(_: QueryListRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryListRequest;
    fromPartial(_: Partial<QueryListRequest>): QueryListRequest;
};
export declare const QueryListResponse: {
    encode(message: QueryListResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryListResponse;
    fromPartial(object: Partial<QueryListResponse>): QueryListResponse;
};
export declare const QueryMintableRequest: {
    encode(message: QueryMintableRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMintableRequest;
    fromPartial(object: Partial<QueryMintableRequest>): QueryMintableRequest;
};
export declare const QueryMintableResponse: {
    encode(message: QueryMintableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMintableResponse;
    fromPartial(object: Partial<QueryMintableResponse>): QueryMintableResponse;
};
