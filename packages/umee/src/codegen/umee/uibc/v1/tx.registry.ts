import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateQuota, MsgGovSetIBCStatus, MsgGovToggleICS20Hooks } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.uibc.v1.MsgGovUpdateQuota", MsgGovUpdateQuota], ["/umee.uibc.v1.MsgGovSetIBCStatus", MsgGovSetIBCStatus], ["/umee.uibc.v1.MsgGovToggleICS20Hooks", MsgGovToggleICS20Hooks]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    govUpdateQuota(value: MsgGovUpdateQuota) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
        value: MsgGovUpdateQuota.encode(value).finish()
      };
    },
    govSetIBCStatus(value: MsgGovSetIBCStatus) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
        value: MsgGovSetIBCStatus.encode(value).finish()
      };
    },
    govToggleICS20Hooks(value: MsgGovToggleICS20Hooks) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
        value: MsgGovToggleICS20Hooks.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    govUpdateQuota(value: MsgGovUpdateQuota) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
        value
      };
    },
    govSetIBCStatus(value: MsgGovSetIBCStatus) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
        value
      };
    },
    govToggleICS20Hooks(value: MsgGovToggleICS20Hooks) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
        value
      };
    }
  },
  fromJSON: {
    govUpdateQuota(value: any) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
        value: MsgGovUpdateQuota.fromJSON(value)
      };
    },
    govSetIBCStatus(value: any) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
        value: MsgGovSetIBCStatus.fromJSON(value)
      };
    },
    govToggleICS20Hooks(value: any) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
        value: MsgGovToggleICS20Hooks.fromJSON(value)
      };
    }
  },
  fromPartial: {
    govUpdateQuota(value: MsgGovUpdateQuota) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovUpdateQuota",
        value: MsgGovUpdateQuota.fromPartial(value)
      };
    },
    govSetIBCStatus(value: MsgGovSetIBCStatus) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovSetIBCStatus",
        value: MsgGovSetIBCStatus.fromPartial(value)
      };
    },
    govToggleICS20Hooks(value: MsgGovToggleICS20Hooks) {
      return {
        typeUrl: "/umee.uibc.v1.MsgGovToggleICS20Hooks",
        value: MsgGovToggleICS20Hooks.fromPartial(value)
      };
    }
  }
};