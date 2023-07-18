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
export declare const AminoConverter: {
    "/kava.pricefeed.v1beta1.MsgPostPrice": {
        aminoType: string;
        toAmino: ({ from, marketId, price, expiry }: MsgPostPrice) => MsgPostPriceAminoType["value"];
        fromAmino: ({ from, market_id, price, expiry }: MsgPostPriceAminoType["value"]) => MsgPostPrice;
    };
};
