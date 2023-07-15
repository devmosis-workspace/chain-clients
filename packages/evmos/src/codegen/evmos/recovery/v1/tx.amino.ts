import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/evmos.recovery.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      enable_recovery: boolean;
      packet_timeout_duration: {
        seconds: string;
        nanos: number;
      };
    };
  };
}
export const AminoConverter = {
  "/evmos.recovery.v1.MsgUpdateParams": {
    aminoType: "/evmos.recovery.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enable_recovery: params.enableRecovery,
          packet_timeout_duration: (params.packetTimeoutDuration * 1_000_000_000).toString()
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
          enableRecovery: params.enable_recovery,
          packetTimeoutDuration: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.packet_timeout_duration) / 1_000_000_000)),
            nanos: parseInt(params.packet_timeout_duration) % 1_000_000_000
          }
        }
      };
    }
  }
};