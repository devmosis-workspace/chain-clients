import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIncreaseMintable, MsgDecreaseMintable, MsgRevokeLiquidityProvider, MsgSetInflation } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/em.issuer.v1.MsgIncreaseMintable", MsgIncreaseMintable], ["/em.issuer.v1.MsgDecreaseMintable", MsgDecreaseMintable], ["/em.issuer.v1.MsgRevokeLiquidityProvider", MsgRevokeLiquidityProvider], ["/em.issuer.v1.MsgSetInflation", MsgSetInflation]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    increaseMintable(value: MsgIncreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
        value: MsgIncreaseMintable.encode(value).finish()
      };
    },
    decreaseMintable(value: MsgDecreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
        value: MsgDecreaseMintable.encode(value).finish()
      };
    },
    revokeLiquidityProvider(value: MsgRevokeLiquidityProvider) {
      return {
        typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
        value: MsgRevokeLiquidityProvider.encode(value).finish()
      };
    },
    setInflation(value: MsgSetInflation) {
      return {
        typeUrl: "/em.issuer.v1.MsgSetInflation",
        value: MsgSetInflation.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    increaseMintable(value: MsgIncreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
        value
      };
    },
    decreaseMintable(value: MsgDecreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
        value
      };
    },
    revokeLiquidityProvider(value: MsgRevokeLiquidityProvider) {
      return {
        typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
        value
      };
    },
    setInflation(value: MsgSetInflation) {
      return {
        typeUrl: "/em.issuer.v1.MsgSetInflation",
        value
      };
    }
  },
  fromJSON: {
    increaseMintable(value: any) {
      return {
        typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
        value: MsgIncreaseMintable.fromJSON(value)
      };
    },
    decreaseMintable(value: any) {
      return {
        typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
        value: MsgDecreaseMintable.fromJSON(value)
      };
    },
    revokeLiquidityProvider(value: any) {
      return {
        typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
        value: MsgRevokeLiquidityProvider.fromJSON(value)
      };
    },
    setInflation(value: any) {
      return {
        typeUrl: "/em.issuer.v1.MsgSetInflation",
        value: MsgSetInflation.fromJSON(value)
      };
    }
  },
  fromPartial: {
    increaseMintable(value: MsgIncreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgIncreaseMintable",
        value: MsgIncreaseMintable.fromPartial(value)
      };
    },
    decreaseMintable(value: MsgDecreaseMintable) {
      return {
        typeUrl: "/em.issuer.v1.MsgDecreaseMintable",
        value: MsgDecreaseMintable.fromPartial(value)
      };
    },
    revokeLiquidityProvider(value: MsgRevokeLiquidityProvider) {
      return {
        typeUrl: "/em.issuer.v1.MsgRevokeLiquidityProvider",
        value: MsgRevokeLiquidityProvider.fromPartial(value)
      };
    },
    setInflation(value: MsgSetInflation) {
      return {
        typeUrl: "/em.issuer.v1.MsgSetInflation",
        value: MsgSetInflation.fromPartial(value)
      };
    }
  }
};