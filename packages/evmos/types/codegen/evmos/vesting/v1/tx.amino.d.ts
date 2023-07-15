import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateClawbackVestingAccount, MsgClawback, MsgUpdateVestingFunder, MsgConvertVestingAccount } from "./tx";
export interface MsgCreateClawbackVestingAccountAminoType extends AminoMsg {
    type: "/evmos.vesting.v1.MsgCreateClawbackVestingAccount";
    value: {
        from_address: string;
        to_address: string;
        start_time: {
            seconds: string;
            nanos: number;
        };
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
    type: "/evmos.vesting.v1.MsgClawback";
    value: {
        funder_address: string;
        account_address: string;
        dest_address: string;
    };
}
export interface MsgUpdateVestingFunderAminoType extends AminoMsg {
    type: "/evmos.vesting.v1.MsgUpdateVestingFunder";
    value: {
        funder_address: string;
        new_funder_address: string;
        vesting_address: string;
    };
}
export interface MsgConvertVestingAccountAminoType extends AminoMsg {
    type: "/evmos.vesting.v1.MsgConvertVestingAccount";
    value: {
        vesting_address: string;
    };
}
export declare const AminoConverter: {
    "/evmos.vesting.v1.MsgCreateClawbackVestingAccount": {
        aminoType: string;
        toAmino: ({ fromAddress, toAddress, startTime, lockupPeriods, vestingPeriods, merge }: MsgCreateClawbackVestingAccount) => MsgCreateClawbackVestingAccountAminoType["value"];
        fromAmino: ({ from_address, to_address, start_time, lockup_periods, vesting_periods, merge }: MsgCreateClawbackVestingAccountAminoType["value"]) => MsgCreateClawbackVestingAccount;
    };
    "/evmos.vesting.v1.MsgClawback": {
        aminoType: string;
        toAmino: ({ funderAddress, accountAddress, destAddress }: MsgClawback) => MsgClawbackAminoType["value"];
        fromAmino: ({ funder_address, account_address, dest_address }: MsgClawbackAminoType["value"]) => MsgClawback;
    };
    "/evmos.vesting.v1.MsgUpdateVestingFunder": {
        aminoType: string;
        toAmino: ({ funderAddress, newFunderAddress, vestingAddress }: MsgUpdateVestingFunder) => MsgUpdateVestingFunderAminoType["value"];
        fromAmino: ({ funder_address, new_funder_address, vesting_address }: MsgUpdateVestingFunderAminoType["value"]) => MsgUpdateVestingFunder;
    };
    "/evmos.vesting.v1.MsgConvertVestingAccount": {
        aminoType: string;
        toAmino: ({ vestingAddress }: MsgConvertVestingAccount) => MsgConvertVestingAccountAminoType["value"];
        fromAmino: ({ vesting_address }: MsgConvertVestingAccountAminoType["value"]) => MsgConvertVestingAccount;
    };
};
