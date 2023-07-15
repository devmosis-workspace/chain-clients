import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
export interface QueryBalanceRequest {
}
export interface QueryBalanceRequestSDKType {
}
export interface QueryBalanceResponse {
    balance: Coin[];
}
export interface QueryBalanceResponseSDKType {
    balance: CoinSDKType[];
}
export interface QueryBuybackTimeRequest {
}
export interface QueryBuybackTimeRequestSDKType {
}
export interface QueryBuybackTimeResponse {
    lastRun?: Timestamp;
    nextRun?: Timestamp;
}
export interface QueryBuybackTimeResponseSDKType {
    last_run?: TimestampSDKType;
    next_run?: TimestampSDKType;
}
export declare const QueryBalanceRequest: {
    encode(_: QueryBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBalanceRequest;
    fromPartial(_: Partial<QueryBalanceRequest>): QueryBalanceRequest;
};
export declare const QueryBalanceResponse: {
    encode(message: QueryBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBalanceResponse;
    fromPartial(object: Partial<QueryBalanceResponse>): QueryBalanceResponse;
};
export declare const QueryBuybackTimeRequest: {
    encode(_: QueryBuybackTimeRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryBuybackTimeRequest;
    fromPartial(_: Partial<QueryBuybackTimeRequest>): QueryBuybackTimeRequest;
};
export declare const QueryBuybackTimeResponse: {
    encode(message: QueryBuybackTimeResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryBuybackTimeResponse;
    fromPartial(object: Partial<QueryBuybackTimeResponse>): QueryBuybackTimeResponse;
};
