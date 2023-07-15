import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { MsgCreateVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
export interface MsgCreateVestingAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    amount: {
      denom: string;
      amount: string;
    }[];
    end_time: string;
    delayed: boolean;
  };
}
export interface MsgCreateClawbackVestingAccountAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgCreateClawbackVestingAccount";
  value: {
    from_address: string;
    to_address: string;
    start_time: string;
    lockup_periods: {
      length: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    }[];
    vesting_periods: {
      length: string;
      amount: {
        denom: string;
        amount: string;
      }[];
    }[];
    merge: boolean;
  };
}
export interface MsgClawbackAminoType extends AminoMsg {
  type: "cosmos-sdk/MsgClawback";
  value: {
    funder_address: string;
    address: string;
    dest_address: string;
  };
}
export const AminoConverter = {
  "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      amount,
      endTime,
      delayed
    }: MsgCreateVestingAccount): MsgCreateVestingAccountAminoType["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        end_time: endTime.toString(),
        delayed
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      amount,
      end_time,
      delayed
    }: MsgCreateVestingAccountAminoType["value"]): MsgCreateVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        amount: amount.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        endTime: Long.fromString(end_time),
        delayed
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
    aminoType: "cosmos-sdk/MsgCreateClawbackVestingAccount",
    toAmino: ({
      fromAddress,
      toAddress,
      startTime,
      lockupPeriods,
      vestingPeriods,
      merge
    }: MsgCreateClawbackVestingAccount): MsgCreateClawbackVestingAccountAminoType["value"] => {
      return {
        from_address: fromAddress,
        to_address: toAddress,
        start_time: startTime.toString(),
        lockup_periods: lockupPeriods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        vesting_periods: vestingPeriods.map(el0 => ({
          length: el0.length.toString(),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        merge
      };
    },
    fromAmino: ({
      from_address,
      to_address,
      start_time,
      lockup_periods,
      vesting_periods,
      merge
    }: MsgCreateClawbackVestingAccountAminoType["value"]): MsgCreateClawbackVestingAccount => {
      return {
        fromAddress: from_address,
        toAddress: to_address,
        startTime: Long.fromString(start_time),
        lockupPeriods: lockup_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        vestingPeriods: vesting_periods.map(el0 => ({
          length: Long.fromString(el0.length),
          amount: el0.amount.map(el1 => ({
            denom: el1.denom,
            amount: el1.amount
          }))
        })),
        merge
      };
    }
  },
  "/cosmos.vesting.v1beta1.MsgClawback": {
    aminoType: "cosmos-sdk/MsgClawback",
    toAmino: ({
      funderAddress,
      address,
      destAddress
    }: MsgClawback): MsgClawbackAminoType["value"] => {
      return {
        funder_address: funderAddress,
        address,
        dest_address: destAddress
      };
    },
    fromAmino: ({
      funder_address,
      address,
      dest_address
    }: MsgClawbackAminoType["value"]): MsgClawback => {
      return {
        funderAddress: funder_address,
        address,
        destAddress: dest_address
      };
    }
  }
};