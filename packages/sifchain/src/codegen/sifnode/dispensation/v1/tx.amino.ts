import { distributionTypeFromJSON } from "./types";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export interface MsgCreateDistributionAminoType extends AminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateDistribution";
  value: {
    distributor: string;
    authorized_runner: string;
    distribution_type: number;
    output: string[];
  };
}
export interface MsgCreateUserClaimAminoType extends AminoMsg {
  type: "/sifnode.dispensation.v1.MsgCreateUserClaim";
  value: {
    user_claim_address: string;
    user_claim_type: number;
  };
}
export interface MsgRunDistributionAminoType extends AminoMsg {
  type: "/sifnode.dispensation.v1.MsgRunDistribution";
  value: {
    authorized_runner: string;
    distribution_name: string;
    distribution_type: number;
    distribution_count: string;
  };
}
export const AminoConverter = {
  "/sifnode.dispensation.v1.MsgCreateDistribution": {
    aminoType: "/sifnode.dispensation.v1.MsgCreateDistribution",
    toAmino: ({
      distributor,
      authorizedRunner,
      distributionType,
      output
    }: MsgCreateDistribution): MsgCreateDistributionAminoType["value"] => {
      return {
        distributor,
        authorized_runner: authorizedRunner,
        distribution_type: distributionType,
        output
      };
    },
    fromAmino: ({
      distributor,
      authorized_runner,
      distribution_type,
      output
    }: MsgCreateDistributionAminoType["value"]): MsgCreateDistribution => {
      return {
        distributor,
        authorizedRunner: authorized_runner,
        distributionType: distributionTypeFromJSON(distribution_type),
        output
      };
    }
  },
  "/sifnode.dispensation.v1.MsgCreateUserClaim": {
    aminoType: "/sifnode.dispensation.v1.MsgCreateUserClaim",
    toAmino: ({
      userClaimAddress,
      userClaimType
    }: MsgCreateUserClaim): MsgCreateUserClaimAminoType["value"] => {
      return {
        user_claim_address: userClaimAddress,
        user_claim_type: userClaimType
      };
    },
    fromAmino: ({
      user_claim_address,
      user_claim_type
    }: MsgCreateUserClaimAminoType["value"]): MsgCreateUserClaim => {
      return {
        userClaimAddress: user_claim_address,
        userClaimType: distributionTypeFromJSON(user_claim_type)
      };
    }
  },
  "/sifnode.dispensation.v1.MsgRunDistribution": {
    aminoType: "/sifnode.dispensation.v1.MsgRunDistribution",
    toAmino: ({
      authorizedRunner,
      distributionName,
      distributionType,
      distributionCount
    }: MsgRunDistribution): MsgRunDistributionAminoType["value"] => {
      return {
        authorized_runner: authorizedRunner,
        distribution_name: distributionName,
        distribution_type: distributionType,
        distribution_count: distributionCount.toString()
      };
    },
    fromAmino: ({
      authorized_runner,
      distribution_name,
      distribution_type,
      distribution_count
    }: MsgRunDistributionAminoType["value"]): MsgRunDistribution => {
      return {
        authorizedRunner: authorized_runner,
        distributionName: distribution_name,
        distributionType: distributionTypeFromJSON(distribution_type),
        distributionCount: Long.fromString(distribution_count)
      };
    }
  }
};