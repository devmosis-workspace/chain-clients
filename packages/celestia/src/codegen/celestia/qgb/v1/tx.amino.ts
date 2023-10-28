import { MsgRegisterEVMAddress } from "./tx";
export const AminoConverter = {
  "/celestia.qgb.v1.MsgRegisterEVMAddress": {
    aminoType: "/celestia.qgb.v1.MsgRegisterEVMAddress",
    toAmino: MsgRegisterEVMAddress.toAmino,
    fromAmino: MsgRegisterEVMAddress.fromAmino
  }
};