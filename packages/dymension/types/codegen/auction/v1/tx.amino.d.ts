import { MsgSubmitBidRequest } from "./tx";
export declare const AminoConverter: {
    "/auction.v1.MsgSubmitBidRequest": {
        aminoType: string;
        toAmino: (message: MsgSubmitBidRequest) => import("./tx").MsgSubmitBidRequestAmino;
        fromAmino: (object: import("./tx").MsgSubmitBidRequestAmino) => MsgSubmitBidRequest;
    };
};
