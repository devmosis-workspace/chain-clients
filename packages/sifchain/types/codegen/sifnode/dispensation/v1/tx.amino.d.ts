import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/sifnode.dispensation.v1.MsgCreateDistribution": {
        aminoType: string;
        toAmino: ({ distributor, authorizedRunner, distributionType, output }: MsgCreateDistribution) => MsgCreateDistributionAminoType["value"];
        fromAmino: ({ distributor, authorized_runner, distribution_type, output }: MsgCreateDistributionAminoType["value"]) => MsgCreateDistribution;
    };
    "/sifnode.dispensation.v1.MsgCreateUserClaim": {
        aminoType: string;
        toAmino: ({ userClaimAddress, userClaimType }: MsgCreateUserClaim) => MsgCreateUserClaimAminoType["value"];
        fromAmino: ({ user_claim_address, user_claim_type }: MsgCreateUserClaimAminoType["value"]) => MsgCreateUserClaim;
    };
    "/sifnode.dispensation.v1.MsgRunDistribution": {
        aminoType: string;
        toAmino: ({ authorizedRunner, distributionName, distributionType, distributionCount }: MsgRunDistribution) => MsgRunDistributionAminoType["value"];
        fromAmino: ({ authorized_runner, distribution_name, distribution_type, distribution_count }: MsgRunDistributionAminoType["value"]) => MsgRunDistribution;
    };
};
