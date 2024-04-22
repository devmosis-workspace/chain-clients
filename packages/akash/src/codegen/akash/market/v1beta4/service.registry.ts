import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/akash.market.v1beta4.MsgCreateBid", MsgCreateBid], ["/akash.market.v1beta4.MsgCloseBid", MsgCloseBid], ["/akash.market.v1beta4.MsgWithdrawLease", MsgWithdrawLease], ["/akash.market.v1beta4.MsgCreateLease", MsgCreateLease], ["/akash.market.v1beta4.MsgCloseLease", MsgCloseLease]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateBid",
        value: MsgCreateBid.encode(value).finish()
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseBid",
        value: MsgCloseBid.encode(value).finish()
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgWithdrawLease",
        value: MsgWithdrawLease.encode(value).finish()
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateLease",
        value: MsgCreateLease.encode(value).finish()
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseLease",
        value: MsgCloseLease.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateBid",
        value
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseBid",
        value
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgWithdrawLease",
        value
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateLease",
        value
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseLease",
        value
      };
    }
  },
  fromJSON: {
    createBid(value: any) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateBid",
        value: MsgCreateBid.fromJSON(value)
      };
    },
    closeBid(value: any) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseBid",
        value: MsgCloseBid.fromJSON(value)
      };
    },
    withdrawLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgWithdrawLease",
        value: MsgWithdrawLease.fromJSON(value)
      };
    },
    createLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateLease",
        value: MsgCreateLease.fromJSON(value)
      };
    },
    closeLease(value: any) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseLease",
        value: MsgCloseLease.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createBid(value: MsgCreateBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateBid",
        value: MsgCreateBid.fromPartial(value)
      };
    },
    closeBid(value: MsgCloseBid) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseBid",
        value: MsgCloseBid.fromPartial(value)
      };
    },
    withdrawLease(value: MsgWithdrawLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgWithdrawLease",
        value: MsgWithdrawLease.fromPartial(value)
      };
    },
    createLease(value: MsgCreateLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCreateLease",
        value: MsgCreateLease.fromPartial(value)
      };
    },
    closeLease(value: MsgCloseLease) {
      return {
        typeUrl: "/akash.market.v1beta4.MsgCloseLease",
        value: MsgCloseLease.fromPartial(value)
      };
    }
  }
};