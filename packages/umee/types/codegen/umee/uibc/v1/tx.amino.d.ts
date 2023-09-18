import { MsgGovUpdateQuota, MsgGovSetIBCStatus } from "./tx";
export declare const AminoConverter: {
    "/umee.uibc.v1.MsgGovUpdateQuota": {
        aminoType: string;
        toAmino: (message: MsgGovUpdateQuota) => import("./tx").MsgGovUpdateQuotaAmino;
        fromAmino: (object: import("./tx").MsgGovUpdateQuotaAmino) => MsgGovUpdateQuota;
    };
    "/umee.uibc.v1.MsgGovSetIBCStatus": {
        aminoType: string;
        toAmino: (message: MsgGovSetIBCStatus) => import("./tx").MsgGovSetIBCStatusAmino;
        fromAmino: (object: import("./tx").MsgGovSetIBCStatusAmino) => MsgGovSetIBCStatus;
    };
};
