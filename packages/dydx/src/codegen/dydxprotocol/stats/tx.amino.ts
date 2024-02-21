import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.stats.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      window_duration: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.stats.MsgUpdateParams": {
    aminoType: "/dydxprotocol.stats.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          window_duration: (params.windowDuration * 1_000_000_000).toString()
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdateParamsAminoType["value"]): MsgUpdateParams => {
      return {
        authority,
        params: {
          windowDuration: {
            seconds: BigInt(Math.floor(parseInt(params.window_duration) / 1_000_000_000)),
            nanos: parseInt(params.window_duration) % 1_000_000_000
          }
        }
      };
    }
  }
};