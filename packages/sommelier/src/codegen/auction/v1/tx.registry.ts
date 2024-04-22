import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitBidRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/auction.v1.MsgSubmitBidRequest", MsgSubmitBidRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitBid(value: MsgSubmitBidRequest) {
      return {
        typeUrl: "/auction.v1.MsgSubmitBidRequest",
        value: MsgSubmitBidRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitBid(value: MsgSubmitBidRequest) {
      return {
        typeUrl: "/auction.v1.MsgSubmitBidRequest",
        value
      };
    }
  },
  fromJSON: {
    submitBid(value: any) {
      return {
        typeUrl: "/auction.v1.MsgSubmitBidRequest",
        value: MsgSubmitBidRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitBid(value: MsgSubmitBidRequest) {
      return {
        typeUrl: "/auction.v1.MsgSubmitBidRequest",
        value: MsgSubmitBidRequest.fromPartial(value)
      };
    }
  }
};