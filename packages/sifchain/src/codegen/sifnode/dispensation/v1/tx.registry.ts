import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/sifnode.dispensation.v1.MsgCreateDistribution", MsgCreateDistribution], ["/sifnode.dispensation.v1.MsgCreateUserClaim", MsgCreateUserClaim], ["/sifnode.dispensation.v1.MsgRunDistribution", MsgRunDistribution]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDistribution(value: MsgCreateDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
        value: MsgCreateDistribution.encode(value).finish()
      };
    },
    createUserClaim(value: MsgCreateUserClaim) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
        value: MsgCreateUserClaim.encode(value).finish()
      };
    },
    runDistribution(value: MsgRunDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
        value: MsgRunDistribution.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDistribution(value: MsgCreateDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
        value
      };
    },
    createUserClaim(value: MsgCreateUserClaim) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
        value
      };
    },
    runDistribution(value: MsgRunDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
        value
      };
    }
  },
  fromJSON: {
    createDistribution(value: any) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
        value: MsgCreateDistribution.fromJSON(value)
      };
    },
    createUserClaim(value: any) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
        value: MsgCreateUserClaim.fromJSON(value)
      };
    },
    runDistribution(value: any) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
        value: MsgRunDistribution.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createDistribution(value: MsgCreateDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateDistribution",
        value: MsgCreateDistribution.fromPartial(value)
      };
    },
    createUserClaim(value: MsgCreateUserClaim) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgCreateUserClaim",
        value: MsgCreateUserClaim.fromPartial(value)
      };
    },
    runDistribution(value: MsgRunDistribution) {
      return {
        typeUrl: "/sifnode.dispensation.v1.MsgRunDistribution",
        value: MsgRunDistribution.fromPartial(value)
      };
    }
  }
};