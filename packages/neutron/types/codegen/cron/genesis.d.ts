import { Schedule, ScheduleAmino, ScheduleSDKType } from "./schedule";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryWriter } from "../binary";
/** GenesisState defines the cron module's genesis state. */
export interface GenesisState {
    scheduleList: Schedule[];
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.cron.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateAmino {
    scheduleList: ScheduleAmino[];
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/neutron.cron.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the cron module's genesis state. */
export interface GenesisStateSDKType {
    scheduleList: ScheduleSDKType[];
    params: ParamsSDKType;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
