import { AminoMsg } from "@cosmjs/amino";
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export interface MsgAddLimitOrderAminoType extends AminoMsg {
    type: "/em.market.v1.MsgAddLimitOrder";
    value: {
        owner: string;
        client_order_id: string;
        time_in_force: number;
        source: {
            denom: string;
            amount: string;
        };
        destination: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgAddMarketOrderAminoType extends AminoMsg {
    type: "/em.market.v1.MsgAddMarketOrder";
    value: {
        owner: string;
        client_order_id: string;
        time_in_force: number;
        source: string;
        destination: {
            denom: string;
            amount: string;
        };
        maximum_slippage: string;
    };
}
export interface MsgCancelOrderAminoType extends AminoMsg {
    type: "/em.market.v1.MsgCancelOrder";
    value: {
        owner: string;
        client_order_id: string;
    };
}
export interface MsgCancelReplaceLimitOrderAminoType extends AminoMsg {
    type: "/em.market.v1.MsgCancelReplaceLimitOrder";
    value: {
        owner: string;
        original_client_order_id: string;
        new_client_order_id: string;
        time_in_force: number;
        source: {
            denom: string;
            amount: string;
        };
        destination: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgCancelReplaceMarketOrderAminoType extends AminoMsg {
    type: "/em.market.v1.MsgCancelReplaceMarketOrder";
    value: {
        owner: string;
        original_client_order_id: string;
        new_client_order_id: string;
        time_in_force: number;
        source: string;
        destination: {
            denom: string;
            amount: string;
        };
        maximum_slippage: string;
    };
}
export declare const AminoConverter: {
    "/em.market.v1.MsgAddLimitOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination }: MsgAddLimitOrder) => MsgAddLimitOrderAminoType["value"];
        fromAmino: ({ owner, client_order_id, time_in_force, source, destination }: MsgAddLimitOrderAminoType["value"]) => MsgAddLimitOrder;
    };
    "/em.market.v1.MsgAddMarketOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId, timeInForce, source, destination, maximumSlippage }: MsgAddMarketOrder) => MsgAddMarketOrderAminoType["value"];
        fromAmino: ({ owner, client_order_id, time_in_force, source, destination, maximum_slippage }: MsgAddMarketOrderAminoType["value"]) => MsgAddMarketOrder;
    };
    "/em.market.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: ({ owner, clientOrderId }: MsgCancelOrder) => MsgCancelOrderAminoType["value"];
        fromAmino: ({ owner, client_order_id }: MsgCancelOrderAminoType["value"]) => MsgCancelOrder;
    };
    "/em.market.v1.MsgCancelReplaceLimitOrder": {
        aminoType: string;
        toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination }: MsgCancelReplaceLimitOrder) => MsgCancelReplaceLimitOrderAminoType["value"];
        fromAmino: ({ owner, original_client_order_id, new_client_order_id, time_in_force, source, destination }: MsgCancelReplaceLimitOrderAminoType["value"]) => MsgCancelReplaceLimitOrder;
    };
    "/em.market.v1.MsgCancelReplaceMarketOrder": {
        aminoType: string;
        toAmino: ({ owner, originalClientOrderId, newClientOrderId, timeInForce, source, destination, maximumSlippage }: MsgCancelReplaceMarketOrder) => MsgCancelReplaceMarketOrderAminoType["value"];
        fromAmino: ({ owner, original_client_order_id, new_client_order_id, time_in_force, source, destination, maximum_slippage }: MsgCancelReplaceMarketOrderAminoType["value"]) => MsgCancelReplaceMarketOrder;
    };
};
