import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/pob.builder.v1.MsgAuctionBid", MsgAuctionBid], ["/pob.builder.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    auctionBid(value: MsgAuctionBid) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    auctionBid(value: MsgAuctionBid) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    auctionBid(value: any) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    auctionBid(value: MsgAuctionBid) {
      return {
        typeUrl: "/pob.builder.v1.MsgAuctionBid",
        value: MsgAuctionBid.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/pob.builder.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};