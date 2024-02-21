import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateDowntimeParams } from "./tx";
export interface MsgUpdateDowntimeParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams";
  value: {
    authority: string;
    params: {
      durations: {
        seconds: string;
        nanos: number;
      }[];
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.blocktime.MsgUpdateDowntimeParams": {
    aminoType: "/dydxprotocol.blocktime.MsgUpdateDowntimeParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateDowntimeParams): MsgUpdateDowntimeParamsAminoType["value"] => {
      return {
        authority,
        params: {
          durations: params.durations.map(el0 => ({
            seconds: el0.seconds.toString(),
            nanos: el0.nanos
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateDowntimeParamsAminoType["value"]): MsgUpdateDowntimeParams => {
      return {
        authority,
        params: {
          durations: params.durations.map(el1 => ({
            seconds: BigInt(el1.seconds),
            nanos: el1.nanos
          }))
        }
      };
    }
  }
};