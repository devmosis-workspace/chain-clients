import { MsgClaim, MsgBond, MsgBeginUnbonding, MsgEmergencyUnbond, MsgSponsor, MsgGovSetParams, MsgGovCreatePrograms } from "./tx";
export declare const AminoConverter: {
    "/umee.incentive.v1.MsgClaim": {
        aminoType: string;
        toAmino: (message: MsgClaim) => import("./tx").MsgClaimAmino;
        fromAmino: (object: import("./tx").MsgClaimAmino) => MsgClaim;
    };
    "/umee.incentive.v1.MsgBond": {
        aminoType: string;
        toAmino: (message: MsgBond) => import("./tx").MsgBondAmino;
        fromAmino: (object: import("./tx").MsgBondAmino) => MsgBond;
    };
    "/umee.incentive.v1.MsgBeginUnbonding": {
        aminoType: string;
        toAmino: (message: MsgBeginUnbonding) => import("./tx").MsgBeginUnbondingAmino;
        fromAmino: (object: import("./tx").MsgBeginUnbondingAmino) => MsgBeginUnbonding;
    };
    "/umee.incentive.v1.MsgEmergencyUnbond": {
        aminoType: string;
        toAmino: (message: MsgEmergencyUnbond) => import("./tx").MsgEmergencyUnbondAmino;
        fromAmino: (object: import("./tx").MsgEmergencyUnbondAmino) => MsgEmergencyUnbond;
    };
    "/umee.incentive.v1.MsgSponsor": {
        aminoType: string;
        toAmino: (message: MsgSponsor) => import("./tx").MsgSponsorAmino;
        fromAmino: (object: import("./tx").MsgSponsorAmino) => MsgSponsor;
    };
    "/umee.incentive.v1.MsgGovSetParams": {
        aminoType: string;
        toAmino: (message: MsgGovSetParams) => import("./tx").MsgGovSetParamsAmino;
        fromAmino: (object: import("./tx").MsgGovSetParamsAmino) => MsgGovSetParams;
    };
    "/umee.incentive.v1.MsgGovCreatePrograms": {
        aminoType: string;
        toAmino: (message: MsgGovCreatePrograms) => import("./tx").MsgGovCreateProgramsAmino;
        fromAmino: (object: import("./tx").MsgGovCreateProgramsAmino) => MsgGovCreatePrograms;
    };
};
