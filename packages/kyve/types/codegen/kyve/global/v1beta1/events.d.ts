import { Params, ParamsSDKType } from "./global";
import * as _m0 from "protobufjs/minimal";
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParams {
    /** old_params is the module's old parameters. */
    oldParams?: Params;
    /** new_params is the module's new parameters. */
    newParams?: Params;
    /** payload is the parameter updates that were performed. */
    payload: string;
}
/**
 * EventUpdateParams is an event emitted when the module parameters are updated.
 * emitted_by: MsgUpdateParams
 */
export interface EventUpdateParamsSDKType {
    old_params?: ParamsSDKType;
    new_params?: ParamsSDKType;
    payload: string;
}
export declare const EventUpdateParams: {
    encode(message: EventUpdateParams, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventUpdateParams;
    fromPartial(object: Partial<EventUpdateParams>): EventUpdateParams;
};
