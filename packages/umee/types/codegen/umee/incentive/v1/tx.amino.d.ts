import { AminoMsg } from "@cosmjs/amino";
import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export interface MsgClaimAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgClaim";
    value: {
        account: string;
    };
}
export interface MsgBondAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgBond";
    value: {
        account: string;
        uToken: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgBeginUnbondingAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgBeginUnbonding";
    value: {
        account: string;
        uToken: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgEmergencyUnbondAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgEmergencyUnbond";
    value: {
        account: string;
        uToken: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgSponsorAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgSponsor";
    value: {
        sponsor: string;
        program: number;
    };
}
export interface MsgGovSetParamsAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgGovSetParams";
    value: {
        authority: string;
        params: {
            max_unbondings: number;
            unbonding_duration: string;
            emergency_unbond_fee: string;
        };
    };
}
export interface MsgGovCreateProgramsAminoType extends AminoMsg {
    type: "/umee.incentive.v1.MsgGovCreatePrograms";
    value: {
        authority: string;
        programs: {
            ID: number;
            start_time: string;
            duration: string;
            uToken: string;
            funded: boolean;
            total_rewards: {
                denom: string;
                amount: string;
            };
            remaining_rewards: {
                denom: string;
                amount: string;
            };
        }[];
        from_community_fund: boolean;
    };
}
export declare const AminoConverter: {
    "/umee.incentive.v1.MsgClaim": {
        aminoType: string;
        toAmino: ({ account }: MsgClaim) => MsgClaimAminoType["value"];
        fromAmino: ({ account }: MsgClaimAminoType["value"]) => MsgClaim;
    };
    "/umee.incentive.v1.MsgBond": {
        aminoType: string;
        toAmino: ({ account, uToken }: MsgBond) => MsgBondAminoType["value"];
        fromAmino: ({ account, uToken }: MsgBondAminoType["value"]) => MsgBond;
    };
    "/umee.incentive.v1.MsgBeginUnbonding": {
        aminoType: string;
        toAmino: ({ account, uToken }: MsgBeginUnbonding) => MsgBeginUnbondingAminoType["value"];
        fromAmino: ({ account, uToken }: MsgBeginUnbondingAminoType["value"]) => MsgBeginUnbonding;
    };
    "/umee.incentive.v1.MsgEmergencyUnbond": {
        aminoType: string;
        toAmino: ({ account, uToken }: MsgEmergencyUnbond) => MsgEmergencyUnbondAminoType["value"];
        fromAmino: ({ account, uToken }: MsgEmergencyUnbondAminoType["value"]) => MsgEmergencyUnbond;
    };
    "/umee.incentive.v1.MsgSponsor": {
        aminoType: string;
        toAmino: ({ sponsor, program }: MsgSponsor) => MsgSponsorAminoType["value"];
        fromAmino: ({ sponsor, program }: MsgSponsorAminoType["value"]) => MsgSponsor;
    };
    "/umee.incentive.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: ({ authority, params }: MsgGovSetParams) => MsgGovSetParamsAminoType["value"];
        fromAmino: ({ authority, params }: MsgGovSetParamsAminoType["value"]) => MsgGovSetParams;
    };
    "/umee.incentive.v1.MsgGovCreatePrograms": {
        aminoType: string;
        toAmino: ({ authority, programs, fromCommunityFund }: MsgGovCreatePrograms) => MsgGovCreateProgramsAminoType["value"];
        fromAmino: ({ authority, programs, from_community_fund }: MsgGovCreateProgramsAminoType["value"]) => MsgGovCreatePrograms;
    };
};
