import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../../helpers";
import { MsgCreateConcentratedPool } from "./tx";
export interface MsgCreateConcentratedPoolAminoType extends AminoMsg {
  type: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool";
  value: {
    sender: string;
    denom0: string;
    denom1: string;
    tick_spacing: string;
    spread_factor: string;
  };
}
export const AminoConverter = {
  "/osmosis.concentratedliquidity.poolmodel.concentrated.v1beta1.MsgCreateConcentratedPool": {
    aminoType: "osmosis/concentratedliquidity/poolmodel/concentrated/create-concentrated-pool",
    toAmino: ({
      sender,
      denom0,
      denom1,
      tickSpacing,
      spreadFactor
    }: MsgCreateConcentratedPool): MsgCreateConcentratedPoolAminoType["value"] => {
      return {
        sender,
        denom0,
        denom1,
        tick_spacing: tickSpacing.toString(),
        spread_factor: spreadFactor
      };
    },
    fromAmino: ({
      sender,
      denom0,
      denom1,
      tick_spacing,
      spread_factor
    }: MsgCreateConcentratedPoolAminoType["value"]): MsgCreateConcentratedPool => {
      return {
        sender,
        denom0,
        denom1,
        tickSpacing: Long.fromString(tick_spacing),
        spreadFactor: spread_factor
      };
    }
  }
};