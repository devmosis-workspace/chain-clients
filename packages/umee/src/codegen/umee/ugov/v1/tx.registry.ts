import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGovUpdateMinGasPrice, MsgGovSetEmergencyGroup, MsgGovUpdateInflationParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.ugov.v1.MsgGovUpdateMinGasPrice", MsgGovUpdateMinGasPrice], ["/umee.ugov.v1.MsgGovSetEmergencyGroup", MsgGovSetEmergencyGroup], ["/umee.ugov.v1.MsgGovUpdateInflationParams", MsgGovUpdateInflationParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.encode(value).finish()
      };
    },
    govSetEmergencyGroup(value: MsgGovSetEmergencyGroup) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
        value: MsgGovSetEmergencyGroup.encode(value).finish()
      };
    },
    govUpdateInflationParams(value: MsgGovUpdateInflationParams) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
        value: MsgGovUpdateInflationParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value
      };
    },
    govSetEmergencyGroup(value: MsgGovSetEmergencyGroup) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
        value
      };
    },
    govUpdateInflationParams(value: MsgGovUpdateInflationParams) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
        value
      };
    }
  },
  fromJSON: {
    govUpdateMinGasPrice(value: any) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.fromJSON(value)
      };
    },
    govSetEmergencyGroup(value: any) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
        value: MsgGovSetEmergencyGroup.fromJSON(value)
      };
    },
    govUpdateInflationParams(value: any) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
        value: MsgGovUpdateInflationParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    govUpdateMinGasPrice(value: MsgGovUpdateMinGasPrice) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
        value: MsgGovUpdateMinGasPrice.fromPartial(value)
      };
    },
    govSetEmergencyGroup(value: MsgGovSetEmergencyGroup) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovSetEmergencyGroup",
        value: MsgGovSetEmergencyGroup.fromPartial(value)
      };
    },
    govUpdateInflationParams(value: MsgGovUpdateInflationParams) {
      return {
        typeUrl: "/umee.ugov.v1.MsgGovUpdateInflationParams",
        value: MsgGovUpdateInflationParams.fromPartial(value)
      };
    }
  }
};