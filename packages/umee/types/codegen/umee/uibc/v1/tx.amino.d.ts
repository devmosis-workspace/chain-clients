import { MsgGovUpdateQuota, MsgGovSetIBCStatus, MsgGovToggleICS20Hooks } from "./tx";
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
    "/umee.uibc.v1.MsgGovToggleICS20Hooks": {
        aminoType: string;
        toAmino: (message: MsgGovToggleICS20Hooks) => import("./tx").MsgGovToggleICS20HooksAmino;
        fromAmino: (object: import("./tx").MsgGovToggleICS20HooksAmino) => MsgGovToggleICS20Hooks;
    };
};
