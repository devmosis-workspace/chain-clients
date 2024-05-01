import { MsgClaim } from "./tx";
export declare const AminoConverter: {
    "/passage3d.claim.v1beta1.MsgClaim": {
        aminoType: string;
        toAmino: (message: MsgClaim) => import("./tx").MsgClaimAmino;
        fromAmino: (object: import("./tx").MsgClaimAmino) => MsgClaim;
    };
};
