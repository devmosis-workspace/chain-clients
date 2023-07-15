import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateIssuer, MsgDestroyIssuer, MsgSetGasPrices, MsgReplaceAuthority, MsgScheduleUpgrade, MsgSetParameters } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/em.authority.v1.MsgCreateIssuer", MsgCreateIssuer], ["/em.authority.v1.MsgDestroyIssuer", MsgDestroyIssuer], ["/em.authority.v1.MsgSetGasPrices", MsgSetGasPrices], ["/em.authority.v1.MsgReplaceAuthority", MsgReplaceAuthority], ["/em.authority.v1.MsgScheduleUpgrade", MsgScheduleUpgrade], ["/em.authority.v1.MsgSetParameters", MsgSetParameters]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgCreateIssuer",
        value: MsgCreateIssuer.encode(value).finish()
      };
    },
    destroyIssuer(value: MsgDestroyIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgDestroyIssuer",
        value: MsgDestroyIssuer.encode(value).finish()
      };
    },
    setGasPrices(value: MsgSetGasPrices) {
      return {
        typeUrl: "/em.authority.v1.MsgSetGasPrices",
        value: MsgSetGasPrices.encode(value).finish()
      };
    },
    replaceAuthority(value: MsgReplaceAuthority) {
      return {
        typeUrl: "/em.authority.v1.MsgReplaceAuthority",
        value: MsgReplaceAuthority.encode(value).finish()
      };
    },
    scheduleUpgrade(value: MsgScheduleUpgrade) {
      return {
        typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
        value: MsgScheduleUpgrade.encode(value).finish()
      };
    },
    setParameters(value: MsgSetParameters) {
      return {
        typeUrl: "/em.authority.v1.MsgSetParameters",
        value: MsgSetParameters.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgCreateIssuer",
        value
      };
    },
    destroyIssuer(value: MsgDestroyIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgDestroyIssuer",
        value
      };
    },
    setGasPrices(value: MsgSetGasPrices) {
      return {
        typeUrl: "/em.authority.v1.MsgSetGasPrices",
        value
      };
    },
    replaceAuthority(value: MsgReplaceAuthority) {
      return {
        typeUrl: "/em.authority.v1.MsgReplaceAuthority",
        value
      };
    },
    scheduleUpgrade(value: MsgScheduleUpgrade) {
      return {
        typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
        value
      };
    },
    setParameters(value: MsgSetParameters) {
      return {
        typeUrl: "/em.authority.v1.MsgSetParameters",
        value
      };
    }
  },
  fromJSON: {
    createIssuer(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgCreateIssuer",
        value: MsgCreateIssuer.fromJSON(value)
      };
    },
    destroyIssuer(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgDestroyIssuer",
        value: MsgDestroyIssuer.fromJSON(value)
      };
    },
    setGasPrices(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgSetGasPrices",
        value: MsgSetGasPrices.fromJSON(value)
      };
    },
    replaceAuthority(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgReplaceAuthority",
        value: MsgReplaceAuthority.fromJSON(value)
      };
    },
    scheduleUpgrade(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
        value: MsgScheduleUpgrade.fromJSON(value)
      };
    },
    setParameters(value: any) {
      return {
        typeUrl: "/em.authority.v1.MsgSetParameters",
        value: MsgSetParameters.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createIssuer(value: MsgCreateIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgCreateIssuer",
        value: MsgCreateIssuer.fromPartial(value)
      };
    },
    destroyIssuer(value: MsgDestroyIssuer) {
      return {
        typeUrl: "/em.authority.v1.MsgDestroyIssuer",
        value: MsgDestroyIssuer.fromPartial(value)
      };
    },
    setGasPrices(value: MsgSetGasPrices) {
      return {
        typeUrl: "/em.authority.v1.MsgSetGasPrices",
        value: MsgSetGasPrices.fromPartial(value)
      };
    },
    replaceAuthority(value: MsgReplaceAuthority) {
      return {
        typeUrl: "/em.authority.v1.MsgReplaceAuthority",
        value: MsgReplaceAuthority.fromPartial(value)
      };
    },
    scheduleUpgrade(value: MsgScheduleUpgrade) {
      return {
        typeUrl: "/em.authority.v1.MsgScheduleUpgrade",
        value: MsgScheduleUpgrade.fromPartial(value)
      };
    },
    setParameters(value: MsgSetParameters) {
      return {
        typeUrl: "/em.authority.v1.MsgSetParameters",
        value: MsgSetParameters.fromPartial(value)
      };
    }
  }
};