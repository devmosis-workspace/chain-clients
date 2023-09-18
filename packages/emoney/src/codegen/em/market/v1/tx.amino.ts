import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export const AminoConverter = {
  "/em.market.v1.MsgAddLimitOrder": {
    aminoType: "/em.market.v1.MsgAddLimitOrder",
    toAmino: MsgAddLimitOrder.toAmino,
    fromAmino: MsgAddLimitOrder.fromAmino
  },
  "/em.market.v1.MsgAddMarketOrder": {
    aminoType: "/em.market.v1.MsgAddMarketOrder",
    toAmino: MsgAddMarketOrder.toAmino,
    fromAmino: MsgAddMarketOrder.fromAmino
  },
  "/em.market.v1.MsgCancelOrder": {
    aminoType: "/em.market.v1.MsgCancelOrder",
    toAmino: MsgCancelOrder.toAmino,
    fromAmino: MsgCancelOrder.fromAmino
  },
  "/em.market.v1.MsgCancelReplaceLimitOrder": {
    aminoType: "/em.market.v1.MsgCancelReplaceLimitOrder",
    toAmino: MsgCancelReplaceLimitOrder.toAmino,
    fromAmino: MsgCancelReplaceLimitOrder.fromAmino
  },
  "/em.market.v1.MsgCancelReplaceMarketOrder": {
    aminoType: "/em.market.v1.MsgCancelReplaceMarketOrder",
    toAmino: MsgCancelReplaceMarketOrder.toAmino,
    fromAmino: MsgCancelReplaceMarketOrder.fromAmino
  }
};