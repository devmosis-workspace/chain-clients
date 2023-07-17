import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.incentive.v1.MsgClaim", MsgClaim], ["/umee.incentive.v1.MsgBond", MsgBond], ["/umee.incentive.v1.MsgBeginUnbonding", MsgBeginUnbonding], ["/umee.incentive.v1.MsgEmergencyUnbond", MsgEmergencyUnbond], ["/umee.incentive.v1.MsgSponsor", MsgSponsor], ["/umee.incentive.v1.MsgGovSetParams", MsgGovSetParams], ["/umee.incentive.v1.MsgGovCreatePrograms", MsgGovCreatePrograms]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/umee.incentive.v1.MsgClaim",
        value: MsgClaim.encode(value).finish()
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBond",
        value: MsgBond.encode(value).finish()
      };
    },
    beginUnbonding(value: MsgBeginUnbonding) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
        value: MsgBeginUnbonding.encode(value).finish()
      };
    },
    emergencyUnbond(value: MsgEmergencyUnbond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
        value: MsgEmergencyUnbond.encode(value).finish()
      };
    },
    sponsor(value: MsgSponsor) {
      return {
        typeUrl: "/umee.incentive.v1.MsgSponsor",
        value: MsgSponsor.encode(value).finish()
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovSetParams",
        value: MsgGovSetParams.encode(value).finish()
      };
    },
    govCreatePrograms(value: MsgGovCreatePrograms) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
        value: MsgGovCreatePrograms.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/umee.incentive.v1.MsgClaim",
        value
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBond",
        value
      };
    },
    beginUnbonding(value: MsgBeginUnbonding) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
        value
      };
    },
    emergencyUnbond(value: MsgEmergencyUnbond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
        value
      };
    },
    sponsor(value: MsgSponsor) {
      return {
        typeUrl: "/umee.incentive.v1.MsgSponsor",
        value
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovSetParams",
        value
      };
    },
    govCreatePrograms(value: MsgGovCreatePrograms) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
        value
      };
    }
  },
  fromJSON: {
    claim(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgClaim",
        value: MsgClaim.fromJSON(value)
      };
    },
    bond(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBond",
        value: MsgBond.fromJSON(value)
      };
    },
    beginUnbonding(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
        value: MsgBeginUnbonding.fromJSON(value)
      };
    },
    emergencyUnbond(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
        value: MsgEmergencyUnbond.fromJSON(value)
      };
    },
    sponsor(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgSponsor",
        value: MsgSponsor.fromJSON(value)
      };
    },
    govSetParams(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovSetParams",
        value: MsgGovSetParams.fromJSON(value)
      };
    },
    govCreatePrograms(value: any) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
        value: MsgGovCreatePrograms.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claim(value: MsgClaim) {
      return {
        typeUrl: "/umee.incentive.v1.MsgClaim",
        value: MsgClaim.fromPartial(value)
      };
    },
    bond(value: MsgBond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBond",
        value: MsgBond.fromPartial(value)
      };
    },
    beginUnbonding(value: MsgBeginUnbonding) {
      return {
        typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
        value: MsgBeginUnbonding.fromPartial(value)
      };
    },
    emergencyUnbond(value: MsgEmergencyUnbond) {
      return {
        typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
        value: MsgEmergencyUnbond.fromPartial(value)
      };
    },
    sponsor(value: MsgSponsor) {
      return {
        typeUrl: "/umee.incentive.v1.MsgSponsor",
        value: MsgSponsor.fromPartial(value)
      };
    },
    govSetParams(value: MsgGovSetParams) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovSetParams",
        value: MsgGovSetParams.fromPartial(value)
      };
    },
    govCreatePrograms(value: MsgGovCreatePrograms) {
      return {
        typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
        value: MsgGovCreatePrograms.fromPartial(value)
      };
    }
  }
};