import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface EventDataRoundState {
    height: Long;
    round: number;
    step: string;
}
export interface EventDataRoundStateSDKType {
    height: Long;
    round: number;
    step: string;
}
export declare const EventDataRoundState: {
    encode(message: EventDataRoundState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventDataRoundState;
    fromPartial(object: Partial<EventDataRoundState>): EventDataRoundState;
};
