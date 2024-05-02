import { MsgAuctionBid, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/pob.builder.v1.MsgAuctionBid": {
        aminoType: string;
        toAmino: (message: MsgAuctionBid) => import("./tx").MsgAuctionBidAmino;
        fromAmino: (object: import("./tx").MsgAuctionBidAmino) => MsgAuctionBid;
    };
    "/pob.builder.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
