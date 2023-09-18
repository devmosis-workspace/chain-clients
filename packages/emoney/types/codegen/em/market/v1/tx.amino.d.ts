import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export declare const AminoConverter: {
    "/em.market.v1.MsgAddLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgAddLimitOrder) => import("./tx").MsgAddLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgAddLimitOrderAmino) => MsgAddLimitOrder;
    };
    "/em.market.v1.MsgAddMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgAddMarketOrder) => import("./tx").MsgAddMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgAddMarketOrderAmino) => MsgAddMarketOrder;
    };
    "/em.market.v1.MsgCancelOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelOrder) => import("./tx").MsgCancelOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelOrderAmino) => MsgCancelOrder;
    };
    "/em.market.v1.MsgCancelReplaceLimitOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelReplaceLimitOrder) => import("./tx").MsgCancelReplaceLimitOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelReplaceLimitOrderAmino) => MsgCancelReplaceLimitOrder;
    };
    "/em.market.v1.MsgCancelReplaceMarketOrder": {
        aminoType: string;
        toAmino: (message: MsgCancelReplaceMarketOrder) => import("./tx").MsgCancelReplaceMarketOrderAmino;
        fromAmino: (object: import("./tx").MsgCancelReplaceMarketOrderAmino) => MsgCancelReplaceMarketOrder;
    };
};
