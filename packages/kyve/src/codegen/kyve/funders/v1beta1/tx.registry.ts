import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateFunder, MsgUpdateFunder, MsgFundPool, MsgDefundPool, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.funders.v1beta1.MsgCreateFunder", MsgCreateFunder], ["/kyve.funders.v1beta1.MsgUpdateFunder", MsgUpdateFunder], ["/kyve.funders.v1beta1.MsgFundPool", MsgFundPool], ["/kyve.funders.v1beta1.MsgDefundPool", MsgDefundPool], ["/kyve.funders.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createFunder(value: MsgCreateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
        value: MsgCreateFunder.encode(value).finish()
      };
    },
    updateFunder(value: MsgUpdateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
        value: MsgUpdateFunder.encode(value).finish()
      };
    },
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
        value: MsgFundPool.encode(value).finish()
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
        value: MsgDefundPool.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createFunder(value: MsgCreateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
        value
      };
    },
    updateFunder(value: MsgUpdateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
        value
      };
    },
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
        value
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    createFunder(value: any) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
        value: MsgCreateFunder.fromJSON(value)
      };
    },
    updateFunder(value: any) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
        value: MsgUpdateFunder.fromJSON(value)
      };
    },
    fundPool(value: any) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
        value: MsgFundPool.fromJSON(value)
      };
    },
    defundPool(value: any) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
        value: MsgDefundPool.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createFunder(value: MsgCreateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgCreateFunder",
        value: MsgCreateFunder.fromPartial(value)
      };
    },
    updateFunder(value: MsgUpdateFunder) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateFunder",
        value: MsgUpdateFunder.fromPartial(value)
      };
    },
    fundPool(value: MsgFundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgFundPool",
        value: MsgFundPool.fromPartial(value)
      };
    },
    defundPool(value: MsgDefundPool) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgDefundPool",
        value: MsgDefundPool.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/kyve.funders.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};