import { MsgPlaceBid } from "./tx";
export declare const AminoConverter: {
    "/kava.auction.v1beta1.MsgPlaceBid": {
        aminoType: string;
        toAmino: (message: MsgPlaceBid) => import("./tx").MsgPlaceBidAmino;
        fromAmino: (object: import("./tx").MsgPlaceBidAmino) => MsgPlaceBid;
    };
};
