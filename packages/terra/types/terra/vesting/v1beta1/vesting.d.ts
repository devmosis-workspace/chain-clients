import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BinaryWriter } from "../../../binary";
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccount {
    baseVestingAccount?: BaseVestingAccount;
    vestingSchedules: VestingSchedule[];
}
export interface LazyGradedVestingAccountProtoMsg {
    typeUrl: "/terra.vesting.v1beta1.LazyGradedVestingAccount";
    value: Uint8Array;
}
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccountAmino {
    base_vesting_account?: BaseVestingAccountAmino;
    vesting_schedules?: VestingScheduleAmino[];
}
export interface LazyGradedVestingAccountAminoMsg {
    type: "/terra.vesting.v1beta1.LazyGradedVestingAccount";
    value: LazyGradedVestingAccountAmino;
}
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccountSDKType {
    base_vesting_account?: BaseVestingAccountSDKType;
    vesting_schedules: VestingScheduleSDKType[];
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface Schedule {
    startTime: bigint;
    endTime: bigint;
    ratio: string;
}
export interface ScheduleProtoMsg {
    typeUrl: "/terra.vesting.v1beta1.Schedule";
    value: Uint8Array;
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface ScheduleAmino {
    start_time?: string;
    end_time?: string;
    ratio?: string;
}
export interface ScheduleAminoMsg {
    type: "/terra.vesting.v1beta1.Schedule";
    value: ScheduleAmino;
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface ScheduleSDKType {
    start_time: bigint;
    end_time: bigint;
    ratio: string;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingSchedule {
    denom: string;
    schedules: Schedule[];
}
export interface VestingScheduleProtoMsg {
    typeUrl: "/terra.vesting.v1beta1.VestingSchedule";
    value: Uint8Array;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingScheduleAmino {
    denom?: string;
    schedules?: ScheduleAmino[];
}
export interface VestingScheduleAminoMsg {
    type: "/terra.vesting.v1beta1.VestingSchedule";
    value: VestingScheduleAmino;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingScheduleSDKType {
    denom: string;
    schedules: ScheduleSDKType[];
}
export declare const LazyGradedVestingAccount: {
    typeUrl: string;
    encode(message: LazyGradedVestingAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): LazyGradedVestingAccount;
    fromPartial(object: Partial<LazyGradedVestingAccount>): LazyGradedVestingAccount;
    fromAmino(object: LazyGradedVestingAccountAmino): LazyGradedVestingAccount;
    toAmino(message: LazyGradedVestingAccount): LazyGradedVestingAccountAmino;
    fromAminoMsg(object: LazyGradedVestingAccountAminoMsg): LazyGradedVestingAccount;
    fromProtoMsg(message: LazyGradedVestingAccountProtoMsg): LazyGradedVestingAccount;
    toProto(message: LazyGradedVestingAccount): Uint8Array;
    toProtoMsg(message: LazyGradedVestingAccount): LazyGradedVestingAccountProtoMsg;
};
export declare const Schedule: {
    typeUrl: string;
    encode(message: Schedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Schedule;
    fromPartial(object: Partial<Schedule>): Schedule;
    fromAmino(object: ScheduleAmino): Schedule;
    toAmino(message: Schedule): ScheduleAmino;
    fromAminoMsg(object: ScheduleAminoMsg): Schedule;
    fromProtoMsg(message: ScheduleProtoMsg): Schedule;
    toProto(message: Schedule): Uint8Array;
    toProtoMsg(message: Schedule): ScheduleProtoMsg;
};
export declare const VestingSchedule: {
    typeUrl: string;
    encode(message: VestingSchedule, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): VestingSchedule;
    fromPartial(object: Partial<VestingSchedule>): VestingSchedule;
    fromAmino(object: VestingScheduleAmino): VestingSchedule;
    toAmino(message: VestingSchedule): VestingScheduleAmino;
    fromAminoMsg(object: VestingScheduleAminoMsg): VestingSchedule;
    fromProtoMsg(message: VestingScheduleProtoMsg): VestingSchedule;
    toProto(message: VestingSchedule): Uint8Array;
    toProtoMsg(message: VestingSchedule): VestingScheduleProtoMsg;
};
