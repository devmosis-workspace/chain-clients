import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSetLimitParams, MsgDeleteLimitParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/dydxprotocol.ratelimit.MsgSetLimitParams", MsgSetLimitParams], ["/dydxprotocol.ratelimit.MsgDeleteLimitParams", MsgDeleteLimitParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    setLimitParams(value: MsgSetLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
        value: MsgSetLimitParams.encode(value).finish()
      };
    },
    deleteLimitParams(value: MsgDeleteLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
        value: MsgDeleteLimitParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    setLimitParams(value: MsgSetLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
        value
      };
    },
    deleteLimitParams(value: MsgDeleteLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
        value
      };
    }
  },
  fromJSON: {
    setLimitParams(value: any) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
        value: MsgSetLimitParams.fromJSON(value)
      };
    },
    deleteLimitParams(value: any) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
        value: MsgDeleteLimitParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    setLimitParams(value: MsgSetLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgSetLimitParams",
        value: MsgSetLimitParams.fromPartial(value)
      };
    },
    deleteLimitParams(value: MsgDeleteLimitParams) {
      return {
        typeUrl: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
        value: MsgDeleteLimitParams.fromPartial(value)
      };
    }
  }
};