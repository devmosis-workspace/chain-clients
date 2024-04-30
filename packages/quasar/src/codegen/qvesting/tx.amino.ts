import { MsgCreateVestingAccount } from "./tx";
export const AminoConverter = {
  "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount": {
    aminoType: "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount",
    toAmino: MsgCreateVestingAccount.toAmino,
    fromAmino: MsgCreateVestingAccount.fromAmino
  }
};