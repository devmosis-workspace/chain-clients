import { Params, ParamsSDKType } from "./params";
import { TotalBurnedNeutronsAmount, TotalBurnedNeutronsAmountSDKType } from "./total_burned_neutrons_amount";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisState {
    params?: Params;
    totalBurnedNeutronsAmount?: TotalBurnedNeutronsAmount;
}
/** GenesisState defines the feeburner module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    total_burned_neutrons_amount?: TotalBurnedNeutronsAmountSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
