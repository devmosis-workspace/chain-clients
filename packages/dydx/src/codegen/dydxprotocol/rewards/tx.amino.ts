import { AminoMsg } from "@cosmjs/amino";
import { MsgUpdateParams } from "./tx";
export interface MsgUpdateParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.rewards.MsgUpdateParams";
  value: {
    authority: string;
    params: {
      treasury_account: string;
      denom: string;
      denom_exponent: number;
      market_id: number;
      fee_multiplier_ppm: number;
    };
  };
}
export const AminoConverter = {
  "/dydxprotocol.rewards.MsgUpdateParams": {
    aminoType: "/dydxprotocol.rewards.MsgUpdateParams",
    toAmino: ({
      authority,
      params
    }: MsgUpdateParams): MsgUpdateParamsAminoType["value"] => {
      return {
        authority,
        params: {
          treasury_account: params.treasuryAccount,
          denom: params.denom,
          denom_exponent: params.denomExponent,
          market_id: params.marketId,
          fee_multiplier_ppm: params.feeMultiplierPpm
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
          treasuryAccount: params.treasury_account,
          denom: params.denom,
          denomExponent: params.denom_exponent,
          marketId: params.market_id,
          feeMultiplierPpm: params.fee_multiplier_ppm
        }
      };
    }
  }
};