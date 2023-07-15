import { Params, ParamsSDKType } from "./params";
import { CallbackData, CallbackDataSDKType } from "./callback_data";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisState {
    params?: Params;
    portId: string;
    callbackDataList: CallbackData[];
}
/** GenesisState defines the icacallbacks module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    port_id: string;
    callback_data_list: CallbackDataSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
