import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: MsgCreateVestingAccount.toAmino,
    fromAmino: MsgCreateVestingAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
    aminoType: "cosmos-sdk/MsgCreatePermLockedAccount",
    toAmino: MsgCreatePermanentLockedAccount.toAmino,
    fromAmino: MsgCreatePermanentLockedAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreatePeriodicVestingAccount",
    toAmino: MsgCreatePeriodicVestingAccount.toAmino,
    fromAmino: MsgCreatePeriodicVestingAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateClawbackVestingAccount",
    toAmino: MsgCreateClawbackVestingAccount.toAmino,
    fromAmino: MsgCreateClawbackVestingAccount.fromAmino
  },
  "/cosmos.vesting.v1beta1.MsgClawback": {
    aminoType: "cosmos-sdk/MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  }
};