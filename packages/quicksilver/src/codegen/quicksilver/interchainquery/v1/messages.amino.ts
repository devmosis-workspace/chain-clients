import { MsgSubmitQueryResponse } from "./messages";
export const AminoConverter = {
  "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse": {
    aminoType: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
    toAmino: MsgSubmitQueryResponse.toAmino,
    fromAmino: MsgSubmitQueryResponse.fromAmino
  }
};