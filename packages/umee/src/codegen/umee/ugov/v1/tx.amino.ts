import { AminoMsg } from "@cosmjs/amino";
import { MsgGovUpdateMinGasPrice } from "./tx";
export interface MsgGovUpdateMinGasPriceAminoType extends AminoMsg {
  type: "/umee.ugov.v1.MsgGovUpdateMinGasPrice";
  value: {
    authority: string;
    min_gas_price: {
      denom: string;
      amount: string;
    };
  };
}
export const AminoConverter = {
  "/umee.ugov.v1.MsgGovUpdateMinGasPrice": {
    aminoType: "/umee.ugov.v1.MsgGovUpdateMinGasPrice",
    toAmino: ({
      authority,
      minGasPrice
    }: MsgGovUpdateMinGasPrice): MsgGovUpdateMinGasPriceAminoType["value"] => {
      return {
        authority,
        min_gas_price: {
          denom: minGasPrice.denom,
          amount: minGasPrice.amount
        }
      };
    },
    fromAmino: ({
      authority,
      min_gas_price
    }: MsgGovUpdateMinGasPriceAminoType["value"]): MsgGovUpdateMinGasPrice => {
      return {
        authority,
        minGasPrice: {
          denom: min_gas_price.denom,
          amount: min_gas_price.amount
        }
      };
    }
  }
};