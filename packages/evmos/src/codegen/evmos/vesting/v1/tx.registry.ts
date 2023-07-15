import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateClawbackVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/evmos.vesting.v1.MsgCreateClawbackVestingAccount", MsgCreateClawbackVestingAccount], ["/evmos.vesting.v1.MsgClawback", MsgClawback], ["/evmos.vesting.v1.MsgUpdateVestingFunder", MsgUpdateVestingFunder], ["/evmos.vesting.v1.MsgConvertVestingAccount", MsgConvertVestingAccount]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.encode(value).finish()
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.encode(value).finish()
      };
    },
    updateVestingFunder(value: MsgUpdateVestingFunder) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
        value: MsgUpdateVestingFunder.encode(value).finish()
      };
    },
    convertVestingAccount(value: MsgConvertVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
        value: MsgConvertVestingAccount.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value
      };
    },
    updateVestingFunder(value: MsgUpdateVestingFunder) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
        value
      };
    },
    convertVestingAccount(value: MsgConvertVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
        value
      };
    }
  },
  fromJSON: {
    createClawbackVestingAccount(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromJSON(value)
      };
    },
    clawback(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.fromJSON(value)
      };
    },
    updateVestingFunder(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
        value: MsgUpdateVestingFunder.fromJSON(value)
      };
    },
    convertVestingAccount(value: any) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
        value: MsgConvertVestingAccount.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createClawbackVestingAccount(value: MsgCreateClawbackVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount",
        value: MsgCreateClawbackVestingAccount.fromPartial(value)
      };
    },
    clawback(value: MsgClawback) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgClawback",
        value: MsgClawback.fromPartial(value)
      };
    },
    updateVestingFunder(value: MsgUpdateVestingFunder) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgUpdateVestingFunder",
        value: MsgUpdateVestingFunder.fromPartial(value)
      };
    },
    convertVestingAccount(value: MsgConvertVestingAccount) {
      return {
        typeUrl: "/evmos.vesting.v1.MsgConvertVestingAccount",
        value: MsgConvertVestingAccount.fromPartial(value)
      };
    }
  }
};