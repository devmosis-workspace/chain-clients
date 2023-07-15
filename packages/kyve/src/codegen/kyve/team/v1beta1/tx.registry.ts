import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgClaimUnlocked, MsgClawback, MsgCreateTeamVestingAccount, MsgClaimAuthorityRewards, MsgClaimAccountRewards } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/kyve.team.v1beta1.MsgClaimUnlocked", MsgClaimUnlocked], ["/kyve.team.v1beta1.MsgClawback", MsgClawback], ["/kyve.team.v1beta1.MsgCreateTeamVestingAccount", MsgCreateTeamVestingAccount], ["/kyve.team.v1beta1.MsgClaimAuthorityRewards", MsgClaimAuthorityRewards], ["/kyve.team.v1beta1.MsgClaimAccountRewards", MsgClaimAccountRewards]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    claimUnlocked(value: MsgClaimUnlocked) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
        value: MsgClaimUnlocked.encode(value).finish()
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClawback",
        value: MsgClawback.encode(value).finish()
      };
    },
    createTeamVestingAccount(value: MsgCreateTeamVestingAccount) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
        value: MsgCreateTeamVestingAccount.encode(value).finish()
      };
    },
    claimAuthorityRewards(value: MsgClaimAuthorityRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
        value: MsgClaimAuthorityRewards.encode(value).finish()
      };
    },
    claimAccountRewards(value: MsgClaimAccountRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
        value: MsgClaimAccountRewards.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    claimUnlocked(value: MsgClaimUnlocked) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
        value
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClawback",
        value
      };
    },
    createTeamVestingAccount(value: MsgCreateTeamVestingAccount) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
        value
      };
    },
    claimAuthorityRewards(value: MsgClaimAuthorityRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
        value
      };
    },
    claimAccountRewards(value: MsgClaimAccountRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
        value
      };
    }
  },
  fromJSON: {
    claimUnlocked(value: any) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
        value: MsgClaimUnlocked.fromJSON(value)
      };
    },
    clawback(value: any) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClawback",
        value: MsgClawback.fromJSON(value)
      };
    },
    createTeamVestingAccount(value: any) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
        value: MsgCreateTeamVestingAccount.fromJSON(value)
      };
    },
    claimAuthorityRewards(value: any) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
        value: MsgClaimAuthorityRewards.fromJSON(value)
      };
    },
    claimAccountRewards(value: any) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
        value: MsgClaimAccountRewards.fromJSON(value)
      };
    }
  },
  fromPartial: {
    claimUnlocked(value: MsgClaimUnlocked) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimUnlocked",
        value: MsgClaimUnlocked.fromPartial(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClawback",
        value: MsgClawback.fromPartial(value)
      };
    },
    createTeamVestingAccount(value: MsgCreateTeamVestingAccount) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgCreateTeamVestingAccount",
        value: MsgCreateTeamVestingAccount.fromPartial(value)
      };
    },
    claimAuthorityRewards(value: MsgClaimAuthorityRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAuthorityRewards",
        value: MsgClaimAuthorityRewards.fromPartial(value)
      };
    },
    claimAccountRewards(value: MsgClaimAccountRewards) {
      return {
        typeUrl: "/kyve.team.v1beta1.MsgClaimAccountRewards",
        value: MsgClaimAccountRewards.fromPartial(value)
      };
    }
  }
};