import { MsgPayForBlobs } from "./tx";
export const AminoConverter = {
  "/celestia.blob.v1.MsgPayForBlobs": {
    aminoType: "/celestia.blob.v1.MsgPayForBlobs",
    toAmino: MsgPayForBlobs.toAmino,
    fromAmino: MsgPayForBlobs.fromAmino
  }
};