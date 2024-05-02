import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateProgram, MsgEditProgram, MsgActivateProgram, MsgCloseProgram, MsgSubmitFinding, MsgEditFinding, MsgActivateFinding, MsgConfirmFinding, MsgConfirmFindingPaid, MsgCloseFinding, MsgPublishFinding } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/shentu.bounty.v1.MsgCreateProgram", MsgCreateProgram], ["/shentu.bounty.v1.MsgEditProgram", MsgEditProgram], ["/shentu.bounty.v1.MsgActivateProgram", MsgActivateProgram], ["/shentu.bounty.v1.MsgCloseProgram", MsgCloseProgram], ["/shentu.bounty.v1.MsgSubmitFinding", MsgSubmitFinding], ["/shentu.bounty.v1.MsgEditFinding", MsgEditFinding], ["/shentu.bounty.v1.MsgActivateFinding", MsgActivateFinding], ["/shentu.bounty.v1.MsgConfirmFinding", MsgConfirmFinding], ["/shentu.bounty.v1.MsgConfirmFindingPaid", MsgConfirmFindingPaid], ["/shentu.bounty.v1.MsgCloseFinding", MsgCloseFinding], ["/shentu.bounty.v1.MsgPublishFinding", MsgPublishFinding]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createProgram(value: MsgCreateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
        value: MsgCreateProgram.encode(value).finish()
      };
    },
    editProgram(value: MsgEditProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditProgram",
        value: MsgEditProgram.encode(value).finish()
      };
    },
    activateProgram(value: MsgActivateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
        value: MsgActivateProgram.encode(value).finish()
      };
    },
    closeProgram(value: MsgCloseProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
        value: MsgCloseProgram.encode(value).finish()
      };
    },
    submitFinding(value: MsgSubmitFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
        value: MsgSubmitFinding.encode(value).finish()
      };
    },
    editFinding(value: MsgEditFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditFinding",
        value: MsgEditFinding.encode(value).finish()
      };
    },
    activateFinding(value: MsgActivateFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
        value: MsgActivateFinding.encode(value).finish()
      };
    },
    confirmFinding(value: MsgConfirmFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
        value: MsgConfirmFinding.encode(value).finish()
      };
    },
    confirmFindingPaid(value: MsgConfirmFindingPaid) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
        value: MsgConfirmFindingPaid.encode(value).finish()
      };
    },
    closeFinding(value: MsgCloseFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
        value: MsgCloseFinding.encode(value).finish()
      };
    },
    publishFinding(value: MsgPublishFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
        value: MsgPublishFinding.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createProgram(value: MsgCreateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
        value
      };
    },
    editProgram(value: MsgEditProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditProgram",
        value
      };
    },
    activateProgram(value: MsgActivateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
        value
      };
    },
    closeProgram(value: MsgCloseProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
        value
      };
    },
    submitFinding(value: MsgSubmitFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
        value
      };
    },
    editFinding(value: MsgEditFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditFinding",
        value
      };
    },
    activateFinding(value: MsgActivateFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
        value
      };
    },
    confirmFinding(value: MsgConfirmFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
        value
      };
    },
    confirmFindingPaid(value: MsgConfirmFindingPaid) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
        value
      };
    },
    closeFinding(value: MsgCloseFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
        value
      };
    },
    publishFinding(value: MsgPublishFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
        value
      };
    }
  },
  fromJSON: {
    createProgram(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
        value: MsgCreateProgram.fromJSON(value)
      };
    },
    editProgram(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditProgram",
        value: MsgEditProgram.fromJSON(value)
      };
    },
    activateProgram(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
        value: MsgActivateProgram.fromJSON(value)
      };
    },
    closeProgram(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
        value: MsgCloseProgram.fromJSON(value)
      };
    },
    submitFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
        value: MsgSubmitFinding.fromJSON(value)
      };
    },
    editFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditFinding",
        value: MsgEditFinding.fromJSON(value)
      };
    },
    activateFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
        value: MsgActivateFinding.fromJSON(value)
      };
    },
    confirmFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
        value: MsgConfirmFinding.fromJSON(value)
      };
    },
    confirmFindingPaid(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
        value: MsgConfirmFindingPaid.fromJSON(value)
      };
    },
    closeFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
        value: MsgCloseFinding.fromJSON(value)
      };
    },
    publishFinding(value: any) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
        value: MsgPublishFinding.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createProgram(value: MsgCreateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCreateProgram",
        value: MsgCreateProgram.fromPartial(value)
      };
    },
    editProgram(value: MsgEditProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditProgram",
        value: MsgEditProgram.fromPartial(value)
      };
    },
    activateProgram(value: MsgActivateProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateProgram",
        value: MsgActivateProgram.fromPartial(value)
      };
    },
    closeProgram(value: MsgCloseProgram) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseProgram",
        value: MsgCloseProgram.fromPartial(value)
      };
    },
    submitFinding(value: MsgSubmitFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgSubmitFinding",
        value: MsgSubmitFinding.fromPartial(value)
      };
    },
    editFinding(value: MsgEditFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgEditFinding",
        value: MsgEditFinding.fromPartial(value)
      };
    },
    activateFinding(value: MsgActivateFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgActivateFinding",
        value: MsgActivateFinding.fromPartial(value)
      };
    },
    confirmFinding(value: MsgConfirmFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFinding",
        value: MsgConfirmFinding.fromPartial(value)
      };
    },
    confirmFindingPaid(value: MsgConfirmFindingPaid) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgConfirmFindingPaid",
        value: MsgConfirmFindingPaid.fromPartial(value)
      };
    },
    closeFinding(value: MsgCloseFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgCloseFinding",
        value: MsgCloseFinding.fromPartial(value)
      };
    },
    publishFinding(value: MsgPublishFinding) {
      return {
        typeUrl: "/shentu.bounty.v1.MsgPublishFinding",
        value: MsgPublishFinding.fromPartial(value)
      };
    }
  }
};