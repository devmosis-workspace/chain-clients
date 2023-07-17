import { AminoMsg } from "@cosmjs/amino";
import { MsgGovUpdateQuota, MsgGovSetIBCStatus } from "./tx";
export interface MsgGovUpdateQuotaAminoType extends AminoMsg {
    type: "/umee.uibc.v1.MsgGovUpdateQuota";
    value: {
        authority: string;
        title: string;
        description: string;
        total: string;
        per_denom: string;
        quota_duration: {
            seconds: string;
            nanos: number;
        };
    };
}
export interface MsgGovSetIBCStatusAminoType extends AminoMsg {
    type: "/umee.uibc.v1.MsgGovSetIBCStatus";
    value: {
        authority: string;
        title: string;
        description: string;
        ibc_status: number;
    };
}
export declare const AminoConverter: {
    "/umee.uibc.v1.MsgGovUpdateQuota": {
        aminoType: string;
        toAmino: ({ authority, title, description, total, perDenom, quotaDuration }: MsgGovUpdateQuota) => MsgGovUpdateQuotaAminoType["value"];
        fromAmino: ({ authority, title, description, total, per_denom, quota_duration }: MsgGovUpdateQuotaAminoType["value"]) => MsgGovUpdateQuota;
    };
    "/umee.uibc.v1.MsgGovSetIBCStatus": {
        aminoType: string;
        toAmino: ({ authority, title, description, ibcStatus }: MsgGovSetIBCStatus) => MsgGovSetIBCStatusAminoType["value"];
        fromAmino: ({ authority, title, description, ibc_status }: MsgGovSetIBCStatusAminoType["value"]) => MsgGovSetIBCStatus;
    };
};
