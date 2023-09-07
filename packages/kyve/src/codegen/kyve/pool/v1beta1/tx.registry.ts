import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgFundPool, MsgDefundPool, MsgCreatePool, MsgUpdatePool, MsgDisablePool, MsgEnablePool, MsgScheduleRuntimeUpgrade, MsgCancelRuntimeUpgrade, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.pool.v1beta1.MsgFundPool", MsgFundPool], ["/kyve.pool.v1beta1.MsgDefundPool", MsgDefundPool], ["/kyve.pool.v1beta1.MsgCreatePool", MsgCreatePool], ["/kyve.pool.v1beta1.MsgUpdatePool", MsgUpdatePool], ["/kyve.pool.v1beta1.MsgDisablePool", MsgDisablePool], ["/kyve.pool.v1beta1.MsgEnablePool", MsgEnablePool], ["/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade", MsgScheduleRuntimeUpgrade], ["/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade", MsgCancelRuntimeUpgrade], ["/kyve.pool.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
        value: MsgFundPool.encode(value).finish()
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
        value: MsgDefundPool.encode(value).finish()
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
        value: MsgCreatePool.encode(value).finish()
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
        value: MsgUpdatePool.encode(value).finish()
      };
    },
    disablePool(value: MsgDisablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
        value: MsgDisablePool.encode(value).finish()
      };
    },
    enablePool(value: MsgEnablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
        value: MsgEnablePool.encode(value).finish()
      };
    },
    scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
        value: MsgScheduleRuntimeUpgrade.encode(value).finish()
      };
    },
    cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
        value: MsgCancelRuntimeUpgrade.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
        value
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
        value
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
        value
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
        value
      };
    },
    disablePool(value: MsgDisablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
        value
      };
    },
    enablePool(value: MsgEnablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
        value
      };
    },
    scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
        value
      };
    },
    cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    fundPool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
        value: MsgFundPool.fromJSON(value)
      };
    },
    defundPool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
        value: MsgDefundPool.fromJSON(value)
      };
    },
    createPool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
        value: MsgCreatePool.fromJSON(value)
      };
    },
    updatePool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
        value: MsgUpdatePool.fromJSON(value)
      };
    },
    disablePool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
        value: MsgDisablePool.fromJSON(value)
      };
    },
    enablePool(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
        value: MsgEnablePool.fromJSON(value)
      };
    },
    scheduleRuntimeUpgrade(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
        value: MsgScheduleRuntimeUpgrade.fromJSON(value)
      };
    },
    cancelRuntimeUpgrade(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
        value: MsgCancelRuntimeUpgrade.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgFundPool",
        value: MsgFundPool.fromPartial(value)
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDefundPool",
        value: MsgDefundPool.fromPartial(value)
      };
    },
    createPool(value: MsgCreatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCreatePool",
        value: MsgCreatePool.fromPartial(value)
      };
    },
    updatePool(value: MsgUpdatePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdatePool",
        value: MsgUpdatePool.fromPartial(value)
      };
    },
    disablePool(value: MsgDisablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgDisablePool",
        value: MsgDisablePool.fromPartial(value)
      };
    },
    enablePool(value: MsgEnablePool) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgEnablePool",
        value: MsgEnablePool.fromPartial(value)
      };
    },
    scheduleRuntimeUpgrade(value: MsgScheduleRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgScheduleRuntimeUpgrade",
        value: MsgScheduleRuntimeUpgrade.fromPartial(value)
      };
    },
    cancelRuntimeUpgrade(value: MsgCancelRuntimeUpgrade) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgCancelRuntimeUpgrade",
        value: MsgCancelRuntimeUpgrade.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.pool.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};