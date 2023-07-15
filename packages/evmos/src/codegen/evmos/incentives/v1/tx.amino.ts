import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/evmos.incentives.v1.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      enable_incentives: boolean;
      allocation_limit: string;
      incentives_epoch_identifier: string;
      reward_scaler: string;
    };
  };
}
export const AminoConverter = {
  "/evmos.incentives.v1.MsgUpdateParams": {
    aminoType: "/evmos.incentives.v1.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          enable_incentives: params.enableIncentives,
          allocation_limit: params.allocationLimit,
          incentives_epoch_identifier: params.incentivesEpochIdentifier,
          reward_scaler: params.rewardScaler
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
          enableIncentives: params.enable_incentives,
          allocationLimit: params.allocation_limit,
          incentivesEpochIdentifier: params.incentives_epoch_identifier,
          rewardScaler: params.reward_scaler
        }
      };
    }
  }
};