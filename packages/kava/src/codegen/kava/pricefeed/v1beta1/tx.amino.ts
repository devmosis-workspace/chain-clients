import { AminoMsg } from "@cosmjs/amino";
import { MsgPostPrice } from "./tx";
export interface MsgPostPriceAminoType extends AminoMsg {
  type: "/kava.pricefeed.v1beta1.MsgPostPrice";
  value: {
    from: string;
    market_id: string;
    price: string;
    expiry: {
      seconds: string;
      nanos: number;
    };
  };
}
export const AminoConverter = {
  "/kava.pricefeed.v1beta1.MsgPostPrice": {
    aminoType: "/kava.pricefeed.v1beta1.MsgPostPrice",
    toAmino: ({
      from,
      marketId,
      price,
      expiry
    }: MsgPostPrice): MsgPostPriceAminoType["value"] => {
      return {
        from,
        market_id: marketId,
        price,
        expiry
      };
    },
    fromAmino: ({
      from,
      market_id,
      price,
      expiry
    }: MsgPostPriceAminoType["value"]): MsgPostPrice => {
      return {
        from,
        marketId: market_id,
        price,
        expiry
      };
    }
  }
};