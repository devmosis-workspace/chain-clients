import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgMintTokens, MsgBurnTokens } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/em.liquidityprovider.v1.MsgMintTokens", MsgMintTokens], ["/em.liquidityprovider.v1.MsgBurnTokens", MsgBurnTokens]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintTokens(value: MsgMintTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
        value: MsgMintTokens.encode(value).finish()
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
        value: MsgBurnTokens.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    mintTokens(value: MsgMintTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
        value
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
        value
      };
    }
  },
  fromJSON: {
    mintTokens(value: any) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
        value: MsgMintTokens.fromJSON(value)
      };
    },
    burnTokens(value: any) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
        value: MsgBurnTokens.fromJSON(value)
      };
    }
  },
  fromPartial: {
    mintTokens(value: MsgMintTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgMintTokens",
        value: MsgMintTokens.fromPartial(value)
      };
    },
    burnTokens(value: MsgBurnTokens) {
      return {
        typeUrl: "/em.liquidityprovider.v1.MsgBurnTokens",
        value: MsgBurnTokens.fromPartial(value)
      };
    }
  }
};