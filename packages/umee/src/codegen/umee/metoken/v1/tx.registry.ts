import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSwap, MsgRedeem, MsgGovSetParams, MsgGovUpdateRegistry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.metoken.v1.MsgSwap", MsgSwap], ["/umee.metoken.v1.MsgRedeem", MsgRedeem], ["/umee.metoken.v1.MsgGovSetParams", MsgGovSetParams], ["/umee.metoken.v1.MsgGovUpdateRegistry", MsgGovUpdateRegistry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/umee.metoken.v1.MsgSwap",
        value: MsgSwap.encode(value).finish()
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/umee.metoken.v1.MsgRedeem",
        value: MsgRedeem.encode(value).finish()
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovSetParams",
        value: MsgGovSetParams.encode(value).finish()
      };
    },
    govUpdateRegistry(value: MsgGovUpdateRegistry) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
        value: MsgGovUpdateRegistry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/umee.metoken.v1.MsgSwap",
        value
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/umee.metoken.v1.MsgRedeem",
        value
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovSetParams",
        value
      };
    },
    govUpdateRegistry(value: MsgGovUpdateRegistry) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
        value
      };
    }
  },
  fromJSON: {
    swap(value: any) {
      return {
        typeUrl: "/umee.metoken.v1.MsgSwap",
        value: MsgSwap.fromJSON(value)
      };
    },
    redeem(value: any) {
      return {
        typeUrl: "/umee.metoken.v1.MsgRedeem",
        value: MsgRedeem.fromJSON(value)
      };
    },
    govSetParams(value: any) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovSetParams",
        value: MsgGovSetParams.fromJSON(value)
      };
    },
    govUpdateRegistry(value: any) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
        value: MsgGovUpdateRegistry.fromJSON(value)
      };
    }
  },
  fromPartial: {
    swap(value: MsgSwap) {
      return {
        typeUrl: "/umee.metoken.v1.MsgSwap",
        value: MsgSwap.fromPartial(value)
      };
    },
    redeem(value: MsgRedeem) {
      return {
        typeUrl: "/umee.metoken.v1.MsgRedeem",
        value: MsgRedeem.fromPartial(value)
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovSetParams",
        value: MsgGovSetParams.fromPartial(value)
      };
    },
    govUpdateRegistry(value: MsgGovUpdateRegistry) {
      return {
        typeUrl: "/umee.metoken.v1.MsgGovUpdateRegistry",
        value: MsgGovUpdateRegistry.fromPartial(value)
      };
    }
  }
};