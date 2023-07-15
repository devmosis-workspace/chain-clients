import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current rewards information. */
    minter?: Minter;
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** current reduction period start epoch */
    reductionStartedEpoch: Long;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
    minter?: MinterSDKType;
    params?: ParamsSDKType;
    reduction_started_epoch: Long;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
