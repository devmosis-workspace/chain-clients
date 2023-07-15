import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgBid, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.auction.v1beta1.MsgBid", MsgBid], ["/injective.auction.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    bid(value: any) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    bid(value: MsgBid) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgBid",
        value: MsgBid.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.auction.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};