import { BinaryWriter } from "../../binary";
export interface EventDataRoundState {
    height: bigint;
    round: number;
    step: string;
}
export interface EventDataRoundStateProtoMsg {
    typeUrl: "/tendermint.types.EventDataRoundState";
    value: Uint8Array;
}
export interface EventDataRoundStateAmino {
    height: string;
    round: number;
    step: string;
}
export interface EventDataRoundStateAminoMsg {
    type: "/tendermint.types.EventDataRoundState";
    value: EventDataRoundStateAmino;
}
export interface EventDataRoundStateSDKType {
    height: bigint;
    round: number;
    step: string;
}
export declare const EventDataRoundState: {
    typeUrl: string;
    encode(message: EventDataRoundState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventDataRoundState;
    fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState;
    fromAmino(object: EventDataRoundStateAmino): EventDataRoundState;
    toAmino(message: EventDataRoundState): EventDataRoundStateAmino;
    fromAminoMsg(object: EventDataRoundStateAminoMsg): EventDataRoundState;
    fromProtoMsg(message: EventDataRoundStateProtoMsg): EventDataRoundState;
    toProto(message: EventDataRoundState): Uint8Array;
    toProtoMsg(message: EventDataRoundState): EventDataRoundStateProtoMsg;
};
