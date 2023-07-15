import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/evmos.claims.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      enable_claims: boolean;
      airdrop_start_time: {
        seconds: string;
        nanos: number;
      };
      duration_until_decay: {
        seconds: string;
        nanos: number;
      };
      duration_of_decay: {
        seconds: string;
        nanos: number;
      };
      claims_denom: string;
      authorized_channels: string[];
      evm_channels: string[];
    };
  };
}
export const AminoConverter = {
  "/evmos.claims.v1.MsgUpdateParams": {
    aminoType: "/evmos.claims.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enable_claims: params.enableClaims,
          airdrop_start_time: params.airdropStartTime,
          duration_until_decay: (params.durationUntilDecay * 1_000_000_000).toString(),
          duration_of_decay: (params.durationOfDecay * 1_000_000_000).toString(),
          claims_denom: params.claimsDenom,
          authorized_channels: params.authorizedChannels,
          evm_channels: params.evmChannels
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
          enableClaims: params.enable_claims,
          airdropStartTime: params.airdrop_start_time,
          durationUntilDecay: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.duration_until_decay) / 1_000_000_000)),
            nanos: parseInt(params.duration_until_decay) % 1_000_000_000
          },
          durationOfDecay: {
            seconds: Long.fromNumber(Math.floor(parseInt(params.duration_of_decay) / 1_000_000_000)),
            nanos: parseInt(params.duration_of_decay) % 1_000_000_000
          },
          claimsDenom: params.claims_denom,
          authorizedChannels: params.authorized_channels,
          evmChannels: params.evm_channels
        }
      };
    }
  }
};