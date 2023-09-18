import { MsgSubmitQueryResponse } from "./messages";
export const AminoConverter = {
  "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
    aminoType: "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse",
    toAmino: MsgSubmitQueryResponse.toAmino,
    fromAmino: MsgSubmitQueryResponse.fromAmino
  }
};