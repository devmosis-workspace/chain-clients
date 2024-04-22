import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "../../deployment/v1beta3/groupspec";
import { BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of order */
export declare enum Order_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - OrderOpen denotes state for order open */
    open = 1,
    /** active - OrderMatched denotes state for order matched */
    active = 2,
    /** closed - OrderClosed denotes state for order lost */
    closed = 3,
    UNRECOGNIZED = -1
}
export declare const Order_StateSDKType: typeof Order_State;
export declare const Order_StateAmino: typeof Order_State;
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
}
export interface OrderIDProtoMsg {
    typeUrl: "/akash.market.v1beta4.OrderID";
    value: Uint8Array;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
}
export interface OrderIDAminoMsg {
    type: "/akash.market.v1beta4.OrderID";
    value: OrderIDAmino;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
    orderId: OrderID;
    state: Order_State;
    spec: GroupSpec;
    createdAt: bigint;
}
export interface OrderProtoMsg {
    typeUrl: "/akash.market.v1beta4.Order";
    value: Uint8Array;
}
/** Order stores orderID, state of order and other details */
export interface OrderAmino {
    order_id?: OrderIDAmino;
    state?: Order_State;
    spec?: GroupSpecAmino;
    created_at?: string;
}
export interface OrderAminoMsg {
    type: "/akash.market.v1beta4.Order";
    value: OrderAmino;
}
/** Order stores orderID, state of order and other details */
export interface OrderSDKType {
    order_id: OrderIDSDKType;
    state: Order_State;
    spec: GroupSpecSDKType;
    created_at: bigint;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    state: string;
}
export interface OrderFiltersProtoMsg {
    typeUrl: "/akash.market.v1beta4.OrderFilters";
    value: Uint8Array;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersAmino {
    owner?: string;
    dseq?: string;
    gseq?: number;
    oseq?: number;
    state?: string;
}
export interface OrderFiltersAminoMsg {
    type: "/akash.market.v1beta4.OrderFilters";
    value: OrderFiltersAmino;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    typeUrl: string;
    encode(message: OrderID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OrderID;
    fromPartial(object: Partial<OrderID>): OrderID;
    fromAmino(object: OrderIDAmino): OrderID;
    toAmino(message: OrderID): OrderIDAmino;
    fromAminoMsg(object: OrderIDAminoMsg): OrderID;
    fromProtoMsg(message: OrderIDProtoMsg): OrderID;
    toProto(message: OrderID): Uint8Array;
    toProtoMsg(message: OrderID): OrderIDProtoMsg;
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
export declare const OrderFilters: {
    typeUrl: string;
    encode(message: OrderFilters, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OrderFilters;
    fromPartial(object: Partial<OrderFilters>): OrderFilters;
    fromAmino(object: OrderFiltersAmino): OrderFilters;
    toAmino(message: OrderFilters): OrderFiltersAmino;
    fromAminoMsg(object: OrderFiltersAminoMsg): OrderFilters;
    fromProtoMsg(message: OrderFiltersProtoMsg): OrderFilters;
    toProto(message: OrderFilters): Uint8Array;
    toProtoMsg(message: OrderFilters): OrderFiltersProtoMsg;
};
