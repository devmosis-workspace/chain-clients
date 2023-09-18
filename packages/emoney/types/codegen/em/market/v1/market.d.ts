import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export declare enum TimeInForce {
    TIME_IN_FORCE_UNSPECIFIED = 0,
    TIME_IN_FORCE_GOOD_TILL_CANCEL = 1,
    TIME_IN_FORCE_IMMEDIATE_OR_CANCEL = 2,
    TIME_IN_FORCE_FILL_OR_KILL = 3,
    UNRECOGNIZED = -1
}
export declare const TimeInForceSDKType: typeof TimeInForce;
export declare const TimeInForceAmino: typeof TimeInForce;
export declare function timeInForceFromJSON(object: any): TimeInForce;
export declare function timeInForceToJSON(object: TimeInForce): string;
export interface Instrument {
    source: string;
    destination: string;
}
export interface InstrumentProtoMsg {
    typeUrl: "/em.market.v1.Instrument";
    value: Uint8Array;
}
export interface InstrumentAmino {
    source: string;
    destination: string;
}
export interface InstrumentAminoMsg {
    type: "/em.market.v1.Instrument";
    value: InstrumentAmino;
}
export interface InstrumentSDKType {
    source: string;
    destination: string;
}
export interface Order {
    orderId: bigint;
    timeInForce: TimeInForce;
    owner: string;
    clientOrderId: string;
    source: Coin;
    sourceRemaining: string;
    sourceFilled: string;
    destination: Coin;
    destinationFilled: string;
    created: Timestamp;
}
export interface OrderProtoMsg {
    typeUrl: "/em.market.v1.Order";
    value: Uint8Array;
}
export interface OrderAmino {
    order_id: string;
    time_in_force: TimeInForce;
    owner: string;
    client_order_id: string;
    source?: CoinAmino;
    source_remaining: string;
    source_filled: string;
    destination?: CoinAmino;
    destination_filled: string;
    created?: TimestampAmino;
}
export interface OrderAminoMsg {
    type: "/em.market.v1.Order";
    value: OrderAmino;
}
export interface OrderSDKType {
    order_id: bigint;
    time_in_force: TimeInForce;
    owner: string;
    client_order_id: string;
    source: CoinSDKType;
    source_remaining: string;
    source_filled: string;
    destination: CoinSDKType;
    destination_filled: string;
    created: TimestampSDKType;
}
export interface ExecutionPlan {
    price: string;
    firstOrder: Order;
    secondOrder: Order;
}
export interface ExecutionPlanProtoMsg {
    typeUrl: "/em.market.v1.ExecutionPlan";
    value: Uint8Array;
}
export interface ExecutionPlanAmino {
    price: string;
    first_order?: OrderAmino;
    second_order?: OrderAmino;
}
export interface ExecutionPlanAminoMsg {
    type: "/em.market.v1.ExecutionPlan";
    value: ExecutionPlanAmino;
}
export interface ExecutionPlanSDKType {
    price: string;
    first_order: OrderSDKType;
    second_order: OrderSDKType;
}
export interface MarketData {
    source: string;
    destination: string;
    lastPrice: string;
    timestamp: Timestamp;
}
export interface MarketDataProtoMsg {
    typeUrl: "/em.market.v1.MarketData";
    value: Uint8Array;
}
export interface MarketDataAmino {
    source: string;
    destination: string;
    last_price: string;
    timestamp?: TimestampAmino;
}
export interface MarketDataAminoMsg {
    type: "/em.market.v1.MarketData";
    value: MarketDataAmino;
}
export interface MarketDataSDKType {
    source: string;
    destination: string;
    last_price: string;
    timestamp: TimestampSDKType;
}
export declare const Instrument: {
    typeUrl: string;
    encode(message: Instrument, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Instrument;
    fromPartial(object: Partial<Instrument>): Instrument;
    fromAmino(object: InstrumentAmino): Instrument;
    toAmino(message: Instrument): InstrumentAmino;
    fromAminoMsg(object: InstrumentAminoMsg): Instrument;
    fromProtoMsg(message: InstrumentProtoMsg): Instrument;
    toProto(message: Instrument): Uint8Array;
    toProtoMsg(message: Instrument): InstrumentProtoMsg;
};
export declare const Order: {
    typeUrl: string;
    encode(message: Order, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Order;
    fromPartial(object: Partial<Order>): Order;
    fromAmino(object: OrderAmino): Order;
    toAmino(message: Order): OrderAmino;
    fromAminoMsg(object: OrderAminoMsg): Order;
    fromProtoMsg(message: OrderProtoMsg): Order;
    toProto(message: Order): Uint8Array;
    toProtoMsg(message: Order): OrderProtoMsg;
};
export declare const ExecutionPlan: {
    typeUrl: string;
    encode(message: ExecutionPlan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ExecutionPlan;
    fromPartial(object: Partial<ExecutionPlan>): ExecutionPlan;
    fromAmino(object: ExecutionPlanAmino): ExecutionPlan;
    toAmino(message: ExecutionPlan): ExecutionPlanAmino;
    fromAminoMsg(object: ExecutionPlanAminoMsg): ExecutionPlan;
    fromProtoMsg(message: ExecutionPlanProtoMsg): ExecutionPlan;
    toProto(message: ExecutionPlan): Uint8Array;
    toProtoMsg(message: ExecutionPlan): ExecutionPlanProtoMsg;
};
export declare const MarketData: {
    typeUrl: string;
    encode(message: MarketData, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MarketData;
    fromPartial(object: Partial<MarketData>): MarketData;
    fromAmino(object: MarketDataAmino): MarketData;
    toAmino(message: MarketData): MarketDataAmino;
    fromAminoMsg(object: MarketDataAminoMsg): MarketData;
    fromProtoMsg(message: MarketDataProtoMsg): MarketData;
    toProto(message: MarketData): Uint8Array;
    toProtoMsg(message: MarketData): MarketDataProtoMsg;
};
