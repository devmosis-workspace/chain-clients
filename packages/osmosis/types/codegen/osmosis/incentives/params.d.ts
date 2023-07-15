import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the incentives module */
export interface Params {
    /**
     * distr_epoch_identifier is what epoch type distribution will be triggered by
     * (day, week, etc.)
     */
    distrEpochIdentifier: string;
}
/** Params holds parameters for the incentives module */
export interface ParamsSDKType {
    distr_epoch_identifier: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
