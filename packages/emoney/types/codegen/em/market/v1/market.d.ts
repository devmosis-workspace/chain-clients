import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum TimeInForce {
    TIME_IN_FORCE_UNSPECIFIED = 0,
    TIME_IN_FORCE_GOOD_TILL_CANCEL = 1,
    TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = 2,
    TIME_IN_FORCE_FILL_OR_KILL = 3,
    UNRECOGNIZED = -1
}
export declare const TimeInForceSDKType: typeof TimeInForce;
export declare function timeInForceFromJSON(object: any): TimeInForce;
export declare function timeInForceToJSON(object: TimeInForce): string;
export interface Instrument {
    source: string;
    destination: string;
}
export interface InstrumentSDKType {
    source: string;
    destination: string;
}
export interface Order {
    orderId: Long;
    timeInForce: TimeInForce;
    owner: string;
    clientOrderId: string;
    source?: Coin;
    sourceRemaining: string;
    sourceFilled: string;
    destination?: Coin;
    destinationFilled: string;
    created?: Timestamp;
}
export interface OrderSDKType {
    order_id: Long;
    time_in_force: TimeInForce;
    owner: string;
    client_order_id: string;
    source?: CoinSDKType;
    source_remaining: string;
    source_filled: string;
    destination?: CoinSDKType;
    destination_filled: string;
    created?: TimestampSDKType;
}
export interface ExecutionPlan {
    price: string;
    firstOrder?: Order;
    secondOrder?: Order;
}
export interface ExecutionPlanSDKType {
    price: string;
    first_order?: OrderSDKType;
    second_order?: OrderSDKType;
}
export interface MarketData {
    source: string;
    destination: string;
    lastPrice: string;
    timestamp?: Timestamp;
}
export interface MarketDataSDKType {
    source: string;
    destination: string;
    last_price: string;
    timestamp?: TimestampSDKType;
}
export declare const Instrument: {
    encode(message: Instrument, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Instrument;
    fromPartial(object: Partial<Instrument>): Instrument;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Order;
    fromPartial(object: Partial<Order>): Order;
};
export declare const ExecutionPlan: {
    encode(message: ExecutionPlan, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ExecutionPlan;
    fromPartial(object: Partial<ExecutionPlan>): ExecutionPlan;
};
export declare const MarketData: {
    encode(message: MarketData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MarketData;
    fromPartial(object: Partial<MarketData>): MarketData;
};
