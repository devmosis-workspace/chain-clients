import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        addLimitOrder(value: MsgAddLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        addMarketOrder(value: MsgAddMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        addLimitOrder(value: MsgAddLimitOrder): {
            typeUrl: string;
            value: MsgAddLimitOrder;
        };
        addMarketOrder(value: MsgAddMarketOrder): {
            typeUrl: string;
            value: MsgAddMarketOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder): {
            typeUrl: string;
            value: MsgCancelReplaceLimitOrder;
        };
        cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder): {
            typeUrl: string;
            value: MsgCancelReplaceMarketOrder;
        };
    };
    fromJSON: {
        addLimitOrder(value: any): {
            typeUrl: string;
            value: MsgAddLimitOrder;
        };
        addMarketOrder(value: any): {
            typeUrl: string;
            value: MsgAddMarketOrder;
        };
        cancelOrder(value: any): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelReplaceLimitOrder(value: any): {
            typeUrl: string;
            value: MsgCancelReplaceLimitOrder;
        };
        cancelReplaceMarketOrder(value: any): {
            typeUrl: string;
            value: MsgCancelReplaceMarketOrder;
        };
    };
    fromPartial: {
        addLimitOrder(value: MsgAddLimitOrder): {
            typeUrl: string;
            value: MsgAddLimitOrder;
        };
        addMarketOrder(value: MsgAddMarketOrder): {
            typeUrl: string;
            value: MsgAddMarketOrder;
        };
        cancelOrder(value: MsgCancelOrder): {
            typeUrl: string;
            value: MsgCancelOrder;
        };
        cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder): {
            typeUrl: string;
            value: MsgCancelReplaceLimitOrder;
        };
        cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder): {
            typeUrl: string;
            value: MsgCancelReplaceMarketOrder;
        };
    };
};
