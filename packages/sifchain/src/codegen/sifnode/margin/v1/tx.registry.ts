import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgOpen, MsgClose, MsgForceClose, MsgUpdateParams, MsgUpdatePools, MsgUpdateRowanCollateral, MsgWhitelist, MsgDewhitelist, MsgAdminClose, MsgAdminCloseAll } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.margin.v1.MsgOpen", MsgOpen], ["/sifnode.margin.v1.MsgClose", MsgClose], ["/sifnode.margin.v1.MsgForceClose", MsgForceClose], ["/sifnode.margin.v1.MsgUpdateParams", MsgUpdateParams], ["/sifnode.margin.v1.MsgUpdatePools", MsgUpdatePools], ["/sifnode.margin.v1.MsgUpdateRowanCollateral", MsgUpdateRowanCollateral], ["/sifnode.margin.v1.MsgWhitelist", MsgWhitelist], ["/sifnode.margin.v1.MsgDewhitelist", MsgDewhitelist], ["/sifnode.margin.v1.MsgAdminClose", MsgAdminClose], ["/sifnode.margin.v1.MsgAdminCloseAll", MsgAdminCloseAll]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgOpen",
        value: MsgOpen.encode(value).finish()
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgClose",
        value: MsgClose.encode(value).finish()
      };
    },
    forceClose(value: MsgForceClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgForceClose",
        value: MsgForceClose.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
        value: MsgUpdatePools.encode(value).finish()
      };
    },
    updateRowanCollateral(value: MsgUpdateRowanCollateral) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
        value: MsgUpdateRowanCollateral.encode(value).finish()
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgWhitelist",
        value: MsgWhitelist.encode(value).finish()
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
        value: MsgDewhitelist.encode(value).finish()
      };
    },
    adminClose(value: MsgAdminClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminClose",
        value: MsgAdminClose.encode(value).finish()
      };
    },
    adminCloseAll(value: MsgAdminCloseAll) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
        value: MsgAdminCloseAll.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgOpen",
        value
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgClose",
        value
      };
    },
    forceClose(value: MsgForceClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgForceClose",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
        value
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
        value
      };
    },
    updateRowanCollateral(value: MsgUpdateRowanCollateral) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
        value
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgWhitelist",
        value
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
        value
      };
    },
    adminClose(value: MsgAdminClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminClose",
        value
      };
    },
    adminCloseAll(value: MsgAdminCloseAll) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
        value
      };
    }
  },
  fromJSON: {
    open(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgOpen",
        value: MsgOpen.fromJSON(value)
      };
    },
    close(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgClose",
        value: MsgClose.fromJSON(value)
      };
    },
    forceClose(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgForceClose",
        value: MsgForceClose.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    updatePools(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
        value: MsgUpdatePools.fromJSON(value)
      };
    },
    updateRowanCollateral(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
        value: MsgUpdateRowanCollateral.fromJSON(value)
      };
    },
    whitelist(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgWhitelist",
        value: MsgWhitelist.fromJSON(value)
      };
    },
    dewhitelist(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
        value: MsgDewhitelist.fromJSON(value)
      };
    },
    adminClose(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminClose",
        value: MsgAdminClose.fromJSON(value)
      };
    },
    adminCloseAll(value: any) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
        value: MsgAdminCloseAll.fromJSON(value)
      };
    }
  },
  fromPartial: {
    open(value: MsgOpen) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgOpen",
        value: MsgOpen.fromPartial(value)
      };
    },
    close(value: MsgClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgClose",
        value: MsgClose.fromPartial(value)
      };
    },
    forceClose(value: MsgForceClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgForceClose",
        value: MsgForceClose.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    updatePools(value: MsgUpdatePools) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdatePools",
        value: MsgUpdatePools.fromPartial(value)
      };
    },
    updateRowanCollateral(value: MsgUpdateRowanCollateral) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgUpdateRowanCollateral",
        value: MsgUpdateRowanCollateral.fromPartial(value)
      };
    },
    whitelist(value: MsgWhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgWhitelist",
        value: MsgWhitelist.fromPartial(value)
      };
    },
    dewhitelist(value: MsgDewhitelist) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgDewhitelist",
        value: MsgDewhitelist.fromPartial(value)
      };
    },
    adminClose(value: MsgAdminClose) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminClose",
        value: MsgAdminClose.fromPartial(value)
      };
    },
    adminCloseAll(value: MsgAdminCloseAll) {
      return {
        typeUrl: "/sifnode.margin.v1.MsgAdminCloseAll",
        value: MsgAdminCloseAll.fromPartial(value)
      };
    }
  }
};