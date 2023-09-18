import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export const AminoConverter = {
  "/kyve.team.v1beta1.MsgClaimUnlocked": {
    aminoType: "/kyve.team.v1beta1.MsgClaimUnlocked",
    toAmino: MsgClaimUnlocked.toAmino,
    fromAmino: MsgClaimUnlocked.fromAmino
  },
  "/kyve.team.v1beta1.MsgClawback": {
    aminoType: "/kyve.team.v1beta1.MsgClawback",
    toAmino: MsgClawback.toAmino,
    fromAmino: MsgClawback.fromAmino
  },
  "/kyve.team.v1beta1.MsgCreateTeamVestingAccount": {
    aminoType: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
    toAmino: MsgCreateTeamVestingAccount.toAmino,
    fromAmino: MsgCreateTeamVestingAccount.fromAmino
  },
  "/kyve.team.v1beta1.MsgClaimAuthorityRewards": {
    aminoType: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
    toAmino: MsgClaimAuthorityRewards.toAmino,
    fromAmino: MsgClaimAuthorityRewards.fromAmino
  },
  "/kyve.team.v1beta1.MsgClaimAccountRewards": {
    aminoType: "/kyve.team.v1beta1.MsgClaimAccountRewards",
    toAmino: MsgClaimAccountRewards.toAmino,
    fromAmino: MsgClaimAccountRewards.fromAmino
  }
};