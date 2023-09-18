import { MsgInitialClaim, MsgClaimFor } from "./tx";
export declare const AminoConverter: {
    "/publicawesome.stargaze.claim.v1beta1.MsgInitialClaim": {
        aminoType: string;
        toAmino: (message: MsgInitialClaim) => import("./tx").MsgInitialClaimAmino;
        fromAmino: (object: import("./tx").MsgInitialClaimAmino) => MsgInitialClaim;
    };
    "/publicawesome.stargaze.claim.v1beta1.MsgClaimFor": {
        aminoType: string;
        toAmino: (message: MsgClaimFor) => import("./tx").MsgClaimForAmino;
        fromAmino: (object: import("./tx").MsgClaimForAmino) => MsgClaimFor;
    };
};
