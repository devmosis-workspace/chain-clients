import { AminoMsg } from "@cosmjs/amino";
import { MsgSetVestEntry, MsgDeleteVestEntry } from "./tx";
export interface MsgSetVestEntryAminoType extends AminoMsg {
  type: "/dydxprotocol.vest.MsgSetVestEntry";
  value: {
    authority: string;
    entry: {
      vester_account: string;
      treasury_account: string;
      denom: string;
      start_time: string;
      end_time: string;
    };
  };
}
export interface MsgDeleteVestEntryAminoType extends AminoMsg {
  type: "/dydxprotocol.vest.MsgDeleteVestEntry";
  value: {
    authority: string;
    vester_account: string;
  };
}
export const AminoConverter = {
  "/dydxprotocol.vest.MsgSetVestEntry": {
    aminoType: "/dydxprotocol.vest.MsgSetVestEntry",
    toAmino: ({
      authority,
      entry
    }: MsgSetVestEntry): MsgSetVestEntryAminoType["value"] => {
      return {
        authority,
        entry: {
          vester_account: entry.vesterAccount,
          treasury_account: entry.treasuryAccount,
          denom: entry.denom,
          start_time: entry.startTime,
          end_time: entry.endTime
        }
      };
    },
    fromAmino: ({
      authority,
      entry
    }: MsgSetVestEntryAminoType["value"]): MsgSetVestEntry => {
      return {
        authority,
        entry: {
          vesterAccount: entry.vester_account,
          treasuryAccount: entry.treasury_account,
          denom: entry.denom,
          startTime: entry.start_time,
          endTime: entry.end_time
        }
      };
    }
  },
  "/dydxprotocol.vest.MsgDeleteVestEntry": {
    aminoType: "/dydxprotocol.vest.MsgDeleteVestEntry",
    toAmino: ({
      authority,
      vesterAccount
    }: MsgDeleteVestEntry): MsgDeleteVestEntryAminoType["value"] => {
      return {
        authority,
        vester_account: vesterAccount
      };
    },
    fromAmino: ({
      authority,
      vester_account
    }: MsgDeleteVestEntryAminoType["value"]): MsgDeleteVestEntry => {
      return {
        authority,
        vesterAccount: vester_account
      };
    }
  }
};