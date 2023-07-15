import { AminoMsg } from "@cosmjs/amino";
import { MsgFundCommunityPool } from "./tx";
export interface MsgFundCommunityPoolAminoType extends AminoMsg {
  type: "/kava.community.v1beta1.MsgFundCommunityPool";
  value: {
    amount: {
      denom: string;
      amount: string;
    }[];
    depositor: string;
  };
}
export const AminoConverter = {
  "/kava.community.v1beta1.MsgFundCommunityPool": {
    aminoType: "/kava.community.v1beta1.MsgFundCommunityPool",
    toAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPool): MsgFundCommunityPoolAminoType["value"] => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    },
    fromAmino: ({
      amount,
      depositor
    }: MsgFundCommunityPoolAminoType["value"]): MsgFundCommunityPool => {
      return {
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        depositor
      };
    }
  }
};