import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateQuota, MsgGovSetIBCStatus } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.uibc.v1.MsgGovUpdateQuota", MsgGovUpdateQuota], ["/umee.uibc.v1.MsgGovSetIBCStatus", MsgGovSetIBCStatus]];
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
    }
  }
};