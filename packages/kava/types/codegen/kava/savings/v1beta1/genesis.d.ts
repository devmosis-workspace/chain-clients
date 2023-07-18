import { Params, ParamsSDKType, Deposit, DepositSDKType } from "./store";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the savings module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    deposits: Deposit[];
}
/** GenesisState defines the savings module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    deposits: DepositSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
