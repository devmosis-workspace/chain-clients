import { MsgScheduleCorkRequest } from "./tx";
export const AminoConverter = {
  "/cork.v2.MsgScheduleCorkRequest": {
    aminoType: "/cork.v2.MsgScheduleCorkRequest",
    toAmino: MsgScheduleCorkRequest.toAmino,
    fromAmino: MsgScheduleCorkRequest.fromAmino
  }
};