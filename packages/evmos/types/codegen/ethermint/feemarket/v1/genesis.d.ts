import { Params, ParamsSDKType } from "./feemarket";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the feemarket module. */
    params?: Params;
    /**
     * block_gas is the amount of gas wanted on the last block before the upgrade.
     * Zero by default.
     */
    blockGas: Long;
}
/** GenesisState defines the feemarket module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    block_gas: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
