import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export declare const AminoConverter: {
    "/quicksilver.participationrewards.v1.MsgSubmitClaim": {
        aminoType: string;
        toAmino: (message: MsgSubmitClaim) => import("./messages").MsgSubmitClaimAmino;
        fromAmino: (object: import("./messages").MsgSubmitClaimAmino) => MsgSubmitClaim;
    };
    "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData": {
        aminoType: string;
        toAmino: (message: MsgGovRemoveProtocolData) => import("./proposals").MsgGovRemoveProtocolDataAmino;
        fromAmino: (object: import("./proposals").MsgGovRemoveProtocolDataAmino) => MsgGovRemoveProtocolData;
    };
};
