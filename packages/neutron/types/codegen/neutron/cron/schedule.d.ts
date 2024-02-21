import { BinaryWriter } from "../../binary";
export interface Schedule {
    /** Name of schedule */
    name: string;
    /** Period in blocks */
    period: bigint;
    /** Msgs that will be executed every period amount of time */
    msgs: MsgExecuteContract[];
    /** Last execution's block height */
    lastExecuteHeight: bigint;
}
export interface ScheduleProtoMsg {
    typeUrl: "/neutron.cron.Schedule";
    value: Uint8Array;
}
export interface ScheduleAmino {
    /** Name of schedule */
    name?: string;
    /** Period in blocks */
    period?: string;
    /** Msgs that will be executed every period amount of time */
    msgs?: MsgExecuteContractAmino[];
    /** Last execution's block height */
    last_execute_height?: string;
}
export interface ScheduleAminoMsg {
    type: "/neutron.cron.Schedule";
    value: ScheduleAmino;
}
export interface ScheduleSDKType {
    name: string;
    period: bigint;
    msgs: MsgExecuteContractSDKType[];
    last_execute_height: bigint;
}
export interface MsgExecuteContract {
    /** Contract is the address of the smart contract */
    contract: string;
    /** Msg is json encoded message to be passed to the contract */
    msg: string;
}
export interface MsgExecuteContractProtoMsg {
    typeUrl: "/neutron.cron.MsgExecuteContract";
    value: Uint8Array;
}
export interface MsgExecuteContractAmino {
    /** Contract is the address of the smart contract */
    contract?: string;
    /** Msg is json encoded message to be passed to the contract */
    msg?: string;
}
export interface MsgExecuteContractAminoMsg {
    type: "/neutron.cron.MsgExecuteContract";
    value: MsgExecuteContractAmino;
}
export interface MsgExecuteContractSDKType {
    contract: string;
    msg: string;
}
export interface ScheduleCount {
    /** Count is the number of current schedules */
    count: number;
}
export interface ScheduleCountProtoMsg {
    typeUrl: "/neutron.cron.ScheduleCount";
    value: Uint8Array;
}
export interface ScheduleCountAmino {
    /** Count is the number of current schedules */
    count?: number;
}
export interface ScheduleCountAminoMsg {
    type: "/neutron.cron.ScheduleCount";
    value: ScheduleCountAmino;
}
export interface ScheduleCountSDKType {
    count: number;
}
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
export declare const MsgExecuteContract: {
    typeUrl: string;
    encode(message: MsgExecuteContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgExecuteContract;
    fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract;
    fromAmino(object: MsgExecuteContractAmino): MsgExecuteContract;
    toAmino(message: MsgExecuteContract): MsgExecuteContractAmino;
    fromAminoMsg(object: MsgExecuteContractAminoMsg): MsgExecuteContract;
    fromProtoMsg(message: MsgExecuteContractProtoMsg): MsgExecuteContract;
    toProto(message: MsgExecuteContract): Uint8Array;
    toProtoMsg(message: MsgExecuteContract): MsgExecuteContractProtoMsg;
};
export declare const ScheduleCount: {
    typeUrl: string;
    encode(message: ScheduleCount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ScheduleCount;
    fromPartial(object: Partial<ScheduleCount>): ScheduleCount;
    fromAmino(object: ScheduleCountAmino): ScheduleCount;
    toAmino(message: ScheduleCount): ScheduleCountAmino;
    fromAminoMsg(object: ScheduleCountAminoMsg): ScheduleCount;
    fromProtoMsg(message: ScheduleCountProtoMsg): ScheduleCount;
    toProto(message: ScheduleCount): Uint8Array;
    toProtoMsg(message: ScheduleCount): ScheduleCountProtoMsg;
};
