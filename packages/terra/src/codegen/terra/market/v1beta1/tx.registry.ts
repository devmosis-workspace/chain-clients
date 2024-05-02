import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwap, MsgSwapSend } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/terra.market.v1beta1.MsgSwap", MsgSwap], ["/terra.market.v1beta1.MsgSwapSend", MsgSwapSend]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwapSend",
        value: MsgSwapSend.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwap",
        value
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwapSend",
        value
      };
    }
  },
  fromJSON: {
    swap(value: any) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwap",
        value: MsgSwap.fromJSON(value)
      };
    },
    swapSend(value: any) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwapSend",
        value: MsgSwapSend.fromJSON(value)
      };
    }
  },
  fromPartial: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },
    swapSend(value: MsgSwapSend) {
      return {
        typeUrl: "/terra.market.v1beta1.MsgSwapSend",
        value: MsgSwapSend.fromPartial(value)
      };
    }
  }
};