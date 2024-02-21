import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdatePerpetualFeeParams } from "./tx";
export interface MsgUpdatePerpetualFeeParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.feetiers.MsgUpdatePerpetualFeeParams";
  value: {
    authority: string;
    params: {
      tiers: {
        name: string;
        absolute_volume_requirement: string;
        total_volume_share_requirement_ppm: number;
        maker_volume_share_requirement_ppm: number;
        maker_fee_ppm: number;
        taker_fee_ppm: number;
      }[];
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.feetiers.MsgUpdatePerpetualFeeParams": {
    aminoType: "/dydxprotocol.feetiers.MsgUpdatePerpetualFeeParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdatePerpetualFeeParams): MsgUpdatePerpetualFeeParamsAminoType["value"] => {
      return {
        authority,
        params: {
          tiers: params.tiers.map(el0 => ({
            name: el0.name,
            absolute_volume_requirement: el0.absoluteVolumeRequirement.toString(),
            total_volume_share_requirement_ppm: el0.totalVolumeShareRequirementPpm,
            maker_volume_share_requirement_ppm: el0.makerVolumeShareRequirementPpm,
            maker_fee_ppm: el0.makerFeePpm,
            taker_fee_ppm: el0.takerFeePpm
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      params
    }: MsgUpdatePerpetualFeeParamsAminoType["value"]): MsgUpdatePerpetualFeeParams => {
      return {
        authority,
        params: {
          tiers: params.tiers.map(el1 => ({
            name: el1.name,
            absoluteVolumeRequirement: BigInt(el1.absolute_volume_requirement),
            totalVolumeShareRequirementPpm: el1.total_volume_share_requirement_ppm,
            makerVolumeShareRequirementPpm: el1.maker_volume_share_requirement_ppm,
            makerFeePpm: el1.maker_fee_ppm,
            takerFeePpm: el1.taker_fee_ppm
          }))
        }
      };
    }
  }
};