import { iBCTransferStatusFromJSON } from "./quota";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
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
export const AminoConverter = {
  "/umee.uibc.v1.MsgGovUpdateQuota": {
    aminoType: "/umee.uibc.v1.MsgGovUpdateQuota",
    toAmino: ({
      authority,
      title,
      description,
      total,
      perDenom,
      quotaDuration
    }: MsgGovUpdateQuota): MsgGovUpdateQuotaAminoType["value"] => {
      return {
        authority,
        title,
        description,
        total,
        per_denom: perDenom,
        quota_duration: (quotaDuration * 1_000_000_000).toString()
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      total,
      per_denom,
      quota_duration
    }: MsgGovUpdateQuotaAminoType["value"]): MsgGovUpdateQuota => {
      return {
        authority,
        title,
        description,
        total,
        perDenom: per_denom,
        quotaDuration: {
          seconds: Long.fromNumber(Math.floor(parseInt(quota_duration) / 1_000_000_000)),
          nanos: parseInt(quota_duration) % 1_000_000_000
        }
      };
    }
  },
  "/umee.uibc.v1.MsgGovSetIBCStatus": {
    aminoType: "/umee.uibc.v1.MsgGovSetIBCStatus",
    toAmino: ({
      authority,
      title,
      description,
      ibcStatus
    }: MsgGovSetIBCStatus): MsgGovSetIBCStatusAminoType["value"] => {
      return {
        authority,
        title,
        description,
        ibc_status: ibcStatus
      };
    },
    fromAmino: ({
      authority,
      title,
      description,
      ibc_status
    }: MsgGovSetIBCStatusAminoType["value"]): MsgGovSetIBCStatus => {
      return {
        authority,
        title,
        description,
        ibcStatus: iBCTransferStatusFromJSON(ibc_status)
      };
    }
  }
};