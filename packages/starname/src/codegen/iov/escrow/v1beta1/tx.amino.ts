import { MsgCreateEscrow, MsgUpdateEscrow, MsgTransferToEscrow, MsgRefundEscrow } from "./tx";
export const AminoConverter = {
  "/starnamed.x.escrow.v1beta1.MsgCreateEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgCreateEscrow",
    toAmino: MsgCreateEscrow.toAmino,
    fromAmino: MsgCreateEscrow.fromAmino
  },
  "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgUpdateEscrow",
    toAmino: MsgUpdateEscrow.toAmino,
    fromAmino: MsgUpdateEscrow.fromAmino
  },
  "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgTransferToEscrow",
    toAmino: MsgTransferToEscrow.toAmino,
    fromAmino: MsgTransferToEscrow.fromAmino
  },
  "/starnamed.x.escrow.v1beta1.MsgRefundEscrow": {
    aminoType: "/starnamed.x.escrow.v1beta1.MsgRefundEscrow",
    toAmino: MsgRefundEscrow.toAmino,
    fromAmino: MsgRefundEscrow.fromAmino
  }
};