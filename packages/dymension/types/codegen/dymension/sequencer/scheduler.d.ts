import { OperatingStatus } from "./operating_status";
import { BinaryWriter } from "../../binary";
/** Scheduler defines the operating status of a sequencer */
export interface Scheduler {
    /** sequencerAddress is the bech32-encoded address of the sequencer account, identifying the sequencer */
    sequencerAddress: string;
    /** status is the operating status of this sequencer */
    status: OperatingStatus;
}
export interface SchedulerProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.Scheduler";
    value: Uint8Array;
}
/** Scheduler defines the operating status of a sequencer */
export interface SchedulerAmino {
    /** sequencerAddress is the bech32-encoded address of the sequencer account, identifying the sequencer */
    sequencerAddress?: string;
    /** status is the operating status of this sequencer */
    status?: OperatingStatus;
}
export interface SchedulerAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.Scheduler";
    value: SchedulerAmino;
}
/** Scheduler defines the operating status of a sequencer */
export interface SchedulerSDKType {
    sequencerAddress: string;
    status: OperatingStatus;
}
export declare const Scheduler: {
    typeUrl: string;
    encode(message: Scheduler, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Scheduler;
    fromPartial(object: Partial<Scheduler>): Scheduler;
    fromAmino(object: SchedulerAmino): Scheduler;
    toAmino(message: Scheduler): SchedulerAmino;
    fromAminoMsg(object: SchedulerAminoMsg): Scheduler;
    fromProtoMsg(message: SchedulerProtoMsg): Scheduler;
    toProto(message: Scheduler): Uint8Array;
    toProtoMsg(message: Scheduler): SchedulerProtoMsg;
};
