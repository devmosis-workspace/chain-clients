import { GroupSpec, GroupSpecSDKType } from "../../deployment/v1beta2/groupspec";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
/** OrderID stores owner and all other seq numbers */
export interface OrderIDSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
    orderId?: OrderID;
    state: Order_State;
    spec?: GroupSpec;
    createdAt: Long;
}
/** Order stores orderID, state of order and other details */
export interface OrderSDKType {
    order_id?: OrderIDSDKType;
    state: Order_State;
    spec?: GroupSpecSDKType;
    created_at: Long;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
/** OrderFilters defines flags for order list filter */
export interface OrderFiltersSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OrderID;
    fromPartial(object: Partial<OrderID>): OrderID;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Order;
    fromPartial(object: Partial<Order>): Order;
};
export declare const OrderFilters: {
    encode(message: OrderFilters, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): OrderFilters;
    fromPartial(object: Partial<OrderFilters>): OrderFilters;
};
