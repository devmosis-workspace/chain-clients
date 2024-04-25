import { Params, ParamsAmino, ParamsSDKType } from "./global";
import { BinaryWriter } from "../../../binary";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams: Params;
    /** new_params is the module's new parameters. */
    newParams: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
export interface EventUpdateParamsProtoMsg {
    typeUrl: "/kyve.global.v1beta1.EventUpdateParams";
    value: Uint8Array;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsAmino {
    /** old_params is the module's old parameters. */
    old_params?: ParamsAmino;
    /** new_params is the module's new parameters. */
    new_params?: ParamsAmino;
    /** payload is the parameter updates that were performed. */
    payload?: string;
}
export interface EventUpdateParamsAminoMsg {
    type: "/kyve.global.v1beta1.EventUpdateParams";
    value: EventUpdateParamsAmino;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params: ParamsSDKType;
    new_params: ParamsSDKType;
    payload: string;
}
export declare const EventUpdateParams: {
    typeUrl: string;
    encode(message: EventUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
    fromAmino(object: EventUpdateParamsAmino): EventUpdateParams;
    toAmino(message: EventUpdateParams): EventUpdateParamsAmino;
    fromAminoMsg(object: EventUpdateParamsAminoMsg): EventUpdateParams;
    fromProtoMsg(message: EventUpdateParamsProtoMsg): EventUpdateParams;
    toProto(message: EventUpdateParams): Uint8Array;
    toProtoMsg(message: EventUpdateParams): EventUpdateParamsProtoMsg;
};
