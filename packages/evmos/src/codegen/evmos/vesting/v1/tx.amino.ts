import { MsgCreateClawbackVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export const AminoConverter = {
  "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
    aminoType: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
    toAmino: MsgCreateClawbackVestingAccount.toAmino,
    fromAmino: MsgCreateClawbackVestingAccount.fromAmino
  },
  "/evmos.vesting.v1.MsgClawback": {
    aminoType: "/evmos.vesting.v1.MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  },
  "/evmos.vesting.v1.MsgUpdateVestingFunder": {
    aminoType: "/evmos.vesting.v1.MsgUpdateVestingFunder",
    toAmino: MsgUpdateVestingFunder.toAmino,
    fromAmino: MsgUpdateVestingFunder.fromAmino
  },
  "/evmos.vesting.v1.MsgConvertVestingAccount": {
    aminoType: "/evmos.vesting.v1.MsgConvertVestingAccount",
    toAmino: MsgConvertVestingAccount.toAmino,
    fromAmino: MsgConvertVestingAccount.fromAmino
  }
};