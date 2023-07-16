import { AminoMsg } from "@cosmjs/amino";
import { MsgSafetyFundSpend } from "./tx";
export interface MsgSafetyFundSpendAminoType extends AminoMsg {
  type: "/mars.safety.v1beta1.MsgSafetyFundSpend";
  value: {
    authority: string;
    recipient: string;
    amount: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/mars.safety.v1beta1.MsgSafetyFundSpend": {
    aminoType: "/mars.safety.v1beta1.MsgSafetyFundSpend",
    toAmino: ({
      authority,
      recipient,
      amount
    }: MsgSafetyFundSpend): MsgSafetyFundSpendAminoType["value"] => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      authority,
      recipient,
      amount
    }: MsgSafetyFundSpendAminoType["value"]): MsgSafetyFundSpend => {
      return {
        authority,
        recipient,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};