import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateVestingAccount, MsgCreatePeriodicVestingAccount, MsgCreateClawbackVestingAccount, MsgClawback } from "./tx";
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
export interface MsgCreatePeriodicVestingAccountAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgCreatePeriodicVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        start_time: string;
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
export declare const AminoConverter: {
    "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, amount, endTime, delayed }: MsgCreateVestingAccount) => MsgCreateVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, amount, end_time, delayed }: MsgCreateVestingAccountAminoType["value"]) => MsgCreateVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, vestingPeriods, merge }: MsgCreatePeriodicVestingAccount) => MsgCreatePeriodicVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, start_time, vesting_periods, merge }: MsgCreatePeriodicVestingAccountAminoType["value"]) => MsgCreatePeriodicVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: MsgCreateClawbackVestingAccount) => MsgCreateClawbackVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: MsgCreateClawbackVestingAccountAminoType["value"]) => MsgCreateClawbackVestingAccount;
    };
    "/cosmos.vesting.v1beta1.MsgClawback": {
        aminoType: string;
        toAmino: ({ funderAddress, address, destAddress }: MsgClawback) => MsgClawbackAminoType["value"];
        fromAmino: ({ funder_address, address, dest_address }: MsgClawbackAminoType["value"]) => MsgClawback;
    };
};
