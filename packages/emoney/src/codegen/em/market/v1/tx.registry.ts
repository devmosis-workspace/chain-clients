import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAddLimitOrder, MsgAddMarketOrder, MsgCancelOrder, MsgCancelReplaceLimitOrder, MsgCancelReplaceMarketOrder } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/em.market.v1.MsgAddLimitOrder", MsgAddLimitOrder], ["/em.market.v1.MsgAddMarketOrder", MsgAddMarketOrder], ["/em.market.v1.MsgCancelOrder", MsgCancelOrder], ["/em.market.v1.MsgCancelReplaceLimitOrder", MsgCancelReplaceLimitOrder], ["/em.market.v1.MsgCancelReplaceMarketOrder", MsgCancelReplaceMarketOrder]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    addLimitOrder(value: MsgAddLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddLimitOrder",
        value: MsgAddLimitOrder.encode(value).finish()
      };
    },
    addMarketOrder(value: MsgAddMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddMarketOrder",
        value: MsgAddMarketOrder.encode(value).finish()
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelOrder",
        value: MsgCancelOrder.encode(value).finish()
      };
    },
    cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
        value: MsgCancelReplaceLimitOrder.encode(value).finish()
      };
    },
    cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
        value: MsgCancelReplaceMarketOrder.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    addLimitOrder(value: MsgAddLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddLimitOrder",
        value
      };
    },
    addMarketOrder(value: MsgAddMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddMarketOrder",
        value
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelOrder",
        value
      };
    },
    cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
        value
      };
    },
    cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
        value
      };
    }
  },
  fromJSON: {
    addLimitOrder(value: any) {
      return {
        typeUrl: "/em.market.v1.MsgAddLimitOrder",
        value: MsgAddLimitOrder.fromJSON(value)
      };
    },
    addMarketOrder(value: any) {
      return {
        typeUrl: "/em.market.v1.MsgAddMarketOrder",
        value: MsgAddMarketOrder.fromJSON(value)
      };
    },
    cancelOrder(value: any) {
      return {
        typeUrl: "/em.market.v1.MsgCancelOrder",
        value: MsgCancelOrder.fromJSON(value)
      };
    },
    cancelReplaceLimitOrder(value: any) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
        value: MsgCancelReplaceLimitOrder.fromJSON(value)
      };
    },
    cancelReplaceMarketOrder(value: any) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
        value: MsgCancelReplaceMarketOrder.fromJSON(value)
      };
    }
  },
  fromPartial: {
    addLimitOrder(value: MsgAddLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddLimitOrder",
        value: MsgAddLimitOrder.fromPartial(value)
      };
    },
    addMarketOrder(value: MsgAddMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgAddMarketOrder",
        value: MsgAddMarketOrder.fromPartial(value)
      };
    },
    cancelOrder(value: MsgCancelOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelOrder",
        value: MsgCancelOrder.fromPartial(value)
      };
    },
    cancelReplaceLimitOrder(value: MsgCancelReplaceLimitOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceLimitOrder",
        value: MsgCancelReplaceLimitOrder.fromPartial(value)
      };
    },
    cancelReplaceMarketOrder(value: MsgCancelReplaceMarketOrder) {
      return {
        typeUrl: "/em.market.v1.MsgCancelReplaceMarketOrder",
        value: MsgCancelReplaceMarketOrder.fromPartial(value)
      };
    }
  }
};