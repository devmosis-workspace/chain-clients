import * as _m0 from "protobufjs/minimal";
export interface Paused {
    paused: boolean;
}
export interface PausedSDKType {
    paused: boolean;
}
export declare const Paused: {
    encode(message: Paused, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Paused;
    fromPartial(object: Partial<Paused>): Paused;
};
