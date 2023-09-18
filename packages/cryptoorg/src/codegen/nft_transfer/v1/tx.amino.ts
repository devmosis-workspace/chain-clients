import { MsgTransfer } from "./tx";
export const AminoConverter = {
  "/chainmain.nft_transfer.v1.MsgTransfer": {
    aminoType: "/chainmain.nft_transfer.v1.MsgTransfer",
    toAmino: MsgTransfer.toAmino,
    fromAmino: MsgTransfer.fromAmino
  }
};