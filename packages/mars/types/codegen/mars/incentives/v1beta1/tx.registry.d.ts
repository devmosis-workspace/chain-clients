import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateSchedule, MsgTerminateSchedules } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createSchedule(value: MsgCreateSchedule): {
            typeUrl: string;
            value: Uint8Array;
        };
        terminateSchedules(value: MsgTerminateSchedules): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        createSchedule(value: MsgCreateSchedule): {
            typeUrl: string;
            value: MsgCreateSchedule;
        };
        terminateSchedules(value: MsgTerminateSchedules): {
            typeUrl: string;
            value: MsgTerminateSchedules;
        };
    };
    fromJSON: {
        createSchedule(value: any): {
            typeUrl: string;
            value: MsgCreateSchedule;
        };
        terminateSchedules(value: any): {
            typeUrl: string;
            value: MsgTerminateSchedules;
        };
    };
    fromPartial: {
        createSchedule(value: MsgCreateSchedule): {
            typeUrl: string;
            value: MsgCreateSchedule;
        };
        terminateSchedules(value: MsgTerminateSchedules): {
            typeUrl: string;
            value: MsgTerminateSchedules;
        };
    };
};
