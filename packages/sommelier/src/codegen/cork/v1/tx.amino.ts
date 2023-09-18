import { MsgSubmitCorkRequest, MsgScheduleCorkRequest } from "./tx";
export const AminoConverter = {
  "/cork.v1.MsgSubmitCorkRequest": {
    aminoType: "/cork.v1.MsgSubmitCorkRequest",
    toAmino: MsgSubmitCorkRequest.toAmino,
    fromAmino: MsgSubmitCorkRequest.fromAmino
  },
  "/cork.v1.MsgScheduleCorkRequest": {
    aminoType: "/cork.v1.MsgScheduleCorkRequest",
    toAmino: MsgScheduleCorkRequest.toAmino,
    fromAmino: MsgScheduleCorkRequest.fromAmino
  }
};