import { MsgPostPrice } from "./tx";
export declare const AminoConverter: {
    "/kava.pricefeed.v1beta1.MsgPostPrice": {
        aminoType: string;
        toAmino: (message: MsgPostPrice) => import("./tx").MsgPostPriceAmino;
        fromAmino: (object: import("./tx").MsgPostPriceAmino) => MsgPostPrice;
    };
};
