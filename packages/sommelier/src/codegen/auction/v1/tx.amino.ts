import { MsgSubmitBidRequest } from "./tx";
export const AminoConverter = {
  "/auction.v1.MsgSubmitBidRequest": {
    aminoType: "/auction.v1.MsgSubmitBidRequest",
    toAmino: MsgSubmitBidRequest.toAmino,
    fromAmino: MsgSubmitBidRequest.fromAmino
  }
};