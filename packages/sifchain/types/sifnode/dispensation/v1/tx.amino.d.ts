import { MsgCreateDistribution, MsgCreateUserClaim, MsgRunDistribution } from "./tx";
export declare const AminoConverter: {
    "/sifnode.dispensation.v1.MsgCreateDistribution": {
        aminoType: string;
        toAmino: (message: MsgCreateDistribution) => import("./tx").MsgCreateDistributionAmino;
        fromAmino: (object: import("./tx").MsgCreateDistributionAmino) => MsgCreateDistribution;
    };
    "/sifnode.dispensation.v1.MsgCreateUserClaim": {
        aminoType: string;
        toAmino: (message: MsgCreateUserClaim) => import("./tx").MsgCreateUserClaimAmino;
        fromAmino: (object: import("./tx").MsgCreateUserClaimAmino) => MsgCreateUserClaim;
    };
    "/sifnode.dispensation.v1.MsgRunDistribution": {
        aminoType: string;
        toAmino: (message: MsgRunDistribution) => import("./tx").MsgRunDistributionAmino;
        fromAmino: (object: import("./tx").MsgRunDistributionAmino) => MsgRunDistribution;
    };
};
