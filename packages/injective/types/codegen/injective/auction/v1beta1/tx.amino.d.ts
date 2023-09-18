import { MsgBid, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.auction.v1beta1.MsgBid": {
        aminoType: string;
        toAmino: (message: MsgBid) => import("./tx").MsgBidAmino;
        fromAmino: (object: import("./tx").MsgBidAmino) => MsgBid;
    };
    "/injective.auction.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
